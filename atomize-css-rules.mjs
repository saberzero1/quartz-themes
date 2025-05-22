import * as postcss from "postcss"

/**
 * Splits combined CSS rules using PostCSS.
 *
 * @param {string} cssString - The CSS string to process.
 * @returns {string} The transformed CSS string with split rules.
 */
function splitCombinedRulesWithPostCSS(cssString) {
  // Parse the CSS string into an AST
  const root = postcss.parse(cssString)

  // Walk through each rule in the AST
  root.walkRules((rule) => {
    // rule.selectors is an array of selectors for this rule.
    // e.g., for "h1, h2 { color: red; }", rule.selectors would be ["h1", "h2"]
    if (rule.selectors && rule.selectors.length > 1) {
      const originalRule = rule
      const parent = originalRule.parent // The parent node (root or an at-rule)
      const newRules = []

      // For each individual selector, create a new rule
      originalRule.selectors.forEach((selector) => {
        const newRule = postcss.rule({ selector: selector.trim() })

        // Clone the declarations from the original rule to the new rule
        originalRule.nodes.forEach((decl) => {
          newRule.append(decl.clone()) // Essential to clone nodes
        })
        newRules.push(newRule)
      })

      // Replace the original combined rule with the new individual rules
      newRules.forEach((newRule) => {
        parent.insertBefore(originalRule, newRule)
      })
      originalRule.remove() // Remove the original combined rule
    }
  })

  // Convert the modified AST back to a CSS string
  return root.toString()
}

export default splitCombinedRulesWithPostCSS
