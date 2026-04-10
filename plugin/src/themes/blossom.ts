import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "blossom", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-glow: rgba(255, 5, 141, 0.4) !important;
  --background-primary: #13141f !important;
  --background-primary-alt: #181924 !important;
  --background-secondary: #0d0e16 !important;
  --background-secondary-alt: #0d0e16 !important;
  --bases-cards-background: #13141f !important;
  --bases-cards-cover-background: #181924 !important;
  --bases-group-heading-property-color: #8e8e9e !important;
  --bases-table-cell-background-active: #13141f !important;
  --bases-table-cell-background-disabled: #181924 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff058d !important;
  --bases-table-group-background: #181924 !important;
  --bases-table-header-background: #13141f !important;
  --bases-table-header-color: #8e8e9e !important;
  --bases-table-summary-background: #13141f !important;
  --blockquote-border-color: #ff058d !important;
  --blossom-cyan: #00d4ff !important;
  --blossom-mint: #00ff7d !important;
  --blossom-orange: #ff5555 !important;
  --blossom-pink: #ff058d !important;
  --blossom-purple: #9200ff !important;
  --blossom-salmon: #ea748f !important;
  --blossom-yellow: #f5ac00 !important;
  --canvas-background: #13141f !important;
  --canvas-card-label-color: #5c5c66 !important;
  --caret-color: #ececec !important;
  --checkbox-border-color: #5c5c66 !important;
  --checkbox-border-color-hover: #8e8e9e !important;
  --checkbox-color: #ff058d !important;
  --checkbox-marker-color: #13141f !important;
  --checklist-done-color: #8e8e9e !important;
  --code-background: #181924 !important;
  --code-comment: #5c5c66 !important;
  --code-normal: #ececec !important;
  --code-punctuation: #8e8e9e !important;
  --collapse-icon-color: #5c5c66 !important;
  --dark: #ececec !important;
  --darkgray: #ececec !important;
  --divider-color: transparent !important;
  --divider-color-hover: #ff058d !important;
  --divider-width: 0px !important;
  --dropdown-background-hover: rgba(255, 255, 255, 0.05) !important;
  --embed-border-start: 2px solid #ff058d !important;
  --file-header-background: #13141f !important;
  --file-header-background-focused: #13141f !important;
  --flair-color: #ececec !important;
  --font-headings: "Playfair Display", "Merriweather", "Georgia", serif !important;
  --footnote-id-color: #8e8e9e !important;
  --footnote-id-color-no-occurrences: #5c5c66 !important;
  --glass-bg: rgba(16, 17, 22, 0.85) !important;
  --glass-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5) !important;
  --graph-node: #8e8e9e !important;
  --graph-node-unresolved: #5c5c66 !important;
  --graph-text: #ececec !important;
  --gray: #8e8e9e !important;
  --header-line-height: 1.2 !important;
  --heading-formatting: #5c5c66 !important;
  --icon-color: #8e8e9e !important;
  --icon-color-focused: #ececec !important;
  --icon-color-hover: #8e8e9e !important;
  --input-date-separator: #5c5c66 !important;
  --input-placeholder-color: #5c5c66 !important;
  --interactive-accent: #ff058d !important;
  --interactive-hover: rgba(255, 255, 255, 0.05) !important;
  --light: #13141f !important;
  --lightgray: #0d0e16 !important;
  --list-marker-color: #5c5c66 !important;
  --list-marker-color-hover: #8e8e9e !important;
  --menu-background: #0d0e16 !important;
  --metadata-input-text-color: #ececec !important;
  --metadata-label-text-color: #8e8e9e !important;
  --metadata-label-text-color-hover: #8e8e9e !important;
  --modal-background: #13141f !important;
  --nav-collapse-icon-color: #5c5c66 !important;
  --nav-collapse-icon-color-collapsed: #5c5c66 !important;
  --nav-heading-color: #ececec !important;
  --nav-heading-color-collapsed: #5c5c66 !important;
  --nav-heading-color-collapsed-hover: #8e8e9e !important;
  --nav-heading-color-hover: #ececec !important;
  --nav-item-color: #8e8e9e !important;
  --nav-item-color-active: #ececec !important;
  --nav-item-color-hover: #ececec !important;
  --nav-item-color-selected: #ececec !important;
  --nav-tag-color: #5c5c66 !important;
  --nav-tag-color-active: #8e8e9e !important;
  --nav-tag-color-hover: #8e8e9e !important;
  --pdf-background: #13141f !important;
  --pdf-page-background: #13141f !important;
  --pdf-sidebar-background: #13141f !important;
  --pill-color: #8e8e9e !important;
  --pill-color-hover: #ececec !important;
  --pill-color-remove: #5c5c66 !important;
  --prompt-background: #13141f !important;
  --ribbon-background: #0d0e16 !important;
  --ribbon-background-collapsed: #13141f !important;
  --search-clear-button-color: #8e8e9e !important;
  --search-icon-color: #8e8e9e !important;
  --search-result-background: #13141f !important;
  --secondary: #ff058d !important;
  --selection-color: rgba(255, 5, 141, 0.25) !important;
  --setting-group-heading-color: #ececec !important;
  --setting-items-background: #181924 !important;
  --status-bar-background: #0d0e16 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #8e8e9e !important;
  --suggestion-background: #13141f !important;
  --tab-background-active: #13141f !important;
  --tab-container-background: #0d0e16 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #0d0e16 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0d0e16, transparent) !important;
  --tab-text-color: #5c5c66 !important;
  --tab-text-color-active: #8e8e9e !important;
  --tab-text-color-focused: #8e8e9e !important;
  --tab-text-color-focused-active: #8e8e9e !important;
  --tab-text-color-focused-active-current: #ececec !important;
  --table-drag-handle-background-active: #ff058d !important;
  --table-drag-handle-color: #5c5c66 !important;
  --table-header-color: #ececec !important;
  --table-selection-border-color: #ff058d !important;
  --text-faint: #5c5c66 !important;
  --text-muted: #8e8e9e !important;
  --text-normal: #ececec !important;
  --titlebar-background: #0d0e16 !important;
  --titlebar-background-focused: #0d0e16 !important;
  --titlebar-text-color: #8e8e9e !important;
  --titlebar-text-color-focused: #ececec !important;
  --vault-profile-color: #ececec !important;
  --vault-profile-color-hover: #ececec !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(13, 14, 22);
  color: rgb(236, 236, 236);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(19, 20, 31);
  color: rgb(236, 236, 236);
}

