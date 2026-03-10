import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ia-writer",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-duo"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #1B1B1B;
  --background-secondary: #141414;
  --bases-cards-background: #1B1B1B;
  --bases-group-heading-property-color: #707070;
  --bases-table-cell-background-active: #1B1B1B;
  --bases-table-header-background: #1B1B1B;
  --bases-table-header-color: #707070;
  --bases-table-summary-background: #1B1B1B;
  --bodyFont: var(--font-text);
  --callout-title-color: #CCC;
  --canvas-background: #1B1B1B;
  --canvas-card-label-color: #707070;
  --caret-color: #CCC;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #707070;
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-marker-color: transparent;
  --checklist-done-color: #707070;
  --code-comment: #707070;
  --code-normal: #CCC;
  --code-punctuation: #707070;
  --codeFont: var(--font-text);
  --collapse-icon-color: #707070;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --file-header-background: #1B1B1B;
  --file-header-background-focused: #1B1B1B;
  --file-line-width: min(800px, 98vw);
  --file-margins: 64px 32px 32px 32px;
  --flair-color: #CCC;
  --font-mermaid: "iA Writer Duo", '??', "iA Writer Duo", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text: "iA Writer Duo", '??', "iA Writer Duo", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-id-color: #707070;
  --footnote-id-color-no-occurrences: #707070;
  --footnote-line-height: 1.7;
  --graph-node: #707070;
  --graph-node-unresolved: #707070;
  --graph-text: #CCC;
  --gray: var(--text-muted);
  --h1-color: #CCC;
  --h1-size: 16px;
  --h2-size: 16px;
  --h3-size: 16px;
  --h4-size: 16px;
  --h5-line-height: 1.7;
  --h5-size: 16px;
  --h6-line-height: 1.7;
  --h6-size: 16px;
  --headerFont: var(--font-text);
  --heading-formatting: #707070;
  --highlight: var(--text-highlight-bg);
  --icon-color: #707070;
  --icon-color-focused: #CCC;
  --icon-color-hover: #707070;
  --inline-title-color: #CCC;
  --inline-title-size: 16px;
  --input-date-separator: #707070;
  --input-placeholder-color: #707070;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.7;
  --link-color: #CCC;
  --link-external-color: #CCC;
  --link-external-color-hover: rgb(138, 92, 245);
  --link-external-decoration-color: #707070;
  --link-unresolved-color: #CCC;
  --link-unresolved-decoration-color: #707070;
  --link-unresolved-opacity: 1;
  --list-marker-color: #CCC;
  --list-marker-color-hover: #707070;
  --menu-background: #141414;
  --metadata-input-text-color: #CCC;
  --metadata-label-text-color: #707070;
  --metadata-label-text-color-hover: #707070;
  --modal-background: #1B1B1B;
  --nav-collapse-icon-color: #707070;
  --nav-collapse-icon-color-collapsed: #707070;
  --nav-heading-color: #CCC;
  --nav-heading-color-collapsed: #707070;
  --nav-heading-color-collapsed-hover: #707070;
  --nav-heading-color-hover: #CCC;
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-color: #CCC;
  --nav-item-color-active: #CCC;
  --nav-item-color-hover: #CCC;
  --nav-item-color-selected: #CCC;
  --nav-tag-color: #707070;
  --nav-tag-color-active: #707070;
  --nav-tag-color-hover: #707070;
  --pdf-background: #1B1B1B;
  --pdf-page-background: #1B1B1B;
  --pdf-sidebar-background: #1B1B1B;
  --pill-color: #707070;
  --pill-color-hover: #CCC;
  --pill-color-remove: #707070;
  --prompt-background: #1B1B1B;
  --ribbon-background: #141414;
  --ribbon-background-collapsed: #1B1B1B;
  --search-clear-button-color: #707070;
  --search-icon-color: #707070;
  --search-result-background: #1B1B1B;
  --setting-group-heading-color: #CCC;
  --status-bar-background: #141414;
  --status-bar-text-color: #707070;
  --suggestion-background: #1B1B1B;
  --tab-background-active: #1B1B1B;
  --tab-container-background: #141414;
  --tab-switcher-background: #141414;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent);
  --tab-text-color: #CCC;
  --tab-text-color-active: #CCC;
  --tab-text-color-focused: #CCC;
  --tab-text-color-focused-active: #CCC;
  --tab-text-color-focused-active-current: #CCC;
  --table-drag-handle-color: #707070;
  --table-header-color: #CCC;
  --text-faint: #707070;
  --text-highlight-bg: #494113;
  --text-highlight-border: 4px solid #D4B000;
  --text-highlight-color: #DCCF99;
  --text-muted: #707070;
  --text-normal: #CCC;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #141414;
  --titlebar-background-focused: #141414;
  --titlebar-text-color: #707070;
  --titlebar-text-color-focused: #CCC;
  --vault-name-font-weight: 600;
  --vault-profile-color: #CCC;
  --vault-profile-color-hover: #CCC;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(27, 27, 27);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgb(27, 27, 27);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > em, em {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > i, i {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > strong, strong {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .text-highlight {
  background-color: rgb(73, 65, 19);
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body del {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body p {
  color: rgb(112, 112, 112);
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}`,
    links: `body a.external, footer a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: underline rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: underline rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body a.internal.broken {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: underline rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dt {
  color: rgb(204, 204, 204);
}

body ol > li {
  color: rgb(204, 204, 204);
}

body ol.overflow {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
}

body ul.overflow {
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body blockquote {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 227.016px;
}

body td {
  color: rgb(204, 204, 204);
}

body th {
  color: rgb(204, 204, 204);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(204, 204, 204);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 112, 112);
  text-decoration: line-through rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    search: `body .search > .search-button {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space {
  background-color: rgb(27, 27, 27);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body h1 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(204, 204, 204);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}`,
    footer: `body footer {
  background-color: rgb(20, 20, 20);
  color: rgb(112, 112, 112);
}

body footer ul li a {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}

body .darkmode svg {
  color: rgb(112, 112, 112);
  stroke: rgb(112, 112, 112);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}

body .breadcrumb-element p {
  color: rgb(112, 112, 112);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .metadata {
  color: rgb(112, 112, 112);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body input[type=text] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}

body kbd {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
}

body summary {
  color: rgb(204, 204, 204);
}

body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #F7F7F7;
  --background-secondary: #FCFCFC;
  --bases-cards-background: #F7F7F7;
  --bases-group-heading-property-color: #B5B3B1;
  --bases-table-cell-background-active: #F7F7F7;
  --bases-table-header-background: #F7F7F7;
  --bases-table-header-color: #B5B3B1;
  --bases-table-summary-background: #F7F7F7;
  --blur-background: color-mix(in srgb, #F7F7F7 65%, transparent) linear-gradient(#F7F7F7, color-mix(in srgb, #F7F7F7 65%, transparent));
  --bodyFont: var(--font-text);
  --callout-title-color: #1A1A1A;
  --canvas-background: #F7F7F7;
  --canvas-card-label-color: #B5B3B1;
  --caret-color: #1A1A1A;
  --checkbox-border-color: #B5B3B1;
  --checkbox-border-color-hover: #B5B3B1;
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-marker-color: transparent;
  --checklist-done-color: #B5B3B1;
  --code-comment: #B5B3B1;
  --code-normal: #1A1A1A;
  --code-punctuation: #B5B3B1;
  --codeFont: var(--font-text);
  --collapse-icon-color: #B5B3B1;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --file-header-background: #F7F7F7;
  --file-header-background-focused: #F7F7F7;
  --file-line-width: min(800px, 98vw);
  --file-margins: 64px 32px 32px 32px;
  --flair-color: #1A1A1A;
  --font-mermaid: "iA Writer Duo", '??', "iA Writer Duo", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text: "iA Writer Duo", '??', "iA Writer Duo", '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-id-color: #B5B3B1;
  --footnote-id-color-no-occurrences: #B5B3B1;
  --footnote-line-height: 1.7;
  --graph-node: #B5B3B1;
  --graph-node-unresolved: #B5B3B1;
  --graph-text: #1A1A1A;
  --gray: var(--text-muted);
  --h1-color: #1A1A1A;
  --h1-size: 16px;
  --h2-size: 16px;
  --h3-size: 16px;
  --h4-size: 16px;
  --h5-line-height: 1.7;
  --h5-size: 16px;
  --h6-line-height: 1.7;
  --h6-size: 16px;
  --headerFont: var(--font-text);
  --heading-formatting: #B5B3B1;
  --highlight: var(--text-highlight-bg);
  --icon-color: #B5B3B1;
  --icon-color-focused: #1A1A1A;
  --icon-color-hover: #B5B3B1;
  --inline-title-color: #1A1A1A;
  --inline-title-size: 16px;
  --input-date-separator: #B5B3B1;
  --input-placeholder-color: #B5B3B1;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.7;
  --link-color: #1A1A1A;
  --link-external-color: #1A1A1A;
  --link-external-color-hover: rgb(138, 92, 245);
  --link-external-decoration-color: #B5B3B1;
  --link-unresolved-color: #1A1A1A;
  --link-unresolved-decoration-color: #B5B3B1;
  --link-unresolved-opacity: 1;
  --list-marker-color: #1A1A1A;
  --list-marker-color-hover: #B5B3B1;
  --menu-background: #FCFCFC;
  --metadata-input-text-color: #1A1A1A;
  --metadata-label-text-color: #B5B3B1;
  --metadata-label-text-color-hover: #B5B3B1;
  --modal-background: #F7F7F7;
  --nav-collapse-icon-color: #B5B3B1;
  --nav-collapse-icon-color-collapsed: #B5B3B1;
  --nav-heading-color: #1A1A1A;
  --nav-heading-color-collapsed: #B5B3B1;
  --nav-heading-color-collapsed-hover: #B5B3B1;
  --nav-heading-color-hover: #1A1A1A;
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-color: #1A1A1A;
  --nav-item-color-active: #1A1A1A;
  --nav-item-color-hover: #1A1A1A;
  --nav-item-color-selected: #1A1A1A;
  --nav-tag-color: #B5B3B1;
  --nav-tag-color-active: #B5B3B1;
  --nav-tag-color-hover: #B5B3B1;
  --pdf-background: #F7F7F7;
  --pdf-page-background: #F7F7F7;
  --pdf-sidebar-background: #F7F7F7;
  --pill-color: #B5B3B1;
  --pill-color-hover: #1A1A1A;
  --pill-color-remove: #B5B3B1;
  --prompt-background: #F7F7F7;
  --raised-background: color-mix(in srgb, #F7F7F7 65%, transparent) linear-gradient(#F7F7F7, color-mix(in srgb, #F7F7F7 65%, transparent));
  --ribbon-background: #FCFCFC;
  --ribbon-background-collapsed: #F7F7F7;
  --search-clear-button-color: #B5B3B1;
  --search-icon-color: #B5B3B1;
  --search-result-background: #F7F7F7;
  --setting-group-heading-color: #1A1A1A;
  --status-bar-background: #FCFCFC;
  --status-bar-text-color: #B5B3B1;
  --suggestion-background: #F7F7F7;
  --tab-background-active: #F7F7F7;
  --tab-container-background: #FCFCFC;
  --tab-switcher-background: #FCFCFC;
  --tab-switcher-menubar-background: linear-gradient(to top, #FCFCFC, transparent);
  --tab-text-color: #1A1A1A;
  --tab-text-color-active: #1A1A1A;
  --tab-text-color-focused: #1A1A1A;
  --tab-text-color-focused-active: #1A1A1A;
  --tab-text-color-focused-active-current: #1A1A1A;
  --table-drag-handle-color: #B5B3B1;
  --table-header-color: #1A1A1A;
  --text-faint: #B5B3B1;
  --text-highlight-bg: #FCEA95;
  --text-highlight-border: 4px solid #FFD700;
  --text-highlight-color: #1A1A1A;
  --text-muted: #B5B3B1;
  --text-normal: #1A1A1A;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #FCFCFC;
  --titlebar-background-focused: #FCFCFC;
  --titlebar-text-color: #B5B3B1;
  --titlebar-text-color-focused: #1A1A1A;
  --vault-name-font-weight: 600;
  --vault-profile-color: #1A1A1A;
  --vault-profile-color-hover: #1A1A1A;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(252, 252, 252);
  color: rgb(26, 26, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 252);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(252, 252, 252);
  color: rgb(26, 26, 26);
}

body div#quartz-root {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > em, em {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > i, i {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > strong, strong {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .text-highlight {
  background-color: rgb(252, 234, 149);
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body del {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body p {
  color: rgb(181, 179, 177);
  outline: rgb(181, 179, 177) none 0px;
  text-decoration: rgb(181, 179, 177);
  text-decoration-color: rgb(181, 179, 177);
}`,
    links: `body a.external, footer a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body a.internal.broken {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(181, 179, 177);
  text-decoration-color: rgb(181, 179, 177);
}`,
    lists: `body dd {
  color: rgb(26, 26, 26);
}

body dt {
  color: rgb(26, 26, 26);
}

body ol > li {
  color: rgb(26, 26, 26);
}

body ol.overflow {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ul > li {
  color: rgb(26, 26, 26);
}

body ul.overflow {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(181, 179, 177);
  text-decoration: rgb(181, 179, 177);
}

body blockquote {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body table {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 227.016px;
}

body td {
  color: rgb(26, 26, 26);
}

body th {
  color: rgb(26, 26, 26);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(26, 26, 26);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body figcaption {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
}

body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(181, 179, 177);
  text-decoration: line-through rgb(181, 179, 177);
  text-decoration-color: rgb(181, 179, 177);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    search: `body .search > .search-button {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 247);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body h1 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-corner {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-track {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}`,
    footer: `body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(181, 179, 177);
}

body footer ul li a {
  color: rgb(181, 179, 177);
  text-decoration: rgb(181, 179, 177);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 26, 26);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body li.section-li > .section .meta {
  color: rgb(26, 26, 26);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}

body .darkmode svg {
  color: rgb(181, 179, 177);
  stroke: rgb(181, 179, 177);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}

body .breadcrumb-element p {
  color: rgb(181, 179, 177);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .metadata {
  color: rgb(181, 179, 177);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(252, 252, 252);
}

body .page-header h2.page-title {
  color: rgb(26, 26, 26);
}

body abbr {
  color: rgb(26, 26, 26);
  text-decoration: underline dotted rgb(26, 26, 26);
}

body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body input[type=text] {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}

body kbd {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body sub {
  color: rgb(26, 26, 26);
}

body summary {
  color: rgb(26, 26, 26);
}

body sup {
  color: rgb(26, 26, 26);
}`,
  },
};
