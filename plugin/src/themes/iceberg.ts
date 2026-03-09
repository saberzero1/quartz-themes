import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "iceberg", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-block-cursor: #c6c8d1;
  --background-modifier-error: #e27878;
  --background-modifier-error-rgb: 226, 120, 120;
  --background-modifier-success: #b4be82;
  --background-primary: #161821;
  --background-primary-alt: #0f1117;
  --background-secondary: #1e2132;
  --background-secondary-alt: #0f1117;
  --background-tag: #6b7089;
  --background-tag-hover: #81859c;
  --bases-cards-background: #161821;
  --bases-cards-cover-background: #0f1117;
  --bases-group-heading-property-color: #6b7089;
  --bases-table-cell-background-active: #161821;
  --bases-table-cell-background-disabled: #0f1117;
  --bases-table-cell-shadow-focus: 0 0 0 2px #84a0c6;
  --bases-table-group-background: #0f1117;
  --bases-table-header-background: #161821;
  --bases-table-header-color: #6b7089;
  --bases-table-summary-background: #161821;
  --black: #1e2132;
  --blockquote-border-color: #84a0c6;
  --blue: #84a0c6;
  --brightBlack: #6b7089;
  --brightWhite: #d2d4de;
  --canvas-background: #161821;
  --canvas-card-label-color: #6b7089;
  --caret-color: #c6c8d1;
  --checkbox-border-color: #6b7089;
  --checkbox-border-color-hover: #6b7089;
  --checkbox-color: #84a0c6;
  --checkbox-color-hover: #a0b6d3;
  --checkbox-marker-color: #161821;
  --checklist-done-color: #6b7089;
  --code-background: #0f1117;
  --code-comment: #6b7089;
  --code-normal: #c6c8d1;
  --code-punctuation: #6b7089;
  --collapse-icon-color: #6b7089;
  --collapse-icon-color-collapsed: #e2a478;
  --divider-color-hover: #84a0c6;
  --embed-border-start: 2px solid #84a0c6;
  --file-header-background: #161821;
  --file-header-background-focused: #161821;
  --flair-color: #c6c8d1;
  --font-family-editor: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  --font-family-preview: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
  --footnote-id-color: #6b7089;
  --footnote-id-color-no-occurrences: #6b7089;
  --formating-scale-factor: 0.85;
  --graph-node: #6b7089;
  --graph-node-focused: #e2a478;
  --graph-node-unresolved: #6b7089;
  --graph-text: #c6c8d1;
  --green: #b4be82;
  --heading-formatting: #6b7089;
  --icon-color: #6b7089;
  --icon-color-active: #e2a478;
  --icon-color-focused: #c6c8d1;
  --icon-color-hover: #6b7089;
  --input-date-separator: #6b7089;
  --input-placeholder-color: #6b7089;
  --interactive-accent: #84a0c6;
  --interactive-accent-hover: #a0b6d3;
  --interactive-accent-rgb: 132, 160, 198;
  --interactive-success: #b4be82;
  --lblue: #89b8c2;
  --lightBlue: #a0b6d3;
  --lightOrange: #e9bb9a;
  --link-color: #e2a478;
  --link-color-hover: #e9bb9a;
  --link-external-color: #e2a478;
  --link-external-color-hover: #e9bb9a;
  --link-unresolved-color: #e2a478;
  --list-marker-color: #6b7089;
  --list-marker-color-collapsed: #e2a478;
  --list-marker-color-hover: #6b7089;
  --menu-background: #1e2132;
  --metadata-input-text-color: #c6c8d1;
  --metadata-label-text-color: #6b7089;
  --metadata-label-text-color-hover: #6b7089;
  --modal-background: #161821;
  --nav-collapse-icon-color: #6b7089;
  --nav-collapse-icon-color-collapsed: #6b7089;
  --nav-heading-color: #c6c8d1;
  --nav-heading-color-collapsed: #6b7089;
  --nav-heading-color-collapsed-hover: #6b7089;
  --nav-heading-color-hover: #c6c8d1;
  --nav-item-color: #6b7089;
  --nav-item-color-active: #c6c8d1;
  --nav-item-color-highlighted: #e2a478;
  --nav-item-color-hover: #c6c8d1;
  --nav-item-color-selected: #c6c8d1;
  --nav-tag-color: #6b7089;
  --nav-tag-color-active: #6b7089;
  --nav-tag-color-hover: #6b7089;
  --orange: #e2a478;
  --pdf-background: #161821;
  --pdf-page-background: #161821;
  --pdf-sidebar-background: #161821;
  --pill-color: #6b7089;
  --pill-color-hover: #c6c8d1;
  --pill-color-remove: #6b7089;
  --pill-color-remove-hover: #e2a478;
  --prompt-background: #161821;
  --purple: #a093c7;
  --red: #e27878;
  --ribbon-background: #1e2132;
  --ribbon-background-collapsed: #161821;
  --search-clear-button-color: #6b7089;
  --search-icon-color: #6b7089;
  --search-result-background: #161821;
  --setting-group-heading-color: #c6c8d1;
  --setting-items-background: #0f1117;
  --status-bar-background: #1e2132;
  --status-bar-text-color: #6b7089;
  --suggestion-background: #161821;
  --tab-background-active: #161821;
  --tab-container-background: #1e2132;
  --tab-switcher-background: #1e2132;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e2132, transparent);
  --tab-text-color: #6b7089;
  --tab-text-color-active: #6b7089;
  --tab-text-color-focused: #6b7089;
  --tab-text-color-focused-active: #6b7089;
  --tab-text-color-focused-active-current: #c6c8d1;
  --tab-text-color-focused-highlighted: #e2a478;
  --table-drag-handle-background-active: #84a0c6;
  --table-drag-handle-color: #6b7089;
  --table-drag-handle-color-active: #1e2132;
  --table-header-color: #c6c8d1;
  --table-selection-border-color: #84a0c6;
  --tag-color: #e2a478;
  --tag-color-hover: #e2a478;
  --text-accent: #e2a478;
  --text-accent-hover: #e9bb9a;
  --text-error: #e27878;
  --text-faint: #6b7089;
  --text-highlight-bg: #e2a47880;
  --text-inline-code: #84a0c6;
  --text-muted: #6b7089;
  --text-normal: #c6c8d1;
  --text-on-accent: #1e2132;
  --text-selection: #89b8c2;
  --text-strong: #d2d4de;
  --text-tag: #1e2132;
  --titlebar-background: #1e2132;
  --titlebar-background-focused: #0f1117;
  --titlebar-text-color: #6b7089;
  --titlebar-text-color-focused: #c6c8d1;
  --vault-profile-color: #c6c8d1;
  --vault-profile-color-hover: #c6c8d1;
  --white: #c6c8d1;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 24, 33);
  color: rgb(198, 200, 209);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

