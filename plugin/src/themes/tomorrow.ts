import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "tomorrow", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-error: #CC6666 !important;
  --background-modifier-error-hover: #CC6666 !important;
  --background-modifier-success: #B5BD68 !important;
  --background-primary: #1D1F21 !important;
  --background-secondary: #282A2E !important;
  --bases-cards-background: #1D1F21 !important;
  --bases-group-heading-property-color: #969896 !important;
  --bases-table-cell-background-active: #1D1F21 !important;
  --bases-table-header-background: #1D1F21 !important;
  --bases-table-header-color: #969896 !important;
  --bases-table-summary-background: #1D1F21 !important;
  --bodyFont: '??', "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #1D1F21 !important;
  --caret-color: #C5C8C6 !important;
  --checkbox-border-color-hover: #969896 !important;
  --checkbox-marker-color: #1D1F21 !important;
  --checklist-done-color: #969896 !important;
  --code-background: #282A2E !important;
  --code-function: #F0C674 !important;
  --code-important: #DE935F !important;
  --code-keyword: #B294BB !important;
  --code-normal: #C5C8C6 !important;
  --code-operator: #CC6666 !important;
  --code-property: #8ABEB7 !important;
  --code-punctuation: #969896 !important;
  --code-string: #B5BD68 !important;
  --code-tag: #CC6666 !important;
  --code-value: #B777E0 !important;
  --codeFont: '??', "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --color-blue: #81A2BE !important;
  --color-cyan: #8ABEB7 !important;
  --color-green: #B5BD68 !important;
  --color-orange: #DE935F !important;
  --color-pink: #B294BB !important;
  --color-purple: #B777E0 !important;
  --color-red: #CC6666 !important;
  --color-yellow: #F0C674 !important;
  --dark: #C5C8C6 !important;
  --darkgray: #C5C8C6 !important;
  --divider-color: #181A1E !important;
  --file-header-background: #1D1F21 !important;
  --file-header-background-focused: #1D1F21 !important;
  --flair-color: #C5C8C6 !important;
  --font-mermaid: '??', "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', "Fira Code", 'Arial' !important;
  --font-text: '??', "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Fira Code" !important;
  --footnote-id-color: #969896 !important;
  --graph-node: #969896 !important;
  --graph-node-attachment: #F0C674 !important;
  --graph-node-tag: #B5BD68 !important;
  --graph-text: #C5C8C6 !important;
  --gray: #969896 !important;
  --headerFont: '??', "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --icon-color: #969896 !important;
  --icon-color-focused: #C5C8C6 !important;
  --icon-color-hover: #969896 !important;
  --light: #1D1F21 !important;
  --lightgray: #282A2E !important;
  --list-marker-color-hover: #969896 !important;
  --menu-background: #282A2E !important;
  --metadata-input-text-color: #C5C8C6 !important;
  --metadata-label-text-color: #969896 !important;
  --metadata-label-text-color-hover: #969896 !important;
  --modal-background: #1D1F21 !important;
  --nav-heading-color: #C5C8C6 !important;
  --nav-heading-color-collapsed-hover: #969896 !important;
  --nav-heading-color-hover: #C5C8C6 !important;
  --nav-item-color: #969896 !important;
  --nav-item-color-active: #C5C8C6 !important;
  --nav-item-color-hover: #C5C8C6 !important;
  --nav-item-color-selected: #C5C8C6 !important;
  --nav-tag-color-active: #969896 !important;
  --nav-tag-color-hover: #969896 !important;
  --pdf-background: #1D1F21 !important;
  --pdf-page-background: #1D1F21 !important;
  --pdf-sidebar-background: #1D1F21 !important;
  --pill-color: #969896 !important;
  --pill-color-hover: #C5C8C6 !important;
  --prompt-background: #1D1F21 !important;
  --ribbon-background: #282A2E !important;
  --ribbon-background-collapsed: #282A2E !important;
  --search-clear-button-color: #969896 !important;
  --search-icon-color: #969896 !important;
  --search-result-background: #1D1F21 !important;
  --setting-group-heading-color: #C5C8C6 !important;
  --status-bar-background: #282A2E !important;
  --status-bar-border-color: #181A1E !important;
  --status-bar-text-color: #969896 !important;
  --suggestion-background: #1D1F21 !important;
  --sync-avatar-color-1: #CC6666 !important;
  --sync-avatar-color-2: #DE935F !important;
  --sync-avatar-color-3: #F0C674 !important;
  --sync-avatar-color-4: #B5BD68 !important;
  --sync-avatar-color-5: #8ABEB7 !important;
  --sync-avatar-color-6: #81A2BE !important;
  --sync-avatar-color-7: #B777E0 !important;
  --sync-avatar-color-8: #B294BB !important;
  --tab-background-active: #1D1F21 !important;
  --tab-container-background: #282A2E !important;
  --tab-outline-color: #181A1E !important;
  --tab-switcher-background: #282A2E !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #282A2E, transparent) !important;
  --tab-text-color-active: #969896 !important;
  --tab-text-color-focused: #969896 !important;
  --tab-text-color-focused-active: #969896 !important;
  --tab-text-color-focused-active-current: #C5C8C6 !important;
  --table-header-color: #C5C8C6 !important;
  --text-error: #CC6666 !important;
  --text-muted: #969896 !important;
  --text-normal: #C5C8C6 !important;
  --text-selection: #373B41 !important;
  --text-success: #B5BD68 !important;
  --text-warning: #DE935F !important;
  --titleFont: '??', "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1D1F21 !important;
  --titlebar-background-focused: #282A2E !important;
  --titlebar-text-color: #969896 !important;
  --titlebar-text-color-focused: #C5C8C6 !important;
  --vault-profile-color: #C5C8C6 !important;
  --vault-profile-color-hover: #C5C8C6 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 42, 46);
  color: rgb(197, 200, 198);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(29, 31, 33);
  color: rgb(197, 200, 198);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 42, 46);
  color: rgb(197, 200, 198);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(24, 26, 30);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 42, 46);
  border-left-color: rgb(24, 26, 30);
  color: rgb(197, 200, 198);
}

