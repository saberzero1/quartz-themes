import { readFileSync, writeFileSync } from "fs";
import { format } from "../formatter.mjs";
import { getTheme } from "../../util/util.mjs";
import { cleanCSS } from "../../util/writer.mjs";
import { themes } from "../../config.mjs";

export default function combineThemeCssWithObsidianCss(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    const obsidianName = manifest.name;
    const theme = getTheme(manifest);
    const mode =
      themes[theme].modes.length == 2 ? "both" : themes[theme].modes[0];
    const obsidianCSS = readFileSync("./app.css", "utf-8");
    const themeCSS = readFileSync(
      `./obsidian/${obsidianName}/theme.css`,
      "utf-8",
    );
    const combinedCSS = cleanCSS(obsidianCSS, themeCSS, mode, false);

    writeFileSync(
      `./atomic/${theme}/obsidian-plus-theme.css`,
      format(combinedCSS, "css"),
    );

    console.log(
      `Combined Obsidian CSS with theme CSS for ${theme} in mode ${mode}`,
    );
  });
}
