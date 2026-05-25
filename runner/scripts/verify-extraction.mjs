/**
 * Extraction Verification Script
 *
 * Independently fetches computed styles from Obsidian via CLI and compares
 * against stored extraction results to identify gaps in the extraction pipeline.
 *
 * Usage:
 *   node runner/scripts/verify-extraction.mjs "Tokyo Night"
 *   node runner/scripts/verify-extraction.mjs --test-set
 *   node runner/scripts/verify-extraction.mjs --all
 */

import { execSync } from "child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
  unlinkSync,
} from "fs";
import { resolve, join } from "path";
import { config } from "./config.js";
import { themes } from "../../config.mjs";
import { dirToKey, parseThemeId } from "../../extensions/extractor.mjs";
import { sanitizeFilenamePreservingEmojis as sanitize } from "../../util/util.mjs";

const VAULT_PATH = resolve("./runner/vault");
const RESULTS_DIR = resolve("./runner/results");
const BASELINE_DIR = join(RESULTS_DIR, "_baseline");
const OUTPUT_DIR = resolve("./runner/scripts/tests/verification-results");
const APPEARANCE_FILE = join(VAULT_PATH, ".obsidian/appearance.json");
const STYLE_SETTINGS_FILE = join(
  VAULT_PATH,
  ".obsidian/plugins/obsidian-style-settings/data.json",
);

const TEMP_RESULT_FILE = join(VAULT_PATH, ".verify-result.json");
const TEMP_SCRIPT_FILE = join(VAULT_PATH, ".verify-script.js");
const CLI_TIMEOUT = 180000;

// Same properties as cli-extractor.js
const STYLE_PROPERTIES = [
  "accent-color",
  "appearance",
  "background",
  "background-color",
  "backdrop-filter",
  "background-image",
  "border",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-color",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "box-shadow",
  "caret-color",
  "color",
  "column-rule-color",
  "cursor",
  "display",
  "fill",
  "filter",
  "font-family",
  "font-size",
  "font-style",
  "font-weight",
  "gap",
  "letter-spacing",
  "line-height",
  "list-style-type",
  "margin",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-top",
  "opacity",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow-x",
  "animation-name",
  "animation-duration",
  "animation-timing-function",
  "animation-delay",
  "animation-iteration-count",
  "animation-direction",
  "animation-fill-mode",
  "animation-play-state",
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "pointer-events",
  "position",
  "scrollbar-color",
  "scrollbar-width",
  "stroke",
  "text-align",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-shadow",
  "text-transform",
  "transform",
  "transition",
  "user-select",
  "vertical-align",
  "white-space",
  "width",
  "-webkit-mask-image",
  "-webkit-mask-position",
  "-webkit-mask-repeat",
  "-webkit-mask-size",
  "-webkit-backdrop-filter",
  "-webkit-text-stroke",
  "-webkit-text-stroke-width",
  "-webkit-text-stroke-color",
  "-webkit-text-fill-color",
  "-webkit-background-clip",
];

const EXTRACTION_FILES = [
  "general.md",
  "headings.md",
  "callouts.md",
  "integrations.md",
  "tables.md",
  "media.md",
  "embeds.md",
  "backlinks.md",
  "theme-embeds/frontmatter.md",
  "theme-embeds/note-embeds.md",
  "theme-embeds/tooltips.md",
  "theme-checkboxes/special.md",
  "theme-checkboxes/lower.md",
  "theme-checkboxes/upper.md",
  "theme-code/syntax-samples.md",
  "theme-properties/note-properties.md",
  "theme-canvas/test-canvas.canvas",
  "theme-bases/bases-table.md",
  "theme-bases/bases-list.md",
  "theme-bases/bases-cards.md",
];

// Test set: 20 themes spanning complexity levels
const TEST_SET = [
  // Simple (no classSettings, single mode)
  "80s-neon",
  "abate",
  "hackthebox",
  "adrenaline",
  "agate",
  // Medium (both modes or classSettings)
  "tokyo-night",
  "everforest",
  "dracula-for-obsidian",
  "nord",
  "obsidian-gruvbox",
  // Complex (heavy classSettings, many aspects)
  "minimal",
  "anuppuccin",
  "catppuccin",
  "blue-topaz",
  "its-theme",
  // Partially-mapped from prior audits
  "hidden-grotto",
  "origami",
  "prism",
  "shimmering-focus",
  "adwaita",
];

