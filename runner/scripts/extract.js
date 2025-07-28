import { browser, $ } from "@wdio/globals";
import { obsidianPage } from "wdio-obsidian-service";
import { extractionTargets } from "./config.js";

/*
To load a theme by name: `app.customCss.setTheme("Abyssal");`
*/

// test/extract-styles.test.js

describe("Quartz Theme Style Extraction", () => {
  it("should extract computed styles from the theme", async () => {
    // WebdriverIO will have already opened Obsidian to your specimen note
    const themes = ["80s Neon", "Abyssal"];

    for (const theme of themes) {
      // Load the specified theme

      const results = await obsidianPage.setTheme(theme).then((_) => {
        _ = browser.execute(
          (targets) => {
            const computedStyles = {};
            for (const key in targets) {
              const { obsidianSelector } = targets[key];
              const element = document.querySelector(obsidianSelector);
              if (!element) continue;

              const style = window.getComputedStyle(element);
              computedStyles[key] = {};
              for (const prop of targets[key].properties) {
                computedStyles[key][prop] = style.getPropertyValue(prop).trim();
              }

              // BONUS: Handle pseudo-elements like ::before and ::after
              const beforeStyle = window.getComputedStyle(element, "::before");
              if (beforeStyle.content !== "none") {
                computedStyles[`${key}::before`] = {
                  /* extract pseudo props */
                };
              }
            }
            return computedStyles;
          },
          extractionTargets, // Pass the config into the browser context
        );
        return _;
      });
      // Log the results to the console
      console.log(JSON.stringify(results, null, 2));
    }

    // `results` now holds a JSON object with all the computed styles.
    // Save this JSON to a file for the next step.
    // e.g., fs.writeFileSync('computed-styles.json', JSON.stringify(results, null, 2));
  });
});
