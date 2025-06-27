import { themes } from "./../config.mjs"
import {
  getRuleDeclarations,
} from "./postcss.mjs"
import * as fs from "fs"
import * as path from "path"

/**
 * Checks if a string ends with any of the provided endings.
 * @param {string[]} endings - An array of possible endings to check against.
 * @return {boolean} True if the string ends with any of the provided endings, false otherwise.
 */
export function endsWithAnyOf(endings) {
  const str = this.toString()
  // Check if the string ends with any of the provided endings
  return endings.some((ending) => str.endsWith(ending))
}

/**
 * Reads a JSON file from a specified folder and returns its content as a JavaScript object.
 *
 * @param {string} folderPath - The path of the folder where the JSON file is located.
 * @param {string} fileName - The name of the JSON file.
 * @returns {Object} The content of the JSON file as a JavaScript object.
 * @throws {Error} If the file cannot be read or the content is not valid JSON.
 */
export function readJsonFileAsDictionary(folderPath, fileName) {
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
export function listFoldersInDirectory(dirPath) {
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
export function getCommandLineArgs() {
  // Remove the first two elements, which are the Node executable and the script file path
  const args = process.argv.slice(2)
  return args
}

/**
 * Retrieves the current working directory of the Node.js process.
 *
 * @returns {string} The current working directory.
 */
export function getCurrentFolder() {
  return process.cwd()
}

/**
 * Retrieves the variations of a theme from the themes configuration.
 *
 * @param {string} theme - The name of the theme.
 * @returns {Object[]} An array of variations for the specified theme.
 */
export function getVariationsFromTheme(theme) {
  return themes[sanitizeFilenamePreservingEmojis(theme)]["variations"]
}

/**
 * Retrieves the names of variations for a specified theme.
 *
 * @param {string} theme - The name of the theme.
 * @returns {string[]} An array of variation names for the specified theme.
 */
export function getVariationNamesFromTheme(theme) {
  // Get the variations for the specified theme
  const variations = getVariationsFromTheme(theme)

  // Map the variations to their names
  return variations.map((variation) => variation.name)
}

/**
 * Retrieves the value associated with a given key in a dictionary.
 *
 * @param {Object} dictionary - The dictionary (JavaScript object) to search.
 * @param {string} key - The key whose value is to be retrieved.
 * @returns {*} The value associated with the key, or an empty string if the key does not exist.
 */
export function getValueFromDictionary(dictionary, key) {
  // Check if the key exists using the `in` operator and return the value or an empty string
  return key in dictionary ? dictionary[key] : ""
}

/**
 * Ensures that a directory exists. If the directory structure does not exist, it is created.
 *
 * @param {string} folderPath - The path of the folder to ensure exists.
 * @throws {Error} If the directory cannot be created due to an error.
 */
export function ensureDirectoryExists(folderPath) {
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
export function sanitizeFilenamePreservingEmojis(input) {
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
 * Removes all directories of a specified directory, but does not remove files within the root directory.
 * This function is useful for clearing out a directory while preserving the root files.
 *
 * @param {string} dirPath - The path of the directory to clear.
 * @throws {Error} If the directory cannot be accessed or if an error occurs during deletion.
 */
export function clearDirectories(dirPath) {
  try {
    // Read all items in the directory
    const items = fs.readdirSync(dirPath)

    // Iterate over each item and remove it if it's a directory
    items.forEach((item) => {
      const itemPath = path.join(dirPath, item)
      const stats = fs.statSync(itemPath)

      // Check if it's a directory
      if (stats.isDirectory()) {
        // Recursively remove the directory
        clearDirectoryContents(itemPath)
      }
    })
  } catch (error) {
    throw new Error(`Unable to clear directory: ${error.message}`)
  }
}

/**
 * Recursively walks through a directory and yields all file paths.
 * This function uses async iteration to handle large directories efficiently.
 *
 * @param {string} dir - The path of the directory to walk through.
 * @returns {AsyncGenerator<string>} An async generator that yields file paths.
 * @throws {Error} If the directory cannot be accessed or read.
 */
export async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) yield entry;
    }
}

/**
 * Removes all contents of a specified directory.
 *
 * @param {string} dirPath - The path of the directory to clear.
 * @throws {Error} If the directory cannot be accessed or if an error occurs during deletion.
 */
export function clearDirectoryContents(dirPath) {
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
export function copyFileToDirectory(sourceFilePath, targetDirectoryPath) {
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
export function replaceInFile(filePath, targetString, replacementString) {
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
 * Replaces all occurrences of a target string with a replacement string in a given file.
 *
 * @param {string} source - The string in which replacements should be made.
 * @param {string} targetString - The string to be replaced.
 * @param {string} replacementString - The string to replace the target string.
 * @throws {Error} If the file cannot be read or written.
 */
export function replaceInString(source, targetString, replacementString) {
  try {
    // Replace all occurrences of the target string with the replacement string ane return the modified result
    return source.split(targetString).join(replacementString)
  } catch (error) {
    throw new Error(`Unable to process string: ${error.message}`)
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
export function findAllMatchesInFile(filePath, regexString) {
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

/**
 * Checks for dark mode
 *
 * @param {string} theme theme name
 * @returns {bool} true if the theme has a dark mode. false otherwise.
 */
export function isDarkTheme(theme) {
  return themes[sanitizeFilenamePreservingEmojis(theme)]["modes"].includes("dark")
}

/**
 * Checks for light mode
 *
 * @param {string} theme theme name
 * @returns {bool} true if the theme has a light mode. false otherwise.
 */
export function isLightTheme(theme) {
  return themes[sanitizeFilenamePreservingEmojis(theme)]["modes"].includes("light")
}

/**
 * Checks for both light and dark mode
 *
 * @param {string} theme theme name
 * @returns {bool} true if theme has both a light and dark mode. false otherwise.
 */
export function isFullTheme(theme) {
  return isDarkTheme(theme) && isLightTheme(theme)
}

/**
 * Gets extras for a specific game
 *
 * @param {string} theme theme name
 * @returns {string[]} Array of extras to install.
 */
export function getExtras(theme) {
  return themes[sanitizeFilenamePreservingEmojis(theme)]["extras"]
}

/**
 * Gets extra fonts for a specific game
 *
 * @param {string} theme theme name
 * @returns {string[]} Array of extra fonts to install.
 */
export function getFonts(theme) {
  const defaultFonts = ["avenir", "inter", "source-code-pro"]
  const result = themes[sanitizeFilenamePreservingEmojis(theme)]["fonts"]
  return result.length > 0 ? result : defaultFonts
}

/**
 * Sets specified callouts styling
 *
 * @param {string} theme theme name
 */
export function setCallout(theme) {
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
export function getTheme(dict) {
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
export function applyRuleToFile(filePath, ruleSelector, targetText, inputCSS, ruleToExtract = "") {
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
 * Fetch CSS rule and replace in the specified file.
 * @param {string} sourceString - The string in which the rule should be replaced.
 * @param {string} ruleSelector - The CSS selector for the rule to be replaced.
 * @param {string} targetText - The text to be replaced in the file.
 * @param {string} inputCSS - The CSS string containing the rule declarations.
 * @param {string} [ruleToExtract] - Optional specific rule to extract from the CSS.
 * @throws {Error} If the file cannot be read or written.
 */
export function applyRuleToString(sourceString, ruleSelector, targetText, inputCSS, ruleToExtract = "") {
  try {
    // Find the rule declarations for the specified selector
    const ruleDeclarations = getRuleOccurences(inputCSS, ruleSelector, ruleToExtract)
    if (ruleDeclarations) {
      // Apply the rule declarations to the specified file
      return replaceInString(sourceString, targetText, `${ruleDeclarations}\n\n`)
    } else {
      throw new Error(`No declarations found for selector: ${ruleSelector}`)
    }
  } catch (error) {
    throw new Error(`Unable to apply rule to file: ${error.message}`)
  }
}

/**
 * Get all occurrences of a CSS rule in a given CSS string.
 *
 * @param {string} inputCSS - The CSS string to search for the rule.
 * @param {string} ruleSelector - The CSS selector for the rule to be extracted.
 * @param {string} [ruleToExtract] - Optional specific rule to extract from the CSS.
 * @returns {string|null} A string containing all declarations for the specified rule selector.
 */
export function getRuleOccurences(inputCSS, ruleSelector, ruleToExtract = "") {
  return ruleToExtract === ""
    ? getRuleDeclarations(inputCSS, ruleSelector)
    : getRuleDeclarations(inputCSS, ruleSelector, ruleToExtract)
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
export function getFilesUnderDirectoryToStringArray(dirPath, themeName = "") {
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

/**
 * Generates a string of HTML links for funding URLs.
 *
 * @param {object} manifest - The manifest object containing funding information.
 * @param {string|object} manifest.fundingUrl - The funding URL(s), which can be a string or an object.
 * @returns {string} A string of HTML links separated by '|'.
 */
export function generateFundingLinks(manifest) {
  const {
    fundingUrl
  } = manifest;

  if (!fundingUrl) {
    return "";
  }

  if (typeof fundingUrl === "string") {
    return `- Support the author: <a href="${fundingUrl}" target="_blank" rel="noopener noreferrer">Donate</a>`;
  }

  if (typeof fundingUrl === "object") {
    return `- Support the author: ${Object.entries(fundingUrl)
      .sort(([key]) => key.toLowerCase())
      .map(([key, value]) => `<a href="${value}" target="_blank" rel="noopener noreferrer">${key}</a>`)
      .join(" | ")}`;
  }

  return "";
}

/**
 * Cleans up CSS rules after running the PostCSS processor.
 *
  * @param {string} cssString - The CSS string to clean up.
  * @returns {string} The cleaned CSS string with specific fixes applied.
  */
export function cleanRulesAfterRun(cssString) {
  // Small fixes for `light-dark()` functions
  const lightDarkHSL = /light-dark\((\s*?(?:\d+,\s*[\d.]+%,\s*[\d.]+%)),(\s*?(?:\d+,\s*[\d.]+%,\s*[\d.]+%))\);/gms
  const lightDarkRGB = /light-dark\((\s*?(?:\d{1,3}\s*?,\s*?){2}(?:\d{1,3}\s*?\s*?)),(\s*?(?:\d{1,3}\s*?,\s*?){2}(?:\d{1,3}\s*?\s*?))\);/gms
  const lightDarkRGBA = /light-dark\((\s*?(?:\d{1,3}\s*?,\s*?){2}(?:\d{1,3}\s*?\s*?),\s*?[\d.]+%?),(\s*?(?:\d{1,3}\s*?,\s*?){2}(?:\d{1,3}\s*?\s*?),\s*?[\d.]+%?)\);/gms
  const lightDarkInherit = /light-dark\(((?:\s*?\w+\()?inherit(?:\))?),\s*?((?:\s*?\w+\()?inherit(?:\))?)\s*?\);/gms
  cssString = cssString.replaceAll(lightDarkHSL, "light-dark(hsl($1), hsl($2));")
  cssString = cssString.replaceAll(lightDarkRGB, "light-dark(rgb($1), rgb($2));")
  cssString = cssString.replaceAll(lightDarkRGBA, "light-dark(rgba($1), rgba($2));")
  cssString = cssString.replaceAll(lightDarkInherit, "inherit;")

  return cleanup(cssString)
}

export function cleanup(cssString) {
  cssString = cssString.replaceAll(/^\s*?((?:background-)?color:)\s*?rgba\(\s*?light-dark\((\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3})\s*?\),\s*?([\d\.\%]+)\s*?\)(?=$|;|,)/gms, "$1 light-dark(rgba($2, $3, $4, $8), rgba($5, $6, $7, $8));") // Fix light-dark(rgb) with 6 values
  cssString = cssString.replaceAll(/rgba\(((?:[\d\.]+,\s*){3,})([\d\.]+,\s*)([\d\.\%]+)\);/gms, "rgba($1$3);") // Fix rgba with more than 4 values
  cssString = cssString.replaceAll(/rgba?\((\#[\da-fA-F]{3,8})\);/gms, "$1;") // Fix hex colors in rgba
  cssString = cssString.replaceAll(/\#{2,}([\da-fA-F]{3,8});/gms, "#$1;") // Fix hex colors with more than 2 #
  cssString = cssString.replaceAll(/rgba?\((light-dark\([^\)]+\))\);/gms, "$1;") // Fix light-dark() in rgba
  cssString = cssString.replaceAll(/rgba?\((rgba?\([^\)]+\))\);/gms, "$1;") // Fix rgb(a) in rgba
  cssString = cssString.replaceAll(/rgba?\((hsla?\([^\)]+\))\);/gms, "$1;") // Fix hsl(a) in rgba
  cssString = cssString.replaceAll(/rgba?\(\s*?inherit\s*?(?:,\s*?[\d\.\%]+\s*?)?\);/gms, "inherit;")
  cssString = cssString.replaceAll(/rgba?\(\s*?(oklch\([^\)]+\)),\s*?([\d\.\%]+)\)/gms, "color.change($1, \$alpha: $2);")
  cssString = cssString.replaceAll(/rgb\(\s*?(oklch\([^\)]+\))\)(?=$|;|,)/gms, "color.change($1)")
  cssString = cssString.replaceAll(/^\s*?caret-color: hsla?\((?:.*?\#[\da-fA-F]{3,8}.*?)\);$/gm, "")
  cssString = cssString.replaceAll(/^\s*?caret-color: hsla?\((?:.*?calc\(.*?deg.*?\).*?)\);$/gm, "")
  cssString = cssString.replaceAll(/^\s*?rgb\(light-dark\((\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3})\s*?\)\)(?=$|;|,)/gms, "light-dark(rgb($1, $2, $3), rgb($4, $5, $6))") // Fix light-dark(rgb) with 6 values
  cssString = cssString.replaceAll(/(?<=^\s*?(?:(?:background-|border-)?color:\s*?)?)hsl\(light-dark\(([\d\.\%]+),\s*?([\d\.\%]+),\s*?([\d\.\%]+),\s*?([\d\.\%]+),\s*?([\d\.\%]+),\s*?([\d\.\%]+)\s*?\)\)(?=$|;|,)/gms, "light-dark(hsl($1, $2, $3), hsl($4, $5, $6))") // Fix light-dark(rgb) with 6 values
  cssString = cssString.replaceAll(/^\s*?hsl\(light-dark\(([\d\.\%]+),\s?([\d\.\%]+)\),\s*?light-dark\(([\d\.\%]+),\s?([\d\.\%]+)\),\s*?light-dark\(([\d\.\%]+),\s?([\d\.\%]+)\)\s*?\)(?=$|;|,)/gms, "light-dark(hsl($1, $3, $5), hsl($2, $4, $6))") // Fix light-dark(hsl) with 6 values
  cssString = cssString.replaceAll(/;\s*;/gms, ";") // Remove duplicate semicolons

  cssString = cssString.replaceAll(/^\s*?color:\s*?hsl\(light-dark\([^\#l\)]+(light-dark\(\#[\da-fA-F]{3,8},\s*?\#[\da-fA-F]{3,8}\))\)\)(?=$|;|,)/gms, "color: $1")
  cssString = cssString.replaceAll(/background-color:\s*?light-dark\(\s*?hsl\((light-dark\([^\)]+\))\)\s*?,\s*?hsl\((light-dark\([^\)]+\))\)\s*?\);/gms, "background-color: $1;") // Fix light-dark(hsl) with 6 values

  return cssString
}
