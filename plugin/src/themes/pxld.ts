import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pxld", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #080808 !important;
  --background-secondary: #080808 !important;
  --bases-cards-background: #080808 !important;
  --bases-table-cell-background-active: #080808 !important;
  --bases-table-header-background: #080808 !important;
  --bases-table-summary-background: #080808 !important;
  --bodyFont: 'pixel_squareregular' !important;
  --canvas-background: #080808 !important;
  --caret-color: #f5f7fa !important;
  --checkbox-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --checkbox-marker-color: #080808 !important;
  --code-background: #111112 !important;
  --code-comment: #a4b9db !important;
  --code-keyword: #fb464c !important;
  --code-normal: #f5f7fa !important;
  --code-operator: #53dfdd !important;
  --code-property: #fa99cd !important;
  --code-string: #4682e3 !important;
  --codeFont: 'pixel_squareregular' !important;
  --collapse-icon-color-collapsed: hsl(253, 92.4%, 85.14%) !important;
  --dark: #f5f7fa !important;
  --darkgray: #f5f7fa !important;
  --file-header-background: #080808 !important;
  --file-header-background-focused: #080808 !important;
  --flair-color: #f5f7fa !important;
  --font-mermaid: 'pixel_squareregular' !important;
  --font-text: 'pixel_squareregular' !important;
  --graph-node-focused: hsl(253, 92.4%, 85.14%) !important;
  --graph-text: #f5f7fa !important;
  --gray: #f5f7fa !important;
  --headerFont: 'pixel_squareregular' !important;
  --icon-color-active: hsl(253, 92.4%, 85.14%) !important;
  --icon-color-focused: #f5f7fa !important;
  --light: #080808 !important;
  --lightgray: #080808 !important;
  --link-color: hsl(253, 92.4%, 85.14%) !important;
  --link-external-color: hsl(253, 92.4%, 85.14%) !important;
  --link-unresolved-color: hsl(253, 92.4%, 85.14%) !important;
  --list-marker-color-collapsed: hsl(253, 92.4%, 85.14%) !important;
  --menu-background: #080808 !important;
  --metadata-input-text-color: #f5f7fa !important;
  --modal-background: #080808 !important;
  --nav-heading-color: #f5f7fa !important;
  --nav-heading-color-hover: #f5f7fa !important;
  --nav-item-color-active: #f5f7fa !important;
  --nav-item-color-highlighted: hsl(253, 92.4%, 85.14%) !important;
  --nav-item-color-hover: #f5f7fa !important;
  --nav-item-color-selected: #f5f7fa !important;
  --pdf-background: #080808 !important;
  --pdf-page-background: #080808 !important;
  --pdf-sidebar-background: #080808 !important;
  --pill-color-hover: #f5f7fa !important;
  --pill-color-remove-hover: hsl(253, 92.4%, 85.14%) !important;
  --prompt-background: #080808 !important;
  --ribbon-background: #080808 !important;
  --ribbon-background-collapsed: #080808 !important;
  --search-result-background: #080808 !important;
  --secondary: hsl(253, 92.4%, 85.14%) !important;
  --selection-color: #f5f7fa !important;
  --setting-group-heading-color: #f5f7fa !important;
  --status-bar-background: #080808 !important;
  --suggestion-background: #080808 !important;
  --tab-background-active: #080808 !important;
  --tab-container-background: #080808 !important;
  --tab-switcher-background: #080808 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #080808, transparent) !important;
  --tab-text-color-focused-active-current: #f5f7fa !important;
  --tab-text-color-focused-highlighted: hsl(253, 92.4%, 85.14%) !important;
  --table-header-color: #f5f7fa !important;
  --tag-color: hsl(253, 92.4%, 85.14%) !important;
  --tag-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(253, 92.4%, 85.14%) !important;
  --text-normal: #f5f7fa !important;
  --text-selection: hsl(253, 92.4%, 85.14%) !important;
  --titleFont: 'pixel_squareregular' !important;
  --titlebar-background: #080808 !important;
  --titlebar-text-color-focused: #f5f7fa !important;
  --vault-profile-color: #f5f7fa !important;
  --vault-profile-color-hover: #f5f7fa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(8, 8, 8);
  border-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(197, 182, 252);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  font-family: pixel_squareregular;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
  text-decoration-color: rgb(197, 182, 252);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
  text-decoration-color: rgb(197, 182, 252);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: pixel_squareregular;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  width: 231.75px;
}

html[saved-theme="dark"] body td {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body th {
  color: rgb(245, 247, 250);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 18);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 18);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(17, 17, 18);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(17, 17, 18);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
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
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(197, 182, 252);
}

