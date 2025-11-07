import {
  initializeDb,
  closeDb,
  preparedStatements,
  getStyle,
  getAllVariables,
} from "./database/driver.js";
import { config } from "./config.js";
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
  mkdirSync,
} from "fs";
import getManifestCollection from "../../extensions/manifest.mjs";
import getThemeCollection from "../../extensions/themelist.mjs";
import {
  isDarkTheme,
  isLightTheme,
  sanitizeFilenamePreservingEmojis as sanitize,
  getFonts,
  getExtras,
} from "../../util/util.mjs";
import {
  dark as defaultDark,
  light as defaultLight,
} from "./default-styles.js";
import postcss from "postcss";
import calc from "postcss-calc";
import postcssColorMixFunction from "@csstools/postcss-color-mix-function";
import postcssColorConverter from "postcss-color-converter";
import postcssMergeLonghand from "postcss-merge-longhand";
import postcssScss from "postcss-scss";
import { compileString } from "sass";

let themeName;
let optionSetName = "default";
let mode;

initializeDb();

const themeCollection = getThemeCollection();

themeCollection.forEach((manifest) => {
  const [name, variation] = manifest.name.split(".");
  themeName = `${sanitize(name)}${variation ? `.${sanitize(variation)}` : ""}`;

  // Create necessary directories
  if (!existsSync(`./runner/results/${themeName}`)) {
    mkdirSync(`./runner/results/${themeName}`);
  }
  if (!existsSync(`./themes/${themeName}`)) {
    mkdirSync(`./themes/${themeName}`);
  }
  if (!existsSync(`./extras/themes/${themeName}`)) {
    mkdirSync(`./extras/themes/${themeName}`);
  }
  if (!existsSync(`./extras/themes/${themeName}/_index.scss`)) {
    writeFileSync(`./extras/themes/${themeName}/_index.scss`, "", "utf8");
  }
  if (!existsSync(`./extras/themes/${themeName}/publish.css`)) {
    writeFileSync(`./extras/themes/${themeName}/publish.css`, "", "utf8");
  }

  // Build mappings for each mode
  const quartzMappings = {};
  const publishMappings = {};
  const bodyVariables = { dark: {}, light: {} };

  manifest.modes.forEach((m) => {
    mode = m;
    console.log(`Processing theme: ${themeName} (${mode})`);

    if (!quartzMappings[mode]) quartzMappings[mode] = {};
    if (!publishMappings[mode]) publishMappings[mode] = {};

    // Get all CSS variables from body selector
    const isDarkMode = mode === "dark";
    const vars = getAllVariables(themeName, optionSetName, isDarkMode, "body");
    if (isDarkMode) {
      bodyVariables.dark = vars;
    } else {
      bodyVariables.light = vars;
    }

    config.forEach((mapping) => {
      if (mapping.quartzSelector) {
        if (!quartzMappings[mode][mapping.quartzSelector]) {
          quartzMappings[mode][mapping.quartzSelector] = {};
        }
        mapping.properties.forEach((property) => {
          quartzMappings[mode][mapping.quartzSelector][property] =
            getStyleFromDatabase(
              // mapping.quartzSelector,
              mapping.obsidianSelector,
              property,
              mapping.obsidianSelector,
            );
        });
      }
      if (mapping.publishSelector) {
        if (!publishMappings[mode][mapping.publishSelector]) {
          publishMappings[mode][mapping.publishSelector] = {};
        }
        mapping.properties.forEach((property) => {
          publishMappings[mode][mapping.publishSelector][property] =
            getStyleFromDatabase(
              // mapping.publishSelector,
              mapping.obsidianSelector,
              property,
              mapping.obsidianSelector,
            );
        });
      }
    });

    console.log(`Finished processing theme: ${themeName} (${mode})`);
  });

  // Generate CSS from mappings
  generateAndWriteCSS(
    manifest,
    themeName,
    quartzMappings,
    publishMappings,
    bodyVariables,
  );
});

closeDb();

// --- Utilities ---

