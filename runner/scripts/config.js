// src/extraction-config.js
const sets = {
  typography: [
    "color",
    "font-family",
    "font-size",
    "font-weight",
    "line-height",
  ],
  headings: ["color", "font-family", "text-shadow"],
  callouts: {
    container: [
      "--callout-color",
      "--callout-icon",
      "background-color",
      "border-style",
      "border-color",
      "border-width",
      "border-radius",
      "mix-blend-mode",
      "padding",
    ],
    content: ["background-color", "padding"],
    icon: ["color"],
    title: ["color", "font-size", "gap", "line-height", "padding"],
    titleInner: ["color", "font-weight"],
  },
  background: ["background-color"],
  // ... other property groups
};

const body =
  "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-vertical.mod-root > div > div.workspace-tab-container > div > div > div.view-content";

export const extractionTargets = {
  general: {
    file: "specimen.md",
    selectors: [
      {
        obsidianSelector: null,
        quartzSelector: "div#quartz-root",
        properties: ["background-color", "color", "font-family", "font-size"],
      },
    ],
  },
  headings: {
    file: "headings.md",
    selectors: [
      {
        obsidianSelector: `h1`,
        quartzSelector: "h1",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h2`,
        quartzSelector: "h2",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h3`,
        quartzSelector: "h3",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h4`,
        quartzSelector: "h4",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h5`,
        quartzSelector: "h5",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h6`,
        quartzSelector: "h6",
        properties: sets.headings,
      },
    ],
  },
  callouts: {
    file: "callouts.md",
    selectors: [
      // note
      {
        obsidianSelector: `.callout[data-callout="note"]`,
        quartzSelector: ".callout[data-callout]",
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-title`,
        quartzSelector: ".callout[data-callout] .callout-title",
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: ".callout[data-callout] .callout-title .callout-icon",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-title > .callout-inner`,
        quartzSelector:
          ".callout[data-callout] .callout-title > .callout-title-inner > p",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-content`,
        quartzSelector: ".callout[data-callout] > .callout-content",
        properties: sets.callouts.content,
      },
      // abstract
      {
        obsidianSelector: `.callout[data-callout="abstract"]`,
        quartzSelector: `.callout[data-callout="abstract"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="abstract"] > .callout-title`,
        quartzSelector: `.callout[data-callout="abstract"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="abstract"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="abstract"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="abstract"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="abstract"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="abstract"] > .callout-content`,
        quartzSelector: `.callout[data-callout="abstract"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // info
      {
        obsidianSelector: `.callout[data-callout="info"]`,
        quartzSelector: `.callout[data-callout="info"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="info"] > .callout-title`,
        quartzSelector: `.callout[data-callout="info"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="info"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="info"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="info"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="info"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="info"] > .callout-content`,
        quartzSelector: `.callout[data-callout="info"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // todo
      {
        obsidianSelector: `.callout[data-callout="todo"]`,
        quartzSelector: `.callout[data-callout="todo"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="todo"] > .callout-title`,
        quartzSelector: `.callout[data-callout="todo"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="todo"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="todo"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="todo"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="todo"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="todo"] > .callout-content`,
        quartzSelector: `.callout[data-callout="todo"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // tip
      {
        obsidianSelector: `.callout[data-callout="tip"]`,
        quartzSelector: `.callout[data-callout="tip"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="tip"] > .callout-title`,
        quartzSelector: `.callout[data-callout="tip"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="tip"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="tip"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="tip"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="tip"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="tip"] > .callout-content`,
        quartzSelector: `.callout[data-callout="tip"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // success
      {
        obsidianSelector: `.callout[data-callout="success"]`,
        quartzSelector: `.callout[data-callout="success"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="success"] > .callout-title`,
        quartzSelector: `.callout[data-callout="success"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="success"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="success"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="success"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="success"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="success"] > .callout-content`,
        quartzSelector: `.callout[data-callout="success"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // question
      {
        obsidianSelector: `.callout[data-callout="question"]`,
        quartzSelector: `.callout[data-callout="question"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="question"] > .callout-title`,
        quartzSelector: `.callout[data-callout="question"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="question"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="question"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="question"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="question"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="question"] > .callout-content`,
        quartzSelector: `.callout[data-callout="question"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // warning
      {
        obsidianSelector: `.callout[data-callout="warning"]`,
        quartzSelector: `.callout[data-callout="warning"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="warning"] > .callout-title`,
        quartzSelector: `.callout[data-callout="warning"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="warning"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="warning"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="warning"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="warning"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="warning"] > .callout-content`,
        quartzSelector: `.callout[data-callout="warning"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // danger
      {
        obsidianSelector: `.callout[data-callout="danger"]`,
        quartzSelector: `.callout[data-callout="danger"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="danger"] > .callout-title`,
        quartzSelector: `.callout[data-callout="danger"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="danger"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="danger"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="danger"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="danger"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="danger"] > .callout-content`,
        quartzSelector: `.callout[data-callout="danger"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // failure
      {
        obsidianSelector: `.callout[data-callout="failure"]`,
        quartzSelector: `.callout[data-callout="failure"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="failure"] > .callout-title`,
        quartzSelector: `.callout[data-callout="failure"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="failure"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="failure"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="failure"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="failure"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="failure"] > .callout-content`,
        quartzSelector: `.callout[data-callout="failure"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // bug
      {
        obsidianSelector: `.callout[data-callout="bug"]`,
        quartzSelector: `.callout[data-callout="bug"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="bug"] > .callout-title`,
        quartzSelector: `.callout[data-callout="bug"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="bug"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="bug"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="bug"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="bug"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="bug"] > .callout-content`,
        quartzSelector: `.callout[data-callout="bug"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // example
      {
        obsidianSelector: `.callout[data-callout="example"]`,
        quartzSelector: `.callout[data-callout="example"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="example"] > .callout-title`,
        quartzSelector: `.callout[data-callout="example"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="example"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="example"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="example"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="example"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="example"] > .callout-content`,
        quartzSelector: `.callout[data-callout="example"] > .callout-content`,
        properties: sets.callouts.content,
      },
      // quote
      {
        obsidianSelector: `.callout[data-callout="quote"]`,
        quartzSelector: `.callout[data-callout="quote"]`,
        properties: sets.callouts.container,
      },
      {
        obsidianSelector: `.callout[data-callout="quote"] > .callout-title`,
        quartzSelector: `.callout[data-callout="quote"] .callout-title`,
        properties: sets.callouts.title,
      },
      {
        obsidianSelector: `.callout[data-callout="quote"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="quote"] .callout-title .callout-icon`,
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="quote"] > .callout-title > .callout-inner`,
        quartzSelector: `.callout[data-callout="quote"] .callout-title > .callout-title-inner > p`,
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="quote"] > .callout-content`,
        quartzSelector: `.callout[data-callout="quote"] > .callout-content`,
        properties: sets.callouts.content,
      },
    ],
  },
  // ... more targets
};
