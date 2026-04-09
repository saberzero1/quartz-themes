import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nebula",
    modes: ["dark"],
    variations: [],
    fonts: ["montserrat"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-cover: rgb(0 0 0 / 70%) !important;
  --background-primary: #07053500 !important;
  --background-primary-alt: #06094059 !important;
  --background-secondary: #07053500 !important;
  --background-secondary-alt: #06094059 !important;
  --bases-cards-background: #07053500 !important;
  --bases-cards-cover-background: #06094059 !important;
  --bases-group-heading-property-color: #efd1d1 !important;
  --bases-table-cell-background-active: #07053500 !important;
  --bases-table-cell-background-disabled: #06094059 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #b44949 !important;
  --bases-table-group-background: #06094059 !important;
  --bases-table-header-background: #07053500 !important;
  --bases-table-header-color: #efd1d1 !important;
  --bases-table-summary-background: #07053500 !important;
  --bgcolor: #07053500 !important;
  --blockquote-border-color: #b44949 !important;
  --canvas-background: #07053500 !important;
  --caret-color: #ffffffdd !important;
  --checkbox-border-color-hover: #efd1d1 !important;
  --checkbox-color: #b44949 !important;
  --checkbox-marker-color: #07053500 !important;
  --checklist-done-color: #efd1d1 !important;
  --code-background: #06094059 !important;
  --code-normal: #ffffffdd !important;
  --code-punctuation: #efd1d1 !important;
  --dark: #ffffffdd !important;
  --darkgray: #ffffffdd !important;
  --divider-color-hover: #b44949 !important;
  --embed-border-start: 2px solid #b44949 !important;
  --file-header-background: #07053500 !important;
  --file-header-background-focused: #07053500 !important;
  --flair-color: #ffffffdd !important;
  --footnote-id-color: #efd1d1 !important;
  --graph-node: #efd1d1 !important;
  --graph-text: #ffffffdd !important;
  --gray: #efd1d1 !important;
  --highlight: #c9e7aba3 !important;
  --icon-color: #efd1d1 !important;
  --icon-color-focused: #ffffffdd !important;
  --icon-color-hover: #efd1d1 !important;
  --interactive-accent: #b44949 !important;
  --light: #07053500 !important;
  --lightgray: #07053500 !important;
  --list-marker-color: #ffd7d7 !important;
  --list-marker-color-hover: #efd1d1 !important;
  --menu-background: #07053500 !important;
  --metadata-input-text-color: #ffffffdd !important;
  --metadata-label-text-color: #efd1d1 !important;
  --metadata-label-text-color-hover: #efd1d1 !important;
  --modal-background: #07053500 !important;
  --mono-font: "Source Code Pro", "Consolas", monospace !important;
  --nav-heading-color: #ffffffdd !important;
  --nav-heading-color-collapsed-hover: #efd1d1 !important;
  --nav-heading-color-hover: #ffffffdd !important;
  --nav-item-color: #efd1d1 !important;
  --nav-item-color-active: #ffffffdd !important;
  --nav-item-color-hover: #ffffffdd !important;
  --nav-item-color-selected: #ffffffdd !important;
  --nav-tag-color-active: #efd1d1 !important;
  --nav-tag-color-hover: #efd1d1 !important;
  --nice-font: "Myuppy", "Montserrat", "Roboto", "Segoe Print", sans-serif !important;
  --overlay-bg: #101f618a !important;
  --pdf-background: #07053500 !important;
  --pdf-page-background: #07053500 !important;
  --pdf-sidebar-background: #07053500 !important;
  --pill-color: #efd1d1 !important;
  --pill-color-hover: #ffffffdd !important;
  --prompt-background: #07053500 !important;
  --ribbon-background: #07053500 !important;
  --ribbon-background-collapsed: #07053500 !important;
  --search-clear-button-color: #efd1d1 !important;
  --search-icon-color: #efd1d1 !important;
  --search-result-background: #07053500 !important;
  --secondary: #b44949 !important;
  --setting-group-heading-color: #ffffffdd !important;
  --setting-items-background: #06094059 !important;
  --settings-blue: #7772d76e !important;
  --settings-red: #d0535375 !important;
  --settings-red-light: #b44949 !important;
  --status-bar-background: #07053500 !important;
  --status-bar-text-color: #efd1d1 !important;
  --suggestion-background: #07053500 !important;
  --tab-background-active: #07053500 !important;
  --tab-container-background: #07053500 !important;
  --tab-switcher-background: #07053500 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #07053500, transparent) !important;
  --tab-text-color-active: #efd1d1 !important;
  --tab-text-color-focused: #efd1d1 !important;
  --tab-text-color-focused-active: #efd1d1 !important;
  --tab-text-color-focused-active-current: #ffffffdd !important;
  --table-drag-handle-background-active: #b44949 !important;
  --table-header-color: #ffffffdd !important;
  --table-selection-border-color: #b44949 !important;
  --text-highlight-bg: #c9e7aba3 !important;
  --text-muted: #efd1d1 !important;
  --text-normal: #ffffffdd !important;
  --text-selection: #97a5f954 !important;
  --textHighlight: #c9e7aba3 !important;
  --titlebar-background: #07053500 !important;
  --titlebar-background-focused: #06094059 !important;
  --titlebar-text-color: #efd1d1 !important;
  --titlebar-text-color-focused: #ffffffdd !important;
  --vault-profile-color: #ffffffdd !important;
  --vault-profile-color-hover: #ffffffdd !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgba(255, 255, 255, 0.867);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgba(7, 5, 53, 0);
  color: rgba(255, 255, 255, 0.867);
}

