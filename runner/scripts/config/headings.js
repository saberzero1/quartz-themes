import { expansions, defaults, sets } from "./shared.js";

export const aspect = "headings";

export const entries = [
  {
    obsidianSelector: 'h1[data-heading=\\"This is a heading 1\\"]',
    publishSelector: "h1",
    quartzSelector: "h1",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      /*"font-size",*/ "font-weight",
      /*"line-height",*/ "text-decoration",
      "text-transform",
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: 'h2[data-heading=\\"This is a heading 2\\"]',
    publishSelector: "h2",
    quartzSelector: "h2",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      /*"font-size",*/ "font-weight",
      /*"line-height",*/ "text-decoration",
      "text-transform",
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: 'h3[data-heading=\\"This is a heading 3\\"]',
    publishSelector: "h3",
    quartzSelector: "h3",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      /*"font-size",*/ "font-weight",
      /*"line-height",*/ "text-decoration",
      "text-transform",
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: 'h4[data-heading=\\"This is a heading 4\\"]',
    publishSelector: "h4",
    quartzSelector: "h4",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      /*"font-size",*/ "font-weight",
      /*"line-height",*/ "text-decoration",
      "text-transform",
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: 'h5[data-heading=\\"This is a heading 5\\"]',
    publishSelector: "h5",
    quartzSelector: "h5",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      /*"font-size",*/ "font-weight",
      /*"line-height",*/ "text-decoration",
      "text-transform",
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: 'h6[data-heading=\\"This is a heading 6\\"]',
    publishSelector: "h6",
    quartzSelector: "h6",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      /*"font-size",*/ "font-weight",
      /*"line-height",*/ "text-decoration",
      "text-transform",
      ...defaults.border,
    ],
  },
];
