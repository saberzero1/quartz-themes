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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 44, 44);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(52, 52, 52);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(44, 44, 44);
  border-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(44, 44, 44);
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(223, 74, 22);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(44, 44, 44);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 44, 44);
  border-left-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(52, 52, 52);
  color: rgb(220, 221, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(223, 74, 22);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 221, 222);
  font-size: 14px;
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(223, 74, 22);
  border-color: rgb(223, 74, 22);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration-color: rgb(223, 74, 22);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration-color: rgb(223, 74, 22);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(44, 44, 44);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body table {
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

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body th {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(184, 43, 78);
  border-left-color: rgb(184, 43, 78);
  border-right-color: rgb(184, 43, 78);
  border-top-color: rgb(184, 43, 78);
  color: rgb(184, 43, 78);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(184, 43, 78);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
  font-family: Roboto, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(52, 52, 52);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(223, 74, 22);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(223, 74, 22);
}

html[saved-theme="dark"] body h1 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h2 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h3 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h4 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h5 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h6 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 221, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-width: 0px;
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(153, 153, 153);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: Roboto, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(44, 44, 44);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body input[type=text] {
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

html[saved-theme="dark"] body kbd {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 221, 222);
  font-size: 11px;
  vertical-align: bottom;
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 221, 222);
  font-size: 11px;
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(255, 255, 255);
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(222, 222, 222);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(222, 222, 222);
  border-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(223, 74, 22);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(222, 222, 222);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(222, 222, 222);
  border-left-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(3, 5, 11);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(223, 74, 22);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body del {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(3, 5, 11);
  font-size: 14px;
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(223, 74, 22);
  border-color: rgb(223, 74, 22);
}

html[saved-theme="light"] body p {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration-color: rgb(223, 74, 22);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration-color: rgb(223, 74, 22);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body dt {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body ol > li {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body ul > li {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(222, 222, 222);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body table {
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

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body th {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(184, 43, 78);
  border-left-color: rgb(184, 43, 78);
  border-right-color: rgb(184, 43, 78);
  border-top-color: rgb(184, 43, 78);
  color: rgb(184, 43, 78);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(184, 43, 78);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body figcaption {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
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
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
  font-family: Roboto, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(223, 74, 22);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(223, 74, 22);
}

html[saved-theme="light"] body h1 {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body h2 {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body h3 {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body h4 {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body h5 {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body h6 {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(3, 5, 11);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  border-top-width: 0px;
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(85, 85, 85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(3, 5, 11);
  font-family: Roboto, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(85, 85, 85);
  stroke: rgb(85, 85, 85);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(222, 222, 222);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body abbr {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body input[type=text] {
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

html[saved-theme="light"] body kbd {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

html[saved-theme="light"] body sub {
  color: rgb(3, 5, 11);
  font-size: 11px;
  vertical-align: bottom;
}

html[saved-theme="light"] body summary {
  color: rgb(3, 5, 11);
}

html[saved-theme="light"] body sup {
  color: rgb(3, 5, 11);
  font-size: 11px;
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(255, 255, 255);
}`,
  },
};
