#!/usr/bin/env node
/**
 * Layout audit: every theme × mode × phone/tablet/desktop width on the
 * specimen page, checking Quartz's page layout survives the theme (see
 * fidelity/harness/layout.mjs). No Obsidian needed.
 *
 *   node fidelity/scripts/layout.mjs --themes="Minimal,Things"
 *   node fidelity/scripts/layout.mjs --all [--shard=1/4] [--concurrency=6]
 *   --widths=375,1000,1280   --page=specimen   --resume (keep earlier metrics)
 *
 * Writes fidelity/out/layout/metrics[-iofN].jsonl (raw) and
 * report[-iofN].json (issues); `layout-summary.mjs` merges and prints them.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { startQuartz } from "../harness/quartz.mjs";
import {
  CHROME,
  WIDTHS,
  heightFor,
  measureLayout,
  findIssues,
} from "../harness/layout.mjs";

const { core } = await import("../harness/core.mjs");
const repo = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const arg = (k, d) =>
  process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;
const flag = (k) => process.argv.includes(`--${k}`);
const outDir = path.join(repo, "fidelity/out/layout");
fs.mkdirSync(outDir, { recursive: true });
const widths = arg("widths", WIDTHS.join(",")).split(",").map(Number);
const page = arg("page", "specimen");
const concurrency = Number(arg("concurrency", "6"));
const sourceOpts = {
  cacheDir: path.join(repo, "fidelity/out/theme-cache"),
  cacheTtl: 7 * 24 * 60 * 60 * 1000,
};

const registry = await core.getRegistry(sourceOpts);
let themes = flag("all")
  ? registry.map((t) => t.name).sort((a, b) => a.localeCompare(b))
  : arg("themes", "Minimal")
      .split(",")
      .map((s) => s.trim());
const [shardI, shardN] = arg("shard", "1/1").split("/").map(Number);
themes = themes.filter((_, i) => i % shardN === shardI - 1);
const suffix = shardN > 1 ? `-${shardI}of${shardN}` : "";
const metricsFile = path.join(outDir, `metrics${suffix}.jsonl`);
const reportFile = path.join(outDir, `report${suffix}.json`);

const resolved = new Map();
{
  const queue = [...themes];
  await Promise.all(
    Array.from({ length: 8 }, async () => {
      while (queue.length) {
        const t = queue.shift();
        try {
          resolved.set(t, await core.resolveTheme(t, sourceOpts));
        } catch (e) {
          console.error(
            `resolve ${t} FAILED: ${String(e.message ?? e).split("\n")[0]}`,
          );
        }
      }
    }),
  );
}

// Earlier rows (--resume) are kept; the references are measured in every run.
const rows = [];
const done = new Set();
if (flag("resume") && fs.existsSync(metricsFile))
  for (const l of fs.readFileSync(metricsFile, "utf8").split("\n"))
    if (l) {
      const r = JSON.parse(l);
      if (r.theme.startsWith("(")) continue;
      rows.push(r);
      done.add(`${r.theme}|${r.mode}|${r.width}`);
    }
const sink = fs.createWriteStream(metricsFile);
for (const r of rows) sink.write(JSON.stringify(r) + "\n");

const site = path.resolve(
  arg("site", "") ||
    [
      path.join(repo, "fidelity/out/site"),
      path.join(repo, "../dev-mode/.dev/sites/dir-site"),
    ].find((d) => fs.existsSync(path.join(d, "index.html"))),
);
console.error(`quartz site: ${site}`);
const quartz = await startQuartz({ site });

/** @param {string} t theme name, "(default)" or "(quartz)" */
async function run(t) {
  let css;
  try {
    css =
      t === "(quartz)"
        ? { main: "", raw: "" }
        : core.convertTheme({
            themeCss: t === "(default)" ? "" : resolved.get(t).css,
            styleSettings: {},
          });
  } catch (e) {
    console.error(
      `convert ${t} FAILED: ${String(e.message ?? e).split("\n")[0]}`,
    );
    return;
  }
  const known = t.startsWith("(") ? undefined : resolved.get(t)?.modes;
  for (const mode of ["dark", "light"].filter(
    (m) => !known || known.includes(m),
  ))
    for (const width of widths) {
      if (done.has(`${t}|${mode}|${width}`)) continue;
      const q = await quartz.newPage(css, mode);
      try {
        await q.page.setViewportSize({ width, height: heightFor(width) });
        await q.open(page);
        await q.page.evaluate(() =>
          window.scrollTo({ top: 0, left: 0, behavior: "instant" }),
        );
        await q.page.waitForTimeout(150);
        const m = await q.page.evaluate(measureLayout, CHROME);
        const row = { theme: t, mode, width, ...m };
        rows.push(row);
        sink.write(JSON.stringify(row) + "\n");
      } catch (e) {
        console.error(
          `measure ${t} ${mode} ${width} FAILED: ${String(e.message ?? e).split("\n")[0]}`,
        );
      } finally {
        await q.close();
      }
    }
}

try {
  await run("(default)");
  await run("(quartz)");
  const queue = themes.filter((t) => resolved.has(t));
  let n = 0;
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (queue.length) {
        await run(queue.shift());
        if (++n % 50 === 0) console.error(`${n}/${themes.length}`);
      }
    }),
  );
} finally {
  await quartz.stop();
  await new Promise((r) => sink.end(r));
}

const { issues, core: coreDiffs } = findIssues(rows);
fs.writeFileSync(
  reportFile,
  JSON.stringify(
    {
      generated: new Date().toISOString(),
      page,
      widths,
      themes: [...new Set(rows.map((r) => r.theme))].filter(
        (t) => !t.startsWith("("),
      ).length,
      issues,
      core: coreDiffs,
    },
    null,
    1,
  ),
);
const errors = issues.filter((i) => i.severity === "error");
console.log(
  `${rows.length} measurements, ${issues.length} issues (${errors.length} errors, ${new Set(errors.map((i) => i.theme)).size} themes)`,
);
for (const i of errors.slice(0, 40))
  console.log(`  ${i.theme} ${i.mode} ${i.width}: ${i.kind} — ${i.detail}`);
console.error(`wrote ${reportFile}`);
