import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "comfort-color-dark",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #92a1a17a !important;
  --background-primary: #2f3136 !important;
  --background-primary-alt: #36393f !important;
  --background-secondary: #202225 !important;
  --background-secondary-alt: #0c1018d1 !important;
  --bases-cards-background: #2f3136 !important;
  --bases-cards-cover-background: #36393f !important;
  --bases-cards-shadow: 0 0 0 1px #92a1a17a !important;
  --bases-embed-border-color: #92a1a17a !important;
  --bases-table-border-color: #92a1a17a !important;
  --bases-table-cell-background-active: #2f3136 !important;
  --bases-table-cell-background-disabled: #36393f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92A1A1 !important;
  --bases-table-group-background: #36393f !important;
  --bases-table-header-background: #2f3136 !important;
  --bases-table-summary-background: #2f3136 !important;
  --blockquote-border: rgba(77, 60, 166, 0.6) !important;
  --blockquote-border-color: #92A1A1 !important;
  --canvas-background: #2f3136 !important;
  --canvas-card-label-color: #a09b80 !important;
  --caret-color: #bbc0c5 !important;
  --checkbox-border-color: #a09b80 !important;
  --checkbox-color: #92A1A1 !important;
  --checkbox-marker-color: #2f3136 !important;
  --code-background: #36393f !important;
  --code-border-color: #92a1a17a !important;
  --code-comment: #a09b80 !important;
  --code-normal: #bbc0c5 !important;
  --collapse-icon-color: #a09b80 !important;
  --collapse-icon-color-collapsed: #ff9640ba !important;
  --dark: #bbc0c5 !important;
  --darkgray: #bbc0c5 !important;
  --divider-color: #92a1a17a !important;
  --divider-color-hover: #92A1A1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #92a1a17a, inset 0 0 0 1px #92a1a17a !important;
  --embed-border-start: 2px solid #92A1A1 !important;
  --file-header-background: #2f3136 !important;
  --file-header-background-focused: #2f3136 !important;
  --flair-color: #bbc0c5 !important;
  --font-family-editor: Avenir !important;
  --font-family-preview: Avenir !important;
  --footnote-divider-color: #92a1a17a !important;
  --footnote-id-color-no-occurrences: #a09b80 !important;
  --graph-node-focused: #ff9640ba !important;
  --graph-node-unresolved: #a09b80 !important;
  --graph-text: #bbc0c5 !important;
  --gray: #a09b80 !important;
  --heading-formatting: #a09b80 !important;
  --highlight: rgba(255, 255, 0, 0.2) !important;
  --hr-color: #92a1a17a !important;
  --icon-color-active: #ff9640ba !important;
  --icon-color-focused: #bbc0c5 !important;
  --input-date-separator: #a09b80 !important;
  --input-placeholder-color: #a09b80 !important;
  --interactive-accent: #92A1A1 !important;
  --interactive-accent-rgb: #fe8019 !important;
  --interactive-before: #5e6565 !important;
  --light: #2f3136 !important;
  --lightgray: #202225 !important;
  --link-color: #ff9640ba !important;
  --link-external-color: #ff9640ba !important;
  --link-unresolved-color: #ff9640ba !important;
  --list-marker-color: #a09b80 !important;
  --list-marker-color-collapsed: #ff9640ba !important;
  --menu-background: #202225 !important;
  --metadata-border-color: #92a1a17a !important;
  --metadata-divider-color: #92a1a17a !important;
  --metadata-input-text-color: #bbc0c5 !important;
  --modal-background: #2f3136 !important;
  --nav-collapse-icon-color: #a09b80 !important;
  --nav-collapse-icon-color-collapsed: #a09b80 !important;
  --nav-heading-color: #bbc0c5 !important;
  --nav-heading-color-collapsed: #a09b80 !important;
  --nav-heading-color-hover: #bbc0c5 !important;
  --nav-item-color-active: #bbc0c5 !important;
  --nav-item-color-highlighted: #ff9640ba !important;
  --nav-item-color-hover: #bbc0c5 !important;
  --nav-item-color-selected: #bbc0c5 !important;
  --nav-tag-color: #a09b80 !important;
  --pdf-background: #2f3136 !important;
  --pdf-page-background: #2f3136 !important;
  --pdf-shadow: 0 0 0 1px #92a1a17a !important;
  --pdf-sidebar-background: #2f3136 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #92a1a17a !important;
  --pill-border-color: #92a1a17a !important;
  --pill-color-hover: #bbc0c5 !important;
  --pill-color-remove: #a09b80 !important;
  --pill-color-remove-hover: #ff9640ba !important;
  --pre-code: #272524d9 !important;
  --prompt-background: #2f3136 !important;
  --ribbon-background: #202225 !important;
  --ribbon-background-collapsed: #2f3136 !important;
  --search-result-background: #2f3136 !important;
  --secondary: #ff9640ba !important;
  --setting-group-heading-color: #bbc0c5 !important;
  --setting-items-background: #36393f !important;
  --setting-items-border-color: #92a1a17a !important;
  --slider-track-background: #92a1a17a !important;
  --status-bar-background: #202225 !important;
  --status-bar-border-color: #92a1a17a !important;
  --suggestion-background: #2f3136 !important;
  --tab-background-active: #2f3136 !important;
  --tab-container-background: #202225 !important;
  --tab-outline-color: #92a1a17a !important;
  --tab-switcher-background: #202225 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #202225, transparent) !important;
  --tab-text-color: #a09b80 !important;
  --tab-text-color-focused-active-current: #bbc0c5 !important;
  --tab-text-color-focused-highlighted: #ff9640ba !important;
  --table-add-button-border-color: #92a1a17a !important;
  --table-border-color: #92a1a17a !important;
  --table-drag-handle-background-active: #92A1A1 !important;
  --table-drag-handle-color: #a09b80 !important;
  --table-header-border-color: #92a1a17a !important;
  --table-header-color: #bbc0c5 !important;
  --table-selection-border-color: #92A1A1 !important;
  --tag-color: #ff9640ba !important;
  --tag-color-hover: #ff9640ba !important;
  --tertiary: #ff9640ba !important;
  --text-a: #59a2c5 !important;
  --text-a-hover: #b3a14b !important;
  --text-accent: #ff9640ba !important;
  --text-faint: #a09b80 !important;
  --text-highlight-bg: rgba(255, 255, 0, 0.2) !important;
  --text-link: #59a2c5 !important;
  --text-mark: #d79921 !important;
  --text-normal: #bbc0c5 !important;
  --text-title-h1: #a79645 !important;
  --text-title-h2: #939bd6 !important;
  --text-title-h3: #ba6ea0 !important;
  --text-title-h4: #b78b60 !important;
  --text-title-h5: #859679 !important;
  --textHighlight: rgba(255, 255, 0, 0.2) !important;
  --titlebar-background: #202225 !important;
  --titlebar-background-focused: #0c1018d1 !important;
  --titlebar-border-color: #92a1a17a !important;
  --titlebar-text-color-focused: #bbc0c5 !important;
  --vault-profile-color: #bbc0c5 !important;
  --vault-profile-color-hover: #bbc0c5 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 34, 37);
  color: rgb(187, 192, 197);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(47, 49, 54);
  color: rgb(187, 192, 197);
}

