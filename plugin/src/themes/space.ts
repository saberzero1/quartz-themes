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
    scrollbars: `html body ::-webkit-scrollbar {
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
