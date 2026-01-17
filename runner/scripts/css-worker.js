import postcss from "postcss";
import calc from "postcss-calc";
import postcssMergeLonghand from "postcss-merge-longhand";
import postcssScss from "postcss-scss";
import { compileString } from "sass";
import * as prettier from "prettier";

function mergeLonghandProperties(css, syntax = "scss") {
  try {
    const postcssOptions = { from: undefined };
    if (syntax === "scss") {
      postcssOptions.syntax = postcssScss;
    }
    const processor = postcss()
      .use(postcssMergeLonghand())
      .use(calc({ preserve: false }));
    return processor.process(css, postcssOptions).css;
  } catch (e) {
    return css;
  }
}

async function formatWithPrettier(content, parser) {
  try {
    return await prettier.format(content, {
      parser,
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: false,
      trailingComma: "all",
    });
  } catch (e) {
    return content;
  }
}

export default async function processCSS({
  scssContent,
  publishScssContent,
  themeName,
}) {
  let resultScss = scssContent;
  let resultPublishCss = publishScssContent;

  try {
    resultScss = mergeLonghandProperties(scssContent, "scss");
  } catch (e) {}

  try {
    resultPublishCss = compileString(publishScssContent).css;
    resultPublishCss = resultPublishCss.replace(/\/\*[\s\S]*?\*\//g, "");
    resultPublishCss = mergeLonghandProperties(resultPublishCss, "css");
  } catch (e) {
    console.error(`Error compiling Publish CSS for ${themeName}:`, e.message);
  }

  const [formattedScss, formattedCss] = await Promise.all([
    formatWithPrettier(resultScss, "scss"),
    formatWithPrettier(resultPublishCss, "css"),
  ]);

  return {
    themeName,
    resultScss: formattedScss,
    resultPublishCss: formattedCss,
  };
}
