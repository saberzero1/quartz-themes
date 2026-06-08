import fs from "node:fs/promises";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as lucideIcons from "@lucide/icons";
import {
  extractClassToggleCss,
  extractStyleSettings,
} from "../../util/postcss-style-settings.mjs";
import { sanitizeFilenamePreservingEmojis as sanitize } from "../../util/util.mjs";
import { filterObsidianCSS } from "../../util/obsidian-selectors.mjs";
import { buildSelectorImpactGraph } from "../../util/style-settings-selector-impact.mjs";
import { normalizeRuntimeEvidenceRecords } from "../../util/style-settings-runtime-evidence.mjs";

const USE_AUTO_CONFIG = process.argv.includes("--auto");
const NO_CLEAR = process.argv.includes("--no-clear");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "../..");
const configPath = path.join(repoRoot, "runner", "scripts", "config.js");
const themesJsonPath = path.join(repoRoot, "themes.json");
const resultsDir = path.join(repoRoot, "runner", "results");
const outputDir = path.join(repoRoot, "plugin", "src", "themes");
const extrasDir = path.join(repoRoot, "plugin", "extras");
const obsidianDir = path.join(repoRoot, "obsidian");

async function resolveGenerateFontManifest(root, themeName) {
  const manifestPath = path.join(root, "fonts", themeName, "manifest.json");
  try {
    await fs.access(manifestPath);
  } catch {
    return null;
  }
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  if (manifest.base) {
    return resolveGenerateFontManifest(root, manifest.base);
  }
  return { manifest, fontDir: themeName };
}

const obsidianSlugToDir = new Map();
if (existsSync(obsidianDir)) {
  for (const dirName of readdirSync(obsidianDir).filter((n) =>
    statSync(path.join(obsidianDir, n)).isDirectory(),
  )) {
    const slug = sanitize(dirName);
    if (!obsidianSlugToDir.has(slug)) {
      obsidianSlugToDir.set(slug, dirName);
    }
  }
}

function extractClassSettings(themeSlug, styleSettings) {
  if (!styleSettings?.length) return null;

  const dirName = obsidianSlugToDir.get(themeSlug);
  if (!dirName) return null;

  const cssPath = path.join(obsidianDir, dirName, "theme.css");
  if (!existsSync(cssPath)) return null;

  const classSettingIds = [];
  for (const setting of styleSettings) {
    if (!setting || !setting.type) continue;
    if (setting.type === "class-toggle") {
      if (setting.id) classSettingIds.push(setting.id);
    } else if (setting.type === "class-select" && setting.options) {
      for (const opt of setting.options) {
        if (opt?.value) classSettingIds.push(opt.value);
      }
    }
  }

  if (classSettingIds.length === 0) return null;

  const css = readFileSync(cssPath, "utf8");

  // Sort by first appearance in the CSS source so that emitted CSS respects
  // the cascade order Obsidian uses (all classes on body, last declaration wins).
  classSettingIds.sort((a, b) => {
    const escA = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const escB = b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const posA = css.search(new RegExp(`\\.${escA}(?=[\\s{,:]|$)`));
    const posB = css.search(new RegExp(`\\.${escB}(?=[\\s{,:]|$)`));
    return (posA === -1 ? Infinity : posA) - (posB === -1 ? Infinity : posB);
  });

  const result = {};
  for (const classId of classSettingIds) {
    try {
      let [general, dark, light] = extractClassToggleCss(css, classId);
      if (general) general = filterObsidianCSS(general);
      if (dark) dark = filterObsidianCSS(dark);
      if (light) light = filterObsidianCSS(light);
      if (general || dark || light) {
        const entry = {};
        if (general) entry.general = general;
        if (dark) entry.dark = dark;
        if (light) entry.light = light;
        result[classId] = entry;
      }
    } catch {
      // Malformed CSS — skip this class setting
    }
  }

  return Object.keys(result).length > 0 ? result : null;
}

const ASPECT_ORDER = [
  "base",
  "headings",
  "typography",
  "links",
  "lists",
  "blockquotes",
  "tables",
  "code",
  "images",
  "embeds",
  "checkboxes",
  "callouts",
  "cards",
  "search",
  "scrollbars",
  "explorer",
  "toc",
  "graph",
  "popover",
  "footer",
  "recentNotes",
  "listPage",
  "darkmode",
  "breadcrumbs",
  "canvas",
  "bases",
  "properties",
  "stacked",
  "misc",
];

const commentAspectMatchers = [
  { aspect: "links", tests: ["links", "link hover"] },
  {
    aspect: "search",
    tests: ["search", "suggestion", "tag pills", "search ui"],
  },
  { aspect: "lists", tests: ["list items", "lists"] },
  {
    aspect: "code",
    tests: ["code", "code blocks", "code title", "code lines"],
  },
  { aspect: "checkboxes", tests: ["checkbox", "task list"] },
  { aspect: "blockquotes", tests: ["blockquote"] },
  { aspect: "scrollbars", tests: ["scrollbar"] },
  { aspect: "callouts", tests: ["callout"] },
  { aspect: "tables", tests: ["table"] },
  { aspect: "images", tests: ["image", "figure", "video", "audio", "media"] },
  { aspect: "embeds", tests: ["embed", "transclude"] },
  { aspect: "explorer", tests: ["explorer", "file tree"] },
  { aspect: "toc", tests: ["toc", "outline"] },
  { aspect: "graph", tests: ["graph"] },
  { aspect: "popover", tests: ["popover"] },
  { aspect: "footer", tests: ["footer", "status bar"] },
  { aspect: "recentNotes", tests: ["recent notes"] },
  { aspect: "listPage", tests: ["list page"] },
  { aspect: "darkmode", tests: ["darkmode", "dark mode"] },
  { aspect: "breadcrumbs", tests: ["breadcrumbs"] },
  { aspect: "canvas", tests: ["canvas"] },
  { aspect: "bases", tests: ["bases", "database"] },
  {
    aspect: "properties",
    tests: ["properties", "metadata", "frontmatter properties"],
  },
  { aspect: "stacked", tests: ["stacked", "stacked pages"] },
  { aspect: "cards", tests: ["cards", "card"] },
  {
    aspect: "typography",
    tests: ["typography", "text", "headings", "heading"],
  },
  {
    aspect: "base",
    tests: ["base", "layout", "center content", "sidebars", "separators"],
  },
  {
    aspect: "misc",
    tests: [
      "misc",
      "frontmatter",
      "tooltip",
      "forms",
      "details",
      "kbd",
      "definition",
      "subscript",
      "superscript",
      "abbrev",
      "backlinks",
      "footnotes",
      "progress",
      "page title",
      "math",
      "keyboard",
      "spacer",
      "minor gaps",
      "mermaid",
      "tags list",
      "text highlight",
      "strong text",
    ],
  },
];

function commentToAspect(comment) {
  const lower = comment.trim().toLowerCase();
  if (lower.length === 0) return null;
  if (lower.startsWith("todo")) return null;
  for (const matcher of commentAspectMatchers) {
    if (matcher.tests.some((test) => lower.includes(test))) {
      return matcher.aspect;
    }
  }
  return null;
}

