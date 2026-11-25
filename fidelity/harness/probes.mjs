/**
 * Fidelity probes: pairs of selectors that select the *same* rendered
 * markdown element in Obsidian's reading view and in Quartz, for the same
 * note. Both are evaluated relative to the reading-view root
 * (`.markdown-preview-view`, present in both DOMs), first match wins.
 *
 * `quartz` defaults to `obsidian` when the markup is identical.
 *
 * Optional, per probe:
 *   - `obsidianScope` / `quartzScope: "page"`: query the whole document instead
 *     of the reading view (Quartz renders properties outside it).
 *   - `obsidian` / `quartz` as `{ create: "class names", style?: "css" }`: measure
 *     a hidden element created inside the root, for colours that only exist as
 *     variables or as classes an app reads (graph colours, code tokens).
 *   - props may name a pseudo-element: `"::before content"`, `"::marker color"`.
 *   - `obsidianProps` / `quartzProps: { key: "css spec" }`: measure a different
 *     property under the same key, where the apps draw the same thing
 *     differently (Obsidian's `.list-bullet::after` dot vs Quartz's `::marker`).
 *   - `hover: "selector"`: measured with the pointer on that element (in the
 *     reading view), for what only shows on hover (code blocks' copy button).
 */

const TEXT = [
  "color",
  "font-family",
  "font-size",
  "font-weight",
  "font-style",
  "letter-spacing",
  "text-transform",
  "text-decoration-line",
];
const BOX = [
  "background-color",
  "border-left-color",
  "border-left-width",
  "border-left-style",
  "border-bottom-color",
  "border-bottom-width",
  "border-bottom-style",
  "border-top-left-radius",
];
const ALL = [...TEXT, ...BOX];

const heading = (n) => ({
  id: `h${n}`,
  aspect: "headings",
  note: "headings",
  obsidian: `h${n}`,
  quartz: `h${n}:not(.article-title)`,
  props: [
    ...TEXT,
    "border-bottom-color",
    "border-bottom-width",
    "border-bottom-style",
    "background-color",
  ],
});

const callout = (type) => [
  {
    id: `callout-${type}`,
    aspect: "callouts",
    note: "callouts",
    obsidian: `.callout[data-callout="${type}"]`,
    props: [...BOX, "border-right-width", "border-top-width", "padding-left"],
  },
  {
    id: `callout-${type}-title`,
    aspect: "callouts",
    note: "callouts",
    obsidian: `.callout[data-callout="${type}"] .callout-title`,
    props: [...TEXT, "background-color"],
  },
  {
    id: `callout-${type}-icon`,
    aspect: "callouts",
    note: "callouts",
    obsidian: `.callout[data-callout="${type}"] .callout-icon`,
    props: ["color"],
  },
  {
    id: `callout-${type}-content`,
    aspect: "callouts",
    note: "callouts",
    obsidian: `.callout[data-callout="${type}"] .callout-content p`,
    props: TEXT,
  },
];

/**
 * Specimen-vault plugins left off when measuring. Shiki Highlighter replaces
 * Obsidian's code blocks with Expressive Code's markup and margins, which no
 * theme styles: themes (and the conversion) target Obsidian's own `<pre>`.
 * The code-token probes colour their own elements, so they don't need it.
 */
export const PLUGINS_OFF = ["shiki-highlighter"];

