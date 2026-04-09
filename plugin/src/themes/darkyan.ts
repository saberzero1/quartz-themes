import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "darkyan", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #374151 !important;
  --background-primary: #111827 !important;
  --background-primary-alt: #111827 !important;
  --background-secondary: #1F2937 !important;
  --background-secondary-alt: #1F2937 !important;
  --bases-cards-background: #111827 !important;
  --bases-cards-cover-background: #111827 !important;
  --bases-cards-shadow: 0 0 0 1px #374151 !important;
  --bases-embed-border-color: #374151 !important;
  --bases-table-border-color: #374151 !important;
  --bases-table-cell-background-active: #111827 !important;
  --bases-table-cell-background-disabled: #111827 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00AAAD !important;
  --bases-table-group-background: #111827 !important;
  --bases-table-header-background: #111827 !important;
  --bases-table-summary-background: #111827 !important;
  --blockquote-border-color: #00AAAD !important;
  --canvas-background: #111827 !important;
  --canvas-card-label-color: #4B5563 !important;
  --caret-color: #D1D5DB !important;
  --checkbox-border-color: #4B5563 !important;
  --checkbox-color: #00AAAD !important;
  --checkbox-color-hover: #00AAAD !important;
  --checkbox-marker-color: #111827 !important;
  --code-background: #111827 !important;
  --code-block: #D1D5DB !important;
  --code-border-color: #374151 !important;
  --code-comment: #4B5563 !important;
  --code-normal: #D1D5DB !important;
  --collapse-icon-color: #4B5563 !important;
  --collapse-icon-color-collapsed: #00AAAD !important;
  --dark: #D1D5DB !important;
  --darkgray: #D1D5DB !important;
  --divider-color: #374151 !important;
  --divider-color-hover: #00AAAD !important;
  --embed-block-shadow-hover: 0 0 0 1px #374151, inset 0 0 0 1px #374151 !important;
  --embed-border-start: 2px solid #00AAAD !important;
  --file-header-background: #111827 !important;
  --file-header-background-focused: #111827 !important;
  --file-line-width: 750px !important;
  --flair-color: #D1D5DB !important;
  --footnote-divider-color: #374151 !important;
  --footnote-id-color-no-occurrences: #4B5563 !important;
  --graph-node-focused: #00AAAD !important;
  --graph-node-unresolved: #4B5563 !important;
  --graph-text: #D1D5DB !important;
  --gray: #4B5563 !important;
  --heading-formatting: #4B5563 !important;
  --highlight: #374151 !important;
  --hr-color: #374151 !important;
  --icon-color-active: #00AAAD !important;
  --icon-color-focused: #D1D5DB !important;
  --inline-code: #D1D5DB !important;
  --input-date-separator: #4B5563 !important;
  --input-placeholder-color: #4B5563 !important;
  --interactive-accent: #00AAAD !important;
  --interactive-accent-hover: #00AAAD !important;
  --interactive-accent-rgb: #D1D5DB !important;
  --interactive-before: #374151 !important;
  --light: #111827 !important;
  --lightgray: #1F2937 !important;
  --link-color: #00AAAD !important;
  --link-color-hover: #00AAAD !important;
  --link-external-color: #00AAAD !important;
  --link-external-color-hover: #00AAAD !important;
  --link-unresolved-color: #00AAAD !important;
  --list-marker-color: #4B5563 !important;
  --list-marker-color-collapsed: #00AAAD !important;
  --menu-background: #1F2937 !important;
  --metadata-border-color: #374151 !important;
  --metadata-divider-color: #374151 !important;
  --metadata-input-text-color: #D1D5DB !important;
  --modal-background: #111827 !important;
  --nav-collapse-icon-color: #4B5563 !important;
  --nav-collapse-icon-color-collapsed: #4B5563 !important;
  --nav-heading-color: #D1D5DB !important;
  --nav-heading-color-collapsed: #4B5563 !important;
  --nav-heading-color-hover: #D1D5DB !important;
  --nav-item-color-active: #D1D5DB !important;
  --nav-item-color-highlighted: #00AAAD !important;
  --nav-item-color-hover: #D1D5DB !important;
  --nav-item-color-selected: #D1D5DB !important;
  --nav-tag-color: #4B5563 !important;
  --pdf-background: #111827 !important;
  --pdf-page-background: #111827 !important;
  --pdf-shadow: 0 0 0 1px #374151 !important;
  --pdf-sidebar-background: #111827 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #374151 !important;
  --pill-border-color: #374151 !important;
  --pill-color-hover: #D1D5DB !important;
  --pill-color-remove: #4B5563 !important;
  --pill-color-remove-hover: #00AAAD !important;
  --pre-code: #000000 !important;
  --prompt-background: #111827 !important;
  --ribbon-background: #1F2937 !important;
  --ribbon-background-collapsed: #111827 !important;
  --search-result-background: #111827 !important;
  --secondary: #00AAAD !important;
  --setting-group-heading-color: #D1D5DB !important;
  --setting-items-background: #111827 !important;
  --setting-items-border-color: #374151 !important;
  --slider-track-background: #374151 !important;
  --status-bar-background: #1F2937 !important;
  --status-bar-border-color: #374151 !important;
  --suggestion-background: #111827 !important;
  --tab-background-active: #111827 !important;
  --tab-container-background: #1F2937 !important;
  --tab-outline-color: #374151 !important;
  --tab-switcher-background: #1F2937 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1F2937, transparent) !important;
  --tab-text-color: #4B5563 !important;
  --tab-text-color-focused-active-current: #D1D5DB !important;
  --tab-text-color-focused-highlighted: #00AAAD !important;
  --table-add-button-border-color: #374151 !important;
  --table-border-color: #374151 !important;
  --table-drag-handle-background-active: #00AAAD !important;
  --table-drag-handle-color: #4B5563 !important;
  --table-drag-handle-color-active: #D1D5DB !important;
  --table-header-border-color: #374151 !important;
  --table-header-color: #D1D5DB !important;
  --table-selection-border-color: #00AAAD !important;
  --tag-color: #00AAAD !important;
  --tag-color-hover: #00AAAD !important;
  --tertiary: #00AAAD !important;
  --text-a: #D1D5DB !important;
  --text-a-hover: #D1D5DB !important;
  --text-accent: #00AAAD !important;
  --text-accent-hover: #00AAAD !important;
  --text-faint: #4B5563 !important;
  --text-highlight-bg: #374151 !important;
  --text-link: #D1D5DB !important;
  --text-normal: #D1D5DB !important;
  --text-on-accent: #D1D5DB !important;
  --text-selection: #374151 !important;
  --text-title-h1: #D1D5DB !important;
  --text-title-h2: #D1D5DB !important;
  --text-title-h3: #D1D5DB !important;
  --text-title-h4: #D1D5DB !important;
  --text-title-h5: #D1D5DB !important;
  --text-title-h6: #D1D5DB !important;
  --textHighlight: #374151 !important;
  --titlebar-background: #1F2937 !important;
  --titlebar-background-focused: #1F2937 !important;
  --titlebar-border-color: #374151 !important;
  --titlebar-text-color-focused: #D1D5DB !important;
  --vault-profile-color: #D1D5DB !important;
  --vault-profile-color-hover: #D1D5DB !important;
  --vim-cursor: #D1D5DB !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 41, 55);
  color: rgb(209, 213, 219);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(17, 24, 39);
  color: rgb(209, 213, 219);
}

