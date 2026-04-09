import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "vibrant", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-color-borders: #FFFFFF !important;
  --accent-color-text: #FFFF00 !important;
  --accent-color-text-inverted: #000000 !important;
  --background-fourth: #2C2C2C !important;
  --background-primary: #222222 !important;
  --background-secondary: #333333 !important;
  --background-third: #444444 !important;
  --bases-cards-background: #222222 !important;
  --bases-table-cell-background-active: #222222 !important;
  --bases-table-header-background: #222222 !important;
  --bases-table-summary-background: #222222 !important;
  --canvas-background: #222222 !important;
  --caret-color: #FFFFFF !important;
  --checkbox-marker-color: #222222 !important;
  --code-normal: #FFFFFF !important;
  --color-icon: #FFFFFF !important;
  --dark: #FFFFFF !important;
  --darkgray: #FFFFFF !important;
  --file-header-background: #222222 !important;
  --file-header-background-focused: #222222 !important;
  --flair-color: #FFFFFF !important;
  --graph-text: #FFFFFF !important;
  --gray: #FFFFFF !important;
  --gray-color: #585858 !important;
  --icon-color-focused: #FFFFFF !important;
  --light: #222222 !important;
  --lightgray: #333333 !important;
  --menu-background: #333333 !important;
  --metadata-input-text-color: #FFFFFF !important;
  --modal-background: #222222 !important;
  --nav-heading-color: #FFFFFF !important;
  --nav-heading-color-hover: #FFFFFF !important;
  --nav-item-color-active: #FFFFFF !important;
  --nav-item-color-hover: #FFFFFF !important;
  --nav-item-color-selected: #FFFFFF !important;
  --pdf-background: #222222 !important;
  --pdf-page-background: #222222 !important;
  --pdf-sidebar-background: #222222 !important;
  --pdf-title-h1: #810000 !important;
  --pdf-title-h2: #008100 !important;
  --pdf-title-h3: #1d00c0 !important;
  --pdf-title-h4: #008181 !important;
  --pdf-title-h5: #915e00 !important;
  --pdf-title-h6: #6c00be !important;
  --pill-color-hover: #FFFFFF !important;
  --prompt-background: #222222 !important;
  --ribbon-background: #333333 !important;
  --ribbon-background-collapsed: #222222 !important;
  --search-result-background: #222222 !important;
  --setting-group-heading-color: #FFFFFF !important;
  --status-bar-background: #333333 !important;
  --suggestion-background: #222222 !important;
  --tab-background-active: #222222 !important;
  --tab-container-background: #333333 !important;
  --tab-switcher-background: #333333 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #333333, transparent) !important;
  --tab-text-color-focused-active-current: #FFFFFF !important;
  --table-header-color: #FFFFFF !important;
  --text-bold: #FF0000 !important;
  --text-highlight: #FFFF00 !important;
  --text-italics: #00FFFF !important;
  --text-link: #00FF00 !important;
  --text-normal: #FFFFFF !important;
  --text-strikethrough: #FF00FF !important;
  --text-title-h1: #FF0000 !important;
  --text-title-h2: #00FF00 !important;
  --text-title-h3: #FFFF00 !important;
  --text-title-h4: #00FFFF !important;
  --text-title-h5: #FFA500 !important;
  --text-title-h6: #FF00AA !important;
  --titlebar-background: #333333 !important;
  --titlebar-text-color-focused: #FFFFFF !important;
  --vault-profile-color: #FFFFFF !important;
  --vault-profile-color-hover: #FFFFFF !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
}

html body .bases-table thead th {
  background-color: rgb(34, 34, 34);
  border-color: rgb(88, 88, 88);
  color: rgb(255, 255, 0);
}

html body .canvas-node {
  border-color: rgb(255, 255, 255);
  border-width: 2px;
}

html body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html body .canvas-node-group {
  border-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 2px;
}

html body .canvas-sidebar {
  background-color: rgb(51, 51, 51);
  border-color: rgb(255, 255, 255);
}

html body .note-properties-row {
  border-color: rgb(34, 34, 34);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(51, 51, 51);
  color: rgb(34, 34, 34);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(51, 51, 51);
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  color: rgb(255, 255, 255);
}

html body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration-color: rgb(255, 0, 0);
}

