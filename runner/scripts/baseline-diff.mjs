/**
 * Baseline-Diff Property Discovery
 *
 * Automatically discovers which CSS properties a theme actually changes
 * by diffing themed extraction results against the unthemed baseline.
 *
 * Eliminates the need for manually curated property lists in the role
 * registry — any property that differs from baseline is theme-relevant.
 *
 * Usage:
 *   node baseline-diff.mjs <theme-name> [--verbose]
 *   node baseline-diff.mjs brutalist
 *   node baseline-diff.mjs lyt-mode --verbose
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RESULTS_DIR = resolve(__dirname, "../results");
const OUTPUT_DIR = resolve(RESULTS_DIR, "_matcher-output");

// ============================================================================
// Noise Filters
// ============================================================================

/**
 * Properties that always cascade from root and appear on every element.
 * These change on nearly all selectors whenever the root text color or
 * font changes, but they're not intentionally styled per-element.
 */
const INHERITED_NOISE = new Set([
  "caret-color",
  "text-fill-color",
  "-webkit-text-fill-color",
  "text-stroke",
  "text-stroke-color",
  "text-stroke-width",
  "-webkit-text-stroke",
  "-webkit-text-stroke-color",
  "-webkit-text-stroke-width",
  "column-rule-color",
  "text-decoration-color",
  "text-emphasis-color",
  "outline",
  "outline-color",
  // Animation/transition defaults
  "animation-delay",
  "animation-duration",
  "animation-iteration-count",
  "animation-play-state",
  "animation-timing-function",
  "animation-direction",
  "animation-fill-mode",
  "animation-name",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
]);

const LAYOUT_NOISE = new Set([
  "width",
  "height",
  "min-width",
  "min-height",
  "max-width",
  "max-height",
  "top",
  "left",
  "right",
  "bottom",
  "inset",
  "perspective-origin",
  "transform-origin",
]);

const STRUCTURAL_NOISE = new Set([
  "display",
  "position",
  "float",
  "clear",
  "vertical-align",
  "overflow",
  "overflow-x",
  "overflow-y",
  "overflow-wrap",
  "user-select",
  "pointer-events",
  "visibility",
  "cursor",
  "resize",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "-webkit-mask-position",
  "-webkit-mask-repeat",
  "-webkit-mask-size",
  "background-clip",
  "background-attachment",
  "background-origin",
  "list-style-type",
  "list-style-position",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-decoration-skip-ink",
  "transition",
  "transition-property",
  "transition-duration",
  "transition-timing-function",
  "transition-delay",
  "transition-behavior",
  "outline-offset",
  "outline-width",
  "outline-style",
  "opacity",
  "z-index",
  "isolation",
  "mix-blend-mode",
  "object-fit",
  "object-position",
  "table-layout",
  "border-collapse",
  "caption-side",
  "empty-cells",
  "text-indent",
  "word-break",
  "word-spacing",
  "word-wrap",
  "hyphens",
  "tab-size",
  "direction",
  "unicode-bidi",
  "writing-mode",
  "text-orientation",
  "text-rendering",
  "font-variant",
  "font-variant-ligatures",
  "font-variant-caps",
  "font-variant-numeric",
  "font-feature-settings",
  "font-kerning",
  "font-optical-sizing",
  "font-stretch",
  "font-synthesis",
  "image-rendering",
  "backface-visibility",
  "transform-style",
  "will-change",
  "contain",
  "content-visibility",
  "container-type",
  "touch-action",
  "scroll-behavior",
  "overscroll-behavior",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "scroll-snap-type",
  "appearance",
  "-webkit-appearance",
  "accent-color",
  "fill",
  "stroke",
  "text-align",
  "white-space",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
]);

/**
 * CSS variable prefixes that are NOT theme-relevant on non-body selectors.
 * These cascade from body to all children and shouldn't be extracted
 * per-element. Only vars that are specifically set on the element
 * (different from body's value) should pass through.
 *
 * Note: --callout-* vars ARE relevant on callout selectors because
 * Obsidian computes them per callout type. The body cascade filter
 * handles this by comparing values, not prefixes.
 */
