import { mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { config } from "../config.js";
import { generateAutoConfig, mergeConfigs } from "../auto-config.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ALL_THEMES = [
  "80s-neon",
  "abate",
  "agate",
  "aged-whisky",
  "agora",
  "abyssal",
  "adrenaline",
  "adwaita",
  "allium",
  "anuppuccin",
  "its-theme",
  "minimal",
  "catppuccin",
  "blue-topaz",
  "tokyo-night",
  "origami",
  "hidden-grotto",
  "prism",
  "shimmering-focus",
];

const usage = () => {
  console.log("Usage: node conflict-detector.mjs <theme> | --all");
};

const unique = (values) => Array.from(new Set(values));

const intersect = (a, b) => {
  const setA = new Set(a);
  return unique(b.filter((prop) => setA.has(prop)));
};

const analyzeTheme = (theme) => {
  const autoConfig = generateAutoConfig(theme);
  const mergedConfig = mergeConfigs(config, autoConfig);

  const groups = new Map();
  for (const entry of mergedConfig) {
    if (!entry.quartzSelector) continue;
    if (!groups.has(entry.quartzSelector)) {
      groups.set(entry.quartzSelector, []);
    }
    groups.get(entry.quartzSelector).push(entry);
  }

  const conflicts = [];
  const redundant = [];
  let disjoint = 0;

  for (const [quartzSelector, entries] of groups.entries()) {
    if (entries.length < 2) continue;
    for (let i = 0; i < entries.length; i++) {
      for (let j = i + 1; j < entries.length; j++) {
        const left = entries[i];
        const right = entries[j];
        const overlap = intersect(
          left.properties || [],
          right.properties || [],
        );
        if (overlap.length === 0) {
          disjoint += 1;
          continue;
        }

        const isConflict = left.obsidianSelector !== right.obsidianSelector;
        for (const prop of overlap) {
          const message =
            `${quartzSelector} — property "${prop}" overlap between ` +
            `entry(obsidian="${left.obsidianSelector}") and ` +
            `entry(obsidian="${right.obsidianSelector}")`;
          const payload = {
            quartzSelector,
            property: prop,
            obsidianA: left.obsidianSelector,
            obsidianB: right.obsidianSelector,
            message,
          };
          if (isConflict) {
            conflicts.push(payload);
          } else {
            redundant.push(payload);
          }
        }
      }
    }
  }

  return {
    theme,
    selectorsChecked: groups.size,
    conflicts,
    redundant,
    disjoint,
  };
};

const printReport = ({
  theme,
  selectorsChecked,
  conflicts,
  redundant,
  disjoint,
}) => {
  console.log(`Theme: ${theme}`);
  console.log(`Selectors checked: ${selectorsChecked}`);
  console.log(`Conflicts: ${conflicts.length + redundant.length}`);
  for (const entry of conflicts) {
    console.log(`  [CONFLICT] ${entry.message}`);
  }
  for (const entry of redundant) {
    console.log(`  [REDUNDANT] ${entry.message}`);
  }
  console.log(`Disjoint: ${disjoint}`);
};

const writeAuditReport = (report) => {
  const outputPath = resolve(
    __dirname,
    "../../../.sisyphus/audit/c1-conflict-report.json",
  );
  const outputDir = dirname(outputPath);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, JSON.stringify(report, null, 2));
};

const main = () => {
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes("--help")) {
    usage();
    process.exit(0);
  }

  if (args.includes("--all")) {
    const themes = ALL_THEMES;
    const results = themes.map(analyzeTheme);
    for (const result of results) {
      printReport(result);
    }

    const summary = {
      totalConflicts: results.reduce(
        (sum, item) => sum + item.conflicts.length,
        0,
      ),
      totalRedundant: results.reduce(
        (sum, item) => sum + item.redundant.length,
        0,
      ),
      themesWithConflicts: results
        .filter((item) => item.conflicts.length > 0)
        .map((item) => item.theme),
    };

    writeAuditReport({ themes: results, summary });

    const hasConflicts = summary.totalConflicts > 0;
    process.exit(hasConflicts ? 1 : 0);
  }

  const theme = args.find((arg) => !arg.startsWith("--"));
  if (!theme) {
    usage();
    process.exit(1);
  }

  const result = analyzeTheme(theme);
  printReport(result);
  process.exit(result.conflicts.length > 0 ? 1 : 0);
};

main();
