import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "sparkling-day", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --anti-flash-white: #EBEBEB !important;
  --background-code: #EBEBEB !important;
  --background-primary: #FCFCFC !important;
  --background-secondary: #F5F5F5 !important;
  --background-secondary-alt: #EBEBEB !important;
  --bar-gradient-end: transparent !important;
  --bar-gradient-mid: #13C4A3 !important;
  --bar-gradient-start: transparent !important;
  --bases-cards-background: #FCFCFC !important;
  --bases-embed-border-radius: 2px !important;
  --bases-table-cell-background-active: #FCFCFC !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #375BA9 !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-header-background: #FCFCFC !important;
  --bases-table-summary-background: #FCFCFC !important;
  --blockquote-border-color: #375BA9 !important;
  --blur-background: color-mix(in srgb, #FCFCFC 65%, transparent) linear-gradient(#FCFCFC, color-mix(in srgb, #FCFCFC 65%, transparent)) !important;
  --bright-green: #5AFF15 !important;
  --callout-radius: 2px;
  --canvas-background: #FCFCFC !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: #121019 !important;
  --checkbox-border-color: #121019 !important;
  --checkbox-border-color-hover: #13C4A3 !important;
  --checkbox-color: #375BA9 !important;
  --checkbox-color-hover: #13C4A3 !important;
  --checkbox-marker-color: #FCFCFC !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: #7C809B !important;
  --clickable-icon-radius: 2px !important;
  --code-builtin-color: #13C4A3 !important;
  --code-comment-color: #7C809B !important;
  --code-function-color: #13C4A3 !important;
  --code-normal: #121019 !important;
  --code-operator-color: #13C4A3 !important;
  --code-radius: 2px !important;
  --code-string-color: #FF3366 !important;
  --code-variable-color: #121019 !important;
  --codeblock-background: #EBEBEB !important;
  --codeblock-color: #121019 !important;
  --collapse-icon-color-collapsed: #FF3366 !important;
  --cool-gray: #7C809B !important;
  --dark: #121019 !important;
  --dark-purple: #242032 !important;
  --darkgray: #121019 !important;
  --divider-color-hover: #375BA9 !important;
  --embed-border-start: 2px solid #375BA9 !important;
  --file-header-background: #FCFCFC !important;
  --file-header-background-focused: #FCFCFC !important;
  --file-title-color: #121019 !important;
  --find-flashing: #13C4A3 !important;
  --flair-color: #121019 !important;
  --folder-filter: invert(55%) sepia(90%) saturate(407%) hue-rotate(119deg) brightness(94%) contrast(91%) !important;
  --folder-title-color: #1B1825 !important;
  --folly: #FF3366 !important;
  --footnote-radius: 2px !important;
  --french-gray: #D1D2DC !important;
  --gold: rgb(253, 233, 9) !important;
  --graph-node-focused: #FF3366 !important;
  --graph-text: #121019 !important;
  --gray: #121019 !important;
  --h1-color: #375BA9 !important;
  --h1-gradient-end: transparent !important;
  --h1-gradient-mid: #375BA9 !important;
  --h1-gradient-start: transparent !important;
  --h2-color: #375BA9 !important;
  --h2-gradient-end: transparent !important;
  --h2-gradient-start: #375BA9 !important;
  --h3-color: #375BA9 !important;
  --h4-color: #375BA9 !important;
  --h5-color: #375BA9 !important;
  --h6-color: #375BA9 !important;
  --highlight-background-color: #13C4A3 !important;
  --highlight-text-color: #FCFCFC !important;
  --highlight-text-shadow: #121019 !important;
  --icon-color-active: #FF3366 !important;
  --icon-color-focused: #121019 !important;
  --inline-code-background: #EBEBEB !important;
  --inline-code-color: #8B80F9 !important;
  --inline-title-color: #375BA9 !important;
  --interactive-accent: #375BA9 !important;
  --italic: #FF3366 !important;
  --light: #FCFCFC !important;
  --lightgray: #F5F5F5 !important;
  --link-color: #FF3366 !important;
  --link-ext-color: #13C4A3 !important;
  --link-external-color: #FF3366 !important;
  --link-int-color: #8B80F9 !important;
  --link-text-color: #121019 !important;
  --link-text-color-hover: #13C4A3 !important;
  --link-text-shadow: #FCFCFC !important;
  --link-unresolved-color: #FF3366 !important;
  --link-url-text-color: #8B80F9 !important;
  --list-marker-color: #121019 !important;
  --list-marker-color-collapsed: #FF3366 !important;
  --list-marker-color-hover: #13C4A3 !important;
  --menu-background: #F5F5F5 !important;
  --metadata-input-text-color: #121019 !important;
  --mint: #13C4A3 !important;
  --modal-background: #FCFCFC !important;
  --nav-heading-color: #121019 !important;
  --nav-heading-color-hover: #121019 !important;
  --nav-item-color-active: #121019 !important;
  --nav-item-color-highlighted: #FF3366 !important;
  --nav-item-color-hover: #121019 !important;
  --nav-item-color-selected: #121019 !important;
  --nav-item-radius: 2px !important;
  --nav-tag-radius: 2px !important;
  --pdf-background: #FCFCFC !important;
  --pdf-page-background: #FCFCFC !important;
  --pdf-sidebar-background: #FCFCFC !important;
  --pill-color-hover: #121019 !important;
  --pill-color-remove-hover: #FF3366 !important;
  --progress-bar-color: #13C4A3 !important;
  --prompt-background: #FCFCFC !important;
  --quote-background: #EBEBEB !important;
  --quote-style: italic !important;
  --radius-s: 2px !important;
  --raised-background: color-mix(in srgb, #FCFCFC 65%, transparent) linear-gradient(#FCFCFC, color-mix(in srgb, #FCFCFC 65%, transparent)) !important;
  --raisin-black: #1B1825 !important;
  --ribbon-background: #F5F5F5 !important;
  --ribbon-background-collapsed: #FCFCFC !important;
  --rich-black: #121019 !important;
  --robin-egg-blue: #19D8D5 !important;
  --search-result-background: #D1D2DC !important;
  --secondary: #FF3366 !important;
  --setting-group-heading-color: #121019 !important;
  --status-bar-background: #F5F5F5 !important;
  --strong: #FF3366 !important;
  --suggestion-background: #FCFCFC !important;
  --tab-background-active: #FCFCFC !important;
  --tab-container-background: #F5F5F5 !important;
  --tab-radius: 2px !important;
  --tab-switcher-background: #F5F5F5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F5F5F5, transparent) !important;
  --tab-text-color-focused-active-current: #121019 !important;
  --tab-text-color-focused-highlighted: #FF3366 !important;
  --table-drag-handle-background-active: #375BA9 !important;
  --table-header-color: #121019 !important;
  --table-selection-border-color: #375BA9 !important;
  --tag-color: #FF3366 !important;
  --tag-color-hover: #FF3366 !important;
  --tags-background: #EBEBEB !important;
  --tags-color: #FF3366 !important;
  --tertiary: #FF3366 !important;
  --text-accent: #FF3366 !important;
  --text-normal: #121019 !important;
  --text-selection: #D1D2DC !important;
  --titlebar-background: #F5F5F5 !important;
  --titlebar-background-focused: #EBEBEB !important;
  --titlebar-text-color-focused: #121019 !important;
  --tropical-indigo: #8B80F9 !important;
  --tropical-indigo-light: #A69EFA !important;
  --underline-line-color: #13C4A3 !important;
  --underline-line-thickness: 3px !important;
  --underline-text-color: #121019 !important;
  --vault-profile-color: #121019 !important;
  --vault-profile-color-hover: #121019 !important;
  --white: #FCFCFC !important;
  --white-smoke: #F5F5F5 !important;
  --ylmn-blue: #375BA9 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(18, 16, 25);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(18, 16, 25);
}

html body .bases-table thead th {
  color: rgb(18, 16, 25);
}

html body .canvas-node {
  border-color: rgb(18, 16, 25);
}

html body .canvas-node-content {
  color: rgb(18, 16, 25);
}

html body .canvas-node-file {
  color: rgb(18, 16, 25);
}

html body .canvas-node-group {
  border-color: rgb(18, 16, 25);
}

html body .canvas-sidebar {
  background-color: rgb(252, 252, 252);
  border-color: rgb(18, 16, 25);
}

html body .note-properties-tags {
  color: rgb(255, 51, 102);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(18, 16, 25);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  color: rgb(18, 16, 25);
}

html body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(18, 16, 25);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration-color: rgb(255, 51, 102);
}

