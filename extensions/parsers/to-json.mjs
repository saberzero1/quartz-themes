import { readFileSync, writeFileSync, existsSync } from "fs";
import { format } from "../formatter.mjs";
import { convert } from "./converter.mjs";
import { getTheme } from "../../util/util.mjs";
import stripComments from "../packages/strip-css-comments.mjs";

export default function toJSON(manifestCollection) {
  const defaultObsidianCSS = format(readFileSync("./app.css", "utf-8"), "css");
  writeFileSync("./app.css", defaultObsidianCSS);

  /*
  const defaultObsidianJSON = convert(defaultObsidianCSS, true);
  writeFileSync(
    "./app.json",
    format(JSON.stringify(defaultObsidianJSON), "json"),
  );
  */

  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    // let cssContent = "";
    /*
    if (!existsSync(`./atomic/${theme}/theme.css`)) {
      cssContent = readFileSync(
        `./obsidian/${manifest.name}/theme.css`,
        "utf-8",
      );
    } else {*/
    const cssContent = readFileSync(
      `./atomic/${theme}/obsidian-plus-theme.css`,
      "utf-8",
    );
    /*}
    const formattedCSS = format(stripComments(cssContent), "css");
    if (formattedCSS !== cssContent) {
      writeFileSync(`./atomic/${theme}/theme.css`, formattedCSS);
      console.log(`Wrote formatted CSS for theme: ${theme}`);
    }
    console.log(`Converting theme: ${theme}`);*/
    const jsonContent = convert(cssContent);
    writeFileSync(
      `./atomic/${theme}/theme.json`,
      format(JSON.stringify(jsonContent), "json"),
    );
    console.log(`Converted theme: ${theme} to JSON`);
  });
}
