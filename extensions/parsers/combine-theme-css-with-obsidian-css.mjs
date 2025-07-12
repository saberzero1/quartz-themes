import { readFileSync, writeFileSync, existsSync, rmSync } from "fs";
import { format } from "../formatter.mjs";
import { getTheme } from "../../util/util.mjs";
//import { cleanCSS } from "../../util/writer.mjs";
import { themes } from "../../config.mjs";
import postcss from "postcss";
import calc from "postcss-calc";
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

export default function combineThemeCssWithObsidianCss(
  manifestCollection,
  regenerateCSS = false,
) {
  manifestCollection.forEach((manifest) => {
    if (regenerateCSS) {
      rmSync(`./atomic/${getTheme(manifest)}/skip-css-regeneration`, {
        force: true,
      });
    }

    const start = Date.now();

    const obsidianName = manifest.name;
    const theme = getTheme(manifest);
    const mode =
      themes[theme].modes.length == 2 ? "both" : themes[theme].modes[0];
    const obsidianCSS = readFileSync("./app.css", "utf-8");
    const themeCSS = readFileSync(
      `./obsidian/${obsidianName}/theme.css`,
      "utf-8",
    );

    if (existsSync(`./atomic/${theme}/skip-css-regeneration`)) {
      return;
    }

    //const combinedCSS = cleanCSS(obsidianCSS, themeCSS, mode, false);
    let combinedCSS = format(`${obsidianCSS}\n${themeCSS}`, "css")
      .replace(/\/\*.*?\*\//gms, "")
      .replace(
        /^\s*?@(?:-moz-|-webkit-)?(?:keyframes|font-face)\s+[\w\-]+\s*?\{.*?^\}$/gms,
        "",
      )
      .replace(
        /^\s*?@\w+?\s*?[\w\-\(\)\:\s\*\<\>\=]*?\s*?\{(.*?)^\}$/gms,
        "$1",
      );
    let compareString = "";
    let index = 0;

    while (index < 10 && combinedCSS !== compareString) {
      compareString = combinedCSS;

      combinedCSS = applyPostcssPlugin(combinedCSS, postcssCombineMediaQuery);
      combinedCSS = applyPostcssPlugin(
        combinedCSS,
        postcssCombineDuplicatedSelectors,
        { removeDuplicatedProperties: true },
      );
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssCustomProperties, {
        preserve: false,
      });
      combinedCSS = applyPostcssPlugin(combinedCSS, calc, { preserve: false });
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssRelativeColorSyntax);
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssColorMixFunction);
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssColorHwb);
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssColorHsl);
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssColorRgb);
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssPseudoIs);
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssSelectorNot);
      combinedCSS = applyPostcssPlugin(combinedCSS, postcssRgbaHex, {
        silent: true,
      });

      combinedCSS = combinedCSS
        .replace(
          /^\s*?@(?:-moz-|-webkit-)?(?:keyframes|font-face)\s+[\w\-]+\s*?\{.*?^\}$/gms,
          "",
        )
        .replace(
          /^\s*?@\w+?\s*?[\w\-\(\)\:\s\*\<\>\=]*?\s*?\{(.*?)^\}$/gms,
          "$1",
        );
      index++;
    }

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

    console.log(
      `Combining CSS for ${theme} in mode ${mode} took ${index} iterations and ${Math.floor(timeTaken / 60)}m${Math.floor(timeTaken % 60)}s.`,
    );
  });
}

function applyPostcssPlugin(css, plugin, options = {}) {
  try {
    return postcss([plugin(options)]).process(css).css;
  } catch (error) {
    //console.error(`Error applying PostCSS plugin: ${error.message}`);
    return css; // Return the original CSS if an error occurs
  }
}
