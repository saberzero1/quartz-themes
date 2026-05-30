import { expansions, defaults, sets } from "./shared.js";

export const aspect = "bases";

export const entries = [
  {
    obsidianSelector: `table`,
    publishSelector: null,
    quartzSelector: ".bases-table",
    pseudoElement: "",
    properties: ["border-color"],
  },
  {
    obsidianSelector: `thead th`,
    publishSelector: null,
    quartzSelector: ".bases-table thead th",
    pseudoElement: "",
    properties: ["background-color", "color", "font-weight", "border-color"],
  },
  {
    obsidianSelector: `tbody tr`,
    publishSelector: null,
    quartzSelector: ".bases-table tbody tr:nth-child(even)",
    pseudoElement: "",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `.search-result-file-match`,
    publishSelector: null,
    quartzSelector: ".bases-card",
    pseudoElement: "",
    properties: [
      "background-color",
      "border-color",
      "border-radius",
      "box-shadow",
    ],
  },
  {
    obsidianSelector: `.search-result-file-title`,
    publishSelector: null,
    quartzSelector: ".bases-card-title",
    pseudoElement: "",
    properties: ["color", "font-weight"],
  },
  {
    obsidianSelector: `.workspace-tab-header-tab.is-active`,
    publishSelector: null,
    quartzSelector: ".bases-view-tabs button.is-active",
    pseudoElement: "",
    properties: ["color", "background-color"],
  },
  {
    obsidianSelector: `.workspace-tab-header-tab`,
    publishSelector: null,
    quartzSelector: ".bases-view-tabs button",
    pseudoElement: "",
    properties: ["color", "background-color", "border-color"],
  },
];
