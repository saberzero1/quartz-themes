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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(18, 16, 25);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(18, 16, 25);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(18, 16, 25);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  color: rgb(18, 16, 25);
}

body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(18, 16, 25);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration: rgb(255, 51, 102);
  text-decoration-color: rgb(255, 51, 102);
}

body .page article p > em, em {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration: rgb(255, 51, 102);
  text-decoration-color: rgb(255, 51, 102);
}

body .page article p > i, i {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration: rgb(255, 51, 102);
  text-decoration-color: rgb(255, 51, 102);
}

body .page article p > strong, strong {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration: rgb(255, 51, 102);
  text-decoration-color: rgb(255, 51, 102);
}

body .text-highlight {
  background-color: rgb(19, 196, 163);
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body del {
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration: line-through rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}`,
    links: `body a.external, footer a {
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration: rgb(255, 51, 102);
  text-decoration-color: rgb(255, 51, 102);
}

body a.internal.broken {
  color: rgb(255, 51, 102);
  outline: rgb(255, 51, 102) none 0px;
  text-decoration: rgb(255, 51, 102);
  text-decoration-color: rgb(255, 51, 102);
}`,
    lists: `body dd {
  color: rgb(18, 16, 25);
}

body dt {
  color: rgb(18, 16, 25);
}

body ol > li {
  color: rgb(18, 16, 25);
}

body ol.overflow {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body ul > li {
  color: rgb(18, 16, 25);
}

body ul.overflow {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(235, 235, 235);
  font-style: italic;
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body table {
  color: rgb(18, 16, 25);
}

body td {
  color: rgb(18, 16, 25);
}

body th {
  color: rgb(18, 16, 25);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(18, 16, 25);
}

body pre > code, pre:has(> code) {
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body figcaption {
  color: rgb(18, 16, 25);
}

body figure {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body img {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body video {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(18, 16, 25);
  color: rgb(18, 16, 25);
}

body .transclude {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(55, 91, 169);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body .transclude-inner {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(55, 91, 169);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(124, 128, 155);
  text-decoration: line-through rgb(124, 128, 155);
  text-decoration-color: rgb(124, 128, 155);
}

body input[type=checkbox] {
  border-bottom-color: rgb(18, 16, 25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='*'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='-'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='/'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='>'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='?'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='I'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='S'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='b'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='c'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='d'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='f'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='i'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='k'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='l'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='p'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='u'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body li.task-list-item[data-task='w'] {
  color: rgb(18, 16, 25);
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `body .search > .search-button {
  color: rgb(18, 16, 25);
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > * {
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(18, 16, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(18, 16, 25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(18, 16, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(18, 16, 25);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(18, 16, 25);
}

body a.internal.tag-link::before {
  color: rgb(255, 51, 102);
}

body h1 {
  color: rgb(55, 91, 169);
}

body h2 {
  color: rgb(55, 91, 169);
}

body h2.page-title, h2.page-title a {
  color: rgb(55, 91, 169);
}

body h3 {
  color: rgb(55, 91, 169);
}

body h4 {
  color: rgb(55, 91, 169);
}

body h5 {
  color: rgb(55, 91, 169);
}

body h6 {
  color: rgb(55, 91, 169);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(18, 16, 25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(18, 16, 25);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    footer: `body footer {
  background-color: rgb(245, 245, 245);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(18, 16, 25);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  color: rgb(18, 16, 25);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(18, 16, 25);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body li.section-li > .section .meta {
  color: rgb(18, 16, 25);
}

body ul.section-ul {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
  color: rgb(18, 16, 25);
}

body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

body .page-header h2.page-title {
  color: rgb(18, 16, 25);
}

body abbr {
  color: rgb(18, 16, 25);
  text-decoration: underline dotted rgb(18, 16, 25);
}

body details {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(18, 16, 25);
  border-left-color: rgb(18, 16, 25);
  border-right-color: rgb(18, 16, 25);
  border-top-color: rgb(18, 16, 25);
}

body sub {
  color: rgb(18, 16, 25);
}

body summary {
  color: rgb(18, 16, 25);
}

body sup {
  color: rgb(18, 16, 25);
}`,
  },
};
