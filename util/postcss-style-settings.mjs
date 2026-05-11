import yaml from "js-yaml"
import postcss from "postcss"
import { endsWithAnyOf } from "./util.mjs"
import fs from "fs"

String.prototype.endsWithAnyOf = endsWithAnyOf



const SETTINGS_BLOCK_RE = /\/\*!?\s*@settings[\s\S]*?\*\//g

function extractSettingsBlocks(cssString) {
  const matches = cssString.match(SETTINGS_BLOCK_RE)
  if (!matches) return []
  return matches.map((block) => {
    // Strip the /*[!] @settings prefix and trailing */
    let inner = block.replace(/^\/\*!?\s*@settings\s*/, "").replace(/\s*\*\/$/, "")
    return inner.trim()
  })
}

function parseSettingsYaml(yamlString) {
  // Tabs are invalid YAML indentation but common in Obsidian theme CSS
  const normalized = yamlString.replace(/\t/g, "  ")
  try {
    return yaml.load(normalized)
  } catch {
    // First parse failed — try fixing common indentation errors in
    // Obsidian theme @settings blocks.
    //
    // Common pattern: bare `-` list markers appear at the WRONG indentation
    // level (usually matching their content's parent keys instead of the
    // list's own level). We find the FIRST bare `-` (which is correctly
    // placed) and realign all subsequent bare `-` markers at the same indent.
    // Second attempt: realign bare `-` markers to the canonical level.
    try {
      const lines = normalized.split("\n")
      let canonicalDashIndent = -1
      for (const line of lines) {
        const m = line.match(/^(\s*)-\s*$/)
        if (m) { canonicalDashIndent = m[1].length; break }
      }
      if (canonicalDashIndent >= 0) {
        const fixed = lines.map((line) => {
          const bareMatch = line.match(/^(\s*)-\s*$/)
          if (bareMatch && bareMatch[1].length !== canonicalDashIndent) {
            return " ".repeat(canonicalDashIndent) + "-"
          }
          return line
        })
        const result = yaml.load(fixed.join("\n"))
        if (result) return result
      }
    } catch {}

    // Third attempt: line-by-line recovery parser.
    // When YAML indentation is too broken for js-yaml, we parse the flat
    // key-value structure ourselves. Style Settings entries are simple
    // objects with known keys (id, type, title, default, format, options, etc.)
    // nested under a top-level `settings:` array.
    try {
      return parseSettingsLineByLine(normalized)
    } catch {
      return null
    }
  }
}

/**
 * Line-by-line fallback parser for @settings blocks with broken YAML indentation.
 *
 * Style Settings entries follow a predictable structure:
 *   name: Theme Name
 *   id: theme-id
 *   settings:
 *     -
 *       id: setting-id
 *       type: variable-number
 *       title: My Setting
 *       default: 42
 *
 * We parse this by scanning for top-level keys (name, id, settings) and then
 * treating each `id:` + `type:` pair as the start of a new settings entry.
 */
