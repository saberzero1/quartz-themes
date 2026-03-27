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
import { dirToKey } from "../../extensions/extractor.mjs";
import { sanitizeFilenamePreservingEmojis as sanitize } from "../../util/util.mjs";

const VAULT_PATH = resolve("./runner/vault");
const RESULTS_DIR = resolve("./runner/results");
const BASELINE_DIR = join(RESULTS_DIR, "_baseline");
const TEMP_RESULT_FILE = join(VAULT_PATH, ".cli-extract-result.json");
const TEMP_ERROR_FILE = join(VAULT_PATH, ".cli-extract-result-error.txt");
const TEMP_SCRIPT_FILE = join(VAULT_PATH, ".cli-extract-script.js");
const CLI_TIMEOUT = 180000;

const HASH_CACHE_FILE = join(RESULTS_DIR, ".cli-theme-hashes.json");
const FORCE_EXTRACTION = process.env.FORCE_EXTRACTION === "true";
const FORCE_BASELINE = process.env.FORCE_BASELINE === "true";

const CALLOUT_MANIFEST_PATH = resolve("./theme-callout-map.json");
let calloutManifest = {};
if (existsSync(CALLOUT_MANIFEST_PATH)) {
  calloutManifest = JSON.parse(readFileSync(CALLOUT_MANIFEST_PATH, "utf-8"));
}

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
        maxBuffer: 50 * 1024 * 1024, // 50MB buffer for large extraction outputs
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
      } catch {
        // eval failed, Obsidian may still be loading
      }

      await this.sleep(interval);
    }

    console.warn(
      `      waitForReady timed out after ${timeout}ms${label ? ` (${label})` : ""}`,
    );
    return false;
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