html body div#quartz-root {
  background-color: rgb(29, 31, 33);
  color: rgb(197, 200, 198);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body .page article p > em, html em {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body .page article p > i, html i {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body .page article p > strong, html strong {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body .text-highlight {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body del {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: line-through rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body p {
  color: rgb(150, 152, 150);
  outline: rgb(150, 152, 150) none 0px;
  text-decoration: rgb(150, 152, 150);
  text-decoration-color: rgb(150, 152, 150);
}`,
    links: `html body a.external, html footer a {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.broken {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html body dd {
  color: rgb(197, 200, 198);
}

html body dt {
  color: rgb(197, 200, 198);
}

html body ol > li {
  color: rgb(197, 200, 198);
}

html body ol.overflow {
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body ul > li {
  color: rgb(197, 200, 198);
}

html body ul.overflow {
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body table {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 222.094px;
}

html body td {
  color: rgb(197, 200, 198);
}

html body th {
  color: rgb(197, 200, 198);
}`,
    code: `html body code {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 46);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 46);
  color: rgb(197, 200, 198);
}

html body pre > code > [data-line] {
  border-left-color: rgb(240, 198, 116);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(240, 198, 116);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(240, 198, 116);
  border-left-color: rgb(240, 198, 116);
  border-right-color: rgb(240, 198, 116);
  border-top-color: rgb(240, 198, 116);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(40, 42, 46);
}

html body pre:has(> code) {
  background-color: rgb(40, 42, 46);
}`,
    images: `html body audio {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body figcaption {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body img {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body video {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
}

html body .footnotes {
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

html body .transclude {
  border-bottom-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body .transclude-inner {
  border-bottom-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(150, 152, 150);
  text-decoration: line-through rgb(150, 152, 150);
  text-decoration-color: rgb(150, 152, 150);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}`,
    search: `html body .search > .search-button {
  color: rgb(197, 200, 198);
}

html body .search > .search-container > .search-space {
  background-color: rgb(29, 31, 33);
}

html body .search > .search-container > .search-space > * {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(197, 200, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(197, 200, 198);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(197, 200, 198);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 42, 46);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(197, 200, 198);
}

html body h1 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(24, 26, 30);
  border-left-color: rgb(24, 26, 30);
  border-right-color: rgb(24, 26, 30);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

html body ::-webkit-scrollbar-track {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
}`,
    footer: `html body footer {
  background-color: rgb(40, 42, 46);
  border-bottom-color: rgb(24, 26, 30);
  border-left-color: rgb(24, 26, 30);
  border-right-color: rgb(24, 26, 30);
  border-top-color: rgb(24, 26, 30);
  color: rgb(150, 152, 150);
}

html body footer ul li a {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(197, 200, 198);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(150, 152, 150);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body li.section-li > .section .meta {
  color: rgb(150, 152, 150);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

html body ul.section-ul {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
}

html body .darkmode svg {
  color: rgb(150, 152, 150);
  stroke: rgb(150, 152, 150);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

html body .metadata {
  color: rgb(150, 152, 150);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(40, 42, 46);
}

html body .page-header h2.page-title {
  color: rgb(197, 200, 198);
}

html body abbr {
  color: rgb(197, 200, 198);
  text-decoration: underline dotted rgb(197, 200, 198);
}

html body details {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body input[type=text] {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
}

html body kbd {
  background-color: rgb(40, 42, 46);
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

html body progress {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

html body sub {
  color: rgb(197, 200, 198);
}

html body summary {
  color: rgb(197, 200, 198);
}

html body sup {
  color: rgb(197, 200, 198);
}`,
  },
  light: {},
};
