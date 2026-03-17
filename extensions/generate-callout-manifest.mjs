/**
 * Generates theme-callout-map.json and vault .md files for custom callout extraction.
 *
 * Reads themes.json, discovers custom callout types from BOTH theme snippet CSS files
 * AND theme.css files in the obsidian/ directory, writes per-theme vault Markdown files
 * (for Obsidian CLI extraction), and outputs a JSON manifest mapping theme names to
 * their custom callout types.
 *
 * Usage:
 *   node extensions/generate-callout-manifest.mjs
 *
 * Outputs:
 *   - runner/vault/theme-callouts/<theme-name>.md  (one per theme with custom callouts)
 *   - theme-callout-map.json                       (manifest for pipeline consumption)
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { generateThemeCalloutVaultFiles } from "./extractor.mjs";

const THEMES_JSON_PATH = resolve("./themes.json");
const VAULT_DIR = resolve("./runner/vault");
const SNIPPETS_DIR = resolve("./runner/vault/.obsidian/snippets");
const OBSIDIAN_DIR = resolve("./obsidian");
const MANIFEST_OUTPUT_PATH = resolve("./theme-callout-map.json");

// Load themes.json
const themesData = JSON.parse(readFileSync(THEMES_JSON_PATH, "utf8"));
const themes = themesData.themes;

// Generate vault files and get the callout map
const calloutMap = generateThemeCalloutVaultFiles(
  VAULT_DIR,
  SNIPPETS_DIR,
  OBSIDIAN_DIR,
  themes,
);

const themeCount = Object.keys(calloutMap).length;
const totalTypes = Object.values(calloutMap).reduce(
  (sum, types) => sum + types.length,
  0,
);

// Write the manifest
writeFileSync(
  MANIFEST_OUTPUT_PATH,
  JSON.stringify(calloutMap, null, 2) + "\n",
  "utf8",
);

console.log(`Custom callout manifest generated: ${MANIFEST_OUTPUT_PATH}`);
console.log(`  Themes with custom callouts: ${themeCount}`);
console.log(`  Total custom callout types: ${totalTypes}`);

for (const [themeName, types] of Object.entries(calloutMap)) {
  console.log(`  ${themeName}: ${types.length} types`);
}
