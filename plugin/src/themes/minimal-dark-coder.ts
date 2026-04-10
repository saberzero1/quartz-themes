import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-dark-coder",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-primary: #181a1b !important;
  --background-secondary: #181a1b !important;
  --background-secondary-alt: #181a1b !important;
  --bases-cards-background: #181a1b !important;
  --bases-group-heading-property-color: #CCBA8D !important;
  --bases-table-cell-background-active: #181a1b !important;
  --bases-table-header-background: #181a1b !important;
  --bases-table-header-color: #CCBA8D !important;
  --bases-table-summary-background: #181a1b !important;
  --canvas-background: #181a1b !important;
  --canvas-card-label-color: #FF1493 !important;
  --caret-color: #CCBA8D !important;
  --checkbox-border-color: #FF1493 !important;
  --checkbox-border-color-hover: #CCBA8D !important;
  --checkbox-marker-color: #181a1b !important;
  --checklist-done-color: #CCBA8D !important;
  --code-comment: #FF1493 !important;
  --code-normal: #CCBA8D !important;
  --code-punctuation: #CCBA8D !important;
  --collapse-icon-color: #FF1493 !important;
  --collapse-icon-color-collapsed: #32CD32 !important;
  --dark: #CCBA8D !important;
  --darkgray: #CCBA8D !important;
  --file-header-background: #181a1b !important;
  --file-header-background-focused: #181a1b !important;
  --flair-color: #CCBA8D !important;
  --footnote-id-color: #CCBA8D !important;
  --footnote-id-color-no-occurrences: #FF1493 !important;
  --graph-node: #CCBA8D !important;
  --graph-node-focused: #32CD32 !important;
  --graph-node-unresolved: #FF1493 !important;
  --graph-text: #CCBA8D !important;
  --gray: #CCBA8D !important;
  --heading-formatting: #FF1493 !important;
  --highlight: #29502e !important;
  --icon-color: #CCBA8D !important;
  --icon-color-active: #32CD32 !important;
  --icon-color-focused: #CCBA8D !important;
  --icon-color-hover: #CCBA8D !important;
  --input-date-separator: #FF1493 !important;
  --input-placeholder-color: #FF1493 !important;
  --light: #181a1b !important;
  --lightgray: #181a1b !important;
  --link-color: #32CD32 !important;
  --link-color-hover: #FF5C8F !important;
  --link-external-color: #32CD32 !important;
  --link-external-color-hover: #FF5C8F !important;
  --link-unresolved-color: #32CD32 !important;
  --list-marker-color: #FF1493 !important;
  --list-marker-color-collapsed: #32CD32 !important;
  --list-marker-color-hover: #CCBA8D !important;
  --menu-background: #181a1b !important;
  --metadata-input-text-color: #CCBA8D !important;
  --metadata-label-text-color: #CCBA8D !important;
  --metadata-label-text-color-hover: #CCBA8D !important;
  --modal-background: #181a1b !important;
  --nav-collapse-icon-color: #FF1493 !important;
  --nav-collapse-icon-color-collapsed: #FF1493 !important;
  --nav-heading-color: #CCBA8D !important;
  --nav-heading-color-collapsed: #FF1493 !important;
  --nav-heading-color-collapsed-hover: #CCBA8D !important;
  --nav-heading-color-hover: #CCBA8D !important;
  --nav-item-color: #CCBA8D !important;
  --nav-item-color-active: #CCBA8D !important;
  --nav-item-color-highlighted: #32CD32 !important;
  --nav-item-color-hover: #CCBA8D !important;
  --nav-item-color-selected: #CCBA8D !important;
  --nav-tag-color: #FF1493 !important;
  --nav-tag-color-active: #CCBA8D !important;
  --nav-tag-color-hover: #CCBA8D !important;
  --pdf-background: #181a1b !important;
  --pdf-page-background: #181a1b !important;
  --pdf-sidebar-background: #181a1b !important;
  --pill-color: #CCBA8D !important;
  --pill-color-hover: #CCBA8D !important;
  --pill-color-remove: #FF1493 !important;
  --pill-color-remove-hover: #32CD32 !important;
  --prompt-background: #181a1b !important;
  --ribbon-background: #181a1b !important;
  --ribbon-background-collapsed: #181a1b !important;
  --search-clear-button-color: #CCBA8D !important;
  --search-icon-color: #CCBA8D !important;
  --search-result-background: #181a1b !important;
  --secondary: #32CD32 !important;
  --setting-group-heading-color: #CCBA8D !important;
  --status-bar-background: #181a1b !important;
  --status-bar-text-color: #CCBA8D !important;
  --suggestion-background: #181a1b !important;
  --tab-background-active: #181a1b !important;
  --tab-container-background: #181a1b !important;
  --tab-switcher-background: #181a1b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181a1b, transparent) !important;
  --tab-text-color: #FF1493 !important;
  --tab-text-color-active: #CCBA8D !important;
  --tab-text-color-focused: #CCBA8D !important;
  --tab-text-color-focused-active: #CCBA8D !important;
  --tab-text-color-focused-active-current: #CCBA8D !important;
  --tab-text-color-focused-highlighted: #32CD32 !important;
  --table-drag-handle-color: #FF1493 !important;
  --table-header-color: #CCBA8D !important;
  --tag-color: #32CD32 !important;
  --tag-color-hover: #32CD32 !important;
  --tertiary: #FF5C8F !important;
  --text-accent: #32CD32 !important;
  --text-accent-hover: #FF5C8F !important;
  --text-faint: #FF1493 !important;
  --text-highlight-bg: #29502e !important;
  --text-muted: #CCBA8D !important;
  --text-normal: #CCBA8D !important;
  --text-selection: #29502e !important;
  --textHighlight: #29502e !important;
  --titlebar-background: #181a1b !important;
  --titlebar-background-focused: #181a1b !important;
  --titlebar-text-color: #CCBA8D !important;
  --titlebar-text-color-focused: #CCBA8D !important;
  --vault-profile-color: #CCBA8D !important;
  --vault-profile-color-hover: #CCBA8D !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

