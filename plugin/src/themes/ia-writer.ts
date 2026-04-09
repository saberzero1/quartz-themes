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
  --background-primary: #1B1B1B !important;
  --background-secondary: #141414 !important;
  --bases-cards-background: #1B1B1B !important;
  --bases-group-heading-property-color: #707070 !important;
  --bases-table-cell-background-active: #1B1B1B !important;
  --bases-table-header-background: #1B1B1B !important;
  --bases-table-header-color: #707070 !important;
  --bases-table-summary-background: #1B1B1B !important;
  --bodyFont: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-title-color: #CCC;
  --canvas-background: #1B1B1B !important;
  --canvas-card-label-color: #707070 !important;
  --caret-color: #CCC !important;
  --checkbox-border-color: #707070 !important;
  --checkbox-border-color-hover: #707070 !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: transparent !important;
  --checkbox-marker-color: transparent !important;
  --checklist-done-color: #707070 !important;
  --code-comment: #707070 !important;
  --code-normal: #CCC !important;
  --code-punctuation: #707070 !important;
  --codeFont: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #707070 !important;
  --dark: #CCC !important;
  --darkgray: #CCC !important;
  --file-header-background: #1B1B1B !important;
  --file-header-background-focused: #1B1B1B !important;
  --file-line-width: min(800px, 98vw) !important;
  --file-margins: 64px 32px 32px 32px !important;
  --flair-color: #CCC !important;
  --font-mermaid: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: #707070 !important;
  --footnote-id-color-no-occurrences: #707070 !important;
  --footnote-line-height: 1.7 !important;
  --graph-node: #707070 !important;
  --graph-node-unresolved: #707070 !important;
  --graph-text: #CCC !important;
  --gray: #707070 !important;
  --h1-color: #CCC !important;
  --h1-size: 16px !important;
  --h2-size: 16px !important;
  --h3-size: 16px !important;
  --h4-size: 16px !important;
  --h5-line-height: 1.7 !important;
  --h5-size: 16px !important;
  --h6-line-height: 1.7 !important;
  --h6-size: 16px !important;
  --headerFont: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #707070 !important;
  --highlight: #494113 !important;
  --icon-color: #707070 !important;
  --icon-color-focused: #CCC !important;
  --icon-color-hover: #707070 !important;
  --inline-title-color: #CCC !important;
  --inline-title-size: 16px !important;
  --input-date-separator: #707070 !important;
  --input-placeholder-color: #707070 !important;
  --light: #1B1B1B !important;
  --lightgray: #141414 !important;
  --line-height-normal: 1.7 !important;
  --link-color: #CCC !important;
  --link-external-color: #CCC !important;
  --link-external-color-hover: hsl(258, 88%, 66%) !important;
  --link-external-decoration-color: #707070 !important;
  --link-unresolved-color: #CCC !important;
  --link-unresolved-decoration-color: #707070 !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color: #CCC !important;
  --list-marker-color-hover: #707070 !important;
  --menu-background: #141414 !important;
  --metadata-input-text-color: #CCC !important;
  --metadata-label-text-color: #707070 !important;
  --metadata-label-text-color-hover: #707070 !important;
  --modal-background: #1B1B1B !important;
  --nav-collapse-icon-color: #707070 !important;
  --nav-collapse-icon-color-collapsed: #707070 !important;
  --nav-heading-color: #CCC !important;
  --nav-heading-color-collapsed: #707070 !important;
  --nav-heading-color-collapsed-hover: #707070 !important;
  --nav-heading-color-hover: #CCC !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-color: #CCC !important;
  --nav-item-color-active: #CCC !important;
  --nav-item-color-hover: #CCC !important;
  --nav-item-color-selected: #CCC !important;
  --nav-tag-color: #707070 !important;
  --nav-tag-color-active: #707070 !important;
  --nav-tag-color-hover: #707070 !important;
  --pdf-background: #1B1B1B !important;
  --pdf-page-background: #1B1B1B !important;
  --pdf-sidebar-background: #1B1B1B !important;
  --pill-color: #707070 !important;
  --pill-color-hover: #CCC !important;
  --pill-color-remove: #707070 !important;
  --prompt-background: #1B1B1B !important;
  --ribbon-background: #141414 !important;
  --ribbon-background-collapsed: #1B1B1B !important;
  --search-clear-button-color: #707070 !important;
  --search-icon-color: #707070 !important;
  --search-result-background: #1B1B1B !important;
  --setting-group-heading-color: #CCC !important;
  --status-bar-background: #141414 !important;
  --status-bar-text-color: #707070 !important;
  --suggestion-background: #1B1B1B !important;
  --tab-background-active: #1B1B1B !important;
  --tab-container-background: #141414 !important;
  --tab-switcher-background: #141414 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent) !important;
  --tab-text-color: #CCC !important;
  --tab-text-color-active: #CCC !important;
  --tab-text-color-focused: #CCC !important;
  --tab-text-color-focused-active: #CCC !important;
  --tab-text-color-focused-active-current: #CCC !important;
  --table-drag-handle-color: #707070 !important;
  --table-header-color: #CCC !important;
  --text-faint: #707070 !important;
  --text-highlight-bg: #494113 !important;
  --text-highlight-border: 4px solid #D4B000 !important;
  --text-highlight-color: #DCCF99 !important;
  --text-muted: #707070 !important;
  --text-normal: #CCC !important;
  --textHighlight: #494113 !important;
  --titleFont: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #141414 !important;
  --titlebar-background-focused: #141414 !important;
  --titlebar-text-color: #707070 !important;
  --titlebar-text-color-focused: #CCC !important;
  --vault-name-font-weight: 600 !important;
  --vault-profile-color: #CCC !important;
  --vault-profile-color-hover: #CCC !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(27, 27, 27);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 20, 20);
  border-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(27, 27, 27);
  color: rgb(204, 204, 204);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(73, 65, 19);
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(112, 112, 112);
  outline: rgb(112, 112, 112) none 0px;
  text-decoration-color: rgb(112, 112, 112);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: underline rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body blockquote {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 227.016px;
}

