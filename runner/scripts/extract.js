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
const testingTheme = "Catppuccin";

const manifestCollection = testingMode
  ? getManifestCollection().filter(
      (m) => m.name.toLowerCase() === testingTheme.toLowerCase(),
    )
  : getManifestCollection(); // Limit to first 10 themes for testing

console.log(manifestCollection);

// test/extract-styles.test.js
describe("Quartz Theme Style Extraction", () => {
  async function getStyles(configuration, getGeneric = false) {
    const result = await browser.executeObsidian(
      async ({ app }, targets, getGeneric) => {
        computedStyles = {};
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
          for (const prop of rule.properties) {
            // Skip properties that are not set
            computedStyles[rule.quartzSelector][prop] = style.getPropertyValue(
              prop,
            )
              ? style.getPropertyValue(prop).toString().trim()
              : "unset";
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

        // Extra styles outside the main container
        const centerElement =
          app.workspace.activeLeaf.containerEl.querySelector(
            ".workspace-leaf-content > .view-content",
          );
        if (centerElement) {
          const centerStyle = getComputedStyle(centerElement);
          computedStyles[`&[data-slug]`] = {
            "background-color": centerStyle.getPropertyValue("background-color")
              ? centerStyle
                  .getPropertyValue("background-color")
                  .toString()
                  .trim()
              : "unset",
            color: centerStyle.getPropertyValue("color")
              ? centerStyle.getPropertyValue("color").toString().trim()
              : "unset",
          };
        }

        if (!getGeneric) return computedStyles;
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

        // Generic
        computedStyles[`.page > #quartz-body div.center`] = {
          "min-width": "calc(100% - 40px)",
          "max-width": "calc(100% - 40px)",
          "padding-left": "10px",
          "padding-right": "10px",
        };

        return computedStyles;
      },
      configuration,
      getGeneric,
    );
    return result;
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getStylesFromObsidian(manifest, configuration) {
    const theme = manifest.name;
    const folder = sanitize(manifest.name);
    mkdirSync(`./runner/results/${folder}`, { recursive: true });
    let lightResult = { general: {}, headings: {}, callouts: {} };
    let darkResult = { general: {}, headings: {}, callouts: {} };
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
        darkResult.general = await getStyles(configuration.general, true);
        await darkPage.openFile("headings.md");
        await darkPage.openFile("headings.md");
        darkResult.headings = await getStyles(configuration.headings);
        await darkPage.openFile("callouts.md");
        await darkPage.openFile("callouts.md");
        darkResult.callouts = await getStyles(configuration.callouts);
        await darkPage.openFile("integrations.md");
        await darkPage.openFile("integrations.md");
        darkResult.integrations = await getStyles(configuration.integrations);
        await sleep(500);
      });
      after(async () => {
        const darkFileName = `./runner/results/${folder}/dark.json`;
        // Flatten the result object
        const darkResultObject = {};
        for (const [key, value] of Object.entries(darkResult)) {
          if (typeof value === "object") {
            for (const [subKey, subValue] of Object.entries(value)) {
              darkResultObject[`${subKey}`] = subValue;
            }
          }
        }
        // Sort the keys alphabetically
        const sortedKeys = Object.keys(darkResultObject).sort();
        const sortedDarkResultObject = {};
        for (const key of sortedKeys) {
          sortedDarkResultObject[key] = darkResultObject[key];
        }
        await new Promise((resolve, reject) => {
          writeFile(
            darkFileName,
            JSON.stringify(sortedDarkResultObject, null, 2),
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
        lightResult.general = await getStyles(configuration.general, true);
        await lightPage.openFile("headings.md");
        await lightPage.openFile("headings.md");
        lightResult.headings = await getStyles(configuration.headings);
        await lightPage.openFile("callouts.md");
        await lightPage.openFile("callouts.md");
        lightResult.callouts = await getStyles(configuration.callouts);
        await lightPage.openFile("integrations.md");
        await lightPage.openFile("integrations.md");
        lightResult.integrations = await getStyles(configuration.integrations);
        await sleep(500);
      });
      after(async () => {
        // Save the light result to a file
        const lightFileName = `./runner/results/${folder}/light.json`;
        // Flatten the result object
        const lightResultObject = {};
        for (const [key, value] of Object.entries(lightResult)) {
          if (typeof value === "object") {
            for (const [subKey, subValue] of Object.entries(value)) {
              lightResultObject[`${subKey}`] = subValue;
            }
          }
        }
        // Sort the keys alphabetically
        const sortedKeys = Object.keys(lightResultObject).sort();
        const sortedLightResultObject = {};
        for (const key of sortedKeys) {
          sortedLightResultObject[key] = lightResultObject[key];
        }
        await new Promise((resolve, reject) => {
          writeFile(
            lightFileName,
            JSON.stringify(sortedLightResultObject, null, 2),
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
