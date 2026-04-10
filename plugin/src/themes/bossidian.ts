import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "bossidian", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #22292c !important;
  --background-secondary: #1b2124 !important;
  --background-secondary-alt: #0d0b12 !important;
  --bases-cards-background: #22292c !important;
  --bases-table-border-color: #868686 !important;
  --bases-table-cell-background-active: #22292c !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(14, 210, 247, 0.7) !important;
  --bases-table-header-background: #22292c !important;
  --bases-table-summary-background: #22292c !important;
  --blockquote-border-color: #ff8800 !important;
  --blockquote-border-thickness: 0.25rem !important;
  --canvas-background: #22292c !important;
  --canvas-card-label-color: #2e88b4 !important;
  --caret-color: #bebebe !important;
  --checkbox-border-color: #2e88b4 !important;
  --checkbox-color: rgba(14, 210, 247, 0.7) !important;
  --checkbox-color-hover: #ff8800 !important;
  --checkbox-marker-color: #22292c !important;
  --code-background: #1b2124 !important;
  --code-comment: #2e88b4 !important;
  --code-normal: #ff8800 !important;
  --collapse-icon-color: #2e88b4 !important;
  --collapse-icon-color-collapsed: #2faae6 !important;
  --color-bossidian-pink: #f4569d !important;
  --color-bossidian-primary: #2faae6 !important;
  --color-bossidian-primary-background: #22292c !important;
  --color-bossidian-secondary: #ff8800 !important;
  --color-bossidian-secondary-background: #1b2124 !important;
  --dark: #bebebe !important;
  --darkgray: #bebebe !important;
  --divider-color-hover: rgba(14, 210, 247, 0.7) !important;
  --embed-border-start: 2px solid rgba(14, 210, 247, 0.7) !important;
  --file-header-background: #22292c !important;
  --file-header-background-focused: #22292c !important;
  --flair-color: #bebebe !important;
  --footnote-id-color-no-occurrences: #2e88b4 !important;
  --graph-node-focused: #2faae6 !important;
  --graph-node-unresolved: #2e88b4 !important;
  --graph-text: #bebebe !important;
  --gray: #2e88b4 !important;
  --h1-color: #2faae6 !important;
  --h2-color: #2faae6 !important;
  --h3-color: #2faae6 !important;
  --h4-color: #2faae6 !important;
  --h5-color: #2faae6 !important;
  --h6-color: #2faae6 !important;
  --heading-formatting: #2e88b4 !important;
  --highlight: rgba(244, 86, 157, 0.25) !important;
  --icon-color-active: #2faae6 !important;
  --icon-color-focused: #bebebe !important;
  --inline-title-color: #2faae6 !important;
  --input-date-separator: #2e88b4 !important;
  --input-placeholder-color: #2e88b4 !important;
  --interactive-accent: rgba(14, 210, 247, 0.7) !important;
  --interactive-accent-hover: #ff8800 !important;
  --light: #22292c !important;
  --lightgray: #1b2124 !important;
  --link-color: #2faae6 !important;
  --link-color-hover: #ff8800 !important;
  --link-external-color: #2faae6 !important;
  --link-external-color-hover: #ff8800 !important;
  --link-unresolved-color: #2faae6 !important;
  --list-marker-color: #2faae6 !important;
  --list-marker-color-collapsed: #2faae6 !important;
  --menu-background: #1b2124 !important;
  --metadata-input-text-color: #bebebe !important;
  --modal-background: #22292c !important;
  --nav-collapse-icon-color: #2e88b4 !important;
  --nav-collapse-icon-color-collapsed: #2e88b4 !important;
  --nav-heading-color: #bebebe !important;
  --nav-heading-color-collapsed: #2e88b4 !important;
  --nav-heading-color-hover: #bebebe !important;
  --nav-item-color: #2faae6 !important;
  --nav-item-color-active: #2faae6 !important;
  --nav-item-color-highlighted: #ff8800 !important;
  --nav-item-color-hover: #2faae6 !important;
  --nav-item-color-selected: #bebebe !important;
  --nav-item-weight-active: 800 !important;
  --nav-tag-color: #2e88b4 !important;
  --pdf-background: #22292c !important;
  --pdf-page-background: #22292c !important;
  --pdf-sidebar-background: #22292c !important;
  --pill-color-hover: #bebebe !important;
  --pill-color-remove: #2e88b4 !important;
  --pill-color-remove-hover: #2faae6 !important;
  --prompt-background: #22292c !important;
  --ribbon-background: #1b2124 !important;
  --ribbon-background-collapsed: #22292c !important;
  --search-result-background: #22292c !important;
  --secondary: #2faae6 !important;
  --setting-group-heading-color: #bebebe !important;
  --status-bar-background: #1b2124 !important;
  --suggestion-background: #22292c !important;
  --tab-background-active: #22292c !important;
  --tab-container-background: #1b2124 !important;
  --tab-switcher-background: #1b2124 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1b2124, transparent) !important;
  --tab-text-color: #2e88b4 !important;
  --tab-text-color-focused-active-current: #bebebe !important;
  --tab-text-color-focused-highlighted: #2faae6 !important;
  --table-border-color: #868686 !important;
  --table-drag-handle-background-active: rgba(14, 210, 247, 0.7) !important;
  --table-drag-handle-color: #2e88b4 !important;
  --table-header-border-color: #868686 !important;
  --table-header-color: #bebebe !important;
  --table-selection-border-color: rgba(14, 210, 247, 0.7) !important;
  --tag-background: rgba(14, 210, 247, 0.15) !important;
  --tag-color: #2faae6 !important;
  --tag-color-hover: #2faae6 !important;
  --tertiary: #ff8800 !important;
  --text-accent: #2faae6 !important;
  --text-accent-hover: #ff8800 !important;
  --text-faint: #2e88b4 !important;
  --text-highlight-bg: rgba(244, 86, 157, 0.25) !important;
  --text-normal: #bebebe !important;
  --textHighlight: rgba(244, 86, 157, 0.25) !important;
  --titlebar-background: #1b2124 !important;
  --titlebar-background-focused: #0d0b12 !important;
  --titlebar-text-color-focused: #bebebe !important;
  --vault-name-color: #2faae6 !important;
  --vault-profile-color: #bebebe !important;
  --vault-profile-color-hover: #bebebe !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(34, 41, 44);
  color: rgb(190, 190, 190);
}

