import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "tomorrow", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-error: #CC6666;
  --background-modifier-error-hover: #CC6666;
  --background-modifier-success: #B5BD68;
  --background-primary: #1D1F21;
  --background-secondary: #282A2E;
  --bases-cards-background: #1D1F21;
  --bases-group-heading-property-color: #969896;
  --bases-table-cell-background-active: #1D1F21;
  --bases-table-header-background: #1D1F21;
  --bases-table-header-color: #969896;
  --bases-table-summary-background: #1D1F21;
  --canvas-background: #1D1F21;
  --caret-color: #C5C8C6;
  --checkbox-border-color-hover: #969896;
  --checkbox-marker-color: #1D1F21;
  --checklist-done-color: #969896;
  --code-background: #282A2E;
  --code-function: #F0C674;
  --code-important: #DE935F;
  --code-keyword: #B294BB;
  --code-normal: #C5C8C6;
  --code-operator: #CC6666;
  --code-property: #8ABEB7;
  --code-punctuation: #969896;
  --code-string: #B5BD68;
  --code-tag: #CC6666;
  --code-value: #B777E0;
  --color-blue: #81A2BE;
  --color-cyan: #8ABEB7;
  --color-green: #B5BD68;
  --color-orange: #DE935F;
  --color-pink: #B294BB;
  --color-purple: #B777E0;
  --color-red: #CC6666;
  --color-yellow: #F0C674;
  --divider-color: #181A1E;
  --file-header-background: #1D1F21;
  --file-header-background-focused: #1D1F21;
  --flair-color: #C5C8C6;
  --font-mermaid: '??', "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Fira Code", 'Arial';
  --font-text: '??', "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Fira Code";
  --footnote-id-color: #969896;
  --graph-node: #969896;
  --graph-node-attachment: #F0C674;
  --graph-node-tag: #B5BD68;
  --graph-text: #C5C8C6;
  --icon-color: #969896;
  --icon-color-focused: #C5C8C6;
  --icon-color-hover: #969896;
  --list-marker-color-hover: #969896;
  --menu-background: #282A2E;
  --metadata-input-text-color: #C5C8C6;
  --metadata-label-text-color: #969896;
  --metadata-label-text-color-hover: #969896;
  --modal-background: #1D1F21;
  --nav-heading-color: #C5C8C6;
  --nav-heading-color-collapsed-hover: #969896;
  --nav-heading-color-hover: #C5C8C6;
  --nav-item-color: #969896;
  --nav-item-color-active: #C5C8C6;
  --nav-item-color-hover: #C5C8C6;
  --nav-item-color-selected: #C5C8C6;
  --nav-tag-color-active: #969896;
  --nav-tag-color-hover: #969896;
  --pdf-background: #1D1F21;
  --pdf-page-background: #1D1F21;
  --pdf-sidebar-background: #1D1F21;
  --pill-color: #969896;
  --pill-color-hover: #C5C8C6;
  --prompt-background: #1D1F21;
  --ribbon-background: #282A2E;
  --ribbon-background-collapsed: #282A2E;
  --search-clear-button-color: #969896;
  --search-icon-color: #969896;
  --search-result-background: #1D1F21;
  --setting-group-heading-color: #C5C8C6;
  --status-bar-background: #282A2E;
  --status-bar-border-color: #181A1E;
  --status-bar-text-color: #969896;
  --suggestion-background: #1D1F21;
  --sync-avatar-color-1: #CC6666;
  --sync-avatar-color-2: #DE935F;
  --sync-avatar-color-3: #F0C674;
  --sync-avatar-color-4: #B5BD68;
  --sync-avatar-color-5: #8ABEB7;
  --sync-avatar-color-6: #81A2BE;
  --sync-avatar-color-7: #B777E0;
  --sync-avatar-color-8: #B294BB;
  --tab-background-active: #1D1F21;
  --tab-container-background: #282A2E;
  --tab-outline-color: #181A1E;
  --tab-switcher-background: #282A2E;
  --tab-switcher-menubar-background: linear-gradient(to top, #282A2E, transparent);
  --tab-text-color-active: #969896;
  --tab-text-color-focused: #969896;
  --tab-text-color-focused-active: #969896;
  --tab-text-color-focused-active-current: #C5C8C6;
  --table-header-color: #C5C8C6;
  --text-error: #CC6666;
  --text-muted: #969896;
  --text-normal: #C5C8C6;
  --text-selection: #373B41;
  --text-success: #B5BD68;
  --text-warning: #DE935F;
  --titlebar-background: #1D1F21;
  --titlebar-background-focused: #282A2E;
  --titlebar-text-color: #969896;
  --titlebar-text-color-focused: #C5C8C6;
  --vault-profile-color: #C5C8C6;
  --vault-profile-color-hover: #C5C8C6;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 42, 46);
  color: rgb(197, 200, 198);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 31, 33);
  color: rgb(197, 200, 198);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 42, 46);
  color: rgb(197, 200, 198);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(24, 26, 30);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 42, 46);
  border-left-color: rgb(24, 26, 30);
  color: rgb(197, 200, 198);
}

