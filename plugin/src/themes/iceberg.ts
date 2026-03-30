import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "iceberg", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-block-cursor: #c6c8d1 !important;
  --background-modifier-error: #e27878 !important;
  --background-modifier-error-rgb: 226, 120, 120 !important;
  --background-modifier-success: #b4be82 !important;
  --background-primary: #161821 !important;
  --background-primary-alt: #0f1117 !important;
  --background-secondary: #1e2132 !important;
  --background-secondary-alt: #0f1117 !important;
  --background-tag: #6b7089 !important;
  --background-tag-hover: #81859c !important;
  --bases-cards-background: #161821 !important;
  --bases-cards-cover-background: #0f1117 !important;
  --bases-group-heading-property-color: #6b7089 !important;
  --bases-table-cell-background-active: #161821 !important;
  --bases-table-cell-background-disabled: #0f1117 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #84a0c6 !important;
  --bases-table-group-background: #0f1117 !important;
  --bases-table-header-background: #161821 !important;
  --bases-table-header-color: #6b7089 !important;
  --bases-table-summary-background: #161821 !important;
  --black: #1e2132 !important;
  --blockquote-border-color: #84a0c6 !important;
  --blue: #84a0c6 !important;
  --brightBlack: #6b7089 !important;
  --brightWhite: #d2d4de !important;
  --canvas-background: #161821 !important;
  --canvas-card-label-color: #6b7089 !important;
  --caret-color: #c6c8d1 !important;
  --checkbox-border-color: #6b7089 !important;
  --checkbox-border-color-hover: #6b7089 !important;
  --checkbox-color: #84a0c6 !important;
  --checkbox-color-hover: #a0b6d3 !important;
  --checkbox-marker-color: #161821 !important;
  --checklist-done-color: #6b7089 !important;
  --code-background: #0f1117 !important;
  --code-comment: #6b7089 !important;
  --code-normal: #c6c8d1 !important;
  --code-punctuation: #6b7089 !important;
  --collapse-icon-color: #6b7089 !important;
  --collapse-icon-color-collapsed: #e2a478 !important;
  --dark: #c6c8d1 !important;
  --darkgray: #c6c8d1 !important;
  --divider-color-hover: #84a0c6 !important;
  --embed-border-start: 2px solid #84a0c6 !important;
  --file-header-background: #161821 !important;
  --file-header-background-focused: #161821 !important;
  --flair-color: #c6c8d1 !important;
  --font-family-editor: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif !important;
  --font-family-preview: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif !important;
  --footnote-id-color: #6b7089 !important;
  --footnote-id-color-no-occurrences: #6b7089 !important;
  --formating-scale-factor: 0.85 !important;
  --graph-node: #6b7089 !important;
  --graph-node-focused: #e2a478 !important;
  --graph-node-unresolved: #6b7089 !important;
  --graph-text: #c6c8d1 !important;
  --gray: #6b7089 !important;
  --green: #b4be82 !important;
  --heading-formatting: #6b7089 !important;
  --highlight: #e2a47880 !important;
  --icon-color: #6b7089 !important;
  --icon-color-active: #e2a478 !important;
  --icon-color-focused: #c6c8d1 !important;
  --icon-color-hover: #6b7089 !important;
  --input-date-separator: #6b7089 !important;
  --input-placeholder-color: #6b7089 !important;
  --interactive-accent: #84a0c6 !important;
  --interactive-accent-hover: #a0b6d3 !important;
  --interactive-accent-rgb: 132, 160, 198 !important;
  --interactive-success: #b4be82 !important;
  --lblue: #89b8c2 !important;
  --light: #161821 !important;
  --lightBlue: #a0b6d3 !important;
  --lightOrange: #e9bb9a !important;
  --lightgray: #1e2132 !important;
  --link-color: #e2a478 !important;
  --link-color-hover: #e9bb9a !important;
  --link-external-color: #e2a478 !important;
  --link-external-color-hover: #e9bb9a !important;
  --link-unresolved-color: #e2a478 !important;
  --list-marker-color: #6b7089 !important;
  --list-marker-color-collapsed: #e2a478 !important;
  --list-marker-color-hover: #6b7089 !important;
  --menu-background: #1e2132 !important;
  --metadata-input-text-color: #c6c8d1 !important;
  --metadata-label-text-color: #6b7089 !important;
  --metadata-label-text-color-hover: #6b7089 !important;
  --modal-background: #161821 !important;
  --nav-collapse-icon-color: #6b7089 !important;
  --nav-collapse-icon-color-collapsed: #6b7089 !important;
  --nav-heading-color: #c6c8d1 !important;
  --nav-heading-color-collapsed: #6b7089 !important;
  --nav-heading-color-collapsed-hover: #6b7089 !important;
  --nav-heading-color-hover: #c6c8d1 !important;
  --nav-item-color: #6b7089 !important;
  --nav-item-color-active: #c6c8d1 !important;
  --nav-item-color-highlighted: #e2a478 !important;
  --nav-item-color-hover: #c6c8d1 !important;
  --nav-item-color-selected: #c6c8d1 !important;
  --nav-tag-color: #6b7089 !important;
  --nav-tag-color-active: #6b7089 !important;
  --nav-tag-color-hover: #6b7089 !important;
  --orange: #e2a478 !important;
  --pdf-background: #161821 !important;
  --pdf-page-background: #161821 !important;
  --pdf-sidebar-background: #161821 !important;
  --pill-color: #6b7089 !important;
  --pill-color-hover: #c6c8d1 !important;
  --pill-color-remove: #6b7089 !important;
  --pill-color-remove-hover: #e2a478 !important;
  --prompt-background: #161821 !important;
  --purple: #a093c7 !important;
  --red: #e27878 !important;
  --ribbon-background: #1e2132 !important;
  --ribbon-background-collapsed: #161821 !important;
  --search-clear-button-color: #6b7089 !important;
  --search-icon-color: #6b7089 !important;
  --search-result-background: #161821 !important;
  --secondary: #e2a478 !important;
  --setting-group-heading-color: #c6c8d1 !important;
  --setting-items-background: #0f1117 !important;
  --status-bar-background: #1e2132 !important;
  --status-bar-text-color: #6b7089 !important;
  --suggestion-background: #161821 !important;
  --tab-background-active: #161821 !important;
  --tab-container-background: #1e2132 !important;
  --tab-switcher-background: #1e2132 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e2132, transparent) !important;
  --tab-text-color: #6b7089 !important;
  --tab-text-color-active: #6b7089 !important;
  --tab-text-color-focused: #6b7089 !important;
  --tab-text-color-focused-active: #6b7089 !important;
  --tab-text-color-focused-active-current: #c6c8d1 !important;
  --tab-text-color-focused-highlighted: #e2a478 !important;
  --table-drag-handle-background-active: #84a0c6 !important;
  --table-drag-handle-color: #6b7089 !important;
  --table-drag-handle-color-active: #1e2132 !important;
  --table-header-color: #c6c8d1 !important;
  --table-selection-border-color: #84a0c6 !important;
  --tag-color: #e2a478 !important;
  --tag-color-hover: #e2a478 !important;
  --tertiary: #e9bb9a !important;
  --text-accent: #e2a478 !important;
  --text-accent-hover: #e9bb9a !important;
  --text-error: #e27878 !important;
  --text-faint: #6b7089 !important;
  --text-highlight-bg: #e2a47880 !important;
  --text-inline-code: #84a0c6 !important;
  --text-muted: #6b7089 !important;
  --text-normal: #c6c8d1 !important;
  --text-on-accent: #1e2132 !important;
  --text-selection: #89b8c2 !important;
  --text-strong: #d2d4de !important;
  --text-tag: #1e2132 !important;
  --textHighlight: #e2a47880 !important;
  --titlebar-background: #1e2132 !important;
  --titlebar-background-focused: #0f1117 !important;
  --titlebar-text-color: #6b7089 !important;
  --titlebar-text-color-focused: #c6c8d1 !important;
  --vault-profile-color: #c6c8d1 !important;
  --vault-profile-color-hover: #c6c8d1 !important;
  --white: #c6c8d1 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(22, 24, 33);
  color: rgb(198, 200, 209);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 33, 50);
  color: rgb(198, 200, 209);
}

