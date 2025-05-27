import {
  splitCombinedRules,
  combineIdenticalSelectors,
  removeEmptyRules,
  getRuleDeclarations,
} from "./util/postcss.mjs"
import { inlineScssUseRulesAndClean } from "./util/at-use-embed.mjs"
import * as fs from "fs"
import * as path from "path"

let singleThemeName = ""

/**
 * Reads a JSON file from a specified folder and returns its content as a JavaScript object.
 *
 * @param {string} folderPath - The path of the folder where the JSON file is located.
 * @param {string} fileName - The name of the JSON file.
 * @returns {Object} The content of the JSON file as a JavaScript object.
 * @throws {Error} If the file cannot be read or the content is not valid JSON.
 */
function readJsonFileAsDictionary(folderPath, fileName) {
  try {
    // Construct the full path to the JSON file
    const filePath = path.join(folderPath, fileName)

    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8")

    // Parse the JSON content into a JavaScript object
    const jsonObject = JSON.parse(fileContent)

    return jsonObject
  } catch (error) {
    throw new Error(`Unable to read or parse JSON file: ${error.message}`)
  }
}

/**
 * Lists all folders within a specified directory.
 *
 * @param {string} dirPath - The path of the directory to search.
 * @returns {string[]} An array of folder names within the provided directory.
 * @throws {Error} If the directory cannot be accessed or read.
 */
function listFoldersInDirectory(dirPath) {
  try {
    // Read the directory contents
    const items = fs.readdirSync(dirPath)

    // Filter out the items that are directories
    const folders = items.filter((item) => {
      const itemPath = path.join(dirPath, item)
      return fs.statSync(itemPath).isDirectory()
    })

    return folders
  } catch (error) {
    throw new Error(`Unable to access directory: ${error.message}`)
  }
}

/**
 * Retrieves the command line arguments passed to the Node.js script.
 *
 * @returns {string[]} An array containing the command line arguments.
 */
function getCommandLineArgs() {
  // Remove the first two elements, which are the Node executable and the script file path
  const args = process.argv.slice(2)
  return args
}

/**
 * Retrieves the current working directory of the Node.js process.
 *
 * @returns {string} The current working directory.
 */
function getCurrentFolder() {
  return process.cwd()
}

/**
 * Retrieves the value associated with a given key in a dictionary.
 *
 * @param {Object} dictionary - The dictionary (JavaScript object) to search.
 * @param {string} key - The key whose value is to be retrieved.
 * @returns {*} The value associated with the key, or an empty string if the key does not exist.
 */
function getValueFromDictionary(dictionary, key) {
  // Check if the key exists using the `in` operator and return the value or an empty string
  return key in dictionary ? dictionary[key] : ""
}

/**
 * Ensures that a directory exists. If the directory structure does not exist, it is created.
 *
 * @param {string} folderPath - The path of the folder to ensure exists.
 * @throws {Error} If the directory cannot be created due to an error.
 */
function ensureDirectoryExists(folderPath) {
  try {
    // Create the directory if it does not exist, including parent directories if necessary
    fs.mkdirSync(folderPath, { recursive: true })
  } catch (error) {
    throw new Error(`Unable to create directory: ${error.message}`)
  }
}

/**
 * Converts a string to lowercase, replaces spaces with hyphens, and removes invalid filename characters,
 * while preserving emojis.
 *
 * @param {string} input - The input string to transform.
 * @returns {string} The transformed string, suitable for use as a filename.
 */
function sanitizeFilenamePreservingEmojis(input) {
  // Convert the string to lowercase
  let sanitized = input.toLowerCase()

  // Replace spaces with hyphens
  sanitized = sanitized.replace(/\s+/g, "-")

  // Replace accents
  sanitized = sanitized.normalize("NFD")

  // Remove invalid filename characters, preserving emojis and some valid characters
  sanitized = sanitized.replace(/[^a-z0-9-_\p{Emoji}]/gu, "")

  // Remove duplicate hyphens
  sanitized = sanitized.replace(/-+/gu, "-")

  // Remove hyphens from start and end
  sanitized = sanitized.replace(/^-+/gu, "")
  sanitized = sanitized.replace(/-+$/gu, "")

  return sanitized
}

/**
 * Removes all contents of a specified directory.
 *
 * @param {string} dirPath - The path of the directory to clear.
 * @throws {Error} If the directory cannot be accessed or if an error occurs during deletion.
 */
function clearDirectoryContents(dirPath) {
  try {
    // Read all items in the directory
    const items = fs.readdirSync(dirPath)

    // Iterate over each item and remove it
    items.forEach((item) => {
      const itemPath = path.join(dirPath, item)
      const stats = fs.statSync(itemPath)

      // Check if it's a directory
      if (stats.isDirectory()) {
        // Recursively remove directory content
        clearDirectoryContents(itemPath)
        // Remove the directory itself
        fs.rmdirSync(itemPath)
      } else {
        // Remove file
        fs.unlinkSync(itemPath)
      }
    })
  } catch (error) {
    throw new Error(`Unable to clear directory: ${error.message}`)
  }
}

