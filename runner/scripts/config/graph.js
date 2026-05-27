import { expansions, defaults, sets } from "./shared.js";

export const aspect = "graph";

export const entries = [
  {
    obsidianSelector: `.graph-view-container`,
    publishSelector: `.graph-view-container`,
    quartzSelector: ".graph",
    pseudoElement: "",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `.graph-view-container`,
    publishSelector: `.graph-view-container`,
    quartzSelector: ".graph > h3",
    pseudoElement: "",
    properties: ["color", "font-family", "font-weight"],
  },
  {
    obsidianSelector: `.graph-view-container .graph-controls`,
    publishSelector: `.graph-view-container`,
    quartzSelector: ".graph > .graph-outer",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
  {
    obsidianSelector: `.clickable-icon.graph-controls-button`,
    publishSelector: `.clickable-icon`,
    quartzSelector: ".graph > .graph-outer > .global-graph-icon",
    pseudoElement: "",
    properties: ["background-color", "color", "cursor", ...defaults.border],
  },
  {
    obsidianSelector: `.clickable-icon.graph-controls-button:hover`,
    publishSelector: `.clickable-icon:hover`,
    quartzSelector: ".graph > .graph-outer > .global-graph-icon:hover",
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  {
    obsidianSelector: `.graph-view-container`,
    publishSelector: `.graph-view-container`,
    quartzSelector: ".graph > .global-graph-outer",
    pseudoElement: "",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `.graph-view-container .graph-controls`,
    publishSelector: `.graph-view-container`,
    quartzSelector: ".graph > .global-graph-outer > .global-graph-container",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
];
