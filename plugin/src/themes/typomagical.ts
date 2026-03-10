import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "typomagical",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["alegreya", "amiri", "bitter", "playfair-display", "spectral"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-l: 79% !important;
  --background-modifier-active-hover: rgba(183, 154, 249, 0.1) !important;
  --bases-table-cell-background-selected: rgba(183, 154, 249, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(183, 154, 249) !important;
  --blockquote-border-color: #dadada !important;
  --blockquote-border-thickness: 1px !important;
  --bodyFont: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --bold-weight: 600 !important;
  --checkbox-color: rgb(183, 154, 249) !important;
  --checkbox-color-hover: rgb(222, 211, 253) !important;
  --code-normal: #62d770 !important;
  --codeFont: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --collapse-icon-color-collapsed: rgb(222, 211, 253) !important;
  --color-accent: rgb(183, 154, 249) !important;
  --color-accent-1: rgb(222, 211, 253) !important;
  --color-accent-2: hsl(253, 92.4%, 101.91%) !important;
  --color-accent-hsl: 258, 88%, 79% !important;
  --divider-color-hover: rgb(183, 154, 249) !important;
  --embed-border-start: 2px solid rgb(183, 154, 249) !important;
  --file-header-font: '??', '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-default: "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-interface: '??', '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-links: "Alegreya SC", "Spectral", serif !important;
  --font-mermaid: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-print: '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, 'Arial' !important;
  --font-text: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-text-theme: "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-title: "Playfair Display" !important;
  --graph-node-focused: rgb(222, 211, 253) !important;
  --headerFont: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --heading-weight: 600 !important;
  --highlight: rgba(183, 154, 249, 0.1) !important;
  --icon-color-active: rgb(222, 211, 253) !important;
  --interactive-accent: rgb(183, 154, 249) !important;
  --interactive-accent-hover: rgb(222, 211, 253) !important;
  --interactive-accent-hsl: 258, 88%, 79% !important;
  --line-height-body: 1.45 !important;
  --line-height-headings: 1.2 !important;
  --link-color: rgb(222, 211, 253) !important;
  --link-color-hover: hsl(253, 92.4%, 101.91%) !important;
  --link-decoration: none !important;
  --link-external-color: #7fcae6 !important;
  --link-external-color-hover: #89ebe5 !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #d5aecf !important;
  --link-unresolved-decoration-color: rgba(183, 154, 249, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color-collapsed: rgb(222, 211, 253) !important;
  --metadata-input-font: '??', '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --metadata-label-font: '??', '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --modal-height: 75vh !important;
  --nav-item-background-selected: rgba(183, 154, 249, 0.15) !important;
  --nav-item-color-highlighted: rgb(222, 211, 253) !important;
  --pill-color-remove-hover: rgb(222, 211, 253) !important;
  --secondary: rgb(222, 211, 253) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(183, 154, 249) !important;
  --tab-text-color-focused-highlighted: rgb(222, 211, 253) !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: rgb(183, 154, 249) !important;
  --table-header-border-width: 0 !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: rgba(183, 154, 249, 0.1) !important;
  --table-selection-border-color: rgb(183, 154, 249) !important;
  --tag-background: rgba(183, 154, 249, 0.1) !important;
  --tag-background-hover: rgba(183, 154, 249, 0.2) !important;
  --tag-border-color: rgba(183, 154, 249, 0.15) !important;
  --tag-border-color-hover: rgba(183, 154, 249, 0.15) !important;
  --tag-color: #eeb662 !important;
  --tag-color-hover: #f7d865 !important;
  --tertiary: hsl(253, 92.4%, 101.91%) !important;
  --text-accent: rgb(222, 211, 253) !important;
  --text-accent-hover: hsl(253, 92.4%, 101.91%) !important;
  --text-selection: rgba(183, 154, 249, 0.33) !important;
  --textHighlight: rgba(183, 154, 249, 0.1) !important;
  --title-gradient-bottom: rgb(222, 211, 253) !important;
  --title-gradient-top: #dadada !important;
  --titleFont: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .page article p > em, em {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .page article p > i, i {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .page article p > strong, strong {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body del {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body p {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    links: `body a.external, footer a {
  color: rgb(127, 202, 230);
  font-family: "Alegreya SC", Spectral, serif;
  outline: rgb(127, 202, 230) none 0px;
  text-decoration: rgb(127, 202, 230);
  text-decoration-color: rgb(127, 202, 230);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(221, 211, 253);
  font-family: "Alegreya SC", Spectral, serif;
  outline: rgb(221, 211, 253) none 0px;
  text-decoration: rgb(221, 211, 253);
  text-decoration-color: rgb(221, 211, 253);
}

body a.internal.broken {
  color: rgb(213, 174, 207);
  font-family: "Alegreya SC", Spectral, serif;
  outline: rgb(213, 174, 207) none 0px;
  text-decoration: rgba(183, 154, 249, 0.3);
  text-decoration-color: rgba(183, 154, 249, 0.3);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    tables: `body table {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
  width: 188.859px;
}

body td {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
}

body th {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  vertical-align: bottom;
}`,
    code: `body code {
  border-bottom-color: rgb(98, 215, 112);
  border-left-color: rgb(98, 215, 112);
  border-right-color: rgb(98, 215, 112);
  border-top-color: rgb(98, 215, 112);
  color: rgb(98, 215, 112);
}`,
    images: `body figcaption {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    embeds: `body .transclude {
  border-left-color: rgb(183, 154, 249);
}

body .transclude-inner {
  border-left-color: rgb(183, 154, 249);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 16px;
  padding-top: 16px;
}

body .callout > .callout-content {
  padding-left: 32px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .search > .search-container > .search-space > * {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(183, 154, 249, 0.1);
  border-bottom-color: rgba(183, 154, 249, 0.15);
  border-left-color: rgba(183, 154, 249, 0.15);
  border-right-color: rgba(183, 154, 249, 0.15);
  border-top-color: rgba(183, 154, 249, 0.15);
  font-family: "Alegreya SC", Spectral, serif;
}

body a.internal.tag-link::before {
  color: rgb(238, 182, 98);
}

body h1 {
  font-family: "Playfair Display";
}

body h2 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h3 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h4 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h5 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h6 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    scrollbars: `body .callout {
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    footer: `body footer {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    misc: `body .metadata {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .metadata-properties {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .page-header h2.page-title {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body input[type=text] {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body kbd {
  border-bottom-color: rgb(98, 215, 112);
  border-left-color: rgb(98, 215, 112);
  border-right-color: rgb(98, 215, 112);
  border-top-color: rgb(98, 215, 112);
  color: rgb(98, 215, 112);
}`,
  },
  light: {
    base: `:root:root {
  --blockquote-border-color: #222222 !important;
  --blockquote-border-thickness: 1px !important;
  --bodyFont: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --bold-weight: 600 !important;
  --code-normal: #4db95a !important;
  --codeFont: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --file-header-font: '??', '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-default: "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-interface: '??', '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-links: "Alegreya SC", "Spectral", serif !important;
  --font-mermaid: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-print: '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, 'Arial' !important;
  --font-text: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-text-theme: "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --font-title: "Playfair Display" !important;
  --headerFont: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --heading-weight: 600 !important;
  --line-height-body: 1.45 !important;
  --line-height-headings: 1.2 !important;
  --link-decoration: none !important;
  --link-external-color: #2f9bb7 !important;
  --link-external-color-hover: rgb(72, 191, 224) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #d5aecf !important;
  --link-unresolved-opacity: 1 !important;
  --metadata-input-font: '??', '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --metadata-label-font: '??', '??', '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --modal-height: 75vh !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-header-border-width: 0 !important;
  --table-row-last-border-width: 0 !important;
  --tag-background: #eeb662 !important;
  --tag-background-hover: #f7d865 !important;
  --tag-color: #222222 !important;
  --tag-color-hover: #222222 !important;
  --title-gradient-bottom: color-mix(in hsl, rgb(138, 92, 245), black) !important;
  --title-gradient-top: rgb(138, 92, 245) !important;
  --titleFont: '??', "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, "Spectral", -apple-system, BlinkMacSystemFont, "Segoe UI",
  	"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .page article p > em, em {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .page article p > i, i {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .page article p > strong, strong {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body del {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body p {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    links: `body a.external, footer a {
  color: rgb(47, 155, 183);
  font-family: "Alegreya SC", Spectral, serif;
  outline: rgb(47, 155, 183) none 0px;
  text-decoration: rgb(47, 155, 183);
  text-decoration-color: rgb(47, 155, 183);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "Alegreya SC", Spectral, serif;
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  color: rgb(213, 174, 207);
  font-family: "Alegreya SC", Spectral, serif;
  outline: rgb(213, 174, 207) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    tables: `body table {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
  width: 188.859px;
}

body td {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
}

body th {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  vertical-align: bottom;
}`,
    code: `body code {
  border-bottom-color: rgb(77, 185, 90);
  border-left-color: rgb(77, 185, 90);
  border-right-color: rgb(77, 185, 90);
  border-top-color: rgb(77, 185, 90);
  color: rgb(77, 185, 90);
}`,
    images: `body figcaption {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 16px;
  padding-top: 16px;
}

body .callout > .callout-content {
  padding-left: 32px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .search > .search-container > .search-space > * {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(238, 182, 98);
  font-family: "Alegreya SC", Spectral, serif;
}

body a.internal.tag-link::before {
  color: rgb(34, 34, 34);
}

body h1 {
  font-family: "Playfair Display";
}

body h2 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h3 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h4 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h5 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body h6 {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    scrollbars: `body .callout {
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    footer: `body footer {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}`,
    misc: `body .metadata {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .metadata-properties {
  font-family: "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif, Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body .page-header h2.page-title {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body input[type=text] {
  font-family: "??", "??", "??", Spectral, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", serif;
}

body kbd {
  border-bottom-color: rgb(77, 185, 90);
  border-left-color: rgb(77, 185, 90);
  border-right-color: rgb(77, 185, 90);
  border-top-color: rgb(77, 185, 90);
  color: rgb(77, 185, 90);
}`,
  },
};
