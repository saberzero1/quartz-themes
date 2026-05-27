import { expansions, defaults, sets } from "./shared.js";

export const aspect = "recentNotes";

export const entries = [
  {
    obsidianSelector: `.nav-header`,
    publishSelector: `.nav-header`,
    quartzSelector: ".recent-notes > h3",
    pseudoElement: "",
    properties: ["color", "font-family", "font-weight"],
  },
  {
    obsidianSelector: `.nav-files-container .tree-item`,
    publishSelector: `.nav-files-container .tree-item`,
    quartzSelector: ".recent-notes > ul.recent-ul > li",
    pseudoElement: "",
    properties: ["background-color", "color", ...defaults.border],
  },
  {
    obsidianSelector: `.nav-file-title`,
    publishSelector: `.nav-file-title`,
    quartzSelector:
      ".recent-notes > ul.recent-ul > li .section > .desc > h3 > a",
    pseudoElement: "",
    properties: ["color", "text-decoration"],
  },
  {
    obsidianSelector: `.nav-file-title-content`,
    publishSelector: `.nav-file-title-content`,
    quartzSelector: ".recent-notes > ul.recent-ul > li .section > .meta",
    pseudoElement: "",
    properties: ["color", "font-family"],
  },
];
