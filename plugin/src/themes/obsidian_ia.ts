import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "obsidian_ia",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ia-writer-mono", "ia-writer-quattro"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-code: #242524;
  --background-code-preview: #1d1d1e;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-preview: #101010;
  --background-primary: #191a19;
  --background-primary-alt: #191a19;
  --background-quick: #191a19;
  --background-secondary: #141514;
  --background-secondary-alt: #242524;
  --background-tag: #000000;
  --bases-cards-background: #191a19;
  --bases-cards-cover-background: #191a19;
  --bases-group-heading-property-color: #ecebea;
  --bases-table-cell-background-active: #191a19;
  --bases-table-cell-background-disabled: #191a19;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00c1ff;
  --bases-table-group-background: #191a19;
  --bases-table-header-background: #191a19;
  --bases-table-header-color: #ecebea;
  --bases-table-summary-background: #191a19;
  --blockquote-border-color: #00c1ff;
  --canvas-background: #191a19;
  --canvas-card-label-color: #8e8f92;
  --caret-color: #cbcccc;
  --checkbox-border-color: #8e8f92;
  --checkbox-border-color-hover: #ecebea;
  --checkbox-color: #00c1ff;
  --checkbox-color-hover: #00b1ef;
  --checkbox-marker-color: #191a19;
  --checklist-done-color: #ecebea;
  --code-background: #191a19;
  --code-comment: #8e8f92;
  --code-normal: #cbcccc;
  --code-punctuation: #ecebea;
  --collapse-icon-color: #8e8f92;
  --collapse-icon-color-collapsed: #00c1ff;
  --default-font: system, BlinkMacSystemFont, 'iA Writer Mono V', monospace;
  --divider-color-hover: #00c1ff;
  --embed-border-start: 2px solid #00c1ff;
  --file-header-background: #191a19;
  --file-header-background-focused: #191a19;
  --file-header-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-hr: #2e2e2e;
  --flair-color: #cbcccc;
  --font-interface: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-id-color: #ecebea;
  --footnote-id-color-no-occurrences: #8e8f92;
  --graph-node: #ecebea;
  --graph-node-focused: #00c1ff;
  --graph-node-unresolved: #8e8f92;
  --graph-text: #cbcccc;
  --heading-formatting: #8e8f92;
  --icon-color: #ecebea;
  --icon-color-active: #00c1ff;
  --icon-color-focused: #cbcccc;
  --icon-color-hover: #ecebea;
  --input-date-separator: #8e8f92;
  --input-placeholder-color: #8e8f92;
  --interactive-accent: #00c1ff;
  --interactive-accent-hover: #00b1ef;
  --interactive-accent-rgb: 0, 193, 255;
  --leaf-handle: #242524;
  --link-color: #00c1ff;
  --link-color-hover: #00b1ef;
  --link-external-color: #00c1ff;
  --link-external-color-hover: #00b1ef;
  --link-unresolved-color: #00c1ff;
  --list-marker-color: #8e8f92;
  --list-marker-color-collapsed: #00c1ff;
  --list-marker-color-hover: #ecebea;
  --menu-background: #141514;
  --menu-selection: #5f5d5b;
  --menu-selection-text: #cbcccc;
  --metadata-input-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #cbcccc;
  --metadata-label-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #ecebea;
  --metadata-label-text-color-hover: #ecebea;
  --modal-background: #191a19;
  --nav-collapse-icon-color: #8e8f92;
  --nav-collapse-icon-color-collapsed: #8e8f92;
  --nav-heading-color: #cbcccc;
  --nav-heading-color-collapsed: #8e8f92;
  --nav-heading-color-collapsed-hover: #ecebea;
  --nav-heading-color-hover: #cbcccc;
  --nav-item-color: #ecebea;
  --nav-item-color-active: #cbcccc;
  --nav-item-color-highlighted: #00c1ff;
  --nav-item-color-hover: #cbcccc;
  --nav-item-color-selected: #cbcccc;
  --nav-tag-color: #8e8f92;
  --nav-tag-color-active: #ecebea;
  --nav-tag-color-hover: #ecebea;
  --pdf-background: #191a19;
  --pdf-page-background: #191a19;
  --pdf-sidebar-background: #191a19;
  --pill-color: #ecebea;
  --pill-color-hover: #cbcccc;
  --pill-color-remove: #8e8f92;
  --pill-color-remove-hover: #00c1ff;
  --prompt-background: #191a19;
  --quattro-font: 'iA Writer Quattro V', sans-serif;
  --ribbon-background: #141514;
  --ribbon-background-collapsed: #191a19;
  --scrollbar-bg: #191919;
  --search-clear-button-color: #ecebea;
  --search-icon-color: #ecebea;
  --search-result-background: #191a19;
  --setting-group-heading-color: #cbcccc;
  --setting-items-background: #191a19;
  --status-bar-background: #141514;
  --status-bar-text-color: #ecebea;
  --suggestion-background: #191a19;
  --tab-background-active: #191a19;
  --tab-container-background: #141514;
  --tab-switcher-background: #141514;
  --tab-switcher-menubar-background: linear-gradient(to top, #141514, transparent);
  --tab-text-color: #8e8f92;
  --tab-text-color-active: #ecebea;
  --tab-text-color-focused: #ecebea;
  --tab-text-color-focused-active: #ecebea;
  --tab-text-color-focused-active-current: #cbcccc;
  --tab-text-color-focused-highlighted: #00c1ff;
  --table-drag-handle-background-active: #00c1ff;
  --table-drag-handle-color: #8e8f92;
  --table-drag-handle-color-active: #cbcccc;
  --table-header-color: #cbcccc;
  --table-line: #e6e6e6;
  --table-selection-border-color: #00c1ff;
  --tag-color: #00c1ff;
  --tag-color-hover: #00c1ff;
  --text-accent: #00c1ff;
  --text-accent-hover: #00b1ef;
  --text-faint: #8e8f92;
  --text-highlight-bg: rgba(215, 120, 0, 0.5);
  --text-muted: #ecebea;
  --text-normal: #cbcccc;
  --text-on-accent: #cbcccc;
  --text-selection: #20434e;
  --text-tag: #8c8c8c;
  --titlebar-background: #141514;
  --titlebar-background-focused: #242524;
  --titlebar-text-color: #ecebea;
  --titlebar-text-color-focused: #cbcccc;
  --vault-profile-color: #cbcccc;
  --vault-profile-color-hover: #cbcccc;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 21, 20);
  color: rgb(203, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 26, 25);
  color: rgb(203, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 21, 20);
  color: rgb(203, 204, 204);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 21, 20);
  color: rgb(203, 204, 204);
}

