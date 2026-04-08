import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sparkling-night",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anti-flash-white: #EBEBEB !important;
  --background-primary: #121019 !important;
  --background-secondary: #16141f !important;
  --background-secondary-alt: #16141f !important;
  --bar-gradient-end: transparent !important;
  --bar-gradient-mid: #5AFF15 !important;
  --bar-gradient-start: transparent !important;
  --bases-cards-background: #121019 !important;
  --bases-embed-border-radius: 3px !important;
  --bases-table-cell-background-active: #121019 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8B80F9 !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-header-background: #121019 !important;
  --bases-table-summary-background: #121019 !important;
  --blockquote-border-color: #8B80F9 !important;
  --bright-green: #5AFF15 !important;
  --callout-radius: 3px;
  --canvas-background: #121019 !important;
  --canvas-controls-radius: 3px !important;
  --caret-color: #FCFCFC !important;
  --checkbox-border-color: #7C809B !important;
  --checkbox-border-color-hover: #5AFF15 !important;
  --checkbox-color: #8B80F9 !important;
  --checkbox-color-hover: #5AFF15 !important;
  --checkbox-marker-color: #FCFCFC !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #7C809B !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 3px !important;
  --code-builtin-color: #8B80F9 !important;
  --code-comment-color: #7C809B !important;
  --code-function-color: #5AFF15 !important;
  --code-normal: #FCFCFC !important;
  --code-operator-color: #5AFF15 !important;
  --code-radius: 3px !important;
  --code-string-color: #19D8D5 !important;
  --code-text-size: 0.9em !important;
  --code-variable-color: #FCFCFC !important;
  --codeblock-background: #242032 !important;
  --codeblock-color: #FCFCFC !important;
  --collapse-icon-color-collapsed: #5AFF15 !important;
  --cool-gray: #7C809B !important;
  --dark: #FCFCFC !important;
  --dark-purple: #242032 !important;
  --dark-purple-light: #413a58 !important;
  --darkgray: #FCFCFC !important;
  --divider-color: #413a58 !important;
  --divider-color-hover: #8B80F9 !important;
  --embed-border-start: 2px solid #8B80F9 !important;
  --file-header-background: #121019 !important;
  --file-header-background-focused: #121019 !important;
  --file-line-width: 750px !important;
  --file-title-color: #FCFCFC !important;
  --find-flashing: #5AFF15 !important;
  --flair-color: #FCFCFC !important;
  --folder-filter: invert(30%) sepia(99%) saturate(1210%) hue-rotate(51deg) brightness(120%) contrast(100%) !important;
  --folder-title-color: #FCFCFC !important;
  --folly: #FF3366 !important;
  --footnote-radius: 3px !important;
  --french-gray: #D1D2DC !important;
  --gold: rgb(253, 233, 9) !important;
  --graph-node-focused: #5AFF15 !important;
  --graph-text: #FCFCFC !important;
  --gray: #FCFCFC !important;
  --h1-color: #8B80F9 !important;
  --h1-gradient-end: transparent !important;
  --h1-gradient-mid: #8B80F9 !important;
  --h1-gradient-start: transparent !important;
  --h2-color: #8B80F9 !important;
  --h2-gradient-end: transparent !important;
  --h2-gradient-start: #8B80F9 !important;
  --h3-color: #8B80F9 !important;
  --h4-color: #8B80F9 !important;
  --h5-color: #8B80F9 !important;
  --h6-color: #8B80F9 !important;
  --highlight-background-color: #5AFF15 !important;
  --highlight-text-color: #242032 !important;
  --highlight-text-shadow: #FCFCFC !important;
  --icon-color-active: #5AFF15 !important;
  --icon-color-focused: #FCFCFC !important;
  --inline-code-background: #242032 !important;
  --inline-code-color: #5AFF15 !important;
  --inline-title-color: #8B80F9 !important;
  --interactive-accent: #8B80F9 !important;
  --light: #121019 !important;
  --lightgray: #16141f !important;
  --line-width: 750px !important;
  --link-color: #5AFF15 !important;
  --link-ext-color: #8B80F9 !important;
  --link-external-color: #5AFF15 !important;
  --link-int-color: #19D8D5 !important;
  --link-text-color: #FCFCFC !important;
  --link-text-color-hover: #8B80F9 !important;
  --link-text-shadow: #16141f !important;
  --link-unresolved-color: #5AFF15 !important;
  --link-url-text-color: #8B80F9 !important;
  --list-marker-color: #FCFCFC !important;
  --list-marker-color-collapsed: #5AFF15 !important;
  --list-marker-color-hover: #5AFF15 !important;
  --menu-background: #16141f !important;
  --metadata-input-text-color: #FCFCFC !important;
  --mint: #13C4A3 !important;
  --modal-background: #121019 !important;
  --nav-heading-color: #FCFCFC !important;
  --nav-heading-color-hover: #FCFCFC !important;
  --nav-item-color-active: #FCFCFC !important;
  --nav-item-color-highlighted: #5AFF15 !important;
  --nav-item-color-hover: #FCFCFC !important;
  --nav-item-color-selected: #FCFCFC !important;
  --nav-item-radius: 3px !important;
  --nav-tag-radius: 3px !important;
  --pdf-background: #121019 !important;
  --pdf-page-background: #121019 !important;
  --pdf-sidebar-background: #121019 !important;
  --pill-color-hover: #FCFCFC !important;
  --pill-color-remove-hover: #5AFF15 !important;
  --progress-bar-color: #8B80F9 !important;
  --prompt-background: #121019 !important;
  --quote-background: #242032 !important;
  --radius-s: 3px !important;
  --raisin-black: #16141f !important;
  --ribbon-background: #16141f !important;
  --ribbon-background-collapsed: #121019 !important;
  --rich-black: #121019 !important;
  --robin-egg-blue: #19D8D5 !important;
  --search-result-background: #8B80F9 !important;
  --secondary: #5AFF15 !important;
  --setting-group-heading-color: #FCFCFC !important;
  --status-bar-background: #16141f !important;
  --status-bar-border-color: #413a58 !important;
  --strong: #19D8D5 !important;
  --suggestion-background: #121019 !important;
  --tab-background-active: #121019 !important;
  --tab-container-background: #16141f !important;
  --tab-divider-color: #413a58 !important;
  --tab-outline-color: #413a58 !important;
  --tab-radius: 3px !important;
  --tab-switcher-background: #16141f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #16141f, transparent) !important;
  --tab-text-color-focused-active-current: #FCFCFC !important;
  --tab-text-color-focused-highlighted: #5AFF15 !important;
  --table-drag-handle-background-active: #8B80F9 !important;
  --table-header-color: #FCFCFC !important;
  --table-selection-border-color: #8B80F9 !important;
  --tag-color: #5AFF15 !important;
  --tag-color-hover: #5AFF15 !important;
  --tags-background: #242032 !important;
  --tags-color: #19D8D5 !important;
  --tertiary: #5AFF15 !important;
  --text-accent: #5AFF15 !important;
  --text-header: #8B80F9 !important;
  --text-normal: #FCFCFC !important;
  --text-selection: #A69EFA !important;
  --titlebar-background: #16141f !important;
  --titlebar-background-focused: #16141f !important;
  --titlebar-text-color-focused: #FCFCFC !important;
  --tropical-indigo: #8B80F9 !important;
  --tropical-indigo-light: #A69EFA !important;
  --underline-line-color: #5AFF15 !important;
  --underline-line-thickness: 0.15em !important;
  --underline-text-color: #FCFCFC !important;
  --vault-profile-color: #FCFCFC !important;
  --vault-profile-color-hover: #FCFCFC !important;
  --white: #FCFCFC !important;
  --white-smoke: #F5F5F5 !important;
  --ylmn-blue: #375BA9 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 20, 31);
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(18, 16, 25);
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 20, 31);
  border-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(90, 255, 21);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 20, 31);
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 58, 88);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 20, 31);
  border-left-color: rgb(65, 58, 88);
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(18, 16, 25);
  color: rgb(252, 252, 252);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(25, 216, 213);
  outline: rgb(25, 216, 213) none 0px;
  text-decoration-color: rgb(25, 216, 213);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(25, 216, 213);
  outline: rgb(25, 216, 213) none 0px;
  text-decoration-color: rgb(25, 216, 213);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(90, 255, 21);
  color: rgb(36, 32, 50);
  outline: rgb(36, 32, 50) none 0px;
  text-decoration-color: rgb(36, 32, 50);
}

