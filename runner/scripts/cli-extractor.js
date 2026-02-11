/**
 * CLI-based CSS Extractor for Quartz Themes
 *
 * Uses Obsidian CLI (v1.12+) instead of WebdriverIO for style extraction.
 * Strategy: Extract ALL computed styles, deduplicate against default Obsidian baseline.
 */

import { execSync } from "child_process";
import { createHash } from "crypto";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
} from "fs";
import { resolve, join } from "path";
import { config } from "./config.js";
import { themes } from "../../config.mjs";
import { sanitizeFilenamePreservingEmojis as sanitize } from "../../util/util.mjs";

const VAULT_PATH = resolve("./runner/vault");
const RESULTS_DIR = resolve("./runner/results");
const BASELINE_DIR = join(RESULTS_DIR, "_baseline");
const TEMP_RESULT_FILE = join(VAULT_PATH, ".cli-extract-result.json");
const TEMP_SCRIPT_FILE = join(VAULT_PATH, ".cli-extract-script.js");
const CLI_TIMEOUT = 180000;

const HASH_CACHE_FILE = join(RESULTS_DIR, ".cli-theme-hashes.json");
const FORCE_EXTRACTION = process.env.FORCE_EXTRACTION === "true";
const FORCE_BASELINE = process.env.FORCE_BASELINE === "true";

const APPEARANCE_FILE = join(VAULT_PATH, ".obsidian/appearance.json");
const STYLE_SETTINGS_FILE = join(
  VAULT_PATH,
  ".obsidian/plugins/obsidian-style-settings/data.json",
);

const REQUIRED_PLUGINS = [
  "obsidian-view-mode-by-frontmatter",
  "dataview",
  "obsidian-style-settings",
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
];

