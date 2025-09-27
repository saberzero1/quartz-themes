import { format } from "./extensions/formatter.mjs";
import {
  splitCombinedRules,
  combineIdenticalSelectors,
  removeEmptyRules,
  getRuleDeclarations,
  getAllDarkThemeRules,
  getAllLightThemeRules,
  getCombinedThemeVariables,
} from "./util/postcss.mjs";
import { inlineScssUseRulesAndClean } from "./util/at-use-embed.mjs";
import updateMiscFiles from "./extensions/update-misc-files.mjs";
import {
  readJsonFileAsDictionary,
  getValueFromDictionary,
  getCommandLineArgs,
  getTheme,
  isDarkTheme,
  isLightTheme,
  isFullTheme,
  getExtras,
  getFonts,
  getFilesUnderDirectoryToStringArray,
  listFoldersInDirectory,
  clearDirectoryContents,
  clearDirectories,
  ensureDirectoryExists,
  copyFileToDirectory,
  replaceInFile,
  applyRuleToString,
  generateFundingLinks,
  cleanRulesAfterRun,
  cleanup,
  getFixes,
} from "./util/util.mjs";
import {
  extractStyleSettings,
  extractClassToggleCss,
  replaceVariableValue,
  extractStyleSettingsFromFile,
} from "./util/postcss-style-settings.mjs";
import { themes, staticMode, themeToTest, testMode } from "./config.mjs";
import { prune } from "./util/prune-unused.mjs";
import colors from "./util/color-convert.mjs";
import {
  writeIndex,
  cleanCSS,
  extractCSS,
  writeStyleSettings,
  writePrettier,
} from "./util/writer.mjs";
import getManifestCollection from "./extensions/manifest.mjs";
import generateStatic from "./util/static-custom-properties.mjs";
import * as fs from "fs";
import * as path from "path";

let singleThemeName = "";

const start = Date.now();

// STEPS:
//
// 1. Get current folder/working directory.
// 2. Get the manifest JSON data for every theme.
// 3. Generate the file structure for automatic conversion.
// 4. Generate files from templates.
// 5. Populate README files.
// 6. Retrieve the variables from CSS.
// 7. Output variables theme sass file.
// 8. Generate sass for Quartz.

const args = getCommandLineArgs();

if (args.includes("--copy")) {
  const sourceFolders = listFoldersInDirectory(
    "./runner/vault/.obsidian/themes",
  );
  const folders = listFoldersInDirectory("./obsidian");

  // Create missing theme folders
  // const difference = sourceFolders.filter((x) => !folders.includes(x));
  sourceFolders.forEach((folder) => {
    // copy with subfolders
    fs.cpSync(
      `./runner/vault/.obsidian/themes/${folder}`,
      `./obsidian/${folder.replaceAll("’")}`,
      { recursive: true },
    );
  });
}

const manifestCollection = getManifestCollection();

// STEP 3
clearDirectoryContents(`./themes`);

manifestCollection.forEach((manifest) => {
  if (!fs.existsSync(`./themes/${getTheme(manifest)}`)) {
    fs.mkdirSync(`./themes/${getTheme(manifest)}`);
  }
});

// README.md
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./templates/README.md`,
    `./themes/${getTheme(manifest)}`,
  );
});

manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_NAME%",
    getValueFromDictionary(manifest, "name"),
  );
});
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_NAME_SANITIZED%",
    getTheme(manifest),
  );
});
manifestCollection.forEach((manifest) => {
  const authorValue =
    getValueFromDictionary(manifest, "author") !== ""
      ? getValueFromDictionary(manifest, "author")
      : "No author provided";
  const authorUrlValue =
    getValueFromDictionary(manifest, "authorUrl") !== ""
      ? getValueFromDictionary(manifest, "authorUrl")
      : "";
  const authorString =
    authorUrlValue !== ""
      ? `<a href="${authorUrlValue}" target="_blank" rel="noopener noreferrer">${authorValue}</a>`
      : authorValue;
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_AUTHOR%",
    authorString,
  );
});
manifestCollection.forEach((manifest) => {
  const result = generateFundingLinks(manifest);
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_AUTHOR_DONATE_URL%",
    result,
  );
});
manifestCollection.forEach((manifest) => {
  fs.copyFileSync(
    `./runner/results/${getTheme(manifest)}/_index.scss`,
    `./themes/${getTheme(manifest)}/_index.scss`,
  );
});
manifestCollection.forEach((manifest) => {
  fs.copyFileSync(
    `./runner/results/${getTheme(manifest)}/publish.css`,
    `./themes/${getTheme(manifest)}/publish.css`,
  );
});
updateMiscFiles(manifestCollection);
