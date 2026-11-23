#!/usr/bin/env node
/**
 * Fidelity harness: render the same notes in real Obsidian (reference) and in
 * Quartz with converted CSS (candidate), measure paired elements, and score
 * how well each theme transfers.
 *
 *   e2e-headless node fidelity/scripts/fidelity.mjs --themes="Minimal,Things" [--modes=dark,light]
 *   node fidelity/scripts/fidelity.mjs --themes=... --cached     # reuse Obsidian references
 *   --all                     every theme in Obsidian's community registry
 *   --shard=1/8               CI sharding
 *
 * Themes are resolved like a site resolves them (@quartz-themes/core's sources:
 * registry name → downloaded theme.css, cached in fidelity/out/theme-cache);
 * Obsidian gets exactly the same CSS.
 *
 * Obsidian references are cached in fidelity/out/fidelity/ref keyed by
 * theme.css hash + Obsidian version, so only changed themes are re-measured.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PROBES, NOTES, measureInPage } from "../harness/probes.mjs";
import { compareMeasurements } from "../harness/compare.mjs";
import { startQuartz } from "../harness/quartz.mjs";

const repo = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);

// Measure exactly what sites get: the converter shipped in @quartz-themes/core.
const { core } = await import("../harness/core.mjs");
const { convertTheme } = core;
const arg = (k, d) =>
  process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;
const flag = (k) => process.argv.includes(`--${k}`);
const outDir = path.join(repo, "fidelity/out/fidelity");
// --style-settings=export.json: applied identically to Obsidian (plugin data.json) and the converter.
const ssFile = arg("style-settings", "");
const userStyleSettings = ssFile
  ? JSON.parse(fs.readFileSync(path.resolve(ssFile), "utf8"))
  : {};
const ssTag = ssFile
  ? `ss-${crypto.createHash("sha256").update(JSON.stringify(userStyleSettings)).digest("hex").slice(0, 8)}`
  : "";
const refDir = path.join(outDir, ssTag ? `ref-${ssTag}` : "ref");
fs.mkdirSync(refDir, { recursive: true });
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
const modesWanted = arg("modes", "dark,light").split(",");
const cachedOnly = flag("cached");
const includeDefault = !flag("no-default");

const hash = (s) =>
  crypto.createHash("sha256").update(s).digest("hex").slice(0, 16);
// References are only valid for the probe set they were measured with.
const PROBES_HASH = hash(
  JSON.stringify(
    PROBES.map((p) => [
      p.id,
      p.obsidian,
      p.props,
      p.obsidianProps,
      p.obsidianScope,
    ]),
  ) + String(measureInPage), // how they're measured, too
);

// Resolve every theme once (download or cache), a few at a time.
const resolved = new Map([["", { name: "", css: "", modes: undefined }]]);
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
themes = themes.filter((t) => resolved.has(t));

/** "" = Obsidian's default theme (calibrates the app.css base layer). */
const entries = [...(includeDefault ? [""] : []), ...themes];
const themeCss = (t) => resolved.get(t)?.css ?? "";
const themeModes = (t) => {
  const known = resolved.get(t)?.modes;
  return modesWanted.filter((m) => !known || known.includes(m));
};

const refKey = (t, mode, version) =>
  path.join(
    refDir,
    `${(t || "_default").replace(/[^\w.-]+/g, "_")}--${mode}--${hash(themeCss(t) + version)}.json`,
  );
const findRef = (t, mode) => {
  const prefix = `${(t || "_default").replace(/[^\w.-]+/g, "_")}--${mode}--`;
  const f = fs.readdirSync(refDir).find((f) => f.startsWith(prefix));
  return f ? JSON.parse(fs.readFileSync(path.join(refDir, f), "utf8")) : null;
};

// ---- 1. Obsidian references ------------------------------------------------
const refs = new Map();
const needRef = [];
for (const t of entries)
  for (const m of themeModes(t)) {
    const r = findRef(t, m);
    if (
      r &&
      (cachedOnly ||
        (r.themeHash === hash(themeCss(t)) && r.probesHash === PROBES_HASH))
    )
      refs.set(`${t}|${m}`, r);
    else needRef.push([t, m]);
  }
if (needRef.length && cachedOnly)
  console.warn(
    `--cached: no reference for ${needRef.length} theme/mode pairs; they will be skipped`,
  );
