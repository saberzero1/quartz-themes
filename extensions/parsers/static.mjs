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
    writeFileSync(
      outputFile,
      format(JSON.stringify(outputData, null, 2), "json"),
      "utf8",
    );
    console.log(`Replaced static properties in JSON for theme: ${theme}`);
  });
}
