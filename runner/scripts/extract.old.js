import { browser } from "@wdio/globals";
import * as driver from "./database/driver.js";
import { memoryUsage } from "process";
import { extractionTargets } from "./config.js";
import {
  dark as darkDefaultStyles,
  light as lightDefaultStyles,
} from "./default-styles.js";
import { writeFileSync, readFileSync, mkdirSync } from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import getThemeCollection from "../../extensions/themelist.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
} from "../../util/util.mjs";
import Database from "better-sqlite3";

// --- Start of Database Setup ---
const database = new Database("styles.db", { verbose: console.log }); // 'verbose' for logging SQL queries
const schema = readFileSync("runner/scripts/database/schema.sql", "utf-8");

database.pragma("journal_mode = WAL");
database.pragma("foreign_keys = ON");

database.exec(schema);

// --- Prepared Statements (prepare once, run many times for efficiency) ---
// These are functions that take parameters and execute the query
const insertThemeStmt = database.prepare(
  "INSERT INTO themes (name) VALUES (?)",
);
const getThemeIdStmt = database.prepare("SELECT id FROM themes WHERE name = ?");

const insertOptionSetStmt = database.prepare(
  "INSERT INTO option_sets (theme_id, name) VALUES (?, ?)",
);
const getOptionSetIdStmt = database.prepare(
  "SELECT id FROM option_sets WHERE theme_id = ? AND name = ?",
);

const insertSelectorStmt = database.prepare(
  "INSERT INTO selectors (selector_text) VALUES (?)",
);
const getSelectorIdStmt = database.prepare(
  "SELECT id FROM selectors WHERE selector_text = ?",
);

const insertPropertyStmt = database.prepare(
  "INSERT INTO properties (property_name) VALUES (?)",
);
const getPropertyIdStmt = database.prepare(
  "SELECT id FROM properties WHERE property_name = ?",
);

const insertStyleValueStmt = database.prepare(
  "INSERT OR REPLACE INTO style_values " + // Use REPLACE to update if the PK combination already exists
    "(theme_id, option_set_id, is_dark_mode, selector_id, property_id, value) " +
    "VALUES (?, ?, ?, ?, ?, ?)",
);

const getSpecificThemeValueStmt = database.prepare(`
  SELECT sv.value
  FROM style_values sv
  JOIN themes t ON sv.theme_id = t.id
  JOIN option_sets os ON sv.option_set_id = os.id
  JOIN selectors s ON sv.selector_id = s.id
  JOIN properties p ON sv.property_id = p.id
  WHERE t.name = ?
    AND os.name = ?
    AND sv.is_dark_mode = ?
    AND s.selector_text = ?
    AND p.property_name = ?
`);

// --- Helper Functions to Get or Create IDs ---

/**
 * Gets the ID for a theme by name, inserting it if it doesn't exist.
 * @param {string} themeName
 * @returns {number} The ID of the theme.
 */
function getOrCreateThemeId(themeName) {
  let row = getThemeIdStmt.get(themeName);
  if (row) {
    return row.id;
  }
  return insertThemeStmt.run(themeName).lastInsertRowid;
}

/**
 * Gets the ID for an option set, inserting it if it doesn't exist.
 * @param {number} themeId
 * @param {string} optionSetName
 * @returns {number} The ID of the option set.
 */
function getOrCreateOptionSetId(themeId, optionSetName) {
  let row = getOptionSetIdStmt.get(themeId, optionSetName);
  if (row) {
    return row.id;
  }
  return insertOptionSetStmt.run(themeId, optionSetName).lastInsertRowid;
}

/**
 * Gets the ID for a selector, inserting it if it doesn't exist.
 * @param {string} selectorText
 * @returns {number} The ID of the selector.
 */
function getOrCreateSelectorId(selectorText) {
  let row = getSelectorIdStmt.get(selectorText);
  if (row) {
    return row.id;
  }
  return insertSelectorStmt.run(selectorText).lastInsertRowid;
}

/**
 * Gets the ID for a property, inserting it if it doesn't exist.
 * @param {string} propertyName
 * @returns {number} The ID of the property.
 */
function getOrCreatePropertyId(propertyName) {
  let row = getPropertyIdStmt.get(propertyName);
  if (row) {
    return row.id;
  }
  return insertPropertyStmt.run(propertyName).lastInsertRowid;
}

/**
 * Inserts or updates a style value.
 * @param {string} theme
 * @param {string} optionSet
 * @param {boolean} isDarkMode
 * @param {string} selector
 * @param {string} property
 * @param {string} value
 */
