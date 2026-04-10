import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "theme-that-shall-not-be-named",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #392D15 !important;
  --background-modifier-box-shadow: #252525 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: #000000 !important;
  --background-modifier-form-field-highlighted: #090C0D !important;
  --background-modifier-form-field-hover: #000000 !important;
  --background-modifier-success: #197300 !important;
  --background-primary: #090C0D !important;
  --background-primary-alt: #252525 !important;
  --background-secondary: #0C090D !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #090C0D !important;
  --bases-cards-cover-background: #252525 !important;
  --bases-cards-shadow: 0 0 0 1px #392D15 !important;
  --bases-embed-border-color: #392D15 !important;
  --bases-table-border-color: #392D15 !important;
  --bases-table-cell-background-active: #090C0D !important;
  --bases-table-cell-background-disabled: #252525 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00372A !important;
  --bases-table-group-background: #252525 !important;
  --bases-table-header-background: #090C0D !important;
  --bases-table-summary-background: #090C0D !important;
  --black: #000000 !important;
  --blockquote-border-color: #00372A !important;
  --blur-background: color-mix(in srgb, #575042 65%, transparent) linear-gradient(#575042, color-mix(in srgb, #575042 65%, transparent)) !important;
  --brass-base: #575042 !important;
  --brass-bright: #B7AD97 !important;
  --brass-compliment: #4B505D !important;
  --brass-dark: #3F3624 !important;
  --brass-deep: #392D15 !important;
  --brass-light: #8B806C !important;
  --canvas-background: #090C0D !important;
  --canvas-card-label-color: #666 !important;
  --caret-color: #BBBBBB !important;
  --checkbox-border-color: #666 !important;
  --checkbox-color: #00372A !important;
  --checkbox-color-hover: #090C0D !important;
  --checkbox-marker-color: #090C0D !important;
  --code-background: #252525 !important;
  --code-border-color: #392D15 !important;
  --code-comment: #666 !important;
  --code-normal: #BBBBBB !important;
  --collapse-icon-color: #666 !important;
  --collapse-icon-color-collapsed: #8B806C !important;
  --dark: #BBBBBB !important;
  --darkgray: #BBBBBB !important;
  --divider-color: #392D15 !important;
  --divider-color-hover: #00372A !important;
  --dropdown-background: #575042 !important;
  --dropdown-background-hover: #3F3624 !important;
  --embed-block-shadow-hover: 0 0 0 1px #392D15, inset 0 0 0 1px #392D15 !important;
  --embed-border-start: 2px solid #00372A !important;
  --file-header-background: #090C0D !important;
  --file-header-background-focused: #090C0D !important;
  --flair-background: #575042 !important;
  --flair-color: #BBBBBB !important;
  --footnote-divider-color: #392D15 !important;
  --footnote-id-color-no-occurrences: #666 !important;
  --graph-node-focused: #8B806C !important;
  --graph-node-unresolved: #666 !important;
  --graph-text: #BBBBBB !important;
  --gray: #666 !important;
  --green-base: #00503B !important;
  --green-bright: #227E67 !important;
  --green-compliment: #7B2E00 !important;
  --green-dark: #00372A !important;
  --green-deep: #090C0D !important;
  --green-light: #0F6751 !important;
  --heading-formatting: #666 !important;
  --highlight: rgba(139, 128, 108, 0.4) !important;
  --hr-color: #392D15 !important;
  --icon-color-active: #8B806C !important;
  --icon-color-focused: #BBBBBB !important;
  --input-date-separator: #666 !important;
  --input-placeholder-color: #666 !important;
  --interactive-accent: #00372A !important;
  --interactive-accent-hover: #090C0D !important;
  --interactive-accent-rgb: 97, 97, 97 !important;
  --interactive-hover: #3F3624 !important;
  --interactive-normal: #575042 !important;
  --interactive-success: #197300 !important;
  --light: #090C0D !important;
  --lightgray: #0C090D !important;
  --link-color: #8B806C !important;
  --link-color-hover: #575042 !important;
  --link-external-color: #8B806C !important;
  --link-external-color-hover: #575042 !important;
  --link-unresolved-color: #8B806C !important;
  --list-marker-color: #666 !important;
  --list-marker-color-collapsed: #8B806C !important;
  --menu-background: #0C090D !important;
  --metadata-border-color: #392D15 !important;
  --metadata-divider-color: #392D15 !important;
  --metadata-input-text-color: #BBBBBB !important;
  --modal-background: #090C0D !important;
  --nav-collapse-icon-color: #666 !important;
  --nav-collapse-icon-color-collapsed: #666 !important;
  --nav-heading-color: #BBBBBB !important;
  --nav-heading-color-collapsed: #666 !important;
  --nav-heading-color-hover: #BBBBBB !important;
  --nav-item-color-active: #BBBBBB !important;
  --nav-item-color-highlighted: #8B806C !important;
  --nav-item-color-hover: #BBBBBB !important;
  --nav-item-color-selected: #BBBBBB !important;
  --nav-tag-color: #666 !important;
  --pdf-background: #090C0D !important;
  --pdf-page-background: #090C0D !important;
  --pdf-shadow: 0 0 0 1px #392D15 !important;
  --pdf-sidebar-background: #090C0D !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #392D15 !important;
  --pill-border-color: #392D15 !important;
  --pill-color-hover: #BBBBBB !important;
  --pill-color-remove: #666 !important;
  --pill-color-remove-hover: #8B806C !important;
  --prompt-background: #090C0D !important;
  --purple-base: #3B0050 !important;
  --purple-bright: #66008B !important;
  --purple-compliment: #707700 !important;
  --purple-dark: #22002E !important;
  --purple-deep: #0C090D !important;
  --purple-light: #51006D !important;
  --raised-background: color-mix(in srgb, #575042 65%, transparent) linear-gradient(#575042, color-mix(in srgb, #575042 65%, transparent)) !important;
  --ribbon-background: #0C090D !important;
  --ribbon-background-collapsed: #090C0D !important;
  --scrollbar-active-thumb-bg: rgba(238, 237, 237, 0.2) !important;
  --scrollbar-bg: rgba(238, 237, 237, 0.05) !important;
  --scrollbar-thumb-bg: rgba(238, 237, 237, 0.1) !important;
  --search-result-background: #090C0D !important;
  --secondary: #8B806C !important;
  --setting-group-heading-color: #BBBBBB !important;
  --setting-items-background: #252525 !important;
  --setting-items-border-color: #392D15 !important;
  --silver-base: #909090 !important;
  --silver-bright: #EEEDED !important;
  --silver-compliment: #737373 !important;
  --silver-dark: #616161 !important;
  --silver-deep: #252525 !important;
  --silver-light: #BBBBBB !important;
  --slider-track-background: #392D15 !important;
  --status-bar-background: #0C090D !important;
  --status-bar-border-color: #392D15 !important;
  --suggestion-background: #090C0D !important;
  --tab-background-active: #090C0D !important;
  --tab-container-background: #0C090D !important;
  --tab-outline-color: #392D15 !important;
  --tab-switcher-background: #0C090D !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0C090D, transparent) !important;
  --tab-text-color: #666 !important;
  --tab-text-color-focused-active-current: #BBBBBB !important;
  --tab-text-color-focused-highlighted: #8B806C !important;
  --table-add-button-border-color: #392D15 !important;
  --table-border-color: #392D15 !important;
  --table-drag-handle-background-active: #00372A !important;
  --table-drag-handle-color: #666 !important;
  --table-drag-handle-color-active: #BBBBBB !important;
  --table-header-border-color: #392D15 !important;
  --table-header-color: #BBBBBB !important;
  --table-selection-border-color: #00372A !important;
  --tag-color: #8B806C !important;
  --tag-color-hover: #8B806C !important;
  --tertiary: #575042 !important;
  --text-accent: #8B806C !important;
  --text-accent-hover: #575042 !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #666 !important;
  --text-highlight-bg: rgba(139, 128, 108, 0.4) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: #BBBBBB !important;
  --text-on-accent: #BBBBBB !important;
  --text-selection: rgba(63, 54, 36, 0.99) !important;
  --text-title-h1: #392D15 !important;
  --text-title-h2: #3F3624 !important;
  --text-title-h3: #575042 !important;
  --text-title-h4: #8B806C !important;
  --text-title-h5: #B7AD97 !important;
  --textHighlight: rgba(139, 128, 108, 0.4) !important;
  --titlebar-background: #0C090D !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #392D15 !important;
  --titlebar-text-color-focused: #BBBBBB !important;
  --vault-profile-color: #BBBBBB !important;
  --vault-profile-color-hover: #BBBBBB !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(12, 9, 13);
  color: rgb(187, 187, 187);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(9, 12, 13);
  color: rgb(187, 187, 187);
}

html body .bases-table thead th {
  border-color: rgb(57, 45, 21);
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
  background-color: rgb(12, 9, 13);
  border-color: rgb(187, 187, 187);
}

html body .note-properties {
  border-color: rgb(57, 45, 21);
}

html body .note-properties-tags {
  color: rgb(139, 128, 108);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(12, 9, 13);
  color: rgb(187, 187, 187);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(57, 45, 21);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(12, 9, 13);
  border-left-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}

html body div#quartz-root {
  background-color: rgb(9, 12, 13);
  color: rgb(187, 187, 187);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(102, 0, 139);
  outline: rgb(102, 0, 139) none 0px;
  text-decoration-color: rgb(102, 0, 139);
}

