import {
  splitCombinedRules,
  combineIdenticalSelectors,
  removeEmptyRules,
  getRuleDeclarations,
} from "./util/postcss.mjs"
import { inlineScssUseRulesAndClean } from "./util/at-use-embed.mjs"
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
  setCallout,
  getFilesUnderDirectoryToStringArray,
  listFoldersInDirectory,
  clearDirectoryContents,
  ensureDirectoryExists,
  copyFileToDirectory,
  replaceInFile,
  replaceInString,
  applyRuleToFile,
  applyRuleToString,
} from "./util/util.mjs"
import { themes } from "./config.mjs"
import * as fs from "fs"
import * as path from "path"

let singleThemeName = ""

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
const args = getCommandLineArgs()

const obsidianFolder = "./obsidian"
const atomicFolder = "./atomic"
const folders = listFoldersInDirectory(obsidianFolder)

const manifestCollection = []

// STEP 2
if (singleThemeName === "") {
  folders.forEach((folder) => {
    manifestCollection.push(
      readJsonFileAsDictionary(`${obsidianFolder}/${folder}`, "manifest.json"),
    )
  })
} else if (singleThemeName !== "") {
  manifestCollection.push(
    readJsonFileAsDictionary(`${obsidianFolder}/${singleThemeName}`, "manifest.json"),
  )
}

// STEP 3
clearDirectoryContents(`./themes`)

manifestCollection.forEach((manifest) => {
  ensureDirectoryExists(`./themes/${getTheme(manifest)}/extras/fonts/icons`)
  ensureDirectoryExists(`./themes/${getTheme(manifest)}/callouts`)
  // INIT ONLY
  if (args[0] === "INIT") {
    ensureDirectoryExists(`./extras/themes/${getTheme(manifest)}`)
  } else if (args[0] !== "") {
    singleThemeName = args[0]
  }
})

// STEP 4
// README.md
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(`./templates/README.md`, `./themes/${getTheme(manifest)}`)
})

