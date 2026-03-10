import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "spy-terminal",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-mono", "roboto-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #1a1a1a !important;
  --background-secondary: #222222 !important;
  --background-tertiary: #111111 !important;
  --bases-cards-background: #1a1a1a !important;
  --bases-group-heading-property-color: #008800 !important;
  --bases-table-cell-background-active: #1a1a1a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00aa00 !important;
  --bases-table-header-background: #1a1a1a !important;
  --bases-table-header-color: #008800 !important;
  --bases-table-summary-background: #1a1a1a !important;
  --blockquote-border-color: #00aa00 !important;
  --canvas-background: #1a1a1a !important;
  --caret-color: #00ff00 !important;
  --checkbox-border-color-hover: #008800 !important;
  --checkbox-color: #00aa00 !important;
  --checkbox-color-hover: #00cc00 !important;
  --checkbox-marker-color: #1a1a1a !important;
  --checklist-done-color: #008800 !important;
  --code-normal: #00ff00 !important;
  --code-punctuation: #008800 !important;
  --dark: #00ff00 !important;
  --darkgray: #00ff00 !important;
  --divider-color-hover: #00aa00 !important;
  --embed-border-start: 2px solid #00aa00 !important;
  --file-header-background: #1a1a1a !important;
  --file-header-background-focused: #1a1a1a !important;
  --flair-color: #00ff00 !important;
  --footnote-id-color: #008800 !important;
  --graph-node: #008800 !important;
  --graph-text: #00ff00 !important;
  --gray: #008800 !important;
  --highlight: rgba(0, 255, 0, 0.2) !important;
  --highlight-text: #00ff00 !important;
  --icon-color: #008800 !important;
  --icon-color-focused: #00ff00 !important;
  --icon-color-hover: #008800 !important;
  --interactive-accent: #00aa00 !important;
  --interactive-accent-hover: #00cc00 !important;
  --light: #1a1a1a !important;
  --lightgray: #222222 !important;
  --link-color: #00ccff !important;
  --list-marker-color-hover: #008800 !important;
  --menu-background: #222222 !important;
  --metadata-input-text-color: #00ff00 !important;
  --metadata-label-text-color: #008800 !important;
  --metadata-label-text-color-hover: #008800 !important;
  --modal-background: #1a1a1a !important;
  --nav-heading-color: #00ff00 !important;
  --nav-heading-color-collapsed-hover: #008800 !important;
  --nav-heading-color-hover: #00ff00 !important;
  --nav-item-color: #008800 !important;
  --nav-item-color-active: #00ff00 !important;
  --nav-item-color-hover: #00ff00 !important;
  --nav-item-color-selected: #00ff00 !important;
  --nav-tag-color-active: #008800 !important;
  --nav-tag-color-hover: #008800 !important;
  --pdf-background: #1a1a1a !important;
  --pdf-page-background: #1a1a1a !important;
  --pdf-sidebar-background: #1a1a1a !important;
  --pill-color: #008800 !important;
  --pill-color-hover: #00ff00 !important;
  --prompt-background: #1a1a1a !important;
  --ribbon-background: #222222 !important;
  --ribbon-background-collapsed: #1a1a1a !important;
  --search-clear-button-color: #008800 !important;
  --search-icon-color: #008800 !important;
  --search-result-background: #1a1a1a !important;
  --secondary: #00aa00 !important;
  --setting-group-heading-color: #00ff00 !important;
  --status-bar-background: #222222 !important;
  --status-bar-text-color: #008800 !important;
  --suggestion-background: #1a1a1a !important;
  --tab-background-active: #1a1a1a !important;
  --tab-container-background: #222222 !important;
  --tab-switcher-background: #222222 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #222222, transparent) !important;
  --tab-text-color-active: #008800 !important;
  --tab-text-color-focused: #008800 !important;
  --tab-text-color-focused-active: #008800 !important;
  --tab-text-color-focused-active-current: #00ff00 !important;
  --table-drag-handle-background-active: #00aa00 !important;
  --table-header-color: #00ff00 !important;
  --table-selection-border-color: #00aa00 !important;
  --tertiary: #00cc00 !important;
  --text-error: #ff0000 !important;
  --text-highlight-bg: rgba(0, 255, 0, 0.2) !important;
  --text-muted: #008800 !important;
  --text-normal: #00ff00 !important;
  --text-selection: rgba(0, 255, 0, 0.3) !important;
  --textHighlight: rgba(0, 255, 0, 0.2) !important;
  --titlebar-background: #222222 !important;
  --titlebar-text-color: #008800 !important;
  --titlebar-text-color-focused: #00ff00 !important;
  --vault-profile-color: #00ff00 !important;
  --vault-profile-color-hover: #00ff00 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(0, 255, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(0, 255, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .page article p > em, em {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .page article p > i, i {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .text-highlight {
  background-color: rgba(0, 255, 0, 0.2);
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body del {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: line-through rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body p {
  color: rgb(0, 136, 0);
  outline: rgb(0, 136, 0) none 0px;
  text-decoration: rgb(0, 136, 0);
  text-decoration-color: rgb(0, 136, 0);
}`,
    links: `body a.external, footer a {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 204, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 255) none 0px;
  text-decoration: underline rgb(0, 204, 255);
  text-decoration-color: rgb(0, 204, 255);
}

