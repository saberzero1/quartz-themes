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
