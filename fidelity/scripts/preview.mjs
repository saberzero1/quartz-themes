#!/usr/bin/env node
/**
 * Screenshot the fidelity site with themes converted by @quartz-themes/core
 * swapped in (no rebuild per theme).
 *
 *   node fidelity/scripts/preview.mjs --themes="Minimal,Tokyo Night" \
 *     [--pages=callouts,index] [--modes=dark,light] [--site=DIR] [--out=DIR]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { startQuartz } from "../harness/quartz.mjs";

const { core } = await import("../harness/core.mjs");
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const arg = (k, d) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;
const themes = arg("themes", "Minimal").split(",");
const pages = arg("pages", "callouts").split(",");
const modes = arg("modes", "dark,light").split(",");
const outDir = path.resolve(arg("out", path.join(repo, "fidelity/out/shots")));
const site = path.resolve(
  arg("site", "") ||
    [path.join(repo, "../dev-mode/.dev/sites/dir-site"), path.join(repo, "runner/quartz/public")].find((d) => fs.existsSync(path.join(d, "index.html"))),
);
const safe = (n) => n.replace(/[^\w.@-]+/g, "_");

fs.mkdirSync(outDir, { recursive: true });
const quartz = await startQuartz({ site });
try {
  for (const theme of themes) {
    // Resolved like a site resolves it (registry name, owner/repo, URL or path).
    const themeCss = (await core.resolveTheme(theme, { cacheDir: path.join(repo, "fidelity/out/theme-cache") })).css;
    const css = core.convertTheme({ themeCss });
    for (const mode of modes) {
      const q = await quartz.newPage(css, mode);
      for (const p of pages) {
        await q.open(p);
        const file = path.join(outDir, `${safe(theme)}--${p}--${mode}.png`);
        await q.page.screenshot({ path: file });
        console.log(file);
      }
      await q.close();
    }
  }
} finally {
  await quartz.stop();
}
