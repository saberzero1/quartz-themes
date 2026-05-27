import { expansions, defaults, sets } from "./shared.js";

export const aspect = "footer";

export const entries = [
  {
    obsidianSelector: `.status-bar`,
    publishSelector: `.site-footer`,
    quartzSelector: "footer",
    pseudoElement: "",
    properties: [
      "background-color",
      "color",
      "font-family",
      "font-size",
      "text-align",
      ...defaults.padding,
    ],
  },
  {
    obsidianSelector: `.status-bar-item`,
    publishSelector: `.site-footer a`,
    quartzSelector: "footer ul li a",
    pseudoElement: "",
    properties: ["color", "text-decoration", "font-size", "font-weight"],
  },
];
