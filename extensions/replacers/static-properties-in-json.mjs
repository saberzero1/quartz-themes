/**
 * Iteratively resolves CSS custom properties (variables) in a given JSON
 * structure until the structure is stable. This process is often called
 * "burning down" the variables.
 *
 * @param {object} cssJson The input JSON object, where keys are CSS selectors
 *   and values are arrays of property/value pairs.
 * @returns {Array} An array containing the processed JSON object and the number
 *   of iterations it took to resolve all variables.
 */
export default function burnDownCssVariables(cssJson) {
  // Create a deep copy to avoid mutating the original object.
  const processedJson = JSON.parse(JSON.stringify(cssJson));

  // Add a safety limit to prevent true infinite loops in unforeseen edge cases.
  const MAX_ITERATIONS = 5;
  let iterations = 0;

  while (iterations < MAX_ITERATIONS) {
    let madeChangeInThisPass = false;
    iterations++;

    // --- Pass 1: Build a map of all current custom property values ---
    // This map is rebuilt in every iteration to reflect the latest resolved values.
    const customProperties = new Map();
    for (const selector in processedJson) {
      for (const rule of processedJson[selector]) {
        if (rule.property.startsWith("--")) {
          customProperties.set(rule.property, rule.value);
        }
      }
    }

    // --- Pass 2: Substitute variables in all property values ---
    // This regex finds all occurrences of var(--some-name) and captures the name.
    const varRegex = /var\((--[a-zA-Z0-9-]+)\)/g;

    for (const selector in processedJson) {
      for (const rule of processedJson[selector]) {
        const originalValue = rule.value;

        // Only process values that contain a 'var(' for efficiency.
        if (originalValue && originalValue.includes("var(")) {
          const newValue = originalValue.replace(varRegex, (match, varName) => {
            // If the variable found (varName) is the same as the property
            // we are currently defining (rule.property), do not replace it.
            // This prevents infinite loops like: --x: calc(var(--x)).
            if (varName === rule.property) {
              return match; // Return the original 'var(...)'
            }

            // Look up the captured variable name in our map.
            if (customProperties.has(varName)) {
              // If found, return its value for substitution.
              return customProperties.get(varName);
            }
            // If the variable is not found, return the original 'var(...)'
            // string. This leaves unresolved variables as-is.
            return match;
          });

          if (newValue !== originalValue) {
            rule.value = newValue;
            madeChangeInThisPass = true;
          }
        }
      }
    }

    // If a full pass over the entire structure resulted in no changes,
    // we have resolved all possible variables and can exit.
    if (!madeChangeInThisPass) {
      console.log(`CSS burn-down complete in ${iterations} iteration(s).`);
      return [processedJson, iterations];
    }
    console.log(
      `Iteration ${iterations}: Changes made, continuing burn-down process...`,
    );
    console.log(
      `The file is now ${JSON.stringify(processedJson).length} characters long.`,
    );
  }

  // If the loop completes due to max iterations, it indicates a problem.
  console.warn(
    `Burn-down process stopped after reaching max iterations (${MAX_ITERATIONS}). ` +
      "There might be a circular reference that could not be resolved.",
  );

  return [processedJson, iterations];
}
