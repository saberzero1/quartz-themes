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
  --anti-flash-white: #EBEBEB;
  --background-primary: #121019;
  --background-secondary: #16141f;
  --background-secondary-alt: #16141f;
  --bar-gradient-end: transparent;
  --bar-gradient-mid: #5AFF15;
  --bar-gradient-start: transparent;
  --bases-cards-background: #121019;
  --bases-embed-border-radius: 3px;
  --bases-table-cell-background-active: #121019;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8B80F9;
  --bases-table-container-border-radius: 3px;
  --bases-table-header-background: #121019;
  --bases-table-summary-background: #121019;
  --blockquote-border-color: #8B80F9;
  --bright-green: #5AFF15;
  --callout-radius: 3px;
  --canvas-background: #121019;
  --canvas-controls-radius: 3px;
  --caret-color: #FCFCFC;
  --checkbox-border-color: #7C809B;
  --checkbox-border-color-hover: #5AFF15;
  --checkbox-color: #8B80F9;
  --checkbox-color-hover: #5AFF15;
  --checkbox-marker-color: #FCFCFC;
  --checkbox-radius: 3px;
  --checklist-done-color: #7C809B;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 3px;
  --code-builtin-color: #8B80F9;
  --code-comment-color: #7C809B;
  --code-function-color: #5AFF15;
  --code-normal: #FCFCFC;
  --code-operator-color: #5AFF15;
  --code-radius: 3px;
  --code-string-color: #19D8D5;
  --code-text-size: 0.9em;
  --code-variable-color: #FCFCFC;
  --codeblock-background: #242032;
  --codeblock-color: #FCFCFC;
  --collapse-icon-color-collapsed: #5AFF15;
  --cool-gray: #7C809B;
  --dark: var(--text-normal);
  --dark-purple: #242032;
  --dark-purple-light: #413a58;
  --darkgray: var(--text-normal);
  --divider-color: #413a58;
  --divider-color-hover: #8B80F9;
  --embed-border-start: 2px solid #8B80F9;
  --file-header-background: #121019;
  --file-header-background-focused: #121019;
  --file-line-width: 750px;
  --file-title-color: #FCFCFC;
  --find-flashing: #5AFF15;
  --flair-color: #FCFCFC;
  --folder-filter: invert(30%) sepia(99%) saturate(1210%) hue-rotate(51deg) brightness(120%) contrast(100%);
  --folder-title-color: #FCFCFC;
  --folly: #FF3366;
  --footnote-radius: 3px;
  --french-gray: #D1D2DC;
  --gold: rgb(253, 233, 9);
  --graph-node-focused: #5AFF15;
  --graph-text: #FCFCFC;
  --gray: var(--text-normal);
  --h1-color: #8B80F9;
  --h1-gradient-end: transparent;
  --h1-gradient-mid: #8B80F9;
  --h1-gradient-start: transparent;
  --h2-color: #8B80F9;
  --h2-gradient-end: transparent;
  --h2-gradient-start: #8B80F9;
  --h3-color: #8B80F9;
  --h4-color: #8B80F9;
  --h5-color: #8B80F9;
  --h6-color: #8B80F9;
  --highlight-background-color: #5AFF15;
  --highlight-text-color: #242032;
  --highlight-text-shadow: #FCFCFC;
  --icon-color-active: #5AFF15;
  --icon-color-focused: #FCFCFC;
  --inline-code-background: #242032;
  --inline-code-color: #5AFF15;
  --inline-title-color: #8B80F9;
  --interactive-accent: #8B80F9;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-width: 750px;
  --link-color: #5AFF15;
  --link-ext-color: #8B80F9;
  --link-external-color: #5AFF15;
  --link-int-color: #19D8D5;
  --link-text-color: #FCFCFC;
  --link-text-color-hover: #8B80F9;
  --link-text-shadow: #16141f;
  --link-unresolved-color: #5AFF15;
  --link-url-text-color: #8B80F9;
  --list-marker-color: #FCFCFC;
  --list-marker-color-collapsed: #5AFF15;
  --list-marker-color-hover: #5AFF15;
  --menu-background: #16141f;
  --metadata-input-text-color: #FCFCFC;
  --mint: #13C4A3;
  --modal-background: #121019;
  --nav-heading-color: #FCFCFC;
  --nav-heading-color-hover: #FCFCFC;
  --nav-item-color-active: #FCFCFC;
  --nav-item-color-highlighted: #5AFF15;
  --nav-item-color-hover: #FCFCFC;
  --nav-item-color-selected: #FCFCFC;
  --nav-item-radius: 3px;
  --nav-tag-radius: 3px;
  --pdf-background: #121019;
  --pdf-page-background: #121019;
  --pdf-sidebar-background: #121019;
  --pill-color-hover: #FCFCFC;
  --pill-color-remove-hover: #5AFF15;
  --progress-bar-color: #8B80F9;
  --prompt-background: #121019;
  --quote-background: #242032;
  --radius-s: 3px;
  --raisin-black: #16141f;
  --ribbon-background: #16141f;
  --ribbon-background-collapsed: #121019;
  --rich-black: #121019;
  --robin-egg-blue: #19D8D5;
  --search-result-background: #8B80F9;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #FCFCFC;
  --status-bar-background: #16141f;
  --status-bar-border-color: #413a58;
  --strong: #19D8D5;
  --suggestion-background: #121019;
  --tab-background-active: #121019;
  --tab-container-background: #16141f;
  --tab-divider-color: #413a58;
  --tab-outline-color: #413a58;
  --tab-radius: 3px;
  --tab-switcher-background: #16141f;
  --tab-switcher-menubar-background: linear-gradient(to top, #16141f, transparent);
  --tab-text-color-focused-active-current: #FCFCFC;
  --tab-text-color-focused-highlighted: #5AFF15;
  --table-drag-handle-background-active: #8B80F9;
  --table-header-color: #FCFCFC;
  --table-selection-border-color: #8B80F9;
  --tag-color: #5AFF15;
  --tag-color-hover: #5AFF15;
  --tags-background: #242032;
  --tags-color: #19D8D5;
  --tertiary: var(--text-accent);
  --text-accent: #5AFF15;
  --text-header: #8B80F9;
  --text-normal: #FCFCFC;
  --text-selection: #A69EFA;
  --titlebar-background: #16141f;
  --titlebar-background-focused: #16141f;
  --titlebar-text-color-focused: #FCFCFC;
  --tropical-indigo: #8B80F9;
  --tropical-indigo-light: #A69EFA;
  --underline-line-color: #5AFF15;
  --underline-line-thickness: 0.15em;
  --underline-text-color: #FCFCFC;
  --vault-profile-color: #FCFCFC;
  --vault-profile-color-hover: #FCFCFC;
  --white: #FCFCFC;
  --white-smoke: #F5F5F5;
  --ylmn-blue: #375BA9;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 20, 31);
  color: rgb(252, 252, 252);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(18, 16, 25);
  color: rgb(252, 252, 252);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 20, 31);
  color: rgb(252, 252, 252);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 58, 88);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 20, 31);
  border-left-color: rgb(65, 58, 88);
  color: rgb(252, 252, 252);
}