html[saved-theme="dark"] body del {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(124, 128, 155);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(139, 128, 249);
  border-color: rgb(139, 128, 249);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body dt {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(36, 32, 50);
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body table {
  color: rgb(252, 252, 252);
  margin-left: 243.391px;
  margin-right: 243.391px;
}

html[saved-theme="dark"] body td {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body th {
  color: rgb(252, 252, 252);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(36, 32, 50);
  border-bottom-color: rgb(36, 32, 50);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(36, 32, 50);
  border-right-color: rgb(36, 32, 50);
  border-top-color: rgb(36, 32, 50);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(90, 255, 21);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(90, 255, 21);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(90, 255, 21);
  border-left-color: rgb(90, 255, 21);
  border-right-color: rgb(90, 255, 21);
  border-top-color: rgb(90, 255, 21);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(139, 128, 249);
  border-left-color: rgb(139, 128, 249);
  border-right-color: rgb(139, 128, 249);
  border-top-color: rgb(139, 128, 249);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(139, 128, 249);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(124, 128, 155);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(124, 128, 155);
  border-right-color: rgb(124, 128, 155);
  border-top-color: rgb(124, 128, 155);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(18, 16, 25);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 20, 31);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(90, 255, 21);
}

html[saved-theme="dark"] body h1 {
  color: rgb(139, 128, 249);
}

html[saved-theme="dark"] body h2 {
  color: rgb(139, 128, 249);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(139, 128, 249);
}

html[saved-theme="dark"] body h3 {
  color: rgb(139, 128, 249);
}

html[saved-theme="dark"] body h4 {
  color: rgb(139, 128, 249);
}

html[saved-theme="dark"] body h5 {
  color: rgb(139, 128, 249);
}

html[saved-theme="dark"] body h6 {
  color: rgb(139, 128, 249);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(65, 58, 88);
  border-left-color: rgb(65, 58, 88);
  border-right-color: rgb(65, 58, 88);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(252, 252, 252);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(65, 58, 88);
  border-left-color: rgb(65, 58, 88);
  border-right-color: rgb(65, 58, 88);
  border-top-color: rgb(65, 58, 88);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(252, 252, 252);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 20, 31);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body abbr {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body sub {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body summary {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body sup {
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(36, 32, 50);
  color: rgb(25, 216, 213);
}`,
  },
  light: {
    base: `:root:root {
  --anti-flash-white: #EBEBEB !important;
  --background-primary: #121019 !important;
  --background-secondary: #16141f !important;
  --background-secondary-alt: #16141f !important;
  --bar-gradient-end: transparent !important;
  --bar-gradient-mid: #5AFF15 !important;
  --bar-gradient-start: transparent !important;
  --bases-cards-background: #121019 !important;
  --bases-embed-border-radius: 3px !important;
  --bases-table-cell-background-active: #121019 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8B80F9 !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-header-background: #121019 !important;
  --bases-table-summary-background: #121019 !important;
  --blockquote-border-color: #8B80F9 !important;
  --blur-background: color-mix(in srgb, #121019 65%, transparent) linear-gradient(#121019, color-mix(in srgb, #121019 65%, transparent)) !important;
  --bright-green: #5AFF15 !important;
  --callout-radius: 3px;
  --canvas-background: #121019 !important;
  --canvas-controls-radius: 3px !important;
  --caret-color: #FCFCFC !important;
  --checkbox-border-color: #7C809B !important;
  --checkbox-border-color-hover: #5AFF15 !important;
  --checkbox-color: #8B80F9 !important;
  --checkbox-color-hover: #5AFF15 !important;
  --checkbox-marker-color: #FCFCFC !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #7C809B !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 3px !important;
  --code-builtin-color: #8B80F9 !important;
  --code-comment-color: #7C809B !important;
  --code-function-color: #5AFF15 !important;
  --code-normal: #FCFCFC !important;
  --code-operator-color: #5AFF15 !important;
  --code-radius: 3px !important;
  --code-string-color: #19D8D5 !important;
  --code-text-size: 0.9em !important;
  --code-variable-color: #FCFCFC !important;
  --codeblock-background: #242032 !important;
  --codeblock-color: #FCFCFC !important;
  --collapse-icon-color-collapsed: #5AFF15 !important;
  --cool-gray: #7C809B !important;
  --dark: #FCFCFC !important;
  --dark-purple: #242032 !important;
  --dark-purple-light: #413a58 !important;
  --darkgray: #FCFCFC !important;
  --divider-color: #413a58 !important;
  --divider-color-hover: #8B80F9 !important;
  --embed-border-start: 2px solid #8B80F9 !important;
  --file-header-background: #121019 !important;
  --file-header-background-focused: #121019 !important;
  --file-line-width: 750px !important;
  --file-title-color: #FCFCFC !important;
  --find-flashing: #5AFF15 !important;
  --flair-color: #FCFCFC !important;
  --folder-filter: invert(30%) sepia(99%) saturate(1210%) hue-rotate(51deg) brightness(120%) contrast(100%) !important;
  --folder-title-color: #FCFCFC !important;
  --folly: #FF3366 !important;
  --footnote-radius: 3px !important;
  --french-gray: #D1D2DC !important;
  --gold: rgb(253, 233, 9) !important;
  --graph-node-focused: #5AFF15 !important;
  --graph-text: #FCFCFC !important;
  --gray: #FCFCFC !important;
  --h1-color: #8B80F9 !important;
  --h1-gradient-end: transparent !important;
  --h1-gradient-mid: #8B80F9 !important;
  --h1-gradient-start: transparent !important;
  --h2-color: #8B80F9 !important;
  --h2-gradient-end: transparent !important;
  --h2-gradient-start: #8B80F9 !important;
  --h3-color: #8B80F9 !important;
  --h4-color: #8B80F9 !important;
  --h5-color: #8B80F9 !important;
  --h6-color: #8B80F9 !important;
  --highlight-background-color: #5AFF15 !important;
  --highlight-text-color: #242032 !important;
  --highlight-text-shadow: #FCFCFC !important;
  --icon-color-active: #5AFF15 !important;
  --icon-color-focused: #FCFCFC !important;
  --inline-code-background: #242032 !important;
  --inline-code-color: #5AFF15 !important;
  --inline-title-color: #8B80F9 !important;
  --interactive-accent: #8B80F9 !important;
  --light: #121019 !important;
  --lightgray: #16141f !important;
  --line-width: 750px !important;
  --link-color: #5AFF15 !important;
  --link-ext-color: #8B80F9 !important;
  --link-external-color: #5AFF15 !important;
  --link-int-color: #19D8D5 !important;
  --link-text-color: #FCFCFC !important;
  --link-text-color-hover: #8B80F9 !important;
  --link-text-shadow: #16141f !important;
  --link-unresolved-color: #5AFF15 !important;
  --link-url-text-color: #8B80F9 !important;
  --list-marker-color: #FCFCFC !important;
  --list-marker-color-collapsed: #5AFF15 !important;
  --list-marker-color-hover: #5AFF15 !important;
  --menu-background: #16141f !important;
  --metadata-input-text-color: #FCFCFC !important;
  --mint: #13C4A3 !important;
  --modal-background: #121019 !important;
  --nav-heading-color: #FCFCFC !important;
  --nav-heading-color-hover: #FCFCFC !important;
  --nav-item-color-active: #FCFCFC !important;
  --nav-item-color-highlighted: #5AFF15 !important;
  --nav-item-color-hover: #FCFCFC !important;
  --nav-item-color-selected: #FCFCFC !important;
  --nav-item-radius: 3px !important;
  --nav-tag-radius: 3px !important;
  --pdf-background: #121019 !important;
  --pdf-page-background: #121019 !important;
  --pdf-sidebar-background: #121019 !important;
  --pill-color-hover: #FCFCFC !important;
  --pill-color-remove-hover: #5AFF15 !important;
  --progress-bar-color: #8B80F9 !important;
  --prompt-background: #121019 !important;
  --quote-background: #242032 !important;
  --radius-s: 3px !important;
  --raised-background: color-mix(in srgb, #121019 65%, transparent) linear-gradient(#121019, color-mix(in srgb, #121019 65%, transparent)) !important;
  --raisin-black: #16141f !important;
  --ribbon-background: #16141f !important;
  --ribbon-background-collapsed: #121019 !important;
  --rich-black: #121019 !important;
  --robin-egg-blue: #19D8D5 !important;
  --search-result-background: #8B80F9 !important;
  --secondary: #5AFF15 !important;
  --setting-group-heading-color: #FCFCFC !important;
  --status-bar-background: #16141f !important;
  --status-bar-border-color: #413a58 !important;
  --strong: #19D8D5 !important;
  --suggestion-background: #121019 !important;
  --tab-background-active: #121019 !important;
  --tab-container-background: #16141f !important;
  --tab-divider-color: #413a58 !important;
  --tab-outline-color: #413a58 !important;
  --tab-radius: 3px !important;
  --tab-switcher-background: #16141f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #16141f, transparent) !important;
  --tab-text-color-focused-active-current: #FCFCFC !important;
  --tab-text-color-focused-highlighted: #5AFF15 !important;
  --table-drag-handle-background-active: #8B80F9 !important;
  --table-header-color: #FCFCFC !important;
  --table-selection-border-color: #8B80F9 !important;
  --tag-color: #5AFF15 !important;
  --tag-color-hover: #5AFF15 !important;
  --tags-background: #242032 !important;
  --tags-color: #19D8D5 !important;
  --tertiary: #5AFF15 !important;
  --text-accent: #5AFF15 !important;
  --text-header: #8B80F9 !important;
  --text-normal: #FCFCFC !important;
  --text-selection: #A69EFA !important;
  --titlebar-background: #16141f !important;
  --titlebar-background-focused: #16141f !important;
  --titlebar-text-color-focused: #FCFCFC !important;
  --tropical-indigo: #8B80F9 !important;
  --tropical-indigo-light: #A69EFA !important;
  --underline-line-color: #5AFF15 !important;
  --underline-line-thickness: 0.15em !important;
  --underline-text-color: #FCFCFC !important;
  --vault-profile-color: #FCFCFC !important;
  --vault-profile-color-hover: #FCFCFC !important;
  --white: #FCFCFC !important;
  --white-smoke: #F5F5F5 !important;
  --ylmn-blue: #375BA9 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 20, 31);
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(18, 16, 25);
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(18, 16, 25);
  border-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(90, 255, 21);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 20, 31);
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 58, 88);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 20, 31);
  border-left-color: rgb(65, 58, 88);
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(18, 16, 25);
  color: rgb(252, 252, 252);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(25, 216, 213);
  outline: rgb(25, 216, 213) none 0px;
  text-decoration-color: rgb(25, 216, 213);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(25, 216, 213);
  outline: rgb(25, 216, 213) none 0px;
  text-decoration-color: rgb(25, 216, 213);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(90, 255, 21);
  color: rgb(36, 32, 50);
  outline: rgb(36, 32, 50) none 0px;
  text-decoration-color: rgb(36, 32, 50);
}

html[saved-theme="light"] body del {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(124, 128, 155);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(139, 128, 249);
  border-color: rgb(139, 128, 249);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body dt {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ol > li {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ul > li {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(36, 32, 50);
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body table {
  color: rgb(252, 252, 252);
  margin-left: 243.391px;
  margin-right: 243.391px;
}

html[saved-theme="light"] body td {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body th {
  color: rgb(252, 252, 252);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(36, 32, 50);
  border-bottom-color: rgb(36, 32, 50);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(36, 32, 50);
  border-right-color: rgb(36, 32, 50);
  border-top-color: rgb(36, 32, 50);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(90, 255, 21);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(90, 255, 21);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(90, 255, 21);
  border-left-color: rgb(90, 255, 21);
  border-right-color: rgb(90, 255, 21);
  border-top-color: rgb(90, 255, 21);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body figcaption {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(139, 128, 249);
  border-left-color: rgb(139, 128, 249);
  border-right-color: rgb(139, 128, 249);
  border-top-color: rgb(139, 128, 249);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(139, 128, 249);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(124, 128, 155);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(124, 128, 155);
  border-right-color: rgb(124, 128, 155);
  border-top-color: rgb(124, 128, 155);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(18, 16, 25);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 20, 31);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(90, 255, 21);
}

html[saved-theme="light"] body h1 {
  color: rgb(139, 128, 249);
}

html[saved-theme="light"] body h2 {
  color: rgb(139, 128, 249);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(139, 128, 249);
}

html[saved-theme="light"] body h3 {
  color: rgb(139, 128, 249);
}

html[saved-theme="light"] body h4 {
  color: rgb(139, 128, 249);
}

html[saved-theme="light"] body h5 {
  color: rgb(139, 128, 249);
}

html[saved-theme="light"] body h6 {
  color: rgb(139, 128, 249);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(65, 58, 88);
  border-left-color: rgb(65, 58, 88);
  border-right-color: rgb(65, 58, 88);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(252, 252, 252);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(65, 58, 88);
  border-left-color: rgb(65, 58, 88);
  border-right-color: rgb(65, 58, 88);
  border-top-color: rgb(65, 58, 88);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(252, 252, 252);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(22, 20, 31);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body abbr {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body sub {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body summary {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body sup {
  color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(36, 32, 50);
  color: rgb(25, 216, 213);
}`,
  },
};
