/**
 * CSS Composer — assembles final CSS from theme data + user configuration.
 *
 * Takes a base theme's aspect CSS, applies overrides (aspects from other themes),
 * filters by include list, and produces the final CSS string ready for injection.
 */

import type { AspectCSS, AspectKey, ThemeData, ThemeOptions } from "./types";
import { TEMPLATE_CSS } from "./templateCSS";
import { resolveThemeId, loadTheme } from "./registry";

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

  return parts.join("\n") + "\n" + TEMPLATE_CSS;
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
 * Collect CSS for all included aspects in a given mode.
 *
 * For each aspect, check if there's an override theme; if so, load that
 * theme's CSS for this aspect. Otherwise use the base theme's CSS.
 */
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
      cssChunks.push(`/* aspect: ${aspect} */\n${css}`);
    }
  }

  return cssChunks.join("\n\n");
}
