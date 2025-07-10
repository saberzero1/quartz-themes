import {
  getTheme,
  replaceInFile,
  isDarkTheme,
  isLightTheme,
  getExtras,
  getFonts,
  getFixes,
  getValueFromDictionary,
} from "../../util/util.mjs";
import { readFileSync } from "fs";

export default function replaceAfter(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    const filePath = `./themes/${theme}/_index.scss`;
    const json = JSON.parse(
      readFileSync(`./atomic/${theme}/theme-static.json`, "utf8"),
    );
    const mapping = [
      { selector: ":root", declaration: null },
      { selector: "body", declaration: null },
      { selector: "body", declaration: "color" },
      { selector: ".callout", declaration: null },
      { selector: ".callout", declaration: "background-color" },
      { selector: ".callout-title", declaration: null },
      { selector: ".callout-title-inner", declaration: null },
      { selector: ".callout-content", declaration: null },
      { selector: ".callout", declaration: "background-color" },
      { selector: ".callout", declaration: "--callout-color" },
      {
        selector: `.callout[data-callout="abstract"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="summary"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="tldr"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="info"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="todo"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="important"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="tip"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="info"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="success"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="check"]`,
        declaraation: "--callout-color",
      },
      {
        selector: `.callout[data-callout="done"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="question"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="help"]`,
        declaration: "--callout-color",
      },
      {
        selector: `callout[data-callout="faq"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="warning"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="caution"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="attention"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="failure"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="fail"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="missing"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="danger"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="error"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="bug"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="example"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="quote"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="cite"]`,
        declaration: "--callout-color",
      },
      { selector: ".metadata-input-longtext", declaration: "color" },
      { selector: ".popover", declaration: null },
      { selector: ".popover", declaration: "background-color" },
      { selector: ".popover", declaration: "border" },
      { selector: ".popover", declaration: "border-radius" },
      { selector: ".prompt", declaration: "background-color" },
      { selector: ".prompt", declaration: "border" },
      { selector: ".prompt", declaration: "border-radius" },
      { selector: ".prompt", declaration: "box-shadow" },
      { selector: "input.prompt-input", declaration: null },
      {
        selector: ".suggestion-item.is-selected",
        declaration: "background-color",
      },
      { selector: ".suggestion-highlight", declaration: null },
      { selector: "a.tag", declaration: "color" },
      { selector: `input[type="search"]`, declaration: null },
      {
        selector: ".backlink-pane > .tree-item-self .tree-item-inner",
        declaration: "font-weight",
      },
      { selector: ".backlink-pane > .tree-item-self", declaration: "color" },
      { selector: "h2", declaration: "color" },
      { selector: "h3", declaration: "color" },
      { selector: ".tree-item-self", declaration: "color" },
      { selector: ".tree-item-self", declaration: "font-weight" },
      { selector: ".tree-item-self", declaration: "font-size" },
      { selector: ".tree-item-self .tree-item-icon", declaration: "color" },
      { selector: ".tree-item-children", declaration: null },
      { selector: ".nav-file-title.is-active", declaration: null },
      { selector: ".nav-file-title", declaration: null },
      {
        selector: ".view-header-title-parent .view-header-breadcrumb-separator",
        declaration: "color",
      },
      {
        selector: ".markdown-rendered button.copy-code-button",
        declaration: null,
      },
      {
        selector: ".markdown-rendered button.copy-code-button:hover",
        declaration: null,
      },
      { selector: ".markdown-rendered pre code", declaration: null },
      { selector: ".markdown-rendered code", declaration: null },
      { selector: "h1", declaration: null },
      { selector: "h2", declaration: null },
      { selector: "h3", declaration: null },
      { selector: "h4", declaration: null },
      { selector: "h5", declaration: null },
      { selector: "h6", declaration: null },
      { selector: "h1 a", declaration: null },
      { selector: "h2 a", declaration: null },
      { selector: "h3 a", declaration: null },
      { selector: "h4 a", declaration: null },
      { selector: "h5 a", declaration: null },
      { selector: "h6 a", declaration: null },
      {
        selector: ".workspace-split.mod-root",
        declaration: "background-color",
      },
    ];

    mapping.forEach(({ selector, declaration }) => {
      replaceInFile(
        filePath,
        target(selector, declaration),
        getValueFromJSON(json, selector, declaration),
      );
    });
  });
}

function target(selector, declaration = null) {
  if (declaration) {
    return `//%%${selector}%${declaration}%%`;
  }
  return `//%%${selector}%%`;
}

function getValueFromJSON(json, selector, declaration = null) {
  if (json && json[selector]) {
    return jsonObjectToString(
      declaration ? json[selector][declaration] : json[selector],
    );
  }
  return "";
}

function jsonObjectToString(jsonObject) {
  return Object.entries(jsonObject)
    .map(([key, value]) => `${value.property}: ${value.value};`)
    .join("\n");
}
