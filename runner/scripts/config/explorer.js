import { expansions, defaults, sets } from "./shared.js";

export const aspect = "explorer";

export const entries = [
  {
    obsidianSelector: `div.is-clickable.nav-file-title.tappable.tree-item-self[data-path=\"callouts.md\"]`,
    publishSelector: `.nav-view-outer .tree-item-self a`,
    quartzSelector: ".nav-files-container .nav-file-title",
    pseudoElement: "",
    properties: [
      "color",
      "cursor",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
      "text-decoration",
    ],
  },
  {
    // active
    obsidianSelector: `div.is-active.is-clickable.nav-file-title.tappable.tree-item-self[data-path=\"integrations.md\"]`,
    publishSelector: `.nav-view-outer .tree-item-self.mod-active`,
    quartzSelector: ".nav-files-container .nav-file-title.is-active",
    pseudoElement: "",
    properties: [
      "background-color",
      ...defaults.border,
      "color",
      "cursor",
      ...defaults.transition,
    ],
  },
  {
    // closed
    obsidianSelector: `div.is-clickable.mod-collapsible.nav-folder-title.tree-item-self[data-path=\"folder/collapsed\"]`,
    publishSelector: `.nav-view-outer .nav-view > .tree-item.is-collapsed > .tree-item-children > .tree-item > .tree-item-self`,
    quartzSelector:
      ".nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title",
    pseudoElement: "",
    properties: [
      "color",
      "cursor",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
      "text-decoration",
    ],
  },
  {
    // open
    obsidianSelector: `div.is-clickable.mod-collapsible.nav-folder-title.tree-item-self[data-path=\"folder\"]`,
    publishSelector: `.nav-view-outer .nav-view > .tree-item > .tree-item-children > .tree-item > .tree-item-self`,
    quartzSelector:
      ".nav-files-container li:has(> .folder-outer.open) > .nav-folder-title",
    pseudoElement: "",
    properties: [
      "color",
      "cursor",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
      "text-decoration",
    ],
  },
  {
    obsidianSelector: `.nav-folder-collapse-indicator.collapse-icon svg.svg-icon`,
    publishSelector: null,
    quartzSelector: ".nav-files-container .collapse-icon",
    pseudoElement: "",
    properties: ["color", "stroke", "fill", "opacity"],
  },
  {
    obsidianSelector: `.tree-item-children`,
    publishSelector: null,
    quartzSelector: ".nav-files-container .tree-item-children",
    pseudoElement: "",
    properties: [
      "border-left-color",
      "border-left-width",
      "border-left-style",
      "border-inline-start",
    ],
  },
  {
    obsidianSelector: `.nav-folder-title-content`,
    publishSelector: null,
    quartzSelector: ".explorer .folder-container > div",
    pseudoElement: "",
    properties: ["color", "font-family", "font-weight"],
  },
  {
    obsidianSelector: `.nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content::before`,
    publishSelector: null,
    quartzSelector:
      ".explorer .explorer-content li:has(> .folder-outer.open) > .folder-container::before",
    pseudoElement: "::before",
    properties: [
      "content",
      "font-family",
      "font-size",
      "font-weight",
      "text-align",
      "color",
      "width",
      "height",
      "background-color",
      "background-repeat",
    ],
  },
  {
    obsidianSelector: `.nav-folder-children .nav-folder-title .nav-folder-title-content::before`,
    publishSelector: null,
    quartzSelector:
      ".explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container::before",
    pseudoElement: "::before",
    properties: [
      "content",
      "font-family",
      "font-size",
      "font-weight",
      "text-align",
      "color",
      "width",
      "height",
      "background-color",
      "background-repeat",
    ],
  },
  {
    obsidianSelector: `.nav-file-title-content::before`,
    publishSelector: null,
    quartzSelector: ".explorer .explorer-content ul.explorer-ul li > a::before",
    pseudoElement: "::before",
    properties: [
      "content",
      "font-family",
      "font-size",
      "font-weight",
      "text-align",
      "color",
      "width",
      "height",
      "background-color",
      "background-repeat",
    ],
  },
  {
    obsidianSelector: `.nav-files-container`,
    publishSelector: null,
    quartzSelector: ".nav-files-container",
    pseudoElement: "",
    properties: ["background-color"],
  },
];
