/*
steps:

- Extract the individual CSS declarations from the CSS files.
- Convert the CSS declarations to a JSON dictionary format.
- Write the JSON dictionary to a file.
- Combine the JSON dictionaries from multiple CSS files into a single JSON file.
- Apply the JSON dictionary to the SCSS templates.

*/
import { readFileSync, writeFileSync } from "fs";

import { format, check, checkAndFormat } from "./extensions/formatter.mjs";
import getManifestCollection from "./extensions/manifest.mjs";
import {
  createDefaultDirectories,
  clearDefaultDirectories,
} from "./extensions/directories.mjs";
import { copyFiles } from "./extensions/files.mjs";
import replaceBefore from "./extensions/replacers/before.mjs";
import { convert } from "./extensions/parsers/converter.mjs";
import toJSON from "./extensions/parsers/to-json.mjs";
import combineLightDarkInJson from "./extensions/parsers/combine-light-dark-in-json.mjs";
import injectJSON from "./extensions/parsers/merge-json.mjs";
import replaceStaticProperties from "./extensions/parsers/static.mjs";

const manifestCollection = getManifestCollection();

clearDefaultDirectories(manifestCollection);
createDefaultDirectories(manifestCollection);
copyFiles(manifestCollection);
replaceBefore(manifestCollection);

toJSON(manifestCollection);

combineLightDarkInJson(manifestCollection);

//injectJSON(manifestCollection);

replaceStaticProperties(manifestCollection);
