import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "myst",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/material-symbols-outlined", "s-core-dream-3-light"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #1e1f22;
  --bases-cards-background: #1e1f22;
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-table-cell-background-active: #1e1f22;
  --bases-table-container-border-radius: 0px;
  --bases-table-header-background: #1e1f22;
  --bases-table-summary-background: #1e1f22;
  --bodyFont: var(--font-text);
  --bold-color: #90a939;
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #1e1f22;
  --canvas-controls-radius: 0px;
  --caret-color: #bcbec4;
  --checkbox-marker-color: #1e1f22;
  --checkbox-radius: 0px;
  --clickable-icon-radius: 0px;
  --code-background: #404348;
  --code-normal: #bcbec4;
  --code-radius: 0px;
  --codeFont: var(--font-text);
  --collapse-icon-color-collapsed: #56a8f5;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --file-header-background: #1e1f22;
  --file-header-background-focused: #1e1f22;
  --flair-color: #bcbec4;
  --font-mermaid: '??', Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', Theme-Font, sans-serif, 'Arial';
  --font-text: '??', Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Theme-Font, sans-serif;
  --footnote-radius: 0px;
  --graph-node-focused: #56a8f5;
  --graph-text: #bcbec4;
  --gray: var(--text-normal);
  --h1-color: #bcbec4;
  --h2-color: #bcbec4;
  --h3-color: #bcbec4;
  --h4-color: #bcbec4;
  --h5-color: #bcbec4;
  --h6-color: #bcbec4;
  --headerFont: var(--font-text);
  --icon-color-active: #56a8f5;
  --icon-color-focused: #bcbec4;
  --inline-title-color: #bcbec4;
  --input-radius: 0px;
  --light: var(--background-primary);
  --link-color: #56a8f5;
  --link-external-color: #56a8f5;
  --link-unresolved-color: #56a8f5;
  --list-marker-color-collapsed: #56a8f5;
  --menu-radius: 0px;
  --metadata-input-text-color: #bcbec4;
  --modal-background: #1e1f22;
  --modal-radius: 0px;
  --myst-gradient-color1: #010199;
  --myst-gradient-color2: #015d01;
  --myst-gradient-color3: #580000;
  --myst-gradient-color4: #000000;
  --myst-header-line-color: rgba(201, 201, 201, 0.314);
  --nav-heading-color: #bcbec4;
  --nav-heading-color-hover: #bcbec4;
  --nav-item-color-active: #bcbec4;
  --nav-item-color-highlighted: #56a8f5;
  --nav-item-color-hover: #bcbec4;
  --nav-item-color-selected: #bcbec4;
  --nav-item-radius: 0px;
  --nav-tag-radius: 0px;
  --pdf-background: #1e1f22;
  --pdf-page-background: #1e1f22;
  --pdf-sidebar-background: #1e1f22;
  --pill-color-hover: #bcbec4;
  --pill-color-remove-hover: #56a8f5;
  --prompt-background: #1e1f22;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --ribbon-background-collapsed: #1e1f22;
  --scrollbar-radius: 0px;
  --search-result-background: #1e1f22;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #bcbec4;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-radius: 0px 0 0 0;
  --suggestion-background: #1e1f22;
  --tab-background-active: #1e1f22;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-text-color-focused-active-current: #bcbec4;
  --tab-text-color-focused-highlighted: #56a8f5;
  --table-header-color: #bcbec4;
  --tag-color: #56a8f5;
  --tag-color-hover: #56a8f5;
  --tertiary: var(--text-accent);
  --text-accent: #56a8f5;
  --text-hightlight-bg: #f8f876;
  --text-normal: #bcbec4;
  --text-selection: #214283;
  --titleFont: var(--font-text);
  --titlebar-text-color-focused: #bcbec4;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #bcbec4;
  --vault-profile-color-hover: #bcbec4;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(188, 190, 196);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(30, 31, 34);
  color: rgb(188, 190, 196);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(188, 190, 196);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(188, 190, 196);
}

