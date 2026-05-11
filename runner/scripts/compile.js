import postcssColorMixFunction from "@csstools/postcss-color-mix-function";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { cpus } from "os";
import { dirname, join, resolve } from "path";
import Piscina from "piscina";
import postcss from "postcss";
import calc from "postcss-calc";
import postcssColorConverter from "postcss-color-converter";
import postcssMergeLonghand from "postcss-merge-longhand";
import postcssScss from "postcss-scss";
import rewriteObsidianSelectors from "./selector-rewriter.mjs";
import { compileString } from "sass";
import * as lucideIcons from "@lucide/icons";
import { fileURLToPath } from "url";
import getManifestCollection from "../../extensions/manifest.mjs";
import getThemeCollection from "../../extensions/themelist.mjs";
import {
  getExtras,
  getFonts,
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
} from "../../util/util.mjs";
import { config as manualConfig } from "./config.js";
import { generateAutoConfig, mergeConfigs } from "./auto-config.mjs";

const USE_AUTO_CONFIG = process.argv.includes("--auto");
const config = manualConfig;
import {
  closeDb,
  getAllStylesForThemeMode,
  getAllVariables,
  getCheckboxIconStyles,
  getStyle,
  initializeDb,
  preparedStatements,
} from "./database/driver.js";
import {
  dark as defaultDark,
  light as defaultLight,
} from "./default-styles.js";
import normalizeColorToRgbTriplet from "../../extensions/packages/normalize-color-to-rgb-triplet.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CALLOUT_MANIFEST_PATH = join(__dirname, "../../theme-callout-map.json");
let calloutManifest = {};
if (existsSync(CALLOUT_MANIFEST_PATH)) {
  calloutManifest = JSON.parse(readFileSync(CALLOUT_MANIFEST_PATH, "utf-8"));
}

let themeName;
let optionSetName = "default";
let mode;

initializeDb();

const singleThemeArg =
  process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : null;
const fullThemeCollection = getThemeCollection();
const themeCollection = singleThemeArg
  ? fullThemeCollection.filter((m) => {
      const key = `${sanitize(m.name.split(".")[0])}${m.name.includes(".") ? `.${sanitize(m.name.split(".").slice(1).join("."))}` : ""}`;
      return (
        key === singleThemeArg ||
        m.name === singleThemeArg ||
        sanitize(m.name) === singleThemeArg ||
        m.name.toLowerCase() === singleThemeArg.toLowerCase()
      );
    })
  : fullThemeCollection;

if (singleThemeArg) {
  if (themeCollection.length === 0) {
    console.error(`Theme "${singleThemeArg}" not found in theme collection.`);
    process.exit(1);
  }
  console.log(
    `Single-theme mode: compiling ${themeCollection.length} theme(s) matching "${singleThemeArg}"`,
  );
}

const themesJsonData = JSON.parse(readFileSync("./themes.json", "utf-8"));

function generateStyleSettingsDefaults(settings, mode) {
  const declarations = [];
  for (const setting of settings) {
    if (!setting || !setting.type) continue;
    const constraints = setting.constraints || {};
    const defaults = setting.defaults || {};
    const settingFormat = setting.format ?? constraints.format ?? "";

    if (setting.type === "variable-themed-color") {
      const defaultVal =
        mode === "dark"
          ? (setting["default-dark"] ?? defaults.dark)
          : (setting["default-light"] ?? defaults.light);
      if (defaultVal && defaultVal !== "#" && defaultVal !== "") {
        if (settingFormat === "hsl-split") {
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
          value = `${setting.default}${settingFormat}`;
        } else {
          value = setting.default;
        }
        declarations.push(`  --${setting.id}: ${value};`);
      }
    }
  }
  return declarations.join("\n");
}

const neededSelectors = new Set(["body"]);
config.forEach((mapping) => {
  if (mapping.obsidianSelector) {
    neededSelectors.add(mapping.obsidianSelector);
  }
});

const fontCache = new Map();
const fontFiles = readdirSync("./extras/fonts")
  .sort()
  .filter((file) => file.endsWith(".scss"))
  .map((file) => file.replace(/\.scss$/, ""));
const availableFonts = new Set(fontFiles);
const genericFontNames = new Set([
  "serif",
  "sans-serif",
  "monospace",
  "cursive",
  "fantasy",
  "system-ui",
  "ui-serif",
  "ui-sans-serif",
  "ui-monospace",
  "ui-rounded",
  "emoji",
  "math",
  "fangsong",
  "inherit",
  "initial",
  "unset",
]);

