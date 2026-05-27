import { expansions, defaults, sets } from "./shared.js";

export const aspect = "links";

export const entries = [
  {
    obsidianSelector: `a.external-link[data-tooltip-position=\"top\"]`,
    publishSelector: `.markdown-rendered a.external-link`,
    quartzSelector: "a.external-link, footer a",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `a.internal-link[data-href=\"callouts\"][data-tooltip-position=\"top\"]`,
    publishSelector: `.markdown-rendered a.internal-link`,
    quartzSelector:
      "a.internal-link, .breadcrumb-container .breadcrumb-element > a",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `a.internal-link.is-unresolved[data-href=\"https://example.com\"][data-tooltip-position=\"top\"]`,
    publishSelector: `.markdown-rendered a.internal-link.is-unresolved`,
    quartzSelector: "a.internal-link.broken",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `a.external-link[data-tooltip-position=\"top\"]:hover`,
    publishSelector: `.markdown-rendered a.external-link:hover`,
    quartzSelector: "a.external-link:hover, footer a:hover",
    pseudoElement: "",
    properties: [
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "color",
    ],
  },
  {
    obsidianSelector: `a.internal-link[data-href=\"callouts\"][data-tooltip-position=\"top\"]:hover`,
    publishSelector: `.markdown-rendered a.internal-link:hover`,
    quartzSelector:
      "a.internal-link:hover, .breadcrumb-container .breadcrumb-element > a:hover",
    pseudoElement: "",
    properties: [
      // "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "color",
    ],
  },
  {
    obsidianSelector: `.backlink-pane`,
    publishSelector: `.backlink-pane`,
    quartzSelector: ".backlinks",
    pseudoElement: "",
    properties: sets.backlinks,
  },
  {
    obsidianSelector: `.backlink-pane .tree-item`,
    publishSelector: `.backlink-pane .tree-item`,
    quartzSelector: ".backlinks ul li",
    pseudoElement: "",
    properties: [
      "background-color",
      "color",
      ...defaults.border,
      ...defaults.padding,
    ],
  },
  {
    obsidianSelector: `.backlink-pane .tree-item-self`,
    publishSelector: `.backlink-pane .tree-item-self`,
    quartzSelector: ".backlinks ul li a",
    pseudoElement: "",
    properties: ["color", "text-decoration"],
  },
];
