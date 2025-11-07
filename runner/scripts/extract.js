import { browser } from "@wdio/globals";
import { memoryUsage } from "process";
// import { extractionTargets } from "./config.wip.js";
import {
  dark as darkDefaultStyles,
  light as lightDefaultStyles,
} from "./default-styles.js";
import { writeFileSync, mkdirSync } from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import getThemeCollection from "../../extensions/themelist.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
} from "../../util/util.mjs";

/*
 * NOTE: Make sure to set the saved workspace layouts to reading mode!
 */

/*
To load a theme by name: `app.customCss.setTheme("Abyssal");`
*/

let testingMode = false;
testingMode = true;
const testingTheme = "coffee";
const startingIndex = 0;
const numberOfThemesToProcess = -1;
const numberOfThemesInManifest = getThemeCollection().length;

const themeCollection = testingMode
  ? getThemeCollection().filter((m) =>
      m.name.toLowerCase().startsWith(testingTheme.toLowerCase()),
    )
  : // Start at startingIndex
    numberOfThemesToProcess > 0
    ? getThemeCollection().slice(
        startingIndex,
        Math.min(
          startingIndex + numberOfThemesToProcess,
          numberOfThemesInManifest,
        ),
      )
    : numberOfThemesToProcess === 0
      ? getThemeCollection().slice(startingIndex, undefined)
      : getThemeCollection();

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

      const computedMap = {};
      const win = window;

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

      function toStyleMap(source) {
        const map = [];

        for (let i = 0; i < source.length; i++) {
          map.push([source[i], source.getPropertyValue(source[i])]);
        }

        return map;
      }

      async function extractStyles() {
        const elements = document.createNodeIterator(
          document,
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
            const psuedoRegular = [null, "::before", "::after"];
            const psuedoList = [null, "::before", "::after", "::marker"];
            const elemList = [];
            for (const psuedoElement of e.tagName === "LI"
              ? psuedoList
              : psuedoRegular) {
              const computedStyle =
                e.tagName.toLowerCase() === "body" ||
                e.tagName.toLowerCase() === "html"
                  ? e.computedStyleMap()
                  : toStyleMap(window.getComputedStyle(e, psuedoElement));
              const defaultStyle =
                defaultStylesByTagName[e.tagName.toUpperCase()];
              const classes = e.classList
                ? e.classList
                    .toString()
                    .split(" ")
                    .filter((c) => c.trim() !== "")
                : [];
              const attributes = e.attributes
                ? Array.from(e.attributes)
                    .filter(
                      (attr) =>
                        (attr.name.startsWith("data") &&
                          !attr.name.endsWith("-id")) ||
                        attr.name === "type",
                    )
                    .map((attr) => `${attr.name}="${attr.value}"`)
                : [];
              const selectorKey = ["html", "body"].includes(
                e.tagName.toLowerCase(),
              )
                ? e.tagName.toLowerCase()
                : `${e.tagName.toLowerCase()}${classes.length > 0 ? "." + classes.toSorted().join(".") : ""}${
                    attributes.length > 0
                      ? "[" + attributes.toSorted().join("][") + "]"
                      : ""
                  }${psuedoElement ?? ""}`;
              for (const [prop, val] of computedStyle) {
                if (
                  (prop &&
                    prop.startsWith("--") &&
                    ["html", "body"].includes(e.tagName.toLowerCase())) ||
                  (prop &&
                    !prop.startsWith("--") &&
                    !prop.startsWith("-webkit-") &&
                    /*computedStyle.getPropertyValue(prop)*/ val.toString() !==
                      (defaultStyle ? defaultStyle[prop] : undefined) &&
                    ![
                      "-electron-corner-smoothing",
                      "anchor-scope",
                      "app-region",
                      "block-size",
                      "dynamic-range-limit",
                      "font-variant-emoji",
                      "inline-size",
                      "interactivity",
                      "perspective-origin",
                      "print-color-adjust",
                      "reading-flow",
                      "reading-order",
                      "scroll-initial-target",
                      "scroll-marker-group",
                      "text-box-edge",
                      "text-box-trim",
                      "transform-origin",
                      "width",
                    ].includes(prop))
                ) {
                  if (!computedMap[selectorKey]) {
                    computedMap[selectorKey] = {};
                  }
                  if (!computedMap[selectorKey][prop]) {
                    computedMap[selectorKey][prop] =
                      val.toString(); /*computedStyle
                      .getPropertyValue(prop)
                      .toString();*/
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

function getCurrentTheme() {
  // obsidian = dark mode, moonstone = light mode
  let currentTheme = this.app.getTheme() === "obsidian" ? "dark" : "light";
  return currentTheme;
}

function setCurrentTheme(mode) {
  const currentMode = getCurrentTheme();
  if (currentMode !== mode) {
  }
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
) {
  describe("Quartz Theme Style Extraction", async () => {
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
        // await browser.setWindowSize(1920, 10800);
        const darkPage = browser.getObsidianPage();
        await darkPage.loadWorkspaceLayout("default");
        await sleep(250);
        await darkPage.setTheme(fullName);
        await sleep(250);
        // await browser.executeObsidianCommand("theme:use-dark");
        await browser.executeObsidian(async ({ app }) => {
          const currentMode = app.getTheme() === "obsidian" ? "dark" : "light";
          if (currentMode !== "dark") {
            app.commands.executeCommandById("theme:toggle-light-dark");
          }
        });
        await sleep(250);
        await browser.reloadObsidian();
        await sleep(250);
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
        await sleep(100);
        await darkPage.openFile("general.md");
        await sleep(900);
        darkResult.general = await serializeWithStyles(darkDefaultStyles);
        await sleep(500);
        await darkPage.openFile("headings.md");
        await sleep(100);
        await darkPage.openFile("headings.md");
        await sleep(900);
        darkResult.headings = await serializeWithStyles(darkDefaultStyles);
        await sleep(500);
        await darkPage.openFile("callouts.md");
        await sleep(100);
        await darkPage.openFile("callouts.md");
        await sleep(900);
        darkResult.callouts = await serializeWithStyles(darkDefaultStyles);
        await sleep(500);
        await darkPage.openFile("integrations.md");
        await sleep(100);
        await darkPage.openFile("integrations.md");
        await sleep(900);
        darkResult.integrations = await serializeWithStyles(darkDefaultStyles);
        await sleep(500);
      });
      after(async () => {
        const darkFileName = `./runner/results/${folder}/dark.json`;
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
        let resultString = JSON.stringify(sortedDarkResultObject, null, 2);
        writeFileSync(darkFileName, resultString);
        console.log(`Dark styles saved to ${darkFileName}`);
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
        // await browser.setWindowSize(1920, 10800);
        const lightPage = browser.getObsidianPage();
        await lightPage.loadWorkspaceLayout("default");
        await sleep(250);
        await lightPage.setTheme(fullName);
        await sleep(250);
        // await browser.executeObsidianCommand("theme:use-light");
        await browser.executeObsidian(async ({ app }) => {
          const currentMode = app.getTheme() === "obsidian" ? "dark" : "light";
          if (currentMode !== "light") {
            app.commands.executeCommandById("theme:toggle-light-dark");
          }
        });
        await sleep(250);
        await browser.reloadObsidian();
        await sleep(250);
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
        await sleep(100);
        await lightPage.openFile("general.md");
        await sleep(900);
        lightResult.general = await serializeWithStyles(lightDefaultStyles);
        await sleep(500);
        await lightPage.openFile("headings.md");
        await sleep(100);
        await lightPage.openFile("headings.md");
        await sleep(900);
        lightResult.headings = await serializeWithStyles(lightDefaultStyles);
        await sleep(500);
        await lightPage.openFile("callouts.md");
        await sleep(100);
        await lightPage.openFile("callouts.md");
        await sleep(900);
        lightResult.callouts = await serializeWithStyles(lightDefaultStyles);
        await sleep(500);
        await lightPage.openFile("integrations.md");
        await sleep(100);
        await lightPage.openFile("integrations.md");
        await sleep(900);
        lightResult.integrations =
          await serializeWithStyles(lightDefaultStyles);
        await sleep(500);
      });
      after(async () => {
        // Save the light result to a file
        const lightFileName = `./runner/results/${folder}/light.json`;
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
        let lightResultString = JSON.stringify(
          sortedLightResultObject,
          null,
          2,
        );
        writeFileSync(lightFileName, lightResultString);
        console.log(`Light styles saved to ${lightFileName}`);
        // unset variables to allow garbage collection
        printMemoryUsage();
      });
    }
  });
}

const manifestCollection = getManifestCollection();

writeFileSync(
  `./runner/vault/.obsidian/plugins/obsidian-style-settings/data.json`,
  "{}",
);

// filter duplicates
const manifestTargets = [];
themeCollection.forEach((themeManifest) => {
  if (
    !manifestTargets.find(
      (m) => sanitize(m.name) === sanitize(themeManifest.name),
    )
  ) {
    manifestTargets.push(themeManifest);
  }
});

for (const manifest of manifestTargets) {
  console.log(`Processing target: ${manifest.name}`);
  const preset = JSON.stringify(manifest.style_settings ?? {});
  await getStylesFromObsidian(
    manifest,
    manifestCollection,
    preset,
    darkDefaultStyles,
    lightDefaultStyles,
  );
}

writeFileSync(
  `./runner/vault/.obsidian/plugins/obsidian-style-settings/data.json`,
  "{}",
);
