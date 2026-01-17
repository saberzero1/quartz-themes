import * as fs from "fs";
import * as path from "path";
import { staticMode, testMode, themes, themeToTest } from "./config.mjs";
import { format } from "./extensions/formatter.mjs";
import getManifestCollection from "./extensions/manifest.mjs";
import getThemeCollection from "./extensions/themelist.mjs";
import updateMiscFiles from "./extensions/update-misc-files.mjs";
import { inlineScssUseRulesAndClean } from "./util/at-use-embed.mjs";
import colors from "./util/color-convert.mjs";
import {
  extractClassToggleCss,
  extractStyleSettings,
  extractStyleSettingsFromFile,
  replaceVariableValue,
} from "./util/postcss-style-settings.mjs";
import {
  combineIdenticalSelectors,
  getAllDarkThemeRules,
  getAllLightThemeRules,
  getCombinedThemeVariables,
  getRuleDeclarations,
  removeEmptyRules,
  splitCombinedRules,
} from "./util/postcss.mjs";
import { prune } from "./util/prune-unused.mjs";
import generateStatic from "./util/static-custom-properties.mjs";
import {
  applyRuleToString,
  cleanRulesAfterRun,
  cleanup,
  clearDirectories,
  clearDirectoryContents,
  copyFileToDirectory,
  ensureDirectoryExists,
  generateFundingLinks,
  getCommandLineArgs,
  getExtras,
  getFilesUnderDirectoryToStringArray,
  getFixes,
  getFonts,
  getTheme,
  getValueFromDictionary,
  isDarkTheme,
  isFullTheme,
  isLightTheme,
  listFoldersInDirectory,
  readJsonFileAsDictionary,
  replaceInFile,
  sanitizeFilenamePreservingEmojis as sanitize,
} from "./util/util.mjs";
import {
  cleanCSS,
  extractCSS,
  writeIndex,
  writePrettier,
  writeStyleSettings,
} from "./util/writer.mjs";

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

themeCollection.forEach((theme) => {
  const manifest = manifestCollection.find(
    (m) => sanitize(m.name) === theme.name.split(".")[0],
  );
  console.log(manifest);
  replaceInFile(
    `./themes/${theme.name}/README.md`,
    "%OBSIDIAN_THEME_NAME%",
    manifest.name,
  );
});
themeCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${manifest.name}/README.md`,
    "%OBSIDIAN_THEME_NAME_SANITIZED%",
    manifest.name,
  );
});
themeCollection.forEach((theme) => {
  const manifest = manifestCollection.find(
    (m) => sanitize(m.name) === theme.name.split(".")[0],
  );
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
    `./themes/${theme.name}/README.md`,
    "%OBSIDIAN_THEME_AUTHOR%",
    authorString,
  );
});
themeCollection.forEach((theme) => {
  const manifest = manifestCollection.find(
    (m) => sanitize(m.name) === theme.name.split(".")[0].toLowerCase(),
  );
  const result = generateFundingLinks(manifest);
  replaceInFile(
    `./themes/${theme.name}/README.md`,
    "%OBSIDIAN_THEME_AUTHOR_DONATE_URL%",
    result,
  );
});
themeCollection.forEach((manifest) => {
  const readmePath = `./themes/${manifest.name}/README.md`;
  const content = fs.readFileSync(readmePath, "utf8");
  fs.writeFileSync(readmePath, format(content, "markdown"), "utf8");
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
