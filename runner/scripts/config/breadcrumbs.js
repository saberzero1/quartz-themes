import { expansions, defaults, sets } from "./shared.js";

export const aspect = "breadcrumbs";

export const entries = [
  {
    obsidianSelector: `.view-header-breadcrumb`,
    publishSelector: `.view-header-breadcrumb`,
    quartzSelector: ".breadcrumb-container",
    pseudoElement: "",
    properties: ["background-color", "color", ...defaults.border],
  },
  {
    obsidianSelector: `.view-header-breadcrumb-separator`,
    publishSelector: `.view-header-breadcrumb-separator`,
    quartzSelector: ".breadcrumb-element p",
    pseudoElement: "",
    properties: ["color", "font-family"],
  },
];