if (needRef.length && !cachedOnly) {
  const { startObsidian, setTheme, openNote, measureObsidian } =
    await import("../harness/obsidian.mjs");
  const vaultThemes = [...new Set(needRef.map(([t]) => t).filter(Boolean))].map(
    (t) => ({ name: t, css: themeCss(t) }),
  );
  const t0 = performance.now();
  const obs = await startObsidian({
    repo,
    themes: vaultThemes,
    styleSettings: userStyleSettings,
  });
  console.error(
    `obsidian ${obs.version} up in ${((performance.now() - t0) / 1000).toFixed(1)}s`,
  );
  try {
    for (const [t, m] of needRef) {
      const t1 = performance.now();
      const measured = {};
      try {
        await setTheme(obs.page, t, m);
        for (const note of NOTES) {
          await openNote(obs.page, note);
          Object.assign(
            measured,
            await measureObsidian(
              obs.page,
              PROBES.filter((p) => p.note === note),
            ),
          );
        }
      } catch (e) {
        console.error(
          `ref ${t} ${m} FAILED: ${String(e.message ?? e).split("\n")[0]}`,
        );
        continue;
      }
      const ref = {
        theme: t,
        mode: m,
        obsidian: obs.version,
        themeHash: hash(themeCss(t)),
        probesHash: PROBES_HASH,
        measured,
      };
      // Drop stale references for this theme/mode, then write.
      const prefix = `${(t || "_default").replace(/[^\w.-]+/g, "_")}--${m}--`;
      for (const f of fs.readdirSync(refDir))
        if (f.startsWith(prefix)) fs.rmSync(path.join(refDir, f));
      fs.writeFileSync(refKey(t, m, obs.version), JSON.stringify(ref));
      refs.set(`${t}|${m}`, ref);
      console.error(
        `ref ${t || "(default)"} ${m} ${((performance.now() - t1) / 1000).toFixed(1)}s`,
      );
    }
  } finally {
    await obs.stop();
  }
}

// ---- 2. Quartz candidates + comparison -------------------------------------
// The specimen site: fidelity/out/site (`just build-site`, CI) or the dev-mode build.
const siteDir = path.resolve(
  arg("site", "") ||
    [
      path.join(repo, "fidelity/out/site"),
      path.join(repo, "../dev-mode/.dev/sites/dir-site"),
    ].find((d) => fs.existsSync(path.join(d, "index.html"))),
);
console.error(`quartz site: ${siteDir}`);
const quartz = await startQuartz({ site: siteDir });
const results = {};
const concurrency = Number(arg("concurrency", "6"));
async function scoreTheme(t) {
  let css;
  try {
    css = convertTheme({
      themeCss: themeCss(t),
      styleSettings: userStyleSettings,
    });
  } catch (e) {
    console.error(
      `convert ${t} FAILED: ${String(e.message ?? e).split("\n")[0]}`,
    );
    return;
  }
  if (!css) {
    console.error(`skip ${t}: no candidate css`);
    return;
  }
  for (const m of themeModes(t)) {
    const ref = refs.get(`${t}|${m}`);
    if (!ref) continue;
    const q = await quartz.newPage(css, m);
    const measured = {};
    try {
      for (const note of NOTES) {
        await q.open(note);
        Object.assign(
          measured,
          await q.measure(PROBES.filter((p) => p.note === note)),
        );
      }
    } catch (e) {
      console.error(
        `quartz ${t} ${m} FAILED: ${String(e.message ?? e).split("\n")[0]}`,
      );
      continue;
    } finally {
      await q.close();
    }
    results[`${t || "(default)"}|${m}`] = {
      theme: t || "(default)",
      mode: m,
      ...compareMeasurements(ref.measured, measured, PROBES),
      quartz: measured,
      obsidian: ref.measured,
    };
  }
}
try {
  const queue = [...entries];
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (queue.length) await scoreTheme(queue.shift());
    }),
  );
} finally {
  await quartz.stop();
}

// ---- 3. Report -------------------------------------------------------------
const rows = Object.values(results);
const aspects = [...new Set(PROBES.map((p) => p.aspect))];
const pct = (x) =>
  x == null ? "  -  " : `${(x * 100).toFixed(0).padStart(3)}%`;
console.log(
  `${"theme".padEnd(28)} mode   score  ${aspects.map((a) => a.slice(0, 8).padStart(8)).join(" ")}`,
);
for (const r of rows)
  console.log(
    `${r.theme.slice(0, 28).padEnd(28)} ${r.mode.padEnd(5)}  ${pct(r.score)}  ${aspects.map((a) => pct(r.perAspect[a]?.score).padStart(8)).join(" ")}`,
  );
const scored = rows.filter((r) => r.score != null);
if (scored.length)
  console.log(
    `\nmean score over ${scored.length} theme/modes: ${pct(scored.reduce((a, r) => a + r.score, 0) / scored.length)}`,
  );
const file = path.join(
  outDir,
  `${ssTag ? ssTag + "-" : ""}${shardN > 1 ? `report-${shardI}of${shardN}` : "report"}.json`,
);
fs.writeFileSync(
  file,
  JSON.stringify({ generated: new Date().toISOString(), results }, null, 1),
);
console.error(`wrote ${file}`);