function insertStyleValue(
  theme,
  optionSet,
  isDarkMode,
  selector,
  property,
  value,
) {
  const themeId = getOrCreateThemeId(theme);
  const optionSetId = getOrCreateOptionSetId(themeId, optionSet);
  const selectorId = getOrCreateSelectorId(selector);
  const propertyId = getOrCreatePropertyId(property);

  insertStyleValueStmt.run(
    themeId,
    optionSetId,
    isDarkMode ? 1 : 0, // SQLite stores BOOLEAN as INTEGER (0 or 1)
    selectorId,
    propertyId,
    value,
  );
}

// --- End of Database Setup ---

/*
 * NOTE: Make sure to set the saved workspace layouts to reading mode!
 */

/*
To load a theme by name: `app.customCss.setTheme("Abyssal");`
*/

let testingMode = false;
testingMode = true;
const testingTheme = "80";
const startingIndex = 0;
const numberOfThemesToProcess = 10;

const themeCollection = testingMode
  ? getThemeCollection().filter((m) =>
      m.name.toLowerCase().startsWith(testingTheme.toLowerCase()),
    )
  : // Start at startingIndex
    getThemeCollection().slice(
      startingIndex,
      Math.min(
        startingIndex + numberOfThemesToProcess,
        getThemeCollection().length,
      ),
    );

console.log(themeCollection);

function printMemoryUsage() {
  const memoryUsageInMB = memoryUsage().heapUsed / 1024 / 1024;
  console.log(`Current memory usage: ${memoryUsageInMB.toFixed(2)} MB`);
  // manually trigger garbage collection (only works if Node.js is started with --expose-gc)
  if (global.gc) {
    global.gc();
    console.log("Garbage collection triggered");
    const memoryUsageAfterGC = memoryUsage().heapUsed / 1024 / 1024;
    console.log(`New memory usage:     ${memoryUsageAfterGC.toFixed(2)} MB`);
  }
}

async function serializeWithStyles(defaultStylesByTagName) {
  return await browser.executeObsidian(
    async ({ app }, defaultStylesByTagName) => {
      await sleep(1000); // Wait for the file to open and styles to apply
      // Mapping between tag names and css default values lookup tables. This allows to exclude default values in the result.
      const rootElement = document;

      const computedMap = {};

      // Styles inherited from style sheets will not be rendered for elements with these tag names
      const noStyleTags = {
        BASE: true,
        HEAD: true,
        HTML: true,
        LINE: true,
        META: true,
        NOFRAME: true,
        NOSCRIPT: true,
        PARAM: true,
        PATH: true,
        POLYLINE: true,
        RECT: true,
        SCRIPT: true,
        STYLE: true,
        TITLE: true,
      };

      function extractStyles() {
        const elements = document.createNodeIterator(
          rootElement,
          NodeFilter.SHOW_ELEMENT,
        );
        let e = elements.nextNode();
        while (e) {
          if (
            !noStyleTags[e.tagName] &&
            !["path", "circle", "rect", "line", "polyline"].includes(
              e.tagName.toLowerCase(),
            )
          ) {
            for (const psuedoElement of [null, "::before", "::after"]) {
              const computedStyle = getComputedStyle(e);
              const defaultStyle = defaultStylesByTagName[e.tagName];
              const classes = e.classList
                ? e.classList
                    .toString()
                    .split(" ")
                    .filter((c) => c.trim() !== "")
                : [];
              const attributes = e.attributes
                ? Array.from(e.attributes)
                    .filter((c) => c !== "class")
                    .map((attr) => `${attr.name}="${attr.value}"`)
                : [];
              const selectorKey = ["html", "body"].includes(
                e.tagName.toLowerCase(),
              )
                ? e.tagName.toLowerCase()
                : `${e.tagName.toLowerCase()}${classes.length > 0 ? "." + classes.toSorted().join(".") : ""}${
                    attributes.filter(
                      (attr) =>
                        attr.startsWith("data") && !attr.endsWith("-id"),
                    ).length > 0
                      ? "[" +
                        attributes
                          .filter(
                            (attr) =>
                              attr.startsWith("data") && !attr.endsWith("-id"),
                          )
                          .toSorted()
                          .join("][") +
                        "]"
                      : ""
                  }${psuedoElement ?? ""}`;
              for (const prop of computedStyle) {
                if (
                  (prop &&
                    prop.startsWith("--") &&
                    ["html", "body"].includes(e.tagName.toLowerCase())) ||
                  (prop &&
                    !prop.startsWith("--") &&
                    computedStyle.getPropertyValue(prop) !==
                      (defaultStyle ? defaultStyle[prop] : undefined))
                ) {
                  if (!computedMap[selectorKey]) {
                    computedMap[selectorKey] = {};
                  }
                  if (!computedMap[selectorKey][prop]) {
                    computedMap[selectorKey][prop] = computedStyle
                      .getPropertyValue(prop)
                      .toString();
                  }
                }
              }
            }
          }
          e = elements.nextNode();
        }

        return computedMap;
      }

      return extractStyles();
    },
    defaultStylesByTagName,
  );
  // TODO: Fix empty return values
  // Probably not passing something correctly to the browser context
}

