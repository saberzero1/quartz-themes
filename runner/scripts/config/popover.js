import { expansions, defaults, sets } from "./shared.js";

export const aspect = "popover";

export const entries = [
  {
    obsidianSelector: `.tooltip`,
    publishSelector: `.tooltip`,
    quartzSelector: ".tooltip",
    pseudoElement: "",
    properties: sets.tooltip,
  },
  {
    obsidianSelector: `.popover`,
    publishSelector: `.popover`,
    quartzSelector: ".popover",
    pseudoElement: "",
    properties: sets.tooltip,
  },
  {
    obsidianSelector: `.popover.hover-popover .markdown-preview-view`,
    publishSelector: `.popover .markdown-preview-view`,
    quartzSelector: ".popover > .popover-inner",
    pseudoElement: "",
    properties: [
      "background-color",
      "color",
      "font-family",
      "box-shadow",
      ...defaults.border,
    ],
  },
];
