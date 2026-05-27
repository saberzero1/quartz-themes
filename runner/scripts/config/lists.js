import { expansions, defaults, sets } from "./shared.js";

export const aspect = "lists";

export const entries = [
  {
    obsidianSelector: `li[data-line=\"0\"]`,
    publishSelector: `.markdown-rendered ul > li`,
    quartzSelector: "ul > li",
    pseudoElement: "",
    properties: sets.list,
  },
  {
    obsidianSelector: `span.list-bullet::after`,
    publishSelector: `.markdown-rendered ul > li::marker`,
    quartzSelector: "ul > li::marker",
    pseudoElement: "::after",
    properties: [
      "background-color",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      "color",
      // "content",
      "pointer-events",
      "transform",
      "transition",
    ],
  },
  {
    obsidianSelector: `li[data-line=\"0\"]`,
    publishSelector: `.markdown-rendered ol > li`,
    quartzSelector: "ol > li",
    pseudoElement: "",
    properties: sets.list,
  },
  {
    // TODO: add ::marker to pseudoElements
    obsidianSelector: `span.list-bullet::after`,
    publishSelector: `.markdown-rendered ol > li::marker`,
    quartzSelector: "ol > li::marker",
    pseudoElement: "::after",
    properties: [
      "background-color",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      "color",
      // "content",
      "pointer-events",
      "transform",
      "transition",
    ],
  },
  {
    obsidianSelector: `dl`,
    publishSelector: `dl`,
    quartzSelector: "dl",
    pseudoElement: "",
    properties: sets.definitionList,
  },
  {
    obsidianSelector: `dt`,
    publishSelector: `dt`,
    quartzSelector: "dt",
    pseudoElement: "",
    properties: sets.definitionTerm,
  },
  {
    obsidianSelector: `dd`,
    publishSelector: `dd`,
    quartzSelector: "dd",
    pseudoElement: "",
    properties: sets.definitionDesc,
  },
  {
    obsidianSelector: `.view-content`,
    publishSelector: `.view-content`,
    quartzSelector: "ul.overflow",
    pseudoElement: "",
    properties: [...defaults.border],
    // properties: ["background-color", ...defaults.border],
  },
];