body div#quartz-root {
  background-color: rgb(30, 31, 34);
  color: rgb(188, 190, 196);
}`,
    typography: `body .page article p > b, b {
  color: rgb(144, 169, 57);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 169, 57) none 0px;
  text-decoration: rgb(144, 169, 57);
  text-decoration-color: rgb(144, 169, 57);
}

body .page article p > em, em {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 190, 196) none 0px;
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body .page article p > i, i {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 190, 196) none 0px;
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body .page article p > strong, strong {
  color: rgb(144, 169, 57);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 169, 57) none 0px;
  text-decoration: rgb(144, 169, 57);
  text-decoration-color: rgb(144, 169, 57);
}

body .text-highlight {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 190, 196) none 0px;
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body del {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 190, 196) none 0px;
  text-decoration: line-through rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}`,
    links: `body a.external, footer a {
  color: rgb(86, 168, 245);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 168, 245) none 0px;
  text-decoration: underline rgb(86, 168, 245);
  text-decoration-color: rgb(86, 168, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(86, 168, 245);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 168, 245) none 0px;
  text-decoration: underline rgb(86, 168, 245);
  text-decoration-color: rgb(86, 168, 245);
}

body a.internal.broken {
  color: rgb(86, 168, 245);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 168, 245) none 0px;
}`,
    lists: `body dd {
  color: rgb(188, 190, 196);
}

body dt {
  color: rgb(188, 190, 196);
}

body ol > li {
  color: rgb(188, 190, 196);
}