export const PROBES = [
  {
    id: "page",
    aspect: "base",
    note: "specimen",
    // Quartz's note is Obsidian's reading view and its sizer in one box; the
    // text sits on the sizer (Trailside paints the view around a sizer page).
    obsidian: ":scope > .markdown-preview-sizer",
    quartz: ":scope",
    props: [
      "color",
      "background-color",
      "font-family",
      "font-size",
      "line-height",
    ],
  },
  {
    id: "p",
    aspect: "typography",
    note: "specimen",
    obsidian: "p",
    props: [...TEXT, "line-height"],
  },
  {
    id: "strong",
    aspect: "typography",
    note: "specimen",
    obsidian: "strong",
    props: TEXT,
  },
  {
    id: "em",
    aspect: "typography",
    note: "specimen",
    obsidian: "em",
    props: TEXT,
  },
  {
    id: "mark",
    aspect: "typography",
    note: "specimen",
    obsidian: "mark",
    quartz: "mark, .text-highlight",
    props: [...TEXT, "background-color"],
  },
  {
    id: "del",
    aspect: "typography",
    note: "specimen",
    obsidian: "del",
    props: TEXT,
  },
  ...[1, 2, 3, 4, 5, 6].map(heading),
  {
    id: "internal-link",
    aspect: "links",
    note: "general",
    obsidian: "a.internal-link:not(.tag):not(.is-unresolved)",
    quartz: "a.internal:not(.tag-link):not(.broken)",
    props: TEXT,
  },
  {
    id: "external-link",
    aspect: "links",
    note: "specimen",
    obsidian: "a.external-link",
    props: TEXT,
  },
  {
    id: "tag",
    aspect: "links",
    note: "elements",
    obsidian: "a.tag",
    props: [...ALL, "padding-left", "padding-top"],
  },
  {
    id: "unresolved-link",
    aspect: "links",
    note: "elements",
    obsidian: "a.is-unresolved",
    // Quartz marks it `.broken` only with crawl-links' disableBrokenWikilinks.
    quartz: 'a[data-slug="missing-note"]',
    props: [
      ...TEXT,
      "opacity",
      "text-decoration-style",
      "text-decoration-color",
    ],
  },
  {
    id: "inline-code",
    aspect: "code",
    note: "specimen",
    obsidian: ":not(pre) > code",
    props: ALL,
  },
  {
    id: "code-block",
    aspect: "code",
    note: "specimen",
    obsidian: "pre",
    props: ALL,
  },
  {
    id: "blockquote",
    aspect: "blockquotes",
    note: "specimen",
    obsidian: "blockquote:not(.callout)",
    props: ALL,
  },
  {
    id: "hr",
    aspect: "misc",
    note: "specimen",
    obsidian: "hr",
    props: [
      "border-top-color",
      "border-top-width",
      "border-top-style",
      "background-color",
    ],
  },
  {
    id: "ul-li",
    aspect: "lists",
    note: "specimen",
    obsidian: "ul > li",
    props: TEXT,
  },
  {
    id: "ol-li",
    aspect: "lists",
    note: "specimen",
    obsidian: "ol > li",
    props: TEXT,
  },
  {
    id: "task-checkbox",
    aspect: "checkboxes",
    note: "general",
    obsidian: "input.task-list-item-checkbox",
    quartz: ".task-list-item input[type=checkbox]",
    props: [
      "background-color",
      "border-left-color",
      "border-left-width",
      "border-top-left-radius",
      "width",
    ],
  },
  {
    id: "table-th",
    aspect: "tables",
    note: "tables",
    obsidian: "table th",
    props: ALL,
  },
  {
    id: "table-td",
    aspect: "tables",
    note: "tables",
    obsidian: "table td",
    props: ALL,
  },
  ...["note", "warning", "tip", "danger", "quote"].flatMap(callout),
  {
    id: "callout-folded",
    aspect: "callouts",
    note: "elements",
    obsidian: ".callout.is-collapsed",
    props: [...BOX, "padding-top", "padding-bottom", "height"],
  },
  {
    id: "callout-folded-title",
    aspect: "callouts",
    note: "elements",
    obsidian: ".callout.is-collapsed .callout-title",
    props: [...TEXT, "background-color"],
  },

  // Embeds and the code block's copy button.
  {
    id: "note-embed",
    aspect: "embeds",
    note: "elements",
    obsidian: ".markdown-embed",
    props: [
      ...BOX,
      "border-top-width",
      "border-right-width",
      "padding-left",
      "padding-top",
      "$indent",
    ],
  },
  {
    id: "note-embed-text",
    aspect: "embeds",
    note: "elements",
    obsidian: ".markdown-embed p",
    props: TEXT,
  },
  {
    id: "image-embed",
    aspect: "embeds",
    note: "elements",
    obsidian: ".image-embed img",
    props: [
      "border-top-left-radius",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "width",
      "opacity",
      "$align",
    ],
  },
  // Mermaid diagrams: Pele's, in Obsidian and in Quartz.
  {
    id: "mermaid",
    aspect: "diagrams",
    note: "integrations",
    obsidian: ".mermaid",
    props: [
      "color",
      "background-color",
      "padding-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-top-left-radius",
    ],
  },
  {
    id: "mermaid-node",
    aspect: "diagrams",
    note: "integrations",
    obsidian: ".mermaid .pele-actor rect",
    props: ["fill", "stroke"],
  },
  {
    id: "mermaid-line",
    aspect: "diagrams",
    note: "integrations",
    obsidian: ".mermaid :is(path.pele-lifeline, .pele-lifeline path)",
    props: ["stroke"],
  },
  {
    id: "mermaid-edge",
    aspect: "diagrams",
    note: "integrations",
    obsidian: ".mermaid .pele-message path",
    props: ["stroke"],
  },
  {
    id: "mermaid-label",
    aspect: "diagrams",
    note: "integrations",
    obsidian: ".mermaid :is(text.pele-label, .pele-label text)",
    props: ["fill", "font-family", "font-size"],
  },
  {
    id: "copy-code-button",
    aspect: "code",
    note: "elements",
    hover: "pre",
    obsidian: "pre button.copy-code-button",
    quartz: "pre .clipboard-button",
    props: [
      "color",
      "background-color",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-top-left-radius",
      "opacity",
      "$inset-top",
      "$inset-right",
    ],
  },
];

