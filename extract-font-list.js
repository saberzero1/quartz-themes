const fs = require("fs")
const path = require("path")

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

function extractFontFamilies() {
  // Remove obsidian-fonts directory if it exists
  const obsidianFontsDir = path.join(__dirname, "obsidian-fonts")

  if (fs.existsSync(obsidianFontsDir)) {
    fs.rmSync(obsidianFontsDir, { recursive: true })
    console.log("Removed existing obsidian-fonts directory")
  }

  // Empty the extras/fonts directory
  const extrasFontsDir = path.join(__dirname, "themes")

  // Create obsidian-fonts directory
  fs.mkdirSync(obsidianFontsDir, { recursive: true })
  console.log("Created obsidian-fonts directory")

  // Define the folder to search
  const obsidianFolder = "obsidian/"

  // Regular expression to match font-family declarations
  const fontFaceRegex = /(@font-face[^}]*?})/gim

  // Loop over all css files under the obsidian folder or its subfolders
  // and extract font-face declarations
  // Afterwards, write the fonts of each css file to a separate css file on a per source basis

  const cssFiles = []

  function getCssFiles(folder) {
    const files = fs.readdirSync(folder)
    files.forEach((file) => {
      const fullPath = path.join(folder, file)
      if (fs.statSync(fullPath).isDirectory()) {
        getCssFiles(fullPath)
      } else if (file.endsWith(".css") && fullPath.startsWith(obsidianFolder)) {
        cssFiles.push(fullPath)
      }
    })
  }
  getCssFiles(obsidianFolder)

  // Extract font-face declarations from each CSS file
  cssFiles.forEach((file) => {
    //const filePath = path.join(obsidianFolder, file)
    const content = fs.readFileSync(file, "utf8")
    const fileName =
      path
        .dirname(file)
        .replace("obsidian/", "")
        .replace(" ", "-")
        .toLowerCase() + ".css"
    const filePath = path.join(obsidianFontsDir, fileName)
    console.log(`Extracting font-face declarations from ${fileName}`)
    const matches = [...content.matchAll(fontFaceRegex)]
    const fontFamilies = new Set()
    matches.forEach((match) => {
      const fontFace = match[1]
      const familyMatch = fontFace.match(/font-family:\s*([^;]+);/)
      if (familyMatch) {
        fontFamilies.add(fontFace)
      }
    })
    // write the font-face declarations to a /obsidian-fonts/{{themename}}.css file
    fontFamilies.forEach((family) => {
      // Create the file if it doesn't exist
      if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true })
      }
      // Write the font-face declaration to the file if it doesn't exist
      // Else, append the font-face declaration to the file
      if (fs.existsSync(filePath)) {
        const existingContent = fs.readFileSync(filePath, "utf8")
        if (!existingContent.includes(family)) {
          fs.appendFileSync(filePath, family + "\n", "utf8")
          console.log(`Appended font-face declaration to ${filePath}`)
        } else {
          console.log(`Font-face declaration already exists in ${filePath}`)
        }
      } else {
        // Write the font-face declaration to the file
        fs.writeFileSync(filePath, family, "utf8")
        console.log(`Font-Face Declaration written to ${filePath}`)
      }
    })
    console.log(
      `Font-Face Declarations for ${file} written to obsidian-fonts folder`,
    )
  })

  // Move every font file to the extras/themes/{{themename}} folder and rename it to fonts.scss
  fs.readdir(obsidianFontsDir, (err, files) => {
    if (err) {
      console.error("Error reading obsidian-fonts directory:", err)
      return
    }
    files.forEach((file) => {
      const filePath = path.join(obsidianFontsDir, file)
      const newFilePath = path.join(
        extrasFontsDir,
        sanitizeFilenamePreservingEmojis(
          path.basename(file).replace(".css", ""),
        ),
        "_fonts.scss",
      )
      fs.copyFileSync(filePath, newFilePath)
    })
  })
}

extractFontFamilies()
