// import { browser } from "@wdio/globals";
import { startWdioSession } from "wdio-obsidian-service";
import { memoryUsage } from "process";
// import { extractionTargets } from "./config.wip.js";
import { resolve } from "path";
import {
  dark as darkDefaultStyles,
  light as lightDefaultStyles,
} from "./default-styles.js";
import {
  writeFileSync,
  readFileSync,
  mkdirSync,
  readdirSync,
  existsSync,
} from "fs";
import { createHash } from "crypto";
import getManifestCollection from "../../extensions/manifest.mjs";
import getThemeCollection from "../../extensions/themelist.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
} from "../../util/util.mjs";

const VERSION = "1.10.6";
const INSTALLER_VERSION = "1.10.6";

let testingMode = false;
// testingMode = true;
const testingTheme = "z";

const cacheDir = resolve(".obsidian-cache");
const themeList = readdirSync("./runner/vault/.obsidian/themes").filter(
  (file) => file.endsWith(".css") || file.endsWith(".json"),
);
const pluginList = readdirSync("./runner/vault/.obsidian/plugins").filter(
  (file) =>
    file.endsWith(".js") || file.endsWith(".json") || file.endsWith(".css"),
);

/*
 * NOTE: Make sure to set the saved workspace layouts to reading mode!
 */

/*
To load a theme by name: `app.customCss.setTheme("Abyssal");`
*/

const startingIndex = 0;
const numberOfThemesToProcess = -1;
const numberOfThemesInManifest = getThemeCollection().length;
const themeIndexFromName = (name) => {
  const index = getThemeCollection().findIndex(
    (m) => sanitize(m.name) === sanitize(name),
  );
  console.log(
    `Theme "${name}" found at index: ${index} (out of ${getThemeCollection().length} themes)`,
  );
  return index;
};

/*
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
*/

// const themeCollection = getThemeCollection().slice(themeIndexFromName("solitude") - 1, undefined);

const themeCollection = testingMode
  ? getThemeCollection().filter((m) =>
      m.name.toLowerCase().startsWith(testingTheme.toLowerCase()),
    )
  : getThemeCollection();

const HASH_CACHE_FILE = "./runner/results/.theme-hashes.json";
const EXTRACTION_LOG_FILE = "./runner/results/.extraction-log.json";
const FORCE_EXTRACTION = process.env.FORCE_EXTRACTION === "true";

function getThemeHash(themeName) {
  const themePath = `./runner/vault/.obsidian/themes/${themeName}.css`;
  if (!existsSync(themePath)) {
    const jsonPath = `./runner/vault/.obsidian/themes/${themeName}.json`;
    if (existsSync(jsonPath)) {
      const content = readFileSync(jsonPath, "utf-8");
      return createHash("md5").update(content).digest("hex");
    }
    return null;
  }
  const content = readFileSync(themePath, "utf-8");
  return createHash("md5").update(content).digest("hex");
}

function loadHashCache() {
  if (existsSync(HASH_CACHE_FILE)) {
    try {
      return JSON.parse(readFileSync(HASH_CACHE_FILE, "utf-8"));
    } catch {
      return {};
    }
  }
  return {};
}

function saveHashCache(cache) {
  mkdirSync("./runner/results", { recursive: true });
  writeFileSync(HASH_CACHE_FILE, JSON.stringify(cache, null, 2));
}

function shouldSkipTheme(themeName, hashCache) {
  if (FORCE_EXTRACTION) return false;

  const currentHash = getThemeHash(themeName);
  if (!currentHash) return false;

  const cachedHash = hashCache[themeName];
  if (cachedHash === currentHash) {
    const resultDir = `./runner/results/${sanitize(themeName)}`;
    if (existsSync(resultDir)) {
      const hasResults =
        existsSync(`${resultDir}/dark.json`) ||
        existsSync(`${resultDir}/light.json`);
      if (hasResults) {
        console.log(`Skipping ${themeName} (unchanged since last extraction)`);
        return true;
      }
    }
  }
  return false;
}

function logExtractionError(themeName, error, context = {}) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    theme: themeName,
    error: error.message || String(error),
    stack: error.stack,
    ...context,
  };

  let log = [];
  if (existsSync(EXTRACTION_LOG_FILE)) {
    try {
      log = JSON.parse(readFileSync(EXTRACTION_LOG_FILE, "utf-8"));
    } catch {
      log = [];
    }
  }

  log.push(logEntry);
  if (log.length > 1000) {
    log = log.slice(-500);
  }

  writeFileSync(EXTRACTION_LOG_FILE, JSON.stringify(log, null, 2));
}

