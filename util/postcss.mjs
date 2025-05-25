import * as postcss from "postcss"

/**
 * Splits combined CSS rules using PostCSS.
 *
 * @param {string} cssString - The CSS string to process.
 * @returns {string} The transformed CSS string with split rules.
 */
export function splitCombinedRules(cssString) {
  const root = postcss.parse(cssString)

  root.walkRules((originalRule) => {
    if (originalRule.selectors && originalRule.selectors.length > 1) {
      const parent = originalRule.parent
      const newRules = []

      // 1. Extract all declaration nodes from the original rule and clone them.
      const declarationsToUse = []
      originalRule.walkDecls((decl) => {
        declarationsToUse.push(decl.clone())
      })

      // 2. Sort these cloned declarations.
      declarationsToUse.sort(compareDeclarations)

      // 3. For each individual selector, create a new rule
      //    and append the sorted, cloned declarations.
      originalRule.selectors.forEach((selector) => {
        const newRule = postcss.rule({ selector: selector.trim() })
        declarationsToUse.forEach((sortedDecl) => {
          newRule.append(sortedDecl.clone()) // Clone again for each new rule
        })
        newRules.push(newRule)
      })

      newRules.forEach((newRule) => {
        parent.insertBefore(originalRule, newRule)
      })
      originalRule.remove()
    }
  })

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
  const mergedRulesData = new Map()
  const rulesToRemove = []

  root.walkRules((currentRule) => {
    const selector = currentRule.selector

    if (mergedRulesData.has(selector)) {
      const existingData = mergedRulesData.get(selector)
      currentRule.walkDecls((decl) => {
        existingData.declarations.set(decl.prop, decl.value) // Last one wins
      })
      rulesToRemove.push(currentRule)
    } else {
      const declarations = new Map()
      currentRule.walkDecls((decl) => {
        declarations.set(decl.prop, decl.value)
      })
      mergedRulesData.set(selector, {
        declarations,
        firstRuleNode: currentRule,
      })
    }
  })

  mergedRulesData.forEach(({ declarations, firstRuleNode }) => {
    firstRuleNode.removeAll() // Clear existing content

    const declObjectsArray = []
    declarations.forEach((value, prop) => {
      declObjectsArray.push(postcss.decl({ prop, value }))
    })

    declObjectsArray.sort(compareDeclarations) // Sort the final declarations

    declObjectsArray.forEach((decl) => {
      firstRuleNode.append(decl)
    })
  })

  rulesToRemove.forEach((rule) => {
    if (rule.parent) {
      rule.remove()
    }
  })

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

/**
 * Retrieves the string content of declarations within a specific CSS rule.
 * Assumes selectors are unique in the provided CSS string.
 *
 * @param {string} cssString - The CSS string to process.
 * @param {string} targetSelector - The selector of the rule to inspect (e.g., "h1", ".my-class").
 * @param {string} [propertyName] - Optional. The specific property (or CSS variable)
 *                                  to retrieve. If provided, only this declaration is returned.
 * @returns {string|null} A string containing the formatted declaration(s),
 *                        an empty string if the rule exists but has no declarations (and no specific
 *                        property was requested), or null if the selector or specific property
 *                        is not found.
 */
export function getRuleDeclarations(cssString, targetSelector, propertyName = null) {
  const root = postcss.parse(cssString)
  let foundRuleNode = null

  root.walkRules((rule) => {
    if (rule.selector === targetSelector) {
      foundRuleNode = rule
      return false
    }
  })

  if (!foundRuleNode) {
    return null
  }

  if (propertyName) {
    let specificDeclString = null
    foundRuleNode.walkDecls((decl) => {
      if (decl.prop === propertyName) {
        specificDeclString = `  ${decl.prop}: ${decl.value};`
        return false
      }
    })
    return specificDeclString
  } else {
    const declObjects = []
    foundRuleNode.walkDecls((decl) => {
      declObjects.push(decl) // Store actual declaration objects
    })

    if (declObjects.length === 0) {
      return "" // Rule exists but has no declarations
    }

    declObjects.sort(compareDeclarations) // Sort the declaration objects

    const formattedDeclarations = declObjects.map((decl) => `  ${decl.prop}: ${decl.value};`)
    return formattedDeclarations.join("\n")
  }
}

/**
 * Comparator function for sorting PostCSS declaration objects.
 * - Custom properties (starting with '--') come before standard properties.
 * - Within each group, properties are sorted alphabetically.
 *
 * @param {postcss.Declaration} declA - The first declaration object.
 * @param {postcss.Declaration} declB - The second declaration object.
 * @returns {number} - A negative value if declA comes before declB,
 *                   a positive value if declA comes after declB, or 0 if equal.
 */
function compareDeclarations(declA, declB) {
  const propA = declA.prop
  const propB = declB.prop

  const isCustomA = propA.startsWith("--")
  const isCustomB = propB.startsWith("--")

  if (isCustomA && !isCustomB) {
    return -1 // Custom properties come first
  }
  if (!isCustomA && isCustomB) {
    return 1 // Standard properties come after custom
  }

  // If both are custom or both are standard, sort alphabetically
  return propA.localeCompare(propB)
}