body div#quartz-root {
  background-color: rgb(29, 31, 33);
  color: rgb(197, 200, 198);
}`,
    typography: `body .page article p > b, b {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body .page article p > em, em {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body .page article p > i, i {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body .page article p > strong, strong {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body .text-highlight {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body del {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: line-through rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body p {
  color: rgb(150, 152, 150);
  outline: rgb(150, 152, 150) none 0px;
  text-decoration: rgb(150, 152, 150);
  text-decoration-color: rgb(150, 152, 150);
}`,
    links: `body a.external, footer a {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body dd {
  color: rgb(197, 200, 198);
}

body dt {
  color: rgb(197, 200, 198);
}

body ol > li {
  color: rgb(197, 200, 198);
}

body ol.overflow {
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body ul > li {
  color: rgb(197, 200, 198);
}

body ul.overflow {
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body table {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 222.094px;
}

body td {
  color: rgb(197, 200, 198);
}

body th {
  color: rgb(197, 200, 198);
}`,
    code: `body code {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 46);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 46);
  color: rgb(197, 200, 198);
}

body pre > code > [data-line] {
  border-left-color: rgb(240, 198, 116);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(240, 198, 116);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(240, 198, 116);
  border-left-color: rgb(240, 198, 116);
  border-right-color: rgb(240, 198, 116);
  border-top-color: rgb(240, 198, 116);
}

body pre > code, pre:has(> code) {
  background-color: rgb(40, 42, 46);
}

body pre:has(> code) {
  background-color: rgb(40, 42, 46);
}`,
    images: `body audio {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body figcaption {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body img {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body video {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
}

body .footnotes {
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

body .transclude {
  border-bottom-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body .transclude-inner {
  border-bottom-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(150, 152, 150);
  text-decoration: line-through rgb(150, 152, 150);
  text-decoration-color: rgb(150, 152, 150);
}

body li.task-list-item[data-task='!'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='*'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='-'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='/'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='>'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='?'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='I'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='S'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='b'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='c'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='d'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='f'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='i'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='k'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='l'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='p'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='u'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body li.task-list-item[data-task='w'] {
  color: rgb(197, 200, 198);
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}`,
    search: `body .search > .search-button {
  color: rgb(197, 200, 198);
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 31, 33);
}

body .search > .search-container > .search-space > * {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 200, 198) none 0px;
  text-decoration: rgb(197, 200, 198);
  text-decoration-color: rgb(197, 200, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(197, 200, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(197, 200, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(197, 200, 198);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 42, 46);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(197, 200, 198);
}

body h1 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(197, 200, 198);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(24, 26, 30);
  border-left-color: rgb(24, 26, 30);
  border-right-color: rgb(24, 26, 30);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 31, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 31, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
}`,
    footer: `body footer {
  background-color: rgb(40, 42, 46);
  border-bottom-color: rgb(24, 26, 30);
  border-left-color: rgb(24, 26, 30);
  border-right-color: rgb(24, 26, 30);
  border-top-color: rgb(24, 26, 30);
  color: rgb(150, 152, 150);
}

body footer ul li a {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(197, 200, 198);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(150, 152, 150);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body li.section-li > .section .meta {
  color: rgb(150, 152, 150);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(150, 152, 150);
  text-decoration: rgb(150, 152, 150);
}

body ul.section-ul {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
}

body .darkmode svg {
  color: rgb(150, 152, 150);
  stroke: rgb(150, 152, 150);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

body .metadata {
  color: rgb(150, 152, 150);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
  font-family: "??", "Fira Code", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(40, 42, 46);
}

body .page-header h2.page-title {
  color: rgb(197, 200, 198);
}

body abbr {
  color: rgb(197, 200, 198);
  text-decoration: underline dotted rgb(197, 200, 198);
}

body details {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body input[type=text] {
  border-bottom-color: rgb(150, 152, 150);
  border-left-color: rgb(150, 152, 150);
  border-right-color: rgb(150, 152, 150);
  border-top-color: rgb(150, 152, 150);
  color: rgb(150, 152, 150);
}

body kbd {
  background-color: rgb(40, 42, 46);
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
  color: rgb(197, 200, 198);
}

body progress {
  border-bottom-color: rgb(197, 200, 198);
  border-left-color: rgb(197, 200, 198);
  border-right-color: rgb(197, 200, 198);
  border-top-color: rgb(197, 200, 198);
}

body sub {
  color: rgb(197, 200, 198);
}

body summary {
  color: rgb(197, 200, 198);
}

body sup {
  color: rgb(197, 200, 198);
}`,
  },
  light: {},
};