function validateExtractionResult(result, themeName, mode) {
  const issues = [];

  if (!result || Object.keys(result).length === 0) {
    issues.push("Empty extraction result");
  }

  const requiredSelectors = ["html", "body", "p", "h1", "a"];
  for (const selector of requiredSelectors) {
    const hasSelector = Object.keys(result).some(
      (key) =>
        key === selector ||
        key.startsWith(`${selector}.`) ||
        key.startsWith(`${selector}[`),
    );
    if (!hasSelector) {
      issues.push(`Missing expected selector: ${selector}`);
    }
  }

  const malformedValues = [];
  for (const [selector, props] of Object.entries(result)) {
    if (!props || typeof props !== "object") continue;
    for (const [prop, value] of Object.entries(props)) {
      if (typeof value === "string") {
        if (
          value.includes("hsl(") &&
          !value.includes(",") &&
          !value.includes(" ")
        ) {
          malformedValues.push({ selector, prop, value });
        }
        if (value === "undefined" || value === "null") {
          malformedValues.push({ selector, prop, value });
        }
      }
    }
  }

  if (malformedValues.length > 0) {
    issues.push(
      `Found ${malformedValues.length} potentially malformed CSS values`,
    );
  }

  if (issues.length > 0) {
    console.warn(
      `Validation warnings for ${themeName} (${mode}):`,
      issues.join(", "),
    );
    logExtractionError(themeName, new Error(issues.join("; ")), {
      mode,
      type: "validation",
      malformedCount: malformedValues.length,
    });
  }

  return issues.length === 0;
}

async function extractCssVariables(browser) {
  return await browser.executeObsidian(async ({ app }) => {
    await sleep(300);

    const cssVariables = {};
    const variableReferences = {};

    const rootElement = document.documentElement;
    const bodyElement = document.body;
    const rootStyles = window.getComputedStyle(rootElement);
    const bodyStyles = window.getComputedStyle(bodyElement);

    const allStyleSheets = Array.from(document.styleSheets);
    const variableDefinitions = new Set();

    for (const sheet of allStyleSheets) {
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (!rules) continue;

        for (const rule of rules) {
          if (rule.style) {
            for (let i = 0; i < rule.style.length; i++) {
              const prop = rule.style[i];
              if (prop.startsWith("--")) {
                variableDefinitions.add(prop);
              }
              const value = rule.style.getPropertyValue(prop);
              if (value && value.includes("var(--")) {
                const matches = value.match(/var\(--[\w-]+/g);
                if (matches) {
                  for (const match of matches) {
                    const varName = match.replace("var(", "");
                    if (!variableReferences[varName]) {
                      variableReferences[varName] = [];
                    }
                    variableReferences[varName].push(prop);
                  }
                }
              }
            }
          }
        }
      } catch (e) {
        continue;
      }
    }

    const importantVariables = [
      "--background-primary",
      "--background-secondary",
      "--background-modifier-border",
      "--text-normal",
      "--text-muted",
      "--text-faint",
      "--text-accent",
      "--text-accent-hover",
      "--interactive-accent",
      "--interactive-accent-hover",
      "--link-color",
      "--link-color-hover",
      "--link-external-color",
      "--tag-color",
      "--tag-background",
      "--callout-color",
      "--code-background",
      "--code-normal",
      "--inline-code-color",
      "--blockquote-border-color",
      "--table-border-color",
      "--table-header-background",
      "--h1-color",
      "--h2-color",
      "--h3-color",
      "--h4-color",
      "--h5-color",
      "--h6-color",
      "--bold-color",
      "--italic-color",
      "--highlight-color",
    ];

    for (const varName of importantVariables) {
      let value = rootStyles.getPropertyValue(varName).trim();
      if (!value) {
        value = bodyStyles.getPropertyValue(varName).trim();
      }
      if (value) {
        cssVariables[varName] = value;
      }
    }

    for (const varName of variableDefinitions) {
      if (!cssVariables[varName]) {
        let value = rootStyles.getPropertyValue(varName).trim();
        if (!value) {
          value = bodyStyles.getPropertyValue(varName).trim();
        }
        if (value && value.length < 200) {
          cssVariables[varName] = value;
        }
      }
    }

    return { variables: cssVariables, references: variableReferences };
  });
}

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

