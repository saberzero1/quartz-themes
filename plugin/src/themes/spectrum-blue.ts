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
  --accent-1: rgb(0, 255, 140);
  --background-elements-color: black;
  --background-primary: #222222;
  --background-secondary: #1b1b1b;
  --bases-cards-background: #222222;
  --bases-table-cell-background-active: #222222;
  --bases-table-header-background: #222222;
  --bases-table-row-background-hover: rgb(31, 31, 31);
  --bases-table-summary-background: #222222;
  --bodyFont: var(--font-interface);
  --bold-color: rgb(12, 255, 174);
  --border-background: black;
  --canvas-background: #222222;
  --caret-color: rgb(237, 237, 237);
  --checkbox-border-color: rgb(75, 148, 194);
  --checkbox-border-color-hover: rgb(140, 203, 255);
  --checkbox-color: rgb(75, 148, 194);
  --checkbox-color-hover: rgb(140, 203, 255);
  --checkbox-marker-color: #222222;
  --code-normal: rgb(245, 152, 131);
  --codeFont: var(--font-interface);
  --color-var: rgb(0, 255, 140);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font: "JetBrains Mono", monospace;
  --divider-color: rgb(60, 60, 60);
  --divider-color-hover: rgb(12, 99, 137);
  --file-header-background: #222222;
  --file-header-background-focused: #222222;
  --file-header-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: rgb(237, 237, 237);
  --font-interface: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --graph-line: rgb(42, 61, 74);
  --graph-node: rgb(19, 90, 137);
  --graph-node-focused: rgb(82, 130, 159);
  --graph-node-unresolved: rgb(51, 56, 59);
  --graph-text: rgb(237, 237, 237);
  --gray: var(--text-normal);
  --h1-color: rgb(98, 255, 116);
  --h1-line-height: 3rem;
  --h1-size: 30pt;
  --h2-color: rgb(98, 255, 187);
  --h2-line-height: 3rem;
  --h2-size: 25pt;
  --h3-color: rgb(111, 250, 255);
  --h3-line-height: 3rem;
  --h3-size: 22pt;
  --h4-color: rgb(39, 172, 255);
  --h4-line-height: 3rem;
  --h4-size: 20pt;
  --h5-color: rgb(68, 90, 255);
  --h5-line-height: 3rem;
  --h5-size: 16pt;
  --h6-color: rgb(161, 98, 255);
  --h6-line-height: 3rem;
  --h6-size: 12pt;
  --headerFont: var(--font-interface);
  --heading-spacing: 0.625rem;
  --heading-text-color: #fff;
  --icon-color-focused: rgb(91, 149, 197);
  --icon-color-hover: rgb(64, 120, 155);
  --indentation-guide-color: rgb(61, 61, 61);
  --inline-title-color: rgb(98, 255, 116);
  --inline-title-line-height: 3rem;
  --inline-title-size: 30pt;
  --italic-color: rgb(84, 238, 255);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(85, 162, 255);
  --link-color-hover: rgb(50, 233, 253);
  --link-unresolved-color: rgb(101, 142, 169);
  --list-marker-color: rgb(75, 148, 194);
  --menu-background: #1b1b1b;
  --metadata-input-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(237, 237, 237);
  --metadata-label-font: '??', '??', "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #222222;
  --nav-heading-color: rgb(237, 237, 237);
  --nav-heading-color-hover: rgb(237, 237, 237);
  --nav-indentation-guide-color: rgb(61, 61, 61);
  --nav-item-color-active: rgb(140, 203, 255);
  --nav-item-color-hover: rgb(170, 212, 238);
  --nav-item-color-selected: rgb(237, 237, 237);
  --nav-item-weight-active: 600;
  --nav-item-weight-hover: 300;
  --p-spacing: .25rem;
  --pdf-background: #222222;
  --pdf-page-background: #222222;
  --pdf-sidebar-background: #222222;
  --pill-color-hover: rgb(237, 237, 237);
  --prompt-background: #222222;
  --ribbon-background: black;
  --ribbon-background-collapsed: #222222;
  --scrollbar-background: black;
  --search-result-background: #222222;
  --setting-group-heading-color: rgb(237, 237, 237);
  --status-bar-background: #1b1b1b;
  --status-bar-border-color: rgb(60, 60, 60);
  --suggestion-background: #222222;
  --tab-background-active: #222222;
  --tab-container-background: #1b1b1b;
  --tab-outline-color: rgb(60, 60, 60);
  --tab-switcher-background: #1b1b1b;
  --tab-switcher-menubar-background: linear-gradient(to top, #1b1b1b, transparent);
  --tab-text-color-focused-active-current: rgb(237, 237, 237);
  --table-background: rgb(31, 31, 31);
  --table-column-alt-background: rgb(31, 31, 31);
  --table-header-background: rgb(31, 31, 31);
  --table-header-color: rgb(237, 237, 237);
  --table-row-alt-background: rgb(31, 31, 31);
  --table-row-alt-background-hover: rgb(31, 31, 31);
  --table-row-background-hover: rgb(31, 31, 31);
  --text-normal: rgb(237, 237, 237);
  --titleFont: var(--font-interface);
  --titlebar-background: rgb(25, 25, 25);
  --titlebar-text-color-focused: rgb(237, 237, 237);
  --vault-profile-color: rgb(237, 237, 237);
  --vault-profile-color-hover: rgb(237, 237, 237);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 27, 27);
  color: rgb(237, 237, 237);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(237, 237, 237);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 27, 27);
  color: rgb(237, 237, 237);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(60, 60, 60);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 27, 27);
  border-left-color: rgb(60, 60, 60);
  color: rgb(237, 237, 237);
}