body ol.overflow {
  background-color: rgb(30, 31, 34);
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body ul > li {
  color: rgb(188, 190, 196);
}

body ul.overflow {
  background-color: rgb(30, 31, 34);
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body table {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 10px;
  width: 187.031px;
}

body td {
  color: rgb(188, 190, 196);
}

body th {
  color: rgb(188, 190, 196);
}`,
    code: `body code {
  border-bottom-color: rgb(188, 190, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(64, 67, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(64, 67, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

body pre > code, pre:has(> code) {
  background-color: rgb(64, 67, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(64, 67, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body figcaption {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body img {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body video {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(188, 190, 196);
  color: rgb(188, 190, 196);
}

body .transclude {
  border-bottom-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body .transclude-inner {
  border-bottom-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='*'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='-'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='/'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='>'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='?'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='I'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='S'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='b'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='c'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='d'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='f'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='i'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='k'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='l'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='p'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='u'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body li.task-list-item[data-task='w'] {
  color: rgb(188, 190, 196);
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

body .search > .search-container > .search-space {
  background-color: rgb(30, 31, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 190, 196) none 0px;
  text-decoration: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(188, 190, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(188, 190, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(188, 190, 196);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(188, 190, 196);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(188, 190, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

body a.internal.tag-link::before {
  color: rgb(86, 168, 245);
}

body h1 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(188, 190, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `body footer {
  border-top-left-radius: 0px;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(188, 190, 196);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  color: rgb(188, 190, 196);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body ul.section-ul {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  color: rgb(188, 190, 196);
}

body .metadata {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page-header h2.page-title {
  color: rgb(188, 190, 196);
}

body abbr {
  color: rgb(188, 190, 196);
  text-decoration: underline dotted rgb(188, 190, 196);
}

body details {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body kbd {
  background-color: rgb(64, 67, 72);
  border-bottom-color: rgb(188, 190, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

body progress {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

body sub {
  color: rgb(188, 190, 196);
}

body summary {
  color: rgb(188, 190, 196);
}

body sup {
  color: rgb(188, 190, 196);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #fff;
  --bases-cards-background: #fff;
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-table-cell-background-active: #fff;
  --bases-table-container-border-radius: 0px;
  --bases-table-header-background: #fff;
  --bases-table-summary-background: #fff;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #90a939;
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #fff;
  --canvas-controls-radius: 0px;
  --caret-color: #000;
  --checkbox-marker-color: #fff;
  --checkbox-radius: 0px;
  --clickable-icon-radius: 0px;
  --code-background: #efeded;
  --code-normal: #000;
  --code-radius: 0px;
  --codeFont: var(--font-text);
  --collapse-icon-color-collapsed: #4476e5;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --file-header-background: #fff;
  --file-header-background-focused: #fff;
  --flair-color: #000;
  --font-mermaid: '??', Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', Theme-Font, sans-serif, 'Arial';
  --font-text: '??', Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Theme-Font, sans-serif;
  --footnote-radius: 0px;
  --graph-node-focused: #4476e5;
  --graph-text: #000;
  --gray: var(--text-normal);
  --h1-color: #000;
  --h2-color: #000;
  --h3-color: #000;
  --h4-color: #000;
  --h5-color: #000;
  --h6-color: #000;
  --headerFont: var(--font-text);
  --icon-color-active: #4476e5;
  --icon-color-focused: #000;
  --inline-title-color: #000;
  --input-radius: 0px;
  --light: var(--background-primary);
  --link-color: #4476e5;
  --link-external-color: #4476e5;
  --link-unresolved-color: #4476e5;
  --list-marker-color-collapsed: #4476e5;
  --menu-radius: 0px;
  --metadata-input-text-color: #000;
  --modal-background: #fff;
  --modal-radius: 0px;
  --myst-gradient-color1: #b0b0ff;
  --myst-gradient-color2: #fc7d7d;
  --myst-gradient-color3: #c77b7b;
  --myst-gradient-color4: #ffffff;
  --myst-header-line-color: rgba(0, 0, 0, 0.314);
  --nav-heading-color: #000;
  --nav-heading-color-hover: #000;
  --nav-item-color-active: #000;
  --nav-item-color-highlighted: #4476e5;
  --nav-item-color-hover: #000;
  --nav-item-color-selected: #000;
  --nav-item-radius: 0px;
  --nav-tag-radius: 0px;
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --pill-color-hover: #000;
  --pill-color-remove-hover: #4476e5;
  --prompt-background: #fff;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --ribbon-background-collapsed: #fff;
  --scrollbar-radius: 0px;
  --search-result-background: #fff;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #000;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-radius: 0px 0 0 0;
  --suggestion-background: #fff;
  --tab-background-active: #fff;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-text-color-focused-active-current: #000;
  --tab-text-color-focused-highlighted: #4476e5;
  --table-header-color: #000;
  --tag-color: #4476e5;
  --tag-color-hover: #4476e5;
  --tertiary: var(--text-accent);
  --text-accent: #4476e5;
  --text-hightlight-bg: #f8f876;
  --text-normal: #000;
  --text-selection: #214283;
  --titleFont: var(--font-text);
  --titlebar-text-color-focused: #000;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #000;
  --vault-profile-color-hover: #000;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(144, 169, 57);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 169, 57) none 0px;
  text-decoration: rgb(144, 169, 57);
  text-decoration-color: rgb(144, 169, 57);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(144, 169, 57);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 169, 57) none 0px;
  text-decoration: rgb(144, 169, 57);
  text-decoration-color: rgb(144, 169, 57);
}

body .text-highlight {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `body a.external, footer a {
  color: rgb(68, 118, 229);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(68, 118, 229) none 0px;
  text-decoration: underline rgb(68, 118, 229);
  text-decoration-color: rgb(68, 118, 229);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(68, 118, 229);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(68, 118, 229) none 0px;
  text-decoration: underline rgb(68, 118, 229);
  text-decoration-color: rgb(68, 118, 229);
}

body a.internal.broken {
  color: rgb(68, 118, 229);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(68, 118, 229) none 0px;
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 10px;
  width: 187.031px;
}

body td {
  color: rgb(0, 0, 0);
}

body th {
  color: rgb(0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(239, 237, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(239, 237, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(239, 237, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(239, 237, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body a.internal.tag-link::before {
  color: rgb(68, 118, 229);
}

body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `body footer {
  border-top-left-radius: 0px;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body kbd {
  background-color: rgb(239, 237, 237);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