const STYLE_PROPERTIES = [
  "accent-color",
  "background",
  "background-color",
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
  "padding",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-top",
  "stroke",
  "text-align",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-shadow",
  "text-transform",
  "white-space",
];

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
    const currentMode = await this.eval(
      `app.getTheme() === "obsidian" ? "dark" : "light"`,
    );

    if (currentMode !== mode) {
      this.exec(`command id=theme:use-${mode}`);
      await this.sleep(500);
    }
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
    } catch {
      // Plugin might already be enabled or not installed
    }
  }

  async enableSnippet(snippetName) {
    try {
      this.exec(`snippet:enable name="${snippetName}"`);
    } catch {
      // Snippet might not exist
    }
  }

  async disableAllSnippets() {
    try {
      const snippets = this.exec("snippets:enabled");
      for (const snippet of snippets.split("\n").filter(Boolean)) {
        this.exec(`snippet:disable name="${snippet.trim()}"`);
      }
    } catch {
      // No snippets enabled
    }
  }

  async reload() {
    this.exec("reload");
    await this.sleep(2000);
  }

  async hoverOverLink() {
    try {
      const linkInfo = await this.eval(`
        (() => {
          const selectors = [
            ".cm-hmd-internal-link",
            ".internal-link",
            "a.internal-link",
            ".cm-link",
            ".markdown-preview-view a.internal-link"
          ];
          for (const sel of selectors) {
            const el = document.querySelector(sel);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.width > 0 && rect.height > 0) {
                return { x: Math.round(rect.left + rect.width / 2), y: Math.round(rect.top + rect.height / 2) };
              }
            }
          }
          return null;
        })();
      `);

      if (linkInfo) {
        await this.eval(`
          const el = document.elementFromPoint(${linkInfo.x}, ${linkInfo.y});
          if (el) {
            el.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
            el.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
          }
        `);
        await this.sleep(800);
      }
    } catch {
      // Hover failed, continue without tooltip styles
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

function getThemeConfig(themeName) {
  if (themes[themeName]) {
    return themes[themeName];
  }
  const key = sanitize(themeName);
  return themes[key] || { modes: ["dark", "light"] };
}

function isDarkTheme(themeName) {
  return getThemeConfig(themeName).modes.includes("dark");
}

function isLightTheme(themeName) {
  return getThemeConfig(themeName).modes.includes("light");
}

function resolveThemeFolderName(themeName) {
  const themesDir = join(VAULT_PATH, ".obsidian/themes");
  if (!existsSync(themesDir)) return themeName;

  if (existsSync(join(themesDir, themeName))) {
    return themeName;
  }

  const baseName = themeName.includes(".")
    ? themeName.split(".")[0]
    : themeName;

  const installedThemes = readdirSync(themesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const match = installedThemes.find(
    (t) =>
      sanitize(t) === baseName || t.toLowerCase() === baseName.toLowerCase(),
  );

  return match || themeName;
}

function parseThemeName(themeName) {
  const folderName = resolveThemeFolderName(themeName);

  if (themeName.includes(".")) {
    const variation = themeName.split(".").slice(1).join(".");
    return { base: folderName, variation };
  }

  return { base: folderName, variation: "_default" };
}

function getThemeHash(themeName, manifest = {}) {
  const folderName = resolveThemeFolderName(themeName);
  const themeDir = join(VAULT_PATH, ".obsidian/themes", folderName);
  const themeCssPath = join(themeDir, "theme.css");
  const legacyCssPath = join(themeDir, "obsidian.css");

  let cssContent = null;
  if (existsSync(themeCssPath)) {
    cssContent = readFileSync(themeCssPath, "utf-8");
  } else if (existsSync(legacyCssPath)) {
    cssContent = readFileSync(legacyCssPath, "utf-8");
  }

  if (!cssContent) return null;

  const hashInput = cssContent + JSON.stringify(manifest.style_settings || {});
  return createHash("md5").update(hashInput).digest("hex");
}

function loadHashCache() {
  if (existsSync(HASH_CACHE_FILE)) {
    try {
      return JSON.parse(readFileSync(HASH_CACHE_FILE, "utf-8"));
    } catch {
      return {};
    }
  }
  return {};
}

function saveHashCache(cache) {
  mkdirSync(RESULTS_DIR, { recursive: true });
  const sorted = sortObjectDeep(cache);
  writeFileSync(HASH_CACHE_FILE, JSON.stringify(sorted, null, 2));
}

function getCachedHash(themeName, hashCache) {
  const { base, variation } = parseThemeName(themeName);
  return hashCache[base]?.[variation] || null;
}

function setCachedHash(themeName, hash, hashCache) {
  const { base, variation } = parseThemeName(themeName);
  if (!hashCache[base]) {
    hashCache[base] = {};
  }
  hashCache[base][variation] = hash;
}

function shouldSkipTheme(themeName, manifest, hashCache) {
  if (FORCE_EXTRACTION) return false;

  const currentHash = getThemeHash(themeName, manifest);
  if (!currentHash) return false;

  const cachedHash = getCachedHash(themeName, hashCache);
  if (cachedHash === currentHash) {
    const resultDir = join(RESULTS_DIR, sanitize(themeName));
    if (existsSync(resultDir)) {
      const hasResults =
        existsSync(join(resultDir, "dark.json")) ||
        existsSync(join(resultDir, "light.json"));
      if (hasResults) {
        return true;
      }
    }
  }
  return false;
}

function generateFullExtractionScript(selectors) {
  return `
(function() {
  const selectors = ${JSON.stringify(selectors)};
  const styleProps = ${JSON.stringify(STYLE_PROPERTIES)};
  const results = {};

  function getAllCssVars(style) {
    const vars = {};
    for (let i = 0; i < style.length; i++) {
      const prop = style[i];
      if (prop.startsWith("--")) {
        const val = style.getPropertyValue(prop);
        if (val && val.trim()) vars[prop] = val.trim();
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

  const bodyStyle = window.getComputedStyle(document.body);
  results["body"] = { ...getAllCssVars(bodyStyle), ...getStandardProps(bodyStyle) };

  for (const selector of selectors) {
    try {
      const el = document.querySelector(selector);
      if (!el) continue;

      const style = window.getComputedStyle(el);
      const extracted = { ...getAllCssVars(style), ...getStandardProps(style) };

      if (Object.keys(extracted).length > 0) {
        results[selector] = { ...results[selector], ...extracted };
      }
    } catch (e) {
      // Invalid selector, skip
    }
  }

  require("fs").writeFileSync(
    ${JSON.stringify(TEMP_RESULT_FILE)},
    JSON.stringify(results, null, 2)
  );

  return Object.keys(results).length;
})();
`;
}

function buildSelectors() {
  return [
    ...new Set(
      config.filter((c) => c.obsidianSelector).map((c) => c.obsidianSelector),
    ),
  ];
}

async function extractFull(cli, selectors) {
  const script = generateFullExtractionScript(selectors);
  writeFileSync(TEMP_SCRIPT_FILE, script);

  try {
    const loadAndRun = `
      const script = require("fs").readFileSync(${JSON.stringify(TEMP_SCRIPT_FILE)}, "utf-8");
      eval(script);
    `;
    await cli.eval(loadAndRun);

    if (existsSync(TEMP_RESULT_FILE)) {
      const content = readFileSync(TEMP_RESULT_FILE, "utf-8");
      return JSON.parse(content);
    }

    return {};
  } finally {
    if (existsSync(TEMP_SCRIPT_FILE)) unlinkSync(TEMP_SCRIPT_FILE);
    if (existsSync(TEMP_RESULT_FILE)) unlinkSync(TEMP_RESULT_FILE);
  }
}

function loadBaseline(mode) {
  const baselineFile = join(BASELINE_DIR, `${mode}.json`);
  if (existsSync(baselineFile)) {
    return JSON.parse(readFileSync(baselineFile, "utf-8"));
  }
  return null;
}

function saveBaseline(mode, data) {
  mkdirSync(BASELINE_DIR, { recursive: true });
  const sorted = sortObjectDeep(data);
  writeFileSync(
    join(BASELINE_DIR, `${mode}.json`),
    JSON.stringify(sorted, null, 2),
  );
}

function deduplicateAgainstBaseline(themeData, baseline) {
  if (!baseline) return themeData;

  const result = {};

  for (const [selector, styles] of Object.entries(themeData)) {
    const baselineStyles = baseline[selector] || {};
    const uniqueStyles = {};

    for (const [prop, value] of Object.entries(styles)) {
      if (baselineStyles[prop] !== value) {
        uniqueStyles[prop] = value;
      }
    }

    if (Object.keys(uniqueStyles).length > 0) {
      result[selector] = uniqueStyles;
    }
  }

  return result;
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

function configureVaultForTheme(
  themeName,
  mode = "dark",
  snippets = [],
  styleSettings = {},
) {
  // "obsidian" = dark mode, "moonstone" = light mode
  const baseTheme = mode === "dark" ? "obsidian" : "moonstone";
  const folderName = resolveThemeFolderName(themeName);
  const appearance = {
    baseFontSize: 16,
    theme: baseTheme,
    cssTheme: folderName,
    enabledCssSnippets: snippets,
    nativeMenus: false,
  };
  writeFileSync(APPEARANCE_FILE, JSON.stringify(appearance, null, 2));
  writeFileSync(STYLE_SETTINGS_FILE, JSON.stringify(styleSettings, null, 2));
}

async function ensurePluginsEnabled(cli) {
  for (const pluginId of REQUIRED_PLUGINS) {
    await cli.enablePlugin(pluginId);
  }
}

async function expandFileExplorer(cli) {
  await cli.eval(`
    const folder = document.querySelector(
      ".nav-folder.is-collapsed > .nav-folder-title"
    );
    if (folder) folder.click();
  `);
}

async function extractModeStyles(cli, selectors) {
  const modeResults = {};

  for (const file of EXTRACTION_FILES) {
    const fileStart = Date.now();
    await cli.openFile(file);
    await cli.sleep(300);

    if (file === "theme-embeds/tooltips.md") {
      await cli.hoverOverLink();
    }

    const fileResults = await extractFull(cli, selectors);
    const count = Object.keys(fileResults).length;

    for (const [selector, styles] of Object.entries(fileResults)) {
      modeResults[selector] = { ...modeResults[selector], ...styles };
    }

    const fileTime = ((Date.now() - fileStart) / 1000).toFixed(1);
    console.log(`    ${file}: ${count} selectors (${fileTime}s)`);
  }

  return modeResults;
}

async function extractBaseline(cli, selectors) {
  console.log("\nExtracting baseline (default Obsidian theme)...");

  const darkBaseline = loadBaseline("dark");
  const lightBaseline = loadBaseline("light");

  if (darkBaseline && lightBaseline && !FORCE_BASELINE) {
    console.log("  Using cached baseline");
    return { dark: darkBaseline, light: lightBaseline };
  }

  const results = { dark: null, light: null };

  for (const mode of ["dark", "light"]) {
    console.log(`  ${mode} mode...`);

    configureVaultForTheme("", mode, [], {});
    await cli.reload();
    await cli.sleep(1000);

    await ensurePluginsEnabled(cli);

    try {
      await cli.loadWorkspace("default");
    } catch {}

    await expandFileExplorer(cli);

    results[mode] = await extractModeStyles(cli, selectors);
    saveBaseline(mode, results[mode]);
    console.log(
      `  Baseline ${mode}: ${Object.keys(results[mode]).length} selectors saved`,
    );
  }

  resetVaultConfig();
  return results;
}

async function extractThemeStyles(cli, themeName, baseline, manifest = {}) {
  const folderName = resolveThemeFolderName(themeName);
  const isVariation = folderName !== themeName;

  console.log(
    `\nExtracting: ${themeName}${isVariation ? ` (using ${folderName})` : ""}`,
  );

  const themeConfig = getThemeConfig(themeName);
  const styleSettings =
    manifest.style_settings || themeConfig.style_settings || {};
  const snippets = manifest.snippets || themeConfig.snippets || [];

  const supportsDark = isDarkTheme(themeName);
  const supportsLight = isLightTheme(themeName);

  console.log(
    `  Modes: ${supportsDark ? "dark" : ""}${supportsDark && supportsLight ? ", " : ""}${supportsLight ? "light" : ""}`,
  );

  const results = { dark: null, light: null };
  const selectors = buildSelectors();

  const modesToExtract = [];
  if (supportsDark) modesToExtract.push("dark");
  if (supportsLight) modesToExtract.push("light");

  for (const mode of modesToExtract) {
    console.log(`  ${mode} mode...`);

    configureVaultForTheme(themeName, mode, snippets, styleSettings);
    await cli.reload();
    await cli.sleep(1000);

    await ensurePluginsEnabled(cli);

    try {
      await cli.loadWorkspace("default");
    } catch {}

    await expandFileExplorer(cli);

    const rawResults = await extractModeStyles(cli, selectors);
    const modeBaseline = baseline ? baseline[mode] : null;
    results[mode] = deduplicateAgainstBaseline(rawResults, modeBaseline);

    const rawCount = Object.keys(rawResults).length;
    const dedupedCount = Object.keys(results[mode]).length;
    console.log(
      `  ${mode}: ${rawCount} raw -> ${dedupedCount} unique selectors`,
    );
  }

  resetVaultConfig();

  return results;
}

function sortObjectDeep(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(sortObjectDeep);
  }

  return Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .reduce((sorted, key) => {
      sorted[key] = sortObjectDeep(obj[key]);
      return sorted;
    }, {});
}

function saveResults(themeName, results) {
  const themeDir = join(RESULTS_DIR, sanitize(themeName));
  mkdirSync(themeDir, { recursive: true });

  if (results.dark && Object.keys(results.dark).length > 0) {
    const sortedDark = sortObjectDeep(results.dark);
    writeFileSync(
      join(themeDir, "dark.json"),
      JSON.stringify(sortedDark, null, 2),
    );
    console.log(`  Saved: ${themeDir}/dark.json`);
  }

  if (results.light && Object.keys(results.light).length > 0) {
    const sortedLight = sortObjectDeep(results.light);
    writeFileSync(
      join(themeDir, "light.json"),
      JSON.stringify(sortedLight, null, 2),
    );
    console.log(`  Saved: ${themeDir}/light.json`);
  }
}

function getInstalledThemes() {
  const themesDir = join(VAULT_PATH, ".obsidian/themes");
  if (!existsSync(themesDir)) return [];

  return readdirSync(themesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

async function extractSingleTheme(cli, themeName, hashCache, baseline) {
  const themeConfig = getThemeConfig(themeName);
  const manifest = { style_settings: themeConfig.style_settings || {} };

  if (shouldSkipTheme(themeName, manifest, hashCache)) {
    console.log(`Skipping ${themeName} (unchanged)`);
    return { skipped: true };
  }

  try {
    const startTime = Date.now();
    const results = await extractThemeStyles(cli, themeName, baseline);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

    saveResults(themeName, results);

    const currentHash = getThemeHash(themeName, manifest);
    if (currentHash) {
      setCachedHash(themeName, currentHash, hashCache);
      saveHashCache(hashCache);
    }

    const darkCount = results.dark ? Object.keys(results.dark).length : 0;
    const lightCount = results.light ? Object.keys(results.light).length : 0;
    console.log(
      `  Completed in ${elapsed}s (dark: ${darkCount}, light: ${lightCount})`,
    );

    return { skipped: false, elapsed: parseFloat(elapsed) };
  } catch (error) {
    console.error(`  Failed: ${error.message}`);
    return { skipped: false, error: error.message };
  }
}

async function main() {
  console.log("=== CLI CSS Extractor (Full Style Mode) ===\n");

  try {
    execSync("obsidian version", { encoding: "utf-8" });
  } catch {
    console.error("Obsidian CLI not available");
    process.exit(1);
  }

  const cli = new ObsidianCLI(VAULT_PATH);
  const arg = process.argv[2];
  const extractAll = arg === "--all" || arg === "-a";

  const selectors = buildSelectors();
  console.log(`Vault: ${VAULT_PATH}`);
  console.log(`Selectors: ${selectors.length}`);
  console.log(`Style properties: ${STYLE_PROPERTIES.length}`);
  console.log(`Files: ${EXTRACTION_FILES.length} notes`);
  if (FORCE_EXTRACTION) console.log(`Force extraction: enabled`);
  if (FORCE_BASELINE) console.log(`Force baseline: enabled`);

  const hashCache = loadHashCache();

  const baseline = await extractBaseline(cli, selectors);

  if (extractAll) {
    const installedThemes = getInstalledThemes();
    console.log(
      `\nExtracting all ${installedThemes.length} installed themes...\n`,
    );

    let processed = 0;
    let skipped = 0;
    let failed = 0;
    let totalTime = 0;
    const startTime = Date.now();

    for (let i = 0; i < installedThemes.length; i++) {
      const themeName = installedThemes[i];
      console.log(`[${i + 1}/${installedThemes.length}] ${themeName}`);

      const result = await extractSingleTheme(
        cli,
        themeName,
        hashCache,
        baseline,
      );

      if (result.skipped) {
        skipped++;
      } else if (result.error) {
        failed++;
      } else {
        processed++;
        totalTime += result.elapsed;
      }
    }

    const totalElapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`\n=== Summary ===`);
    console.log(`Total time: ${totalElapsed} minutes`);
    console.log(`Processed: ${processed}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Failed: ${failed}`);
  } else {
    const themeName = arg || "Brutalist";
    console.log(`Theme: ${themeName}\n`);

    const result = await extractSingleTheme(
      cli,
      themeName,
      hashCache,
      baseline,
    );

    if (result.skipped) {
      console.log(`\nSkipping ${themeName} (unchanged since last extraction)`);
    } else if (result.error) {
      resetVaultConfig();
      process.exit(1);
    }
  }

  resetVaultConfig();
}

export { ObsidianCLI, extractThemeStyles, resetVaultConfig };

main().catch((error) => {
  console.error(error);
  resetVaultConfig();
});