// Helper to merge longhand properties into shorthand and optimize CSS
function mergeLonghandProperties(css, syntax = "scss") {
  try {
    const postcssOptions = { from: undefined };

    if (syntax === "scss") {
      postcssOptions.syntax = postcssScss;
    }

    const processor = postcss()
      .use(postcssMergeLonghand())
      .use(calc({ preserve: false })); // Resolve calc() where possible
    //.use(postcssColorConverter({ outputColorFormat: "hex" })); // Convert colors to hex

    const result = processor.process(css, postcssOptions).css;
    return result;
  } catch (e) {
    console.warn("Warning: Could not optimize CSS properties:", e.message);
    return css;
  }
}

function insertExtras(manifest, themeName) {
  const basePath = `./extras/themes/${themeName}`;
  const files = ["_index.scss", ...(manifest.extras || [])];

  let result = "";

  // append file contents
  files.forEach((file) => {
    if (!existsSync(basePath)) {
      mkdirSync(basePath, "", "utf8");
    }
    if (!existsSync(`${basePath}/${file}`)) {
      writeFileSync(`${basePath}/${file}`, "", "utf8");
    }
    const contents = readFileSync(`${basePath}/${file}`, "utf8");
    if (contents && contents.length > 0) {
      result += contents + "\n";
    }
  });

  return result;
}