// --- CLI Wrapper ---

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

  async openFile(filePath) {
    this.exec(`open file="${filePath}"`);
    await this.sleep(300);
  }

  async loadWorkspace(name) {
    this.exec(`workspace:load name="${name}"`);
    await this.sleep(500);
  }

  async enablePlugin(pluginId) {
    try {
      this.exec(`plugin:enable id="${pluginId}"`);
    } catch {}
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

// --- Theme Resolution ---

function resolveThemeFolderName(themeName) {
  const themesDir = join(VAULT_PATH, ".obsidian/themes");
  if (!existsSync(themesDir)) return themeName;
  if (existsSync(join(themesDir, themeName))) return themeName;

  const { base: baseName } = parseThemeId(themeName, themes);

  const installedThemes = readdirSync(themesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const match = installedThemes.find(
    (t) =>
      sanitize(t) === baseName || t.toLowerCase() === baseName.toLowerCase(),
  );
  return match || themeName;
}

function getResultDirName(themeName) {
  const { base, variation } = parseThemeId(themeName, themes);
  const resolvedBase = sanitize(base);
  if (variation) {
    return `${resolvedBase}.${variation}`;
  }
  return resolvedBase;
}

function getThemeConfig(themeName) {
  if (themes[themeName]) return themes[themeName];
  const key = sanitize(themeName);
  return themes[key] || { modes: ["dark", "light"] };
}

function isDarkTheme(themeName) {
  return getThemeConfig(themeName).modes.includes("dark");
}

function isLightTheme(themeName) {
  return getThemeConfig(themeName).modes.includes("light");
}

// --- Vault Configuration ---

function configureVaultForTheme(themeName, mode, styleSettings = {}) {
  const baseTheme = mode === "dark" ? "obsidian" : "moonstone";
  const folderName = resolveThemeFolderName(themeName);
  const appearance = {
    baseFontSize: 16,
    theme: baseTheme,
    cssTheme: folderName,
    enabledCssSnippets: [],
    nativeMenus: false,
  };
  writeFileSync(APPEARANCE_FILE, JSON.stringify(appearance, null, 2));
  writeFileSync(STYLE_SETTINGS_FILE, JSON.stringify(styleSettings, null, 2));
}

function resetVaultConfig() {
  const defaultAppearance = {
    theme: "obsidian",
    cssTheme: "",
    enabledCssSnippets: [],
    nativeMenus: false,
  };
  writeFileSync(APPEARANCE_FILE, JSON.stringify(defaultAppearance, null, 2));
  writeFileSync(STYLE_SETTINGS_FILE, "{}");
}

// --- Extraction Script Generation ---

function buildSelectors() {
  return [
    ...new Set(
      config.filter((c) => c.obsidianSelector).map((c) => c.obsidianSelector),
    ),
  ];
}

/**
 * Generate a verification extraction script.
 * Unlike cli-extractor.js, this does NOT deduplicate against baseline.
 * We capture raw computed values for later comparison.
 */
function generateVerificationScript(selectors) {
  return `
(function() {
  const fs = require("fs");
  const RESULT_FILE = ${JSON.stringify(TEMP_RESULT_FILE)};

  try {
    const selectors = ${JSON.stringify(selectors)};
    const styleProps = ${JSON.stringify(STYLE_PROPERTIES)};
    const results = {};

    function discoverCssVarNames() {
      const varNames = new Set();
      try {
        for (const sheet of document.styleSheets) {
          try {
            const rules = sheet.cssRules || sheet.rules;
            if (!rules) continue;
            for (const rule of rules) {
              if (rule.style) {
                for (let i = 0; i < rule.style.length; i++) {
                  const prop = rule.style[i];
                  if (prop.startsWith("--")) {
                    varNames.add(prop);
                  }
                }
              }
              if (rule.cssRules) {
                for (const nested of rule.cssRules) {
                  if (nested.style) {
                    for (let i = 0; i < nested.style.length; i++) {
                      const prop = nested.style[i];
                      if (prop.startsWith("--")) {
                        varNames.add(prop);
                      }
                    }
                  }
                }
              }
            }
          } catch (e) {}
        }
      } catch (e) {}
      return varNames;
    }

    const allVarNames = discoverCssVarNames();

    function getAllCssVars(style) {
      const vars = {};
      for (const prop of allVarNames) {
        const val = style.getPropertyValue(prop);
        if (val && val.trim()) {
          vars[prop] = val.trim();
        }
      }
      return vars;
    }

    function getStandardProps(style) {
      const props = {};
      for (const prop of styleProps) {
        const val = style.getPropertyValue(prop);
        if (val && val.trim() && val !== "none" && val !== "normal" && val !== "auto") {
          props[prop] = val.trim();
        }
      }
      return props;
    }

    // Extract from body
    const bodyStyle = window.getComputedStyle(document.body);
    results["body"] = { ...getAllCssVars(bodyStyle), ...getStandardProps(bodyStyle) };

    // Extract from html
    const htmlStyle = window.getComputedStyle(document.documentElement);
    const htmlExtracted = { ...getAllCssVars(htmlStyle), ...getStandardProps(htmlStyle) };
    if (Object.keys(htmlExtracted).length > 0) {
      results["html"] = htmlExtracted;
    }

    // Extract from each selector
    for (const selector of selectors) {
      try {
        const el = document.querySelector(selector);
        if (!el) continue;
        const style = window.getComputedStyle(el);
        const extracted = { ...getAllCssVars(style), ...getStandardProps(style) };
        if (Object.keys(extracted).length > 0) {
          results[selector] = extracted;
        }
      } catch (e) {}
    }

    fs.writeFileSync(RESULT_FILE, JSON.stringify(results, null, 2));
    return Object.keys(results).length;
  } catch (err) {
    try {
      fs.writeFileSync(RESULT_FILE, JSON.stringify({ error: err.message || String(err) }));
    } catch (e) {}
    return -1;
  }
})();
`;
}

// --- Live Extraction ---

async function fetchLiveStyles(cli, selectors) {
  const script = generateVerificationScript(selectors);
  writeFileSync(TEMP_SCRIPT_FILE, script);

  try {
    if (existsSync(TEMP_RESULT_FILE)) unlinkSync(TEMP_RESULT_FILE);
  } catch {}

  const loadAndRun = `
    try {
      const fs = require("fs");
      const scriptContent = fs.readFileSync(${JSON.stringify(TEMP_SCRIPT_FILE)}, "utf-8");
      eval(scriptContent);
    } catch (e) {
      require("fs").writeFileSync(
        ${JSON.stringify(TEMP_RESULT_FILE)},
        JSON.stringify({ error: e.message || String(e) })
      );
    }
  `;
  await cli.eval(loadAndRun);

  // Poll for result
  const pollTimeout = 10000;
  const pollInterval = 200;
  const pollStart = Date.now();
  while (Date.now() - pollStart < pollTimeout) {
    if (existsSync(TEMP_RESULT_FILE)) break;
    await cli.sleep(pollInterval);
  }

  if (existsSync(TEMP_RESULT_FILE)) {
    const content = readFileSync(TEMP_RESULT_FILE, "utf-8");
    try {
      if (existsSync(TEMP_SCRIPT_FILE)) unlinkSync(TEMP_SCRIPT_FILE);
    } catch {}
    try {
      if (existsSync(TEMP_RESULT_FILE)) unlinkSync(TEMP_RESULT_FILE);
    } catch {}

    try {
      const parsed = JSON.parse(content);
      if (parsed.error) {
        console.warn(`    Live extraction error: ${parsed.error}`);
        return null;
      }
      return parsed;
    } catch (e) {
      console.warn(`    Failed to parse live extraction result: ${e.message}`);
      return null;
    }
  }

  console.warn("    Live extraction: result file not found (timeout)");
  return null;
}

// --- Comparison Logic ---

/**
 * Normalize a CSS value for comparison.
 * The stored extraction uses resolveAuthoredValue() which preserves var() wrappers
 * like "var(--bg-primary, rgb(30, 30, 46))". The live extraction returns raw
 * computed values like "rgb(30, 30, 46)". We need to compare the inner value.
 */
function normalizeForComparison(value) {
  if (typeof value !== "string") return String(value);
  // Extract fallback from var(--name, fallback)
  const varMatch = value.match(/^var\([^,]+,\s*(.+)\)$/);
  if (varMatch) return varMatch[1].trim();
  return value.trim();
}

function valuesMatch(a, b) {
  if (a === b) return true;
  return normalizeForComparison(a) === normalizeForComparison(b);
}

function compareResults(live, stored, baseline) {
  const diff = {
    missingSelectors: [],
    missingProperties: [],
    valueMismatches: [],
    missingCssVars: [],
    correctlyDeduped: 0,
    selectorsOnlyInStored: [],
  };

  if (!live || !stored) return diff;

  // Check body CSS variables specifically
  const liveBody = live["body"] || {};
  const storedBody = stored["body"] || {};
  const baselineBody = baseline?.["body"] || {};

  const liveCssVars = Object.keys(liveBody).filter((k) => k.startsWith("--"));
  const storedCssVars = Object.keys(storedBody).filter((k) =>
    k.startsWith("--"),
  );
  const storedCssVarSet = new Set(storedCssVars);

  for (const varName of liveCssVars) {
    if (storedCssVarSet.has(varName)) continue;

    const liveValue = liveBody[varName];
    const baselineValue = baselineBody[varName];

    if (baselineValue && valuesMatch(baselineValue, liveValue)) {
      // Correctly removed by baseline deduplication
      diff.correctlyDeduped++;
      continue;
    }

    // This variable is in live DOM, differs from baseline, but missing from stored
    diff.missingCssVars.push({
      variable: varName,
      liveValue,
      inBaseline: !!baselineValue,
      baselineValue: baselineValue || null,
    });
  }

  // Check each selector in live results
  for (const [selector, liveStyles] of Object.entries(live)) {
    if (selector === "body" || selector === "html") continue;

    const storedStyles = stored[selector];

    if (!storedStyles) {
      // Check if all properties match baseline (correctly omitted)
      const baselineStyles = baseline?.[selector] || {};
      const nonBaselineProps = Object.entries(liveStyles).filter(
        ([prop, val]) => !valuesMatch(baselineStyles[prop], val),
      );

      if (nonBaselineProps.length === 0) {
        // All values match baseline — correctly omitted
        diff.correctlyDeduped++;
        continue;
      }

      diff.missingSelectors.push({
        selector,
        propertiesInLive: nonBaselineProps.length,
        sampleProperties: nonBaselineProps
          .slice(0, 5)
          .map(([p, v]) => ({
            property: p,
            value: typeof v === "string" ? v.slice(0, 80) : String(v),
          })),
      });
      continue;
    }

    // Check properties within the selector
    for (const [prop, liveValue] of Object.entries(liveStyles)) {
      const storedValue = storedStyles[prop];
      const baselineStyles = baseline?.[selector] || {};
      const baselineValue = baselineStyles[prop];

      if (storedValue === undefined) {
        // Property missing from stored result
        if (baselineValue && valuesMatch(baselineValue, liveValue)) {
          diff.correctlyDeduped++;
          continue;
        }

        diff.missingProperties.push({
          selector,
          property: prop,
          liveValue:
            typeof liveValue === "string"
              ? liveValue.slice(0, 80)
              : String(liveValue),
          inBaseline: !!baselineValue,
        });
        continue;
      }

      // Both have the property — check for value mismatch
      if (!valuesMatch(storedValue, liveValue)) {
        diff.valueMismatches.push({
          selector,
          property: prop,
          liveValue:
            typeof liveValue === "string"
              ? liveValue.slice(0, 80)
              : String(liveValue),
          storedValue:
            typeof storedValue === "string"
              ? storedValue.slice(0, 80)
              : String(storedValue),
        });
      }
    }
  }

  // Check selectors only in stored (not found in live)
  for (const selector of Object.keys(stored)) {
    if (selector === "body" || selector === "html") continue;
    if (!live[selector]) {
      diff.selectorsOnlyInStored.push(selector);
    }
  }

  return diff;
}

// --- Main Verification Flow ---

async function verifyTheme(cli, themeName, selectors) {
  const themeConfig = getThemeConfig(themeName);
  const resultDirName = getResultDirName(themeName);
  const resultDir = join(RESULTS_DIR, resultDirName);

  const supportsDark = isDarkTheme(themeName);
  const supportsLight = isLightTheme(themeName);
  const modes = [];
  if (supportsDark) modes.push("dark");
  if (supportsLight) modes.push("light");

  console.log(`\nVerifying: ${themeName} (modes: ${modes.join(", ")})`);

  const results = [];

  for (const mode of modes) {
    console.log(`  ${mode} mode...`);

    // Check if stored result exists
    const storedPath = join(resultDir, `${mode}.json`);
    if (!existsSync(storedPath)) {
      console.warn(`    No stored result at ${storedPath}, skipping`);
      continue;
    }

    const stored = JSON.parse(readFileSync(storedPath, "utf-8"));
    const baselinePath = join(BASELINE_DIR, `${mode}.json`);
    const baseline = existsSync(baselinePath)
      ? JSON.parse(readFileSync(baselinePath, "utf-8"))
      : null;

    // Configure vault and apply theme
    const styleSettings = themeConfig.style_settings || {};
    configureVaultForTheme(themeName, mode, styleSettings);
    await cli.reload();
    await cli.waitForReady({ label: `${themeName} ${mode}` });

    await cli.enablePlugin("obsidian-style-settings");
    await cli.enablePlugin("dataview");
    await cli.enablePlugin("obsidian-view-mode-by-frontmatter");

    try {
      await cli.loadWorkspace("default");
    } catch {}

    // Open ALL extraction files and aggregate results (like the real extractor)
    let live = {};
    for (const file of EXTRACTION_FILES) {
      try {
        await cli.openFile(file);
        await cli.waitForReady({ timeout: 5000, interval: 300, label: file });
      } catch {
        // File may not exist for this theme
        continue;
      }

      const fileResults = await fetchLiveStyles(cli, selectors);
      if (fileResults) {
        // Merge: later files can add new selectors/properties
        for (const [selector, styles] of Object.entries(fileResults)) {
          live[selector] = { ...live[selector], ...styles };
        }
      }
    }

    if (!live || Object.keys(live).length === 0) {
      console.warn(`    Failed to fetch live styles for ${mode}`);
      results.push({
        theme: themeName,
        mode,
        error: "Live extraction failed",
        summary: {
          totalSelectorsLive: 0,
          totalSelectorsStored: Object.keys(stored).length,
          missingSelectors: 0,
          missingProperties: 0,
          valueMismatches: 0,
          missingCssVars: 0,
          correctlyDeduped: 0,
          selectorsOnlyInStored: 0,
        },
      });
      continue;
    }

    if (!live) {
      console.warn(`    Failed to fetch live styles for ${mode}`);
      results.push({ theme: themeName, mode, error: "Live extraction failed" });
      continue;
    }

    // Compare
    const diff = compareResults(live, stored, baseline);

    const report = {
      theme: themeName,
      mode,
      timestamp: new Date().toISOString(),
      summary: {
        totalSelectorsLive: Object.keys(live).length,
        totalSelectorsStored: Object.keys(stored).length,
        missingSelectors: diff.missingSelectors.length,
        missingProperties: diff.missingProperties.length,
        valueMismatches: diff.valueMismatches.length,
        missingCssVars: diff.missingCssVars.length,
        correctlyDeduped: diff.correctlyDeduped,
        selectorsOnlyInStored: diff.selectorsOnlyInStored.length,
      },
      missingSelectors: diff.missingSelectors.slice(0, 50),
      missingProperties: diff.missingProperties.slice(0, 100),
      valueMismatches: diff.valueMismatches.slice(0, 50),
      missingCssVars: diff.missingCssVars.slice(0, 50),
      selectorsOnlyInStored: diff.selectorsOnlyInStored.slice(0, 30),
    };

    results.push(report);

    // Print summary
    console.log(`    Live selectors: ${report.summary.totalSelectorsLive}`);
    console.log(`    Stored selectors: ${report.summary.totalSelectorsStored}`);
    console.log(`    Missing selectors: ${report.summary.missingSelectors}`);
    console.log(`    Missing properties: ${report.summary.missingProperties}`);
    console.log(`    Value mismatches: ${report.summary.valueMismatches}`);
    console.log(`    Missing CSS vars: ${report.summary.missingCssVars}`);
    console.log(`    Correctly deduped: ${report.summary.correctlyDeduped}`);
    console.log(
      `    Selectors only in stored: ${report.summary.selectorsOnlyInStored}`,
    );

    // Save individual report
    mkdirSync(OUTPUT_DIR, { recursive: true });
    const reportPath = join(OUTPUT_DIR, `${resultDirName}-${mode}-diff.json`);
    writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`    Report saved: ${reportPath}`);
  }

  return results;
}

async function generateSummary(allResults) {
  const summary = {
    timestamp: new Date().toISOString(),
    totalThemes: 0,
    totalModes: 0,
    aggregates: {
      totalMissingSelectors: 0,
      totalMissingProperties: 0,
      totalValueMismatches: 0,
      totalMissingCssVars: 0,
      totalCorrectlyDeduped: 0,
    },
    worstThemes: [],
    commonMissingSelectors: {},
    commonMissingProperties: {},
    commonMissingVars: {},
  };

  const selectorGaps = {};
  const propertyGaps = {};
  const varGaps = {};

  for (const report of allResults) {
    if (report.error) continue;
    summary.totalModes++;
    summary.aggregates.totalMissingSelectors += report.summary.missingSelectors;
    summary.aggregates.totalMissingProperties +=
      report.summary.missingProperties;
    summary.aggregates.totalValueMismatches += report.summary.valueMismatches;
    summary.aggregates.totalMissingCssVars += report.summary.missingCssVars;
    summary.aggregates.totalCorrectlyDeduped += report.summary.correctlyDeduped;

    // Track common missing selectors
    for (const entry of report.missingSelectors || []) {
      selectorGaps[entry.selector] = (selectorGaps[entry.selector] || 0) + 1;
    }

    // Track common missing properties
    for (const entry of report.missingProperties || []) {
      const key = `${entry.selector}|${entry.property}`;
      propertyGaps[key] = (propertyGaps[key] || 0) + 1;
    }

    // Track common missing vars
    for (const entry of report.missingCssVars || []) {
      varGaps[entry.variable] = (varGaps[entry.variable] || 0) + 1;
    }
  }

  // Unique themes
  const themeSet = new Set(allResults.map((r) => r.theme));
  summary.totalThemes = themeSet.size;

  // Worst themes (most gaps)
  const themeScores = {};
  for (const report of allResults) {
    if (report.error) continue;
    const score =
      report.summary.missingSelectors +
      report.summary.missingProperties +
      report.summary.missingCssVars;
    themeScores[report.theme] = (themeScores[report.theme] || 0) + score;
  }
  summary.worstThemes = Object.entries(themeScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([theme, score]) => ({ theme, totalGaps: score }));

  // Common gaps (appearing in 3+ themes)
  summary.commonMissingSelectors = Object.entries(selectorGaps)
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([selector, count]) => ({ selector, count }));

  summary.commonMissingProperties = Object.entries(propertyGaps)
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30)
    .map(([key, count]) => {
      const [selector, property] = key.split("|");
      return { selector, property, count };
    });

  summary.commonMissingVars = Object.entries(varGaps)
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([variable, count]) => ({ variable, count }));

  mkdirSync(OUTPUT_DIR, { recursive: true });
  const summaryPath = join(OUTPUT_DIR, "_summary.json");
  writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  console.log(`\nSummary saved: ${summaryPath}`);
  return summary;
}

