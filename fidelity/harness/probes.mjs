/**
 * Fidelity probes: pairs of selectors that select the *same* rendered
 * markdown element in Obsidian's reading view and in Quartz, for the same
 * note. Both are evaluated relative to the reading-view root
 * (`.markdown-preview-view`, present in both DOMs), first match wins.
 *
 * `quartz` defaults to `obsidian` when the markup is identical.
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

export const PROBES = [
  {
    id: "page",
    aspect: "base",
    note: "specimen",
    obsidian: ":scope",
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
    note: "general",
    obsidian: "a.tag",
    quartz: "a.tag-link",
    props: ALL,
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
];

export const NOTES = [...new Set(PROBES.map((p) => p.note))];

/**
 * Runs inside the page. Measures every probe for one note.
 * @param {{root: string, probes: {id: string, sel: string, props: string[]}[]}} arg
 */
export function measureInPage({ root, probes }) {
  const rootEl = document.querySelector(root);
  const effectiveBg = (el) => {
    for (let e = el; e; e = e.parentElement) {
      const c = getComputedStyle(e).backgroundColor;
      const m = c.match(/rgba?\(([^)]+)\)/);
      if (m) {
        const parts = m[1]
          .split(/[ ,/]+/)
          .filter(Boolean)
          .map(Number);
        if (parts.length < 4 || parts[3] > 0.05) return c;
      }
    }
    return "rgb(255, 255, 255)";
  };
  const out = {};
  for (const p of probes) {
    let el = null;
    try {
      el = p.sel === ":scope" ? rootEl : rootEl?.querySelector(p.sel);
    } catch {
      /* invalid selector */
    }
    if (!el) {
      out[p.id] = null;
      continue;
    }
    const cs = getComputedStyle(el);
    const v = {};
    for (const prop of p.props) v[prop] = cs.getPropertyValue(prop);
    v["$effective-bg"] = effectiveBg(el);
    out[p.id] = v;
  }
  return out;
}
