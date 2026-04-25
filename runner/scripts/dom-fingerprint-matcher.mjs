/**
 * DOM Fingerprint Matcher Prototype
 *
 * Pairs Obsidian extraction selectors with Quartz DOM selectors by:
 * 1. Semantic anchoring (data attributes like data-callout="note")
 * 2. Tag+role matching (h1↔h1, blockquote↔blockquote, etc.)
 * 3. Structural position (Nth element of same type on same page)
 *
 * Reads:
 *   - Obsidian extraction result (runner/results/<theme>/dark.json)
 *   - Existing manual config.js mappings (as ground truth for validation)
 *
 * Outputs:
 *   - Auto-discovered selector mappings
 *   - Semantic role registry
 *   - Validation report against existing manual mappings
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { diffExtraction, discoverRoleProperties } from "./baseline-diff.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ============================================================================
// Semantic Role Definitions
// ============================================================================

/**
 * Each role defines HOW to match an Obsidian element to a Quartz element.
 * Matching strategies:
 *   - "data-attr": Match by shared data attribute (e.g. data-callout="note")
 *   - "tag": Match by HTML tag (e.g. h1↔h1)
 *   - "class": Match by CSS class presence
 *   - "structural": Match by position (Nth occurrence on page)
 */
const ROLE_REGISTRY = {
  // ── Callouts ──────────────────────────────────────────────────────────
  "callout:container": {
    obsidian: (sel) =>
      sel.includes(".callout") &&
      sel.includes("data-callout=") &&
      !sel.includes("callout-title") &&
      !sel.includes("callout-content") &&
      !sel.includes("callout-icon"),
    quartz: (sel) => sel.startsWith(".callout[data-callout="),
    matchBy: "data-attr",
    dataAttr: "data-callout",
    properties: [
      "--callout-color",
      "--callout-icon",
      "background-color",
      "background",
      "color",
      "border-left-color",
      "border-right-color",
      "border-top-color",
      "border-bottom-color",
      "border-left-width",
      "border-right-width",
      "border-top-width",
      "border-bottom-width",
      "border-left-style",
      "border-right-style",
      "border-top-style",
      "border-bottom-style",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "mix-blend-mode",
    ],
  },
  "callout:title": {
    obsidian: (sel) =>
      sel.includes("callout-title") && !sel.includes("callout-title-inner"),
    quartz: () => ".callout-title",
    matchBy: "singleton",
    properties: [
      "--callout-color",
      "color",
      "gap",
      "background-color",
      "background",
      "border-left-color",
      "border-right-color",
      "border-top-color",
      "border-bottom-color",
      "padding-top",
      "padding-bottom",
      "padding-left",
      "padding-right",
    ],
  },
  "callout:icon": {
    obsidian: (sel) => sel.includes("callout-icon") && !sel.includes("fold"),
    quartz: () => ".callout-title .callout-icon",
    matchBy: "singleton",
    properties: [
      "fill",
      "stroke",
      "color",
      "column-rule-color",
      "outline-color",
    ],
  },
  "callout:title-inner": {
    obsidian: (sel) => sel.includes("callout-title-inner"),
    quartz: () => ".callout-title > .callout-title-inner > p",
    matchBy: "singleton",
    properties: ["color", "font-weight"],
  },
  "callout:content": {
    obsidian: (sel) =>
      sel.includes("callout-content") && !sel.includes("callout-content-inner"),
    quartz: () => ".callout .callout-content",
    matchBy: "singleton",
    properties: [
      "background-color",
      "color",
      "padding-top",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "border-bottom-color",
      "border-top-color",
    ],
  },

  // ── Headings ──────────────────────────────────────────────────────────
  "heading:h1": {
    obsidian: (sel) => /^h1\b/.test(sel) || sel.includes("HyperMD-header-1"),
    quartz: () => "article > h1",
    matchBy: "tag",
    properties: [
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "text-shadow",
    ],
  },
  "heading:h2": {
    obsidian: (sel) => /^h2\b/.test(sel) || sel.includes("HyperMD-header-2"),
    quartz: () => "h2",
    matchBy: "tag",
    properties: [
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "text-shadow",
    ],
  },
  "heading:h3": {
    obsidian: (sel) => /^h3\b/.test(sel) || sel.includes("HyperMD-header-3"),
    quartz: () => "h3",
    matchBy: "tag",
    properties: [
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "text-shadow",
    ],
  },
  "heading:h4": {
    obsidian: (sel) => /^h4\b/.test(sel) || sel.includes("HyperMD-header-4"),
    quartz: () => "h4",
    matchBy: "tag",
    properties: [
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "text-shadow",
    ],
  },
  "heading:h5": {
    obsidian: (sel) => /^h5\b/.test(sel) || sel.includes("HyperMD-header-5"),
    quartz: () => "h5",
    matchBy: "tag",
    properties: [
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "text-shadow",
    ],
  },
  "heading:h6": {
    obsidian: (sel) => /^h6\b/.test(sel) || sel.includes("HyperMD-header-6"),
    quartz: () => "h6",
    matchBy: "tag",
    properties: [
      "color",
      "font-family",
      "font-size",
      "font-weight",
      "text-shadow",
    ],
  },

  // ── Text ──────────────────────────────────────────────────────────────
  "text:paragraph": {
    obsidian: (sel) => sel === "p",
    quartz: () => "p",
    matchBy: "tag",
    properties: ["color", "font-family", "font-weight", "line-height"],
  },
  "text:strong": {
    obsidian: (sel) => sel === "strong",
    quartz: () => ".page article p > strong, strong",
    matchBy: "tag",
    properties: ["color", "font-family", "font-weight"],
  },
  "text:emphasis": {
    obsidian: (sel) => sel === "em",
    quartz: () => ".page article p > em, em",
    matchBy: "tag",
    properties: ["color", "font-family", "font-style"],
  },
  "text:strikethrough": {
    obsidian: (sel) => sel === "del" || sel === "s",
    quartz: () => "del",
    matchBy: "tag",
    properties: ["color", "text-decoration", "text-decoration-color"],
  },
  "text:highlight": {
    obsidian: (sel) => sel === "mark" || sel.includes("text-highlight"),
    quartz: () => ".text-highlight",
    matchBy: "class",
    properties: ["background-color", "color", "border-radius", "padding"],
  },
  "text:inline-code": {
    obsidian: (sel) => sel === "code" && !sel.includes("language-"),
    quartz: () => "code",
    matchBy: "tag",
    properties: [
      "background-color",
      "color",
      "font-family",
      "border-radius",
      "padding",
    ],
  },

  // ── Links ─────────────────────────────────────────────────────────────
  "link:internal": {
    obsidian: (sel) =>
      sel.includes("internal-link") && !sel.includes("is-unresolved"),
    quartz: () => "a.internal",
    matchBy: "class",
    properties: [
      "color",
      "background-color",
      "font-weight",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
    ],
  },
  "link:external": {
    obsidian: (sel) => sel.includes("external-link"),
    quartz: () => "a.external",
    matchBy: "class",
    properties: [
      "color",
      "background-color",
      "font-weight",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
    ],
  },
  "link:unresolved": {
    obsidian: (sel) => sel.includes("is-unresolved"),
    quartz: () => "a.internal.broken",
    matchBy: "class",
    properties: ["color", "opacity", "text-decoration"],
  },
  "link:tag": {
    obsidian: (sel) => sel.includes("multi-select-pill") || sel.includes("tag"),
    quartz: () => "a.internal.tag-link",
    matchBy: "class",
    properties: ["color", "background-color", "font-weight", "border-radius"],
  },

  // ── Blockquotes ───────────────────────────────────────────────────────
  "blockquote:standard": {
    obsidian: (sel) =>
      sel === "blockquote" ||
      (sel.includes("blockquote") && !sel.includes("callout")),
    quartz: () => "blockquote:not(.callout)",
    matchBy: "tag",
    properties: [
      "background-color",
      "border-inline-start",
      "border-left-color",
      "border-left-width",
      "font-style",
      "padding-left",
      "padding-top",
      "padding-bottom",
      "margin-inline-start",
      "margin-inline-end",
    ],
  },

  // ── Tables ���───────────────────────────────────────────────────────────
  "table:container": {
    obsidian: (sel) =>
      sel === "table" || sel.includes("markdown-rendered table"),
    quartz: () => ".table-container > table",
    matchBy: "tag",
    properties: [
      "background-color",
      "border-collapse",
      "color",
      "border-left-color",
      "border-right-color",
      "border-top-color",
      "border-bottom-color",
    ],
  },
  "table:header": {
    obsidian: (sel) => sel === "th",
    quartz: () => "th",
    matchBy: "tag",
    properties: [
      "background-color",
      "color",
      "font-weight",
      "text-align",
      "border-bottom-color",
      "border-bottom-width",
      "padding-top",
      "padding-bottom",
      "padding-left",
      "padding-right",
    ],
  },
  "table:cell": {
    obsidian: (sel) => sel === "td",
    quartz: () => "td",
    matchBy: "tag",
    properties: [
      "background-color",
      "color",
      "padding-top",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "border-bottom-color",
    ],
  },
  "table:row": {
    obsidian: (sel) => sel === "tr",
    quartz: () => "tr",
    matchBy: "tag",
    properties: [
      "background-color",
      "border-bottom-color",
      "border-bottom-width",
    ],
  },

  // ── Code Blocks ───────────────────────────────────────────────────────
  "code-block:container": {
    obsidian: (sel) =>
      sel.includes("HyperMD-codeblock") ||
      (sel === "pre" && !sel.includes("code")),
    quartz: () => "figure[data-rehype-pretty-code-figure] pre",
    matchBy: "tag",
    properties: [
      "background-color",
      "color",
      "font-family",
      "border-left-color",
      "border-right-color",
      "border-top-color",
      "border-bottom-color",
      "border-radius",
      "padding",
    ],
  },

  // ── Checkboxes ────────────────────────────────────────────────────────
  "checkbox:item": {
    obsidian: (sel) =>
      sel.includes("task-list-item") && sel.includes("data-task="),
    quartz: (sel) => sel.includes("task-list-item"),
    matchBy: "data-attr",
    dataAttr: "data-task",
    properties: ["color", "text-decoration", "text-decoration-color"],
  },
  "checkbox:input": {
    obsidian: (sel) =>
      sel.includes('input[type="checkbox"]') || sel.includes("checkbox-toggle"),
    quartz: () => 'input[type="checkbox"]',
    matchBy: "tag",
    properties: [
      "background-color",
      "border-color",
      "border-width",
      "border-radius",
      "accent-color",
      "color",
    ],
  },

  // ── HR ────────────────────────────────────────────────────────────────
  "separator:hr": {
    obsidian: (sel) => sel === "hr",
    quartz: () => "hr",
    matchBy: "tag",
    properties: [
      "background-color",
      "border-top-color",
      "border-bottom-color",
      "border-top-width",
      "border-bottom-width",
      "height",
      "margin-top",
      "margin-bottom",
    ],
  },

  // ── Layout ────────────────────────────────────────────────────────────
  "layout:body": {
    obsidian: (sel) => sel === "body",
    quartz: () => "div#quartz-root",
    matchBy: "singleton",
    properties: ["background-color", "color"],
  },
  "layout:sidebar-left": {
    obsidian: (sel) =>
      sel.includes("mod-left-split") ||
      (sel.includes("mod-sidedock") && sel.includes("left")),
    quartz: () => ".page > div#quartz-body div.sidebar.left",
    matchBy: "singleton",
    properties: ["background-color", "color"],
  },
  "layout:sidebar-right": {
    obsidian: (sel) => sel.includes("mod-right-split"),
    quartz: () => ".page > div#quartz-body div.sidebar.right",
    matchBy: "singleton",
    properties: ["background-color", "color"],
  },
  "layout:content": {
    obsidian: (sel) =>
      sel.includes("mod-active.workspace-leaf") ||
      sel.includes("workspace-leaf-content"),
    quartz: () => ".page > div#quartz-body div.center",
    matchBy: "singleton",
    properties: ["background-color", "color"],
  },
};

