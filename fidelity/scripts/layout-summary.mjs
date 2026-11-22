#!/usr/bin/env node
/**
 * Merge layout audit reports (shards) and print issues grouped by kind.
 *   node fidelity/scripts/layout-summary.mjs [--json=out.json] [--all]
 *   --all   list every theme per issue kind (default: the first 15)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ISSUES } from "../harness/layout.mjs";

const repo = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const dir = path.join(repo, "fidelity/out/layout");
const arg = (k, d) =>
  process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;
const files = fs
  .readdirSync(dir)
  .filter((f) => f === "report.json" || /^report-\d+of\d+\.json$/.test(f));
if (!files.length) {
  console.error(`no reports in ${dir}; run fidelity/scripts/layout.mjs first`);
  process.exit(1);
}
const reports = files.map((f) =>
  JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")),
);
const issues = reports.flatMap((r) => r.issues);
const core = reports[0].core; // every shard measures the same references
const themes = reports.reduce((n, r) => n + r.themes, 0);
const affected = (list) => new Set(list.map((i) => i.theme)).size;

console.log(
  `${files.length} report file(s), ${themes} themes, widths ${reports[0].widths.join("/")}px`,
);
for (const sev of ["error", "warn"]) {
  const list = issues.filter((i) => i.severity === sev);
  console.log(`${sev}s: ${list.length} in ${affected(list)} themes`);
}

const limit = process.argv.includes("--all") ? Infinity : 15;
for (const kind of Object.keys(ISSUES).sort(
  (a, b) =>
    (ISSUES[a] === "error" ? 0 : 1) - (ISSUES[b] === "error" ? 0 : 1) ||
    affected(issues.filter((i) => i.kind === b)) -
      affected(issues.filter((i) => i.kind === a)),
)) {
  const list = issues.filter((i) => i.kind === kind);
  if (!list.length) continue;
  const by = {};
  for (const i of list)
    (by[i.theme] ??= []).push(`${i.mode[0]}${i.width}: ${i.detail}`);
  const names = Object.keys(by);
  console.log(`\n[${ISSUES[kind]}] ${kind}: ${names.length} themes`);
  for (const t of names.slice(0, limit))
    console.log(`  ${t} — ${by[t].slice(0, 3).join("; ")}`);
  if (names.length > limit) console.log(`  … ${names.length - limit} more`);
}

if (core?.length) {
  console.log(
    "\ncore's default theme vs plain Quartz (chrome size or visibility):",
  );
  for (const c of core.filter((c) => c.mode === "dark"))
    console.log(
      `  ${c.width}px ${c.chrome}: ${c.quartz.vis ? "" : "hidden "}${c.quartz.w}×${c.quartz.h} → ${c.default.vis ? "" : "hidden "}${c.default.w}×${c.default.h}`,
    );
}

const out = arg("json", "");
if (out)
  fs.writeFileSync(out, JSON.stringify({ themes, issues, core }, null, 1));
