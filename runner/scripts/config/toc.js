import { expansions, defaults, sets } from "./shared.js";

export const aspect = "toc";

export const entries = [
  {
    obsidianSelector: `.workspace-leaf-content[data-type="outline"] .tree-item-self.is-clickable.mod-collapsible`,
    publishSelector: `.outline-view-outer .outline-view .tree-item > .tree-item-self`,
    quartzSelector: "li.depth-0",
    pseudoElement: "",
    properties: ["color", "font-family", "font-weight"],
  },
  {
    obsidianSelector: `.workspace-leaf-content[data-type="outline"] .tree-item-children`,
    publishSelector: `.outline-view-outer .outline-view .tree-item > .tree-item-children`,
    quartzSelector: null,
    pseudoElement: "",
    properties: [
      "color",
      "border-left-color",
      "border-left-width",
      "border-left-style",
    ],
  },
  {
    obsidianSelector: `.workspace-leaf-content[data-type="outline"] .tree-item-self.is-active`,
    publishSelector: null,
    quartzSelector: "ul.toc-content.overflow > li > a.in-view",
    pseudoElement: "",
    properties: ["color", "opacity", "font-weight"],
  },
  {
    obsidianSelector: `.workspace-leaf-content[data-type="outline"] .tree-item-icon.collapse-icon`,
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
