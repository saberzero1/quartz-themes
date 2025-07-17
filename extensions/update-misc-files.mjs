import {
  unlinkSync,
  copyFileSync,
  existsSync,
  readFileSync,
  writeFileSync,
} from "fs";
import { writePrettier } from "../util/writer.mjs";
import {
  replaceInFile,
  isDarkTheme,
  isFullTheme,
  getTheme,
  getFilesUnderDirectoryToStringArray,
  listFoldersInDirectory,
} from "../util/util.mjs";
import { themes } from "../config.mjs";
import { format } from "./formatter.mjs";

export default function updateMiscFiles(manifestCollection) {
  // Rebuild README.md
  console.log("Updating compatibility table...");

  // Prepare README.md
  unlinkSync("README.md");
  copyFileSync("README-TEMPLATE.md", "README.md");

  // Build compatibility table
  const compatibilityTableLines = [];
  const themeList = [];
  manifestCollection.forEach((manifest) => {
    themeList.push({ theme: getTheme(manifest, "name"), name: manifest.name });
  });
  themeList.sort();
  themeList.forEach((themeName) => {
    const mode = isFullTheme(themeName.theme)
      ? "both"
      : isDarkTheme(themeName.theme)
        ? "dark"
        : "light";
    const compatibilityArray = themes[themeName.theme]["compatibility"];
    const license = themes[themeName.theme]["license"]["spdx_id"];
    const licenseString = `<a href="obsidian/${themeName.name}/LICENSE.md"><svg src="media/license/${license.toLowerCase()}.svg" alt="${license.toUpperCase()}"/></a>`;
    let compatibilityString = "";
    compatibilityArray.forEach((compatibility) => {
      compatibilityString += `<img src="media/${compatibility}.svg" alt="${compatibility.toUpperCase()}"/> `;
    });
    compatibilityTableLines.push(
      `\n| <img src="media/${mode}.svg" alt="${mode.toUpperCase()}"/> | \`${themeName.theme}\` | ${compatibilityString.trim()} | [live preview](https://quartz-themes.github.io/${themeName.theme}/syntax) | ${licenseString} |`,
    );
  });

  const compatibilityTable =
    "| Supported Modes | Obsidian Theme Name | Theme Compatibility Status | Live Preview | Theme License |\n| --- | --- | --- | --- | --- |".concat(
      ...compatibilityTableLines,
    );

  // Write result to README.md
  replaceInFile(`./README.md`, "//COMPATIBILITY_TABLE", compatibilityTable);
  // Clean up comments
  replaceInFile(`./README.md`, /\<\!\-\-.*?\-\-\>/gms, "");

  // Format README.md
  const readmeContent = readFileSync(`./README.md`, "utf8");
  const formattedReadme = format(readmeContent, "markdown");
  writeFileSync(`./README.md`, formattedReadme, "utf8");

  console.log("Finished updating compatibility table");

  console.log("Updating Quartz Syncer file list...");

  // Prepare Quartz Syncer file list
  if (existsSync("quartz-syncer-file-list.json"))
    unlinkSync("quartz-syncer-file-list.json");
  if (existsSync("theme-list")) unlinkSync("theme-list");

  // Build Quartz Syncer file list as json
  const quartzSyncerFileList = {};
  const themeListFileList = [];

  const themeFolders = listFoldersInDirectory(`./themes`);

  // Get a list of all files under each theme directory
  themeFolders.forEach((folder) => {
    const files = getFilesUnderDirectoryToStringArray(
      `./themes/${folder}`,
      folder,
    );
    const themeName = folder.replace(/^\.\//, "");
    quartzSyncerFileList[themeName] = files;
    themeListFileList.push(themeName);
  });

  // Write the file list to quartz-syncer-file-list.json
  writePrettier(
    `./quartz-syncer-file-list.json`,
    format(JSON.stringify(quartzSyncerFileList, null, 2), "json"),
    "utf8",
  );

  // Write the theme list to theme-list
  writePrettier(`./theme-list`, themeListFileList.join("\n"), "utf8");

  console.log("Finished updating Quartz Syncer file list");
}
