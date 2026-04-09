import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-resources",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-group-heading-property-color: #dadada !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #6f6f6f !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #dadada !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-border-color: #6f6f6f !important;
  --bold-color: #eeeeee !important;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #dadada !important;
  --caret-color: #c0c1a1 !important;
  --checkbox-border-color: #dadada !important;
  --checkbox-border-color-hover: #dadada !important;
  --checkbox-color: #6f6f6f !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #dadada !important;
  --code-background: #000000 !important;
  --code-comment: #dadada !important;
  --code-normal: #fb6666 !important;
  --code-punctuation: #dadada !important;
  --collapse-icon-color: #dadada !important;
  --collapse-icon-color-collapsed: #ffdf22 !important;
  --dark: #c0c1a1 !important;
  --darkgray: #c0c1a1 !important;
  --divider-color-hover: #6f6f6f !important;
  --embed-border-start: 2px solid #6f6f6f !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-color: #c0c1a1 !important;
  --footnote-id-color: #dadada !important;
  --footnote-id-color-no-occurrences: #dadada !important;
  --graph-node: #dadada !important;
  --graph-node-focused: #ffdf22 !important;
  --graph-node-unresolved: #dadada !important;
  --graph-text: #c0c1a1 !important;
  --gray: #dadada !important;
  --h1-color: #6694e2 !important;
  --h2-color: #77ca61 !important;
  --h3-color: #e0b73d !important;
  --h4-color: #da6fd5 !important;
  --h5-color: #94c0bd !important;
  --h6-color: #f34545 !important;
  --heading-formatting: #dadada !important;
  --icon-color: #dadada !important;
  --icon-color-active: #ffdf22 !important;
  --icon-color-focused: #6694e2 !important;
  --icon-color-hover: #6694e2 !important;
  --indentation-guide-color: #5f6148 !important;
  --indentation-guide-color-active: #808261 !important;
  --inline-title-color: #ffffff !important;
  --input-date-separator: #dadada !important;
  --input-placeholder-color: #dadada !important;
  --interactive-accent: #6f6f6f !important;
  --italic-color: #fff6dd !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #ffdf22 !important;
  --link-external-color: #bbcdff !important;
  --link-unresolved-color: #ffdf22 !important;
  --list-marker-color: #dadada !important;
  --list-marker-color-collapsed: #ffdf22 !important;
  --list-marker-color-hover: #dadada !important;
  --menu-background: #000000 !important;
  --metadata-input-text-color: #c0c1a1 !important;
  --metadata-label-text-color: #dadada !important;
  --metadata-label-text-color-hover: #dadada !important;
  --modal-background: #000000 !important;
  --nav-collapse-icon-color: #dadada !important;
  --nav-collapse-icon-color-collapsed: #dadada !important;
  --nav-file-tag: #f4ec9e !important;
  --nav-heading-color: #c0c1a1 !important;
  --nav-heading-color-collapsed: #dadada !important;
  --nav-heading-color-collapsed-hover: #dadada !important;
  --nav-heading-color-hover: #c0c1a1 !important;
  --nav-indentation-guide-color: #5f6148 !important;
  --nav-item-background-active: #393939 !important;
  --nav-item-color: #dadada !important;
  --nav-item-color-active: #c0c1a1 !important;
  --nav-item-color-highlighted: #ffdf22 !important;
  --nav-item-color-hover: #6694e2 !important;
  --nav-item-color-selected: #c0c1a1 !important;
  --nav-tag-color: #dadada !important;
  --nav-tag-color-active: #dadada !important;
  --nav-tag-color-hover: #dadada !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color: #dadada !important;
  --pill-color-hover: #c0c1a1 !important;
  --pill-color-remove: #dadada !important;
  --pill-color-remove-hover: #ffdf22 !important;
  --prompt-background: #000000 !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-thumb-bg: #3f3e3e !important;
  --search-clear-button-color: #dadada !important;
  --search-icon-color: #dadada !important;
  --search-result-background: #000000 !important;
  --secondary: #ffdf22 !important;
  --setting-group-heading-color: #c0c1a1 !important;
  --setting-items-background: #000000 !important;
  --status-bar-background: #000000 !important;
  --status-bar-text-color: #dadada !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color: #dadada !important;
  --tab-text-color-active: #dadada !important;
  --tab-text-color-focused: #dadada !important;
  --tab-text-color-focused-active: #dadada !important;
  --tab-text-color-focused-active-current: #6694e2 !important;
  --tab-text-color-focused-highlighted: #ffdf22 !important;
  --table-drag-handle-background-active: #6f6f6f !important;
  --table-drag-handle-color: #dadada !important;
  --table-drag-handle-color-active: #cdcd43 !important;
  --table-header-background: #2a2a2a !important;
  --table-header-color: #c0c1a1 !important;
  --table-row-alt-background: #141414 !important;
  --table-selection-border-color: #6f6f6f !important;
  --tag-color: #24cf00 !important;
  --tag-color-hover: #ffdf22 !important;
  --tertiary: #ffdf22 !important;
  --text-accent: #ffdf22 !important;
  --text-faint: #dadada !important;
  --text-muted: #dadada !important;
  --text-normal: #c0c1a1 !important;
  --text-on-accent: #cdcd43 !important;
  --text-selection: #678ba6 !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-text-color: #dadada !important;
  --titlebar-text-color-focused: #c0c1a1 !important;
  --vault-profile-color: #c0c1a1 !important;
  --vault-profile-color-hover: #c0c1a1 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(192, 193, 161);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(192, 193, 161);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(20, 20, 20);
}

