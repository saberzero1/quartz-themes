import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "space",
    modes: ["dark"],
    variations: [],
    fonts: ["bai-jamjuree", "orbitron", "unbounded"],
  },
  dark: {
    base: `:root:root {
  --active-contrast-amount: 10% !important;
  --background-modifier-border: #242b3a !important;
  --background-primary: #181d27 !important;
  --background-primary-alt: #181d27 !important;
  --background-secondary: #181d27 !important;
  --background-secondary-alt: #181d27 !important;
  --bases-cards-background: #181d27 !important;
  --bases-cards-cover-background: #181d27 !important;
  --bases-cards-shadow: 0 0 0 1px #242b3a !important;
  --bases-embed-border-color: #242b3a !important;
  --bases-table-border-color: #242b3a !important;
  --bases-table-cell-background-active: #181d27 !important;
  --bases-table-cell-background-disabled: #181d27 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #db5461 !important;
  --bases-table-group-background: #181d27 !important;
  --bases-table-header-background: #181d27 !important;
  --bases-table-summary-background: #181d27 !important;
  --bg-contrast-amount: 15% !important;
  --blockquote-border-color: #db5461 !important;
  --blue: #4c86a8 !important;
  --blue-faint: #6b9ab6 !important;
  --brown: #806443 !important;
  --canvas-background: #181d27 !important;
  --canvas-card-label-color: #b2b2b8 !important;
  --caret-color: #d8d7df !important;
  --checkbox-border-color: #b2b2b8 !important;
  --checkbox-color: #db5461 !important;
  --checkbox-marker-color: #181d27 !important;
  --code-background: #181d27 !important;
  --code-block: #beb7df !important;
  --code-border-color: #242b3a !important;
  --code-comment: #b2b2b8 !important;
  --code-normal: #d8d7df !important;
  --codeFont: "Bai Jamjuree" !important;
  --collapse-icon-color: #b2b2b8 !important;
  --collapse-icon-color-collapsed: #ffe699 !important;
  --contrast-color: #fff !important;
  --dark: #d8d7df !important;
  --darkgray: #d8d7df !important;
  --default-text-color: #d0d0d0 !important;
  --divider-color: #242b3a !important;
  --divider-color-hover: #db5461 !important;
  --embed-block-shadow-hover: 0 0 0 1px #242b3a, inset 0 0 0 1px #242b3a !important;
  --embed-border-start: 2px solid #db5461 !important;
  --fg-contrast-amount: 40% !important;
  --file-header-background: #181d27 !important;
  --file-header-background-focused: #181d27 !important;
  --flair-color: #d8d7df !important;
  --font-monospace: "Bai Jamjuree" !important;
  --footnote-divider-color: #242b3a !important;
  --footnote-id-color-no-occurrences: #b2b2b8 !important;
  --graph-node-focused: #ffe699 !important;
  --graph-node-unresolved: #b2b2b8 !important;
  --graph-text: #d8d7df !important;
  --gray: #b2b2b8 !important;
  --grey: #c9cad9 !important;
  --h1-color: #beb7df !important;
  --h2-color: #ffd85e !important;
  --h3-color: #ff4f00 !important;
  --h4-color: #4c86a8 !important;
  --h5-color: #806443 !important;
  --h6-color: #c9cad9 !important;
  --heading-formatting: #b2b2b8 !important;
  --highlight: #fff !important;
  --hr-color: #242b3a !important;
  --icon-color-active: #ffe699 !important;
  --icon-color-focused: #d8d7df !important;
  --inline-code: #beb7df !important;
  --inline-title-color: #beb7df !important;
  --input-date-separator: #b2b2b8 !important;
  --input-placeholder-color: #b2b2b8 !important;
  --interactive-accent: #db5461 !important;
  --interactive-accent-rgb: #ffe699 !important;
  --interactive-before: #242b3a !important;
  --light: #181d27 !important;
  --lightgray: #181d27 !important;
  --link-color: #ffe699 !important;
  --link-external-color: #ffe699 !important;
  --link-unresolved-color: #ffe699 !important;
  --list-marker-color: #b2b2b8 !important;
  --list-marker-color-collapsed: #ffe699 !important;
  --medium-contrast-amount: 20% !important;
  --menu-background: #181d27 !important;
  --metadata-border-color: #242b3a !important;
  --metadata-divider-color: #242b3a !important;
  --metadata-input-text-color: #d8d7df !important;
  --modal-background: #181d27 !important;
  --nav-collapse-icon-color: #b2b2b8 !important;
  --nav-collapse-icon-color-collapsed: #b2b2b8 !important;
  --nav-heading-color: #d8d7df !important;
  --nav-heading-color-collapsed: #b2b2b8 !important;
  --nav-heading-color-hover: #d8d7df !important;
  --nav-item-color-active: #d8d7df !important;
  --nav-item-color-highlighted: #ffe699 !important;
  --nav-item-color-hover: #d8d7df !important;
  --nav-item-color-selected: #d8d7df !important;
  --nav-item-weight-hover: bold !important;
  --nav-tag-color: #b2b2b8 !important;
  --orange: #ff4f00 !important;
  --pdf-background: #181d27 !important;
  --pdf-page-background: #181d27 !important;
  --pdf-shadow: 0 0 0 1px #242b3a !important;
  --pdf-sidebar-background: #181d27 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #242b3a !important;
  --periwinkle: #beb7df !important;
  --pill-border-color: #242b3a !important;
  --pill-color-hover: #d8d7df !important;
  --pill-color-remove: #b2b2b8 !important;
  --pill-color-remove-hover: #ffe699 !important;
  --platinum: #d8d7df !important;
  --platinum-faint: #b2b2b8 !important;
  --pre-code: #0f1218 !important;
  --prompt-background: #181d27 !important;
  --red: #db5461 !important;
  --ribbon-background: #181d27 !important;
  --ribbon-background-collapsed: #181d27 !important;
  --search-result-background: #181d27 !important;
  --secondary: #ffe699 !important;
  --setting-group-heading-color: #d8d7df !important;
  --setting-items-background: #181d27 !important;
  --setting-items-border-color: #242b3a !important;
  --slider-track-background: #242b3a !important;
  --space-dark: #0f1218 !important;
  --space-light: #242b3a !important;
  --space-new: #181d27 !important;
  --space-old: #2b3242 !important;
  --space-old-dark: #212531 !important;
  --space-old-light: #3a4358 !important;
  --status-bar-background: #181d27 !important;
  --status-bar-border-color: #242b3a !important;
  --suggestion-background: #181d27 !important;
  --tab-background-active: #181d27 !important;
  --tab-container-background: #181d27 !important;
  --tab-outline-color: #242b3a !important;
  --tab-switcher-background: #181d27 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181d27, transparent) !important;
  --tab-text-color: #b2b2b8 !important;
  --tab-text-color-focused-active-current: #d8d7df !important;
  --tab-text-color-focused-highlighted: #ffe699 !important;
  --table-add-button-border-color: #242b3a !important;
  --table-border-color: #242b3a !important;
  --table-drag-handle-background-active: #db5461 !important;
  --table-drag-handle-color: #b2b2b8 !important;
  --table-header-border-color: #242b3a !important;
  --table-header-color: #d8d7df !important;
  --table-selection-border-color: #db5461 !important;
  --tag-color: #ffe699 !important;
  --tag-color-hover: #ffe699 !important;
  --tertiary: #ffe699 !important;
  --text-a: #4c86a8 !important;
  --text-a-hover: #6b9ab6 !important;
  --text-accent: #ffe699 !important;
  --text-faint: #b2b2b8 !important;
  --text-highlight-bg: #db5461 !important;
  --text-link: #6b9ab6 !important;
  --text-mark: rgba(215, 153, 33, 0.4) !important;
  --text-normal: #d8d7df !important;
  --text-selection: #db5461 !important;
  --text-title-h1: #beb7df !important;
  --text-title-h2: #ffd85e !important;
  --text-title-h3: #ff4f00 !important;
  --text-title-h4: #4c86a8 !important;
  --text-title-h5: #806443 !important;
  --text-title-h6: #c9cad9 !important;
  --textHighlight: #db5461 !important;
  --titlebar-background: #181d27 !important;
  --titlebar-background-focused: #181d27 !important;
  --titlebar-border-color: #242b3a !important;
  --titlebar-text-color-focused: #d8d7df !important;
  --vault-profile-color: #d8d7df !important;
  --vault-profile-color-hover: #d8d7df !important;
  --vim-cursor: #6b9ab6 !important;
  --yellow: #ffd85e !important;
  --yellow-faint: #ffe699 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 29, 39);
  color: rgb(216, 215, 223);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(24, 29, 39);
  color: rgb(216, 215, 223);
}

html body .bases-table thead th {
  border-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

html body .canvas-node {
  border-color: rgb(216, 215, 223);
}

html body .canvas-node-content {
  color: rgb(216, 215, 223);
}

html body .canvas-node-file {
  color: rgb(216, 215, 223);
}

html body .canvas-node-group {
  border-color: rgb(216, 215, 223);
}

html body .canvas-sidebar {
  background-color: rgb(24, 29, 39);
  border-color: rgb(216, 215, 223);
}

html body .note-properties {
  border-color: rgb(36, 43, 58);
}

html body .note-properties-tags {
  color: rgb(255, 230, 153);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 29, 39);
  color: rgb(216, 215, 223);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 43, 58);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 29, 39);
  border-left-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

html body div#quartz-root {
  background-color: rgb(24, 29, 39);
  color: rgb(216, 215, 223);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  outline: rgb(216, 215, 223) none 0px;
  text-decoration-color: rgb(216, 215, 223);
}

html body .page article p > em, html em {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  outline: rgb(216, 215, 223) none 0px;
  text-decoration-color: rgb(216, 215, 223);
}

html body .page article p > i, html i {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  outline: rgb(216, 215, 223) none 0px;
  text-decoration-color: rgb(216, 215, 223);
}

html body .page article p > strong, html strong {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  outline: rgb(216, 215, 223) none 0px;
  text-decoration-color: rgb(216, 215, 223);
}

html body .text-highlight {
  background-color: rgb(219, 84, 97);
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  outline: rgb(216, 215, 223) none 0px;
  text-decoration-color: rgb(216, 215, 223);
}

html body del {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  outline: rgb(216, 215, 223) none 0px;
  text-decoration-color: rgb(216, 215, 223);
}

html body h1.article-title {
  color: rgb(216, 215, 223);
  font-weight: 700;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(178, 178, 184);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(107, 154, 182);
  border-color: rgb(219, 84, 97);
}

html body p {
  font-family: "Bai Jamjuree";
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 230, 153);
  font-family: "Bai Jamjuree";
  outline: rgb(255, 230, 153) none 0px;
  text-decoration-color: rgb(255, 230, 153);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 230, 153);
  font-family: "Bai Jamjuree";
  outline: rgb(255, 230, 153) none 0px;
  text-decoration-color: rgb(255, 230, 153);
}

html body a.internal.broken {
  color: rgb(255, 230, 153);
  font-family: "Bai Jamjuree";
  outline: rgb(255, 230, 153) none 0px;
}`,
    lists: `html body dd {
  color: rgb(216, 215, 223);
}

html body dt {
  color: rgb(216, 215, 223);
}

html body ol > li {
  color: rgb(216, 215, 223);
}

html body ol.overflow {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body ul > li {
  color: rgb(216, 215, 223);
}

html body ul.overflow {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(178, 178, 184);
}

html body blockquote {
  font-family: "Bai Jamjuree";
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body table {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  width: 194.781px;
}

html body td {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

html body th {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

html body thead {
  border-bottom-color: rgb(36, 43, 58);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html body tr {
  border-bottom-color: rgb(36, 43, 58);
}`,
    code: `html body code {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(190, 183, 223);
  border-left-color: rgb(190, 183, 223);
  border-right-color: rgb(190, 183, 223);
  border-top-color: rgb(190, 183, 223);
  color: rgb(190, 183, 223);
  font-family: "Bai Jamjuree";
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
}

html body pre:has(> code) {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
}`,
    images: `html body audio {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body figcaption {
  color: rgb(216, 215, 223);
}

html body figure {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body img {
  border-bottom-color: rgb(190, 183, 223);
  border-left-color: rgb(190, 183, 223);
  border-right-color: rgb(190, 183, 223);
  border-top-color: rgb(190, 183, 223);
}

html body video {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(24, 29, 39);
}

html body .footnotes {
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
}

html body .transclude {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(219, 84, 97);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  margin-left: 10px;
  margin-right: 10px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(107, 154, 182);
  border-left-color: rgb(107, 154, 182);
  border-right-color: rgb(107, 154, 182);
  border-top-color: rgb(107, 154, 182);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
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
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
}

html body .search > .search-container > .search-space {
  background-color: rgb(24, 29, 39);
}

html body .search > .search-container > .search-space > * {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  outline: rgb(216, 215, 223) none 0px;
  text-decoration-color: rgb(216, 215, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 215, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(216, 215, 223);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(219, 84, 97);
  color: rgb(216, 215, 223);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 29, 39);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(219, 84, 97);
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(219, 84, 97);
  color: rgb(216, 215, 223);
}

html body a.internal.tag-link::before {
  color: rgb(255, 230, 153);
}

html body h1 {
  color: rgb(190, 183, 223);
  font-family: "Bai Jamjuree";
}

html body h2 {
  color: rgb(255, 216, 94);
  font-family: "Bai Jamjuree";
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 216, 94);
  font-family: "Bai Jamjuree";
}

html body h3 {
  color: rgb(255, 79, 0);
  font-family: "Bai Jamjuree";
}

html body h4 {
  color: rgb(76, 134, 168);
  font-family: "Bai Jamjuree";
}

html body h5 {
  color: rgb(128, 100, 67);
  font-family: "Bai Jamjuree";
}

html body h6 {
  color: rgb(201, 202, 217);
  font-family: "Bai Jamjuree";
}

html body hr {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}

html body ::-webkit-scrollbar-track {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "Bai Jamjuree";
  font-weight: 700;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "Bai Jamjuree";
  font-weight: 700;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(216, 215, 223);
}

html body li.depth-0 {
  font-weight: 700;
}`,
    footer: `html body footer {
  background-color: rgb(24, 29, 39);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  font-family: "Bai Jamjuree";
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "Bai Jamjuree";
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body li.section-li > .section .meta {
  font-family: "Bai Jamjuree";
}

html body ul.section-ul {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(178, 178, 184);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
}

html body .metadata {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  font-family: "Bai Jamjuree";
}

html body .metadata-properties {
  font-family: "Bai Jamjuree";
}

html body .navigation-progress {
  background-color: rgb(24, 29, 39);
}

html body .page-header h2.page-title {
  color: rgb(216, 215, 223);
}

html body abbr {
  color: rgb(216, 215, 223);
}

html body details {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body kbd {
  background-color: rgb(24, 29, 39);
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
}

html body progress {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

html body sub {
  color: rgb(216, 215, 223);
}

html body summary {
  color: rgb(216, 215, 223);
}

html body sup {
  color: rgb(216, 215, 223);
}

html body ul.tags > li {
  color: rgb(255, 230, 153);
}`,
  },
  light: {},
};
