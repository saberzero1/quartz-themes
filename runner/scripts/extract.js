import { browser } from "@wdio/globals";
import { extractionTargets } from "./config.js";
import { writeFile, copyFileSync, writeFileSync, mkdirSync } from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import getThemeCollection from "../../extensions/themelist.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
} from "../../util/util.mjs";
import { obsidianPage } from "wdio-obsidian-service";

// TODO: some themes have diplucated id on some style settings.
// This makes it impossible to configure settings that share an ID.
// Short term solution is to change the themes manually to have unique IDs
// or to apply the classes they target automatically to the body
// (style settings would have done this but it doesn't work with duplicate IDs).

/*
 * NOTE: Make sure to set the saved workspace layouts to reading mode!
 */

/*
To load a theme by name: `app.customCss.setTheme("Abyssal");`
*/

let testingMode = false;
//testingMode = true;
const testingTheme = "Flexcyon";

/*
const manifestCollection = testingMode
  ? getManifestCollection().filter(
      (m) => m.name.toLowerCase() === testingTheme.toLowerCase(),
    )
  : getManifestCollection(); // Limit to first 10 themes for testing
  */
const themeCollection = testingMode
  ? getThemeCollection().filter((m) =>
      m.name.toLowerCase().startsWith(testingTheme.toLowerCase()),
    )
  : getThemeCollection();

//console.log(manifestCollection);
console.log(themeCollection);

