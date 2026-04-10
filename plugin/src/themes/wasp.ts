import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "wasp", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #f8c537 !important;
  --background-primary: #242424 !important;
  --background-secondary: #191919 !important;
  --background-secondary-alt: #3D3D3D !important;
  --bases-cards-background: #242424 !important;
  --bases-cards-shadow: 0 0 0 1px #f8c537 !important;
  --bases-embed-border-color: #f8c537 !important;
  --bases-table-border-color: #f8c537 !important;
  --bases-table-cell-background-active: #242424 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f8c537 !important;
  --bases-table-header-background: #242424 !important;
  --bases-table-summary-background: #242424 !important;
  --blockquote-border-color: #f8c537 !important;
  --button-bg-color: #D49335 !important;
  --button-hover-bg-color: #DAA520 !important;
  --button-hover-text-color: #ffffff !important;
  --button-text-color: #242424 !important;
  --canvas-background: #242424 !important;
  --canvas-card-label-color: #bdae93 !important;
  --caret-color: #faf2d6 !important;
  --checkbox-border-color: #bdae93 !important;
  --checkbox-color: #f8c537 !important;
  --checkbox-marker-color: #242424 !important;
  --code-block: #83a598 !important;
  --code-border-color: #f8c537 !important;
  --code-comment: #bdae93 !important;
  --code-normal: #faf2d6 !important;
  --collapse-icon-color: #bdae93 !important;
  --collapse-icon-color-collapsed: #f8c537 !important;
  --dark: #faf2d6 !important;
  --darkgray: #faf2d6 !important;
  --divider-color: #f8c537 !important;
  --divider-color-hover: #f8c537 !important;
  --embed-block-shadow-hover: 0 0 0 1px #f8c537, inset 0 0 0 1px #f8c537 !important;
  --embed-border-start: 2px solid #f8c537 !important;
  --file-header-background: #242424 !important;
  --file-header-background-focused: #242424 !important;
  --flair-color: #faf2d6 !important;
  --footnote-divider-color: #f8c537 !important;
  --footnote-id-color-no-occurrences: #bdae93 !important;
  --graph-node-focused: #f8c537 !important;
  --graph-node-unresolved: #bdae93 !important;
  --graph-text: #faf2d6 !important;
  --gray: #bdae93 !important;
  --heading-formatting: #bdae93 !important;
  --highlight: #640211 !important;
  --hr-color: #f8c537 !important;
  --icon-color-active: #f8c537 !important;
  --icon-color-focused: #faf2d6 !important;
  --inline-code: #83a598 !important;
  --input-date-separator: #bdae93 !important;
  --input-placeholder-color: #bdae93 !important;
  --interactive-accent: #f8c537 !important;
  --interactive-accent-rgb: #f8c537 !important;
  --interactive-before: #7c6f64 !important;
  --light: #242424 !important;
  --lightgray: #191919 !important;
  --link-color: #f8c537 !important;
  --link-color-hover: #D49335 !important;
  --link-external-color: #f8c537 !important;
  --link-external-color-hover: #D49335 !important;
  --link-unresolved-color: #f8c537 !important;
  --list-marker-color: #bdae93 !important;
  --list-marker-color-collapsed: #f8c537 !important;
  --menu-background: #191919 !important;
  --metadata-border-color: #f8c537 !important;
  --metadata-divider-color: #f8c537 !important;
  --metadata-input-text-color: #faf2d6 !important;
  --modal-background: #242424 !important;
  --nav-collapse-icon-color: #bdae93 !important;
  --nav-collapse-icon-color-collapsed: #bdae93 !important;
  --nav-heading-color: #faf2d6 !important;
  --nav-heading-color-collapsed: #bdae93 !important;
  --nav-heading-color-hover: #faf2d6 !important;
  --nav-item-color-active: #faf2d6 !important;
  --nav-item-color-highlighted: #f8c537 !important;
  --nav-item-color-hover: #faf2d6 !important;
  --nav-item-color-selected: #faf2d6 !important;
  --nav-tag-color: #bdae93 !important;
  --pdf-background: #242424 !important;
  --pdf-page-background: #242424 !important;
  --pdf-shadow: 0 0 0 1px #f8c537 !important;
  --pdf-sidebar-background: #242424 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #f8c537 !important;
  --pill-border-color: #f8c537 !important;
  --pill-color-hover: #faf2d6 !important;
  --pill-color-remove: #bdae93 !important;
  --pill-color-remove-hover: #f8c537 !important;
  --pre-code: # !important;
  --prompt-background: #242424 !important;
  --ribbon-background: #191919 !important;
  --ribbon-background-collapsed: #242424 !important;
  --search-result-background: #242424 !important;
  --secondary: #f8c537 !important;
  --setting-group-heading-color: #faf2d6 !important;
  --setting-items-border-color: #f8c537 !important;
  --slider-track-background: #f8c537 !important;
  --status-bar-background: #191919 !important;
  --status-bar-border-color: #f8c537 !important;
  --suggestion-background: #242424 !important;
  --tab-background-active: #242424 !important;
  --tab-container-background: #191919 !important;
  --tab-outline-color: #f8c537 !important;
  --tab-switcher-background: #191919 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #191919, transparent) !important;
  --tab-text-color: #bdae93 !important;
  --tab-text-color-focused-active-current: #faf2d6 !important;
  --tab-text-color-focused-highlighted: #f8c537 !important;
  --table-add-button-border-color: #f8c537 !important;
  --table-border-color: #f8c537 !important;
  --table-drag-handle-background-active: #f8c537 !important;
  --table-drag-handle-color: #bdae93 !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-border-color: #f8c537 !important;
  --table-header-color: #faf2d6 !important;
  --table-selection-border-color: #f8c537 !important;
  --tag-color: #f8c537 !important;
  --tag-color-hover: #f8c537 !important;
  --tertiary: #D49335 !important;
  --text-a: #f8c537 !important;
  --text-a-hover: #83a598 !important;
  --text-accent: #f8c537 !important;
  --text-accent-hover: #D49335 !important;
  --text-faint: #bdae93 !important;
  --text-highlight-bg: #640211 !important;
  --text-link: #83a598 !important;
  --text-normal: #faf2d6 !important;
  --text-on-accent: #fff !important;
  --text-selection: #f8c537 !important;
  --text-title-h1: #E0E0E0 !important;
  --text-title-h2: #E0E0E0 !important;
  --text-title-h3: #E0E0E0 !important;
  --text-title-h4: #E0E0E0 !important;
  --text-title-h5: #E0E0E0 !important;
  --text-title-h6: #E0E0E0 !important;
  --textHighlight: #640211 !important;
  --titlebar-background: #191919 !important;
  --titlebar-background-focused: #3D3D3D !important;
  --titlebar-border-color: #f8c537 !important;
  --titlebar-text-color-focused: #faf2d6 !important;
  --vault-profile-color: #faf2d6 !important;
  --vault-profile-color-hover: #faf2d6 !important;
  --vim-cursor: #f8c537 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 25, 25);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(36, 36, 36);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 25, 25);
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 25, 25);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 25, 25);
  border-left-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(36, 36, 36);
  color: rgb(250, 242, 214);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(100, 2, 17);
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 174, 147);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(248, 197, 55);
  border-color: rgb(248, 197, 55);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(248, 197, 55);
  outline: rgb(248, 197, 55) none 0px;
  text-decoration-color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(248, 197, 55);
  outline: rgb(248, 197, 55) none 0px;
  text-decoration-color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(248, 197, 55);
  outline: rgb(248, 197, 55) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body dt {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(189, 174, 147);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body table {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
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
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h2 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body h3 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h5 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(250, 242, 214);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(250, 242, 214);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(250, 242, 214);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(189, 174, 147);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body abbr {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body sub {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body summary {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body sup {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(248, 197, 55);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #D49335 !important;
  --background-primary: #EDEDED !important;
  --background-primary-alt: # !important;
  --background-secondary: #C4C4C4 !important;
  --background-secondary-alt: #707070 !important;
  --bases-cards-background: #EDEDED !important;
  --bases-cards-cover-background: # !important;
  --bases-cards-shadow: 0 0 0 1px #D49335 !important;
  --bases-embed-border-color: #D49335 !important;
  --bases-table-border-color: #D49335 !important;
  --bases-table-cell-background-active: #EDEDED !important;
  --bases-table-cell-background-disabled: # !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f8c537 !important;
  --bases-table-group-background: # !important;
  --bases-table-header-background: #EDEDED !important;
  --bases-table-summary-background: #EDEDED !important;
  --blockquote-border-color: #f8c537 !important;
  --blur-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent)) !important;
  --canvas-background: #EDEDED !important;
  --canvas-card-label-color: #DEDEDE !important;
  --caret-color: #1A2023 !important;
  --checkbox-border-color: #DEDEDE !important;
  --checkbox-color: #f8c537 !important;
  --checkbox-marker-color: #EDEDED !important;
  --code-background: # !important;
  --code-border-color: #D49335 !important;
  --code-comment: #DEDEDE !important;
  --code-normal: #1A2023 !important;
  --collapse-icon-color: #DEDEDE !important;
  --collapse-icon-color-collapsed: #961327 !important;
  --dark: #1A2023 !important;
  --darkgray: #1A2023 !important;
  --divider-color: #D49335 !important;
  --divider-color-hover: #f8c537 !important;
  --embed-block-shadow-hover: 0 0 0 1px #D49335, inset 0 0 0 1px #D49335 !important;
  --embed-border-start: 2px solid #f8c537 !important;
  --file-header-background: #EDEDED !important;
  --file-header-background-focused: #EDEDED !important;
  --flair-color: #1A2023 !important;
  --footnote-divider-color: #D49335 !important;
  --footnote-id-color-no-occurrences: #DEDEDE !important;
  --graph-node-focused: #961327 !important;
  --graph-node-unresolved: #DEDEDE !important;
  --graph-text: #1A2023 !important;
  --gray: #DEDEDE !important;
  --heading-formatting: #DEDEDE !important;
  --hr-color: #D49335 !important;
  --icon-color-active: #961327 !important;
  --icon-color-focused: #1A2023 !important;
  --inline-code: #458588 !important;
  --input-date-separator: #DEDEDE !important;
  --input-placeholder-color: #DEDEDE !important;
  --interactive-accent: #f8c537 !important;
  --interactive-accent-rgb: #961327 !important;
  --interactive-before: #a89984 !important;
  --light: #EDEDED !important;
  --lightgray: #C4C4C4 !important;
  --link-color: #961327 !important;
  --link-color-hover: #D49335 !important;
  --link-external-color: #961327 !important;
  --link-external-color-hover: #D49335 !important;
  --link-unresolved-color: #961327 !important;
  --list-marker-color: #DEDEDE !important;
  --list-marker-color-collapsed: #961327 !important;
  --menu-background: #C4C4C4 !important;
  --metadata-border-color: #D49335 !important;
  --metadata-divider-color: #D49335 !important;
  --metadata-input-text-color: #1A2023 !important;
  --modal-background: #EDEDED !important;
  --nav-collapse-icon-color: #DEDEDE !important;
  --nav-collapse-icon-color-collapsed: #DEDEDE !important;
  --nav-heading-color: #1A2023 !important;
  --nav-heading-color-collapsed: #DEDEDE !important;
  --nav-heading-color-hover: #1A2023 !important;
  --nav-item-color-active: #1A2023 !important;
  --nav-item-color-highlighted: #961327 !important;
  --nav-item-color-hover: #1A2023 !important;
  --nav-item-color-selected: #1A2023 !important;
  --nav-tag-color: #DEDEDE !important;
  --pdf-background: #EDEDED !important;
  --pdf-page-background: #EDEDED !important;
  --pdf-sidebar-background: #EDEDED !important;
  --pill-border-color: #D49335 !important;
  --pill-color-hover: #1A2023 !important;
  --pill-color-remove: #DEDEDE !important;
  --pill-color-remove-hover: #961327 !important;
  --pre-code: #bebebe !important;
  --prompt-background: #EDEDED !important;
  --raised-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent)) !important;
  --ribbon-background: #C4C4C4 !important;
  --ribbon-background-collapsed: #EDEDED !important;
  --search-result-background: #EDEDED !important;
  --secondary: #961327 !important;
  --setting-group-heading-color: #1A2023 !important;
  --setting-items-background: # !important;
  --setting-items-border-color: #D49335 !important;
  --slider-track-background: #D49335 !important;
  --status-bar-background: #C4C4C4 !important;
  --status-bar-border-color: #D49335 !important;
  --suggestion-background: #EDEDED !important;
  --tab-background-active: #EDEDED !important;
  --tab-container-background: #C4C4C4 !important;
  --tab-outline-color: #D49335 !important;
  --tab-switcher-background: #C4C4C4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #C4C4C4, transparent) !important;
  --tab-text-color: #DEDEDE !important;
  --tab-text-color-focused-active-current: #1A2023 !important;
  --tab-text-color-focused-highlighted: #961327 !important;
  --table-add-button-border-color: #D49335 !important;
  --table-border-color: #D49335 !important;
  --table-drag-handle-background-active: #f8c537 !important;
  --table-drag-handle-color: #DEDEDE !important;
  --table-header-border-color: #D49335 !important;
  --table-header-color: #1A2023 !important;
  --table-selection-border-color: #f8c537 !important;
  --tag-color: #961327 !important;
  --tag-color-hover: #961327 !important;
  --tertiary: #D49335 !important;
  --text-a: #961327 !important;
  --text-a-hover: #D49335 !important;
  --text-accent: #961327 !important;
  --text-accent-hover: #D49335 !important;
  --text-faint: #DEDEDE !important;
  --text-link: #D49335 !important;
  --text-normal: #1A2023 !important;
  --text-selection: #EDC180 !important;
  --text-title-h1: #D49335 !important;
  --text-title-h2: #D49335 !important;
  --text-title-h3: #D49335 !important;
  --text-title-h4: #D49335 !important;
  --text-title-h5: #D49335 !important;
  --text-white: #ffffff !important;
  --titlebar-background: #C4C4C4 !important;
  --titlebar-background-focused: #707070 !important;
  --titlebar-border-color: #D49335 !important;
  --titlebar-text-color-focused: #1A2023 !important;
  --vault-profile-color: #1A2023 !important;
  --vault-profile-color-hover: #1A2023 !important;
  --vim-cursor: #961327 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(237, 237, 237);
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(212, 147, 53);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(150, 19, 39);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(212, 147, 53);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(196, 196, 196);
  border-left-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body del {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(248, 197, 55);
  border-color: rgb(248, 197, 55);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(150, 19, 39);
  outline: rgb(150, 19, 39) none 0px;
  text-decoration-color: rgb(150, 19, 39);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(150, 19, 39);
  outline: rgb(150, 19, 39) none 0px;
  text-decoration-color: rgb(150, 19, 39);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(150, 19, 39);
  outline: rgb(150, 19, 39) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(222, 222, 222);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body table {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
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
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(150, 19, 39);
}

html[saved-theme="light"] body h1 {
  color: rgb(212, 147, 53);
}

html[saved-theme="light"] body h2 {
  color: rgb(212, 147, 53);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body h3 {
  color: rgb(212, 147, 53);
}

html[saved-theme="light"] body h4 {
  color: rgb(212, 147, 53);
}

html[saved-theme="light"] body h5 {
  color: rgb(212, 147, 53);
}

html[saved-theme="light"] body h6 {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 32, 35);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 32, 35);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(196, 196, 196);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 32, 35);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(222, 222, 222);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(196, 196, 196);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(150, 19, 39);
}`,
  },
};
