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
  --background-primary: #1a1a1a;
  --background-secondary: #222222;
  --background-tertiary: #111111;
  --bases-cards-background: #1a1a1a;
  --bases-group-heading-property-color: #008800;
  --bases-table-cell-background-active: #1a1a1a;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00aa00;
  --bases-table-header-background: #1a1a1a;
  --bases-table-header-color: #008800;
  --bases-table-summary-background: #1a1a1a;
  --blockquote-border-color: #00aa00;
  --canvas-background: #1a1a1a;
  --caret-color: #00ff00;
  --checkbox-border-color-hover: #008800;
  --checkbox-color: #00aa00;
  --checkbox-color-hover: #00cc00;
  --checkbox-marker-color: #1a1a1a;
  --checklist-done-color: #008800;
  --code-normal: #00ff00;
  --code-punctuation: #008800;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: #00aa00;
  --embed-border-start: 2px solid #00aa00;
  --file-header-background: #1a1a1a;
  --file-header-background-focused: #1a1a1a;
  --flair-color: #00ff00;
  --footnote-id-color: #008800;
  --graph-node: #008800;
  --graph-text: #00ff00;
  --gray: var(--text-muted);
  --highlight: var(--text-highlight-bg);
  --highlight-text: #00ff00;
  --icon-color: #008800;
  --icon-color-focused: #00ff00;
  --icon-color-hover: #008800;
  --interactive-accent: #00aa00;
  --interactive-accent-hover: #00cc00;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #00ccff;
  --list-marker-color-hover: #008800;
  --menu-background: #222222;
  --metadata-input-text-color: #00ff00;
  --metadata-label-text-color: #008800;
  --metadata-label-text-color-hover: #008800;
  --modal-background: #1a1a1a;
  --nav-heading-color: #00ff00;
  --nav-heading-color-collapsed-hover: #008800;
  --nav-heading-color-hover: #00ff00;
  --nav-item-color: #008800;
  --nav-item-color-active: #00ff00;
  --nav-item-color-hover: #00ff00;
  --nav-item-color-selected: #00ff00;
  --nav-tag-color-active: #008800;
  --nav-tag-color-hover: #008800;
  --pdf-background: #1a1a1a;
  --pdf-page-background: #1a1a1a;
  --pdf-sidebar-background: #1a1a1a;
  --pill-color: #008800;
  --pill-color-hover: #00ff00;
  --prompt-background: #1a1a1a;
  --ribbon-background: #222222;
  --ribbon-background-collapsed: #1a1a1a;
  --search-clear-button-color: #008800;
  --search-icon-color: #008800;
  --search-result-background: #1a1a1a;
  --secondary: var(--interactive-accent);
  --setting-group-heading-color: #00ff00;
  --status-bar-background: #222222;
  --status-bar-text-color: #008800;
  --suggestion-background: #1a1a1a;
  --tab-background-active: #1a1a1a;
  --tab-container-background: #222222;
  --tab-switcher-background: #222222;
  --tab-switcher-menubar-background: linear-gradient(to top, #222222, transparent);
  --tab-text-color-active: #008800;
  --tab-text-color-focused: #008800;
  --tab-text-color-focused-active: #008800;
  --tab-text-color-focused-active-current: #00ff00;
  --table-drag-handle-background-active: #00aa00;
  --table-header-color: #00ff00;
  --table-selection-border-color: #00aa00;
  --tertiary: var(--interactive-accent-hover);
  --text-error: #ff0000;
  --text-highlight-bg: rgba(0, 255, 0, 0.2);
  --text-muted: #008800;
  --text-normal: #00ff00;
  --text-selection: rgba(0, 255, 0, 0.3);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #222222;
  --titlebar-text-color: #008800;
  --titlebar-text-color-focused: #00ff00;
  --vault-profile-color: #00ff00;
  --vault-profile-color-hover: #00ff00;
  --quartz-icon-color: currentColor;
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
  --background-primary: #1a1a1a;
  --background-secondary: #222222;
  --background-tertiary: #111111;
  --bases-cards-background: #1a1a1a;
  --bases-group-heading-property-color: #008800;
  --bases-table-cell-background-active: #1a1a1a;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00aa00;
  --bases-table-header-background: #1a1a1a;
  --bases-table-header-color: #008800;
  --bases-table-summary-background: #1a1a1a;
  --blockquote-border-color: #00aa00;
  --blur-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent));
  --canvas-background: #1a1a1a;
  --caret-color: #00ff00;
  --checkbox-border-color-hover: #008800;
  --checkbox-color: #00aa00;
  --checkbox-color-hover: #00cc00;
  --checkbox-marker-color: #1a1a1a;
  --checklist-done-color: #008800;
  --code-normal: #00ff00;
  --code-punctuation: #008800;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: #00aa00;
  --embed-border-start: 2px solid #00aa00;
  --file-header-background: #1a1a1a;
  --file-header-background-focused: #1a1a1a;
  --flair-color: #00ff00;
  --footnote-id-color: #008800;
  --graph-node: #008800;
  --graph-text: #00ff00;
  --gray: var(--text-muted);
  --highlight: var(--text-highlight-bg);
  --highlight-text: #00ff00;
  --icon-color: #008800;
  --icon-color-focused: #00ff00;
  --icon-color-hover: #008800;
  --interactive-accent: #00aa00;
  --interactive-accent-hover: #00cc00;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #00ccff;
  --list-marker-color-hover: #008800;
  --menu-background: #222222;
  --metadata-input-text-color: #00ff00;
  --metadata-label-text-color: #008800;
  --metadata-label-text-color-hover: #008800;
  --modal-background: #1a1a1a;
  --nav-heading-color: #00ff00;
  --nav-heading-color-collapsed-hover: #008800;
  --nav-heading-color-hover: #00ff00;
  --nav-item-color: #008800;
  --nav-item-color-active: #00ff00;
  --nav-item-color-hover: #00ff00;
  --nav-item-color-selected: #00ff00;
  --nav-tag-color-active: #008800;
  --nav-tag-color-hover: #008800;
  --pdf-background: #1a1a1a;
  --pdf-page-background: #1a1a1a;
  --pdf-sidebar-background: #1a1a1a;
  --pill-color: #008800;
  --pill-color-hover: #00ff00;
  --prompt-background: #1a1a1a;
  --raised-background: color-mix(in srgb, #1a1a1a 65%, transparent) linear-gradient(#1a1a1a, color-mix(in srgb, #1a1a1a 65%, transparent));
  --ribbon-background: #222222;
  --ribbon-background-collapsed: #1a1a1a;
  --search-clear-button-color: #008800;
  --search-icon-color: #008800;
  --search-result-background: #1a1a1a;
  --secondary: var(--interactive-accent);
  --setting-group-heading-color: #00ff00;
  --status-bar-background: #222222;
  --status-bar-text-color: #008800;
  --suggestion-background: #1a1a1a;
  --tab-background-active: #1a1a1a;
  --tab-container-background: #222222;
  --tab-switcher-background: #222222;
  --tab-switcher-menubar-background: linear-gradient(to top, #222222, transparent);
  --tab-text-color-active: #008800;
  --tab-text-color-focused: #008800;
  --tab-text-color-focused-active: #008800;
  --tab-text-color-focused-active-current: #00ff00;
  --table-drag-handle-background-active: #00aa00;
  --table-header-color: #00ff00;
  --table-selection-border-color: #00aa00;
  --tertiary: var(--interactive-accent-hover);
  --text-error: #ff0000;
  --text-highlight-bg: rgba(0, 255, 0, 0.2);
  --text-muted: #008800;
  --text-normal: #00ff00;
  --text-selection: rgba(0, 255, 0, 0.3);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #222222;
  --titlebar-text-color: #008800;
  --titlebar-text-color-focused: #00ff00;
  --vault-profile-color: #00ff00;
  --vault-profile-color-hover: #00ff00;
  --quartz-icon-color: currentColor;
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
