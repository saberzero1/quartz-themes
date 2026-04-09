import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "synthwave", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #372b3d !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: #171520d2 !important;
  --background-modifier-error: #8b0000 !important;
  --background-modifier-error-hover: #580000 !important;
  --background-modifier-form-field: #372b3d !important;
  --background-modifier-form-field-hover: #372b3d !important;
  --background-modifier-success: #7ee787 !important;
  --background-primary: #262335 !important;
  --background-primary-alt: #241b2f !important;
  --background-secondary: #241b2f !important;
  --background-secondary-alt: #262335 !important;
  --bases-cards-background: #262335 !important;
  --bases-cards-cover-background: #241b2f !important;
  --bases-cards-shadow: 0 0 0 1px #372b3d !important;
  --bases-embed-border-color: #372b3d !important;
  --bases-group-heading-property-color: #a7a4ac !important;
  --bases-table-border-color: #372b3d !important;
  --bases-table-cell-background-active: #262335 !important;
  --bases-table-cell-background-disabled: #241b2f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f97e72 !important;
  --bases-table-group-background: #241b2f !important;
  --bases-table-header-background: #262335 !important;
  --bases-table-header-color: #a7a4ac !important;
  --bases-table-summary-background: #262335 !important;
  --blockquote-border-color: #f97e72 !important;
  --blur-background: color-mix(in srgb, #614e83 65%, transparent) linear-gradient(#614e83, color-mix(in srgb, #614e83 65%, transparent)) !important;
  --canvas-background: #262335 !important;
  --canvas-card-label-color: #706a76 !important;
  --caret-color: #fff !important;
  --checkbox-border-color: #706a76 !important;
  --checkbox-border-color-hover: #a7a4ac !important;
  --checkbox-color: #f97e72 !important;
  --checkbox-color-hover: #ff7edb !important;
  --checkbox-marker-color: #262335 !important;
  --checklist-done-color: #a7a4ac !important;
  --code-background: #241b2f !important;
  --code-border-color: #372b3d !important;
  --code-comment: #706a76 !important;
  --code-normal: #fff !important;
  --code-punctuation: #a7a4ac !important;
  --collapse-icon-color: #706a76 !important;
  --collapse-icon-color-collapsed: #f97e72 !important;
  --dark: #fff !important;
  --darkgray: #fff !important;
  --divider-color: #372b3d !important;
  --divider-color-hover: #f97e72 !important;
  --dropdown-background: #614e83 !important;
  --dropdown-background-hover: #745d9e !important;
  --embed-block-shadow-hover: 0 0 0 1px #372b3d, inset 0 0 0 1px #372b3d !important;
  --embed-border-start: 2px solid #f97e72 !important;
  --file-header-background: #262335 !important;
  --file-header-background-focused: #262335 !important;
  --flair-background: #614e83 !important;
  --flair-color: #fff !important;
  --footnote-divider-color: #372b3d !important;
  --footnote-id-color: #a7a4ac !important;
  --footnote-id-color-no-occurrences: #706a76 !important;
  --graph-node: #a7a4ac !important;
  --graph-node-focused: #f97e72 !important;
  --graph-node-unresolved: #706a76 !important;
  --graph-text: #fff !important;
  --gray: #a7a4ac !important;
  --heading-formatting: #706a76 !important;
  --highlight: #d18616bb !important;
  --hr-color: #372b3d !important;
  --icon-color: #a7a4ac !important;
  --icon-color-active: #f97e72 !important;
  --icon-color-focused: #fff !important;
  --icon-color-hover: #a7a4ac !important;
  --input-date-separator: #706a76 !important;
  --input-placeholder-color: #706a76 !important;
  --interactive-accent: #f97e72 !important;
  --interactive-accent-hover: #ff7edb !important;
  --interactive-hover: #745d9e !important;
  --interactive-normal: #614e83 !important;
  --interactive-success: #7ee787 !important;
  --light: #262335 !important;
  --lightgray: #241b2f !important;
  --link-color: #f97e72 !important;
  --link-color-hover: #ff7edb !important;
  --link-external-color: #f97e72 !important;
  --link-external-color-hover: #ff7edb !important;
  --link-unresolved-color: #f97e72 !important;
  --list-marker-color: #706a76 !important;
  --list-marker-color-collapsed: #f97e72 !important;
  --list-marker-color-hover: #a7a4ac !important;
  --menu-background: #241b2f !important;
  --metadata-border-color: #372b3d !important;
  --metadata-divider-color: #372b3d !important;
  --metadata-input-text-color: #fff !important;
  --metadata-label-text-color: #a7a4ac !important;
  --metadata-label-text-color-hover: #a7a4ac !important;
  --modal-background: #262335 !important;
  --nav-collapse-icon-color: #706a76 !important;
  --nav-collapse-icon-color-collapsed: #706a76 !important;
  --nav-heading-color: #fff !important;
  --nav-heading-color-collapsed: #706a76 !important;
  --nav-heading-color-collapsed-hover: #a7a4ac !important;
  --nav-heading-color-hover: #fff !important;
  --nav-item-color: #a7a4ac !important;
  --nav-item-color-active: #fff !important;
  --nav-item-color-highlighted: #f97e72 !important;
  --nav-item-color-hover: #fff !important;
  --nav-item-color-selected: #fff !important;
  --nav-tag-color: #706a76 !important;
  --nav-tag-color-active: #a7a4ac !important;
  --nav-tag-color-hover: #a7a4ac !important;
  --pdf-background: #262335 !important;
  --pdf-page-background: #262335 !important;
  --pdf-shadow: 0 0 0 1px #372b3d !important;
  --pdf-sidebar-background: #262335 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #372b3d !important;
  --pill-border-color: #372b3d !important;
  --pill-color: #a7a4ac !important;
  --pill-color-hover: #fff !important;
  --pill-color-remove: #706a76 !important;
  --pill-color-remove-hover: #f97e72 !important;
  --prompt-background: #262335 !important;
  --raised-background: color-mix(in srgb, #614e83 65%, transparent) linear-gradient(#614e83, color-mix(in srgb, #614e83 65%, transparent)) !important;
  --ribbon-background: #241b2f !important;
  --ribbon-background-collapsed: #262335 !important;
  --search-clear-button-color: #a7a4ac !important;
  --search-icon-color: #a7a4ac !important;
  --search-result-background: #262335 !important;
  --secondary: #f97e72 !important;
  --setting-group-heading-color: #fff !important;
  --setting-items-background: #241b2f !important;
  --setting-items-border-color: #372b3d !important;
  --slider-track-background: #372b3d !important;
  --status-bar-background: #241b2f !important;
  --status-bar-border-color: #372b3d !important;
  --status-bar-text-color: #a7a4ac !important;
  --suggestion-background: #262335 !important;
  --tab-background-active: #262335 !important;
  --tab-container-background: #241b2f !important;
  --tab-outline-color: #372b3d !important;
  --tab-switcher-background: #241b2f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #241b2f, transparent) !important;
  --tab-text-color: #706a76 !important;
  --tab-text-color-active: #a7a4ac !important;
  --tab-text-color-focused: #a7a4ac !important;
  --tab-text-color-focused-active: #a7a4ac !important;
  --tab-text-color-focused-active-current: #fff !important;
  --tab-text-color-focused-highlighted: #f97e72 !important;
  --table-add-button-border-color: #372b3d !important;
  --table-border-color: #372b3d !important;
  --table-drag-handle-background-active: #f97e72 !important;
  --table-drag-handle-color: #706a76 !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-border-color: #372b3d !important;
  --table-header-color: #fff !important;
  --table-selection-border-color: #f97e72 !important;
  --tag-color: #f97e72 !important;
  --tag-color-hover: #f97e72 !important;
  --tertiary: #ff7edb !important;
  --text-accent: #f97e72 !important;
  --text-accent-hover: #ff7edb !important;
  --text-error: red !important;
  --text-error-hover: #ff0 !important;
  --text-faint: #706a76 !important;
  --text-highlight-bg: #d18616bb !important;
  --text-highlight-bg-active: #d1861655 !important;
  --text-muted: #a7a4ac !important;
  --text-normal: #fff !important;
  --text-on-accent: #fff !important;
  --text-selection: #ffffff20 !important;
  --textHighlight: #d18616bb !important;
  --titlebar-background: #241b2f !important;
  --titlebar-background-focused: #262335 !important;
  --titlebar-border-color: #372b3d !important;
  --titlebar-text-color: #a7a4ac !important;
  --titlebar-text-color-focused: #fff !important;
  --vault-profile-color: #fff !important;
  --vault-profile-color-hover: #fff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 27, 47);
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(38, 35, 53);
  color: rgb(255, 255, 255);
}

html body .bases-table thead th {
  border-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

html body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html body .canvas-sidebar {
  background-color: rgb(36, 27, 47);
  border-color: rgb(255, 255, 255);
}

html body .note-properties {
  border-color: rgb(55, 43, 61);
}

html body .note-properties-key {
  color: rgb(167, 164, 172);
}

html body .note-properties-row {
  border-color: rgb(167, 164, 172);
}

html body .note-properties-tags {
  color: rgb(249, 126, 114);
}

html body .note-properties-value {
  color: rgb(167, 164, 172);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 27, 47);
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(55, 43, 61);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 27, 47);
  border-left-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

html body div#quartz-root {
  background-color: rgb(38, 35, 53);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: rgba(209, 134, 22, 0.733);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body h1.article-title {
  color: rgb(255, 255, 255);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(112, 106, 118);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(249, 126, 114);
  border-color: rgb(249, 126, 114);
}

html body p {
  color: rgb(167, 164, 172);
  outline: rgb(167, 164, 172) none 0px;
  text-decoration-color: rgb(167, 164, 172);
}`,
    links: `html body a.external, html footer a {
  color: rgb(249, 126, 114);
  outline: rgb(249, 126, 114) none 0px;
  text-decoration-color: rgb(249, 126, 114);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(249, 126, 114);
  outline: rgb(249, 126, 114) none 0px;
  text-decoration-color: rgb(249, 126, 114);
}

html body a.internal.broken {
  color: rgb(249, 126, 114);
  outline: rgb(249, 126, 114) none 0px;
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(112, 106, 118);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
}

html body td {
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

html body th {
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
}

html body pre:has(> code) {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(249, 126, 114);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(112, 106, 118);
  border-left-color: rgb(112, 106, 118);
  border-right-color: rgb(112, 106, 118);
  border-top-color: rgb(112, 106, 118);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
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
  background-color: rgb(55, 43, 61);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(38, 35, 53);
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 27, 47);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body a.internal.tag-link::before {
  color: rgb(249, 126, 114);
}

html body h1 {
  color: rgb(255, 255, 255);
}

html body h2 {
  color: rgb(255, 255, 255);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
}

html body h3 {
  color: rgb(255, 255, 255);
}

html body h4 {
  color: rgb(255, 255, 255);
}

html body h5 {
  color: rgb(255, 255, 255);
}

html body h6 {
  color: rgb(255, 255, 255);
}

html body hr {
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

html body ::-webkit-scrollbar-track {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(167, 164, 172);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(167, 164, 172);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}`,
    footer: `html body footer {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(167, 164, 172);
}

html body footer ul li a {
  color: rgb(167, 164, 172);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(167, 164, 172);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(167, 164, 172);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  color: rgb(167, 164, 172);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(167, 164, 172);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}

html body .darkmode svg {
  color: rgb(167, 164, 172);
  stroke: rgb(167, 164, 172);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}

html body .breadcrumb-element p {
  color: rgb(112, 106, 118);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .metadata {
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(167, 164, 172);
}

html body .metadata-properties {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}

html body .navigation-progress {
  background-color: rgb(36, 27, 47);
}

html body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}

html body kbd {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}

html body ul.tags > li {
  color: rgb(249, 126, 114);
}`,
  },
  light: {},
};