html body .bases-table thead th {
  color: rgb(204, 186, 141);
}

html body .canvas-node {
  border-color: rgb(204, 186, 141);
}

html body .canvas-node-content {
  color: rgb(204, 186, 141);
}

html body .canvas-node-file {
  color: rgb(204, 186, 141);
}

html body .canvas-node-group {
  border-color: rgb(204, 186, 141);
}

html body .canvas-sidebar {
  background-color: rgb(24, 26, 27);
  border-color: rgb(204, 186, 141);
}

html body .note-properties-key {
  color: rgb(204, 186, 141);
}

html body .note-properties-row {
  border-color: rgb(204, 186, 141);
}

html body .note-properties-tags {
  color: rgb(50, 205, 50);
}

html body .note-properties-value {
  color: rgb(204, 186, 141);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

html body div#quartz-root {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(149, 137, 225);
  outline: rgb(149, 137, 225) none 0px;
  text-decoration-color: rgb(149, 137, 225);
}

html body .page article p > em, html em {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration-color: rgb(204, 186, 141);
}

html body .page article p > i, html i {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration-color: rgb(204, 186, 141);
}

html body .page article p > strong, html strong {
  color: rgb(149, 137, 225);
  outline: rgb(149, 137, 225) none 0px;
  text-decoration-color: rgb(149, 137, 225);
}

html body .text-highlight {
  background-color: rgb(41, 80, 46);
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration-color: rgb(204, 186, 141);
}

html body del {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration-color: rgb(204, 186, 141);
}

html body h1.article-title {
  color: rgb(204, 186, 141);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 20, 147);
}

html body p {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration-color: rgb(204, 186, 141);
}`,
    links: `html body a.external, html footer a {
  color: rgb(50, 205, 50);
  outline: rgb(50, 205, 50) none 0px;
  text-decoration-color: rgb(50, 205, 50);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(50, 205, 50);
  outline: rgb(50, 205, 50) none 0px;
  text-decoration-color: rgb(50, 205, 50);
}

html body a.internal.broken {
  color: rgb(50, 205, 50);
  outline: rgb(50, 205, 50) none 0px;
}`,
    lists: `html body dd {
  color: rgb(204, 186, 141);
}

html body dt {
  color: rgb(204, 186, 141);
}

html body ol > li {
  color: rgb(204, 186, 141);
}

html body ol.overflow {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body ul > li {
  color: rgb(204, 186, 141);
}

html body ul.overflow {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(50, 205, 50);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body table {
  color: rgb(204, 186, 141);
}

html body td {
  color: rgb(204, 186, 141);
}

html body th {
  color: rgb(204, 186, 141);
}`,
    code: `html body code {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(204, 186, 141);
}`,
    images: `html body audio {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body figcaption {
  color: rgb(204, 186, 141);
}

html body figure {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body img {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body video {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body .footnotes {
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body .transclude {
  border-bottom-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body .transclude-inner {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(255, 20, 147);
  border-left-color: rgb(255, 20, 147);
  border-right-color: rgb(255, 20, 147);
  border-top-color: rgb(255, 20, 147);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
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
  color: rgb(204, 186, 141);
}

html body .search > .search-container > .search-space {
  background-color: rgb(24, 26, 27);
}

html body .search > .search-container > .search-space > * {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration-color: rgb(204, 186, 141);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 186, 141);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(204, 186, 141);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(204, 186, 141);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 26, 27);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(204, 186, 141);
}

html body a.internal.tag-link::before {
  color: rgb(50, 205, 50);
}

html body h1 {
  color: rgb(255, 215, 0);
}

html body h2 {
  color: rgb(255, 215, 0);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(204, 186, 141);
}

html body h3 {
  color: rgb(255, 215, 0);
}

html body h4 {
  color: rgb(255, 215, 0);
}

html body h5 {
  color: rgb(255, 215, 0);
}

html body h6 {
  color: rgb(255, 215, 0);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}

html body ::-webkit-scrollbar-track {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 186, 141);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 186, 141);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(204, 186, 141);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}`,
    footer: `html body footer {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

html body footer ul li a {
  color: rgb(204, 186, 141);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(204, 186, 141);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 186, 141);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 186, 141);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body li.section-li > .section .meta {
  color: rgb(204, 186, 141);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 186, 141);
}

html body ul.section-ul {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body .darkmode svg {
  color: rgb(204, 186, 141);
  stroke: rgb(204, 186, 141);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body .breadcrumb-element p {
  color: rgb(255, 20, 147);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body .metadata {
  color: rgb(204, 186, 141);
}

html body .metadata-properties {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body .navigation-progress {
  background-color: rgb(24, 26, 27);
}

html body .page-header h2.page-title {
  color: rgb(204, 186, 141);
}

html body abbr {
  color: rgb(204, 186, 141);
}

html body details {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body input[type=text] {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body kbd {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

html body progress {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

html body sub {
  color: rgb(204, 186, 141);
}

html body summary {
  color: rgb(204, 186, 141);
}

html body sup {
  color: rgb(204, 186, 141);
}

html body ul.tags > li {
  color: rgb(50, 205, 50);
}`,
  },
  light: {},
};
