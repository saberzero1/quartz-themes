import {
  splitCombinedRules,
  combineIdenticalSelectors,
  removeEmptyRules,
  getRuleDeclarations,
  getAllDarkThemeRules,
  getAllLightThemeRules,
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
  getFilesUnderDirectoryToStringArray,
  listFoldersInDirectory,
  clearDirectoryContents,
  ensureDirectoryExists,
  copyFileToDirectory,
  replaceInFile,
  applyRuleToString,
  generateFundingLinks,
  getVariationsFromTheme,
  getVariationNamesFromTheme,
} from "./util/util.mjs"
import {
  extractSettingsBlocks,
  parseSettingsYaml,
  extractStyleSettings,
  styleSettingToCss,
  extractClassToggleCss,
  extractClassSelectCss,
  replaceVariableColor,
  replaceVariableThemedColor,
  replaceVariableValue,
  replaceGradientVariables,
} from "./util/postcss-style-settings.mjs"
import { themes, usedRules } from "./config.mjs"
import { prune } from "./util/prune-unused.mjs"
import { writeIndex } from "./util/writer.mjs"
import * as fs from "fs"
import * as path from "path"

let singleThemeName = ""

const start = Date.now()

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

if (args[0] === "ATOMIZE") {
  if (fs.existsSync(`./converted_app.css`) || fs.existsSync(`./converted_app_extracted.css`)) {
    throw new Error(
      "Converted app.css already exists. Please remove it before running the script again.",
    )
  }
}

const obsidianFolder = "./obsidian"
const atomicFolder = "./atomic"
// const folders = listFoldersInDirectory(obsidianFolder)
const folders = ["Abyssal"]

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
  //ensureDirectoryExists(`./themes/${getTheme(manifest)}/callouts`)
  // INIT ONLY
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      ensureDirectoryExists(
        `./themes/${getTheme(manifest)}.${variation["name"]}/extras/fonts/icons`,
      )
      ensureDirectoryExists(`./extras/themes/${getTheme(manifest)}.${variation["name"]}`)
      // Create the _index.scss file for the variation if it does not exist
      if (
        !fs.existsSync(`./extras/themes/${getTheme(manifest)}.${variation["name"]}/_index.scss`)
      ) {
        copyFileToDirectory(
          `./extras/_index.scss`,
          `./extras/themes/${getTheme(manifest)}.${variation["name"]}`,
        )
      }
    })
  }
  if (args[0] === "INIT") {
    ensureDirectoryExists(`./extras/themes/${getTheme(manifest)}`)
  } else if (args[0] !== "") {
    singleThemeName = args[0]
  }
})

// STEP 4
// README.md
manifestCollection.forEach((manifest) => {
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      copyFileToDirectory(
        `./templates/README.md`,
        `./themes/${getTheme(manifest)}.${variation["name"]}`,
      )
    })
  }
  copyFileToDirectory(`./templates/README.md`, `./themes/${getTheme(manifest)}`)
})

// _index.scss
manifestCollection.forEach((manifest) => {
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      copyFileToDirectory(
        `./templates/_index.scss`,
        `./themes/${getTheme(manifest)}.${variation["name"]}`,
      )
    })
  }
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
    const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
    if (variations.length > 0) {
      variations.forEach((variation) => {
        copyFileToDirectory(
          `./templates/_dark.scss`,
          `./themes/${getTheme(manifest)}.${variation["name"]}`,
        )
      })
    }
  }
})

// _light.scss
manifestCollection.forEach((manifest) => {
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    copyFileToDirectory(`./templates/_light.scss`, `./themes/${getTheme(manifest)}`)
    const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
    if (variations.length > 0) {
      variations.forEach((variation) => {
        copyFileToDirectory(
          `./templates/_light.scss`,
          `./themes/${getTheme(manifest)}.${variation["name"]}`,
        )
      })
    }
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
    const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
    if (variations.length > 0) {
      variations.forEach((variation) => {
        copyFileToDirectory(
          `./extras/fonts/${font}.scss`,
          `./themes/${getTheme(manifest)}.${variation["name"]}/extras/fonts${font.includes("/") ? `/${font.replace(/\/[^/]+$/, "")}` : ""}`,
        )
      })
    }
  })
})

// callouts
//manifestCollection.forEach((manifest) => {
//  setCallout(getValueFromDictionary(manifest, "name"))
//})

