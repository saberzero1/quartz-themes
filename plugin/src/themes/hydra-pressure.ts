import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "hydra-pressure", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-form-field-highlighted: #2a2925 !important;
  --background-modifier-success-hover: #61cd70 !important;
  --background-primary: #181818 !important;
  --background-primary-alt: #1f1f1f !important;
  --background-primary-rgb: 24, 24, 24 !important;
  --background-secondary: #161615 !important;
  --background-secondary-alt: #1a1a1a !important;
  --background-secondary-rgb: 32, 32, 32 !important;
  --bases-cards-background: #181818 !important;
  --bases-cards-cover-background: #1f1f1f !important;
  --bases-group-heading-property-color: #5d5c55 !important;
  --bases-table-cell-background-active: #181818 !important;
  --bases-table-cell-background-disabled: #1f1f1f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #d25227 !important;
  --bases-table-group-background: #1f1f1f !important;
  --bases-table-header-background: #181818 !important;
  --bases-table-header-color: #5d5c55 !important;
  --bases-table-summary-background: #181818 !important;
  --blockquote-border: #2fc0c5 !important;
  --blockquote-border-color: #d25227 !important;
  --blur-background: color-mix(in srgb, #2a2928 65%, transparent) linear-gradient(#2a2928, color-mix(in srgb, #2a2928 65%, transparent)) !important;
  --canvas-background: #181818 !important;
  --canvas-card-label-color: #4b493d !important;
  --caret-color: #c2c0b4 !important;
  --checkbox-border-color: #4b493d !important;
  --checkbox-border-color-hover: #5d5c55 !important;
  --checkbox-color: #d25227 !important;
  --checkbox-color-hover: #da5e45 !important;
  --checkbox-marker-color: #181818 !important;
  --checklist-done-color: #5d5c55 !important;
  --code-background: #1f1f1f !important;
  --code-comment: #4b493d !important;
  --code-normal: #c2c0b4 !important;
  --code-punctuation: #5d5c55 !important;
  --collapse-icon-color: #4b493d !important;
  --collapse-icon-color-collapsed: #419b9a !important;
  --dark: #c2c0b4 !important;
  --darkgray: #c2c0b4 !important;
  --divider-color: #222222 !important;
  --divider-color-hover: #d25227 !important;
  --dropdown-background: #2a2928 !important;
  --dropdown-background-hover: #202020 !important;
  --embed-background: #1a1a1a !important;
  --embed-border: #222222 !important;
  --embed-border-start: 2px solid #d25227 !important;
  --file-header-background: #181818 !important;
  --file-header-background-focused: #181818 !important;
  --flair-background: #2a2928 !important;
  --flair-color: #c2c0b4 !important;
  --footnote-id-color: #5d5c55 !important;
  --footnote-id-color-no-occurrences: #4b493d !important;
  --graph-node: #5d5c55 !important;
  --graph-node-focused: #419b9a !important;
  --graph-node-unresolved: #4b493d !important;
  --graph-text: #c2c0b4 !important;
  --gray: #5d5c55 !important;
  --heading-formatting: #4b493d !important;
  --icon-color: #2c7a48 !important;
  --icon-color-active: #61cd70 !important;
  --icon-color-focused: #61cd70 !important;
  --icon-color-hover: #61cd70 !important;
  --inline-title-color: #da5e45 !important;
  --input-date-separator: #4b493d !important;
  --input-placeholder-color: #4b493d !important;
  --interactive-accent: #d25227 !important;
  --interactive-accent-hover: #da5e45 !important;
  --interactive-hover: #202020 !important;
  --interactive-muted: #222222 !important;
  --interactive-normal: #2a2928 !important;
  --light: #181818 !important;
  --lightgray: #161615 !important;
  --link-color: #419b9a !important;
  --link-color-hover: #52b4b3 !important;
  --link-external-color: #419b9a !important;
  --link-external-color-hover: #52b4b3 !important;
  --link-unresolved-color: #419b9a !important;
  --list-marker-color: #4b493d !important;
  --list-marker-color-collapsed: #419b9a !important;
  --list-marker-color-hover: #5d5c55 !important;
  --menu-background: #161615 !important;
  --metadata-input-text-color: #c2c0b4 !important;
  --metadata-label-text-color: #5d5c55 !important;
  --metadata-label-text-color-hover: #5d5c55 !important;
  --modal-background: #181818 !important;
  --modal-border: #222222 !important;
  --nav-collapse-icon-color: #4b493d !important;
  --nav-collapse-icon-color-collapsed: #4b493d !important;
  --nav-file-title-color: #c2c0b4 !important;
  --nav-file-title-color-active: #e8e7e2 !important;
  --nav-folder-title-color: #c2c0b4 !important;
  --nav-heading-color: #c2c0b4 !important;
  --nav-heading-color-collapsed: #4b493d !important;
  --nav-heading-color-collapsed-hover: #5d5c55 !important;
  --nav-heading-color-hover: #c2c0b4 !important;
  --nav-item-background-active: #1e1e1e !important;
  --nav-item-background-hover: #202020 !important;
  --nav-item-background-selected: #1e1e1e !important;
  --nav-item-color: #5d5c55 !important;
  --nav-item-color-active: #e8e7e2 !important;
  --nav-item-color-highlighted: #419b9a !important;
  --nav-item-color-hover: #81dfdf !important;
  --nav-item-color-selected: #e8e7e2 !important;
  --nav-item-color-selected-active: #e8e7e2 !important;
  --nav-item-icon-color: #2c7a48 !important;
  --nav-item-icon-color-hover: #61cd70 !important;
  --nav-tag-color: #4b493d !important;
  --nav-tag-color-active: #5d5c55 !important;
  --nav-tag-color-hover: #5d5c55 !important;
  --outline-item-color: #5d5c55 !important;
  --outline-item-color-active: #c2c0b4 !important;
  --pane-border-color: #222222 !important;
  --pane-border-width: 1px !important;
  --pdf-background: #181818 !important;
  --pdf-page-background: #181818 !important;
  --pdf-sidebar-background: #181818 !important;
  --pill-color: #5d5c55 !important;
  --pill-color-hover: #c2c0b4 !important;
  --pill-color-remove: #4b493d !important;
  --pill-color-remove-hover: #419b9a !important;
  --prompt-background: #181818 !important;
  --prompt-border: #222222 !important;
  --raised-background: color-mix(in srgb, #2a2928 65%, transparent) linear-gradient(#2a2928, color-mix(in srgb, #2a2928 65%, transparent)) !important;
  --ribbon-background: #141111 !important;
  --ribbon-background-collapsed: #181818 !important;
  --ribbon-background-hover: #1c1818 !important;
  --search-clear-button-color: #5d5c55 !important;
  --search-icon-color: #5d5c55 !important;
  --search-result-background: #181818 !important;
  --secondary: #419b9a !important;
  --setting-group-heading-color: #c2c0b4 !important;
  --setting-items-background: #1f1f1f !important;
  --sidebar-background: #141414 !important;
  --status-bar-background: #161615 !important;
  --status-bar-border-color: #222222 !important;
  --status-bar-text-color: #5d5c55 !important;
  --suggestion-background: #181818 !important;
  --syntax-comment: #706d5c !important;
  --syntax-constant: #b98bec !important;
  --syntax-diff-changed: #e3b77d !important;
  --syntax-function: #81dfdf !important;
  --syntax-invalid: #cc0000 !important;
  --syntax-keyword: #ff7b63 !important;
  --syntax-keyword-secondary: #f25636 !important;
  --syntax-markup-text: #c2c0b4 !important;
  --syntax-property: #64cbcf !important;
  --syntax-punctuation: #a3a08f !important;
  --syntax-string: #61cd70 !important;
  --syntax-variable: #2fc0c5 !important;
  --tab-background-active: #181818 !important;
  --tab-container-background: #161615 !important;
  --tab-divider-color: #222222 !important;
  --tab-outline-color: #222222 !important;
  --tab-switcher-background: #161615 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #161615, transparent) !important;
  --tab-text-color: #4b493d !important;
  --tab-text-color-active: #5d5c55 !important;
  --tab-text-color-focused: #5d5c55 !important;
  --tab-text-color-focused-active: #5d5c55 !important;
  --tab-text-color-focused-active-current: #c2c0b4 !important;
  --tab-text-color-focused-highlighted: #419b9a !important;
  --table-drag-handle-background-active: #d25227 !important;
  --table-drag-handle-color: #4b493d !important;
  --table-drag-handle-color-active: #181818 !important;
  --table-header-color: #c2c0b4 !important;
  --table-selection-border-color: #d25227 !important;
  --tag-color: #419b9a !important;
  --tag-color-hover: #419b9a !important;
  --tertiary: #52b4b3 !important;
  --text-accent: #419b9a !important;
  --text-accent-hover: #52b4b3 !important;
  --text-accent-visited: #419b9a !important;
  --text-accent-visited-hover: #52b4b3 !important;
  --text-faint: #4b493d !important;
  --text-heading: #d6d3c6 !important;
  --text-muted: #5d5c55 !important;
  --text-normal: #c2c0b4 !important;
  --text-normal-rgb: 194, 192, 180 !important;
  --text-on-accent: #181818 !important;
  --titlebar-background: #141111 !important;
  --titlebar-background-focused: #141111 !important;
  --titlebar-text-color: #5d5c55 !important;
  --titlebar-text-color-focused: #c2c0b4 !important;
  --vault-profile-color: #c2c0b4 !important;
  --vault-profile-color-hover: #c2c0b4 !important;
  --view-action-active-bg: #2c7a48 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}

html body .bases-table thead th {
  color: rgb(194, 192, 180);
}

html body .canvas-node {
  border-color: rgb(194, 192, 180);
}

html body .canvas-node-content {
  color: rgb(194, 192, 180);
}

html body .canvas-node-file {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}

html body .canvas-node-group {
  border-color: rgb(194, 192, 180);
}

html body .canvas-sidebar {
  background-color: rgb(22, 22, 21);
  border-color: rgb(194, 192, 180);
}

html body .note-properties-key {
  color: rgb(93, 92, 85);
}

html body .note-properties-row {
  border-color: rgb(93, 92, 85);
}

html body .note-properties-tags {
  color: rgb(65, 155, 154);
}

html body .note-properties-value {
  color: rgb(93, 92, 85);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(34, 34, 34);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgb(34, 34, 34);
  color: rgb(194, 192, 180);
}

html body div#quartz-root {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration-color: rgb(194, 192, 180);
}

html body .page article p > em, html em {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration-color: rgb(194, 192, 180);
}

html body .page article p > i, html i {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration-color: rgb(194, 192, 180);
}

html body .page article p > strong, html strong {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration-color: rgb(194, 192, 180);
}

html body .text-highlight {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration-color: rgb(194, 192, 180);
}

html body del {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration-color: rgb(194, 192, 180);
}

html body h1.article-title {
  color: rgb(194, 192, 180);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(75, 73, 61);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(210, 82, 39);
  border-color: rgb(210, 82, 39);
}

html body p {
  color: rgb(93, 92, 85);
  outline: rgb(93, 92, 85) none 0px;
  text-decoration-color: rgb(93, 92, 85);
}`,
    links: `html body a.external, html footer a {
  color: rgb(65, 155, 154);
  outline: rgb(65, 155, 154) none 0px;
  text-decoration-color: rgb(65, 155, 154);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(65, 155, 154);
  outline: rgb(65, 155, 154) none 0px;
  text-decoration-color: rgb(65, 155, 154);
}

html body a.internal.broken {
  color: rgb(65, 155, 154);
  outline: rgb(65, 155, 154) none 0px;
}`,
    lists: `html body dd {
  color: rgb(194, 192, 180);
}

html body dt {
  color: rgb(194, 192, 180);
}

html body ol > li {
  color: rgb(194, 192, 180);
}

html body ol.overflow {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body ul > li {
  color: rgb(194, 192, 180);
}

html body ul.overflow {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(65, 155, 154);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body table {
  color: rgb(194, 192, 180);
}

html body td {
  color: rgb(194, 192, 180);
}

html body th {
  color: rgb(194, 192, 180);
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 123, 99);
  border-left-color: rgb(255, 123, 99);
  border-right-color: rgb(255, 123, 99);
  border-top-color: rgb(255, 123, 99);
  color: rgb(255, 123, 99);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 31, 31);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 31, 31);
  color: rgb(194, 192, 180);
}

