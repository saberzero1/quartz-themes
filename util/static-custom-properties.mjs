import colors from "./color-convert.mjs"
import calc from "postcss-calc"
import postcssCustomProperties from "postcss-custom-properties"
import postcss from "postcss"
import postcssRelativeColorSyntax from "@csstools/postcss-relative-color-syntax"
import { cleanup, cleanRulesAfterRun } from "./util.mjs"

export default function generateStaticCSS(cssString, themeName) {
  // TODO: investigate why Shiba Inu theme is not working with colors
  const skipColors = ["Shiba Inu"]

  cssString = cssString.replace(/\/\*.*?\*\//gms, "")
  let compareString = cssString

  cssString = postcss()
  .use(postcssCustomProperties({ preserve: false }))
  .process(cssString)
  .css

  while (cssString !== compareString) {
    compareString = cssString

    cssString = postcss()
    .use(postcssCustomProperties({ preserve: false }))
    .process(cssString)
    .css
  }

  cleanup(cssString)
  compareString = cssString

  cssString = postcss()
  .use(calc({ preserve: false }))
  .process(cssString)
  .css

  while (cssString !== compareString) {
    compareString = cssString

    cssString = postcss()
    .use(calc({ preserve: false }))
    .process(cssString)
    .css
  }

  //cssString = cleanRulesAfterRun(cssString)

  compareString = cssString
  cssString = resolveCssVariables(cssString)

  while (cssString !== compareString) {
    compareString = cssString
    cssString = resolveCssVariables(cssString)
  }

  compareString = cssString
  cssString = postcss()
  .use(postcssRelativeColorSyntax())
  .process(cssString)
  .css

  while (cssString !== compareString) {
    compareString = cssString
    cssString = postcss()
    .use(postcssRelativeColorSyntax())
    .process(cssString)
    .css
  }

  const result = cleanRulesAfterRun(cssString)

  if (skipColors.includes(themeName)) return result

  try {
    cssString = colors(cssString)
  } catch(_e) {
    return result
  }

  return cleanRulesAfterRun(cssString)
}

/**
 * A robust parser that finds the full content of a var() function,
 * handling nested parentheses and returning its arguments.
 *
 * @param {string} str - The string to search within.
 * @param {number} startIndex - The starting index of the `var(`.
 * @returns {{name: string, fallback: string | null, endIndex: number} | null}
 */
function parseVarFunction(str, startIndex) {
  let balance = 1;
  let i = startIndex + 4;
  let contentEnd = -1;

  for (; i < str.length; i++) {
    if (str[i] === "(") balance++;
    else if (str[i] === ")") {
      balance--;
      if (balance === 0) {
        contentEnd = i;
        break;
      }
    }
  }

  if (contentEnd === -1) return null;

  const content = str.substring(startIndex + 4, contentEnd);
  balance = 0;
  let commaIndex = -1;
  for (let j = 0; j < content.length; j++) {
    if (content[j] === "(") balance++;
    else if (content[j] === ")") balance--;
    else if (content[j] === "," && balance === 0) {
      commaIndex = j;
      break;
    }
  }

  let name, fallback;
  if (commaIndex !== -1) {
    name = content.substring(0, commaIndex).trim();
    fallback = content.substring(commaIndex + 1).trim();
  } else {
    name = content.trim();
    fallback = null;
  }

  return { name, fallback, endIndex: contentEnd + 1 };
}

/**
 * Recursively resolves a single variable name to its static value.
 *
 * @param {string} name - The name of the custom property to resolve.
 * @param {Record<string, string>} allProps - A map of all defined custom properties.
 * @param {Record<string, string | null>} memo - A cache for memoizing results.
 * @param {Set<string>} path - The current resolution path to detect circular dependencies.
 * @returns {string | null} The resolved static value, or null.
 */
function getResolvedVariable(name, allProps, memo, path) {
  if (name in memo) return memo[name];
  if (path.has(name)) {
    console.warn(`Circular reference detected for custom property: ${name}`);
    return null;
  }

  const value = allProps[name];
  if (typeof value !== "string") return null;

  path.add(name);
  const resolvedValue = resolveCssVariables(value, allProps, memo, path);
  path.delete(name);

  if (resolvedValue.includes("var(")) {
    memo[name] = null;
    return null;
  }

  memo[name] = resolvedValue;
  return resolvedValue;
}

/**
 * Helper to resolve a single var() expression, handling the primary/fallback logic.
 *
 * @returns {string | null} The static value, or null if not resolvable.
 */
function resolveSingleVarExpression(varData, allProps, memo, path) {
  const primaryResolved = getResolvedVariable(
    varData.name,
    allProps,
    memo,
    path,
  );
  if (primaryResolved !== null) {
    return primaryResolved;
  }

  if (varData.fallback !== null) {
    const fallbackResolved = resolveCssVariables(
      varData.fallback,
      allProps,
      memo,
      path,
    );
    if (!fallbackResolved.includes("var(")) {
      return fallbackResolved;
    }
  }
  return null;
}

/**
 * Replaces all resolvable CSS custom property usages (`var(...)`) in a CSS
 * string with their static values.
 *
 * @returns {string} The CSS string with resolved variables.
 */
function resolveCssVariables(
  cssString,
  allProps = null,
  memo = {},
  path = new Set(),
) {
  let resolvedProps = allProps;
  if (!resolvedProps) {
    resolvedProps = {};
    const customPropertyRegex = /(--[\w-]+)\s*:\s*([^;}]+)/g;
    let match;
    while ((match = customPropertyRegex.exec(cssString)) !== null) {
      resolvedProps[match[1].trim()] = match[2].trim();
    }
  }

  // REWRITTEN LOOP: Use a stateless indexOf loop to avoid regex state issues.
  let result = "";
  let currentIndex = 0;
  while (true) {
    const nextVarIndex = cssString.indexOf("var(", currentIndex);
    if (nextVarIndex === -1) {
      result += cssString.substring(currentIndex);
      break;
    }

    // Ensure it's a real var() call and not part of a variable name.
    if (
      nextVarIndex > 0 &&
      cssString[nextVarIndex - 1].match(/[\w-]/)
    ) {
      const skipUntil = nextVarIndex + 4;
      result += cssString.substring(currentIndex, skipUntil);
      currentIndex = skipUntil;
      continue;
    }

    result += cssString.substring(currentIndex, nextVarIndex);
    const varData = parseVarFunction(cssString, nextVarIndex);

    if (!varData) {
      const skipUntil = nextVarIndex + 4;
      result += cssString.substring(nextVarIndex, skipUntil);
      currentIndex = skipUntil;
      continue;
    }

    const finalValue = resolveSingleVarExpression(
      varData,
      resolvedProps,
      memo,
      path,
    );

    if (finalValue !== null) {
      result += finalValue;
    } else {
      result += cssString.substring(nextVarIndex, varData.endIndex);
    }
    currentIndex = varData.endIndex;
  }
  return result;
}