function fixCalloutIconColor(results) {
  // Set the callout icon color to background color as Quartz uses background-color while Obsidian uses color
  const calloutTypes = [
    "note",
    "abstract",
    "info",
    "todo",
    "tip",
    "success",
    "question",
    "warning",
    "danger",
    "failure",
    "bug",
    "example",
    "quote",
  ];

  calloutTypes.forEach((type) => {
    results[`.callout[data-callout=\"${type}\"] .callout-title .callout-icon`][
      "background-color"
    ] =
      results[
        `.callout[data-callout=\"${type}\"] .callout-title .callout-icon`
      ]["color"];
  });

  return results;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getStylesFromObsidian(
  manifest,
  manifestCollection,
  preset,
  darkDefaultStyles,
  lightDefaultStyles,
  database,
) {
  const [theme, variation] = manifest.name.split(".");
  const fullName =
    manifestCollection.find((m) => sanitize(m.name) === theme)?.name ?? theme;
  console.log(
    `Theme: ${theme}, Variation: ${variation}, Full Name: ${fullName}`,
  );
  console.log(`Preset: ${preset}`);
  writeFileSync(
    `./runner/vault/.obsidian/plugins/obsidian-style-settings/data.json`,
    preset,
  );
  const folder = `${sanitize(theme)}${variation ? `.${sanitize(variation)}` : ""}`;
  mkdirSync(`./runner/results/${folder}`, { recursive: true });
  let lightResult = {
    general: {},
    headings: {},
    callouts: {},
    integrations: {},
  };
  let darkResult = {
    general: {},
    headings: {},
    callouts: {},
    integrations: {},
  };
  console.log(`Extracting styles for theme: ${theme}`);

  if (isDarkTheme(theme)) {
    before(async () => {
      const darkPage = browser.getObsidianPage();
      await darkPage.write(
        "./.obsidian/plugins/obsidian-style-settings/data.json",
        preset,
      );
      await sleep(500);
    });
    it(`should extract styles for theme: ${theme}, variation: ${variation ?? "default"} in dark mode`, async () => {
      const darkPage = browser.getObsidianPage();
      await darkPage.loadWorkspaceLayout("default");
      await darkPage.setTheme(fullName);
      await browser.executeObsidianCommand("theme:use-dark");
      await sleep(500);
      await browser.reloadObsidian();
      await sleep(500);
      await browser.executeObsidian(async ({ app, plugins }) => {
        const clickableFolder = document.querySelector(
          "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
        );
        if (clickableFolder) {
          clickableFolder.click();
        }
      });
      await sleep(500);
      await darkPage.openFile("general.md");
      await sleep(500);
      await darkPage.openFile("general.md");
      await sleep(500);
      darkResult.general = await serializeWithStyles(darkDefaultStyles);
      await sleep(500);
      await darkPage.openFile("headings.md");
      await sleep(500);
      await darkPage.openFile("headings.md");
      await sleep(500);
      darkResult.headings = await serializeWithStyles(darkDefaultStyles);
      await sleep(500);
      await darkPage.openFile("callouts.md");
      await sleep(500);
      await darkPage.openFile("callouts.md");
      await sleep(500);
      darkResult.callouts = await serializeWithStyles(darkDefaultStyles);
      await sleep(500);
      await darkPage.openFile("integrations.md");
      await sleep(500);
      await darkPage.openFile("integrations.md");
      await sleep(500);
      darkResult.integrations = await serializeWithStyles(darkDefaultStyles);
      await sleep(500);
    });
    after(async () => {
      //const darkFileName = `./runner/results/${folder}/dark.json`;
      // Flatten the result object
      let darkResultObject = {};
      for (const [key, value] of Object.entries(darkResult)) {
        if (typeof value === "object") {
          for (const [subKey, subValue] of Object.entries(value)) {
            darkResultObject[`${subKey}`] = subValue;
          }
        }
      }
      // Sort the keys alphabetically
      let sortedKeys = Object.keys(darkResultObject).sort();
      let sortedDarkResultObject = {};
      for (const key of sortedKeys) {
        sortedDarkResultObject[key] = darkResultObject[key];
      }
      //let resultString = JSON.stringify(sortedDarkResultObject, null, 2);
      //writeFileSync(darkFileName, resultString);
      database = new Database("styles.db", {
        verbose: console.log,
        fileMustExist: true,
      }); // 'verbose' for logging SQL queries
      database.transaction((sortedDarkResultObject) => {
        for (const [selector, properties] of Object.entries(
          sortedDarkResultObject,
        )) {
          for (const [key, value] of Object.entries(properties)) {
            /*
        styles.push({
          theme: theme,
          optionSet: "default",
          isDarkMode: true,
          selector: selector,
          property: key,
          value: value,
        })
            */
            insertStyleValue(theme, null, true, selector, key, value);
            console.log("AAAA", selector, "1111", key, "2222", value);
          }
          //insertStyleValue(theme, null, true, selector, properties);
        }
      });
      database.close();
      console.log(`Dark styles saved to the database: ${theme}`);
      // unset variables to allow garbage collection
      printMemoryUsage();
      await sleep(500);
    });
  }
  if (isLightTheme(theme)) {
    before(async () => {
      const lightPage = browser.getObsidianPage();
      await lightPage.write(
        "./.obsidian/plugins/obsidian-style-settings/data.json",
        preset,
      );
      await sleep(500);
    });
    it(`should extract styles for theme: ${theme}, variation: ${variation ?? "default"} in light mode`, async () => {
      const lightPage = browser.getObsidianPage();
      await lightPage.loadWorkspaceLayout("default");
      await lightPage.setTheme(fullName);
      await browser.executeObsidianCommand("theme:use-light");
      await sleep(500);
      await browser.reloadObsidian();
      await sleep(500);
      await browser.executeObsidian(async ({ app, plugins }) => {
        const clickableFolder = document.querySelector(
          "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
        );
        if (clickableFolder) {
          clickableFolder.click();
        }
      });
      await sleep(500);
      await lightPage.openFile("general.md");
      await sleep(500);
      await lightPage.openFile("general.md");
      await sleep(500);
      lightResult.general = await serializeWithStyles(lightDefaultStyles);
      await sleep(500);
      await lightPage.openFile("headings.md");
      await sleep(500);
      await lightPage.openFile("headings.md");
      await sleep(500);
      lightResult.headings = await serializeWithStyles(lightDefaultStyles);
      await sleep(500);
      await lightPage.openFile("callouts.md");
      await sleep(500);
      await lightPage.openFile("callouts.md");
      await sleep(500);
      lightResult.callouts = await serializeWithStyles(lightDefaultStyles);
      await sleep(500);
      await lightPage.openFile("integrations.md");
      await sleep(500);
      await lightPage.openFile("integrations.md");
      await sleep(500);
      lightResult.integrations = await serializeWithStyles(lightDefaultStyles);
      await sleep(500);
    });
    after(async () => {
      // Save the light result to a file
      // const lightFileName = `./runner/results/${folder}/light.json`;
      // Flatten the result object
      let lightResultObject = {};
      for (const [key, value] of Object.entries(lightResult)) {
        if (typeof value === "object") {
          for (const [subKey, subValue] of Object.entries(value)) {
            lightResultObject[`${subKey}`] = subValue;
          }
        }
      }
      // Sort the keys alphabetically
      let sortedKeys = Object.keys(lightResultObject).sort();
      let sortedLightResultObject = {};
      for (const key of sortedKeys) {
        sortedLightResultObject[key] = lightResultObject[key];
      }
      //let lightResultString = JSON.stringify(sortedLightResultObject, null, 2);
      //writeFileSync(lightFileName, lightResultString);
      database = new Database("styles.db", {
        verbose: console.log,
        fileMustExist: true,
      }); // 'verbose' for logging SQL queries
      database.transaction((sortedLightResultObject) => {
        for (const [selector, properties] of Object.entries(
          sortedLightResultObject,
        )) {
          insertStyleValue(theme, null, false, selector, properties);
        }
      });
      database.close();
      console.log(`Light styles saved to the database: ${theme}`);
      // unset variables to allow garbage collection
      printMemoryUsage();
    });
  }
}

const manifestCollection = getManifestCollection();

writeFileSync(
  `./runner/vault/.obsidian/plugins/obsidian-style-settings/data.json`,
  "{}",
);

for (const manifest of themeCollection) {
  console.log(`Processing target: ${manifest.name}`);
  const preset = JSON.stringify(manifest.style_settings ?? {});
  describe("Quartz Theme Style Extraction", async () => {
    await getStylesFromObsidian(
      manifest,
      manifestCollection,
      preset,
      darkDefaultStyles,
      lightDefaultStyles,
      database,
    );
  });
}

writeFileSync(
  `./runner/vault/.obsidian/plugins/obsidian-style-settings/data.json`,
  "{}",
);