html body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.867);
}

html body .canvas-node {
  border-color: rgba(255, 255, 255, 0.867);
}

html body .canvas-node-content {
  color: rgba(255, 255, 255, 0.867);
}

html body .canvas-node-file {
  color: rgba(255, 255, 255, 0.867);
}

html body .canvas-node-group {
  border-color: rgba(255, 255, 255, 0.867);
}

html body .canvas-sidebar {
  background-color: rgba(7, 5, 53, 0);
  border-color: rgba(255, 255, 255, 0.867);
}

html body .note-properties-key {
  color: rgb(239, 209, 209);
}

html body .note-properties-row {
  border-color: rgb(239, 209, 209);
}

html body .note-properties-tags {
  border-radius: 35px;
}

html body .note-properties-value {
  color: rgb(239, 209, 209);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(7, 5, 53, 0);
  color: rgba(255, 255, 255, 0.867);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(7, 5, 53, 0);
  color: rgba(255, 255, 255, 0.867);
}

html body div#quartz-root {
  background-color: rgba(7, 5, 53, 0);
  color: rgba(255, 255, 255, 0.867);
}`,
    typography: `html body .page article p > b, html b {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body .page article p > em, html em {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body .page article p > i, html i {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body .page article p > strong, html strong {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body .text-highlight {
  background-color: rgba(249, 151, 207, 0);
  color: rgb(255, 179, 101);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(255, 179, 101) none 0px;
  text-decoration-color: rgb(255, 179, 101);
}

html body del {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body h1.article-title {
  color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(101, 115, 136, 0.76);
  border-color: rgb(180, 73, 73);
}

html body p {
  color: rgb(239, 209, 209);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(239, 209, 209) none 0px;
  text-decoration-color: rgb(239, 209, 209);
}`,
    links: `html body a.external, html footer a {
  color: rgb(137, 192, 251);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(137, 192, 251) none 0px;
  text-decoration-color: rgb(137, 192, 251);
  transition: color 0.15s ease-out;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(137, 192, 251);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(137, 192, 251) none 0px;
  text-decoration-color: rgb(137, 192, 251);
}

html body a.internal.broken {
  color: rgb(137, 192, 251);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(137, 192, 251) none 0px;
  text-decoration-color: rgb(137, 192, 251);
}`,
    lists: `html body dd {
  color: rgba(255, 255, 255, 0.867);
}

html body dl {
  margin-bottom: 20px;
  margin-top: 20px;
}

html body dt {
  color: rgba(255, 255, 255, 0.867);
}

html body ol > li {
  color: rgba(255, 255, 255, 0.867);
}

html body ol.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body ul > li {
  color: rgba(255, 255, 255, 0.867);
}

html body ul.overflow {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(137, 192, 251);
}

html body blockquote {
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body table {
  background-color: rgba(255, 255, 255, 0.24);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  width: 196.062px;
}

html body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 2px;
  color: rgba(255, 255, 255, 0.867);
}

html body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.867);
}`,
    code: `html body code {
  border-bottom-color: rgb(233, 234, 255);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(233, 234, 255);
  border-right-color: rgb(233, 234, 255);
  border-top-color: rgb(233, 234, 255);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(233, 234, 255);
  font-family: "Source Code Pro", Consolas, monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(6, 9, 64, 0.35);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(6, 9, 64, 0.35);
  color: rgba(255, 255, 255, 0.867);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(6, 9, 64, 0.35);
}

html body pre:has(> code) {
  background-color: rgba(6, 9, 64, 0.35);
}`,
    images: `html body audio {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body figcaption {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body figure {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body img {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgba(255, 255, 255, 0.867);
  border-radius: 15px;
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html body video {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}`,
    embeds: `html body .file-embed {
  background-color: rgba(6, 9, 64, 0.35);
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
}

html body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.867);
  color: rgba(255, 255, 255, 0.867);
}

html body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgb(180, 73, 73);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(93, 118, 156);
  border-bottom-width: 3px;
  border-left-color: rgb(93, 118, 156);
  border-left-width: 3px;
  border-right-color: rgb(93, 118, 156);
  border-right-width: 3px;
  border-top-color: rgb(93, 118, 156);
  border-top-width: 3px;
}

html body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
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
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgba(16, 31, 97, 0.54);
}

html body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.867);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.867);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(221, 81, 81, 0.6);
  color: rgba(255, 255, 255, 0.867);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(7, 5, 53, 0);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(221, 81, 81, 0.6);
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(255, 255, 255, 0.867);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(221, 81, 81, 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(255, 255, 255, 0.867);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
}

html body h1 {
  color: rgb(255, 255, 255);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body h2 {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body h3 {
  color: rgb(255, 207, 207);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body h4 {
  color: rgb(255, 175, 175);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body h5 {
  color: rgb(255, 143, 143);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body h6 {
  color: rgb(255, 111, 111);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgba(255, 255, 255, 0.867);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
}`,
    footer: `html body footer {
  background-color: rgba(35, 1, 1, 0.72);
  color: rgb(239, 209, 209);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body footer ul li a {
  color: rgb(239, 209, 209);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  color: rgba(255, 255, 255, 0.867);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 223, 223);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body li.section-li > .section .meta {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 223, 223);
}

html body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
}

html body .darkmode svg {
  color: rgb(239, 209, 209);
  stroke: rgb(239, 209, 209);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  color: rgba(255, 255, 255, 0.867);
}

html body .metadata {
  color: rgb(239, 209, 209);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

html body .navigation-progress {
  background-color: rgba(35, 1, 1, 0.72);
}

html body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.867);
}

html body abbr {
  color: rgba(255, 255, 255, 0.867);
}

html body details {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body input[type=text] {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
}

html body kbd {
  background-color: rgba(6, 9, 64, 0.35);
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  color: rgba(255, 255, 255, 0.867);
  font-size: 17.5px;
  padding-bottom: 1.75px;
  padding-left: 4.375px;
  padding-right: 4.375px;
  padding-top: 1.75px;
}

html body progress {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

html body sub {
  color: rgba(255, 255, 255, 0.867);
  font-size: 16.6667px;
}

html body summary {
  color: rgba(255, 255, 255, 0.867);
}

html body sup {
  color: rgba(255, 255, 255, 0.867);
  font-size: 16.6667px;
}

html body ul.tags > li {
  border-bottom-left-radius: 30.625px;
  border-bottom-right-radius: 30.625px;
  border-top-left-radius: 30.625px;
  border-top-right-radius: 30.625px;
  color: rgb(137, 192, 251);
}`,
  },
  light: {},
};
