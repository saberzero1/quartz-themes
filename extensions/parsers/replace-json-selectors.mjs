import { format } from "../formatter.mjs";
import { getTheme } from "../../util/util.mjs";
import { readFileSync, writeFileSync } from "fs";
import wordDiff from "../packages/word-diff.mjs";
import isColor from "../packages/is-color.mjs";
import combineColors from "../packages/combine-colors.mjs";

export default function replaceJSONSelectors(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    const jsonPath = `./atomic/${theme}/theme.json`;
    const jsonTargetPath = `./atomic/${theme}/theme-resolved.json`;

    const jsonContent = JSON.parse(readFileSync(jsonPath, "utf-8"));
    const selectors = {};
    const darkSelectors = {};
    const lightSelectors = {};

    const selectorRegex = /^--[A-Za-z0-9-]+$/gm;
    const darkSelectorRegex = ".theme-dark";
    const lightSelectorRegex = ".theme-light";

    // get all selectors from the JSON content
    Object.entries(jsonContent).forEach(([key, values]) => {
      values.forEach((rule) => {
        if (rule.property.startsWith("--")) {
          if (singleLine(key).includes(darkSelectorRegex)) {
            if (singleLine(rule.property) === singleLine(rule.value)) {
              if (darkSelectors[singleLine(rule.property)]) {
                // If the property already exists in darkSelectors and the value is the same, skip adding it
                return;
              } else {
                darkSelectors[singleLine(rule.property)] = singleLine(
                  rule.value,
                );
              }
            } else {
              if (darkSelectors[singleLine(rule.property)]) {
                // If the property already exists in darkSelectors, skip adding it
                return;
              }
              darkSelectors[singleLine(rule.property)] = singleLine(rule.value);
            }
          } else if (singleLine(key).includes(lightSelectorRegex)) {
            if (singleLine(rule.property) === singleLine(rule.value)) {
              if (lightSelectors[singleLine(rule.property)]) {
                // If the property already exists in lightSelectors and the value is the same, skip adding it
                return;
              } else {
                lightSelectors[singleLine(rule.property)] = singleLine(
                  rule.value,
                );
              }
            } else {
              if (lightSelectors[singleLine(rule.property)]) {
                // If the property already exists in lightSelectors, skip adding it
                return;
              }
              lightSelectors[singleLine(rule.property)] = singleLine(
                rule.value,
              );
            }
          } else {
            if (singleLine(rule.property) === singleLine(rule.value)) {
              if (selectors[singleLine(rule.property)]) {
                // If the property already exists in selectors and the value is the same, skip adding it
                return;
              } else {
                selectors[singleLine(rule.property)] = singleLine(rule.value);
              }
            } else {
              if (selectors[singleLine(rule.property)]) {
                // If the property already exists in selectors, skip adding it
                return;
              }
              selectors[singleLine(rule.property)] = singleLine(rule.value);
            }
          }
        }
      });
    });

    let iterations = 0;

    const combinedSelectors = { ...selectors };
    const combinedDarkSelectors = { ...selectors, ...darkSelectors };
    const combinedLightSelectors = { ...selectors, ...lightSelectors };
    const thematicKeys = [
      ...new Set([
        ...Object.keys(darkSelectors),
        ...Object.keys(lightSelectors),
      ]),
    ];

    thematicKeys.forEach((key) => {
      if (darkSelectors[key] && lightSelectors[key]) {
        combinedDarkSelectors[key] = darkSelectors[key];
        combinedLightSelectors[key] = lightSelectors[key];
      } else if (darkSelectors[key]) {
        combinedDarkSelectors[key] = darkSelectors[key];
      } else if (lightSelectors[key]) {
        combinedLightSelectors[key] = lightSelectors[key];
      }
    });

    let resolvedDarkSelectors = { ...combinedDarkSelectors };
    let compareDarkSelectors = {};

    while (
      JSON.stringify(resolvedDarkSelectors) !==
        JSON.stringify(compareDarkSelectors) &&
      iterations < 1000
    ) {
      compareDarkSelectors = { ...resolvedDarkSelectors };
      Object.entries(resolvedDarkSelectors).forEach(([key, value]) => {
        if (value.includes("var(")) {
          const variableRegex = /var\((--[A-Za-z0-9-]+)\)/gm;
          const matches = value.match(variableRegex);
          if (matches) {
            let updatedValue = value;
            matches.forEach((match) => {
              const varName = match.replace("var(", "").replace(")", "");
              if (combinedDarkSelectors[varName]) {
                updatedValue = updatedValue.replace(
                  match,
                  combinedDarkSelectors[varName],
                );
              }
            });
            if (updatedValue !== value) {
              resolvedDarkSelectors[key] = updatedValue;
            }
          }
        }
      });
      iterations++;
    }

    if (iterations >= 1000) {
      console.warn(
        `Warning: Resolved dark selectors took too many iterations (${iterations}). Check for circular references or complex variable dependencies.`,
      );
    }

    iterations = 0;

    let resolvedLightSelectors = { ...combinedLightSelectors };
    let compareLightSelectors = {};

    while (
      JSON.stringify(resolvedLightSelectors) !==
        JSON.stringify(compareLightSelectors) &&
      iterations < 1000
    ) {
      compareLightSelectors = { ...resolvedLightSelectors };
      Object.entries(resolvedLightSelectors).forEach(([key, value]) => {
        if (value.includes("var(")) {
          const variableRegex = /var\((--[A-Za-z0-9-]+)\)/gm;
          const matches = value.match(variableRegex);
          if (matches) {
            let updatedValue = value;
            matches.forEach((match) => {
              const varName = match.replace("var(", "").replace(")", "");
              if (combinedLightSelectors[varName]) {
                updatedValue = updatedValue.replace(
                  match,
                  combinedLightSelectors[varName],
                );
              }
            });
            if (updatedValue !== value) {
              resolvedLightSelectors[key] = updatedValue;
            }
          }
        }
      });
      iterations++;
    }

    if (iterations >= 1000) {
      console.warn(
        `Warning: Resolved light selectors took too many iterations (${iterations}). Check for circular references or complex variable dependencies.`,
      );
    }

    let resolvedDarkLightSelectors = {};
    let resolvedDarkLightKeys = [
      ...new Set([
        ...Object.keys(resolvedDarkSelectors),
        ...Object.keys(resolvedLightSelectors),
      ]),
    ];

    resolvedDarkLightKeys.forEach((key) => {
      if (resolvedDarkSelectors[key] && resolvedLightSelectors[key]) {
        if (resolvedDarkSelectors[key] === resolvedLightSelectors[key]) {
          resolvedDarkLightSelectors[key] = resolvedDarkSelectors[key];
        } else {
          resolvedDarkLightSelectors[key] = resolveLightDarkSelector(
            resolvedLightSelectors[key],
            resolvedDarkSelectors[key],
          );
        }
      } else if (resolvedDarkSelectors[key]) {
        resolvedDarkLightSelectors[key] = resolvedDarkSelectors[key];
      } else if (resolvedLightSelectors[key]) {
        resolvedDarkLightSelectors[key] = resolvedLightSelectors[key];
      }
    });

    let resolvedSelectors = {
      ...combinedSelectors,
      ...resolvedDarkLightSelectors,
    };
    let compareSelectors = {};

    iterations = 0;

    while (
      JSON.stringify(resolvedSelectors) !== JSON.stringify(compareSelectors) &&
      iterations < 1000
    ) {
      compareSelectors = { ...resolvedSelectors };
      Object.entries(resolvedSelectors).forEach(([key, value]) => {
        if (value.includes("var(")) {
          const variableRegex = /var\((--[A-Za-z0-9-]+)\)/gm;
          const matches = value.match(variableRegex);
          if (matches) {
            let updatedValue = value;
            matches.forEach((match) => {
              const varName = match.replace("var(", "").replace(")", "");
              if (combinedSelectors[varName]) {
                updatedValue = updatedValue.replace(
                  match,
                  combinedSelectors[varName],
                );
              }
            });
            if (updatedValue !== value) {
              resolvedSelectors[key] = updatedValue;
            }
          }
        }
      });
      iterations++;
    }

    if (iterations >= 1000) {
      console.warn(
        `Warning: Resolved selectors took too many iterations (${iterations}). Check for circular references or complex variable dependencies.`,
      );
    }

    //console.log(resolvedSelectors);

    /*
    // combine light and dark selectors
    Object.entries(darkSelectors).forEach(([key, value]) => {
      if (combinedSelectors[key]) {
        return;
      }
      if (lightSelectors[key]) {
        if (value === lightSelectors[key]) {
          combinedSelectors[key] = value;
        } else {
          combinedSelectors[key] =
            `light-dark(${lightSelectors[key]}, ${value})`;
        }
      } else {
        combinedSelectors[key] = value;
      }
    });
    Object.entries(lightSelectors).forEach(([key, value]) => {
      if (!combinedSelectors[key]) {
        combinedSelectors[key] = value;
      }
    });
    Object.entries(selectors).forEach(([key, value]) => {
      if (!combinedSelectors[key]) {
        combinedSelectors[key] = value;
      }
    });
    */

    // Apply the variables to the selectors
    // e.g.
    // --color-blue: #0000ff;
    // --color-primary: var(--color-blue);
    // would become:
    // --color-blue: #0000ff;
    // --color-primary: #0000ff;

    //console.log(combinedSelectors);
    /*
    const valueRegex = /var\((--[A-Za-z0-9-]+)\)/gm;
    let compareObject = {};
    let resultObject = {};

    Object.entries(jsonContent).forEach(([key, values]) => {
      if (values.length > 0) {
        const tempObjectArray = [];
        values.forEach((rule) => {
          // Replace all occurrences of custom properties in the value
          if (valueRegex.test(singleLine(rule.value))) {
            // Replace the first occurent of var(--property) with the value from combinedSelectors
            const matchValue = singleLine(rule.value).match(valueRegex);
            if (matchValue) {
              const updatedValue = matchValue.reduce((acc, match) => {
                const varName = match.replace("var(", "").replace(")", "");
                if (combinedSelectors[varName]) {
                  return acc.replace(match, combinedSelectors[varName]);
                }
                return acc;
              }, singleLine(rule.value));
              console.log(
                `Replacing ${rule.property} value from ${rule.value} to ${updatedValue}`,
              );
              tempObjectArray.push({
                property: singleLine(rule.property),
                value: singleLine(updatedValue),
              });
            }
          } else {
            tempObjectArray.push({
              property: singleLine(rule.property),
              value: singleLine(rule.value),
            });
          }
        });
        if (tempObjectArray.length > 0) {
          resultObject[key] = tempObjectArray;
        }
      }
    });

    while (JSON.stringify(resultObject) !== JSON.stringify(compareObject)) {
      compareObject = { ...resultObject };
      resultObject = {};
      Object.entries(jsonContent).forEach(([key, values]) => {
        if (values.length > 0) {
          const tempObjectArray = [];
          values.forEach((rule) => {
            // Replace all occurrences of custom properties in the value
            if (valueRegex.test(singleLine(rule.value))) {
              // Replace the first occurent of var(--property) with the value from combinedSelectors
              const matchValue = singleLine(rule.value).match(valueRegex);
              if (matchValue) {
                const updatedValue = matchValue.reduce((acc, match) => {
                  const varName = match.replace("var(", "").replace(")", "");
                  if (combinedSelectors[varName]) {
                    return acc.replace(match, combinedSelectors[varName]);
                  }
                  return acc;
                }, singleLine(rule.value));
                console.log(
                  `Replacing ${rule.property} value from ${rule.value} to ${updatedValue}`,
                );
                tempObjectArray.push({
                  property: singleLine(rule.property),
                  value: singleLine(updatedValue),
                });
              }
            } else {
              tempObjectArray.push({
                property: singleLine(rule.property),
                value: singleLine(rule.value),
              });
            }
          });
          if (tempObjectArray.length > 0) {
            resultObject[key] = tempObjectArray;
          }
        }
      });
    }

    //console.log(resultObject);

    // Apply the result object to the original JSON
    // This means replacing any usage of var with the actual value
    let jsonResult = {};
    let compareResult = {};
    const variableRegex = /var\((--[A-Za-z0-9-]+)\)/gm;

    Object.entries(jsonContent).forEach(([key, values]) => {
      if (values.length > 0) {
        const tempObjectArray = [];
        values.forEach((rule) => {
          let resultValue = singleLine(rule.value);
          if (variableRegex.test(resultValue)) {
            const updated = rule.value.replace(
              /var\((--[A-Za-z0-9-]+)\)/g,
              (match, varName) => {
                return resultObject[varName] ?? match;
              },
            );
            if (updated !== resultValue) {
              resultValue = updated;
            }
          }
          tempObjectArray.push({ property: rule.property, value: resultValue });
        });
        jsonResult[key] = tempObjectArray;
      }
    });

    while (JSON.stringify(jsonResult) !== JSON.stringify(compareResult)) {
      compareResult = { ...jsonResult };
      jsonResult = {};
      Object.entries(jsonContent).forEach(([key, values]) => {
        if (values.length > 0) {
          const tempObjectArray = [];
          values.forEach((rule) => {
            let resultValue = singleLine(rule.value);
            if (variableRegex.test(resultValue)) {
              const updated = rule.value.replace(
                /var\((--[A-Za-z0-9-]+)\)/g,
                (match, varName) => {
                  return resultObject[varName] ?? match;
                },
              );
              if (updated !== resultValue) {
                resultValue = updated;
              }
            }
            tempObjectArray.push({
              property: rule.property,
              value: resultValue,
            });
          });
          jsonResult[key] = tempObjectArray;
        }
      });
    }
    */

    writeFileSync(
      jsonTargetPath,
      format(JSON.stringify(combinedSelectors), "json"),
      "utf-8",
    );
    console.log(`Replaced selectors in JSON for theme: ${theme}`);
  });
}

