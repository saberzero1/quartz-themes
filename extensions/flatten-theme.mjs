import {
  existsSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
  rmSync,
} from "fs";
import { join } from "path";
import { listFoldersInDirectory } from "../util/util.mjs";
import { inlineScssUseRulesAndClean } from "../util/at-use-embed.mjs";
import { prune } from "../util/prune-unused.mjs";
import { format } from "./formatter.mjs";

export default function flattenTheme() {
  // Get all directories under themes
  const themeFolders = listFoldersInDirectory(`./themes`);

  // Embed @use rules in each theme's _index.scss
  themeFolders.forEach((folder) => {
    const themePath = `./themes/${folder}/_index.scss`;
    if (existsSync(themePath)) {
      // Combine all @use rules in the _index.scss file
      const scssContent = readFileSync(themePath, "utf8");
      const processedScss = inlineScssUseRulesAndClean(scssContent, themePath);
      const prunedScss = prune(processedScss);
      writeFileSync(themePath, format(prunedScss, "scss"), "utf8");

      // Remove all directories under themes/${folder}
      const themeDir = `./themes/${folder}`;
      const items = readdirSync(themeDir);
      items.forEach((item) => {
        const itemPath = join(themeDir, item);
        if (statSync(itemPath).isDirectory()) {
          rmSync(itemPath, { recursive: true });
        }
      });
    }
  });
}