body div#quartz-root {
  background-color: rgb(18, 16, 25);
  color: rgb(252, 252, 252);
}`,
    typography: `body .page article p > b, b {
  color: rgb(25, 216, 213);
  outline: rgb(25, 216, 213) none 0px;
  text-decoration: rgb(25, 216, 213);
  text-decoration-color: rgb(25, 216, 213);
}

body .page article p > em, em {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body .page article p > i, i {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body .page article p > strong, strong {
  color: rgb(25, 216, 213);
  outline: rgb(25, 216, 213) none 0px;
  text-decoration: rgb(25, 216, 213);
  text-decoration-color: rgb(25, 216, 213);
}

body .text-highlight {
  background-color: rgb(90, 255, 21);
  color: rgb(36, 32, 50);
  outline: rgb(36, 32, 50) none 0px;
  text-decoration: rgb(36, 32, 50);
  text-decoration-color: rgb(36, 32, 50);
}

body del {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: line-through rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}`,
    links: `body a.external, footer a {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body a.internal.broken {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}`,
    lists: `body dd {
  color: rgb(252, 252, 252);
}

body dt {
  color: rgb(252, 252, 252);
}

body ol > li {
  color: rgb(252, 252, 252);
}

body ol.overflow {
  background-color: rgb(18, 16, 25);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body ul > li {
  color: rgb(252, 252, 252);
}

body ul.overflow {
  background-color: rgb(18, 16, 25);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(36, 32, 50);
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body table {
  color: rgb(252, 252, 252);
  margin-left: 243.391px;
  margin-right: 243.391px;
}

body td {
  color: rgb(252, 252, 252);
}

body th {
  color: rgb(252, 252, 252);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

body pre > code > [data-line] {
  border-left-color: rgb(90, 255, 21);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(90, 255, 21);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(90, 255, 21);
  border-left-color: rgb(90, 255, 21);
  border-right-color: rgb(90, 255, 21);
  border-top-color: rgb(90, 255, 21);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body figcaption {
  color: rgb(252, 252, 252);
}

body figure {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body img {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body video {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

body .transclude {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(139, 128, 249);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body .transclude-inner {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(139, 128, 249);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(124, 128, 155);
  text-decoration: rgb(124, 128, 155);
  text-decoration-color: rgb(124, 128, 155);
}

body input[type=checkbox] {
  border-bottom-color: rgb(124, 128, 155);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(124, 128, 155);
  border-right-color: rgb(124, 128, 155);
  border-top-color: rgb(124, 128, 155);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='*'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='-'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='/'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='>'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='?'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='I'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='S'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='b'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='c'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='d'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='f'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='i'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='k'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='l'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='p'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='u'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='w'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space {
  background-color: rgb(18, 16, 25);
}

body .search > .search-container > .search-space > * {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 20, 31);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

body a.internal.tag-link::before {
  color: rgb(90, 255, 21);
}

body h1 {
  color: rgb(139, 128, 249);
}

body h2 {
  color: rgb(139, 128, 249);
}

body h2.page-title, h2.page-title a {
  color: rgb(139, 128, 249);
}

body h3 {
  color: rgb(139, 128, 249);
}

body h4 {
  color: rgb(139, 128, 249);
}

body h5 {
  color: rgb(139, 128, 249);
}

body h6 {
  color: rgb(139, 128, 249);
}

body hr {
  border-bottom-color: rgb(65, 58, 88);
  border-left-color: rgb(65, 58, 88);
  border-right-color: rgb(65, 58, 88);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body ::-webkit-scrollbar {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    footer: `body footer {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(65, 58, 88);
  border-left-color: rgb(65, 58, 88);
  border-right-color: rgb(65, 58, 88);
  border-top-color: rgb(65, 58, 88);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(252, 252, 252);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(252, 252, 252);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body li.section-li > .section .meta {
  color: rgb(252, 252, 252);
}

body ul.section-ul {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

body .navigation-progress {
  background-color: rgb(22, 20, 31);
}

body .page-header h2.page-title {
  color: rgb(252, 252, 252);
}

body abbr {
  color: rgb(252, 252, 252);
  text-decoration: underline dotted rgb(252, 252, 252);
}

body details {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body sub {
  color: rgb(252, 252, 252);
}

body summary {
  color: rgb(252, 252, 252);
}

body sup {
  color: rgb(252, 252, 252);
}`,
  },
  light: {
    base: `:root:root {
  --anti-flash-white: #EBEBEB;
  --background-primary: #121019;
  --background-secondary: #16141f;
  --background-secondary-alt: #16141f;
  --bar-gradient-end: transparent;
  --bar-gradient-mid: #5AFF15;
  --bar-gradient-start: transparent;
  --bases-cards-background: #121019;
  --bases-embed-border-radius: 3px;
  --bases-table-cell-background-active: #121019;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8B80F9;
  --bases-table-container-border-radius: 3px;
  --bases-table-header-background: #121019;
  --bases-table-summary-background: #121019;
  --blockquote-border-color: #8B80F9;
  --blur-background: color-mix(in srgb, #121019 65%, transparent) linear-gradient(#121019, color-mix(in srgb, #121019 65%, transparent));
  --bright-green: #5AFF15;
  --callout-radius: 3px;
  --canvas-background: #121019;
  --canvas-controls-radius: 3px;
  --caret-color: #FCFCFC;
  --checkbox-border-color: #7C809B;
  --checkbox-border-color-hover: #5AFF15;
  --checkbox-color: #8B80F9;
  --checkbox-color-hover: #5AFF15;
  --checkbox-marker-color: #FCFCFC;
  --checkbox-radius: 3px;
  --checklist-done-color: #7C809B;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 3px;
  --code-builtin-color: #8B80F9;
  --code-comment-color: #7C809B;
  --code-function-color: #5AFF15;
  --code-normal: #FCFCFC;
  --code-operator-color: #5AFF15;
  --code-radius: 3px;
  --code-string-color: #19D8D5;
  --code-text-size: 0.9em;
  --code-variable-color: #FCFCFC;
  --codeblock-background: #242032;
  --codeblock-color: #FCFCFC;
  --collapse-icon-color-collapsed: #5AFF15;
  --cool-gray: #7C809B;
  --dark: var(--text-normal);
  --dark-purple: #242032;
  --dark-purple-light: #413a58;
  --darkgray: var(--text-normal);
  --divider-color: #413a58;
  --divider-color-hover: #8B80F9;
  --embed-border-start: 2px solid #8B80F9;
  --file-header-background: #121019;
  --file-header-background-focused: #121019;
  --file-line-width: 750px;
  --file-title-color: #FCFCFC;
  --find-flashing: #5AFF15;
  --flair-color: #FCFCFC;
  --folder-filter: invert(30%) sepia(99%) saturate(1210%) hue-rotate(51deg) brightness(120%) contrast(100%);
  --folder-title-color: #FCFCFC;
  --folly: #FF3366;
  --footnote-radius: 3px;
  --french-gray: #D1D2DC;
  --gold: rgb(253, 233, 9);
  --graph-node-focused: #5AFF15;
  --graph-text: #FCFCFC;
  --gray: var(--text-normal);
  --h1-color: #8B80F9;
  --h1-gradient-end: transparent;
  --h1-gradient-mid: #8B80F9;
  --h1-gradient-start: transparent;
  --h2-color: #8B80F9;
  --h2-gradient-end: transparent;
  --h2-gradient-start: #8B80F9;
  --h3-color: #8B80F9;
  --h4-color: #8B80F9;
  --h5-color: #8B80F9;
  --h6-color: #8B80F9;
  --highlight-background-color: #5AFF15;
  --highlight-text-color: #242032;
  --highlight-text-shadow: #FCFCFC;
  --icon-color-active: #5AFF15;
  --icon-color-focused: #FCFCFC;
  --inline-code-background: #242032;
  --inline-code-color: #5AFF15;
  --inline-title-color: #8B80F9;
  --interactive-accent: #8B80F9;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-width: 750px;
  --link-color: #5AFF15;
  --link-ext-color: #8B80F9;
  --link-external-color: #5AFF15;
  --link-int-color: #19D8D5;
  --link-text-color: #FCFCFC;
  --link-text-color-hover: #8B80F9;
  --link-text-shadow: #16141f;
  --link-unresolved-color: #5AFF15;
  --link-url-text-color: #8B80F9;
  --list-marker-color: #FCFCFC;
  --list-marker-color-collapsed: #5AFF15;
  --list-marker-color-hover: #5AFF15;
  --menu-background: #16141f;
  --metadata-input-text-color: #FCFCFC;
  --mint: #13C4A3;
  --modal-background: #121019;
  --nav-heading-color: #FCFCFC;
  --nav-heading-color-hover: #FCFCFC;
  --nav-item-color-active: #FCFCFC;
  --nav-item-color-highlighted: #5AFF15;
  --nav-item-color-hover: #FCFCFC;
  --nav-item-color-selected: #FCFCFC;
  --nav-item-radius: 3px;
  --nav-tag-radius: 3px;
  --pdf-background: #121019;
  --pdf-page-background: #121019;
  --pdf-sidebar-background: #121019;
  --pill-color-hover: #FCFCFC;
  --pill-color-remove-hover: #5AFF15;
  --progress-bar-color: #8B80F9;
  --prompt-background: #121019;
  --quote-background: #242032;
  --radius-s: 3px;
  --raised-background: color-mix(in srgb, #121019 65%, transparent) linear-gradient(#121019, color-mix(in srgb, #121019 65%, transparent));
  --raisin-black: #16141f;
  --ribbon-background: #16141f;
  --ribbon-background-collapsed: #121019;
  --rich-black: #121019;
  --robin-egg-blue: #19D8D5;
  --search-result-background: #8B80F9;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #FCFCFC;
  --status-bar-background: #16141f;
  --status-bar-border-color: #413a58;
  --strong: #19D8D5;
  --suggestion-background: #121019;
  --tab-background-active: #121019;
  --tab-container-background: #16141f;
  --tab-divider-color: #413a58;
  --tab-outline-color: #413a58;
  --tab-radius: 3px;
  --tab-switcher-background: #16141f;
  --tab-switcher-menubar-background: linear-gradient(to top, #16141f, transparent);
  --tab-text-color-focused-active-current: #FCFCFC;
  --tab-text-color-focused-highlighted: #5AFF15;
  --table-drag-handle-background-active: #8B80F9;
  --table-header-color: #FCFCFC;
  --table-selection-border-color: #8B80F9;
  --tag-color: #5AFF15;
  --tag-color-hover: #5AFF15;
  --tags-background: #242032;
  --tags-color: #19D8D5;
  --tertiary: var(--text-accent);
  --text-accent: #5AFF15;
  --text-header: #8B80F9;
  --text-normal: #FCFCFC;
  --text-selection: #A69EFA;
  --titlebar-background: #16141f;
  --titlebar-background-focused: #16141f;
  --titlebar-text-color-focused: #FCFCFC;
  --tropical-indigo: #8B80F9;
  --tropical-indigo-light: #A69EFA;
  --underline-line-color: #5AFF15;
  --underline-line-thickness: 0.15em;
  --underline-text-color: #FCFCFC;
  --vault-profile-color: #FCFCFC;
  --vault-profile-color-hover: #FCFCFC;
  --white: #FCFCFC;
  --white-smoke: #F5F5F5;
  --ylmn-blue: #375BA9;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 20, 31);
  color: rgb(252, 252, 252);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(18, 16, 25);
  color: rgb(252, 252, 252);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 20, 31);
  color: rgb(252, 252, 252);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 58, 88);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 20, 31);
  border-left-color: rgb(65, 58, 88);
  color: rgb(252, 252, 252);
}

body div#quartz-root {
  background-color: rgb(18, 16, 25);
  color: rgb(252, 252, 252);
}`,
    typography: `body .page article p > b, b {
  color: rgb(25, 216, 213);
  outline: rgb(25, 216, 213) none 0px;
  text-decoration: rgb(25, 216, 213);
  text-decoration-color: rgb(25, 216, 213);
}

body .page article p > em, em {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body .page article p > i, i {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body .page article p > strong, strong {
  color: rgb(25, 216, 213);
  outline: rgb(25, 216, 213) none 0px;
  text-decoration: rgb(25, 216, 213);
  text-decoration-color: rgb(25, 216, 213);
}

body .text-highlight {
  background-color: rgb(90, 255, 21);
  color: rgb(36, 32, 50);
  outline: rgb(36, 32, 50) none 0px;
  text-decoration: rgb(36, 32, 50);
  text-decoration-color: rgb(36, 32, 50);
}

body del {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: line-through rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}`,
    links: `body a.external, footer a {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body a.internal.broken {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}`,
    lists: `body dd {
  color: rgb(252, 252, 252);
}

body dt {
  color: rgb(252, 252, 252);
}

body ol > li {
  color: rgb(252, 252, 252);
}

body ol.overflow {
  background-color: rgb(18, 16, 25);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body ul > li {
  color: rgb(252, 252, 252);
}

body ul.overflow {
  background-color: rgb(18, 16, 25);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(36, 32, 50);
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body table {
  color: rgb(252, 252, 252);
  margin-left: 243.391px;
  margin-right: 243.391px;
}

body td {
  color: rgb(252, 252, 252);
}

body th {
  color: rgb(252, 252, 252);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

body pre > code > [data-line] {
  border-left-color: rgb(90, 255, 21);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(90, 255, 21);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(90, 255, 21);
  border-left-color: rgb(90, 255, 21);
  border-right-color: rgb(90, 255, 21);
  border-top-color: rgb(90, 255, 21);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  background-color: rgb(36, 32, 50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body figcaption {
  color: rgb(252, 252, 252);
}

body figure {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body img {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body video {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

body .transclude {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(139, 128, 249);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body .transclude-inner {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(139, 128, 249);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(124, 128, 155);
  text-decoration: rgb(124, 128, 155);
  text-decoration-color: rgb(124, 128, 155);
}

body input[type=checkbox] {
  border-bottom-color: rgb(124, 128, 155);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(124, 128, 155);
  border-right-color: rgb(124, 128, 155);
  border-top-color: rgb(124, 128, 155);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='*'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='-'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='/'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='>'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='?'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='I'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='S'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='b'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='c'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='d'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='f'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='i'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='k'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='l'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='p'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='u'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body li.task-list-item[data-task='w'] {
  color: rgb(252, 252, 252);
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space {
  background-color: rgb(18, 16, 25);
}

body .search > .search-container > .search-space > * {
  color: rgb(252, 252, 252);
  outline: rgb(252, 252, 252) none 0px;
  text-decoration: rgb(252, 252, 252);
  text-decoration-color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 20, 31);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}

body a.internal.tag-link::before {
  color: rgb(90, 255, 21);
}

body h1 {
  color: rgb(139, 128, 249);
}

body h2 {
  color: rgb(139, 128, 249);
}

body h2.page-title, h2.page-title a {
  color: rgb(139, 128, 249);
}

body h3 {
  color: rgb(139, 128, 249);
}

body h4 {
  color: rgb(139, 128, 249);
}

body h5 {
  color: rgb(139, 128, 249);
}

body h6 {
  color: rgb(139, 128, 249);
}

body hr {
  border-bottom-color: rgb(65, 58, 88);
  border-left-color: rgb(65, 58, 88);
  border-right-color: rgb(65, 58, 88);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body ::-webkit-scrollbar {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(18, 16, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 16, 25);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(252, 252, 252);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(252, 252, 252);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    footer: `body footer {
  background-color: rgb(22, 20, 31);
  border-bottom-color: rgb(65, 58, 88);
  border-left-color: rgb(65, 58, 88);
  border-right-color: rgb(65, 58, 88);
  border-top-color: rgb(65, 58, 88);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(252, 252, 252);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(252, 252, 252);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body li.section-li > .section .meta {
  color: rgb(252, 252, 252);
}

body ul.section-ul {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
  color: rgb(252, 252, 252);
}

body .navigation-progress {
  background-color: rgb(22, 20, 31);
}

body .page-header h2.page-title {
  color: rgb(252, 252, 252);
}

body abbr {
  color: rgb(252, 252, 252);
  text-decoration: underline dotted rgb(252, 252, 252);
}

body details {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(252, 252, 252);
  border-right-color: rgb(252, 252, 252);
  border-top-color: rgb(252, 252, 252);
}

body sub {
  color: rgb(252, 252, 252);
}

body summary {
  color: rgb(252, 252, 252);
}

body sup {
  color: rgb(252, 252, 252);
}`,
  },
};
