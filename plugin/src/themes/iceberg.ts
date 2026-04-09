import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "iceberg", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-block-cursor: #c6c8d1 !important;
  --background-modifier-error: #e27878 !important;
  --background-modifier-error-rgb: 226, 120, 120 !important;
  --background-modifier-success: #b4be82 !important;
  --background-primary: #161821 !important;
  --background-primary-alt: #0f1117 !important;
  --background-secondary: #1e2132 !important;
  --background-secondary-alt: #0f1117 !important;
  --background-tag: #6b7089 !important;
  --background-tag-hover: #81859c !important;
  --bases-cards-background: #161821 !important;
  --bases-cards-cover-background: #0f1117 !important;
  --bases-group-heading-property-color: #6b7089 !important;
  --bases-table-cell-background-active: #161821 !important;
  --bases-table-cell-background-disabled: #0f1117 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #84a0c6 !important;
  --bases-table-group-background: #0f1117 !important;
  --bases-table-header-background: #161821 !important;
  --bases-table-header-color: #6b7089 !important;
  --bases-table-summary-background: #161821 !important;
  --black: #1e2132 !important;
  --blockquote-border-color: #84a0c6 !important;
  --blue: #84a0c6 !important;
  --brightBlack: #6b7089 !important;
  --brightWhite: #d2d4de !important;
  --canvas-background: #161821 !important;
  --canvas-card-label-color: #6b7089 !important;
  --caret-color: #c6c8d1 !important;
  --checkbox-border-color: #6b7089 !important;
  --checkbox-border-color-hover: #6b7089 !important;
  --checkbox-color: #84a0c6 !important;
  --checkbox-color-hover: #a0b6d3 !important;
  --checkbox-marker-color: #161821 !important;
  --checklist-done-color: #6b7089 !important;
  --code-background: #0f1117 !important;
  --code-comment: #6b7089 !important;
  --code-normal: #c6c8d1 !important;
  --code-punctuation: #6b7089 !important;
  --collapse-icon-color: #6b7089 !important;
  --collapse-icon-color-collapsed: #e2a478 !important;
  --dark: #c6c8d1 !important;
  --darkgray: #c6c8d1 !important;
  --divider-color-hover: #84a0c6 !important;
  --embed-border-start: 2px solid #84a0c6 !important;
  --file-header-background: #161821 !important;
  --file-header-background-focused: #161821 !important;
  --flair-color: #c6c8d1 !important;
  --font-family-editor: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif !important;
  --font-family-preview: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif !important;
  --footnote-id-color: #6b7089 !important;
  --footnote-id-color-no-occurrences: #6b7089 !important;
  --formating-scale-factor: 0.85 !important;
  --graph-node: #6b7089 !important;
  --graph-node-focused: #e2a478 !important;
  --graph-node-unresolved: #6b7089 !important;
  --graph-text: #c6c8d1 !important;
  --gray: #6b7089 !important;
  --green: #b4be82 !important;
  --heading-formatting: #6b7089 !important;
  --highlight: #e2a47880 !important;
  --icon-color: #6b7089 !important;
  --icon-color-active: #e2a478 !important;
  --icon-color-focused: #c6c8d1 !important;
  --icon-color-hover: #6b7089 !important;
  --input-date-separator: #6b7089 !important;
  --input-placeholder-color: #6b7089 !important;
  --interactive-accent: #84a0c6 !important;
  --interactive-accent-hover: #a0b6d3 !important;
  --interactive-accent-rgb: 132, 160, 198 !important;
  --interactive-success: #b4be82 !important;
  --lblue: #89b8c2 !important;
  --light: #161821 !important;
  --lightBlue: #a0b6d3 !important;
  --lightOrange: #e9bb9a !important;
  --lightgray: #1e2132 !important;
  --link-color: #e2a478 !important;
  --link-color-hover: #e9bb9a !important;
  --link-external-color: #e2a478 !important;
  --link-external-color-hover: #e9bb9a !important;
  --link-unresolved-color: #e2a478 !important;
  --list-marker-color: #6b7089 !important;
  --list-marker-color-collapsed: #e2a478 !important;
  --list-marker-color-hover: #6b7089 !important;
  --menu-background: #1e2132 !important;
  --metadata-input-text-color: #c6c8d1 !important;
  --metadata-label-text-color: #6b7089 !important;
  --metadata-label-text-color-hover: #6b7089 !important;
  --modal-background: #161821 !important;
  --nav-collapse-icon-color: #6b7089 !important;
  --nav-collapse-icon-color-collapsed: #6b7089 !important;
  --nav-heading-color: #c6c8d1 !important;
  --nav-heading-color-collapsed: #6b7089 !important;
  --nav-heading-color-collapsed-hover: #6b7089 !important;
  --nav-heading-color-hover: #c6c8d1 !important;
  --nav-item-color: #6b7089 !important;
  --nav-item-color-active: #c6c8d1 !important;
  --nav-item-color-highlighted: #e2a478 !important;
  --nav-item-color-hover: #c6c8d1 !important;
  --nav-item-color-selected: #c6c8d1 !important;
  --nav-tag-color: #6b7089 !important;
  --nav-tag-color-active: #6b7089 !important;
  --nav-tag-color-hover: #6b7089 !important;
  --orange: #e2a478 !important;
  --pdf-background: #161821 !important;
  --pdf-page-background: #161821 !important;
  --pdf-sidebar-background: #161821 !important;
  --pill-color: #6b7089 !important;
  --pill-color-hover: #c6c8d1 !important;
  --pill-color-remove: #6b7089 !important;
  --pill-color-remove-hover: #e2a478 !important;
  --prompt-background: #161821 !important;
  --purple: #a093c7 !important;
  --red: #e27878 !important;
  --ribbon-background: #1e2132 !important;
  --ribbon-background-collapsed: #161821 !important;
  --search-clear-button-color: #6b7089 !important;
  --search-icon-color: #6b7089 !important;
  --search-result-background: #161821 !important;
  --secondary: #e2a478 !important;
  --setting-group-heading-color: #c6c8d1 !important;
  --setting-items-background: #0f1117 !important;
  --status-bar-background: #1e2132 !important;
  --status-bar-text-color: #6b7089 !important;
  --suggestion-background: #161821 !important;
  --tab-background-active: #161821 !important;
  --tab-container-background: #1e2132 !important;
  --tab-switcher-background: #1e2132 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e2132, transparent) !important;
  --tab-text-color: #6b7089 !important;
  --tab-text-color-active: #6b7089 !important;
  --tab-text-color-focused: #6b7089 !important;
  --tab-text-color-focused-active: #6b7089 !important;
  --tab-text-color-focused-active-current: #c6c8d1 !important;
  --tab-text-color-focused-highlighted: #e2a478 !important;
  --table-drag-handle-background-active: #84a0c6 !important;
  --table-drag-handle-color: #6b7089 !important;
  --table-drag-handle-color-active: #1e2132 !important;
  --table-header-color: #c6c8d1 !important;
  --table-selection-border-color: #84a0c6 !important;
  --tag-color: #e2a478 !important;
  --tag-color-hover: #e2a478 !important;
  --tertiary: #e9bb9a !important;
  --text-accent: #e2a478 !important;
  --text-accent-hover: #e9bb9a !important;
  --text-error: #e27878 !important;
  --text-faint: #6b7089 !important;
  --text-highlight-bg: #e2a47880 !important;
  --text-inline-code: #84a0c6 !important;
  --text-muted: #6b7089 !important;
  --text-normal: #c6c8d1 !important;
  --text-on-accent: #1e2132 !important;
  --text-selection: #89b8c2 !important;
  --text-strong: #d2d4de !important;
  --text-tag: #1e2132 !important;
  --textHighlight: #e2a47880 !important;
  --titlebar-background: #1e2132 !important;
  --titlebar-background-focused: #0f1117 !important;
  --titlebar-text-color: #6b7089 !important;
  --titlebar-text-color-focused: #c6c8d1 !important;
  --vault-profile-color: #c6c8d1 !important;
  --vault-profile-color-hover: #c6c8d1 !important;
  --white: #c6c8d1 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(22, 24, 33);
  color: rgb(198, 200, 209);
}