// ============================================================================
// Matcher
// ============================================================================

/**
 * Extract the value of a data attribute from a selector string.
 * e.g. extractDataAttr('div.callout[data-callout="note"]', 'data-callout') → 'note'
 */
function extractDataAttr(selector, attrName) {
  const regex = new RegExp(`${attrName}="([^"]*)"`, "i");
  const match = selector.match(regex);
  return match ? match[1] : null;
}

/**
 * Match Obsidian selectors to Quartz selectors using the role registry.
 *
 * @param {Object} obsidianData - Flat selector→styles map from extraction
 * @param {Object} [autoProperties] - Auto-discovered properties per role from baseline diff
 * @returns {Object} - { matches: [...], unmatched: [...], roleStats: {...} }
 */
function matchSelectors(obsidianData, autoProperties) {
  const obsidianSelectors = Object.keys(obsidianData);
  const matches = [];
  const matched = new Set();

  for (const [roleName, role] of Object.entries(ROLE_REGISTRY)) {
    const obsidianMatches = obsidianSelectors.filter((sel) => {
      try {
        return role.obsidian(sel);
      } catch {
        return false;
      }
    });

    for (const obsSel of obsidianMatches) {
      if (matched.has(obsSel)) continue;

      let quartzSel;
      if (role.matchBy === "data-attr" && role.dataAttr) {
        const attrValue = extractDataAttr(obsSel, role.dataAttr);
        if (attrValue && typeof role.quartz === "function") {
          quartzSel = role.quartz(obsSel);
          if (!quartzSel) {
            // Build selector from pattern
            if (roleName.startsWith("callout:container")) {
              quartzSel = `.callout[data-callout="${attrValue}"]`;
            } else if (roleName.startsWith("checkbox:item")) {
              quartzSel = `.task-list-item[data-task="${attrValue}"]`;
            }
          }
        }
      } else if (typeof role.quartz === "function") {
        quartzSel = role.quartz(obsSel);
      } else {
        quartzSel = role.quartz;
      }

      if (!quartzSel) continue;

      // Determine which properties to extract:
      // 1. Use auto-discovered properties from baseline diff (preferred)
      // 2. Fall back to manual property list from role registry
      let propertyList = role.properties;
      let propertySource = "manual";
      if (autoProperties && autoProperties[roleName]) {
        const autoProps = autoProperties[roleName].autoProperties.map(
          (p) => p.property,
        );
        if (autoProps.length > 0) {
          propertyList = autoProps;
          propertySource = "auto";
        }
      }

      // Extract relevant properties from the Obsidian data
      const obsStyles = obsidianData[obsSel] || {};
      const relevantProps = {};
      for (const prop of propertyList) {
        if (obsStyles[prop] !== undefined) {
          relevantProps[prop] = obsStyles[prop];
        }
      }

      matches.push({
        role: roleName,
        obsidianSelector: obsSel,
        quartzSelector: quartzSel,
        properties: propertyList,
        propertySource,
        extractedValues: relevantProps,
        extractedCount: Object.keys(relevantProps).length,
      });

      matched.add(obsSel);
    }
  }

  const unmatched = obsidianSelectors.filter((sel) => !matched.has(sel));

  // Role statistics
  const roleStats = {};
  for (const roleName of Object.keys(ROLE_REGISTRY)) {
    const roleMatches = matches.filter((m) => m.role === roleName);
    roleStats[roleName] = {
      matchCount: roleMatches.length,
      avgExtractedProps:
        roleMatches.length > 0
          ? Math.round(
              roleMatches.reduce((s, m) => s + m.extractedCount, 0) /
                roleMatches.length,
            )
          : 0,
    };
  }

  return { matches, unmatched, roleStats };
}

