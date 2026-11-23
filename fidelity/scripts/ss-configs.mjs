// From ss-deps.mjs's covering configurations, write one Style Settings export per
// configuration index: every variable off its default (as gen-fixture.mjs),
// class settings exactly as the configuration says. Themes with fewer
// configurations sit out the later ones.
// Usage: node fidelity/scripts/ss-configs.mjs depsDir outDir "Theme A,Theme B"
// Then, per configuration: fidelity.mjs --themes="$(cat outDir/ss-config-NN.themes)"
//   --style-settings=outDir/ss-config-NN.json --no-default
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const repo = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const { core } = await import(`${repo}/fidelity/harness/core.mjs`);
const sourceOpts = { cacheDir: `${repo}/fidelity/out/theme-cache`, cacheTtl: 30 * 864e5 };
const [depsDir, outDir, list] = process.argv.slice(2);
const themes = list.split(",").map((s) => s.trim());
const PALETTE = ["#d7263d", "#1b998b", "#f46036", "#2e86ab", "#c5d86d", "#8e44ad", "#e4b363", "#3d5a80"];
const optVal = (o) => (typeof o === "string" ? o : o?.value);

const runs = []; // index → {fixture, themes}
for (const t of themes) {
  const f = `${depsDir}/${t.replace(/[^\w.-]+/g, "_")}.json`;
  if (!fs.existsSync(f)) continue;
  const { configs } = JSON.parse(fs.readFileSync(f, "utf8"));
  const sets = configs.length ? configs : [[]];
  const { sections } = core.parseStyleSettings((await core.resolveTheme(t, sourceOpts)).css);
  sets.forEach((on, i) => {
    const active = new Set(on);
    runs[i] ??= { fixture: {}, themes: [] };
    const exp = runs[i].fixture;
    runs[i].themes.push(t);
    let pi = i; // shift colours per run so values differ between runs too
    const color = () => PALETTE[pi++ % PALETTE.length];
    for (const sec of sections)
      for (const st of sec.settings ?? []) {
        if (!st?.id) continue;
        const k = `${sec.id}@@${st.id}`;
        switch (st.type) {
          case "class-toggle":
            exp[k] = active.has(st.id);
            break;
          case "class-select": {
            const vals = (st.options ?? []).map(optVal).filter(Boolean);
            const pick = vals.find((v) => active.has(v));
            exp[k] = pick ?? (st.default || "none"); // Style Settings stores "none"; "" makes classList.add throw and stops all later classes
            break;
          }
          case "variable-select": {
            const vals = (st.options ?? []).map(optVal).filter((v) => v != null);
            const other = vals.filter((v) => v !== st.default);
            if (other.length) exp[k] = other[i % other.length];
            break;
          }
          case "variable-color":
            exp[k] = color();
            break;
          case "variable-themed-color":
            exp[`${k}@@light`] = color();
            exp[`${k}@@dark`] = color();
            break;
          case "variable-number":
          case "variable-number-slider": {
            const d = Number(st.default ?? 0);
            let v = d === 0 ? (st.max ?? 10) : Math.round(d * 1.5 * 100) / 100;
            if (st.max != null) v = Math.min(v, st.max);
            if (st.min != null) v = Math.max(v, st.min);
            if (v !== d) exp[k] = v;
            break;
          }
          default:
            break;
        }
      }
  });
}
fs.mkdirSync(outDir, { recursive: true });
runs.forEach((r, i) => {
  fs.writeFileSync(`${outDir}/ss-config-${String(i).padStart(2, "0")}.json`, JSON.stringify(r.fixture, null, 1));
  fs.writeFileSync(`${outDir}/ss-config-${String(i).padStart(2, "0")}.themes`, r.themes.join(","));
});
console.log(runs.map((r, i) => `${i}: ${r.themes.length} themes`).join("\n"));
