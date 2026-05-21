/**
 * Auto-Config Generator
 *
 * Generates a config.js-compatible mapping array from:
 *   1. The semantic role registry (Obsidian ↔ Quartz selector pairs)
 *   2. Baseline-diff property discovery (which properties to extract)
 *
 * The output can be used alongside or as a replacement for the manual
 * config.js in compile.js.
 *
 * Usage:
 *   import { generateAutoConfig } from "./auto-config.mjs";
 *   const autoConfig = generateAutoConfig("brutalist");
 *   // returns: [{ obsidianSelector, quartzSelector, pseudoElement, properties }, ...]
 *
 * CLI:
 *   node auto-config.mjs <theme-name> [--write] [--merge]
 *     --write: write the config to runner/scripts/auto-config-output.js
 *     --merge: merge with existing config.js (auto-discovered takes priority)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { diffExtraction, discoverRoleProperties } from "./baseline-diff.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const RESULTS_DIR = resolve(__dirname, "../results");

// ============================================================================
// Role Registry (selector matching rules)
// ============================================================================

// Each role maps an Obsidian selector pattern to a Quartz selector.
// The obsidian function tests whether a given extraction selector belongs
// to this role. For roles with matchBy="data-attr", we generate one
// config entry per unique attribute value found in the extraction data.

const ROLE_REGISTRY = {
  // ── Callouts ──────────────────────────────────────────────────────────
  "callout:container": {
    obsidian: (sel) =>
      sel.includes(".callout") &&
      sel.includes("data-callout=") &&
      !sel.includes("callout-title") &&
      !sel.includes("callout-content") &&
      !sel.includes("callout-icon"),
    quartzTemplate: (attrVal) => `.callout[data-callout="${attrVal}"]`,
    matchBy: "data-attr",
    dataAttr: "data-callout",
  },
  "callout:title": {
    obsidian: (sel) =>
      sel.includes("callout-title") && !sel.includes("callout-title-inner"),
    quartzSelector: ".callout-title",
    matchBy: "singleton",
  },
  "callout:icon": {
    obsidian: (sel) =>
      (sel.includes("callout-icon") && !sel.includes("fold")) ||
      (sel.includes("svg-icon") && sel.includes("callout")),
    quartzSelector: ".callout-title .callout-icon",
    matchBy: "singleton",
  },
  "callout:title-inner": {
    obsidian: (sel) => sel.includes("callout-title-inner"),
    quartzSelector: ".callout-title > .callout-title-inner > p",
    matchBy: "singleton",
  },
  "callout:content": {
    obsidian: (sel) =>
      sel.includes("callout-content") && !sel.includes("callout-content-inner"),
    quartzSelector: ".callout .callout-content",
    matchBy: "singleton",
  },
  "callout:title-per-type": {
    obsidian: (sel) =>
      sel.includes("callout-title") &&
      sel.includes("data-callout=") &&
      !sel.includes("callout-title-inner"),
    quartzTemplate: (attrVal) =>
      `.callout[data-callout="${attrVal}"] .callout-title`,
    matchBy: "data-attr",
    dataAttr: "data-callout",
  },
  "callout:content-per-type": {
    obsidian: (sel) =>
      sel.includes("callout-content") && sel.includes("data-callout="),
    quartzTemplate: (attrVal) =>
      `.callout[data-callout="${attrVal}"] > .callout-content`,
    matchBy: "data-attr",
    dataAttr: "data-callout",
  },

  // ── Headings ──────────────────────────────────────────────────────────
  "heading:h1": {
    obsidian: (sel) => /^h1[\[.\s]/.test(sel),
    quartzSelector: ".markdown-rendered > h1",
    matchBy: "tag",
  },
  "heading:h2": {
    obsidian: (sel) => /^h2[\[.\s]/.test(sel),
    quartzSelector: "h2",
    matchBy: "tag",
  },
  "heading:h3": {
    obsidian: (sel) => /^h3[\[.\s]/.test(sel),
    quartzSelector: "h3",
    matchBy: "tag",
  },
  "heading:h4": {
    obsidian: (sel) => /^h4[\[.\s]/.test(sel),
    quartzSelector: "h4",
    matchBy: "tag",
  },
  "heading:h5": {
    obsidian: (sel) => /^h5[\[.\s]/.test(sel),
    quartzSelector: "h5",
    matchBy: "tag",
  },
  "heading:h6": {
    obsidian: (sel) => /^h6[\[.\s]/.test(sel),
    quartzSelector: "h6",
    matchBy: "tag",
  },

  // ── Text ──────────────────────────────────────────────────────────────
  "text:paragraph": {
    obsidian: (sel) => sel === "p",
    quartzSelector: "p",
    matchBy: "tag",
  },
  "text:strong": {
    obsidian: (sel) => sel === "strong",
    quartzSelector: ".markdown-rendered p > strong, strong",
    matchBy: "tag",
  },
  "text:emphasis": {
    obsidian: (sel) => sel === "em",
    quartzSelector: ".markdown-rendered p > em, em",
    matchBy: "tag",
  },
  "text:strikethrough": {
    obsidian: (sel) => sel === "del" || sel === "s",
    quartzSelector: "del",
    matchBy: "tag",
  },
  "text:highlight": {
    obsidian: (sel) => sel === "mark" || sel.includes("text-highlight"),
    quartzSelector: ".text-highlight",
    matchBy: "class",
  },
  "text:inline-code": {
    obsidian: (sel) => sel === "code",
    quartzSelector: "code",
    matchBy: "tag",
  },

  // ── Links ─────────────────────────────────────────────────────────────
  "link:internal": {
    obsidian: (sel) =>
      sel.includes("internal-link") &&
      !sel.includes("is-unresolved") &&
      !sel.includes("hover"),
    quartzSelector:
      "a.internal-link, .breadcrumb-container .breadcrumb-element > a",
    matchBy: "class",
  },
  "link:external": {
    obsidian: (sel) => sel.includes("external-link") && !sel.includes("hover"),
    quartzSelector: "a.external-link, footer a",
    matchBy: "class",
  },
  "link:unresolved": {
    obsidian: (sel) => sel.includes("is-unresolved"),
    quartzSelector: "a.internal-link.broken",
    matchBy: "class",
  },
  "link:tag": {
    obsidian: (sel) =>
      sel.includes("multi-select-pill") && !sel.includes("content"),
    quartzSelector:
      "a.internal-link.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag",
    matchBy: "class",
  },

  // ── Blockquotes ───────────────────────────────────────────────────────
  "blockquote:standard": {
    obsidian: (sel) =>
      (sel === "blockquote" || sel.startsWith("blockquote[")) &&
      !sel.includes("callout"),
    quartzSelector: "blockquote:not(.callout)",
    matchBy: "tag",
  },

  // ── Tables ────────────────────────────────────────────────────────────
  "table:container": {
    obsidian: (sel) => sel === "table",
    quartzSelector: ".table-container > table",
    matchBy: "tag",
  },
  "table:header": {
    obsidian: (sel) => sel === "th",
    quartzSelector: "th",
    matchBy: "tag",
  },
  "table:cell": {
    obsidian: (sel) => sel === "td",
    quartzSelector: "td",
    matchBy: "tag",
  },
  "table:row": {
    obsidian: (sel) => sel === "tr",
    quartzSelector: "tr",
    matchBy: "tag",
  },

  // ── Code Blocks ───────────────────────────────────────────────────────
  "code-block:pre": {
    obsidian: (sel) => sel.includes("HyperMD-codeblock") || sel === "pre",
    quartzSelector: "figure[data-rehype-pretty-code-figure] pre, pre",
    matchBy: "tag",
  },

  // ── Checkboxes ────────────────────────────────────────────────────────
  "checkbox:item": {
    obsidian: (sel) =>
      sel.includes("task-list-item") && sel.includes("data-task="),
    quartzTemplate: (attrVal) => `li.task-list-item[data-task="${attrVal}"]`,
    matchBy: "data-attr",
    dataAttr: "data-task",
  },

  // ── Separator ─────────────────────────────────────────────────────────
  "separator:hr": {
    obsidian: (sel) => sel === "hr",
    quartzSelector: "hr",
    matchBy: "tag",
  },

  // ── Layout ────────────────────────────────────────────────────────────
  "layout:body": {
    obsidian: (sel) => sel === "body",
    quartzSelector: "div#quartz-root",
    matchBy: "singleton",
  },
  "layout:root": {
    obsidian: (sel) => sel === "html",
    quartzSelector: "html",
    matchBy: "singleton",
  },
  "layout:content": {
    obsidian: (sel) => sel.includes("mod-active.workspace-leaf"),
    quartzSelector:
      "&[data-slug], &[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer",
    matchBy: "singleton",
  },
  "layout:sidebar-left": {
    obsidian: (sel) => sel.includes("mod-horizontal.mod-left-split"),
    quartzSelector:
      "&[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.nav-files-container), .page > div#quartz-body div.sidebar.left .nav-files-container",
    matchBy: "singleton",
  },
  "layout:sidebar-right": {
    obsidian: (sel) => sel.includes("mod-horizontal.mod-right-split"),
    quartzSelector: ".page > div#quartz-body div.sidebar.right",
    matchBy: "singleton",
  },

  // ── Search ────────────────────────────────────────────────────────────
  "search:selected-result": {
    obsidian: (sel) =>
      sel.includes("is-selected") && sel.includes("suggestion-item"),
    quartzSelector:
      ".search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus))",
    matchBy: "class",
  },

  // ── Lists ─────────────────────────────────────────────────────────────
  "list:unordered-item": {
    obsidian: (sel) => sel === 'li[data-line="0"]' || sel === "li",
    quartzSelector: "ul > li",
    matchBy: "tag",
    allowDuplicateSelector: true,
  },
  "list:ordered-item": {
    obsidian: (sel) => sel === 'li[data-line="0"]' || sel === "li",
    quartzSelector: "ol > li",
    matchBy: "tag",
    allowDuplicateSelector: true,
  },
  "list:unordered-marker": {
    obsidian: (sel) => sel.includes("list-bullet") && sel.includes("::after"),
    quartzSelector: "ul > li::marker",
    matchBy: "singleton",
  },
  "list:ordered-marker": {
    obsidian: (sel) => sel.includes("list-bullet") && sel.includes("::after"),
    quartzSelector: "ol > li::marker",
    matchBy: "singleton",
    allowDuplicateSelector: true,
  },
};

// ============================================================================
// Extract data attribute value from selector string
// ============================================================================

const ROLE_TO_ASPECT = {
  callout: "callouts",
  heading: "typography",
  text: "typography",
  link: "links",
  blockquote: "blockquotes",
  table: "tables",
  "code-block": "code",
  checkbox: "checkboxes",
  separator: "misc",
  layout: "base",
  search: "search",
  list: "lists",
};

function roleToAspect(roleName) {
  const category = roleName.split(":")[0];
  return ROLE_TO_ASPECT[category] || "misc";
}

function extractDataAttr(selector, attrName) {
  const regex = new RegExp(`${attrName}="([^"]*)"`, "i");
  const match = selector.match(regex);
  return match ? match[1] : null;
}

// ============================================================================
// Core: Generate auto-config from extraction data
// ============================================================================

/**
 * Generate config.js-compatible entries from a theme's extraction.
 *
 * @param {string} themeName - Theme to generate config for
 * @param {Object} [options]
 * @param {boolean} [options.useBaselineDiff] - Use baseline diff for property discovery (default: true)
 * @returns {Array} - config entries: [{ obsidianSelector, quartzSelector, pseudoElement, properties }]
 */