async function serializeWithStyles(defaultStylesByTagName, browser) {
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
            const psuedoRegular = [
              null,
              "::before",
              "::after",
              "::selection",
              "::first-letter",
              "::first-line",
            ];
            const psuedoList = [
              null,
              "::before",
              "::after",
              "::marker",
              "::selection",
            ];
            const psuedoInput = [
              null,
              "::before",
              "::after",
              "::placeholder",
              "::selection",
            ];
            const elemList = [];
            const pseudoElements =
              e.tagName === "LI"
                ? psuedoList
                : e.tagName === "INPUT" || e.tagName === "TEXTAREA"
                  ? psuedoInput
                  : psuedoRegular;
            for (const psuedoElement of pseudoElements) {
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

async function ensureLayoutReady(browser) {
  return browser.executeObsidian(async ({ app }) => {
    await app.workspace.onLayoutReady(() => {});
  });
}

function setCurrentTheme(mode) {
  const currentMode = getCurrentTheme();
  if (currentMode !== mode) {
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function enableSnippets(snippets) {
  const appearance = JSON.parse(
    readFileSync("./runner/vault/.obsidian/appearance.json"),
  );
  appearance.enabledCssSnippets = snippets;
  writeFileSync(
    "./runner/vault/.obsidian/appearance.json",
    JSON.stringify(appearance),
  );
}

async function getStylesFromObsidian(
  manifest,
  manifestCollection,
  preset,
  darkDefaultStyles,
  lightDefaultStyles,
  browser,
  obsidianPage,
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
  enableSnippets(manifest.snippets ?? []);
  const folder = `${sanitize(theme)}${variation ? `.${sanitize(variation)}` : ""}`;
  const extras = manifest.extra_extract_files ?? [];
  mkdirSync(`./runner/results/${folder}`, { recursive: true });
  let lightResult = {
    general: {},
    headings: {},
    callouts: {},
    integrations: {},
    checkboxes: {},
    extras: {},
  };
  let darkResult = {
    general: {},
    headings: {},
    callouts: {},
    integrations: {},
    checkboxes: {},
    extras: {},
  };
  console.log(`Extracting styles for theme: ${theme}`);

  if (isDarkTheme(theme)) {
    const darkPage = obsidianPage;
    await ensureLayoutReady(browser);
    // while (ready === false) {
    //   await sleep(100);
    // }
    // await darkPage.write(
    //   "./.obsidian/plugins/obsidian-style-settings/data.json",
    //   preset,
    // );
    // Write all snippets to the temporary vault
    // mkdirSync(`${darkPage.getVaultPath()}/.obsidian/snippets/`, {
    //   recursive: true,
    // });
    // for (const snippet of manifest.snippets ?? []) {
    //   writeFileSync(
    //     `${darkPage.getVaultPath()}/.obsidian/snippets/${snippet}.css`,
    //     readFileSync(
    //       `./runner/vault/.obsidian/snippets/${snippet}.css`,
    //       "utf-8",
    //     ),
    //   );
    // }
    // const defaultAppearanceObject = {
    //   theme: "obsidian",
    //   cssTheme: fullName,
    //   enabledCssSnippets: manifest.snippets ?? [],
    //   nativeMenus: false,
    // };
    // writeFileSync(
    //   `${darkPage.getVaultPath()}/.obsidian/appearance.json`,
    //   JSON.stringify(defaultAppearanceObject, null, 2),
    // );
    // await sleep(500);
    // await sleep(1);
    // await darkPage.loadWorkspaceLayout("default");
    // await sleep(250);
    // await sleep(1);
    // await darkPage.setTheme(fullName);
    // await sleep(250);
    // await sleep(1);
    // await browser.executeObsidianCommand("theme:use-dark");
    await ensureLayoutReady(browser)
      .then(() => darkPage.loadWorkspaceLayout("default"))
      .then(() => darkPage.setTheme(fullName))
      .then(() =>
        browser.executeObsidian(async ({ app }) => {
          const currentMode = app.getTheme() === "obsidian" ? "dark" : "light";
          if (currentMode !== "dark") {
            app.commands.executeCommandById("theme:toggle-light-dark");
          }
        }),
      )
      .then(() =>
        darkPage.write(
          "./.obsidian/plugins/obsidian-style-settings/data.json",
          preset,
        ),
      );
    // await sleep(100);
    // await sleep(1);
    await ensureLayoutReady(browser)
      .then(() => browser.reloadObsidian())
      .then(() => ensureLayoutReady(browser))
      .then(() =>
        browser.executeObsidian(async ({ app, plugins }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        }),
      );
    // await ensureLayoutReady(browser);
    // await sleep(100);
    // await sleep(1);
    // await browser.executeObsidian(async ({ app, plugins }) => {
    //   const clickableFolder = document.querySelector(
    //     "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
    //   );
    //   if (clickableFolder) {
    //     clickableFolder.click();
    //   }
    // });
    // await sleep(500);
    // await sleep(1);
    // await darkPage.openFile("general.md");
    // await sleep(100);
    // await sleep(1);
    // await darkPage.openFile("general.md");
    // await sleep(900);
    // await sleep(1);
    darkResult.general = await ensureLayoutReady(browser)
      .then(() => darkPage.openFile("general.md"))
      .then(() => darkPage.openFile("general.md"))
      .then(() => serializeWithStyles(darkDefaultStyles, browser));
    // await sleep(500);
    // await sleep(1);
    // await darkPage.openFile("headings.md");
    // await sleep(100);
    // await sleep(1);
    // await darkPage.openFile("headings.md");
    // await sleep(900);
    // await sleep(1);
    darkResult.headings = await ensureLayoutReady(browser)
      .then(() => darkPage.openFile("headings.md"))
      .then(() => darkPage.openFile("headings.md"))
      .then(() => serializeWithStyles(darkDefaultStyles, browser));
    // await sleep(500);
    // await sleep(1);
    // await darkPage.openFile("callouts.md");
    // await sleep(100);
    // await sleep(1);
    // await darkPage.openFile("callouts.md");
    // await sleep(900);
    // await sleep(1);
    darkResult.callouts = await ensureLayoutReady(browser)
      .then(() => darkPage.openFile("callouts.md"))
      .then(() => darkPage.openFile("callouts.md"))
      .then(() => serializeWithStyles(darkDefaultStyles, browser));
    // await sleep(500);
    // await sleep(1);
    // await darkPage.openFile("integrations.md");
    // await sleep(100);
    // await sleep(1);
    // await darkPage.openFile("integrations.md");
    // await sleep(900);
    // await sleep(1);
    darkResult.integrations = await ensureLayoutReady(browser)
      .then(() => darkPage.openFile("integrations.md"))
      .then(() => darkPage.openFile("integrations.md"))
      .then(() => serializeWithStyles(darkDefaultStyles, browser));
    // await sleep(500);
    // await sleep(1);
    const checkboxesSpecial = await ensureLayoutReady(browser)
      .then(() => darkPage.openFile("theme-checkboxes/special.md"))
      .then(() => darkPage.openFile("theme-checkboxes/special.md"))
      .then(() => serializeWithStyles(darkDefaultStyles, browser));
    const checkboxesLowercase = await ensureLayoutReady(browser)
      .then(() => darkPage.openFile("theme-checkboxes/lower.md"))
      .then(() => darkPage.openFile("theme-checkboxes/lower.md"))
      .then(() => serializeWithStyles(darkDefaultStyles, browser));
    const checkboxesUppercase = await ensureLayoutReady(browser)
      .then(() => darkPage.openFile("theme-checkboxes/upper.md"))
      .then(() => darkPage.openFile("theme-checkboxes/upper.md"))
      .then(() => serializeWithStyles(darkDefaultStyles, browser));
    darkResult.checkboxes = {
      ...checkboxesSpecial,
      ...checkboxesLowercase,
      ...checkboxesUppercase,
    };
    for (const extra of extras) {
      // await darkPage.openFile(`theme-extras/${extra}`);
      // await sleep(100);
      // await sleep(1);
      // await darkPage.openFile(`theme-extras/${extra}`);
      // await sleep(900);
      // await sleep(1);
      const result = await ensureLayoutReady(browser)
        .then(() => darkPage.openFile(`theme-extras/${extra}`))
        .then(() => darkPage.openFile(`theme-extras/${extra}`))
        .then(() => serializeWithStyles(darkDefaultStyles, browser));
      darkResult.extras = { ...darkResult.extras, ...result };
    }
    const darkVariables = await ensureLayoutReady(browser).then(() =>
      extractCssVariables(browser),
    );

    const darkFileName = `./runner/results/${folder}/dark.json`;
    let darkResultObject = {};
    for (const [key, value] of Object.entries(darkResult)) {
      if (typeof value === "object") {
        for (const [subKey, subValue] of Object.entries(value)) {
          darkResultObject[`${subKey}`] = subValue;
        }
      }
    }
    let sortedKeys = Object.keys(darkResultObject).sort();
    let sortedDarkResultObject = {};
    for (const key of sortedKeys) {
      sortedDarkResultObject[key] = darkResultObject[key];
    }
    let resultString = JSON.stringify(sortedDarkResultObject, null, 2);
    writeFileSync(darkFileName, resultString);
    validateExtractionResult(sortedDarkResultObject, theme, "dark");
    console.log(`Dark styles saved to ${darkFileName}`);

    if (
      darkVariables &&
      darkVariables.variables &&
      Object.keys(darkVariables.variables).length > 0
    ) {
      const darkVariablesFileName = `./runner/results/${folder}/dark-variables.json`;
      writeFileSync(
        darkVariablesFileName,
        JSON.stringify(darkVariables, null, 2),
      );
      console.log(`Dark CSS variables saved to ${darkVariablesFileName}`);
    }

    printMemoryUsage();
  }
  if (isLightTheme(theme)) {
    const lightPage = obsidianPage;
    await ensureLayoutReady(browser);
    // await lightPage.write(
    //   "./.obsidian/plugins/obsidian-style-settings/data.json",
    //   preset,
    // );
    // Write all snippets to the temporary vault
    // mkdirSync(`${lightPage.getVaultPath()}/.obsidian/snippets/`, {
    //   recursive: true,
    // });
    // for (const snippet of manifest.snippets ?? []) {
    //   writeFileSync(
    //     `${lightPage.getVaultPath()}/.obsidian/snippets/${snippet}.css`,
    //     readFileSync(
    //       `./runner/vault/.obsidian/snippets/${snippet}.css`,
    //       "utf-8",
    //     ),
    //   );
    // }
    // const defaultAppearanceObject = {
    //   theme: "moonstone",
    //   cssTheme: fullName,
    //   enabledCssSnippets: manifest.snippets ?? [],
    //   nativeMenus: false,
    // };
    // writeFileSync(
    //   `${lightPage.getVaultPath()}/.obsidian/appearance.json`,
    //   JSON.stringify(defaultAppearanceObject, null, 2),
    // );
    // await sleep(500);
    // await sleep(1);
    // await browser.setWindowSize(1920, 10800);
    await ensureLayoutReady(browser)
      .then(() => lightPage.loadWorkspaceLayout("default"))
      .then(() => lightPage.setTheme(fullName))
      .then(() =>
        browser.executeObsidian(async ({ app }) => {
          const currentMode = app.getTheme() === "obsidian" ? "dark" : "light";
          if (currentMode !== "light") {
            app.commands.executeCommandById("theme:toggle-light-dark");
          }
        }),
      )
      .then(() =>
        lightPage.write(
          "./.obsidian/plugins/obsidian-style-settings/data.json",
          preset,
        ),
      );
    // await sleep(250);
    // await sleep(1);
    // await lightPage.setTheme(fullName);
    // await sleep(250);
    // await sleep(1);
    // await browser.executeObsidianCommand("theme:use-light");
    // await browser.executeObsidian(async ({ app }) => {
    //   const currentMode = app.getTheme() === "obsidian" ? "dark" : "light";
    //   if (currentMode !== "light") {
    //     app.commands.executeCommandById("theme:toggle-light-dark");
    //   }
    // });
    // await sleep(250);
    // await sleep(1);
    await ensureLayoutReady(browser)
      .then(() => browser.reloadObsidian())
      .then(() => ensureLayoutReady(browser))
      .then(() =>
        browser.executeObsidian(async ({ app, plugins }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        }),
      );
    // await sleep(250);
    // await sleep(1);
    // await browser.executeObsidian(async ({ app, plugins }) => {
    //   const clickableFolder = document.querySelector(
    //     "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
    //   );
    //   if (clickableFolder) {
    //     clickableFolder.click();
    //   }
    // });
    // await sleep(500);
    // await sleep(1);
    // await lightPage.openFile("general.md");
    // await sleep(100);
    // await sleep(1);
    // await lightPage.openFile("general.md");
    // await sleep(900);
    // await sleep(1);
    // lightResult.general = await serializeWithStyles(
    //   lightDefaultStyles,
    //   browser,
    // );
    lightResult.general = await ensureLayoutReady(browser)
      .then(() => lightPage.openFile("general.md"))
      .then(() => lightPage.openFile("general.md"))
      .then(() => serializeWithStyles(lightDefaultStyles, browser));
    // await sleep(500);
    // await sleep(1);
    // await lightPage.openFile("headings.md");
    // await sleep(100);
    // await sleep(1);
    // await lightPage.openFile("headings.md");
    // await sleep(900);
    // await sleep(1);
    // lightResult.headings = await serializeWithStyles(
    //   lightDefaultStyles,
    //   browser,
    // );
    lightResult.headings = await ensureLayoutReady(browser)
      .then(() => lightPage.openFile("headings.md"))
      .then(() => lightPage.openFile("headings.md"))
      .then(() => serializeWithStyles(lightDefaultStyles, browser));
    // await sleep(500);
    // await sleep(1);
    // await lightPage.openFile("callouts.md");
    // await sleep(100);
    // await sleep(1);
    // await lightPage.openFile("callouts.md");
    // await sleep(900);
    // await sleep(1);
    // lightResult.callouts = await serializeWithStyles(
    //   lightDefaultStyles,
    //   browser,
    // );
    lightResult.callouts = await ensureLayoutReady(browser)
      .then(() => lightPage.openFile("callouts.md"))
      .then(() => lightPage.openFile("callouts.md"))
      .then(() => serializeWithStyles(lightDefaultStyles, browser));
    // await sleep(500);
    // await sleep(1);
    // await lightPage.openFile("integrations.md");
    // await sleep(100);
    // await sleep(1);
    // await lightPage.openFile("integrations.md");
    // await sleep(900);
    // await sleep(1);
    // lightResult.integrations = await serializeWithStyles(
    //   lightDefaultStyles,
    //   browser,
    // );
    lightResult.integrations = await ensureLayoutReady(browser)
      .then(() => lightPage.openFile("integrations.md"))
      .then(() => lightPage.openFile("integrations.md"))
      .then(() => serializeWithStyles(lightDefaultStyles, browser));
    // await sleep(500);
    // await sleep(1);
    const checkboxesSpecial = await ensureLayoutReady(browser)
      .then(() => lightPage.openFile("theme-checkboxes/special.md"))
      .then(() => lightPage.openFile("theme-checkboxes/special.md"))
      .then(() => serializeWithStyles(lightDefaultStyles, browser));
    const checkboxesLowercase = await ensureLayoutReady(browser)
      .then(() => lightPage.openFile("theme-checkboxes/lower.md"))
      .then(() => lightPage.openFile("theme-checkboxes/lower.md"))
      .then(() => serializeWithStyles(lightDefaultStyles, browser));
    const checkboxesUppercase = await ensureLayoutReady(browser)
      .then(() => lightPage.openFile("theme-checkboxes/upper.md"))
      .then(() => lightPage.openFile("theme-checkboxes/upper.md"))
      .then(() => serializeWithStyles(lightDefaultStyles, browser));
    lightResult.checkboxes = {
      ...checkboxesSpecial,
      ...checkboxesLowercase,
      ...checkboxesUppercase,
    };
    for (const extra of extras) {
      // await lightPage.openFile(`theme-extras/${extra}`);
      // await sleep(100);
      // await sleep(1);
      // await lightPage.openFile(`theme-extras/${extra}`);
      // await sleep(900);
      // await sleep(1);
      // const result = await serializeWithStyles(lightDefaultStyles, browser);
      const result = await ensureLayoutReady(browser)
        .then(() => lightPage.openFile(`theme-extras/${extra}`))
        .then(() => lightPage.openFile(`theme-extras/${extra}`))
        .then(() => serializeWithStyles(lightDefaultStyles, browser));
      lightResult.extras = { ...lightResult.extras, ...result };
    }

    const lightVariables = await ensureLayoutReady(browser).then(() =>
      extractCssVariables(browser),
    );

    const lightFileName = `./runner/results/${folder}/light.json`;
    let lightResultObject = {};
    for (const [key, value] of Object.entries(lightResult)) {
      if (typeof value === "object") {
        for (const [subKey, subValue] of Object.entries(value)) {
          lightResultObject[`${subKey}`] = subValue;
        }
      }
    }
    let sortedKeys = Object.keys(lightResultObject).sort();
    let sortedLightResultObject = {};
    for (const key of sortedKeys) {
      sortedLightResultObject[key] = lightResultObject[key];
    }
    let lightResultString = JSON.stringify(sortedLightResultObject, null, 2);
    writeFileSync(lightFileName, lightResultString);
    validateExtractionResult(sortedLightResultObject, theme, "light");
    console.log(`Light styles saved to ${lightFileName}`);

    if (
      lightVariables &&
      lightVariables.variables &&
      Object.keys(lightVariables.variables).length > 0
    ) {
      const lightVariablesFileName = `./runner/results/${folder}/light-variables.json`;
      writeFileSync(
        lightVariablesFileName,
        JSON.stringify(lightVariables, null, 2),
      );
      console.log(`Light CSS variables saved to ${lightVariablesFileName}`);
    }

    printMemoryUsage();
  }
}

const manifestCollection = getManifestCollection();

writeFileSync(
  `./runner/vault/.obsidian/plugins/obsidian-style-settings/data.json`,
  "{}",
);
const defaultAppearanceObject = {
  theme: "obsidian",
  cssTheme: "",
  enabledCssSnippets: [],
  nativeMenus: false,
};
writeFileSync(
  `./runner/vault/.obsidian/appearance.json`,
  JSON.stringify(defaultAppearanceObject, null, 2),
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

const browser = await startWdioSession({
  capabilities: {
    browserName: "obsidian",
    browserVersion: VERSION,
    "wdio:obsidianOptions": {
      installerVersion: INSTALLER_VERSION,
      vault: "./runner/vault",
      plugins: pluginList.map(
        (plugin) => `./runner/vault/.obsidian/plugins/${plugin}`,
      ),
      themes: themeList.map(
        (theme) => `./runner/vault/.obsidian/themes/${theme}`,
      ),
      copy: true,
      appArgs: [
        "--disable-lazy-frame-loading",
        "--disable-lazy-image-loading",
        "--disable-partial-raster",
      ],
    },
  },
  waitforInterval: 5 * 60 * 1000,
  waitforTimeout: 15 * 60 * 1000,
  cacheDir: cacheDir,
  logLevel: "warn",
  execArgv: ["--expose-gc", "--max-old-space-size=12288"],
});

enableSnippets([]);

const obsidianPage = browser.getObsidianPage();

await ensureLayoutReady(browser)
  .then(() => browser.reloadObsidian())
  .then(() => ensureLayoutReady(browser));

const hashCache = loadHashCache();
let processedCount = 0;
let skippedCount = 0;

for (const manifest of manifestTargets) {
  const [themeName] = manifest.name.split(".");

  if (shouldSkipTheme(themeName, hashCache)) {
    skippedCount++;
    continue;
  }

  console.log(
    `Processing target: ${manifest.name} (${processedCount + 1}/${manifestTargets.length - skippedCount})`,
  );
  const preset = JSON.stringify(manifest.style_settings ?? {});

  try {
    await getStylesFromObsidian(
      manifest,
      manifestCollection,
      preset,
      darkDefaultStyles,
      lightDefaultStyles,
      browser,
      obsidianPage,
    );

    const currentHash = getThemeHash(themeName);
    if (currentHash) {
      hashCache[themeName] = currentHash;
    }
    processedCount++;
  } catch (error) {
    console.error(
      `Failed to extract styles for ${manifest.name}:`,
      error.message,
    );
    logExtractionError(themeName, error, { manifest: manifest.name });
  }
}

saveHashCache(hashCache);
console.log(
  `Extraction complete. Processed: ${processedCount}, Skipped: ${skippedCount}`,
);

enableSnippets([]);

try {
  await browser?.deleteSession();
} catch {
  // silent catch
}

writeFileSync(
  `./runner/vault/.obsidian/plugins/obsidian-style-settings/data.json`,
  "{}",
);
writeFileSync(
  `./runner/vault/.obsidian/appearance.json`,
  JSON.stringify(defaultAppearanceObject, null, 2),
);
