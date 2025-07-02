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
} from "./util/util.mjs";
import {
  extractStyleSettings,
  extractClassToggleCss,
  replaceVariableValue,
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

// Actual script
// STEP 1
const args = getCommandLineArgs();

if (args[0] === "ATOMIZE") {
  if (
    fs.existsSync(`./converted_app.css`) ||
    fs.existsSync(`./converted_app_extracted.css`)
  ) {
    throw new Error(
      "Converted app.css already exists. Please remove it before running the script again.",
    );
  }
}

ensureDirectoryExists("./style-settings");

const obsidianFolder = "./obsidian";
const atomicFolder = "./atomic";
const styleSettingsFolder = "./style-settings";
const folders = testMode
  ? [themeToTest]
  : listFoldersInDirectory(obsidianFolder);

const manifestCollection = [];

// STEP 2
if (singleThemeName === "") {
  folders.forEach((folder) => {
    manifestCollection.push(
      readJsonFileAsDictionary(`${obsidianFolder}/${folder}`, "manifest.json"),
    );
  });
} else if (singleThemeName !== "") {
  manifestCollection.push(
    readJsonFileAsDictionary(
      `${obsidianFolder}/${singleThemeName}`,
      "manifest.json",
    ),
  );
}

// STEP 3
if (folders.length === 1) {
  clearDirectoryContents(`./themes/${getTheme(manifestCollection[0])}`);
} else {
  clearDirectoryContents(`./themes`);
}

manifestCollection.forEach((manifest) => {
  ensureDirectoryExists(`./themes/${getTheme(manifest)}/extras/fonts/icons`);
  //ensureDirectoryExists(`./themes/${getTheme(manifest)}/callouts`)
  // INIT ONLY
  if (args[0] === "INIT") {
    ensureDirectoryExists(`./extras/themes/${getTheme(manifest)}`);
  } else if (args[0] !== "") {
    singleThemeName = args[0];
  }
});

// STEP 4
// README.md
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./templates/README.md`,
    `./themes/${getTheme(manifest)}`,
  );
});

// _index.scss
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./templates/_index.scss`,
    `./themes/${getTheme(manifest)}`,
    // INIT ONLY
  );
  // check if "./themes/${getTheme(manifest)}/_index.scss" exists
  // if it does not exist, copy the file
  if (!fs.existsSync(`./extras/themes/${getTheme(manifest)}`)) {
    ensureDirectoryExists(`./extras/themes/${getTheme(manifest)}`);
    copyFileToDirectory(
      `./extras/_index.scss`,
      `./extras/themes/${getTheme(manifest)}`,
    );
  }
  /*if (args[0] === "ATOMIZE") {
    // Clear the style settings directories.
    clearDirectories(`./extras/themes/${getTheme(manifest)}`)
  }*/
  if (args[0] === "INIT") {
    copyFileToDirectory(
      `./extras/_index.scss`,
      `./extras/themes/${getTheme(manifest)}`,
    );
  }
});

// _dark.scss
manifestCollection.forEach((manifest) => {
  if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
    copyFileToDirectory(
      `./templates/_dark.scss`,
      `./themes/${getTheme(manifest)}`,
    );
  }
});

// _light.scss
manifestCollection.forEach((manifest) => {
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    copyFileToDirectory(
      `./templates/_light.scss`,
      `./themes/${getTheme(manifest)}`,
    );
  }
});

// fonts
manifestCollection.forEach((manifest) => {
  //copyFileToDirectory(`./templates/_fonts.scss`, `./themes/${getTheme(manifest)}`)
  const fontExtras = getFonts(getValueFromDictionary(manifest, "name"));
  fontExtras.forEach((font) => {
    copyFileToDirectory(
      `./extras/fonts/${font}.scss`,
      `./themes/${getTheme(manifest)}/extras/fonts${font.includes("/") ? `/${font.replace(/\/[^/]+$/, "")}` : ""}`,
    );
  });
});

// callouts
//manifestCollection.forEach((manifest) => {
//  setCallout(getValueFromDictionary(manifest, "name"))
//})

// extras
manifestCollection.forEach((manifest) => {
  const themeExtras = getExtras(getValueFromDictionary(manifest, "name"));
  themeExtras.forEach((extra) => {
    copyFileToDirectory(
      `./extras/${extra}.scss`,
      `./themes/${getTheme(manifest)}/extras`,
    );
  });
  // Default override
  copyFileToDirectory(
    `./extras/themes/${getTheme(manifest)}/_index.scss`,
    `./themes/${getTheme(manifest)}/extras`,
  );
});

// STEP 5
// README.md
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

