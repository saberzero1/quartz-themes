import {
  initializeDb,
  closeDb,
  preparedStatements,
} from "./database/driver.js";
import { readdirSync, statSync, readFileSync } from "fs";
import { join } from "path";

initializeDb();

const files = getFilesUnderDirectory("./runner/results/").filter(
  (f) => f.endsWith("dark.json") || f.endsWith("light.json"),
);

files.forEach((file) => {
  console.log(`Reading file: ${file}`);
  const isDarkMode = file.endsWith("dark.json");
  const themeName = file
    .replace("runner/results/", "")
    .replace("/dark.json", "")
    .replace("/light.json", "");
  const content = JSON.parse(readFileSync(file, "utf-8"));
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
    // Read the directory contents
    const items = readdirSync(dirPath);

    // Initialize an array to hold the file paths
    const files = [];
    // Iterate over each item in the directory
    items.forEach((item) => {
      const itemPath = join(dirPath, item);
      const stats = statSync(itemPath);

      // Check if the item is a file
      if (stats.isFile()) {
        // Add the file path to the array
        files.push(itemPath);
      } else if (stats.isDirectory()) {
        // If it's a directory, recursively get files from it
        const subFiles = getFilesUnderDirectory(itemPath);
        files.push(...subFiles);
      }
    });

    return files;
  } catch (error) {
    throw new Error(`Error reading directory: ${error.message}`);
  }
}