function singleLine(string) {
  // Remove all newlines and extra spaces
  const singleLineString = string
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Remove spaces immediately before and after parentheses
  const cleanedString = singleLineString
    .replace(/\(\s*/g, "(")
    .replace(/\s*\)/g, ")");

  return cleanedString;
}

function resolveLightDarkSelector(lightValue, darkValue) {
  // If both values are the same, return one of them
  if (lightValue === darkValue) {
    return lightValue;
  }

  const darkIsColor = isColor(darkValue);
  const lightIsColor = isColor(lightValue);

  // If both values are colors, return a light-dark function
  if (darkIsColor && lightIsColor) {
    return `light-dark(${lightValue}, ${darkValue})`;
  }

  return combineColors(lightValue, darkValue);

  // If one of the values is not a color, capture the difference and check those
  // values for color support
  // This is for cases where part of the value is a color and part is not,
  // e.g. "1px solid blue" and "1px solid red" becomes "1px solid light-dark(blue, red)"
  const diff = wordDiff.diffString(lightValue, darkValue);
  // [
  //   {add: 'Bad ', remove: 'What a '},
  //   {text: 'time to be '},
  //   {add: 'sick.', remove: 'alive!'}
  // ]
  let result = "";
  diff.forEach((part) => {
    const text = "text";
    const remove = "remove";
    const add = "add";
    if (part[text]) {
      result += part[text];
    } else if (part[remove] && part[add]) {
      const removeIsColor = isColor(part[remove]);
      const addIsColor = isColor(part[add]);

      // If both parts are colors, return a light-dark function
      if (removeIsColor && addIsColor) {
        result += `light-dark(${part[remove]}, ${part[add]})`;
      } else if (removeIsColor) {
        result += part[remove];
      } else if (addIsColor) {
        result += part[add];
      } else {
        result += `light-dark(${part[remove]}, ${part[add]})`;
      }
    }
  });

  return result;
}