export function generateAutoConfig(themeName, options = {}) {
  const { useBaselineDiff = true } = options;

  const themedPath = resolve(RESULTS_DIR, `${themeName}/dark.json`);
  if (!existsSync(themedPath)) {
    // Try light
    const lightPath = resolve(RESULTS_DIR, `${themeName}/light.json`);
    if (!existsSync(lightPath)) return [];
  }

  const themed = JSON.parse(
    readFileSync(
      existsSync(themedPath)
        ? themedPath
        : resolve(RESULTS_DIR, `${themeName}/light.json`),
      "utf-8",
    ),
  );
  const themedSelectors = Object.keys(themed);

  // Auto-discover properties via baseline diff
  let roleProperties = null;
  if (useBaselineDiff) {
    const baselinePath = resolve(RESULTS_DIR, "_baseline/dark.json");
    if (existsSync(baselinePath)) {
      const baseline = JSON.parse(readFileSync(baselinePath, "utf-8"));
      const { diffs } = diffExtraction(baseline, themed);
      roleProperties = discoverRoleProperties(diffs, ROLE_REGISTRY);
    }
  }

  const configEntries = [];
  const matchedSelectors = new Set();

  for (const [roleName, role] of Object.entries(ROLE_REGISTRY)) {
    // Find all Obsidian selectors that match this role
    const obsMatches = themedSelectors.filter((sel) => {
      try {
        return role.obsidian(sel);
      } catch {
        return false;
      }
    });

    // Get auto-discovered properties for this role
    const autoProps = roleProperties?.[roleName]?.autoProperties?.map(
      (p) => p.property,
    );

    for (const obsSel of obsMatches) {
      if (matchedSelectors.has(obsSel) && !role.allowDuplicateSelector)
        continue;
      matchedSelectors.add(obsSel);

      let quartzSel;
      if (
        role.matchBy === "data-attr" &&
        role.dataAttr &&
        role.quartzTemplate
      ) {
        const attrValue = extractDataAttr(obsSel, role.dataAttr);
        if (attrValue) {
          quartzSel = role.quartzTemplate(attrValue);
        }
      } else {
        quartzSel = role.quartzSelector;
      }

      if (!quartzSel) continue;

      // Determine properties: auto-discovered > fallback to all non-noise props from extraction
      let properties;
      if (autoProps && autoProps.length > 0) {
        properties = autoProps;
      } else {
        // Fallback: use all properties from the extraction for this selector
        properties = Object.keys(themed[obsSel] || {}).filter(
          (p) => !p.startsWith("animation-") && !p.startsWith("transition-"),
        );
      }

      if (properties.length === 0) continue;

      configEntries.push({
        obsidianSelector: obsSel,
        quartzSelector: quartzSel,
        publishSelector: null,
        pseudoElement: "",
        properties,
        _role: roleName,
        _source: autoProps ? "auto" : "fallback",
        _aspect: roleToAspect(roleName),
      });
    }
  }

  return configEntries;
}

