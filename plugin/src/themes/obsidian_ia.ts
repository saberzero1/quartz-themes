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
  --background-code: #242524 !important;
  --background-code-preview: #1d1d1e !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-preview: #101010 !important;
  --background-primary: #191a19 !important;
  --background-primary-alt: #191a19 !important;
  --background-quick: #191a19 !important;
  --background-secondary: #141514 !important;
  --background-secondary-alt: #242524 !important;
  --background-tag: #000000 !important;
  --bases-cards-background: #191a19 !important;
  --bases-cards-cover-background: #191a19 !important;
  --bases-group-heading-property-color: #ecebea !important;
  --bases-table-cell-background-active: #191a19 !important;
  --bases-table-cell-background-disabled: #191a19 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00c1ff !important;
  --bases-table-group-background: #191a19 !important;
  --bases-table-header-background: #191a19 !important;
  --bases-table-header-color: #ecebea !important;
  --bases-table-summary-background: #191a19 !important;
  --blockquote-border-color: #00c1ff !important;
  --bodyFont: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #191a19 !important;
  --canvas-card-label-color: #8e8f92 !important;
  --caret-color: #cbcccc !important;
  --checkbox-border-color: #8e8f92 !important;
  --checkbox-border-color-hover: #ecebea !important;
  --checkbox-color: #00c1ff !important;
  --checkbox-color-hover: #00b1ef !important;
  --checkbox-marker-color: #191a19 !important;
  --checklist-done-color: #ecebea !important;
  --code-background: #191a19 !important;
  --code-comment: #8e8f92 !important;
  --code-normal: #cbcccc !important;
  --code-punctuation: #ecebea !important;
  --codeFont: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #8e8f92 !important;
  --collapse-icon-color-collapsed: #00c1ff !important;
  --dark: #cbcccc !important;
  --darkgray: #cbcccc !important;
  --default-font: system, BlinkMacSystemFont, 'iA Writer Mono V', monospace !important;
  --divider-color-hover: #00c1ff !important;
  --embed-border-start: 2px solid #00c1ff !important;
  --file-header-background: #191a19 !important;
  --file-header-background-focused: #191a19 !important;
  --file-header-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-hr: #2e2e2e !important;
  --flair-color: #cbcccc !important;
  --font-interface: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: #ecebea !important;
  --footnote-id-color-no-occurrences: #8e8f92 !important;
  --graph-node: #ecebea !important;
  --graph-node-focused: #00c1ff !important;
  --graph-node-unresolved: #8e8f92 !important;
  --graph-text: #cbcccc !important;
  --gray: #ecebea !important;
  --headerFont: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #8e8f92 !important;
  --highlight: rgba(215, 120, 0, 0.5) !important;
  --icon-color: #ecebea !important;
  --icon-color-active: #00c1ff !important;
  --icon-color-focused: #cbcccc !important;
  --icon-color-hover: #ecebea !important;
  --input-date-separator: #8e8f92 !important;
  --input-placeholder-color: #8e8f92 !important;
  --interactive-accent: #00c1ff !important;
  --interactive-accent-hover: #00b1ef !important;
  --interactive-accent-rgb: 0, 193, 255 !important;
  --leaf-handle: #242524 !important;
  --light: #191a19 !important;
  --lightgray: #141514 !important;
  --link-color: #00c1ff !important;
  --link-color-hover: #00b1ef !important;
  --link-external-color: #00c1ff !important;
  --link-external-color-hover: #00b1ef !important;
  --link-unresolved-color: #00c1ff !important;
  --list-marker-color: #8e8f92 !important;
  --list-marker-color-collapsed: #00c1ff !important;
  --list-marker-color-hover: #ecebea !important;
  --menu-background: #141514 !important;
  --menu-selection: #5f5d5b !important;
  --menu-selection-text: #cbcccc !important;
  --metadata-input-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #cbcccc !important;
  --metadata-label-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #ecebea !important;
  --metadata-label-text-color-hover: #ecebea !important;
  --modal-background: #191a19 !important;
  --nav-collapse-icon-color: #8e8f92 !important;
  --nav-collapse-icon-color-collapsed: #8e8f92 !important;
  --nav-heading-color: #cbcccc !important;
  --nav-heading-color-collapsed: #8e8f92 !important;
  --nav-heading-color-collapsed-hover: #ecebea !important;
  --nav-heading-color-hover: #cbcccc !important;
  --nav-item-color: #ecebea !important;
  --nav-item-color-active: #cbcccc !important;
  --nav-item-color-highlighted: #00c1ff !important;
  --nav-item-color-hover: #cbcccc !important;
  --nav-item-color-selected: #cbcccc !important;
  --nav-tag-color: #8e8f92 !important;
  --nav-tag-color-active: #ecebea !important;
  --nav-tag-color-hover: #ecebea !important;
  --pdf-background: #191a19 !important;
  --pdf-page-background: #191a19 !important;
  --pdf-sidebar-background: #191a19 !important;
  --pill-color: #ecebea !important;
  --pill-color-hover: #cbcccc !important;
  --pill-color-remove: #8e8f92 !important;
  --pill-color-remove-hover: #00c1ff !important;
  --prompt-background: #191a19 !important;
  --quattro-font: 'iA Writer Quattro V', sans-serif !important;
  --ribbon-background: #141514 !important;
  --ribbon-background-collapsed: #191a19 !important;
  --scrollbar-bg: #191919 !important;
  --search-clear-button-color: #ecebea !important;
  --search-icon-color: #ecebea !important;
  --search-result-background: #191a19 !important;
  --secondary: #00c1ff !important;
  --setting-group-heading-color: #cbcccc !important;
  --setting-items-background: #191a19 !important;
  --status-bar-background: #141514 !important;
  --status-bar-text-color: #ecebea !important;
  --suggestion-background: #191a19 !important;
  --tab-background-active: #191a19 !important;
  --tab-container-background: #141514 !important;
  --tab-switcher-background: #141514 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #141514, transparent) !important;
  --tab-text-color: #8e8f92 !important;
  --tab-text-color-active: #ecebea !important;
  --tab-text-color-focused: #ecebea !important;
  --tab-text-color-focused-active: #ecebea !important;
  --tab-text-color-focused-active-current: #cbcccc !important;
  --tab-text-color-focused-highlighted: #00c1ff !important;
  --table-drag-handle-background-active: #00c1ff !important;
  --table-drag-handle-color: #8e8f92 !important;
  --table-drag-handle-color-active: #cbcccc !important;
  --table-header-color: #cbcccc !important;
  --table-line: #e6e6e6 !important;
  --table-selection-border-color: #00c1ff !important;
  --tag-color: #00c1ff !important;
  --tag-color-hover: #00c1ff !important;
  --tertiary: #00b1ef !important;
  --text-accent: #00c1ff !important;
  --text-accent-hover: #00b1ef !important;
  --text-faint: #8e8f92 !important;
  --text-highlight-bg: rgba(215, 120, 0, 0.5) !important;
  --text-muted: #ecebea !important;
  --text-normal: #cbcccc !important;
  --text-on-accent: #cbcccc !important;
  --text-selection: #20434e !important;
  --text-tag: #8c8c8c !important;
  --textHighlight: rgba(215, 120, 0, 0.5) !important;
  --titleFont: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #141514 !important;
  --titlebar-background-focused: #242524 !important;
  --titlebar-text-color: #ecebea !important;
  --titlebar-text-color-focused: #cbcccc !important;
  --vault-profile-color: #cbcccc !important;
  --vault-profile-color-hover: #cbcccc !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
  --background-code: #edeeee !important;
  --background-code-preview: #f0f0f0 !important;
  --background-modifier-cover: rgba(255, 255, 255, 0.8) !important;
  --background-preview: #fcfcfc !important;
  --background-primary: #f7f7f7 !important;
  --background-primary-alt: #f7f7f7 !important;
  --background-quick: #f7f7f7 !important;
  --background-secondary: #fcfcfc !important;
  --background-secondary-alt: #ecebea !important;
  --background-tag: #ffffff !important;
  --bases-cards-background: #f7f7f7 !important;
  --bases-cards-cover-background: #f7f7f7 !important;
  --bases-group-heading-property-color: #101010 !important;
  --bases-table-cell-background-active: #f7f7f7 !important;
  --bases-table-cell-background-disabled: #f7f7f7 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00b1ef !important;
  --bases-table-group-background: #f7f7f7 !important;
  --bases-table-header-background: #f7f7f7 !important;
  --bases-table-header-color: #101010 !important;
  --bases-table-summary-background: #f7f7f7 !important;
  --blockquote-border-color: #00b1ef !important;
  --blur-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent)) !important;
  --bodyFont: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #f7f7f7 !important;
  --canvas-card-label-color: #9c9c9c !important;
  --caret-color: #191919 !important;
  --checkbox-border-color: #9c9c9c !important;
  --checkbox-border-color-hover: #101010 !important;
  --checkbox-color: #00b1ef !important;
  --checkbox-color-hover: #00c1ff !important;
  --checkbox-marker-color: #f7f7f7 !important;
  --checklist-done-color: #101010 !important;
  --code-background: #f7f7f7 !important;
  --code-comment: #9c9c9c !important;
  --code-normal: #191919 !important;
  --code-punctuation: #101010 !important;
  --codeFont: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #9c9c9c !important;
  --collapse-icon-color-collapsed: #00b1ef !important;
  --dark: #191919 !important;
  --darkgray: #191919 !important;
  --default-font: system, BlinkMacSystemFont, 'iA Writer Mono V', monospace !important;
  --divider-color-hover: #00b1ef !important;
  --embed-border-start: 2px solid #00b1ef !important;
  --file-header-background: #f7f7f7 !important;
  --file-header-background-focused: #f7f7f7 !important;
  --file-header-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-hr: #ecebea !important;
  --flair-color: #191919 !important;
  --font-interface: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: #101010 !important;
  --footnote-id-color-no-occurrences: #9c9c9c !important;
  --graph-node: #101010 !important;
  --graph-node-focused: #00b1ef !important;
  --graph-node-unresolved: #9c9c9c !important;
  --graph-text: #191919 !important;
  --gray: #101010 !important;
  --headerFont: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #9c9c9c !important;
  --highlight: rgba(255, 228, 0, 0.5) !important;
  --icon-color: #101010 !important;
  --icon-color-active: #00b1ef !important;
  --icon-color-focused: #191919 !important;
  --icon-color-hover: #101010 !important;
  --input-date-separator: #9c9c9c !important;
  --input-placeholder-color: #9c9c9c !important;
  --interactive-accent: #00b1ef !important;
  --interactive-accent-hover: #00c1ff !important;
  --interactive-accent-rgb: 0, 193, 255 !important;
  --leaf-handle: #ecebea !important;
  --light: #f7f7f7 !important;
  --lightgray: #fcfcfc !important;
  --link-color: #00b1ef !important;
  --link-color-hover: #00c1ff !important;
  --link-external-color: #00b1ef !important;
  --link-external-color-hover: #00c1ff !important;
  --link-unresolved-color: #00b1ef !important;
  --list-marker-color: #9c9c9c !important;
  --list-marker-color-collapsed: #00b1ef !important;
  --list-marker-color-hover: #101010 !important;
  --menu-background: #fcfcfc !important;
  --menu-selection: #c4c3c2 !important;
  --menu-selection-text: #191919 !important;
  --metadata-input-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #191919 !important;
  --metadata-label-font: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #101010 !important;
  --metadata-label-text-color-hover: #101010 !important;
  --modal-background: #f7f7f7 !important;
  --nav-collapse-icon-color: #9c9c9c !important;
  --nav-collapse-icon-color-collapsed: #9c9c9c !important;
  --nav-heading-color: #191919 !important;
  --nav-heading-color-collapsed: #9c9c9c !important;
  --nav-heading-color-collapsed-hover: #101010 !important;
  --nav-heading-color-hover: #191919 !important;
  --nav-item-color: #101010 !important;
  --nav-item-color-active: #191919 !important;
  --nav-item-color-highlighted: #00b1ef !important;
  --nav-item-color-hover: #191919 !important;
  --nav-item-color-selected: #191919 !important;
  --nav-tag-color: #9c9c9c !important;
  --nav-tag-color-active: #101010 !important;
  --nav-tag-color-hover: #101010 !important;
  --pdf-background: #f7f7f7 !important;
  --pdf-page-background: #f7f7f7 !important;
  --pdf-sidebar-background: #f7f7f7 !important;
  --pill-color: #101010 !important;
  --pill-color-hover: #191919 !important;
  --pill-color-remove: #9c9c9c !important;
  --pill-color-remove-hover: #00b1ef !important;
  --prompt-background: #f7f7f7 !important;
  --quattro-font: 'iA Writer Quattro V', sans-serif !important;
  --raised-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent)) !important;
  --ribbon-background: #fcfcfc !important;
  --ribbon-background-collapsed: #f7f7f7 !important;
  --scrollbar-bg: #fcfcfc !important;
  --search-clear-button-color: #101010 !important;
  --search-icon-color: #101010 !important;
  --search-result-background: #f7f7f7 !important;
  --secondary: #00b1ef !important;
  --setting-group-heading-color: #191919 !important;
  --setting-items-background: #f7f7f7 !important;
  --status-bar-background: #fcfcfc !important;
  --status-bar-text-color: #101010 !important;
  --suggestion-background: #f7f7f7 !important;
  --tab-background-active: #f7f7f7 !important;
  --tab-container-background: #fcfcfc !important;
  --tab-switcher-background: #fcfcfc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent) !important;
  --tab-text-color: #9c9c9c !important;
  --tab-text-color-active: #101010 !important;
  --tab-text-color-focused: #101010 !important;
  --tab-text-color-focused-active: #101010 !important;
  --tab-text-color-focused-active-current: #191919 !important;
  --tab-text-color-focused-highlighted: #00b1ef !important;
  --table-drag-handle-background-active: #00b1ef !important;
  --table-drag-handle-color: #9c9c9c !important;
  --table-drag-handle-color-active: #f7f7f7 !important;
  --table-header-color: #191919 !important;
  --table-line: #f1f1f1 !important;
  --table-selection-border-color: #00b1ef !important;
  --tag-color: #00b1ef !important;
  --tag-color-hover: #00b1ef !important;
  --tertiary: #00c1ff !important;
  --text-accent: #00b1ef !important;
  --text-accent-hover: #00c1ff !important;
  --text-faint: #9c9c9c !important;
  --text-highlight-bg: rgba(255, 228, 0, 0.5) !important;
  --text-muted: #101010 !important;
  --text-normal: #191919 !important;
  --text-on-accent: #f7f7f7 !important;
  --text-selection: #c9e9f4 !important;
  --text-tag: #8c8c8c !important;
  --textHighlight: rgba(255, 228, 0, 0.5) !important;
  --titleFont: '??', '??', -apple-system, BlinkMacSystemFont, 'iA Writer Mono V', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #fcfcfc !important;
  --titlebar-background-focused: #ecebea !important;
  --titlebar-text-color: #101010 !important;
  --titlebar-text-color-focused: #191919 !important;
  --vault-profile-color: #191919 !important;
  --vault-profile-color-hover: #191919 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
