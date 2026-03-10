import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mistymauve",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["arvo", "permanent-marker"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: #d8d9cf;
  --accent-l: 55%;
  --accent-s: 91%;
  --arvo-bold: "Arvo", serif;
  --background-modifier-active-hover: hsla(#d8d9cf, 91%, 55%, 0.1);
  --bases-table-border-color: #ffffff;
  --bases-table-cell-background-selected: hsla(#d8d9cf, 91%, 55%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(#d8d9cf, 91%, 55%);
  --blockquote-border-color: hsl(#d8d9cf, 91%, 55%);
  --callout-border-opacity: 0.7;
  --callout-radius: 20px;
  --checkbox-color: hsl(#d8d9cf, 91%, 55%);
  --checkbox-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --collapse-icon-color-collapsed: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --color-accent: hsl(#d8d9cf, 91%, 55%);
  --color-accent-1: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --color-accent-2: hsl(calc(#d8d9cf - 5), calc(91% * 1.05), calc(55% * 1.29));
  --color-accent-hsl: #d8d9cf, 91%, 55%;
  --color-bright-gray: #ededed;
  --color-light-carmine-pink: #e26868;
  --color-timberwolf: #d8d9cf;
  --color-tulip: #ff8787;
  --divider-color-hover: hsl(#d8d9cf, 91%, 55%);
  --embed-border-start: 2px solid hsl(#d8d9cf, 91%, 55%);
  --graph-node: #e26868;
  --graph-node-attachment: rgb(75, 75, 75);
  --graph-node-focused: #ff8787;
  --graph-node-unresolved: #d8d9cf;
  --graph-text: #e26868;
  --h1-color: #ededed;
  --h1-font: "Arvo", serif;
  --h1-size: 2em;
  --h1-weight: 400;
  --h2-color: #ededed;
  --h2-font: "Arvo", serif;
  --h2-size: 1.7em;
  --h2-weight: 400;
  --h3-color: #ededed;
  --h3-font: "Arvo", serif;
  --h3-size: 1.5em;
  --h3-weight: 400;
  --h4-color: #ededed;
  --h4-font: "Arvo", serif;
  --h4-size: 1.3em;
  --h4-weight: 400;
  --h5-color: #ededed;
  --h5-font: "Arvo", serif;
  --h5-size: 1.1em;
  --h5-weight: 400;
  --h6-color: #ededed;
  --h6-font: "Arvo", serif;
  --h6-size: 0.8em;
  --h6-weight: 400;
  --highlight: var(--text-highlight-bg);
  --icon-color-active: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --inline-title-color: #e26868;
  --inline-title-font: "Permanent Marker", cursive;
  --inline-title-size: 2.4em;
  --inline-title-weight: 400;
  --interactive-accent: hsl(#d8d9cf, 91%, 55%);
  --interactive-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --interactive-accent-hsl: #d8d9cf, 91%, 55%;
  --link-color: #ff8787;
  --link-color-hover: #e26868;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #ff8787;
  --link-external-color-hover: #e26868;
  --link-unresolved-color: color.mix(
    #d8d9cf,
    #e26868
  );
  --link-unresolved-decoration-color: color.mix(
    #d8d9cf,
    #e26868
  );
  --link-unresolved-opacity: 0.6;
  --list-marker-color-collapsed: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --nav-indentation-guide-width: 0em;
  --nav-item-background-active: #d8d9cf;
  --nav-item-background-selected: hsla(#d8d9cf, 91%, 55%, 0.15);
  --nav-item-color-active: #e26868;
  --nav-item-color-highlighted: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --nav-item-color-hover: #ff8787;
  --nav-item-padding: 0.25em;
  --nav-item-parent-padding: 0.25em;
  --permanent-marker: "Permanent Marker", cursive;
  --pill-color-remove-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --scrollbar-active-thumb-bg: #e26868;
  --scrollbar-bg: #d8d9cf;
  --scrollbar-thumb-bg: #ff8787;
  --search-icon-color: #ff8787;
  --secondary: var(--text-accent);
  --tab-outline-color: #e26868;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#d8d9cf, 91%, 55%);
  --tab-text-color-focused-active-current: #e26868;
  --tab-text-color-focused-highlighted: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --table-border-color: #ffffff;
  --table-drag-handle-background-active: hsl(#d8d9cf, 91%, 55%);
  --table-drag-handle-color-active: #ff8787;
  --table-header-border-color: #ffffff;
  --table-header-color: #e26868;
  --table-selection: hsla(#d8d9cf, 91%, 55%, 0.1);
  --table-selection-border-color: hsl(#d8d9cf, 91%, 55%);
  --tag-background: hsla(#d8d9cf, 91%, 55%, 0.1);
  --tag-background-hover: hsla(#d8d9cf, 91%, 55%, 0.2);
  --tag-border-color: hsla(#d8d9cf, 91%, 55%, 0.15);
  --tag-border-color-hover: hsla(#d8d9cf, 91%, 55%, 0.15);
  --tag-color: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --tag-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --text-accent-hover: hsl(calc(#d8d9cf - 5), calc(91% * 1.05), calc(55% * 1.29));
  --text-highlight-bg: #e26868;
  --text-on-accent: #ff8787;
  --text-on-accent-inverted: #ff8787;
  --text-selection: #e26868;
  --textHighlight: var(--text-highlight-bg);
  --vault-name-color: #e26868;
  --vault-name-color-hover: #ff8787;
  --vault-name-font-size: 1em;
  --quartz-icon-color: currentColor;
}`,
    typography: `body .text-highlight {
  background-color: rgb(226, 104, 104);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration: underline rgb(255, 135, 135);
  text-decoration-color: rgb(255, 135, 135);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration: rgb(255, 135, 135);
  text-decoration-color: rgb(255, 135, 135);
}

body a.internal.broken {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}`,
    tables: `body td {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body th {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(226, 104, 104);
}`,
    embeds: `body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}

body .transclude-inner {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(83, 223, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-right-color: rgba(83, 223, 221, 0.7);
  border-top-color: rgba(83, 223, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgba(168, 130, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(168, 130, 255, 0.7);
  border-right-color: rgba(168, 130, 255, 0.7);
  border-top-color: rgba(168, 130, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgba(233, 151, 63, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-right-color: rgba(233, 151, 63, 0.7);
  border-top-color: rgba(233, 151, 63, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-right-color: rgba(158, 158, 158, 0.7);
  border-top-color: rgba(158, 158, 158, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgba(68, 207, 110, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(68, 207, 110, 0.7);
  border-right-color: rgba(68, 207, 110, 0.7);
  border-top-color: rgba(68, 207, 110, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgba(83, 223, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-right-color: rgba(83, 223, 221, 0.7);
  border-top-color: rgba(83, 223, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgba(233, 151, 63, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-right-color: rgba(233, 151, 63, 0.7);
  border-top-color: rgba(233, 151, 63, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

body a.internal.tag-link::before {
  color: rgb(218, 218, 218);
}

body h1 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

body h2 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(226, 104, 104);
  font-family: "Permanent Marker", cursive;
}

body h3 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

body h4 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

body h5 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

body h6 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(216, 217, 207);
  border-bottom-color: rgb(226, 104, 104);
  border-left-color: rgb(226, 104, 104);
  border-right-color: rgb(226, 104, 104);
  border-top-color: rgb(226, 104, 104);
  color: rgb(226, 104, 104);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 135, 135);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: rgb(255, 135, 135);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 135, 135);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: rgb(255, 135, 135);
}

body .darkmode svg {
  color: rgb(255, 135, 135);
  stroke: rgb(255, 135, 135);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: #d8d9cf;
  --accent-l: 55%;
  --accent-s: 91%;
  --arvo-bold: "Arvo", serif;
  --background-modifier-active-hover: hsla(#d8d9cf, 91%, 55%, 0.1);
  --background-primary: #d8d9cf;
  --background-secondary: #ededed;
  --bases-cards-background: #d8d9cf;
  --bases-table-border-color: #000000;
  --bases-table-cell-background-active: #d8d9cf;
  --bases-table-cell-background-selected: hsla(#d8d9cf, 91%, 55%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --bases-table-header-background: #d8d9cf;
  --bases-table-summary-background: #d8d9cf;
  --blockquote-border-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --blur-background: color-mix(in srgb, #d8d9cf 65%, transparent) linear-gradient(#d8d9cf, color-mix(in srgb, #d8d9cf 65%, transparent));
  --callout-border-opacity: 0.7;
  --callout-radius: 20px;
  --canvas-background: #d8d9cf;
  --checkbox-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --checkbox-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --checkbox-marker-color: #d8d9cf;
  --collapse-icon-color-collapsed: hsl(#d8d9cf, 91%, 55%);
  --color-accent: hsl(#d8d9cf, 91%, 55%);
  --color-accent-1: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --color-accent-2: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --color-accent-hsl: #d8d9cf, 91%, 55%;
  --color-bright-gray: #ededed;
  --color-light-carmine-pink: #e26868;
  --color-timberwolf: #d8d9cf;
  --color-tulip: #ff8787;
  --divider-color-hover: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --embed-border-start: 2px solid hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --file-header-background: #d8d9cf;
  --file-header-background-focused: #d8d9cf;
  --graph-node: #e26868;
  --graph-node-attachment: #ededed;
  --graph-node-focused: #ff8787;
  --graph-node-unresolved: gray;
  --graph-text: #e26868;
  --h1-color: #ff8787;
  --h1-font: "Arvo", serif;
  --h1-size: 2em;
  --h1-weight: 400;
  --h2-color: #ff8787;
  --h2-font: "Arvo", serif;
  --h2-size: 1.7em;
  --h2-weight: 400;
  --h3-color: #ff8787;
  --h3-font: "Arvo", serif;
  --h3-size: 1.5em;
  --h3-weight: 400;
  --h4-color: #ff8787;
  --h4-font: "Arvo", serif;
  --h4-size: 1.3em;
  --h4-weight: 400;
  --h5-color: #ff8787;
  --h5-font: "Arvo", serif;
  --h5-size: 1.1em;
  --h5-weight: 400;
  --h6-color: #ff8787;
  --h6-font: "Arvo", serif;
  --h6-size: 0.8em;
  --h6-weight: 400;
  --highlight: var(--text-highlight-bg);
  --icon-color-active: hsl(#d8d9cf, 91%, 55%);
  --inline-title-color: #e26868;
  --inline-title-font: "Permanent Marker", cursive;
  --inline-title-size: 2.4em;
  --inline-title-weight: 400;
  --interactive-accent: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --interactive-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --interactive-accent-hsl: #d8d9cf, 91%, 55%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #ff8787;
  --link-color-hover: #e26868;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #ff8787;
  --link-external-color-hover: #e26868;
  --link-unresolved-color: color.mix(
    #d8d9cf,
    #e26868
  );
  --link-unresolved-decoration-color: color.mix(
    #d8d9cf,
    #e26868
  );
  --link-unresolved-opacity: 0.6;
  --list-marker-color-collapsed: hsl(#d8d9cf, 91%, 55%);
  --menu-background: #ededed;
  --modal-background: #d8d9cf;
  --nav-indentation-guide-width: 0em;
  --nav-item-background-active: #d8d9cf;
  --nav-item-background-selected: hsla(#d8d9cf, 91%, 55%, 0.15);
  --nav-item-color-active: #e26868;
  --nav-item-color-highlighted: hsl(#d8d9cf, 91%, 55%);
  --nav-item-color-hover: #ff8787;
  --nav-item-padding: 0.25em;
  --nav-item-parent-padding: 0.25em;
  --pdf-background: #d8d9cf;
  --pdf-page-background: #d8d9cf;
  --pdf-sidebar-background: #d8d9cf;
  --permanent-marker: "Permanent Marker", cursive;
  --pill-color-remove-hover: hsl(#d8d9cf, 91%, 55%);
  --prompt-background: #d8d9cf;
  --raised-background: color-mix(in srgb, #d8d9cf 65%, transparent) linear-gradient(#d8d9cf, color-mix(in srgb, #d8d9cf 65%, transparent));
  --ribbon-background: #ededed;
  --ribbon-background-collapsed: #d8d9cf;
  --scrollbar-active-thumb-bg: #e26868;
  --scrollbar-bg: #d8d9cf;
  --scrollbar-thumb-bg: #ff8787;
  --search-icon-color: #ff8787;
  --search-result-background: #d8d9cf;
  --secondary: var(--text-accent);
  --status-bar-background: #ededed;
  --suggestion-background: #d8d9cf;
  --tab-background-active: #d8d9cf;
  --tab-container-background: #ededed;
  --tab-outline-color: #e26868;
  --tab-switcher-background: #ededed;
  --tab-switcher-menubar-background: linear-gradient(to top, #ededed, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#d8d9cf, 91%, 55%);
  --tab-text-color-focused-active-current: #e26868;
  --tab-text-color-focused-highlighted: hsl(#d8d9cf, 91%, 55%);
  --table-border-color: #000000;
  --table-drag-handle-background-active: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --table-drag-handle-color-active: #ff8787;
  --table-header-border-color: #000000;
  --table-header-color: #e26868;
  --table-selection: hsla(#d8d9cf, 91%, 55%, 0.1);
  --table-selection-border-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075));
  --tag-background: hsla(#d8d9cf, 91%, 55%, 0.1);
  --tag-background-hover: hsla(#d8d9cf, 91%, 55%, 0.2);
  --tag-border-color: hsla(#d8d9cf, 91%, 55%, 0.15);
  --tag-border-color-hover: hsla(#d8d9cf, 91%, 55%, 0.15);
  --tag-color: hsl(#d8d9cf, 91%, 55%);
  --tag-color-hover: hsl(#d8d9cf, 91%, 55%);
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(#d8d9cf, 91%, 55%);
  --text-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15));
  --text-highlight-bg: #ff8787;
  --text-on-accent: #ff8787;
  --text-on-accent-inverted: #ff8787;
  --text-selection: #ff8787;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #ededed;
  --vault-name-color: #e26868;
  --vault-name-color-hover: #ff8787;
  --vault-name-font-size: 1em;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 237, 237);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(216, 217, 207);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 237, 237);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 237, 237);
}

body div#quartz-root {
  background-color: rgb(216, 217, 207);
}`,
    typography: `body .text-highlight {
  background-color: rgb(255, 135, 135);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration: underline rgb(255, 135, 135);
  text-decoration-color: rgb(255, 135, 135);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration: rgb(255, 135, 135);
  text-decoration-color: rgb(255, 135, 135);
}

body a.internal.broken {
  color: rgb(34, 34, 34);
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}`,
    lists: `body ol.overflow {
  background-color: rgb(216, 217, 207);
}

body ul.overflow {
  background-color: rgb(216, 217, 207);
}`,
    tables: `body td {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body th {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(226, 104, 104);
}`,
    embeds: `body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

body .transclude-inner {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(0, 191, 188, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-right-color: rgba(0, 191, 188, 0.7);
  border-top-color: rgba(0, 191, 188, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgba(120, 82, 238, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(120, 82, 238, 0.7);
  border-right-color: rgba(120, 82, 238, 0.7);
  border-top-color: rgba(120, 82, 238, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgba(236, 117, 0, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-right-color: rgba(236, 117, 0, 0.7);
  border-top-color: rgba(236, 117, 0, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-right-color: rgba(158, 158, 158, 0.7);
  border-top-color: rgba(158, 158, 158, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgba(8, 185, 78, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 185, 78, 0.7);
  border-right-color: rgba(8, 185, 78, 0.7);
  border-top-color: rgba(8, 185, 78, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgba(0, 191, 188, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-right-color: rgba(0, 191, 188, 0.7);
  border-top-color: rgba(0, 191, 188, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgba(236, 117, 0, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-right-color: rgba(236, 117, 0, 0.7);
  border-top-color: rgba(236, 117, 0, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(216, 217, 207);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 237, 237);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

body a.internal.tag-link::before {
  color: rgb(34, 34, 34);
}

body h1 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

body h2 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(226, 104, 104);
  font-family: "Permanent Marker", cursive;
}

body h3 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

body h4 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

body h5 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

body h6 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

body ::-webkit-scrollbar-corner {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

body ::-webkit-scrollbar-track {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(216, 217, 207);
  border-bottom-color: rgb(226, 104, 104);
  border-left-color: rgb(226, 104, 104);
  border-right-color: rgb(226, 104, 104);
  border-top-color: rgb(226, 104, 104);
  color: rgb(226, 104, 104);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 135, 135);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: rgb(255, 135, 135);
}`,
    footer: `body footer {
  background-color: rgb(237, 237, 237);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 135, 135);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-left-color: rgb(255, 135, 135);
  border-right-color: rgb(255, 135, 135);
  border-top-color: rgb(255, 135, 135);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  color: rgb(255, 135, 135);
}

body .darkmode svg {
  color: rgb(255, 135, 135);
  stroke: rgb(255, 135, 135);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(237, 237, 237);
}`,
  },
};
