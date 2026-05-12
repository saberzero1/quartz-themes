#!/usr/bin/env node

import { execSync } from "child_process";
import {
  existsSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  unlinkSync,
} from "fs";
import { resolve, join } from "path";
import {
  extractStyleSettings,
  extractStyleSettingsFromFile,
  extractClassToggleCss,
} from "../../util/postcss-style-settings.mjs";
import { buildSelectorImpactGraph } from "../../util/style-settings-selector-impact.mjs";
import {
  RUNTIME_EVIDENCE_MODES,
  effectSettingIdsFromEffectRecords,
  enumerateRuntimeObservationPayloads,
  resolveRuntimeEvidenceModes,
  validateRuntimeEvidenceSidecar,
} from "../../util/style-settings-runtime-evidence.mjs";
import yaml from "js-yaml";

const VAULT_PATH = resolve("./runner/vault");
const RESULTS_DIR = resolve("./runner/results");
const OUTPUT_DIR = resolve(
  "./runner/scripts/tests/verification-results/style-settings",
);
const THEMES_JSON_PATH = resolve("./themes.json");
const OBSIDIAN_DIR = resolve("./obsidian");

const APPEARANCE_FILE = join(VAULT_PATH, ".obsidian/appearance.json");
const STYLE_SETTINGS_FILE = join(
  VAULT_PATH,
  ".obsidian/plugins/obsidian-style-settings/data.json",
);

const TEST_SET = [
  "anuppuccin",
  "blue-topaz",
  "minimal",
  "prism",
  "its-theme",
  "adrenaline",
  "shimmering-focus",
  "hidden-grotto",
];

/**
 * Representative extraction fixture files used for multi-surface runtime observation.
 * These mirror the key content surfaces from the extraction pipeline so that
 * computed-style diffs capture element-specific DOM surfaces (callouts, tables,
 * code blocks, etc.) rather than being limited to whatever single note happens
 * to be open.
 *
 * Kept small and deterministic: only the highest-value surfaces are included so
 * that the per-observation cycle cost stays bounded.
 */
const RUNTIME_EVIDENCE_FIXTURE_FILES = [
  "general.md",
  "headings.md",
  "callouts.md",
  "tables.md",
  "theme-code/syntax-samples.md",
  "theme-embeds/frontmatter.md",
];

const CLI_TIMEOUT = 180000;

