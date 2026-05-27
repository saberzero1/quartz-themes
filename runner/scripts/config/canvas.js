import { expansions, defaults, sets } from "./shared.js";

export const aspect = "canvas";

export const entries = [
  {
    obsidianSelector: `.canvas-node`,
    publishSelector: null,
    quartzSelector: ".canvas-node",
    pseudoElement: "",
    properties: [
      "background-color",
      "border-color",
      "border-radius",
      "border-width",
      "box-shadow",
    ],
  },
  {
    obsidianSelector: `.canvas-node-content`,
    publishSelector: null,
    quartzSelector: ".canvas-node-content",
    pseudoElement: "",
    properties: ["color"],
  },
  {
    obsidianSelector: `.canvas-node-container .markdown-rendered`,
    publishSelector: null,
    quartzSelector: ".canvas-node-file",
    pseudoElement: "",
    properties: ["color", "background-color"],
  },
  {
    obsidianSelector: `.canvas-edge-label`,
    publishSelector: null,
    quartzSelector: ".canvas-edge-label",
    pseudoElement: "",
    properties: ["color", "background-color"],
  },
  {
    obsidianSelector: `.canvas-control-group button`,
    publishSelector: null,
    quartzSelector: ".canvas-controls button",
    pseudoElement: "",
    properties: ["background-color", "border-color", "color"],
  },
  {
    obsidianSelector: `.canvas-card-menu`,
    publishSelector: null,
    quartzSelector: ".canvas-sidebar",
    pseudoElement: "",
    properties: ["background-color", "border-color", "box-shadow"],
  },
  {
    obsidianSelector: `.canvas-node-group`,
    publishSelector: null,
    quartzSelector: ".canvas-node-group",
    pseudoElement: "",
    properties: [
      "background-color",
      "border-color",
      "border-style",
      "border-width",
    ],
  },
];
