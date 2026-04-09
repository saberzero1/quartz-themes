import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sunbather",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #050505 !important;
  --background-secondary: #050505 !important;
  --background-secondary-alt: #050505 !important;
  --bases-cards-background: #050505 !important;
  --bases-table-cell-background-active: #050505 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #da5c81 !important;
  --bases-table-header-background: #050505 !important;
  --bases-table-summary-background: #050505 !important;
  --blockquote-border-color: #da5c81 !important;
  --canvas-background: #050505 !important;
  --canvas-card-label-color: #767676 !important;
  --caret-color: #d6d4d4 !important;
  --checkbox-border-color: #767676 !important;
  --checkbox-color: #da5c81 !important;
  --checkbox-marker-color: #050505 !important;
  --code-background: #131313 !important;
  --code-comment: #767676 !important;
  --code-constant: #d75f87 !important;
  --code-function: #d6d4d4 !important;
  --code-keyword: #767676 !important;
  --code-normal: #d6d4d4 !important;
  --code-operator: #d6d4d4 !important;
  --code-string: #da5c81 !important;
  --code-tag: #20BBFC !important;
  --code-url: #20BBFC !important;
  --code-value: #d6d4d4 !important;
  --collapse-icon-color: #767676 !important;
  --collapse-icon-color-collapsed: #d75f87 !important;
  --color-accent: #d75f87 !important;
  --dark: #d6d4d4 !important;
  --darkgray: #d6d4d4 !important;
  --divider-color-hover: #da5c81 !important;
  --embed-border-start: 2px solid #da5c81 !important;
  --file-header-background: #050505 !important;
  --file-header-background-focused: #050505 !important;
  --flair-color: #d6d4d4 !important;
  --footnote-id-color-no-occurrences: #767676 !important;
  --graph-node-focused: #d75f87 !important;
  --graph-node-unresolved: #767676 !important;
  --graph-text: #d6d4d4 !important;
  --gray: #767676 !important;
  --heading-formatting: #767676 !important;
  --icon-color-active: #d75f87 !important;
  --icon-color-focused: #d6d4d4 !important;
  --input-date-separator: #767676 !important;
  --input-placeholder-color: #767676 !important;
  --interactive-accent: #da5c81 !important;
  --interactive-before: #4E4E4E !important;
  --light: #050505 !important;
  --lightgray: #050505 !important;
  --link-color: #d75f87 !important;
  --link-external-color: #d75f87 !important;
  --link-unresolved-color: #d75f87 !important;
  --list-marker-color: #767676 !important;
  --list-marker-color-collapsed: #d75f87 !important;
  --menu-background: #050505 !important;
  --metadata-input-text-color: #d6d4d4 !important;
  --modal-background: #050505 !important;
  --nav-collapse-icon-color: #767676 !important;
  --nav-collapse-icon-color-collapsed: #767676 !important;
  --nav-heading-color: #d6d4d4 !important;
  --nav-heading-color-collapsed: #767676 !important;
  --nav-heading-color-hover: #d6d4d4 !important;
  --nav-item-background-active: #e25f86 !important;
  --nav-item-color-active: #262626 !important;
  --nav-item-color-highlighted: #d75f87 !important;
  --nav-item-color-hover: #d6d4d4 !important;
  --nav-item-color-selected: #d6d4d4 !important;
  --nav-tag-color: #767676 !important;
  --pdf-background: #050505 !important;
  --pdf-page-background: #050505 !important;
  --pdf-sidebar-background: #050505 !important;
  --pill-color-hover: #d6d4d4 !important;
  --pill-color-remove: #767676 !important;
  --pill-color-remove-hover: #d75f87 !important;
  --prompt-background: #050505 !important;
  --ribbon-background: #050505 !important;
  --ribbon-background-collapsed: #050505 !important;
  --scrollbar-bg: #0c0c0c !important;
  --search-result-background: #050505 !important;
  --secondary: #d75f87 !important;
  --setting-group-heading-color: #d6d4d4 !important;
  --status-bar-background: #050505 !important;
  --suggestion-background: #050505 !important;
  --tab-background-active: #050505 !important;
  --tab-container-background: #050505 !important;
  --tab-switcher-background: #050505 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #050505, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d75f87 !important;
  --tab-text-color: #767676 !important;
  --tab-text-color-focused-active-current: #d6d4d4 !important;
  --tab-text-color-focused-highlighted: #d75f87 !important;
  --table-drag-handle-background-active: #da5c81 !important;
  --table-drag-handle-color: #767676 !important;
  --table-header-color: #d6d4d4 !important;
  --table-selection-border-color: #da5c81 !important;
  --tag-color: #d75f87 !important;
  --tag-color-hover: #d75f87 !important;
  --tertiary: #d75f87 !important;
  --text-accent: #d75f87 !important;
  --text-faint: #767676 !important;
  --text-normal: #d6d4d4 !important;
  --text-selection: #da5c8133 !important;
  --titlebar-background: #050505 !important;
  --titlebar-background-focused: #050505 !important;
  --titlebar-text-color-focused: #d6d4d4 !important;
  --vault-profile-color: #d6d4d4 !important;
  --vault-profile-color-hover: #d6d4d4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(5, 5, 5);
  border-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(215, 95, 135);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body del {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(118, 118, 118);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(218, 92, 129);
  border-color: rgb(218, 92, 129);
}