function slugifyName(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function loadThemesJson() {
  if (!existsSync(THEMES_JSON_PATH)) return { themes: {} };
  return JSON.parse(readFileSync(THEMES_JSON_PATH, "utf-8"));
}

function resolveThemeFolderName(themeSlug) {
  const themesDir = join(VAULT_PATH, ".obsidian/themes");
  if (!existsSync(themesDir)) return null;

  const target = slugifyName(themeSlug);
  const dirs = readdirSync(themesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const exact = dirs.find((dir) => slugifyName(dir) === target);
  return exact || null;
}

function readThemeCss(themeSlug) {
  const folderName = resolveThemeFolderName(themeSlug);
  if (!folderName) {
    return { css: null, error: `Theme folder not found for ${themeSlug}` };
  }
  const cssPath = join(VAULT_PATH, ".obsidian/themes", folderName, "theme.css");
  if (!existsSync(cssPath)) {
    return { css: null, error: `theme.css not found for ${themeSlug}` };
  }
  return { css: readFileSync(cssPath, "utf-8"), error: null };
}

function flattenSettings(blocks) {
  return (blocks || []).flatMap((block) =>
    Array.isArray(block?.settings) ? block.settings : [],
  );
}

function getThemeSettings(themeEntry) {
  if (Array.isArray(themeEntry?.style_settings?.sections)) {
    return themeEntry.style_settings.sections.flatMap((section) =>
      Array.isArray(section?.settings) ? section.settings : [],
    );
  }
  if (Array.isArray(themeEntry?.style_settings?.settings)) {
    return themeEntry.style_settings.settings;
  }
  return [];
}

function getSettingTypeDistribution(settings) {
  const distribution = {};
  for (const setting of settings) {
    const type = setting?.type || "unknown";
    distribution[type] = (distribution[type] || 0) + 1;
  }
  return distribution;
}

function generateStyleSettingsDefaults(settings, mode) {
  const declarations = [];
  for (const setting of settings) {
    if (!setting || !setting.type) continue;
    if (setting.type === "variable-themed-color") {
      const defaultVal =
        mode === "dark" ? setting["default-dark"] : setting["default-light"];
      if (defaultVal && defaultVal !== "#" && defaultVal !== "") {
        if (setting.format === "hsl-split") {
          // hsl-split not useful as a raw hex default — skip
        } else {
          declarations.push(`  --${setting.id}: ${defaultVal};`);
        }
      }
    } else if (setting.type?.startsWith("variable-")) {
      if (setting.default !== undefined && setting.default !== "") {
        let value;
        if (
          setting.type === "variable-number" ||
          setting.type === "variable-number-slider"
        ) {
          value = `${setting.default}${setting.format || ""}`;
        } else {
          value = setting.default;
        }
        declarations.push(`  --${setting.id}: ${value};`);
      }
    }
  }
  return declarations.join("\n");
}

function findBlockContent(source, selector) {
  const idx = source.indexOf(selector);
  if (idx === -1) return "";
  const braceStart = source.indexOf("{", idx);
  if (braceStart === -1) return "";
  // Walk forward matching braces
  let depth = 0;
  let end = braceStart;
  for (let i = braceStart; i < source.length; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  return source.slice(braceStart + 1, end);
}

function parseStyleSettingsId(themeContent) {
  const arrayMatch = themeContent.match(/styleSettingsId:\s*\[([\s\S]*?)\]/);
  if (arrayMatch) {
    const ids = [];
    const regex = /"([^"]+)"/g;
    let match;
    while ((match = regex.exec(arrayMatch[1])) !== null) {
      ids.push(match[1]);
    }
    return ids;
  }
  const singleMatch = themeContent.match(/styleSettingsId:\s*["']([^"']+)["']/);
  return singleMatch ? [singleMatch[1]] : [];
}

function resolveStyleSettingsIds(themeEntry, themeFileContent) {
  const fromThemeEntry = themeEntry?.style_settings?.id;
  if (Array.isArray(fromThemeEntry) && fromThemeEntry.length > 0) {
    return fromThemeEntry.filter(Boolean);
  }
  if (typeof fromThemeEntry === "string" && fromThemeEntry.trim()) {
    return [fromThemeEntry.trim()];
  }
  return parseStyleSettingsId(themeFileContent || "");
}

function collectClassSettingsForGraph(themeSlug, settings) {
  const classIds = [];
  for (const setting of settings || []) {
    if (!setting?.type) continue;
    if (setting.type === "class-toggle" && setting.id) {
      classIds.push(setting.id);
    } else if (setting.type === "class-select" && Array.isArray(setting.options)) {
      for (const option of setting.options) {
        if (option?.value && option.value !== "none") classIds.push(option.value);
      }
    }
  }
  if (classIds.length === 0) return {};

  const { css } = readThemeCss(themeSlug);
  if (!css) return {};

  const output = {};
  for (const classId of classIds) {
    try {
      const [general, dark, light] = extractClassToggleCss(css, classId);
      if (!general && !dark && !light) continue;
      output[classId] = {};
      if (general) output[classId].general = general;
      if (dark) output[classId].dark = dark;
      if (light) output[classId].light = light;
    } catch {
      // Ignore malformed class extraction for this bounded verification helper.
    }
  }
  return output;
}

const RUNTIME_STYLE_PROPS = [
  "color",
  "background-color",
  "border-color",
  "font-size",
  "font-weight",
  "opacity",
  "display",
];
const MAX_RUNTIME_SELECTORS = 12;
const MAX_RUNTIME_CSS_VARIABLE_DIFFS = 80;
const MAX_RUNTIME_STYLE_DIFFS = 120;

async function captureRuntimeSnapshot(cli, selectors) {
  const selectorList = selectors.slice(0, MAX_RUNTIME_SELECTORS);
  return cli.eval(`
    (() => {
      const selectors = ${JSON.stringify(selectorList)};
      const styleProps = ${JSON.stringify(RUNTIME_STYLE_PROPS)};
      const bodyClasses = Array.from(document.body?.classList || []).sort();

      const cssVariables = {};
      const rootStyle = window.getComputedStyle(document.body || document.documentElement);
      for (const prop of Array.from(rootStyle)) {
        if (!prop.startsWith("--")) continue;
        const value = rootStyle.getPropertyValue(prop).trim();
        if (value) cssVariables[prop] = value;
      }

      const selectorStyles = {};
      for (const selector of selectors) {
        let el = null;
        try {
          el = document.querySelector(selector);
        } catch {
          // Ignore invalid selectors in bounded probes; selector validity is
          // already covered by static parsing and this snapshot is best-effort.
        }
        if (!el) continue;
        const computed = window.getComputedStyle(el);
        const values = {};
        for (const prop of styleProps) {
          const value = computed.getPropertyValue(prop).trim();
          if (value) values[prop] = value;
        }
        if (Object.keys(values).length > 0) selectorStyles[selector] = values;
      }

      return { bodyClasses, cssVariables, selectorStyles };
    })();
  `);
}

/**
 * Capture a runtime snapshot across multiple representative content surfaces
 * (extraction fixture files) and merge the results.
 *
 * This mirrors the extraction pipeline's multi-file strategy: opening general.md,
 * callouts.md, tables.md, etc. ensures that element-specific DOM surfaces
 * (callout blocks, data tables, code blocks, headings) are present in the view
 * when computed-style values are sampled.
 *
 * CSS custom-property and body-class values are invariant across files
 * (they are set on :root/body) so only the first successful file's values are
 * used for those; selectorStyles are merged across all files so every fixture's
 * DOM contribution is included in the diff.
 *
 * Files that don't exist or fail to load are silently skipped so that the
 * observation loop stays robust even when the vault is partially populated.
 *
 * @param {Object} cli - ObsidianCLI instance
 * @param {string[]} selectors - CSS selectors to observe computed styles on
 * @returns {Promise<{bodyClasses: string[], cssVariables: Record<string,string>, selectorStyles: Record<string, Record<string,string>>}>}
 */
async function captureMultiSurfaceRuntimeSnapshot(cli, selectors) {
  let merged = null;

  for (const file of RUNTIME_EVIDENCE_FIXTURE_FILES) {
    try {
      await cli.openFile(file);
      await cli.waitForReady({ timeout: 5000, interval: 300, label: file });
    } catch {
      // File may not exist or may fail to load — skip it gracefully.
      continue;
    }

    const snapshot = await captureRuntimeSnapshot(cli, selectors);
    if (!snapshot) continue;

    if (!merged) {
      merged = snapshot;
    } else {
      // Merge selectorStyles: later files can surface elements not found earlier.
      for (const [selector, styles] of Object.entries(snapshot.selectorStyles || {})) {
        if (!(selector in merged.selectorStyles)) {
          merged.selectorStyles[selector] = styles;
        }
      }
      // CSS variables and body classes are root-level and stable across views;
      // prefer the first captured values (already set in merged).
    }
  }

  // Fall back to a plain snapshot if no fixture file loaded successfully.
  return merged ?? (await captureRuntimeSnapshot(cli, selectors));
}

function diffRuntimeSnapshots(before, after) {
  const beforeClasses = new Set(before?.bodyClasses || []);
  const afterClasses = new Set(after?.bodyClasses || []);
  const changedBodyClasses = {
    added: [...afterClasses].filter((name) => !beforeClasses.has(name)).sort(),
    removed: [...beforeClasses]
      .filter((name) => !afterClasses.has(name))
      .sort(),
  };

  const beforeVars = before?.cssVariables || {};
  const afterVars = after?.cssVariables || {};
  const variableNames = new Set([...Object.keys(beforeVars), ...Object.keys(afterVars)]);
  const changedCssVariables = [...variableNames]
    .sort((a, b) => a.localeCompare(b))
    .flatMap((name) => {
      const prior = beforeVars[name] || "";
      const next = afterVars[name] || "";
      if (prior === next) return [];
      return [{ name, before: prior || undefined, after: next || undefined }];
    })
    .slice(0, MAX_RUNTIME_CSS_VARIABLE_DIFFS);

  const beforeStyles = before?.selectorStyles || {};
  const afterStyles = after?.selectorStyles || {};
  const selectors = new Set([
    ...Object.keys(beforeStyles),
    ...Object.keys(afterStyles),
  ]);
  const changedComputedStyles = [...selectors]
    .sort((a, b) => a.localeCompare(b))
    .flatMap((selector) => {
      const prior = beforeStyles[selector] || {};
      const next = afterStyles[selector] || {};
      const props = new Set([...Object.keys(prior), ...Object.keys(next)]);
      return [...props]
        .sort((a, b) => a.localeCompare(b))
        .flatMap((property) => {
          const beforeValue = prior[property] || "";
          const afterValue = next[property] || "";
          if (beforeValue === afterValue) return [];
          return [
            {
              selector,
              property,
              before: beforeValue || undefined,
              after: afterValue || undefined,
            },
          ];
        });
    })
    .slice(0, MAX_RUNTIME_STYLE_DIFFS);

  return { changedBodyClasses, changedCssVariables, changedComputedStyles };
}

function resolveObsidianDirName(themeSlug) {
  if (!existsSync(OBSIDIAN_DIR)) return null;
  const target = slugifyName(themeSlug);
  const dirs = readdirSync(OBSIDIAN_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  return dirs.find((dir) => slugifyName(dir) === target) || null;
}

function resolveThemeSlug(input, themesJson) {
  if (!input) return null;
  if (themesJson?.themes?.[input]) return input;
  const normalized = slugifyName(input);
  const match = Object.keys(themesJson?.themes || {}).find(
    (slug) => slugifyName(slug) === normalized,
  );
  return match || input;
}

function verifyYamlExtraction(themeSlug, themeEntry) {
  const { css, error } = readThemeCss(themeSlug);
  const failures = [];
  if (!css) {
    failures.push(error || "Theme CSS not found");
    return {
      pass: false,
      settingCount: 0,
      typeDistribution: {},
      blockCount: 0,
      blockIds: [],
      expectedHasSettings: false,
      failures,
    };
  }

  let blocks = [];
  try {
    blocks = extractStyleSettings(css) || [];
  } catch (err) {
    failures.push(`Extraction error: ${err.message}`);
  }

  const settings = flattenSettings(blocks);
  const settingCount = settings.length;
  const typeDistribution = getSettingTypeDistribution(settings);
  const blockIds = blocks.map((block) => block?.id).filter(Boolean);
  const blockCount = blocks.length;

  const expectedHasSettings = getThemeSettings(themeEntry).length > 0;

  let pass = true;
  if (expectedHasSettings && settingCount === 0) {
    pass = false;
    failures.push("Expected settings in CSS, found none");
  }
  if (!expectedHasSettings && settingCount > 0) {
    pass = false;
    failures.push("Expected no settings in CSS, found settings");
  }

  // Compare against stored YAML in obsidian/{DisplayName}/style-settings.yaml
  let yamlComparison = null;
  const obsidianDirName = resolveObsidianDirName(themeSlug);
  if (obsidianDirName) {
    const yamlPath = join(OBSIDIAN_DIR, obsidianDirName, "style-settings.yaml");
    if (existsSync(yamlPath)) {
      // The YAML file may be a single block object or an array of blocks
      let storedSettings = [];
      try {
        const raw = yaml.load(readFileSync(yamlPath, "utf-8"));
        if (Array.isArray(raw)) {
          // Array of blocks — flatten all settings
          storedSettings = raw.flatMap((b) =>
            Array.isArray(b?.settings) ? b.settings : [],
          );
        } else if (Array.isArray(raw?.sections)) {
          storedSettings = raw.sections.flatMap((b) =>
            Array.isArray(b?.settings) ? b.settings : [],
          );
        } else if (raw?.settings) {
          storedSettings = Array.isArray(raw.settings) ? raw.settings : [];
        }
      } catch {
        // Try the utility function as fallback
        const storedYaml = extractStyleSettingsFromFile(yamlPath);
        storedSettings = Array.isArray(storedYaml?.settings)
          ? storedYaml.settings
          : [];
      }
      const storedIds = new Set(
        storedSettings.map((s) => s?.id).filter(Boolean),
      );
      const extractedIds = new Set(settings.map((s) => s?.id).filter(Boolean));
      const missingFromYaml = Array.from(extractedIds).filter(
        (id) => !storedIds.has(id),
      );
      const missingFromCss = Array.from(storedIds).filter(
        (id) => !extractedIds.has(id),
      );
      yamlComparison = {
        yamlPath,
        storedCount: storedSettings.length,
        extractedCount: settingCount,
        missingFromYaml: missingFromYaml.length,
        missingFromCss: missingFromCss.length,
      };
      if (missingFromYaml.length > 0) {
        failures.push(
          `Settings in CSS but not in YAML: ${missingFromYaml.slice(0, 5).join(", ")}`,
        );
        pass = false;
      }
      if (missingFromCss.length > 0) {
        failures.push(
          `Settings in YAML but not in CSS: ${missingFromCss.slice(0, 5).join(", ")}`,
        );
        pass = false;
      }
    }
  }

  return {
    pass,
    settingCount,
    typeDistribution,
    blockCount,
    blockIds,
    expectedHasSettings,
    yamlComparison,
    failures,
  };
}

function verifyThemesJson(themeSlug, extractedSettings, blockIds, themeEntry) {
  const failures = [];
  const styleSettings = themeEntry?.style_settings || {};
  const storedSettings = Array.isArray(styleSettings.settings)
    ? styleSettings.settings
    : [];
  const storedIds = new Set(
    storedSettings.map((setting) => setting?.id).filter(Boolean),
  );
  const extractedIds = new Set(
    extractedSettings.map((setting) => setting?.id).filter(Boolean),
  );

  const storedCount = storedSettings.length;
  const extractedCount = extractedSettings.length;

  const primaryBlockId = blockIds.find(Boolean) || null;
  const idMatch = primaryBlockId
    ? styleSettings.id === primaryBlockId
    : !styleSettings.id;

  const missingInStored = Array.from(extractedIds).filter(
    (id) => !storedIds.has(id),
  );
  const missingInExtracted = Array.from(storedIds).filter(
    (id) => !extractedIds.has(id),
  );

  if (storedCount !== extractedCount) {
    failures.push(`Count mismatch: stored ${storedCount} vs ${extractedCount}`);
  }
  if (!idMatch) {
    failures.push(
      `Style settings id mismatch: stored ${styleSettings.id || "none"} vs ${
        primaryBlockId || "none"
      }`,
    );
  }
  if (missingInStored.length > 0) {
    failures.push(
      `Missing in themes.json: ${missingInStored.slice(0, 5).join(", ")}`,
    );
  }
  if (missingInExtracted.length > 0) {
    failures.push(
      `Missing in extracted: ${missingInExtracted.slice(0, 5).join(", ")}`,
    );
  }

  const pass = failures.length === 0;

  return {
    pass,
    storedCount,
    extractedCount,
    missingInStored,
    missingInExtracted,
    idMatch,
    failures,
  };
}

function verifyCompileDefaults(themeSlug, themeEntry) {
  const failures = [];
  const settings = getThemeSettings(themeEntry);

  if (settings.length === 0) {
    return {
      pass: true,
      tested: 0,
      emitted: 0,
      skipped: 0,
      failures,
      note: "No style settings configured",
    };
  }

  const lightDefaults = generateStyleSettingsDefaults(settings, "light");
  const darkDefaults = generateStyleSettingsDefaults(settings, "dark");
  const lightLines = lightDefaults ? lightDefaults.split("\n") : [];
  const darkLines = darkDefaults ? darkDefaults.split("\n") : [];

  const expectedLight = new Set(lightLines.filter(Boolean));
  const expectedDark = new Set(darkLines.filter(Boolean));

  const indexPath = join(RESULTS_DIR, themeSlug, "_index.scss");
  if (!existsSync(indexPath)) {
    failures.push(`Missing _index.scss at ${indexPath}`);
  }
  const indexContent = existsSync(indexPath)
    ? readFileSync(indexPath, "utf-8")
    : "";

  const lightBlock = findBlockContent(indexContent, ":root:root");
  const darkBlock = findBlockContent(
    indexContent,
    ':root:root[saved-theme="dark"]',
  );

  const emitted = expectedLight.size + expectedDark.size;
  let tested = 0;
  let skipped = 0;

  for (const setting of settings) {
    if (!setting || !setting.type) continue;
    tested += 1;
    const isVariable = setting.type?.startsWith("variable-");
    const isThemed = setting.type === "variable-themed-color";
    const declPattern = new RegExp(`--${setting.id}:`);

    if (!isVariable && !isThemed) {
      skipped += 1;
      if (declPattern.test(lightDefaults) || declPattern.test(darkDefaults)) {
        failures.push(
          `Non-variable setting emitted default: ${setting.id} (${setting.type})`,
        );
      }
      continue;
    }

    if (isThemed) {
      const lightDefault = setting["default-light"];
      const darkDefault = setting["default-dark"];
      const skipLight =
        setting.format === "hsl-split" ||
        !lightDefault ||
        lightDefault === "#" ||
        lightDefault === "";
      const skipDark =
        setting.format === "hsl-split" ||
        !darkDefault ||
        darkDefault === "#" ||
        darkDefault === "";
      if (skipLight) {
        skipped += 1;
        if (declPattern.test(lightDefaults)) {
          failures.push(
            `Themed color should be skipped in light: ${setting.id}`,
          );
        }
      }
      if (skipDark) {
        skipped += 1;
        if (declPattern.test(darkDefaults)) {
          failures.push(
            `Themed color should be skipped in dark: ${setting.id}`,
          );
        }
      }
    }
  }

  const normalizeValue = (s) =>
    s
      .toLowerCase()
      .replace(/['"]/g, "")
      .replace(/\s*,\s*/g, ",")
      .replace(/\s+/g, " ")
      .replace(/%0a/gi, "")
      .replace(/%0d/gi, "")
      .replace(/%20/gi, " ")
      .trim();

  const blockContains = (block, decl) => {
    // Exact match first
    if (block.includes(decl)) return true;
    // Case-insensitive (compile.js may lowercase hex colors)
    if (block.toLowerCase().includes(decl.toLowerCase())) return true;
    // Quote-insensitive (themes.json uses single quotes, compiled output may
    // use double quotes, and spacing around commas may differ)
    const declMatch = decl.match(/^\s*(--.+?):\s*(.+?);?\s*$/);
    if (declMatch) {
      const varName = declMatch[1];
      // Find the var declaration in the block
      const re = new RegExp(
        `${varName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*([^;]+);`,
        "i",
      );
      const found = block.match(re);
      if (found) {
        return normalizeValue(found[1]) === normalizeValue(declMatch[2]);
      }
    }
    return false;
  };

  for (const declaration of expectedLight) {
    if (!blockContains(lightDefaults, declaration)) {
      failures.push(`Light defaults missing: ${declaration.trim()}`);
    }
    if (lightBlock && !blockContains(lightBlock, declaration)) {
      failures.push(`Missing in :root:root: ${declaration.trim()}`);
    }
  }

  for (const declaration of expectedDark) {
    if (!blockContains(darkDefaults, declaration)) {
      failures.push(`Dark defaults missing: ${declaration.trim()}`);
    }
    if (darkBlock && !blockContains(darkBlock, declaration)) {
      failures.push(`Missing in dark block: ${declaration.trim()}`);
    }
  }

  if (expectedLight.size > 0 && !lightBlock) {
    failures.push("Missing :root:root block in _index.scss");
  }
  if (expectedDark.size > 0 && !darkBlock) {
    failures.push("Missing dark :root:root block in _index.scss");
  }

  return { pass: failures.length === 0, tested, emitted, skipped, failures };
}

function verifyClassSettings(themeSlug, themeEntry) {
  const failures = [];
  const classIds = [];
  const settings = getThemeSettings(themeEntry);

  for (const setting of settings) {
    if (!setting || !setting.type) continue;
    if (setting.type === "class-toggle") {
      if (setting.id) classIds.push(setting.id);
    } else if (setting.type === "class-select" && setting.options) {
      for (const opt of setting.options) {
        // Skip placeholder values like "none" that don't map to CSS classes
        if (opt?.value && opt.value !== "none") classIds.push(opt.value);
      }
    }
  }

  if (classIds.length === 0) {
    return {
      pass: true,
      classIds,
      extractedCount: 0,
      inGeneratedFile: false,
      missingFromGenerated: [],
      emptyExtractions: [],
      failures,
      note: "No class settings configured",
    };
  }

  const { css, error } = readThemeCss(themeSlug);
  if (!css) {
    failures.push(error || "Theme CSS not found");
  }

  const emptyExtractions = [];
  const extractedWithCss = [];
  for (const classId of classIds) {
    try {
      const [general, dark, light] = css
        ? extractClassToggleCss(css, classId)
        : ["", "", ""];
      if (general || dark || light) {
        extractedWithCss.push(classId);
      } else {
        emptyExtractions.push(classId);
      }
    } catch {
      emptyExtractions.push(classId);
    }
  }

  const generatedPath = resolve(`./plugin/src/themes/${themeSlug}.ts`);
  const generatedExists = existsSync(generatedPath);
  const generatedContent = generatedExists
    ? readFileSync(generatedPath, "utf-8")
    : "";
  const inGeneratedFile = generatedContent.includes("classSettings");

  const missingFromGenerated = extractedWithCss.filter(
    (id) => !generatedContent.includes(id),
  );

  if (!generatedExists) {
    failures.push(`Generated theme file missing: ${generatedPath}`);
  }
  if (extractedWithCss.length > 0 && !inGeneratedFile) {
    failures.push("classSettings block missing in generated theme file");
  }
  if (missingFromGenerated.length > 0) {
    failures.push(
      `Missing class settings in generated file: ${missingFromGenerated
        .slice(0, 5)
        .join(", ")}`,
    );
  }
  // Empty extractions are common — some class toggles activate via snippet
  // or their CSS is embedded in @media queries that PostCSS doesn't walk.
  // Report as a note, not a failure.
  const emptyNote =
    emptyExtractions.length > 0
      ? `${emptyExtractions.length} class IDs produced no CSS (may use snippets or @media)`
      : null;

  return {
    pass: failures.length === 0,
    classIds,
    extractedCount: extractedWithCss.length,
    inGeneratedFile,
    missingFromGenerated,
    emptyExtractions,
    ...(emptyNote ? { note: emptyNote } : {}),
    failures,
  };
}

async function loadProcessStyleSettings() {
  try {
    const mod = await import("../../plugin/src/styleSettings.ts");
    return mod.processStyleSettings;
  } catch {
    try {
      const mod = await import("../../plugin/dist/styleSettings.js");
      return mod.processStyleSettings;
    } catch {
      return null;
    }
  }
}

function verifyProcessStyleSettings(
  themeSlug,
  themeEntry,
  themeFileContent,
  processStyleSettings,
) {
  const failures = [];
  if (!processStyleSettings) {
    return {
      pass: true,
      tested: 0,
      passed: 0,
      failed: 0,
      failures,
      skipped: true,
      reason: "processStyleSettings not available",
    };
  }

  const styleSettingsIds = parseStyleSettingsId(themeFileContent || "");
  const themeId = styleSettingsIds[0];
  if (!themeId) {
    return {
      pass: true,
      tested: 0,
      passed: 0,
      failed: 0,
      failures,
      skipped: true,
      reason: "styleSettingsId not found in generated theme file",
    };
  }

  let tested = 0;
  let passed = 0;
  let failed = 0;

  const expect = (condition, message) => {
    tested += 1;
    if (condition) {
      passed += 1;
    } else {
      failed += 1;
      failures.push(message);
    }
  };

  const cssA = processStyleSettings(
    { [`${themeId}@@some-var`]: "test-value" },
    themeId,
  ).css;
  expect(
    cssA.includes("--some-var: test-value;"),
    "Variable override missing in output",
  );

  const cssB = processStyleSettings(
    {
      [`${themeId}@@accent@@light`]: "#aaa",
      [`${themeId}@@accent@@dark`]: "#bbb",
    },
    themeId,
  ).css;
  expect(
    /:root\s*\{[\s\S]*--accent:\s*#aaa;/.test(cssB),
    "Themed color light override missing",
  );
  expect(
    /:root\[saved-theme="dark"\]\s*\{[\s\S]*--accent:\s*#bbb;/.test(cssB),
    "Themed color dark override missing",
  );

  const cssC = processStyleSettings(
    { [`${themeId}@@font-size`]: 16 },
    themeId,
  ).css;
  expect(
    /:root\s*\{[\s\S]*--font-size:\s*16;/.test(cssC),
    "Non-themed variable missing in :root",
  );
  expect(
    /:root\[saved-theme="dark"\]\s*\{[\s\S]*--font-size:\s*16;/.test(cssC),
    "Non-themed variable missing in dark block",
  );

  const classSettingsMap = {
    "my-toggle": { general: ".my-toggle { --toggled: yes; }" },
  };
  const cssD = processStyleSettings(
    { [`${themeId}@@my-toggle`]: true },
    themeId,
    classSettingsMap,
  ).css;
  expect(
    /:root\s*\{[\s\S]*--toggled:\s*yes;/.test(cssD),
    "Class-toggle true did not inject CSS",
  );

  const cssE = processStyleSettings(
    { [`${themeId}@@my-toggle`]: false },
    themeId,
    classSettingsMap,
  ).css;
  expect(cssE.trim() === "", "Class-toggle false should emit no CSS");

  const classSelectMap = {
    "option-a": { general: ".option-a { --bg: red; }" },
  };
  const cssF = processStyleSettings(
    { [`${themeId}@@variant`]: "option-a" },
    themeId,
    classSelectMap,
  ).css;
  expect(
    /:root\s*\{[\s\S]*--bg:\s*red;/.test(cssF),
    "Class-select did not inject CSS",
  );

  const cssG = processStyleSettings(
    { [`${themeId}@@option`]: "unknown" },
    themeId,
    {},
  ).css;
  expect(
    /--option:\s*unknown;/.test(cssG),
    "Unknown class-select value did not fall back to variable",
  );

  const cssH = processStyleSettings(
    { "other-theme@@var": "x" },
    themeId,
    {},
  ).css;
  expect(cssH.trim() === "", "Non-matching theme id should emit no CSS");

  const cssI = processStyleSettings({}, themeId, {}).css;
  expect(cssI.trim() === "", "Empty input should emit no CSS");

  return { pass: failed === 0, tested, passed, failed, failures };
}

class ObsidianCLI {
  constructor(vaultPath) {
    this.vaultPath = vaultPath;
  }

  exec(command, options = {}) {
    const fullCommand = `obsidian ${command}`;
    const timeout = options.timeout || CLI_TIMEOUT;
    try {
      const result = execSync(fullCommand, {
        encoding: "utf-8",
        timeout,
        maxBuffer: 50 * 1024 * 1024,
        cwd: this.vaultPath,
        stdio: ["pipe", "pipe", "pipe"],
      });
      return result.trim();
    } catch (error) {
      if (error.killed) {
        throw new Error(`CLI timeout after ${timeout}ms: ${command}`);
      }
      throw new Error(`CLI failed: ${command}\n${error.message}`);
    }
  }

  async eval(code) {
    const escapedCode = code.replace(/'/g, "'\\''");
    let result = this.exec(`eval code='${escapedCode}'`);
    if (result.startsWith("=> ")) {
      result = result.slice(3);
    }
    try {
      return JSON.parse(result);
    } catch {
      return result;
    }
  }

  async setTheme(themeName) {
    if (themeName) {
      this.exec(`theme:set name="${themeName}"`);
    } else {
      await this.eval(`app.customCss.setTheme("");`);
    }
    await this.sleep(500);
  }

  async setColorMode(mode) {
    this.exec(`command id=theme:use-${mode}`);
    await this.sleep(500);
  }

  async waitForReady(options = {}) {
    const { timeout = 15000, interval = 500, label = "" } = options;
    const start = Date.now();
    while (Date.now() - start < timeout) {
      try {
        const status = await this.eval(`
          (() => {
            let ruleCount = 0;
            let sheetCount = 0;
            try {
              sheetCount = document.styleSheets.length;
              for (const sheet of document.styleSheets) {
                try {
                  const rules = sheet.cssRules || sheet.rules;
                  if (rules) ruleCount += rules.length;
                } catch (e) {}
              }
            } catch (e) {}
            const hasBody = !!document.body;
            const hasContent = !!document.querySelector(".workspace");
            return { sheetCount, ruleCount, hasBody, hasContent };
          })();
        `);
        if (
          status &&
          status.hasBody &&
          status.hasContent &&
          status.sheetCount > 0 &&
          status.ruleCount > 10
        ) {
          return true;
        }
      } catch {}
      await this.sleep(interval);
    }
    console.warn(
      `  waitForReady timed out after ${timeout}ms${label ? ` (${label})` : ""}`,
    );
    return false;
  }

  async reload() {
    this.exec("reload");
    await this.sleep(2000);
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

function configureVaultAppearance(themeSlug, mode) {
  const baseTheme = mode === "dark" ? "obsidian" : "moonstone";
  const folderName = resolveThemeFolderName(themeSlug) || themeSlug;
  const appearance = {
    baseFontSize: 16,
    theme: baseTheme,
    cssTheme: folderName,
    enabledCssSnippets: [],
    nativeMenus: false,
  };
  writeFileSync(APPEARANCE_FILE, JSON.stringify(appearance, null, 2));
}

function writeStyleSettingsData(data) {
  writeFileSync(STYLE_SETTINGS_FILE, JSON.stringify(data, null, 2));
}

function getRuntimeEvidenceSidecarPath(themeSlug, mode) {
  return join(RESULTS_DIR, themeSlug, `${mode}-style-settings-runtime-evidence.json`);
}

function getStaleRuntimeEvidenceModes(themeSlug, activeModes) {
  return RUNTIME_EVIDENCE_MODES.filter(
    (mode) =>
      !activeModes.includes(mode) && existsSync(getRuntimeEvidenceSidecarPath(themeSlug, mode)),
  );
}

function removeStaleRuntimeEvidenceSidecars(themeSlug, activeModes) {
  const removed = [];
  for (const mode of getStaleRuntimeEvidenceModes(themeSlug, activeModes)) {
    const sidecarPath = getRuntimeEvidenceSidecarPath(themeSlug, mode);
    try {
      unlinkSync(sidecarPath);
    } catch (error) {
      throw new Error(
        `Failed to remove stale runtime evidence sidecar ${sidecarPath}: ${error instanceof Error ? error.stack || error.message : String(error)}`,
      );
    }
    removed.push(sidecarPath);
  }
  return removed;
}

function buildRuntimeEvidencePlan(themeSlug, themeEntry, themeId, settings) {
  const modes = resolveRuntimeEvidenceModes(themeEntry?.modes);
  const effectRecords = Array.isArray(themeEntry?.style_settings?.effects)
    ? themeEntry.style_settings.effects
    : [];
  const classSettings = collectClassSettingsForGraph(themeSlug, settings);
  const { css, error } = readThemeCss(themeSlug);

  if (effectRecords.length > 0 && error) {
    return {
      modes,
      effectRecords,
      classSettings,
      observationPlans: [],
      error,
    };
  }

  const observationPlans = modes.map((mode) => {
    let selectorImpacts = {};
    let observationPayloads = [];

    if (effectRecords.length > 0) {
      const modeCss = mode === "dark" ? { dark: css || "" } : { light: css || "" };
      selectorImpacts = buildSelectorImpactGraph({
        effectRecords,
        classSettings,
        modeCss,
      });

      // Derive the eligible setting IDs directly from effect records — this is
      // CSS-independent and works even when the vault's theme.css is absent
      // (e.g. during preflight or first-run planning). The CSS-based
      // selectorImpacts graph is still built above for targeted DOM selector
      // observation during live runs; it is just no longer the gating filter
      // for whether a setting is included in the observation plan.
      const effectSettingIds = effectSettingIdsFromEffectRecords(effectRecords);
      observationPayloads = enumerateRuntimeObservationPayloads(
        themeId,
        settings,
        effectSettingIds,
      );
    }

    return {
      mode,
      modeCss: mode === "dark" ? { dark: css || "" } : { light: css || "" },
      selectorImpacts,
      observationPayloads,
      selectorImpactCount: Object.keys(selectorImpacts).length,
    };
  });

  return {
    modes,
    effectRecords,
    classSettings,
    observationPlans,
    error: null,
  };
}

function verifyRuntimeEvidencePreflight(themeSlug, themeEntry, themeFileContent) {
  const failures = [];
  const styleSettingsIds = resolveStyleSettingsIds(themeEntry, themeFileContent);
  const themeId = styleSettingsIds[0];
  if (!themeId) {
    return {
      pass: true,
      failures,
      skipped: true,
      reason: "styleSettingsId not found in generated theme file",
    };
  }

  const settings = getThemeSettings(themeEntry);
  if (settings.length === 0) {
    return {
      pass: true,
      failures,
      note: "No style settings configured",
    };
  }

  const plan = buildRuntimeEvidencePlan(themeSlug, themeEntry, themeId, settings);
  if (plan.error) {
    return {
      pass: false,
      failures: [plan.error],
    };
  }

  const staleModes = getStaleRuntimeEvidenceModes(themeSlug, plan.modes);
  if (staleModes.length > 0) {
    failures.push(
      `Stale runtime evidence sidecars for unsupported mode(s): ${staleModes.join(", ")}`,
    );
  }

  const perMode = {};
  let plannedObservations = 0;
  for (const { mode, selectorImpactCount, observationPayloads } of plan.observationPlans) {
    const sidecarPath = getRuntimeEvidenceSidecarPath(themeSlug, mode);
    const sidecarExists = existsSync(sidecarPath);
    const sidecarValidation = sidecarExists
      ? validateRuntimeEvidenceSidecar(
          JSON.parse(readFileSync(sidecarPath, "utf-8")),
          mode,
        )
      : null;

    if (sidecarValidation && !sidecarValidation.valid) {
      failures.push(
        `Runtime evidence sidecar hygiene failed for ${mode}: ${sidecarValidation.errors.join("; ")}`,
      );
    }

    plannedObservations += observationPayloads.length;
    perMode[mode] = {
      selectorImpactCount,
      plannedObservations: observationPayloads.length,
      sidecarExists,
      ...(sidecarValidation
        ? {
            sidecarRecordCount: sidecarValidation.recordCount,
            sidecarInvalidRecordCount: sidecarValidation.invalidRecordCount,
          }
        : {}),
    };
  }

  return {
    pass: failures.length === 0,
    failures,
    note: `Modes: ${plan.modes.join(", ")}; planned observations: ${plannedObservations}`,
    runtimeEvidenceReadiness: {
      themeId,
      modes: plan.modes,
      perMode,
      staleModes,
      plannedObservations,
    },
  };
}

async function runLiveModeSmokeChecks(
  cli,
  themeSlug,
  themeId,
  mode,
  variableSettings,
  classToggleSettings,
  classSelectSettings,
  expect,
) {
  for (const setting of variableSettings.slice(0, 3)) {
    const rawValue = setting.type === "variable-text" ? "test-value" : 12;
    const expectedValue =
      setting.type === "variable-text"
        ? rawValue
        : `${rawValue}${setting.format || ""}`;
    const payload = { [`${themeId}@@${setting.id}`]: expectedValue };
    writeStyleSettingsData(payload);
    await cli.reload();
    await cli.waitForReady({ label: `${themeSlug} ${mode} variable ${setting.id}` });

    const computed = await cli.eval(
      `getComputedStyle(document.body).getPropertyValue('--${setting.id}')`,
    );
    const normalized = String(computed || "").trim();
    expect(
      normalized === String(expectedValue).trim(),
      `Variable ${setting.id} (${mode}) expected ${expectedValue}, got ${normalized}`,
    );
  }

  for (const setting of classToggleSettings.slice(0, 2)) {
    writeStyleSettingsData({ [`${themeId}@@${setting.id}`]: true });
    await cli.reload();
    await cli.waitForReady({
      label: `${themeSlug} ${mode} class-toggle ${setting.id}`,
    });
    const hasClass = await cli.eval(
      `document.body.classList.contains("${setting.id}")`,
    );
    expect(Boolean(hasClass), `Class-toggle ${setting.id} (${mode}) not enabled`);

    writeStyleSettingsData({ [`${themeId}@@${setting.id}`]: false });
    await cli.reload();
    await cli.waitForReady({
      label: `${themeSlug} ${mode} class-toggle off ${setting.id}`,
    });
    const stillHasClass = await cli.eval(
      `document.body.classList.contains("${setting.id}")`,
    );
    expect(!Boolean(stillHasClass), `Class-toggle ${setting.id} (${mode}) not disabled`);
  }

  if (classSelectSettings.length > 0) {
    const setting = classSelectSettings[0];
    const options = (setting.options || []).slice(0, 2);
    for (const option of options) {
      if (!option?.value) continue;
      writeStyleSettingsData({ [`${themeId}@@${setting.id}`]: option.value });
      await cli.reload();
      await cli.waitForReady({
        label: `${themeSlug} ${mode} class-select ${setting.id}`,
      });
      const hasOption = await cli.eval(
        `document.body.classList.contains("${option.value}")`,
      );
      expect(
        Boolean(hasOption),
        `Class-select ${setting.id} (${mode}) missing class ${option.value}`,
      );
    }
  }

  writeStyleSettingsData({});
  await cli.reload();
  await cli.waitForReady({ label: `${themeSlug} ${mode} smoke reset` });
}

async function verifyLive(cli, themeSlug, themeEntry, themeFileContent) {
  const failures = [];
  const styleSettingsIds = resolveStyleSettingsIds(themeEntry, themeFileContent);
  const themeId = styleSettingsIds[0];
  if (!themeId) {
    return {
      pass: true,
      tested: 0,
      passed: 0,
      failures,
      skipped: true,
      reason: "styleSettingsId not found in generated theme file",
    };
  }

  const settings = getThemeSettings(themeEntry);
  if (settings.length === 0) {
    return {
      pass: true,
      tested: 0,
      passed: 0,
      failures,
      note: "No style settings configured",
    };
  }

  let tested = 0;
  let passed = 0;
  const runtimeEvidence = {
    modesObserved: [],
    perMode: {},
    totalSettingsObserved: 0,
    totalObservedImpactCount: 0,
    totalChangedCssVariableCount: 0,
    totalChangedComputedStyleCount: 0,
  };

  const expect = (condition, message) => {
    tested += 1;
    if (condition) {
      passed += 1;
    } else {
      failures.push(message);
    }
  };

  const variableSettings = settings.filter((setting) =>
    ["variable-number", "variable-number-slider", "variable-text"].includes(
      setting?.type,
    ),
  );
  const classToggleSettings = settings.filter(
    (setting) => setting?.type === "class-toggle",
  );
  const classSelectSettings = settings.filter(
    (setting) =>
      setting?.type === "class-select" && Array.isArray(setting.options),
  );

  const plan = buildRuntimeEvidencePlan(themeSlug, themeEntry, themeId, settings);
  if (plan.error) {
    failures.push(`Runtime evidence observation failed: ${plan.error}`);
  } else {
    const removedSidecars = removeStaleRuntimeEvidenceSidecars(themeSlug, plan.modes);
    if (removedSidecars.length > 0) {
      console.log(
        `  Removed stale runtime evidence sidecar(s): ${removedSidecars.join(", ")}`,
      );
    }

    for (const { mode, modeCss, selectorImpacts, observationPayloads } of plan.observationPlans) {
      configureVaultAppearance(themeSlug, mode);
      writeStyleSettingsData({});
      await cli.reload();
      await cli.waitForReady({ label: `${themeSlug} ${mode} baseline` });

      try {
        const sidecarRecords = [];
        const evidenceRecords = [];

        if (observationPayloads.length > 0) {
          console.log(
            `  Runtime evidence ${mode}: ${observationPayloads.length} planned single-setting observations`,
          );
        }

        for (let i = 0; i < observationPayloads.length; i += 1) {
          const observationPayload = observationPayloads[i];
          if (
            i === 0 ||
            i === observationPayloads.length - 1 ||
            (i + 1) % 25 === 0
          ) {
            console.log(
              `    ${mode} runtime evidence ${i + 1}/${observationPayloads.length}: ${observationPayload.settingId}`,
            );
          }

          const selectorsForSetting = Object.entries(selectorImpacts)
            .filter(([, record]) =>
              record.impacts.some(
                (impact) => impact.settingId === observationPayload.settingId,
              ),
            )
            .map(([selector]) => selector)
            .slice(0, MAX_RUNTIME_SELECTORS);

          const baselineSnapshot = await captureMultiSurfaceRuntimeSnapshot(
            cli,
            selectorsForSetting,
          );

          writeStyleSettingsData(observationPayload.payload);
          await cli.reload();
          await cli.waitForReady({
            label: `${themeSlug} ${mode} runtime evidence ${observationPayload.settingId}`,
          });

          const changedSnapshot = await captureMultiSurfaceRuntimeSnapshot(
            cli,
            selectorsForSetting,
          );

          const runtimeDiff = diffRuntimeSnapshots(baselineSnapshot, changedSnapshot);
          const observedAt = new Date().toISOString();

          sidecarRecords.push({
            observedAt,
            settingId: observationPayload.settingId,
            mode,
            selectors: selectorsForSetting,
            diff: runtimeDiff,
          });

          evidenceRecords.push({
            settingId: observationPayload.settingId,
            mode,
            ...runtimeDiff,
          });

          writeStyleSettingsData({});
          await cli.reload();
          await cli.waitForReady({
            label: `${themeSlug} ${mode} runtime evidence reset`,
          });
        }

        const evidenceGraph = buildSelectorImpactGraph({
          effectRecords: plan.effectRecords,
          classSettings: plan.classSettings,
          modeCss,
          runtimeEvidenceRecords: evidenceRecords,
        });

        const totalObservedImpactCount = Object.values(evidenceGraph).reduce(
          (count, record) =>
            count +
            record.impacts.filter((impact) => impact.runtimeEvidence?.observed)
              .length,
          0,
        );
        const totalChangedCssVariableCount = evidenceRecords.reduce(
          (sum, r) => sum + (r.changedCssVariables?.length || 0),
          0,
        );
        const totalChangedComputedStyleCount = evidenceRecords.reduce(
          (sum, r) => sum + (r.changedComputedStyles?.length || 0),
          0,
        );

        runtimeEvidence.modesObserved.push(mode);
        runtimeEvidence.perMode[mode] = {
          settingsObserved: sidecarRecords.length,
          totalObservedImpactCount,
          totalChangedCssVariableCount,
          totalChangedComputedStyleCount,
        };
        runtimeEvidence.totalSettingsObserved += sidecarRecords.length;
        runtimeEvidence.totalObservedImpactCount += totalObservedImpactCount;
        runtimeEvidence.totalChangedCssVariableCount += totalChangedCssVariableCount;
        runtimeEvidence.totalChangedComputedStyleCount += totalChangedComputedStyleCount;

        const evidenceOutputDir = join(RESULTS_DIR, themeSlug);
        mkdirSync(evidenceOutputDir, { recursive: true });
        const observedAt = new Date().toISOString();
        const sidecarPath = getRuntimeEvidenceSidecarPath(themeSlug, mode);
        if (sidecarRecords.length === 0) {
          if (existsSync(sidecarPath)) {
            try {
              unlinkSync(sidecarPath);
            } catch (error) {
              failures.push(
                `Failed to remove empty runtime evidence sidecar for ${mode}: ${error instanceof Error ? error.stack || error.message : String(error)}`,
              );
            }
          }
        } else {
          writeFileSync(
            sidecarPath,
            JSON.stringify(
              {
                formatVersion: 2,
                observedAt,
                mode,
                settingsObserved: sidecarRecords.length,
                totalObservedImpactCount,
                selectorImpacts: evidenceGraph,
                records: sidecarRecords,
                note: "Runtime evidence: bounded single-setting coverage across all eligible settings. Static impacts remain the inferred source-of-truth; runtime evidence is additive confirmation only.",
              },
              null,
              2,
            ),
          );
        }
      } catch (error) {
        failures.push(`Runtime evidence observation failed for ${mode}: ${error.message}`);
      }

      await runLiveModeSmokeChecks(
        cli,
        themeSlug,
        themeId,
        mode,
        variableSettings,
        classToggleSettings,
        classSelectSettings,
        expect,
      );
    }
  }

  return {
    pass: failures.length === 0,
    tested,
    passed,
    failures,
    ...(runtimeEvidence.modesObserved.length > 0 ? { runtimeEvidence } : {}),
  };
}

function collectFailureReasons(report) {
  const reasons = [];
  for (const stage of Object.values(report.stages || {})) {
    if (stage?.failures?.length) {
      reasons.push(...stage.failures);
    }
  }
  return reasons;
}

function generateSummary(reports, stages) {
  const summary = {
    timestamp: new Date().toISOString(),
    totalThemes: reports.length,
    stageTotals: {},
    commonFailures: [],
    worstThemes: [],
  };

  const failureCounts = {};
  const themeFailureCounts = {};

  for (const stageName of stages) {
    summary.stageTotals[stageName] = { pass: 0, fail: 0, skipped: 0 };
  }

  for (const report of reports) {
    const reasons = collectFailureReasons(report);
    themeFailureCounts[report.theme] = reasons.length;
    for (const reason of reasons) {
      failureCounts[reason] = (failureCounts[reason] || 0) + 1;
    }

    for (const stageName of stages) {
      const stage = report.stages?.[stageName];
      if (!stage) continue;
      if (stage.skipped === true) {
        summary.stageTotals[stageName].skipped += 1;
      } else if (stage.pass) {
        summary.stageTotals[stageName].pass += 1;
      } else {
        summary.stageTotals[stageName].fail += 1;
      }
    }
  }

  summary.commonFailures = Object.entries(failureCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([reason, count]) => ({ reason, count }));

  summary.worstThemes = Object.entries(themeFailureCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([theme, failures]) => ({ theme, failures }));

  mkdirSync(OUTPUT_DIR, { recursive: true });
  const summaryPath = join(OUTPUT_DIR, "_summary.json");
  writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  console.log(`\nSummary saved: ${summaryPath}`);
  return summary;
}

function printStageSummary(report) {
  const stageNames = Object.keys(report.stages || {});
  for (const stageName of stageNames) {
    const stage = report.stages[stageName];
    // skipped === true means the entire stage was skipped (not a count)
    const status =
      stage.skipped === true ? "SKIP" : stage.pass ? "PASS" : "FAIL";
    const note = stage.reason || stage.note || "";
    console.log(`  ${stageName}: ${status}${note ? `  (${note})` : ""}`);
  }
}

async function main() {
  console.log("=== Style Settings Verification ===\n");

  const args = process.argv.slice(2);
  const runLive = args.includes("--live");
  // Live verification always includes the preflight stage so the report captures
  // readiness/hygiene issues alongside the actual live extraction results.
  const runPreflight = args.includes("--preflight") || runLive;
  const isTestSet = args.includes("--test-set");
  const isAll = args.includes("--all");
  const themeArg = args.find((arg) => !arg.startsWith("--"));

  if (!isTestSet && !isAll && !themeArg) {
    console.log("Usage:");
    console.log('  node runner/scripts/verify-style-settings.mjs "theme-slug"');
    console.log("  node runner/scripts/verify-style-settings.mjs --test-set");
    console.log("  node runner/scripts/verify-style-settings.mjs --all");
    console.log("  node runner/scripts/verify-style-settings.mjs --all --preflight");
    console.log(
      "  node runner/scripts/verify-style-settings.mjs --test-set --live  # includes preflight",
    );
    process.exit(0);
  }

  if (runLive) {
    try {
      execSync("obsidian version", { encoding: "utf-8" });
    } catch {
      console.error("Obsidian CLI not available. Is Obsidian running?");
      process.exit(1);
    }
  }

  const themesJson = loadThemesJson();
  const themesMap = themesJson.themes || {};

  let themesToVerify = [];
  if (isTestSet) {
    themesToVerify = TEST_SET;
  } else if (isAll) {
    themesToVerify = Object.keys(themesMap);
  } else if (themeArg) {
    themesToVerify = [resolveThemeSlug(themeArg, themesJson)];
  }

  themesToVerify = themesToVerify.filter(Boolean);
  if (themesToVerify.length === 0) {
    console.error("No themes found to verify.");
    process.exit(1);
  }

  console.log(`Themes: ${themesToVerify.length}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Preflight: ${runPreflight ? "enabled" : "disabled"}`);
  console.log(`Live mode: ${runLive ? "enabled" : "disabled"}`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const processStyleSettings = await loadProcessStyleSettings();
  const cli = runLive ? new ObsidianCLI(VAULT_PATH) : null;

  const reports = [];
  let overallFailures = 0;

  for (let i = 0; i < themesToVerify.length; i += 1) {
    const themeSlug = themesToVerify[i];
    const themeEntry = themesMap[themeSlug] || {};
    const themeFilePath = resolve(`./plugin/src/themes/${themeSlug}.ts`);
    const themeFileContent = existsSync(themeFilePath)
      ? readFileSync(themeFilePath, "utf-8")
      : "";

    console.log(`\n[${i + 1}/${themesToVerify.length}] ${themeSlug}`);

    const stage1 = verifyYamlExtraction(themeSlug, themeEntry);
    const extractedBlocks = stage1.blockCount
      ? extractStyleSettings(readThemeCss(themeSlug).css || "")
      : [];
    const extractedSettings = flattenSettings(extractedBlocks);
    const stage2 = verifyThemesJson(
      themeSlug,
      extractedSettings,
      stage1.blockIds,
      themeEntry,
    );
    const stage3 = verifyCompileDefaults(themeSlug, themeEntry);
    const stage4 = verifyClassSettings(themeSlug, themeEntry);
    const stage5 = verifyProcessStyleSettings(
      themeSlug,
      themeEntry,
      themeFileContent,
      processStyleSettings,
    );

    let stage6 = null;
    if (runPreflight) {
      stage6 = verifyRuntimeEvidencePreflight(
        themeSlug,
        themeEntry,
        themeFileContent,
      );
    }

    let stage7 = null;
    if (runLive && cli) {
      stage7 = await verifyLive(cli, themeSlug, themeEntry, themeFileContent);
    }

    const stages = { stage1, stage2, stage3, stage4, stage5 };
    if (runPreflight && stage6) {
      stages.stage6 = stage6;
    }
    if (runLive && stage7) {
      stages.stage7 = stage7;
    }

    const report = {
      theme: themeSlug,
      timestamp: new Date().toISOString(),
      stages,
    };

    const stageFailures = collectFailureReasons(report);
    overallFailures += stageFailures.length;

    const reportPath = join(OUTPUT_DIR, `${themeSlug}-report.json`);
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    reports.push(report);
    console.log(`Report saved: ${reportPath}`);
    printStageSummary(report);
  }

  const stagesList = ["stage1", "stage2", "stage3", "stage4", "stage5"];
  if (runPreflight) stagesList.push("stage6");
  if (runLive) stagesList.push("stage7");
  const summary = generateSummary(reports, stagesList);

  if (summary.worstThemes.length > 0) {
    console.log("\nThemes with most failures:");
    for (const { theme, failures } of summary.worstThemes.slice(0, 5)) {
      console.log(`  ${theme}: ${failures} failures`);
    }
  }

  if (summary.commonFailures.length > 0) {
    console.log("\nMost common failure reasons:");
    for (const { reason, count } of summary.commonFailures.slice(0, 5)) {
      console.log(`  ${reason} (${count})`);
    }
  }

  process.exit(overallFailures > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error(`Fatal: ${error.message}`);
  process.exit(1);
});