// extras
manifestCollection.forEach((manifest) => {
  const themeExtras = getExtras(getValueFromDictionary(manifest, "name"))
  themeExtras.forEach((extra) => {
    copyFileToDirectory(`./extras/${extra}.scss`, `./themes/${getTheme(manifest)}/extras`)
    const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
    if (variations.length > 0) {
      variations.forEach((variation) => {
        copyFileToDirectory(
          `./extras/${extra}.scss`,
          `./themes/${getTheme(manifest)}.${variation["name"]}/extras`,
        )
      })
    }
  })
  // Default override
  copyFileToDirectory(
    `./extras/themes/${getTheme(manifest)}/_index.scss`,
    `./themes/${getTheme(manifest)}/extras`,
  )
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      copyFileToDirectory(
        `./extras/themes/${getTheme(manifest)}/_index.scss`,
        `./themes/${getTheme(manifest)}.${variation["name"]}/extras`,
      )
    })
  }
})

// STEP 5
// README.md
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_NAME%",
    getValueFromDictionary(manifest, "name"),
  )
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      replaceInFile(
        `./themes/${getTheme(manifest)}.${variation["name"]}/README.md`,
        "%OBSIDIAN_THEME_NAME%",
        `${getValueFromDictionary(manifest, "name")} + ${variation["name"]}`,
      )
    })
  }
})
manifestCollection.forEach((manifest) => {
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_NAME_SANITIZED%",
    getTheme(manifest),
  )
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      replaceInFile(
        `./themes/${getTheme(manifest)}.${variation["name"]}/README.md`,
        "%OBSIDIAN_THEME_NAME_SANITIZED%",
        `${getTheme(manifest)}.${variation["name"]}`,
      )
    })
  }
})
manifestCollection.forEach((manifest) => {
  const authorValue =
    getValueFromDictionary(manifest, "author") !== ""
      ? getValueFromDictionary(manifest, "author")
      : "No author provided"
  const authorUrlValue =
    getValueFromDictionary(manifest, "authorUrl") !== ""
      ? getValueFromDictionary(manifest, "authorUrl")
      : ""
  const authorString =
    authorUrlValue !== ""
      ? `<a href="${authorUrlValue}" target="_blank" rel="noopener noreferrer">${authorValue}</a>`
      : authorValue
  replaceInFile(`./themes/${getTheme(manifest)}/README.md`, "%OBSIDIAN_THEME_AUTHOR%", authorString)
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      replaceInFile(
        `./themes/${getTheme(manifest)}.${variation["name"]}/README.md`,
        "%OBSIDIAN_THEME_AUTHOR%",
        authorString,
      )
    })
  }
})
manifestCollection.forEach((manifest) => {
  const result = generateFundingLinks(manifest)
  replaceInFile(
    `./themes/${getTheme(manifest)}/README.md`,
    "%OBSIDIAN_THEME_AUTHOR_DONATE_URL%",
    result,
  )
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      replaceInFile(
        `./themes/${getTheme(manifest)}.${variation["name"]}/README.md`,
        "%OBSIDIAN_THEME_AUTHOR_DONATE_URL%",
        result,
      )
    })
  }
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
  //extras += `\n@use "callouts/default.scss";`
  //extras += `\n@use "callouts/overrides.scss";`
  replaceInFile(`./themes/${getTheme(manifest)}/_index.scss`, `//%%EXTRAS%%`, extras)
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  if (variations.length > 0) {
    variations.forEach((variation) => {
      replaceInFile(
        `./themes/${getTheme(manifest)}.${variation["name"]}/_index.scss`,
        `//%%EXTRAS%%`,
        extras,
      )
    })
  }
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
      result = result.replace(/\n+/g, "\n") // Remove extra newlines
      result = result.replace(/^\}$/gm, "}\n") // Add extra newlines between rules
      fs.writeFileSync(`./converted_app.css`, result, "utf8")
      // Write extracted version to speed up later processing
      const cssAtomicString = fs.readFileSync(`./converted_app.css`, "utf8")
      let extractResult = ""
      for (const rule of usedRules) {
        const target = `${rule} {\n//%%NEXTEXTRACTRULE%%\n}\n`
        extractResult += applyRuleToString(target, rule, `//%%NEXTEXTRACTRULE%%`, cssAtomicString)
      }
      extractResult = combineIdenticalSelectors(extractResult)
      extractResult = removeEmptyRules(extractResult)
      extractResult = extractResult.replace(/\n+/g, "\n") // Remove extra newlines
      extractResult = extractResult.replace(/^\}$/gm, "}\n") // Add extra newlines between rules
      fs.writeFileSync(`./converted_app_extracted.css`, extractResult, "utf8")
    }
    ensureDirectoryExists(`./atomic/${getTheme(manifest)}`)
    const atomicFile = `./atomic/${getTheme(manifest)}/theme.css`
    const atomicExctractedFile = `./atomic/${getTheme(manifest)}/theme_extracted.css`
    const cssFile = `./obsidian/${getValueFromDictionary(manifest, "name")}/theme.css`
    const cssString = fs.readFileSync(cssFile, "utf8")
    const obsidianCSS = fs.readFileSync("./converted_app.css", "utf8")
    const obsidianExtractedCSS = fs.readFileSync("./converted_app_extracted.css", "utf8")
    let result = `${obsidianCSS}\n${splitCombinedRules(cssString)}`
    result = combineIdenticalSelectors(result)
    result = removeEmptyRules(result)
    result = result.replace(/\n+/g, "\n") // Remove extra newlines
    result = result.replace(/^\}$/gm, "}\n") // Add extra newlines between rules
    fs.writeFileSync(atomicFile, result, "utf8")
    // Write extracted version to speed up later processing
    const cssAtomicString = fs.readFileSync(atomicFile, "utf8")
    let extractResult = `${obsidianExtractedCSS}\n`
    for (const rule of usedRules) {
      const target = `${rule} {\n//%%NEXTEXTRACTRULE%%\n}\n`
      extractResult += applyRuleToString(target, rule, `//%%NEXTEXTRACTRULE%%`, cssAtomicString)
    }
    extractResult = combineIdenticalSelectors(extractResult)
    extractResult = removeEmptyRules(extractResult)
    extractResult = extractResult.replace(/\n+/g, "\n") // Remove extra newlines
    extractResult = extractResult.replace(/^\}$/gm, "}\n") // Add extra newlines between rules
    fs.writeFileSync(atomicExctractedFile, extractResult, "utf8")

    // Theme variations (for style settings)
    const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
    if (variations.length > 0) {
      variations.forEach((variation) => {
        let styleSettingsResult = ""
        console.log(`Processing variation: ${variation["name"]}`)
        ensureDirectoryExists(`./atomic/${getTheme(manifest)}.${variation["name"]}`)
        const atomicFile = `./atomic/${getTheme(manifest)}.${variation["name"]}/theme.css`
        const atomicExctractedFile = `./atomic/${getTheme(manifest)}.${variation["name"]}/theme_extracted.css`
        const cssFile = `./atomic/${getValueFromDictionary(manifest, "name")}/theme.css`
        const cssString = fs.readFileSync(cssFile, "utf8")
        const cssExtractedFile = `./atomic/${getValueFromDictionary(manifest, "name")}/theme_extracted.css`
        const cssExtractedString = fs.readFileSync(cssExtractedFile, "utf8")
        const variationRules = variation["rules"]
        // Some themes have multiple @settings blocks, so we need to extract them all
        const styleSettings = extractStyleSettings(cssString)
        if (styleSettings && styleSettings.length > 0) {
          styleSettings.forEach((styleSettingsSet) => {
            const style = styleSettingsSet["settings"]
            style.forEach((style) => {
              if (variationRules[style["id"]] && variationRules[style["id"]]["type"]) {
                console.log(
                  `Applying variation style: ${style["id"]} with type: ${variationRules[style["id"]]["type"]}`,
                )
                let styleRulesCSS = ""

                // Write the style setting to the CSS string
                if (variationRules[style["id"]]["type"] === "variable-text") {
                  // TODO: Implement
                  styleRulesCSS = styleSettingToCss(style, variationRules[style["id"]])
                } else if (variationRules[style["id"]]["type"] === "variable-number") {
                  // TODO: Implement
                  styleRulesCSS = styleSettingToCss(style, variationRules[style["id"]])
                } else if (variationRules[style["id"]]["type"] === "variable-number-slider") {
                  // TODO: Implement
                  styleRulesCSS = styleSettingToCss(style, variationRules[style["id"]])
                } else if (variationRules[style["id"]]["type"] === "variable-select") {
                  // TODO: Implement
                  styleRulesCSS = styleSettingToCss(style, variationRules[style["id"]])
                } else if (variationRules[style["id"]]["type"] === "variable-color") {
                  // TODO: Implement
                  styleRulesCSS = replaceVariableColor(
                    cssString,
                    style,
                    variationRules[style["id"]],
                  )
                } else if (variationRules[style["id"]]["type"] === "variable-themed-color") {
                  // TODO: Implement
                  styleRulesCSS = replaceVariableThemedColor(
                    cssString,
                    style,
                    variationRules[style["id"]],
                  )
                } else if (variationRules[style["id"]]["type"] === "class-toggle") {
                  styleRulesCSS = extractClassToggleCss(cssString, style["id"])
                } else if (variationRules[style["id"]]["type"] === "class-select") {
                  // TODO: Implement
                  styleRulesCSS = extractClassSelectCss(
                    cssString,
                    variationRules[style["id"]]["value"],
                  )
                } else {
                  console.warn(
                    `Unknown style setting type: ${variationRules[style["id"]]["type"]} for ${style["id"]}`,
                  )
                }
                if (styleRulesCSS && styleRulesCSS !== "") {
                  styleSettingsResult += `\n${styleRulesCSS}`
                }
              }
            })
          })
          /*
          const variationCSS = variationRules
            .map((rule) => {
              const declarations = getRuleDeclarations(rule)
              return `${rule.selector} {\n${declarations}\n}`
            })
            .join("\n")
          cssString += `\n${variationCSS}`
          */
        }
        let result = `${cssString}\n${splitCombinedRules(styleSettingsResult)}`
        result = combineIdenticalSelectors(result)
        result = removeEmptyRules(result)
        result = result.replace(/\n+/g, "\n") // Remove extra newlines
        result = result.replace(/^\}$/gm, "}\n") // Add extra newlines between rules
        fs.writeFileSync(atomicFile, result, "utf8")
        // Write extracted version to speed up later processing
        const cssAtomicString = fs.readFileSync(atomicFile, "utf8")
        let extractResult = `${cssExtractedString}\n`
        for (const rule of usedRules) {
          const target = `${rule} {\n//%%NEXTEXTRACTRULE%%\n}\n`
          extractResult += applyRuleToString(target, rule, `//%%NEXTEXTRACTRULE%%`, cssAtomicString)
        }
        extractResult = combineIdenticalSelectors(extractResult)
        extractResult = removeEmptyRules(extractResult)
        extractResult = extractResult.replace(/\n+/g, "\n") // Remove extra newlines
        extractResult = extractResult.replace(/^\}$/gm, "}\n") // Add extra newlines between rules
        fs.writeFileSync(atomicExctractedFile, extractResult, "utf8")

        console.log(`Processing variation: ${variation["name"]} completed`)
      })
    }
  }
  const useExtendedSyntax = getValueFromDictionary(manifest, "use_extended_syntax")
    ? "theme"
    : "theme_extracted"
  let themeName = getTheme(manifest)
  let themeCSS = fs.readFileSync(`${atomicFolder}/${themeName}/${useExtendedSyntax}.css`, "utf8")
  writeIndex(themeName, themeCSS)
  // _dark.scss and _light.scss
  const darkValue = getRuleDeclarations(themeCSS, ".theme-dark")
  const darkRules = getAllDarkThemeRules(themeCSS).join("\n")
  const lightValue = getRuleDeclarations(themeCSS, ".theme-light")
  const lightRules = getAllLightThemeRules(themeCSS).join("\n")
  if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${themeName}/_index.scss`, `//%%DARK%%`, darkValue)
    replaceInFile(`./themes/${themeName}/_dark.scss`, `//%%DARK%%`, `${darkValue}\n${darkRules}`)
  }
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${themeName}/_index.scss`, `//%%LIGHT%%`, lightValue)
    replaceInFile(
      `./themes/${themeName}/_light.scss`,
      `//%%LIGHT%%`,
      `${lightValue}\n${lightRules}`,
    )
  }

  // Unset color-scheme for single mode themes
  if (!isFullTheme(getValueFromDictionary(manifest, "name"))) {
    // light only
    if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        /\/\* START DARK \*\/.*?\/\* END DARK \*\//gms,
        ``,
      )
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        /\/\* START DARK GRAPH \*\/.*?\/\* END DARK GRAPH \*\//gms,
        ``,
      )
      replaceInFile(`./themes/${themeName}/_light.scss`, `:root[saved-theme="light"]`, `:root:root`)
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        `/* quartz themes */`,
        `/* quartz themes light-only */`,
      )
    }
    // dark only
    if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        /\/\* START LIGHT \*\/.*?\/\* END LIGHT \*\//gms,
        ``,
      )
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        /\/\* START LIGHT GRAPH \*\/.*?\/\* END LIGHT GRAPH \*\//gms,
        ``,
      )
      replaceInFile(`./themes/${themeName}/_dark.scss`, `:root[saved-theme="dark"]`, `:root:root`)
      replaceInFile(
        `./themes/${themeName}/_index.scss`,
        `/* quartz themes */`,
        `/* quartz themes dark-only */`,
      )
    }
    // generic
    replaceInFile(`./themes/${themeName}/_index.scss`, /\[saved-theme\=\".*?\"\]/g, "")
  }

  // Remove remaining comments
  replaceInFile(`./themes/${themeName}/_index.scss`, /\/\/%%[^%]+%%/g, "")
  if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${themeName}/_dark.scss`, /\/\/%%[^%]+%%/g, "")
  }
  if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
    replaceInFile(`./themes/${themeName}/_light.scss`, /\/\/%%[^%]+%%/g, "")
  }

  // Apply variations
  const variations = getVariationsFromTheme(getValueFromDictionary(manifest, "name"))
  variations.forEach((variation) => {
    themeName = getTheme(manifest) + `.${variation["name"]}`
    // Always use the extended syntax for variations
    themeCSS = fs.readFileSync(`${atomicFolder}/${themeName}/theme.css`, "utf8")

    writeIndex(themeName, themeCSS)
    // _dark.scss and _light.scss
    const darkValue = getRuleDeclarations(themeCSS, ".theme-dark")
    const darkRules = getAllDarkThemeRules(themeCSS).join("\n")
    const lightValue = getRuleDeclarations(themeCSS, ".theme-light")
    const lightRules = getAllLightThemeRules(themeCSS).join("\n")
    console.log(darkRules)
    if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(`./themes/${themeName}/_index.scss`, `//%%DARK%%`, darkValue)
      replaceInFile(`./themes/${themeName}/_dark.scss`, `//%%DARK%%`, `${darkValue}\n${darkRules}`)
    }
    if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(`./themes/${themeName}/_index.scss`, `//%%LIGHT%%`, lightValue)
      replaceInFile(
        `./themes/${themeName}/_light.scss`,
        `//%%LIGHT%%`,
        `${lightValue}\n${lightRules}`,
      )
    }

    // Unset color-scheme for single mode themes
    if (!isFullTheme(getValueFromDictionary(manifest, "name"))) {
      // light only
      if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
        replaceInFile(
          `./themes/${themeName}/_index.scss`,
          /\/\* START DARK \*\/.*?\/\* END DARK \*\//gms,
          ``,
        )
        replaceInFile(
          `./themes/${themeName}/_index.scss`,
          /\/\* START DARK GRAPH \*\/.*?\/\* END DARK GRAPH \*\//gms,
          ``,
        )
        replaceInFile(
          `./themes/${themeName}/_light.scss`,
          `:root[saved-theme="light"]`,
          `:root:root`,
        )
        replaceInFile(
          `./themes/${themeName}/_index.scss`,
          `/* quartz themes */`,
          `/* quartz themes light-only */`,
        )
      }
      // dark only
      if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
        replaceInFile(
          `./themes/${themeName}/_index.scss`,
          /\/\* START LIGHT \*\/.*?\/\* END LIGHT \*\//gms,
          ``,
        )
        replaceInFile(
          `./themes/${themeName}/_index.scss`,
          /\/\* START LIGHT GRAPH \*\/.*?\/\* END LIGHT GRAPH \*\//gms,
          ``,
        )
        replaceInFile(`./themes/${themeName}/_dark.scss`, `:root[saved-theme="dark"]`, `:root:root`)
        replaceInFile(
          `./themes/${themeName}/_index.scss`,
          `/* quartz themes */`,
          `/* quartz themes dark-only */`,
        )
      }
      // generic
      replaceInFile(`./themes/${themeName}/_index.scss`, /\[saved-theme\=\".*?\"\]/g, "")
    }

    // Remove remaining comments
    replaceInFile(`./themes/${themeName}/_index.scss`, /\/\/%%[^%]+%%/g, "")
    if (isDarkTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(`./themes/${themeName}/_dark.scss`, /\/\/%%[^%]+%%/g, "")
    }
    if (isLightTheme(getValueFromDictionary(manifest, "name"))) {
      replaceInFile(`./themes/${themeName}/_light.scss`, /\/\/%%[^%]+%%/g, "")
    }
  })

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
    const prunedScss = prune(processedScss)
    fs.writeFileSync(themePath, prunedScss, "utf8")
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
// Log the time taken to run the script in minutes and seconds
const end = Date.now()
const timeTaken = ((end - start) / 1000).toFixed(2)
console.log(
  `Script completed in ${Math.floor(timeTaken / 60)} minutes and ${Math.floor(timeTaken % 60)} seconds.`,
)
