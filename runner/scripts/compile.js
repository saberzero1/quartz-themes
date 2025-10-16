import {
  initializeDb,
  closeDb,
  preparedStatements,
  getStyle,
} from "./database/driver.js";
import { config } from "./config.js";
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
} from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import getThemeCollection from "../../extensions/themelist.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
  getFonts,
  getExtras,
} from "../../util/util.mjs";
import {
  dark as defaultDark,
  light as defaultLight,
} from "./default-styles.js";

let themeName;
let optionSetName = "default";
let mode;

initializeDb();

const themeCollection = getThemeCollection();
const quartzMappings = {};
const publishMappings = {};

themeCollection.forEach((manifest) => {
  const [name, variation] = manifest.name.split(".");
  themeName = `${sanitize(name)}${variation ? `.${sanitize(variation)}` : ""}`;
  quartzMappings[themeName] = {};
  publishMappings[themeName] = {};

  if (!existsSync(`./runner/results/${themeName}`)) {
    mkdirSync(`./runner/results/${themeName}`);
  }
  if (!existsSync(`./extras/themes/${themeName}`)) {
    mkdirSync(`./extras/themes/${themeName}`);
  }
  if (!existsSync(`./extras/themes/${themeName}/_index.scss`)) {
    writeFileSync(`./extras/themes/${themeName}/_index.scss`, "", "utf8");
  }
  if (!existsSync(`./extras/themes/${themeName}/publish.css`)) {
    writeFileSync(`./extras/themes/${themeName}/publish.css`, "", "utf8");
  }

  manifest.modes.forEach((m) => {
    mode = m;
    console.log(`Processing theme: ${themeName} (${mode})`);

    config.forEach((mapping) => {
      if (mapping.quartzSelector) {
        quartzMappings[themeName][mode] = {};
        quartzMappings[themeName][mode][mapping.quartzSelector] = {};
        mapping.properties.forEach((property) => {
          quartzMappings[themeName][mode][mapping.quartzSelector][property] =
            getStyleFromDatabase(
              mapping.quartzSelector,
              property,
              mapping.obsidianSelector,
            );
        });
      }
      if (mapping.publishSelector) {
        publishMappings[themeName][mode] = {};
        publishMappings[themeName][mode][mapping.publishSelector] = {};
        mapping.properties.forEach((property) => {
          publishMappings[themeName][mode][mapping.publishSelector][property] =
            getStyleFromDatabase(
              mapping.publishSelector,
              property,
              mapping.obsidianSelector,
            );
        });
      }
    });

    console.log(`Finished processing theme: ${themeName} (${mode})`);
  });
});

closeDb();

console.log(quartzMappings);

// --- Utilities ---

function getStyleFromDatabase(selector, property, fallbackSelector) {
  return (
    getStyle(themeName, optionSetName, mode === "dark", selector, property) ??
    fallbackStyle(fallbackSelector, property)
  );
}

function fallbackStyle(selector, property) {
  const tag = (selector.split(/(?=[\.\#\[])/)[0] ?? "div").toUpperCase(); // Get the tag name before any class, id, or attribute
  return mode === "dark"
    ? defaultDark[tag]?.[property] || "inherit"
    : defaultLight[tag]?.[property] || "inherit";
}