const CSS_VAR_NOISE_PREFIXES = [
  "--focus-ring",
  "--list-marker",
  "--list-padding",
  "--shadow-border",
  "--tab-container",
  "--tabs-",
  "--sidebar-",
  "--titlebar-",
  "--status-bar",
  "--workspace-",
  "--ribbon-",
  "--modal-",
  "--prompt-",
  "--tooltip-",
  "--pill-",
  "--mobile-",
  "--nav-",
  "--file-",
  "--icon-",
  "--metadata-",
  "--embed-",
  "--bases-",
  "--canvas-card",
  "--canvas-node",
  "--canvas-color",
  "--drag-",
  "--indentation-guide",
  "--footnote-",
  "--inline-title",
  "--input-",
  "--slider-",
  "--toggle-",
  "--tree-",
  "--vault-",
];

/**
 * Shorthand properties that duplicate their longhand counterparts.
 * We keep the longhands (e.g., border-left-color) and filter the
 * shorthands (e.g., border, border-left) to avoid redundancy.
 */
const SHORTHAND_NOISE = new Set([
  "border",
  "border-top",
  "border-bottom",
  "border-left",
  "border-right",
  "border-color",
  "border-width",
  "border-style",
  "border-radius",
  "margin",
  "padding",
  "background",
  "font",
  "overflow",
  "outline",
  "white-space",
  "grid",
  "grid-template",
  "flex",
  "flex-flow",
  "list-style",
  "text-decoration",
  "place-items",
  "place-content",
  "place-self",
  "gap",
]);

// ============================================================================
// Diff Engine
// ============================================================================

/**
 * Determine if a border property value is just the inherited text color
 * applied to a zero-width border (common CSS inheritance artifact).
 */
function isInheritedBorderColor(prop, value, elementColor) {
  if (!prop.includes("border") || !prop.includes("color")) return false;
  if (!elementColor || !value) return false;

  // Extract the rgb values for comparison
  const extractRGB = (s) => {
    const m = s.match(/rgb[a]?\(([^)]+)\)/);
    return m ? m[1].replace(/\s/g, "") : null;
  };

  const borderRGB = extractRGB(value);
  const colorRGB = extractRGB(elementColor);

  return borderRGB && colorRGB && borderRGB === colorRGB;
}

/**
 * Check if a border property has zero width (making color irrelevant).
 */
function isZeroWidthBorder(side, props) {
  const widthProp = `border-${side}-width`;
  const widthVal = props[widthProp];
  return widthVal === "0px" || widthVal === "0" || !widthVal;
}

/**
 * Diff a themed extraction against the baseline.
 *
 * @param {Object} baseline - Unthemed extraction { selector: { prop: val } }
 * @param {Object} themed - Themed extraction { selector: { prop: val } }
 * @param {Object} [options] - Configuration options
 * @param {boolean} [options.keepShorthands] - Keep shorthand properties
 * @param {boolean} [options.keepLayoutProps] - Keep layout-dependent properties
 * @returns {Object} - { diffs, stats }
 */
