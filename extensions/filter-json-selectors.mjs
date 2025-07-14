import { readFileSync, writeFileSync, existsSync } from "fs";
import { format } from "./formatter.mjs";
import { getTheme } from "../util/util.mjs";
import { allSelectors } from "./replacers/after.mjs";

export default function filterJsonSelectors(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    const inputFile = `./atomic/${theme}/theme.json`;
    const outputFile = `./atomic/${theme}/theme-filtered.json`;

    if (!existsSync(inputFile)) {
      console.warn(`Input file does not exist for theme: ${theme}`);
      return;
    }

    const inputData = JSON.parse(readFileSync(inputFile, "utf8"));
    const filteredData = filterSelectors(inputData);

    writeFileSync(
      outputFile,
      format(JSON.stringify(filteredData, null, 2), "json"),
      "utf8",
    );

    console.log(`Filtered JSON selectors for theme: ${theme}`);
  });
}

function filterSelectors(jsonObject) {
  const filteredObject = {};

  for (const selector in jsonObject) {
    if (allSelectors.includes(selector)) {
      filteredObject[selector] = jsonObject[selector];
    }
  }

  return filteredObject;
}