html body .bases-table thead th {
  border-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
  font-weight: 800;
}

html body .canvas-node {
  border-color: rgb(187, 192, 197);
}

html body .canvas-node-content {
  color: rgb(187, 192, 197);
}

html body .canvas-node-file {
  color: rgb(187, 192, 197);
}

html body .canvas-node-group {
  border-color: rgb(187, 192, 197);
}

html body .canvas-sidebar {
  background-color: rgb(32, 34, 37);
  border-color: rgb(187, 192, 197);
}

html body .note-properties {
  border-color: rgba(146, 161, 161, 0.48);
}

html body .note-properties-tags {
  border-radius: 26.25px;
  color: rgba(255, 150, 64, 0.73);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 34, 37);
  color: rgb(187, 192, 197);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 34, 37);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html body div#quartz-root {
  background-color: rgb(47, 49, 54);
  color: rgb(187, 192, 197);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(181, 199, 199);
  font-family: Avenir;
  font-weight: 700;
  outline: rgb(181, 199, 199) none 0px;
  text-decoration-color: rgb(181, 199, 199);
}

html body .page article p > em, html em {
  color: rgb(184, 206, 206);
  font-family: Avenir;
  outline: rgb(184, 206, 206) none 0px;
  text-decoration-color: rgb(184, 206, 206);
}

html body .page article p > i, html i {
  color: rgb(184, 206, 206);
  font-family: Avenir;
  outline: rgb(184, 206, 206) none 0px;
  text-decoration-color: rgb(184, 206, 206);
}