// ============================================================================
// Validation against existing config.js
// ============================================================================

/**
 * Compare auto-discovered mappings against the existing manual config.
 */
function validateAgainstManual(autoMatches, manualConfig) {
  const report = {
    confirmed: [], // Auto-match agrees with manual
    divergent: [], // Auto-match disagrees with manual
    newDiscoveries: [], // Auto found something manual doesn't have
    manualOnly: [], // Manual has something auto missed
  };

  // Build a lookup from obsidian selector → manual quartz selector
  const manualMap = {};
  for (const entry of manualConfig) {
    const obsSel = entry.obsidianSelector;
    const qSel = entry.quartzSelector;
    if (obsSel && qSel) {
      manualMap[obsSel] = qSel;
    }
  }

  // Check each auto match
  for (const match of autoMatches) {
    const manualQuartz = manualMap[match.obsidianSelector];
    if (manualQuartz) {
      // Normalize selectors for comparison
      const autoNorm = match.quartzSelector.replace(/\s+/g, " ").trim();
      const manualNorm = manualQuartz.replace(/\s+/g, " ").trim();
      if (
        autoNorm === manualNorm ||
        manualNorm.includes(autoNorm) ||
        autoNorm.includes(manualNorm)
      ) {
        report.confirmed.push({
          obsidian: match.obsidianSelector,
          auto: match.quartzSelector,
          manual: manualQuartz,
          role: match.role,
        });
      } else {
        report.divergent.push({
          obsidian: match.obsidianSelector,
          auto: match.quartzSelector,
          manual: manualQuartz,
          role: match.role,
        });
      }
    } else {
      report.newDiscoveries.push({
        obsidian: match.obsidianSelector,
        quartz: match.quartzSelector,
        role: match.role,
      });
    }
  }

  // Find manual entries not covered by auto
  const autoObsSelectors = new Set(autoMatches.map((m) => m.obsidianSelector));
  for (const [obsSel, qSel] of Object.entries(manualMap)) {
    if (!autoObsSelectors.has(obsSel)) {
      report.manualOnly.push({ obsidian: obsSel, quartz: qSel });
    }
  }

  return report;
}

