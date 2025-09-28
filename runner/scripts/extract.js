import { browser } from "@wdio/globals";
import { extractionTargets } from "./config.js";
import { writeFile, copyFileSync, writeFileSync, mkdirSync } from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
} from "../../util/util.mjs";
import { obsidianPage } from "wdio-obsidian-service";

/*
 * NOTE: Make sure to set the saved workspace layouts to reading mode!
 */

/*
To load a theme by name: `app.customCss.setTheme("Abyssal");`
*/

let testingMode = false;
//testingMode = true;
const testingTheme = "Apatheia";

const manifestCollection = testingMode
  ? getManifestCollection().filter(
      (m) => m.name.toLowerCase() === testingTheme.toLowerCase(),
    )
  : getManifestCollection(); // Limit to first 10 themes for testing

console.log(manifestCollection);

// test/extract-styles.test.js
describe("Quartz Theme Style Extraction", () => {
  async function getStyles(configuration, getGeneric = false, isDark = false) {
    const result = await browser.executeObsidian(
      async ({ app }, targets, getGeneric, isDark) => {
        computedStyles = {}; // Quartz specific styles
        computedPublishStyles = {}; // Obsidian Publish specific styles
        //app.customCss.setTheme(theme);
        const rules = targets.selectors;

        await sleep(1000); // Wait for the file to open and styles to apply
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
                style.getPropertyValue(prop)
                  ? style.getPropertyValue(prop).toString().trim()
                  : "unset";
            }
            if (rule.publishSelector) {
              computedPublishStyles[rule.publishSelector][prop] =
                style.getPropertyValue(prop)
                  ? style.getPropertyValue(prop).toString().trim()
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
            ".workspace-leaf-content > .view-content",
          );
        if (centerElement) {
          const centerStyle = getComputedStyle(centerElement);
          computedStyles[`.page > #quartz-body`] = {
            "background-color": centerStyle.getPropertyValue("background-color")
              ? centerStyle
                  .getPropertyValue("background-color")
                  .toString()
                  .trim()
              : "unset",
          };
        }

        const borderElement = document
          .getRootNode()
          .querySelector("hr.workspace-leaf-resize-handle");
        if (borderElement) {
          const borderStyle = getComputedStyle(borderElement);
          const centerStyle = getComputedStyle(centerElement);
          computedStyles[`.popover .popover-inner`] = {
            "border-color": borderStyle.getPropertyValue("border-color")
              ? borderStyle
                  .getPropertyValue("border-left-color")
                  .toString()
                  .trim()
              : "unset",
            "background-color": centerStyle.getPropertyValue("background-color")
              ? centerStyle
                  .getPropertyValue("background-color")
                  .toString()
                  .trim()
              : "unset",
          };
          computedStyles[`.graph .graph-outer`] = {
            "border-color": borderStyle.getPropertyValue("border-color")
              ? borderStyle
                  .getPropertyValue("border-left-color")
                  .toString()
                  .trim()
              : "unset",
          };
          computedStyles[`.graph>.global-graph-outer>.global-graph-container`] =
            {
              "border-color": borderStyle.getPropertyValue("border-color")
                ? borderStyle
                    .getPropertyValue("border-left-color")
                    .toString()
                    .trim()
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
            "background-color": leftSidebarStyle.getPropertyValue(
              "background-color",
            )
              ? leftSidebarStyle
                  .getPropertyValue("background-color")
                  .toString()
                  .trim()
              : "unset",
            "border-color": borderStyle.getPropertyValue("border-right-color")
              ? borderStyle
                  .getPropertyValue("border-right-color")
                  .toString()
                  .trim()
              : "inherit",
            "border-right-width": "1px",
          };
          computedStyles[`.page > #quartz-body .sidebar.left:has(.explorer)`] =
            {
              "background-color": leftSidebarStyle.getPropertyValue(
                "background-color",
              )
                ? leftSidebarStyle
                    .getPropertyValue("background-color")
                    .toString()
                    .trim()
                : "unset",
            };
          computedStyles[`.explorer .explorer-content`] = {
            "background-color": leftSidebarStyle.getPropertyValue(
              "background-color",
            )
              ? leftSidebarStyle
                  .getPropertyValue("background-color")
                  .toString()
                  .trim()
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
            "background-color": rightSidebarStyle.getPropertyValue(
              "background-color",
            )
              ? rightSidebarStyle
                  .getPropertyValue("background-color")
                  .toString()
                  .trim()
              : "unset",
            "border-color": borderStyle.getPropertyValue("border-left-color")
              ? borderStyle
                  .getPropertyValue("border-right-color")
                  .toString()
                  .trim()
              : "inherit",
            "border-left-width": "1px",
          };
        }

        let backgroundGradient = "";
        if (rightSidebar && leftSidebar && centerElement) {
          const leftSidebarStyle = getComputedStyle(leftSidebar);
          const rightSidebarStyle = getComputedStyle(rightSidebar);
          const centerStyle = getComputedStyle(centerElement);
          const leftSidebarColor = leftSidebarStyle
            .getPropertyValue("background-color")
            .toString()
            .trim();
          const rightSidebarColor = rightSidebarStyle
            .getPropertyValue("background-color")
            .toString()
            .trim();
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
            color: centerStyle.getPropertyValue("color")
              ? `${centerStyle.getPropertyValue("color").toString().trim()}`
              : "unset",
            background: `${backgroundGradient}`,
          };
        }

        const bodyVariablesElement = document
          .getRootNode()
          .querySelector("body");
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
            computedStyles[`:root`][variable] = bodyStyle
              .getPropertyValue(variable)
              .toString()
              .trim();
          });
          // TODO: fix this to actually extract '--variables'. It currently does not do that at all
          computedPublishStyles[
            `${isDark ? "&.theme-dark" : "&.theme-light"}`
          ] = {};
          bodyVariablesElement.computedStyleMap().forEach((value, property) => {
            if (property && property.startsWith("--")) {
              computedPublishStyles[
                `${isDark ? "&.theme-dark" : "&.theme-light"}`
              ][property] = value[0][0].toString().trim();
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

  async function getStylesFromObsidian(manifest, configuration) {
    const theme = manifest.name;
    const folder = sanitize(manifest.name);
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
      before(async () => {});
      it(`should extract styles for theme: ${theme} in dark mode`, async () => {
        const darkPage = browser.getObsidianPage();
        await darkPage.resetVault();
        await browser.executeObsidianCommand("theme:use-dark");
        await darkPage.setTheme(theme);
        await darkPage.loadWorkspaceLayout("default");
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(500);
        await darkPage.openFile("general.md");
        await darkPage.openFile("general.md");
        [darkResult.general, darkPublishResult.general] = await getStyles(
          configuration.general,
          true,
          true,
        );
        await darkPage.openFile("headings.md");
        await darkPage.openFile("headings.md");
        [darkResult.headings, darkPublishResult.headings] = await getStyles(
          configuration.headings,
          false,
          true,
        );
        await darkPage.openFile("callouts.md");
        await darkPage.openFile("callouts.md");
        [darkResult.callouts, darkPublishResult.callouts] = await getStyles(
          configuration.callouts,
          false,
          true,
        );
        await darkPage.openFile("integrations.md");
        await darkPage.openFile("integrations.md");
        [darkResult.integrations, darkPublishResult.integrations] =
          await getStyles(
            configuration.integrations,

            false,
            true,
          );
        await sleep(500);
      });
      after(async () => {
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
      before(async () => {});
      it(`should extract styles for theme: ${theme} in light mode`, async () => {
        const lightPage = browser.getObsidianPage();
        await lightPage.resetVault();
        await browser.executeObsidianCommand("theme:use-light");
        await lightPage.setTheme(theme);
        await lightPage.loadWorkspaceLayout("default");
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(500);
        await lightPage.openFile("general.md");
        await lightPage.openFile("general.md");
        [lightResult.general, lightPublishResult.general] = await getStyles(
          configuration.general,
          true,
          false,
        );
        await lightPage.openFile("headings.md");
        await lightPage.openFile("headings.md");
        [lightResult.headings, lightPublishResult.headings] = await getStyles(
          configuration.headings,
          false,
          false,
        );
        await lightPage.openFile("callouts.md");
        await lightPage.openFile("callouts.md");
        [lightResult.callouts, lightPublishResult.callouts] = await getStyles(
          configuration.callouts,
          false,
          false,
        );
        await lightPage.openFile("integrations.md");
        await lightPage.openFile("integrations.md");
        [lightResult.integrations, lightPublishResult.integrations] =
          await getStyles(configuration.integrations, false, false);
        await sleep(500);
      });
      after(async () => {
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

  for (const manifest of manifestCollection) {
    console.log(`Processing target: ${manifest.name}`);
    console.log(Object.entries(extractionTargets));
    getStylesFromObsidian(manifest, extractionTargets);
  }
});

if (testingMode) {
  copyFileSync(
    `./runner/results/${sanitize(testingTheme)}/_index.scss`,
    `./runner/quartz/quartz/styles/themes/_index.scss`,
  );
}