function normalizeFontName(name) {
  return name
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolveFontFileName(fontName) {
  const normalized = normalizeFontName(fontName);
  if (availableFonts.has(normalized)) return normalized;
  return null;
}

const FONT_TAG_PATH = resolve("./plugin/src/fonts/font-tag.ts");

function readFontTag() {
  if (!existsSync(FONT_TAG_PATH)) return null;
  const content = readFileSync(FONT_TAG_PATH, "utf8");
  const match = content.match(/export const FONT_TAG\s*=\s*["']([^"']+)["']/);
  return match ? match[1] : null;
}

function resolveManifestWithBase(themeName) {
  const manifestPath = resolve(`./fonts/${themeName}/manifest.json`);
  if (!existsSync(manifestPath)) return null;
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  if (manifest.base) {
    return resolveManifestWithBase(manifest.base);
  }
  return { manifest, fontDir: themeName };
}

function generateFontCSSFromManifest(themeName) {
  const resolved = resolveManifestWithBase(themeName);
  if (!resolved) return null;

  const { manifest, fontDir } = resolved;
  if (!manifest.fonts || manifest.fonts.length === 0) return "";

  const tag = readFontTag();
  if (!tag) {
    console.warn(
      `Warning: FONT_TAG not found, skipping jsDelivr font generation for ${themeName}`,
    );
    return null;
  }

  return manifest.fonts
    .map(
      (font) =>
        `@font-face {\n` +
        `  font-family: "${font.family}";\n` +
        `  font-style: ${font.style};\n` +
        `  font-weight: ${font.weight};\n` +
        `  src: url("https://cdn.jsdelivr.net/gh/saberzero1/quartz-themes@${tag}/fonts/${fontDir}/${font.file}") format("${font.format}");\n` +
        (font.unicodeRange ? `  unicode-range: ${font.unicodeRange};\n` : "") +
        `}`,
    )
    .join("\n");
}

function readFontManifest(themeName) {
  const resolved = resolveManifestWithBase(themeName);
  if (!resolved) return null;
  return resolved.manifest;
}

function extractFontNamesFromValue(value) {
  if (!value || value.includes("var(")) return [];
  return value
    .split(",")
    .map((part) => part.trim().replace(/['"]/g, ""))
    .filter((name) => name.length > 0 && !genericFontNames.has(name));
}

function collectAutoFonts(bodyVariables) {
  const names = new Set();
  [bodyVariables.light, bodyVariables.dark].forEach((vars) => {
    for (const [key, value] of Object.entries(vars)) {
      if (!key.includes("font")) continue;
      extractFontNamesFromValue(value).forEach((name) => {
        const resolved = resolveFontFileName(name);
        if (resolved) names.add(resolved);
      });
    }
  });
  return Array.from(names);
}

function renderLucideNodes(nodes) {
  return nodes
    .map((node) => {
      const [tag, attrs, children] = node;
      const attrStr = Object.entries(attrs)
        .filter(([k]) => k !== "key")
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ");
      if (children && children.length > 0) {
        return `<${tag} ${attrStr}>${renderLucideNodes(children)}</${tag}>`;
      }
      return `<${tag} ${attrStr}/>`;
    })
    .join("");
}

function buildLucideSvgString(icon) {
  const size = icon?.size ?? icon?.width ?? 24;
  const children = renderLucideNodes(icon.node || []);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" ` +
    `viewBox="0 0 ${size} ${size}" fill="none" stroke="currentColor" ` +
    `stroke-width="2" stroke-linecap="round" stroke-linejoin="round">` +
    `${children}</svg>`
  );
}

function svgToDataUri(svg) {
  const encoded = svg
    .replace(
      "<svg",
      ~svg.indexOf("xmlns")
        ? "<svg"
        : '<svg xmlns="http://www.w3.org/2000/svg"',
    )
    .replace(/"/g, "'")
    .replace(/%/g, "%25")
    .replace(/#/g, "%23")
    .replace(/{/g, "%7B")
    .replace(/}/g, "%7D")
    .replace(/</g, "%3C")
    .replace(/>/g, "%3E")
    .replace(/\s+/g, " ");
  return `url("data:image/svg+xml,${encoded}")`;
}

function normalizeSvgDataUriValue(value) {
  if (!value || typeof value !== "string") return value;
  const hasSvg = /<svg/i.test(value);
  const hasData = /data:image\/svg\+xml/i.test(value);
  const normalizeHeaders = (input) =>
    input
      .replace(
        /data:image\/svg\+xml\s*;?\s*charset=[^,]+,/gi,
        "data:image/svg+xml,",
      )
      .replace(/data:image\/svg\+xml\s*;?\s*utf8,/gi, "data:image/svg+xml,");
  const encodeDataUriQuotes = (input) => input.replace(/"/g, "%22");
  const normalizedData = hasData ? normalizeHeaders(value) : value;
  if (hasData) {
    const wrappedMatch = normalizedData.match(
      /^(\s*)url\(\"([\s\S]*)\"\)(.*)$/i,
    );
    if (wrappedMatch) {
      const [, leading, rawContent, trailing] = wrappedMatch;
      let content = rawContent;
      if (content.startsWith("%22")) content = content.slice(3);
      if (content.endsWith("%22")) content = content.slice(0, -3);
      if (/data:image\/svg\+xml/i.test(content)) {
        if (/<svg/i.test(content)) {
          const svgStart = content.search(/<svg/i);
          return `${leading}${svgToDataUri(content.slice(svgStart))}${trailing}`;
        }
        const commaIdx = content.indexOf(",");
        if (commaIdx !== -1) {
          let svgPart = content.slice(commaIdx + 1);
          svgPart = svgPart.replace(/\\'/g, "'").replace(/\\"/g, '"');
          try {
            let decoded = decodeURIComponent(svgPart);
            if (/%[0-9A-Fa-f]{2}/.test(decoded)) {
              try {
                decoded = decodeURIComponent(decoded);
              } catch (_) {}
            }
            if (decoded.includes("<svg")) {
              return `${leading}${svgToDataUri(decoded)}${trailing}`;
            }
          } catch (_) {}
        }
        const normalizedContent = encodeDataUriQuotes(
          normalizeHeaders(content),
        );
        return `${leading}url("${normalizedContent}")${trailing}`;
      }
    }
  }
  const normalizeUrlValue = (input) => {
    const normalizeContent = (content, fallbackMatch) => {
      let normalized = content;
      if (
        (normalized.startsWith('"') && normalized.endsWith('"')) ||
        (normalized.startsWith("'") && normalized.endsWith("'"))
      ) {
        normalized = normalized.slice(1, -1);
      }
      if (
        !/<svg/i.test(normalized) &&
        !/data:image\/svg\+xml/i.test(normalized)
      ) {
        return fallbackMatch;
      }
      const svgStart = normalized.search(/<svg/i);
      if (svgStart !== -1) {
        return svgToDataUri(normalized.slice(svgStart));
      }
      let decodable = normalized;
      if (decodable.startsWith("%22")) {
        decodable = decodable.slice(3);
      }
      if (decodable.endsWith("%22")) {
        decodable = decodable.slice(0, -3);
      }
      const commaIdx = decodable.indexOf(",");
      if (commaIdx !== -1 && /data:image\/svg\+xml/i.test(decodable)) {
        let svgPart = decodable.slice(commaIdx + 1);
        svgPart = svgPart.replace(/\\'/g, "'").replace(/\\"/g, '"');
        try {
          let decoded = decodeURIComponent(svgPart);
          if (/%[0-9A-Fa-f]{2}/.test(decoded)) {
            try {
              decoded = decodeURIComponent(decoded);
            } catch (_) {}
          }
          if (decoded.includes("<svg")) {
            return svgToDataUri(decoded);
          }
        } catch (_) {}
      }
      const headerNormalized = normalizeHeaders(normalized);
      const quoteSafe = encodeDataUriQuotes(headerNormalized);
      return `url("${quoteSafe}")`;
    };

    const extractUrlBlocks = (str) => {
      let result = "";
      let i = 0;
      while (i < str.length) {
        const urlStart = str.toLowerCase().indexOf("url(", i);
        if (urlStart === -1) {
          result += str.slice(i);
          break;
        }
        result += str.slice(i, urlStart);
        const openParen = urlStart + 4;
        const quoteChar = str[openParen];
        if (quoteChar === '"' || quoteChar === "'") {
          const contentStart = openParen + 1;
          const closePattern = quoteChar + ")";
          const closeIdx = str.lastIndexOf(
            closePattern,
            str.indexOf(")", contentStart + 1) === -1 ? str.length : undefined,
          );
          let searchFrom = contentStart;
          let endIdx = -1;
          while (searchFrom < str.length) {
            const candidate = str.indexOf(closePattern, searchFrom);
            if (candidate === -1) break;
            endIdx = candidate;
            const after = str
              .slice(candidate + closePattern.length)
              .trimStart();
            if (!after || /^[;,}\s]/.test(after) || /^[a-z]/i.test(after))
              break;
            searchFrom = candidate + 1;
          }
          if (endIdx !== -1) {
            const content = str.slice(contentStart, endIdx);
            result += normalizeContent(
              content,
              str.slice(urlStart, endIdx + closePattern.length),
            );
            i = endIdx + closePattern.length;
          } else {
            result += str.slice(urlStart, openParen + 1);
            i = openParen + 1;
          }
        } else {
          const closeParen = str.indexOf(")", openParen);
          if (closeParen !== -1) {
            const content = str.slice(openParen, closeParen).trim();
            result += normalizeContent(
              content,
              str.slice(urlStart, closeParen + 1),
            );
            i = closeParen + 1;
          } else {
            result += str.slice(urlStart, openParen);
            i = openParen;
          }
        }
      }
      return result;
    };

    return extractUrlBlocks(input);
  };

  if (/url\(/i.test(normalizedData)) {
    const normalizedUrl = normalizeUrlValue(normalizedData);
    if (normalizedUrl !== normalizedData) return normalizedUrl;
  }

  if (hasData) {
    const sanitizedData = encodeDataUriQuotes(normalizedData);
    if (/%3C/i.test(sanitizedData)) return sanitizedData;
    if (hasSvg) {
      const svgStart = sanitizedData.search(/<svg/i);
      if (svgStart !== -1) {
        return svgToDataUri(sanitizedData.slice(svgStart));
      }
    }
    return sanitizedData;
  }

  return normalizedData;
}

const calloutIconAliases = {
  "quote-glyph": "quote",
  "library-big": "library",
  "book-open": "book-open",
  "message-square": "message-square",
  "check-square": "check-square",
  "clock-12": "clock-12",
  "clock-4": "clock-4",
  "code-2": "code-2",
  "code-xml": "code-xml",
  "flag-triangle-right": "flag-triangle-right",
  "help-circle": "help-circle",
  "layout-dashboard": "layout-dashboard",
  "sticky-note": "sticky-note",
  "user-check": "user-check",
  "user-plus": "user-plus",
  "user-x": "user-x",
  "thumbs-up": "thumbs-up",
  "thumbs-down": "thumbs-down",
  "at-sign": "at-sign",
  "circle-check-big": "circle-check-big",
};

function normalizeCalloutIconName(value) {
  if (!value) return null;
  const trimmed = value.trim();
  if (
    trimmed === "none" ||
    trimmed === "unset" ||
    trimmed === "" ||
    trimmed === "normal"
  ) {
    return null;
  }
  if (trimmed.startsWith("url(")) return trimmed;
  if (trimmed.startsWith("var(")) return trimmed;
  if (trimmed.includes("<svg")) return trimmed;
  const cleaned = trimmed.replace(/['"]/g, "");
  if (/[{};]/.test(cleaned)) return null;
  const stripped = cleaned.replace(/^lucide[:\-]/, "").replace(/^lucide-/, "");
  return stripped;
}

const CM_TO_QT_TOKEN = {
  keyword: "keyword",
  string: "string",
  "string-2": "string",
  comment: "comment",
  number: "number",
  operator: "operator",
  property: "property",
  variable: "variable",
  "variable-2": "variable-2",
  "variable-3": "variable-3",
  tag: "tag",
  attribute: "attribute",
  type: "type",
  builtin: "builtin",
  def: "function",
  atom: "atom",
  qualifier: "qualifier",
  meta: "meta",
  header: "header",
  bracket: "bracket",
  punctuation: "punctuation",
  link: "link",
  error: "error",
};

function buildCodeTokenCSS(codeTokens, hasDark, hasLight) {
  if (!codeTokens) return "";
  const darkTokens = codeTokens.dark;
  const lightTokens = codeTokens.light;
  if (!darkTokens && !lightTokens) return "";

  const buildVarsBlock = (tokens) => {
    if (!tokens) return "";
    const lines = [];
    for (const [cmToken, props] of Object.entries(tokens)) {
      if (cmToken.startsWith("_")) continue;
      const qtToken = CM_TO_QT_TOKEN[cmToken];
      if (!qtToken || !props.color) continue;
      lines.push(`  --qt-code-${qtToken}: ${props.color};`);
    }
    if (tokens._codeBlock?.color) {
      lines.push(`  --qt-code-default: ${tokens._codeBlock.color};`);
    }
    if (tokens._preBlock?.backgroundColor) {
      lines.push(
        `  --qt-code-background: ${tokens._preBlock.backgroundColor};`,
      );
    }
    if (tokens._preBlock?.borderColor) {
      lines.push(`  --qt-code-border-color: ${tokens._preBlock.borderColor};`);
    }
    if (tokens._lineNumber?.color) {
      lines.push(`  --qt-code-line-number: ${tokens._lineNumber.color};`);
    }
    return lines.join("\n");
  };

  let css = "";

  if (hasDark && hasLight) {
    const lightVars = buildVarsBlock(lightTokens);
    const darkVars = buildVarsBlock(darkTokens);
    if (lightVars) css += `html[saved-theme="light"] body {\n${lightVars}\n}\n`;
    if (darkVars) css += `html[saved-theme="dark"] body {\n${darkVars}\n}\n`;
  } else if (hasDark) {
    const darkVars = buildVarsBlock(darkTokens);
    if (darkVars) css += `body {\n${darkVars}\n}\n`;
  } else if (hasLight) {
    const lightVars = buildVarsBlock(lightTokens);
    if (lightVars) css += `body {\n${lightVars}\n}\n`;
  }

  return css;
}

function toPascalCase(value) {
  return value
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function resolveCalloutIconUri(value) {
  const normalized = normalizeCalloutIconName(value);
  if (!normalized) return { uri: null, reason: "empty" };
  if (normalized.startsWith("url(")) return { uri: normalized };
  if (normalized.startsWith("var(")) return { uri: normalized };
  if (normalized.includes("<svg")) return { uri: svgToDataUri(normalized) };

  if (/\p{Extended_Pictographic}/u.test(normalized)) {
    return { uri: null, reason: "emoji" };
  }

  const alias = calloutIconAliases[normalized] || normalized;
  const candidates = [
    alias,
    toPascalCase(alias),
    alias.charAt(0).toUpperCase() + alias.slice(1),
  ];

  for (const name of candidates) {
    const icon = lucideIcons[name];
    if (icon && icon.node) {
      return { uri: svgToDataUri(buildLucideSvgString(icon)) };
    }
  }
  return { uri: null, reason: "unknown" };
}

function extractCalloutIconMap(dataSet, warnings) {
  const iconMap = {};
  if (!dataSet) return iconMap;
  for (const [selector, props] of Object.entries(dataSet)) {
    const match = selector.match(/\[data-callout="([^"]+)"\]/);
    if (!match) continue;
    const calloutType = match[1];
    const iconValue = props["--callout-icon"];
    const resolved = resolveCalloutIconUri(iconValue);
    if (resolved.uri) iconMap[calloutType] = resolved.uri;
    if (!resolved.uri && iconValue) {
      warnings?.add(`${calloutType}: ${iconValue}`);
    }
  }
  return iconMap;
}

function buildCalloutIconCSS(iconMap) {
  const entries = Object.entries(iconMap);
  if (entries.length === 0) return "";
  return entries
    .map(
      ([type, uri]) =>
        `.callout[data-callout="${type}"] { --callout-icon: ${uri}; }`,
    )
    .join("\n");
}
function getCachedFontString(fontName) {
  if (fontCache.has(fontName)) {
    return fontCache.get(fontName);
  }
  const fontPath = `./extras/fonts/${fontName}.scss`;
  const content = existsSync(fontPath) ? readFileSync(fontPath, "utf8") : "";
  fontCache.set(fontName, content);
  return content;
}

const themeDataList = [];

themeCollection.forEach((manifest) => {
  const [name, variation] = manifest.name.split(".");
  themeName = `${sanitize(name)}${variation ? `.${sanitize(variation)}` : ""}`;

  if (!existsSync(`./runner/results/${themeName}`)) {
    mkdirSync(`./runner/results/${themeName}`);
  }
  if (!existsSync(`./themes/${themeName}`)) {
    mkdirSync(`./themes/${themeName}`);
  }
  if (!existsSync(`./extras/themes/${themeName}`)) {
    mkdirSync(`./extras/themes/${themeName}`);
  }
  if (!existsSync(`./extras/themes/${themeName}/_index.scss`)) {
    writeFileSync(`./extras/themes/${themeName}/_index.scss`, "", "utf8");
  }
  if (!existsSync(`./extras/themes/${themeName}/publish.css`)) {
    writeFileSync(`./extras/themes/${themeName}/publish.css`, "", "utf8");
  }

  const quartzMappings = {};
  const publishMappings = {};
  const bodyVariables = { dark: {}, light: {} };
  const checkboxIcons = { dark: new Map(), light: new Map() };

  // Compute effective config: merge auto-discovered entries when --auto is set
  let effectiveConfig = config;
  if (USE_AUTO_CONFIG) {
    try {
      const autoEntries = generateAutoConfig(themeName);
      if (autoEntries.length > 0) {
        effectiveConfig = mergeConfigs(config, autoEntries);
        console.log(
          `  Auto-config: ${autoEntries.length} auto entries, ${effectiveConfig.length} total (merged)`,
        );
      }
    } catch (e) {
      console.warn(`  Auto-config failed for ${themeName}: ${e.message}`);
    }
  }

  // Build needed selectors from effective config
  const effectiveNeededSelectors = new Set(["body"]);
  effectiveConfig.forEach((mapping) => {
    if (mapping.obsidianSelector) {
      effectiveNeededSelectors.add(mapping.obsidianSelector);
    }
  });

  manifest.modes.forEach((m) => {
    mode = m;
    console.log(`Processing theme: ${themeName} (${mode})`);

    if (!quartzMappings[mode]) quartzMappings[mode] = {};
    if (!publishMappings[mode]) publishMappings[mode] = {};

    const isDarkMode = mode === "dark";

    const styleMap = getAllStylesForThemeMode(
      themeName,
      optionSetName,
      isDarkMode,
      USE_AUTO_CONFIG ? effectiveNeededSelectors : neededSelectors,
    );

    const getStyleFromMap = (selector, property) => {
      const key = `${selector}::${property}`;
      return styleMap.get(key) ?? fallbackStyle(selector, property);
    };

    const vars = getAllVariables(themeName, optionSetName, isDarkMode, "body");
    if (isDarkMode) {
      bodyVariables.dark = vars;
    } else {
      bodyVariables.light = vars;
    }

    checkboxIcons[mode] = getCheckboxIconStyles(
      themeName,
      optionSetName,
      isDarkMode,
    );

    effectiveConfig.forEach((mapping) => {
      if (mapping.quartzSelector) {
        if (!quartzMappings[mode][mapping.quartzSelector]) {
          quartzMappings[mode][mapping.quartzSelector] = {};
        }
        mapping.properties.forEach((property) => {
          quartzMappings[mode][mapping.quartzSelector][property] =
            getStyleFromMap(mapping.obsidianSelector, property);
        });
      }
      if (mapping.publishSelector) {
        if (!publishMappings[mode][mapping.publishSelector]) {
          publishMappings[mode][mapping.publishSelector] = {};
        }
        mapping.properties.forEach((property) => {
          publishMappings[mode][mapping.publishSelector][property] =
            getStyleFromMap(mapping.obsidianSelector, property);
        });
      }
    });

    console.log(`Finished processing theme: ${themeName} (${mode})`);
  });

  const codeTokens = { dark: null, light: null };
  for (const m of manifest.modes) {
    const tokenFile = join(
      `./runner/results/${themeName}`,
      `${m}-code-tokens.json`,
    );
    if (existsSync(tokenFile)) {
      try {
        codeTokens[m] = JSON.parse(readFileSync(tokenFile, "utf-8"));
      } catch {}
    }
  }

  themeDataList.push({
    manifest,
    themeName,
    quartzMappings,
    publishMappings,
    bodyVariables,
    checkboxIcons,
    codeTokens,
  });
});

closeDb();

const piscina = new Piscina({
  filename: join(__dirname, "css-worker.js"),
  maxThreads: Math.min(cpus().length, 8),
});

console.log(
  `\nGenerating CSS for ${themeDataList.length} themes using ${piscina.threads} workers...`,
);

const cssGenerationTasks = themeDataList.map((themeData) => {
  const { scssContent, publishScssContent } = buildCSSStrings(themeData);
  return piscina.run({
    scssContent,
    publishScssContent,
    themeName: themeData.themeName,
  });
});

Promise.all(cssGenerationTasks)
  .then((results) => {
    results.forEach(({ themeName, resultScss, resultPublishCss }) => {
      const targetFile = `./runner/results/${themeName}/_index.scss`;
      const targetPublishFile = `./runner/results/${themeName}/publish.css`;
      writeFileSync(targetFile, resultScss, "utf8");
      writeFileSync(targetPublishFile, resultPublishCss, "utf8");
      console.log(`Generated Styles for theme: ${themeName}`);
    });
    console.log("\nAll themes compiled successfully.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error during CSS generation:", err);
    process.exit(1);
  });

// --- Utilities ---

// Helper to merge longhand properties into shorthand and optimize CSS
function mergeLonghandProperties(css, syntax = "scss") {
  try {
    const postcssOptions = { from: undefined };

    if (syntax === "scss") {
      postcssOptions.syntax = postcssScss;
    }

    const processor = postcss()
      .use(rewriteObsidianSelectors())
      .use(postcssMergeLonghand())
      .use(calc({ preserve: false })); // Resolve calc() where possible
    // .use(postcssColorConverter({ outputColorFormat: "hex" })); // Convert colors to hex

    const result = processor.process(css, postcssOptions).css;
    return result;
  } catch (e) {
    console.warn("Warning: Could not optimize CSS properties:", e.message);
    return css;
  }
}

function insertExtras(manifest, themeName) {
  const basePath = `./extras/themes/${themeName}`;
  const files = ["_index.scss", ...(manifest.extras || [])];

  let result = "";

  // append file contents
  files.forEach((file) => {
    if (!existsSync(basePath)) {
      mkdirSync(basePath, "", "utf8");
    }
    if (!existsSync(`${basePath}/${file}`)) {
      writeFileSync(`${basePath}/${file}`, "", "utf8");
    }
    const contents = readFileSync(`${basePath}/${file}`, "utf8");
    if (contents && contents.length > 0) {
      result += contents + "\n";
    }
  });

  return result;
}

function buildCheckboxRules(checkboxMap) {
  if (!checkboxMap || checkboxMap.size === 0) return "";

  const escapeAttrValue = (value) =>
    value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

  const normalizeMaskImage = (value) => {
    if (!value || typeof value !== "string") return value;
    const normalizedValue = normalizeSvgDataUriValue(value);
    if (normalizedValue !== value && normalizedValue) {
      if (
        typeof normalizedValue === "string" &&
        normalizedValue.includes("data:image/svg+xml") &&
        !normalizedValue.trim().startsWith("url(")
      ) {
        return `url("${normalizedValue}")`;
      }
      return normalizedValue;
    }
    const match = value.match(/url\((.*)\)/i);
    if (!match) return value;
    let content = match[1].trim();
    if (
      (content.startsWith('"') && content.endsWith('"')) ||
      (content.startsWith("'") && content.endsWith("'"))
    ) {
      content = content.slice(1, -1);
    }
    if (content.includes("<svg")) {
      const svgStart = content.indexOf("<svg");
      return svgToDataUri(content.slice(svgStart));
    }
    if (content.startsWith("data:image/svg+xml")) {
      const commaIdx = content.indexOf(",");
      if (commaIdx === -1) return value;
      let svgPart = content.slice(commaIdx + 1);
      // Strip backslash escapes (e.g. \' → ' and \" → ")
      svgPart = svgPart.replace(/\\'/g, "'").replace(/\\"/g, '"');
      try {
        let decoded = decodeURIComponent(svgPart);
        // Fix double-encoding (%2528 → %28 → decoded again)
        if (/%[0-9A-Fa-f]{2}/.test(decoded)) {
          try {
            decoded = decodeURIComponent(decoded);
          } catch (_) {}
        }
        if (decoded.includes("<svg")) {
          return svgToDataUri(decoded);
        }
      } catch (_) {}
      return `url("${content}")`;
    }
    return value;
  };

  const grouped = {};
  for (const [key, value] of checkboxMap.entries()) {
    const lastSep = key.lastIndexOf("::");
    if (lastSep === -1) continue;

    const selector = key.substring(0, lastSep);
    const property = key.substring(lastSep + 2);

    if (!grouped[selector]) grouped[selector] = {};
    grouped[selector][property] = value;
  }

  const rules = [];
  for (const [selector, props] of Object.entries(grouped)) {
    const taskMatch = selector.match(/data-task="([^"]*)"/);
    if (!taskMatch) continue;
    const taskChar = taskMatch[1];

    const isPseudo = selector.includes("::after");
    const escapedTask = escapeAttrValue(taskChar);
    const quartzBase = `li.task-list-item[data-task=\"${escapedTask}\"] input[type=\"checkbox\"]`;
    const quartzSelector = isPseudo ? `${quartzBase}::after` : quartzBase;

    const declarations = [];
    for (const [prop, value] of Object.entries(props)) {
      if (!value || value === "none" || value === "normal") continue;

      if (prop === "-webkit-mask-image" || prop === "mask-image") {
        const normalized = normalizeMaskImage(value);
        declarations.push(`  mask-image: ${normalized};`);
        declarations.push(`  -webkit-mask-image: ${normalized};`);
        if (!isPseudo) {
          declarations.push(`  mask-size: contain;`);
          declarations.push(`  -webkit-mask-size: contain;`);
          declarations.push(`  mask-repeat: no-repeat;`);
          declarations.push(`  -webkit-mask-repeat: no-repeat;`);
        }
      } else {
        const normalized =
          prop === "content" ? normalizeSvgDataUriValue(value) : value;
        declarations.push(`  ${prop}: ${normalized};`);
      }
    }

    if (declarations.length > 0) {
      rules.push(`${quartzSelector} {\n${declarations.join("\n")}\n}`);
    }
  }

  return rules.join("\n\n");
}

function generateCheckboxIconCSS(checkboxIcons) {
  return {
    light: buildCheckboxRules(checkboxIcons.light),
    dark: buildCheckboxRules(checkboxIcons.dark),
  };
}

function buildCSSStrings(themeData) {
  const {
    manifest,
    themeName,
    quartzMappings,
    publishMappings,
    bodyVariables,
    checkboxIcons,
    codeTokens,
  } = themeData;
  const darkData = quartzMappings.dark || null;
  const lightData = quartzMappings.light || null;
  const darkPublishData = publishMappings.dark || null;
  const lightPublishData = publishMappings.light || null;

  const customCalloutTypes = calloutManifest[themeName] || [];
  const customCalloutQuartzEntries = customCalloutTypes
    .map(
      (type) =>
        `    &[data-callout="${type}"] {\n      --color: rgb(var(--callout-${type}, var(--callout-default, 2, 122, 255))) !important;\n      --border: rgba(var(--callout-${type}, var(--callout-default, 2, 122, 255)), 0.267) !important;\n      --bg: rgba(var(--callout-${type}, var(--callout-default, 2, 122, 255)), 0.063) !important;\n    }`,
    )
    .join("\n");
  const customCalloutPublishEntries = customCalloutTypes
    .map(
      (type) =>
        `  .callout[data-callout="${type}"] > .callout-title > .callout-icon > svg.svg-icon {\n    stroke: rgb(var(--callout-${type}, var(--callout-default, 2, 122, 255)));\n  }`,
    )
    .join("\n");

  let graphColors = { dark: {}, light: {} };
  let codeColors = { dark: {}, light: {} };
  const graphMapping = {
    "--quartz-graph-line": "--light",
    "--quartz-graph-node": ["--gray", "--darkgray"],
    "--quartz-graph-node-unresolved": "--lightgray",
    "--quartz-graph-text": "--dark",
    "--quartz-graph-node-focused": "--secondary",
    "--quartz-graph-node-tag": "--tertiary",
    "--quartz-graph-node-attachment": "--highlight",
  };

  const dataLight = {};
  const dataDark = {};
  const dataPublishLight = {};
  const dataPublishDark = {};

  const ingestModeData = (source, target, mode) => {
    if (!source) return;
    for (const key of Object.keys(source)) {
      target[key] = target[key] || {};
      for (const [prop, value] of Object.entries(source[key])) {
        if (prop.startsWith("--quartz-graph")) {
          if (Array.isArray(graphMapping[prop])) {
            graphMapping[prop].forEach((mapped) => {
              graphColors[mode][mapped] = value;
            });
          } else if (!graphMapping[prop]) {
            console.warn(
              `Warning: Unmapped graph color target "${prop}" in theme "${themeName}". Please update the graphMapping object in compile.js.`,
            );
          } else {
            graphColors[mode][graphMapping[prop]] = value;
          }
        } else if (prop.startsWith("--code-")) {
          codeColors[mode][prop] = value;
        } else {
          target[key][prop] = value;
        }
      }
    }
  };

  ingestModeData(lightData, dataLight, "light");
  ingestModeData(darkData, dataDark, "dark");
  ingestModeData(lightPublishData, dataPublishLight, "light");
  ingestModeData(darkPublishData, dataPublishDark, "dark");

  // Try manifest-based font CSS first (jsDelivr URLs), fall back to legacy extras/fonts/
  let fontString = generateFontCSSFromManifest(themeName);
  if (fontString === null) {
    const manifestFonts =
      manifest.fonts && manifest.fonts.length > 0
        ? manifest.fonts
        : ["avenir", "inter", "source-code-pro"];
    const autoFonts = collectAutoFonts(bodyVariables);
    const fonts = Array.from(
      new Set(
        [...manifestFonts, ...autoFonts]
          .map((font) => resolveFontFileName(font) || font)
          .filter(Boolean),
      ),
    );
    fontString = "";
    fonts.forEach((font) => {
      fontString += getCachedFontString(font);
    });
  }

  // Auto-generate font override variables from extracted theme data
  const fontInterface =
    bodyVariables.dark?.["--font-interface-theme"] ||
    bodyVariables.dark?.["--font-interface"] ||
    bodyVariables.light?.["--font-interface-theme"] ||
    bodyVariables.light?.["--font-interface"];
  const fontText =
    bodyVariables.dark?.["--font-text-theme"] ||
    bodyVariables.dark?.["--font-text"] ||
    bodyVariables.light?.["--font-text-theme"] ||
    bodyVariables.light?.["--font-text"];
  const fontMonospace =
    bodyVariables.dark?.["--font-monospace-theme"] ||
    bodyVariables.dark?.["--font-monospace"] ||
    bodyVariables.light?.["--font-monospace-theme"] ||
    bodyVariables.light?.["--font-monospace"];

  const SHIKI_TO_CODE = {
    "--shiki-code-keyword": "--code-keyword",
    "--shiki-code-string": "--code-string",
    "--shiki-code-comment": "--code-comment",
    "--shiki-code-function": "--code-function",
    "--shiki-code-value": "--code-value",
    "--shiki-code-normal": "--code-normal",
    "--shiki-code-punctuation": "--code-punctuation",
    "--shiki-code-property": "--code-property",
    "--shiki-code-important": "--code-important",
    "--shiki-code-tag": "--code-tag",
    "--shiki-code-operator": "--code-operator",
  };

  // Build variable strings from body CSS variables
  // For Quartz: Only include --code-* and --graph-* variables
  // For Publish: Include ALL variables
  let bodyVarsStringDarkQuartz = "";
  let bodyVarsStringLightQuartz = "";
  let bodyVarsStringDarkPublish = "";
  let bodyVarsStringLightPublish = "";

  if (Object.keys(bodyVariables.dark).length > 0) {
    for (const [key, value] of Object.entries(bodyVariables.dark)) {
      let normalized = normalizeSvgDataUriValue(value);
      if (key.startsWith("--callout-")) {
        const triplet = normalizeColorToRgbTriplet(normalized);
        if (triplet) normalized = triplet;
      }
      // For Publish: include all variables
      bodyVarsStringDarkPublish += `  ${key}: ${normalized}${
        key.startsWith("--callout-") ? "" : " !important"
      };\n`;

      // For Quartz: only include --code-* and --graph-* variables
      if (isIncludedVariable(key)) {
        bodyVarsStringDarkQuartz += `  ${key}: ${normalized}${
          key.startsWith("--callout-") ? "" : " !important"
        };\n`;
      }
    }
    for (const [shikiKey, codeKey] of Object.entries(SHIKI_TO_CODE)) {
      const darkVal = bodyVariables.dark[shikiKey];
      if (darkVal && !bodyVariables.dark[codeKey]) {
        const normalized = normalizeSvgDataUriValue(darkVal);
        bodyVarsStringDarkPublish += `  ${codeKey}: ${normalized} !important;\n`;
        if (isIncludedVariable(codeKey)) {
          bodyVarsStringDarkQuartz += `  ${codeKey}: ${normalized} !important;\n`;
        }
      }
    }
  }

  if (Object.keys(bodyVariables.light).length > 0) {
    for (const [key, value] of Object.entries(bodyVariables.light)) {
      let normalized = normalizeSvgDataUriValue(value);
      if (key.startsWith("--callout-")) {
        const triplet = normalizeColorToRgbTriplet(normalized);
        if (triplet) normalized = triplet;
      }
      // For Publish: include all variables
      bodyVarsStringLightPublish += `  ${key}: ${normalized}${
        key.startsWith("--callout-") ? "" : " !important"
      };\n`;

      // For Quartz: only include --code-* and --graph-* variables
      if (isIncludedVariable(key)) {
        bodyVarsStringLightQuartz += `  ${key}: ${normalized}${
          key.startsWith("--callout-") ? "" : " !important"
        };\n`;
      }
    }
    for (const [shikiKey, codeKey] of Object.entries(SHIKI_TO_CODE)) {
      const lightVal = bodyVariables.light[shikiKey];
      if (lightVal && !bodyVariables.light[codeKey]) {
        const normalized = normalizeSvgDataUriValue(lightVal);
        bodyVarsStringLightPublish += `  ${codeKey}: ${normalized} !important;\n`;
        if (isIncludedVariable(codeKey)) {
          bodyVarsStringLightQuartz += `  ${codeKey}: ${normalized} !important;\n`;
        }
      }
    }
  }

  let fontOverrideLightString = "";
  let fontOverrideDarkString = "";
  if (fontInterface) {
    if (!bodyVarsStringLightQuartz.includes("--font-interface-override")) {
      fontOverrideLightString += `  --font-interface-override: ${fontInterface};\n`;
    }
    if (!bodyVarsStringDarkQuartz.includes("--font-interface-override")) {
      fontOverrideDarkString += `  --font-interface-override: ${fontInterface};\n`;
    }
  }
  if (fontText) {
    if (!bodyVarsStringLightQuartz.includes("--font-text-override")) {
      fontOverrideLightString += `  --font-text-override: ${fontText};\n`;
    }
    if (!bodyVarsStringDarkQuartz.includes("--font-text-override")) {
      fontOverrideDarkString += `  --font-text-override: ${fontText};\n`;
    }
  }
  if (fontMonospace) {
    if (!bodyVarsStringLightQuartz.includes("--font-monospace-override")) {
      fontOverrideLightString += `  --font-monospace-override: ${fontMonospace};\n`;
    }
    if (!bodyVarsStringDarkQuartz.includes("--font-monospace-override")) {
      fontOverrideDarkString += `  --font-monospace-override: ${fontMonospace};\n`;
    }
  }

  // Style Settings default variable declarations
  const baseSlug = themeName.split(".")[0];
  const themeJsonEntry = themesJsonData.themes?.[baseSlug];
  const styleSettingsArr = Array.isArray(themeJsonEntry?.style_settings?.sections)
    ? themeJsonEntry.style_settings.sections.flatMap((section) =>
        Array.isArray(section?.settings) ? section.settings : [],
      )
    : Array.isArray(themeJsonEntry?.style_settings?.settings)
      ? themeJsonEntry.style_settings.settings
      : [];
  let ssDefaultsLight = "";
  let ssDefaultsDark = "";
  if (styleSettingsArr.length > 0) {
    ssDefaultsLight = generateStyleSettingsDefaults(styleSettingsArr, "light");
    ssDefaultsDark = generateStyleSettingsDefaults(styleSettingsArr, "dark");
  }

  const colorSchemeSection =
    lightData && darkData
      ? `
:root:root {
${bodyVarsStringLightQuartz}
${ssDefaultsLight}
${fontOverrideLightString}
  --quartz-icon-color: currentColor;
}
:root:root[saved-theme="dark"] {
${bodyVarsStringDarkQuartz}
${ssDefaultsDark}
${fontOverrideDarkString}
  --quartz-icon-color: currentColor;
}
`
      : lightData
        ? `
:root:root {
${bodyVarsStringLightQuartz}
${ssDefaultsLight}
${fontOverrideLightString}
  --quartz-icon-color: currentColor;
}
`
        : darkData
          ? `
:root:root {
${bodyVarsStringDarkQuartz}
${ssDefaultsDark}
${fontOverrideDarkString}
  --quartz-icon-color: currentColor;
}
`
          : "";

  const checkboxIconCSS = generateCheckboxIconCSS(checkboxIcons);
  const codeTokenCSS = buildCodeTokenCSS(codeTokens, !!darkData, !!lightData);
  const calloutWarnings = new Set();
  const calloutIconLight = buildCalloutIconCSS(
    extractCalloutIconMap(dataLight, calloutWarnings),
  );
  const calloutIconDark = buildCalloutIconCSS(
    extractCalloutIconMap(dataDark, calloutWarnings),
  );

  const buildBodyStyles = (dataSet) => {
    let styles = "";
    if (!dataSet) return styles;
    for (const [key, value] of Object.entries(dataSet)) {
      const filteredEntries = Object.entries(value).filter(
        ([k, v]) => v !== "inherit" && k !== "--callout-icon",
      );
      if (filteredEntries.length === 0) continue;
      const values = filteredEntries
        .map(([k, v]) => {
          const normalized = normalizeSvgDataUriValue(v);
          const cleaned =
            typeof normalized === "string"
              ? normalized.replaceAll('"??", ', "")
              : normalized;
          return `${k}: ${cleaned};`;
        })
        .join("\n  ");
      styles += `\n  ${key} {\n    ${values}\n  }\n`;
    }
    return styles;
  };

  const baseData = lightData ? dataLight : dataDark;
  const darkDataSet = lightData && darkData ? dataDark : null;
  const baseCheckboxIcons = lightData
    ? checkboxIconCSS.light
    : checkboxIconCSS.dark;
  const baseCalloutIcons = lightData ? calloutIconLight : calloutIconDark;

  let resultScss = `
@use "sass:map";
@use "../variables.scss" as *;

:root {
  ${
    lightData && darkData
      ? "color-scheme: light dark;"
      : lightData
        ? "color-scheme: light;"
        : darkData
          ? "color-scheme: dark;"
          : ""
  }
  font-size: 16px;
}

${colorSchemeSection}

${codeTokenCSS}

${
  lightData && darkData
    ? ""
    : `
.darkmode {
  display: none;
}
`
}

html {
${
  lightData && darkData
    ? `
  &[saved-theme="light"] {
    color-scheme: light;
    .callout[data-callout] {
      mix-blend-mode: darken;
    }
  }
  &[saved-theme="dark"] {
    color-scheme: dark;
    .callout[data-callout] {
      mix-blend-mode: lighten;
    }
  }
`
    : lightData
      ? `
  color-scheme: only light;
  .callout[data-callout] {
    mix-blend-mode: darken;
  }
`
      : darkData
        ? `
  color-scheme: only dark;
  .callout[data-callout] {
    mix-blend-mode: lighten;
  }
`
        : ""
}
}

${fontString}

 body {
 ${buildBodyStyles(baseData)}
  --current-page-slug: attr(data-slug raw-string);
 }
`;

  if (baseCheckboxIcons) {
    resultScss += `
${baseCheckboxIcons}
`;
  }
  if (baseCalloutIcons) {
    resultScss += `
${baseCalloutIcons}
`;
  }

  if (darkDataSet) {
    const darkCheckboxIcons = checkboxIconCSS.dark;
    resultScss += `
html[saved-theme="dark"] {
  body {
  ${buildBodyStyles(darkDataSet)}
  }
}
`;
    if (darkCheckboxIcons) {
      resultScss += `
html[saved-theme="dark"] {
${darkCheckboxIcons}
}
`;
    }
    if (calloutIconDark) {
      resultScss += `
html[saved-theme="dark"] {
${calloutIconDark}
}
`;
    }
  }

  if (calloutWarnings.size > 0) {
    const entries = [...calloutWarnings].slice(0, 20).join(", ");
    const suffix = calloutWarnings.size > 20 ? "..." : "";
    console.warn(
      `Warning: Unresolved callout icons for theme "${themeName}": ${entries}${suffix}`,
    );
  }

  // Add static styles (from compile.old.js lines 466-850)
  resultScss += `
  .search {
    & > .search-button {
      font-size: 1rem;
      svg {
        color: var(--search-icon-color, var(--text-muted, var(--darkgray)));
        stroke: var(--search-icon-color, var(--text-muted, var(--darkgray)));
      }
    }
    & > .search-container {
      & > .search-space {
          margin: 12vh auto;
        & > input {
          margin-bottom: 0;
          border-bottom: none;
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
          font-size: 1.1rem;
          &:has(+ :not(.display-results)) {
            border-radius: inherit;
          }
        }
        & > * {
          background: transparent;
          margin-bottom: 0;
          box-shadow: none;
        }
        & > .search-layout {
          &.display-results {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          & .highlight {
            background-color: var(--quartz-text-highlight)
          }
          & > .results-container {
            & .result-card {
              @media all and not ($mobile) {
                display: flex;
                &.no-match {
                  display: block;
                }
              }
              &:has(~ .result-card:hover),
              &:has(~ .result-card:focus),
              &:has(~ .result-card.focus) {
                background-color: unset;
              }
              & > ul > li > p {
                background-color: transparent;
              }
            }
          }
        }
      }
    }
  }

  .explorer {
    @media all and ($mobile) {
      &:not(.collapsed) > .explorer-content {
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
      }
    }
    .explorer-content {
      .folder-container {
        --folder-closed-icon: ${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path></svg>')};
        --folder-open-icon: ${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"></path></svg>')};

        text-overflow: ellipsis;
        position: relative;

        @media all and ($mobile) {
          padding-inline-start: 0.5rem;
          padding-inline-end: 0rem;
          border-radius: 0.25rem;
        }
        & > svg {
          opacity: 0.001;
          position: absolute;
        }
        &:before {
          width: 1rem;
          height: 1rem;
          min-width: 1rem;
          min-height: 1rem;
          display: flex;
          align-self: baseline;
          background: var(--quartz-icon-color);
          content: '';
          margin-inline-end: 0.5rem;
          margin-block-start: 0.2rem;
        }
        & > div {
          width: 100%;
        }
        &:hover {
          font-size: 1rem;
          line-height: 1.5rem;
          background-color: var(--nav-item-background-hover);
          border-radius: 0.25rem;
        }
      }
      li:has(> .folder-outer:not(.open)) > .folder-container:before {
        background: var(--collapse-icon-color-collapsed, var(--quartz-icon-color));
        mask-image: var(--folder-closed-icon);
        -webkit-mask-image: var(--folder-closed-icon);
      }
      li:has(> .folder-outer.open) > .folder-container:before {
        background: var(--collapse-icon-color, var(--quartz-icon-color));
        mask-image: var(--folder-open-icon);
        -webkit-mask-image: var(--folder-open-icon);
      }
      ul.explorer-ul li {
        text-overflow: ellipsis;
        position: relative;

        a {
          display: flex;
          color: inherit;
          font-size: 1rem;
          line-height: 1.5rem;
          padding: inherit;

          &.active,
          &:not(.folder-title):hover {
            font-size: 1rem;
            line-height: 1.5rem;
            background-color: var(--nav-item-background-hover);
            border-radius: 0.25rem;
          }
          &[data-for$="/index"] {
            padding-inline-start: 0.5rem;
            padding-inline-end: 0;
          }
          padding-inline-start: 0;

          @media all and ($mobile) {
            padding-inline-start: 0.5rem;
            padding-inline-end: 0.5rem;
            &[data-for$="/index"] {
              padding-inline-end: 0.5rem;
            }
          }
        }
        > a:before {
          --file-icon: ${svgToDataUri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>')};
          width: 1rem;
          height: 1rem;
          min-width: 1rem;
          min-height: 1rem;
          content: '';
          display: flex;
          align-self: baseline;
          background: var(--quartz-icon-color);
          mask-image: var(--file-icon);
          -webkit-mask-image: var(--file-icon);
          margin-inline-end: 0.5rem;
          margin-block-start: 0.2rem;
        }
      }
    }
  }

  /* ICONS */
  button.readermode {
    & > svg {
      display: none;
    }
    /* lucide book-open icon */
    --readermode-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stb3Blbi1pY29uIGx1Y2lkZS1ib29rLW9wZW4iPjxwYXRoIGQ9Ik0xMiA3djE0Ii8+PHBhdGggZD0iTTMgMThhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNWE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMSA0LTRoNWExIDEgMCAwIDEgMSAxdjEzYTEgMSAwIDAgMS0xIDFoLTZhMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAtMy0zeiIvPjwvc3ZnPg==');
    background: var(--quartz-icon-color) !important;
    mask-image: var(--readermode-icon);
    -webkit-mask-image: var(--readermode-icon);
    width: 24px;
    height: 24px;
  }

  button.global-graph-icon {
    & > svg {
      display: none;
    }
    /* lucide git-fork icon */
    --graph-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdC1mb3JrLWljb24gbHVjaWRlLWdpdC1mb3JrIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjE4IiByPSIzIi8+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjMiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjMiLz48cGF0aCBkPSJNMTggOXYyYzAgLjYtLjQgMS0xIDFIN2MtLjYgMC0xLS40LTEtMVY5Ii8+PHBhdGggZD0iTTEyIDEydjMiLz48L3N2Zz4=');
    background: var(--quartz-icon-color) !important;
    mask-image: var(--graph-icon);
    -webkit-mask-image: var(--graph-icon);
    width: 24px;
    height: 24px;
  }

  button.darkmode {
    & > svg {
      display: none !important;
    }
    /* lucide moon icon */
    --moon-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vb24taWNvbiBsdWNpZGUtbW9vbiI+PHBhdGggZD0iTTEyIDNhNiA2IDAgMCAwIDkgOSA5IDkgMCAxIDEtOS05WiIvPjwvc3ZnPg==');
    /* lucide sun icon */
    --sun-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1bi1pY29uIGx1Y2lkZS1zdW4iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQiLz48cGF0aCBkPSJNMTIgMnYyIi8+PHBhdGggZD0iTTEyIDIwdjIiLz48cGF0aCBkPSJtNC45MyA0LjkzIDEuNDEgMS40MSIvPjxwYXRoIGQ9Im0xNy42NiAxNy42NiAxLjQxIDEuNDEiLz48cGF0aCBkPSJNMiAxMmgyIi8+PHBhdGggZD0iTTIwIDEyaDIiLz48cGF0aCBkPSJtNi4zNCAxNy42Ni0xLjQxIDEuNDEiLz48cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiLz48L3N2Zz4=');
    background: var(--quartz-icon-color) !important;
    width: 24px;
    height: 24px;
  }

  .explorer svg,
  button.toc-header .fold,
  .global-graph-icon,
  .readermode,
  .darkmode {
    color: var(--quartz-icon-color);
    stroke: var(--quartz-icon-color);
  }

  @media all and not ($desktop) {
    .page > div#quartz-body div.sidebar.right {
      background-color: transparent;
      border-left: none;
    }
  }

  @media all and ($desktop) {
    div#quartz-root.page {
      /* workaround for reader-mode */
      display: grid;
      place-items: center;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      padding: 0;
      margin: 0;
      div#quartz-body {
        /* workaround for reader-mode */
        width: min(100%, calc(#{map.get($breakpoints, desktop)} + 300px));
        max-width: min(100%, calc(#{map.get($breakpoints, desktop)} + 300px));
        padding: 0 auto;
      }
    }
    .page > #quartz-body {
      div.center,
      footer {
        min-width: calc(100% - 3rem);
        max-width: calc(100% - 3rem);
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      footer {
        padding: 0 1.5rem;
      }
    }
  }

  @media all and ($tablet) {
    .page > #quartz-body {
      padding-left: 0;
      padding-right: 0;

      div.center,
      footer {
        min-width: calc(100% - 3rem);
        max-width: calc(100% - 3rem);
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      div.sidebar.left {
        padding-left: 2rem;
      }

      div.sidebar.right,
      footer {
        padding: 0 1.5rem;
      }
    }
  }

  @media all and ($mobile) {
    .page > div#quartz-body div.sidebar.left {
      background-color: transparent;
      border-right: none;
    }
    .page > #quartz-body {
      padding: 0;

      div.center,
      footer {
        min-width: calc(100% - 3rem);
        max-width: calc(100% - 3rem);
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      div.sidebar.left,
      div.sidebar.left:has(.explorer) {
        padding: 1rem 1.5rem 1rem 1rem;
      }

      div.sidebar.right,
      footer {
        padding: 0 1.5rem;
      }
      footer {
        min-width: auto;
      }

      // overflow fix for explorer on mobile
      .explorer {
        .explorer-content {
          padding-left: 1rem;
          padding-right: 1rem;
          overflow-y: auto;
          max-height: 100vh;
          & > .explorer-ul {
            min-height: 0;
            overscroll-behavior: contain;
          }
          ul {
            overscroll-behavior: auto;
          }
        }
      }
    }
    .page-title {
      display: none;
    }
  }

  .callout.is-collapsed .callout-content>:first-child {
    margin-top: -4rem;
  }

  figure[data-rehype-pretty-code-figure] pre,
  pre {
    background-color: var(--qt-code-background, var(--code-background));
    white-space: pre;

    & > code {
      overflow-x: auto;

      span[data-token-type="keyword"] { color: var(--qt-code-keyword, var(--code-keyword)) !important; }
      span[data-token-type="string"] { color: var(--qt-code-string, var(--code-string)) !important; }
      span[data-token-type="comment"] { color: var(--qt-code-comment, var(--code-comment)) !important; font-style: italic; }
      span[data-token-type="function"] { color: var(--qt-code-function, var(--code-function)) !important; }
      span[data-token-type="value"] { color: var(--qt-code-value, var(--code-value)) !important; }
      span[data-token-type="operator"] { color: var(--qt-code-operator, var(--code-operator)) !important; }
      span[data-token-type="property"] { color: var(--qt-code-property, var(--code-property)) !important; }
      span[data-token-type="normal"] { color: var(--qt-code-normal, var(--code-normal)) !important; }
      span[data-token-type="tag"] { color: var(--qt-code-tag, var(--code-tag)) !important; }
      span[data-token-type="important"] { color: var(--qt-code-important, var(--code-important)) !important; font-style: italic; }
      span[data-token-type="punctuation"] { color: var(--qt-code-punctuation, var(--code-punctuation)) !important; }
      span[data-token-type="regexp"] { color: var(--qt-code-string, var(--code-string)) !important; }

      span[class*="qt-code-keyword"] { color: var(--qt-code-keyword, var(--code-keyword)) !important; }
      span[class*="qt-code-string"] { color: var(--qt-code-string, var(--code-string)) !important; }
      span[class*="qt-code-comment"] { color: var(--qt-code-comment, var(--code-comment)) !important; }
      span[class*="qt-code-function"] { color: var(--qt-code-function, var(--code-function)) !important; }
      span[class*="qt-code-number"] { color: var(--qt-code-number, var(--code-value)) !important; }
      span[class*="qt-code-operator"] { color: var(--qt-code-operator, var(--code-operator)) !important; }
      span[class*="qt-code-property"] { color: var(--qt-code-property, var(--code-property)) !important; }
      span[class*="qt-code-variable"] { color: var(--qt-code-variable, var(--code-normal)) !important; }
      span[class*="qt-code-tag"] { color: var(--qt-code-tag, var(--code-tag)) !important; }
      span[class*="qt-code-attribute"] { color: var(--qt-code-attribute, var(--code-important)) !important; }
      span[class*="qt-code-type"] { color: var(--qt-code-type, var(--code-function)) !important; }
      span[class*="qt-code-builtin"] { color: var(--qt-code-builtin, var(--code-function)) !important; }
      span[class*="qt-code-atom"] { color: var(--qt-code-atom, var(--code-value)) !important; }
      span[class*="qt-code-meta"] { color: var(--qt-code-meta, var(--code-comment)) !important; }
      span[class*="qt-code-qualifier"] { color: var(--qt-code-qualifier, var(--code-property)) !important; }
      span[class*="qt-code-punctuation"] { color: var(--qt-code-punctuation, var(--code-punctuation)) !important; }
      span[class*="qt-code-bracket"] { color: var(--qt-code-bracket, var(--code-punctuation)) !important; }
      span[class*="qt-code-header"] { color: var(--qt-code-header, var(--code-tag)) !important; }
      span[class*="qt-code-link"] { color: var(--qt-code-link, var(--code-string)) !important; }
      span[class*="qt-code-error"] { color: var(--qt-code-error, var(--code-important)) !important; }

      background-color: transparent;
      color: var(--qt-code-default, var(--code-normal));
    }
  }

  blockquote.callout {
    .callout-title {
      color: var(--color);
      .callout-icon {
        background-color: var(--color);
      }
    }
    .callout-title > .callout-title-inner > p {
      color: var(--color);
    }
    &[data-callout] {
      --color: rgb(var(--callout-info, 2, 122, 255)) !important;
      --border: rgba(var(--callout-info, 2, 122, 255), 0.267) !important;
      --bg: rgba(var(--callout-info, 2, 122, 255), 0.063) !important;
    }
    &[data-callout="note"] {
      --color: rgb(var(--callout-default, 2, 122, 255)) !important;
      --border: rgba(var(--callout-default, 2, 122, 255), 0.267) !important;
      --bg: rgba(var(--callout-default, 2, 122, 255), 0.063) !important;
    }
    &[data-callout="abstract"] {
      --color: rgb(var(--callout-summary, 83, 223, 221)) !important;
      --border: rgba(var(--callout-summary, 83, 223, 221), 0.267) !important;
      --bg: rgba(var(--callout-summary, 83, 223, 221), 0.063) !important;
    }
    &[data-callout="info"] {
      --color: rgb(var(--callout-info, 2, 122, 255)) !important;
      --border: rgba(var(--callout-info, 2, 122, 255), 0.267) !important;
      --bg: rgba(var(--callout-info, 2, 122, 255), 0.063) !important;
    }
    &[data-callout="todo"] {
      --color: rgb(var(--callout-todo, 2, 122, 255)) !important;
      --border: rgba(var(--callout-todo, 2, 122, 255), 0.267) !important;
      --bg: rgba(var(--callout-todo, 2, 122, 255), 0.063) !important;
    }
    &[data-callout="tip"] {
      --color: rgb(var(--callout-tip, 83, 223, 221)) !important;
      --border: rgba(var(--callout-tip, 83, 223, 221), 0.267) !important;
      --bg: rgba(var(--callout-tip, 83, 223, 221), 0.063) !important;
    }
    &[data-callout="success"] {
      --color: rgb(var(--callout-success, 68, 207, 110)) !important;
      --border: rgba(var(--callout-success, 68, 207, 110), 0.267) !important;
      --bg: rgba(var(--callout-success, 68, 207, 110), 0.063) !important;
    }
    &[data-callout="question"] {
      --color: rgb(var(--callout-question, 233, 151, 63)) !important;
      --border: rgba(var(--callout-question, 233, 151, 63), 0.267) !important;
      --bg: rgba(var(--callout-question, 233, 151, 63), 0.063) !important;
    }
    &[data-callout="warning"] {
      --color: rgb(var(--callout-warning, 233, 151, 63)) !important;
      --border: rgba(var(--callout-warning, 233, 151, 63), 0.267) !important;
      --bg: rgba(var(--callout-warning, 233, 151, 63), 0.063) !important;
    }
    &[data-callout="failure"] {
      --color: rgb(var(--callout-fail, 251, 70, 76)) !important;
      --border: rgba(var(--callout-fail, 251, 70, 76), 0.267) !important;
      --bg: rgba(var(--callout-fail, 251, 70, 76), 0.063) !important;
    }
    &[data-callout="danger"] {
      --color: rgb(var(--callout-error, 251, 70, 76)) !important;
      --border: rgba(var(--callout-error, 251, 70, 76), 0.267) !important;
      --bg: rgba(var(--callout-error, 251, 70, 76), 0.063) !important;
    }
    &[data-callout="bug"] {
      --color: rgb(var(--callout-bug, 251, 70, 76)) !important;
      --border: rgba(var(--callout-bug, 251, 70, 76), 0.267) !important;
      --bg: rgba(var(--callout-bug, 251, 70, 76), 0.063) !important;
    }
    &[data-callout="example"] {
      --color: rgb(var(--callout-example, 168, 130, 255)) !important;
      --border: rgba(var(--callout-example, 168, 130, 255), 0.267) !important;
      --bg: rgba(var(--callout-example, 168, 130, 255), 0.063) !important;
    }
    &[data-callout="quote"] {
      --color: rgb(var(--callout-quote, 158, 158, 158)) !important;
      --border: rgba(var(--callout-quote, 158, 158, 158), 0.267) !important;
      --bg: rgba(var(--callout-quote, 158, 158, 158), 0.063) !important;
    }
${customCalloutQuartzEntries ? "\n" + customCalloutQuartzEntries + "\n" : ""}  }

:root[saved-theme="light"] {
  button.darkmode {
    mask-image: var(--sun-icon);
    -webkit-mask-image: var(--sun-icon);
  }
}

:root[saved-theme="dark"] {
  button.darkmode {
    mask-image: var(--moon-icon);
    -webkit-mask-image: var(--moon-icon);
  }
}

:root[reader-mode="on"] {
  body[data-slug] {
    div#quartz-root.page {
      transition: background-color .2s;
      &:not(:has(.sidebar:hover)) {
        background-color: transparent;
        transition: background-color .2s;
        .sidebar {
          opacity: 0 !important;
          transition: opacity .2s;
        }
      }
    }
    div#quartz-root.page:not(:has(.center:hover, footer:hover)):hover {
      .sidebar {
        opacity: 1 !important;
        transition: opacity .2s;
      }
    }
  }
}

:root[saved-theme="light"], :root[saved-theme="dark"] {
  body {
    a.external-link, a.internal-link, .breadcrumb-container .breadcrumb-element > a, footer a {
      text-decoration: none;

    }
  }
}

${insertExtras(manifest, themeName)}
`;

  // Remove lightningcss variables
  resultScss = resultScss.replaceAll("--lightningcss-light, ", "");
  resultScss = resultScss.replaceAll("--lightningcss-dark, ", "");

  // Remove CSS comments
  resultScss = resultScss.replace(/\/\*[\s\S]*?\*\//g, "");

  // Merge longhand properties into shorthand for Quartz SCSS
  resultScss = mergeLonghandProperties(resultScss, "scss");

  // Generate Publish CSS
  let resultPublishScss = `

${fontString}
`;

  // Add body.theme-dark and body.theme-light sections with CSS variables
  if (darkPublishData && lightPublishData) {
    // Both dark and light modes
    resultPublishScss += `
body.theme-light {
${bodyVarsStringLightPublish}}

body.theme-dark {
${bodyVarsStringDarkPublish}}
`;
  } else if (lightPublishData) {
    // Light mode only
    resultPublishScss += `
body.theme-light {
${bodyVarsStringLightPublish}}
`;
  } else if (darkPublishData) {
    // Dark mode only
    resultPublishScss += `
body.theme-dark {
${bodyVarsStringDarkPublish}}
`;
  }

  const buildPublishStyles = (dataSet) => {
    let styles = "";
    if (!dataSet) return styles;
    for (const [key, value] of Object.entries(dataSet)) {
      const filteredEntries = Object.entries(value).filter(
        ([k, v]) => v !== "inherit" && k !== "--callout-icon",
      );
      if (filteredEntries.length === 0) continue;
      const values = filteredEntries
        .map(([k, v]) => {
          const cleaned = v.replaceAll('"??", ', "");
          const normalized = normalizeSvgDataUriValue(cleaned) || cleaned;
          return `${k}: ${normalized};`;
        })
        .join("\n  ");
      styles += `\n  ${key} {\n    ${values}\n  }\n`;
    }
    return styles;
  };

  resultPublishScss += `
 body {
 ${
   lightPublishData && darkPublishData
     ? ""
     : `
   .site-body-left-column-site-theme-toggle {
     display: none;
   }
 `
 }
   /* Publish-specific variable mappings (fallbacks from standard Obsidian variables) */
   --site-name-color: var(--text-accent);
   --sidebar-left-background: var(--background-secondary);
   --sidebar-right-background: var(--background-secondary);
   --sidebar-left-border-color: var(--background-modifier-border);
   --sidebar-right-border-color: var(--background-modifier-border);
   --page-title-color: var(--h1-color, var(--text-normal));
   --page-title-font: var(--h1-font, var(--font-text-theme));
   --page-title-weight: var(--h1-weight, var(--font-semibold));
   --outline-heading-color: var(--text-muted);
   --outline-heading-color-active: var(--text-accent);
   --component-title-color: var(--text-muted);
   --nav-item-color: var(--text-normal);
   --nav-item-color-hover: var(--text-accent);
   --nav-item-color-active: var(--text-accent);
   --nav-parent-item-color: var(--text-normal);
   --nav-collapse-icon-color: var(--text-muted);
   --nav-collapse-icon-color-collapsed: var(--text-faint);
 `;

  if (lightPublishData && Object.keys(dataPublishLight).length > 0) {
    resultPublishScss += `
 body.theme-light {${buildPublishStyles(dataPublishLight)}
 }
`;
  }
  if (darkPublishData && Object.keys(dataPublishDark).length > 0) {
    resultPublishScss += `
 body.theme-dark {${buildPublishStyles(dataPublishDark)}
 }
`;
  }

  resultPublishScss += `
  .callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-default, 2, 122, 255));
  }
  .callout[data-callout="abstract"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-summary, 83, 223, 221));
  }
  .callout[data-callout="info"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-info, 2, 122, 255));
  }
  .callout[data-callout="todo"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-todo, 2, 122, 255));
  }
  .callout[data-callout="tip"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-tip, 83, 223, 221));
  }
  .callout[data-callout="success"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-success, 68, 207, 110));
  }
  .callout[data-callout="question"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-question, 233, 151, 63));
  }
  .callout[data-callout="warning"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-warning, 233, 151, 63));
  }
  .callout[data-callout="failure"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-fail, 251, 70, 76));
  }
  .callout[data-callout="danger"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-error, 251, 70, 76));
  }
  .callout[data-callout="bug"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-bug, 251, 70, 76));
  }
  .callout[data-callout="example"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-example, 168, 130, 255));
  }
  .callout[data-callout="quote"] > .callout-title > .callout-icon > svg.svg-icon {
    stroke: rgb(var(--callout-quote, 158, 158, 158));
  }
${customCalloutPublishEntries ? "\n" + customCalloutPublishEntries + "\n" : ""}
  pre > code,
  .markdown-rendered pre > code {
    line-height: 1.5;
    background-color: transparent;
  }
}
`;

  return { scssContent: resultScss, publishScssContent: resultPublishScss };
}

function getStyleFromDatabase(selector, property, fallbackSelector) {
  return (
    getStyle(themeName, optionSetName, mode === "dark", selector, property) ??
    fallbackStyle(fallbackSelector, property)
  );
}

function fallbackStyle(selector, property) {
  const tag = (selector.split(/(?=[\.\#\[])/)[0] ?? "div").toUpperCase(); // Get the tag name before any class, id, or attribute
  return mode === "dark"
    ? defaultDark[tag]?.[property] || "inherit"
    : defaultLight[tag]?.[property] || "inherit";
}

function isIncludedVariable(key) {
  const includedPrefixes = [
    "--callout-",
    "--checkbox-",
    "--code-",
    "--collapse-icon-color",
    "--graph-",
    "--icon-",
  ];
  for (const prefix of includedPrefixes) {
    if (key.startsWith(prefix)) {
      return true;
    }
  }
  return false;
}
