import { readFileSync, writeFileSync, existsSync, rmSync } from "fs";
import { format } from "../formatter.mjs";
import { getTheme } from "../../util/util.mjs";
//import { cleanCSS } from "../../util/writer.mjs";
import { themes } from "../../config.mjs";
import { splitCombinedRules } from "../../util/postcss.mjs";
import postcss from "postcss";
import postcssCssVariables from "postcss-css-variables";
import calc from "postcss-calc";
import postcssNesting from "postcss-nesting";
import postcssCustomProperties from "postcss-custom-properties";
import postcssRelativeColorSyntax from "@csstools/postcss-relative-color-syntax";
import postcssColorMixFunction from "@csstools/postcss-color-mix-function";
import postcssCombineDuplicatedSelectors from "postcss-combine-duplicated-selectors";
import postcssCombineMediaQuery from "postcss-combine-media-query";
import postcssColorHwb from "postcss-color-hwb";
import postcssColorHsl from "postcss-color-hsl";
import postcssColorRgb from "postcss-color-rgb";
import postcssPseudoIs from "postcss-pseudo-is";
import postcssSelectorNot from "postcss-selector-not";
import postcssRgbaHex from "postcss-rgba-hex";
import postcssUnprefix from "postcss-unprefix";
import { parentPort, workerData } from "worker_threads";

// This function contains the logic from your original forEach loop
function processTheme() {
  try {
    const { manifest, obsidianCSS, regenerateCSS } = workerData;
    const start = Date.now();

    if (regenerateCSS) {
      rmSync(`./atomic/${getTheme(manifest)}/skip-css-regeneration`, {
        force: true,
      });
    }

    const theme = getTheme(manifest);
    const mode =
      themes[theme].modes.length == 2 ? "both" : themes[theme].modes[0];

    if (existsSync(`./atomic/${theme}/skip-css-regeneration`)) {
      // Signal that this worker is done (skipped)
      parentPort.postMessage({ status: "skipped", theme });
      return;
    }

    const themeCSS = format(
      readFileSync(`./obsidian/${manifest.name}/theme.css`, "utf-8"),
      "css",
    );

    let combinedCSS = splitCombinedRules(
      format(`${obsidianCSS}\n${themeCSS}`, "css").replace(
        /\/\*.*?\*\//gms,
        "",
      ),
    );
    let compareString = "";
    let index = 0;

    while (index < 10 && combinedCSS !== compareString) {
      compareString = combinedCSS;
      combinedCSS = singlePass(combinedCSS);
      index++;
    }

    combinedCSS = combinedCSS.replace(/(?<=[^\}])\n\n/gms, "\n");

    combinedCSS = postcss([postcssCssVariables({ preserve: false })]).process(
      format(combinedCSS, "css"),
      {},
    ).css;

    writeFileSync(
      `./atomic/${theme}/obsidian-plus-theme.css`,
      format(combinedCSS, "css"),
    );

    if (!existsSync(`./atomic/${theme}/skip-css-regeneration`)) {
      writeFileSync(
        `./atomic/${theme}/skip-css-regeneration`,
        "This file is used as a flag to skip CSS regeneration. Delete this file to regenerate the CSS for this theme.",
      );
    }

    const end = Date.now();
    const timeTaken = ((end - start) / 1000).toFixed(2);
    const logMessage = `Combining CSS for ${theme} in mode ${mode} took ${index} iterations and ${Math.floor(timeTaken / 60)}m${Math.floor(timeTaken % 60)}s.`;

    // Send the result back to the main thread
    parentPort.postMessage({ status: "success", message: logMessage });
  } catch (error) {
    // Send error back to the main thread
    parentPort.postMessage({ status: "error", message: error.message });
    throw error; // Ensure the worker exits with an error code
  }
}

function singlePass(combinedCSS) {
  let tempCSS = combinedCSS;
  try {
    combinedCSS = postcss().use(postcssNesting()).process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss()
      .use(postcssCombineMediaQuery())
      .process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss()
      .use(
        postcssCombineDuplicatedSelectors({ removeDuplicatedProperties: true }),
      )
      .process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss()
      .use(postcssCustomProperties({ preserve: false }))
      .process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss()
      .use(calc({ preserve: false }))
      .process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss()
      .use(postcssRelativeColorSyntax())
      .process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss()
      .use(postcssColorMixFunction())
      .process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss().use(postcssColorHwb()).process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss().use(postcssColorHsl()).process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss().use(postcssColorRgb()).process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss().use(postcssPseudoIs()).process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss().use(postcssSelectorNot()).process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = postcss()
      .use(postcssRgbaHex({ silent: true }))
      .process(combinedCSS).css;
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = combinedCSS
      .replace(
        /^\s*?@(?:-moz-|-webkit-)?(?:keyframes|font-face)\s+[\w\-]+\s*?\{.*?^\}$/gms,
        "",
      )
      .replace(/^\s*?@\w+?\s*?[\w\-\(\)\:\s\*\<\>\=]*?\s*?\{(.*?)^\}$/gms, "$1")
      .replace(/^\}$\n(?!\n)/gms, "}\n\n");
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if nesting fails
  }
  tempCSS = combinedCSS;
  try {
    combinedCSS = format(combinedCSS, "css");
  } catch (error) {
    combinedCSS = tempCSS; // Revert to the original CSS if formatting fails
  }

  return combinedCSS;
}

processTheme();
