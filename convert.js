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
import getThemeCollection from "./extensions/themelist.mjs";
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
const themeCollection = getThemeCollection();

// STEP 3
clearDirectoryContents(`./themes`);

themeCollection.forEach((manifest) => {
  if (!fs.existsSync(`./themes/${manifest.name}`)) {
    fs.mkdirSync(`./themes/${manifest.name}`);
  }
});

// README.md
themeCollection.forEach((manifest) => {
  copyFileToDirectory(`./templates/README.md`, `./themes/${manifest.name}`);
});

themeCollection.forEach((manifest) => {
  const nameValue = manifest.name.split(".")[0];
  const fullName = manifestCollection.find((m) => m.name === nameValue)?.name;
  replaceInFile(
    `./themes/${manifest.name}/README.md`,
    "%OBSIDIAN_THEME_NAME%",
    fullName ? fullName : nameValue,
  );
});
themeCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${manifest.name}/README.md`,
    "%OBSIDIAN_THEME_NAME_SANITIZED%",
    manifest.name,
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
themeCollection.forEach((manifest) => {
  fs.copyFileSync(
    `./runner/results/${manifest.name}/_index.scss`,
    `./themes/${manifest.name}/_index.scss`,
  );
});
themeCollection.forEach((manifest) => {
  fs.copyFileSync(
    `./runner/results/${manifest.name}/publish.css`,
    `./themes/${manifest.name}/publish.css`,
  );
});
updateMiscFiles(manifestCollection, themeCollection);
