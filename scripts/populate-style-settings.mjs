/**
 * Style Settings pipeline: extract YAML from theme CSS, then populate themes.json.
 *
 * Usage:
 *   node scripts/populate-style-settings.mjs              # populate themes.json from existing .yaml files
 *   node scripts/populate-style-settings.mjs --extract    # re-extract .yaml from theme.css first, then populate
 */
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  readdirSync,
  statSync,
} from "fs";
import { createRequire } from "module";
import { tmpdir } from "os";
import { join } from "path";
import { pathToFileURL } from "url";
import { build } from "esbuild";
import yaml from "js-yaml";
import { sanitizeFilenamePreservingEmojis as sanitize } from "../util/util.mjs";

const THEMES_JSON_PATH = "./themes.json";
const OBSIDIAN_DIR = "./obsidian";
const TEMP_PARSER_DIR = join(tmpdir(), "style-settings-fork");
const TEMP_PARSER_PATH = join(TEMP_PARSER_DIR, "StyleSettingsParser.bundle.mjs");

const shouldExtract = process.argv.includes("--extract");

const obsidianDirs = readdirSync(OBSIDIAN_DIR).filter((name) =>
  statSync(join(OBSIDIAN_DIR, name)).isDirectory(),
);

const require = createRequire(import.meta.url);
const parserEntryPoint = require.resolve(
  "obsidian-style-settings/src/StyleSettingsParser.ts",
);
mkdirSync(TEMP_PARSER_DIR, { recursive: true });

await build({
  entryPoints: [parserEntryPoint],
  outfile: TEMP_PARSER_PATH,
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node22",
  logLevel: "silent",
});

const {
  parseStyleSettingsStylesheetText,
  parseStyleSettingsStandaloneYamlText,
  buildNormalizedStyleSettingsSchema,
} = await import(pathToFileURL(TEMP_PARSER_PATH).href);

function toSerializable(value) {
  if (Array.isArray(value)) {
    return value.map(toSerializable);
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      if (child !== undefined) {
        out[key] = toSerializable(child);
      }
    }
    return out;
  }
  return value;
}

function parseCssToResult(css, sourceName) {
  return parseStyleSettingsStylesheetText(css, { sourceName });
}

function parseYamlToResult(yamlText, sourceName) {
  return parseStyleSettingsStandaloneYamlText(yamlText, {
    sourceName,
    defaultMode: "replace",
  });
}

function normalizeLooseYamlSections(raw) {
  if (Array.isArray(raw)) {
    return raw
      .filter((entry) => entry && typeof entry === "object")
      .map((entry) => ({
        name: entry.name || "",
        id: entry.id || "",
        collapsed: !!entry.collapsed,
        settings: Array.isArray(entry.settings) ? entry.settings : [],
      }));
  }

  if (raw && typeof raw === "object" && Array.isArray(raw.sections)) {
    return raw.sections
      .filter((entry) => entry && typeof entry === "object")
      .map((entry) => ({
        name: entry.name || "",
        id: entry.id || "",
        collapsed: !!entry.collapsed,
        settings: Array.isArray(entry.settings) ? entry.settings : [],
      }));
  }

  if (raw && typeof raw === "object") {
    return [
      {
        name: raw.name || "",
        id: raw.id || "",
        collapsed: !!raw.collapsed,
        settings: Array.isArray(raw.settings) ? raw.settings : [],
      },
    ];
  }

  return [];
}

function collectSettingIdsFromSections(sections) {
  const ids = new Set();
  for (const section of sections || []) {
    for (const setting of section.settings || []) {
      if (setting && typeof setting === "object" && setting.id) {
        ids.add(setting.id);
      }
    }
  }
  return ids;
}

function mergeMissingSettingsById(parsedSections, existingSections) {
  const merged = parsedSections.map((section) => ({
    ...section,
    settings: Array.isArray(section.settings) ? [...section.settings] : [],
  }));
  const parsedIds = collectSettingIdsFromSections(merged);
  const addedIds = [];

  for (const existingSection of existingSections) {
    const existingSettings = Array.isArray(existingSection.settings)
      ? existingSection.settings
      : [];
    for (const setting of existingSettings) {
      if (!setting || typeof setting !== "object" || !setting.id) {
        continue;
      }
      if (parsedIds.has(setting.id)) {
        continue;
      }

      let target =
        merged.find((section) => section.id === existingSection.id) ||
        merged.find((section) => section.name === existingSection.name) ||
        merged[0];

      if (!target) {
        target = {
          name: existingSection.name || "Style Settings",
          id: existingSection.id || "style-settings",
          collapsed: !!existingSection.collapsed,
          settings: [],
        };
        merged.push(target);
      }

      target.settings.push(setting);
      parsedIds.add(setting.id);
      addedIds.push(setting.id);
    }
  }

  return { sections: merged, addedIds };
}

function stripHeavySourceFields(source) {
  if (!source || typeof source !== "object") {
    return source;
  }
  const { rawYaml: _rawYaml, rawComment: _rawComment, ...lightweight } = source;
  return lightweight;
}

function sanitizeNormalizedSections(sections) {
  return (sections || []).map((section) => ({
    ...section,
    source: stripHeavySourceFields(section.source),
    settings: (section.settings || []).map((setting) => ({
      ...setting,
      source: stripHeavySourceFields(setting.source),
    })),
  }));
}

function sanitizeNormalizedDiagnostics(diagnostics) {
  return (diagnostics || []).map((diag) => ({
    ...diag,
    source: stripHeavySourceFields(diag.source),
  }));
}

