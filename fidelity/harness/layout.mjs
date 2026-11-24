/**
 * Layout audit: what the fidelity probes don't cover. Fidelity compares the
 * styles of note elements with Obsidian; this checks that a theme leaves
 * Quartz's page layout working: no sideways scrolling, gutters and columns
 * where Quartz puts them, chrome (header, sidebars, search, explorer) visible
 * and on screen, nothing painted over the note.
 *
 * Each theme is compared with two references measured the same way:
 *   "(default)"  Obsidian's default theme through @quartz-themes/core
 *   "(quartz)"   plain Quartz, no theme CSS at all
 */

/** Phone, tablet (Quartz's 800–1200px layout), desktop. */
export const WIDTHS = [375, 1000, 1280];
export const heightFor = (w) => (w < 800 ? 800 : w < 1200 ? 900 : 1000);
export const REFERENCES = ["(default)", "(quartz)"];

/** Chrome elements, by Quartz component. */
export const CHROME = {
  pageTitle: ".page-title",
  articleTitle: "h1.article-title",
  search: ".search-button",
  darkmode: ".darkmode",
  explorer: ".explorer",
  explorerToggle: ".explorer .mobile-explorer",
  toc: ".toc",
  graph: ".graph",
  breadcrumbs: ".breadcrumb-container",
  footer: "footer",
  leftSidebar: ".left.sidebar",
  rightSidebar: ".right.sidebar",
  contentMeta: ".content-meta",
};

