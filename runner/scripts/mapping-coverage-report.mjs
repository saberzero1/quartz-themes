import fs from "node:fs";
import path from "node:path";
import { config, aspectMap } from "./config.js";

const RESULTS_DIR = path.resolve("runner/results");
const BASELINE_DIR = path.join(RESULTS_DIR, "_baseline");
const OUTPUT_PATH = path.resolve(
  "runner/scripts/tests/verification-results/coverage-report.json",
);

const args = process.argv.slice(2);
let topN = 0;
let bottomN = 0;
for (let i = 0; i < args.length; i += 1) {
  if (args[i] === "--top" && args[i + 1]) {
    topN = parseInt(args[i + 1], 10);
    i += 1;
  } else if (args[i] === "--bottom" && args[i + 1]) {
    bottomN = parseInt(args[i + 1], 10);
    i += 1;
  }
}

function isDefaultValue(value, property) {
  if (value === undefined || value === null) return true;
  const normalized = String(value).trim().toLowerCase();
  if (
    normalized === "" ||
    normalized === "inherit" ||
    normalized === "initial" ||
    normalized === "unset"
  )
    return true;
  if (normalized === "none" && property !== "display") return true;
  return false;
}

function loadJsonSafe(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

const baselineDark = loadJsonSafe(path.join(BASELINE_DIR, "dark.json"));
const baselineLight = loadJsonSafe(path.join(BASELINE_DIR, "light.json"));

const uniqueAspects = [...new Set(aspectMap)].sort();

const themeDirs = fs
  .readdirSync(RESULTS_DIR, { withFileTypes: true })
  .filter(
    (d) =>
      d.isDirectory() &&
      d.name !== "_baseline" &&
      !d.name.startsWith(".") &&
      (fs.existsSync(path.join(RESULTS_DIR, d.name, "dark.json")) ||
        fs.existsSync(path.join(RESULTS_DIR, d.name, "light.json"))),
  )
  .map((d) => d.name)
  .sort();

const themeResults = [];
let processed = 0;

for (const themeId of themeDirs) {
  const darkPath = path.join(RESULTS_DIR, themeId, "dark.json");
  const lightPath = path.join(RESULTS_DIR, themeId, "light.json");
  const hasDark = fs.existsSync(darkPath);
  const mode = hasDark ? "dark" : "light";
  const data = loadJsonSafe(hasDark ? darkPath : lightPath);
  const baseline = hasDark ? baselineDark : baselineLight;

  if (!data) {
    processed += 1;
    continue;
  }

  const aspectCounts = {};
  for (const a of uniqueAspects) aspectCounts[a] = { withValues: 0, total: 0 };

  let totalWithValues = 0;

  for (let i = 0; i < config.length; i += 1) {
    const entry = config[i];
    const aspect = aspectMap[i] ?? "misc";
    if (!aspectCounts[aspect])
      aspectCounts[aspect] = { withValues: 0, total: 0 };
    aspectCounts[aspect].total += 1;

    const sel = entry.obsidianSelector;
    const selectorData = data[sel];
    if (!selectorData) continue;

    const baselineSel = baseline?.[sel];
    let hasAnyFound = false;

    for (const prop of entry.properties) {
      const value = selectorData[prop];
      if (isDefaultValue(value, prop)) continue;
      if (baselineSel && baselineSel[prop] === value) continue;
      hasAnyFound = true;
      break;
    }

    if (
      !hasAnyFound &&
      sel === "body" &&
      Object.keys(selectorData).some((k) => k.startsWith("--"))
    ) {
      hasAnyFound = true;
    }

    if (hasAnyFound) {
      aspectCounts[aspect].withValues += 1;
      totalWithValues += 1;
    }
  }

  const aspects = {};
  for (const [a, c] of Object.entries(aspectCounts)) {
    if (c.total > 0) {
      aspects[a] = {
        withValues: c.withValues,
        total: c.total,
        percent: Math.round((c.withValues / c.total) * 100),
      };
    }
  }

  const overallCoverage =
    config.length > 0 ? Math.round((totalWithValues / config.length) * 100) : 0;

  themeResults.push({
    id: themeId,
    mode,
    overallCoverage,
    mappingsWithValues: totalWithValues,
    totalMappings: config.length,
    aspects,
  });

  processed += 1;
  if (processed % 100 === 0) {
    process.stderr.write(`Processed ${processed}/${themeDirs.length} themes\n`);
  }
}

themeResults.sort((a, b) => b.overallCoverage - a.overallCoverage);

const aspectAverages = {};
for (const a of uniqueAspects) {
  const vals = themeResults
    .map((t) => t.aspects[a]?.percent)
    .filter((v) => v !== undefined);
  if (vals.length === 0) continue;
  aspectAverages[a] = {
    avg: Math.round(vals.reduce((s, v) => s + v, 0) / vals.length),
    min: Math.min(...vals),
    max: Math.max(...vals),
    themesWithData: vals.length,
  };
}

const report = {
  timestamp: new Date().toISOString(),
  totalThemes: themeResults.length,
  aspectAverages,
  themes: themeResults,
};

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(report, null, 2), "utf8");

console.log(`Mapping Coverage Report — ${themeResults.length} themes analyzed`);
console.log("═".repeat(50));
console.log();

const showTop = topN || (bottomN ? 0 : 10);
const showBottom = bottomN || (topN ? 0 : 10);

if (showTop > 0) {
  console.log(`Top ${showTop} themes by coverage:`);
  for (const t of themeResults.slice(0, showTop)) {
    console.log(
      `  ${t.id.padEnd(35)} ${String(t.overallCoverage).padStart(3)}%  (${t.mappingsWithValues}/${t.totalMappings})`,
    );
  }
  console.log();
}

if (showBottom > 0) {
  console.log(`Bottom ${showBottom} themes by coverage:`);
  for (const t of themeResults.slice(-showBottom).reverse()) {
    console.log(
      `  ${t.id.padEnd(35)} ${String(t.overallCoverage).padStart(3)}%  (${t.mappingsWithValues}/${t.totalMappings})`,
    );
  }
  console.log();
}

console.log("Per-aspect averages across all themes:");
for (const [a, stats] of Object.entries(aspectAverages).sort(
  (x, y) => y[1].avg - x[1].avg,
)) {
  console.log(
    `  ${a.padEnd(18)} — avg ${String(stats.avg).padStart(3)}%  (min ${String(stats.min).padStart(3)}%, max ${String(stats.max).padStart(3)}%)`,
  );
}