body div#quartz-root {
  background-color: rgb(25, 26, 25);
  color: rgb(203, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(203, 204, 204);
  outline: rgb(203, 204, 204) none 0px;
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body .page article p > em, em {
  color: rgb(203, 204, 204);
  outline: rgb(203, 204, 204) none 0px;
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body .page article p > i, i {
  color: rgb(203, 204, 204);
  outline: rgb(203, 204, 204) none 0px;
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body .page article p > strong, strong {
  color: rgb(203, 204, 204);
  outline: rgb(203, 204, 204) none 0px;
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body .text-highlight {
  background-color: rgba(215, 120, 0, 0.5);
  color: rgb(203, 204, 204);
  outline: rgb(203, 204, 204) none 0px;
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body del {
  color: rgb(203, 204, 204);
  outline: rgb(203, 204, 204) none 0px;
  text-decoration: line-through rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body p {
  color: rgb(236, 235, 234);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(236, 235, 234) none 0px;
  text-decoration: rgb(236, 235, 234);
  text-decoration-color: rgb(236, 235, 234);
}`,
    links: `body a.external, footer a {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(203, 204, 204) none 0px;
  text-decoration: underline rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 193, 255);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(0, 193, 255) none 0px;
  text-decoration: underline rgb(0, 193, 255);
  text-decoration-color: rgb(0, 193, 255);
}

body a.internal.broken {
  color: rgb(0, 193, 255);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(0, 193, 255) none 0px;
}`,
    lists: `body dd {
  color: rgb(203, 204, 204);
}

body dt {
  color: rgb(203, 204, 204);
}

body ol > li {
  color: rgb(203, 204, 204);
}

body ol.overflow {
  background-color: rgb(25, 26, 25);
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body ul > li {
  color: rgb(203, 204, 204);
}

body ul.overflow {
  background-color: rgb(25, 26, 25);
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
}

body blockquote {
  font-family: "iA Writer Quattro V", sans-serif;
  padding-bottom: 2px;
  padding-top: 2px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body table {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  width: 662px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(16, 16, 16);
}

body td {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(203, 204, 204);
  border-bottom-width: 0px;
  border-left-color: rgb(203, 204, 204);
  border-left-width: 0px;
  border-right-color: rgb(203, 204, 204);
  border-right-width: 0px;
  border-top-color: rgb(203, 204, 204);
  border-top-width: 0px;
  color: rgb(203, 204, 204);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  background-color: rgb(16, 16, 16);
  border-left-width: 0px;
  border-right-width: 0px;
  color: rgb(203, 204, 204);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
}

body tr {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}`,
    code: `body code {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
  color: rgb(203, 204, 204);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 29, 30);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 29, 30);
  color: rgb(203, 204, 204);
}

body pre > code, pre:has(> code) {
  background-color: rgb(29, 29, 30);
}

body pre:has(> code) {
  background-color: rgb(29, 29, 30);
}`,
    images: `body audio {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body figcaption {
  color: rgb(203, 204, 204);
}

body figure {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body img {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body video {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}`,
    embeds: `body .file-embed {
  background-color: rgb(25, 26, 25);
  border-bottom-color: rgb(236, 235, 234);
  border-left-color: rgb(236, 235, 234);
  border-right-color: rgb(236, 235, 234);
  border-top-color: rgb(236, 235, 234);
}

body .footnotes {
  border-top-color: rgb(203, 204, 204);
  color: rgb(203, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(0, 193, 255);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(0, 193, 255);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(236, 235, 234);
  text-decoration: line-through rgb(236, 235, 234);
  text-decoration-color: rgb(236, 235, 234);
}

body input[type=checkbox] {
  border-bottom-color: rgb(203, 204, 204);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='*'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='/'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='>'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='?'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='I'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='S'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='b'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='c'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='d'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='f'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='i'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='k'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='l'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='p'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='u'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body li.task-list-item[data-task='w'] {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}`,
    search: `body .search > .search-button {
  color: rgb(203, 204, 204);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 26, 25);
  box-shadow: rgb(36, 37, 36) 0px 0px 25px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(203, 204, 204) none 0px;
  text-decoration: rgb(203, 204, 204);
  text-decoration-color: rgb(203, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(203, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(203, 204, 204);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(203, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(95, 93, 91);
  color: rgb(203, 204, 204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 21, 20);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(95, 93, 91);
  border-bottom-color: rgb(203, 204, 204);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(203, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(95, 93, 91);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(203, 204, 204);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 193, 255);
}

body h1 {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h2 {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h3 {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h4 {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h5 {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h6 {
  color: rgb(203, 204, 204);
  font-family: "iA Writer Quattro V", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(25, 26, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 26, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 26, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 25);
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 26, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 26, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 26, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 26, 25);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(203, 204, 204);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(203, 204, 204);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(203, 204, 204);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(203, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(203, 204, 204);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(203, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(46, 46, 46);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(203, 204, 204);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(236, 235, 234);
  border-left-color: rgb(236, 235, 234);
  border-right-color: rgb(236, 235, 234);
  border-top-color: rgb(236, 235, 234);
  color: rgb(236, 235, 234);
}`,
    footer: `body footer {
  background-color: rgb(20, 21, 20);
  color: rgb(236, 235, 234);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(236, 235, 234);
  text-decoration: rgb(236, 235, 234);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(203, 204, 204);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
  color: rgb(203, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(203, 204, 204);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body li.section-li > .section .meta {
  color: rgb(203, 204, 204);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(203, 204, 204);
  text-decoration: rgb(203, 204, 204);
}

body ul.section-ul {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(236, 235, 234);
  border-left-color: rgb(236, 235, 234);
  border-right-color: rgb(236, 235, 234);
  border-top-color: rgb(236, 235, 234);
  color: rgb(236, 235, 234);
}

body .darkmode svg {
  color: rgb(236, 235, 234);
  stroke: rgb(236, 235, 234);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(236, 235, 234);
  border-left-color: rgb(236, 235, 234);
  border-right-color: rgb(236, 235, 234);
  border-top-color: rgb(236, 235, 234);
  color: rgb(236, 235, 234);
}

body .breadcrumb-element p {
  color: rgb(142, 143, 146);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
  color: rgb(203, 204, 204);
}

body .metadata {
  color: rgb(236, 235, 234);
  font-family: "iA Writer Quattro V", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(236, 235, 234);
  border-left-color: rgb(236, 235, 234);
  border-right-color: rgb(236, 235, 234);
  border-top-color: rgb(236, 235, 234);
  color: rgb(236, 235, 234);
  font-family: "iA Writer Quattro V", sans-serif;
}

body .navigation-progress {
  background-color: rgb(20, 21, 20);
}

body .page-header h2.page-title {
  color: rgb(203, 204, 204);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(203, 204, 204);
  text-decoration: underline dotted rgb(203, 204, 204);
}

body details {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body input[type=text] {
  border-bottom-color: rgb(236, 235, 234);
  border-left-color: rgb(236, 235, 234);
  border-right-color: rgb(236, 235, 234);
  border-top-color: rgb(236, 235, 234);
  color: rgb(236, 235, 234);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(25, 26, 25);
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
  color: rgb(203, 204, 204);
}

body progress {
  border-bottom-color: rgb(203, 204, 204);
  border-left-color: rgb(203, 204, 204);
  border-right-color: rgb(203, 204, 204);
  border-top-color: rgb(203, 204, 204);
}

body sub {
  color: rgb(203, 204, 204);
}

body summary {
  color: rgb(203, 204, 204);
}

body sup {
  color: rgb(203, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --background-code: #edeeee;
  --background-code-preview: #f0f0f0;
  --background-modifier-cover: rgba(255, 255, 255, 0.8);
  --background-preview: #fcfcfc;
  --background-primary: #f7f7f7;
  --background-primary-alt: #f7f7f7;
  --background-quick: #f7f7f7;
  --background-secondary: #fcfcfc;
  --background-secondary-alt: #ecebea;
  --background-tag: #ffffff;
  --bases-cards-background: #f7f7f7;
  --bases-cards-cover-background: #f7f7f7;
  --bases-group-heading-property-color: #101010;
  --bases-table-cell-background-active: #f7f7f7;
  --bases-table-cell-background-disabled: #f7f7f7;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00b1ef;
  --bases-table-group-background: #f7f7f7;
  --bases-table-header-background: #f7f7f7;
  --bases-table-header-color: #101010;
  --bases-table-summary-background: #f7f7f7;
  --blockquote-border-color: #00b1ef;
  --blur-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent));
  --canvas-background: #f7f7f7;
  --canvas-card-label-color: #9c9c9c;
  --caret-color: #191919;
  --checkbox-border-color: #9c9c9c;
  --checkbox-border-color-hover: #101010;
  --checkbox-color: #00b1ef;
  --checkbox-color-hover: #00c1ff;
  --checkbox-marker-color: #f7f7f7;
  --checklist-done-color: #101010;
  --code-background: #f7f7f7;
  --code-comment: #9c9c9c;
  --code-normal: #191919;
  --code-punctuation: #101010;
  --collapse-icon-color: #9c9c9c;
  --collapse-icon-color-collapsed: #00b1ef;
  --default-font: system, BlinkMacSystemFont, 'iA Writer Mono V', monospace;
  --divider-color-hover: #00b1ef;
  --embed-border-start: 2px solid #00b1ef;
  --file-header-background: #f7f7f7;
  --file-header-background-focused: #f7f7f7;
  --file-header-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-hr: #ecebea;
  --flair-color: #191919;
  --font-interface: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-id-color: #101010;
  --footnote-id-color-no-occurrences: #9c9c9c;
  --graph-node: #101010;
  --graph-node-focused: #00b1ef;
  --graph-node-unresolved: #9c9c9c;
  --graph-text: #191919;
  --heading-formatting: #9c9c9c;
  --icon-color: #101010;
  --icon-color-active: #00b1ef;
  --icon-color-focused: #191919;
  --icon-color-hover: #101010;
  --input-date-separator: #9c9c9c;
  --input-placeholder-color: #9c9c9c;
  --interactive-accent: #00b1ef;
  --interactive-accent-hover: #00c1ff;
  --interactive-accent-rgb: 0, 193, 255;
  --leaf-handle: #ecebea;
  --link-color: #00b1ef;
  --link-color-hover: #00c1ff;
  --link-external-color: #00b1ef;
  --link-external-color-hover: #00c1ff;
  --link-unresolved-color: #00b1ef;
  --list-marker-color: #9c9c9c;
  --list-marker-color-collapsed: #00b1ef;
  --list-marker-color-hover: #101010;
  --menu-background: #fcfcfc;
  --menu-selection: #c4c3c2;
  --menu-selection-text: #191919;
  --metadata-input-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #191919;
  --metadata-label-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #101010;
  --metadata-label-text-color-hover: #101010;
  --modal-background: #f7f7f7;
  --nav-collapse-icon-color: #9c9c9c;
  --nav-collapse-icon-color-collapsed: #9c9c9c;
  --nav-heading-color: #191919;
  --nav-heading-color-collapsed: #9c9c9c;
  --nav-heading-color-collapsed-hover: #101010;
  --nav-heading-color-hover: #191919;
  --nav-item-color: #101010;
  --nav-item-color-active: #191919;
  --nav-item-color-highlighted: #00b1ef;
  --nav-item-color-hover: #191919;
  --nav-item-color-selected: #191919;
  --nav-tag-color: #9c9c9c;
  --nav-tag-color-active: #101010;
  --nav-tag-color-hover: #101010;
  --pdf-background: #f7f7f7;
  --pdf-page-background: #f7f7f7;
  --pdf-sidebar-background: #f7f7f7;
  --pill-color: #101010;
  --pill-color-hover: #191919;
  --pill-color-remove: #9c9c9c;
  --pill-color-remove-hover: #00b1ef;
  --prompt-background: #f7f7f7;
  --quattro-font: 'iA Writer Quattro V', sans-serif;
  --raised-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent));
  --ribbon-background: #fcfcfc;
  --ribbon-background-collapsed: #f7f7f7;
  --scrollbar-bg: #fcfcfc;
  --search-clear-button-color: #101010;
  --search-icon-color: #101010;
  --search-result-background: #f7f7f7;
  --setting-group-heading-color: #191919;
  --setting-items-background: #f7f7f7;
  --status-bar-background: #fcfcfc;
  --status-bar-text-color: #101010;
  --suggestion-background: #f7f7f7;
  --tab-background-active: #f7f7f7;
  --tab-container-background: #fcfcfc;
  --tab-switcher-background: #fcfcfc;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent);
  --tab-text-color: #9c9c9c;
  --tab-text-color-active: #101010;
  --tab-text-color-focused: #101010;
  --tab-text-color-focused-active: #101010;
  --tab-text-color-focused-active-current: #191919;
  --tab-text-color-focused-highlighted: #00b1ef;
  --table-drag-handle-background-active: #00b1ef;
  --table-drag-handle-color: #9c9c9c;
  --table-drag-handle-color-active: #f7f7f7;
  --table-header-color: #191919;
  --table-line: #f1f1f1;
  --table-selection-border-color: #00b1ef;
  --tag-color: #00b1ef;
  --tag-color-hover: #00b1ef;
  --text-accent: #00b1ef;
  --text-accent-hover: #00c1ff;
  --text-faint: #9c9c9c;
  --text-highlight-bg: rgba(255, 228, 0, 0.5);
  --text-muted: #101010;
  --text-normal: #191919;
  --text-on-accent: #f7f7f7;
  --text-selection: #c9e9f4;
  --text-tag: #8c8c8c;
  --titlebar-background: #fcfcfc;
  --titlebar-background-focused: #ecebea;
  --titlebar-text-color: #101010;
  --titlebar-text-color-focused: #191919;
  --vault-profile-color: #191919;
  --vault-profile-color-hover: #191919;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(252, 252, 252);
  color: rgb(25, 25, 25);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 247, 247);
  color: rgb(25, 25, 25);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 252);
  color: rgb(25, 25, 25);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(252, 252, 252);
  color: rgb(25, 25, 25);
}

body div#quartz-root {
  background-color: rgb(247, 247, 247);
  color: rgb(25, 25, 25);
}`,
    typography: `body .page article p > b, b {
  color: rgb(25, 25, 25);
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .page article p > em, em {
  color: rgb(25, 25, 25);
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .page article p > i, i {
  color: rgb(25, 25, 25);
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .page article p > strong, strong {
  color: rgb(25, 25, 25);
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .text-highlight {
  background-color: rgba(255, 228, 0, 0.5);
  color: rgb(25, 25, 25);
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body del {
  color: rgb(25, 25, 25);
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: line-through rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body p {
  color: rgb(16, 16, 16);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(16, 16, 16) none 0px;
  text-decoration: rgb(16, 16, 16);
  text-decoration-color: rgb(16, 16, 16);
}`,
    links: `body a.external, footer a {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: underline rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 177, 239);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(0, 177, 239) none 0px;
  text-decoration: underline rgb(0, 177, 239);
  text-decoration-color: rgb(0, 177, 239);
}

body a.internal.broken {
  color: rgb(0, 177, 239);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(0, 177, 239) none 0px;
}`,
    lists: `body dd {
  color: rgb(25, 25, 25);
}

body dt {
  color: rgb(25, 25, 25);
}

body ol > li {
  color: rgb(25, 25, 25);
}

body ol.overflow {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body ul > li {
  color: rgb(25, 25, 25);
}

body ul.overflow {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
}

body blockquote {
  font-family: "iA Writer Quattro V", sans-serif;
  padding-bottom: 2px;
  padding-top: 2px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body table {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
  width: 662px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(252, 252, 252);
}

body td {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-width: 0px;
  border-left-color: rgb(25, 25, 25);
  border-left-width: 0px;
  border-right-color: rgb(25, 25, 25);
  border-right-width: 0px;
  border-top-color: rgb(25, 25, 25);
  border-top-width: 0px;
  color: rgb(25, 25, 25);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  background-color: rgb(252, 252, 252);
  border-left-width: 0px;
  border-right-width: 0px;
  color: rgb(25, 25, 25);
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
}

body tr {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(241, 241, 241);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}`,
    code: `body code {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 240, 240);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 240, 240);
  color: rgb(25, 25, 25);
}

body pre > code, pre:has(> code) {
  background-color: rgb(240, 240, 240);
}

body pre:has(> code) {
  background-color: rgb(240, 240, 240);
}`,
    images: `body audio {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body figcaption {
  color: rgb(25, 25, 25);
}

body figure {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body img {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body video {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    embeds: `body .file-embed {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(16, 16, 16);
  border-left-color: rgb(16, 16, 16);
  border-right-color: rgb(16, 16, 16);
  border-top-color: rgb(16, 16, 16);
}

body .footnotes {
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

body .transclude {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(0, 177, 239);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body .transclude-inner {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(0, 177, 239);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(16, 16, 16);
  text-decoration: line-through rgb(16, 16, 16);
  text-decoration-color: rgb(16, 16, 16);
}

body input[type=checkbox] {
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='*'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='-'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='/'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='>'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='?'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='I'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='S'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='b'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='c'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='d'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='f'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='i'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='k'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='l'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='p'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='u'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='w'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}`,
    search: `body .search > .search-button {
  color: rgb(25, 25, 25);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 247);
  box-shadow: rgb(156, 156, 156) 0px 0px 25px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(196, 195, 194);
  color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(196, 195, 194);
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(25, 25, 25);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(196, 195, 194);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(25, 25, 25);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 177, 239);
}

body h1 {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h2 {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h3 {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h4 {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h5 {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
}

body h6 {
  color: rgb(25, 25, 25);
  font-family: "iA Writer Quattro V", sans-serif;
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
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
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
  color: rgb(25, 25, 25);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(25, 25, 25);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(25, 25, 25);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(25, 25, 25);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(25, 25, 25);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(25, 25, 25);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(236, 235, 234);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(25, 25, 25);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(16, 16, 16);
  border-left-color: rgb(16, 16, 16);
  border-right-color: rgb(16, 16, 16);
  border-top-color: rgb(16, 16, 16);
  color: rgb(16, 16, 16);
}`,
    footer: `body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(16, 16, 16);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(16, 16, 16);
  text-decoration: rgb(16, 16, 16);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(25, 25, 25);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(25, 25, 25);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body li.section-li > .section .meta {
  color: rgb(25, 25, 25);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
}

body ul.section-ul {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(16, 16, 16);
  border-left-color: rgb(16, 16, 16);
  border-right-color: rgb(16, 16, 16);
  border-top-color: rgb(16, 16, 16);
  color: rgb(16, 16, 16);
}

body .darkmode svg {
  color: rgb(16, 16, 16);
  stroke: rgb(16, 16, 16);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(16, 16, 16);
  border-left-color: rgb(16, 16, 16);
  border-right-color: rgb(16, 16, 16);
  border-top-color: rgb(16, 16, 16);
  color: rgb(16, 16, 16);
}

body .breadcrumb-element p {
  color: rgb(156, 156, 156);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

body .metadata {
  color: rgb(16, 16, 16);
  font-family: "iA Writer Quattro V", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(16, 16, 16);
  border-left-color: rgb(16, 16, 16);
  border-right-color: rgb(16, 16, 16);
  border-top-color: rgb(16, 16, 16);
  color: rgb(16, 16, 16);
  font-family: "iA Writer Quattro V", sans-serif;
}

body .navigation-progress {
  background-color: rgb(252, 252, 252);
}

body .page-header h2.page-title {
  color: rgb(25, 25, 25);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(25, 25, 25);
  text-decoration: underline dotted rgb(25, 25, 25);
}

body details {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body input[type=text] {
  border-bottom-color: rgb(16, 16, 16);
  border-left-color: rgb(16, 16, 16);
  border-right-color: rgb(16, 16, 16);
  border-top-color: rgb(16, 16, 16);
  color: rgb(16, 16, 16);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "iA Writer Mono V", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

body progress {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body sub {
  color: rgb(25, 25, 25);
}

body summary {
  color: rgb(25, 25, 25);
}

body sup {
  color: rgb(25, 25, 25);
}`,
  },
};
