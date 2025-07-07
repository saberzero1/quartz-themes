import { readFileSync, writeFileSync, existsSync } from "fs";
import { format } from "../formatter.mjs";
import { convert } from "./converter.mjs";
import { getTheme, isFullTheme } from "../../util/util.mjs";
import stripComments from "../packages/strip-css-comments.mjs";

export default function combineLightDarkInJson(manifestCollection) {
  const appJSON = JSON.parse(readFileSync("./app.json", "utf-8"));

  writeFileSync(
    "./app-light-dark.json",
    format(JSON.stringify(appLightDarkJSON(appJSON)), "json"),
  );
  manifestCollection.forEach((manifest) => {
    const theme = getTheme(manifest);
    const themeJSON = JSON.parse(
      readFileSync(`./atomic/${theme}/theme.json`, "utf-8"),
    );
    const appLightDark = isFullTheme(manifest.name)
      ? appLightDarkJSON(themeJSON)
      : themeJSON;
    writeFileSync(
      `./atomic/${theme}/theme-light-dark.json`,
      format(JSON.stringify(appLightDark), "json"),
    );
  });
}

function appLightDarkJSON(json) {
  const appLightRules = {};
  const appDarkRules = {};

  Object.entries(json).forEach(([selector, declarations]) => {
    if (
      selector.includes(".theme-light") &&
      !selector.includes("not(.theme-light)")
    ) {
      const finalSelector =
        selector.replaceAll(".theme-light", "").trim() === ""
          ? "body"
          : selector.replaceAll(".theme-light", "").trim();
      appLightRules[finalSelector] = declarations;
    }
    if (
      selector.includes(".theme-dark") &&
      !selector.includes("not(.theme-dark)")
    ) {
      const finalSelector =
        selector.replaceAll(".theme-dark", "").trim() === ""
          ? "body"
          : selector.replaceAll(".theme-dark", "").trim();
      appDarkRules[finalSelector] = declarations;
    }
  });

  // Check if each selector is identical
  // If the selector is only in light or only in dark, just push it as is
  // If the selector is in both light and dark, we need to combine them
  // Then for each identical selector, check each if declaration is identical
  // If declaration is identical, push it as is
  // Otherwise, push it as a light and dark value object
  //
  // Example:
  //
  // body.theme-light {
  //   "color": "#000";
  //   "background-color": "#fff";
  //   "font-size": "16px"
  // }
  // body.theme-dark {
  //   "color": "#fff";
  //   "background-color": "#000";
  //   "font-size": "16px"
  // }
  //
  // Should be converted to:
  //
  // "body": {
  //   "color": {
  //     "light": "#000",
  //     "dark": "#fff"
  //   },
  //   "background-color": {
  //     "light": "#fff",
  //     "dark": "#000"
  //   },
  //   "font-size": "16px"
  // }
  const appLightDarkJSON = {};

  Object.entries(appLightRules).forEach(([selector, declarations]) => {
    if (!appLightDarkJSON[selector]) {
      appLightDarkJSON[selector] = {};
    }
    declarations.forEach(({ property, value }) => {
      if (!appLightDarkJSON[selector][property]) {
        appLightDarkJSON[selector][property] = { dark: null, light: value };
      } else {
        appLightDarkJSON[selector][property].light = value;
      }
    });
  });

  Object.entries(appDarkRules).forEach(([selector, declarations]) => {
    if (!appLightDarkJSON[selector]) {
      appLightDarkJSON[selector] = {};
    }
    declarations.forEach(({ property, value }) => {
      if (!appLightDarkJSON[selector][property]) {
        appLightDarkJSON[selector][property] = { dark: value, light: null };
      } else {
        appLightDarkJSON[selector][property].dark = value;
      }
    });
  });

  // Now we need to check if the property is identical in both light and dark
  // If it is, we can just push the value as a string
  // If it is not, we need to push it as an object with light and dark values

  Object.entries(appLightDarkJSON).forEach(([selector, properties]) => {
    Object.entries(properties).forEach(([property, value]) => {
      if (typeof value === "object" && "light" in value && "dark" in value) {
        if (value.light === value.dark) {
          appLightDarkJSON[selector][property] = value.light;
        } else {
          appLightDarkJSON[selector][property] = {
            light: value.light,
            dark: value.dark,
          };
        }
      }
    });
  });

  // Remove empty rules
  // This is necessary to avoid empty selectors in the final JSON
  Object.entries(appLightDarkJSON).forEach(([selector, properties]) => {
    if (Object.keys(properties).length === 0) {
      delete appLightDarkJSON[selector];
    }
  });

  return appLightDarkJSON;
}
