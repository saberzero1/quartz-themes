const fs = require("fs")
const path = require("path")

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

    //console.log(`File successfully copied to '${targetFilePath}'`);
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

    //console.log(`Replaced all occurrences of "${targetString}" with "${replacementString}" in '${filePath}'`);
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

    console.log([matches].length)

    // Return the matches or an empty array if no matches are found
    return matches !== undefined && matches.length > 0 ? [...matches][0] : []
  } catch (error) {
    throw new Error(`Unable to process file: ${error.message}`)
  }
}

/**
 * Finds all occurrences of a pattern in a file using a specified regex string
 * and returns them as a single newline-separated string.
 *
 * @param {string} filePath - The path to the file to search.
 * @param {RegExp} regexString - The regex pattern string to match.
 * @returns {string} A newline-separated string containing all matches found in the file.
 * @throws {Error} If the file cannot be read or if the regex pattern is invalid.
 */
function findAllMatchesAsString(filePath, regexString) {
  try {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8")

    // Create a regular expression object with the global flag to find all matches
    //const regex = new RegExp(regexString, 'gmsv');

    // Use match to find all matches in the file content
    const matches = fileContent.match(regexString)

    // Convert the matches array to a newline-separated string (or return an empty string if no matches)
    return matches ? matches.join("\n") : ""
  } catch (error) {
    throw new Error(`Unable to process file: ${error.message}`)
  }
}

/**
 * Removes all lines from a CSS file that are not CSS variable definitions.
 * A CSS variable is defined as a line containing '--[variable-name]: [value];'.
 *
 * @param {string} cssString - The string content of the CSS file.
 * @returns {string} Custom properties only.
 * @throws {Error} If the file cannot be read or written.
 */
function removeNonVariableLines(cssString) {
  try {
    // Read the string as an array of lines
    const lines = cssString.split("\n")

    // Remove comments
    const linesCleared = lines.map((line) => line.replaceAll(/\/\*.*?\*\//g, ""))

    // Filter lines to include only those that match the CSS variable pattern
    const variableLines = linesCleared.filter(
      (line) => line.trim().startsWith("--") && line.trim().endsWith(";"),
    )

    // Filter lines that end with invalid colors (like color: #;)
    const emptyColorLines = variableLines.filter((line) => !line.trim().endsWith("#;"))

    // Join the filtered lines back into a single string
    const updatedContent = emptyColorLines.join("\n")

    // Write the updated content back to the file
    return updatedContent

    //console.log(`Removed non-variable lines from '${filePath}'`);
  } catch (error) {
    throw new Error(`Unable to process file: ${error.message}`)
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
const currentFolder = getCurrentFolder()
//console.log("Current working directory:", currentFolder)

const args = getCommandLineArgs()
//console.log("Command line arguments:", args)

const obsidianFolder = "./__OBSIDIAN"
const folders = listFoldersInDirectory(obsidianFolder)
//console.log(folders.length)

// STEP 2
let manifestCollection = []
folders.forEach((folder) => {
  manifestCollection.push(readJsonFileAsDictionary(`${obsidianFolder}/${folder}`, "manifest.json"))
})
//console.log(manifestCollection)

// STEP 3
clearDirectoryContents(`./__CONVERTER/__OUTPUT`)

manifestCollection.forEach((manifest) => {
  ensureDirectoryExists(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}`,
  )
  // INIT ONLY
  if (args[0] === "INIT") {
    ensureDirectoryExists(
      `./__CONVERTER/__OVERRIDES/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}`,
    )
  }
})

// STEP 4
// README.md
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./__CONVERTER/__TEMPLATE/README.md`,
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}`,
  )
})

// _index.scss
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./__CONVERTER/__TEMPLATE/_index.scss`,
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}`,
    // INIT ONLY
  )
  if (args[0] === "INIT") {
    copyFileToDirectory(
      `./__CONVERTER/__TEMPLATE/__OVERRIDES/_index.scss`,
      `./__CONVERTER/__OVERRIDES/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}`,
    )
  }
})

// _fonts.scss
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./__CONVERTER/__TEMPLATE/_fonts.scss`,
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}`,
  )
})

// _dark.scss
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./__CONVERTER/__TEMPLATE/_dark.scss`,
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}`,
  )
})

// _light.scss
manifestCollection.forEach((manifest) => {
  copyFileToDirectory(
    `./__CONVERTER/__TEMPLATE/_light.scss`,
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}`,
  )
})