html body .page article p > em, html em {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration-color: rgb(0, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration-color: rgb(0, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration-color: rgb(255, 0, 0);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 0);
  outline: rgb(255, 255, 0) none 0px;
  text-decoration-color: rgb(255, 255, 0);
}

html body del {
  color: rgb(255, 0, 255);
  outline: rgb(255, 0, 255) none 0px;
  text-decoration-color: rgb(255, 0, 255);
}

html body h1.article-title {
  color: rgb(255, 255, 0);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(255, 0, 0);
  border-color: rgb(255, 255, 255);
  border-radius: 3px;
  border-width: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 255, 0);
  border-color: rgb(255, 255, 255);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}

html body a.internal.broken {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration-color: rgb(0, 255, 0);
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(250, 128, 114);
}`,
    tables: `html body .spacer {
  background-color: rgb(34, 34, 34);
}

html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
  width: 231.219px;
}

html body td {
  color: rgb(255, 255, 255);
}

html body th {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(88, 88, 88);
  border-bottom-width: 3px;
  border-left-color: rgb(88, 88, 88);
  border-left-width: 3px;
  border-right-color: rgb(88, 88, 88);
  border-right-width: 3px;
  border-top-color: rgb(88, 88, 88);
  border-top-width: 3px;
  color: rgb(255, 255, 0);
}`,
    code: `html body code {
  background-color: rgb(68, 68, 68);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(68, 68, 68);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(68, 68, 68);
}

html body pre:has(> code) {
  background-color: rgb(68, 68, 68);
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(250, 128, 114);
  color: rgb(250, 128, 114);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  transition: 0.3s;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(65, 135, 255);
  border-left-color: rgb(65, 135, 255);
  border-right-color: rgb(65, 135, 255);
  border-top-color: rgb(65, 135, 255);
  color: rgb(65, 135, 255);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(65, 135, 255);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(157, 225, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(157, 225, 255);
  border-left-width: 2px;
  border-right-color: rgb(157, 225, 255);
  border-right-width: 2px;
  border-top-color: rgb(157, 225, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 93);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 93);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 93);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 93);
  border-top-width: 2px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 51);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 51);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 51);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 51);
  border-top-width: 2px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(158, 119, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(158, 119, 255);
  border-left-width: 2px;
  border-right-color: rgb(158, 119, 255);
  border-right-width: 2px;
  border-top-color: rgb(158, 119, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 0);
  border-top-width: 2px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 221, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 221, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 221, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(65, 135, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 135, 255);
  border-left-width: 2px;
  border-right-color: rgb(65, 135, 255);
  border-right-width: 2px;
  border-top-color: rgb(65, 135, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(98, 255, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(98, 255, 0);
  border-left-width: 2px;
  border-right-color: rgb(98, 255, 0);
  border-right-width: 2px;
  border-top-color: rgb(98, 255, 0);
  border-top-width: 2px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 255, 98);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 98);
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 98);
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 98);
  border-top-width: 2px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 255, 229);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 229);
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 229);
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 229);
  border-top-width: 2px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 221, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 221, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 221, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 149, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 149, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 149, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 149, 0);
  border-top-width: 2px;
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
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: solid;
  border-top-width: 2px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body h1 {
  color: rgb(255, 0, 0);
}

html body h2 {
  color: rgb(0, 255, 0);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
}

html body h3 {
  color: rgb(255, 255, 0);
}

html body h4 {
  color: rgb(0, 255, 255);
}

html body h5 {
  color: rgb(255, 165, 0);
}

html body h6 {
  color: rgb(255, 0, 170);
}

html body hr {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(65, 135, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 135, 255);
  border-left-width: 2px;
  border-right-color: rgb(65, 135, 255);
  border-right-width: 2px;
  border-top-color: rgb(65, 135, 255);
  border-top-width: 2px;
}

html body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    explorer: `html body .explorer {
  background-color: rgb(34, 34, 34);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `html body footer {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
}

html body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(34, 34, 34);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

html body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html body ul.section-ul {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .breadcrumb-element p {
  color: rgb(255, 255, 255);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 7.55906px;
  border-bottom-right-radius: 7.55906px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(51, 51, 51);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(51, 51, 51);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 7.55906px;
  border-top-right-radius: 7.55906px;
  border-top-style: solid;
  border-top-width: 2px;
}

html body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

html body .page-header h2.page-title {
  color: rgb(255, 255, 0);
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

html body kbd {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
