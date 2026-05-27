import { expansions, defaults, sets } from "./shared.js";

export const aspect = "blockquotes";

export const entries = [
  {
    obsidianSelector: `blockquote`,
    publishSelector: `.markdown-rendered blockquote`,
    quartzSelector: "blockquote",
    pseudoElement: "",
    properties: sets.blockquote,
  },
];
