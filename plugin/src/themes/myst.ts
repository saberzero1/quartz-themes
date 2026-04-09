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
  --background-primary: #1e1f22 !important;
  --bases-cards-background: #1e1f22 !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-table-cell-background-active: #1e1f22 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-header-background: #1e1f22 !important;
  --bases-table-summary-background: #1e1f22 !important;
  --bodyFont: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #90a939 !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-background: #1e1f22 !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: #bcbec4 !important;
  --checkbox-marker-color: #1e1f22 !important;
  --checkbox-radius: 0px !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #404348 !important;
  --code-normal: #bcbec4 !important;
  --code-radius: 0px !important;
  --codeFont: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #56a8f5 !important;
  --dark: #bcbec4 !important;
  --darkgray: #bcbec4 !important;
  --file-header-background: #1e1f22 !important;
  --file-header-background-focused: #1e1f22 !important;
  --flair-color: #bcbec4 !important;
  --font-mermaid: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Theme-Font, sans-serif, Arial' !important;
  --font-text: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Theme-Font, sans-serif !important;
  --footnote-radius: 0px !important;
  --graph-node-focused: #56a8f5 !important;
  --graph-text: #bcbec4 !important;
  --gray: #bcbec4 !important;
  --h1-color: #bcbec4 !important;
  --h2-color: #bcbec4 !important;
  --h3-color: #bcbec4 !important;
  --h4-color: #bcbec4 !important;
  --h5-color: #bcbec4 !important;
  --h6-color: #bcbec4 !important;
  --headerFont: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --icon-color-active: #56a8f5 !important;
  --icon-color-focused: #bcbec4 !important;
  --inline-title-color: #bcbec4 !important;
  --input-radius: 0px !important;
  --light: #1e1f22 !important;
  --link-color: #56a8f5 !important;
  --link-external-color: #56a8f5 !important;
  --link-unresolved-color: #56a8f5 !important;
  --list-marker-color-collapsed: #56a8f5 !important;
  --menu-radius: 0px !important;
  --metadata-input-text-color: #bcbec4 !important;
  --modal-background: #1e1f22 !important;
  --modal-radius: 0px !important;
  --myst-gradient-color1: #010199 !important;
  --myst-gradient-color2: #015d01 !important;
  --myst-gradient-color3: #580000 !important;
  --myst-gradient-color4: #000000 !important;
  --myst-header-line-color: rgba(201, 201, 201, 0.314) !important;
  --nav-heading-color: #bcbec4 !important;
  --nav-heading-color-hover: #bcbec4 !important;
  --nav-item-color-active: #bcbec4 !important;
  --nav-item-color-highlighted: #56a8f5 !important;
  --nav-item-color-hover: #bcbec4 !important;
  --nav-item-color-selected: #bcbec4 !important;
  --nav-item-radius: 0px !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #1e1f22 !important;
  --pdf-page-background: #1e1f22 !important;
  --pdf-sidebar-background: #1e1f22 !important;
  --pill-color-hover: #bcbec4 !important;
  --pill-color-remove-hover: #56a8f5 !important;
  --prompt-background: #1e1f22 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --ribbon-background-collapsed: #1e1f22 !important;
  --scrollbar-radius: 0px !important;
  --search-result-background: #1e1f22 !important;
  --secondary: #56a8f5 !important;
  --setting-group-heading-color: #bcbec4 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-radius: 0px !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --suggestion-background: #1e1f22 !important;
  --tab-background-active: #1e1f22 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-text-color-focused-active-current: #bcbec4 !important;
  --tab-text-color-focused-highlighted: #56a8f5 !important;
  --table-header-color: #bcbec4 !important;
  --tag-color: #56a8f5 !important;
  --tag-color-hover: #56a8f5 !important;
  --tertiary: #56a8f5 !important;
  --text-accent: #56a8f5 !important;
  --text-hightlight-bg: #f8f876 !important;
  --text-normal: #bcbec4 !important;
  --text-selection: #214283 !important;
  --titleFont: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-text-color-focused: #bcbec4 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #bcbec4 !important;
  --vault-profile-color-hover: #bcbec4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 31, 34);
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .canvas-sidebar {
  border-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(86, 168, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 31, 34);
  color: rgb(188, 190, 196);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(144, 169, 57);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 169, 57) none 0px;
  text-decoration-color: rgb(144, 169, 57);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 190, 196) none 0px;
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 190, 196) none 0px;
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(144, 169, 57);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 169, 57) none 0px;
  text-decoration-color: rgb(144, 169, 57);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(248, 248, 118);
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.737255 0.745098 0.768627 / 0.5);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.737255 0.745098 0.768627 / 0.5) none 0px;
  text-decoration-color: color(srgb 0.737255 0.745098 0.768627 / 0.5);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 0px;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(86, 168, 245);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 168, 245) none 0px;
  text-decoration-color: rgb(86, 168, 245);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(86, 168, 245);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 168, 245) none 0px;
  text-decoration-color: rgb(86, 168, 245);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(86, 168, 245);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 168, 245) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body dt {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body table {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 10px;
  width: 187.031px;
}

html[saved-theme="dark"] body td {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body th {
  color: rgb(188, 190, 196);
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(64, 67, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(64, 67, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(64, 67, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(64, 67, 72);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(188, 190, 196);
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(188, 190, 196);
  text-decoration-color: rgb(188, 190, 196);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 31, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 190, 196) none 0px;
  text-decoration-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(188, 190, 196);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(86, 168, 245);
}

html[saved-theme="dark"] body h1 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(188, 190, 196);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 31, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 34);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(188, 190, 196);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  border-top-left-radius: 0px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  color: rgb(188, 190, 196);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body .metadata {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body abbr {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(188, 190, 196);
  border-left-color: rgb(188, 190, 196);
  border-right-color: rgb(188, 190, 196);
  border-top-color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body sub {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body summary {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body sup {
  color: rgb(188, 190, 196);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(86, 168, 245);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #fff !important;
  --bases-cards-background: #fff !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-table-cell-background-active: #fff !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-header-background: #fff !important;
  --bases-table-summary-background: #fff !important;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --bodyFont: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #90a939 !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-background: #fff !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: #000 !important;
  --checkbox-marker-color: #fff !important;
  --checkbox-radius: 0px !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #efeded !important;
  --code-normal: #000 !important;
  --code-radius: 0px !important;
  --codeFont: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #4476e5 !important;
  --dark: #000 !important;
  --darkgray: #000 !important;
  --file-header-background: #fff !important;
  --file-header-background-focused: #fff !important;
  --flair-color: #000 !important;
  --font-mermaid: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Theme-Font, sans-serif, Arial' !important;
  --font-text: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Theme-Font, sans-serif !important;
  --footnote-radius: 0px !important;
  --graph-node-focused: #4476e5 !important;
  --graph-text: #000 !important;
  --gray: #000 !important;
  --h1-color: #000 !important;
  --h2-color: #000 !important;
  --h3-color: #000 !important;
  --h4-color: #000 !important;
  --h5-color: #000 !important;
  --h6-color: #000 !important;
  --headerFont: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --icon-color-active: #4476e5 !important;
  --icon-color-focused: #000 !important;
  --inline-title-color: #000 !important;
  --input-radius: 0px !important;
  --light: #fff !important;
  --link-color: #4476e5 !important;
  --link-external-color: #4476e5 !important;
  --link-unresolved-color: #4476e5 !important;
  --list-marker-color-collapsed: #4476e5 !important;
  --menu-radius: 0px !important;
  --metadata-input-text-color: #000 !important;
  --modal-background: #fff !important;
  --modal-radius: 0px !important;
  --myst-gradient-color1: #b0b0ff !important;
  --myst-gradient-color2: #fc7d7d !important;
  --myst-gradient-color3: #c77b7b !important;
  --myst-gradient-color4: #ffffff !important;
  --myst-header-line-color: rgba(0, 0, 0, 0.314) !important;
  --nav-heading-color: #000 !important;
  --nav-heading-color-hover: #000 !important;
  --nav-item-color-active: #000 !important;
  --nav-item-color-highlighted: #4476e5 !important;
  --nav-item-color-hover: #000 !important;
  --nav-item-color-selected: #000 !important;
  --nav-item-radius: 0px !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #fff !important;
  --pdf-page-background: #fff !important;
  --pdf-sidebar-background: #fff !important;
  --pill-color-hover: #000 !important;
  --pill-color-remove-hover: #4476e5 !important;
  --prompt-background: #fff !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --ribbon-background-collapsed: #fff !important;
  --scrollbar-radius: 0px !important;
  --search-result-background: #fff !important;
  --secondary: #4476e5 !important;
  --setting-group-heading-color: #000 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-radius: 0px !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --suggestion-background: #fff !important;
  --tab-background-active: #fff !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-text-color-focused-active-current: #000 !important;
  --tab-text-color-focused-highlighted: #4476e5 !important;
  --table-header-color: #000 !important;
  --tag-color: #4476e5 !important;
  --tag-color-hover: #4476e5 !important;
  --tertiary: #4476e5 !important;
  --text-accent: #4476e5 !important;
  --text-hightlight-bg: #f8f876 !important;
  --text-normal: #000 !important;
  --text-selection: #214283 !important;
  --titleFont: Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-text-color-focused: #000 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #000 !important;
  --vault-profile-color-hover: #000 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(68, 118, 229);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(144, 169, 57);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 169, 57) none 0px;
  text-decoration-color: rgb(144, 169, 57);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(144, 169, 57);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 169, 57) none 0px;
  text-decoration-color: rgb(144, 169, 57);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(248, 248, 118);
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: color(srgb 0 0 0 / 0.3);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0 0 0 / 0.3) none 0px;
  text-decoration-color: color(srgb 0 0 0 / 0.3);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 0px;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(68, 118, 229);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(68, 118, 229) none 0px;
  text-decoration-color: rgb(68, 118, 229);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(68, 118, 229);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(68, 118, 229) none 0px;
  text-decoration-color: rgb(68, 118, 229);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(68, 118, 229);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(68, 118, 229) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 10px;
  width: 187.031px;
}

html[saved-theme="light"] body td {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(239, 237, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(239, 237, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(239, 237, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(239, 237, 237);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(68, 118, 229);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `html[saved-theme="light"] body footer {
  border-top-left-radius: 0px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", Theme-Font, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(68, 118, 229);
}`,
  },
  extras: `/* Animated gradient background for headings */
@keyframes BackgroundGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.inline-title,
h1 {
  background: linear-gradient(
    132deg,
    var(--color-red) 0%,
    var(--color-orange) 20%,
    var(--color-yellow) 40%,
    var(--color-green) 60%,
    var(--color-cyan) 80%,
    var(--color-purple) 100%
  );
  background-size: 600% 600%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: BackgroundGradient 15s ease infinite;
}
`,
};