html body .bases-table thead th {
  color: rgb(236, 236, 236);
}

html body .canvas-node {
  border-color: rgb(236, 236, 236);
}

html body .canvas-node-content {
  color: rgb(236, 236, 236);
}

html body .canvas-node-file {
  color: rgb(236, 236, 236);
}

html body .canvas-node-group {
  border-color: rgb(236, 236, 236);
}

html body .canvas-sidebar {
  background-color: rgb(13, 14, 22);
  border-color: rgb(236, 236, 236);
}

html body .note-properties-key {
  color: rgb(142, 142, 158);
}

html body .note-properties-row {
  border-color: rgb(142, 142, 158);
}

html body .note-properties-value {
  color: rgb(142, 142, 158);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(13, 14, 22);
  color: rgb(236, 236, 236);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(13, 14, 22);
  border-left-color: rgb(128, 128, 128);
  color: rgb(236, 236, 236);
}

html body div#quartz-root {
  background-color: rgb(19, 20, 31);
  color: rgb(236, 236, 236);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 5, 141);
  font-weight: 700;
  outline: rgb(255, 5, 141) none 0px;
  text-decoration-color: rgb(255, 5, 141);
}

html body .page article p > em, html em {
  color: rgb(0, 212, 255);
  outline: rgb(0, 212, 255) none 0px;
  text-decoration-color: rgb(0, 212, 255);
}

