import { expansions, defaults, sets } from "./shared.js";

export const aspect = "toc";

export const entries = [
  {
    obsidianSelector: `div.is-clickable.mod-collapsible.tree-item-self`,
    publishSelector: `.outline-view-outer .outline-view .tree-item > .tree-item-self`,
    quartzSelector: "li.depth-0",
    pseudoElement: "",
    properties: [/*"font-size", "line-height", */ "font-weight"],
  },
  {
    obsidianSelector: `div.tree-item-children`,
    publishSelector: `.outline-view-outer .outline-view .tree-item > .tree-item-children`,
    quartzSelector: null /*"li.depth-0 + li.depth-1"*/,
    pseudoElement: "",
    properties: [
      "margin-inline-start",
      "padding-inline-start",
      "border-inline-start",
    ],
  },
  {
    obsidianSelector: `.outline-view-outer .tree-item-self.is-active`,
    publishSelector: null,
    quartzSelector: "ul.toc-content.overflow > li > a.in-view",
    pseudoElement: "",
    properties: ["color", "opacity", "font-weight"],
  },
  {
    obsidianSelector: `.outline-view-outer .tree-item-icon`,
    publishSelector: null,
    quartzSelector: ".toc .fold",
    pseudoElement: "",
    properties: ["color", "opacity"],
  },
  {
    obsidianSelector: `details summary`,
    publishSelector: null,
    quartzSelector: "details.toc summary::marker",
    pseudoElement: "::marker",
    properties: ["color"],
  },
];
