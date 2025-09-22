import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
  getFonts,
} from "../../util/util.mjs";
import postcss from "postcss";
import calc from "postcss-calc";
import postcssColorMixFunction from "@csstools/postcss-color-mix-function";
import postcssColorConverter from "postcss-color-converter";

// https://stackoverflow.com/a/64090995
// input: h as an angle in [0,360] and s,l in [0,1] - output: r,g,b in [0,1]
function hsl2rgb(h, s, l) {
  let a = s * Math.min(l, 1 - l);
  let f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}

String.prototype.toHexColors = function () {
  let result = "";

  try {
    result = postcss()
      .use(postcssColorMixFunction())
      .use(calc({ preserve: false }))
      .use(postcssColorMixFunction())
      .use(postcssColorConverter({ outputColorFormat: "hex" }))
      .process(this).css;
  } catch (e) {
    // Likely opacity is not a float between 0 and 1. Let's fix that.
    const rgbaRegex =
      /rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/g;
    result = this.replace(rgbaRegex, (match, r, g, b, a) => {
      const alpha = Math.min(Math.max(parseInt(a, 10), 0), 100) / 100;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    });
    try {
      result = postcss()
        .use(postcssColorMixFunction())
        .use(calc({ preserve: false }))
        .use(postcssColorMixFunction())
        .use(postcssColorConverter({ outputColorFormat: "hex" }))
        .process(result).css;
    } catch (e) {
      try {
        // Probably self-referencing color, like hsl(from hsl(215, 67%, 45%) 57 s l)
        const fromRegex = /from\s+hsl\(([^\)]+)\)/g;
        // Apply the conversion to the inner color first
        result = result.replace(fromRegex, (match) => {
          const innerColor = match.replace(/from\s+/, "");
          try {
            return `from ${hsl2rgb(
              innerColor.split(",")[0],
              innerColor.split(",")[1] / 100,
              innerColor.split(",")[2] / 100,
            )
              .map((x) => Math.round(x * 255))
              .join(", ")}`;
          } catch (e) {
            console.error(
              "Error processing inner color to hex colors:",
              innerColor,
              e,
            );
            return innerColor; // Fallback to original inner color on error
          }
        });
        // Then apply the conversion to the whole string
        result = postcss()
          .use(postcssColorMixFunction())
          .use(calc({ preserve: false }))
          .use(postcssColorMixFunction())
          .use(postcssColorConverter({ outputColorFormat: "hex" }))
          .process(result).css;
      } catch (e) {
        console.error("Error processing CSS to hex colors:", e);
        result = this; // Fallback to original string on error
      }
    }
  }

  const fallbackResult = result;

  try {
    // keep applying until no more changes
    const maxIterations = 10; // Prevent infinite loops
    let iteration = 0;
    let temp;
    do {
      temp = result;
      result = postcss()
        .use(postcssColorMixFunction())
        .use(calc({ preserve: false }))
        .use(postcssColorMixFunction())
        .use(postcssColorConverter({ outputColorFormat: "hex" }))
        .process(result).css;
      iteration++;
    } while (temp !== result && iteration < maxIterations);
  } catch (e) {
    console.error("Error processing CSS to hex colors:", e);
    result = fallbackResult; // Fallback to original string on error
  }

  return result;
};

