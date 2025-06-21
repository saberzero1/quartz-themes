import yaml from "js-yaml"
import postcss from "postcss"

/**
 * Extracts all /* @settings ... *\/ YAML blocks from a CSS string.
 * @param {string} cssString
 * @returns {string[]} Array of YAML strings
 */
export function extractSettingsBlocks(cssString) {
  const regex = /\/\*\s*@settings([\s\S]*?)\*\//g
  const blocks = []
  let match
  while ((match = regex.exec(cssString)) !== null) {
    blocks.push(match[1])
  }
  return blocks
}

/**
 * Parses a YAML string from a settings block into a JS object.
 * @param {string} yamlString
 * @returns {object}
 */
export function parseSettingsYaml(yamlString) {
  try {
    return yaml.load(yamlString)
  } catch (e) {
    console.error("Failed to parse settings YAML:", e)
    return null
  }
}

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
 * Maps a style setting and value to valid CSS rules.
 * @param {object} setting - A single setting object (from settings.settings[])
 * @param {any} value - The value to use for the setting
 * @returns {string} CSS rule(s)
 */
export function styleSettingToCss(setting, value) {
  const id = setting.id
  switch (setting.type) {
    case "variable-text":
      if (setting.quotes) {
        return `--${id}: '${value}';`
      } else {
        return `--${id}: ${value};`
      }
    case "variable-number":
    case "variable-number-slider":
      if (setting.format) {
        return `--${id}: ${value}${setting.format};`
      } else {
        return `--${id}: ${value};`
      }
    case "variable-select":
      return `--${id}: ${value};`
    case "variable-color":
      // Only basic hex/rgb support for now
      return `--${id}: ${value};`
    case "variable-themed-color":
      // Needs both light and dark values
      return `body.theme-light.css-settings-manager { --${id}: ${value.light}; }\nbody.theme-dark.css-settings-manager { --${id}: ${value.dark}; }`
    case "class-toggle":
      // Returns a class name to toggle
      return value ? `body.${id} {}` : ''
    case "class-select":
      // Returns a class name to add
      return value ? `body.${value} {}` : ''
    default:
      return ''
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
    const selectors = (rule.selectors || rule.selector.split(",").map(s => s.trim()))
    const matchingSelectors = selectors.filter(sel => sel.includes(classSelector))
    if (matchingSelectors.length > 0) {
      // Remove the .class from the selector
      const newSelectors = matchingSelectors.map(sel => sel.replace(new RegExp(`${classSelector}(?=[\.\s])`, "g"), "").replace(/\s+/g, " ").trim())
      // For all non-dark/light selectors, add to output
      if (!newSelectors.some(sel => sel.includes(".theme-dark") || sel.includes(".theme-light"))) {
        output += `${newSelectors.join(", ")} {\n${rule.nodes.map(n => n.toString().endsWith("/") ? n.toString() : n.toString() + ";").join("\n")}\n}\n\n`
      }
      // If the class-toggle is for dark theme, add to darkOutput
      // Also remove the `.dark-theme` class from the selector
      if (newSelectors.some(sel => sel.includes(".theme-dark"))) {
        darkOutput += `${newSelectors.map(sel => sel.replace(new RegExp("\.theme-dark(?=[\.\s])","g"), "").replace(/\s+/g, " ").trim()).join(", ")} {\n${rule.nodes.map(n => n.toString().endsWith("/") ? n.toString() : n.toString() + ";").join("\n")}\n}\n\n`
      }
      // If the class-toggle is for light theme, add to lightOutput
      // Also remove the `.light-theme` class from the selector
      if (newSelectors.some(sel => sel.includes(".theme-light"))) {
        lightOutput += `${newSelectors.map(sel => sel.replace(new RegExp("\.theme-light(?=[\.\s])","g"), "").replace(/\s+/g, " ").trim()).join(", ")} {\n${rule.nodes.map(n => n.toString().endsWith("/") ? n.toString() : n.toString() + ";").join("\n")}\n}\n\n`
      }
    }
  })
  return [output.trim(), darkOutput.trim(), lightOutput.trim()]
}

