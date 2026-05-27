import { expansions, defaults, sets } from "./shared.js";

export const aspect = "darkmode";

export const entries = [
  {
    obsidianSelector: `.clickable-icon`,
    publishSelector: `.site-body-left-column-site-theme-toggle`,
    quartzSelector: ".darkmode",
    pseudoElement: "",
    properties: ["background-color", "color", "cursor", ...defaults.border],
  },
  {
    obsidianSelector: `.clickable-icon svg`,
    publishSelector: `.site-body-left-column-site-theme-toggle svg`,
    quartzSelector: ".darkmode svg",
    pseudoElement: "",
    properties: ["fill", "stroke", "color"],
  },
];
