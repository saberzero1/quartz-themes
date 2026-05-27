import { expansions, defaults, sets } from "./shared.js";

export const aspect = "scrollbars";

export const entries = [
  {
    obsidianSelector: `body.styled-scrollbars ::-webkit-scrollbar`,
    publishSelector: "::-webkit-scrollbar",
    quartzSelector: "::-webkit-scrollbar",
    pseudoElement: "::-webkit-scrollbar",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `body.styled-scrollbars ::-webkit-scrollbar-thumb`,
    publishSelector: "::-webkit-scrollbar-thumb",
    quartzSelector: "::-webkit-scrollbar-thumb",
    pseudoElement: "::-webkit-scrollbar-thumb",
    properties: [
      "background-color",
      ...expansions.borderRadius,
      ...expansions.borderWidth,
      ...expansions.borderColor,
      ...expansions.borderStyle,
      "box-shadow",
    ],
  },
  {
    obsidianSelector: `body.styled-scrollbars ::-webkit-scrollbar-thumb:hover`,
    publishSelector: "::-webkit-scrollbar-thumb:hover",
    quartzSelector: "::-webkit-scrollbar-thumb:hover",
    pseudoElement: "::-webkit-scrollbar-thumb:hover",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `body.styled-scrollbars ::-webkit-scrollbar-thumb:active`,
    publishSelector: "::-webkit-scrollbar-thumb:active",
    quartzSelector: "::-webkit-scrollbar-thumb:active",
    pseudoElement: "::-webkit-scrollbar-thumb:active",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `body.styled-scrollbars ::-webkit-scrollbar-track`,
    publishSelector: "::-webkit-scrollbar-track",
    quartzSelector: "::-webkit-scrollbar-track",
    pseudoElement: "::-webkit-scrollbar-track",
    properties: ["background-color", ...expansions.borderRadius],
  },
  {
    obsidianSelector: `body.styled-scrollbars ::-webkit-scrollbar-corner`,
    publishSelector: "::-webkit-scrollbar-corner",
    quartzSelector: "::-webkit-scrollbar-corner",
    pseudoElement: "::-webkit-scrollbar-corner",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `body.styled-scrollbars`,
    publishSelector: "body",
    quartzSelector: "body",
    pseudoElement: "",
    properties: ["scrollbar-width", "scrollbar-color"],
  },
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"note\"]`,
    publishSelector: `.callout[data-callout="note"]`,
    // quartzSelector: ".callout[data-callout]",
    quartzSelector: ".callout",
    pseudoElement: "",
    properties: [
      "--callout-color",
      "--callout-icon",
      //"background-color",
      //"border-style",
      //"border-color",
      //"border-width",
      //"border-radius",
      ...defaults.border,
      "mix-blend-mode",
      //"padding",
      ...defaults.padding,
    ],
  },
];