export function diffExtraction(baseline, themed, options = {}) {
  const { keepShorthands = false, keepLayoutProps = false } = options;

  // Build root inherited values for detection
  const rootInherited = {};
  for (const key of ["html", "body"]) {
    const src = themed[key] || {};
    for (const prop of ["color", "font-family", "line-height"]) {
      if (src[prop] && !rootInherited[prop]) {
        rootInherited[prop] = src[prop];
      }
    }
  }

  const sharedSelectors = Object.keys(baseline).filter((s) => themed[s]);
  const themedOnlySelectors = Object.keys(themed).filter((s) => !baseline[s]);

  const diffs = {};
  let totalMeaningful = 0;
  let totalFiltered = 0;
  let totalUnchanged = 0;

  for (const sel of sharedSelectors) {
    const bProps = baseline[sel];
    const tProps = themed[sel];
    const allProps = new Set([...Object.keys(bProps), ...Object.keys(tProps)]);
    const meaningful = {};

    for (const prop of allProps) {
      const bVal = bProps[prop];
      const tVal = tProps[prop];

      // Skip unchanged
      if (bVal === tVal) {
        totalUnchanged++;
        continue;
      }

      // Skip if theme doesn't have the property (removed, not styled)
      if (!tVal) {
        totalFiltered++;
        continue;
      }

      // Filter: inherited noise
      if (INHERITED_NOISE.has(prop)) {
        totalFiltered++;
        continue;
      }

      // Filter: layout noise
      if (!keepLayoutProps && LAYOUT_NOISE.has(prop)) {
        totalFiltered++;
        continue;
      }

      // Filter: shorthands (keep longhands)
      if (!keepShorthands && SHORTHAND_NOISE.has(prop)) {
        totalFiltered++;
        continue;
      }

      // Filter: structural properties (never theme-relevant)
      if (STRUCTURAL_NOISE.has(prop)) {
        totalFiltered++;
        continue;
      }

      // Filter: border-*-color that just inherits the text color on a
      // zero-width border (visual no-op)
      if (prop.match(/^border-(top|bottom|left|right)-color$/)) {
        const side = prop.split("-")[1];
        if (
          isZeroWidthBorder(side, tProps) &&
          isInheritedBorderColor(prop, tVal, tProps["color"])
        ) {
          totalFiltered++;
          continue;
        }
      }

      // Filter: border-*-style on zero-width borders (visual no-op)
      if (prop.match(/^border-(top|bottom|left|right)-style$/)) {
        const side = prop.split("-")[1];
        if (isZeroWidthBorder(side, tProps)) {
          totalFiltered++;
          continue;
        }
      }

      // Filter: property value matches root inherited value (pure cascade)
      // Exception: CSS custom properties (--*) are always meaningful
      if (
        !prop.startsWith("--") &&
        rootInherited[prop] &&
        rootInherited[prop] === tVal
      ) {
        totalFiltered++;
        continue;
      }

      // Filter: CSS variables that cascade from body to all children.
      if (prop.startsWith("--") && sel !== "body" && sel !== "html") {
        const bodyVal = (themed["body"] || {})[prop];
        if (bodyVal && bodyVal === tVal) {
          totalFiltered++;
          continue;
        }
        // Filter Obsidian UI chrome variables on content selectors
        if (CSS_VAR_NOISE_PREFIXES.some((prefix) => prop.startsWith(prefix))) {
          totalFiltered++;
          continue;
        }
      }

      // Filter: font-size and font-weight that match browser defaults
      if (prop === "font-size" && (tVal === "16px" || tVal === "1rem")) {
        totalFiltered++;
        continue;
      }
      if (prop === "font-weight" && (tVal === "400" || tVal === "normal")) {
        totalFiltered++;
        continue;
      }

      // This property is genuinely different — keep it
      meaningful[prop] = { baseline: bVal || null, themed: tVal };
      totalMeaningful++;
    }

    if (Object.keys(meaningful).length > 0) {
      diffs[sel] = meaningful;
    }
  }

  // Handle selectors that only exist in the themed extraction
  for (const sel of themedOnlySelectors) {
    const tProps = themed[sel];
    const meaningful = {};
    for (const [prop, val] of Object.entries(tProps)) {
      if (INHERITED_NOISE.has(prop)) continue;
      if (!keepLayoutProps && LAYOUT_NOISE.has(prop)) continue;
      if (!keepShorthands && SHORTHAND_NOISE.has(prop)) continue;
      if (STRUCTURAL_NOISE.has(prop)) continue;
      if (prop === "font-size" && (val === "16px" || val === "1rem")) continue;
      if (prop === "font-weight" && (val === "400" || val === "normal"))
        continue;
      if (prop.startsWith("--") && sel !== "body" && sel !== "html") {
        const bodyVal = (themed["body"] || {})[prop];
        if (bodyVal && bodyVal === val) continue;
        if (CSS_VAR_NOISE_PREFIXES.some((prefix) => prop.startsWith(prefix)))
          continue;
      }
      meaningful[prop] = { baseline: null, themed: val };
      totalMeaningful++;
    }
    if (Object.keys(meaningful).length > 0) {
      diffs[sel] = meaningful;
    }
  }

  return {
    diffs,
    stats: {
      sharedSelectors: sharedSelectors.length,
      themedOnlySelectors: themedOnlySelectors.length,
      selectorsWithDiffs: Object.keys(diffs).length,
      totalMeaningful,
      totalFiltered,
      totalUnchanged,
    },
  };
}