html body .page article p > strong, html strong {
  color: rgb(181, 199, 199);
  font-family: Avenir;
  font-weight: 700;
  outline: rgb(181, 199, 199) none 0px;
  text-decoration-color: rgb(181, 199, 199);
}

html body .text-highlight {
  background-color: rgb(215, 153, 33);
  color: rgb(187, 192, 197);
  font-family: Avenir;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html body del {
  color: rgb(187, 192, 197);
  font-family: Avenir;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html body h1.article-title {
  color: rgb(187, 192, 197);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(160, 155, 128);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(146, 161, 161);
  border-color: rgb(146, 161, 161);
}

html body p {
  font-family: Avenir;
}`,
    links: `html body a.external, html footer a {
  color: rgb(89, 162, 197);
  font-family: Avenir;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration-color: rgb(89, 162, 197);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 162, 197);
  font-family: Avenir;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration-color: rgb(89, 162, 197);
}

html body a.internal.broken {
  color: rgb(89, 162, 197);
  font-family: Avenir;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration-color: rgb(89, 162, 197);
}`,
    lists: `html body dd {
  color: rgb(187, 192, 197);
}

html body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html body dt {
  color: rgb(187, 192, 197);
}

html body ol > li {
  color: rgb(187, 192, 197);
}

html body ol.overflow {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body ul > li {
  color: rgb(187, 192, 197);
}

html body ul.overflow {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(89, 162, 197);
}

html body blockquote {
  font-family: Avenir;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body table {
  color: rgb(187, 192, 197);
  font-family: Avenir;
  width: 180.766px;
}

html body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html body th {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html body tr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `html body code {
  background-color: rgba(39, 37, 36, 0.85);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body figcaption {
  color: rgb(187, 192, 197);
  font-size: 15px;
}

html body figure {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  margin-bottom: 15px;
  margin-top: 15px;
}

html body img {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body video {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(54, 57, 63);
}

html body .footnotes {
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .transclude {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(160, 155, 128);
  border-left-color: rgb(160, 155, 128);
  border-right-color: rgb(160, 155, 128);
  border-top-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
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
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
  font-family: Avenir;
}

html body .search > .search-container > .search-space {
  background-color: rgb(47, 49, 54);
}

html body .search > .search-container > .search-space > * {
  color: rgb(187, 192, 197);
  font-family: Avenir;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 34, 37);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html body a.internal.tag-link::before {
  color: rgba(255, 150, 64, 0.73);
}

html body h1 {
  color: rgb(167, 150, 69);
  font-family: Avenir;
}

html body h2 {
  color: rgb(147, 155, 214);
  font-family: Avenir;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(187, 192, 197);
  font-family: Avenir;
}

html body h3 {
  color: rgb(186, 110, 160);
  font-family: Avenir;
}

html body h4 {
  color: rgb(183, 139, 96);
  font-family: Avenir;
}

html body h5 {
  color: rgb(187, 192, 197);
  font-family: Avenir;
}

html body h6 {
  color: rgb(133, 150, 121);
  font-family: Avenir;
}

html body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html body ::-webkit-scrollbar-track {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Avenir;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Avenir;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(187, 192, 197);
}`,
    footer: `html body footer {
  background-color: rgb(32, 34, 37);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(187, 192, 197);
  font-family: Avenir;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Avenir;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body li.section-li > .section .meta {
  font-family: Avenir;
}

html body ul.section-ul {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(160, 155, 128);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir;
}

html body .metadata-properties {
  font-family: Avenir;
}

html body .navigation-progress {
  background-color: rgb(32, 34, 37);
}

html body .page-header h2.page-title {
  color: rgb(187, 192, 197);
}

html body abbr {
  color: rgb(187, 192, 197);
}

html body details {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body kbd {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html body progress {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body sub {
  color: rgb(187, 192, 197);
  font-size: 12.5px;
}

html body summary {
  color: rgb(187, 192, 197);
}

html body sup {
  color: rgb(187, 192, 197);
  font-size: 12.5px;
}

html body ul.tags > li {
  border-bottom-left-radius: 22.9688px;
  border-bottom-right-radius: 22.9688px;
  border-top-left-radius: 22.9688px;
  border-top-right-radius: 22.9688px;
  color: rgb(89, 162, 197);
}`,
  },
  light: {},
};
