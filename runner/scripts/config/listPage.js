import { expansions, defaults, sets } from "./shared.js";

export const aspect = "listPage";

export const entries = [
  {
    obsidianSelector: `.nav-files-container`,
    publishSelector: `.nav-files-container`,
    quartzSelector: "ul.section-ul",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
  {
    obsidianSelector: `.nav-files-container .tree-item`,
    publishSelector: `.nav-files-container .tree-item`,
    quartzSelector: "li.section-li",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
  {
    obsidianSelector: `.nav-file-title`,
    publishSelector: `.nav-file-title`,
    quartzSelector: "li.section-li > .section > .desc > h3 > a",
    pseudoElement: "",
    properties: ["color", "text-decoration"],
  },
  {
    obsidianSelector: `.nav-file-title-content`,
    publishSelector: `.nav-file-title-content`,
    quartzSelector: "li.section-li > .section .meta",
    pseudoElement: "",
    properties: ["color", "font-family"],
  },
];