// STEP 6
// _index.scss
manifestCollection.forEach((manifest) => {
  const themeNameLocal = getValueFromDictionary(manifest, "name");
  let extras = "";
  if (isDarkTheme(themeNameLocal)) {
    extras += `\n@use "dark";`;
  }
  if (isLightTheme(themeNameLocal)) {
    extras += `\n@use "light";`;
  }
  extras += `\n@use "extras";`;
  const themeExtras = getExtras(themeNameLocal);
  const fontExtras = getFonts(themeNameLocal);
  themeExtras.forEach((extra) => {
    extras += `\n@use "extras/${extra}.scss";`;
  });
  fontExtras.forEach((font) => {
    extras += `\n@use "extras/fonts/${font}.scss";`;
  });
  //extras += `\n@use "callouts/default.scss";`
  //extras += `\n@use "callouts/overrides.scss";`
  replaceInFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    `//%%EXTRAS%%`,
    extras,
  );
});
manifestCollection.forEach((manifest) => {
  const mode = isFullTheme(getValueFromDictionary(manifest, "name"))
    ? "both"
    : isDarkTheme(getValueFromDictionary(manifest, "name"))
      ? "dark"
      : "light";
  console.log(`Processing theme: ${getTheme(manifest)} in ${mode} mode`);
  const themeNameLocal = getValueFromDictionary(manifest, "name");
  console.log(`Processing theme: ${themeNameLocal}`);
  if (args[0] === "ATOMIZE" || testMode) {
    if (!testMode) {
      if (!fs.existsSync(`./converted_app.css`)) {
        const obsidianCSS = fs.readFileSync("./app.css", "utf8");
        const overridesCSS = fs.readFileSync("./overrides_app.css", "utf8");
        const result = cleanCSS(obsidianCSS, overridesCSS, mode);
        writePrettier(`./converted_app.css`, result, "utf8");
        // Static version
        writePrettier(
          `./converted_app_static.css`,
          generateStatic(result, themeNameLocal),
          "utf8",
        );
        // Write extracted version to speed up later processing
        const cssAtomicString = fs.readFileSync(`./converted_app.css`, "utf8");
        const extractResult = extractCSS(cssAtomicString);
        const staticExctractResult = extractCSS(
          generateStatic(cssAtomicString, themeNameLocal),
        );
        writePrettier(`./converted_app_extracted.css`, extractResult, "utf8");
        writePrettier(
          `./static_converted_app_extracted.css`,
          staticExctractResult,
          "utf8",
        );
      }
    }
    ensureDirectoryExists(`./atomic/${getTheme(manifest)}`);
    const atomicFile = `./atomic/${getTheme(manifest)}/theme.css`;
    const staticFile = `./atomic/${getTheme(manifest)}/theme_static.css`;
    const atomicExctractedFile = `./atomic/${getTheme(manifest)}/theme_extracted.css`;
    const staticExctractedFile = `./atomic/${getTheme(manifest)}/theme_static_extracted.css`;
    const cssFile = `./obsidian/${getValueFromDictionary(manifest, "name")}/theme.css`;
    const cssString = fs.readFileSync(cssFile, "utf8");
    const obsidianCSS = fs.readFileSync("./converted_app.css", "utf8");

    let result = cleanCSS(
      obsidianCSS,
      splitCombinedRules(cssString, mode),
      mode,
    );
    let staticResult = generateStatic(result, themeNameLocal);

    // Theme variations (for style settings)
    const styleSettings = extractStyleSettings(cssString);
    if (styleSettings && styleSettings.length > 0) {
      ensureDirectoryExists(`./style-settings/${getTheme(manifest)}`);
      // Clear out all subfolders of the style settings
      clearDirectories(`./extras/themes/${getTheme(manifest)}`);
      clearDirectories(`./style-settings/${getTheme(manifest)}`);
      // Extract style settings from the main theme
      styleSettings.forEach((styleSettingsSet) => {
        const styleSets = styleSettingsSet["settings"];
        styleSets.forEach((style) => {
          let styleRulesCSS = ["", "", ""];
          let staticStyleRulesCSS = ["", "", ""];
          const ignoreStyleTypes = ["heading", "info-text"];

          if (ignoreStyleTypes.includes(style["type"])) {
            // Skip styles that are not relevant for CSS generation
            console.warn(
              `Skipping style setting: ${style["id"]} of type ${style["type"]}`,
            );
            return;
          }

          console.log(
            `Processing style setting: ${style["id"]} of type ${style["type"]}`,
          );

          // Write the style setting to the CSS string
          if (style["type"] === "variable-text") {
            // Use the default text
            // Replace all lines with variable in the CSS string
            result = replaceVariableValue(
              result,
              style["id"],
              (style["quotes"] ?? false)
                ? `'${style["default"]}'`
                : style["default"],
            );
            staticResult = replaceVariableValue(
              staticResult,
              style["id"],
              (style["quotes"] ?? false)
                ? `'${style["default"]}'`
                : style["default"],
            );
          } else if (style["type"] === "variable-number") {
            // Use the default number
            // Replace all lines with variable in the CSS string
            result = replaceVariableValue(
              result,
              style["id"],
              style["default"] + (style["format"] ?? ""),
            );
            staticResult = replaceVariableValue(
              staticResult,
              style["id"],
              style["default"] + (style["format"] ?? ""),
            );
          } else if (style["type"] === "variable-number-slider") {
            // Use the default number
            // Replace all lines with variable in the CSS string
            result = replaceVariableValue(
              result,
              style["id"],
              style["default"] + (style["format"] ?? ""),
            );
            staticResult = replaceVariableValue(
              staticResult,
              style["id"],
              style["default"] + (style["format"] ?? ""),
            );
          } else if (style["type"] === "variable-select") {
            // Use the default select value
            // Replace all lines with variable in the CSS string
            result = replaceVariableValue(
              result,
              style["id"],
              style["default"] + (style["format"] ?? ""),
            );
            staticResult = replaceVariableValue(
              staticResult,
              style["id"],
              style["default"] + (style["format"] ?? ""),
            );
          } else if (style["type"] === "variable-color") {
            // Use the default color
            // Replace all lines with variable in the CSS string
            result = replaceVariableValue(
              result,
              style["id"],
              style["default"] + (style["format"] ?? ""),
            );
            staticResult = replaceVariableValue(
              staticResult,
              style["id"],
              style["default"] + (style["format"] ?? ""),
            );
          } else if (style["type"] === "variable-themed-color") {
            // Use the default themed colors
            // This is a special case where we need to handle both light and dark themes
            // for this, we use the `light-dark()` function in the CSS
            result = replaceVariableValue(
              result,
              style["id"],
              `light-dark(${style["default-light"]}, ${style["default-dark"]})`,
            );
            staticResult = replaceVariableValue(
              staticResult,
              style["id"],
              `light-dark(${style["default-light"]}, ${style["default-dark"]})`,
            );
          } else if (style["type"] === "class-toggle") {
            // Extract the class toggle CSS
            styleRulesCSS = extractClassToggleCss(cssString, style["id"]);
            writeStyleSettings(styleRulesCSS, getTheme(manifest), style["id"]);
            staticStyleRulesCSS = extractClassToggleCss(cssString, style["id"]);
            writeStyleSettings(
              staticStyleRulesCSS,
              getTheme(manifest),
              style["id"],
              "static",
            );
          } else if (style["type"] === "class-select") {
            // Extract the class for every option in the select
            const classSelectOptions = style["options"];
            classSelectOptions.forEach((option) => {
              const className = option["value"];
              if (className) {
                styleRulesCSS = extractClassToggleCss(cssString, className);
                writeStyleSettings(
                  styleRulesCSS,
                  getTheme(manifest),
                  style["id"],
                  className,
                );
                staticStyleRulesCSS = extractClassToggleCss(
                  cssString,
                  className,
                );
                writeStyleSettings(
                  staticStyleRulesCSS,
                  getTheme(manifest),
                  style["id"],
                  className,
                  "static",
                );
              } else {
                console.warn(
                  `No class name specified for option: ${JSON.stringify(option)}`,
                );
              }
            });
          } else {
            console.warn(
              `Unknown style setting type: ${variationRules[style["id"]]["type"]} for ${style["id"]}`,
            );
          }
        });
      });
    }

    // Write the main theme CSS to the atomic file
    writePrettier(atomicFile, result, "utf8");
    // Write the static custom properties to the atomic file
    writePrettier(
      staticFile,
      generateStatic(staticResult, themeNameLocal),
      "utf8",
    );
    // Write extracted version to speed up later processing
    const cssAtomicString = fs.readFileSync(atomicFile, "utf8");
    const extractResult = extractCSS(cssAtomicString);
    writePrettier(atomicExctractedFile, extractResult, "utf8");
    // Write extracted version of the static version to speed up later processing
    const cssStaticString = fs.readFileSync(staticFile, "utf8");
    const staticExtractResult = extractCSS(cssStaticString);
    writePrettier(staticExctractedFile, staticExtractResult, "utf8");
  }

  const useExtendedSyntax = staticMode
    ? getValueFromDictionary(manifest, "use_extended_syntax")
      ? "theme_static"
      : "theme_static_extracted"
    : getValueFromDictionary(manifest, "use_extended_syntax")
      ? "theme"
      : "theme_extracted";
  let themeName = getTheme(manifest);
  let themeCSS = fs.readFileSync(
    `${atomicFolder}/${themeName}/${useExtendedSyntax}.css`,
    "utf8",
  );
  writeIndex(themeName, themeCSS);
  const partialIndex = fs.readFileSync(
    `./themes/${getTheme(manifest)}/_index.scss`,
    "utf8",
  );
  const partialRoot = partialIndex.match(/^:root\s*{.*?^}$/gms);
  const variableInRoot = [];
  if (partialRoot) {
    const customPropertyRegex = /(--[\w-]+)\s*:\s*([^;}]+)/g;
    // Push all custom properties in the :root to the variableInRoot array
    let match;
    while ((match = customPropertyRegex.exec(partialRoot[0]))) {
      variableInRoot.push({ name: match[1], value: match[2].trim() });
    }
  }
  // _dark.scss and _light.scss
  const darkValue = getRuleDeclarations(themeCSS, ".theme-dark");
  const darkRules = getAllDarkThemeRules(themeCSS).join("\n");
  const lightValue = getRuleDeclarations(themeCSS, ".theme-light");
  const lightRules = getAllLightThemeRules(themeCSS).join("\n");
  if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
    let darkString = `${darkValue}\n${darkRules}`;
    // Remove all dark theme variable declarations if they exist in the `:root`
    variableInRoot.forEach((variable) => {
      darkString = darkString.replaceAll(
        new RegExp(`\s*${variable.name}\s*:\s*[^;]+;`, "gms"),
        "",
      );
    });
    darkString.replaceAll(/^\s*$/g, ""); // Remove empty lines
    replaceInFile(`./themes/${themeName}/_dark.scss`, `//%%DARK%%`, darkString);
  }
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    let lightString = `${lightValue}\n${lightRules}`;
    // Remove all light theme variable declarations if they exist in the `:root`
    variableInRoot.forEach((variable) => {
      lightString = lightString.replaceAll(
        new RegExp(`\s*${variable.name}\s*:\s*[^;]+;`, "gms"),
        "",
      );
    });
    lightString.replaceAll(/^\s*$/g, ""); // Remove empty lines
    replaceInFile(
      `./themes/${themeName}/_light.scss`,
      `//%%LIGHT%%`,
      lightString,
    );
  }

  // Unset color-scheme for single mode themes
  if (!isFullTheme(getValueFromDictionary(manifest, "name"))) {
    // light only
    if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        /\/\* START DARK \*\/.*?\/\* END DARK \*\//gms,
        ``,
      );
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        /\/\* START DARK GRAPH \*\/.*?\/\* END DARK GRAPH \*\//gms,
        ``,
      );
      replaceInFile(
        `./themes/${themeName}/_light.scss`,
        `:root[saved-theme="light"]`,
        `:root:root`,
      );
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        `/* quartz themes */`,
        `/* quartz themes light-only */`,
      );
    }
    // dark only
    if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        /\/\* START LIGHT \*\/.*?\/\* END LIGHT \*\//gms,
        ``,
      );
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        /\/\* START LIGHT GRAPH \*\/.*?\/\* END LIGHT GRAPH \*\//gms,
        ``,
      );
      replaceInFile(
        `./themes/${themeName}/_dark.scss`,
        `:root[saved-theme="dark"]`,
        `:root:root`,
      );
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        `/* quartz themes */`,
        `/* quartz themes dark-only */`,
      );
    }
    // generic
    replaceInFile(
      `./themes/${themeName}/_index.scss`,
      /\[saved-theme\=\".*?\"\]/g,
      "",
    );
  }

  // Remove remaining comments
  replaceInFile(`./themes/${themeName}/_index.scss`, /\/\/%%[^%]+%%/g, "");
  if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${themeName}/_dark.scss`, /\/\/%%[^%]+%%/g, "");
  }
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${themeName}/_light.scss`, /\/\/%%[^%]+%%/g, "");
  }

  console.log(`Finished processing theme: ${themeNameLocal}`);
});

