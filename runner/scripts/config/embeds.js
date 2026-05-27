import { expansions, defaults, sets } from "./shared.js";

export const aspect = "embeds";

export const entries = [
  {
    obsidianSelector: `.internal-embed`,
    publishSelector: `.internal-embed`,
    quartzSelector: ".transclude",
    pseudoElement: "",
    properties: sets.embed,
  },
  {
    obsidianSelector: `.markdown-embed`,
    publishSelector: `.markdown-embed`,
    quartzSelector: ".transclude-inner",
    pseudoElement: "",
    properties: sets.embed,
  },
  {
    obsidianSelector: `.file-embed`,
    publishSelector: `.file-embed`,
    quartzSelector: ".file-embed",
    pseudoElement: "",
    properties: sets.embed,
  },
  {
    obsidianSelector: `.internal-embed.is-loaded .markdown-embed`,
    publishSelector: `.internal-embed .markdown-embed`,
    quartzSelector: ".transclude ul",
    pseudoElement: "",
    properties: ["padding-left", "color"],
  },
  {
    obsidianSelector: `.external-embed`,
    publishSelector: `.external-embed`,
    quartzSelector: ".external-embed.youtube",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
  {
    obsidianSelector: `.external-embed`,
    publishSelector: `.external-embed`,
    quartzSelector: "iframe.pdf",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
];