html body pre > code > [data-line] {
  border-left-color: rgb(129, 223, 223);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(129, 223, 223);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(129, 223, 223);
  border-left-color: rgb(129, 223, 223);
  border-right-color: rgb(129, 223, 223);
  border-top-color: rgb(129, 223, 223);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(31, 31, 31);
}

html body pre:has(> code) {
  background-color: rgb(31, 31, 31);
}`,
    images: `html body audio {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body figcaption {
  color: rgb(194, 192, 180);
}

html body figure {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body img {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body video {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(93, 92, 85);
  border-left-color: rgb(93, 92, 85);
  border-right-color: rgb(93, 92, 85);
  border-top-color: rgb(93, 92, 85);
}

html body .footnotes {
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

html body .transclude {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(210, 82, 39);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body .transclude-inner {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(75, 73, 61);
  border-left-color: rgb(75, 73, 61);
  border-right-color: rgb(75, 73, 61);
  border-top-color: rgb(75, 73, 61);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
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
  color: rgb(194, 192, 180);
}

html body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 24);
}

html body .search > .search-container > .search-space > * {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration-color: rgb(194, 192, 180);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(194, 192, 180);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(194, 192, 180);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(194, 192, 180);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 21);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(194, 192, 180);
}

html body a.internal.tag-link::before {
  color: rgb(65, 155, 154);
}

html body h1 {
  color: rgb(214, 211, 198);
}

html body h2 {
  color: rgb(214, 211, 198);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(218, 94, 69);
}

html body h3 {
  color: rgb(214, 211, 198);
}

html body h4 {
  color: rgb(214, 211, 198);
}

html body h5 {
  color: rgb(214, 211, 198);
}

html body h6 {
  color: rgb(214, 211, 198);
}

html body hr {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(194, 192, 180);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(194, 192, 180);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(194, 192, 180);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(44, 122, 72);
  border-left-color: rgb(44, 122, 72);
  border-right-color: rgb(44, 122, 72);
  border-top-color: rgb(44, 122, 72);
  color: rgb(44, 122, 72);
}`,
    footer: `html body footer {
  background-color: rgb(22, 22, 21);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(93, 92, 85);
}

html body footer ul li a {
  color: rgb(93, 92, 85);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(194, 192, 180);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(194, 192, 180);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(194, 192, 180);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body li.section-li > .section .meta {
  color: rgb(194, 192, 180);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(194, 192, 180);
}

html body ul.section-ul {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(44, 122, 72);
  border-left-color: rgb(44, 122, 72);
  border-right-color: rgb(44, 122, 72);
  border-top-color: rgb(44, 122, 72);
  color: rgb(44, 122, 72);
}

html body .darkmode svg {
  color: rgb(44, 122, 72);
  stroke: rgb(44, 122, 72);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(93, 92, 85);
  border-left-color: rgb(93, 92, 85);
  border-right-color: rgb(93, 92, 85);
  border-top-color: rgb(93, 92, 85);
  color: rgb(93, 92, 85);
}

html body .breadcrumb-element p {
  color: rgb(75, 73, 61);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

html body .metadata {
  color: rgb(93, 92, 85);
}

html body .metadata-properties {
  border-bottom-color: rgb(93, 92, 85);
  border-left-color: rgb(93, 92, 85);
  border-right-color: rgb(93, 92, 85);
  border-top-color: rgb(93, 92, 85);
  color: rgb(93, 92, 85);
}

html body .navigation-progress {
  background-color: rgb(22, 22, 21);
}

html body .page-header h2.page-title {
  color: rgb(194, 192, 180);
}

html body abbr {
  color: rgb(194, 192, 180);
}

html body details {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body input[type=text] {
  border-bottom-color: rgb(93, 92, 85);
  border-left-color: rgb(93, 92, 85);
  border-right-color: rgb(93, 92, 85);
  border-top-color: rgb(93, 92, 85);
  color: rgb(93, 92, 85);
}

html body kbd {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

html body progress {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

html body sub {
  color: rgb(194, 192, 180);
}

html body summary {
  color: rgb(194, 192, 180);
}

html body sup {
  color: rgb(194, 192, 180);
}

html body ul.tags > li {
  color: rgb(65, 155, 154);
}`,
  },
  light: {},
};
