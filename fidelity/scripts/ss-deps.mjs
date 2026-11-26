// Static Style Settings dependency analysis.
// For each theme: which settings only take effect under other settings (a
// class-toggle or a class-select option: "subsettings"), which class settings
// fight over the same property of the same element ("conflicts"), whether a
// fixture covers them, and a small set of fixtures that covers everything.
//
// Usage: node fidelity/scripts/ss-deps.mjs "Theme A,Theme B" [--fixture=ss.json] [--emit=dir]
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
const repo = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const { core, coreEntry } = await import(`${repo}/fidelity/harness/core.mjs`);
// The converter's own parsers.
const require = createRequire(
  path.isAbsolute(coreEntry) ? coreEntry : import.meta.url,
);
const postcss = require("postcss");
const safe = require("postcss-safe-parser");
const sp = require("postcss-selector-parser");
const sourceOpts = {
  cacheDir: `${repo}/fidelity/out/theme-cache`,
  cacheTtl: 30 * 864e5,
};
const arg = (k) =>
  process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3);
const themes = process.argv[2].split(",").map((s) => s.trim());
const fixture = arg("fixture")
  ? JSON.parse(fs.readFileSync(arg("fixture"), "utf8"))
  : null;
const optVal = (o) => (typeof o === "string" ? o : o?.value);
const VAR_TYPES = /^variable-/;
const APP_ONLY =
  /\.(cm-|markdown-source-view|is-live-preview|HyperMD|workspace-tab-header|workspace-ribbon|status-bar|titlebar|side-dock|mod-left-split|mod-right-split|mod-sidedock|nav-|tree-item|modal|vertical-tab|setting|prompt|suggestion|menu|tooltip|popover|graph-|canvas|view-header|inline-title|mobile|is-mobile|is-phone|is-tablet|community-|search-|bookmark|workspace-drawer|pdf-)/;