/** Runs in the page (Playwright `page.evaluate`): raw layout metrics. */
export function measureLayout(chrome) {
  const vw = innerWidth;
  const de = document.documentElement;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const cx = canvas.getContext("2d", { willReadFrequently: true });
  // Any CSS colour (oklch, color-mix, …) → sRGB via the canvas.
  const rgba = (c) => {
    cx.clearRect(0, 0, 1, 1);
    cx.fillStyle = "#000";
    cx.fillStyle = c;
    cx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = cx.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
  };
  const visible = (el) => {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return false;
    for (let e = el; e; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.display === "none" || cs.visibility === "hidden") return false;
      if (Number(cs.opacity) < 0.05) return false;
    }
    return true;
  };
  const bgOf = (el) => {
    const layers = [];
    for (let e = el; e; e = e.parentElement) {
      const c = rgba(getComputedStyle(e).backgroundColor);
      if (c[3] > 0) layers.push(c);
      if (c[3] >= 1) break;
    }
    let acc = [255, 255, 255];
    for (const [r, g, b, a] of layers.reverse())
      acc = acc.map((v, i) => [r, g, b][i] * a + v * (1 - a));
    return acc;
  };
  const lum = (rgb) => {
    const [r, g, b] = rgb.map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  // WCAG contrast of an element's text; null for gradient/clipped text.
  const contrast = (el) => {
    if (!el) return null;
    const cs = getComputedStyle(el);
    if (rgba(cs.webkitTextFillColor || cs.color)[3] === 0) return null;
    const bg = bgOf(el);
    const [r, g, b, a] = rgba(cs.color);
    const fg = [r, g, b].map((v, i) => v * a + bg[i] * (1 - a));
    const [l1, l2] = [lum(fg), lum(bg)].sort((x, y) => y - x);
    return Math.round(((l1 + 0.05) / (l2 + 0.05)) * 100) / 100;
  };
  const rect = (el) => {
    const r = el.getBoundingClientRect();
    return {
      x: Math.round(r.left),
      y: Math.round(r.top + scrollY),
      w: Math.round(r.width),
      h: Math.round(r.height),
    };
  };
  const label = (el) =>
    el.tagName.toLowerCase() +
    (typeof el.className === "string" && el.className
      ? "." + el.className.trim().split(/\s+/)[0]
      : "");

  // The viewport takes the root's overflow, else <body>'s: clipped or hidden,
  // the reader can't scroll to what overhangs it.
  const viewportX =
    getComputedStyle(de).overflowX !== "visible"
      ? getComputedStyle(de).overflowX
      : getComputedStyle(document.body).overflowX;
  const m = {
    vw,
    hOverflow: /^(hidden|clip)$/.test(viewportX)
      ? 0
      : Math.max(de.scrollWidth, document.body.scrollWidth) - vw,
    pageH: de.scrollHeight,
  };
  const root =
    document.querySelector("article .markdown-preview-view") ??
    document.querySelector(".markdown-preview-view");
  if (!root) return { ...m, noRoot: true };
  const rr = root.getBoundingClientRect();
  const rcs = getComputedStyle(root);
  const px = (p) => parseFloat(rcs[p]);
  m.root = {
    ...rect(root),
    cw: root.clientWidth,
    border: px("borderLeftWidth") + px("borderRightWidth"),
    pad: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"].map(px),
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"].map(px),
  };

  // Top-level blocks: hidden ones, and any reaching outside the column.
  const kids = [...root.children];
  const shown = kids.filter(visible);
  m.blocks = kids.length;
  m.hiddenBlocks = kids.length - shown.length;
  const inner = rr.left + px("borderLeftWidth") + px("paddingLeft");
  const innerW = root.clientWidth - px("paddingLeft") - px("paddingRight");
  let outL = 0,
    outR = 0,
    outEl = null;
  for (const k of shown) {
    const r = k.getBoundingClientRect();
    const l = inner - r.left,
      rt = r.right - (inner + innerW);
    if (Math.max(l, rt) > Math.max(outL, outR)) outEl = label(k);
    outL = Math.max(outL, l);
    outR = Math.max(outR, rt);
  }
  m.blockOut = { l: Math.round(outL), r: Math.round(outR), el: outEl };

  // Content past the viewport edge that no scroll container clips.
  const clipped = (el) => {
    for (
      let p = el.parentElement;
      p && p !== document.body;
      p = p.parentElement
    )
      // Any clipping ancestor that fits on screen (cells inside a scrolling
      // table wrapper clip too, but extend past the edge themselves).
      if (getComputedStyle(p).overflowX !== "visible") {
        const pr = p.getBoundingClientRect();
        if (pr.left >= -2 && pr.right <= vw + 2) return true;
      }
    return false;
  };
  // Wholly off-canvas elements (the closed phone explorer drawer) don't count.
  const off = [...document.body.querySelectorAll("*")].filter((el) => {
    const r = el.getBoundingClientRect();
    return (
      r.width >= 1 &&
      r.height >= 1 &&
      (r.right > vw + 2 || r.left < -2) &&
      r.right > 0 &&
      r.left < vw &&
      !clipped(el) &&
      visible(el)
    );
  });
  const offTop = off.filter((e) => !off.includes(e.parentElement));
  m.offscreen = { n: offTop.length, el: offTop.slice(0, 3).map(label) };

  m.chrome = {};
  for (const [k, sel] of Object.entries(chrome)) {
    const el = document.querySelector(sel);
    if (!el) {
      m.chrome[k] = null;
      continue;
    }
    const r = el.getBoundingClientRect();
    m.chrome[k] = {
      vis: visible(el),
      ...rect(el),
      inView: r.left >= -2 && r.right <= vw + 2,
    };
  }
  const link = (sel) => document.querySelector(sel);
  m.chromeContrast = {
    pageTitle: contrast(link(".page-title a")),
    explorer: contrast(link(".explorer .nav-file-title, .explorer a")),
    toc: contrast(link(".toc a")),
  };

  // Something painted over the note? Probe paragraphs on the first screen.
  let covered = 0,
    probed = 0,
    coverEl = null;
  for (const p of root.querySelectorAll(":scope > p")) {
    const r = p.getBoundingClientRect();
    if (r.top < 0 || r.bottom > innerHeight || r.width < 4) continue;
    probed++;
    const hit = document.elementFromPoint(
      r.left + Math.min(r.width / 2, 40),
      r.top + Math.min(r.height / 2, 8),
    );
    if (hit && !root.contains(hit)) {
      covered++;
      coverEl ??= label(hit);
    }
    if (probed >= 5) break;
  }
  m.covered = { n: covered, of: probed, el: coverEl };
  return m;
}

/** Issue kinds. `error`: the page is broken; `warn`: probably unintended. */
export const ISSUES = {
  "page scrolls sideways": "error",
  "content past the viewport edge": "error",
  "chrome hidden": "error",
  "chrome missing": "error",
  "chrome off-screen": "error",
  "content covered": "error",
  "content root offset": "error",
  "content root scrollbar gutter": "error",
  "content column moved or resized": "warn",
  "blocks outside the column": "warn",
  "chrome moved or resized": "warn",
  "chrome text unreadable": "warn",
  "page height far off": "warn",
  "content root padding": "warn",
};

const near = (a, b, tol) => Math.abs((a ?? 0) - (b ?? 0)) <= tol;

/**
 * Compare measurements with the references.
 * @param {object[]} rows {theme, mode, width, ...measureLayout()}
 * @returns {{issues: object[], core: object[]}} theme issues, and how core's
 *   default theme differs from plain Quartz
 */