console.info("All themes processed successfully.");

if (folders.length === 1) {
  // If only one theme is processed, end early (we are apparently testing)
  // so we don't need to rebuild the README.md or Quartz Syncer file list
  console.log(
    `Single theme processed: ${getTheme(manifestCollection[0])}. Exiting early.`,
  );
  // Get all directories under themes
  const themeFolders = [getTheme(manifestCollection[0])];

  // Embed @use rules in each theme's _index.scss
  themeFolders.forEach((folder) => {
    const themePath = `./themes/${folder}/_index.scss`;
    if (fs.existsSync(themePath)) {
      // Combine all @use rules in the _index.scss file
      const scssContent = fs.readFileSync(themePath, "utf8");
      const processedScss = inlineScssUseRulesAndClean(scssContent, themePath);
      const prunedScss = prune(processedScss);
      writePrettier(themePath, prunedScss, "utf8");
      // Remove all directories under themes/${folder}
      const themeDir = `./themes/${folder}`;
      const items = fs.readdirSync(themeDir);
      items.forEach((item) => {
        const itemPath = path.join(themeDir, item);
        if (fs.statSync(itemPath).isDirectory()) {
          fs.rmSync(itemPath, { recursive: true });
        }
      });
    }
  });
  // Exit the script
  process.exit(0);
}

