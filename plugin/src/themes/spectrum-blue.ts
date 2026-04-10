import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "spectrum-blue",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono", "roboto"],
  },
  dark: {
    base: `:root:root {
  --accent-1: rgb(0, 255, 140) !important;
  --background-elements-color: black !important;
  --background-primary: #222222 !important;
  --background-secondary: #1b1b1b !important;
  --bases-cards-background: #222222 !important;
  --bases-table-cell-background-active: #222222 !important;
  --bases-table-header-background: #222222 !important;
  --bases-table-row-background-hover: rgb(31, 31, 31) !important;
  --bases-table-summary-background: #222222 !important;
  --bodyFont: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(12, 255, 174) !important;
  --border-background: black !important;
  --canvas-background: #222222 !important;
  --caret-color: rgb(237, 237, 237) !important;
  --checkbox-border-color: rgb(75, 148, 194) !important;
  --checkbox-border-color-hover: rgb(140, 203, 255) !important;
  --checkbox-color: rgb(75, 148, 194) !important;
  --checkbox-color-hover: rgb(140, 203, 255) !important;
  --checkbox-marker-color: #222222 !important;
  --code-normal: rgb(245, 152, 131) !important;
  --codeFont: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --color-var: rgb(0, 255, 140) !important;
  --dark: rgb(237, 237, 237) !important;
  --darkgray: rgb(237, 237, 237) !important;
  --default-font: "JetBrains Mono", monospace !important;
  --divider-color: rgb(60, 60, 60) !important;
  --divider-color-hover: rgb(12, 99, 137) !important;
  --file-header-background: #222222 !important;
  --file-header-background-focused: #222222 !important;
  --file-header-font: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: rgb(237, 237, 237) !important;
  --font-interface: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --graph-line: rgb(42, 61, 74) !important;
  --graph-node: rgb(19, 90, 137) !important;
  --graph-node-focused: rgb(82, 130, 159) !important;
  --graph-node-unresolved: rgb(51, 56, 59) !important;
  --graph-text: rgb(237, 237, 237) !important;
  --gray: rgb(237, 237, 237) !important;
  --h1-color: rgb(98, 255, 116) !important;
  --h1-line-height: 3rem !important;
  --h1-size: 30pt !important;
  --h2-color: rgb(98, 255, 187) !important;
  --h2-line-height: 3rem !important;
  --h2-size: 25pt !important;
  --h3-color: rgb(111, 250, 255) !important;
  --h3-line-height: 3rem !important;
  --h3-size: 22pt !important;
  --h4-color: rgb(39, 172, 255) !important;
  --h4-line-height: 3rem !important;
  --h4-size: 20pt !important;
  --h5-color: rgb(68, 90, 255) !important;
  --h5-line-height: 3rem !important;
  --h5-size: 16pt !important;
  --h6-color: rgb(161, 98, 255) !important;
  --h6-line-height: 3rem !important;
  --h6-size: 12pt !important;
  --headerFont: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 0.625rem !important;
  --heading-text-color: #fff !important;
  --icon-color-focused: rgb(91, 149, 197) !important;
  --icon-color-hover: rgb(64, 120, 155) !important;
  --indentation-guide-color: rgb(61, 61, 61) !important;
  --inline-title-color: rgb(98, 255, 116) !important;
  --inline-title-line-height: 3rem !important;
  --inline-title-size: 30pt !important;
  --italic-color: rgb(84, 238, 255) !important;
  --light: #222222 !important;
  --lightgray: #1b1b1b !important;
  --link-color: rgb(85, 162, 255) !important;
  --link-color-hover: rgb(50, 233, 253) !important;
  --link-unresolved-color: rgb(101, 142, 169) !important;
  --list-marker-color: rgb(75, 148, 194) !important;
  --menu-background: #1b1b1b !important;
  --metadata-input-font: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(237, 237, 237) !important;
  --metadata-label-font: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #222222 !important;
  --nav-heading-color: rgb(237, 237, 237) !important;
  --nav-heading-color-hover: rgb(237, 237, 237) !important;
  --nav-indentation-guide-color: rgb(61, 61, 61) !important;
  --nav-item-color-active: rgb(140, 203, 255) !important;
  --nav-item-color-hover: rgb(170, 212, 238) !important;
  --nav-item-color-selected: rgb(237, 237, 237) !important;
  --nav-item-weight-active: 600 !important;
  --nav-item-weight-hover: 300 !important;
  --p-spacing: .25rem !important;
  --pdf-background: #222222 !important;
  --pdf-page-background: #222222 !important;
  --pdf-sidebar-background: #222222 !important;
  --pill-color-hover: rgb(237, 237, 237) !important;
  --prompt-background: #222222 !important;
  --ribbon-background: black !important;
  --ribbon-background-collapsed: #222222 !important;
  --scrollbar-background: black !important;
  --search-result-background: #222222 !important;
  --setting-group-heading-color: rgb(237, 237, 237) !important;
  --status-bar-background: #1b1b1b !important;
  --status-bar-border-color: rgb(60, 60, 60) !important;
  --suggestion-background: #222222 !important;
  --tab-background-active: #222222 !important;
  --tab-container-background: #1b1b1b !important;
  --tab-outline-color: rgb(60, 60, 60) !important;
  --tab-switcher-background: #1b1b1b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1b1b1b, transparent) !important;
  --tab-text-color-focused-active-current: rgb(237, 237, 237) !important;
  --table-background: rgb(31, 31, 31) !important;
  --table-column-alt-background: rgb(31, 31, 31) !important;
  --table-header-background: rgb(31, 31, 31) !important;
  --table-header-color: rgb(237, 237, 237) !important;
  --table-row-alt-background: rgb(31, 31, 31) !important;
  --table-row-alt-background-hover: rgb(31, 31, 31) !important;
  --table-row-background-hover: rgb(31, 31, 31) !important;
  --text-normal: rgb(237, 237, 237) !important;
  --titleFont: "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(25, 25, 25) !important;
  --titlebar-text-color-focused: rgb(237, 237, 237) !important;
  --vault-profile-color: rgb(237, 237, 237) !important;
  --vault-profile-color-hover: rgb(237, 237, 237) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 27, 27);
  color: rgb(237, 237, 237);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(237, 237, 237);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(31, 31, 31);
}

html body .bases-table thead th {
  color: rgb(237, 237, 237);
}

html body .canvas-node {
  border-color: rgb(237, 237, 237);
}

html body .canvas-node-content {
  color: rgb(237, 237, 237);
}

html body .canvas-node-file {
  color: rgb(237, 237, 237);
}

html body .canvas-node-group {
  border-color: rgb(237, 237, 237);
}

html body .canvas-sidebar {
  background-color: rgb(27, 27, 27);
  border-color: rgb(237, 237, 237);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 27, 27);
  color: rgb(237, 237, 237);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(60, 60, 60);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 27, 27);
  border-left-color: rgb(60, 60, 60);
  color: rgb(237, 237, 237);
}

html body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(237, 237, 237);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(12, 255, 174);
  outline: rgb(12, 255, 174) none 0px;
  text-decoration-color: rgb(12, 255, 174);
}

html body .page article p > em, html em {
  color: rgb(84, 238, 255);
  outline: rgb(84, 238, 255) none 0px;
  text-decoration-color: rgb(84, 238, 255);
}

html body .page article p > i, html i {
  color: rgb(84, 238, 255);
  outline: rgb(84, 238, 255) none 0px;
  text-decoration-color: rgb(84, 238, 255);
}

html body .page article p > strong, html strong {
  color: rgb(12, 255, 174);
  outline: rgb(12, 255, 174) none 0px;
  text-decoration-color: rgb(12, 255, 174);
}

html body .text-highlight {
  color: rgb(237, 237, 237);
  outline: rgb(237, 237, 237) none 0px;
  text-decoration-color: rgb(237, 237, 237);
}

html body del {
  color: rgb(237, 237, 237);
  outline: rgb(237, 237, 237) none 0px;
  text-decoration-color: rgb(237, 237, 237);
}

html body h1.article-title {
  color: rgb(237, 237, 237);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(75, 148, 194);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(75, 148, 194);
  border-color: rgb(75, 148, 194);
}

html body p {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 162, 255);
  outline: rgb(85, 162, 255) none 0px;
  text-decoration-color: rgb(85, 162, 255);
}

html body a.internal.broken {
  color: rgb(101, 142, 169);
  outline: rgb(101, 142, 169) none 0px;
}`,
    lists: `html body dd {
  color: rgb(237, 237, 237);
}

html body dt {
  color: rgb(237, 237, 237);
}

html body ol > li {
  color: rgb(237, 237, 237);
}

html body ol.overflow {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body ul > li {
  color: rgb(237, 237, 237);
}

html body ul.overflow {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body table {
  color: rgb(237, 237, 237);
  margin-top: 4px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(31, 31, 31);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(31, 31, 31);
}

html body td {
  color: rgb(237, 237, 237);
}

html body th {
  color: rgb(237, 237, 237);
}

html body tr {
  background-color: rgb(31, 31, 31);
}`,
    code: `html body code {
  border-bottom-color: rgb(245, 152, 131);
  border-left-color: rgb(245, 152, 131);
  border-right-color: rgb(245, 152, 131);
  border-top-color: rgb(245, 152, 131);
  color: rgb(245, 152, 131);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(237, 237, 237);
}`,
    images: `html body audio {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body figcaption {
  color: rgb(237, 237, 237);
}

html body figure {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body img {
  border-bottom-color: rgb(98, 255, 116);
  border-left-color: rgb(98, 255, 116);
  border-right-color: rgb(98, 255, 116);
  border-top-color: rgb(98, 255, 116);
}

html body video {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html body .transclude {
  border-bottom-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body .transclude-inner {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(75, 148, 194);
  border-left-color: rgb(75, 148, 194);
  border-right-color: rgb(75, 148, 194);
  border-top-color: rgb(75, 148, 194);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  color: rgb(237, 237, 237);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
}

html body .search > .search-container > .search-space > * {
  color: rgb(237, 237, 237);
  outline: rgb(237, 237, 237) none 0px;
  text-decoration-color: rgb(237, 237, 237);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(237, 237, 237);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(237, 237, 237);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(237, 237, 237);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(237, 237, 237);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h1 {
  color: rgb(98, 255, 116);
}

html body h2 {
  color: rgb(98, 255, 187);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(98, 255, 116);
}

html body h3 {
  color: rgb(111, 250, 255);
}

html body h4 {
  color: rgb(39, 172, 255);
}

html body h5 {
  color: rgb(68, 90, 255);
}

html body h6 {
  color: rgb(161, 98, 255);
}

html body hr {
  border-bottom-color: rgb(60, 60, 60);
  border-left-color: rgb(60, 60, 60);
  border-right-color: rgb(60, 60, 60);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(61, 61, 61);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(237, 237, 237);
}`,
    footer: `html body footer {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(60, 60, 60);
  border-left-color: rgb(60, 60, 60);
  border-right-color: rgb(60, 60, 60);
  border-top-color: rgb(60, 60, 60);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(237, 237, 237);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body li.section-li > .section .meta {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html body .navigation-progress {
  background-color: rgb(27, 27, 27);
}

html body .page-header h2.page-title {
  color: rgb(237, 237, 237);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(237, 237, 237);
}

html body details {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body input[type=text] {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  border-bottom-color: rgb(245, 152, 131);
  border-left-color: rgb(245, 152, 131);
  border-right-color: rgb(245, 152, 131);
  border-top-color: rgb(245, 152, 131);
  color: rgb(245, 152, 131);
}

html body progress {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

html body sub {
  color: rgb(237, 237, 237);
}

html body summary {
  color: rgb(237, 237, 237);
}

html body sup {
  color: rgb(237, 237, 237);
}`,
  },
  light: {},
};
