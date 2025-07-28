// src/extraction-config.js
const propertiesToExtract = {
  typography: [
    "color",
    "font-family",
    "font-size",
    "font-weight",
    "line-height",
  ],
  background: ["background-color"],
  // ... other property groups
};

export const extractionTargets = {
  H1: {
    obsidianSelector: ".markdown-preview-view h1",
    quartzSelector: ".quartz .page-content h1",
    properties: [...propertiesToExtract.typography],
  },
  BODY: {
    obsidianSelector: "body",
    quartzSelector: ".quartz",
    properties: ["background-color", "--text-normal"], // You can even grab custom property values!
  },
  CENTER: {
    obsidianSelector:
      "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-vertical.mod-root > div > div.workspace-tab-container > div > div > div.view-content",
    quartzSelector: "div#quartz-root",
    properties: ["background-color", "color", "font-family", "font-size"],
  },
  // ... more targets
};
