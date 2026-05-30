import { expansions, defaults, sets } from "./shared.js";

export const aspect = "graph";

export const entries = [
  {
    obsidianSelector: `.graph-controls`,
    publishSelector: `.graph-view-container`,
    quartzSelector: ".graph > .graph-outer",
    pseudoElement: "",
    properties: ["background-color", "color", ...defaults.border],
  },
  {
    obsidianSelector: `.clickable-icon.graph-controls-button`,
    publishSelector: `.clickable-icon`,
    quartzSelector: ".graph > .graph-outer > .global-graph-icon",
    pseudoElement: "",
    properties: ["background-color", "color", "cursor", ...defaults.border],
  },
  {
    obsidianSelector: `.graph-controls`,
    publishSelector: `.graph-view-container`,
    quartzSelector: ".graph > .global-graph-outer > .global-graph-container",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
  {
    obsidianSelector: `.graph-control-section`,
    publishSelector: null,
    quartzSelector: ".graph > .graph-outer",
    pseudoElement: "",
    properties: ["color"],
  },
  {
    obsidianSelector: `.clickable-icon.graph-controls-button.mod-reset`,
    publishSelector: null,
    quartzSelector: ".graph > .graph-outer > .global-graph-icon",
    pseudoElement: "",
    properties: ["color"],
  },
];
