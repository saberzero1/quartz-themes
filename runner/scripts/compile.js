import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
} from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
  getFonts,
  getExtras,
} from "../../util/util.mjs";
import postcss from "postcss";
import calc from "postcss-calc";
import postcssColorMixFunction from "@csstools/postcss-color-mix-function";
import postcssColorConverter from "postcss-color-converter";

// TODO: background-color on body is spilling over if the screen is too wide.

// https://stackoverflow.com/a/64090995
// input: h as an angle in [0,360] and s,l in [0,1] - output: r,g,b in [0,1]
function hsl2rgb(h, s, l) {
  let a = s * Math.min(l, 1 - l);
  let f = (n, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}

function insertExtras(manifest) {
  const theme = sanitize(manifest.name);
  const basePath = `./extras/themes/${theme}`;
  const files = ["_index.scss", ...(getExtras(theme) || [])];

  let result = "";

  // append file contents
  files.forEach((file) => {
    if (!existsSync(basePath)) {
      mkdirSync(basePath, "", "utf8");
    }
    if (!existsSync(`${basePath}/${file}`)) {
      writeFileSync(`${basePath}/${file}`, "", "utf8");
    }
    const contents = readFileSync(`${basePath}/${file}`);
    if (contents && contents.length > 0) {
      result += contents + "\n";
    }
  });

  return result.toHexColors();
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
  if (!existsSync(`./runner/results/${theme}`)) {
    mkdirSync(`./runner/results/${theme}`);
  }
  if (!existsSync(`./extras/themes/${theme}/_index.scss`)) {
    mkdirSync(`./extras/themes/${theme}`);
    writeFileSync(`./extras/themes/${theme}/_index.scss`, "", "utf8");
  }

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

${
  lightData && darkData
    ? ""
    : `
.darkmode {
  display: none;
}
`
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
          border-top-left-radius: inherit;
          border-top-right-radius: inherit;
          font-size: 1.1rem;
          &:has(+ :not(.display-results)) {
            border-radius: inherit;
          }
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

  .explorer {
    @media all and ($mobile) {
      &:not(.collapsed) > .explorer-content {
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
      }
    }
    .explorer-content {
      .folder-container {
        --folder-closed-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path></svg>');
        --folder-open-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"></path></svg>');

        text-overflow: ellipsis;
        position: relative;

        @media all and ($mobile) {
          padding-inline-start: 0.5rem;
          padding-inline-end: 0rem;
          border-radius: 0.25rem;
        }
        & > svg {
          opacity: 0.001;
          position: absolute;
        }
        &:before {
          width: 1rem;
          height: 1rem;
          min-width: 1rem;
          min-height: 1rem;
          display: flex;
          align-self: center;
          background: var(--quartz-icon-color);
          content: '';
        }
        & > div {
          width: 100%;
        }
        &:hover {
          font-size: 1rem;
          line-height: 1.5rem;
          background-color: var(--nav-item-background-hover);
          border-radius: 0.25rem;
        }
      }
      li:has(> .folder-outer:not(.open)) > .folder-container:before {
        background: var(--collapse-icon-color-collapsed, var(--quartz-icon-color));
        mask-image: var(--folder-closed-icon);
        -webkit-mask-image: var(--folder-closed-icon);
      }
      li:has(> .folder-outer.open) > .folder-container:before {
        background: var(--collapse-icon-color, var(--quartz-icon-color));
        mask-image: var(--folder-open-icon);
        -webkit-mask-image: var(--folder-open-icon);
      }
      ul.explorer-ul li {
        text-overflow: ellipsis;
        position: relative;

        a {
          display: flex;
          color: inherit;
          font-size: 1rem;
          line-height: 1.5rem;
          padding: inherit;

          &.active,
          &:not(.folder-title):hover {
            font-size: 1rem;
            line-height: 1.5rem;
            background-color: var(--nav-item-background-hover);
            border-radius: 0.25rem;
          }
          &[data-for$="/index"] {
            padding-inline-start: 0.5rem;
            padding-inline-end: 0;
          }
          padding-inline-start: 0;

          @media all and ($mobile) {
            padding-inline-start: 0.5rem;
            padding-inline-end: 0.5rem;
            &[data-for$="/index"] {
              padding-inline-end: 0.5rem;
            }
          }
        }
        > a:before {
          --file-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>');
          width: 1rem;
          height: 1rem;
          min-width: 1rem;
          min-height: 1rem;
          content: '';
          display: flex;
          align-self: center;
          background: var(--quartz-icon-color);
          mask-image: var(--file-icon);
          -webkit-mask-image: var(--file-icon);
          margin-inline-end: 0.5rem;
        }
      }
    }
  }

  /* ICONS */
  button.readermode {
    & > svg {
      display: none;
    }
    /* lucide book-open icon */
    --readermode-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stb3Blbi1pY29uIGx1Y2lkZS1ib29rLW9wZW4iPjxwYXRoIGQ9Ik0xMiA3djE0Ii8+PHBhdGggZD0iTTMgMThhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNWE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMSA0LTRoNWExIDEgMCAwIDEgMSAxdjEzYTEgMSAwIDAgMS0xIDFoLTZhMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAtMy0zeiIvPjwvc3ZnPg==');
    background: var(--quartz-icon-color) !important;
    mask-image: var(--readermode-icon);
    -webkit-mask-image: var(--readermode-icon);
    width: 24px;
    height: 24px;
  }

  button.global-graph-icon {
    & > svg {
      display: none;
    }
    /* lucide git-fork icon */
    --graph-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdC1mb3JrLWljb24gbHVjaWRlLWdpdC1mb3JrIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjE4IiByPSIzIi8+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjMiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjMiLz48cGF0aCBkPSJNMTggOXYyYzAgLjYtLjQgMS0xIDFIN2MtLjYgMC0xLS40LTEtMVY5Ii8+PHBhdGggZD0iTTEyIDEydjMiLz48L3N2Zz4=');
    background: var(--quartz-icon-color) !important;
    mask-image: var(--graph-icon);
    -webkit-mask-image: var(--graph-icon);
    width: 24px;
    height: 24px;
  }

  button.darkmode {
    & > svg {
      display: none !important;
    }
    /* lucide moon icon */
    --moon-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vb24taWNvbiBsdWNpZGUtbW9vbiI+PHBhdGggZD0iTTEyIDNhNiA2IDAgMCAwIDkgOSA5IDkgMCAxIDEtOS05WiIvPjwvc3ZnPg==');
    /* lucide sun icon */
    --sun-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1bi1pY29uIGx1Y2lkZS1zdW4iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQiLz48cGF0aCBkPSJNMTIgMnYyIi8+PHBhdGggZD0iTTEyIDIwdjIiLz48cGF0aCBkPSJtNC45MyA0LjkzIDEuNDEgMS40MSIvPjxwYXRoIGQ9Im0xNy42NiAxNy42NiAxLjQxIDEuNDEiLz48cGF0aCBkPSJNMiAxMmgyIi8+PHBhdGggZD0iTTIwIDEyaDIiLz48cGF0aCBkPSJtNi4zNCAxNy42Ni0xLjQxIDEuNDEiLz48cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiLz48L3N2Zz4=');
    background: var(--quartz-icon-color) !important;
    width: 24px;
    height: 24px;
  }

  .explorer svg,
  button.toc-header .fold,
  .global-graph-icon,
  .readermode,
  .darkmode {
    color: var(--quartz-icon-color);
    stroke: var(--quartz-icon-color);
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
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }

  .callout.is-collapsed .callout-content>:first-child {
    margin-top: -4rem;
  }
}

:root[saved-theme="light"] {
  button.darkmode {
    mask-image: var(--sun-icon);
    -webkit-mask-image: var(--sun-icon);
  }
}

:root[saved-theme="dark"] {
  button.darkmode {
    mask-image: var(--moon-icon);
    -webkit-mask-image: var(--moon-icon);
  }
}

${insertExtras(manifest)}
`;

  // Remove --lightningcss-light and --lightningcss-dark from variables
  resultScss = resultScss.replaceAll("--lightningcss-light, ", "");
  resultScss = resultScss.replaceAll("--lightningcss-dark, ", "");
  // Write the result to the target file
  writeFileSync(targetFile, resultScss, "utf8");
  console.log(`Generated SCSS for theme: ${theme}`);
});
