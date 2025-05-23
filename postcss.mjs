import * as postcss from "postcss"

/**
 * Splits combined CSS rules using PostCSS.
 *
 * @param {string} cssString - The CSS string to process.
 * @returns {string} The transformed CSS string with split rules.
 */
export function splitCombinedRules(cssString) {
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

/**
 * Combines CSS rules with identical selectors using PostCSS.
 * - Declarations from later rules override earlier ones for the same property.
 * - The order of the first appearance of unique selectors in the CSS is preserved.
 * - The order of declarations within a merged rule will generally follow the
 *   order of their first appearance across the combined rules, with overridden
 *   properties updated in place.
 *
 * @param {string} cssString - The CSS string to process.
 * @returns {string} The transformed CSS string with combined rules.
 */
export function combineIdenticalSelectors(cssString) {
  const root = postcss.parse(cssString)

  // This map will store:
  // selectorString -> {
  //   declarations: Map<property, value>,
  //   firstRuleNode: postcss.Rule (the first AST node encountered for this selector)
  // }
  const mergedRulesData = new Map()

  // This array will store rule nodes that are duplicates and should be removed later.
  const rulesToRemove = []

  // First pass: Walk through all rules to collect declarations and identify duplicates.
  root.walkRules((currentRule) => {
    const selector = currentRule.selector // e.g., "h1", "p .class"

    if (mergedRulesData.has(selector)) {
      // This selector has been seen before. Merge its declarations.
      const existingData = mergedRulesData.get(selector)

      // Add/update declarations from the currentRule into the existingData.declarations.
      // The Map.set method naturally handles the "last one wins" for conflicting properties.
      currentRule.walkDecls((decl) => {
        existingData.declarations.set(decl.prop, decl.value)
      })

      // Mark this currentRule for removal, as its content is being merged
      // into the firstRuleNode associated with this selector.
      rulesToRemove.push(currentRule)
    } else {
      // This is the first time we're seeing this selector.
      // Store its declarations and a reference to its AST node.
      const declarations = new Map()
      currentRule.walkDecls((decl) => {
        declarations.set(decl.prop, decl.value)
      })

      mergedRulesData.set(selector, {
        declarations,
        firstRuleNode: currentRule, // This is the rule node we'll keep and modify
      })
    }
  })

  // Second pass: Modify the AST.
  // Update the 'firstRuleNode' for each selector with the final merged declarations.
  mergedRulesData.forEach(({ declarations, firstRuleNode }) => {
    // Remove all existing declarations from the rule node we're keeping.
    // This is to ensure a clean slate before adding the merged declarations.
    firstRuleNode.removeAll()

    // Add the merged declarations back to the firstRuleNode.
    // The order of declarations will be based on the insertion order into the Map.
    declarations.forEach((value, prop) => {
      firstRuleNode.append(postcss.decl({ prop, value }))
    })
  })

  // Remove all the rule nodes that were marked as duplicates.
  rulesToRemove.forEach((rule) => {
    if (rule.parent) {
      // Ensure the rule still has a parent before trying to remove
      rule.remove()
    }
  })

  // Convert the modified AST back to a CSS string.
  return root.toString()
}

/**
 * Removes empty CSS rules (rules with no declarations) and empty at-rules
 * (at-rules with no child rules, declarations, or other functional at-rules
 * in their block) using PostCSS.
 * This process is repeated until no more empty items are found,
 * to handle nested structures becoming empty.
 *
 * @param {string} cssString - The CSS string to process.
 * @returns {string} The transformed CSS string with empty rules and at-rules removed.
 */
export function removeEmptyRules(cssString) {
  const root = postcss.parse(cssString)
  let changedInPass

  do {
    changedInPass = false

    // 1. Remove empty regular style rules
    // A rule is considered empty if it contains no declaration nodes.
    // Rules containing only comments will also be removed.
    root.walkRules((rule) => {
      const hasDeclarations = rule.some((node) => node.type === "decl")
      if (!hasDeclarations) {
        rule.remove()
        changedInPass = true
      }
    })

    // 2. Remove empty at-rules (those that form a block)
    // An at-rule is considered empty if its block contains no style rules,
    // no declarations (e.g., for @font-face), and no other at-rules.
    // At-rules containing only comments in their block will be removed.
    root.walkAtRules((atRule) => {
      // Check if the at-rule is of a type that has a 'nodes' property
      // (i.e., it's a block-containing at-rule like @media, @supports,
      // @keyframes, @font-face, @layer).
      // At-rules like @import or @charset don't have atRule.nodes in the same way.
      if (atRule.nodes) {
        const hasFunctionalContent = atRule.nodes.some(
          (node) =>
            node.type === "rule" || // Contains a style rule
            node.type === "decl" || // Contains a declaration (e.g., in @font-face)
            node.type === "atrule", // Contains a nested at-rule
        )

        if (!hasFunctionalContent) {
          atRule.remove()
          changedInPass = true
        }
      }
    })
  } while (changedInPass) // Repeat if any changes were made in this pass

  return root.toString()
}
