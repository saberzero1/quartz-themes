import { expansions, defaults, sets } from "./shared.js";

export const aspect = "images";

export const entries = [
  {
    obsidianSelector: `img`,
    publishSelector: `.markdown-rendered img`,
    quartzSelector: "img",
    pseudoElement: "",
    properties: sets.image,
  },
  {
    obsidianSelector: `figure`,
    publishSelector: `.markdown-rendered figure`,
    quartzSelector: "figure",
    pseudoElement: "",
    properties: sets.figure,
  },
  {
    obsidianSelector: `figcaption`,
    publishSelector: `.markdown-rendered figcaption`,
    quartzSelector: "figcaption",
    pseudoElement: "",
    properties: sets.figcaption,
  },
  {
    obsidianSelector: `video`,
    publishSelector: `.markdown-rendered video`,
    quartzSelector: "video",
    pseudoElement: "",
    properties: sets.image,
  },
  {
    obsidianSelector: `audio`,
    publishSelector: `.markdown-rendered audio`,
    quartzSelector: "audio",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border, ...defaults.padding],
  },
];