html body .bases-table thead th {
  color: rgb(198, 200, 209);
}

html body .canvas-node {
  border-color: rgb(198, 200, 209);
}

html body .canvas-node-content {
  color: rgb(198, 200, 209);
}

html body .canvas-node-file {
  color: rgb(198, 200, 209);
}

html body .canvas-node-group {
  border-color: rgb(198, 200, 209);
}

html body .canvas-sidebar {
  background-color: rgb(30, 33, 50);
  border-color: rgb(198, 200, 209);
}

html body .note-properties-key {
  color: rgb(107, 112, 137);
}

html body .note-properties-row {
  border-color: rgb(107, 112, 137);
}

html body .note-properties-tags {
  color: rgb(226, 164, 120);
}

html body .note-properties-value {
  color: rgb(107, 112, 137);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

html body div#quartz-root {
  background-color: rgb(22, 24, 33);
  color: rgb(198, 200, 209);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(210, 212, 222);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  font-weight: 700;
  outline: rgb(210, 212, 222) none 0px;
  text-decoration-color: rgb(210, 212, 222);
}

html body .page article p > em, html em {
  color: rgb(210, 212, 222);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(210, 212, 222) none 0px;
  text-decoration-color: rgb(210, 212, 222);
}

html body .page article p > i, html i {
  color: rgb(210, 212, 222);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(210, 212, 222) none 0px;
  text-decoration-color: rgb(210, 212, 222);
}

