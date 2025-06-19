import yaml from "js-yaml"

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
