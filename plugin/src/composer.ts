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
import { generateCheckboxIconCSS } from "./icons/checkbox-icons";
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
export interface ComposedTheme {
  css: string;
  effectiveMode: "dark" | "light" | "both";
}

export function composeCSS(options: ThemeOptions): ComposedTheme {
  const baseThemeId = resolveThemeId(options.theme, options.variation);
  const baseTheme = loadTheme(baseThemeId);

  // Resolve effective mode based on theme capabilities
  const effectiveMode = resolveEffectiveMode(options.mode, baseTheme);

  // Determine which aspects to include
  const includedAspects = resolveIncludedAspects(options, baseTheme);

  // Collect CSS for each mode
  const parts: string[] = [];

  if (effectiveMode === "dark" || effectiveMode === "both") {
    const darkCSS = collectAspectCSS(
      "dark",
      includedAspects,
      baseTheme,
      options,
    );
    if (darkCSS) parts.push(darkCSS);
  }

  if (effectiveMode === "light" || effectiveMode === "both") {
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

  const checkboxCSS = generateCheckboxIconCSS();

  const iconCSS = generateCalloutIconCSS() + "\n\n" + checkboxCSS;

  const css =
    (fontCSS ? fontCSS + "\n\n" : "") +
    iconCSS +
    "\n\n" +
    parts.join("\n") +
    "\n" +
    TEMPLATE_CSS;

  return { css, effectiveMode };
}

function resolveEffectiveMode(
  requestedMode: "dark" | "light" | "both",
  theme: ThemeData,
): "dark" | "light" | "both" {
  const availableModes = theme.meta.modes;
  const fallback: "dark" | "light" = availableModes[0] ?? "dark";

  if (requestedMode === "both") {
    if (availableModes.length === 1) {
      console.warn(
        `[QuartzTheme] Theme "${theme.meta.name}" only supports ${fallback} mode. ` +
          `Defaulting to "${fallback}". Consider disabling Component.Darkmode() from your quartz.config.ts.`,
      );
      return fallback;
    }
    return "both";
  }

  if (!availableModes.includes(requestedMode)) {
    console.warn(
      `[QuartzTheme] Theme "${theme.meta.name}" does not support "${requestedMode}" mode ` +
        `(available: ${availableModes.join(", ")}). Falling back to "${fallback}".`,
    );
    return fallback;
  }

  return requestedMode;
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
    const iconSelectors: string[] = [];

    let transformed = css.replace(
      /([^\n{}]*li\.task-list-item\[data-task[^\]]*\])\s*input\[type=["']?checkbox["']?\]::after\s*\{([^}]*)\}/g,
      (block, fullSelector, body) => {
        const hasGlyph = /content:\s*"[^"]+"/i.test(body);
        if (!hasGlyph) {
          return "";
        }
        iconSelectors.push(fullSelector.trim());
        return `${fullSelector.trim()}::before {${body}}`;
      },
    );

    const beforeProps = [
      "  display: inline-block",
      "  vertical-align: middle",
      "  width: var(--checkbox-size, 16px)",
      "  height: var(--checkbox-size, 16px)",
      "  margin-inline: -1.4rem 0.2rem",
      "  text-align: center",
      "  line-height: var(--checkbox-size, 16px)",
      "  font-size: var(--checkbox-size, 16px)",
      "  pointer-events: none",
      fontFamily ? `  font-family: "${fontFamily}", system-ui, sans-serif` : "",
    ]
      .filter(Boolean)
      .join(";\n");

    transformed = transformed.replace(
      /(::before\s*\{[^}]*content:\s*"[^"]*")/g,
      `$1;\n${beforeProps}`,
    );

    const uniqueSelectors = [...new Set(iconSelectors)];
    const inputHiding = uniqueSelectors
      .map(
        (sel) =>
          `${sel} input[type="checkbox"] {\n` +
          `  mask-image: none !important;\n` +
          `  -webkit-mask-image: none !important;\n` +
          `  background-color: transparent !important;\n` +
          `  width: 0 !important;\n` +
          `  height: 0 !important;\n` +
          `  margin: 0 !important;\n` +
          `  padding: 0 !important;\n` +
          `  border: none !important;\n` +
          `  overflow: hidden;\n` +
          `}`,
      )
      .join("\n\n");

    return transformed + "\n\n" + inputHiding;
  }

  const nonAfterSelectors = new Set<string>();
  const selectorPattern = /([^\n{}]+input\[type=["']?checkbox["']?\])\s*\{/g;
  for (const match of css.matchAll(selectorPattern)) {
    const sel = match[1]?.trim();
    if (sel && !sel.includes("::after")) {
      nonAfterSelectors.add(sel);
    }
  }

  const afterSuppressionSelectors: string[] = [];
  const afterColorMap = new Map<string, string>();

  let transformed = css.replace(
    /([^\n{}]+input\[type=["']?checkbox["']?\])::after\s*\{([^}]*)\}/g,
    (block, baseSel, body) => {
      const colorMatch = body.match(/(?:^|;\s*|\n\s*)color:\s*([^;]+)/);
      if (nonAfterSelectors.has(baseSel.trim())) {
        if (colorMatch) {
          afterColorMap.set(baseSel.trim(), colorMatch[1].trim());
        }
        return "";
      }
      if (body.includes("mask-image")) {
        return `${baseSel.trim()} {${body}}`;
      }
      if (colorMatch) {
        return `${baseSel.trim()} {\n  color: ${colorMatch[1].trim()};\n}`;
      }
      return "";
    },
  );

  transformed = transformed.replace(/^\s*content:\s*""\s*;?\s*$/gm, "");

  transformed = transformed.replace(
    /([^\n{}]+input\[type=["']?checkbox["']?\])\s*\{([^}]*)\}/g,
    (block, selector, body) => {
      if (!body.includes("mask-image")) {
        return block;
      }

      afterSuppressionSelectors.push(selector.trim());

      const hasBackgroundColor = /(?:^|;\s*|\n\s*)background-color\s*:/.test(
        body,
      );

      const injectedProps = [
        "  appearance: none;",
        "  -webkit-appearance: none;",
        "  border: none;",
        "  border-radius: 0px;",
        hasBackgroundColor
          ? null
          : "  background-color: currentColor !important;",
        "  -webkit-mask-size: 100%;",
        "  mask-size: 100%;",
      ]
        .filter((line): line is string => line !== null)
        .join("\n");

      let newBody = body;
      if (!body.includes("appearance:")) {
        newBody = body.trimEnd() + "\n" + injectedProps + "\n";
      }

      const extractedColor = afterColorMap.get(selector.trim());
      if (extractedColor && !/(?:^|;\s*|\n\s*)color:/m.test(newBody)) {
        newBody = newBody.trimEnd() + `\n  color: ${extractedColor};\n`;
      }

      return `${selector} {${newBody}}`;
    },
  );

  if (afterSuppressionSelectors.length > 0) {
    const afterRules = afterSuppressionSelectors
      .map((sel) => `${sel}::after { content: none; }`)
      .join("\n");
    transformed += "\n\n" + afterRules;
  }

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