// --- Main ---

async function main() {
  console.log("=== Extraction Verification Tool ===\n");

  // Check CLI availability
  try {
    execSync("obsidian version", { encoding: "utf-8" });
  } catch {
    console.error("Obsidian CLI not available. Is Obsidian running?");
    process.exit(1);
  }

  // Check baseline
  if (
    !existsSync(join(BASELINE_DIR, "dark.json")) ||
    !existsSync(join(BASELINE_DIR, "light.json"))
  ) {
    console.error(
      "Baseline not found at runner/results/_baseline/. Run extraction first.",
    );
    process.exit(1);
  }

  const cli = new ObsidianCLI(VAULT_PATH);
  const selectors = buildSelectors();
  const arg = process.argv[2];

  console.log(`Vault: ${VAULT_PATH}`);
  console.log(`Selectors: ${selectors.length}`);
  console.log(`Output: ${OUTPUT_DIR}`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  let themesToVerify = [];

  if (arg === "--test-set") {
    themesToVerify = TEST_SET;
    console.log(`\nVerifying test set (${TEST_SET.length} themes)...\n`);
  } else if (arg === "--all") {
    // All themes that have extraction results
    const dirs = readdirSync(RESULTS_DIR, { withFileTypes: true })
      .filter(
        (d) =>
          d.isDirectory() &&
          d.name !== "_baseline" &&
          (existsSync(join(RESULTS_DIR, d.name, "dark.json")) ||
            existsSync(join(RESULTS_DIR, d.name, "light.json"))),
      )
      .map((d) => d.name)
      .sort();
    themesToVerify = dirs;
    console.log(`\nVerifying all ${dirs.length} extracted themes...\n`);
  } else if (arg) {
    themesToVerify = [arg];
    console.log(`\nVerifying single theme: ${arg}\n`);
  } else {
    console.log("Usage:");
    console.log('  node runner/scripts/verify-extraction.mjs "Theme Name"');
    console.log("  node runner/scripts/verify-extraction.mjs --test-set");
    console.log("  node runner/scripts/verify-extraction.mjs --all");
    process.exit(0);
  }

  const allResults = [];
  const startTime = Date.now();

  for (let i = 0; i < themesToVerify.length; i++) {
    const themeName = themesToVerify[i];
    console.log(`[${i + 1}/${themesToVerify.length}] ${themeName}`);

    try {
      const results = await verifyTheme(cli, themeName, selectors);
      allResults.push(...results);
    } catch (error) {
      console.error(`  FAILED: ${error.message}`);
      allResults.push({
        theme: themeName,
        mode: "unknown",
        error: error.message,
        summary: {
          totalSelectorsLive: 0,
          totalSelectorsStored: 0,
          missingSelectors: 0,
          missingProperties: 0,
          valueMismatches: 0,
          missingCssVars: 0,
          correctlyDeduped: 0,
          selectorsOnlyInStored: 0,
        },
      });
    }
  }

  // Generate summary
  const summary = await generateSummary(allResults);

  const totalElapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n=== Verification Complete ===`);
  console.log(`Total time: ${totalElapsed} minutes`);
  console.log(`Themes verified: ${summary.totalThemes}`);
  console.log(`Modes verified: ${summary.totalModes}`);
  console.log(
    `Total missing selectors: ${summary.aggregates.totalMissingSelectors}`,
  );
  console.log(
    `Total missing properties: ${summary.aggregates.totalMissingProperties}`,
  );
  console.log(
    `Total value mismatches: ${summary.aggregates.totalValueMismatches}`,
  );
  console.log(
    `Total missing CSS vars: ${summary.aggregates.totalMissingCssVars}`,
  );

  if (summary.worstThemes.length > 0) {
    console.log(`\nWorst themes (most gaps):`);
    for (const { theme, totalGaps } of summary.worstThemes.slice(0, 5)) {
      console.log(`  ${theme}: ${totalGaps} gaps`);
    }
  }

  if (summary.commonMissingSelectors.length > 0) {
    console.log(`\nCommon missing selectors (across 3+ themes):`);
    for (const { selector, count } of summary.commonMissingSelectors.slice(
      0,
      5,
    )) {
      console.log(`  ${selector}: missing in ${count} themes`);
    }
  }

  resetVaultConfig();
}

main().catch((error) => {
  console.error(`Fatal: ${error.message}`);
  resetVaultConfig();
  process.exit(1);
});
