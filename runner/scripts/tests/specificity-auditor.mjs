import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const THEMES = [
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

const baseDir = resolve(process.cwd());
const themeDir = resolve(baseDir, "plugin", "src", "themes");
const outputPath = resolve(
  baseDir,
  ".sisyphus",
  "audit",
  "c2-specificity-report.json",
);

const stripComments = (input) =>
  input.replace(/\/\*[^]*?\*\//g, "").replace(/\/\/.*$/gm, "");

const extractSection = (text, key) => {
  const keyIndex = text.indexOf(`${key}:`);
  if (keyIndex === -1) return null;
  const braceIndex = text.indexOf("{", keyIndex);
  if (braceIndex === -1) return null;
  let depth = 1;
  let i = braceIndex + 1;
  while (i < text.length && depth > 0) {
    const char = text[i];
    if (char === "{") depth += 1;
    if (char === "}") depth -= 1;
    i += 1;
  }
  if (depth !== 0) return null;
  return text.slice(braceIndex + 1, i - 1);
};

const extractCssAspects = (sectionText) => {
  if (!sectionText) return {};
  const aspects = {};
  const regex = /([A-Za-z0-9_]+)\s*:\s*`([\s\S]*?)`/g;
  let match;
  while ((match = regex.exec(sectionText))) {
    aspects[match[1]] = match[2];
  }
  return aspects;
};

const parseBlocks = (css, prefix = "") => {
  const blocks = [];
  const input = stripComments(css);

  const parseFrom = (chunk, currentPrefix) => {
    let index = 0;
    while (index < chunk.length) {
      const openIndex = chunk.indexOf("{", index);
      if (openIndex === -1) return;
      const selector = chunk.slice(index, openIndex).trim();
      let depth = 1;
      let i = openIndex + 1;
      while (i < chunk.length && depth > 0) {
        const char = chunk[i];
        if (char === "{") depth += 1;
        if (char === "}") depth -= 1;
        i += 1;
      }
      if (depth !== 0) return;
      const body = chunk.slice(openIndex + 1, i - 1);
      if (selector.startsWith("@")) {
        parseFrom(body, `${currentPrefix}${selector.trim()} `);
      } else if (selector) {
        blocks.push({ selector: `${currentPrefix}${selector}`.trim(), body });
      }
      index = i;
    }
  };

  parseFrom(input, prefix);
  return blocks;
};

const extractProps = (body) => {
  const props = new Set();
  for (const line of body.split("\n")) {
    const match = line.match(/^\s*([\w-]+)\s*:/);
    if (match) props.add(match[1]);
  }
  return props;
};

const findDuplicateSelectors = (css) => {
  const groups = new Map();
  const blocks = parseBlocks(css);
  for (const block of blocks) {
    const normalized = block.selector.trim();
    if (!normalized) continue;
    if (!groups.has(normalized)) groups.set(normalized, []);
    groups.get(normalized).push(block.body);
  }

  const duplicates = [];
  for (const [selector, bodies] of groups.entries()) {
    if (bodies.length < 2) continue;
    const propSets = bodies.map(extractProps);
    let overlapping = 0;
    for (let i = 0; i < propSets.length; i++) {
      for (let j = i + 1; j < propSets.length; j++) {
        for (const p of propSets[i]) {
          if (propSets[j].has(p)) {
            overlapping++;
            break;
          }
        }
      }
    }
    duplicates.push({
      selector,
      count: bodies.length,
      overlapping: overlapping > 0,
    });
  }
  return duplicates;
};

const scanTheme = (theme) => {
  const themePath = resolve(themeDir, `${theme}.ts`);
  let fileText = "";
  try {
    fileText = readFileSync(themePath, "utf8");
  } catch (error) {
    console.error(`Failed to read theme file for ${theme}:`, error);
    return { theme, duplicates: [] };
  }

  const darkSection = extractSection(fileText, "dark");
  const lightSection = extractSection(fileText, "light");
  const themeReport = { theme, duplicates: [] };

  const modes = [
    { mode: "dark", section: darkSection },
    { mode: "light", section: lightSection },
  ];

  for (const { mode, section } of modes) {
    if (!section) continue;
    const aspects = extractCssAspects(section);
    for (const [aspect, css] of Object.entries(aspects)) {
      const duplicates = findDuplicateSelectors(css);
      for (const entry of duplicates) {
        themeReport.duplicates.push({
          mode,
          aspect,
          selector: entry.selector,
          count: entry.count,
          overlapping: entry.overlapping,
        });
      }
    }
  }

  return themeReport;
};

const printReport = (report) => {
  console.log(`Theme: ${report.theme}`);
  if (report.duplicates.length === 0) {
    console.log("  No duplicates found");
    return;
  }
  for (const entry of report.duplicates) {
    const tag = entry.overlapping ? "CONFLICT" : "DISJOINT";
    console.log(
      `  [${tag}] ${entry.mode}/${entry.aspect}: selector "${entry.selector}" appears ${entry.count} times`,
    );
  }
};

const writeAuditReport = (report) => {
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(report, null, 2));
};

const main = () => {
  const args = process.argv.slice(2);
  const themes = args.filter((arg) => !arg.startsWith("--"));
  const selectedThemes = themes.length > 0 ? themes : THEMES;

  const reports = selectedThemes.map((theme) => scanTheme(theme));
  for (const report of reports) {
    printReport(report);
  }

  const allDups = reports.flatMap((r) => r.duplicates);
  const summary = {
    totalDuplicates: allDups.length,
    overlappingConflicts: allDups.filter((d) => d.overlapping).length,
    disjointOnly: allDups.filter((d) => !d.overlapping).length,
    themesWithConflicts: reports
      .filter((r) => r.duplicates.some((d) => d.overlapping))
      .map((r) => r.theme),
    themesWithDuplicates: reports
      .filter((r) => r.duplicates.length > 0)
      .map((r) => r.theme),
  };

  writeAuditReport({ themes: reports, summary });
  console.log(`Report saved to ${outputPath}`);
};

main();