body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(237, 237, 237);
}`,
    typography: `body .page article p > b, b {
  color: rgb(12, 255, 174);
  outline: rgb(12, 255, 174) none 0px;
  text-decoration: rgb(12, 255, 174);
  text-decoration-color: rgb(12, 255, 174);
}

body .page article p > em, em {
  color: rgb(84, 238, 255);
  outline: rgb(84, 238, 255) none 0px;
  text-decoration: rgb(84, 238, 255);
  text-decoration-color: rgb(84, 238, 255);
}

body .page article p > i, i {
  color: rgb(84, 238, 255);
  outline: rgb(84, 238, 255) none 0px;
  text-decoration: rgb(84, 238, 255);
  text-decoration-color: rgb(84, 238, 255);
}

body .page article p > strong, strong {
  color: rgb(12, 255, 174);
  outline: rgb(12, 255, 174) none 0px;
  text-decoration: rgb(12, 255, 174);
  text-decoration-color: rgb(12, 255, 174);
}

body .text-highlight {
  color: rgb(237, 237, 237);
  outline: rgb(237, 237, 237) none 0px;
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body del {
  color: rgb(237, 237, 237);
  outline: rgb(237, 237, 237) none 0px;
  text-decoration: line-through rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body p {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(85, 162, 255);
  outline: rgb(85, 162, 255) none 0px;
  text-decoration: underline rgb(85, 162, 255);
  text-decoration-color: rgb(85, 162, 255);
}

body a.internal.broken {
  color: rgb(101, 142, 169);
  outline: rgb(101, 142, 169) none 0px;
}`,
    lists: `body dd {
  color: rgb(237, 237, 237);
}

body dt {
  color: rgb(237, 237, 237);
}

body ol > li {
  color: rgb(237, 237, 237);
}

body ol.overflow {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body ul > li {
  color: rgb(237, 237, 237);
}

body ul.overflow {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body table {
  color: rgb(237, 237, 237);
  margin-top: 4px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(31, 31, 31);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(31, 31, 31);
}

body td {
  color: rgb(237, 237, 237);
}

body th {
  color: rgb(237, 237, 237);
}

body tr {
  background-color: rgb(31, 31, 31);
}`,
    code: `body code {
  border-bottom-color: rgb(245, 152, 131);
  border-left-color: rgb(245, 152, 131);
  border-right-color: rgb(245, 152, 131);
  border-top-color: rgb(245, 152, 131);
  color: rgb(245, 152, 131);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(237, 237, 237);
}`,
    images: `body audio {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body figcaption {
  color: rgb(237, 237, 237);
}

body figure {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body img {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body video {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

body .transclude {
  border-bottom-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body .transclude-inner {
  border-bottom-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(75, 148, 194);
  border-left-color: rgb(75, 148, 194);
  border-right-color: rgb(75, 148, 194);
  border-top-color: rgb(75, 148, 194);
}

body li.task-list-item[data-task='!'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='*'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='-'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='/'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='>'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='?'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='I'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='S'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='b'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='c'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='d'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='f'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='i'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='k'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='l'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='p'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='u'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body li.task-list-item[data-task='w'] {
  color: rgb(237, 237, 237);
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}`,
    search: `body .search > .search-button {
  color: rgb(237, 237, 237);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
}

body .search > .search-container > .search-space > * {
  color: rgb(237, 237, 237);
  outline: rgb(237, 237, 237) none 0px;
  text-decoration: rgb(237, 237, 237);
  text-decoration-color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(237, 237, 237);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(98, 255, 116);
}

body h2 {
  color: rgb(98, 255, 187);
}

body h2.page-title, h2.page-title a {
  color: rgb(98, 255, 116);
}

body h3 {
  color: rgb(111, 250, 255);
}

body h4 {
  color: rgb(39, 172, 255);
}

body h5 {
  color: rgb(68, 90, 255);
}

body h6 {
  color: rgb(161, 98, 255);
}

body hr {
  border-bottom-color: rgb(60, 60, 60);
  border-left-color: rgb(60, 60, 60);
  border-right-color: rgb(60, 60, 60);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(140, 203, 255);
  border-left-color: rgb(140, 203, 255);
  border-right-color: rgb(140, 203, 255);
  border-top-color: rgb(140, 203, 255);
  color: rgb(140, 203, 255);
}`,
    footer: `body footer {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(60, 60, 60);
  border-left-color: rgb(60, 60, 60);
  border-right-color: rgb(60, 60, 60);
  border-top-color: rgb(60, 60, 60);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(237, 237, 237);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body li.section-li > .section .meta {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

body .navigation-progress {
  background-color: rgb(27, 27, 27);
}

body .page-header h2.page-title {
  color: rgb(237, 237, 237);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(237, 237, 237);
  text-decoration: underline dotted rgb(237, 237, 237);
}

body details {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body input[type=text] {
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-color: rgb(245, 152, 131);
  border-left-color: rgb(245, 152, 131);
  border-right-color: rgb(245, 152, 131);
  border-top-color: rgb(245, 152, 131);
  color: rgb(245, 152, 131);
}

body progress {
  border-bottom-color: rgb(237, 237, 237);
  border-left-color: rgb(237, 237, 237);
  border-right-color: rgb(237, 237, 237);
  border-top-color: rgb(237, 237, 237);
}

body sub {
  color: rgb(237, 237, 237);
}

body summary {
  color: rgb(237, 237, 237);
}

body sup {
  color: rgb(237, 237, 237);
}`,
  },
  light: {},
};