// test/extract-styles.test.js
describe("Quartz Theme Style Extraction", () => {
  async function getStyles(configuration, getGeneric = false, isDark = false) {
    const result = await browser.executeObsidian(
      async ({ app }, targets, getGeneric, isDark) => {
        computedStyles = {}; // Quartz specific styles
        computedPublishStyles = {}; // Obsidian Publish specific styles
        //app.customCss.setTheme(theme);
        const rules = targets.selectors;

        await sleep(300); // Wait for the file to open and styles to apply
        app.workspace.trigger("parse-style-settings");
        await sleep(700);
        rules.forEach((rule) => {
          const containerSelector =
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-vertical.mod-root > div > div.workspace-tab-container > div > div > div.view-content > div.markdown-reading-view > div.markdown-preview-view";
          const containerElement =
            app.workspace.activeLeaf.containerEl.querySelector(
              ".workspace-leaf-content > .view-content > .markdown-reading-view > .markdown-preview-view",
            );
          if (containerElement === null || containerElement === undefined)
            return;

          const selectorKey =
            rule.pseudoElement === ""
              ? rule.obsidianSelector
              : `${rule.obsidianSelector}${rule.pseudoElement}`;
          const element =
            containerElement.querySelector(selectorKey) ?? containerElement;
          const style = getComputedStyle(element);
          computedStyles[rule.quartzSelector] = {};
          computedPublishStyles[rule.publishSelector] = {};
          for (const prop of rule.properties) {
            // Skip properties that are not set
            if (rule.quartzSelector) {
              computedStyles[rule.quartzSelector][prop] =
                element.getCssPropertyValue(prop)
                  ? element.getCssPropertyValue(prop)
                  : "unset";
            }
            if (rule.publishSelector) {
              computedPublishStyles[rule.publishSelector][prop] =
                element.getCssPropertyValue(prop)
                  ? element.getCssPropertyValue(prop)
                  : "unset";
            }
          }

          // BONUS: Handle pseudo-elements like ::before and ::after
          /*
          const beforeStyle = app.dom.appContainerEl.getComputedStyle(
            element,
            "::before",
          );
          if (beforeStyle.content !== "none") {
            computedStyles[`${key}::before`] = {
            };
          }
          */
        });

        if (!getGeneric) return [computedStyles, computedPublishStyles];
        // Extra styles outside the main container
        const centerElement =
          app.workspace.activeLeaf.containerEl.querySelector(
            //".workspace-leaf-content > .view-content",
            ".workspace-split.mod-root .view-content",
          );
        computedPublishStyles[`.published-container`] = {};
        if (centerElement) {
          const centerStyle = getComputedStyle(centerElement);
          computedStyles[`.page > #quartz-body`] = {
            "background-color": centerElement.getCssPropertyValue(
              "background-color",
            )
              ? centerElement.getCssPropertyValue("background-color")
              : "unset",
          };
          computedPublishStyles[
            `.site-body, &.theme-dark, &.theme-light, .markdown-preview-sizer.markdown-preview-section`
          ] = {
            "background-color": centerElement.getCssPropertyValue(
              "background-color",
            )
              ? centerElement.getCssPropertyValue("background-color")
              : "unset",
          };
          computedPublishStyles[`.published-container`]["background-color"] =
            centerElement.getCssPropertyValue("background-color")
              ? centerElement.getCssPropertyValue("background-color")
              : "unset";
          computedPublishStyles[`.published-container`][
            "--background-primary"
          ] = centerElement.getCssPropertyValue("background-color")
            ? centerElement.getCssPropertyValue("background-color")
            : "unset";
        }

        const borderElement = document
          .getRootNode()
          .querySelector("hr.workspace-leaf-resize-handle");
        if (borderElement) {
          const borderStyle = getComputedStyle(borderElement);
          const centerStyle = getComputedStyle(centerElement);
          computedStyles[`.popover .popover-inner`] = {
            "border-color": borderElement.getCssPropertyValue("border-color")
              ? borderElement.getCssPropertyValue("border-left-color")
              : "unset",
            "background-color": centerElement.getCssPropertyValue(
              "background-color",
            )
              ? centerElement.getCssPropertyValue("background-color")
              : "unset",
          };
          computedPublishStyles[`.popover.hover-popover`] = {
            "border-color": borderElement.getCssPropertyValue("border-color")
              ? borderElement.getCssPropertyValue("border-left-color")
              : "unset",
            "background-color": centerElement.getCssPropertyValue(
              "background-color",
            )
              ? centerElement.getCssPropertyValue("background-color")
              : "unset",
          };
          computedStyles[`.graph .graph-outer`] = {
            "border-color": borderElement.getCssPropertyValue("border-color")
              ? borderElement.getCssPropertyValue("border-left-color")
              : "unset",
          };
          computedStyles[`.graph>.global-graph-outer>.global-graph-container`] =
            {
              "border-color": borderElement.getCssPropertyValue("border-color")
                ? borderElement.getCssPropertyValue("border-left-color")
                : "unset",
              "background-color": "transparent",
            };
          computedStyles[`.graph>.global-graph-outer`] = {
            "backdrop-filter": "blur(4px) brightness(0.4)",
            "-webkit-backdrop-filter": "blur(4px) brightness(0.4)",
          };
        }

        const leftSidebar = document
          .getRootNode()
          .querySelector(
            ".workspace-split.mod-horizontal.mod-sidedock.mod-left-split",
          );
        if (leftSidebar) {
          const leftSidebarStyle = getComputedStyle(leftSidebar);
          const borderStyle = getComputedStyle(borderElement);
          computedStyles[`.page > #quartz-body .left.sidebar`] = {
            "background-color": leftSidebar.getCssPropertyValue(
              "background-color",
            )
              ? leftSidebar.getCssPropertyValue("background-color")
              : "unset",
            "border-color": borderElement.getCssPropertyValue(
              "border-right-color",
            )
              ? borderElement.getCssPropertyValue("border-right-color")
              : "inherit",
            "border-right-width": "1px",
          };
          computedPublishStyles[`div.side-body-left-column`] = {
            "background-color": leftSidebar.getCssPropertyValue(
              "background-color",
            )
              ? leftSidebar.getCssPropertyValue("background-color")
              : "unset",
            "border-color": borderElement.getCssPropertyValue(
              "border-right-color",
            )
              ? borderElement.getCssPropertyValue("border-right-color")
              : "inherit",
            "border-right-width": "1px",
          };
          computedPublishStyles[`.published-container`][
            "--sidebar-left-background"
          ] = leftSidebar.getCssPropertyValue("background-color")
            ? leftSidebar.getCssPropertyValue("background-color")
            : "unset";
          computedPublishStyles[`.published-container`][
            "--sidebar-left-border-color"
          ] = borderElement.getCssPropertyValue("border-right-color")
            ? borderElement.getCssPropertyValue("border-right-color")
            : "inherit";
          computedPublishStyles[`.published-container`][
            "--sidebar-left-border-width"
          ] = "1px";
          computedStyles[`.page > #quartz-body .sidebar.left:has(.explorer)`] =
            {
              "background-color": leftSidebar.getCssPropertyValue(
                "background-color",
              )
                ? leftSidebar.getCssPropertyValue("background-color")
                : "unset",
            };
          computedStyles[`.explorer .explorer-content`] = {
            "background-color": leftSidebar.getCssPropertyValue(
              "background-color",
            )
              ? leftSidebar.getCssPropertyValue("background-color")
              : "unset",
          };
        }
        const rightSidebar = document
          .getRootNode()
          .querySelector(
            ".workspace-split.mod-horizontal.mod-sidedock.mod-right-split",
          );
        if (rightSidebar) {
          const rightSidebarStyle = getComputedStyle(rightSidebar);
          const borderStyle = getComputedStyle(borderElement);
          computedStyles[`.page > #quartz-body .right.sidebar`] = {
            "background-color": rightSidebar.getCssPropertyValue(
              "background-color",
            )
              ? rightSidebar.getCssPropertyValue("background-color")
              : "unset",
            "border-color": borderElement.getCssPropertyValue(
              "border-left-color",
            )
              ? borderElement.getCssPropertyValue("border-right-color")
              : "inherit",
            "border-left-width": "1px",
          };
          computedPublishStyles[`.site-body-right-column`] = {
            "background-color": rightSidebar.getCssPropertyValue(
              "background-color",
            )
              ? rightSidebar.getCssPropertyValue("background-color")
              : "unset",
            "border-color": borderElement.getCssPropertyValue(
              "border-left-color",
            )
              ? borderElement.getCssPropertyValue("border-right-color")
              : "inherit",
            "border-left-width": "1px",
          };
          computedPublishStyles[`.published-container`][
            "--sidebar-right-background"
          ] = leftSidebar.getCssPropertyValue("background-color")
            ? leftSidebar.getCssPropertyValue("background-color")
            : "unset";
          computedPublishStyles[`.published-container`][
            "--sidebar-right-border-color"
          ] = borderElement.getCssPropertyValue("border-right-color")
            ? borderElement.getCssPropertyValue("border-right-color")
            : "inherit";
          computedPublishStyles[`.published-container`][
            "--sidebar-right-border-width"
          ] = "1px";
        }

        let backgroundGradient = "";
        if (rightSidebar && leftSidebar && centerElement) {
          const leftSidebarStyle = getComputedStyle(leftSidebar);
          const rightSidebarStyle = getComputedStyle(rightSidebar);
          const centerStyle = getComputedStyle(centerElement);
          const leftSidebarColor =
            leftSidebar.getCssPropertyValue("background-color");
          const rightSidebarColor =
            rightSidebar.getCssPropertyValue("background-color");
          backgroundGradient =
            leftSidebarColor === rightSidebarColor
              ? leftSidebarColor
              : `linear-gradient(to right, ${leftSidebarColor} 0%, ${leftSidebarColor} 20%, ${centerElement ? centerElement.style.backgroundColor : "transparent"} 50%, ${rightSidebarColor} 50%, ${rightSidebarColor} 100%)`;
          computedStyles[`&[data-slug]`] = {
            /*
            "background-color": centerStyle
              .getPropertyValue("background-color")
              .toString()
              .trim(),
            */
            color: centerElement.getCssPropertyValue("color")
              ? `${centerElement.getCssPropertyValue("color")}`
              : "unset",
            background: `${backgroundGradient}`,
          };
        }

        const bodyVariablesElement = document
          .getRootNode()
          .querySelector("body");
        const styleSettingsElement = isDark
          ? document
              .getRootNode()
              .querySelector(".theme-dark.style-settings-ref")
          : document
              .getRootNode()
              .querySelector(".theme-light.style-settings-ref");
        if (bodyVariablesElement) {
          const bodyStyle = getComputedStyle(bodyVariablesElement);
          const variablesToExtract = [
            "--code-background",
            "--code-normal",
            "--code-value",
            "--code-function",
            "--code-string",
            "--code-property",
            "--code-punctuation",
            "--code-comment",
            "--code-tag",
            "--code-important",
            "--code-operator",
            "--code-keyword",
          ]; /*[
            "--color-red",
            "--color-orange",
            "--color-yellow",
            "--color-green",
            "--color-cyan",
            "--color-blue",
            "--color-purple",
            "--color-pink",
            "--text-muted",
            "--text-faint",
            "--text-normal",
          ];*/

          computedStyles[`:root`] = {};
          variablesToExtract.forEach((variable) => {
            computedStyles[`:root`][variable] =
              bodyVariablesElement.getCssPropertyValue(variable);
          });
          // TODO: fix this to actually extract '--variables'. It currently does not do that at all
          computedPublishStyles[
            `${isDark ? "&.theme-dark" : "&.theme-light"}`
          ] = {};
          bodyVariablesElement.computedStyleMap().forEach((value, property) => {
            if (property && property.startsWith("--")) {
              computedPublishStyles[
                `${isDark ? "&.theme-dark" : "&.theme-light"}`
              ][property] = bodyVariablesElement.getCssPropertyValue(property);
            }
          });
          styleSettingsElement
            ?.computedStyleMap()
            .forEach((value, property) => {
              if (property && property.startsWith("--")) {
                computedPublishStyles[
                  `${isDark ? "&.theme-dark" : "&.theme-light"}`
                ][property] =
                  styleSettingsElement.getCssPropertyValue(property);
              }
            });
          /*
          for (let i = 1; i <= bodyStyle.length; i++) {
            const propertyName = bodyStyle[i];
            if (propertyName && propertyName.startsWith("--")) {
              computedPublishStyles[
                `${isDark ? "&.theme-dark" : "&.theme-light"}`
              ][propertyName] = bodyStyle
                .getPropertyValue(propertyName)
                .toString()
                .trim();
            }
          }
          */
        }

        // Generic
        computedStyles[`.page > #quartz-body div.center`] = {
          "min-width": "calc(100% - 40px)",
          "max-width": "calc(100% - 40px)",
          "padding-left": "10px",
          "padding-right": "10px",
        };

        return [computedStyles, computedPublishStyles];
      },
      configuration,
      getGeneric,
      isDark,
    );
    return result;
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
      results[
        `.callout[data-callout=\"${type}\"] .callout-title .callout-icon`
      ]["background-color"] =
        results[
          `.callout[data-callout=\"${type}\"] .callout-title .callout-icon`
        ]["color"];
    });

    return results;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function applyStyleSettingsPreset(browser, preset) {
    await browser.executeObsidian(({ app }, preset) => {
      const computedPreset = JSON.parse(JSON.stringify(preset));
      app.plugins
        .getPlugin("obsidian-style-settings")
        .settingsManager.setSettings(computedPreset);
    });
  }

  async function getStylesFromObsidian(
    manifest,
    configuration,
    manifestCollection,
  ) {
    const [theme, variation] = manifest.name.split(".");
    const fullName =
      manifestCollection.find((m) => sanitize(m.name) === theme)?.name ?? theme;
    console.log(
      `Theme: ${theme}, Variation: ${variation}, Full Name: ${fullName}`,
    );
    const preset = JSON.stringify(manifest.style_settings ?? {});
    console.log(`Preset: ${preset}`);
    // TODO: style settings functions should be used to apply settings
    // e.g. const ss = this.app.plugins.getPlugin("obsidian-style-settings").settingsManager
    // https://github.com/mgmeyers/obsidian-style-settings/blob/dfa9f7c81f9345b9bca47c128339e0e00ecd2aee/src/ImportModal.ts#L48
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
    let lightPublishResult = {
      general: {},
      headings: {},
      callouts: {},
      integrations: {},
    };
    let darkPublishResult = {
      general: {},
      headings: {},
      callouts: {},
      integrations: {},
    };
    let lightKey = "general";
    let darkKey = "general";
    console.log(`Extracting styles for theme: ${theme}`);

    if (isDarkTheme(theme)) {
      before(async () => {
        const darkPage = browser.getObsidianPage();
        await darkPage.write(
          "./.obsidian/plugins/obsidian-style-settings/data.json",
          "{}",
        );
      });
      it(`should extract styles for theme: ${theme} in dark mode`, async () => {
        await browser.reloadSession();
        const darkPage = browser.getObsidianPage();
        await darkPage.resetVault();
        //await browser.reloadObsidian();
        await darkPage.loadWorkspaceLayout("default");
        await browser.executeObsidianCommand("theme:use-dark");
        await darkPage.setTheme(fullName);
        await darkPage.write(
          "./.obsidian/plugins/obsidian-style-settings/data.json",
          preset,
        );
        await browser.executeObsidian(async ({ app }, preset) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
          /*
          await app.plugins
            .getPlugin("obsidian-style-settings")
            .settingsManager.setSettings(JSON.parse(JSON.stringify(preset)));
            */
        }, preset);
        await sleep(500);
        await browser.executeObsidianCommand(
          "plugin-reloader:obsidian-style-settings",
        );
        await sleep(500);
        await darkPage.openFile("general.md");
        await darkPage.openFile("general.md");
        await sleep(100);
        [darkResult.general, darkPublishResult.general] = await getStyles(
          configuration.general,
          true,
          true,
        );
        await darkPage.openFile("headings.md");
        await darkPage.openFile("headings.md");
        await sleep(100);
        [darkResult.headings, darkPublishResult.headings] = await getStyles(
          configuration.headings,
          false,
          true,
        );
        await darkPage.openFile("callouts.md");
        await darkPage.openFile("callouts.md");
        await sleep(100);
        [darkResult.callouts, darkPublishResult.callouts] = await getStyles(
          configuration.callouts,
          false,
          true,
        );
        await darkPage.openFile("integrations.md");
        await darkPage.openFile("integrations.md");
        await sleep(100);
        [darkResult.integrations, darkPublishResult.integrations] =
          await getStyles(
            configuration.integrations,

            false,
            true,
          );
        await sleep(500);
      });
      after(async () => {
        const darkPage = browser.getObsidianPage();
        await darkPage.write(
          "./.obsidian/plugins/obsidian-style-settings/data.json",
          "{}",
        );
        const darkFileName = `./runner/results/${folder}/dark.json`;
        const darkPublishFileName = `./runner/results/${folder}/publish-dark.json`;
        // Flatten the result object
        const darkResultObject = {};
        const darkPublishResultObject = {};
        for (const [key, value] of Object.entries(darkResult)) {
          if (typeof value === "object") {
            for (const [subKey, subValue] of Object.entries(value)) {
              darkResultObject[`${subKey}`] = subValue;
            }
          }
        }
        for (const [key, value] of Object.entries(darkPublishResult)) {
          if (typeof value === "object") {
            for (const [subKey, subValue] of Object.entries(value)) {
              darkPublishResultObject[`${subKey}`] = subValue;
            }
          }
        }
        // Sort the keys alphabetically
        const sortedKeys = Object.keys(darkResultObject).sort();
        const sortedPublishKeys = Object.keys(darkPublishResultObject).sort();
        const sortedDarkResultObject = {};
        const sortedDarkPublishResultObject = {};
        for (const key of sortedKeys) {
          sortedDarkResultObject[key] = darkResultObject[key];
        }
        for (const key of sortedPublishKeys) {
          sortedDarkPublishResultObject[key] = darkPublishResultObject[key];
        }
        // Fix callout icon colors
        const fixedDarkResultObject = fixCalloutIconColor(
          sortedDarkResultObject,
        );
        const fixedDarkPublishResultObject = sortedDarkPublishResultObject;
        await new Promise((resolve, reject) => {
          writeFile(
            darkFileName,
            JSON.stringify(fixedDarkResultObject, null, 2),
            (err) => {
              if (err) reject(err);
              else resolve();
            },
          );
        });
        await new Promise((resolve, reject) => {
          writeFile(
            darkPublishFileName,
            JSON.stringify(fixedDarkPublishResultObject, null, 2),
            (err) => {
              if (err) reject(err);
              else resolve();
            },
          );
        });
        console.log(`Dark styles saved to ${darkFileName}`);
      });
    }
    if (isLightTheme(theme)) {
      before(async () => {
        const lightPage = browser.getObsidianPage();
        await lightPage.write(
          "./.obsidian/plugins/obsidian-style-settings/data.json",
          "{}",
        );
      });
      it(`should extract styles for theme: ${theme} in light mode`, async () => {
        await browser.reloadSession();
        const lightPage = browser.getObsidianPage();
        await lightPage.resetVault();
        //await browser.reloadObsidian();
        await lightPage.loadWorkspaceLayout("default");
        await browser.executeObsidianCommand("theme:use-light");
        await lightPage.setTheme(fullName);
        await lightPage.write(
          "./.obsidian/plugins/obsidian-style-settings/data.json",
          preset,
        );
        await browser.executeObsidian(async ({ app }, preset) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
          /*
          await app.plugins
            .getPlugin("obsidian-style-settings")
            .settingsManager.setSettings(JSON.parse(JSON.stringify(preset)));
            */
        }, preset);
        await sleep(500);
        await browser.executeObsidianCommand(
          "plugin-reloader:obsidian-style-settings",
        );
        await sleep(500);
        await lightPage.openFile("general.md");
        await lightPage.openFile("general.md");
        await sleep(100);
        [lightResult.general, lightPublishResult.general] = await getStyles(
          configuration.general,
          true,
          false,
        );
        await lightPage.openFile("headings.md");
        await lightPage.openFile("headings.md");
        await sleep(100);
        [lightResult.headings, lightPublishResult.headings] = await getStyles(
          configuration.headings,
          false,
          false,
        );
        await lightPage.openFile("callouts.md");
        await lightPage.openFile("callouts.md");
        await sleep(100);
        [lightResult.callouts, lightPublishResult.callouts] = await getStyles(
          configuration.callouts,
          false,
          false,
        );
        await lightPage.openFile("integrations.md");
        await lightPage.openFile("integrations.md");
        await sleep(100);
        [lightResult.integrations, lightPublishResult.integrations] =
          await getStyles(configuration.integrations, false, false);
        await sleep(500);
      });
      after(async () => {
        const lightPage = browser.getObsidianPage();
        await lightPage.write(
          "./.obsidian/plugins/obsidian-style-settings/data.json",
          "{}",
        );
        // Save the light result to a file
        const lightFileName = `./runner/results/${folder}/light.json`;
        const lightPublishFileName = `./runner/results/${folder}/publish-light.json`;
        // Flatten the result object
        const lightResultObject = {};
        const lightPublishResultObject = {};
        for (const [key, value] of Object.entries(lightResult)) {
          if (typeof value === "object") {
            for (const [subKey, subValue] of Object.entries(value)) {
              lightResultObject[`${subKey}`] = subValue;
            }
          }
        }
        for (const [key, value] of Object.entries(lightPublishResult)) {
          if (typeof value === "object") {
            for (const [subKey, subValue] of Object.entries(value)) {
              lightPublishResultObject[`${subKey}`] = subValue;
            }
          }
        }
        // Sort the keys alphabetically
        const sortedKeys = Object.keys(lightResultObject).sort();
        const sortedPublishKeys = Object.keys(lightPublishResultObject).sort();
        const sortedLightResultObject = {};
        const sortedLightPublishResultObject = {};
        for (const key of sortedKeys) {
          sortedLightResultObject[key] = lightResultObject[key];
        }
        for (const key of sortedPublishKeys) {
          sortedLightPublishResultObject[key] = lightPublishResultObject[key];
        }
        // Fix callout icon colors
        const fixedLightResultObject = fixCalloutIconColor(
          sortedLightResultObject,
        );
        const fixedLightPublishResultObject = sortedLightPublishResultObject;
        await new Promise((resolve, reject) => {
          writeFile(
            lightFileName,
            JSON.stringify(fixedLightResultObject, null, 2),
            (err) => {
              if (err) reject(err);
              else resolve();
            },
          );
        });
        await new Promise((resolve, reject) => {
          writeFile(
            lightPublishFileName,
            JSON.stringify(fixedLightPublishResultObject, null, 2),
            (err) => {
              if (err) reject(err);
              else resolve();
            },
          );
        });
        console.log(`Light styles saved to ${lightFileName}`);
      });
    }
    return { lightResult, darkResult };
  }

  const manifestCollection = getManifestCollection();

  for (const manifest of themeCollection) {
    console.log(`Processing target: ${manifest.name}`);
    console.log(Object.entries(extractionTargets));
    getStylesFromObsidian(manifest, extractionTargets, manifestCollection);
  }
});

/*
if (testingMode) {
  copyFileSync(
    `./runner/results/${sanitize(testingTheme)}/_index.scss`,
    `./runner/quartz/quartz/styles/themes/_index.scss`,
  );
}
*/