// _index.scss
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./templates/_index.scss`,
    `./themes/${getTheme(manifest)}`,
    // INIT ONLY
  )
  // check if "./themes/${getTheme(manifest)}/_index.scss" exists
  // if it does not exist, copy the file
  if (!fs.existsSync(`./extras/themes/${getTheme(manifest)}`)) {
    ensureDirectoryExists(`./extras/themes/${getTheme(manifest)}`)
    copyFileToDirectory(`./extras/_index.scss`, `./extras/themes/${getTheme(manifest)}`)
  }
  if (args[0] === "INIT") {
    copyFileToDirectory(`./extras/_index.scss`, `./extras/themes/${getTheme(manifest)}`)
  }
})

// _dark.scss
manifestCollection.forEach((manifest) => {
  if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
    copyFileToDirectory(`./templates/_dark.scss`, `./themes/${getTheme(manifest)}`)
  }
})

// _light.scss
manifestCollection.forEach((manifest) => {
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    copyFileToDirectory(`./templates/_light.scss`, `./themes/${getTheme(manifest)}`)
  }
})

// fonts
manifestCollection.forEach((manifest) => {
  //copyFileToDirectory(`./templates/_fonts.scss`, `./themes/${getTheme(manifest)}`)
  const fontExtras = getFonts(getValueFromDictionary(manifest, "name"))
  fontExtras.forEach((font) => {
    copyFileToDirectory(
      `./extras/fonts/${font}.scss`,
      `./themes/${getTheme(manifest)}/extras/fonts${font.includes("/") ? `/${font.replace(/\/[^/]+$/, "")}` : ""}`,
    )
  })
})

// callouts
manifestCollection.forEach((manifest) => {
  setCallout(getValueFromDictionary(manifest, "name"))
})

// extras
manifestCollection.forEach((manifest) => {
  const themeExtras = getExtras(getValueFromDictionary(manifest, "name"))
  themeExtras.forEach((extra) => {
    copyFileToDirectory(`./extras/${extra}.scss`, `./themes/${getTheme(manifest)}/extras`)
  })
  // Default override
  copyFileToDirectory(
    `./extras/themes/${getTheme(manifest)}/_index.scss`,
    `./themes/${getTheme(manifest)}/extras`,
  )
})

// STEP 5
// README.md
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_NAME%",
    getValueFromDictionary(manifest, "name"),
  )
})
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_NAME_SANITIZED%",
    getTheme(manifest),
  )
})
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_URL%",
    getValueFromDictionary(manifest, "authorUrl") !== ""
      ? getValueFromDictionary(manifest, "authorUrl")
      : "#",
  )
})

// STEP 6
// _index.scss
manifestCollection.forEach((manifest) => {
  const themeNameLocal = getValueFromDictionary(manifest, "name")
  let extras = ""
  if (isDarkTheme(themeNameLocal)) {
    extras += `\n@use "dark";`
  }
  if (isLightTheme(themeNameLocal)) {
    extras += `\n@use "light";`
  }
  extras += `\n@use "extras";`
  const themeExtras = getExtras(themeNameLocal)
  const fontExtras = getFonts(themeNameLocal)
  themeExtras.forEach((extra) => {
    extras += `\n@use "extras/${extra}.scss";`
  })
  fontExtras.forEach((font) => {
    extras += `\n@use "extras/fonts/${font}.scss";`
  })
  extras += `\n@use "callouts/default.scss";`
  extras += `\n@use "callouts/overrides.scss";`
  replaceInFile(`./themes/${getTheme(manifest)}/_index.scss`, `//%%EXTRAS%%`, extras)
})
manifestCollection.forEach((manifest) => {
  const themeNameLocal = getValueFromDictionary(manifest, "name")
  console.log(`Processing theme: ${themeNameLocal}`)
  if (args[0] === "ATOMIZE") {
    if (!fs.existsSync(`./converted_app.css`)) {
      const obsidianCSS = fs.readFileSync("./app.css", "utf8")
      const overridesCSS = fs.readFileSync("./overrides_app.css", "utf8")
      let result = splitCombinedRules(`${obsidianCSS}\n${overridesCSS}`)
      result = combineIdenticalSelectors(result)
      result = removeEmptyRules(result)
      fs.writeFileSync(`./converted_app.css`, result, "utf8")
    }
    ensureDirectoryExists(`./atomic/${getTheme(manifest)}`)
    const atomicFile = `./atomic/${getTheme(manifest)}/theme.css`
    const cssFile = `./obsidian/${getValueFromDictionary(manifest, "name")}/theme.css`
    const cssString = fs.readFileSync(cssFile, "utf8")
    const obsidianCSS = fs.readFileSync("./converted_app.css", "utf8")
    let result = `${obsidianCSS}\n${splitCombinedRules(cssString)}`
    result = combineIdenticalSelectors(result)
    result = removeEmptyRules(result)
    fs.writeFileSync(atomicFile, result, "utf8")
  }
  const themeCSS = fs.readFileSync(`${atomicFolder}/${getTheme(manifest)}/theme.css`, "utf8")
  let resultCSS = fs.readFileSync(`./themes/${getTheme(manifest)}/_index.scss`, "utf8")
  resultCSS = applyRuleToString(resultCSS, ":root", "//%%ROOT%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "body", "//%%BODY%%", themeCSS)

  // Heading links
  resultCSS = applyRuleToString(resultCSS, "h1 a", "//%%H1 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h2 a", "//%%H2 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h3 a", "//%%H3 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h4 a", "//%%H4 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h5 a", "//%%H5 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h6 a", "//%%H6 A%%", themeCSS)

  // Headings
  resultCSS = applyRuleToString(resultCSS, "h1", "//%%H1%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h2", "//%%H2%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h3", "//%%H3%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h4", "//%%H4%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h5", "//%%H5%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h6", "//%%H6%%", themeCSS)

  // Code blocks
  resultCSS = applyRuleToString(resultCSS, ".markdown-rendered pre", "//%%PRE%%", themeCSS)

  // inline code
  resultCSS = applyRuleToString(resultCSS, ".markdown-rendered code", "//%%CODE INLINE%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, ".markdown-rendered pre code", "//%%CODE%%", themeCSS)

  // Code copy button
  resultCSS = applyRuleToString(
    resultCSS,
    ".markdown-rendered button.copy-code-button",
    "//%%CLIPBOARD BUTTON%%",
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".markdown-rendered button.copy-code-button:hover",
    "//%%CLIPBOARD BUTTON HOVER%%",
    themeCSS,
  )

  // Content Meta
  resultCSS = applyRuleToString(
    resultCSS,
    ".metadata-input-longtext",
    "//%%CONTENT META%%",
    themeCSS,
    "color",
  )

  // Popovers
  resultCSS = applyRuleToString(resultCSS, ".popover", "//%%POPOVER%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, ".popover", "//%%POPOVER BORDER%%", themeCSS, "border")
  resultCSS = applyRuleToString(
    resultCSS,
    ".popover",
    "//%%POPOVER BACKGROUND%%",
    themeCSS,
    "background-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".popover",
    "//%%POPOVER BORDER RADIUS%%",
    themeCSS,
    "border-radius",
  )

  // Search
  resultCSS = applyRuleToString(
    resultCSS,
    ".prompt",
    "//%%SEARCH BACKGROUND COLOR%%",
    themeCSS,
    "background-color",
  )
  resultCSS = applyRuleToString(resultCSS, ".prompt", "//%%SEARCH SHADOW%%", themeCSS, "box-shadow")
  resultCSS = applyRuleToString(resultCSS, ".prompt", "//%%SEARCH BORDER%%", themeCSS, "border")
  resultCSS = applyRuleToString(
    resultCSS,
    ".prompt",
    "//%%SEARCH BORDER RADIUS%%",
    themeCSS,
    "border-radius",
  )
  resultCSS = applyRuleToString(resultCSS, "input.prompt-input", "//%%SEARCH INPUT%%", themeCSS)

  resultCSS = applyRuleToString(
    resultCSS,
    ".suggestion-item.is-selected",
    "//%%SEARCH RESULT HOVER BACKGROUND%%",
    themeCSS,
    "background-color",
  )

  resultCSS = applyRuleToString(
    resultCSS,
    ".suggestion-highlight",
    "//%%SEARCH HIGHLIGHT%%",
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".markdown-rendered mark",
    "//%%SEARCH HIGHLIGHT TEXT%%",
    themeCSS,
  )

  // Search button
  resultCSS = applyRuleToString(resultCSS, 'input[type="search"]', "//%%SEARCH BUTTON%%", themeCSS)

  // Write the result to the _index.scss file
  fs.writeFileSync(`./themes/${getTheme(manifest)}/_index.scss`, resultCSS, "utf8")

  // _dark.scss and _light.scss
  const darkValue = getRuleDeclarations(themeCSS, ".theme-dark")
  const lightValue = getRuleDeclarations(themeCSS, ".theme-light")
  if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${getTheme(manifest)}/_index.scss`, `//%%DARK%%`, darkValue)
    replaceInFile(`./themes/${getTheme(manifest)}/_dark.scss`, `//%%DARK%%`, darkValue)
  }
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${getTheme(manifest)}/_index.scss`, `//%%LIGHT%%`, lightValue)
    replaceInFile(`./themes/${getTheme(manifest)}/_light.scss`, `//%%LIGHT%%`, lightValue)
  }

  // Unset color-scheme for single mode themes
  if (!isFullTheme(getValueFromDictionary(manifest, "name"))) {
    // light only
    if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(
        `./themes/${getTheme(manifest)}/_index.scss`,
        /\/\* START DARK \*\/.*?\/\* END DARK \*\//gms,
        ``,
      )
      replaceInFile(
        `./themes/${getTheme(manifest)}/_index.scss`,
        /\/\* START DARK GRAPH \*\/.*?\/\* END DARK GRAPH \*\//gms,
        ``,
      )
      replaceInFile(
        `./themes/${getTheme(manifest)}/_light.scss`,
        `:root[saved-theme="light"]`,
        `:root:root`,
      )
      replaceInFile(
        `./themes/${getTheme(manifest)}/_index.scss`,
        `/* quartz themes */`,
        `/* quartz themes light-only */`,
      )
    }
    // dark only
    if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(
        `./themes/${getTheme(manifest)}/_index.scss`,
        /\/\* START LIGHT \*\/.*?\/\* END LIGHT \*\//gms,
        ``,
      )
      replaceInFile(
        `./themes/${getTheme(manifest)}/_index.scss`,
        /\/\* START LIGHT GRAPH \*\/.*?\/\* END LIGHT GRAPH \*\//gms,
        ``,
      )
      replaceInFile(
        `./themes/${getTheme(manifest)}/_dark.scss`,
        `:root[saved-theme="dark"]`,
        `:root:root`,
      )
      replaceInFile(
        `./themes/${getTheme(manifest)}/_index.scss`,
        `/* quartz themes */`,
        `/* quartz themes dark-only */`,
      )
    }
    // generic
    replaceInFile(`./themes/${getTheme(manifest)}/_index.scss`, /\[saved-theme\=\".*?\"\]/g, "")
  }

  // Remove remaining comments
  replaceInFile(`./themes/${getTheme(manifest)}/_index.scss`, /\/\/%%[^%]+%%/g, "")
  if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${getTheme(manifest)}/_dark.scss`, /\/\/%%[^%]+%%/g, "")
  }
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${getTheme(manifest)}/_light.scss`, /\/\/%%[^%]+%%/g, "")
  }

  console.log(`Finished processing theme: ${themeNameLocal}`)
})