html body .bases-table thead th {
  border-color: rgb(134, 134, 134);
  color: rgb(190, 190, 190);
  font-weight: 900;
}

html body .canvas-node {
  border-color: rgb(190, 190, 190);
}

html body .canvas-node-content {
  color: rgb(190, 190, 190);
}

html body .canvas-node-file {
  color: rgb(190, 190, 190);
}

html body .canvas-node-group {
  border-color: rgb(190, 190, 190);
}

html body .canvas-sidebar {
  background-color: rgb(27, 33, 36);
  border-color: rgb(190, 190, 190);
}

html body .note-properties-tags {
  background-color: rgba(14, 210, 247, 0.15);
  color: rgb(47, 170, 230);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

html body div#quartz-root {
  background-color: rgb(34, 41, 44);
  color: rgb(190, 190, 190);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .page article p > em, html em {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .page article p > i, html i {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .page article p > strong, html strong {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .text-highlight {
  background-color: rgba(244, 86, 157, 0.25);
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body del {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body h1.article-title {
  color: rgb(190, 190, 190);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(46, 136, 180);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(14, 210, 247, 0.7);
  border-color: rgba(14, 210, 247, 0.7);
}`,
    links: `html body a.external, html footer a {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
  text-decoration-color: rgb(47, 170, 230);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
  text-decoration-color: rgb(47, 170, 230);
}

html body a.internal.broken {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
}`,
    lists: `html body dd {
  color: rgb(190, 190, 190);
}

html body dt {
  color: rgb(190, 190, 190);
}

html body ol > li {
  color: rgb(190, 190, 190);
}

html body ol.overflow {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body ul > li {
  color: rgb(190, 190, 190);
}

html body ul.overflow {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(46, 136, 180);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body table {
  color: rgb(190, 190, 190);
}

html body td {
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  color: rgb(190, 190, 190);
}

html body th {
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  color: rgb(190, 190, 190);
  font-weight: 900;
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 136, 0);
  border-left-color: rgb(255, 136, 0);
  border-right-color: rgb(255, 136, 0);
  border-top-color: rgb(255, 136, 0);
  color: rgb(255, 136, 0);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 33, 36);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(27, 33, 36);
}

html body pre:has(> code) {
  background-color: rgb(27, 33, 36);
}`,
    images: `html body audio {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body figcaption {
  color: rgb(190, 190, 190);
}

html body figure {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body img {
  border-bottom-color: rgb(47, 170, 230);
  border-left-color: rgb(47, 170, 230);
  border-right-color: rgb(47, 170, 230);
  border-top-color: rgb(47, 170, 230);
}

html body video {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .transclude {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.7);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .transclude-inner {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(46, 136, 180);
  border-left-color: rgb(46, 136, 180);
  border-right-color: rgb(46, 136, 180);
  border-top-color: rgb(46, 136, 180);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
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
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 41, 44);
}

html body .search > .search-container > .search-space > * {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 33, 36);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(14, 210, 247, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(47, 170, 230);
}

html body h1 {
  color: rgb(47, 170, 230);
}

html body h2 {
  color: rgb(47, 170, 230);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(47, 170, 230);
}

html body h3 {
  color: rgb(47, 170, 230);
}

html body h4 {
  color: rgb(47, 170, 230);
}

html body h5 {
  color: rgb(47, 170, 230);
}

html body h6 {
  color: rgb(47, 170, 230);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(47, 170, 230);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(47, 170, 230);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(190, 190, 190);
}`,
    footer: `html body footer {
  background-color: rgb(27, 33, 36);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(190, 190, 190);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(47, 170, 230);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(47, 170, 230);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body li.section-li > .section .meta {
  color: rgb(47, 170, 230);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(47, 170, 230);
}

html body ul.section-ul {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(46, 136, 180);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .navigation-progress {
  background-color: rgb(27, 33, 36);
}

html body .page-header h2.page-title {
  color: rgb(190, 190, 190);
}

html body abbr {
  color: rgb(190, 190, 190);
}

html body details {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body kbd {
  background-color: rgb(27, 33, 36);
  border-bottom-color: rgb(255, 136, 0);
  border-left-color: rgb(255, 136, 0);
  border-right-color: rgb(255, 136, 0);
  border-top-color: rgb(255, 136, 0);
  color: rgb(255, 136, 0);
}

html body progress {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body sub {
  color: rgb(190, 190, 190);
}

html body summary {
  color: rgb(190, 190, 190);
}

html body sup {
  color: rgb(190, 190, 190);
}

html body ul.tags > li {
  background-color: rgba(14, 210, 247, 0.15);
  color: rgb(47, 170, 230);
}`,
  },
  light: {},
};
