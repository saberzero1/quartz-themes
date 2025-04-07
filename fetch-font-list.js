const fs = require("fs")
const path = require("path")

// Define the folder to search
const obsidianFolder = "./obsidian"

// Regular expression to match font-family declarations
const fontFamilyRegex = /font-family:\s*([^;]+);/gi

// Remove quotes from font-family names
const removeQuotesRegex = /['"]/g

// Function to recursively get all CSS files in a folder
function getCssFiles(folder) {
  const files = fs.readdirSync(folder)
  let cssFiles = []
  files.forEach((file) => {
    const fullPath = path.join(folder, file)
    if (fs.statSync(fullPath).isDirectory()) {
      cssFiles = cssFiles.concat(getCssFiles(fullPath))
    } else if (file.endsWith(".css")) {
      cssFiles.push(fullPath)
    }
  })
  return cssFiles
}

// Function to extract font-family names from a CSS file
function extractFontFamilies(filePath) {
  const content = fs.readFileSync(filePath, "utf8")
  const matches = [...content.matchAll(fontFamilyRegex)]
  // Extract and clean font-family names
  const fontFamilies = matches.map((match) => {
    const family = match[1].trim().replace(removeQuotesRegex, "")
    return family.split(",").map((name) => name.trim())
  })
  // Remove variables and fallback fonts
  const filteredFamilies = fontFamilies.map((families) =>
    families.filter(
      (name) => !name.startsWith("--") && !name.includes("fallback") && !name.startsWith("var"),
    ),
  )
  // Flatten the array and remove duplicates
  return Array.from(new Set(filteredFamilies.flat()))
}

// Main function to extract font-family names from all CSS files
function extractAllFontFamilies(folder) {
  const cssFiles = getCssFiles(folder)
  const fontFamilies = new Set()
  cssFiles.forEach((file) => {
    const families = extractFontFamilies(file)
    families.forEach((family) => fontFamilies.add(family))
  })
  return Array.from(fontFamilies)
}

// Extract and print the font-family names
const fontFamilies = extractAllFontFamilies(obsidianFolder)
console.log("Font-Family Names:", fontFamilies)