html body .page article p > i, html i {
  color: rgb(0, 212, 255);
  outline: rgb(0, 212, 255) none 0px;
  text-decoration-color: rgb(0, 212, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 5, 141);
  font-weight: 700;
  outline: rgb(255, 5, 141) none 0px;
  text-decoration-color: rgb(255, 5, 141);
}

html body .text-highlight {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration-color: rgb(236, 236, 236);
}

html body del {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration-color: rgb(236, 236, 236);
}

html body h1.article-title {
  color: rgb(236, 236, 236);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgb(255, 255, 255);
  border-radius: 50%;
  border-width: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 5, 141);
  border-color: rgb(255, 255, 255);
}

html body p {
  color: rgb(142, 142, 158);
  outline: rgb(142, 142, 158) none 0px;
  text-decoration-color: rgb(142, 142, 158);
}`,
    links: `html body a.internal.broken {
  text-decoration-color: rgb(166, 138, 249);
}`,
    lists: `html body dd {
  color: rgb(236, 236, 236);
}

html body dt {
  color: rgb(236, 236, 236);
}

html body ol > li {
  color: rgb(236, 236, 236);
}

html body ol.overflow {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body ul > li {
  color: rgb(236, 236, 236);
}

html body ul.overflow {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(92, 92, 102);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body table {
  color: rgb(236, 236, 236);
  width: 230.922px;
}

html body td {
  color: rgb(236, 236, 236);
}

html body th {
  color: rgb(236, 236, 236);
}`,
    code: `html body code {
  border-bottom-color: rgb(0, 255, 125);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(0, 255, 125);
  border-right-color: rgb(0, 255, 125);
  border-top-color: rgb(0, 255, 125);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(0, 255, 125);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(8, 8, 10);
  border-bottom-color: rgb(236, 236, 236);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(8, 8, 10);
  border-bottom-color: rgb(236, 236, 236);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(236, 236, 236);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(8, 8, 10);
  border-bottom-color: rgb(236, 236, 236);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

html body pre:has(> code) {
  background-color: rgb(8, 8, 10);
  border-bottom-color: rgb(236, 236, 236);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body figcaption {
  color: rgb(236, 236, 236);
}

html body figure {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body img {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body video {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(24, 25, 36);
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
}

html body .footnotes {
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body .transclude {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(255, 5, 141);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body .transclude-inner {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-width: 0px;
  transition: 0.2s;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
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
  color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space {
  background-color: rgb(19, 20, 31);
}

html body .search > .search-container > .search-space > * {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration-color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(13, 14, 22);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(236, 236, 236);
}

html body h1 {
  color: rgb(146, 0, 255);
}

html body h2 {
  color: rgb(0, 255, 125);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(236, 236, 236);
}

html body h3 {
  color: rgb(0, 212, 255);
}

html body h4 {
  color: rgb(245, 172, 0);
}

html body h5 {
  color: rgb(255, 85, 85);
}

html body h6 {
  color: rgb(234, 116, 143);
}

html body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

html body ::-webkit-scrollbar-track {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 142, 158);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 142, 158);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(236, 236, 236);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}`,
    footer: `html body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(142, 142, 158);
  border-top-width: 0px;
  color: rgb(142, 142, 158);
}

html body footer ul li a {
  color: rgb(142, 142, 158);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(236, 236, 236);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 142, 158);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 142, 158);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body li.section-li > .section .meta {
  color: rgb(142, 142, 158);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 142, 158);
}

html body ul.section-ul {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

html body .darkmode svg {
  color: rgb(142, 142, 158);
  stroke: rgb(142, 142, 158);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

html body .breadcrumb-element p {
  color: rgb(92, 92, 102);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body .metadata {
  color: rgb(142, 142, 158);
}

html body .metadata-properties {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

html body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(236, 236, 236);
}

html body abbr {
  color: rgb(236, 236, 236);
}

html body details {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body input[type=text] {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

html body kbd {
  background-color: rgb(24, 25, 36);
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body progress {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body sub {
  color: rgb(236, 236, 236);
}

html body summary {
  color: rgb(236, 236, 236);
}

html body sup {
  color: rgb(236, 236, 236);
}`,
  },
  light: {},
};