// Rebuild README.md
console.log("Updating compatibility table...");

// Prepare README.md
fs.unlinkSync("README.md");
fs.copyFileSync("README-TEMPLATE.md", "README.md");

// Build compatibility table
const compatibilityTableLines = [];
const themeList = [];
manifestCollection.forEach((manifest) => {
  themeList.push(getTheme(manifest, "name"));
});
themeList.sort();
themeList.forEach((themeName) => {
  const mode = isFullTheme(themeName)
    ? "both"
    : isDarkTheme(themeName)
      ? "dark"
      : "light";
  const compatibilityArray = themes[themeName]["compatibility"];
  let compatibilityString = "";
  compatibilityArray.forEach((compatibility) => {
    compatibilityString += `<img src="media/${compatibility}.svg" alt="${compatibility.toUpperCase()}"/> `;
  });
  compatibilityTableLines.push(
    `\n| <img src="media/${mode}.svg" alt="${mode.toUpperCase()}"/> | \`${themeName}\` | ${compatibilityString.trim()} | [live preview](https://quartz-themes.github.io/${themeName}/syntax) |`,
  );
});

const compatibilityTable =
  "| Supported Modes | Obsidian Theme Name | Theme Compatibility Status | Live Preview |\n| --- | --- | --- | --- |".concat(
    ...compatibilityTableLines,
  );

