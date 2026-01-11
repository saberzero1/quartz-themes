import {
  initializeDb,
  closeDb,
  preparedStatements,
} from "./database/driver.js";
import { readdirSync, statSync, readFileSync, existsSync } from "fs";
import { join } from "path";

const BASELINE_DIR = "./runner/results/_baseline";

function loadBaseline(mode) {
  const baselinePath = `${BASELINE_DIR}/${mode}.json`;
  if (existsSync(baselinePath)) {
    try {
      return JSON.parse(readFileSync(baselinePath, "utf-8"));
    } catch {
      return null;
    }
  }
  return null;
}

function mergeBaselineWithDiff(baseline, diff) {
  if (!baseline) return diff;

  const merged = JSON.parse(JSON.stringify(baseline));

  for (const [selector, props] of Object.entries(diff)) {
    if (!merged[selector]) {
      merged[selector] = {};
    }
    for (const [prop, value] of Object.entries(props)) {
      merged[selector][prop] = value;
    }
  }

  return merged;
}

initializeDb();

const darkBaseline = loadBaseline("dark");
const lightBaseline = loadBaseline("light");

if (darkBaseline) {
  console.log(
    `Loaded dark baseline with ${Object.keys(darkBaseline).length} selectors`,
  );
} else {
  console.log("No dark baseline found, using diffs as full styles");
}

if (lightBaseline) {
  console.log(
    `Loaded light baseline with ${Object.keys(lightBaseline).length} selectors`,
  );
} else {
  console.log("No light baseline found, using diffs as full styles");
}

const files = getFilesUnderDirectory("./runner/results/").filter(
  (f) =>
    (f.endsWith("dark.json") || f.endsWith("light.json")) &&
    !f.includes("_baseline") &&
    !f.includes("-variables.json") &&
    !f.includes("-responsive.json") &&
    !f.includes("-diff.json"),
);

files.forEach((file) => {
  console.log(`Reading file: ${file}`);
  const isDarkMode = file.endsWith("dark.json");
  const themeName = file
    .replace("runner/results/", "")
    .replace("/dark.json", "")
    .replace("/light.json", "");

  const diffContent = JSON.parse(readFileSync(file, "utf-8"));
  const baseline = isDarkMode ? darkBaseline : lightBaseline;
  const content = mergeBaselineWithDiff(baseline, diffContent);

  const insertionEntries = [];
  console.log(`Processing file: ${file}`);
  Object.entries(content).forEach(([key, value]) => {
    Object.entries(value).forEach(([cssVariable, cssValue]) => {
      insertionEntries.push({
        theme: themeName,
        optionSet: "default",
        isDarkMode: isDarkMode,
        selector: key,
        property: cssVariable.trim(),
        value: cssValue.trim(),
      });
    });
  });
  console.log(`Inserting theme: ${themeName}`);
  preparedStatements.insertBulkStylesTransaction(insertionEntries);
  console.log(`Inserted ${insertionEntries.length} entries for file: ${file}`);
});

closeDb();

function getFilesUnderDirectory(dirPath) {
  try {
    const items = readdirSync(dirPath);

    const files = [];
    items.forEach((item) => {
      const itemPath = join(dirPath, item);
      const stats = statSync(itemPath);

      if (stats.isFile()) {
        files.push(itemPath);
      } else if (stats.isDirectory()) {
        const subFiles = getFilesUnderDirectory(itemPath);
        files.push(...subFiles);
      }
    });

    return files;
  } catch (error) {
    throw new Error(`Error reading directory: ${error.message}`);
  }
}