html body .bases-table thead th {
  border-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body .canvas-node {
  border-color: rgb(209, 213, 219);
}

html body .canvas-node-content {
  color: rgb(209, 213, 219);
}

html body .canvas-node-file {
  color: rgb(209, 213, 219);
}

html body .canvas-node-group {
  border-color: rgb(209, 213, 219);
}

html body .canvas-sidebar {
  background-color: rgb(31, 41, 55);
  border-color: rgb(209, 213, 219);
}

html body .note-properties {
  border-color: rgb(55, 65, 81);
}

html body .note-properties-tags {
  color: rgb(0, 170, 173);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 41, 55);
  color: rgb(209, 213, 219);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(55, 65, 81);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 41, 55);
  border-left-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body div#quartz-root {
  background-color: rgb(17, 24, 39);
  color: rgb(209, 213, 219);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration-color: rgb(209, 213, 219);
}

html body .page article p > em, html em {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration-color: rgb(209, 213, 219);
}

html body .page article p > i, html i {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration-color: rgb(209, 213, 219);
}

html body .page article p > strong, html strong {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration-color: rgb(209, 213, 219);
}

html body .text-highlight {
  background-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration-color: rgb(209, 213, 219);
}

html body del {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration-color: rgb(209, 213, 219);
}

html body h1.article-title {
  color: rgb(209, 213, 219);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(75, 85, 99);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 170, 173);
  border-color: rgb(0, 170, 173);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
  text-decoration-color: rgb(0, 170, 173);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
  text-decoration-color: rgb(0, 170, 173);
}

html body a.internal.broken {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
}`,
    lists: `html body dd {
  color: rgb(209, 213, 219);
}

html body dt {
  color: rgb(209, 213, 219);
}

html body ol > li {
  color: rgb(209, 213, 219);
}

html body ol.overflow {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body ul > li {
  color: rgb(209, 213, 219);
}

html body ul.overflow {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(75, 85, 99);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body table {
  color: rgb(209, 213, 219);
}

html body td {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body th {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}`,
    code: `html body code {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body pre > code > [data-line] {
  border-left-color: rgb(209, 213, 219);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(209, 213, 219);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}`,
    images: `html body audio {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body figcaption {
  color: rgb(209, 213, 219);
}

html body figure {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body img {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body video {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(17, 24, 39);
}

html body .footnotes {
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body .transclude {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(0, 170, 173);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body .transclude-inner {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(75, 85, 99);
  border-left-color: rgb(75, 85, 99);
  border-right-color: rgb(75, 85, 99);
  border-top-color: rgb(75, 85, 99);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
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
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space {
  background-color: rgb(17, 24, 39);
}

html body .search > .search-container > .search-space > * {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration-color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(209, 213, 219);
}

html body a.internal.tag-link::before {
  color: rgb(0, 170, 173);
}

html body h1 {
  color: rgb(209, 213, 219);
}

html body h2 {
  color: rgb(209, 213, 219);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(209, 213, 219);
}

html body h3 {
  color: rgb(209, 213, 219);
}

html body h4 {
  color: rgb(209, 213, 219);
}

html body h5 {
  color: rgb(209, 213, 219);
}

html body h6 {
  color: rgb(209, 213, 219);
}

html body hr {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

html body ::-webkit-scrollbar-track {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(209, 213, 219);
}`,
    footer: `html body footer {
  background-color: rgb(31, 41, 55);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(209, 213, 219);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body ul.section-ul {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(75, 85, 99);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body .metadata {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

html body .navigation-progress {
  background-color: rgb(31, 41, 55);
}

html body .page-header h2.page-title {
  color: rgb(209, 213, 219);
}

html body abbr {
  color: rgb(209, 213, 219);
}

html body details {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body kbd {
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body progress {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body sub {
  color: rgb(209, 213, 219);
}

html body summary {
  color: rgb(209, 213, 219);
}

html body sup {
  color: rgb(209, 213, 219);
}

html body ul.tags > li {
  color: rgb(0, 170, 173);
}`,
  },
  light: {},
};
