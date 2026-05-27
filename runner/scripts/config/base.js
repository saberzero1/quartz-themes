import { expansions, defaults, sets } from "./shared.js";

export const aspect = "base";

export const entries = [
  {
    obsidianSelector: `div.quartz-icon-selector`,
    publishSelector: null,
    quartzSelector: "div#quartz-body",
    pseudoElement: "",
    properties: ["--quartz-icon-color"],
  },
  {
    obsidianSelector: `div.mod-active.workspace-leaf`,
    publishSelector: null, //TODO
    quartzSelector: `&[data-slug], &[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer`,
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  {
    obsidianSelector: `div.workspace-leaf`,
    publishSelector: null, //TODO
    quartzSelector: ".page > div#quartz-body div.sidebar",
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  {
    obsidianSelector: `div.mod-horizontal.mod-left-split.mod-sidedock.workspace-split`,
    publishSelector: null, //TODO
    quartzSelector:
      "&[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content",
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  {
    obsidianSelector: `div.mod-horizontal.mod-right-split.mod-sidedock.workspace-split`,
    publishSelector: null, //TODO
    quartzSelector: ".page > div#quartz-body div.sidebar.right",
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  {
    obsidianSelector: `hr.workspace-leaf-resize-handle`,
    publishSelector: null, //TODO
    quartzSelector: ".page > div#quartz-body div.sidebar.left",
    pseudoElement: "",
    properties: [
      "border-right-color",
      "border-right-style",
      "border-right-width",
    ],
  },
  {
    obsidianSelector: `hr.workspace-leaf-resize-handle`,
    publishSelector: null, //TODO
    quartzSelector: ".page > div#quartz-body div.sidebar.right",
    pseudoElement: "",
    properties: ["border-left-color", "border-left-style", "border-left-width"],
  },
];