// ============================================================================
// Output: Generate mapping files in the existing format
// ============================================================================

function generateMappingFile(matches) {
  const groups = {};
  for (const match of matches) {
    const [category] = match.role.split(":");
    if (!groups[category]) groups[category] = [];

    // Build values array: direct mappings (same prop name on both sides)
    const values = match.properties.filter((p) => {
      return match.extractedValues[p] !== undefined;
    });

    groups[category].push({
      source: match.obsidianSelector,
      quartz: match.quartzSelector,
      publish: null,
      values,
    });
  }

  return groups;
}

// ============================================================================
// Main
// ============================================================================

function main() {
  // Load a sample Obsidian extraction
  const sampleTheme = process.argv[2] || "brutalist";
  const resultPath = resolve(__dirname, `../results/${sampleTheme}/dark.json`);

  if (!existsSync(resultPath)) {
    console.error(`Extraction result not found: ${resultPath}`);
    console.error(`Usage: node dom-fingerprint-matcher.mjs <theme-name>`);
    console.error(`Available themes: ls runner/results/`);
    process.exit(1);
  }

  console.log(`\n�� DOM Fingerprint Matcher Prototype`);
  console.log(`═══════════════════════���═══════════════\n`);
  console.log(`Theme: ${sampleTheme}`);
  console.log(`Source: ${resultPath}\n`);

  const obsidianData = JSON.parse(readFileSync(resultPath, "utf-8"));
  const obsidianSelectorCount = Object.keys(obsidianData).length;
  console.log(`Obsidian selectors: ${obsidianSelectorCount}`);
  console.log(`Role registry entries: ${Object.keys(ROLE_REGISTRY).length}`);

  // Load baseline and run diff for auto property discovery
  const baselinePath = resolve(__dirname, "../results/_baseline/dark.json");
  let autoProperties = null;
  if (existsSync(baselinePath)) {
    const baseline = JSON.parse(readFileSync(baselinePath, "utf-8"));
    const { diffs } = diffExtraction(baseline, obsidianData);
    autoProperties = discoverRoleProperties(diffs, ROLE_REGISTRY);
    console.log(
      `Baseline diff: auto-discovered properties for ${Object.keys(autoProperties).length} roles`,
    );
  } else {
    console.log(`No baseline found, using manual property lists`);
  }
  console.log();

  // Run matcher with auto-discovered properties
  const { matches, unmatched, roleStats } = matchSelectors(
    obsidianData,
    autoProperties,
  );

  console.log(`✅ Matched: ${matches.length} selectors`);
  console.log(`❌ Unmatched: ${unmatched.length} selectors`);
  console.log(
    `📊 Match rate: ${((matches.length / obsidianSelectorCount) * 100).toFixed(1)}%\n`,
  );

  // Role statistics
  console.log(`── Role Coverage ──────────────────────────────────`);
  for (const [role, stats] of Object.entries(roleStats)) {
    const indicator = stats.matchCount > 0 ? "✅" : "⬜";
    console.log(
      `  ${indicator} ${role}: ${stats.matchCount} matches, avg ${stats.avgExtractedProps} props`,
    );
  }

  // Sample matches
  console.log(`\n── Sample Matches ��───────────────────────────────`);
  const sampleRoles = [
    "callout:container",
    "heading:h1",
    "text:paragraph",
    "link:internal",
    "table:header",
  ];
  for (const role of sampleRoles) {
    const roleMatches = matches.filter((m) => m.role === role);
    if (roleMatches.length > 0) {
      const m = roleMatches[0];
      console.log(`\n  [${m.role}]`);
      console.log(
        `    Obsidian: ${m.obsidianSelector.substring(0, 80)}${m.obsidianSelector.length > 80 ? "..." : ""}`,
      );
      console.log(`    Quartz:   ${m.quartzSelector}`);
      console.log(
        `    Props:    ${m.extractedCount}/${m.properties.length} extracted (${m.propertySource})`,
      );
      if (m.extractedCount > 0) {
        const sampleProps = Object.entries(m.extractedValues).slice(0, 3);
        for (const [prop, val] of sampleProps) {
          const truncVal = String(val).substring(0, 60);
          console.log(`      ${prop}: ${truncVal}`);
        }
      }
    }
  }

  // Unmatched sample
  if (unmatched.length > 0) {
    console.log(`\n── Unmatched Selectors (sample) ──────��────────────`);
    for (const sel of unmatched.slice(0, 10)) {
      console.log(
        `  ❌ ${sel.substring(0, 90)}${sel.length > 90 ? "..." : ""}`,
      );
    }
    if (unmatched.length > 10) {
      console.log(`  ... and ${unmatched.length - 10} more`);
    }
  }

  // Generate mapping file
  const mappings = generateMappingFile(matches);
  console.log(`\n── Generated Mapping Groups ───────────────────────`);
  for (const [group, entries] of Object.entries(mappings)) {
    console.log(`  ${group}: ${entries.length} mappings`);
  }

  // Write outputs
  const outputDir = resolve(__dirname, "../results/_matcher-output");
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = resolve(outputDir, `${sampleTheme}-matches.json`);
  writeFileSync(
    outputPath,
    JSON.stringify(
      {
        theme: sampleTheme,
        timestamp: new Date().toISOString(),
        stats: {
          obsidianSelectors: obsidianSelectorCount,
          matched: matches.length,
          unmatched: unmatched.length,
          matchRate:
            ((matches.length / obsidianSelectorCount) * 100).toFixed(1) + "%",
        },
        roleStats,
        matches: matches.map((m) => ({
          role: m.role,
          obsidian: m.obsidianSelector,
          quartz: m.quartzSelector,
          extractedValues: m.extractedValues,
        })),
        unmatched,
        mappings,
      },
      null,
      2,
    ),
  );
  console.log(`\n📁 Output: ${outputPath}`);

  // Write role registry as standalone file
  const registryPath = resolve(outputDir, "role-registry.json");
  writeFileSync(
    registryPath,
    JSON.stringify(
      Object.fromEntries(
        Object.entries(ROLE_REGISTRY).map(([name, role]) => [
          name,
          {
            matchBy: role.matchBy,
            dataAttr: role.dataAttr || null,
            quartzSelector:
              typeof role.quartz === "function" ? role.quartz("") : role.quartz,
            properties: role.properties,
          },
        ]),
      ),
      null,
      2,
    ),
  );
  console.log(`📁 Role Registry: ${registryPath}`);

  console.log(`\n═══════════════════════════════════════`);
  console.log(`Done.\n`);
}

main();