// ============================================================================
// Integration with Role Registry
// ============================================================================

/**
 * Given the diff results and a role registry, produce per-role property lists
 * that are entirely auto-discovered (no manual curation).
 *
 * @param {Object} diffs - Output of diffExtraction()
 * @param {Object} roleRegistry - The ROLE_REGISTRY from dom-fingerprint-matcher
 * @returns {Object} - { role: { quartzSelector, autoProperties: [...], sampleValues: {...} } }
 */
export function discoverRoleProperties(diffs, roleRegistry) {
  const result = {};

  for (const [roleName, role] of Object.entries(roleRegistry)) {
    const matchedSelectors = Object.keys(diffs).filter((sel) => {
      try {
        return role.obsidian(sel);
      } catch {
        return false;
      }
    });

    if (matchedSelectors.length === 0) continue;

    // Aggregate all properties found across matched selectors
    const propCounts = {};
    const sampleValues = {};

    for (const sel of matchedSelectors) {
      const selectorDiffs = diffs[sel];
      for (const [prop, val] of Object.entries(selectorDiffs)) {
        propCounts[prop] = (propCounts[prop] || 0) + 1;
        if (!sampleValues[prop]) {
          sampleValues[prop] = val.themed;
        }
      }
    }

    // Sort properties by frequency (most common first)
    const autoProperties = Object.entries(propCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([prop, count]) => ({
        property: prop,
        frequency: count,
        coverage: `${count}/${matchedSelectors.length}`,
      }));

    let quartzSelector;
    if (typeof role.quartz === "function") {
      quartzSelector = role.quartz("");
    } else {
      quartzSelector = role.quartz;
    }

    result[roleName] = {
      quartzSelector,
      matchedObsidianSelectors: matchedSelectors.length,
      autoProperties,
      sampleValues,
    };
  }

  return result;
}

