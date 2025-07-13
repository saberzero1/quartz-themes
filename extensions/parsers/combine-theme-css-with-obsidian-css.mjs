import { readFileSync, writeFileSync, existsSync, rmSync } from "fs";
import { format } from "../formatter.mjs";
import { getTheme } from "../../util/util.mjs";
//import { cleanCSS } from "../../util/writer.mjs";
import { themes } from "../../config.mjs";
import { splitCombinedRules } from "../../util/postcss.mjs";
import postcss from "postcss";
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

export default function combineThemeCssWithObsidianCss(
  manifestCollection,
  regenerateCSS = false,
) {
  const fullStartTime = Date.now();
  const obsidianCSSRaw = readFileSync("./app.css", "utf-8");
  let obsidianCSS = "";

  if (!existsSync("./skip-css-regeneration") || regenerateCSS) {
    rmSync("./skip-css-regeneration", { force: true });

    obsidianCSS = format(
      splitCombinedRules(
        format(obsidianCSSRaw, "css").replace(/\/\*.*?\*\//gms, ""),
        /*.replace(/^\s*?@font-face.*?\{.*?^\}$/gms, "")
          .replace(
            /^\s*?@(?:-moz-|-webkit-)?(?:keyframes|font-face)\s+[\w\-]+\s*?\{.*?^\}$/gms,
            "",
          )
          .replace(/^(\s*?)@[^\{$]+?\s*?[^\{$]*?\s*?\{(.*?)^\1\}$/gms, "$2")
          .replace(/\}\n(?!\n)/gms, "}\n\n")
          .replace(/(?<!\})\n{2,}/gms, "\n"),*/
      ),
      "css",
    );

    writeFileSync(
      "./skip-css-regeneration",
      "This file is used as a flag to skip CSS regeneration. Delete this file to regenerate the CSS for the default Obsidian theme.",
    );

    writeFileSync(`./app_converted.css`, format(obsidianCSS, "css"));
  } else {
    obsidianCSS = format(readFileSync("./app_converted.css"), "css");
  }

  manifestCollection.forEach((manifest) => {
    if (regenerateCSS) {
      rmSync(`./atomic/${getTheme(manifest)}/skip-css-regeneration`, {
        force: true,
      });
    }

    const themeCSS = format(
      readFileSync(`./obsidian/${manifest.name}/theme.css`, "utf-8"),
      "css",
    );

    const start = Date.now();

    const theme = getTheme(manifest);
    const mode =
      themes[theme].modes.length == 2 ? "both" : themes[theme].modes[0];

    if (existsSync(`./atomic/${theme}/skip-css-regeneration`)) {
      return;
    }

    //const combinedCSS = cleanCSS(obsidianCSS, themeCSS, mode, false);
    let combinedCSS = splitCombinedRules(
      format(`${obsidianCSS}\n${themeCSS}`, "css").replace(
        /\/\*.*?\*\//gms,
        "",
      ),
      /*.replace(/^\s*?@font-face.*?\{.*?^\}$/gms, "")
        .replace(
          /^\s*?@(?:-moz-|-webkit-)?(?:keyframes)\s+[\w\-]+\s*?\{.*?^\}$/gms,
          "",
        )
        .replace(/^(\s*?)@[^\{$]+?\s*?[^\{$]*?\s*?\{(.*?)^\1\}$/gms, "$2")
        .replace(/\}\n(?!\n)/gms, "}\n\n")
        .replace(/(?<!\})\n{2,}/gms, "\n"),*/
    );
    let compareString = "";
    let index = 0;

    while (index < 10 && combinedCSS !== compareString) {
      compareString = combinedCSS;

      combinedCSS = singlePass(combinedCSS);

      index++;
    }

    combinedCSS = combinedCSS.replace(/(?<=[^\}])\n\n/gms, "\n");

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

  const fullEndTime = Date.now();
  const fullTimeTaken = ((fullEndTime - fullStartTime) / 1000).toFixed(2);

  console.log(
    `Combining CSS for all themes took ${Math.floor(fullTimeTaken / 60)}m${Math.floor(fullTimeTaken % 60)}s.`,
  );
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