function buildAspectMap(configSource, configLength) {
  const startIndex = configSource.indexOf("export const config");
  if (startIndex === -1) {
    throw new Error("Unable to locate config array in config.js");
  }
  const arrayStart = configSource.indexOf("[", startIndex);
  if (arrayStart === -1) {
    throw new Error("Unable to locate config array start bracket");
  }

  let squareDepth = 1;
  let curlyDepth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let isEscaping = false;
  let currentAspect = "base";
  let commentBuffer = "";
  let inEntry = false;
  let entryAspect = currentAspect;
  const aspectMap = [];

  for (let i = arrayStart + 1; i < configSource.length; i += 1) {
    const char = configSource[i];
    const nextChar = configSource[i + 1];

    if (inLineComment) {
      if (char === "\n") {
        inLineComment = false;
        const aspect = commentToAspect(commentBuffer);
        if (aspect) currentAspect = aspect;
        commentBuffer = "";
      } else {
        commentBuffer += char;
      }
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && nextChar === "/") {
        inBlockComment = false;
        i += 1;
      }
      continue;
    }

    if (inSingle || inDouble || inTemplate) {
      if (isEscaping) {
        isEscaping = false;
        continue;
      }
      if (char === "\\") {
        isEscaping = true;
        continue;
      }
      if (inSingle && char === "'") inSingle = false;
      if (inDouble && char === '"') inDouble = false;
      if (inTemplate && char === "`") inTemplate = false;
      continue;
    }

    if (char === "/" && nextChar === "/") {
      inLineComment = true;
      commentBuffer = "";
      i += 1;
      continue;
    }

    if (char === "/" && nextChar === "*") {
      inBlockComment = true;
      i += 1;
      continue;
    }

    if (char === "'") {
      inSingle = true;
      continue;
    }
    if (char === '"') {
      inDouble = true;
      continue;
    }
    if (char === "`") {
      inTemplate = true;
      continue;
    }

    if (char === "[") squareDepth += 1;
    if (char === "]") {
      squareDepth -= 1;
      if (squareDepth === 0) break;
    }

    if (char === "{") {
      if (squareDepth === 1 && curlyDepth === 0) {
        inEntry = true;
        entryAspect = currentAspect;
      }
      curlyDepth += 1;
    }

    if (char === "}") {
      curlyDepth -= 1;
      if (inEntry && curlyDepth === 0) {
        aspectMap.push(entryAspect);
        inEntry = false;
      }
    }
  }

  if (aspectMap.length !== configLength) {
    throw new Error(
      `Aspect map length mismatch: expected ${configLength}, got ${aspectMap.length}`,
    );
  }

  return aspectMap;
}