console.info("All themes processed successfully.")

// Rebuild README.md
console.log("Updating compatibility table...")

// Prepare README.md
fs.unlinkSync("README.md")
fs.copyFileSync("README-TEMPLATE.md", "README.md")

// Build compatibility table
const compatibilityTableLines = []
const themeList = []
manifestCollection.forEach((manifest) => {
  themeList.push(getTheme(manifest, "name"))
})
themeList.sort()
themeList.forEach((themeName) => {
  const mode = isFullTheme(themeName) ? "both" : isDarkTheme(themeName) ? "dark" : "light"
  const compatibilityArray = themes[themeName]["compatibility"]
  let compatibilityString = ""
  compatibilityArray.forEach((compatibility) => {
    compatibilityString += `<img src="media/${compatibility}.svg" alt="${compatibility.toUpperCase()}"/> `
  })
  compatibilityTableLines.push(
    `\n| <img src="media/${mode}.svg" alt="${mode.toUpperCase()}"/> | \`${themeName}\` | ${compatibilityString.trim()} | [live preview](https://quartz-themes.github.io/${themeName}/) |`,
  )
})

const compatibilityTable =
  "| Supported Modes | Obsidian Theme Name | Theme Compatibility Status | Live Preview |\n| --- | --- | --- | --- |".concat(
    ...compatibilityTableLines,
  )

