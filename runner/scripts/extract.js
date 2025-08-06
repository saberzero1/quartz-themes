import { browser } from "@wdio/globals";
import { extractionTargets } from "./config.js";
import { writeFile, copyFile, writeFileSync, mkdirSync } from "fs";
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

const manifestCollection = getManifestCollection().slice(0, 10); // Limit to first 10 themes for testing

// test/extract-styles.test.js
describe("Quartz Theme Style Extraction", () => {
  async function getStyles(configuration) {
    const result = await browser.executeObsidian(async ({ app }, targets) => {
      computedStyles = {};
      //app.customCss.setTheme(theme);
      const rules = targets.selectors;
      /*
      const file = app.vault.getAbstractFileByPath(value.file);
      if (!file) {
        throw new Error(
          `File not found: ${value.file}. Ensure the file exists in the vault.`,
        );
      }
      const leaf = app.workspace.getLeaf(false);
      if (!leaf) {
        throw new Error(
          `Leaf not found for file: ${value.file}. Ensure the file is open in the workspace.`,
        );
      }
      leaf.openFile(file, { active: true, eState: "tab" });
      app.workspace.setActiveLeaf(leaf, { focus: true });
      */
      await sleep(3000); // Wait for the file to open and styles to apply
      //          for (const key in rules) {
      rules.forEach((rule) => {
        const containerSelector =
          "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-vertical.mod-root > div > div.workspace-tab-container > div > div > div.view-content > div.markdown-reading-view > div.markdown-preview-view";
        const containerElement =
          //app.dom.appContainerEl.querySelector(containerSelector);
          //app.workspace.activeLeaf.containerEl;
          app.workspace.activeLeaf.containerEl.querySelector(
            ".workspace-leaf-content > .view-content > .markdown-reading-view > .markdown-preview-view",
          );
        if (containerElement === null || containerElement === undefined) return;

        //const style = app.dom.appContainerEl.getComputedStyle(element);
        const selectorKey =
          rule.pseudoElement === ""
            ? rule.obsidianSelector
            : `${rule.obsidianSelector}${rule.pseudoElement}`;
        const element =
          containerElement.querySelector(selectorKey) ?? containerElement;
        /*
        const style = element.computedStyleMap();
        computedStyles[rule.quartzSelector] = {};
        for (const prop of rule.properties) {
          // Skip properties that are not set
          computedStyles[rule.quartzSelector][prop] = style.get(prop)
            ? style.get(prop).toString().trim()
            : "unset";
        }
        */
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
      return computedStyles;
    }, configuration);
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
      before(async () => {
        console.log(`Setting up for theme: ${theme} in dark mode`);
        /*
        await browser.reloadObsidian(
          "./runner/vault",
          [
            "./runner/vault/.obsidian/plugins/obsidian-style-settings",
            "./runner/vault/.obsidian/plugins/obsidian-view-mode-by-frontmatter",
          ],
          `./runner/vault/.obsidian/theme/${theme}`,
        );
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-dark");
        });
        await browser.executeObsidian(({ app }, theme) => {
          app.customCss.setTheme(theme);
        }, theme);
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-style-settings");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-view-mode-by-frontmatter");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-hotkeys-for-specific-files");
        });
        await browser.executeObsidian(({ app }) => {
          app.workspace.changeLayout(target);
        });
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById(
            `obsidian-hotkeys-for-specific-files:${file}`,
          );
        });
        await browser.executeObsidian(({ app }, file) => {
          const vaultFile = app.vault.getAbstractFileByPath(file);
          if (vaultFile) {
            app.workspace.getLeaf("tab").openFile(vaultFile);
          }
        });
          */
        await browser.reloadObsidian(
          "./runner/vault",
          [
            "./runner/vault/.obsidian/plugins/dataview",
            "./runner/vault/.obsidian/plugins/obsidian-style-settings",
            "./runner/vault/.obsidian/plugins/obsidian-view-mode-by-frontmatter",
          ],
          `./runner/vault/.obsidian/themes/${theme}`,
        );

        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-dark");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-style-settings");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-view-mode-by-frontmatter");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("dataview");
        });

        await sleep(3000);
        console.log(`Setting up for theme: ${theme} in dark mode complete`);
      });
      /*
      beforeEach(async () => {
        const darkPage = browser.getObsidianPage();
        await darkPage.loadWorkspaceLayout(darkKey);
        await sleep(3000);
        await darkPage.setTheme(theme);
        await darkPage.enablePlugin("obsidian-style-settings");
        await darkPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-dark");
        });
        await darkPage.openFile(`${darkKey}.md`);
      });
      */
      it(`should extract styles for theme: ${theme}/general in dark mode`, async () => {
        const darkPage = browser.getObsidianPage();
        await darkPage.loadWorkspaceLayout(darkKey);
        await sleep(2000);
        await darkPage.setTheme(theme);
        await darkPage.enablePlugin("obsidian-style-settings");
        await darkPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-dark");
        });
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(1000);
        await darkPage.openFile(`${darkKey}.md`);
        await sleep(2000);
        darkResult.general = await getStyles(configuration.general);
        darkKey = "headings";
      });
      it(`should extract styles for theme: ${theme}/headings in dark mode`, async () => {
        const darkPage = browser.getObsidianPage();
        await darkPage.loadWorkspaceLayout(darkKey);
        await sleep(2000);
        await darkPage.setTheme(theme);
        await darkPage.enablePlugin("obsidian-style-settings");
        await darkPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-dark");
        });
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(1000);
        await darkPage.openFile(`${darkKey}.md`);
        await sleep(2000);
        darkResult.headings = await getStyles(configuration.headings);
        darkKey = "callouts";
      });
      it(`should extract styles for theme: ${theme}/callouts in dark mode`, async () => {
        const darkPage = browser.getObsidianPage();
        await darkPage.loadWorkspaceLayout(darkKey);
        await sleep(2000);
        await darkPage.setTheme(theme);
        await darkPage.enablePlugin("obsidian-style-settings");
        await darkPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-dark");
        });
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(1000);
        await darkPage.openFile(`${darkKey}.md`);
        await sleep(2000);
        darkResult.callouts = await getStyles(configuration.callouts);
        darkKey = "integrations";
      });
      it(`should extract styles for theme: ${theme}/integrations in dark mode`, async () => {
        const darkPage = browser.getObsidianPage();
        await darkPage.loadWorkspaceLayout(darkKey);
        await sleep(2000);
        await darkPage.setTheme(theme);
        await darkPage.enablePlugin("obsidian-style-settings");
        await darkPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-dark");
        });
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(1000);
        await darkPage.openFile(`${darkKey}.md`);
        await sleep(2000);
        darkResult.integrations = await getStyles(configuration.integrations);
      });
      /*
        it(`should extract styles for theme: ${theme} in dark mode - headings`, async () => {
          await browser.executeObsidian(({ app }) => {
            app.workspace.changeLayout("headings");
          });
          darkHeadings = await getStyles(extractionTargets.headings);
          sleep(1000);
          console.log(
            `Dark styles for headings layout extracted:`,
            darkHeadings,
          );
        });
        it(`should extract styles for theme: ${theme} in dark mode - callouts`, async () => {
          await browser.executeObsidian(({ app }) => {
            app.workspace.changeLayout("callouts");
          });
          darkCallouts = await getStyles(extractionTargets.callouts);
          sleep(1000);
          console.log(
            `Dark styles for callouts layout extracted:`,
            darkCallouts,
          );
        });
        */
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
        //console.log(darkResult);
      });
    }
    if (isLightTheme(theme)) {
      before(async () => {
        console.log(`Setting up for theme: ${theme} in light mode`);
        /*
        await browser.reloadObsidian(
          "./runner/vault",
          [
            "./runner/vault/.obsidian/plugins/obsidian-style-settings",
            "./runner/vault/.obsidian/plugins/obsidian-view-mode-by-frontmatter",
          ],
          `./runner/vault/.obsidian/theme/${theme}`,
        );
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-light");
        });
        await browser.executeObsidian(({ app }, theme) => {
          app.customCss.setTheme(theme);
        }, theme);
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-style-settings");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-view-mode-by-frontmatter");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-hotkeys-for-specific-files");
        });
        await browser.executeObsidian(({ app }) => {
          app.workspace.changeLayout(target);
        });
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById(
            `obsidian-hotkeys-for-specific-files:${file}`,
          );
        });
        await browser.executeObsidian(({ app }, file) => {
          const vaultFile = app.vault.getAbstractFileByPath(file);
          if (vaultFile) {
            app.workspace.getLeaf("tab").openFile(vaultFile);
          }
        });
          */
        await browser.reloadObsidian(
          "./runner/vault",
          [
            "./runner/vault/.obsidian/plugins/dataview",
            "./runner/vault/.obsidian/plugins/obsidian-style-settings",
            "./runner/vault/.obsidian/plugins/obsidian-view-mode-by-frontmatter",
          ],
          `./runner/vault/.obsidian/themes/${theme}`,
        );

        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-light");
        });
        await browser.executeObsidian(({ app }, theme) => {
          app.customCss.setTheme(theme);
        }, theme);
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-style-settings");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("obsidian-view-mode-by-frontmatter");
        });
        await browser.executeObsidian(({ app }) => {
          app.plugins.enablePlugin("dataview");
        });

        await sleep(3000);
        console.log(`Setting up for theme: ${theme} in light mode complete`);
      });
      /*
      beforeEach(async () => {
        const lightPage = browser.getObsidianPage();
        await lightPage.loadWorkspaceLayout(lightKey);
        await sleep(3000);
        await lightPage.setTheme(theme);
        await lightPage.enablePlugin("obsidian-style-settings");
        await lightPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-light");
        });
        await lightPage.openFile(`${lightKey}.md`);
      });
      */
      it(`should extract styles for theme: ${theme}/general in light mode`, async () => {
        const lightPage = browser.getObsidianPage();
        await lightPage.loadWorkspaceLayout(lightKey);
        await sleep(2000);
        await lightPage.setTheme(theme);
        await lightPage.enablePlugin("obsidian-style-settings");
        await lightPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-light");
        });
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(1000);
        await lightPage.openFile(`${lightKey}.md`);
        await sleep(2000);
        lightResult.general = await getStyles(configuration.general);
        lightKey = "headings";
      });
      it(`should extract styles for theme: ${theme}/headings in light mode`, async () => {
        const lightPage = browser.getObsidianPage();
        await lightPage.loadWorkspaceLayout(lightKey);
        await sleep(2000);
        await lightPage.setTheme(theme);
        await lightPage.enablePlugin("obsidian-style-settings");
        await lightPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-light");
        });
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(1000);
        await lightPage.openFile(`${lightKey}.md`);
        await sleep(2000);
        lightResult.headings = await getStyles(configuration.headings);
        lightKey = "callouts";
      });
      it(`should extract styles for theme: ${theme}/callouts in light mode`, async () => {
        const lightPage = browser.getObsidianPage();
        await lightPage.loadWorkspaceLayout(lightKey);
        await sleep(2000);
        await lightPage.setTheme(theme);
        await lightPage.enablePlugin("obsidian-style-settings");
        await lightPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-light");
        });
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(1000);
        await lightPage.openFile(`${lightKey}.md`);
        await sleep(2000);
        lightResult.callouts = await getStyles(configuration.callouts);
        lightKey = "integrations";
      });
      it(`should extract styles for theme: ${theme}/integrations in light mode`, async () => {
        const lightPage = browser.getObsidianPage();
        await lightPage.loadWorkspaceLayout(lightKey);
        await sleep(2000);
        await lightPage.setTheme(theme);
        await lightPage.enablePlugin("obsidian-style-settings");
        await lightPage.enablePlugin("obsidian-view-mode-by-frontmatter");
        await browser.executeObsidian(({ app }) => {
          app.commands.executeCommandById("theme:use-light");
        });
        await browser.executeObsidian(({ app }) => {
          const clickableFolder = document.querySelector(
            "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-horizontal.mod-sidedock.mod-left-split > div.workspace-tabs.mod-top.mod-top-left-space > div.workspace-tab-container > div:nth-child(1) > div > div.nav-files-container.node-insert-event > div > div.tree-item.nav-folder.is-collapsed > div",
          );
          if (clickableFolder) {
            clickableFolder.click();
          }
        });
        await sleep(1000);
        await lightPage.openFile(`${lightKey}.md`);
        await sleep(2000);
        lightResult.integrations = await getStyles(configuration.integrations);
      });
      /*
        it(`should extract styles for theme: ${theme} in light mode - general`, async () => {
          await browser.executeObsidian(({ app }) => {
            app.workspace.changeLayout("general");
          });
          lightGeneral = await getStyles(extractionTargets["general"]);
          sleep(1000);
          console.log(
            `Light styles for general layout extracted:`,
            lightGeneral,
          );
        });
        it(`should extract styles for theme: ${theme} in light mode - headings`, async () => {
          await browser.executeObsidian(({ app }) => {
            app.workspace.changeLayout("headings");
          });
          lightHeadings = await getStyles(extractionTargets["headings"]);
          sleep(1000);
          console.log(
            `Light styles for headings layout extracted:`,
            lightHeadings,
          );
        });
        it(`should extract styles for theme: ${theme} in light mode - callouts`, async () => {
          await browser.executeObsidian(({ app }) => {
            app.workspace.changeLayout("callouts");
          });
          lightCallouts = await getStyles(extractionTargets["callouts"]);
          sleep(1000);
          console.log(
            `Light styles for callouts layout extracted:`,
            lightCallouts,
          );
        });
        */
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
        //console.log(lightResult);
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