html[saved-theme="dark"] body h1 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h2 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h3 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h4 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h5 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h6 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}`,
    explorer: `html[saved-theme="dark"] body .explorer {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: pixel_squareregular;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(245, 247, 250);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(245, 247, 250);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: pixel_squareregular;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .metadata {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(17, 17, 18);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(197, 182, 252);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #f5f7fa !important;
  --background-secondary: #f5f7fa !important;
  --bases-cards-background: #f5f7fa !important;
  --bases-table-cell-background-active: #f5f7fa !important;
  --bases-table-header-background: #f5f7fa !important;
  --bases-table-summary-background: #f5f7fa !important;
  --blur-background: color-mix(in srgb, #f5f7fa 65%, transparent) linear-gradient(#f5f7fa, color-mix(in srgb, #f5f7fa 65%, transparent)) !important;
  --bodyFont: 'pixel_squareregular' !important;
  --canvas-background: #f5f7fa !important;
  --caret-color: #080808 !important;
  --checkbox-marker-color: #f5f7fa !important;
  --code-normal: #080808 !important;
  --code-string: #4682e3 !important;
  --codeFont: 'pixel_squareregular' !important;
  --collapse-icon-color-collapsed: hsl(257, 88.88%, 70.95%) !important;
  --color-accent: hsl(257, 88.88%, 70.95%) !important;
  --dark: #080808 !important;
  --darkgray: #080808 !important;
  --file-header-background: #f5f7fa !important;
  --file-header-background-focused: #f5f7fa !important;
  --flair-color: #080808 !important;
  --font-mermaid: 'pixel_squareregular' !important;
  --font-text: 'pixel_squareregular' !important;
  --graph-node-focused: hsl(257, 88.88%, 70.95%) !important;
  --graph-text: #080808 !important;
  --gray: #080808 !important;
  --headerFont: 'pixel_squareregular' !important;
  --icon-color-active: hsl(257, 88.88%, 70.95%) !important;
  --icon-color-focused: #080808 !important;
  --light: #f5f7fa !important;
  --lightgray: #f5f7fa !important;
  --link-color: hsl(257, 88.88%, 70.95%) !important;
  --link-external-color: hsl(257, 88.88%, 70.95%) !important;
  --link-unresolved-color: hsl(257, 88.88%, 70.95%) !important;
  --list-marker-color-collapsed: hsl(257, 88.88%, 70.95%) !important;
  --menu-background: #f5f7fa !important;
  --metadata-input-text-color: #080808 !important;
  --modal-background: #f5f7fa !important;
  --nav-heading-color: #080808 !important;
  --nav-heading-color-hover: #080808 !important;
  --nav-item-color-active: #080808 !important;
  --nav-item-color-highlighted: hsl(257, 88.88%, 70.95%) !important;
  --nav-item-color-hover: #080808 !important;
  --nav-item-color-selected: #080808 !important;
  --pdf-background: #f5f7fa !important;
  --pdf-page-background: #f5f7fa !important;
  --pdf-sidebar-background: #f5f7fa !important;
  --pill-color-hover: #080808 !important;
  --pill-color-remove-hover: hsl(257, 88.88%, 70.95%) !important;
  --prompt-background: #f5f7fa !important;
  --raised-background: color-mix(in srgb, #f5f7fa 65%, transparent) linear-gradient(#f5f7fa, color-mix(in srgb, #f5f7fa 65%, transparent)) !important;
  --ribbon-background: #f5f7fa !important;
  --ribbon-background-collapsed: #f5f7fa !important;
  --search-result-background: #f5f7fa !important;
  --secondary: hsl(257, 88.88%, 70.95%) !important;
  --selection-color: #f5f7fa !important;
  --setting-group-heading-color: #080808 !important;
  --status-bar-background: #f5f7fa !important;
  --suggestion-background: #f5f7fa !important;
  --tab-background-active: #f5f7fa !important;
  --tab-container-background: #f5f7fa !important;
  --tab-switcher-background: #f5f7fa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f5f7fa, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --tab-text-color-focused-active-current: #080808 !important;
  --tab-text-color-focused-highlighted: hsl(257, 88.88%, 70.95%) !important;
  --table-header-color: #080808 !important;
  --tag-color: hsl(257, 88.88%, 70.95%) !important;
  --tag-color-hover: hsl(257, 88.88%, 70.95%) !important;
  --tertiary: hsl(257, 88.88%, 70.95%) !important;
  --text-accent: hsl(257, 88.88%, 70.95%) !important;
  --text-normal: #080808 !important;
  --text-selection: hsl(255, 89.76%, 75.9%) !important;
  --titleFont: 'pixel_squareregular' !important;
  --titlebar-background: #f5f7fa !important;
  --titlebar-text-color-focused: #080808 !important;
  --vault-profile-color: #080808 !important;
  --vault-profile-color-hover: #080808 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(245, 247, 250);
  border-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body del {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body p {
  font-family: pixel_squareregular;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
  text-decoration-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
  text-decoration-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body dt {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: pixel_squareregular;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body table {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  width: 231.75px;
}

html[saved-theme="light"] body td {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body th {
  color: rgb(8, 8, 8);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(8, 8, 8);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
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
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body h1 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h2 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h3 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h4 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h5 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h6 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}`,
    explorer: `html[saved-theme="light"] body .explorer {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: pixel_squareregular;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(8, 8, 8);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(8, 8, 8);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: pixel_squareregular;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .metadata {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sub {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body summary {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sup {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(152, 115, 247);
}`,
  },
};