html body div#quartz-root {
  background-color: rgb(22, 24, 33);
  color: rgb(198, 200, 209);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body .page article p > em, html em {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body .page article p > i, html i {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body .page article p > strong, html strong {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body .text-highlight {
  background-color: rgba(226, 164, 120, 0.5);
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body del {
  color: rgb(198, 200, 209);
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body p {
  color: rgb(107, 112, 137);
  outline: rgb(107, 112, 137) none 0px;
  text-decoration-color: rgb(107, 112, 137);
}`,
    links: `html body a.external, html footer a {
  color: rgb(132, 160, 198);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(132, 160, 198) none 0px;
  text-decoration-color: rgb(132, 160, 198);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 164, 120);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(226, 164, 120) none 0px;
  text-decoration-color: rgb(226, 164, 120);
}

html body a.internal.broken {
  color: rgb(226, 164, 120);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(226, 164, 120) none 0px;
}`,
    lists: `html body dd {
  color: rgb(198, 200, 209);
}

html body dt {
  color: rgb(198, 200, 209);
}

html body ol > li {
  color: rgb(198, 200, 209);
}

html body ol.overflow {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body ul > li {
  color: rgb(198, 200, 209);
}

html body ul.overflow {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(132, 160, 198);
}

html body blockquote {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body table {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  width: 195.062px;
}

html body td {
  color: rgb(198, 200, 209);
}

html body th {
  color: rgb(198, 200, 209);
}`,
    code: `html body code {
  border-bottom-color: rgb(132, 160, 198);
  border-left-color: rgb(132, 160, 198);
  border-right-color: rgb(132, 160, 198);
  border-top-color: rgb(132, 160, 198);
  color: rgb(132, 160, 198);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 17, 23);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 17, 23);
  color: rgb(198, 200, 209);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(15, 17, 23);
}

html body pre:has(> code) {
  background-color: rgb(15, 17, 23);
}`,
    images: `html body audio {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body figcaption {
  color: rgb(198, 200, 209);
}

html body figure {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body img {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body video {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
}

html body .footnotes {
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body .transclude {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(132, 160, 198);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body .transclude-inner {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(132, 160, 198);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(107, 112, 137);
  text-decoration-color: rgb(107, 112, 137);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(198, 200, 209);
  text-decoration-color: rgb(198, 200, 209);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(22, 24, 33);
}`,
    search: `html body .search > .search-button {
  color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space {
  background-color: rgb(22, 24, 33);
}

html body .search > .search-container > .search-space > * {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
  outline: rgb(198, 200, 209) none 0px;
  text-decoration-color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(198, 200, 209);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 33, 50);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(198, 200, 209);
}

html body a.internal.tag-link::before {
  color: rgb(226, 164, 120);
}

html body h1 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h2 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h3 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h4 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h5 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body h6 {
  color: rgb(198, 200, 209);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}

html body ::-webkit-scrollbar-track {
  background: rgb(22, 24, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 24, 33);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(107, 112, 137);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(107, 112, 137);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}`,
    footer: `html body footer {
  background-color: rgb(30, 33, 50);
  color: rgb(107, 112, 137);
}

html body footer ul li a {
  color: rgb(107, 112, 137);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(198, 200, 209);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(107, 112, 137);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(107, 112, 137);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body li.section-li > .section .meta {
  color: rgb(107, 112, 137);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(107, 112, 137);
}

html body ul.section-ul {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

html body .darkmode svg {
  color: rgb(107, 112, 137);
  stroke: rgb(107, 112, 137);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

html body .breadcrumb-element p {
  color: rgb(107, 112, 137);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body .metadata {
  color: rgb(107, 112, 137);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
}

html body .navigation-progress {
  background-color: rgb(30, 33, 50);
}

html body .page-header h2.page-title {
  color: rgb(198, 200, 209);
}

html body abbr {
  color: rgb(198, 200, 209);
}

html body details {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body input[type=text] {
  border-bottom-color: rgb(107, 112, 137);
  border-left-color: rgb(107, 112, 137);
  border-right-color: rgb(107, 112, 137);
  border-top-color: rgb(107, 112, 137);
  color: rgb(107, 112, 137);
}

html body kbd {
  background-color: rgb(15, 17, 23);
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
  color: rgb(198, 200, 209);
}

html body progress {
  border-bottom-color: rgb(198, 200, 209);
  border-left-color: rgb(198, 200, 209);
  border-right-color: rgb(198, 200, 209);
  border-top-color: rgb(198, 200, 209);
}

html body sub {
  color: rgb(198, 200, 209);
}

html body summary {
  color: rgb(198, 200, 209);
}

html body sup {
  color: rgb(198, 200, 209);
}`,
  },
  light: {},
};