html body .bases-table thead th {
  color: rgb(192, 193, 161);
}

html body .canvas-node {
  border-color: rgb(192, 193, 161);
}

html body .canvas-node-content {
  color: rgb(192, 193, 161);
}

html body .canvas-node-file {
  color: rgb(192, 193, 161);
}

html body .canvas-node-group {
  border-color: rgb(192, 193, 161);
}

html body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
  border-color: rgb(192, 193, 161);
}

html body .note-properties-key {
  color: rgb(218, 218, 218);
}

html body .note-properties-row {
  border-color: rgb(218, 218, 218);
}

html body .note-properties-tags {
  color: rgb(36, 207, 0);
}

html body .note-properties-value {
  color: rgb(218, 218, 218);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(192, 193, 161);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(192, 193, 161);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(192, 193, 161);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html body .page article p > em, html em {
  color: rgb(255, 246, 221);
  outline: rgb(255, 246, 221) none 0px;
  text-decoration-color: rgb(255, 246, 221);
}

html body .page article p > i, html i {
  color: rgb(255, 246, 221);
  outline: rgb(255, 246, 221) none 0px;
  text-decoration-color: rgb(255, 246, 221);
}

html body .page article p > strong, html strong {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html body .text-highlight {
  color: rgb(192, 193, 161);
  outline: rgb(192, 193, 161) none 0px;
  text-decoration-color: rgb(192, 193, 161);
}

html body del {
  color: rgb(192, 193, 161);
  outline: rgb(192, 193, 161) none 0px;
  text-decoration-color: rgb(192, 193, 161);
}

html body h1.article-title {
  color: rgb(192, 193, 161);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(218, 218, 218);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(111, 111, 111);
  border-color: rgb(111, 111, 111);
}

html body p {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration-color: rgb(218, 218, 218);
}`,
    links: `html body a.external, html footer a {
  color: rgb(187, 205, 255);
  outline: rgb(187, 205, 255) none 0px;
  text-decoration-color: rgb(187, 205, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 223, 34);
  outline: rgb(255, 223, 34) none 0px;
  text-decoration-color: rgb(255, 223, 34);
}

html body a.internal.broken {
  color: rgb(255, 223, 34);
  outline: rgb(255, 223, 34) none 0px;
}`,
    lists: `html body dd {
  color: rgb(192, 193, 161);
}

html body dt {
  color: rgb(192, 193, 161);
}

html body ol > li {
  color: rgb(192, 193, 161);
}

html body ol.overflow {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body ul > li {
  color: rgb(192, 193, 161);
}

html body ul.overflow {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(218, 218, 218);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body table {
  color: rgb(192, 193, 161);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(20, 20, 20);
}

html body td {
  color: rgb(192, 193, 161);
}

html body th {
  color: rgb(192, 193, 161);
}

html body tr {
  background-color: rgb(42, 42, 42);
}`,
    code: `html body code {
  border-bottom-color: rgb(251, 102, 102);
  border-left-color: rgb(251, 102, 102);
  border-right-color: rgb(251, 102, 102);
  border-top-color: rgb(251, 102, 102);
  color: rgb(251, 102, 102);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  color: rgb(192, 193, 161);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
}`,
    images: `html body audio {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body figcaption {
  color: rgb(192, 193, 161);
}

html body figure {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body img {
  border-bottom-color: rgb(102, 148, 226);
  border-left-color: rgb(102, 148, 226);
  border-right-color: rgb(102, 148, 226);
  border-top-color: rgb(102, 148, 226);
}

html body video {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html body .footnotes {
  border-top-color: rgb(192, 193, 161);
  color: rgb(192, 193, 161);
}

html body .transclude {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body .transclude-inner {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(192, 193, 161);
  text-decoration-color: rgb(192, 193, 161);
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
  color: rgb(192, 193, 161);
}

html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > * {
  color: rgb(192, 193, 161);
  outline: rgb(192, 193, 161) none 0px;
  text-decoration-color: rgb(192, 193, 161);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 193, 161);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(192, 193, 161);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(192, 193, 161);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
  color: rgb(192, 193, 161);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(192, 193, 161);
}

html body a.internal.tag-link::before {
  color: rgb(36, 207, 0);
}

html body h1 {
  color: rgb(102, 148, 226);
}

html body h2 {
  color: rgb(119, 202, 97);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
}

html body h3 {
  color: rgb(224, 183, 61);
}

html body h4 {
  color: rgb(218, 111, 213);
}

html body h5 {
  color: rgb(148, 192, 189);
}

html body h6 {
  color: rgb(243, 69, 69);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(218, 218, 218);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(218, 218, 218);
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(95, 97, 72);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(192, 193, 161);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(218, 218, 218);
}

html body footer ul li a {
  color: rgb(218, 218, 218);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(192, 193, 161);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
  color: rgb(192, 193, 161);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(218, 218, 218);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(218, 218, 218);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body li.section-li > .section .meta {
  color: rgb(218, 218, 218);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(218, 218, 218);
}

html body ul.section-ul {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

html body .darkmode svg {
  color: rgb(218, 218, 218);
  stroke: rgb(218, 218, 218);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

html body .breadcrumb-element p {
  color: rgb(218, 218, 218);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
  color: rgb(192, 193, 161);
}

html body .metadata {
  color: rgb(218, 218, 218);
}

html body .metadata-properties {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(192, 193, 161);
}

html body abbr {
  color: rgb(192, 193, 161);
}

html body details {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body input[type=text] {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

html body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(251, 102, 102);
  border-left-color: rgb(251, 102, 102);
  border-right-color: rgb(251, 102, 102);
  border-top-color: rgb(251, 102, 102);
  color: rgb(251, 102, 102);
}

html body progress {
  border-bottom-color: rgb(192, 193, 161);
  border-left-color: rgb(192, 193, 161);
  border-right-color: rgb(192, 193, 161);
  border-top-color: rgb(192, 193, 161);
}

html body sub {
  color: rgb(192, 193, 161);
}

html body summary {
  color: rgb(192, 193, 161);
}

html body sup {
  color: rgb(192, 193, 161);
}

html body ul.tags > li {
  color: rgb(36, 207, 0);
}`,
  },
  light: {},
};