function generateAndWriteCSS(
  manifest,
  themeName,
  quartzMappings,
  publishMappings,
  bodyVariables,
) {
  const darkData = quartzMappings.dark || null;
  const lightData = quartzMappings.light || null;
  const darkPublishData = publishMappings.dark || null;
  const lightPublishData = publishMappings.light || null;

  const targetFile = `./runner/results/${themeName}/_index.scss`;
  const targetPublishFile = `./runner/results/${themeName}/publish.css`;

  const colorTargets = [
    "color",
    "background-color",
    "background",
    "border-color",
    "border-block-start-color",
    "border-block-end-color",
    "border-inline-start-color",
    "border-inline-end-color",
    "border-bottom-color",
    "border-top-color",
    "border-left-color",
    "border-right-color",
    // "box-shadow",
    "caret-color",
    "column-rule-color",
    "outline-color",
    // "text-color",
    "text-decoration-color",
    "text-emphasis-color",
  ];

  let graphColors = { dark: {}, light: {} };
  let codeColors = { dark: {}, light: {} };
  const graphMapping = {
    "--quartz-graph-line": "--light",
    "--quartz-graph-node": ["--gray", "--darkgray"],
    "--quartz-graph-node-unresolved": "--lightgray",
    "--quartz-graph-text": "--dark",
    "--quartz-graph-node-focused": "--secondary",
    "--quartz-graph-node-tag": "--tertiary",
    "--quartz-graph-node-attachment": "--highlight",
  };

  const data = {};
  const dataPublish = {};

  // Combine the two objects for Quartz
  if (darkData && lightData) {
    for (const key of Object.keys(darkData)) {
      data[key] = {};
      for (const [target, value] of Object.entries(darkData[key])) {
        if (colorTargets.includes(target)) {
          if (darkData[key][target] === lightData[key][target]) {
            data[key][target] = darkData[key][target];
          } else if (
            key === "&[data-slug]" &&
            [
              "color",
              "background",
              "background-color",
              "background-images",
            ].includes(target)
          ) {
            data[key][target] =
              `light-dark(${lightData[key][target]}, ${darkData[key][target]}) !important`;
          } else {
            data[key][target] =
              `light-dark(${lightData[key][target]}, ${darkData[key][target]})`;
          }
        } else if (target.startsWith("--quartz-graph")) {
          if (Array.isArray(graphMapping[target])) {
            graphMapping[target].forEach((mapped) => {
              graphColors["dark"][mapped] = darkData[key][target];
              graphColors["light"][mapped] = lightData[key][target];
            });
          } else if (!graphMapping[target]) {
            console.warn(
              `Warning: Unmapped graph color target "${target}" in theme "${themeName}". Please update the graphMapping object in compile.js.`,
            );
          } else {
            graphColors["dark"][graphMapping[target]] = darkData[key][target];
            graphColors["light"][graphMapping[target]] = lightData[key][target];
          }
        } else if (target.startsWith("--code-")) {
          codeColors["dark"][target] = darkData[key][target];
          codeColors["light"][target] = lightData[key][target];
        } else {
          data[key][target] = darkData[key][target];
        }
      }
    }
    // Add keys that are only in lightData
    for (const key of Object.keys(lightData)) {
      data[key] = data[key] || {};
      for (const [target, value] of Object.entries(lightData[key])) {
        if (data[key][target]) continue;
        data[key][target] = lightData[key][target];
      }
    }
  } else if (darkData) {
    for (const key of Object.keys(darkData)) {
      data[key] = {};
      for (const [target, value] of Object.entries(darkData[key])) {
        data[key][target] = value;
      }
    }
  } else if (lightData) {
    for (const key of Object.keys(lightData)) {
      data[key] = {};
      for (const [target, value] of Object.entries(lightData[key])) {
        data[key][target] = value;
      }
    }
  }

  // Combine for Publish
  if (darkPublishData && lightPublishData) {
    for (const key of Object.keys(darkPublishData)) {
      dataPublish[key] = {};
      for (const [target, value] of Object.entries(darkPublishData[key])) {
        if (colorTargets.includes(target)) {
          if (darkPublishData[key][target] === lightPublishData[key][target]) {
            dataPublish[key][target] = darkPublishData[key][target];
          } else {
            dataPublish[key][target] =
              `light-dark(${lightPublishData[key][target]}, ${darkPublishData[key][target]})`;
          }
        } else {
          dataPublish[key][target] = darkPublishData[key][target];
        }
      }
    }
    for (const key of Object.keys(lightPublishData)) {
      dataPublish[key] = dataPublish[key] || {};
      for (const [target, value] of Object.entries(lightPublishData[key])) {
        if (dataPublish[key][target]) continue;
        dataPublish[key][target] = lightPublishData[key][target];
      }
    }
  } else if (darkPublishData) {
    for (const key of Object.keys(darkPublishData)) {
      dataPublish[key] = {};
      for (const [target, value] of Object.entries(darkPublishData[key])) {
        dataPublish[key][target] = value;
      }
    }
  } else if (lightPublishData) {
    for (const key of Object.keys(lightPublishData)) {
      dataPublish[key] = {};
      for (const [target, value] of Object.entries(lightPublishData[key])) {
        dataPublish[key][target] = value;
      }
    }
  }

  // Get fonts
  const fonts =
    manifest.fonts && manifest.fonts.length > 0
      ? manifest.fonts
      : ["avenir", "inter", "source-code-pro"];
  let fontString = "";
  fonts.forEach((font) => {
    const fontPath = `./extras/fonts/${font}.scss`;
    if (existsSync(fontPath)) {
      fontString += readFileSync(fontPath, "utf8");
    }
  });

  // Build variable strings from body CSS variables
  // For Quartz: Only include --code-* and --graph-* variables
  // For Publish: Include ALL variables
  let bodyVarsStringDarkQuartz = "";
  let bodyVarsStringLightQuartz = "";
  let bodyVarsStringDarkPublish = "";
  let bodyVarsStringLightPublish = "";

  if (Object.keys(bodyVariables.dark).length > 0) {
    for (const [key, value] of Object.entries(bodyVariables.dark)) {
      // For Publish: include all variables
      bodyVarsStringDarkPublish += `  ${key}: ${value};\n`;
      // bodyVarsStringDarkPublish += `  ${key}: ${value} !important;\n`;

      // For Quartz: only include --code-* and --graph-* variables
      if (isIncludedVariable(key)) {
        bodyVarsStringDarkQuartz += `  ${key}: ${value}${key.startsWith("--callout-") ? "" : " !important"};\n`;
      }
    }
  }

  if (Object.keys(bodyVariables.light).length > 0) {
    for (const [key, value] of Object.entries(bodyVariables.light)) {
      // For Publish: include all variables
      bodyVarsStringLightPublish += `  ${key}: ${value} !important;\n`;

      // For Quartz: only include --code-* and --graph-* variables
      if (isIncludedVariable(key)) {
        bodyVarsStringLightQuartz += `  ${key}: ${value} !important;\n`;
      }
    }
  }

  // Generate Quartz SCSS
  // Note: We skip toHexColors() on the colorSchemeSection because some themes have malformed
  // CSS values (e.g., "hsl(23025%95%)" instead of "hsl(230, 25%, 95%)") that cause postcss
  // to hang indefinitely. Since these are CSS variables being injected as-is, conversion isn't necessary.
  const colorSchemeSection =
    lightData && darkData
      ? `
:root:root {
${bodyVarsStringLightQuartz}
  --quartz-icon-color: currentColor;
}
:root:root[saved-theme="dark"] {
${bodyVarsStringDarkQuartz}
  --quartz-icon-color: currentColor;
}
`
      : lightData
        ? `
:root:root {
${bodyVarsStringLightQuartz}
  --quartz-icon-color: currentColor;
}
`
        : darkData
          ? `
:root:root {
${bodyVarsStringDarkQuartz}
  --quartz-icon-color: currentColor;
}
`
          : "";

  let resultScss = `
@use "../variables.scss" as *;

:root {
  ${lightData && darkData ? "color-scheme: light dark;" : lightData ? "color-scheme: light;" : darkData ? "color-scheme: dark;" : ""}
  font-size: 16px;
}

${colorSchemeSection}

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

  // Add CSS rules from data
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
  --current-page-slug: attr(data-slug raw-string);
`;

  // Add static styles (from compile.old.js lines 466-850)
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
    .page > div#quartz-body div.sidebar.right {
      background-color: transparent;
      border-left: none;
    }
  }

  @media all and ($desktop) {
    .page > #quartz-body {
      div.center,
      footer {
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

      div.center,
      footer {
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
    .page > div#quartz-body div.sidebar.left {
      background-color: transparent;
      border-right: none;
    }
    .page > #quartz-body {
      padding: 0;

      div.center,
      footer {
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
        width: 100%;
        max-width: 100%;
      }
      div.sidebar.right,
      footer {
        padding: 0 1.5rem;
      }
      footer {
        min-width: auto;
      }

      .explorer .explorer-content {
        width: 100vw;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
    .page-title {
      display: none;
    }
  }

  .callout.is-collapsed .callout-content>:first-child {
    margin-top: -4rem;
  }

  figure[data-rehype-pretty-code-figure] pre,
  pre {
    background-color: var(--code-background);
    white-space: pre;

    & > code {
      overflow-x: auto;

      span[style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"] {
        color: var(--code-value) !important;
      }
      span[style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"] {
        color: var(--code-function) !important;
      }
      span[style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"] {
        color: var(--code-string) !important;
      }
      span[style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"] {
        color: var(--code-property) !important;
      }
      span[style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"] {
        color: var(--code-normal) !important;
      }
      span[style="--shiki-light:#586069;--shiki-dark:#D1D5DA;"] {
        color: var(--code-punctuation) !important;
      }
      span[style="--shiki-light:#F6F8FA;--shiki-dark:#2F363D;"] {
        color: var(--code-comment) !important;
      }
      span[style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"] {
        color: var(--code-comment) !important;
      }
      span[style="--shiki-light:#22863A;--shiki-dark:#85E89D;"] {
        color: var(--code-tag) !important;
      }
      span[style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"] {
        color: var(--code-important) !important;
      }
      span[style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;"] {
        color: var(--text-operator) !important;
      }
      span[style="--shiki-light:#D73A49;--shiki-dark:#F97583;"] {
        color: var(--code-keyword) !important;
      }

      background-color: transparent; 
      color: var(--code-normal);
    }
  }

  blockquote.callout {
    .callout-title > .callout-title-inner > p {
      color: var(--color);
    }
    &[data-callout] {
      --color: rgb(var(--callout-info));
    }
    &[data-callout="note"] {
      --color: rgb(var(--callout-default));
    }
    &[data-callout="abstract"] {
      --color: rgb(var(--callout-summary));
    }
    &[data-callout="info"] {
      --color: rgb(var(--callout-info));
    }
    &[data-callout="todo"] {
      --color: rgb(var(--callout-todo));
    }
    &[data-callout="tip"] {
      --color: rgb(var(--callout-tip));
    }
    &[data-callout="success"] {
      --color: rgb(var(--callout-success));
    }
    &[data-callout="question"] {
      --color: rgb(var(--callout-question));
    }
    &[data-callout="warning"] {
      --color: rgb(var(--callout-warning));
    }
    &[data-callout="failure"] {
      --color: rgb(var(--callout-fail));
    }
    &[data-callout="danger"] {
      --color: rgb(var(--callout-bug));
    }
    &[data-callout="bug"] {
      --color: rgb(var(--callout-bug));
    }
    &[data-callout="example"] {
      --color: rgb(var(--callout-example));
    }
    &[data-callout="quote"] {
      --color: rgb(var(--callout-quote));
    }
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

:root[reader-mode="on"] {
  body[data-slug] {
    &:not(:has(.sidebar:hover)) {
      background-color: transparent;
    }
    .sidebar.left,
    .sidebar.right {
      opacity: 1 !important;
      background-color: transparent !important;
      border-color: transparent !important;
      & > * {
        opacity: 0 !important;
        transition: opacity .2s;
      }
      &:hover {
        background-color: revert-layer !important;
        border-color: revert-layer !important;
      }
      &:hover > * {
        opacity: 1 !important;
      }
    }
  }
}

${insertExtras(manifest, themeName)}
`;

  // Remove lightningcss variables
  resultScss = resultScss.replaceAll("--lightningcss-light, ", "");
  resultScss = resultScss.replaceAll("--lightningcss-dark, ", "");

  // Merge longhand properties into shorthand for Quartz SCSS
  resultScss = mergeLonghandProperties(resultScss, "scss");

  // Generate Publish CSS
  let resultPublishScss = `

${fontString}
`;

  // Add body.theme-dark and body.theme-light sections with CSS variables
  if (darkPublishData && lightPublishData) {
    // Both dark and light modes
    resultPublishScss += `
body.theme-light {
${bodyVarsStringLightPublish}}

body.theme-dark {
${bodyVarsStringDarkPublish}}
`;
  } else if (lightPublishData) {
    // Light mode only
    resultPublishScss += `
body.theme-light {
${bodyVarsStringLightPublish}}
`;
  } else if (darkPublishData) {
    // Dark mode only
    resultPublishScss += `
body.theme-dark {
${bodyVarsStringDarkPublish}}
`;
  }

  resultPublishScss += `
body {
${
  lightPublishData && darkPublishData
    ? ""
    : `
  .site-body-left-column-site-theme-toggle {
    display: none;
  }
`
}`;

  for (const [key, value] of Object.entries(dataPublish)) {
    const values = Object.entries(value)
      .map(([k, v]) => `${k}: ${v.replaceAll('"??", ', "")};`)
      .join("\n  ");
    resultPublishScss += `
  ${key} {
    ${values}
  }
`;
  }

  resultPublishScss += `
}
`;

  // Compile Publish to CSS
  try {
    resultPublishScss = compileString(resultPublishScss).css;
  } catch (e) {
    console.error(`Error compiling Publish CSS for ${themeName}:`, e.message);
  }

  // Merge longhand properties into shorthand for Publish CSS
  resultPublishScss = mergeLonghandProperties(resultPublishScss, "css");

  // Write files
  writeFileSync(targetFile, resultScss, "utf8");
  writeFileSync(targetPublishFile, resultPublishScss, "utf8");
  console.log(`Generated Styles for theme: ${themeName}`);
}

function getStyleFromDatabase(selector, property, fallbackSelector) {
  return (
    getStyle(themeName, optionSetName, mode === "dark", selector, property) ??
    fallbackStyle(fallbackSelector, property)
  );
}

function fallbackStyle(selector, property) {
  const tag = (selector.split(/(?=[\.\#\[])/)[0] ?? "div").toUpperCase(); // Get the tag name before any class, id, or attribute
  return mode === "dark"
    ? defaultDark[tag]?.[property] || "inherit"
    : defaultLight[tag]?.[property] || "inherit";
}

function isIncludedVariable(key) {
  const includedPrefixes = [
    "--callout-",
    "--checkbox-",
    "--code-",
    "--collapse-icon-color",
    "--graph-",
    "--icon-",
  ];
  for (const prefix of includedPrefixes) {
    if (key.startsWith(prefix)) {
      return true;
    }
  }
  return false;
}
