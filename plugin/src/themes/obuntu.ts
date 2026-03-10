import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "obuntu", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-mild: #e6b64f !important;
  --accent-strong: #ec0d0d !important;
  --background-modifier-border: #303030 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85) !important;
  --background-modifier-form-field: #343434 !important;
  --background-modifier-form-field-hover: #343434 !important;
  --background-primary: #343434 !important;
  --background-primary-alt: #2c2c2c !important;
  --background-secondary: #2c2c2c !important;
  --background-secondary-alt: #2c2c2c !important;
  --bases-cards-background: #343434 !important;
  --bases-cards-cover-background: #2c2c2c !important;
  --bases-cards-shadow: 0 0 0 1px #303030 !important;
  --bases-embed-border-color: #303030 !important;
  --bases-group-heading-property-color: #999 !important;
  --bases-table-border-color: #303030 !important;
  --bases-table-cell-background-active: #343434 !important;
  --bases-table-cell-background-disabled: #2c2c2c !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #df4a16 !important;
  --bases-table-group-background: #2c2c2c !important;
  --bases-table-header-background: #343434 !important;
  --bases-table-header-color: #999 !important;
  --bases-table-summary-background: #343434 !important;
  --blockquote-border-color: #df4a16 !important;
  --blur-background: color-mix(in srgb, #343434 65%, transparent) linear-gradient(#343434, color-mix(in srgb, #343434 65%, transparent)) !important;
  --bw: #ffffff !important;
  --canvas-background: #343434 !important;
  --canvas-card-label-color: #666 !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: #666 !important;
  --checkbox-border-color-hover: #999 !important;
  --checkbox-color: #df4a16 !important;
  --checkbox-color-hover: #df7a16 !important;
  --checkbox-marker-color: #343434 !important;
  --checklist-done-color: #999 !important;
  --code-background: #2c2c2c !important;
  --code-border-color: #303030 !important;
  --code-comment: #666 !important;
  --code-normal: #dcddde !important;
  --code-punctuation: #999 !important;
  --codeFont: "Fira Code", "Source Code Pro", monospace !important;
  --collapse-icon-color: #666 !important;
  --collapse-icon-color-collapsed: #df4a16 !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --divider-color: #303030 !important;
  --divider-color-hover: #df4a16 !important;
  --dropdown-background: #343434 !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #303030, inset 0 0 0 1px #303030 !important;
  --embed-border-start: 2px solid #df4a16 !important;
  --file-header-background: #343434 !important;
  --file-header-background-focused: #343434 !important;
  --flair-background: #343434 !important;
  --flair-color: #dcddde !important;
  --font-monospace: "Fira Code", "Source Code Pro", monospace !important;
  --footnote-divider-color: #303030 !important;
  --footnote-id-color: #999 !important;
  --footnote-id-color-no-occurrences: #666 !important;
  --graph-node: #999 !important;
  --graph-node-focused: #df4a16 !important;
  --graph-node-unresolved: #666 !important;
  --graph-text: #dcddde !important;
  --gray: #999 !important;
  --heading-formatting: #666 !important;
  --highlight: #df4a16 !important;
  --hr-color: #303030 !important;
  --icon-color: #999 !important;
  --icon-color-active: #df4a16 !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #999 !important;
  --input-date-separator: #666 !important;
  --input-placeholder-color: #666 !important;
  --interactive-accent: #df4a16 !important;
  --interactive-accent-hover: #df7a16 !important;
  --interactive-accent-rgb: #df7a16 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #343434 !important;
  --light: #343434 !important;
  --lightgray: #2c2c2c !important;
  --lines-identation: #535353 !important;
  --link-color: #df4a16 !important;
  --link-color-hover: #df7a16 !important;
  --link-external-color: #df4a16 !important;
  --link-external-color-hover: #df7a16 !important;
  --link-unresolved-color: #df4a16 !important;
  --list-marker-color: #666 !important;
  --list-marker-color-collapsed: #df4a16 !important;
  --list-marker-color-hover: #999 !important;
  --menu-background: #2c2c2c !important;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  --metadata-border-color: #303030 !important;
  --metadata-divider-color: #303030 !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-text-color: #999 !important;
  --metadata-label-text-color-hover: #999 !important;
  --modal-background: #343434 !important;
  --nav-collapse-icon-color: #666 !important;
  --nav-collapse-icon-color-collapsed: #666 !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: #666 !important;
  --nav-heading-color-collapsed-hover: #999 !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-color: #999 !important;
  --nav-item-color-active: #dcddde !important;
  --nav-item-color-highlighted: #df4a16 !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-tag-color: #666 !important;
  --nav-tag-color-active: #999 !important;
  --nav-tag-color-hover: #999 !important;
  --pdf-background: #343434 !important;
  --pdf-page-background: #343434 !important;
  --pdf-shadow: 0 0 0 1px #303030 !important;
  --pdf-sidebar-background: #343434 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #303030 !important;
  --pill-border-color: #303030 !important;
  --pill-color: #999 !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: #666 !important;
  --pill-color-remove-hover: #df4a16 !important;
  --prompt-background: #343434 !important;
  --raised-background: color-mix(in srgb, #343434 65%, transparent) linear-gradient(#343434, color-mix(in srgb, #343434 65%, transparent)) !important;
  --ribbon-background: #2c2c2c !important;
  --ribbon-background-collapsed: #343434 !important;
  --scrollbar-bg: rgba(255, 255, 255, 0) !important;
  --search-clear-button-color: #999 !important;
  --search-icon-color: #999 !important;
  --search-result-background: #343434 !important;
  --secondary: #df4a16 !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: #2c2c2c !important;
  --setting-items-border-color: #303030 !important;
  --slider-track-background: #303030 !important;
  --status-bar-background: #2c2c2c !important;
  --status-bar-border-color: #303030 !important;
  --status-bar-text-color: #999 !important;
  --suggestion-background: #343434 !important;
  --tab-background-active: #343434 !important;
  --tab-container-background: #2c2c2c !important;
  --tab-outline-color: #303030 !important;
  --tab-switcher-background: #2c2c2c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2c2c2c, transparent) !important;
  --tab-text-color: #666 !important;
  --tab-text-color-active: #999 !important;
  --tab-text-color-focused: #999 !important;
  --tab-text-color-focused-active: #999 !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: #df4a16 !important;
  --table-add-button-border-color: #303030 !important;
  --table-border-color: #303030 !important;
  --table-drag-handle-background-active: #df4a16 !important;
  --table-drag-handle-color: #666 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #303030 !important;
  --table-header-color: #dcddde !important;
  --table-selection-border-color: #df4a16 !important;
  --tag-color: #df4a16 !important;
  --tag-color-hover: #df4a16 !important;
  --tertiary: #df7a16 !important;
  --text-accent: #df4a16 !important;
  --text-accent-hover: #df7a16 !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #666 !important;
  --text-highlight-bg: #df4a16 !important;
  --text-matched: #dcddde !important;
  --text-muted: #999 !important;
  --text-normal: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(223, 74, 22, 0.8) !important;
  --textHighlight: #df4a16 !important;
  --titlebar-background: #2c2c2c !important;
  --titlebar-background-focused: #2c2c2c !important;
  --titlebar-border-color: #303030 !important;
  --titlebar-text-color: #999 !important;
  --titlebar-text-color-focused: #dcddde !important;
  --tooltip-bg: rgba(223, 74, 22, 0.9) !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --workspace-leaf-resize: #494949 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 44, 44);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(52, 52, 52);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(44, 44, 44);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 48, 48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 44, 44);
  border-left-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(52, 52, 52);
  color: rgb(220, 221, 222);
}`,
    typography: `body .page article p > b, b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > em, em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > i, i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > strong, strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .text-highlight {
  background-color: rgb(223, 74, 22);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: line-through rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body p {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration: underline rgb(223, 74, 22);
  text-decoration-color: rgb(223, 74, 22);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration: underline rgb(223, 74, 22);
  text-decoration-color: rgb(223, 74, 22);
}

body a.internal.broken {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
}`,
    lists: `body dd {
  color: rgb(220, 221, 222);
}

body dt {
  color: rgb(220, 221, 222);
}

body ol > li {
  color: rgb(220, 221, 222);
}

body ol.overflow {
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(44, 44, 44);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body table {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(102, 102, 102);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(102, 102, 102);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(102, 102, 102);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(220, 221, 222);
}

body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}

body td {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(220, 221, 222);
}

body th {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

body thead {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body tr {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    code: `body code {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(184, 43, 78);
  border-left-color: rgb(184, 43, 78);
  border-right-color: rgb(184, 43, 78);
  border-top-color: rgb(184, 43, 78);
  color: rgb(184, 43, 78);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(184, 43, 78);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

body pre:has(> code) {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}`,
    images: `body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body figcaption {
  color: rgb(220, 221, 222);
}

body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `body .file-embed {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}`,
    search: `body .search > .search-button {
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
  font-family: Roboto, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(52, 52, 52);
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(223, 74, 22);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(220, 221, 222);
}

body a.internal.tag-link::before {
  color: rgb(223, 74, 22);
}

body h1 {
  color: rgb(220, 221, 222);
}

body h2 {
  color: rgb(220, 221, 222);
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 221, 222);
}

body h3 {
  color: rgb(220, 221, 222);
}

body h4 {
  color: rgb(220, 221, 222);
}

body h5 {
  color: rgb(220, 221, 222);
}

body h6 {
  color: rgb(220, 221, 222);
}

body hr {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

body ::-webkit-scrollbar-corner {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

body ::-webkit-scrollbar-track {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `body footer {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-width: 0px;
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}

body footer ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: Roboto, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .metadata {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(153, 153, 153);
}

body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .navigation-progress {
  background-color: rgb(44, 44, 44);
}

body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

body abbr {
  color: rgb(220, 221, 222);
  text-decoration: underline dotted rgb(220, 221, 222);
}

body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(153, 153, 153);
  padding-bottom: 5px;
  padding-top: 5px;
}

body kbd {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body sub {
  color: rgb(220, 221, 222);
  font-size: 11px;
  vertical-align: bottom;
}

body summary {
  color: rgb(220, 221, 222);
}

body sup {
  color: rgb(220, 221, 222);
  font-size: 11px;
  vertical-align: top;
}`,
  },
  light: {
    base: `:root:root {
  --accent-mild: #e6b64f !important;
  --accent-strong: #ec0d0d !important;
  --background-modifier-border: #f7f7f7 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85) !important;
  --background-primary: #fff !important;
  --background-primary-alt: #dedede !important;
  --background-secondary: #dedede !important;
  --background-secondary-alt: #dedede !important;
  --bases-cards-background: #fff !important;
  --bases-cards-cover-background: #dedede !important;
  --bases-cards-shadow: 0 0 0 1px #f7f7f7 !important;
  --bases-embed-border-color: #f7f7f7 !important;
  --bases-group-heading-property-color: #555 !important;
  --bases-table-border-color: #f7f7f7 !important;
  --bases-table-cell-background-active: #fff !important;
  --bases-table-cell-background-disabled: #dedede !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #df4a16 !important;
  --bases-table-group-background: #dedede !important;
  --bases-table-header-background: #fff !important;
  --bases-table-header-color: #555 !important;
  --bases-table-summary-background: #fff !important;
  --blockquote-border-color: #df4a16 !important;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --bw: #03050b !important;
  --canvas-background: #fff !important;
  --caret-color: #03050b !important;
  --checkbox-border-color-hover: #555 !important;
  --checkbox-color: #df4a16 !important;
  --checkbox-color-hover: #df7a16 !important;
  --checkbox-marker-color: #fff !important;
  --checklist-done-color: #555 !important;
  --code-background: #dedede !important;
  --code-border-color: #f7f7f7 !important;
  --code-normal: #03050b !important;
  --code-punctuation: #555 !important;
  --codeFont: "Fira Code", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: #df4a16 !important;
  --dark: #03050b !important;
  --darkgray: #03050b !important;
  --divider-color: #f7f7f7 !important;
  --divider-color-hover: #df4a16 !important;
  --embed-block-shadow-hover: 0 0 0 1px #f7f7f7, inset 0 0 0 1px #f7f7f7 !important;
  --embed-border-start: 2px solid #df4a16 !important;
  --file-header-background: #fff !important;
  --file-header-background-focused: #fff !important;
  --flair-color: #03050b !important;
  --font-monospace: "Fira Code", "Source Code Pro", monospace !important;
  --footnote-divider-color: #f7f7f7 !important;
  --footnote-id-color: #555 !important;
  --graph-node: #555 !important;
  --graph-node-focused: #df4a16 !important;
  --graph-text: #03050b !important;
  --gray: #555 !important;
  --highlight: #df4a16 !important;
  --hr-color: #f7f7f7 !important;
  --icon-color: #555 !important;
  --icon-color-active: #df4a16 !important;
  --icon-color-focused: #03050b !important;
  --icon-color-hover: #555 !important;
  --interactive-accent: #df4a16 !important;
  --interactive-accent-hover: #df7a16 !important;
  --interactive-accent-rgb: #df7a16 !important;
  --light: #fff !important;
  --lightgray: #dedede !important;
  --lines-identation: #dad8d8 !important;
  --link-color: #df4a16 !important;
  --link-color-hover: #df7a16 !important;
  --link-external-color: #df4a16 !important;
  --link-external-color-hover: #df7a16 !important;
  --link-unresolved-color: #df4a16 !important;
  --list-marker-color-collapsed: #df4a16 !important;
  --list-marker-color-hover: #555 !important;
  --menu-background: #dedede !important;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  --metadata-border-color: #f7f7f7 !important;
  --metadata-divider-color: #f7f7f7 !important;
  --metadata-input-text-color: #03050b !important;
  --metadata-label-text-color: #555 !important;
  --metadata-label-text-color-hover: #555 !important;
  --modal-background: #fff !important;
  --nav-heading-color: #03050b !important;
  --nav-heading-color-collapsed-hover: #555 !important;
  --nav-heading-color-hover: #03050b !important;
  --nav-item-color: #555 !important;
  --nav-item-color-active: #03050b !important;
  --nav-item-color-highlighted: #df4a16 !important;
  --nav-item-color-hover: #03050b !important;
  --nav-item-color-selected: #03050b !important;
  --nav-tag-color-active: #555 !important;
  --nav-tag-color-hover: #555 !important;
  --pdf-background: #fff !important;
  --pdf-page-background: #fff !important;
  --pdf-sidebar-background: #fff !important;
  --pill-border-color: #f7f7f7 !important;
  --pill-color: #555 !important;
  --pill-color-hover: #03050b !important;
  --pill-color-remove-hover: #df4a16 !important;
  --prompt-background: #fff !important;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --ribbon-background: #dedede !important;
  --ribbon-background-collapsed: #fff !important;
  --search-clear-button-color: #555 !important;
  --search-icon-color: #555 !important;
  --search-result-background: #fff !important;
  --secondary: #df4a16 !important;
  --setting-group-heading-color: #03050b !important;
  --setting-items-background: #dedede !important;
  --setting-items-border-color: #f7f7f7 !important;
  --slider-track-background: #f7f7f7 !important;
  --status-bar-background: #dedede !important;
  --status-bar-border-color: #f7f7f7 !important;
  --status-bar-text-color: #555 !important;
  --suggestion-background: #fff !important;
  --tab-background-active: #fff !important;
  --tab-container-background: #dedede !important;
  --tab-outline-color: #f7f7f7 !important;
  --tab-switcher-background: #dedede !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #dedede, transparent) !important;
  --tab-text-color-active: #555 !important;
  --tab-text-color-focused: #555 !important;
  --tab-text-color-focused-active: #555 !important;
  --tab-text-color-focused-active-current: #03050b !important;
  --tab-text-color-focused-highlighted: #df4a16 !important;
  --table-add-button-border-color: #f7f7f7 !important;
  --table-border-color: #f7f7f7 !important;
  --table-drag-handle-background-active: #df4a16 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #f7f7f7 !important;
  --table-header-color: #03050b !important;
  --table-selection-border-color: #df4a16 !important;
  --tag-color: #df4a16 !important;
  --tag-color-hover: #df4a16 !important;
  --tertiary: #df7a16 !important;
  --text-accent: #df4a16 !important;
  --text-accent-hover: #df7a16 !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-highlight-bg: #df4a16 !important;
  --text-matched: #dcddde !important;
  --text-muted: #555 !important;
  --text-normal: #03050b !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(223, 74, 22, 0.8) !important;
  --textHighlight: #df4a16 !important;
  --titlebar-background: #dedede !important;
  --titlebar-background-focused: #dedede !important;
  --titlebar-border-color: #f7f7f7 !important;
  --titlebar-text-color: #555 !important;
  --titlebar-text-color-focused: #03050b !important;
  --tooltip-bg: rgba(223, 74, 22, 0.9) !important;
  --vault-profile-color: #03050b !important;
  --vault-profile-color-hover: #03050b !important;
  --workspace-leaf-resize: #c1c1c1 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(222, 222, 222);
  color: rgb(3, 5, 11);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(3, 5, 11);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(222, 222, 222);
  color: rgb(3, 5, 11);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(247, 247, 247);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(222, 222, 222);
  border-left-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
}

body div#quartz-root {
  color: rgb(3, 5, 11);
}`,
    typography: `body .page article p > b, b {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .page article p > em, em {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .page article p > i, i {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .page article p > strong, strong {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .text-highlight {
  background-color: rgb(223, 74, 22);
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body del {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: line-through rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body p {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `body a.external, footer a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration: underline rgb(223, 74, 22);
  text-decoration-color: rgb(223, 74, 22);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration: underline rgb(223, 74, 22);
  text-decoration-color: rgb(223, 74, 22);
}

body a.internal.broken {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
}`,
    lists: `body dd {
  color: rgb(3, 5, 11);
}

body dt {
  color: rgb(3, 5, 11);
}

body ol > li {
  color: rgb(3, 5, 11);
}

body ol.overflow {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body ul > li {
  color: rgb(3, 5, 11);
}

body ul.overflow {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(222, 222, 222);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body table {
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(171, 171, 171);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(171, 171, 171);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(171, 171, 171);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(3, 5, 11);
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

body td {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(3, 5, 11);
}

body th {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
}

body thead {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}

body tr {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}`,
    code: `body code {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(184, 43, 78);
  border-left-color: rgb(184, 43, 78);
  border-right-color: rgb(184, 43, 78);
  border-top-color: rgb(184, 43, 78);
  color: rgb(184, 43, 78);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(184, 43, 78);
}

body pre > code, pre:has(> code) {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}

body pre:has(> code) {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}`,
    images: `body audio {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body figcaption {
  color: rgb(3, 5, 11);
}

body figure {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body img {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body video {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    embeds: `body .file-embed {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body .footnotes {
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

body .transclude {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body .transclude-inner {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 85, 85);
  text-decoration: line-through rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='*'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='-'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='/'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='>'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='?'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='I'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='S'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='b'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='c'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='d'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='f'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='i'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='k'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='l'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='p'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='u'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='w'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
  font-family: Roboto, sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(223, 74, 22);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link::before {
  color: rgb(223, 74, 22);
}

body h1 {
  color: rgb(3, 5, 11);
}

body h2 {
  color: rgb(3, 5, 11);
}

body h2.page-title, h2.page-title a {
  color: rgb(3, 5, 11);
}

body h3 {
  color: rgb(3, 5, 11);
}

body h4 {
  color: rgb(3, 5, 11);
}

body h5 {
  color: rgb(3, 5, 11);
}

body h6 {
  color: rgb(3, 5, 11);
}

body hr {
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}`,
    footer: `body footer {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  border-top-width: 0px;
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}

body footer ul li a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(3, 5, 11);
  font-family: Roboto, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body li.section-li > .section .meta {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}

body ul.section-ul {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

body .darkmode svg {
  color: rgb(85, 85, 85);
  stroke: rgb(85, 85, 85);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

body .metadata {
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(85, 85, 85);
}

body .metadata-properties {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

body .navigation-progress {
  background-color: rgb(222, 222, 222);
}

body .page-header h2.page-title {
  color: rgb(3, 5, 11);
}

body abbr {
  color: rgb(3, 5, 11);
  text-decoration: underline dotted rgb(3, 5, 11);
}

body details {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body input[type=text] {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(85, 85, 85);
  padding-bottom: 5px;
  padding-top: 5px;
}

body kbd {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body sub {
  color: rgb(3, 5, 11);
  font-size: 11px;
  vertical-align: bottom;
}

body summary {
  color: rgb(3, 5, 11);
}

body sup {
  color: rgb(3, 5, 11);
  font-size: 11px;
  vertical-align: top;
}`,
  },
};