function buildThemeStyleSettingsFromParsedResult(parsedResult) {
  const normalized = buildNormalizedStyleSettingsSchema(parsedResult);
  const sanitizedSections = sanitizeNormalizedSections(normalized.sections);
  const primary = sanitizedSections[0] || {};

  return {
    version: normalized.version,
    source: "saberzero1/obsidian-style-settings",
    sections: toSerializable(sanitizedSections),
    diagnostics: toSerializable(
      sanitizeNormalizedDiagnostics(normalized.diagnostics),
    ),
    // Compatibility field currently used by existing Quartz scripts.
    id: primary.id || "",
    name: primary.name || "",
  };
}

// --- Phase 1: Extract style-settings.yaml from theme.css ---

if (shouldExtract) {
  let extracted = 0;
  let unchanged = 0;
  let noSettings = 0;
  let recoveredSettings = 0;
  let diagnosticThemes = 0;

  for (const dirName of obsidianDirs) {
    const cssPath = join(OBSIDIAN_DIR, dirName, "theme.css");
    if (!existsSync(cssPath)) {
      noSettings++;
      continue;
    }

    const css = readFileSync(cssPath, "utf8");
    const yamlPath = join(OBSIDIAN_DIR, dirName, "style-settings.yaml");
    const existingYaml = existsSync(yamlPath) ? readFileSync(yamlPath, "utf8") : "";

    const parsedCss = parseCssToResult(css, `${dirName}/theme.css`);
    if ((parsedCss.diagnostics || []).length > 0) {
      diagnosticThemes++;
    }

    const parsedSections = parsedCss.sections || [];
    if (parsedSections.length === 0) {
      noSettings++;
      continue;
    }

    let existingSections = [];
    if (existingYaml) {
      try {
        existingSections = normalizeLooseYamlSections(yaml.load(existingYaml));
      } catch {
        existingSections = [];
      }
    }

    const { sections, addedIds } = mergeMissingSettingsById(
      parsedSections,
      existingSections,
    );
    recoveredSettings += addedIds.length;

    const sidecarDoc = {
      mode: "replace",
      sections: sections.map((section) => ({
        name: section.name,
        id: section.id,
        collapsed: !!section.collapsed,
        settings: (section.settings || []).map((setting) =>
          toSerializable({
            ...setting,
            source: undefined,
          }),
        ),
      })),
    };

    const yamlOut = yaml.dump(sidecarDoc, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      quotingType: "'",
      forceQuotes: false,
    });

    const existingIds = collectSettingIdsFromSections(existingSections);
    const outputIds = collectSettingIdsFromSections(sidecarDoc.sections);
    const droppedIds = [...existingIds].filter((id) => !outputIds.has(id));
    if (droppedIds.length > 0) {
      console.warn(
        `[style-settings] ${dirName}: possible ID drops after extraction (${droppedIds.length})`,
      );
    }

    if (yamlOut.trim() === existingYaml.trim()) {
      unchanged++;
    } else {
      writeFileSync(yamlPath, yamlOut);
      extracted++;
    }
  }

  console.log(
    `Extract: ${extracted} written, ${unchanged} unchanged, ${noSettings} themes without @settings.`,
  );
  console.log(
    `Extract diagnostics: ${diagnosticThemes} themes with parser diagnostics, ${recoveredSettings} legacy settings IDs recovered from existing sidecars.`,
  );
}

// --- Phase 2: Populate themes.json from style-settings.yaml ---

const themesJson = JSON.parse(readFileSync(THEMES_JSON_PATH, "utf-8"));

const slugToDirName = new Map();
for (const dirName of obsidianDirs) {
  const slug = sanitize(dirName);
  if (!slugToDirName.has(slug)) {
    slugToDirName.set(slug, dirName);
  }
}

let populated = 0;
let skipped = 0;
let populatedWithDiagnostics = 0;

for (const [themeSlug, themeMeta] of Object.entries(themesJson.themes)) {
  const dirName = slugToDirName.get(themeSlug);
  if (!dirName) {
    skipped++;
    continue;
  }

  const yamlPath = join(OBSIDIAN_DIR, dirName, "style-settings.yaml");
  if (!existsSync(yamlPath)) {
    skipped++;
    continue;
  }

  const yamlText = readFileSync(yamlPath, "utf8");
  let parsedYaml;
  try {
    parsedYaml = parseYamlToResult(yamlText, yamlPath);
  } catch {
    skipped++;
    continue;
  }

  const sections = parsedYaml.sections || [];
  if (!Array.isArray(sections) || sections.length === 0) {
    skipped++;
    continue;
  }

  const rawExistingSections = normalizeLooseYamlSections(yaml.load(yamlText));
  const rawIds = collectSettingIdsFromSections(rawExistingSections);
  const parsedIds = collectSettingIdsFromSections(sections);
  const droppedIds = [...rawIds].filter((id) => !parsedIds.has(id));
  if (droppedIds.length > 0) {
    console.warn(
      `[style-settings] ${themeSlug}: parser did not retain ${droppedIds.length} setting IDs from sidecar YAML`,
    );
  }

  if ((parsedYaml.diagnostics || []).length > 0) {
    populatedWithDiagnostics++;
  }

  themeMeta.style_settings = buildThemeStyleSettingsFromParsedResult(parsedYaml);
  populated++;
}

writeFileSync(THEMES_JSON_PATH, JSON.stringify(themesJson, null, 2) + "\n");
console.log(
  `Populate: ${populated} themes updated in themes.json, ${skipped} skipped.`,
);
console.log(
  `Populate diagnostics: ${populatedWithDiagnostics} themes include parser diagnostics in themes.json.style_settings.`,
);