function parseSettingsLineByLine(text) {
  const lines = text.split("\n")

  let rootName = ""
  let rootId = ""
  const settings = []
  let current = null
  let inOptions = false
  let currentOption = null
  let seenSettingsKey = false

  // Detect the indentation level used for top-level entry dashes (e.g. "    -").
  // Options sub-array dashes will be more deeply indented.
  let entryDashIndent = -1
  for (const l of lines) {
    const m = l.match(/^(\s*)-\s*$/)
    if (m) { entryDashIndent = m[1].length; break }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line || line === "-") {
      // Determine whether this bare dash is an option-level delimiter or
      // a top-level entry delimiter by comparing its indentation to the
      // canonical entry dash indent.
      const dashIndent = rawLine.search(/\S/)
      const isOptionDash = inOptions && entryDashIndent >= 0 && dashIndent > entryDashIndent

      if (isOptionDash) {
        // Inside an options array, bare dashes are option delimiters — flush the
        // current option but keep collecting more options for the same entry.
        if (currentOption && currentOption.value) {
          if (!current.options) current.options = []
          current.options.push(currentOption)
        }
        currentOption = null
        continue
      }
      // Bare dash or empty line: flush current entry if it has an id+type
      if (current && current.id && current.type) {
        if (currentOption && currentOption.value) {
          if (!current.options) current.options = []
          current.options.push(currentOption)
          currentOption = null
        }
        settings.push(current)
      }
      current = null
      inOptions = false
      currentOption = null
      continue
    }

    // Top-level keys (before settings array)
    const kvMatch = line.match(/^([\w-]+)\s*:\s*(.*)$/)
    if (!kvMatch) continue
    const [, key, rawVal] = kvMatch
    const val = rawVal.replace(/^['"]|['"]$/g, "").trim()

    // Root-level metadata (only before the `settings:` key)
    if (!seenSettingsKey && !current && key === "name") { rootName = val; continue }
    if (!seenSettingsKey && !current && key === "id") { rootId = val; continue }
    if (key === "settings") { seenSettingsKey = true; continue }

    // Start a new entry if we see `id:` without a current entry
    if (key === "id" && !current) {
      current = { id: val }
      inOptions = false
      continue
    }
    // If we see `id:` while we already have a current entry, flush and start new
    if (key === "id" && current) {
      if (current.id && current.type) {
        if (currentOption && currentOption.value) {
          if (!current.options) current.options = []
          current.options.push(currentOption)
          currentOption = null
        }
        settings.push(current)
      }
      current = { id: val }
      inOptions = false
      continue
    }

    if (!current) continue

    // Options sub-array for class-select
    if (key === "options") { inOptions = true; continue }
    if (inOptions && key === "label") {
      if (currentOption && currentOption.value) {
        if (!current.options) current.options = []
        current.options.push(currentOption)
      }
      currentOption = { label: val }
      continue
    }
    if (inOptions && key === "value") {
      if (currentOption) currentOption.value = val
      else currentOption = { value: val }
      continue
    }

    // Regular setting keys
    if (key === "type") { current.type = val; inOptions = false; continue }
    if (key === "title") { current.title = val; continue }
    if (key === "description") { current.description = val; continue }
    if (key === "default") {
      // Try to preserve numeric values
      const num = Number(val)
      current.default = val !== "" && !isNaN(num) ? num : val
      continue
    }
    if (key === "default-light") { current["default-light"] = val; continue }
    if (key === "default-dark") { current["default-dark"] = val; continue }
    if (key === "format") { current.format = val; continue }
    if (key === "min") { current.min = Number(val) || 0; continue }
    if (key === "max") { current.max = Number(val) || 100; continue }
    if (key === "step") { current.step = Number(val) || 1; continue }
    if (key === "level") { current.level = Number(val) || 1; continue }
    if (key === "collapsed") { current.collapsed = val === "true"; continue }
    if (key === "allowEmpty") { current.allowEmpty = val === "true"; continue }
    if (key === "markdown") { current.markdown = val === "true"; continue }
    if (key === "opacity") { current.opacity = val === "true"; continue }
  }

  // Flush last entry
  if (current && current.id && current.type) {
    if (currentOption && currentOption.value) {
      if (!current.options) current.options = []
      current.options.push(currentOption)
    }
    settings.push(current)
  }

  if (settings.length === 0) return null

  return {
    name: rootName,
    id: rootId,
    settings,
  }
}

/**
 * Extracts all style settings from a CSS string.
 * @param {string} cssString
 * @returns {object[]} Array of parsed settings objects
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
    const data = yaml.load(yamlString)
    if (Array.isArray(data)) {
      return {
        id: data[0]?.id || "",
        name: data[0]?.name || "",
        settings: data.flatMap((entry) =>
          Array.isArray(entry?.settings) ? entry.settings : []
        ),
      }
    }
    if (Array.isArray(data?.sections)) {
      return {
        id: data.sections[0]?.id || "",
        name: data.sections[0]?.name || "",
        settings: data.sections.flatMap((entry) =>
          Array.isArray(entry?.settings) ? entry.settings : []
        ),
      }
    }
    return data
      ? {
          id: data.id || "",
          name: data.name || "",
          settings: Array.isArray(data.settings) ? data.settings : [],
        }
      : { id: "", name: "", settings: [] }
  } catch (e) {
    console.error(`Failed to read or parse file ${filePath}:`, e)
    return { id: "", name: "", settings: [] }
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