html body .page article p > em, html em {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration-color: rgb(255, 51, 102);
}

html body .page article p > i, html i {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration-color: rgb(255, 51, 102);
}

html body .page article p > strong, html strong {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration-color: rgb(255, 51, 102);
}

html body .text-highlight {
  background-color: rgb(19, 196, 163);
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html body del {
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration-color: rgb(18, 16, 25);
}

html body h1.article-title {
  color: rgb(18, 16, 25);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(18, 16, 25);
  border-radius: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(55, 91, 169);
  border-color: rgb(55, 91, 169);
}`,
    links: `html body a.external, html footer a {
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration-color: rgb(18, 16, 25);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration-color: rgb(255, 51, 102);
}

html body a.internal.broken {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration-color: rgb(255, 51, 102);
}`,
    lists: `html body dd {
  color: rgb(18, 16, 25);
}

html body dt {
  color: rgb(18, 16, 25);
}

html body ol > li {
  color: rgb(18, 16, 25);
}

html body ol.overflow {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body ul > li {
  color: rgb(18, 16, 25);
}

html body ul.overflow {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}`,
    blockquotes: `html body blockquote {
  background-color: rgb(235, 235, 235);
  font-style: italic;
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body table {
  color: rgb(18, 16, 25);
}

html body td {
  color: rgb(18, 16, 25);
}

html body th {
  color: rgb(18, 16, 25);
}`,
    code: `html body code {
  background-color: rgb(235, 235, 235);
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(18, 16, 25);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(18, 16, 25);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body pre:has(> code) {
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body figcaption {
  color: rgb(18, 16, 25);
}

html body figure {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body img {
  border-bottom-color: rgb(55, 91, 169);
  border-left-color: rgb(55, 91, 169);
  border-right-color: rgb(55, 91, 169);
  border-top-color: rgb(55, 91, 169);
}

html body video {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(18, 16, 25);
  color: rgb(18, 16, 25);
}

html body .transclude {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(55, 91, 169);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body .transclude-inner {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(18, 16, 25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  color: rgb(18, 16, 25);
}

html body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
}

html body .search > .search-container > .search-space > * {
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration-color: rgb(18, 16, 25);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(18, 16, 25);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(18, 16, 25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(18, 16, 25);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(18, 16, 25);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(18, 16, 25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(18, 16, 25);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(18, 16, 25);
}

html body a.internal.tag-link::before {
  color: rgb(255, 51, 102);
}

html body h1 {
  color: rgb(55, 91, 169);
}

html body h2 {
  color: rgb(55, 91, 169);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(55, 91, 169);
}

html body h3 {
  color: rgb(55, 91, 169);
}

html body h4 {
  color: rgb(55, 91, 169);
}

html body h5 {
  color: rgb(55, 91, 169);
}

html body h6 {
  color: rgb(55, 91, 169);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body ::-webkit-scrollbar {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html body ::-webkit-scrollbar-track {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(18, 16, 25);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    footer: `html body footer {
  background-color: rgb(245, 245, 245);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(18, 16, 25);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  color: rgb(18, 16, 25);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(18, 16, 25);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body li.section-li > .section .meta {
  color: rgb(18, 16, 25);
}

html body ul.section-ul {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}`,
    darkmode: `html body .darkmode {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  color: rgb(18, 16, 25);
}

html body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

html body .page-header h2.page-title {
  color: rgb(18, 16, 25);
}

html body abbr {
  color: rgb(18, 16, 25);
}

html body details {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body kbd {
  border-bottom-color: rgb(18, 16, 25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(18, 16, 25);
}

html body progress {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

html body sub {
  color: rgb(18, 16, 25);
}

html body summary {
  color: rgb(18, 16, 25);
}

html body sup {
  color: rgb(18, 16, 25);
}

html body ul.tags > li {
  background-color: rgb(235, 235, 235);
  color: rgb(255, 51, 102);
}`,
  },
};
