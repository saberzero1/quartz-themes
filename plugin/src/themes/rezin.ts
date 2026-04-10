import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rezin", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #181824 !important;
  --background-secondary: #0f0f18 !important;
  --background-secondary-alt: #181824 !important;
  --bases-cards-background: #181824 !important;
  --bases-table-cell-background-active: #181824 !important;
  --bases-table-header-background: #181824 !important;
  --bases-table-summary-background: #181824 !important;
  --canvas-background: #181824 !important;
  --caret-color: #4baaa8 !important;
  --checkbox-marker-color: #181824 !important;
  --code-normal: #4baaa8 !important;
  --dark: #4baaa8 !important;
  --darkgray: #4baaa8 !important;
  --file-header-background: #181824 !important;
  --file-header-background-focused: #181824 !important;
  --flair-color: #4baaa8 !important;
  --font-family-editor: Avenir, Avenir Next, sans-serif !important;
  --graph-text: #4baaa8 !important;
  --gray: #4baaa8 !important;
  --icon-color-focused: #4baaa8 !important;
  --light: #181824 !important;
  --lightgray: #0f0f18 !important;
  --menu-background: #0f0f18 !important;
  --metadata-input-text-color: #4baaa8 !important;
  --modal-background: #181824 !important;
  --nav-heading-color: #4baaa8 !important;
  --nav-heading-color-hover: #4baaa8 !important;
  --nav-item-color-active: #4baaa8 !important;
  --nav-item-color-hover: #4baaa8 !important;
  --nav-item-color-selected: #4baaa8 !important;
  --pdf-background: #181824 !important;
  --pdf-page-background: #181824 !important;
  --pdf-sidebar-background: #181824 !important;
  --pill-color-hover: #4baaa8 !important;
  --prompt-background: #181824 !important;
  --ribbon-background: #0f0f18 !important;
  --ribbon-background-collapsed: #181824 !important;
  --search-result-background: #181824 !important;
  --setting-group-heading-color: #4baaa8 !important;
  --status-bar-background: #0f0f18 !important;
  --suggestion-background: #181824 !important;
  --tab-background-active: #181824 !important;
  --tab-container-background: #0f0f18 !important;
  --tab-switcher-background: #0f0f18 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f0f18, transparent) !important;
  --tab-text-color-focused-active-current: #4baaa8 !important;
  --table-header-color: #4baaa8 !important;
  --text-a: #bea63a !important;
  --text-italic: #b37ceb !important;
  --text-normal: #4baaa8 !important;
  --text-strong: #af3943 !important;
  --text-title-h1: #af3943 !important;
  --text-title-h2: #fcf601 !important;
  --text-title-h3: #0d9668 !important;
  --text-title-h4: #7f5cc0 !important;
  --text-title-h5: #b42478 !important;
  --text-title-h6: #6171ff !important;
  --titlebar-background: #0f0f18 !important;
  --titlebar-background-focused: #181824 !important;
  --titlebar-text-color-focused: #4baaa8 !important;
  --vault-profile-color: #4baaa8 !important;
  --vault-profile-color-hover: #4baaa8 !important;
  --vim-cursor: #fcf601 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(24, 24, 36);
  color: rgb(75, 170, 168);
}

html body .bases-table thead th {
  background-color: rgb(15, 15, 26);
  color: rgb(175, 57, 67);
}

html body .canvas-node {
  border-color: rgb(75, 170, 168);
}

html body .canvas-node-content {
  color: rgb(75, 170, 168);
}

html body .canvas-node-file {
  color: rgb(75, 170, 168);
}

html body .canvas-node-group {
  border-color: rgb(75, 170, 168);
}

html body .canvas-sidebar {
  background-color: rgb(15, 15, 24);
  border-color: rgb(75, 170, 168);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

html body div#quartz-root {
  background-color: rgb(24, 24, 36);
  color: rgb(75, 170, 168);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(175, 57, 67);
  outline: rgb(175, 57, 67) none 0px;
  text-decoration-color: rgb(175, 57, 67);
}

html body .page article p > em, html em {
  color: rgb(179, 124, 235);
  outline: rgb(179, 124, 235) none 0px;
  text-decoration-color: rgb(179, 124, 235);
}

html body .page article p > i, html i {
  color: rgb(179, 124, 235);
  outline: rgb(179, 124, 235) none 0px;
  text-decoration-color: rgb(179, 124, 235);
}

html body .page article p > strong, html strong {
  color: rgb(175, 57, 67);
  outline: rgb(175, 57, 67) none 0px;
  text-decoration-color: rgb(175, 57, 67);
}

html body .text-highlight {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration-color: rgb(75, 170, 168);
}

html body del {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration-color: rgb(75, 170, 168);
}

html body h1.article-title {
  color: rgb(75, 170, 168);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(36, 7, 7);
  border-color: rgb(196, 37, 50);
  border-radius: 30%;
  border-width: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(15, 15, 24);
  border-color: rgb(20, 82, 133);
}`,
    links: `html body a.external, html footer a {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
  text-decoration-color: rgb(190, 166, 58);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
  text-decoration-color: rgb(190, 166, 58);
}

html body a.internal.broken {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
}`,
    lists: `html body dd {
  color: rgb(75, 170, 168);
}

html body dt {
  color: rgb(75, 170, 168);
}

html body ol > li {
  color: rgb(75, 170, 168);
}

html body ol.overflow {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body ul > li {
  color: rgb(75, 170, 168);
}

html body ul.overflow {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(190, 166, 58);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body table {
  color: rgb(75, 170, 168);
}

html body td {
  color: rgb(75, 170, 168);
}

html body th {
  background-color: rgb(15, 15, 26);
  color: rgb(175, 57, 67);
}`,
    code: `html body code {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(75, 170, 168);
}`,
    images: `html body audio {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body figcaption {
  color: rgb(75, 170, 168);
}

html body figure {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body img {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body video {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body .transclude {
  border-bottom-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body .transclude-inner {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(196, 37, 50);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-bottom-width: 2px;
  border-left-color: rgb(196, 37, 50);
  border-left-width: 2px;
  border-right-color: rgb(196, 37, 50);
  border-right-width: 2px;
  border-top-color: rgb(196, 37, 50);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
  border-top-width: 2px;
  margin-right: 6px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
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
  color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 36);
}

html body .search > .search-container > .search-space > * {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration-color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 15, 24);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(75, 170, 168);
}

html body h1 {
  color: rgb(175, 57, 67);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2 {
  color: rgb(252, 246, 1);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(175, 57, 67);
}

html body h3 {
  color: rgb(13, 150, 104);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h4 {
  color: rgb(127, 92, 192);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h5 {
  color: rgb(180, 36, 120);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h6 {
  color: rgb(97, 113, 255);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body hr {
  border-top-color: rgb(13, 150, 104);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

html body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(75, 170, 168);
}`,
    footer: `html body footer {
  background-color: rgb(15, 15, 24);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(75, 170, 168);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body ul.section-ul {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body .navigation-progress {
  background-color: rgb(15, 15, 24);
}

html body .page-header h2.page-title {
  color: rgb(75, 170, 168);
}

html body abbr {
  color: rgb(75, 170, 168);
}

html body details {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body kbd {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body progress {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body sub {
  color: rgb(75, 170, 168);
}

html body summary {
  color: rgb(75, 170, 168);
}

html body sup {
  color: rgb(75, 170, 168);
}

html body ul.tags > li {
  color: rgb(190, 166, 58);
}`,
  },
  light: {},
};