// ============================================================================
// Merge: combine auto-config with manual config
// ============================================================================

/**
 * Merge auto-generated config with manual config.
 * Manual entries take priority for selectors that appear in both.
 * Auto entries fill gaps for selectors not covered by manual config.
 *
 * @param {Array} manualConfig - Existing config.js entries
 * @param {Array} autoConfig - Auto-generated entries
 * @returns {Array} - Merged config
 */
export function mergeConfigs(manualConfig, autoConfig) {
  // Build lookups of manual selectors — both obsidian and quartz — so auto
  // entries that would produce duplicate CSS blocks are filtered out.
  const manualObsidianSelectors = new Set(
    manualConfig.map((m) => m.obsidianSelector).filter(Boolean),
  );
  const manualQuartzSelectors = new Set(
    manualConfig.map((m) => m.quartzSelector).filter(Boolean),
  );

  // Start with all manual entries
  const merged = [...manualConfig];

  // Add auto entries that don't conflict with manual on either selector
  for (const autoEntry of autoConfig) {
    if (
      !manualObsidianSelectors.has(autoEntry.obsidianSelector) &&
      !manualQuartzSelectors.has(autoEntry.quartzSelector)
    ) {
      merged.push(autoEntry);
    }
  }

  return merged;
}

// ============================================================================
// CLI
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  if (args.length === 0 || args[0] === "--help") {
    console.log(
      "Usage: node auto-config.mjs <theme-name> [--write] [--merge] [--stats]",
    );
    process.exit(0);
  }

  const themeName = args.find((a) => !a.startsWith("--"));
  const doWrite = args.includes("--write");
  const doStats = args.includes("--stats") || !doWrite;

  if (!themeName) {
    console.error("Theme name required.");
    process.exit(1);
  }

  console.log(`\nAuto-Config Generator`);
  console.log(`=====================\n`);
  console.log(`Theme: ${themeName}`);

  const autoConfig = generateAutoConfig(themeName);
  console.log(`Generated ${autoConfig.length} config entries`);

  // Stats
  const byRole = {};
  const bySource = { auto: 0, fallback: 0 };
  for (const entry of autoConfig) {
    const role = entry._role.split(":")[0];
    byRole[role] = (byRole[role] || 0) + 1;
    bySource[entry._source]++;
  }

  console.log(`\nBy category:`);
  for (const [cat, count] of Object.entries(byRole).sort(
    (a, b) => b[1] - a[1],
  )) {
    console.log(`  ${cat}: ${count}`);
  }

  console.log(
    `\nProperty source: ${bySource.auto} auto-discovered, ${bySource.fallback} fallback`,
  );

  // Sample entries
  console.log(`\nSample entries:`);
  const samples = [
    "callout:container",
    "heading:h2",
    "link:internal",
    "text:paragraph",
  ];
  for (const role of samples) {
    const entry = autoConfig.find((e) => e._role === role);
    if (entry) {
      console.log(
        `  [${entry._role}] ${entry.obsidianSelector.substring(0, 60)}`,
      );
      console.log(`    → ${entry.quartzSelector.substring(0, 60)}`);
      console.log(
        `    ${entry.properties.length} properties (${entry._source})`,
      );
    }
  }

  if (doWrite) {
    const outputDir = resolve(RESULTS_DIR, "_matcher-output");
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    const outputPath = resolve(outputDir, `${themeName}-auto-config.json`);
    writeFileSync(outputPath, JSON.stringify(autoConfig, null, 2));
    console.log(`\nWritten to: ${outputPath}`);
  }

  console.log(`\nDone.\n`);
}

// Run CLI if executed directly
if (process.argv[1] && process.argv[1].endsWith("auto-config.mjs")) {
  main();
}
