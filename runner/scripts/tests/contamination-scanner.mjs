import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const themes = [
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

const quartzBuiltins = [
  "--light",
  "--lightgray",
  "--gray",
  "--darkgray",
  "--dark",
  "--secondary",
  "--tertiary",
  "--highlight",
  "--textHighlight",
  "--bodyFont",
  "--headerFont",
  "--titleFont",
  "--codeFont",
];

const commonBuiltins = [
  "--callout-color",
  "--callout-icon",
  "--color-accent",
  "--text-accent",
  "--text-normal",
  "--text-muted",
  "--text-faint",
  "--background-primary",
  "--background-secondary",
  "--background-primary-alt",
  "--background-secondary-alt",
  "--interactive-accent",
  "--interactive-accent-hover",
  "--text-accent-hover",
  "--text-highlight-bg",
  "--font-text",
  "--font-monospace",
  "--font-interface",
  "--font-text-theme",
  "--quartz-icon-color",
];

const allowedBuiltins = new Set([...quartzBuiltins, ...commonBuiltins]);

const baseDir = resolve(process.cwd());
const themeDir = resolve(baseDir, "plugin", "src", "themes");
const resultsDir = resolve(baseDir, "runner", "results");
const outputPath = resolve(
  baseDir,
  ".sisyphus",
  "audit",
  "c3-contamination-report.json",
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

const parseDeclarations = (blockBody) => {
  const declarations = [];
  const regex = /([\w-]+)\s*:\s*([^;]+);/g;
  let match;
  while ((match = regex.exec(blockBody))) {
    declarations.push({ property: match[1].trim(), value: match[2].trim() });
  }
  return declarations;
};

const collectDefinedVars = (blockBody) => {
  const vars = new Set();
  const regex = /(--[A-Za-z0-9-_]+)\s*:/g;
  let match;
  while ((match = regex.exec(blockBody))) {
    vars.add(match[1]);
  }
  return vars;
};

const collectVarRefs = (blockBody) => {
  const refs = [];
  const regex = /var\(\s*(--[A-Za-z0-9-_]+)\s*(?:,|\))/g;
  let match;
  while ((match = regex.exec(blockBody))) {
    refs.push(match[1]);
  }
  return refs;
};

const isBaselineSelector = (selector) => {
  const trimmed = selector.trim();
  return trimmed.startsWith("body") || trimmed.startsWith(":root");
};

const loadBaselineVars = (theme, mode) => {
  const dataPath = resolve(resultsDir, theme, `${mode}.json`);
  try {
    const raw = readFileSync(dataPath, "utf8");
    const data = JSON.parse(raw);
    const bodyVars =
      data.body && typeof data.body === "object" ? data.body : {};
    return bodyVars;
  } catch (error) {
    console.error(`Failed to load ${mode} baseline for ${theme}:`, error);
    return {};
  }
};

const scanTheme = (theme) => {
  const themePath = resolve(themeDir, `${theme}.ts`);
  let fileText = "";
  try {
    fileText = readFileSync(themePath, "utf8");
  } catch (error) {
    console.error(`Failed to read theme file for ${theme}:`, error);
    return { theme, undefinedRefs: [], baselineMatches: [] };
  }

  const darkSection = extractSection(fileText, "dark");
  const lightSection = extractSection(fileText, "light");
  const themeReport = { theme, undefinedRefs: [], baselineMatches: [] };

  const modes = [
    { mode: "dark", section: darkSection },
    { mode: "light", section: lightSection },
  ];

  for (const { mode, section } of modes) {
    if (!section) {
      console.error(`Missing ${mode} section for ${theme}.`);
      continue;
    }
    const aspects = extractCssAspects(section);
    const baseline = loadBaselineVars(theme, mode);
    const baselineVars = new Set(
      Object.keys(baseline).filter((key) => key.startsWith("--")),
    );

    for (const [aspect, css] of Object.entries(aspects)) {
      const blocks = parseBlocks(css);
      for (const block of blocks) {
        const definedVars = collectDefinedVars(block.body);
        const varRefs = collectVarRefs(block.body);
        for (const variable of varRefs) {
          if (
            definedVars.has(variable) ||
            baselineVars.has(variable) ||
            allowedBuiltins.has(variable)
          ) {
            continue;
          }
          themeReport.undefinedRefs.push({
            mode,
            aspect,
            variable,
            context: block.selector,
          });
        }

        if (!isBaselineSelector(block.selector)) {
          const declarations = parseDeclarations(block.body);
          for (const declaration of declarations) {
            const baselineValue = baseline[declaration.property];
            if (
              typeof baselineValue === "string" &&
              baselineValue.trim() === declaration.value
            ) {
              themeReport.baselineMatches.push({
                mode,
                aspect,
                selector: block.selector,
                property: declaration.property,
                value: declaration.value,
              });
            }
          }
        }
      }
    }
  }

  return themeReport;
};

const run = () => {
  const reports = themes.map((theme) => scanTheme(theme));
  const totalUndefinedRefs = reports.reduce(
    (count, report) => count + report.undefinedRefs.length,
    0,
  );
  const totalBaselineMatches = reports.reduce(
    (count, report) => count + report.baselineMatches.length,
    0,
  );
  const themesWithIssues = reports
    .filter(
      (report) =>
        report.undefinedRefs.length > 0 || report.baselineMatches.length > 0,
    )
    .map((report) => report.theme);

  const output = {
    themes: reports,
    summary: { totalUndefinedRefs, totalBaselineMatches, themesWithIssues },
  };

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`Report saved to ${outputPath}`);
};

run();
