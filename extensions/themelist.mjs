import { readJsonFileAsDictionary } from "../util/util.mjs";

const folders = readJsonFileAsDictionary(".", "themes.json")["themes"];
const manifestCollection = [];

export default function getThemeCollection() {
  Object.entries(folders).forEach((folder) => {
    const [themeName, themeData] = folder;
    const manifest = { name: themeName, ...themeData };
    manifestCollection.push(manifest);
  });

  return [...new Set(manifestCollection)];
}

/**
 * Returns the raw themes map from themes.json (keyed by theme slug).
 * Useful for passing to parseThemeId() to distinguish real variations
 * from theme names that contain periods.
 *
 * @returns {Record<string, unknown>} The themes map.
 */
export function getThemesMap() {
  return folders;
}