// ============================================================================
// CLI
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  const verbose = args.includes("--verbose");
  const themeName = args.find((a) => !a.startsWith("--")) || "brutalist";

  const baselinePath = resolve(RESULTS_DIR, "_baseline/dark.json");
  const themedPath = resolve(RESULTS_DIR, `${themeName}/dark.json`);

  if (!existsSync(baselinePath)) {
    console.error(`Baseline not found: ${baselinePath}`);
    process.exit(1);
  }
  if (!existsSync(themedPath)) {
    console.error(`Theme not found: ${themedPath}`);
    process.exit(1);
  }

  console.log(`\nBaseline-Diff Property Discovery`);
  console.log(`================================\n`);
  console.log(`Theme: ${themeName}`);

  const baseline = JSON.parse(readFileSync(baselinePath, "utf-8"));
  const themed = JSON.parse(readFileSync(themedPath, "utf-8"));

  const { diffs, stats } = diffExtraction(baseline, themed);

  console.log(
    `\nSelectors: ${stats.sharedSelectors} shared, ${stats.themedOnlySelectors} theme-only`,
  );
  console.log(
    `Properties: ${stats.totalMeaningful} meaningful, ${stats.totalFiltered} filtered, ${stats.totalUnchanged} unchanged`,
  );
  console.log(`Selectors with diffs: ${stats.selectorsWithDiffs}`);

  // Top properties across all selectors
  const globalPropFreq = {};
  for (const selectorDiffs of Object.values(diffs)) {
    for (const prop of Object.keys(selectorDiffs)) {
      globalPropFreq[prop] = (globalPropFreq[prop] || 0) + 1;
    }
  }

  console.log(`\nTop 20 theme-changed properties:`);
  const sorted = Object.entries(globalPropFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
  for (const [prop, count] of sorted) {
    console.log(`  ${prop}: ${count} selectors`);
  }

  // Now integrate with the role registry (import dynamically)
  // We'll inline a minimal version of ROLE_REGISTRY for standalone operation
  const ROLE_REGISTRY = buildMinimalRoleRegistry();
  const roleProperties = discoverRoleProperties(diffs, ROLE_REGISTRY);

  console.log(`\nAuto-discovered properties per role:`);
  for (const [role, data] of Object.entries(roleProperties)) {
    const propNames = data.autoProperties.map((p) => p.property);
    console.log(
      `  ${role}: ${propNames.length} properties (from ${data.matchedObsidianSelectors} selectors)`,
    );
    if (verbose) {
      for (const p of data.autoProperties.slice(0, 8)) {
        console.log(
          `    ${p.property} (${p.coverage}): ${String(data.sampleValues[p.property]).substring(0, 50)}`,
        );
      }
    }
  }

  // Cross-theme validation: run on a second theme if available
  const secondTheme = themeName === "brutalist" ? "lyt-mode" : "brutalist";
  const secondPath = resolve(RESULTS_DIR, `${secondTheme}/dark.json`);
  let crossThemeReport = null;
  if (existsSync(secondPath)) {
    const secondThemed = JSON.parse(readFileSync(secondPath, "utf-8"));
    const { diffs: diffs2 } = diffExtraction(baseline, secondThemed);
    const roleProperties2 = discoverRoleProperties(diffs2, ROLE_REGISTRY);

    console.log(`\nCross-theme validation (${secondTheme}):`);
    let stableCount = 0;
    let variantCount = 0;
    for (const role of Object.keys(roleProperties)) {
      const props1 = new Set(
        roleProperties[role].autoProperties.map((p) => p.property),
      );
      const props2 = new Set(
        (roleProperties2[role]?.autoProperties || []).map((p) => p.property),
      );
      const shared = [...props1].filter((p) => props2.has(p));
      const onlyFirst = [...props1].filter((p) => !props2.has(p));
      const onlySecond = [...props2].filter((p) => !props1.has(p));

      if (onlyFirst.length === 0 && onlySecond.length === 0) {
        stableCount++;
      } else {
        variantCount++;
        if (verbose) {
          console.log(
            `  ${role}: ${shared.length} shared, +${onlyFirst.length} ${themeName}-only, +${onlySecond.length} ${secondTheme}-only`,
          );
        }
      }
    }
    console.log(
      `  ${stableCount} roles have identical property sets, ${variantCount} vary between themes`,
    );
    crossThemeReport = { stableCount, variantCount };
  }

  // Write output
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  const outputPath = resolve(OUTPUT_DIR, `${themeName}-property-diff.json`);
  writeFileSync(
    outputPath,
    JSON.stringify(
      {
        theme: themeName,
        timestamp: new Date().toISOString(),
        stats,
        roleProperties,
        crossThemeReport,
        // Include full diffs only for selectors with role matches
        roleDiffs: Object.fromEntries(
          Object.entries(diffs).filter(([sel]) => {
            return Object.values(ROLE_REGISTRY).some((role) => {
              try {
                return role.obsidian(sel);
              } catch {
                return false;
              }
            });
          }),
        ),
      },
      null,
      2,
    ),
  );
  console.log(`\nOutput: ${outputPath}`);
  console.log(`Done.\n`);
}

/**
 * Minimal role registry for standalone operation.
 * Uses the same obsidian matcher functions as the full registry.
 */