export function analyse(css) {
  const { sections } = core.parseStyleSettings(css);
  /** class → {key, select?: key} */
  const classes = new Map();
  /** var name → key */
  const vars = new Map();
  const settings = new Map(); // key → def
  for (const sec of sections)
    for (const st of sec.settings ?? []) {
      if (!st?.id) continue;
      const key = `${sec.id}@@${st.id}`;
      settings.set(key, st);
      if (st.type === "class-toggle") classes.set(st.id, { key });
      else if (st.type === "class-select")
        for (const o of st.options ?? []) {
          const v = optVal(o);
          if (v && v !== "none") classes.set(v, { key, select: key, value: v });
        }
      else if (VAR_TYPES.test(st.type ?? "")) vars.set(st.id, key);
    }
  const varKey = (name) => {
    if (vars.has(name)) return vars.get(name);
    // Colour formats add suffixed variables (--x-rgb, --x-h, --x-s, --x-l, --x-a…).
    const m = name.match(/^(.*)-(rgb|hsl|h|s|l|a|r|g|b|values?)$/);
    return m && vars.has(m[1]) ? vars.get(m[1]) : null;
  };

  // Every declaration with its gate: setting classes required (pos) / excluded (neg).
  const defs = new Map(); // custom prop → [{refs, pos, neg}]
  const uses = []; // {refs, pos, neg, prop, target}
  const classRules = []; // {pos, neg, prop, target}
  let root;
  try {
    root = postcss().process(css, { parser: safe }).root;
  } catch {
    return null;
  }
  root.walkRules((rule) => {
    if (rule.parent?.type === "atrule" && /keyframes/i.test(rule.parent.name))
      return;
    let sels = [];
    try {
      sp((s) => {
        s.each((sel) => {
          const pos = new Set();
          const neg = new Set();
          sel.walkClasses((c) => {
            if (!classes.has(c.value)) return;
            let inNot = false;
            for (let p = c.parent; p; p = p.parent)
              if (p.type === "pseudo" && /^:not$/i.test(p.value)) inNot = true;
            (inNot ? neg : pos).add(c.value);
          });
          // The element, without the setting classes: what two settings would both style.
          const bare = sel.clone();
          bare.walkClasses((c) => {
            if (classes.has(c.value)) c.remove();
          });
          const target = String(bare).replace(/\s+/g, " ").trim();
          // Editor and app chrome: no effect on the reading view.
          if (APP_ONLY.test(target)) return;
          sels.push({ pos, neg, target });
        });
      }).processSync(rule.selector);
    } catch {
      return;
    }
    rule.each((d) => {
      if (d.type !== "decl") return;
      const refs = [...d.value.matchAll(/var\(\s*(--[\w-]+)/g)].map((m) =>
        m[1].slice(2),
      );
      for (const s of sels) {
        if (d.prop.startsWith("--")) {
          const name = d.prop.slice(2);
          if (!defs.has(name)) defs.set(name, []);
          defs.get(name).push({ refs, pos: s.pos, neg: s.neg });
        } else {
          if (refs.length)
            uses.push({
              refs,
              pos: s.pos,
              neg: s.neg,
              prop: d.prop,
              target: s.target,
            });
          if (s.pos.size)
            classRules.push({
              pos: s.pos,
              neg: s.neg,
              prop: d.prop,
              target: s.target,
            });
        }
      }
    });
  });

  // Where each variable ends up in a real property, with the gates along the way.
  /** var name → [{pos, neg}] */
  const reach = new Map();
  const union = (a, b) => new Set([...a, ...b]);
  const gk = (g) =>
    `${[...g.pos].sort().join(".")}|${[...g.neg].sort().join(".")}`;
  // Reverse indexes: variable → uses, variable → custom properties defined from it.
  const usesOf = new Map();
  for (const u of uses)
    for (const r of new Set(u.refs)) {
      if (!usesOf.has(r)) usesOf.set(r, []);
      usesOf.get(r).push(u);
    }
  const defsFrom = new Map();
  for (const [def, list] of defs)
    for (const d of list)
      for (const r of new Set(d.refs)) {
        if (!defsFrom.has(r)) defsFrom.set(r, []);
        defsFrom.get(r).push({ def, ...d });
      }
  const inProgress = new Set();
  const reachOf = (name) => {
    if (reach.has(name)) return reach.get(name);
    if (inProgress.has(name)) return [];
    inProgress.add(name);
    const out = new Map();
    let free = false; // reaches a property ungated: always takes effect
    const add = (g) => {
      if (free) return;
      if (!g.pos.size && !g.neg.size) {
        free = true;
        out.clear();
        out.set("|", g);
        return;
      }
      // Keep minimal gates only.
      for (const h of out.values())
        if (
          [...h.pos].every((c) => g.pos.has(c)) &&
          [...h.neg].every((c) => g.neg.has(c))
        )
          return;
      for (const [k, h] of out)
        if (
          [...g.pos].every((c) => h.pos.has(c)) &&
          [...g.neg].every((c) => h.neg.has(c))
        )
          out.delete(k);
      if (out.size < 256) out.set(gk(g), g);
    };
    for (const u of usesOf.get(name) ?? []) add({ pos: u.pos, neg: u.neg });
    for (const d of defsFrom.get(name) ?? [])
      for (const r of reachOf(d.def))
        add({ pos: union(d.pos, r.pos), neg: union(d.neg, r.neg) });
    inProgress.delete(name);
    const list = [...out.values()];
    reach.set(name, list);
    return list;
  };

  const report = {
    settings: settings.size,
    gated: [],
    dead: [],
    conflicts: [],
    targets: [],
  };
  const allNames = [
    ...new Set([...defs.keys(), ...usesOf.keys(), ...defsFrom.keys()]),
  ];
  for (const [name, key] of vars) {
    // The setting's own variable and its format variants.
    const names = [
      name,
      ...allNames.filter((n) => n !== name && varKey(n) === key),
    ];
    const r = [...new Set(names)].flatMap((n) => reachOf(n));
    if (!r.length) {
      report.dead.push(key);
      continue;
    }
    // Ungated somewhere: always takes effect.
    if (r.some((g) => !g.pos.size)) {
      report.targets.push({ key, gates: [{ pos: new Set(), neg: new Set() }] });
      continue;
    }
    // Unique gate sets.
    const gates = [...new Map(r.map((g) => [gk(g), g])).values()];
    report.gated.push({ key, gates });
    report.targets.push({ key, gates });
  }
  // Class settings: their rules' gates (a toggle nested under a select…).
  const byClass = new Map();
  for (const cr of classRules)
    for (const c of cr.pos) {
      if (!byClass.has(c)) byClass.set(c, []);
      byClass.get(c).push(cr);
    }
  for (const [c, info] of classes) {
    const rules = byClass.get(c) ?? [];
    if (!rules.length) {
      report.dead.push(info.select ? `${info.key}=${c}` : info.key);
      continue;
    }
    const gates = [];
    for (const r of rules)
      if (!gates.some((h) => [...h.pos].join() === [...r.pos].join()))
        gates.push({ pos: r.pos, neg: r.neg });
    report.targets.push({
      key: info.select ? `${info.key}=${c}` : info.key,
      gates,
      cls: c,
    });
  }
  // Conflicts: two class settings (not options of one select) styling the same
  // property of the same element — together, one hides the other.
  const seen = new Set();
  const byTarget = new Map();
  for (const cr of classRules) {
    const k = `${cr.target}|${cr.prop}`;
    if (!byTarget.has(k)) byTarget.set(k, new Set());
    for (const c of cr.pos) byTarget.get(k).add(c);
  }
  for (const [k, cs] of byTarget) {
    const list = [...cs];
    for (let i = 0; i < list.length; i++)
      for (let j = i + 1; j < list.length; j++) {
        const a = classes.get(list[i]);
        const b = classes.get(list[j]);
        if (a.select && a.select === b.select) continue;
        if (a.key === b.key) continue;
        const pair = [list[i], list[j]].sort().join(" ⟷ ");
        if (!seen.has(pair)) {
          seen.add(pair);
          report.conflicts.push({ pair, at: k });
        }
      }
  }
  report.classes = classes;
  report.settingsMap = settings;
  return report;
}

/** Classes a fixture turns on. */
function activeClasses(fx, rep) {
  const on = new Set();
  for (const [c, info] of rep.classes) {
    const v = fx[info.key];
    if (info.select ? v === c : v === true) on.add(c);
  }
  // Toggles default-on when absent from the export.
  for (const [c, info] of rep.classes)
    if (
      !info.select &&
      !(info.key in fx) &&
      rep.settingsMap.get(info.key)?.default === true
    )
      on.add(c);
  return on;
}
const satisfied = (g, on) =>
  [...g.pos].every((c) => on.has(c)) && ![...g.neg].some((c) => on.has(c));

/**
 * Greedy covering: configurations (sets of classes) such that every target has
 * a satisfied gate in one of them, no configuration turns on two options of
 * one select, and conflicting classes are never on together.
 */
function cover(rep) {
  const conflict = new Set(rep.conflicts.map((c) => c.pair));
  const clash = (a, b) => conflict.has([a, b].sort().join(" ⟷ "));
  const sel = (c) => rep.classes.get(c)?.select;
  const configs = [];
  let todo = rep.targets.filter((t) =>
    t.gates.some((g) => g.pos.size || t.cls),
  );
  // Ungated variables are covered by any configuration.
  while (todo.length) {
    const on = new Set();
    const off = new Set();
    const can = (g, extra) => {
      const want = [...g.pos, ...(extra ? [extra] : [])];
      for (const c of want) {
        if (off.has(c)) return false;
        for (const o of on)
          if (o !== c && ((sel(o) && sel(o) === sel(c)) || clash(o, c)))
            return false;
      }
      return ![...g.neg].some((c) => on.has(c) || want.includes(c));
    };
    const rest = [];
    for (const t of todo) {
      const g = t.gates.find((g) => can(g, t.cls));
      if (!g) {
        rest.push(t);
        continue;
      }
      for (const c of [...g.pos, ...(t.cls ? [t.cls] : [])]) on.add(c);
      for (const c of g.neg) off.add(c);
    }
    if (rest.length === todo.length) break; // unsatisfiable gates (contradictory selectors)
    configs.push(on);
    todo = rest;
  }
  return { configs, unsatisfiable: todo };
}

const rows = [];
const emit = arg("emit");
for (const t of themes) {
  let css;
  try {
    css = (await core.resolveTheme(t, sourceOpts)).css;
  } catch {
    continue;
  }
  const rep = analyse(css);
  if (!rep || !rep.settings) continue;
  const { configs, unsatisfiable } = cover(rep);
  let uncovered = null;
  if (fixture) {
    const on = activeClasses(fixture, rep);
    uncovered = rep.targets
      .filter((x) => !x.gates.some((g) => satisfied(g, on)))
      .map((x) => x.key);
  }
  rows.push({
    t,
    settings: rep.settings,
    gated: rep.gated.length,
    dead: rep.dead.length,
    conflicts: rep.conflicts.length,
    configs: configs.length,
    unsat: unsatisfiable.length,
    uncovered,
  });
  if (emit) {
    fs.mkdirSync(emit, { recursive: true });
    fs.writeFileSync(
      `${emit}/${t.replace(/[^\w.-]+/g, "_")}.json`,
      JSON.stringify(
        {
          gated: rep.gated.map((g) => ({
            key: g.key,
            gates: g.gates.map((x) => ({ on: [...x.pos], off: [...x.neg] })),
          })),
          conflicts: rep.conflicts,
          dead: rep.dead,
          configs: configs.map((c) => [...c]),
          uncovered,
        },
        null,
        1,
      ),
    );
  }
}
console.log(
  "theme".padEnd(22),
  "settings gated dead conflicts configs unsat",
  fixture ? "uncovered-by-fixture" : "",
);
for (const r of rows)
  console.log(
    r.t.padEnd(22),
    String(r.settings).padStart(8),
    String(r.gated).padStart(5),
    String(r.dead).padStart(4),
    String(r.conflicts).padStart(9),
    String(r.configs).padStart(7),
    String(r.unsat).padStart(5),
    fixture
      ? `${r.uncovered.length}  ${r.uncovered.slice(0, 4).join(", ")}`
      : "",
  );
