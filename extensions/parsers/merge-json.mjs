import { existsSync, readFileSync, writeFileSync } from "fs";
import { format } from "../formatter.mjs";
import { getTheme } from "../../util/util.mjs";

export default function injectJSON(manifestCollection) {
  const appJSON = JSON.parse(readFileSync("./app_converted.json", "utf-8"));
  const appLightDarkJSON = JSON.parse(
    readFileSync("./app-light-dark.json", "utf-8"),
  );
  writeFileSync(
    "./app-injected.json",
    JSON.stringify({ ...appJSON, ...appLightDarkJSON }, null, 2),
    "utf-8",
  );

  const appInjectedJSON = JSON.parse(
    readFileSync("./app-injected.json", "utf-8"),
  );

  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    const inputFile = `./atomic/${theme}/theme.json`;
    const overrideFile = `./atomic/${theme}/theme-light-dark.json`;
    const outputFile = `./atomic/${theme}/theme-injected.json`;

    if (existsSync(inputFile) && existsSync(overrideFile)) {
      mergeJsonFiles(inputFile, overrideFile, outputFile);
    } else if (existsSync(inputFile)) {
      mergeJsonFiles(inputFile, `./empty.json`, outputFile);
    } else {
      console.warn(`Input or override file does not exist for theme: ${theme}`);
    }

    const themeJSON = JSON.parse(
      readFileSync(`./atomic/${theme}/theme-injected.json`, "utf-8"),
    );

    if (appInjectedJSON) {
      // Merge the app injected JSON with the theme JSON
      // This will overwrite any existing properties in the default theme JSON
      // with the properties from the app injected JSON
      const mergedThemeJSON = { ...appInjectedJSON, ...themeJSON };
      writeFileSync(
        `./atomic/${theme}/theme-injected.json`,
        format(JSON.stringify(mergedThemeJSON, null, 2), "json"),
        "utf-8",
      );
      console.log(`Injected JSON for theme: ${theme}`);
    }
  });
}

function mergeJsonFiles(inputFile, overrideFile, outputFile) {
  try {
    // Read the input JSON file
    const inputData = JSON.parse(readFileSync(inputFile, "utf8"));

    // Read the override JSON file
    const overrideData = JSON.parse(readFileSync(overrideFile, "utf8"));

    // Merge the two objects
    const mergedData = { ...inputData, ...overrideData };

    // Write the merged data to the output file
    writeFileSync(
      outputFile,
      format(JSON.stringify(mergedData, null, 2), "json"),
      "utf8",
    );

    console.log(`Merged JSON files successfully into ${outputFile}`);
  } catch (error) {
    console.error(`Error merging JSON files: ${error.message}`);
  }
}