function buildMinimalRoleRegistry() {
  return {
    "callout:container": {
      obsidian: (sel) =>
        sel.includes(".callout") &&
        sel.includes("data-callout=") &&
        !sel.includes("callout-title") &&
        !sel.includes("callout-content") &&
        !sel.includes("callout-icon"),
      quartz: (sel) => ".callout[data-callout]",
    },
    "callout:title": {
      obsidian: (sel) =>
        sel.includes("callout-title") && !sel.includes("callout-title-inner"),
      quartz: () => ".callout-title",
    },
    "callout:icon": {
      obsidian: (sel) =>
        sel.includes("callout-icon") ||
        (sel.includes("svg-icon") && sel.includes("callout")),
      quartz: () => ".callout-title .callout-icon",
    },
    "callout:title-inner": {
      obsidian: (sel) => sel.includes("callout-title-inner"),
      quartz: () => ".callout-title > .callout-title-inner > p",
    },
    "callout:content": {
      obsidian: (sel) =>
        sel.includes("callout-content") &&
        !sel.includes("callout-content-inner"),
      quartz: () => ".callout .callout-content",
    },
    "heading:h1": {
      obsidian: (sel) => /^h1[\[.\s]/.test(sel),
      quartz: () => "article > h1",
    },
    "heading:h2": {
      obsidian: (sel) => /^h2[\[.\s]/.test(sel),
      quartz: () => "h2",
    },
    "heading:h3": {
      obsidian: (sel) => /^h3[\[.\s]/.test(sel),
      quartz: () => "h3",
    },
    "heading:h4": {
      obsidian: (sel) => /^h4[\[.\s]/.test(sel),
      quartz: () => "h4",
    },
    "heading:h5": {
      obsidian: (sel) => /^h5[\[.\s]/.test(sel),
      quartz: () => "h5",
    },
    "heading:h6": {
      obsidian: (sel) => /^h6[\[.\s]/.test(sel),
      quartz: () => "h6",
    },
    "text:paragraph": { obsidian: (sel) => sel === "p", quartz: () => "p" },
    "text:strong": {
      obsidian: (sel) => sel === "strong",
      quartz: () => "strong",
    },
    "text:emphasis": { obsidian: (sel) => sel === "em", quartz: () => "em" },
    "text:highlight": {
      obsidian: (sel) => sel === "mark" || sel.includes("text-highlight"),
      quartz: () => ".text-highlight",
    },
    "text:inline-code": {
      obsidian: (sel) => sel === "code",
      quartz: () => "code",
    },
    "link:internal": {
      obsidian: (sel) =>
        sel.includes("internal-link") &&
        !sel.includes("is-unresolved") &&
        !sel.includes("hover"),
      quartz: () => "a.internal",
    },
    "link:external": {
      obsidian: (sel) =>
        sel.includes("external-link") && !sel.includes("hover"),
      quartz: () => "a.external",
    },
    "link:tag": {
      obsidian: (sel) =>
        sel.includes("multi-select-pill") ||
        (sel.includes("tag") && !sel.includes("callout")),
      quartz: () => "a.internal.tag-link",
    },
    "blockquote:standard": {
      obsidian: (sel) =>
        (sel === "blockquote" || sel.startsWith("blockquote[")) &&
        !sel.includes("callout"),
      quartz: () => "blockquote:not(.callout)",
    },
    "table:container": {
      obsidian: (sel) => sel === "table",
      quartz: () => ".table-container > table",
    },
    "table:header": { obsidian: (sel) => sel === "th", quartz: () => "th" },
    "table:cell": { obsidian: (sel) => sel === "td", quartz: () => "td" },
    "code-block:pre": {
      obsidian: (sel) => sel.includes("HyperMD-codeblock") || sel === "pre",
      quartz: () => "figure[data-rehype-pretty-code-figure] pre",
    },
    "checkbox:item": {
      obsidian: (sel) =>
        sel.includes("task-list-item") && sel.includes("data-task="),
      quartz: () => ".task-list-item[data-task]",
    },
    "separator:hr": { obsidian: (sel) => sel === "hr", quartz: () => "hr" },
    "layout:body": {
      obsidian: (sel) => sel === "body",
      quartz: () => "div#quartz-root",
    },
    "layout:root": { obsidian: (sel) => sel === "html", quartz: () => "html" },
  };
}

if (process.argv[1] && process.argv[1].endsWith("baseline-diff.mjs")) {
  main();
}
