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
import { readFileSync, writeFileSync } from "fs";
import { format } from "../formatter.mjs";

export default function replaceAfter(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    const filePath = `./themes/${theme}/_index.scss`;
    const darkFilePath = `./themes/${theme}/_dark.scss`;
    const lightFilePath = `./themes/${theme}/_light.scss`;
    const json = JSON.parse(
      readFileSync(`./atomic/${theme}/theme.json`, "utf8"),
      //readFileSync(`./atomic/${theme}/theme-static.json`, "utf8"),
    );
    const mapping = [
      { selector: ":root", declaration: "" },
      { selector: "body", declaration: "" },
      { selector: "body", declaration: "color" },
      { selector: ".callout", declaration: "" },
      { selector: ".callout", declaration: "background-color" },
      { selector: ".callout-title", declaration: "" },
      { selector: ".callout-title-inner", declaration: "" },
      { selector: ".callout-content", declaration: "" },
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
        selector: `.callout[data-callout="hint"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="success"]`,
        declaration: "--callout-color",
      },
      {
        selector: `.callout[data-callout="check"]`,
        declaration: "--callout-color",
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
        selector: `.callout[data-callout="faq"]`,
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
      { selector: ".popover", declaration: "" },
      { selector: ".popover", declaration: "background-color" },
      { selector: ".popover", declaration: "border" },
      { selector: ".popover", declaration: "border-radius" },
      { selector: ".prompt", declaration: "background-color" },
      { selector: ".prompt", declaration: "border" },
      { selector: ".prompt", declaration: "border-radius" },
      { selector: ".prompt", declaration: "box-shadow" },
      { selector: "input.prompt-input", declaration: "" },
      {
        selector: ".suggestion-item.is-selected",
        declaration: "background-color",
      },
      { selector: ".suggestion-highlight", declaration: "" },
      { selector: "a.tag", declaration: "color" },
      { selector: `input[type="search"]`, declaration: "" },
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
      { selector: ".tree-item-children", declaration: "" },
      { selector: ".nav-file-title.is-active", declaration: "" },
      { selector: ".nav-file-title", declaration: "" },
      {
        selector: ".view-header-title-parent .view-header-breadcrumb-separator",
        declaration: "color",
      },
      {
        selector: ".markdown-rendered button.copy-code-button",
        declaration: "",
      },
      {
        selector: ".markdown-rendered button.copy-code-button:hover",
        declaration: "",
      },
      { selector: ".markdown-rendered pre", declaration: "" },
      { selector: ".markdown-rendered pre code", declaration: "" },
      { selector: ".markdown-rendered code", declaration: "" },
      { selector: "h1", declaration: "" },
      { selector: "h2", declaration: "" },
      { selector: "h3", declaration: "" },
      { selector: "h4", declaration: "" },
      { selector: "h5", declaration: "" },
      { selector: "h6", declaration: "" },
      { selector: "h1 a", declaration: "" },
      { selector: "h2 a", declaration: "" },
      { selector: "h3 a", declaration: "" },
      { selector: "h4 a", declaration: "" },
      { selector: "h5 a", declaration: "" },
      { selector: "h6 a", declaration: "" },
      {
        selector: ".workspace-split.mod-root",
        declaration: "background-color",
      },
    ];

    const darkMapping = [
      { selector: ".theme-dark", declaration: "" },
      { selector: "body", declaration: "--accent-h" },
      { selector: "body", declaration: "--accent-s" },
      { selector: "body", declaration: "--accent-l" },
    ];

    const lightMapping = [
      { selector: ".theme-light", declaration: "" },
      { selector: "body", declaration: "--accent-h" },
      { selector: "body", declaration: "--accent-s" },
      { selector: "body", declaration: "--accent-l" },
    ];

    mapping.forEach(({ selector, declaration }) => {
      replaceInFile(
        filePath,
        target(selector, declaration),
        getValueFromJSON(json, selector, declaration),
      );
    });

    if (isDarkTheme(theme)) {
      darkMapping.forEach(({ selector, declaration }) => {
        replaceInFile(
          darkFilePath,
          target(selector, declaration),
          getValueFromJSON(json, selector, declaration),
        );
      });
    }

    if (isLightTheme(theme)) {
      lightMapping.forEach(({ selector, declaration }) => {
        replaceInFile(
          lightFilePath,
          target(selector, declaration),
          getValueFromJSON(json, selector, declaration),
        );
      });
    }

    let fixes = "";
    const themeFixes = getFixes(theme);
    themeFixes.forEach((extra) => {
      fixes += `\n@use "extras/fix/${extra}.scss";`;
    });

    const fileContent = readFileSync(filePath, "utf8");
    const updatedContent = fileContent.replace(
      target("/\/\/%%FIXES%%/g"),
      fixes,
    );
    const cleanedContent = updatedContent.split("\n").slice(0, -3).join("\n");
    writeFileSync(filePath, format(cleanedContent, "scss"), "utf8");

    console.log(`Replaced after properties in theme: ${theme}`);
  });
}

function target(selector, declaration = "") {
  if (declaration && declaration.length > 0) {
    return `//%%${selector}%${declaration}%%`;
  }
  return `//%%${selector}%%`;
}

function getValueFromJSON(json, selector, declaration = "") {
  if (json && json[selector]) {
    return jsonObjectToString(json[selector], declaration);
  }
  return "";
}

function jsonObjectToString(jsonObject, declaration = "") {
  let result = "";
  if (declaration.length > 0) {
    result = Object.entries(jsonObject)
      .filter(([key, value]) => value.property === declaration)
      .map(([key, value]) => `${value.property}: ${value.value};`)
      .join("\n");
  } else {
    result = Object.entries(jsonObject)
      .map(([key, value]) => `${value.property}: ${value.value};`)
      .join("\n");
  }
  return result;
}
