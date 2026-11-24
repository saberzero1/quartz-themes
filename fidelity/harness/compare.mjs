/**
 * Compare two probe measurements (Obsidian = reference, Quartz = candidate).
 */

const COLOR_PROPS = /color$/;
const SIZE_PROPS = /(width|size|spacing|radius|height|padding.*|margin.*|gap)$/;
export const DELTA_E_OK = 6; // ~noticeable at a glance; < 2.3 is a JND

function parseColor(s) {
  if (!s) return null;
  // color(srgb r g b / a): channels 0–1.
  const srgb = s.match(/color\(srgb\s+([^)]+)\)/);
  if (srgb) {
    const p = srgb[1].split(/[ /]+/).filter(Boolean).map(parseFloat);
    return {
      r: p[0] * 255,
      g: p[1] * 255,
      b: p[2] * 255,
      a: p.length > 3 ? p[3] : 1,
    };
  }
  const m = s.match(/(rgba?|oklch|oklab)\(([^)]+)\)/);
  if (!m) return null;
  const num = (x) =>
    x === "none" ? 0 : x.endsWith("%") ? parseFloat(x) / 100 : parseFloat(x);
  const p = m[2].split(/[ ,/]+/).filter(Boolean);
  const a = p.length > 3 ? num(p[3]) : 1;
  if (m[1].startsWith("rgb")) return { r: +p[0], g: +p[1], b: +p[2], a };
  // OKLCH/OKLab → linear sRGB → sRGB (Obsidian 1.15 computes callout colours in OKLCH).
  let L = num(p[0]),
    A,
    B;
  if (m[1] === "oklch") {
    const C = num(p[1]),
      h = (num(p[2]) * Math.PI) / 180;
    A = C * Math.cos(h);
    B = C * Math.sin(h);
  } else {
    A = num(p[1]);
    B = num(p[2]);
  }
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const mm = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const ss = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  const lin = [
    4.0767416621 * l - 3.3077115913 * mm + 0.2309699292 * ss,
    -1.2684380046 * l + 2.6097574011 * mm - 0.3413193965 * ss,
    -0.0041960863 * l - 0.7034186147 * mm + 1.707614701 * ss,
  ];
  const enc = (v) =>
    255 *
    Math.min(
      1,
      Math.max(0, v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055),
    );
  return { r: enc(lin[0]), g: enc(lin[1]), b: enc(lin[2]), a };
}

function over(c, bg) {
  if (!bg) return c;
  return {
    r: c.r * c.a + bg.r * (1 - c.a),
    g: c.g * c.a + bg.g * (1 - c.a),
    b: c.b * c.a + bg.b * (1 - c.a),
    a: 1,
  };
}

function toLab({ r, g, b }) {
  const lin = (v) =>
    (v /= 255) <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  const [R, G, B] = [lin(r), lin(g), lin(b)];
  const X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
  const Y = R * 0.2126 + G * 0.7152 + B * 0.0722;
  const Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  return [116 * f(Y) - 16, 500 * (f(X) - f(Y)), 200 * (f(Y) - f(Z))];
}

export function deltaE(a, b) {
  const [l1, a1, b1] = toLab(a);
  const [l2, a2, b2] = toLab(b);
  return Math.hypot(l1 - l2, a1 - a2, b1 - b2);
}

