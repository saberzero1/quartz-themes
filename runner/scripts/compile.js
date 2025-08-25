import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
} from "../../util/util.mjs";

/*

if both dark.json and light.json are present, combine them into a single object
combine the two objects into a single object with the same keys
if the values are the same, use that value
if the values are different, combine them using the light-dark CSS function
if only one is present, use that one

 */
const manifestCollection = getManifestCollection();
manifestCollection.forEach((manifest) => {
  const theme = sanitize(manifest.name);

  const darkFile = `./runner/results/${theme}/dark.json`;
  const lightFile = `./runner/results/${theme}/light.json`;
  const targetFile = `./runner/results/${theme}/_index.scss`;
  const darkData = existsSync(darkFile)
    ? JSON.parse(readFileSync(darkFile, "utf8"))
    : null;
  const lightData = existsSync(lightFile)
    ? JSON.parse(readFileSync(lightFile, "utf8"))
    : null;

  const colorTargets = ["color", "background-color", "border-color"];
  //console.log(data);
  //const scssFile = "./templates/_index.scss";
  //const scssData = readFileSync(scssFile, "utf8");
  //console.log(scssData);
  const data = {};
  // Combine the two objects
  if (darkData && lightData) {
    for (const key of Object.keys(darkData)) {
      data[key] = {};
      // Check if the key exists in both objects and combine them if they are different and a color target
      // If they are the same, use the value from darkData
      // If they are different, use the light-dark function
      // Due to preprocessing, we can assume that all keys in darkData and lightData are the same
      for (const [target, value] of Object.entries(darkData[key])) {
        if (colorTargets.includes(target)) {
          if (darkData[key][target] === lightData[key][target]) {
            data[key][target] = darkData[key][target];
          } else {
            data[key][target] =
              `light-dark(${lightData[key][target]}, ${darkData[key][target]})`;
          }
        } else {
          data[key][target] = darkData[key][target]; // Use darkData value for non-color targets
        }
      }
    }
  } else if (darkData) {
    // If only darkData is present, use it directly
    for (const key of Object.keys(darkData)) {
      data[key] = {};
      for (const [target, value] of Object.entries(darkData[key])) {
        data[key][target] = value; // Use darkData value
      }
    }
  } else if (lightData) {
    // If only lightData is present, use it directly
    for (const key of Object.keys(lightData)) {
      data[key] = {};
      for (const [target, value] of Object.entries(lightData[key])) {
        data[key][target] = value; // Use lightData value
      }
    }
  } else {
    console.error(
      "No data files found. Please ensure dark.json or light.json exists.",
    );
    process.exit(1);
  }
  let resultScss = `
@use "../variables.scss" as *;

:root {
  ${lightData && darkData ? "color-scheme: light dark;" : lightData ? "color-scheme: light;" : darkData ? "color-scheme: dark;" : ""}
  font-size: 16px;
}

html {
${
  lightData && darkData
    ? `
  &[saved-theme="light"] {
    color-scheme: light;
    .callout[data-callout] {
      mix-blend-mode: darken;
    }
  }
  &[saved-theme="dark"] {
    color-scheme: dark;
    .callout[data-callout] {
      mix-blend-mode: lighten;
    }
  }
`
    : lightData
      ? `
  color-scheme: only light;
  .callout[data-callout] {
    mix-blend-mode: darken;
  }
`
      : darkData
        ? `
  color-scheme: only dark;
  .callout[data-callout] {
    mix-blend-mode: lighten;
  }
`
        : ""
}
}

body {
`;
  for (const [key, value] of Object.entries(data)) {
    const values = Object.entries(value)
      .map(([k, v]) => `${k}: ${v.replaceAll('"??", ', "")};`)
      .join("\n  ");
    resultScss += `
  ${key} {
    ${values}
  }
`;
  }
  resultScss += `
  div.graph {
    --light: var(--quartz-graph-node) !important;
    --lightgray: var(--quartz-graph-line) !important;
    --gray: var(--quartz-graph-node) !important;
    --darkgray: var(--quartz-graph-node-unresolved) !important;
    --dark: var(--quartz-graph-text) !important;
    --secondary: var(--quartz-graph-node-focused) !important;
    --tertiary: var(--quartz-graph-node-tag) !important;
  }

  @media all and not ($desktop) {
    .page > #quartz-body div.sidebar.right {
      background-color: transparent;
    }
  }
}
`;
  // Write the result to the target file
  writeFileSync(targetFile, resultScss, "utf8");
  console.log(`Generated SCSS for theme: ${theme}`);
});