// ---- Spacing, indentation, decorations, properties, footnotes, graph… -----

// Geometry, as seen: the gap to the nearest block above and below, and where
// the element's box starts relative to the note's paragraphs. Margins alone
// mislead: the DOMs wrap blocks differently and margins collapse.
const SPACING = ["$gap-before", "$gap-after", "padding-top", "padding-bottom"];
const INDENT = ["$indent", "padding-left"];
const PSEUDO = (pseudo) => [
  `${pseudo} content`,
  `${pseudo} color`,
  `${pseudo} background-color`,
  `${pseudo} width`,
  `${pseudo} height`,
];

const spacing = (id, sel, note = "specimen", extra = []) => ({
  id: `${id}-spacing`,
  aspect: "spacing",
  note,
  obsidian: sel,
  props: [...SPACING, ...extra],
});

// Obsidian draws bullets as `.list-bullet::after` (a dot with a background);
// Quartz uses the list marker. Same key, different property.
const bullet = (id, sel) => ({
  id,
  aspect: "decorations",
  note: "layout",
  // Quartz renders Obsidian's bullet markup (rehype-obsidian); $bullet-color
  // also reads a plain list marker, for sites without it.
  obsidian: `${sel} > .list-bullet`,
  props: ["bullet-color"],
  obsidianProps: { "bullet-color": "$bullet-color" },
  quartzProps: { "bullet-color": "$bullet-color" },
});

const callouts2 = [
  "abstract",
  "info",
  "todo",
  "success",
  "question",
  "failure",
  "bug",
  "example",
].flatMap(callout);

const checkbox = (task, label) => [
  {
    id: `checkbox-${label}`,
    aspect: "checkboxes",
    note: "theme-checkboxes/special",
    obsidian: `li[data-task="${task}"] > input.task-list-item-checkbox`,
    quartz: `li[data-task="${task}"] > input[type=checkbox]`,
    props: [
      "background-color",
      "border-left-color",
      "border-left-width",
      "border-top-left-radius",
      "width",
      ...PSEUDO("::after"),
    ],
  },
  {
    id: `checkbox-${label}-text`,
    aspect: "checkboxes",
    note: "theme-checkboxes/special",
    obsidian: `li[data-task="${task}"]`,
    props: ["color", "text-decoration-line"],
  },
];

