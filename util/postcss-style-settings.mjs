import yaml from "js-yaml"
import postcss from "postcss"
import { endsWithAnyOf } from "./util.mjs"
import fs from "fs"

String.prototype.endsWithAnyOf = endsWithAnyOf



/**
 * Extracts all style settings from a CSS string.
 * @param {string} cssString
 * @returns {object[]} Array of settings objects
 */
export function extractStyleSettings(cssString) {
  const blocks = extractSettingsBlocks(cssString)
  return blocks
    .map(parseSettingsYaml)
    .filter(Boolean)
}

/**
 * Extracts style settings from a YAML file.
 *
 * @param {string} filePath - The path to the YAML file
 * @returns {object[]} Array of settings objects
 * @throws {Error} If the file cannot be read or parsed
 */
export function extractStyleSettingsFromFile(filePath) {
  try {
    const yamlString = fs.readFileSync(filePath, 'utf8')
    const settings = yaml.load(yamlString)
    return settings && Array.isArray(settings.settings) ? settings.settings : []
  } catch (e) {
    console.error(`Failed to read or parse file ${filePath}:`, e)
    return []
  }
}



/**
 * Extracts and rewrites all CSS rules that are gated by a specific class-toggle.
 * For each rule with `body.<class>`, removes the class from the selector and outputs the rule.
 * Only rules that had the class in their selector are included in the result.
 *
 * @param {string} cssString - The full CSS source
 * @param {string} classToggleId - The class-toggle id (e.g. "my-css-class")
 * @returns {string, string, string} - The rewritten CSS string, dark theme CSS string, light theme CSS string
 */
export function extractClassToggleCss(cssString, classToggleId) {
  const root = postcss.parse(cssString)
  const classSelector = classToggleId.startsWith(".") ? classToggleId : `.${classToggleId}`
  let output = ""
  let darkOutput = ""
  let lightOutput = ""
  root.walkRules(rule => {
    // For each selector in the rule (can be comma-separated)
    const selectors = (rule.selectors || rule.selector.split(",").map(s => s.trim())).map(sel => sel.replace(/\s+/g, " ").trim())
    const matchingSelectors = selectors.filter(sel => sel.includes(classSelector) && !sel.match(`:(not|is)\([^\)]*\\${classSelector}[^\)]*\)`, "g"))
    if (matchingSelectors.length > 0) {
      // Remove the .class from the selector
      const newSelectors = matchingSelectors.map(sel => sel.replace(new RegExp(`(?<!['"])\\${classSelector}(?=[\\.\s])`, "g"), "").replace(/\s+/g, " ").trim())
      // For all non-dark/light selectors, add to output
      if (!newSelectors.some(sel => sel.includes(".theme-dark") || sel.includes(".theme-light"))) {
        output += `${newSelectors.join(", ")} {\n${rule.nodes.map(n => n.toString().endsWithAnyOf(["/", "{"]) ? n.toString() : n.toString() + ";").join("\n")}\n}\n\n`
      }
      // If the class-toggle is for dark theme, add to darkOutput
      // Also remove the `.dark-theme` class from the selector
      if (newSelectors.some(sel => sel.includes(".theme-dark"))) {
        darkOutput += `${newSelectors.map(sel => sel.replace(new RegExp(`(?<!['"])\\.theme-dark(?=[\\.\s])`,"g"), "").replace(/\s+/g, " ").trim()).join(", ")} {\n${rule.nodes.map(n => n.toString().endsWithAnyOf(["/", "{"]) ? n.toString() : n.toString() + ";").join("\n")}\n}\n\n`
      }
      // If the class-toggle is for light theme, add to lightOutput
      // Also remove the `.light-theme` class from the selector
      if (newSelectors.some(sel => sel.includes(".theme-light"))) {
        lightOutput += `${newSelectors.map(sel => sel.replace(new RegExp(`(?<!['"])\\.theme-light(?=[\\.\s])`,"g"), "").replace(/\s+/g, " ").trim()).join(", ")} {\n${rule.nodes.map(n => n.toString().endsWithAnyOf(["/", "{"]) ? n.toString() : n.toString() + ";").join("\n")}\n}\n\n`
      }
    }
  })
  return [output.trim(), darkOutput.trim(), lightOutput.trim()]
}





/**
 * Replaces all occurrences of a CSS variable (e.g. --id) with a new value in the CSS string.
 * Works for variable-text, variable-number, variable-number-slider, variable-select.
 *
 * @param {string} cssString - The full CSS source
 * @param {string} variableId - The variable id (e.g. "text" or "line-width")
 * @param {string|number} value - The new value
 * @returns {string} - The CSS string with the variable replaced
 */
export function replaceVariableValue(cssString, variableId, value) {
  const regex = new RegExp(`^\s*?(?!\@container).*?(--${variableId}\s*:\s*)([^;]+)(;)`, 'g')
  return cssString.replace(regex, `$1${value}$3`)
}