// Write result to README.md
replaceInFile(`./README.md`, "//COMPATIBILITY_TABLE", compatibilityTable)
// Clean up comments
replaceInFile(`./README.md`, /\<\!\-\-.*?\-\-\>/gms, "")
console.log("Finished updating compatibility table")

console.log("Updating Quartz Syncer file list...")

// Prepare Quartz Syncer file list
if (fs.existsSync("quartz-syncer-file-list.json")) fs.unlinkSync("quartz-syncer-file-list.json")
if (fs.existsSync("theme-list")) fs.unlinkSync("theme-list")

// Build Quartz Syncer file list as json
const quartzSyncerFileList = {}
const themeListFileList = []

// Get all directories under themes
const themeFolders = listFoldersInDirectory(`./themes`)

// Embet @use rules in each theme's _index.scss
themeFolders.forEach((folder) => {
  const themePath = `./themes/${folder}/_index.scss`
  if (fs.existsSync(themePath)) {
    // Combine all @use rules in the _index.scss file
    const scssContent = fs.readFileSync(themePath, "utf8")
    const processedScss = inlineScssUseRulesAndClean(scssContent, themePath)
    fs.writeFileSync(themePath, processedScss, "utf8")
    // Remove all directories under themes/${folder}
    const themeDir = `./themes/${folder}`
    const items = fs.readdirSync(themeDir)
    items.forEach((item) => {
      const itemPath = path.join(themeDir, item)
      if (fs.statSync(itemPath).isDirectory()) {
        fs.rmSync(itemPath, { recursive: true })
      }
    })
  }
})

// Get a list of all files under each theme directory
themeFolders.forEach((folder) => {
  const files = getFilesUnderDirectoryToStringArray(`./themes/${folder}`, folder)
  const themeName = folder.replace(/^\.\//, "")
  quartzSyncerFileList[themeName] = files
  themeListFileList.push(themeName)
})

// Write the file list to quartz-syncer-file-list.json
fs.writeFileSync(
  `./quartz-syncer-file-list.json`,
  JSON.stringify(quartzSyncerFileList, null, 2),
  "utf8",
)

// Write the theme list to theme-list
fs.writeFileSync(`./theme-list`, themeListFileList.join("\n"), "utf8")

console.log("Finished updating Quartz Syncer file list")
