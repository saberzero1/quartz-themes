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
  --accent-h: #d8d9cf !important;
  --accent-l: 55% !important;
  --accent-s: 91% !important;
  --arvo-bold: "Arvo", serif !important;
  --background-modifier-active-hover: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --bases-table-border-color: #ffffff !important;
  --bases-table-cell-background-selected: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(#d8d9cf, 91%, 55%) !important;
  --blockquote-border-color: hsl(#d8d9cf, 91%, 55%) !important;
  --callout-border-opacity: 0.7;
  --callout-radius: 20px;
  --checkbox-color: hsl(#d8d9cf, 91%, 55%) !important;
  --checkbox-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --collapse-icon-color-collapsed: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --color-accent: hsl(#d8d9cf, 91%, 55%) !important;
  --color-accent-1: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --color-accent-2: hsl(calc(#d8d9cf - 5), calc(91% * 1.05), calc(55% * 1.29)) !important;
  --color-accent-hsl: #d8d9cf, 91%, 55% !important;
  --color-bright-gray: #ededed !important;
  --color-light-carmine-pink: #e26868 !important;
  --color-timberwolf: #d8d9cf !important;
  --color-tulip: #ff8787 !important;
  --divider-color-hover: hsl(#d8d9cf, 91%, 55%) !important;
  --embed-border-start: 2px solid hsl(#d8d9cf, 91%, 55%) !important;
  --graph-node: #e26868 !important;
  --graph-node-attachment: rgb(75, 75, 75) !important;
  --graph-node-focused: #ff8787 !important;
  --graph-node-unresolved: #d8d9cf !important;
  --graph-text: #e26868 !important;
  --h1-color: #ededed !important;
  --h1-font: "Arvo", serif !important;
  --h1-size: 2em !important;
  --h1-weight: 400 !important;
  --h2-color: #ededed !important;
  --h2-font: "Arvo", serif !important;
  --h2-size: 1.7em !important;
  --h2-weight: 400 !important;
  --h3-color: #ededed !important;
  --h3-font: "Arvo", serif !important;
  --h3-size: 1.5em !important;
  --h3-weight: 400 !important;
  --h4-color: #ededed !important;
  --h4-font: "Arvo", serif !important;
  --h4-size: 1.3em !important;
  --h4-weight: 400 !important;
  --h5-color: #ededed !important;
  --h5-font: "Arvo", serif !important;
  --h5-size: 1.1em !important;
  --h5-weight: 400 !important;
  --h6-color: #ededed !important;
  --h6-font: "Arvo", serif !important;
  --h6-size: 0.8em !important;
  --h6-weight: 400 !important;
  --highlight: #e26868 !important;
  --icon-color-active: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --inline-title-color: #e26868 !important;
  --inline-title-font: "Permanent Marker", cursive !important;
  --inline-title-size: 2.4em !important;
  --inline-title-weight: 400 !important;
  --interactive-accent: hsl(#d8d9cf, 91%, 55%) !important;
  --interactive-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --interactive-accent-hsl: #d8d9cf, 91%, 55% !important;
  --link-color: #ff8787 !important;
  --link-color-hover: #e26868 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #ff8787 !important;
  --link-external-color-hover: #e26868 !important;
  --link-unresolved-color: color.mix(
    #d8d9cf,
    #e26868
  ) !important;
  --link-unresolved-decoration-color: color.mix(
    #d8d9cf,
    #e26868
  ) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-marker-color-collapsed: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --nav-indentation-guide-width: 0em !important;
  --nav-item-background-active: #d8d9cf !important;
  --nav-item-background-selected: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --nav-item-color-active: #e26868 !important;
  --nav-item-color-highlighted: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --nav-item-color-hover: #ff8787 !important;
  --nav-item-padding: 0.25em !important;
  --nav-item-parent-padding: 0.25em !important;
  --permanent-marker: "Permanent Marker", cursive !important;
  --pill-color-remove-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --scrollbar-active-thumb-bg: #e26868 !important;
  --scrollbar-bg: #d8d9cf !important;
  --scrollbar-thumb-bg: #ff8787 !important;
  --search-icon-color: #ff8787 !important;
  --secondary: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --tab-outline-color: #e26868 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#d8d9cf, 91%, 55%) !important;
  --tab-text-color-focused-active-current: #e26868 !important;
  --tab-text-color-focused-highlighted: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --table-border-color: #ffffff !important;
  --table-drag-handle-background-active: hsl(#d8d9cf, 91%, 55%) !important;
  --table-drag-handle-color-active: #ff8787 !important;
  --table-header-border-color: #ffffff !important;
  --table-header-color: #e26868 !important;
  --table-selection: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --table-selection-border-color: hsl(#d8d9cf, 91%, 55%) !important;
  --tag-background: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --tag-background-hover: hsla(#d8d9cf, 91%, 55%, 0.2) !important;
  --tag-border-color: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --tag-border-color-hover: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --tag-color: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --tag-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --tertiary: hsl(calc(#d8d9cf - 5), calc(91% * 1.05), calc(55% * 1.29)) !important;
  --text-accent: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --text-accent-hover: hsl(calc(#d8d9cf - 5), calc(91% * 1.05), calc(55% * 1.29)) !important;
  --text-highlight-bg: #e26868 !important;
  --text-on-accent: #ff8787 !important;
  --text-on-accent-inverted: #ff8787 !important;
  --text-selection: #e26868 !important;
  --textHighlight: #e26868 !important;
  --vault-name-color: #e26868 !important;
  --vault-name-color-hover: #ff8787 !important;
  --vault-name-font-size: 1em !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(226, 104, 104);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration: underline rgb(255, 135, 135);
  text-decoration-color: rgb(255, 135, 135);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration: rgb(255, 135, 135);
  text-decoration-color: rgb(255, 135, 135);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}`,
    tables: `html[saved-theme="dark"] body td {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(226, 104, 104);
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(83, 223, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-right-color: rgba(83, 223, 221, 0.7);
  border-top-color: rgba(83, 223, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-color: rgba(168, 130, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(168, 130, 255, 0.7);
  border-right-color: rgba(168, 130, 255, 0.7);
  border-top-color: rgba(168, 130, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-color: rgba(251, 70, 76, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(251, 70, 76, 0.7);
  border-right-color: rgba(251, 70, 76, 0.7);
  border-top-color: rgba(251, 70, 76, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-color: rgba(233, 151, 63, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-right-color: rgba(233, 151, 63, 0.7);
  border-top-color: rgba(233, 151, 63, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-right-color: rgba(158, 158, 158, 0.7);
  border-top-color: rgba(158, 158, 158, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-color: rgba(68, 207, 110, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(68, 207, 110, 0.7);
  border-right-color: rgba(68, 207, 110, 0.7);
  border-top-color: rgba(68, 207, 110, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-color: rgba(83, 223, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(83, 223, 221, 0.7);
  border-right-color: rgba(83, 223, 221, 0.7);
  border-top-color: rgba(83, 223, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-color: rgba(233, 151, 63, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 151, 63, 0.7);
  border-right-color: rgba(233, 151, 63, 0.7);
  border-top-color: rgba(233, 151, 63, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body h1 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(226, 104, 104);
  font-family: "Permanent Marker", cursive;
}

html[saved-theme="dark"] body h3 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(237, 237, 237);
  font-family: Arvo, serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(2, 122, 255, 0.7);
  border-right-color: rgba(2, 122, 255, 0.7);
  border-top-color: rgba(2, 122, 255, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 135, 135);
  stroke: rgb(255, 135, 135);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: #d8d9cf !important;
  --accent-l: 55% !important;
  --accent-s: 91% !important;
  --arvo-bold: "Arvo", serif !important;
  --background-modifier-active-hover: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --background-primary: #d8d9cf !important;
  --background-secondary: #ededed !important;
  --bases-cards-background: #d8d9cf !important;
  --bases-table-border-color: #000000 !important;
  --bases-table-cell-background-active: #d8d9cf !important;
  --bases-table-cell-background-selected: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --bases-table-header-background: #d8d9cf !important;
  --bases-table-summary-background: #d8d9cf !important;
  --blockquote-border-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --blur-background: color-mix(in srgb, #d8d9cf 65%, transparent) linear-gradient(#d8d9cf, color-mix(in srgb, #d8d9cf 65%, transparent)) !important;
  --callout-border-opacity: 0.7;
  --callout-radius: 20px;
  --canvas-background: #d8d9cf !important;
  --checkbox-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --checkbox-color-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --checkbox-marker-color: #d8d9cf !important;
  --collapse-icon-color-collapsed: hsl(#d8d9cf, 91%, 55%) !important;
  --color-accent: hsl(#d8d9cf, 91%, 55%) !important;
  --color-accent-1: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --color-accent-2: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --color-accent-hsl: #d8d9cf, 91%, 55% !important;
  --color-bright-gray: #ededed !important;
  --color-light-carmine-pink: #e26868 !important;
  --color-timberwolf: #d8d9cf !important;
  --color-tulip: #ff8787 !important;
  --divider-color-hover: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --embed-border-start: 2px solid hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --file-header-background: #d8d9cf !important;
  --file-header-background-focused: #d8d9cf !important;
  --graph-node: #e26868 !important;
  --graph-node-attachment: #ededed !important;
  --graph-node-focused: #ff8787 !important;
  --graph-node-unresolved: gray !important;
  --graph-text: #e26868 !important;
  --h1-color: #ff8787 !important;
  --h1-font: "Arvo", serif !important;
  --h1-size: 2em !important;
  --h1-weight: 400 !important;
  --h2-color: #ff8787 !important;
  --h2-font: "Arvo", serif !important;
  --h2-size: 1.7em !important;
  --h2-weight: 400 !important;
  --h3-color: #ff8787 !important;
  --h3-font: "Arvo", serif !important;
  --h3-size: 1.5em !important;
  --h3-weight: 400 !important;
  --h4-color: #ff8787 !important;
  --h4-font: "Arvo", serif !important;
  --h4-size: 1.3em !important;
  --h4-weight: 400 !important;
  --h5-color: #ff8787 !important;
  --h5-font: "Arvo", serif !important;
  --h5-size: 1.1em !important;
  --h5-weight: 400 !important;
  --h6-color: #ff8787 !important;
  --h6-font: "Arvo", serif !important;
  --h6-size: 0.8em !important;
  --h6-weight: 400 !important;
  --highlight: #ff8787 !important;
  --icon-color-active: hsl(#d8d9cf, 91%, 55%) !important;
  --inline-title-color: #e26868 !important;
  --inline-title-font: "Permanent Marker", cursive !important;
  --inline-title-size: 2.4em !important;
  --inline-title-weight: 400 !important;
  --interactive-accent: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --interactive-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --interactive-accent-hsl: #d8d9cf, 91%, 55% !important;
  --light: #d8d9cf !important;
  --lightgray: #ededed !important;
  --link-color: #ff8787 !important;
  --link-color-hover: #e26868 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #ff8787 !important;
  --link-external-color-hover: #e26868 !important;
  --link-unresolved-color: color.mix(
    #d8d9cf,
    #e26868
  ) !important;
  --link-unresolved-decoration-color: color.mix(
    #d8d9cf,
    #e26868
  ) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-marker-color-collapsed: hsl(#d8d9cf, 91%, 55%) !important;
  --menu-background: #ededed !important;
  --modal-background: #d8d9cf !important;
  --nav-indentation-guide-width: 0em !important;
  --nav-item-background-active: #d8d9cf !important;
  --nav-item-background-selected: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --nav-item-color-active: #e26868 !important;
  --nav-item-color-highlighted: hsl(#d8d9cf, 91%, 55%) !important;
  --nav-item-color-hover: #ff8787 !important;
  --nav-item-padding: 0.25em !important;
  --nav-item-parent-padding: 0.25em !important;
  --pdf-background: #d8d9cf !important;
  --pdf-page-background: #d8d9cf !important;
  --pdf-sidebar-background: #d8d9cf !important;
  --permanent-marker: "Permanent Marker", cursive !important;
  --pill-color-remove-hover: hsl(#d8d9cf, 91%, 55%) !important;
  --prompt-background: #d8d9cf !important;
  --raised-background: color-mix(in srgb, #d8d9cf 65%, transparent) linear-gradient(#d8d9cf, color-mix(in srgb, #d8d9cf 65%, transparent)) !important;
  --ribbon-background: #ededed !important;
  --ribbon-background-collapsed: #d8d9cf !important;
  --scrollbar-active-thumb-bg: #e26868 !important;
  --scrollbar-bg: #d8d9cf !important;
  --scrollbar-thumb-bg: #ff8787 !important;
  --search-icon-color: #ff8787 !important;
  --search-result-background: #d8d9cf !important;
  --secondary: hsl(#d8d9cf, 91%, 55%) !important;
  --status-bar-background: #ededed !important;
  --suggestion-background: #d8d9cf !important;
  --tab-background-active: #d8d9cf !important;
  --tab-container-background: #ededed !important;
  --tab-outline-color: #e26868 !important;
  --tab-switcher-background: #ededed !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ededed, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#d8d9cf, 91%, 55%) !important;
  --tab-text-color-focused-active-current: #e26868 !important;
  --tab-text-color-focused-highlighted: hsl(#d8d9cf, 91%, 55%) !important;
  --table-border-color: #000000 !important;
  --table-drag-handle-background-active: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --table-drag-handle-color-active: #ff8787 !important;
  --table-header-border-color: #000000 !important;
  --table-header-color: #e26868 !important;
  --table-selection: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --table-selection-border-color: hsl(calc(#d8d9cf - 1), calc(91% * 1.01), calc(55% * 1.075)) !important;
  --tag-background: hsla(#d8d9cf, 91%, 55%, 0.1) !important;
  --tag-background-hover: hsla(#d8d9cf, 91%, 55%, 0.2) !important;
  --tag-border-color: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --tag-border-color-hover: hsla(#d8d9cf, 91%, 55%, 0.15) !important;
  --tag-color: hsl(#d8d9cf, 91%, 55%) !important;
  --tag-color-hover: hsl(#d8d9cf, 91%, 55%) !important;
  --tertiary: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --text-accent: hsl(#d8d9cf, 91%, 55%) !important;
  --text-accent-hover: hsl(calc(#d8d9cf - 3), calc(91% * 1.02), calc(55% * 1.15)) !important;
  --text-highlight-bg: #ff8787 !important;
  --text-on-accent: #ff8787 !important;
  --text-on-accent-inverted: #ff8787 !important;
  --text-selection: #ff8787 !important;
  --textHighlight: #ff8787 !important;
  --titlebar-background: #ededed !important;
  --vault-name-color: #e26868 !important;
  --vault-name-color-hover: #ff8787 !important;
  --vault-name-font-size: 1em !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(216, 217, 207);
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgb(255, 135, 135);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration: underline rgb(255, 135, 135);
  text-decoration-color: rgb(255, 135, 135);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 135, 135);
  outline: rgb(255, 135, 135) none 0px;
  text-decoration: rgb(255, 135, 135);
  text-decoration-color: rgb(255, 135, 135);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(34, 34, 34);
  outline: rgb(34, 34, 34) none 0px;
  text-decoration: rgb(34, 34, 34);
  text-decoration-color: rgb(34, 34, 34);
}`,
    tables: `html[saved-theme="light"] body td {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(226, 104, 104);
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(216, 217, 207);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(0, 191, 188, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-right-color: rgba(0, 191, 188, 0.7);
  border-top-color: rgba(0, 191, 188, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-color: rgba(120, 82, 238, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(120, 82, 238, 0.7);
  border-right-color: rgba(120, 82, 238, 0.7);
  border-top-color: rgba(120, 82, 238, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-color: rgba(233, 49, 71, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(233, 49, 71, 0.7);
  border-right-color: rgba(233, 49, 71, 0.7);
  border-top-color: rgba(233, 49, 71, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-color: rgba(236, 117, 0, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-right-color: rgba(236, 117, 0, 0.7);
  border-top-color: rgba(236, 117, 0, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(158, 158, 158, 0.7);
  border-right-color: rgba(158, 158, 158, 0.7);
  border-top-color: rgba(158, 158, 158, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-color: rgba(8, 185, 78, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 185, 78, 0.7);
  border-right-color: rgba(8, 185, 78, 0.7);
  border-top-color: rgba(8, 185, 78, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-color: rgba(0, 191, 188, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(0, 191, 188, 0.7);
  border-right-color: rgba(0, 191, 188, 0.7);
  border-top-color: rgba(0, 191, 188, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-color: rgba(236, 117, 0, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(236, 117, 0, 0.7);
  border-right-color: rgba(236, 117, 0, 0.7);
  border-top-color: rgba(236, 117, 0, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body h1 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(226, 104, 104);
  font-family: "Permanent Marker", cursive;
}

html[saved-theme="light"] body h3 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(255, 135, 135);
  font-family: Arvo, serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.7);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(8, 109, 221, 0.7);
  border-right-color: rgba(8, 109, 221, 0.7);
  border-top-color: rgba(8, 109, 221, 0.7);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(216, 217, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(216, 217, 207);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(237, 237, 237);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(255, 135, 135);
  stroke: rgb(255, 135, 135);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(237, 237, 237);
}`,
  },
};
