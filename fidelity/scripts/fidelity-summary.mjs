#!/usr/bin/env node
/**
 * Merge fidelity reports (shards) and print a corpus summary.
 *   node fidelity/scripts/fidelity-summary.mjs [--prefix=report] [--json=out.json]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const dir = path.join(repo, "fidelity/out/fidelity");
const arg = (k, d) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;
const prefix = arg("prefix", "report");
const files = fs.readdirSync(dir).filter((f) => f.startsWith(prefix) && f.endsWith(".json") && (f === `${prefix}.json` || /of\d+\.json$/.test(f)));
const results = {};
for (const f of files) Object.assign(results, JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")).results);

const rows = Object.values(results).filter((r) => r.score != null && r.theme !== "(default)");
const scores = rows.map((r) => r.score).sort((a, b) => a - b);
const pct = (x) => `${(x * 100).toFixed(1)}%`;
const q = (p) => scores[Math.min(scores.length - 1, Math.floor(p * scores.length))];
console.log(`${files.length} report file(s), ${rows.length} theme/mode results`);
console.log(`mean ${pct(scores.reduce((a, b) => a + b, 0) / scores.length)}  median ${pct(q(0.5))}  p10 ${pct(q(0.1))}  min ${pct(scores[0])}`);
const bands = [
  ["100%", (s) => s >= 0.9999],
  ["95–99%", (s) => s >= 0.95 && s < 0.9999],
  ["90–95%", (s) => s >= 0.9 && s < 0.95],
  ["80–90%", (s) => s >= 0.8 && s < 0.9],
  ["<80%", (s) => s < 0.8],
];
for (const [label, test] of bands) console.log(`  ${label.padEnd(7)} ${scores.filter(test).length}`);

// Aspect averages
const aspects = {};
for (const r of rows) for (const [a, v] of Object.entries(r.perAspect)) if (v.score != null) (aspects[a] ??= []).push(v.score);
console.log("\nper aspect:");
for (const [a, v] of Object.entries(aspects).sort((x, y) => x[1].reduce((p, c) => p + c, 0) / x[1].length - y[1].reduce((p, c) => p + c, 0) / y[1].length))
  console.log(`  ${a.padEnd(12)} ${pct(v.reduce((p, c) => p + c, 0) / v.length)}`);

// Most common mismatches
const fails = new Map();
for (const r of rows)
  for (const [pid, p] of Object.entries(r.perProbe))
    for (const prop of Object.keys(p.diffs ?? {})) {
      const k = `${pid.replace(/callout-(note|warning|tip|danger|quote)/, "callout-*")} ${prop}`;
      fails.set(k, (fails.get(k) ?? 0) + 1);
    }
console.log("\nmost common mismatches (probe property: count):");
for (const [k, n] of [...fails].sort((a, b) => b[1] - a[1]).slice(0, 20)) console.log(`  ${String(n).padStart(5)}  ${k}`);

console.log("\nworst 15:");
for (const r of rows.sort((a, b) => a.score - b.score).slice(0, 15)) console.log(`  ${pct(r.score).padStart(6)}  ${r.theme} (${r.mode})`);

const out = arg("json", "");
if (out) fs.writeFileSync(out, JSON.stringify({ results }, null, 1));