function sortQuartzColorVariables(a, b) {
  const order = [
    "--light",
    "--lightgray",
    "--gray",
    "--darkgray",
    "--dark",
    "--primary",
    "--secondary",
    "--tertiary",
    "--highlight",
  ];

  // Check if both a and b contain any of the ordered variables
  const aIndex = order.findIndex((color) => a.includes(color));
  const bIndex = order.findIndex((color) => b.includes(color));

  if (aIndex !== -1 && bIndex !== -1) {
    // Both a and b contain ordered variables, sort by their index in the order array
    return aIndex - bIndex;
  } else if (aIndex !== -1) {
    // Only a contains an ordered variable, it should come first
    return -1;
  } else if (bIndex !== -1) {
    // Only b contains an ordered variable, it should come first
    return 1;
  }

  // If neither a nor b contain any ordered variables, sort alphabetically
  return a.localeCompare(b, undefined, { numeric: true });
}

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
  let graphColors = { dark: {}, light: {} };
  const graphMapping = {
    /*
    "--quartz-graph-line": "--lightgray",
    "--quartz-graph-node": ["--gray", "--light"],
    "--quartz-graph-node-unresolved": "--darkgray",
    "--quartz-graph-text": "--dark",
    "--quartz-graph-node-focused": "--secondary",
    "--quartz-graph-node-tag": "--tertiary",
    "--quartz-graph-node-attachment": "--highlight",
    */
    "--quartz-graph-line": "--light", // might be --lightgray
    "--quartz-graph-node": ["--gray", "--darkgray"],
    "--quartz-graph-node-unresolved": "--lightgray", // might be --light
    "--quartz-graph-text": "--dark",
    "--quartz-graph-node-focused": "--secondary",
    "--quartz-graph-node-tag": "--tertiary",
    "--quartz-graph-node-attachment": "--highlight",
  };
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
        } else if (target.startsWith("--quartz-graph")) {
          // Special handling for graph colors to ensure visibility in both themes
          if (Array.isArray(graphMapping[target])) {
            graphMapping[target].forEach((mapped) => {
              graphColors["dark"][mapped] = darkData[key][target];
              graphColors["light"][mapped] = lightData[key][target];
            });
          } else if (!graphMapping[target]) {
            console.warn(
              `Warning: Unmapped graph color target "${target}" in theme "${theme}". Please update the graphMapping object in compile.js.`,
            );
          } else {
            // Map the graph color to a more descriptive variable name
            graphColors["dark"][graphMapping[target]] = darkData[key][target];
            graphColors["light"][graphMapping[target]] = lightData[key][target];
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
  const fonts = getFonts(manifest.name);
  let fontString = "";
  fonts.forEach((font) => {
    fontString += readFileSync(`./extras/fonts/${font}.scss`);
  });
  let graphStringDark = "";
  let graphStringLight = "";
  if (Object.keys(graphColors["dark"]).length > 0) {
    for (const [key, value] of Object.entries(graphColors["dark"])) {
      graphStringDark += `    ${key}: ${value} !important;\n`;
    }
  }
  if (Object.keys(graphColors["light"]).length > 0) {
    for (const [key, value] of Object.entries(graphColors["light"])) {
      graphStringLight += `    ${key}: ${value} !important;\n`;
    }
  }
  let resultScss = `
@use "../variables.scss" as *;

:root {
  ${lightData && darkData ? "color-scheme: light dark;" : lightData ? "color-scheme: light;" : darkData ? "color-scheme: dark;" : ""}
  font-size: 16px;
}

${
  lightData && darkData
    ? `
:root:root {
  ${graphStringLight}
}
:root:root[saved-theme="dark"] {
  ${graphStringDark}
}
`.toHexColors()
    : lightData
      ? `
:root:root {
  ${graphStringLight}
}
`.toHexColors()
      : darkData
        ? `
:root:root {
  ${graphStringDark}
}
`.toHexColors()
        : ""
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

${fontString}

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
  .search {
    & > .search-button {
      font-size: 1rem;
      svg {
        color: var(--search-icon-color, var(--text-muted, var(--darkgray)));
        stroke: var(--search-icon-color, var(--text-muted, var(--darkgray)));
      }
    }
    & > .search-container {
      & > .search-space {
          margin: 12vh auto;
        & > input {
          margin-bottom: 0;
          border-bottom: none;
          font-size: 1.1rem;
        }
        & > * {
          background: transparent;
          margin-bottom: 0;
          box-shadow: none;
        }
        & > .search-layout {
          &.display-results {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          & .highlight {
            background-color: var(--quartz-text-highlight)
          }
          & > .results-container {
            & .result-card {
              @media all and not ($mobile) {
                display: flex;
                &.no-match {
                  display: block;
                }
              }
              &:has(~ .result-card:hover),
              &:has(~ .result-card:focus),
              &:has(~ .result-card.focus) {
                background-color: unset;
              }
              & > ul > li > p {
                background-color: transparent;
              }
            }
          }
        }
      }
    }
  }



  @media all and not ($desktop) {
    .page > #quartz-body div.sidebar.right {
      background-color: transparent;
    }
  }

  @media all and ($desktop) {
    .page > #quartz-body {
      div.center {
        min-width: calc(100% - 3rem);
        max-width: calc(100% - 3rem);
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      footer {
        padding: 0 1.5rem;
      }
    }
  }

  @media all and ($tablet) {
    .page > #quartz-body {
      padding-left: 0;
      padding-right: 0;

      div.center {
        min-width: calc(100% - 3rem);
        max-width: calc(100% - 3rem);
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      div.sidebar.left {
        padding-left: 2rem;
      }

      div.sidebar.right,
      footer {
        padding: 0 1.5rem;
      }
    }
  }

  @media all and ($mobile) {
    .page > #quartz-body {
      padding: 0;

      div.center {
        min-width: calc(100% - 3rem);
        max-width: calc(100% - 3rem);
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      div.sidebar.left,
      div.sidebar.left:has(.explorer) {
        padding-left: 1rem;
        padding-right: 1.5rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
      }
      div.sidebar.right,
      footer {
        padding: 0 1.5rem;
      }

      .explorer .explorer-content {
        width: 100vw;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
    }
  }
}
`;

  // Remove --lightningcss-light and --lightningcss-dark from variables
  resultScss = resultScss.replaceAll("--lightningcss-light, ", "");
  resultScss = resultScss.replaceAll("--lightningcss-dark, ", "");
  // Write the result to the target file
  writeFileSync(targetFile, resultScss, "utf8");
  console.log(`Generated SCSS for theme: ${theme}`);
});
