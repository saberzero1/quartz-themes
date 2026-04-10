import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "darkember",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-1: #f07128 !important;
  --accent-2: #eb9239 !important;
  --accent-3: #f1b125 !important;
  --accent-4: #a0e73c !important;
  --accent-5: #62deac !important;
  --accent-6: #62b7de !important;
  --attachments: rgb(105, 188, 235) !important;
  --background-modifier-error: #cf2d2d !important;
  --background-modifier-error-hover: #a72020 !important;
  --background-primary: rgb(36, 36, 36) !important;
  --background-secondary: rgb(27, 27, 27) !important;
  --base-font-face: system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial,
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", Meiryo, sans-serif !important;
  --bases-cards-background: rgb(36, 36, 36) !important;
  --bases-table-cell-background-active: rgb(36, 36, 36) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ffbe00 !important;
  --bases-table-header-background: rgb(36, 36, 36) !important;
  --bases-table-summary-background: rgb(36, 36, 36) !important;
  --blockquote-border-color: #ffbe00 !important;
  --canvas-background: rgb(36, 36, 36) !important;
  --caret-color: rgb(201, 201, 201) !important;
  --checkbox-color: #ffbe00 !important;
  --checkbox-color-hover: #fe6a26 !important;
  --checkbox-marker-color: rgb(36, 36, 36) !important;
  --code-block-bg: #303030 !important;
  --code-block-fg: #928b78 !important;
  --code-font-face: Consolas, "Courier New", Courier, monospace !important;
  --code-normal: rgb(201, 201, 201) !important;
  --collapse-icon-color-collapsed: #ffbe00 !important;
  --dark: rgb(201, 201, 201) !important;
  --darkgray: rgb(201, 201, 201) !important;
  --divider-color-hover: #ffbe00 !important;
  --embed-border-start: 2px solid #ffbe00 !important;
  --external-link: #82d2e8 !important;
  --external-link-hidden: rgba(131, 197, 235, 0.3) !important;
  --file-header-background: rgb(36, 36, 36) !important;
  --file-header-background-focused: rgb(36, 36, 36) !important;
  --file-line-width: 950px !important;
  --flair-color: rgb(201, 201, 201) !important;
  --font-size-2xl: 1.5em !important;
  --font-size-3xl: 1.875em !important;
  --font-size-base: 1em !important;
  --font-size-h1: 1.3em !important;
  --font-size-h2: 1.2em !important;
  --font-size-h3: 1.1em !important;
  --font-size-h4: 1em !important;
  --font-size-h5: 1em !important;
  --font-size-h6: 1em !important;
  --font-size-lg: 1.125em !important;
  --font-size-sm: 0.875em !important;
  --font-size-xl: 1.25em !important;
  --font-size-xs: 0.78em !important;
  --graph-node-focused: #ffbe00 !important;
  --graph-text: rgb(201, 201, 201) !important;
  --gray: rgb(201, 201, 201) !important;
  --gutter-width: 50px !important;
  --h1-gradient: #d72, #810, #e52, #c12 !important;
  --h2-gradient: #f82, #922, #222 !important;
  --h2-icon-color: #da6212 !important;
  --h3-h6-icon-color: #ff6a6a !important;
  --highlight: #e9b35f !important;
  --icon-color-active: #ffbe00 !important;
  --icon-color-focused: rgb(201, 201, 201) !important;
  --interactive-accent: #ffbe00 !important;
  --interactive-accent-hover: #fe6a26 !important;
  --light: rgb(36, 36, 36) !important;
  --lightgray: rgb(27, 27, 27) !important;
  --link-color: #ffbe00 !important;
  --link-color-hover: #fe6a26 !important;
  --link-external-color: #ffbe00 !important;
  --link-external-color-hover: #fe6a26 !important;
  --link-unresolved-color: #ffbe00 !important;
  --list-marker: 1.5rem !important;
  --list-marker-color-collapsed: #ffbe00 !important;
  --list-marker-num: 1.5 !important;
  --list-padding: 1.5em !important;
  --list-padding-num: 2.5 !important;
  --main-background: rgb(36, 36, 36) !important;
  --main-node: #ffbe00 !important;
  --main-node-hover: #fe6a26 !important;
  --max-width-text: 950px !important;
  --menu-background: rgb(27, 27, 27) !important;
  --metadata-input-text-color: rgb(201, 201, 201) !important;
  --modal-background: rgb(36, 36, 36) !important;
  --monochrome-color: hsl(13, 100%, 50%) !important;
  --nav-heading-color: rgb(201, 201, 201) !important;
  --nav-heading-color-hover: rgb(201, 201, 201) !important;
  --nav-item-color-active: rgb(201, 201, 201) !important;
  --nav-item-color-highlighted: #ffbe00 !important;
  --nav-item-color-hover: rgb(201, 201, 201) !important;
  --nav-item-color-selected: rgb(201, 201, 201) !important;
  --pdf-background: rgb(36, 36, 36) !important;
  --pdf-page-background: rgb(36, 36, 36) !important;
  --pdf-sidebar-background: rgb(36, 36, 36) !important;
  --pill-color-hover: rgb(201, 201, 201) !important;
  --pill-color-remove-hover: #ffbe00 !important;
  --prev-margin: 150px !important;
  --prompt-background: rgb(36, 36, 36) !important;
  --ribbon-background: rgb(27, 27, 27) !important;
  --ribbon-background-collapsed: rgb(36, 36, 36) !important;
  --search-result-background: rgb(36, 36, 36) !important;
  --secondary: #ffbe00 !important;
  --secondary-background: rgb(27, 27, 27) !important;
  --secondary-background-low-opacity: rgba(27, 27, 27, 0.329) !important;
  --setting-group-heading-color: rgb(201, 201, 201) !important;
  --size-0-5: 0.125em !important;
  --size-1: 0.25em !important;
  --size-1-5: 0.375em !important;
  --size-12: 3em !important;
  --size-128: 32em !important;
  --size-16: 4em !important;
  --size-2: 0.5em !important;
  --size-2-5: 0.625em !important;
  --size-24: 6em !important;
  --size-3: 0.75em !important;
  --size-3-5: 0.875em !important;
  --size-32: 8em !important;
  --size-4: 1em !important;
  --size-48: 12em !important;
  --size-5: 1.25em !important;
  --size-6: 1.5em !important;
  --size-64: 16em !important;
  --size-7: 1.75em !important;
  --size-8: 2em !important;
  --size-96: 24em !important;
  --status-bar-background: rgb(27, 27, 27) !important;
  --suggestion-background: rgb(36, 36, 36) !important;
  --tab-background-active: rgb(36, 36, 36) !important;
  --tab-container-background: rgb(27, 27, 27) !important;
  --tab-switcher-background: rgb(27, 27, 27) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(27, 27, 27), transparent) !important;
  --tab-text-color-focused-active-current: rgb(201, 201, 201) !important;
  --tab-text-color-focused-highlighted: #ffbe00 !important;
  --table-drag-handle-background-active: #ffbe00 !important;
  --table-drag-handle-color-active: black !important;
  --table-header-color: rgb(201, 201, 201) !important;
  --table-selection-border-color: #ffbe00 !important;
  --tag-color: #ffbe00 !important;
  --tag-color-hover: #ffbe00 !important;
  --tags: #f1ee26 !important;
  --tertiary: #fe6a26 !important;
  --text-accent: #ffbe00 !important;
  --text-accent-hover: #fe6a26 !important;
  --text-highlight-bg: #e9b35f !important;
  --text-normal: rgb(201, 201, 201) !important;
  --text-on-accent: black !important;
  --textHighlight: #e9b35f !important;
  --titlebar-background: rgb(27, 27, 27) !important;
  --titlebar-text-color-focused: rgb(201, 201, 201) !important;
  --vault-profile-color: rgb(201, 201, 201) !important;
  --vault-profile-color-hover: rgb(201, 201, 201) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(36, 36, 36);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(27, 27, 27);
  border-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(255, 190, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 27, 27);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(36, 36, 36);
  color: rgb(201, 201, 201);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(241, 177, 37);
  font-weight: 900;
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(241, 177, 37);
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(241, 177, 37);
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(241, 177, 37);
  font-weight: 900;
  outline: rgb(241, 177, 37) none 0px;
  text-decoration-color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(233, 179, 95);
  color: rgb(36, 36, 36);
  font-weight: 600;
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body del {
  color: rgb(201, 201, 201);
  outline: rgb(201, 201, 201) none 0px;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 190, 0);
  border-color: rgb(255, 190, 0);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(130, 210, 232);
  outline: rgb(130, 210, 232) none 0px;
  text-decoration-color: rgb(130, 210, 232);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 190, 0);
  outline: rgb(255, 190, 0) none 0px;
  text-decoration-color: rgb(255, 190, 0);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 190, 0);
  outline: rgb(255, 190, 0) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body dt {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(255, 190, 0);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body table {
  color: rgb(201, 201, 201);
  width: 754px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(27, 27, 27);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.1);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body th {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body tr {
  background-color: color(srgb 0.284706 0.233725 0.0847059);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(48, 48, 48);
  color: rgb(146, 139, 120);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(48, 48, 48);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(240, 113, 40);
  border-left-color: rgb(240, 113, 40);
  border-right-color: rgb(240, 113, 40);
  border-top-color: rgb(240, 113, 40);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 8.75px;
  border-bottom-right-radius: 8.75px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 8.75px;
  border-top-right-radius: 8.75px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(201, 201, 201);
  border-bottom-style: solid;
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-right-style: solid;
  border-top-color: rgb(201, 201, 201);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(201, 201, 201);
  text-decoration: line-through;
  text-decoration-color: rgb(201, 201, 201);
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
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(201, 201, 201);
  outline: rgb(201, 201, 201) none 0px;
  text-decoration-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 27, 27);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 190, 0);
}