/** First real family; Obsidian's stacks start with "??" placeholders (unset CJK fonts). */
const firstFamily = (s) =>
  (s ?? "")
    .split(",")
    .map((f) =>
      f
        .trim()
        .replace(/^["']|["']$/g, "")
        .toLowerCase(),
    )
    .find((f) => f && !/^\?+$/.test(f)) ?? "";

/**
 * @returns {{match: boolean, detail?: string}}
 */
export function compareProp(key, ref, cand, refProbe, candProbe) {
  // "::before color" → pseudo "::before", property "color"
  const [, pseudo, prop] = key.match(/^(?:(::?[\w-]+) )?(.+)$/);
  if (pseudo === "::before" || pseudo === "::after") {
    // A pseudo-element without content draws nothing: its other properties don't matter.
    const empty = (p) =>
      /^(none|normal|)$/.test(p?.[`${pseudo} content`] ?? "none");
    if (prop !== "content" && empty(refProbe) && empty(candProbe))
      return { match: true };
    if (prop === "content") {
      const norm = (v) => (/^(none|normal|)$/.test(v ?? "") ? "none" : v);
      return { match: norm(ref) === norm(cand), detail: `${ref} vs ${cand}` };
    }
  }
  if (prop.startsWith("$") && !COLOR_PROPS.test(prop)) {
    // Geometry in px: within 2px or 15%.
    const a = parseFloat(ref);
    const b = parseFloat(cand);
    if (isNaN(a) || isNaN(b))
      return { match: ref === cand, detail: `${ref} vs ${cand}` };
    return {
      match: Math.abs(a - b) <= Math.max(2, 0.15 * Math.abs(a)),
      detail: `${ref} vs ${cand}`,
    };
  }
  if (prop === "opacity")
    return {
      match: Math.abs(+ref - +cand) <= 0.05,
      detail: `${ref} vs ${cand}`,
    };
  if (COLOR_PROPS.test(prop)) {
    // Border colours are irrelevant when there's no border.
    const side = !pseudo && prop.match(/^border-(\w+)-color$/)?.[1];
    if (side) {
      const w1 = parseFloat(refProbe[`border-${side}-width`] ?? "1");
      const w2 = parseFloat(candProbe[`border-${side}-width`] ?? "1");
      const s1 = refProbe[`border-${side}-style`];
      const s2 = candProbe[`border-${side}-style`];
      if ((w1 === 0 || s1 === "none") && (w2 === 0 || s2 === "none"))
        return { match: true };
    }
    const bg1 = parseColor(refProbe["$effective-bg"]);
    const bg2 = parseColor(candProbe["$effective-bg"]);
    const c1 = parseColor(ref);
    const c2 = parseColor(cand);
    if (!c1 || !c2) return { match: ref === cand, detail: `${ref} vs ${cand}` };
    // For background-color, compare what the eye sees: the effective background.
    const e1 = prop === "background-color" ? bg1 : over(c1, bg1);
    const e2 = prop === "background-color" ? bg2 : over(c2, bg2);
    const d = deltaE(e1, e2);
    return { match: d <= DELTA_E_OK, detail: `ΔE ${d.toFixed(1)}` };
  }
  if (prop === "font-family")
    return {
      match: firstFamily(ref) === firstFamily(cand),
      detail: `${firstFamily(ref)} vs ${firstFamily(cand)}`,
    };
  if (prop === "line-height") {
    // Compare as a ratio of font-size.
    const r1 = parseFloat(ref) / parseFloat(refProbe["font-size"] ?? "16");
    const r2 = parseFloat(cand) / parseFloat(candProbe["font-size"] ?? "16");
    if (isNaN(r1) || isNaN(r2)) return { match: ref === cand };
    return {
      match: Math.abs(r1 - r2) <= 0.1,
      detail: `${r1.toFixed(2)} vs ${r2.toFixed(2)}`,
    };
  }
  if (SIZE_PROPS.test(prop)) {
    const a = parseFloat(ref);
    const b = parseFloat(cand);
    if (isNaN(a) || isNaN(b))
      return { match: ref === cand, detail: `${ref} vs ${cand}` };
    return {
      match: Math.abs(a - b) <= Math.max(1, 0.1 * Math.abs(a)),
      detail: `${ref} vs ${cand}`,
    };
  }
  if (prop === "font-weight")
    return { match: Math.abs(+ref - +cand) < 150, detail: `${ref} vs ${cand}` };
  if (prop === "font-style") {
    // Obsidian's Electron serialises a computed `oblique` as `italic`, the
    // harness's Chromium as `oblique`: the same slanted text.
    const slant = (v) => v.replace(/^oblique( 14deg)?$/, "italic");
    return { match: slant(ref) === slant(cand), detail: `${ref} vs ${cand}` };
  }
  return { match: ref === cand, detail: `${ref} vs ${cand}` };
}

/**
 * @param {Record<string, object|null>} ref Obsidian measurements, by probe id
 * @param {Record<string, object|null>} cand Quartz measurements, by probe id
 * @param {import("./probes.mjs").PROBES} probes
 */
export function compareMeasurements(ref, cand, probes) {
  const perProbe = {};
  const perAspect = {};
  let ok = 0;
  let total = 0;
  for (const p of probes) {
    const r = ref[p.id];
    const c = cand[p.id];
    if (!r) {
      perProbe[p.id] = { status: "no-reference" };
      continue;
    }
    const agg = (perAspect[p.aspect] ??= { ok: 0, total: 0 });
    if (!c) {
      perProbe[p.id] = { status: "missing-in-quartz" };
      agg.total += p.props.length;
      total += p.props.length;
      continue;
    }
    const diffs = {};
    let pOk = 0;
    for (const prop of p.props) {
      const res = compareProp(prop, r[prop], c[prop], r, c);
      if (res.match) pOk++;
      else
        diffs[prop] = {
          obsidian: r[prop],
          quartz: c[prop],
          detail: res.detail,
        };
    }
    perProbe[p.id] = { status: "ok", score: pOk / p.props.length, diffs };
    agg.ok += pOk;
    agg.total += p.props.length;
    ok += pOk;
    total += p.props.length;
  }
  for (const a of Object.values(perAspect))
    a.score = a.total ? a.ok / a.total : null;
  return { score: total ? ok / total : null, perAspect, perProbe };
}
