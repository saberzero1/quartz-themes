import { expansions, defaults, sets } from "./shared.js";

export const aspect = "tables";

export const entries = [
  {
    obsidianSelector: `table`,
    publishSelector: `.markdown-rendered table`,
    quartzSelector: "table",
    pseudoElement: "",
    properties: sets.table,
  },
  {
    obsidianSelector: `thead`,
    publishSelector: `.markdown-rendered thead`,
    quartzSelector: "thead",
    pseudoElement: "",
    properties: [
      "background-color",
      "color",
      "font-family",
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: `tbody`,
    publishSelector: `.markdown-rendered tbody`,
    quartzSelector: "tbody",
    pseudoElement: "",
    properties: ["background-color", "color", "font-family"],
  },
  {
    obsidianSelector: `th`,
    publishSelector: `.markdown-rendered th`,
    quartzSelector: "th",
    pseudoElement: "",
    properties: sets.tableHeader,
  },
  {
    obsidianSelector: `td`,
    publishSelector: `.markdown-rendered td`,
    quartzSelector: "td",
    pseudoElement: "",
    properties: sets.tableCell,
  },
  {
    obsidianSelector: `tr`,
    publishSelector: `.markdown-rendered tr`,
    quartzSelector: "tr",
    pseudoElement: "",
    properties: [
      "background-color",
      "color",
      "font-family",
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: `tbody tr:nth-child(even)`,
    publishSelector: `.markdown-rendered tbody tr:nth-child(even)`,
    quartzSelector: "tbody tr:nth-child(even)",
    pseudoElement: "",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `tbody tr:nth-child(odd)`,
    publishSelector: `.markdown-rendered tbody tr:nth-child(odd)`,
    quartzSelector: "tbody tr:nth-child(odd)",
    pseudoElement: "",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `.table-wrapper`,
    publishSelector: `.table-wrapper`,
    quartzSelector: ".table-container",
    pseudoElement: "",
    properties: ["background-color", ...defaults.border],
  },
];