html[saved-theme="dark"] body td {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body th {
  color: rgb(204, 204, 204);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(204, 204, 204);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  color: rgb(112, 112, 112);
  content: "[x]";
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(27, 27, 27);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(204, 204, 204);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(27, 27, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 27, 27);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 204, 204);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 20, 20);
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(112, 112, 112);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(112, 112, 112);
  stroke: rgb(112, 112, 112);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(112, 112, 112);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(112, 112, 112);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #F7F7F7 !important;
  --background-secondary: #FCFCFC !important;
  --bases-cards-background: #F7F7F7 !important;
  --bases-group-heading-property-color: #B5B3B1 !important;
  --bases-table-cell-background-active: #F7F7F7 !important;
  --bases-table-header-background: #F7F7F7 !important;
  --bases-table-header-color: #B5B3B1 !important;
  --bases-table-summary-background: #F7F7F7 !important;
  --blur-background: color-mix(in srgb, #F7F7F7 65%, transparent) linear-gradient(#F7F7F7, color-mix(in srgb, #F7F7F7 65%, transparent)) !important;
  --bodyFont: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-title-color: #1A1A1A;
  --canvas-background: #F7F7F7 !important;
  --canvas-card-label-color: #B5B3B1 !important;
  --caret-color: #1A1A1A !important;
  --checkbox-border-color: #B5B3B1 !important;
  --checkbox-border-color-hover: #B5B3B1 !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: transparent !important;
  --checkbox-marker-color: transparent !important;
  --checklist-done-color: #B5B3B1 !important;
  --code-comment: #B5B3B1 !important;
  --code-normal: #1A1A1A !important;
  --code-punctuation: #B5B3B1 !important;
  --codeFont: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #B5B3B1 !important;
  --dark: #1A1A1A !important;
  --darkgray: #1A1A1A !important;
  --file-header-background: #F7F7F7 !important;
  --file-header-background-focused: #F7F7F7 !important;
  --file-line-width: min(800px, 98vw) !important;
  --file-margins: 64px 32px 32px 32px !important;
  --flair-color: #1A1A1A !important;
  --font-mermaid: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: #B5B3B1 !important;
  --footnote-id-color-no-occurrences: #B5B3B1 !important;
  --footnote-line-height: 1.7 !important;
  --graph-node: #B5B3B1 !important;
  --graph-node-unresolved: #B5B3B1 !important;
  --graph-text: #1A1A1A !important;
  --gray: #B5B3B1 !important;
  --h1-color: #1A1A1A !important;
  --h1-size: 16px !important;
  --h2-size: 16px !important;
  --h3-size: 16px !important;
  --h4-size: 16px !important;
  --h5-line-height: 1.7 !important;
  --h5-size: 16px !important;
  --h6-line-height: 1.7 !important;
  --h6-size: 16px !important;
  --headerFont: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #B5B3B1 !important;
  --highlight: #FCEA95 !important;
  --icon-color: #B5B3B1 !important;
  --icon-color-focused: #1A1A1A !important;
  --icon-color-hover: #B5B3B1 !important;
  --inline-title-color: #1A1A1A !important;
  --inline-title-size: 16px !important;
  --input-date-separator: #B5B3B1 !important;
  --input-placeholder-color: #B5B3B1 !important;
  --light: #F7F7F7 !important;
  --lightgray: #FCFCFC !important;
  --line-height-normal: 1.7 !important;
  --link-color: #1A1A1A !important;
  --link-external-color: #1A1A1A !important;
  --link-external-color-hover: hsl(258, 88%, 66%) !important;
  --link-external-decoration-color: #B5B3B1 !important;
  --link-unresolved-color: #1A1A1A !important;
  --link-unresolved-decoration-color: #B5B3B1 !important;
  --link-unresolved-opacity: 1 !important;
  --list-marker-color: #1A1A1A !important;
  --list-marker-color-hover: #B5B3B1 !important;
  --menu-background: #FCFCFC !important;
  --metadata-input-text-color: #1A1A1A !important;
  --metadata-label-text-color: #B5B3B1 !important;
  --metadata-label-text-color-hover: #B5B3B1 !important;
  --modal-background: #F7F7F7 !important;
  --nav-collapse-icon-color: #B5B3B1 !important;
  --nav-collapse-icon-color-collapsed: #B5B3B1 !important;
  --nav-heading-color: #1A1A1A !important;
  --nav-heading-color-collapsed: #B5B3B1 !important;
  --nav-heading-color-collapsed-hover: #B5B3B1 !important;
  --nav-heading-color-hover: #1A1A1A !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-color: #1A1A1A !important;
  --nav-item-color-active: #1A1A1A !important;
  --nav-item-color-hover: #1A1A1A !important;
  --nav-item-color-selected: #1A1A1A !important;
  --nav-tag-color: #B5B3B1 !important;
  --nav-tag-color-active: #B5B3B1 !important;
  --nav-tag-color-hover: #B5B3B1 !important;
  --pdf-background: #F7F7F7 !important;
  --pdf-page-background: #F7F7F7 !important;
  --pdf-sidebar-background: #F7F7F7 !important;
  --pill-color: #B5B3B1 !important;
  --pill-color-hover: #1A1A1A !important;
  --pill-color-remove: #B5B3B1 !important;
  --prompt-background: #F7F7F7 !important;
  --raised-background: color-mix(in srgb, #F7F7F7 65%, transparent) linear-gradient(#F7F7F7, color-mix(in srgb, #F7F7F7 65%, transparent)) !important;
  --ribbon-background: #FCFCFC !important;
  --ribbon-background-collapsed: #F7F7F7 !important;
  --search-clear-button-color: #B5B3B1 !important;
  --search-icon-color: #B5B3B1 !important;
  --search-result-background: #F7F7F7 !important;
  --setting-group-heading-color: #1A1A1A !important;
  --status-bar-background: #FCFCFC !important;
  --status-bar-text-color: #B5B3B1 !important;
  --suggestion-background: #F7F7F7 !important;
  --tab-background-active: #F7F7F7 !important;
  --tab-container-background: #FCFCFC !important;
  --tab-switcher-background: #FCFCFC !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #FCFCFC, transparent) !important;
  --tab-text-color: #1A1A1A !important;
  --tab-text-color-active: #1A1A1A !important;
  --tab-text-color-focused: #1A1A1A !important;
  --tab-text-color-focused-active: #1A1A1A !important;
  --tab-text-color-focused-active-current: #1A1A1A !important;
  --table-drag-handle-color: #B5B3B1 !important;
  --table-header-color: #1A1A1A !important;
  --text-faint: #B5B3B1 !important;
  --text-highlight-bg: #FCEA95 !important;
  --text-highlight-border: 4px solid #FFD700 !important;
  --text-highlight-color: #1A1A1A !important;
  --text-muted: #B5B3B1 !important;
  --text-normal: #1A1A1A !important;
  --textHighlight: #FCEA95 !important;
  --titleFont: "iA Writer Duo", "iA Writer Duo", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #FCFCFC !important;
  --titlebar-background-focused: #FCFCFC !important;
  --titlebar-text-color: #B5B3B1 !important;
  --titlebar-text-color-focused: #1A1A1A !important;
  --vault-name-font-weight: 600 !important;
  --vault-profile-color: #1A1A1A !important;
  --vault-profile-color-hover: #1A1A1A !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(252, 252, 252);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(247, 247, 247);
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(181, 179, 177);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(181, 179, 177);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(181, 179, 177);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 252);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(252, 252, 252);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(252, 234, 149);
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body del {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-width: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(181, 179, 177);
  outline: rgb(181, 179, 177) none 0px;
  text-decoration-color: rgb(181, 179, 177);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: underline rgb(181, 179, 177);
  text-decoration-color: rgb(181, 179, 177);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(181, 179, 177);
}

html[saved-theme="light"] body blockquote {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body table {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 227.016px;
}

html[saved-theme="light"] body td {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body th {
  color: rgb(26, 26, 26);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(26, 26, 26);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  color: rgb(181, 179, 177);
  content: "[x]";
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(26, 26, 26);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 26, 26);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 26, 26);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(181, 179, 177);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(181, 179, 177);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 26, 26);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(181, 179, 177);
  stroke: rgb(181, 179, 177);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(181, 179, 177);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .metadata {
  color: rgb(181, 179, 177);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
  font-family: "iA Writer Duo", "??", "iA Writer Duo", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 26, 26);
}`,
  },
};
