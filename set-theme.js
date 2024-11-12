const fs = require("fs")
const path = require("path")
const https = require("https")

/**
 * Retrieves the current working directory of the Node.js process.
 *
 * @returns {string} The current working directory.
 */
function getCurrentFolder() {
  return process.cwd()
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

const getCurrentFolder = `${getCurrentFolder()}/../quartz`

// Get the command line arguments
const args = getCommandLineArgs()

if (args.length === 0) {
  console.error("Please provide a theme name as an argument.")
  process.exit(1)
}

const themeName = args[0]

// check if quartz/styles exists
if (!fs.existsSync(path.join(getCurrentFolder, "quartz", "styles"))) {
  console.error(
    "The quartz/styles directory does not exist. Please run this script from the root of a Quartz project.",
  )
  process.exit(1)
}

// ensure the quartz/styles directory exists
ensureDirectoryExists(path.join(getCurrentFolder, "quartz", "styles", "themes"))

// Clear the contents of the quartz/styles/themes directory
clearDirectoryContents(path.join(getCurrentFolder, "quartz", "styles", "themes"))

// Copy the theme files
const themeSource = path.join(getCurrentFolder(), "__CONVERTER", "__OUTPUT")
const themeDest = path.join(getCurrentFolder, "quartz", "styles", "themes")
const themeFiles = ["_index.scss", "_dark.scss", "_light.scss", "_fonts.scss", "README.md"]

themeFiles.forEach((file) => {
  copyFileToDirectory(path.join(themeSource, file), themeDest)
})