export function findIssues(rows) {
  const ref = {};
  for (const r of rows)
    if (REFERENCES.includes(r.theme))
      ref[`${r.theme}|${r.mode}|${r.width}`] = r;
  const issues = [];
  const add = (r, kind, detail) =>
    issues.push({
      theme: r.theme,
      mode: r.mode,
      width: r.width,
      kind,
      severity: ISSUES[kind],
      detail,
    });

  for (const r of rows) {
    if (r.theme === "(quartz)") continue;
    const b = ref[`(default)|${r.mode}|${r.width}`];
    if (r.noRoot) {
      add(r, "chrome missing", "content root");
      continue;
    }
    if (r.hOverflow > 1) add(r, "page scrolls sideways", `${r.hOverflow}px`);
    if (r.offscreen.n)
      add(r, "content past the viewport edge", r.offscreen.el.join(", "));
    if (r.covered.n)
      add(
        r,
        "content covered",
        `${r.covered.n}/${r.covered.of} by ${r.covered.el}`,
      );
    // Equal side margins are `auto` centring a max-width (kept on purpose);
    // uneven or negative ones push the note out of Quartz's column.
    const [mt, mr, mb, ml] = r.root.margin;
    if (
      !near(ml, mr, 1) ||
      ml < -0.5 ||
      mr < -0.5 ||
      Math.abs(mt) > 0.5 ||
      Math.abs(mb) > 0.5
    )
      add(r, "content root offset", `margin ${r.root.margin.join("/")}`);
    // Padding a theme put on the sizer (mapped onto the root) is usually its
    // design, e.g. a card; Obsidian's own file margins are stripped by core.
    if (r.root.pad.some((v) => Math.abs(v) > 0.5))
      add(r, "content root padding", `padding ${r.root.pad.join("/")}`);
    if (r.root.cw < r.root.w - r.root.border - 1)
      add(
        r,
        "content root scrollbar gutter",
        `${r.root.w - r.root.border - r.root.cw}px`,
      );
    if (!b || r.theme === "(default)") continue;

    if (!near(r.root.x, b.root.x, 2) || !near(r.root.w, b.root.w, 2))
      add(
        r,
        "content column moved or resized",
        `x ${b.root.x}→${r.root.x}, w ${b.root.w}→${r.root.w}`,
      );
    if (r.blockOut.l > 2 || r.blockOut.r > 2)
      add(
        r,
        "blocks outside the column",
        `${r.blockOut.el} by ${Math.max(r.blockOut.l, r.blockOut.r)}px`,
      );

    // Above the note: compare positions. Below it (stacked sidebars on phones
    // and tablets, footer): only x and width, since y follows the note.
    const above =
      r.width >= 1200
        ? [
            "pageTitle",
            "search",
            "darkmode",
            "explorer",
            "leftSidebar",
            "rightSidebar",
            "breadcrumbs",
            "toc",
            "graph",
          ]
        : r.width >= 800
          ? [
              "pageTitle",
              "search",
              "darkmode",
              "explorer",
              "leftSidebar",
              "breadcrumbs",
            ]
          : [
              "pageTitle",
              "search",
              "darkmode",
              "explorerToggle",
              "leftSidebar",
              "breadcrumbs",
            ];
    for (const [k, v] of Object.entries(r.chrome)) {
      const bv = b.chrome[k];
      if (!bv) continue;
      if (!v) {
        add(r, "chrome missing", k);
        continue;
      }
      if (bv.vis && !v.vis) add(r, "chrome hidden", k);
      if (v.vis && bv.inView && !v.inView) add(r, "chrome off-screen", k);
      if (!v.vis || !bv.vis) continue;
      const moved = above.includes(k)
        ? !near(v.x, bv.x, 24) || !near(v.w, bv.w, 24) || !near(v.y, bv.y, 40)
        : !near(v.x, bv.x, 24) ||
          (k !== "articleTitle" && !near(v.w, bv.w, 24));
      if (moved)
        add(
          r,
          "chrome moved or resized",
          `${k} (${bv.x},${bv.y} ${bv.w}w → ${v.x},${v.y} ${v.w}w)`,
        );
    }
    for (const [k, c] of Object.entries(r.chromeContrast ?? {}))
      if (c != null && c < 1.5 && r.chrome[k]?.vis !== false)
        add(r, "chrome text unreadable", `${k} contrast ${c}`);
    const ratio = r.pageH / b.pageH;
    if (ratio > 1.8 || ratio < 0.6)
      add(r, "page height far off", `${b.pageH}→${r.pageH}px`);
  }

  // Core's own effect: Obsidian's default theme vs plain Quartz.
  const core = [];
  for (const [key, d] of Object.entries(ref)) {
    if (!key.startsWith("(default)|")) continue;
    const q = ref[key.replace("(default)", "(quartz)")];
    if (!q || d.noRoot || q.noRoot) continue;
    for (const [k, v] of Object.entries(d.chrome)) {
      const qv = q.chrome[k];
      if (!v || !qv) continue;
      if (v.vis !== qv.vis || !near(v.w, qv.w, 8) || !near(v.h, qv.h, 8))
        core.push({
          mode: d.mode,
          width: d.width,
          chrome: k,
          quartz: qv,
          default: v,
        });
    }
  }
  return { issues, core };
}