html body .page article p > em, html em {
  color: rgb(34, 126, 103);
  outline: rgb(34, 126, 103) none 0px;
  text-decoration-color: rgb(34, 126, 103);
}

html body .page article p > i, html i {
  color: rgb(34, 126, 103);
  outline: rgb(34, 126, 103) none 0px;
  text-decoration-color: rgb(34, 126, 103);
}

html body .page article p > strong, html strong {
  color: rgb(102, 0, 139);
  outline: rgb(102, 0, 139) none 0px;
  text-decoration-color: rgb(102, 0, 139);
}

html body .text-highlight {
  background-color: rgba(139, 128, 108, 0.4);
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

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 55, 42);
  border-color: rgb(0, 55, 42);
}`,
    links: `html body a.external, html footer a {
  color: rgb(139, 128, 108);
  outline: rgb(139, 128, 108) none 0px;
  text-decoration-color: rgb(139, 128, 108);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(139, 128, 108);
  outline: rgb(139, 128, 108) none 0px;
  text-decoration-color: rgb(139, 128, 108);
}

html body a.internal.broken {
  color: rgb(139, 128, 108);
  outline: rgb(139, 128, 108) none 0px;
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
    blockquotes: `html body blockquote {
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body table {
  color: rgb(187, 187, 187);
}

html body td {
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}

html body th {
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}`,
    code: `html body code {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
}

html body pre:has(> code) {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
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
  background-color: rgb(37, 37, 37);
}

html body .footnotes {
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .transclude {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(0, 55, 42);
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
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 1px;
  margin-right: 4px;
  margin-top: 12px;
  width: 17.3281px;
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
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space {
  background-color: rgb(9, 12, 13);
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
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(63, 54, 36);
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(12, 9, 13);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(63, 54, 36);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(63, 54, 36);
  color: rgb(187, 187, 187);
}

html body a.internal.tag-link::before {
  color: rgb(139, 128, 108);
}

html body h1 {
  color: rgb(57, 45, 21);
}

html body h2 {
  color: rgb(63, 54, 36);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(187, 187, 187);
}

html body h3 {
  color: rgb(87, 80, 66);
}

html body h4 {
  color: rgb(139, 128, 108);
}

html body h5 {
  color: rgb(183, 173, 151);
}

html body h6 {
  color: rgb(187, 187, 187);
}

html body hr {
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}

html body ::-webkit-scrollbar-track {
  background: rgb(9, 12, 13) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 12, 13);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(187, 187, 187);
}`,
    footer: `html body footer {
  background-color: rgb(12, 9, 13);
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
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
    misc: `html body .katex-display {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .metadata {
  border-bottom-color: rgb(57, 45, 21);
  border-left-color: rgb(57, 45, 21);
  border-right-color: rgb(57, 45, 21);
  border-top-color: rgb(57, 45, 21);
}

html body .navigation-progress {
  background-color: rgb(12, 9, 13);
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
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
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
}

html body ul.tags > li {
  background-color: rgb(87, 80, 66);
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(187, 187, 187);
}`,
  },
  light: {},
};