function getResultDirName(themeName) {
  const { base, variation } = parseThemeName(themeName);
  if (variation === "_default") {
    return sanitize(base);
  }
  return `${sanitize(base)}.${variation}`;
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
    const resultDir = join(RESULTS_DIR, getResultDirName(themeName));
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
  const pseudoElements = [
    "::before",
    "::after",
    "::selection",
    "::marker",
    "::placeholder",
  ];

  return `
(function() {
  const fs = require("fs");
  const ERROR_FILE = ${JSON.stringify(TEMP_ERROR_FILE)};
  const RESULT_FILE = ${JSON.stringify(TEMP_RESULT_FILE)};

  try {
    const selectors = ${JSON.stringify(selectors)};
    const styleProps = ${JSON.stringify(STYLE_PROPERTIES)};
    const pseudoElements = ${JSON.stringify(pseudoElements)};
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
              // Also check nested rules (e.g. @media, @supports)
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
          } catch (e) {
            // CORS-restricted stylesheet, skip
          }
        }
      } catch (e) {
        // styleSheets access failed, skip
      }
      return varNames;
    }

    const allVarNames = discoverCssVarNames();

    function getAllCssVars(style, baseline) {
      const vars = {};
      for (const prop of allVarNames) {
        const val = style.getPropertyValue(prop);
        if (val && val.trim()) {
          const trimmed = val.trim();
          // If a baseline is provided, only include vars that differ from it
          if (baseline && baseline[prop] !== undefined && baseline[prop] === trimmed) {
            continue;
          }
          vars[prop] = trimmed;
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

    function extractPseudoStyles(el, selector, baseline) {
      for (const pseudo of pseudoElements) {
        try {
          const pseudoStyle = window.getComputedStyle(el, pseudo);
          const content = pseudoStyle.getPropertyValue("content");
          const maskImage = pseudoStyle.getPropertyValue("-webkit-mask-image")
            || pseudoStyle.getPropertyValue("mask-image");
          const hasContent = content && content !== "none" && content !== "normal";
          const hasMask = maskImage && maskImage !== "none";
          if (!hasContent && !hasMask) continue;

          const extracted = { ...getAllCssVars(pseudoStyle, baseline), ...getStandardProps(pseudoStyle) };
          if (hasContent) extracted["content"] = content.trim();

          if (Object.keys(extracted).length > 0) {
            const pseudoKey = selector + pseudo;
            results[pseudoKey] = { ...results[pseudoKey], ...extracted };
          }
        } catch (e) {
          // Pseudo-element extraction failed, skip
        }
      }
    }

    // Extract from html element
    const htmlStyle = window.getComputedStyle(document.documentElement);
    const htmlExtracted = { ...getAllCssVars(htmlStyle), ...getStandardProps(htmlStyle) };
    if (Object.keys(htmlExtracted).length > 0) {
      results["html"] = htmlExtracted;
    }

    // Extract from body element
    const bodyStyle = window.getComputedStyle(document.body);
    results["body"] = { ...getAllCssVars(bodyStyle), ...getStandardProps(bodyStyle) };

    // Extract pseudo-elements from html and body
    extractPseudoStyles(document.documentElement, "html");
    extractPseudoStyles(document.body, "body");

    // Build baseline from html/body CSS vars — child elements will only
    // keep overrides, preventing inherited vars from bloating every selector.
    const cssVarBaseline = {};
    for (const key of ["html", "body"]) {
      if (!results[key]) continue;
      for (const prop of Object.keys(results[key])) {
        if (prop.startsWith("--") && !(prop in cssVarBaseline)) {
          cssVarBaseline[prop] = results[key][prop];
        }
      }
    }

    for (const selector of selectors) {
      try {
        const el = document.querySelector(selector);
        if (!el) continue;

        const style = window.getComputedStyle(el);
        const extracted = { ...getAllCssVars(style, cssVarBaseline), ...getStandardProps(style) };

        if (Object.keys(extracted).length > 0) {
          results[selector] = { ...results[selector], ...extracted };
        }

        // Extract pseudo-element styles for this selector
        extractPseudoStyles(el, selector, cssVarBaseline);
      } catch (e) {
        // Invalid selector, skip
      }
    }

    const taskItems = document.querySelectorAll("li.task-list-item[data-task]");
    const seenTasks = new Set();
    for (const li of taskItems) {
      const task = li.getAttribute("data-task");
      if (!task || seenTasks.has(task)) continue;
      seenTasks.add(task);

      const input = li.querySelector('input[type="checkbox"]');
      if (!input) continue;

      const inputSelector = 'input[data-task="' + task + '"]';
      const inputStyle = window.getComputedStyle(input);
      const inputMask = inputStyle.getPropertyValue("-webkit-mask-image")
        || inputStyle.getPropertyValue("mask-image");
      if (inputMask && inputMask !== "none") {
        if (!results[inputSelector]) results[inputSelector] = {};
        results[inputSelector]["-webkit-mask-image"] = inputMask;
      }

      const afterStyle = window.getComputedStyle(input, "::after");
      const afterMask = afterStyle.getPropertyValue("-webkit-mask-image")
        || afterStyle.getPropertyValue("mask-image");
      const afterContent = afterStyle.getPropertyValue("content");
      const afterColor = afterStyle.getPropertyValue("color");
      const afterBgColor = afterStyle.getPropertyValue("background-color");

      const hasMask = afterMask && afterMask !== "none";
      const hasContent = afterContent && afterContent !== "none"
        && afterContent !== '""' && afterContent !== "normal";

      if (hasMask || hasContent) {
        const afterSelector = inputSelector + "::after";
        if (!results[afterSelector]) results[afterSelector] = {};
        if (hasMask) results[afterSelector]["-webkit-mask-image"] = afterMask;
        if (hasContent) results[afterSelector]["content"] = afterContent;
        if (afterColor) results[afterSelector]["color"] = afterColor;
        if (afterBgColor && afterBgColor !== "rgba(0, 0, 0, 0)")
          results[afterSelector]["background-color"] = afterBgColor;
      }
    }

    const resultCount = Object.keys(results).length;
    const minExpected = Math.max(30, Math.floor(selectors.length * 0.1));
    if (resultCount < minExpected) {
      console.warn(
        "Warning: Low extraction count (" +
          resultCount +
          ") vs expected minimum (" +
          minExpected +
          "). Theme or vault may not have loaded correctly.",
      );
    }

    fs.writeFileSync(
      RESULT_FILE,
      JSON.stringify(results, null, 2)
    );

    return Object.keys(results).length;
  } catch (topLevelError) {
    try {
      const diagInfo = [
        "EXTRACTION SCRIPT TOP-LEVEL ERROR",
        "Timestamp: " + new Date().toISOString(),
        "Error: " + (topLevelError.message || String(topLevelError)),
        "Stack: " + (topLevelError.stack || "N/A"),
        "Type: " + (topLevelError.constructor ? topLevelError.constructor.name : typeof topLevelError),
        "",
        "DOM state:",
        "  document.body exists: " + !!document.body,
        "  document.documentElement exists: " + !!document.documentElement,
        "  styleSheets count: " + (document.styleSheets ? document.styleSheets.length : "N/A"),
        "  body classList: " + (document.body ? Array.from(document.body.classList).join(", ") : "N/A"),
        "  workspace exists: " + !!document.querySelector(".workspace"),
      ].join("\\n");
      fs.writeFileSync(ERROR_FILE, diagInfo);
    } catch (writeError) {
      // Cannot even write diagnostics - truly fatal
    }
    return -1;
  }
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

/**
 * @param {string[]} customTypes - Custom callout type names from the manifest.
 * @returns {string[]} Obsidian-format selectors matching config.js callout entry pattern.
 */
function buildCustomCalloutSelectors(customTypes) {
  return customTypes.map(
    (type) =>
      `div.callout[data-callout-fold=""][data-callout-metadata=""][data-callout="${type}"]`,
  );
}

async function extractFull(cli, selectors, retries = 2) {
  const script = generateFullExtractionScript(selectors);
  writeFileSync(TEMP_SCRIPT_FILE, script);

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      if (existsSync(TEMP_RESULT_FILE)) unlinkSync(TEMP_RESULT_FILE);
      if (existsSync(TEMP_ERROR_FILE)) unlinkSync(TEMP_ERROR_FILE);

      const loadAndRun = `
        try {
          const fs = require("fs");
          const scriptContent = fs.readFileSync(${JSON.stringify(TEMP_SCRIPT_FILE)}, "utf-8");
          eval(scriptContent);
        } catch (loadError) {
          try {
            require("fs").writeFileSync(
              ${JSON.stringify(TEMP_ERROR_FILE)},
              "LOAD_AND_RUN ERROR\\n" +
              "Error: " + (loadError.message || String(loadError)) + "\\n" +
              "Stack: " + (loadError.stack || "N/A") + "\\n"
            );
          } catch (e) {}
        }
      `;
      await cli.eval(loadAndRun);

      // Poll for result or error file — obsidian eval may return before script completes
      const pollTimeout = 5000;
      const pollInterval = 200;
      const pollStart = Date.now();
      while (Date.now() - pollStart < pollTimeout) {
        if (existsSync(TEMP_RESULT_FILE) || existsSync(TEMP_ERROR_FILE)) break;
        await cli.sleep(pollInterval);
      }

      if (existsSync(TEMP_ERROR_FILE)) {
        const errorContent = readFileSync(TEMP_ERROR_FILE, "utf-8");
        if (attempt < retries) {
          console.warn(
            `      Script error (attempt ${attempt + 1}/${retries + 1}): ${errorContent.split("\n")[2] || "unknown"}, retrying...`,
          );
          await cli.sleep(500);
          continue;
        }
        console.warn(
          `      Script error after ${retries + 1} attempts:\n${errorContent}`,
        );
      }

      if (existsSync(TEMP_RESULT_FILE)) {
        const content = readFileSync(TEMP_RESULT_FILE, "utf-8");
        try {
          const parsed = JSON.parse(content);
          if (existsSync(TEMP_SCRIPT_FILE)) unlinkSync(TEMP_SCRIPT_FILE);
          if (existsSync(TEMP_RESULT_FILE)) unlinkSync(TEMP_RESULT_FILE);
          if (existsSync(TEMP_ERROR_FILE)) unlinkSync(TEMP_ERROR_FILE);
          return parsed;
        } catch (parseError) {
          if (attempt < retries) {
            console.warn(
              `      JSON parse failed (attempt ${attempt + 1}/${retries + 1}), retrying...`,
            );
            await cli.sleep(500);
            continue;
          }
          console.warn(
            `      JSON parse failed after ${retries + 1} attempts: ${parseError.message}`,
          );
        }
      } else if (attempt < retries) {
        console.warn(
          `      Result file missing (attempt ${attempt + 1}/${retries + 1}), retrying...`,
        );
        await cli.sleep(500);
        continue;
      }
    } catch (error) {
      if (attempt < retries) {
        console.warn(
          `      Extraction error (attempt ${attempt + 1}/${retries + 1}): ${error.message}, retrying...`,
        );
        await cli.sleep(500);
        continue;
      }
      console.warn(
        `      Extraction failed after ${retries + 1} attempts: ${error.message}`,
      );
    }
  }

  if (existsSync(TEMP_SCRIPT_FILE)) unlinkSync(TEMP_SCRIPT_FILE);
  if (existsSync(TEMP_RESULT_FILE)) unlinkSync(TEMP_RESULT_FILE);
  if (existsSync(TEMP_ERROR_FILE)) unlinkSync(TEMP_ERROR_FILE);
  return {};
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

async function extractModeStyles(cli, selectors, extraFiles = []) {
  const modeResults = {};

  for (const file of [...EXTRACTION_FILES, ...extraFiles]) {
    const fileStart = Date.now();
    let fileResults = {};
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      attempts++;
      try {
        await cli.openFile(file);
        await cli.waitForReady({ timeout: 5000, interval: 300, label: file });

        if (file === "theme-embeds/tooltips.md") {
          await cli.hoverOverLink();
        }

        fileResults = await extractFull(cli, selectors);
        const count = Object.keys(fileResults).length;

        if (count > 0 || attempts >= maxAttempts) {
          break;
        }

        console.warn(
          `      ${file}: 0 selectors on attempt ${attempts}/${maxAttempts}, retrying...`,
        );
        await cli.sleep(500);
      } catch (error) {
        if (attempts >= maxAttempts) {
          console.warn(
            `      ${file}: extraction failed after ${maxAttempts} attempts: ${error.message}`,
          );
          break;
        }
        console.warn(
          `      ${file}: error on attempt ${attempts}/${maxAttempts}: ${error.message}, retrying...`,
        );
        await cli.sleep(500);
      }
    }

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
    await cli.waitForReady({ label: `baseline ${mode}` });

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

  // Look up custom callout types for this theme from the manifest.
  // Manifest keys are themes.json keys (lowercase-hyphenated), but for base
  // themes themeName is the raw directory name (e.g. "Fancy-a-Story").
  // Dot-variations are already themes.json keys, so we only convert base themes.
  const manifestKey = themeName.includes(".") ? themeName : dirToKey(themeName);
  const customCalloutTypes = calloutManifest[manifestKey] || [];
  const extraSelectors = buildCustomCalloutSelectors(customCalloutTypes);
  const allSelectors = [...selectors, ...extraSelectors];
  const extraFiles =
    customCalloutTypes.length > 0 ? [`theme-callouts/${manifestKey}.md`] : [];

  if (customCalloutTypes.length > 0) {
    console.log(
      `  Custom callouts: ${customCalloutTypes.join(", ")} (${customCalloutTypes.length} types)`,
    );
  }

  const modesToExtract = [];
  if (supportsDark) modesToExtract.push("dark");
  if (supportsLight) modesToExtract.push("light");

  for (const mode of modesToExtract) {
    console.log(`  ${mode} mode...`);

    configureVaultForTheme(themeName, mode, snippets, styleSettings);
    await cli.reload();
    await cli.waitForReady({ label: `${themeName} ${mode}` });

    await ensurePluginsEnabled(cli);

    try {
      await cli.loadWorkspace("default");
    } catch {}

    await expandFileExplorer(cli);

    const rawResults = await extractModeStyles(cli, allSelectors, extraFiles);
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
  const themeDir = join(RESULTS_DIR, getResultDirName(themeName));
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

function getAllExtractableThemes() {
  const installedThemes = getInstalledThemes();
  const allThemes = [...installedThemes];

  for (const themeKey of Object.keys(themes)) {
    if (themeKey.includes(".")) {
      const baseName = themeKey.split(".")[0];
      const resolvedFolder = resolveThemeFolderName(baseName);
      const isInstalled = installedThemes.some(
        (t) => t.toLowerCase() === resolvedFolder.toLowerCase(),
      );
      if (isInstalled) {
        allThemes.push(themeKey);
      }
    }
  }

  return allThemes.sort((a, b) => a.localeCompare(b));
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
    const allThemes = getAllExtractableThemes();
    console.log(
      `\nExtracting ${allThemes.length} themes (including variations)...\n`,
    );

    let processed = 0;
    let skipped = 0;
    let failed = 0;
    let totalTime = 0;
    const startTime = Date.now();

    for (let i = 0; i < allThemes.length; i++) {
      const themeName = allThemes[i];
      console.log(`[${i + 1}/${allThemes.length}] ${themeName}`);

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
