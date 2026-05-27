import { expansions, defaults, sets } from "./shared.js";

export const aspect = "stacked";

export const entries = [
  {
    obsidianSelector: `.workspace-leaf`,
    publishSelector: null,
    quartzSelector: ".stacked-page",
    pseudoElement: "",
    properties: ["border-color", "background-color", "box-shadow"],
  },
  {
    obsidianSelector: `.workspace-tab-header-container`,
    publishSelector: null,
    quartzSelector: ".stacked-page-header",
    pseudoElement: "",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `.workspace-leaf.mod-active`,
    publishSelector: null,
    quartzSelector: ".stacked-page.active",
    pseudoElement: "",
    properties: ["border-color"],
  },
];