function escapeTemplateLiteral(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${")
    .replace(/[\uE000-\uF8FF]/g, (char) => {
      return "\\\\" + char.charCodeAt(0).toString(16);
    });
}

function toTemplateLiteral(value) {
  return `\`${escapeTemplateLiteral(value)}\``;
}

function normalizeVariations(variations) {
  if (!Array.isArray(variations)) return [];
  return variations
    .map((entry) => {
      if (typeof entry === "string") return entry;
      if (
        entry &&
        typeof entry === "object" &&
        typeof entry.name === "string"
      ) {
        return entry.name;
      }
      return null;
    })
    .filter((value) => typeof value === "string");
}

function normalizeFonts(fonts) {
  if (Array.isArray(fonts))
    return fonts.filter((value) => typeof value === "string");
  if (fonts && typeof fonts === "object") {
    return Object.values(fonts).filter((value) => typeof value === "string");
  }
  return [];
}

// Font CSS variable names that may contain corrupted '??' entries from Obsidian extraction.
// These are CJK/emoji font names that got mangled to literal question marks (U+003F).
const FONT_CSS_VARS = new Set([
  "--font-interface",
  "--font-text",
  "--font-text-theme",
  "--font-monospace",
  "--default-font",
  "--file-header-font",
  "--metadata-input-font",
  "--metadata-label-font",
  "--bodyFont",
  "--headerFont",
  "--titleFont",
  "--codeFont",
  "font-family",
]);

/**
 * Sanitize a font-family CSS value by removing corrupted '??' entries.
 * These appear as single-quoted '??' (literally two question marks) in font lists,
 * e.g.: "'??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif"
 * After stripping, also cleans up orphaned leading quotes from the next entry.
 */
function sanitizeFontValue(value) {
  if (typeof value !== "string" || !value.includes("??")) return value;

  // Remove entries that are just '??' (single-quoted double question marks)
  // Handles: '??', or '??' at end, with optional whitespace
  let cleaned = value.replace(/'\?\?'\s*,?\s*/g, "");

  // Remove entries that are just "??" (double-quoted double question marks)
  // These appear in element-level computed styles from Obsidian extraction
  // where CJK/emoji font names get mangled to literal question marks.
  cleaned = cleaned.replace(/"\?\?"\s*,?\s*/g, "");

  // After removing '??' / "??" entries, we may have orphaned leading single-quotes
  // from entries like '"JetBrains Mono", monospace, "Inter", sans-serif'
  // where the leading ' was part of the original quoting. Strip leading ' if
  // the value now starts with ' followed by a quote or letter.
  cleaned = cleaned.replace(/^\s*'(?="|[a-zA-Z-])/g, "");

  // Also handle mid-string orphaned quotes after comma: , '"Font"
  cleaned = cleaned.replace(/,\s*'(?="|[a-zA-Z-])/g, ", ");

  // Clean up trailing single quotes that were part of the original quoting
  // e.g.: sans-serif', ui-sans-serif → sans-serif, ui-sans-serif
  cleaned = cleaned.replace(/'\s*,/g, ",");

  // Clean up leading/trailing commas and whitespace
  cleaned = cleaned.replace(/^[\s,]+/, "").replace(/[\s,]+$/, "");

  // Collapse multiple consecutive commas into one
  cleaned = cleaned.replace(/,\s*,+/g, ",");

  return cleaned.trim();
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
      /^(\s*)url\(\"([\s\S]*)\"\)(\s*)$/i,
    );
    if (wrappedMatch) {
      const [, leading, content, trailing] = wrappedMatch;
      if (/data:image\/svg\+xml/i.test(content)) {
        if (/<svg/i.test(content)) {
          const svgStart = content.search(/<svg/i);
          return `${leading}${svgToDataUri(content.slice(svgStart))}${trailing}`;
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
      const headerNormalized = normalizeHeaders(normalized);
      const quoteSafe = encodeDataUriQuotes(headerNormalized);
      return `url("${quoteSafe}")`;
    };

    let result = input.replace(
      /url\((['"])([\s\S]*?)\1\)/gi,
      (match, _quote, content) => normalizeContent(content.trim(), match),
    );

    result = result.replace(/url\(([^)]*)\)/gi, (match, raw) => {
      const content = raw.trim();
      return normalizeContent(content, match);
    });

    return result;
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
  return cleaned.replace(/^lucide[:\-]/, "").replace(/^lucide-/, "");
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

function buildCalloutIconCSS(data, warnings, baseSelector, htmlSelector) {
  const lines = [];
  for (const [selector, props] of Object.entries(data)) {
    if (!selector.includes("[data-callout=")) continue;
    const iconValue = props["--callout-icon"];
    const resolved = resolveCalloutIconUri(iconValue);
    if (resolved.uri) {
      const typeMatch = selector.match(/data-callout="([^"]+)"/);
      if (!typeMatch) continue;
      const quartzSelector = `.callout[data-callout="${typeMatch[1]}"]`;
      const scoped = `${baseSelector} ${quartzSelector}`;
      const htmlScoped = `${htmlSelector} ${scoped}`;
      lines.push(`${htmlScoped} {\n  --callout-icon: ${resolved.uri};\n}`);
    } else if (iconValue) {
      warnings?.add(`${selector}: ${iconValue}`);
    }
  }
  return lines.join("\n\n");
}

function buildCalloutBridgeVars(data) {
  const mapping = {
    note: "--callout-default",
    abstract: "--callout-summary",
    info: "--callout-info",
    todo: "--callout-todo",
    tip: "--callout-tip",
    success: "--callout-success",
    question: "--callout-question",
    warning: "--callout-warning",
    failure: "--callout-fail",
    danger: "--callout-error",
    bug: "--callout-bug",
    example: "--callout-example",
    quote: "--callout-quote",
  };
  const bridgeVars = {};
  for (const [selector, props] of Object.entries(data)) {
    if (!selector.includes("[data-callout=")) continue;
    const typeMatch = selector.match(/data-callout="([^"]+)"/);
    if (!typeMatch) continue;
    // Only read from the parent callout selector, not child elements like
    // .callout-title whose computed --callout-color is always the default.
    const closingBracket = selector.indexOf(
      "]",
      selector.indexOf(typeMatch[0]),
    );
    if (closingBracket === -1) continue;
    if (selector.slice(closingBracket + 1).trim().length > 0) continue;
    const targetVar = mapping[typeMatch[1]];
    if (!targetVar) continue;
    const value = props?.["--callout-color"];
    if (!value || value === "inherit") continue;
    bridgeVars[targetVar] = normalizeSvgDataUriValue(value);
  }
  return bridgeVars;
}

function buildCheckboxIconCSS(data, diffData, baseSelector, htmlSelector) {
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
      const svg = content.slice(svgStart);
      return svgToDataUri(svg);
    }
    if (content.startsWith("data:image/svg+xml")) {
      if (content.includes("%3C")) return `url("${content}")`;
      if (content.includes("<svg")) {
        const svgStart = content.indexOf("<svg");
        const svg = content.slice(svgStart);
        return svgToDataUri(svg);
      }
      const fixed = content
        .replace("data:image/svg+xml utf8,", "data:image/svg+xml,")
        .replace("data:image/svg+xml;utf8,", "data:image/svg+xml,");
      return `url("${fixed}")`;
    }
    return value;
  };

  const diffKeys = diffData
    ? new Set(
        Object.keys(diffData).filter((s) => s.startsWith('input[data-task="')),
      )
    : null;

  const entries = Object.entries(data).filter(
    ([selector]) =>
      selector.startsWith('input[data-task="') &&
      (!diffKeys || diffKeys.has(selector)),
  );
  if (entries.length === 0) return "";

  const grouped = new Map();
  for (const [selector, props] of entries) {
    grouped.set(selector, props);
  }

  const blocks = [];
  for (const [selector, props] of grouped.entries()) {
    const taskMatch = selector.match(
      /^input\[data-task="([\s\S]*?)"\](?:::after)?$/,
    );
    if (!taskMatch) continue;
    const isAfter = selector.includes("::after");
    const taskChar = escapeAttrValue(taskMatch[1]);

    const hasMaskImage =
      typeof props["mask-image"] === "string" ||
      typeof props["-webkit-mask-image"] === "string";
    const contentValue = props["content"];
    const hasContent =
      typeof contentValue === "string" &&
      contentValue !== "none" &&
      contentValue !== "normal" &&
      contentValue !== '""' &&
      contentValue !== "''";
    const colorValue = props["color"];
    const hasColor =
      typeof colorValue === "string" &&
      colorValue !== "none" &&
      colorValue !== "normal" &&
      colorValue !== "inherit";
    const bgColorValue = props["background-color"];
    const hasBgColor =
      typeof bgColorValue === "string" &&
      bgColorValue !== "rgba(0, 0, 0, 0)" &&
      bgColorValue !== "transparent" &&
      bgColorValue !== "none";

    if (isAfter) {
      if (hasContent) {
        const quartzSel = `${baseSelector} li.task-list-item[data-task=\"${taskChar}\"] input[type=\"checkbox\"]::after`;
        const lines = [];
        for (const [prop, value] of Object.entries(props)) {
          if (!value || value === "none" || value === "normal") continue;
          if (prop === "-webkit-mask-image" || prop === "mask-image") continue;
          const normalized =
            prop === "content" ? normalizeSvgDataUriValue(value) : value;
          lines.push(`  ${prop}: ${normalized};`);
        }
        if (lines.length > 0) {
          const htmlScoped = `${htmlSelector} ${quartzSel}`;
          blocks.push(`${htmlScoped} {\n${lines.join("\n")}\n}`);
        }
        continue;
      }

      const baseSel = `input[data-task="${taskMatch[1]}"]`;
      const baseEntry = grouped.get(baseSel);
      const baseHasMask =
        baseEntry &&
        (typeof baseEntry["mask-image"] === "string" ||
          typeof baseEntry["-webkit-mask-image"] === "string");

      if (hasMaskImage && baseHasMask) {
        const afterLines = [];
        if (hasColor) afterLines.push(`  color: ${colorValue};`);
        if (hasBgColor) afterLines.push(`  background-color: ${bgColorValue};`);
        if (afterLines.length > 0) {
          const quartzAfterSel = `${baseSelector} li.task-list-item[data-task=\"${taskChar}\"] input[type=\"checkbox\"]::after`;
          const htmlScoped = `${htmlSelector} ${quartzAfterSel}`;
          blocks.push(`${htmlScoped} {\n${afterLines.join("\n")}\n}`);
        }
        continue;
      }

      if (hasMaskImage && !baseHasMask) {
        const diffAfterEntry = diffData
          ? diffData[`input[data-task="${taskMatch[1]}"]::after`]
          : null;
        const diffHasMask =
          diffAfterEntry &&
          (typeof diffAfterEntry["mask-image"] === "string" ||
            typeof diffAfterEntry["-webkit-mask-image"] === "string");

        if (diffHasMask) {
          const maskValue = props["mask-image"] || props["-webkit-mask-image"];
          const normalized = normalizeMaskImage(maskValue);
          const baseLine = [];
          baseLine.push(`  mask-image: ${normalized};`);
          baseLine.push(`  -webkit-mask-image: ${normalized};`);
          baseLine.push(`  mask-size: contain;`);
          baseLine.push(`  -webkit-mask-size: contain;`);
          baseLine.push(`  mask-repeat: no-repeat;`);
          baseLine.push(`  -webkit-mask-repeat: no-repeat;`);
          const quartzBaseSel = `${baseSelector} li.task-list-item[data-task=\"${taskChar}\"] input[type=\"checkbox\"]`;
          blocks.push(
            `${htmlSelector} ${quartzBaseSel} {\n${baseLine.join("\n")}\n}`,
          );
        }
        const afterLines = [];
        if (hasColor) afterLines.push(`  color: ${colorValue};`);
        if (hasBgColor) afterLines.push(`  background-color: ${bgColorValue};`);
        if (afterLines.length > 0) {
          const quartzAfterSel = `${baseSelector} li.task-list-item[data-task=\"${taskChar}\"] input[type=\"checkbox\"]::after`;
          blocks.push(
            `${htmlSelector} ${quartzAfterSel} {\n${afterLines.join("\n")}\n}`,
          );
        }
        continue;
      }

      const afterLines = [];
      if (hasColor) afterLines.push(`  color: ${colorValue};`);
      if (hasBgColor) afterLines.push(`  background-color: ${bgColorValue};`);
      if (afterLines.length > 0) {
        const quartzAfterSel = `${baseSelector} li.task-list-item[data-task=\"${taskChar}\"] input[type=\"checkbox\"]::after`;
        const htmlScoped = `${htmlSelector} ${quartzAfterSel}`;
        blocks.push(`${htmlScoped} {\n${afterLines.join("\n")}\n}`);
      }
      continue;
    }

    if (!hasMaskImage && !hasContent && !hasColor) continue;
    const quartzSelector = `${baseSelector} li.task-list-item[data-task=\"${taskChar}\"] input[type=\"checkbox\"]`;
    const lines = [];
    for (const [prop, value] of Object.entries(props)) {
      if (!value || value === "none" || value === "normal") continue;
      if (prop === "-webkit-mask-image" || prop === "mask-image") {
        const normalized = normalizeMaskImage(value);
        lines.push(`  mask-image: ${normalized};`);
        lines.push(`  -webkit-mask-image: ${normalized};`);
        lines.push(`  mask-size: contain;`);
        lines.push(`  -webkit-mask-size: contain;`);
        lines.push(`  mask-repeat: no-repeat;`);
        lines.push(`  -webkit-mask-repeat: no-repeat;`);
      } else {
        const normalized =
          prop === "content" ? normalizeSvgDataUriValue(value) : value;
        lines.push(`  ${prop}: ${normalized};`);
      }
    }
    if (lines.length > 0) {
      const htmlScoped = `${htmlSelector} ${quartzSelector}`;
      blocks.push(`${htmlScoped} {\n${lines.join("\n")}\n}`);
    }
  }

  return blocks.join("\n\n");
}

function resolveThemeKey(themeId, themesMeta) {
  if (!themeId.includes(".")) return themeId;
  const [candidate, ...rest] = themeId.split(".");
  const variation = rest.join(".");
  const baseMeta = themesMeta[candidate];
  if (!baseMeta) return themeId;
  const variations = normalizeVariations(baseMeta?.variations ?? []);
  if (variations.includes(variation)) {
    return `${candidate}-${variation}`;
  }
  return themeId;
}

function buildModeCSS(
  data,
  mode,
  bothModes,
  config,
  aspectMap,
  warnings,
  classToggleVarPrefixes,
  sidecars = {},
  diffData = null,
) {
  const { varGraph, provenance, declaredVarUses, styleSettingsTargetVars } =
    sidecars;

  const aspectSelectors = new Map();
  const baseVars = {};

  const bodyStyles = data.body ?? {};
  for (const [key, value] of Object.entries(bodyStyles)) {
    if (key.startsWith("--") && value && value !== "inherit") {
      baseVars[key] = normalizeSvgDataUriValue(value);
    }
  }

  // Sanitize any CSS values that contain corrupted '??' entries.
  // These can appear in font vars but also other vars like --table-header-size.
  for (const key of Object.keys(baseVars)) {
    if (typeof baseVars[key] === "string" && baseVars[key].includes("??")) {
      baseVars[key] = sanitizeFontValue(baseVars[key]);
      // Remove the entry entirely if sanitization left it empty
      if (!baseVars[key]) delete baseVars[key];
    }
  }

  const calloutBridgeVars = buildCalloutBridgeVars(data);
  for (const [key, value] of Object.entries(calloutBridgeVars)) {
    if (!baseVars[key]) {
      baseVars[key] = value;
    }
  }

  const derivedQuartzVars = {
    "--light": ["--background-primary", "--background-primary-alt"],
    "--lightgray": ["--background-secondary", "--background-secondary-alt"],
    "--gray": ["--text-muted", "--text-faint", "--text-normal"],
    "--darkgray": ["--text-normal", "--text-muted"],
    "--dark": ["--text-normal", "--text-muted"],
    "--secondary": ["--text-accent", "--color-accent", "--interactive-accent"],
    "--tertiary": [
      "--text-accent-hover",
      "--interactive-accent-hover",
      "--text-accent",
    ],
    "--highlight": [
      "--text-highlight-bg",
      "--background-modifier-hover",
      "--background-modifier-active-hover",
    ],
    "--textHighlight": [
      "--text-highlight-bg",
      "--background-modifier-hover",
      "--background-modifier-active-hover",
    ],
    "--bodyFont": ["--font-text", "--font-interface", "--font-text-theme"],
    "--headerFont": ["--font-text", "--font-interface", "--font-text-theme"],
    "--titleFont": ["--font-text", "--font-interface", "--font-text-theme"],
    "--codeFont": ["--font-monospace", "--font-text", "--font-interface"],
  };

  // Build a reverse dependency map from var-graph: "which vars reference this one?"
  const reverseVarGraph = {};
  if (varGraph) {
    for (const [varName, selectorRefs] of Object.entries(varGraph)) {
      for (const deps of Object.values(selectorRefs)) {
        for (const dep of deps) {
          if (!reverseVarGraph[dep]) reverseVarGraph[dep] = [];
          reverseVarGraph[dep].push(varName);
        }
      }
    }
  }

  // Follow a var() chain up to maxDepth levels to find the actual leaf value
  function resolveVarChain(varName, maxDepth = 3) {
    const value = baseVars[varName];
    if (!value || !value.includes("var(") || maxDepth <= 0)
      return value || null;
    const refMatch = value.match(/var\(\s*(--[^,)]+)/);
    if (!refMatch) return value;
    const refName = refMatch[1].trim();
    if (baseVars[refName]) return baseVars[refName];
    return resolveVarChain(refName, maxDepth - 1);
  }

  for (const [quartzVar, sources] of Object.entries(derivedQuartzVars)) {
    if (baseVars[quartzVar]) continue;

    // Try hardcoded sources first
    let resolved = false;
    for (const source of sources) {
      if (baseVars[source]) {
        baseVars[quartzVar] = `var(${source}, ${baseVars[source]})`;
        resolved = true;
        break;
      }
    }
    if (resolved) continue;

    // Fallback: use var-graph to find indirect paths
    if (varGraph) {
      for (const source of sources) {
        const referrers = reverseVarGraph[source];
        if (!referrers) continue;
        for (const referrer of referrers) {
          if (baseVars[referrer]) {
            const leaf = resolveVarChain(referrer) || baseVars[referrer];
            baseVars[quartzVar] = `var(${referrer}, ${leaf})`;
            resolved = true;
            break;
          }
        }
        if (resolved) break;
      }
    }
  }

  config.forEach((mapping, index) => {
    const aspect = aspectMap[index] ?? "misc";
    const style = data[mapping.obsidianSelector];
    if (!style) return;
    const selector = mapping.quartzSelector;
    if (!selector) return;

    for (const prop of mapping.properties || []) {
      let value = style[prop];
      if (
        value === undefined ||
        value === null ||
        value === "" ||
        value === "inherit"
      ) {
        if (declaredVarUses) {
          const declared = declaredVarUses[mapping.obsidianSelector]?.[prop];
          if (declared) {
            value = declared;
          } else {
            continue;
          }
        } else {
          continue;
        }
      }
      if (prop === "--callout-icon") continue;
      if (
        classToggleVarPrefixes &&
        classToggleVarPrefixes.length > 0 &&
        typeof value === "string" &&
        value.includes("var(")
      ) {
        const varRefMatch = value.match(/var\(\s*--([^,)]+)/);
        if (varRefMatch) {
          const refVar = `--${varRefMatch[1]}`;
          if (
            !baseVars[refVar] &&
            classToggleVarPrefixes.some((prefix) => {
              const ref = varRefMatch[1];
              return ref === prefix || ref.startsWith(prefix + "-");
            })
          ) {
            continue;
          }
        }
      }
      let normalized = normalizeSvgDataUriValue(value);
      if (prop === "font-family" && normalized.includes("??")) {
        normalized = sanitizeFontValue(normalized);
        if (!normalized) continue;
      }
      if (
        declaredVarUses &&
        !prop.startsWith("--") &&
        !normalized.includes("var(")
      ) {
        const obsidianSel = mapping.obsidianSelector;
        const declared = declaredVarUses[obsidianSel]?.[prop];
        if (declared) {
          normalized = declared;
        }
      }
      let selectorMap = aspectSelectors.get(aspect);
      if (!selectorMap) {
        selectorMap = new Map();
        aspectSelectors.set(aspect, selectorMap);
      }
      let propMap = selectorMap.get(selector);
      if (!propMap) {
        propMap = new Map();
        selectorMap.set(selector, propMap);
      }
      if (propMap.has(prop) && propMap.get(prop) !== normalized) {
        const existingSource = provenance?.[mapping.obsidianSelector]?.[prop];
        const detail = existingSource ? ` (source: ${existingSource})` : "";
        warnings.add(
          `[overwrite] ${selector} :: ${prop} overwritten (${mapping.obsidianSelector})${detail}`,
        );
      }
      propMap.set(prop, normalized);
    }

    // Bridge declarations: emit custom properties (--*) from the extracted
    // data that contain var() references and differ from the body baseline.
    // These are theme-authored variable bridges (e.g. em sets --italic-color
    // to rgb(var(--ctp-italic))) that are not in the config property whitelist
    // but are essential for Style Settings overrides to propagate correctly.
    // Skip body/html selectors — their vars are already in baseVars/:root.
    const obsidianSel = mapping.obsidianSelector;
    if (/^(html|body)\b/.test(obsidianSel)) return;
    for (const [prop, value] of Object.entries(style)) {
      if (
        !prop.startsWith("--") ||
        typeof value !== "string" ||
        !value.includes("var(")
      ) {
        continue;
      }
      // Skip build-tool artifact properties (e.g. PostCSS's --csstools-* vars)
      if (prop.startsWith("--csstools-")) continue;
      // Skip bridge values referencing build-tool artifact variables
      if (/var\(\s*--csstools-/.test(value)) continue;
      // Skip if this property already matches the body/root baseline value
      if (baseVars[prop] === value) continue;
      // Skip bridge declarations contaminated by class-toggle state that was
      // active during extraction. When a class-toggle (e.g. ".illusion") was
      // ON during DOM extraction, elements inherit overridden variable values
      // like `--h1-color: var(--illusion-header-text, ...)` instead of the
      // base value `var(--headers, ...)`.  These should not leak into the
      // generated base CSS — the class-toggle CSS is already captured
      // separately in classSettings.
      if (classToggleVarPrefixes && classToggleVarPrefixes.length > 0) {
        const varRefMatch = value.match(/var\(\s*--([^,)]+)/);
        if (varRefMatch) {
          const refVar = `--${varRefMatch[1]}`;
          if (
            !baseVars[refVar] &&
            classToggleVarPrefixes.some((prefix) => {
              const ref = varRefMatch[1];
              return ref === prefix || ref.startsWith(prefix + "-");
            })
          ) {
            continue;
          }
        }
      }
      let selectorMap = aspectSelectors.get(aspect);
      if (!selectorMap) {
        selectorMap = new Map();
        aspectSelectors.set(aspect, selectorMap);
      }
      let propMap = selectorMap.get(selector);
      if (!propMap) {
        propMap = new Map();
        selectorMap.set(selector, propMap);
      }
      // Don't overwrite if already set by the config property whitelist
      if (!propMap.has(prop)) {
        propMap.set(prop, value);
      }
    }
  });

  // Post-processing: strip --callout-color from child selectors of
  // [data-callout="X"] parents when it holds a literal (non-var) value.
  // The Obsidian DOM scraper captures the computed value of --callout-color on
  // .callout-title children, which is always the resolved default color rather
  // than the per-type variable set on the parent .callout[data-callout="X"].
  // Emitting this literal clobbers the parent's var() reference and causes all
  // callout titles to render in the same default color.
  for (const [, selectorMap] of aspectSelectors) {
    for (const [selector, propMap] of selectorMap) {
      if (selector.includes(".callout-title")) {
        const value = propMap.get("--callout-color");
        if (value && !value.includes("var(")) {
          propMap.delete("--callout-color");
        }
      }
    }
  }

  // Post-processing: ensure shorthand property coherence.
  // When the baseline diff strips default values (e.g. border-width: 0px) but
  // retains non-default related properties (e.g. border-color, border-style),
  // browsers apply their initial values (border-width: medium ≈ 3px) instead
  // of the intended 0px. Fix by injecting explicit zero/default values when
  // sibling properties are present but the width/size is missing.
  const SIDES = ["top", "right", "bottom", "left"];
  for (const [, selectorMap] of aspectSelectors) {
    for (const [, propMap] of selectorMap) {
      // Border coherence: if color or style is set, ensure width is too
      for (const side of SIDES) {
        const hasColor = propMap.has(`border-${side}-color`);
        const hasStyle = propMap.has(`border-${side}-style`);
        const hasWidth = propMap.has(`border-${side}-width`);
        if ((hasColor || hasStyle) && !hasWidth) {
          propMap.set(`border-${side}-width`, "0px");
        }
      }
      // Padding coherence: if any padding side is set, ensure all are explicit
      const paddingSides = SIDES.map((s) => `padding-${s}`);
      const hasSomePadding = paddingSides.some((p) => propMap.has(p));
      if (hasSomePadding) {
        for (const p of paddingSides) {
          if (!propMap.has(p)) {
            propMap.set(p, "0px");
          }
        }
      }
      // Margin coherence: if any margin side is set, ensure all are explicit
      const marginSides = SIDES.map((s) => `margin-${s}`);
      const hasSomeMargin = marginSides.some((p) => propMap.has(p));
      if (hasSomeMargin) {
        for (const p of marginSides) {
          if (!propMap.has(p)) {
            propMap.set(p, "0px");
          }
        }
      }
    }
  }

  const aspectCSS = {};
  const baseSelector = "body";

  const rootSelector = bothModes
    ? mode === "dark"
      ? ':root:root[saved-theme="dark"]'
      : ":root:root"
    : ":root:root";
  const htmlSelector = bothModes
    ? mode === "dark"
      ? 'html[saved-theme="dark"]'
      : 'html[saved-theme="light"]'
    : "html";

  const extraCalloutIconCSS = buildCalloutIconCSS(
    data,
    warnings,
    baseSelector,
    htmlSelector,
  );
  const extraCheckboxIconCSS = buildCheckboxIconCSS(
    data,
    diffData,
    baseSelector,
    htmlSelector,
  );

  for (const aspect of ASPECT_ORDER) {
    const selectorMap = aspectSelectors.get(aspect);
    const cssParts = [];

    if (aspect === "base") {
      const varKeys = Object.keys(baseVars).sort();
      const varLines = varKeys.map((key) => `  ${key}: ${baseVars[key]};`);
      if (baseVars["--icon-color"]) {
        varLines.push(
          "  --quartz-icon-color: var(--icon-color, currentColor);",
        );
      } else {
        varLines.push("  --quartz-icon-color: currentColor;");
      }
      if (baseVars["--nav-collapse-icon-color"]) {
        varLines.push(
          "  --collapse-icon-color: var(--nav-collapse-icon-color);",
        );
      }
      if (baseVars["--nav-collapse-icon-color-collapsed"]) {
        varLines.push(
          "  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);",
        );
      }
      cssParts.push(`${rootSelector} {\n${varLines.join("\n")}\n}`);
      cssParts.push(
        `${htmlSelector} body {\n  background-color: var(--background-primary);\n  color: var(--text-normal);\n}`,
      );
    }

    if (selectorMap && selectorMap.size > 0) {
      const selectors = Array.from(selectorMap.keys()).sort();
      const selectorBlocks = selectors.map((selector) => {
        const propMap = selectorMap.get(selector);
        const props = Array.from(propMap.keys()).sort();
        const resolvedSelector = selector.includes("&")
          ? selector.replaceAll("&", baseSelector)
          : `${baseSelector} ${selector}`;
        const propLines = props.map(
          (prop) => `  ${prop}: ${propMap.get(prop)};`,
        );
        const scopedSelector = resolvedSelector
          .split(",")
          .map((part) => `${htmlSelector} ${part.trim()}`)
          .join(", ");
        return `${scopedSelector} {\n${propLines.join("\n")}\n}`;
      });
      cssParts.push(selectorBlocks.join("\n\n"));
    }

    if (aspect === "callouts" && extraCalloutIconCSS) {
      cssParts.push(extraCalloutIconCSS);
    }
    if (aspect === "checkboxes" && extraCheckboxIconCSS) {
      cssParts.push(extraCheckboxIconCSS);
    }

    const css = cssParts.join("\n\n").trim();
    if (css.length > 0) {
      aspectCSS[aspect] = css;
    }
  }

  const explorerVarMappings = [
    {
      varName: "--nav-item-color",
      selector: ".explorer .nav-files-container a",
      property: "color",
    },
    {
      varName: "--nav-item-color-hover",
      selector: ".explorer .nav-files-container a:hover",
      property: "color",
    },
    {
      varName: "--nav-item-color-active",
      selector: ".explorer .nav-files-container .is-active",
      property: "color",
    },
    {
      varName: "--nav-item-background-hover",
      selector: ".explorer .nav-files-container a:hover",
      property: "background-color",
    },
    {
      varName: "--nav-collapse-icon-color",
      selector: ".explorer .nav-files-container .collapse-icon svg",
      property: "color",
    },
    {
      varName: "--nav-indentation-guide-color",
      selector: ".explorer .nav-files-container .folder-outer > ul",
      property: "border-left-color",
    },
  ];
  const explorerBlocks = [];
  for (const entry of explorerVarMappings) {
    if (!baseVars[entry.varName]) continue;
    const scopedSelector = `${htmlSelector} ${baseSelector} ${entry.selector}`;
    explorerBlocks.push(
      `${scopedSelector} {\n  ${entry.property}: var(${entry.varName});\n}`,
    );
  }
  if (explorerBlocks.length > 0) {
    const explorerCSS = explorerBlocks.join("\n\n");
    if (aspectCSS.explorer) {
      aspectCSS.explorer = `${aspectCSS.explorer}\n\n${explorerCSS}`;
    } else {
      aspectCSS.explorer = explorerCSS;
    }
  }

  if (provenance) {
    const diagnostics = { conflicts: [], brokenBridges: [] };

    // Detect bridge variables referencing non-existent vars
    for (const [aspect, selectorMap] of aspectSelectors) {
      for (const [selector, propMap] of selectorMap) {
        for (const [prop, value] of propMap) {
          if (!prop.startsWith("--") || typeof value !== "string") continue;
          const refMatch = value.match(/var\(\s*(--[^,)]+)/);
          if (!refMatch) continue;
          const refName = refMatch[1].trim();
          if (!baseVars[refName] && !propMap.has(refName)) {
            diagnostics.brokenBridges.push({
              property: prop,
              references: refName,
              selector,
              aspect,
            });
          }
        }
      }
    }

    aspectCSS.__diagnostics = diagnostics;
  }

  return aspectCSS;
}

function renderThemeModule(themeData) {
  return JSON.stringify(themeData, null, 2);
}

/**
 * Flattens a mode's aspect CSS object (aspect -> cssText) into one CSS string.
 * Used for variable-consumer scanning during selector-impact graph generation.
 */
function flattenAspectCssToString(aspectCss) {
  return Object.values(aspectCss || {})
    .filter((value) => typeof value === "string" && value.trim().length > 0)
    .join("\n");
}

const reservedIdentifiers = new Set([
  "default",
  "class",
  "function",
  "return",
  "import",
  "export",
  "const",
  "let",
  "var",
  "new",
  "switch",
  "case",
  "if",
  "else",
  "for",
  "while",
  "do",
  "try",
  "catch",
  "finally",
  "throw",
  "extends",
  "super",
  "this",
  "typeof",
  "void",
  "yield",
  "await",
  "break",
  "continue",
  "delete",
  "in",
  "instanceof",
  "with",
]);

function toIdentifier(value) {
  const cleaned = value.replace(/[^a-zA-Z0-9_]/g, "_");
  const base = /^[0-9]/.test(cleaned) ? `_${cleaned}` : cleaned || "theme";
  return reservedIdentifiers.has(base) ? `_${base}` : base;
}

function renderRegistry(themeEntries, themeMetas) {
  const lines = [];
  lines.push('import type { ThemeMeta } from "../types.js";');
  lines.push("");
  lines.push("export const themeMetas: Record<string, ThemeMeta> = {");
  for (const [themeId, meta] of themeMetas) {
    lines.push(`  ${JSON.stringify(themeId)}: {`);
    lines.push(`    name: ${JSON.stringify(meta.name)},`);
    lines.push(`    modes: ${JSON.stringify(meta.modes)},`);
    lines.push(`    variations: ${JSON.stringify(meta.variations)},`);
    lines.push(`    fonts: ${JSON.stringify(meta.fonts)},`);
    lines.push("  },");
  }
  lines.push("};");
  lines.push("");
  return lines.join("\n");
}

function mergeBaseline(baseline, diff) {
  if (!diff) return null;
  if (!baseline) return diff;
  const merged = {};
  for (const [selector, props] of Object.entries(baseline)) {
    merged[selector] = { ...props };
  }
  for (const [selector, props] of Object.entries(diff)) {
    if (!merged[selector]) merged[selector] = {};
    for (const [prop, value] of Object.entries(props)) {
      merged[selector][prop] = value;
    }
  }
  return merged;
}

async function readJsonIfExists(filePath) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error && error.code === "ENOENT") return null;
    if (error instanceof RangeError) {
      console.warn(`Skipping ${filePath}: file too large to read as a string`);
      return null;
    }
    throw error;
  }
}

async function clearOutputDirectory() {
  await fs.mkdir(outputDir, { recursive: true });
  const entries = await fs.readdir(outputDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter(
        (entry) =>
          entry.isFile() &&
          (entry.name.endsWith(".ts") || entry.name.endsWith(".json")),
      )
      .map((entry) => fs.unlink(path.join(outputDir, entry.name))),
  );
}

async function main() {
  // When installed as a Quartz plugin (via subdir), the runner/ directory
  // doesn't exist. The pre-generated src/themes/*.ts files are already
  // present, so tsup can build directly from them — skip generation gracefully.
  try {
    await fs.access(configPath);
    await fs.access(resultsDir);
  } catch {
    console.log(
      "Skipping theme generation: runner dependencies not found (installed as plugin).",
    );
    process.exit(0);
  }

  const { config: manualConfig, aspectMap: manualAspectMap } = await import(
    pathToFileURL(configPath).href
  );

  let autoConfigModule = null;
  if (USE_AUTO_CONFIG) {
    try {
      const autoConfigPath = path.join(
        repoRoot,
        "runner",
        "scripts",
        "auto-config.mjs",
      );
      autoConfigModule = await import(pathToFileURL(autoConfigPath).href);
    } catch (e) {
      console.warn(`Auto-config module not available: ${e.message}`);
    }
  }

  const config = manualConfig;
  const aspectMap = manualAspectMap;

  const themesJson = JSON.parse(await fs.readFile(themesJsonPath, "utf8"));
  const themesMeta = themesJson.themes ?? {};

  const args = process.argv
    .slice(2)
    .flatMap((arg) => arg.split(","))
    .filter((arg) => arg.trim() !== "--auto" && arg.trim() !== "--no-clear");
  const filter = new Set(args.map((arg) => arg.trim()).filter(Boolean));
  const isSingleThemeMode = filter.size > 0;

  const themeDirs = (await fs.readdir(resultsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => (filter.size > 0 ? filter.has(name) : true));

  if (themeDirs.length === 0) {
    throw new Error("No themes matched the provided filter.");
  }

  if (!isSingleThemeMode && !NO_CLEAR) {
    await clearOutputDirectory();
  } else {
    // In single-theme mode or with --no-clear, ensure output directory exists
    // but don't delete existing theme files
    await fs.mkdir(outputDir, { recursive: true });
  }

  const themeEntries = [];
  const themeMetas = [];
  const usedIdentifiers = new Set();

  const baselineDir = path.join(resultsDir, "_baseline");
  const baselineDark = await readJsonIfExists(
    path.join(baselineDir, "dark.json"),
  );
  const baselineLight = await readJsonIfExists(
    path.join(baselineDir, "light.json"),
  );

  for (const themeId of themeDirs) {
    const themeDir = path.join(resultsDir, themeId);
    const darkDiff = await readJsonIfExists(path.join(themeDir, "dark.json"));
    const lightDiff = await readJsonIfExists(path.join(themeDir, "light.json"));
    const darkData = mergeBaseline(baselineDark, darkDiff);
    const lightData = mergeBaseline(baselineLight, lightDiff);
    const hasDark = Boolean(darkData);
    const hasLight = Boolean(lightData);
    if (!hasDark && !hasLight) {
      continue;
    }

    const themeMeta = themesMeta[themeId] ?? {};
    const metaModes = Array.isArray(themeMeta.modes)
      ? themeMeta.modes
      : hasDark && hasLight
        ? ["dark", "light"]
        : hasDark
          ? ["dark"]
          : ["light"];

    let fontFiles;
    let fontDir;
    try {
      const resolved = await resolveGenerateFontManifest(repoRoot, themeId);
      if (resolved) {
        fontDir = resolved.fontDir;
        fontFiles = (resolved.manifest.fonts || []).map((f) => ({
          family: f.family,
          style: f.style,
          weight: f.weight,
          file: f.file,
          format: f.format,
          unicodeRange: f.unicodeRange || null,
        }));
      }
    } catch {}

    // Collect all style-settings-id values from the raw CSS @settings blocks.
    // themes.json only stores the primary id; the CSS may have additional blocks.
    let styleSettingsId = undefined;
    let cssSettingsBlocks = null;
    const primaryId =
      themeMeta.style_settings?.id ||
      themeMeta.style_settings?.sections?.[0]?.id;
    if (primaryId) {
      const dirName = obsidianSlugToDir.get(themeId);
      const cssPath = dirName
        ? path.join(obsidianDir, dirName, "theme.css")
        : null;
      if (cssPath && existsSync(cssPath)) {
        const cssContent = readFileSync(cssPath, "utf8");
        cssSettingsBlocks = extractStyleSettings(cssContent);
        const allIds = [
          ...new Set(cssSettingsBlocks.map((b) => b?.id).filter(Boolean)),
        ];
        styleSettingsId = allIds.length > 1 ? allIds : primaryId;
      } else {
        styleSettingsId = primaryId;
      }
    }

    const meta = {
      name: themeId,
      modes: metaModes,
      variations: normalizeVariations(themeMeta.variations ?? []),
      fonts: normalizeFonts(themeMeta.fonts ?? []),
      ...(fontFiles && fontFiles.length > 0 ? { fontFiles } : {}),
      ...(fontDir && fontDir !== themeId ? { fontDir } : {}),
      ...(styleSettingsId ? { styleSettingsId } : {}),
    };

    const bothModes = hasDark && hasLight;
    const warnings = new Set();

    const allStyleSettings =
      cssSettingsBlocks && cssSettingsBlocks.length > 0
        ? cssSettingsBlocks.flatMap((b) => b?.settings ?? [])
        : (themeMeta.style_settings?.sections ?? []).flatMap((section) =>
            Array.isArray(section?.settings) ? section.settings : [],
          );
    const classToggleVarPrefixes = allStyleSettings
      .filter(
        (s) =>
          s &&
          (s.type === "class-toggle" ||
            (s.type === "class-select" && s.options)),
      )
      .flatMap((s) =>
        s.type === "class-toggle"
          ? [s.id]
          : (s.options || []).map((o) => o?.value).filter(Boolean),
      )
      .filter(Boolean);

    const styleSettingsTargetVars = new Set();
    for (const s of allStyleSettings) {
      if (!s?.type || !s?.id) continue;
      if (s.type.startsWith("variable-") || s.type === "color-gradient") {
        styleSettingsTargetVars.add(`--${s.id}`);
        if (
          s.format &&
          (s.format.endsWith("-split") || s.format === "hsl-split-decimal")
        ) {
          const suffixes = s.format.startsWith("hsl")
            ? ["-h", "-s", "-l"]
            : ["-r", "-g", "-b"];
          if (s.opacity) suffixes.push("-a");
          for (const suffix of suffixes) {
            styleSettingsTargetVars.add(`--${s.id}${suffix}`);
          }
        }
        if (Array.isArray(s["alt-format"])) {
          for (const alt of s["alt-format"]) {
            if (alt?.id) styleSettingsTargetVars.add(`--${alt.id}`);
          }
        }
      }
    }

    let effectiveConfig = config;
    let effectiveAspectMap = aspectMap;
    if (autoConfigModule) {
      try {
        const autoEntries = autoConfigModule.generateAutoConfig(themeId);
        if (autoEntries.length > 0) {
          effectiveConfig = autoConfigModule.mergeConfigs(config, autoEntries);
          effectiveAspectMap = [
            ...aspectMap,
            ...autoEntries
              .filter(
                (e) =>
                  !new Set(config.map((c) => c.obsidianSelector)).has(
                    e.obsidianSelector,
                  ),
              )
              .map((e) => e._aspect || "misc"),
          ];
        }
      } catch (e) {
        console.warn(`  Auto-config failed for ${themeId}: ${e.message}`);
      }
    }

    const darkSidecars = {
      varGraph: await readJsonIfExists(
        path.join(themeDir, "dark-var-graph.json"),
      ),
      provenance: await readJsonIfExists(
        path.join(themeDir, "dark-provenance.json"),
      ),
      alternates: await readJsonIfExists(
        path.join(themeDir, "dark-alternates.json"),
      ),
      runtimeEvidence: await readJsonIfExists(
        path.join(themeDir, "dark-style-settings-runtime-evidence.json"),
      ),
      declaredVarUses: await readJsonIfExists(
        path.join(themeDir, "dark-declared-var-uses.json"),
      ),
      styleSettingsTargetVars,
    };
    const lightSidecars = {
      varGraph: await readJsonIfExists(
        path.join(themeDir, "light-var-graph.json"),
      ),
      provenance: await readJsonIfExists(
        path.join(themeDir, "light-provenance.json"),
      ),
      alternates: await readJsonIfExists(
        path.join(themeDir, "light-alternates.json"),
      ),
      runtimeEvidence: await readJsonIfExists(
        path.join(themeDir, "light-style-settings-runtime-evidence.json"),
      ),
      declaredVarUses: await readJsonIfExists(
        path.join(themeDir, "light-declared-var-uses.json"),
      ),
      styleSettingsTargetVars,
    };

    const darkAspectCSS = hasDark
      ? buildModeCSS(
          darkData,
          "dark",
          bothModes,
          effectiveConfig,
          effectiveAspectMap,
          warnings,
          classToggleVarPrefixes,
          darkSidecars,
          darkDiff,
        )
      : {};
    const lightAspectCSS = hasLight
      ? buildModeCSS(
          lightData,
          "light",
          bothModes,
          effectiveConfig,
          effectiveAspectMap,
          warnings,
          classToggleVarPrefixes,
          lightSidecars,
          lightDiff,
        )
      : {};

    const normalizedId = resolveThemeKey(themeId, themesMeta);
    const fileBaseName = normalizedId.replace(/[^a-zA-Z0-9-_]/g, "-");
    const outputPath = path.join(outputDir, `${fileBaseName}.json`);
    const styleSettingsEffects = Array.isArray(
      themeMeta.style_settings?.effects,
    )
      ? themeMeta.style_settings.effects
      : [];

    let extras = null;
    try {
      extras = await fs.readFile(
        path.join(extrasDir, `${themeId}.css`),
        "utf8",
      );
    } catch {
      // No extras file for this theme — that's fine
    }

    if (warnings.size > 0) {
      const entries = [...warnings].slice(0, 20).join(", ");
      const suffix = warnings.size > 20 ? "..." : "";
      console.warn(
        `Warning: Unresolved callout icons for theme "${themeId}": ${entries}${suffix}`,
      );
    }

    let classSettings = extractClassSettings(themeId, allStyleSettings);

    // Enrich classSettings with variable overrides from alternates data.
    // alternates.json contains variable values that would win under different
    // body class states (Style Settings toggles). Merge these as CSS variable
    // override blocks into the corresponding classSettings entries.
    const classToggleIds = new Set();
    if (allStyleSettings) {
      for (const s of allStyleSettings) {
        if (!s?.type) continue;
        if (s.type === "class-toggle" && s.id) classToggleIds.add(s.id);
        if (s.type === "class-select" && s.options) {
          for (const opt of s.options) {
            if (opt?.value) classToggleIds.add(opt.value);
          }
        }
      }
    }

    if (classToggleIds.size > 0) {
      for (const [mode, sidecars] of [
        ["dark", darkSidecars],
        ["light", lightSidecars],
      ]) {
        const alternates = sidecars.alternates;
        if (!alternates) continue;

        for (const [selector, props] of Object.entries(alternates)) {
          for (const [prop, toggleMap] of Object.entries(props)) {
            for (const [bodyClassKey, altValue] of Object.entries(toggleMap)) {
              const className = bodyClassKey.replace(/^body\./, "");
              if (!classToggleIds.has(className)) continue;

              if (!classSettings) classSettings = {};
              if (!classSettings[className]) classSettings[className] = {};

              const varLine = `  ${prop}: ${altValue};`;
              const modeKey = mode === "dark" ? "dark" : "light";
              const existing = classSettings[className][modeKey] || "";
              if (!existing.includes(`${prop}:`)) {
                const block = existing
                  ? existing.replace(/\}\s*$/, `\n${varLine}\n}`)
                  : `:root {\n${varLine}\n}`;
                classSettings[className][modeKey] = block;
              }
            }
          }
        }
      }
    }

    const runtimeEvidenceRecords = [darkSidecars, lightSidecars].flatMap(
      (sidecar) => normalizeRuntimeEvidenceRecords(sidecar.runtimeEvidence),
    );

    const selectorImpacts = buildSelectorImpactGraph({
      effectRecords: styleSettingsEffects,
      classSettings,
      modeCss: {
        dark: flattenAspectCssToString(darkAspectCSS),
        light: flattenAspectCssToString(lightAspectCSS),
      },
      runtimeEvidenceRecords,
    });

    const brokenVarLinks = {};
    {
      const emittedCss =
        flattenAspectCssToString(darkAspectCSS) +
        "\n" +
        flattenAspectCssToString(lightAspectCSS);
      for (const [modeName, modeSidecars] of [
        ["dark", darkSidecars],
        ["light", lightSidecars],
      ]) {
        const vg = modeSidecars.varGraph;
        if (!vg) continue;
        for (const [varName, selectorRefs] of Object.entries(vg)) {
          for (const refs of Object.values(selectorRefs)) {
            for (const ref of refs) {
              const chainPattern = `${varName}:`;
              const varRefPattern = `var(${ref}`;
              const hasLiveChain =
                emittedCss.includes(chainPattern) &&
                emittedCss.includes(varRefPattern);
              if (!hasLiveChain) {
                if (!brokenVarLinks[ref]) brokenVarLinks[ref] = [];
                if (!brokenVarLinks[ref].includes(varName)) {
                  brokenVarLinks[ref].push(varName);
                }
              }
            }
          }
        }
      }
    }

    // Extract and write diagnostics, then remove from aspectCSS
    for (const [mode, aspectCSS] of [
      ["dark", darkAspectCSS],
      ["light", lightAspectCSS],
    ]) {
      if (aspectCSS.__diagnostics) {
        const diag = aspectCSS.__diagnostics;
        delete aspectCSS.__diagnostics;
        const total =
          (diag.conflicts?.length || 0) + (diag.brokenBridges?.length || 0);
        if (total > 0) {
          const diagPath = path.join(themeDir, `${mode}-diagnostics.json`);
          await fs.writeFile(diagPath, JSON.stringify(diag, null, 2), "utf8");
          console.log(
            `  ${themeId} ${mode}: ${diag.conflicts?.length || 0} conflicts, ${diag.brokenBridges?.length || 0} broken bridges → ${diagPath}`,
          );
        }
      }
    }

    const moduleContent = renderThemeModule({
      meta,
      dark: darkAspectCSS,
      light: lightAspectCSS,
      extras,
      classSettings,
      selectorImpacts,
      ...(Object.keys(brokenVarLinks).length > 0 ? { brokenVarLinks } : {}),
    });

    await fs.writeFile(outputPath, moduleContent, "utf8");
    const baseId = toIdentifier(normalizedId);
    let importId = baseId;
    let suffix = 1;
    while (usedIdentifiers.has(importId)) {
      importId = `${baseId}_${suffix}`;
      suffix += 1;
    }
    usedIdentifiers.add(importId);

    themeEntries.push({ id: normalizedId, fileBaseName, importId });
    themeMetas.push([normalizedId, meta]);
  }

  themeEntries.sort((a, b) => a.id.localeCompare(b.id));
  themeMetas.sort((a, b) => a[0].localeCompare(b[0]));

  if (!isSingleThemeMode) {
    const registryContent = renderRegistry(themeEntries, themeMetas);
    await fs.writeFile(
      path.join(outputDir, "_registry.ts"),
      registryContent,
      "utf8",
    );
  }

  console.log(
    `Generated ${themeEntries.length} theme module${themeEntries.length === 1 ? "" : "s"}${isSingleThemeMode ? " (registry unchanged)" : " and registry"} in ${path.relative(
      repoRoot,
      outputDir,
    )}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
