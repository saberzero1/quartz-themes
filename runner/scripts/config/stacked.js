import { expansions, defaults, sets } from "./shared.js";

export const aspect = "stacked";

export const entries = [
  {
    obsidianSelector: `.workspace-leaf`,
    publishSelector: null,
    quartzSelector: "#stacked-pages-container.binder-active",
    pseudoElement: "",
    properties: ["border-color", "background-color", "box-shadow"],
  },
  {
    obsidianSelector: `.workspace-tab-header-container`,
    publishSelector: null,
    quartzSelector: ".binder-tab",
    pseudoElement: "",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `.workspace-leaf.mod-active`,
    publishSelector: null,
    quartzSelector: ".binder-tab.binder-tab-active",
    pseudoElement: "",
    properties: ["border-color"],
  },
];
