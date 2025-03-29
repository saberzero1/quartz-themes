import css from "css"
import sass from "sass"

/**
 * Converts non-srgb colors in a CSS file to rgb or hex format using Sass,
 * skipping @function definitions and complex Sass expressions.
 *
 * @param {string} cssString - The CSS content as a string.
 * @returns {string} The CSS content with non-srgb colors converted to rgb or hex format.
 */
function convertCssColorsToRgbWithSass(cssString) {
  try {
    const ast = css.parse(cssString)

    function transformDeclarations(declarations, variables) {
      declarations.forEach((declaration) => {
        if (declaration.type === "declaration" && declaration.value) {
          let value = declaration.value

          // Replace custom variables with their values
          for (const variableName in variables) {
            if (variables.hasOwnProperty(variableName)) {
              const variableValue = variables[variableName]
              const regex = new RegExp(`var\\(${variableName}\\)`, "g")
              value = value.replace(regex, variableValue)
            }
          }

          // Skip if the value contains a Sass @function call or complex expression
          if (/@[\w-]+\(|#\{.*\}/.test(value)) {
            return // Skip this declaration if it contains a function call or interpolation
          }

          // Replace non-srgb colors with rgb format using Sass
          try {
            const result = sass.compileString(`
              .temp {
                color: ${value};
              }
            `)

            // Extract the converted color from the compiled CSS
            const compiledCss = result.css.toString()
            const colorMatch = compiledCss.match(/color: (.*);/)

            if (colorMatch && colorMatch[1]) {
              declaration.value = colorMatch[1].trim()
            }
          } catch (sassError) {
            // If Sass compilation fails, leave the value as is
            // This handles cases where the value is not a simple color,
            // or contains unsupported Sass syntax
            console.warn(`Sass compilation error for value: ${value}`, sassError)
          }
        }
      })
    }

    function traverse(rules, variables = {}) {
      rules.forEach((rule) => {
        if (rule.type === "rule" && rule.declarations) {
          transformDeclarations(rule.declarations, variables)
        } else if (rule.type === "declaration" && rule.property && rule.property.startsWith("--")) {
          // Extract custom variables
          variables[`${rule.property}`] = rule.value
        } else if (rule.type === "media" && rule.rules) {
          traverse(rule.rules, variables) // Recursively process rules within media queries
        } else if (rule.type === "document" && rule.rules) {
          traverse(rule.rules, variables) // Recursively process rules within document queries
        } else if (rule.type === "supports" && rule.rules) {
          traverse(rule.rules, variables) // Recursively process rules within supports queries
        } else if (rule.type === "atrule" && rule.name === "each") {
          // Skip @each loops
          return
        }
      })
    }

    if (ast && ast.stylesheet && ast.stylesheet.rules) {
      traverse(ast.stylesheet.rules)
    }

    return css.stringify(ast)
  } catch (error) {
    console.error("Error processing CSS:", error)
    console.error(cssString)
    return cssString // Return the original CSS to avoid breaking the build
  }
}

export default convertCssColorsToRgbWithSass
