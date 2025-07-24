const ignoreList = [
  "--callout-color",
  "--h1-color",
  "--h2-color",
  "--h3-color",
  "--h4-color",
  "--h5-color",
  "--h6-color",
  "--bodyFont",
  "--codeFont",
  "--headerFont",
  "--titleFont",
  "--shiki-dark",
  "--shiki-dark-bg",
  "--shiki-light",
  "--shiki-light-bg",
];

/**
 * Resolves CSS custom property `var()` functions within a string,
 * using a provided map of variable values. It handles nested variables
 * and fallbacks correctly.
 *
 * @param scssContent The string containing the SCSS/CSS code with `var()` functions.
 * @param variableMap An object where keys are custom property names (e.g., '--some-color')
 *   and values are their corresponding CSS values (e.g., 'red').
 * @returns The processed string with `var()` functions replaced where possible.
 */
export default function resolveCssVariables(scssContent, variableMap) {
  // This regex finds the *innermost* var() functions by matching `var(`
  // followed by any characters that are NOT `(` or `)`. This ensures
  // we don't accidentally match a `var()` that contains another `var()`.
  const innermostVarRegex = /var\(([^()]*)\)/g;

  let iterations = 0;

  let processedContent = scssContent;
  let previousContent;

  // We loop until a full pass over the string makes no changes.
  // This ensures that nested variables are resolved layer by layer.
  do {
    previousContent = processedContent;
    processedContent = processedContent.replace(
      innermostVarRegex,
      (match, innerContent) => {
        // `match` is the full string, e.g., "var(--a, --b, #fff)"
        // `innerContent` is the part inside the parentheses, e.g., "--a, --b, #fff"

        // Split the inner content by commas to get the variable and its fallbacks.
        const candidates = innerContent.split(",").map((s) => s.trim());

        for (const candidate of candidates) {
          if (candidate.startsWith("--")) {
            if (ignoreList.includes(candidate)) {
              // If the candidate is in the ignore list, skip it.
              continue;
            }

            // It's a variable. Check if it exists in our map.
            if (Object.prototype.hasOwnProperty.call(variableMap, candidate)) {
              // Found a match! Return the value from the map.
              return variableMap[candidate];
            }
            // If not in the map, continue to the next candidate (the fallback).
          } else {
            // It's not a variable, so it must be a literal fallback value.
            // Return this literal value.
            return candidate;
          }
        }

        // If the loop finishes, no valid variable or fallback was found.
        // Return the original `var(...)` string untouched.
        return match;
      },
    );
    iterations++;
  } while (processedContent !== previousContent && iterations < 100);

  if (iterations >= 100) {
    console.warn(
      "resolveCssVariables: Too many iterations, potential infinite loop detected.",
    );
  }

  return processedContent;
}