body div#quartz-root {
  background-color: rgb(22, 24, 33);
  color: rgb(198, 200, 209);
}`,
    typography: `body .page article p > b, b {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body .page article p > em, em {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body .page article p > i, i {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body .page article p > strong, strong {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body .text-highlight {
  background-color: rgba(226, 164, 120, 0.5);
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body del {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration: line-through rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body p {
  color: rgb(107, 112, 137);
  outline: rgb(107, 112, 137) none 0px;
  text-decoration: rgb(107, 112, 137);
  text-decoration-color: rgb(107, 112, 137);
}`,
    links: `body a.external, footer a {
  color: rgb(132, 160, 198);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(132, 160, 198) none 0px;
  text-decoration: underline rgb(132, 160, 198);
  text-decoration-color: rgb(132, 160, 198);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 164, 120);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(226, 164, 120) none 0px;
  text-decoration: underline rgb(226, 164, 120);
  text-decoration-color: rgb(226, 164, 120);
}

body a.internal.broken {
  color: rgb(226, 164, 120);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(226, 164, 120) none 0px;
}`,
    lists: `body dd {
  color: rgb(198, 200, 209);
}

body dt {
  color: rgb(198, 200, 209);
}

body ol > li {
  color: rgb(198, 200, 209);
}

body ol.overflow {
  background-color: rgb(22, 24, 33);
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body ul > li {
  color: rgb(198, 200, 209);
}

body ul.overflow {
  background-color: rgb(22, 24, 33);
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(132, 160, 198);
  text-decoration: rgb(132, 160, 198);
}

body blockquote {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body table {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  width: 195.062px;
}

body td {
  color: rgb(198, 200, 209);
}

body th {
  color: rgb(198, 200, 209);
}`,
    code: `body code {
  border-bottom-color: rgb(132, 160, 198);
  border-left-color: rgb(132, 160, 198);
  border-right-color: rgb(132, 160, 198);
  border-top-color: rgb(132, 160, 198);
  color: rgb(132, 160, 198);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 17, 23);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 17, 23);
  color: rgb(198, 200, 209);
}

body pre > code, pre:has(> code) {
  background-color: rgb(15, 17, 23);
}

body pre:has(> code) {
  background-color: rgb(15, 17, 23);
}`,
    images: `body audio {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body figcaption {
  color: rgb(198, 200, 209);
}

body figure {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body img {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body video {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    embeds: `body .file-embed {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
}

body .footnotes {
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

body .transclude {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(132, 160, 198);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body .transclude-inner {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(132, 160, 198);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(107, 112, 137);
  text-decoration: line-through rgb(107, 112, 137);
  text-decoration-color: rgb(107, 112, 137);
}

body input[type=checkbox] {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
}

body li.task-list-item[data-task='!'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='*'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='-'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='/'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='>'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='?'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='I'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='S'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='b'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='c'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='d'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='f'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='i'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='k'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='l'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='p'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='u'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body li.task-list-item[data-task='w'] {
  color: rgb(198, 200, 209);
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}`,
    search: `body .search > .search-button {
  color: rgb(198, 200, 209);
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 24, 33);
}

body .search > .search-container > .search-space > * {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(198, 200, 209) none 0px;
  text-decoration: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 200, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(198, 200, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(198, 200, 209);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 33, 50);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(198, 200, 209);
}

body a.internal.tag-link::before {
  color: rgb(226, 164, 120);
}

body h1 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

body h2 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

body h3 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

body h4 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

body h5 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

body h6 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(107, 112, 137);
  text-decoration: rgb(107, 112, 137);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(107, 112, 137);
  text-decoration: rgb(107, 112, 137);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(107, 112, 137);
  text-decoration: rgb(107, 112, 137);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}`,
    footer: `body footer {
  background-color: rgb(30, 33, 50);
  color: rgb(107, 112, 137);
}

body footer ul li a {
  color: rgb(107, 112, 137);
  text-decoration: rgb(107, 112, 137);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(198, 200, 209);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(107, 112, 137);
  text-decoration: rgb(107, 112, 137);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(107, 112, 137);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body li.section-li > .section .meta {
  color: rgb(107, 112, 137);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(107, 112, 137);
  text-decoration: rgb(107, 112, 137);
}

body ul.section-ul {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

body .darkmode svg {
  color: rgb(107, 112, 137);
  stroke: rgb(107, 112, 137);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

body .breadcrumb-element p {
  color: rgb(107, 112, 137);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

body .metadata {
  color: rgb(107, 112, 137);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

body .navigation-progress {
  background-color: rgb(30, 33, 50);
}

body .page-header h2.page-title {
  color: rgb(198, 200, 209);
}

body abbr {
  color: rgb(198, 200, 209);
  text-decoration: underline dotted rgb(198, 200, 209);
}

body details {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body input[type=text] {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

body kbd {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

body progress {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

body sub {
  color: rgb(198, 200, 209);
}

body summary {
  color: rgb(198, 200, 209);
}

body sup {
  color: rgb(198, 200, 209);
}`,
  },
  light: {},
};