/** Prism's class for each token type Quartz's highlighter marks. */
const PRISM = { value: "number" };
const token = (type) => ({
  id: `code-${type}`,
  aspect: "code",
  note: "theme-code/syntax-samples",
  // Obsidian's own highlighter (Prism) marks tokens with classes; app.css
  // and themes colour them, with --code-* variables that may be redefined
  // inside code blocks.
  obsidian: `pre code .token.${PRISM[type] ?? type}`,
  quartz: `pre code span[data-token-type="${type}"]`,
  props: ["color"],
});

const graph = (cls) => ({
  id: `graph-${cls}`,
  aspect: "graph",
  note: "general",
  // Both graphs read these hidden elements' colours.
  obsidian: { create: `graph-view ${cls}` },
  // ... and paint them on the graph's own canvas, not over the note: compared
  // as they are, not over what's behind the hidden element.
  canvas: true,
  props: ["color", "opacity"],
});

PROBES.push(
  // Spacing between blocks, as rendered.
  spacing("p", "p"),
  // Quartz's article title is an h1 too.
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    ...spacing(`h${n}`, `h${n}`, "headings"),
    quartz: `h${n}:not(.article-title)`,
    // h6 ends the note: nothing below it to measure.
    ...(n === 6 && { props: SPACING.filter((p) => p !== "$gap-after") }),
  })),
  spacing("ul", "ul", "layout", INDENT),
  spacing("ol", "ol", "layout", INDENT),
  spacing("li", "ul > li", "layout"),
  spacing("blockquote", "blockquote:not(.callout)", "specimen", [
    ...INDENT,
    "padding-right",
  ]),
  spacing("pre", "pre", "specimen", [...INDENT]),
  spacing("table", "table", "tables"),
  spacing("hr", "hr"),
  spacing("callout", '.callout[data-callout="note"]', "callouts", [
    ...INDENT,
    "padding-right",
  ]),
  spacing(
    "callout-title",
    '.callout[data-callout="note"] .callout-title',
    "callouts",
    ["gap"],
  ),
  spacing(
    "callout-content",
    '.callout[data-callout="note"] .callout-content',
    "callouts",
  ),

  // Indentation of nested lists: where each level's text starts.
  {
    id: "ul-nested",
    aspect: "indentation",
    note: "layout",
    obsidian: "ul ul",
    props: [...INDENT, "margin-top", "margin-bottom"],
  },
  {
    id: "ul-nested-2",
    aspect: "indentation",
    note: "layout",
    obsidian: "ul ul ul",
    props: [...INDENT],
  },
  {
    id: "ol-nested",
    aspect: "indentation",
    note: "layout",
    obsidian: "ol ol",
    props: [...INDENT],
  },
  {
    id: "blockquote-nested",
    aspect: "indentation",
    note: "layout",
    obsidian: "blockquote blockquote",
    props: [...INDENT, "border-left-color", "border-left-width"],
  },

  // Decorations: list markers, heading and quote pseudo-elements.
  bullet("bullet", "ul > li"),
  bullet("bullet-nested", "ul ul > li"),
  {
    id: "ol-marker",
    aspect: "decorations",
    note: "layout",
    obsidian: "ol > li",
    props: ["::marker color", "::marker font-size", "list-style-type"],
  },
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    id: `h${n}-before`,
    aspect: "decorations",
    note: "headings",
    obsidian: `h${n}`,
    quartz: `h${n}:not(.article-title)`,
    props: [...PSEUDO("::before"), ...PSEUDO("::after")],
  })),
  {
    id: "blockquote-before",
    aspect: "decorations",
    note: "specimen",
    obsidian: "blockquote:not(.callout)",
    props: [...PSEUDO("::before"), ...PSEUDO("::after")],
  },
  {
    id: "hr-before",
    aspect: "decorations",
    note: "specimen",
    obsidian: "hr",
    props: [...PSEUDO("::before"), ...PSEUDO("::after")],
  },

  // The remaining callout types.
  ...callouts2,

  // Checkbox states, including the alternative ones many themes draw.
  ...checkbox("x", "checked"),
  ...checkbox("/", "slash"),
  ...checkbox("-", "minus"),
  ...checkbox("?", "question"),
  ...checkbox("!", "bang"),
  ...checkbox(">", "forward"),

  // Note properties.
  {
    id: "properties",
    aspect: "properties",
    note: "theme-properties/note-properties",
    obsidian: ".metadata-container",
    quartzScope: "page",
    // Quartz places the block above the note: only its own box compares.
    props: [...BOX, ...TEXT, "padding-top", "padding-bottom", "padding-left"],
  },
  {
    id: "properties-heading",
    aspect: "properties",
    note: "theme-properties/note-properties",
    obsidian: ".metadata-properties-heading",
    quartzScope: "page",
    props: TEXT,
  },
  {
    id: "property-key",
    aspect: "properties",
    note: "theme-properties/note-properties",
    obsidian:
      '.metadata-property[data-property-key="tags"] .metadata-property-key',
    quartzScope: "page",
    props: [...TEXT, "background-color", "width"],
  },
  {
    id: "property-value",
    aspect: "properties",
    note: "theme-properties/note-properties",
    obsidian:
      '.metadata-property[data-property-key="aliases"] .metadata-property-value',
    quartzScope: "page",
    props: [...TEXT, "background-color"],
  },
  {
    id: "property-pill",
    aspect: "properties",
    note: "theme-properties/note-properties",
    obsidian: '.metadata-property[data-property-key="tags"] .multi-select-pill',
    quartzScope: "page",
    props: ALL,
  },

  {
    id: "property-icon",
    aspect: "properties",
    note: "theme-properties/note-properties",
    obsidian:
      '.metadata-property[data-property-key="tags"] .metadata-property-icon svg',
    quartzScope: "page",
    props: ["color", "width", "height", "opacity"],
  },

  // Footnotes.
  {
    id: "footnote-ref",
    aspect: "footnotes",
    note: "general",
    obsidian: "sup.footnote-ref a",
    quartz: "sup a[data-footnote-ref]",
    props: TEXT,
  },
  {
    id: "footnotes",
    aspect: "footnotes",
    note: "general",
    obsidian: "section.footnotes",
    props: [...TEXT, "border-top-width", ...SPACING],
  },
  {
    id: "footnote-item",
    aspect: "footnotes",
    note: "general",
    obsidian: "section.footnotes li",
    props: TEXT,
  },

  // Syntax highlighting.
  token("keyword"),
  token("string"),
  token("comment"),
  token("function"),
  token("value"),
  token("property"),
  token("operator"),
  token("punctuation"),

  // Graph colours.
  graph("color-fill"),
  graph("color-fill-focused"),
  graph("color-fill-tag"),
  graph("color-line"),
  graph("color-line-highlight"),
  graph("color-text"),
);

