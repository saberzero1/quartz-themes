import * as postcss from "postcss"
import * as scssSyntax from "postcss-scss"; // To parse SCSS files that contain CSS Custom Properties

/**
 * @typedef {object} CssVarRecord
 * @property {number} uses - How many times this CSS Custom Property (or its dependents) is used.
 * @property {Set<postcss.Declaration>} declarations - AST nodes where this property is declared.
 * @property {Set<string>} dependencies - Other CSS Custom Properties this property's value depends on.
 */

/**
 * Removes unused CSS Custom Properties (e.g., --my-var) from an SCSS string.
 * @param {string} scssString - The input SCSS string.
 * @returns {string} The SCSS string with unused CSS Custom Properties removed.
 */
export function prune(scssString) {
  const root = postcss.parse(scssString, { syntax: scssSyntax });

  /** @type {Map<string, CssVarRecord>} */
  const records = new Map();
  /** @type {Set<string>} */
  const directlyUsedCssVars = new Set(); // CSS Vars used directly by non-custom-property decls

  /**
   * Gets or creates a record for a CSS Custom Property.
   * @param {string} variable - The CSS Custom Property name (e.g., "--myVar").
   * @returns {CssVarRecord}
   */
  const getRecord = (variable) => {
    let record = records.get(variable);
    if (!record) {
      record = {
        uses: 0,
        dependencies: new Set(),
        declarations: new Set(),
      };
      records.set(variable, record);
    }
    return record;
  };

  /**
   * Registers that a CSS Custom Property's declaration depends on another.
   * @param {string} variable - The property being declared (e.g., "--varA").
   * @param {string} dependency - The property used in --varA's value (e.g., "--varB").
   */
  const registerDependency = (variable, dependency) => {
    if (variable === dependency) return; // Avoid self-dependency
    getRecord(variable).dependencies.add(dependency);
  };

  // Phase 1: Collect all CSS Custom Property declarations, their dependencies, and direct uses.
  root.walkDecls((decl) => {
    const isCssVarDeclaration = decl.prop.startsWith("--");

    if (isCssVarDeclaration) {
      getRecord(decl.prop).declarations.add(decl);
    }

    // Scan the value for var() usages, regardless of whether decl.prop is a custom prop or not.
    if (decl.value && decl.value.includes("var(")) {
      // Regex from the original plugin to find var(--name)
      const varRegex = /var\(\s*(?<name>--[^ ,\);]+)/g;
      let match;
      while ((match = varRegex.exec(decl.value)) !== null) {
        if (match.groups && match.groups.name) {
          const usedVarName = match.groups.name.trim();
          if (isCssVarDeclaration) {
            // If --current-prop: var(--another-prop), then --current-prop depends on --another-prop
            registerDependency(decl.prop, usedVarName);
          } else {
            // If color: var(--some-prop), then --some-prop is directly used
            directlyUsedCssVars.add(usedVarName);
          }
        }
      }
    }
  });

  /**
   * Recursively marks a CSS Custom Property and its dependencies as used.
   * @param {string} variable - The CSS Custom Property name to mark as used.
   * @param {Set<string>} processingStack - Used to detect circular dependencies for this use chain.
   */
  const registerUse = (variable, processingStack = new Set()) => {
    if (!records.has(variable)) {
      // This variable is used but not declared in the analyzed scope.
      return;
    }
    if (processingStack.has(variable)) {
      // Circular dependency detected in this path.
      return;
    }

    const record = getRecord(variable);
    record.uses++; // Increment use count

    // Only recurse if this is the first time this use path marks this variable.
    // This is an optimization; the processingStack handles correctness for cycles.
    if (record.uses === 1) {
      processingStack.add(variable);
      for (const dependency of record.dependencies) {
        registerUse(dependency, processingStack);
      }
      processingStack.delete(variable); // Backtrack
    }
  };

  // Phase 2: Propagate uses through the dependency graph.
  // This loop is crucial, as the original plugin had it.
  for (const variable of directlyUsedCssVars) {
    registerUse(variable);
  }

  // Phase 3: Remove unused CSS Custom Property declarations.
  for (const record of records.values()) {
    if (record.uses === 0) {
      for (const declNode of record.declarations) {
        declNode.remove();
      }
    }
  }

  return root.toString(scssSyntax);
}
