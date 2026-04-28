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
import { extractFonts } from "./font-extractor.js";

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
  "theme-code/syntax-samples.md",
  "theme-properties/note-properties.md",
  "theme-canvas/test-canvas.canvas",
  "theme-bases/bases-table.md",
  "theme-bases/bases-list.md",
  "theme-bases/bases-cards.md",
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

  async hoverOverExplorerItem() {
    try {
      await this.eval(`
        (() => {
          const el = document.querySelector(".nav-folder-title");
          if (el) {
            el.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
            el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
          }
        })();
      `);
      await this.sleep(300);
    } catch {
      // Explorer hover failed, continue
    }
  }

  async hoverOverExplorerFile() {
    try {
      await this.eval(`
        (() => {
          const el = document.querySelector(".nav-file-title");
          if (el) {
            el.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
            el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
          }
        })();
      `);
      await this.sleep(300);
    } catch {
      // Explorer file hover failed, continue
    }
  }

  async hoverOverSearchResult() {
    try {
      await this.eval(`
        (() => {
          const el = document.querySelector(".search-result-file-title");
          if (el) {
            el.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
            el.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
          }
        })();
      `);
      await this.sleep(300);
    } catch {
      // Search hover failed, continue
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

    // CSS custom properties that should always be preserved on callout
    // elements, even when they match the html/body baseline. These are
    // per-element overrides in Obsidian that getComputedStyle returns
    // as inherited values indistinguishable from the :root definition.
    const CALLOUT_PRESERVE_VARS = new Set([
      "--callout-color",
      "--callout-icon",
    ]);

    function getAllCssVars(style, baseline, selector, el) {
      const vars = {};
      const isCallout = selector && selector.includes(".callout");
      for (const prop of allVarNames) {
        const val = style.getPropertyValue(prop);
        if (val && val.trim()) {
          const trimmed = val.trim();
          // If a baseline is provided, only include vars that differ from it
          // Exception: always preserve callout-critical vars on callout elements
          if (baseline && baseline[prop] !== undefined && baseline[prop] === trimmed) {
            if (!(isCallout && CALLOUT_PRESERVE_VARS.has(prop))) {
              continue;
            }
          }
          vars[prop] = el ? resolveAuthoredValue(el, prop, trimmed) : trimmed;
        }
      }
      return vars;
    }

    const SHORTHAND_TO_LONGHANDS = {
      "border": ["border-top-color","border-right-color","border-bottom-color","border-left-color",
                  "border-top-width","border-right-width","border-bottom-width","border-left-width",
                  "border-top-style","border-right-style","border-bottom-style","border-left-style"],
      "border-color": ["border-top-color","border-right-color","border-bottom-color","border-left-color"],
      "border-top": ["border-top-color","border-top-width","border-top-style"],
      "border-right": ["border-right-color","border-right-width","border-right-style"],
      "border-bottom": ["border-bottom-color","border-bottom-width","border-bottom-style"],
      "border-left": ["border-left-color","border-left-width","border-left-style"],
      "outline": ["outline-color","outline-width","outline-style"],
      "background": ["background-color","background-image"],
      "text-decoration": ["text-decoration-color","text-decoration-line","text-decoration-style","text-decoration-thickness"],
    };

    function computeSpecificity(selector) {
      let s = selector.trim();
      let a = 0, b = 0, c = 0;

      // Strip :where() content (0 specificity)
      s = s.replace(/:where\([^)]*\)/g, "");

      // Handle :is(), :not(), :has() — take max specificity of arguments
      const pseudoFuncRe = /:(is|not|has)\(([^)]*)\)/g;
      let funcMatch;
      while ((funcMatch = pseudoFuncRe.exec(s)) !== null) {
        const args = funcMatch[2].split(",");
        let maxA = 0, maxB = 0, maxC = 0;
        for (const arg of args) {
          const [ia, ib, ic] = computeSpecificity(arg);
          if (ia > maxA || (ia === maxA && ib > maxB) || (ia === maxA && ib === maxB && ic > maxC)) {
            maxA = ia; maxB = ib; maxC = ic;
          }
        }
        a += maxA; b += maxB; c += maxC;
      }
      s = s.replace(pseudoFuncRe, "");

      // #id
      const ids = s.match(/#[a-zA-Z_-][a-zA-Z0-9_-]*/g);
      if (ids) a += ids.length;

      // .class, [attr], :pseudo-class (not pseudo-elements)
      const classes = s.match(/\.[a-zA-Z_-][a-zA-Z0-9_-]*/g);
      if (classes) b += classes.length;
      const attrs = s.match(/\[[^\]]*\]/g);
      if (attrs) b += attrs.length;
      const pseudoClasses = s.match(/:(?!:)[a-zA-Z-]+/g);
      if (pseudoClasses) b += pseudoClasses.length;

      // type selectors (element names) — exclude * and pseudo-elements
      const stripped = s.replace(/#[a-zA-Z_-][a-zA-Z0-9_-]*/g, "")
        .replace(/\.[a-zA-Z_-][a-zA-Z0-9_-]*/g, "")
        .replace(/\[[^\]]*\]/g, "")
        .replace(/::[a-zA-Z-]+/g, "")
        .replace(/:[a-zA-Z-]+/g, "")
        .replace(/[>+~ ]+/g, " ");
      const types = stripped.trim().split(/\s+/).filter(t => t && t !== "*");
      c += types.length;

      // ::pseudo-element counts as (0,0,1)
      const pseudoEls = selector.match(/::[a-zA-Z-]+/g);
      if (pseudoEls) c += pseudoEls.length;

      return [a, b, c];
    }

    function specificityCmp(a, b) {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[2] - b[2];
    }

    function buildVarCandidateIndex() {
      const index = new Map();
      let order = 0;

      function processRule(rule, containerApplies) {
        if (rule.cssRules && rule.cssRules.length > 0 && !rule.selectorText) {
          let applies = containerApplies;
          if (rule.type === CSSRule.MEDIA_RULE) {
            try { applies = window.matchMedia(rule.conditionText || rule.media.mediaText).matches; }
            catch (e) { applies = true; }
          } else if (rule.type === CSSRule.SUPPORTS_RULE) {
            try { applies = CSS.supports(rule.conditionText); }
            catch (e) { applies = true; }
          }
          for (const nested of rule.cssRules) {
            processRule(nested, applies);
          }
          return;
        }

        if (!rule.selectorText || !rule.style) return;

        for (let i = 0; i < rule.style.length; i++) {
          const prop = rule.style[i];
          const val = rule.style.getPropertyValue(prop);
          if (!val || !val.includes("var(")) continue;
          const important = rule.style.getPropertyPriority(prop) === "important";
          const selectors = rule.selectorText.split(",").map(s => s.trim());
          const specs = selectors.map(s => computeSpecificity(s));

          if (!index.has(prop)) index.set(prop, []);
          index.get(prop).push({
            selectors,
            specs,
            value: val.trim(),
            important,
            order: order++,
            containerApplies,
          });

          // Shorthand: also register for longhands
          const longhands = SHORTHAND_TO_LONGHANDS[prop];
          if (longhands) {
            for (const lh of longhands) {
              if (!index.has(lh)) index.set(lh, []);
              index.get(lh).push({
                selectors,
                specs,
                value: val.trim(),
                important,
                order: order++,
                containerApplies,
                isShorthand: prop,
              });
            }
          }
        }
      }

      for (const sheet of document.styleSheets) {
        try {
          const rules = sheet.cssRules || sheet.rules;
          if (!rules) continue;
          for (const rule of rules) {
            processRule(rule, true);
          }
        } catch (e) {
          // CORS or access error, skip
        }
      }

      return index;
    }

    const varCandidateIndex = buildVarCandidateIndex();

    let matchCache = new Map();
    let matchCacheEl = null;
    function elMatchesSelector(el, selector) {
      if (el !== matchCacheEl) {
        matchCache = new Map();
        matchCacheEl = el;
      }
      if (matchCache.has(selector)) return matchCache.get(selector);
      let result = false;
      try { result = el.matches(selector); } catch (e) {}
      matchCache.set(selector, result);
      return result;
    }

    function extractVarToken(shorthandValue, longhandProp) {
      if (!shorthandValue || !shorthandValue.includes("var(")) return null;
      const isColorProp = longhandProp.endsWith("-color");
      if (!isColorProp) return null;
      const varRe = /var\([^)]+\)/g;
      const matches = shorthandValue.match(varRe);
      if (matches && matches.length === 1) return matches[0];
      if (matches && matches.length > 1) {
        for (const m of matches) {
          if (/color/i.test(m)) return m;
        }
        return matches[matches.length - 1];
      }
      return null;
    }

    function resolveAuthoredValue(el, prop, computedValue) {
      const candidates = varCandidateIndex.get(prop);
      if (!candidates || candidates.length === 0) return computedValue;

      let winner = null;
      let winnerSpec = [-1, -1, -1];
      let winnerOrder = -1;
      let winnerImportant = false;

      for (const candidate of candidates) {
        if (!candidate.containerApplies) continue;
        let matchedSpec = null;
        for (let i = 0; i < candidate.selectors.length; i++) {
          if (elMatchesSelector(el, candidate.selectors[i])) {
            const spec = candidate.specs[i];
            if (!matchedSpec || specificityCmp(spec, matchedSpec) > 0) {
              matchedSpec = spec;
            }
          }
        }
        if (!matchedSpec) continue;

        const dominated =
          (!winnerImportant && candidate.important) ||
          (winnerImportant === candidate.important && (
            specificityCmp(matchedSpec, winnerSpec) > 0 ||
            (specificityCmp(matchedSpec, winnerSpec) === 0 && candidate.order > winnerOrder)
          ));

        if (!winner || dominated) {
          winner = candidate;
          winnerSpec = matchedSpec;
          winnerOrder = candidate.order;
          winnerImportant = candidate.important;
        }
      }

      if (!winner) return computedValue;

      if (winner.isShorthand) {
        const token = extractVarToken(winner.value, prop);
        if (token) {
          const fc = token.indexOf(",");
          const fp = token.indexOf("(");
          if (fc > fp && fc !== -1) return token;
          const lp = token.lastIndexOf(")");
          if (lp === -1) return computedValue;
          return token.slice(0, lp) + ", " + computedValue + token.slice(lp);
        }
        return computedValue;
      }

      const authored = winner.value;

      // Inject computed fallbacks into var() calls that lack one.
      // "rgb(var(--ctp-base))" → "rgb(var(--ctp-base, 30, 30, 46))"
      const injected = authored.replace(
        /var\(\s*(--[a-zA-Z0-9_-]+)\s*\)/g,
        (match, varName) => {
          const refComputed = el
            ? window.getComputedStyle(el).getPropertyValue(varName)?.trim()
            : null;
          if (refComputed) return "var(" + varName + ", " + refComputed + ")";
          return match;
        }
      );
      if (injected !== authored) return injected;
      if (authored.includes("var(") && authored.includes(",")) return authored;
      if (authored.startsWith("var(") && !authored.includes(",")) {
        const lastParen = authored.lastIndexOf(")");
        if (lastParen !== -1) return authored.slice(0, lastParen) + ", " + computedValue + authored.slice(lastParen);
      }
      return injected;
    }

    function getStandardProps(style, el) {
      const props = {};
      for (const prop of styleProps) {
        const val = style.getPropertyValue(prop);
        if (val && val.trim() && val !== "none" && val !== "normal" && val !== "auto") {
          const computed = val.trim();
          props[prop] = el ? resolveAuthoredValue(el, prop, computed) : computed;
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

          const extracted = { ...getAllCssVars(pseudoStyle, baseline, undefined, el), ...getStandardProps(pseudoStyle, el) };
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
    const htmlExtracted = { ...getAllCssVars(htmlStyle, undefined, undefined, document.documentElement), ...getStandardProps(htmlStyle, document.documentElement) };
    if (Object.keys(htmlExtracted).length > 0) {
      results["html"] = htmlExtracted;
    }

    // Extract from body element
    const bodyStyle = window.getComputedStyle(document.body);
    results["body"] = { ...getAllCssVars(bodyStyle, undefined, undefined, document.body), ...getStandardProps(bodyStyle, document.body) };

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
        const extracted = { ...getAllCssVars(style, cssVarBaseline, selector, el), ...getStandardProps(style, el) };

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

      const liSelector = 'li.task-list-item[data-task="' + task + '"]';
      const liStyle = window.getComputedStyle(li);
      const liColor = liStyle.getPropertyValue("color");
      const liTextDec = liStyle.getPropertyValue("text-decoration");
      const liTextDecLine = liStyle.getPropertyValue("text-decoration-line");
      if (liColor || liTextDec || liTextDecLine) {
        if (!results[liSelector]) results[liSelector] = {};
        if (liColor) results[liSelector]["color"] = liColor;
        if (liTextDec) results[liSelector]["text-decoration"] = liTextDec;
        if (liTextDecLine) results[liSelector]["text-decoration-line"] = liTextDecLine;
      }

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

const CALLOUT_PRESERVE_PROPS = new Set(["--callout-color", "--callout-icon"]);

function deduplicateAgainstBaseline(themeData, baseline) {
  if (!baseline) return themeData;

  const result = {};

  for (const [selector, styles] of Object.entries(themeData)) {
    const baselineStyles = baseline[selector] || {};
    const uniqueStyles = {};
    const isCallout = selector.includes(".callout");

    for (const [prop, value] of Object.entries(styles)) {
      if (baselineStyles[prop] !== value) {
        uniqueStyles[prop] = value;
      } else if (isCallout && CALLOUT_PRESERVE_PROPS.has(prop)) {
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

async function extractDOMStructure(cli) {
  try {
    const domData = await cli.eval(`
      (() => {
        const DOM_TARGETS = {
          calloutNote: '.callout[data-callout="note"]',
          calloutWarning: '.callout[data-callout="warning"]',
          codeBlock: 'pre code',
          fileExplorer: '.nav-files-container',
          checkbox: '.task-list-item',
          search: '.search-input-container',
          toc: '.outline-view-outer',
          metadata: '.metadata-container',
        };

        function serialize(el, depth) {
          if (!el || depth > 6) return null;
          const computed = window.getComputedStyle(el);
          return {
            tag: el.tagName.toLowerCase(),
            classes: Array.from(el.classList),
            attrs: Object.fromEntries(
              Array.from(el.attributes)
                .filter(a => a.name !== "class" && a.name !== "style")
                .map(a => [a.name, a.value])
            ),
            styles: {
              color: computed.color,
              backgroundColor: computed.backgroundColor,
              borderColor: computed.borderColor,
              fill: computed.fill,
              stroke: computed.stroke,
            },
            childCount: el.childElementCount,
            children: Array.from(el.children)
              .slice(0, 10)
              .map(c => serialize(c, depth + 1))
              .filter(Boolean),
          };
        }

        const results = {};
        for (const [key, sel] of Object.entries(DOM_TARGETS)) {
          const el = document.querySelector(sel);
          if (el) results[key] = serialize(el, 0);
        }
        return results;
      })();
    `);

    if (domData && typeof domData === "object") {
      const count = Object.keys(domData).length;
      console.log(`    DOM structure: ${count} components captured`);
      return domData;
    }
  } catch (error) {
    console.warn(`    DOM structure: extraction failed: ${error.message}`);
  }
  return null;
}

async function extractCodeTokenColors(cli) {
  try {
    await cli.openFile("theme-code/syntax-samples.md");
    await cli.waitForReady({
      timeout: 5000,
      interval: 300,
      label: "syntax-samples",
    });
    // Allow time for CodeMirror to render syntax highlighting
    await cli.sleep(1000);

    const tokenColors = await cli.eval(`
      (() => {
        const TOKEN_CLASSES = [
          "cm-keyword", "cm-string", "cm-string-2", "cm-comment",
          "cm-number", "cm-operator", "cm-property", "cm-variable",
          "cm-variable-2", "cm-variable-3", "cm-tag", "cm-attribute",
          "cm-type", "cm-builtin", "cm-def", "cm-atom", "cm-qualifier",
          "cm-meta", "cm-header", "cm-hr", "cm-link", "cm-error",
          "cm-bracket", "cm-punctuation",
        ];

        const results = {};
        for (const cls of TOKEN_CLASSES) {
          const el = document.querySelector("." + cls);
          if (!el) continue;
          const computed = window.getComputedStyle(el);
          const tokenName = cls.replace("cm-", "");
          results[tokenName] = {
            color: computed.color,
            fontStyle: computed.fontStyle,
            fontWeight: computed.fontWeight,
            textDecoration: computed.textDecorationLine || computed.textDecoration,
          };
        }

        // Also extract code block background/foreground from the editor or preview
        const codeBlock = document.querySelector("pre code") || document.querySelector(".cm-editor .cm-content");
        if (codeBlock) {
          const computed = window.getComputedStyle(codeBlock);
          results["_codeBlock"] = {
            color: computed.color,
            backgroundColor: computed.backgroundColor,
          };
        }
        const preBlock = document.querySelector("pre") || document.querySelector(".cm-editor");
        if (preBlock) {
          const computed = window.getComputedStyle(preBlock);
          results["_preBlock"] = {
            backgroundColor: computed.backgroundColor,
            borderColor: computed.borderColor,
          };
        }

        // Extract line number color
        const lineNumber = document.querySelector(".cm-lineNumbers .cm-gutterElement")
          || document.querySelector(".cm-gutters");
        if (lineNumber) {
          const computed = window.getComputedStyle(lineNumber);
          results["_lineNumber"] = {
            color: computed.color,
            backgroundColor: computed.backgroundColor,
          };
        }

        return results;
      })();
    `);

    if (tokenColors && typeof tokenColors === "object") {
      const count = Object.keys(tokenColors).length;
      console.log(`    syntax tokens: ${count} token types extracted`);
      return tokenColors;
    }
  } catch (error) {
    console.warn(`    syntax tokens: extraction failed: ${error.message}`);
  }
  return null;
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
  const codeTokens = { dark: null, light: null };
  const domStructure = { dark: null, light: null };
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

    // Extract syntax highlighting token colors for this mode
    codeTokens[mode] = await extractCodeTokenColors(cli);
    domStructure[mode] = await extractDOMStructure(cli);

    const rawCount = Object.keys(rawResults).length;
    const dedupedCount = Object.keys(results[mode]).length;
    console.log(
      `  ${mode}: ${rawCount} raw -> ${dedupedCount} unique selectors`,
    );
  }

  resetVaultConfig();

  return { styles: results, codeTokens, domStructure };
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

function saveResults(themeName, results, codeTokens, domStructure) {
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

  if (codeTokens) {
    if (codeTokens.dark && Object.keys(codeTokens.dark).length > 0) {
      const sorted = sortObjectDeep(codeTokens.dark);
      writeFileSync(
        join(themeDir, "dark-code-tokens.json"),
        JSON.stringify(sorted, null, 2),
      );
      console.log(`  Saved: ${themeDir}/dark-code-tokens.json`);
    }

    if (codeTokens.light && Object.keys(codeTokens.light).length > 0) {
      const sorted = sortObjectDeep(codeTokens.light);
      writeFileSync(
        join(themeDir, "light-code-tokens.json"),
        JSON.stringify(sorted, null, 2),
      );
      console.log(`  Saved: ${themeDir}/light-code-tokens.json`);
    }
  }

  if (domStructure) {
    if (domStructure.dark && Object.keys(domStructure.dark).length > 0) {
      writeFileSync(
        join(themeDir, "dark-dom.json"),
        JSON.stringify(domStructure.dark, null, 2),
      );
      console.log(`  Saved: ${themeDir}/dark-dom.json`);
    }

    if (domStructure.light && Object.keys(domStructure.light).length > 0) {
      writeFileSync(
        join(themeDir, "light-dom.json"),
        JSON.stringify(domStructure.light, null, 2),
      );
      console.log(`  Saved: ${themeDir}/light-dom.json`);
    }
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
    const {
      styles: results,
      codeTokens,
      domStructure,
    } = await extractThemeStyles(cli, themeName, baseline);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

    saveResults(themeName, results, codeTokens, domStructure);

    try {
      // Extract fonts from source CSS
      const fontFolderName = resolveThemeFolderName(themeName);
      const fontCssPath = join(
        VAULT_PATH,
        ".obsidian/themes",
        fontFolderName,
        "theme.css",
      );
      const fontLegacyPath = join(
        VAULT_PATH,
        ".obsidian/themes",
        fontFolderName,
        "obsidian.css",
      );
      const fontSourcePath = existsSync(fontCssPath)
        ? fontCssPath
        : existsSync(fontLegacyPath)
          ? fontLegacyPath
          : null;
      if (fontSourcePath) {
        const resultDirName = getResultDirName(themeName);
        await extractFonts(resultDirName, fontSourcePath);
      }
    } catch (error) {
      console.warn(`  Font extraction skipped: ${error.message}`);
    }

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
