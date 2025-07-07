import {
  getTheme,
  copyFileToDirectory,
  isDarkTheme,
  isLightTheme,
  getFonts,
  getExtras,
  getFixes,
} from "../util/util.mjs";
import { existsSync } from "fs";

export function copyFiles(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);

    const dark = isDarkTheme(manifest.name) ?? false;
    const light = isLightTheme(manifest.name) ?? false;
    const fonts = getFonts(manifest.name) ?? [];
    const extras = getExtras(manifest.name) ?? [];
    const fixes = getFixes(manifest.name) ?? [];

    // Default
    copyFileToDirectory(`./templates/README.md`, `./themes/${theme}`);
    copyFileToDirectory(`./templates/_index.scss`, `./themes/${theme}`);
    if (!existsSync(`./extras/themes/${theme}`)) {
      copyFileToDirectory(
        `./templates/extras/_index.scss`,
        `./extras/themes/${theme}`,
      );
    }

    // Dark theme
    if (dark) {
      copyFileToDirectory(`./templates/_dark.scss`, `./themes/${theme}`);
    }

    // Light theme
    if (light) {
      copyFileToDirectory(`./templates/_light.scss`, `./themes/${theme}`);
    }

    // Fonts
    if (fonts.length > 0) {
      /*copyFileToDirectory(
        `./templates/fonts/_index.scss`,
        `./themes/${theme}/extras/fonts`,
      );*/
      fonts.forEach((font) => {
        copyFileToDirectory(
          `./extras/fonts/${font}.scss`,
          `./themes/${theme}/extras/fonts${font.includes("/") ? `/${font.replace(/\/[^/]+$/, "")}` : ""}`,
        );
      });
    }

    // Extras
    if (extras.length > 0) {
      extras.forEach((extra) => {
        copyFileToDirectory(
          `./extras/${extra}.scss`,
          `./themes/${theme}/extras`,
        );
      });
    }
    copyFileToDirectory(
      `./extras/themes/${theme}/_index.scss`,
      `./themes/${theme}/extras`,
    );

    // Fixes
    if (fixes.length > 0) {
      fixes.forEach((fix) => {
        copyFileToDirectory(
          `./extras/fix/${fix}.scss`,
          `./themes/${theme}/extras/fix`,
        );
      });
    }
  });
}
