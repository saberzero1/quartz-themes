import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "nobb", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-table-container-border-radius: 0px !important;
  --blockquote-border-color: rgb(250, 81, 81) !important;
  --blockquote-border-thickness: 0.15em !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-controls-radius: 0px !important;
  --caret-color: #bbbbbb !important;
  --checkbox-radius: 0px !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #000000 !important;
  --code-normal: #bbbbbb !important;
  --code-radius: 0px !important;
  --dark: #bbbbbb !important;
  --darkgray: #bbbbbb !important;
  --flair-color: #bbbbbb !important;
  --fluro-blue-rgb: 0, 255, 255 !important;
  --fluro-coral-rgb: 240, 128, 128 !important;
  --fluro-green-rgb: 0, 255, 0 !important;
  --fluro-pink-rgb: 255, 0, 255 !important;
  --fluro-purple-rgb: 200, 0, 255 !important;
  --fluro-red-rgb: 255, 0, 0
	--fluro-yellow-rgb: 255, 255, 0 !important;
  --footnote-radius: 0px !important;
  --graph-text: #bbbbbb !important;
  --gray: #bbbbbb !important;
  --h2-color: #fff !important;
  --h3-color: #fff !important;
  --h3-weight: 500 !important;
  --icon-color-focused: #bbbbbb !important;
  --input-radius: 0px !important;
  --menu-radius: 0px !important;
  --metadata-input-text-color: #bbbbbb !important;
  --modal-radius: 0px !important;
  --nav-heading-color: #bbbbbb !important;
  --nav-heading-color-hover: #bbbbbb !important;
  --nav-item-color-active: #bbbbbb !important;
  --nav-item-color-hover: #bbbbbb !important;
  --nav-item-color-selected: #bbbbbb !important;
  --nav-item-radius: 0px !important;
  --nav-tag-radius: 0px !important;
  --nobb-color: rgb(250, 81, 81) !important;
  --pill-color-hover: #bbbbbb !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --scrollbar-radius: 0px !important;
  --setting-group-heading-color: #bbbbbb !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-radius: 0px !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-text-color-focused-active-current: #bbbbbb !important;
  --table-header-color: #bbbbbb !important;
  --text-normal: #bbbbbb !important;
  --title-border-bottom: 2px solid rgb(250, 81, 81) !important;
  --titlebar-text-color-focused: #bbbbbb !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #bbbbbb !important;
  --vault-profile-color-hover: #bbbbbb !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(187, 187, 187);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: rgb(187, 187, 187);
}

html body .bases-table thead th {
  color: rgb(187, 187, 187);
}

html body .canvas-node {
  border-color: rgb(187, 187, 187);
}

html body .canvas-node-content {
  color: rgb(187, 187, 187);
}

html body .canvas-node-file {
  color: rgb(187, 187, 187);
}

html body .canvas-node-group {
  border-color: rgb(187, 187, 187);
}

html body .canvas-sidebar {
  border-color: rgb(187, 187, 187);
}

html body .page > div#quartz-body div.sidebar {
  color: rgb(187, 187, 187);
}

html body .page > div#quartz-body div.sidebar.right {
  color: rgb(187, 187, 187);
}

html body div#quartz-root {
  color: rgb(187, 187, 187);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 41, 41);
  font-weight: 900;
  outline: rgb(255, 41, 41) none 0px;
  text-decoration-color: rgb(255, 41, 41);
}

html body .page article p > em, html em {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}

html body .page article p > i, html i {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}

html body .page article p > strong, html strong {
  color: rgb(255, 41, 41);
  font-weight: 900;
  outline: rgb(255, 41, 41) none 0px;
  text-decoration-color: rgb(255, 41, 41);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}

html body del {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}

html body h1.article-title {
  color: rgb(187, 187, 187);
}

html body li.task-list-item input[type="checkbox"] {
  border-radius: 0px;
}`,
    lists: `html body dd {
  color: rgb(187, 187, 187);
}

html body dt {
  color: rgb(187, 187, 187);
}

html body ol > li {
  color: rgb(187, 187, 187);
}

html body ol.overflow {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body ul > li {
  color: rgb(187, 187, 187);
}

html body ul.overflow {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body table {
  color: rgb(187, 187, 187);
  width: 241.938px;
}

html body td {
  color: rgb(187, 187, 187);
}

html body th {
  color: rgb(187, 187, 187);
}`,
    code: `html body code {
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 5.6px;
  border-bottom-right-radius: 5.6px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 5.6px;
  border-top-right-radius: 5.6px;
  color: rgb(187, 187, 187);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body figcaption {
  color: rgb(187, 187, 187);
}

html body figure {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body img {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body video {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    embeds: `html body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .footnotes {
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .transclude {
  border-bottom-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .transclude-inner {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

html body h1 {
  color: rgb(187, 187, 187);
}

html body h2 {
  color: rgb(255, 255, 255);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(187, 187, 187);
}

html body h3 {
  color: rgb(255, 255, 255);
}

html body h4 {
  color: rgb(187, 187, 187);
}

html body h5 {
  color: rgb(187, 187, 187);
}

html body h6 {
  color: rgb(187, 187, 187);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(187, 187, 187);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `html body footer {
  border-top-left-radius: 0px;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(187, 187, 187);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body ul.section-ul {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    darkmode: `html body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .page-header h2.page-title {
  color: rgb(187, 187, 187);
}

html body abbr {
  color: rgb(187, 187, 187);
}

html body details {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body kbd {
  background-color: rgb(51, 51, 56);
  border-bottom-color: rgb(227, 227, 236);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(227, 227, 236);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(227, 227, 236);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(227, 227, 236);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(227, 227, 236) 0px 4px 0px 0px;
  color: rgb(227, 227, 236);
  padding-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 0px;
}

html body progress {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body sub {
  color: rgb(187, 187, 187);
}

html body summary {
  color: rgb(187, 187, 187);
}

html body sup {
  color: rgb(187, 187, 187);
}`,
  },
  light: {},
};