/**
 * Extracts and rewrites all CSS rules that are gated by a specific class-select value.
 * For each rule with `body.<selectedClass>`, removes the class from the selector and outputs the rule.
 * Only rules that had the class in their selector are included in the result.
 *
 * @param {string} cssString - The full CSS source
 * @param {string} selectedClass - The class-select value (e.g. "theme-variant-dark")
 * @returns {string} - The rewritten CSS string
 */
export function extractClassSelectCss(cssString, selectedClass) {
  const root = postcss.parse(cssString)
  const classSelector = `.${selectedClass}`
  const bodyClassSelector = `body${classSelector}`
  let output = ""
  root.walkRules(rule => {
    const selectors = (rule.selectors || rule.selector.split(",").map(s => s.trim()))
    const matchingSelectors = selectors.filter(sel => sel.includes(bodyClassSelector))
    if (matchingSelectors.length > 0) {
      const newSelectors = matchingSelectors.map(sel => sel.replace(bodyClassSelector, "body").replace(/\s+/g, " ").trim())
      output += `${newSelectors.join(", ")} {\n${rule.nodes.map(n => n.toString()).join("\n")}\n}\n\n`
    }
  })
  return output.trim()
}

/**
 * Replaces all occurrences of a CSS variable (e.g. --accent) with a new value in the CSS string.
 * Only replaces the value, not the selector or property name.
 *
 * @param {string} cssString - The full CSS source
 * @param {string} variableId - The variable id (e.g. "accent")
 * @param {string} value - The new value (e.g. "#ff0000")
 * @returns {string} - The CSS string with the variable replaced
 */
export function replaceVariableColor(cssString, variableId, value) {
  // Regex to match --variableId: ...;
  const regex = new RegExp(`(--${variableId}\s*:\s*)([^;]+)(;)`, 'g')
  return cssString.replace(regex, `$1${value}$3`)
}

/**
 * Replaces all occurrences of a CSS variable (e.g. --accent) with new values for light and dark themes.
 * Only replaces the value, not the selector or property name.
 *
 * @param {string} cssString - The full CSS source
 * @param {string} variableId - The variable id (e.g. "accent")
 * @param {string} valueLight - The value for light theme
 * @param {string} valueDark - The value for dark theme
 * @returns {string} - The CSS string with the variable replaced in light/dark theme blocks
 */
export function replaceVariableThemedColor(cssString, variableId, valueLight, valueDark) {
  // Replace in .theme-light
  let result = cssString.replace(
    new RegExp(`(\.theme-light[^{]*\{[^}]*)(--${variableId}\s*:\s*)([^;]+)(;)`, 'g'),
    (match, pre, varDecl, oldVal, semi) => {
      return pre + varDecl + valueLight + semi
    }
  )
  // Replace in .theme-dark
  result = result.replace(
    new RegExp(`(\.theme-dark[^{]*\{[^}]*)(--${variableId}\s*:\s*)([^;]+)(;)`, 'g'),
    (match, pre, varDecl, oldVal, semi) => {
      return pre + varDecl + valueDark + semi
    }
  )
  return result
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
  const regex = new RegExp(`(--${variableId}\s*:\s*)([^;]+)(;)`, 'g')
  return cssString.replace(regex, `$1${value}$3`)
}

/**
 * Replaces a set of gradient variables (e.g. --color-base-00, --color-base-05, ...) with new values.
 *
 * @param {string} cssString - The full CSS source
 * @param {string} baseId - The base variable id (e.g. "color-base")
 * @param {Object} valueMap - Map of suffix (e.g. "00", "05") to value (e.g. { "00": "#fff", "05": "#eee" })
 * @returns {string} - The CSS string with the gradient variables replaced
 */
export function replaceGradientVariables(cssString, baseId, valueMap) {
  let result = cssString
  for (const [suffix, value] of Object.entries(valueMap)) {
    const varName = `--${baseId}-${suffix}`
    const regex = new RegExp(`(${varName}\s*:\s*)([^;]+)(;)`, 'g')
    result = result.replace(regex, `$1${value}$3`)
  }
  return result
}