/**
 * Copies a file to a specified directory.
 *
 * @param {string} sourceFilePath - The path to the file to be copied.
 * @param {string} targetDirectoryPath - The path to the directory where the file should be copied.
 * @throws {Error} If the file cannot be copied due to an error.
 */
function copyFileToDirectory(sourceFilePath, targetDirectoryPath) {
  try {
    // Ensure the target directory exists
    if (!fs.existsSync(targetDirectoryPath)) {
      throw new Error(`Target directory does not exist: ${targetDirectoryPath}`)
    }

    // Get the filename from the source path
    const fileName = path.basename(sourceFilePath)

    // Construct the target file path
    const targetFilePath = path.join(targetDirectoryPath, fileName)

    // Copy the file to the target directory
    fs.copyFileSync(sourceFilePath, targetFilePath)
  } catch (error) {
    throw new Error(`Unable to copy file: ${error.message}`)
  }
}

/**
 * Replaces all occurrences of a target string with a replacement string in a given file.
 *
 * @param {string} filePath - The path to the file in which replacements should be made.
 * @param {string} targetString - The string to be replaced.
 * @param {string} replacementString - The string to replace the target string.
 * @throws {Error} If the file cannot be read or written.
 */
function replaceInFile(filePath, targetString, replacementString) {
  try {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8")

    // Replace all occurrences of the target string with the replacement string
    const modifiedContent = fileContent.split(targetString).join(replacementString)

    // Write the modified content back to the file
    fs.writeFileSync(filePath, modifiedContent, "utf8")
  } catch (error) {
    throw new Error(`Unable to process file: ${error.message}`)
  }
}

/**
 * Finds all occurrences of a pattern in a file using a specified regex string.
 *
 * @param {string} filePath - The path to the file to search.
 * @param {RegExp} regexString - The regex pattern string to match.
 * @returns {string} An array of strings containing all matches found in the file.
 * @throws {Error} If the file cannot be read or if the regex pattern is invalid.
 */
function findAllMatchesInFile(filePath, regexString) {
  try {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8")

    // Use match to find all matches in the file content
    const matches = fileContent.matchAll(regexString)

    // Return the matches or an empty array if no matches are found
    return matches !== undefined && matches.length > 0 ? [...matches][0] : []
  } catch (error) {
    throw new Error(`Unable to process file: ${error.message}`)
  }
}

const themeSettings = readJsonFileAsDictionary(getCurrentFolder(), "themes.json")
const themes = getValueFromDictionary(themeSettings, "themes")

/**
 * Checks for dark mode
 *
 * @param {string} theme theme name
 * @returns {bool} true if the theme has a dark mode. false otherwise.
 */
function isDarkTheme(theme) {
  return themes[sanitizeFilenamePreservingEmojis(theme)]["modes"].includes("dark")
}

/**
 * Checks for light mode
 *
 * @param {string} theme theme name
 * @returns {bool} true if the theme has a light mode. false otherwise.
 */
function isLightTheme(theme) {
  return themes[sanitizeFilenamePreservingEmojis(theme)]["modes"].includes("light")
}

/**
 * Checks for both light and dark mode
 *
 * @param {string} theme theme name
 * @returns {bool} true if theme has both a light and dark mode. false otherwise.
 */
function isFullTheme(theme) {
  return isDarkTheme(theme) && isLightTheme(theme)
}

/**
 * Gets extras for a specific game
 *
 * @param {string} theme theme name
 * @returns {string[]} Array of extras to install.
 */
function getExtras(theme) {
  return themes[sanitizeFilenamePreservingEmojis(theme)]["extras"]
}

/**
 * Gets extra fonts for a specific game
 *
 * @param {string} theme theme name
 * @returns {string[]} Array of extra fonts to install.
 */
function getFonts(theme) {
  const defaultFonts = ["avenir", "inter", "source-code-pro"]
  const result = themes[sanitizeFilenamePreservingEmojis(theme)]["fonts"]
  return result.length > 0 ? result : defaultFonts
}

/**
 * Sets specified callouts styling
 *
 * @param {string} theme theme name
 */
function setCallout(theme) {
  const callout =
    themes[sanitizeFilenamePreservingEmojis(theme)]["callouts"] !== ""
      ? themes[sanitizeFilenamePreservingEmojis(theme)]["callouts"]
      : "empty"

  if (callout !== "") {
    fs.copyFileSync(
      `./extras/callouts/${callout}.scss`,
      `./themes/${sanitizeFilenamePreservingEmojis(theme)}/callouts/overrides.scss`,
    )
  }

  fs.copyFileSync(
    `./extras/callouts/default.scss`,
    `./themes/${sanitizeFilenamePreservingEmojis(theme)}/callouts/default.scss`,
  )
}

/**
 * Get the current theme name
 *
 * @param {Object} dict input dictionary
 * @returns {string} Theme name
 */