// STEP 5
// README.md
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/README.md`,
    "%OBSIDIAN_THEME_NAME%",
    getValueFromDictionary(manifest, "name"),
  )
})
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/README.md`,
    "%OBSIDIAN_THEME_NAME_SANITIZED%",
    sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name")),
  )
})
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/README.md`,
    "%OBSIDIAN_THEME_URL%",
    getValueFromDictionary(manifest, "authorUrl") !== ""
      ? getValueFromDictionary(manifest, "authorUrl")
      : "#",
  )
})

// STEP 6
// _index.scss
const bodyRegex = new RegExp(/^body.*?\{([^\}]*?)\}$/, "gmsv")
const rootRegex = new RegExp(/^:root.*?\{([^\}]*?)\}$/, "gmsv")
const fontRegex = new RegExp(/(@font-face.*?\})/, "gmsv")
const darkRegex = new RegExp(/^\.theme-dark.*?\{([^\}]*?)\}$/, "gmsv")
const lightRegex = new RegExp(/^\.theme-light.*?\{([^\}]*?)\}$/, "gmsv")
let hasDarkOptions = true
let hasLightOptions = true
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_index.scss`,
    `//OVERRIDES`,
    `@use "overrides";`,
  )
})
manifestCollection.forEach((manifest) => {
  const bodyValue = findAllMatchesAsString(
    `./__OBSIDIAN/${getValueFromDictionary(manifest, "name")}/theme.css`,
    bodyRegex,
  )
  const bodyValue2 = bodyValue.replace(bodyRegex, "$1")
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_index.scss`,
    `//BODY`,
    removeNonVariableLines(bodyValue2),
  )
})
manifestCollection.forEach((manifest) => {
  const rootValue = findAllMatchesAsString(
    `./__OBSIDIAN/${getValueFromDictionary(manifest, "name")}/theme.css`,
    rootRegex,
  )
  const rootValue2 = rootValue.replace(rootRegex, "$1")
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_index.scss`,
    `//ROOT`,
    removeNonVariableLines(rootValue2),
  )
})

// _fonts.scss
manifestCollection.forEach((manifest) => {
  const fontValue = findAllMatchesAsString(
    `./__OBSIDIAN/${getValueFromDictionary(manifest, "name")}/theme.css`,
    fontRegex,
  )
  const fontValue2 = fontValue.replace(fontRegex, "$1")
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_fonts.scss`,
    `//FONTS`,
    fontValue2,
  )
})

// _dark.scss and _light.scss
manifestCollection.forEach((manifest) => {
  const darkValue = findAllMatchesAsString(
    `./__OBSIDIAN/${getValueFromDictionary(manifest, "name")}/theme.css`,
    darkRegex,
  )
  const lightValue = findAllMatchesAsString(
    `./__OBSIDIAN/${getValueFromDictionary(manifest, "name")}/theme.css`,
    lightRegex,
  )
  hasDarkOptions = darkValue !== ""
  hasLightOptions = lightValue !== ""
  const darkValue2 = darkValue.replace(darkRegex, "$1")
  const lightValue2 = lightValue.replace(lightRegex, "$1")
  if (hasDarkOptions) {
    replaceInFile(
      `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_index.scss`,
      `//DARK`,
      removeNonVariableLines(darkValue2),
    )
    replaceInFile(
      `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_dark.scss`,
      `//DARK`,
      removeNonVariableLines(darkValue2),
    )
  }
  if (hasLightOptions) {
    replaceInFile(
      `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_index.scss`,
      `//LIGHT`,
      removeNonVariableLines(lightValue2),
    )
    replaceInFile(
      `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_light.scss`,
      `//LIGHT`,
      removeNonVariableLines(lightValue2),
    )
  }
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_index.scss`,
    `//DARK`,
    removeNonVariableLines(lightValue2),
  )
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_light.scss`,
    `//DARK`,
    removeNonVariableLines(lightValue2),
  )
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_index.scss`,
    `//LIGHT`,
    removeNonVariableLines(darkValue2),
  )
  replaceInFile(
    `./__CONVERTER/__OUTPUT/${sanitizeFilenamePreservingEmojis(getValueFromDictionary(manifest, "name"))}/_dark.scss`,
    `//LIGHT`,
    removeNonVariableLines(darkValue2),
  )
})
