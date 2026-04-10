import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as lucideIcons from "@lucide/icons";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "../..");
const configPath = path.join(repoRoot, "runner", "scripts", "config.js");
const themesJsonPath = path.join(repoRoot, "themes.json");
const resultsDir = path.join(repoRoot, "runner", "results");
const outputDir = path.join(repoRoot, "plugin", "src", "themes");
const extrasDir = path.join(repoRoot, "plugin", "extras");

const ASPECT_ORDER = [
  "base",
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
      "progress",
      "page title",
      "math",
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

  // After removing '??' entries, we may have orphaned leading single-quotes
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

function buildCheckboxIconCSS(data, baseSelector, htmlSelector) {
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

  const entries = Object.entries(data).filter(([selector]) =>
    selector.startsWith('input[data-task="'),
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
    if (!hasMaskImage && !hasContent && !hasColor) continue;
    const taskChar = escapeAttrValue(taskMatch[1]);
    const pseudoSuffix = selector.includes("::after") ? "::after" : "";
    const quartzSelector = `${baseSelector} li.task-list-item[data-task=\"${taskChar}\"] input[type=\"checkbox\"]${pseudoSuffix}`;
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
  const [base, ...rest] = themeId.split(".");
  const variation = rest.join(".");
  const baseMeta = themesMeta[base];
  const variations = normalizeVariations(baseMeta?.variations ?? []);
  if (baseMeta && variations.includes(variation)) {
    return `${base}-${variation}`;
  }
  return themeId;
}

function buildModeCSS(data, mode, bothModes, config, aspectMap, warnings) {
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

  for (const [quartzVar, sources] of Object.entries(derivedQuartzVars)) {
    if (baseVars[quartzVar]) continue;
    for (const source of sources) {
      if (baseVars[source]) {
        baseVars[quartzVar] = baseVars[source];
        break;
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
      const value = style[prop];
      if (
        value === undefined ||
        value === null ||
        value === "" ||
        value === "inherit" ||
        prop === "--callout-icon"
      ) {
        continue;
      }
      const normalized = normalizeSvgDataUriValue(value);
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
      propMap.set(prop, normalized);
    }
  });

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
    baseSelector,
    htmlSelector,
  );

  for (const aspect of ASPECT_ORDER) {
    const selectorMap = aspectSelectors.get(aspect);
    const cssParts = [];

    if (aspect === "base") {
      const varKeys = Object.keys(baseVars).sort();
      const varLines = varKeys.map((key) => {
        const suffix = key.startsWith("--callout-") ? "" : " !important";
        return `  ${key}: ${baseVars[key]}${suffix};`;
      });
      varLines.push("  --quartz-icon-color: currentColor !important;");
      cssParts.push(`${rootSelector} {\n${varLines.join("\n")}\n}`);
      cssParts.push(
        `${htmlSelector} body {\n  background-color: var(--background-primary) !important;\n  color: var(--text-normal) !important;\n}`,
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

  return aspectCSS;
}

function renderThemeModule(themeData) {
  const lines = [];
  lines.push('import type { ThemeData } from "../types.js";');
  lines.push("");
  lines.push("export const theme: ThemeData = {");
  lines.push("  meta: {");
  lines.push(`    name: ${JSON.stringify(themeData.meta.name)},`);
  lines.push(`    modes: ${JSON.stringify(themeData.meta.modes)},`);
  lines.push(`    variations: ${JSON.stringify(themeData.meta.variations)},`);
  lines.push(`    fonts: ${JSON.stringify(themeData.meta.fonts)},`);
  lines.push("  },");

  for (const mode of ["dark", "light"]) {
    lines.push(`  ${mode}: {`);
    const modeData = themeData[mode] || {};
    for (const aspect of ASPECT_ORDER) {
      if (modeData[aspect]) {
        lines.push(`    ${aspect}: ${toTemplateLiteral(modeData[aspect])},`);
      }
    }
    lines.push("  },");
  }

  if (themeData.extras) {
    lines.push(`  extras: ${toTemplateLiteral(themeData.extras)},`);
  }

  lines.push("};");
  lines.push("");
  return lines.join("\n");
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
  lines.push('import type { ThemeData, ThemeMeta } from "../types.js";');
  for (const entry of themeEntries) {
    lines.push(
      `import { theme as ${entry.importId} } from ${JSON.stringify(`./${entry.fileBaseName}.js`)};`,
    );
  }
  lines.push("");
  lines.push("export const themeData: Record<string, ThemeData> = {");
  for (const entry of themeEntries) {
    lines.push(`  ${JSON.stringify(entry.id)}: ${entry.importId},`);
  }
  lines.push("};");
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
      .filter((entry) => entry.isFile() && entry.name.endsWith(".ts"))
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

  const { config } = await import(pathToFileURL(configPath).href);
  const configSource = await fs.readFile(configPath, "utf8");
  const aspectMap = buildAspectMap(configSource, config.length);

  const themesJson = JSON.parse(await fs.readFile(themesJsonPath, "utf8"));
  const themesMeta = themesJson.themes ?? {};

  const args = process.argv.slice(2).flatMap((arg) => arg.split(","));
  const filter = new Set(args.map((arg) => arg.trim()).filter(Boolean));

  const themeDirs = (await fs.readdir(resultsDir, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => (filter.size > 0 ? filter.has(name) : true));

  if (themeDirs.length === 0) {
    throw new Error("No themes matched the provided filter.");
  }

  await clearOutputDirectory();

  const themeEntries = [];
  const themeMetas = [];
  const usedIdentifiers = new Set();

  for (const themeId of themeDirs) {
    const themeDir = path.join(resultsDir, themeId);
    const darkData = await readJsonIfExists(path.join(themeDir, "dark.json"));
    const lightData = await readJsonIfExists(path.join(themeDir, "light.json"));
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

    const meta = {
      name: themeId,
      modes: metaModes,
      variations: normalizeVariations(themeMeta.variations ?? []),
      fonts: normalizeFonts(themeMeta.fonts ?? []),
    };

    const bothModes = hasDark && hasLight;
    const warnings = new Set();
    const darkAspectCSS = hasDark
      ? buildModeCSS(darkData, "dark", bothModes, config, aspectMap, warnings)
      : {};
    const lightAspectCSS = hasLight
      ? buildModeCSS(lightData, "light", bothModes, config, aspectMap, warnings)
      : {};

    // Obsidian's stub is identical to `_baseline`, so the diff-based
    // extractor emits an empty `base` aspect. Graft `_baseline`'s `base`
    // onto `obsidian` so it actually renders Obsidian's default palette.
    if (themeId === "obsidian") {
      const baselineDir = path.join(resultsDir, "_baseline");
      const baselineDark = await readJsonIfExists(
        path.join(baselineDir, "dark.json"),
      );
      const baselineLight = await readJsonIfExists(
        path.join(baselineDir, "light.json"),
      );
      if (baselineDark && hasDark) {
        const baselineDarkCSS = buildModeCSS(
          baselineDark,
          "dark",
          bothModes,
          config,
          aspectMap,
          warnings,
        );
        if (baselineDarkCSS.base) {
          darkAspectCSS.base = baselineDarkCSS.base;
        }
      }
      if (baselineLight && hasLight) {
        const baselineLightCSS = buildModeCSS(
          baselineLight,
          "light",
          bothModes,
          config,
          aspectMap,
          warnings,
        );
        if (baselineLightCSS.base) {
          lightAspectCSS.base = baselineLightCSS.base;
        }
      }
    }

    const normalizedId = resolveThemeKey(themeId, themesMeta);
    const fileBaseName = normalizedId.replace(/[^a-zA-Z0-9-_]/g, "-");
    const outputPath = path.join(outputDir, `${fileBaseName}.ts`);

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

    const moduleContent = renderThemeModule({
      meta,
      dark: darkAspectCSS,
      light: lightAspectCSS,
      extras,
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

  const registryContent = renderRegistry(themeEntries, themeMetas);
  await fs.writeFile(
    path.join(outputDir, "_registry.ts"),
    registryContent,
    "utf8",
  );

  console.log(
    `Generated ${themeEntries.length} theme modules and registry in ${path.relative(
      repoRoot,
      outputDir,
    )}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
