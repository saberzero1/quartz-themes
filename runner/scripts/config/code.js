import { expansions, defaults, sets } from "./shared.js";

export const aspect = "code";

export const entries = [
  {
    obsidianSelector: `code`,
    publishSelector: `.markdown-rendered code`,
    quartzSelector: "code",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      "color",
      "font-family",
      //"font-size",
      //"padding",
      ...defaults.padding,
    ],
  },
  {
    obsidianSelector: `pre`,
    publishSelector: `.markdown-rendered pre > code`,
    quartzSelector: "pre > code, pre:has(> code)",
    pseudoElement: "",
    properties: [
      "background-color",
      ...defaults.border,
      "color",
      "overflow-x",
      ...defaults.padding,
      ...defaults.whiteSpace,
    ],
  },
  {
    obsidianSelector: `pre`,
    publishSelector: `figure[data-rehype-pretty-code-figure]`,
    quartzSelector: "figure[data-rehype-pretty-code-figure]",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
  {
    obsidianSelector: `pre`,
    publishSelector: `figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title]`,
    quartzSelector:
      "figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title]",
    pseudoElement: "",
    properties: [
      "background-color",
      "color",
      "font-family",
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: `pre`,
    publishSelector: `pre > code [data-line]`,
    quartzSelector: "pre > code > [data-line]",
    pseudoElement: "",
    properties: [
      "background-color",
      "border-left-color",
      "border-left-style",
      "border-left-width",
    ],
  },
  {
    obsidianSelector: `pre`,
    publishSelector: `pre > code [data-highlighted-line]`,
    quartzSelector: "pre > code > [data-line][data-highlighted-line]",
    pseudoElement: "",
    properties: ["background-color", "border-left-color"],
  },
  {
    obsidianSelector: `pre`,
    publishSelector: `pre > code [data-highlighted-chars]`,
    quartzSelector: "pre > code [data-highlighted-chars]",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
];
