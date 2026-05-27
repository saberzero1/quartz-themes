import { expansions, defaults, sets } from "./shared.js";

export const aspect = "typography";

export const entries = [
  {
    obsidianSelector: `p`,
    publishSelector: `.markdown-rendered p`,
    quartzSelector: "p",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `strong`,
    publishSelector: `strong`,
    quartzSelector: ".markdown-rendered p > strong, strong",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `strong`,
    publishSelector: `b`,
    quartzSelector: ".markdown-rendered p > b, b",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `em`,
    publishSelector: `em`,
    quartzSelector: ".markdown-rendered p > em, em",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `em`,
    publishSelector: `i`,
    quartzSelector: ".markdown-rendered p > i, i",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `u`,
    publishSelector: `u`,
    quartzSelector: ".markdown-rendered p > u, u",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `s`,
    publishSelector: `s`,
    quartzSelector: ".markdown-rendered p > s, s",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `strong > em`,
    publishSelector: `strong > em`,
    quartzSelector: ".markdown-rendered p > strong > em, strong > em",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `mark`,
    publishSelector: `.markdown-rendered mark`,
    quartzSelector: ".text-highlight",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `del`,
    publishSelector: `del`,
    quartzSelector: "del",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `mark.search-result-highlight`,
    publishSelector: `.search-highlight`,
    quartzSelector: ".search-highlight",
    pseudoElement: "",
    properties: ["background-color", "color", ...defaults.border],
  },
  {
    obsidianSelector: `article p > strong`,
    publishSelector: `.markdown-rendered p > strong`,
    quartzSelector: ".markdown-rendered p > strong",
    pseudoElement: "",
    properties: ["color", "font-weight"],
  },
];