export const NOTES = [...new Set(PROBES.map((p) => p.note))];

/** What one app measures for a probe. */
export function sideProbe(p, side) {
  const sel = side === "quartz" ? (p.quartz ?? p.obsidian) : p.obsidian;
  const alias = (side === "quartz" ? p.quartzProps : p.obsidianProps) ?? {};
  return {
    id: p.id,
    sel: typeof sel === "string" ? sel : null,
    create: typeof sel === "object" ? sel : null,
    page: (side === "quartz" ? p.quartzScope : p.obsidianScope) === "page",
    props: p.props.map((k) => [k, alias[k] ?? k]),
  };
}

/**
 * Measures one note's probes on one side: with the pointer off the note, then
 * each `hover` probe with the pointer on its element.
 */
export async function measureProbes(page, root, probes, side) {
  await page.mouse.move(0, 0); // no :hover from wherever the pointer rests
  const out = await page.evaluate(measureInPage, {
    root,
    probes: probes.filter((p) => !p.hover).map((p) => sideProbe(p, side)),
  });
  for (const p of probes.filter((p) => p.hover)) {
    const target = page.locator(`${root} ${p.hover}`).first();
    if (await target.count()) {
      await target.hover({ force: true });
      Object.assign(
        out,
        await page.evaluate(measureInPage, {
          root,
          probes: [sideProbe(p, side)],
        }),
      );
    }
    await page.mouse.move(0, 0);
  }
  return out;
}

