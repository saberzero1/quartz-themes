/**
 * CSS Composer — assembles final CSS from theme data + user configuration.
 *
 * Takes a base theme's aspect CSS, applies overrides (aspects from other themes),
 * filters by include list, and produces the final CSS string ready for injection.
 */

import type { AspectCSS, AspectKey, ThemeData, ThemeOptions } from "./types";
import { TEMPLATE_CSS } from "./templateCSS";
import { resolveThemeId, loadTheme } from "./registry";
import { generateCalloutIconCSS } from "./icons/callout-icons";
import {
  generateCheckboxIconCSS,
  generateCheckboxInputBaseCSS,
} from "./icons/checkbox-icons";
import { FONT_CSS } from "./fonts/generated-fonts";

/** All aspect keys in the order they should appear in the CSS output. */
const ASPECT_ORDER: AspectKey[] = [
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

/**
 * Compose the final CSS string from user options.
 *
 * Steps:
 * 1. Load the base theme
 * 2. Determine which aspects to include
 * 3. For each included aspect, resolve the CSS source (base theme or override theme)
 * 4. Concatenate in correct order
 */
export function composeCSS(options: ThemeOptions): string {
  const baseThemeId = resolveThemeId(options.theme, options.variation);
  const baseTheme = loadTheme(baseThemeId);

  // Determine which aspects to include
  const includedAspects = resolveIncludedAspects(options, baseTheme);

  // Collect CSS for each mode
  const parts: string[] = [];

  if (options.mode === "dark" || options.mode === "both") {
    const darkCSS = collectAspectCSS(
      "dark",
      includedAspects,
      baseTheme,
      options,
    );
    if (darkCSS) parts.push(darkCSS);
  }

  if (options.mode === "light" || options.mode === "both") {
    const lightCSS = collectAspectCSS(
      "light",
      includedAspects,
      baseTheme,
      options,
    );
    if (lightCSS) parts.push(lightCSS);
  }

  // Append extras CSS (e.g. CRT effects, snow animations) after aspect CSS
  if (baseTheme.extras) {
    parts.push("/* extras */\n" + baseTheme.extras);
  }

  const fontCSS = baseTheme.meta.fonts
    .map((name) => FONT_CSS[name])
    .filter(Boolean)
    .join("\n\n");

  const hasCheckboxes = includedAspects.includes("checkboxes");
  const hasIconFonts = baseTheme.meta.fonts.some((f) => f.startsWith("icons/"));

  let checkboxCSS = generateCheckboxIconCSS();
  if (hasCheckboxes && !hasIconFonts) {
    checkboxCSS += "\n\n" + generateCheckboxInputBaseCSS();
  }

  const iconCSS = generateCalloutIconCSS() + "\n\n" + checkboxCSS;

  return (
    (fontCSS ? fontCSS + "\n\n" : "") +
    iconCSS +
    "\n\n" +
    parts.join("\n") +
    "\n" +
    TEMPLATE_CSS
  );
}

/**
 * Determine which aspects should be included based on user options and available data.
 */
function resolveIncludedAspects(
  options: ThemeOptions,
  baseTheme: ThemeData,
): AspectKey[] {
  // Start with explicit include list, or all available aspects
  let aspects: AspectKey[];
  if (options.include && options.include.length > 0) {
    aspects = options.include;
  } else {
    // Include all aspects that have CSS in the base theme (either mode)
    aspects = ASPECT_ORDER.filter(
      (key) =>
        baseTheme.dark[key] !== undefined || baseTheme.light[key] !== undefined,
    );
  }

  // Always include "base" if not explicitly excluded
  if (!aspects.includes("base")) {
    aspects = ["base", ...aspects];
  }

  // Remove aspects explicitly set to false in overrides
  if (options.aspects) {
    aspects = aspects.filter((key) => options.aspects?.[key] !== false);
  }

  // Add aspects that are overridden from other themes (even if not in base include list)
  if (options.aspects) {
    for (const [key, value] of Object.entries(options.aspects)) {
      if (typeof value === "string" && !aspects.includes(key as AspectKey)) {
        aspects.push(key as AspectKey);
      }
    }
  }

  // Sort by canonical order
  return ASPECT_ORDER.filter((key) => aspects.includes(key));
}

/**
 * Transform checkbox CSS for browser compatibility.
 *
 * Obsidian themes use `input[type="checkbox"]::after` for custom checkbox icons,
 * but `::after` on `<input>` elements doesn't work in standard browsers.
 *
 * Two strategies depending on how the theme renders icons:
 * - Icon font themes (content: "glyph"): rewrite to `li::before` with font-family
 * - SVG mask themes (mask-image: url(...)): strip `::after`, apply to input directly
 */
function transformCheckboxCSS(css: string, iconFonts: string[]): string {
  const hasIconFont = iconFonts.length > 0;
  const fontFamily = hasIconFont
    ? iconFonts.map((f) => f.replace(/^icons\//, ""))[0]
    : null;

  if (hasIconFont) {
    let transformed = css.replace(
      /(li\.task-list-item\[data-task[^\]]*\])\s*input\[type=["']?checkbox["']?\]::after/g,
      "$1::before",
    );

    if (fontFamily) {
      transformed = transformed.replace(
        /(::before\s*\{[^}]*content:\s*"[^"]*")/g,
        `$1;\n  font-family: "${fontFamily}"`,
      );
    }

    const base =
      `li.task-list-item.is-checked::before {\n` +
      `  content: "\\2713";\n` +
      `  display: inline-block;\n` +
      `  vertical-align: middle;\n` +
      `  width: 1em;\n` +
      `  height: 1em;\n` +
      `  text-align: center;\n` +
      `  line-height: 1;\n` +
      `  font-size: 1em;\n` +
      `  color: currentColor;\n` +
      (fontFamily ? `  font-family: "${fontFamily}";\n` : "") +
      `}\n\n` +
      `li.task-list-item.is-checked input[type="checkbox"] {\n` +
      `  mask-image: none !important;\n` +
      `  -webkit-mask-image: none !important;\n` +
      `  background-color: transparent !important;\n` +
      `  width: 0 !important;\n` +
      `  height: 0 !important;\n` +
      `  margin: 0 !important;\n` +
      `  padding: 0 !important;\n` +
      `  border: none !important;\n` +
      `  overflow: hidden;\n` +
      `}`;

    return base + "\n\n" + transformed;
  }

  const nonAfterSelectors = new Set<string>();
  const selectorPattern = /([^\n{}]+input\[type=["']?checkbox["']?\])\s*\{/g;
  for (const match of css.matchAll(selectorPattern)) {
    const sel = match[1]?.trim();
    if (sel && !sel.includes("::after")) {
      nonAfterSelectors.add(sel);
    }
  }

  let transformed = css.replace(
    /([^\n{}]+input\[type=["']?checkbox["']?\])::after\s*\{[^}]*\}/g,
    (block, baseSel) => {
      if (nonAfterSelectors.has(baseSel.trim())) {
        return "";
      }
      return block.replace("::after", "");
    },
  );

  transformed = transformed.replace(/^\s*content:\s*""\s*;?\s*$/gm, "");

  return transformed;
}

function collectAspectCSS(
  mode: "dark" | "light",
  aspects: AspectKey[],
  baseTheme: ThemeData,
  options: ThemeOptions,
): string {
  // Cache loaded override themes to avoid duplicate loads
  const overrideCache = new Map<string, ThemeData>();

  const cssChunks: string[] = [];

  for (const aspect of aspects) {
    const overrideThemeName =
      options.aspects?.[aspect] !== undefined &&
      typeof options.aspects[aspect] === "string"
        ? (options.aspects[aspect] as string)
        : null;

    let css: string | undefined;

    if (overrideThemeName) {
      // Load override theme
      let overrideTheme = overrideCache.get(overrideThemeName);
      if (!overrideTheme) {
        const overrideId = resolveThemeId(overrideThemeName);
        overrideTheme = loadTheme(overrideId);
        overrideCache.set(overrideThemeName, overrideTheme);
      }
      css = overrideTheme[mode][aspect];
    }

    // Fall back to base theme if override doesn't have this aspect
    if (css === undefined) {
      css = (baseTheme[mode] as AspectCSS)[aspect];
    }

    if (css) {
      if (aspect === "checkboxes") {
        const iconFonts = baseTheme.meta.fonts.filter((f) =>
          f.startsWith("icons/"),
        );
        css = transformCheckboxCSS(css, iconFonts);
      }
      cssChunks.push(`/* aspect: ${aspect} */\n${css}`);
    }
  }

  return cssChunks.join("\n\n");
}
