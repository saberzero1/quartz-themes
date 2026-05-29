import { expansions, defaults, sets } from "./shared.js";

export const aspect = "explorer";

export const entries = [
  {
    // File title text — .nav-file-title-content has color/font across most themes
    obsidianSelector: `.nav-file-title-content`,
    publishSelector: `.nav-view-outer .tree-item-self a`,
    quartzSelector: ".nav-files-container .nav-file-title",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
    ],
  },
  {
    // File title container — .nav-file-title has color/font-family for some themes
    obsidianSelector: `.nav-file-title`,
    publishSelector: `.nav-view-outer .tree-item-self.mod-active`,
    quartzSelector: ".nav-files-container .nav-file-title.is-active",
    pseudoElement: "",
    properties: ["color", "font-family", ...defaults.border],
  },
  {
    // Folder title — closed state
    // data-path selector exists in extracted data for some themes (its-theme)
    // but .nav-folder-title-content has broader coverage
    obsidianSelector: `div.is-clickable.mod-collapsible.nav-folder-title.tree-item-self[data-path=\"folder/collapsed\"]`,
    publishSelector: `.nav-view-outer .nav-view > .tree-item.is-collapsed > .tree-item-children > .tree-item > .tree-item-self`,
    quartzSelector:
      ".nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
    ],
  },
  {
    // Folder title — open state
    obsidianSelector: `div.is-clickable.mod-collapsible.nav-folder-title.tree-item-self[data-path=\"folder\"]`,
    publishSelector: `.nav-view-outer .nav-view > .tree-item > .tree-item-children > .tree-item > .tree-item-self`,
    quartzSelector:
      ".nav-files-container li:has(> .folder-outer.open) > .nav-folder-title",
    pseudoElement: "",
    properties: [
      "color",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
    ],
  },
  {
    // Collapse indicator — original selector not extracted, use tree-item-self ::before
    // which carries the collapse icon styling for themes that customize it
    obsidianSelector: `div.is-clickable.mod-collapsible.tree-item-self`,
    publishSelector: null,
    quartzSelector: ".nav-files-container .collapse-icon",
    pseudoElement: "",
    properties: ["color", "opacity"],
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
    obsidianSelector: `.nav-folder-title-content::before`,
    publishSelector: null,
    quartzSelector:
      ".explorer .explorer-content li:has(> .folder-outer.open) > .folder-container::before",
    pseudoElement: "::before",
    properties: [
      "color",
      "background-color",
      "font-family",
      "font-weight",
      "opacity",
    ],
  },
  {
    obsidianSelector: `.nav-folder-title-content::before`,
    publishSelector: null,
    quartzSelector:
      ".explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container::before",
    pseudoElement: "::before",
    properties: [
      "color",
      "background-color",
      "font-family",
      "font-weight",
      "opacity",
    ],
  },
  {
    obsidianSelector: `.nav-file-title-content::before`,
    publishSelector: null,
    quartzSelector: ".explorer .explorer-content ul.explorer-ul li > a::before",
    pseudoElement: "::before",
    properties: [
      "color",
      "background-color",
      "font-family",
      "font-weight",
      "opacity",
    ],
  },
  {
    obsidianSelector: `.nav-files-container`,
    publishSelector: null,
    quartzSelector: ".nav-files-container",
    pseudoElement: "",
    properties: ["background-color", "color", "font-family"],
  },
];