body a.internal.broken {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body dd {
  color: rgb(0, 255, 0);
}

body dt {
  color: rgb(0, 255, 0);
}

body ol > li {
  color: rgb(0, 255, 0);
}

body ol.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body ul > li {
  color: rgb(0, 255, 0);
}

body ul.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body table {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body td {
  color: rgb(0, 255, 0);
}

body th {
  color: rgb(0, 255, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(0, 255, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body figcaption {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body img {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body video {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
}

body .footnotes {
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 170, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 170, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 136, 0);
  text-decoration: line-through rgb(0, 136, 0);
  text-decoration-color: rgb(0, 136, 0);
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}`,
    search: `body .search > .search-button {
  color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 255, 0);
}

body h1 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}`,
    footer: `body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 136, 0);
}

body footer ul li a {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 255, 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 136, 0);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body li.section-li > .section .meta {
  color: rgb(0, 136, 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}

body .darkmode svg {
  color: rgb(0, 136, 0);
  stroke: rgb(0, 136, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body .metadata {
  color: rgb(0, 136, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

body .page-header h2.page-title {
  color: rgb(0, 255, 0);
}

body abbr {
  color: rgb(0, 255, 0);
  text-decoration: underline dotted rgb(0, 255, 0);
}

body details {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body input[type=text] {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}

body kbd {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body progress {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body sub {
  color: rgb(0, 255, 0);
}

body summary {
  color: rgb(0, 255, 0);
}

body sup {
  color: rgb(0, 255, 0);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #1a1a1a !important;
  --background-secondary: #222222 !important;
  --background-tertiary: #111111 !important;
  --bases-cards-background: #1a1a1a !important;
  --bases-group-heading-property-color: #008800 !important;
  --bases-table-cell-background-active: #1a1a1a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00aa00 !important;
  --bases-table-header-background: #1a1a1a !important;
  --bases-table-header-color: #008800 !important;
  --bases-table-summary-background: #1a1a1a !important;
  --blockquote-border-color: #00aa00 !important;
  --blur-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent)) !important;
  --canvas-background: #1a1a1a !important;
  --caret-color: #00ff00 !important;
  --checkbox-border-color-hover: #008800 !important;
  --checkbox-color: #00aa00 !important;
  --checkbox-color-hover: #00cc00 !important;
  --checkbox-marker-color: #1a1a1a !important;
  --checklist-done-color: #008800 !important;
  --code-normal: #00ff00 !important;
  --code-punctuation: #008800 !important;
  --dark: #00ff00 !important;
  --darkgray: #00ff00 !important;
  --divider-color-hover: #00aa00 !important;
  --embed-border-start: 2px solid #00aa00 !important;
  --file-header-background: #1a1a1a !important;
  --file-header-background-focused: #1a1a1a !important;
  --flair-color: #00ff00 !important;
  --footnote-id-color: #008800 !important;
  --graph-node: #008800 !important;
  --graph-text: #00ff00 !important;
  --gray: #008800 !important;
  --highlight: rgba(0, 255, 0, 0.2) !important;
  --highlight-text: #00ff00 !important;
  --icon-color: #008800 !important;
  --icon-color-focused: #00ff00 !important;
  --icon-color-hover: #008800 !important;
  --interactive-accent: #00aa00 !important;
  --interactive-accent-hover: #00cc00 !important;
  --light: #1a1a1a !important;
  --lightgray: #222222 !important;
  --link-color: #00ccff !important;
  --list-marker-color-hover: #008800 !important;
  --menu-background: #222222 !important;
  --metadata-input-text-color: #00ff00 !important;
  --metadata-label-text-color: #008800 !important;
  --metadata-label-text-color-hover: #008800 !important;
  --modal-background: #1a1a1a !important;
  --nav-heading-color: #00ff00 !important;
  --nav-heading-color-collapsed-hover: #008800 !important;
  --nav-heading-color-hover: #00ff00 !important;
  --nav-item-color: #008800 !important;
  --nav-item-color-active: #00ff00 !important;
  --nav-item-color-hover: #00ff00 !important;
  --nav-item-color-selected: #00ff00 !important;
  --nav-tag-color-active: #008800 !important;
  --nav-tag-color-hover: #008800 !important;
  --pdf-background: #1a1a1a !important;
  --pdf-page-background: #1a1a1a !important;
  --pdf-sidebar-background: #1a1a1a !important;
  --pill-color: #008800 !important;
  --pill-color-hover: #00ff00 !important;
  --prompt-background: #1a1a1a !important;
  --raised-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent)) !important;
  --ribbon-background: #222222 !important;
  --ribbon-background-collapsed: #1a1a1a !important;
  --search-clear-button-color: #008800 !important;
  --search-icon-color: #008800 !important;
  --search-result-background: #1a1a1a !important;
  --secondary: #00aa00 !important;
  --setting-group-heading-color: #00ff00 !important;
  --status-bar-background: #222222 !important;
  --status-bar-text-color: #008800 !important;
  --suggestion-background: #1a1a1a !important;
  --tab-background-active: #1a1a1a !important;
  --tab-container-background: #222222 !important;
  --tab-switcher-background: #222222 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #222222, transparent) !important;
  --tab-text-color-active: #008800 !important;
  --tab-text-color-focused: #008800 !important;
  --tab-text-color-focused-active: #008800 !important;
  --tab-text-color-focused-active-current: #00ff00 !important;
  --table-drag-handle-background-active: #00aa00 !important;
  --table-header-color: #00ff00 !important;
  --table-selection-border-color: #00aa00 !important;
  --tertiary: #00cc00 !important;
  --text-error: #ff0000 !important;
  --text-highlight-bg: rgba(0, 255, 0, 0.2) !important;
  --text-muted: #008800 !important;
  --text-normal: #00ff00 !important;
  --text-selection: rgba(0, 255, 0, 0.3) !important;
  --textHighlight: rgba(0, 255, 0, 0.2) !important;
  --titlebar-background: #222222 !important;
  --titlebar-text-color: #008800 !important;
  --titlebar-text-color-focused: #00ff00 !important;
  --vault-profile-color: #00ff00 !important;
  --vault-profile-color-hover: #00ff00 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(0, 255, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 255, 0);
}

body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(0, 255, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .page article p > em, em {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .page article p > i, i {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .text-highlight {
  background-color: rgba(0, 255, 0, 0.2);
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body del {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: line-through rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body p {
  color: rgb(0, 136, 0);
  outline: rgb(0, 136, 0) none 0px;
  text-decoration: rgb(0, 136, 0);
  text-decoration-color: rgb(0, 136, 0);
}`,
    links: `body a.external, footer a {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 204, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 255) none 0px;
  text-decoration: underline rgb(0, 204, 255);
  text-decoration-color: rgb(0, 204, 255);
}

body a.internal.broken {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body dd {
  color: rgb(0, 255, 0);
}

body dt {
  color: rgb(0, 255, 0);
}

body ol > li {
  color: rgb(0, 255, 0);
}

body ol.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body ul > li {
  color: rgb(0, 255, 0);
}

body ul.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body table {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body td {
  color: rgb(0, 255, 0);
}

body th {
  color: rgb(0, 255, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(0, 255, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body figcaption {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body img {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body video {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
}

body .footnotes {
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 170, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 170, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 136, 0);
  text-decoration: line-through rgb(0, 136, 0);
  text-decoration-color: rgb(0, 136, 0);
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 255, 0);
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}`,
    search: `body .search > .search-button {
  color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 255, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 255, 0);
}

body h1 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 255, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}`,
    footer: `body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(0, 136, 0);
}

body footer ul li a {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 255, 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 136, 0);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body li.section-li > .section .meta {
  color: rgb(0, 136, 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 136, 0);
  text-decoration: rgb(0, 136, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}

body .darkmode svg {
  color: rgb(0, 136, 0);
  stroke: rgb(0, 136, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body .metadata {
  color: rgb(0, 136, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

body .page-header h2.page-title {
  color: rgb(0, 255, 0);
}

body abbr {
  color: rgb(0, 255, 0);
  text-decoration: underline dotted rgb(0, 255, 0);
}

body details {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body input[type=text] {
  border-bottom-color: rgb(0, 136, 0);
  border-left-color: rgb(0, 136, 0);
  border-right-color: rgb(0, 136, 0);
  border-top-color: rgb(0, 136, 0);
  color: rgb(0, 136, 0);
}

body kbd {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
  color: rgb(0, 255, 0);
}

body progress {
  border-bottom-color: rgb(0, 255, 0);
  border-left-color: rgb(0, 255, 0);
  border-right-color: rgb(0, 255, 0);
  border-top-color: rgb(0, 255, 0);
}

body sub {
  color: rgb(0, 255, 0);
}

body summary {
  color: rgb(0, 255, 0);
}

body sup {
  color: rgb(0, 255, 0);
}`,
  },
};
