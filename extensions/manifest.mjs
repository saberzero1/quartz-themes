import {
  listFoldersInDirectory,
  readJsonFileAsDictionary,
} from "../util/util.mjs";

const folders = listFoldersInDirectory("./obsidian");
const manifestCollection = [];

export default function getManifestCollection() {
  folders.forEach((folder) => {
    manifestCollection.push(
      readJsonFileAsDictionary(`./obsidian/${folder}`, "manifest.json"),
    );
  });

  return manifestCollection;
}