html body .page article p > strong, html strong {
  color: rgb(210, 212, 222);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  font-weight: 700;
  outline: rgb(210, 212, 222) none 0px;
  text-decoration-color: rgb(210, 212, 222);
}

html body .text-highlight {
  background-color: rgba(226, 164, 120, 0.5);
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body del {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body h1.article-title {
  color: rgb(198, 200, 209);
  font-size: 14px;
  font-weight: 600;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(107, 112, 137);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(132, 160, 198);
  border-color: rgb(132, 160, 198);
}

html body p {
  color: rgb(107, 112, 137);
  outline: rgb(107, 112, 137) none 0px;
  text-decoration-color: rgb(107, 112, 137);
}`,
    links: `html body a.external, html footer a {
  color: rgb(132, 160, 198);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(132, 160, 198) none 0px;
  text-decoration-color: rgb(132, 160, 198);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 164, 120);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(226, 164, 120) none 0px;
  text-decoration-color: rgb(226, 164, 120);
}

html body a.internal.broken {
  color: rgb(226, 164, 120);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(226, 164, 120) none 0px;
}`,
    lists: `html body dd {
  color: rgb(198, 200, 209);
}

html body dt {
  color: rgb(198, 200, 209);
}

html body ol > li {
  color: rgb(198, 200, 209);
}

html body ol.overflow {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body ul > li {
  color: rgb(198, 200, 209);
}

html body ul.overflow {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(132, 160, 198);
}

html body blockquote {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body table {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  width: 195.062px;
}

html body td {
  color: rgb(198, 200, 209);
}

html body th {
  color: rgb(198, 200, 209);
}`,
    code: `html body code {
  border-bottom-color: rgb(132, 160, 198);
  border-left-color: rgb(132, 160, 198);
  border-right-color: rgb(132, 160, 198);
  border-top-color: rgb(132, 160, 198);
  color: rgb(132, 160, 198);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 17, 23);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 17, 23);
  color: rgb(198, 200, 209);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(15, 17, 23);
}

html body pre:has(> code) {
  background-color: rgb(15, 17, 23);
}`,
    images: `html body audio {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body figcaption {
  color: rgb(198, 200, 209);
}

html body figure {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body img {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body video {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
}

html body .footnotes {
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body .transclude {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(132, 160, 198);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body .transclude-inner {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space {
  background-color: rgb(22, 24, 33);
}

html body .search > .search-container > .search-space > * {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 33, 50);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(198, 200, 209);
}

html body a.internal.tag-link::before {
  color: rgb(226, 164, 120);
}

html body h1 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h2 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h3 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h4 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h5 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h6 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

html body ::-webkit-scrollbar-track {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(107, 112, 137);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(107, 112, 137);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(198, 200, 209);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}`,
    footer: `html body footer {
  background-color: rgb(30, 33, 50);
  color: rgb(107, 112, 137);
}

html body footer ul li a {
  color: rgb(107, 112, 137);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(198, 200, 209);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(107, 112, 137);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(107, 112, 137);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body li.section-li > .section .meta {
  color: rgb(107, 112, 137);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(107, 112, 137);
}

html body ul.section-ul {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

html body .darkmode svg {
  color: rgb(107, 112, 137);
  stroke: rgb(107, 112, 137);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

html body .breadcrumb-element p {
  color: rgb(107, 112, 137);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body .metadata {
  color: rgb(107, 112, 137);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body .navigation-progress {
  background-color: rgb(30, 33, 50);
}

html body .page-header h2.page-title {
  color: rgb(198, 200, 209);
}

html body abbr {
  color: rgb(198, 200, 209);
}

html body details {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body input[type=text] {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

html body kbd {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body progress {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body sub {
  color: rgb(198, 200, 209);
}

html body summary {
  color: rgb(198, 200, 209);
}

html body sup {
  color: rgb(198, 200, 209);
}

html body ul.tags > li {
  background-color: rgb(107, 112, 137);
  border-bottom-left-radius: 137986px;
  border-bottom-right-radius: 137986px;
  border-top-left-radius: 137986px;
  border-top-right-radius: 137986px;
  color: rgb(30, 33, 50);
}`,
  },
  light: {},
};
