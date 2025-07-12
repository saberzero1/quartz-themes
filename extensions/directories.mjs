import {
  getTheme,
  ensureDirectoryExists,
  clearDirectories,
  clearDirectoryContents,
} from "../util/util.mjs";

export function createDefaultDirectories(manifestCollection) {
  manifestCollection.forEach((manifest) => {
    // cleanDirectoryContents("./themes")
    const theme = getTheme(manifest);
    ensureDirectoryExists(`./atomic/${theme}`);
    ensureDirectoryExists(`./extras/themes/${theme}`);
    ensureDirectoryExists(`./style-settings/${theme}`);
    ensureDirectoryExists(`./themes/${theme}/extras/fonts/icons`);
    ensureDirectoryExists(`./themes/${theme}/extras/fix`);
  });
}

export function clearDefaultDirectories(manifestCollection) {
  clearDirectoryContents(`./themes`);
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    clearDirectories(`./extras/themes/${theme}`);
    try {
      clearDirectories(`./style-settings/${theme}`);
      console.log("Cleared style settings for theme:", theme);
    } catch (error) {
      console.log("No style settings found for theme:", theme);
    }
  });
}
