/*
steps:

- Extract the individual CSS declarations from the CSS files.
- Convert the CSS declarations to a JSON dictionary format.
- Write the JSON dictionary to a file.
- Combine the JSON dictionaries from multiple CSS files into a single JSON file.
- Apply the JSON dictionary to the SCSS templates.

*/
import { readFileSync, writeFileSync } from "fs";

import { format, check, checkAndFormat } from "./extensions/formatter.mjs";
import getManifestCollection from "./extensions/manifest.mjs";
import {
  createDefaultDirectories,
  clearDefaultDirectories,
} from "./extensions/directories.mjs";
import { copyFiles } from "./extensions/files.mjs";
import replaceBefore from "./extensions/replacers/before.mjs";
import { replaceAfter } from "./extensions/replacers/after.mjs";
import { convert } from "./extensions/parsers/converter.mjs";
import toJSON from "./extensions/parsers/to-json.mjs";
import combineLightDarkInJson from "./extensions/parsers/combine-light-dark-in-json.mjs";
import injectJSON from "./extensions/parsers/merge-json.mjs";
import replaceStaticProperties from "./extensions/parsers/static.mjs";
import combineThemeCSSWithObsidianCSS from "./extensions/parsers/combine-theme-css-with-obsidian-css.mjs";
import flattenTheme from "./extensions/flatten-theme.mjs";
import updateMiscFiles from "./extensions/update-misc-files.mjs";
import filterJSONSelectors from "./extensions/filter-json-selectors.mjs";
import replaceJSONSelectors from "./extensions/parsers/replace-json-selectors.mjs";

import lightningcss from "./extensions/packages/lightningcss.mjs";
import postcss from "postcss";
import postcssDiscardComments from "postcss-discard-comments";
import { getTheme } from "./util/util.mjs";

const inputParameters = process.argv.slice(2);

const fullStartTime = Date.now();

// 127: kakano
// 97: fancy-a-story
const manifestCollection = inputParameters.includes("--single")
  ? [getManifestCollection()[127]]
  : getManifestCollection();

const fullMode = inputParameters.includes("--full");

const regenerateCSS = inputParameters.includes("--regenerate-css");

clearDefaultDirectories(manifestCollection);
createDefaultDirectories(manifestCollection);
copyFiles(manifestCollection, fullMode);

replaceBefore(manifestCollection);

let baseCSS = readFileSync("./app.css", "utf-8");
writeFileSync("./app_processed.css", preprocess(baseCSS, {}));
let processedCSS = readFileSync("./app_processed.css", "utf-8");

manifestCollection.forEach((manifest) => {
  let themeName = getTheme(manifest);

  let themeCSS = format(
    readFileSync(`./obsidian/${manifest.name}/theme.css`, "utf-8"),
    "css",
  );

  let processedThemeCSS = preprocess(themeCSS);

  let combinedCSS = processedCSS + "\n" + processedThemeCSS;

  let processedCombinedCSS = lightningcss(combinedCSS);

  writeFileSync(`./atomic/${themeName}/base.css`, processedCombinedCSS);

  console.log(`Processed CSS for theme: ${manifest.name}`);
});

const fullEndTime = Date.now();
const fullTimeTaken = ((fullEndTime - fullStartTime) / 1000).toFixed(2);

console.log(
  `Combining CSS for all themes took ${Math.floor(fullTimeTaken / 60)}m${Math.floor(fullTimeTaken % 60)}s.`,
);

process.exit(0);

function preprocess(css) {
  css = format(css, "css");

  css = postcss(postcssDiscardComments({ removeAll: true })).process(css).css;

  css = format(css, "css");

  css = lightningcss(css, {});

  css = format(css, "css");

  return css;
}

function transform(css) {
  css = format(css, "css");

  return css;
}

function postprocess(css) {
  return css;
}

if (fullMode) {
  combineThemeCSSWithObsidianCSS(manifestCollection, regenerateCSS);

  toJSON(manifestCollection);

  replaceJSONSelectors(manifestCollection);

  //combineLightDarkInJson(manifestCollection);

  //injectJSON(manifestCollection);

  //replaceStaticProperties(manifestCollection);

  filterJSONSelectors(manifestCollection);
}

replaceAfter(manifestCollection);

flattenTheme();

updateMiscFiles(manifestCollection);