// Write result to README.md
replaceInFile(`./README.md`, "//COMPATIBILITY_TABLE", compatibilityTable);
// Clean up comments
replaceInFile(`./README.md`, /\<\!\-\-.*?\-\-\>/gms, "");
console.log("Finished updating compatibility table");

console.log("Updating Quartz Syncer file list...");

// Prepare Quartz Syncer file list
if (fs.existsSync("quartz-syncer-file-list.json"))
  fs.unlinkSync("quartz-syncer-file-list.json");
if (fs.existsSync("theme-list")) fs.unlinkSync("theme-list");

// Build Quartz Syncer file list as json
const quartzSyncerFileList = {};
const themeListFileList = [];

// Get all directories under themes
const themeFolders = listFoldersInDirectory(`./themes`);

// Embed @use rules in each theme's _index.scss
themeFolders.forEach((folder) => {
  const themePath = `./themes/${folder}/_index.scss`;
  if (fs.existsSync(themePath)) {
    // Combine all @use rules in the _index.scss file
    const scssContent = fs.readFileSync(themePath, "utf8");
    const processedScss = inlineScssUseRulesAndClean(scssContent, themePath);
    const prunedScss = prune(processedScss);
    let compareString = prunedScss;
    let cleanedScss = cleanup(prunedScss);
    while (compareString !== cleanedScss) {
      compareString = cleanedScss;
      cleanedScss = cleanup(cleanedScss);
    }
    writePrettier(themePath, cleanedScss, "utf8");
    // Remove all directories under themes/${folder}
    const themeDir = `./themes/${folder}`;
    const items = fs.readdirSync(themeDir);
    items.forEach((item) => {
      const itemPath = path.join(themeDir, item);
      if (fs.statSync(itemPath).isDirectory()) {
        fs.rmSync(itemPath, { recursive: true });
      }
    });
  }
});

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
  JSON.stringify(quartzSyncerFileList, null, 2),
  "utf8",
);

// Write the theme list to theme-list
writePrettier(`./theme-list`, themeListFileList.join("\n"), "utf8");

console.log("Finished updating Quartz Syncer file list");
// Log the time taken to run the script in minutes and seconds
const end = Date.now();
const timeTaken = ((end - start) / 1000).toFixed(2);
console.log(
  `Script completed in ${Math.floor(timeTaken / 60)} minutes and ${Math.floor(timeTaken % 60)} seconds.`,
);