function getTheme(dict) {
  return sanitizeFilenamePreservingEmojis(getValueFromDictionary(dict, "name"))
}

/**
 * Fetch CSS rule and replace in the specified file.
 * @param {string} filePath - The path to the file where the rule should be replaced.
 * @param {string} ruleSelector - The CSS selector for the rule to be replaced.
 * @param {string} targetText - The text to be replaced in the file.
 * @param {string} inputCSS - The CSS string containing the rule declarations.
 * @param {string} [ruleToExtract] - Optional specific rule to extract from the CSS.
 * @throws {Error} If the file cannot be read or written.
 */
function applyRuleToFile(filePath, ruleSelector, targetText, inputCSS, ruleToExtract = "") {
  try {
    // Find the rule declarations for the specified selector
    const ruleDeclarations =
      ruleToExtract === ""
        ? getRuleDeclarations(inputCSS, ruleSelector)
        : getRuleDeclarations(inputCSS, ruleSelector, ruleToExtract)
    if (ruleDeclarations) {
      // Apply the rule declarations to the specified file
      replaceInFile(filePath, targetText, `${ruleDeclarations}\n\n`)
    } else {
      throw new Error(`No declarations found for selector: ${ruleSelector}`)
    }
  } catch (error) {
    throw new Error(`Unable to apply rule to file: ${error.message}`)
  }
}

/**
 * Get all files under a directory and return them as an array of strings.
 * All file paths are relative to the provided directory path.
 *
 * @param {string} dirPath - The path of the directory to search.
 * @param {string} [themeName] - Optional theme name to filter the files.
 * @returns {string[]} An array of file names within the provided directory.
 * @throws {Error} If the directory cannot be accessed or read.
 */
function getFilesUnderDirectoryToStringArray(dirPath, themeName = "") {
  try {
    // Read the directory contents
    const items = fs.readdirSync(dirPath)

    // Initialize an array to hold the file paths
    const files = []
    // Iterate over each item in the directory
    items.forEach((item) => {
      const itemPath = path.join(dirPath, item)
      const stats = fs.statSync(itemPath)

      // Check if the item is a file
      if (stats.isFile()) {
        // Add the file path to the array
        files.push(itemPath)
      } else if (stats.isDirectory()) {
        // If it's a directory, recursively get files from it
        const subFiles = getFilesUnderDirectoryToStringArray(itemPath)
        files.push(...subFiles)
      }
    })

    if (themeName !== "") {
      // Remove the directory path prefix from the file paths
      for (let i = 0; i < files.length; i++) {
        if (files[i].includes(themeName)) {
          // Remove the directory path prefix
          files[i] = files[i].split(themeName)[1]
        }
      }
    }

    return files
  } catch (error) {
    throw new Error(`Unable to access directory: ${error.message}`)
  }
}

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

// STEP 2
let manifestCollection = []
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
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, ":root", "//%%ROOT%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "body", "//%%BODY%%", themeCSS)

  // Heading links
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h1 a", "//%%H1 A%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h2 a", "//%%H2 A%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h3 a", "//%%H3 A%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h4 a", "//%%H4 A%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h5 a", "//%%H5 A%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h6 a", "//%%H6 A%%", themeCSS)

  // Headings
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h1", "//%%H1%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h2", "//%%H2%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h3", "//%%H3%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h4", "//%%H4%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h5", "//%%H5%%", themeCSS)
  applyRuleToFile(`./themes/${getTheme(manifest)}/_index.scss`, "h6", "//%%H6%%", themeCSS)

  // Code blocks
  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".markdown-rendered pre",
    "//%%PRE%%",
    themeCSS,
  )
  // inline code
  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".markdown-rendered code",
    "//%%CODE INLINE%%",
    themeCSS,
  )
  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".markdown-rendered pre code",
    "//%%CODE%%",
    themeCSS,
  )
  // Code copy button
  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".markdown-rendered button.copy-code-button:hover",
    "//%%CLIPBOARD BUTTON HOVER%%",
    themeCSS,
  )
  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".markdown-rendered button.copy-code-button",
    "//%%CLIPBOARD BUTTON%%",
    themeCSS,
  )

  // Content Meta
  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".metadata-input-longtext",
    "//%%CONTENT META%%",
    themeCSS,
    "color",
  )

  // Popovers
  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".popover",
    "//%%POPOVER%%",
    themeCSS,
  )

  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".popover",
    "//%%POPOVER BORDER%%",
    themeCSS,
    "border",
  )

  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".popover",
    "//%%POPOVER BACKGROUND%%",
    themeCSS,
    "background-color",
  )

  applyRuleToFile(
    `./themes/${getTheme(manifest)}/_index.scss`,
    ".popover",
    "//%%POPOVER BORDER RADIUS%%",
    themeCSS,
    "border-radius",
  )
})

// _dark.scss and _light.scss
manifestCollection.forEach((manifest) => {
  const themeCSS = fs.readFileSync(`${atomicFolder}/${getTheme(manifest)}/theme.css`, "utf8")
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
})

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
