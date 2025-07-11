import replaceStaticPropertiesInJSON from "../replacers/static-properties-in-json.mjs";
import { format } from "../formatter.mjs";
import { getTheme } from "../../util/util.mjs";
import { readFileSync, writeFileSync, existsSync } from "fs";

export default function replaceStaticProperties(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    const inputFile = `./atomic/${theme}/theme.json`;
    const outputFile = `./atomic/${theme}/theme-static.json`;
    if (!existsSync(inputFile)) {
      console.warn(`Input file does not exist for theme: ${theme}`);
      return;
    }
    const inputData = JSON.parse(readFileSync(inputFile, "utf8"));
    let compareData = inputData;
    let result = replaceStaticPropertiesInJSON(inputData);
    let outputData = result[0];
    let iterations = result[1];
    while (
      JSON.stringify(compareData) !== JSON.stringify(outputData) &&
      iterations < 25
    ) {
      compareData = outputData;
      result = replaceStaticPropertiesInJSON(outputData);
      outputData = result[0];
      iterations += result[1];
    }

    outputData = ensureBalancedParentheses(outputData);

    writeFileSync(
      outputFile,
      format(JSON.stringify(outputData, null, 2), "json"),
      "utf8",
    );
    console.log(`Replaced static properties in JSON for theme: ${theme}`);
  });
}

function ensureBalancedParentheses(jsonObject) {
  // JSON object structure:
  // "key": [
  //   {
  //     "property": "some-property",
  //     "value": "some-value (with potentially unbalanced parentheses"
  //   }
  // ]
  const resultObject = {};
  for (const key in jsonObject) {
    // rewrite this based on the structure of the JSON object:
    /*if (typeof jsonObject[key] === "string") {
      // Check for unbalanced parentheses in the string value.
      const openParentheses = (jsonObject[key].match(/\(/g) || []).length;
      const closeParentheses = (jsonObject[key].match(/\)/g) || []).length;

      // If unbalanced, add a closing parenthesis at the end.
      if (openParentheses > closeParentheses) {
        jsonObject[key] += ")".repeat(openParentheses - closeParentheses);
      }
    } else if (
      typeof jsonObject[key] === "object" &&
      jsonObject[key] !== null
    ) {
      // Recursively ensure balanced parentheses in nested objects.
      ensureBalancedParentheses(jsonObject[key]);
    }*/
    if (Array.isArray(jsonObject[key])) {
      resultObject[key] = jsonObject[key].map((item) => {
        if (typeof item === "object" && item !== null) {
          // Ensure balanced parentheses in the 'value' property.
          if (item.value) {
            const openParentheses = (item.value.match(/\(/g) || []).length;
            const closeParentheses = (item.value.match(/\)/g) || []).length;
            if (openParentheses > closeParentheses) {
              item.value += ")".repeat(openParentheses - closeParentheses);
            }
          }
          return item;
        }
        return item; // Return the item as is if it's not an object.
      });
    } else {
      resultObject[key] = jsonObject[key]; // Keep other types unchanged.
    }
  }

  return jsonObject;
}