/**
 * Runs inside the page. Measures every probe for one note.
 * @param {{root: string, probes: {id: string, sel: string, props: string[]}[]}} arg
 */
export function measureInPage({ root, probes }) {
  const rootEl = document.querySelector(root);
  // Animations as a reader sees them, the same on both sides: finished, or
  // at their start when they loop (Byrcen Breathe's breathing backdrop).
  for (const a of document.getAnimations()) {
    try {
      if (a.effect?.getComputedTiming().endTime === Infinity) {
        a.pause();
        a.currentTime = 0;
      } else a.finish();
    } catch {
      /* not seekable */
    }
  }
  // Any CSS colour (oklch, color(srgb …), color-mix results…) as [r, g, b, a].
  const ctx = document
    .createElement("canvas")
    .getContext("2d", { willReadFrequently: true });
  const rgba = (c) => {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillStyle = c;
    ctx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    return [r, g, b, a / 255];
  };
  const COLOR =
    /(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\((?:[^()]|\([^()]*\))*\)|#[0-9a-f]{3,8}\b/gi;
  // What's painted behind an element: the nearest opaque background colour,
  // or a gradient (the average of its stops: a theme's pane gradient is what
  // shows behind the note, not the colour under it).
  const effectiveBg = (el) => {
    // Layers from the element outwards, each element's colour under its
    // images, until one is opaque; then composited as painted. A gradient
    // counts as the average of its stops (alpha included): overlays like a
    // translucent radial glow tint what's beneath rather than replace it.
    const layers = [];
    let opaque = false;
    for (let e = el; e && !opaque; e = e.parentElement) {
      const cs = getComputedStyle(e);
      const own = [];
      for (const img of cs.backgroundImage.match(
        /(?:repeating-)?(?:linear|radial|conic)-gradient\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/g,
      ) ?? []) {
        const stops = (img.match(COLOR) ?? []).map(rgba);
        if (!stops.length) continue;
        own.push(
          [0, 1, 2, 3].map(
            (k) => stops.reduce((n, s) => n + s[k], 0) / stops.length,
          ),
        );
      }
      own.push(rgba(cs.backgroundColor)); // painted first, under the images
      for (const l of own) {
        if (l[3] <= 0.01) continue;
        layers.push(l);
        if (l[3] >= 0.99) {
          opaque = true;
          break;
        }
      }
    }
    let [r, g, b] = [255, 255, 255];
    for (const [lr, lg, lb, la] of layers.reverse()) {
      r = lr * la + r * (1 - la);
      g = lg * la + g * (1 - la);
      b = lb * la + b * (1 - la);
    }
    return `rgb(${[r, g, b].map(Math.round).join(", ")})`;
  };
  const BLOCKS =
    "p, h1, h2, h3, h4, h5, h6, li, pre, table, blockquote, hr, .callout, ul, ol, section, img, .metadata-container";
  const geometry = (el, spec) => {
    if (spec === "$bullet-color") {
      // Obsidian: .list-bullet::after, a dot (background) or a glyph (color).
      // Quartz: the list item's marker.
      if (el.classList.contains("list-bullet")) {
        const a = getComputedStyle(el, "::after");
        if (a.display === "none" || /^(none|normal)$/.test(a.content))
          return "none";
        const bg = a.backgroundColor;
        const transparent = /rgba\([^)]*,\s*0\)|transparent/.test(bg);
        return transparent || parseFloat(a.width) === 0 ? a.color : bg;
      }
      const li = getComputedStyle(el);
      if (li.listStyleType === "none" && li.listStyleImage === "none")
        return "none";
      return getComputedStyle(el, "::marker").color;
    }
    const r = el.getBoundingClientRect();
    if (spec === "$inset-top" || spec === "$inset-right") {
      // Where the element sits in its parent (the copy button in its code block).
      const pr = el.parentElement?.getBoundingClientRect();
      if (!pr || !r.width) return "";
      return Math.round(
        spec === "$inset-top" ? r.top - pr.top : pr.right - r.right,
      );
    }
    if (spec === "$align") {
      // Where the element sits across its block (start, center, end or fill).
      // Unlike $indent it doesn't depend on the column's width, which differs
      // between Obsidian's pane and Quartz's page.
      let b = el.parentElement;
      while (b && getComputedStyle(b).display === "inline") b = b.parentElement;
      if (!b || !r.width) return "";
      const bs = getComputedStyle(b);
      const br = b.getBoundingClientRect();
      const left = r.left - br.left - parseFloat(bs.paddingLeft);
      const right = br.right - parseFloat(bs.paddingRight) - r.right;
      const near = (v) => Math.abs(v) <= 2;
      if (near(left) && near(right)) return "fill";
      if (near(left - right)) return "center";
      if (near(left)) return "start";
      if (near(right)) return "end";
      return `${Math.round((100 * left) / (left + right))}%`;
    }
    if (spec === "$indent") {
      const p = (rootEl ?? document).querySelector(":scope p");
      return p ? Math.round(r.left - p.getBoundingClientRect().left) : "";
    }
    let gap = Infinity;
    for (const b of (rootEl ?? document).querySelectorAll(BLOCKS)) {
      if (b === el || b.contains(el) || el.contains(b)) continue;
      const br = b.getBoundingClientRect();
      if (!br.height) continue;
      if (spec === "$gap-before" && br.bottom <= r.top + 0.5)
        gap = Math.min(gap, r.top - br.bottom);
      if (spec === "$gap-after" && br.top >= r.bottom - 0.5)
        gap = Math.min(gap, br.top - r.bottom);
    }
    return gap === Infinity ? "" : Math.round(gap);
  };
  const out = {};
  for (const p of probes) {
    let el = null;
    let created = null;
    try {
      if (p.create) {
        created = document.createElement("div");
        created.className = p.create.create;
        created.setAttribute("aria-hidden", "true");
        created.style.cssText = `position:absolute;visibility:hidden;${p.create.style ?? ""}`;
        (rootEl ?? document.body).appendChild(created);
        el = created;
      } else if (p.sel === ":scope") el = rootEl;
      else el = (p.page ? document : rootEl)?.querySelector(p.sel);
    } catch {
      /* invalid selector */
    }
    if (!el) {
      out[p.id] = null;
      continue;
    }
    const v = {};
    // Older references pass plain property names.
    for (const entry of p.props) {
      const [key, spec] = Array.isArray(entry) ? entry : [entry, entry];
      if (spec.startsWith("$")) {
        v[key] = String(geometry(el, spec));
        continue;
      }
      const m = spec.match(/^(::?[\w-]+) (.+)$/);
      const cs = m ? getComputedStyle(el, m[1]) : getComputedStyle(el);
      v[key] = cs.getPropertyValue(m ? m[2] : spec);
    }
    v["$effective-bg"] = effectiveBg(el);
    out[p.id] = v;
    created?.remove();
  }
  return out;
}