html[saved-theme="dark"] body p {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration-color: rgb(215, 95, 135);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration-color: rgb(215, 95, 135);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body dt {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(118, 118, 118);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body table {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body td {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body th {
  color: rgb(214, 212, 212);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 19, 19);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 19, 19);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(19, 19, 19);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(19, 19, 19);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 118);
  border-left-color: rgb(118, 118, 118);
  border-right-color: rgb(118, 118, 118);
  border-top-color: rgb(118, 118, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
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
  color: rgb(214, 212, 212);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(5, 5, 5);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(215, 95, 135);
}

html[saved-theme="dark"] body h1 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h2 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h3 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h4 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h5 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h6 {
  color: rgb(214, 212, 212);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(214, 212, 212);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(5, 5, 5);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(214, 212, 212);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(118, 118, 118);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body abbr {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body sub {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body summary {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body sup {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(215, 95, 135);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #FFFFFF !important;
  --background-secondary: #FFFFFF !important;
  --background-secondary-alt: #C6C6C6 !important;
  --bases-cards-background: #FFFFFF !important;
  --bases-table-cell-background-active: #FFFFFF !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #da5c81 !important;
  --bases-table-header-background: #FFFFFF !important;
  --bases-table-summary-background: #FFFFFF !important;
  --blockquote-border-color: #da5c81 !important;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --canvas-background: #FFFFFF !important;
  --canvas-card-label-color: #767676 !important;
  --caret-color: #262626 !important;
  --checkbox-border-color: #767676 !important;
  --checkbox-color: #da5c81 !important;
  --checkbox-marker-color: #FFFFFF !important;
  --code-background: #ecebeb !important;
  --code-comment: #767676 !important;
  --code-constant: #d75f87 !important;
  --code-function: #262626 !important;
  --code-keyword: #767676 !important;
  --code-normal: #262626 !important;
  --code-operator: #262626 !important;
  --code-string: #d75f87 !important;
  --code-tag: #005F87 !important;
  --code-url: #008EC4 !important;
  --code-value: #262626 !important;
  --collapse-icon-color: #767676 !important;
  --collapse-icon-color-collapsed: #d75f87 !important;
  --color-accent: #d75f87 !important;
  --dark: #262626 !important;
  --darkgray: #262626 !important;
  --divider-color-hover: #da5c81 !important;
  --embed-border-start: 2px solid #da5c81 !important;
  --file-header-background: #FFFFFF !important;
  --file-header-background-focused: #FFFFFF !important;
  --flair-color: #262626 !important;
  --footnote-id-color-no-occurrences: #767676 !important;
  --graph-node-focused: #d75f87 !important;
  --graph-node-unresolved: #767676 !important;
  --graph-text: #262626 !important;
  --gray: #767676 !important;
  --heading-formatting: #767676 !important;
  --icon-color-active: #d75f87 !important;
  --icon-color-focused: #262626 !important;
  --input-date-separator: #767676 !important;
  --input-placeholder-color: #767676 !important;
  --interactive-accent: #da5c81 !important;
  --interactive-before: #4E4E4E !important;
  --light: #FFFFFF !important;
  --lightgray: #FFFFFF !important;
  --link-color: #d75f87 !important;
  --link-external-color: #d75f87 !important;
  --link-unresolved-color: #d75f87 !important;
  --list-marker-color: #767676 !important;
  --list-marker-color-collapsed: #d75f87 !important;
  --menu-background: #FFFFFF !important;
  --metadata-input-text-color: #262626 !important;
  --modal-background: #FFFFFF !important;
  --nav-collapse-icon-color: #767676 !important;
  --nav-collapse-icon-color-collapsed: #767676 !important;
  --nav-heading-color: #262626 !important;
  --nav-heading-color-collapsed: #767676 !important;
  --nav-heading-color-hover: #262626 !important;
  --nav-item-background-active: #e25f86 !important;
  --nav-item-color-active: #EEEEEE !important;
  --nav-item-color-highlighted: #d75f87 !important;
  --nav-item-color-hover: #262626 !important;
  --nav-item-color-selected: #262626 !important;
  --nav-tag-color: #767676 !important;
  --pdf-background: #FFFFFF !important;
  --pdf-page-background: #FFFFFF !important;
  --pdf-sidebar-background: #FFFFFF !important;
  --pill-color-hover: #262626 !important;
  --pill-color-remove: #767676 !important;
  --pill-color-remove-hover: #d75f87 !important;
  --prompt-background: #FFFFFF !important;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --ribbon-background: #FFFFFF !important;
  --ribbon-background-collapsed: #FFFFFF !important;
  --scrollbar-bg: #EEEEEE !important;
  --search-result-background: #FFFFFF !important;
  --secondary: #d75f87 !important;
  --setting-group-heading-color: #262626 !important;
  --status-bar-background: #FFFFFF !important;
  --suggestion-background: #FFFFFF !important;
  --tab-background-active: #FFFFFF !important;
  --tab-container-background: #FFFFFF !important;
  --tab-switcher-background: #FFFFFF !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #FFFFFF, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d75f87 !important;
  --tab-text-color: #767676 !important;
  --tab-text-color-focused-active-current: #262626 !important;
  --tab-text-color-focused-highlighted: #d75f87 !important;
  --table-drag-handle-background-active: #da5c81 !important;
  --table-drag-handle-color: #767676 !important;
  --table-header-color: #262626 !important;
  --table-selection-border-color: #da5c81 !important;
  --tag-color: #d75f87 !important;
  --tag-color-hover: #d75f87 !important;
  --tertiary: #d75f87 !important;
  --text-accent: #d75f87 !important;
  --text-faint: #767676 !important;
  --text-normal: #262626 !important;
  --text-selection: #da5c8133 !important;
  --titlebar-background: #FFFFFF !important;
  --titlebar-background-focused: #C6C6C6 !important;
  --titlebar-text-color-focused: #262626 !important;
  --vault-profile-color: #262626 !important;
  --vault-profile-color-hover: #262626 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(215, 95, 135);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(118, 118, 118);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(218, 92, 129);
  border-color: rgb(218, 92, 129);
}

html[saved-theme="light"] body p {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration-color: rgb(215, 95, 135);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration-color: rgb(215, 95, 135);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body dt {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(118, 118, 118);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body table {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body td {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body th {
  color: rgb(38, 38, 38);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 235, 235);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 235, 235);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(236, 235, 235);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(236, 235, 235);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 118);
  border-left-color: rgb(118, 118, 118);
  border-right-color: rgb(118, 118, 118);
  border-top-color: rgb(118, 118, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
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
  color: rgb(38, 38, 38);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(215, 95, 135);
}

html[saved-theme="light"] body h1 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h2 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h3 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h4 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h5 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h6 {
  color: rgb(38, 38, 38);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(38, 38, 38);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(118, 118, 118);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(236, 235, 235);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(215, 95, 135);
}`,
  },
};
