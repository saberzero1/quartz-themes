#!/usr/bin/env node
/**
 * Batch-run the static converter over every installed theme (and Obsidian's
 * app.css files) and write a report.
 *
 *   node fidelity/scripts/convert-all.mjs [--out=DIR] [--filter=substr] [--no-prettier]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as prettier from "prettier";
const { core } = await import("../harness/core.mjs");
const { convertObsidianCss, resolveIcon } = core;
import { transform, Features } from "lightningcss";

// Same targets Quartz uses when minifying plugin CSS (componentResources.ts).
const QUARTZ_TARGETS = {
  safari: (15 << 16) | (6 << 8),
  ios_saf: (15 << 16) | (6 << 8),
  edge: 115 << 16,
  firefox: 102 << 16,
  chrome: 109 << 16,
};
function quartzMinifies(css) {
  try {
    transform({
      filename: "plugin-resource.css",
      code: Buffer.from(css),
      minify: true,
      targets: QUARTZ_TARGETS,
      include: Features.MediaQueries,
    });
    return null;
  } catch (e) {
    return `${e.loc?.line ?? "?"}: ${e.message}`;
  }
}

const repo = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const arg = (k, d) =>
  process.argv.find((a) => a.startsWith(`--${k}=`))?.split("=")[1] ?? d;
const outDir = path.resolve(arg("out", path.join(repo, "fidelity/out")));
const filter = arg("filter", "");
const runPrettier = !process.argv.includes("--no-prettier");
const sourceOpts = {
  cacheDir: path.join(repo, "fidelity/out/theme-cache"),
  cacheTtl: 7 * 24 * 60 * 60 * 1000,
};

/** Classes present in a built Quartz site (for reporting matched vs unmatched). */
function quartzClasses() {
  const set = new Set();
  const pub = path.join(repo, "runner/quartz/public");
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".html"))
        for (const m of fs.readFileSync(p, "utf8").matchAll(/class="([^"]*)"/g))
          m[1].split(/\s+/).forEach((c) => c && set.add(c));
    }
  };
  if (fs.existsSync(pub)) walk(pub);
  return set;
}

// Every theme in Obsidian's community registry, downloaded like a site would
// (cached). Obsidian's app.css is converted and bundled by core itself.
const inputs = [];
const names = (await core.getRegistry(sourceOpts))
  .map((t) => t.name)
  .filter((n) => !filter || n.includes(filter));
const queue = [...names];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const name = queue.shift();
      try {
        inputs.push({
          name,
          css: (await core.resolveTheme(name, sourceOpts)).css,
        });
      } catch (e) {
        inputs.push({ name, error: String(e.message ?? e).split("\n")[0] });
      }
    }
  }),
);
inputs.sort((a, b) => a.name.localeCompare(b.name));

fs.mkdirSync(path.join(outDir, "css"), { recursive: true });
const qc = quartzClasses();
const report = { generated: new Date().toISOString(), themes: {}, totals: {} };
const unmatched = new Map(); // class -> number of themes
const t0 = performance.now();
let prettierFail = 0;
let repaired = 0;
let lightningFail = 0;

for (const { name, css, error } of inputs) {
  if (error) {
    report.themes[name] = { error: `download: ${error}` };
    continue;
  }
  const t = performance.now();
  let result;
  try {
    result = convertObsidianCss(css, {
      quartzClasses: qc,
      resolveIcon,
      filename: name,
    });
  } catch (e) {
    report.themes[name] = { error: String(e.stack ?? e) };
    continue;
  }
  const ms = performance.now() - t;
  const s = result.stats;
  if (s.repaired) repaired++;
  let prettierError = null;
  if (runPrettier) {
    try {
      await prettier.format(result.css, { parser: "css" });
    } catch (e) {
      prettierError = e.message.split("\n")[0];
      prettierFail++;
    }
  }
  const lightningError = quartzMinifies(result.css);
  if (lightningError) lightningFail++;
  const safe = name.replace(/[^\w.@-]+/g, "_");
  fs.writeFileSync(path.join(outDir, "css", `${safe}.css`), result.css);
  if (result.quarantine)
    fs.writeFileSync(
      path.join(outDir, "css", `${safe}.quarantine.css`),
      result.quarantine,
    );
  const relevant =
    s.rules -
    s.dropped.appOnly -
    s.dropped.wrapperSubject -
    s.dropped.leafType -
    s.dropped.staticFalse;
  report.themes[name] = {
    ms: Math.round(ms),
    inBytes: css.length,
    outBytes: result.css.length,
    rules: s.rules,
    keptVerbatim: s.keptVerbatim,
    rewritten: s.rewritten,
    dropped: s.dropped,
    relevantRules: relevant,
    repaired: s.repaired,
    warnings: s.warnings.slice(0, 5),
    prettierError,
    lightningError,
    quarantined: s.quarantined,
    layoutStripped: s.layoutStripped,
    topUnmatched: Object.entries(s.unmatchedClasses)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15),
  };
  for (const c of Object.keys(s.unmatchedClasses))
    unmatched.set(c, (unmatched.get(c) ?? 0) + 1);
}

const rows = Object.values(report.themes).filter((r) => !r.error);
const sum = (k) =>
  rows.reduce((a, r) => a + (typeof k === "function" ? k(r) : r[k]), 0);
report.totals = {
  inputs: rows.length,
  errors: Object.values(report.themes).filter((r) => r.error).length,
  repaired,
  quartzMinifyFail: lightningFail,
  prettierFail: runPrettier ? prettierFail : "skipped",
  seconds: +((performance.now() - t0) / 1000).toFixed(1),
  quarantinedRules: sum((r) => r.quarantined ?? 0),
  themesWithQuarantine: rows.filter((r) => r.quarantined).length,
  layoutStripped: sum((r) => r.layoutStripped ?? 0),
  rules: sum("rules"),
  keptVerbatim: sum("keptVerbatim"),
  rewritten: sum("rewritten"),
  droppedAppOnly: sum((r) => r.dropped.appOnly),
  droppedStaticFalse: sum((r) => r.dropped.staticFalse),
  droppedWrapperSubject: sum((r) => r.dropped.wrapperSubject),
  droppedUnparseable: sum((r) => r.dropped.unparseable),
  droppedLeafType: sum((r) => r.dropped.leafType),
};
report.unmatchedClassesByThemeCount = [...unmatched]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 200);
fs.writeFileSync(
  path.join(outDir, "report.json"),
  JSON.stringify(report, null, 1),
);
console.log(report.totals);
console.log("Top unmatched classes (themes using them in surviving rules):");
console.log(
  report.unmatchedClassesByThemeCount
    .slice(0, 60)
    .map(([c, n]) => `${String(n).padStart(4)} ${c}`)
    .join("\n"),
);
for (const [n, r] of Object.entries(report.themes))
  if (r.error || r.prettierError || r.lightningError)
    console.log(
      "FAIL",
      n,
      r.error?.split("\n")[0] ?? "",
      r.lightningError ?? "",
      r.prettierError ?? "",
    );