html[saved-theme="dark"] body h1 {
  color: rgb(240, 113, 40);
}

html[saved-theme="dark"] body h2 {
  color: rgb(235, 146, 57);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body h3 {
  color: rgb(241, 177, 37);
}

html[saved-theme="dark"] body h4 {
  color: rgb(160, 231, 60);
}

html[saved-theme="dark"] body h5 {
  color: rgb(98, 222, 172);
}

html[saved-theme="dark"] body h6 {
  color: rgb(98, 183, 222);
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
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
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
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(201, 201, 201);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(27, 27, 27);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(27, 27, 27);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body abbr {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(0, 0, 0) 0px 1px 1px 0px;
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body sub {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body summary {
  color: rgb(201, 201, 201);
}

html[saved-theme="dark"] body sup {
  color: rgb(201, 201, 201);
  font-size: 11.2px;
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(255, 190, 0);
}`,
  },
  light: {
    base: `:root:root {
  --accent-1: #f05006 !important;
  --accent-2: #cf1f08 !important;
  --accent-3: #d64545 !important;
  --accent-4: #08500d !important;
  --accent-5: #2012a0 !important;
  --accent-6: #1944aa !important;
  --background-modifier-error: #cf2d2d !important;
  --background-modifier-error-hover: #a72020 !important;
  --background-primary: #eaeaea !important;
  --background-secondary: #d9d9d9 !important;
  --base-font-face: system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial,
    "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", Meiryo, sans-serif !important;
  --bases-cards-background: #eaeaea !important;
  --bases-table-cell-background-active: #eaeaea !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e06d0f !important;
  --bases-table-header-background: #eaeaea !important;
  --bases-table-summary-background: #eaeaea !important;
  --blockquote-border-color: #e06d0f !important;
  --blur-background: color-mix(in srgb, #eaeaea 65%, transparent) linear-gradient(#eaeaea, color-mix(in srgb, #eaeaea 65%, transparent)) !important;
  --canvas-background: #eaeaea !important;
  --caret-color: rgb(36, 36, 36) !important;
  --checkbox-color: #e06d0f !important;
  --checkbox-marker-color: #eaeaea !important;
  --code-block-bg: #e4e3e0 !important;
  --code-block-fg: #161616 !important;
  --code-font-face: Consolas, "Courier New", Courier, monospace !important;
  --code-normal: rgb(36, 36, 36) !important;
  --collapse-icon-color-collapsed: #e06d0f !important;
  --dark: rgb(36, 36, 36) !important;
  --darkgray: rgb(36, 36, 36) !important;
  --divider-color-hover: #e06d0f !important;
  --embed-border-start: 2px solid #e06d0f !important;
  --external-link: #307a8e !important;
  --external-link-hidden: #307a8e99 !important;
  --file-header-background: #eaeaea !important;
  --file-header-background-focused: #eaeaea !important;
  --file-line-width: 950px !important;
  --flair-color: rgb(36, 36, 36) !important;
  --font-size-2xl: 1.5em !important;
  --font-size-3xl: 1.875em !important;
  --font-size-base: 1em !important;
  --font-size-h1: 1.3em !important;
  --font-size-h2: 1.2em !important;
  --font-size-h3: 1.1em !important;
  --font-size-h4: 1em !important;
  --font-size-h5: 1em !important;
  --font-size-h6: 1em !important;
  --font-size-lg: 1.125em !important;
  --font-size-sm: 0.875em !important;
  --font-size-xl: 1.25em !important;
  --font-size-xs: 0.78em !important;
  --graph-node-focused: #e06d0f !important;
  --graph-text: rgb(36, 36, 36) !important;
  --gray: rgb(36, 36, 36) !important;
  --gutter-width: 50px !important;
  --h1-gradient: #e06d0f, #f05006, #cf1f08, #d64545 !important;
  --h2-gradient: #f05006, #e06d0f, #eee !important;
  --h2-icon-color: #e06d0f !important;
  --h3-h6-icon-color: #f05006 !important;
  --highlight: #e9b35f !important;
  --icon-color-active: #e06d0f !important;
  --icon-color-focused: rgb(36, 36, 36) !important;
  --interactive-accent: #e06d0f !important;
  --light: #eaeaea !important;
  --lightgray: #d9d9d9 !important;
  --link-color: #e06d0f !important;
  --link-external-color: #e06d0f !important;
  --link-unresolved-color: #e06d0f !important;
  --list-marker: 1.5rem !important;
  --list-marker-color-collapsed: #e06d0f !important;
  --list-marker-num: 1.5 !important;
  --list-padding: 1.5em !important;
  --list-padding-num: 2.5 !important;
  --main-background: #eaeaea !important;
  --main-node: #e06d0f !important;
  --max-width-text: 950px !important;
  --menu-background: #d9d9d9 !important;
  --metadata-input-text-color: rgb(36, 36, 36) !important;
  --modal-background: #eaeaea !important;
  --monochrome-color: hsl(13, 100%, 50%) !important;
  --nav-heading-color: rgb(36, 36, 36) !important;
  --nav-heading-color-hover: rgb(36, 36, 36) !important;
  --nav-item-color-active: rgb(36, 36, 36) !important;
  --nav-item-color-highlighted: #e06d0f !important;
  --nav-item-color-hover: rgb(36, 36, 36) !important;
  --nav-item-color-selected: rgb(36, 36, 36) !important;
  --pdf-background: #eaeaea !important;
  --pdf-page-background: #eaeaea !important;
  --pdf-sidebar-background: #eaeaea !important;
  --pill-color-hover: rgb(36, 36, 36) !important;
  --pill-color-remove-hover: #e06d0f !important;
  --prev-margin: 150px !important;
  --prompt-background: #eaeaea !important;
  --raised-background: color-mix(in srgb, #eaeaea 65%, transparent) linear-gradient(#eaeaea, color-mix(in srgb, #eaeaea 65%, transparent)) !important;
  --ribbon-background: #d9d9d9 !important;
  --ribbon-background-collapsed: #eaeaea !important;
  --search-result-background: #eaeaea !important;
  --secondary: #e06d0f !important;
  --secondary-background: #d9d9d9 !important;
  --secondary-background-low-opacity: #e2e2e254 !important;
  --setting-group-heading-color: rgb(36, 36, 36) !important;
  --size-0-5: 0.125em !important;
  --size-1: 0.25em !important;
  --size-1-5: 0.375em !important;
  --size-12: 3em !important;
  --size-128: 32em !important;
  --size-16: 4em !important;
  --size-2: 0.5em !important;
  --size-2-5: 0.625em !important;
  --size-24: 6em !important;
  --size-3: 0.75em !important;
  --size-3-5: 0.875em !important;
  --size-32: 8em !important;
  --size-4: 1em !important;
  --size-48: 12em !important;
  --size-5: 1.25em !important;
  --size-6: 1.5em !important;
  --size-64: 16em !important;
  --size-7: 1.75em !important;
  --size-8: 2em !important;
  --size-96: 24em !important;
  --status-bar-background: #d9d9d9 !important;
  --suggestion-background: #eaeaea !important;
  --tab-background-active: #eaeaea !important;
  --tab-container-background: #d9d9d9 !important;
  --tab-switcher-background: #d9d9d9 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #d9d9d9, transparent) !important;
  --tab-text-color-focused-active-current: rgb(36, 36, 36) !important;
  --tab-text-color-focused-highlighted: #e06d0f !important;
  --table-drag-handle-background-active: #e06d0f !important;
  --table-header-color: rgb(36, 36, 36) !important;
  --table-selection-border-color: #e06d0f !important;
  --tag-color: #e06d0f !important;
  --tag-color-hover: #e06d0f !important;
  --tertiary: #e06d0f !important;
  --text-accent: #e06d0f !important;
  --text-highlight-bg: #e9b35f !important;
  --text-normal: rgb(36, 36, 36) !important;
  --textHighlight: #e9b35f !important;
  --titlebar-background: #d9d9d9 !important;
  --titlebar-text-color-focused: rgb(36, 36, 36) !important;
  --vault-profile-color: rgb(36, 36, 36) !important;
  --vault-profile-color-hover: rgb(36, 36, 36) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(217, 217, 217);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(234, 234, 234);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(234, 234, 234);
  border-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(224, 109, 15);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(217, 217, 217);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(217, 217, 217);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(234, 234, 234);
  color: rgb(36, 36, 36);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(214, 69, 69);
  font-weight: 900;
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(214, 69, 69);
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(214, 69, 69);
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(214, 69, 69);
  font-weight: 900;
  outline: rgb(214, 69, 69) none 0px;
  text-decoration-color: rgb(214, 69, 69);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(233, 179, 95);
  color: rgb(234, 234, 234);
  font-weight: 600;
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body del {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(224, 109, 15);
  border-color: rgb(224, 109, 15);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(48, 122, 142);
  outline: rgb(48, 122, 142) none 0px;
  text-decoration-color: rgb(48, 122, 142);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(224, 109, 15);
  outline: rgb(224, 109, 15) none 0px;
  text-decoration-color: rgb(224, 109, 15);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(224, 109, 15);
  outline: rgb(224, 109, 15) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body dt {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ol > li {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ul > li {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(224, 109, 15);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body table {
  color: rgb(36, 36, 36);
  width: 754px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(217, 217, 217);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body th {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body tr {
  background-color: color(srgb 0.856471 0.766275 0.692549);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(228, 227, 224);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(228, 227, 224);
  color: rgb(22, 22, 22);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(228, 227, 224);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(228, 227, 224);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body figcaption {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(240, 80, 6);
  border-left-color: rgb(240, 80, 6);
  border-right-color: rgb(240, 80, 6);
  border-top-color: rgb(240, 80, 6);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 8.75px;
  border-bottom-right-radius: 8.75px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 8.75px;
  border-top-right-radius: 8.75px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-style: solid;
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-right-style: solid;
  border-top-color: rgb(36, 36, 36);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(36, 36, 36);
  text-decoration: line-through;
  text-decoration-color: rgb(36, 36, 36);
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
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(224, 109, 15);
}

html[saved-theme="light"] body h1 {
  color: rgb(240, 80, 6);
}

html[saved-theme="light"] body h2 {
  color: rgb(207, 31, 8);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body h3 {
  color: rgb(214, 69, 69);
}

html[saved-theme="light"] body h4 {
  color: rgb(8, 80, 13);
}

html[saved-theme="light"] body h5 {
  color: rgb(32, 18, 160);
}

html[saved-theme="light"] body h6 {
  color: rgb(25, 68, 170);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(234, 234, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(234, 234, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(234, 234, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(234, 234, 234);
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(234, 234, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(234, 234, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(234, 234, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(234, 234, 234);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(36, 36, 36);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(217, 217, 217);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(217, 217, 217);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body abbr {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(202, 202, 202);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(202, 202, 202);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(202, 202, 202);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(202, 202, 202);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(202, 202, 202) 0px 1px 1px 0px;
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html[saved-theme="light"] body sub {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body summary {
  color: rgb(36, 36, 36);
}

html[saved-theme="light"] body sup {
  color: rgb(36, 36, 36);
  font-size: 11.2px;
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(224, 109, 15);
}`,
  },
};
