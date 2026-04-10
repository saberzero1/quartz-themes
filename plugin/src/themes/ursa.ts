import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "ursa", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #92a1a17a !important;
  --background-primary: #1E2022 !important;
  --background-primary-alt: #1E2022 !important;
  --background-secondary: #1E2022 !important;
  --background-secondary-alt: #2E3236 !important;
  --bases-cards-background: #1E2022 !important;
  --bases-cards-cover-background: #1E2022 !important;
  --bases-cards-shadow: 0 0 0 1px #92a1a17a !important;
  --bases-embed-border-color: #92a1a17a !important;
  --bases-table-border-color: #92a1a17a !important;
  --bases-table-cell-background-active: #1E2022 !important;
  --bases-table-cell-background-disabled: #1E2022 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92A1A1 !important;
  --bases-table-group-background: #1E2022 !important;
  --bases-table-header-background: #1E2022 !important;
  --bases-table-summary-background: #1E2022 !important;
  --blockquote-border: #4AA8FB !important;
  --blockquote-border-color: #92A1A1 !important;
  --canvas-background: #1E2022 !important;
  --canvas-card-label-color: #B2B2B2 !important;
  --caret-color: #DDDDDD !important;
  --checkbox-border-color: #B2B2B2 !important;
  --checkbox-color: #92A1A1 !important;
  --checkbox-marker-color: #1E2022 !important;
  --code-background: #1E2022 !important;
  --code-border-color: #92a1a17a !important;
  --code-comment: #B2B2B2 !important;
  --code-normal: #DDDDDD !important;
  --collapse-icon-color: #B2B2B2 !important;
  --dark: #DDDDDD !important;
  --darkgray: #DDDDDD !important;
  --divider-color: #92a1a17a !important;
  --divider-color-hover: #92A1A1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #92a1a17a, inset 0 0 0 1px #92a1a17a !important;
  --embed-border-start: 2px solid #92A1A1 !important;
  --file-header-background: #1E2022 !important;
  --file-header-background-focused: #1E2022 !important;
  --flair-color: #DDDDDD !important;
  --font-family-editor: Avenir, "Avenir Next" !important;
  --font-family-preview: Avenir, "Avenir Next" !important;
  --footnote-divider-color: #92a1a17a !important;
  --footnote-id-color-no-occurrences: #B2B2B2 !important;
  --graph-node-unresolved: #B2B2B2 !important;
  --graph-text: #DDDDDD !important;
  --gray: #B2B2B2 !important;
  --heading-formatting: #B2B2B2 !important;
  --hr-color: #92a1a17a !important;
  --icon-color-focused: #DDDDDD !important;
  --input-date-separator: #B2B2B2 !important;
  --input-placeholder-color: #B2B2B2 !important;
  --interactive-accent: #92A1A1 !important;
  --interactive-accent-rgb: #6BCAFB !important;
  --interactive-before: #5e6565 !important;
  --light: #1E2022 !important;
  --lightgray: #1E2022 !important;
  --list-marker-color: #B2B2B2 !important;
  --menu-background: #1E2022 !important;
  --metadata-border-color: #92a1a17a !important;
  --metadata-divider-color: #92a1a17a !important;
  --metadata-input-text-color: #DDDDDD !important;
  --modal-background: #1E2022 !important;
  --nav-collapse-icon-color: #B2B2B2 !important;
  --nav-collapse-icon-color-collapsed: #B2B2B2 !important;
  --nav-heading-color: #DDDDDD !important;
  --nav-heading-color-collapsed: #B2B2B2 !important;
  --nav-heading-color-hover: #DDDDDD !important;
  --nav-item-color-active: #DDDDDD !important;
  --nav-item-color-hover: #DDDDDD !important;
  --nav-item-color-selected: #DDDDDD !important;
  --nav-tag-color: #B2B2B2 !important;
  --pdf-background: #1E2022 !important;
  --pdf-page-background: #1E2022 !important;
  --pdf-shadow: 0 0 0 1px #92a1a17a !important;
  --pdf-sidebar-background: #1E2022 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #92a1a17a !important;
  --pill-border-color: #92a1a17a !important;
  --pill-color-hover: #DDDDDD !important;
  --pill-color-remove: #B2B2B2 !important;
  --pre-code: #252525 !important;
  --prompt-background: #1E2022 !important;
  --ribbon-background: #1E2022 !important;
  --ribbon-background-collapsed: #1E2022 !important;
  --search-result-background: #1E2022 !important;
  --secondary: #92A1A1 !important;
  --setting-group-heading-color: #DDDDDD !important;
  --setting-items-background: #1E2022 !important;
  --setting-items-border-color: #92a1a17a !important;
  --slider-track-background: #92a1a17a !important;
  --status-bar-background: #1E2022 !important;
  --status-bar-border-color: #92a1a17a !important;
  --suggestion-background: #1E2022 !important;
  --tab-background-active: #1E2022 !important;
  --tab-container-background: #1E2022 !important;
  --tab-outline-color: #92a1a17a !important;
  --tab-switcher-background: #1E2022 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1E2022, transparent) !important;
  --tab-text-color: #B2B2B2 !important;
  --tab-text-color-focused-active-current: #DDDDDD !important;
  --table-add-button-border-color: #92a1a17a !important;
  --table-border-color: #92a1a17a !important;
  --table-drag-handle-background-active: #92A1A1 !important;
  --table-drag-handle-color: #B2B2B2 !important;
  --table-header-border-color: #92a1a17a !important;
  --table-header-color: #DDDDDD !important;
  --table-selection-border-color: #92A1A1 !important;
  --tag-background: #A7B0B3 !important;
  --text-a: #6BCAFB !important;
  --text-a-hover: #6BCAFB !important;
  --text-faint: #B2B2B2 !important;
  --text-link: #B4B4B4 !important;
  --text-mark: #263D92 !important;
  --text-normal: #DDDDDD !important;
  --text-title-h1: #CBDBE5 !important;
  --text-title-h2: #CBDBE5 !important;
  --text-title-h3: #CBDBE5 !important;
  --text-title-h4: #CBDBE5 !important;
  --text-title-h5: #CBDBE5 !important;
  --titlebar-background: #1E2022 !important;
  --titlebar-background-focused: #2E3236 !important;
  --titlebar-border-color: #92a1a17a !important;
  --titlebar-text-color-focused: #DDDDDD !important;
  --vault-profile-color: #DDDDDD !important;
  --vault-profile-color-hover: #DDDDDD !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
  font-weight: 800;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(30, 32, 34);
  border-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(167, 176, 179);
  border-radius: 26.25px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 32, 34);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  font-weight: 900;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  font-weight: 900;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(38, 61, 146);
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body del {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(178, 178, 178);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(146, 161, 161);
  border-color: rgb(146, 161, 161);
}

html[saved-theme="dark"] body p {
  font-family: Avenir, "Avenir Next";
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(107, 202, 251);
  font-family: Avenir, "Avenir Next";
  outline: rgb(107, 202, 251) none 0px;
  text-decoration-color: rgb(107, 202, 251);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(107, 202, 251);
  font-family: Avenir, "Avenir Next";
  outline: rgb(107, 202, 251) none 0px;
  text-decoration-color: rgb(107, 202, 251);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(107, 202, 251);
  font-family: Avenir, "Avenir Next";
  outline: rgb(107, 202, 251) none 0px;
  text-decoration-color: rgb(107, 202, 251);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="dark"] body dt {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(107, 202, 251);
}

html[saved-theme="dark"] body blockquote {
  font-family: Avenir, "Avenir Next";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body table {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  width: 180.766px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
  font-weight: 800;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(221, 221, 221);
  font-size: 15px;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(30, 32, 34);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(167, 176, 179);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(167, 176, 179);
  border-right-color: rgb(167, 176, 179);
  border-top-color: rgb(167, 176, 179);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 0px;
  width: 16.6562px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
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
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 32, 34);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(37, 37, 37);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 32, 34);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(37, 37, 37);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(167, 176, 179);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html[saved-theme="dark"] body h1 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body h2 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body h3 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body h4 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body h5 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body h6 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Avenir, "Avenir Next";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(221, 221, 221);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir, "Avenir Next";
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 178, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 178, 178);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(178, 178, 178);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(30, 32, 34);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body abbr {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body sub {
  color: rgb(221, 221, 221);
  font-size: 12.5px;
}

html[saved-theme="dark"] body summary {
  color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body sup {
  color: rgb(221, 221, 221);
  font-size: 12.5px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(167, 176, 179);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(37, 37, 37);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #92a1a17a !important;
  --background-primary: #FBFBFB !important;
  --background-primary-alt: #FBFBFB !important;
  --background-secondary: #FBFBFB !important;
  --background-secondary-alt: #2E3236 !important;
  --bases-cards-background: #FBFBFB !important;
  --bases-cards-cover-background: #FBFBFB !important;
  --bases-cards-shadow: 0 0 0 1px #92a1a17a !important;
  --bases-embed-border-color: #92a1a17a !important;
  --bases-table-border-color: #92a1a17a !important;
  --bases-table-cell-background-active: #FBFBFB !important;
  --bases-table-cell-background-disabled: #FBFBFB !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92A1A1 !important;
  --bases-table-group-background: #FBFBFB !important;
  --bases-table-header-background: #FBFBFB !important;
  --bases-table-summary-background: #FBFBFB !important;
  --blockquote-border: #D6555F !important;
  --blockquote-border-color: #92A1A1 !important;
  --blur-background: color-mix(in srgb, #FBFBFB 65%, transparent) linear-gradient(#FBFBFB, color-mix(in srgb, #FBFBFB 65%, transparent)) !important;
  --canvas-background: #FBFBFB !important;
  --canvas-card-label-color: #B2B2B2 !important;
  --caret-color: #333 !important;
  --checkbox-border-color: #B2B2B2 !important;
  --checkbox-color: #92A1A1 !important;
  --checkbox-marker-color: #FBFBFB !important;
  --code-background: #FBFBFB !important;
  --code-border-color: #92a1a17a !important;
  --code-comment: #B2B2B2 !important;
  --code-normal: #333 !important;
  --collapse-icon-color: #B2B2B2 !important;
  --dark: #333 !important;
  --darkgray: #333 !important;
  --divider-color: #92a1a17a !important;
  --divider-color-hover: #92A1A1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #92a1a17a, inset 0 0 0 1px #92a1a17a !important;
  --embed-border-start: 2px solid #92A1A1 !important;
  --file-header-background: #FBFBFB !important;
  --file-header-background-focused: #FBFBFB !important;
  --flair-color: #333 !important;
  --font-family-editor: Avenir, "Avenir Next" !important;
  --font-family-preview: Avenir, "Avenir Next" !important;
  --footnote-divider-color: #92a1a17a !important;
  --footnote-id-color-no-occurrences: #B2B2B2 !important;
  --graph-node-unresolved: #B2B2B2 !important;
  --graph-text: #333 !important;
  --gray: #B2B2B2 !important;
  --heading-formatting: #B2B2B2 !important;
  --hr-color: #92a1a17a !important;
  --icon-color-focused: #333 !important;
  --input-date-separator: #B2B2B2 !important;
  --input-placeholder-color: #B2B2B2 !important;
  --interactive-accent: #92A1A1 !important;
  --interactive-accent-rgb: #db4d52 !important;
  --interactive-before: #5e6565 !important;
  --light: #FBFBFB !important;
  --lightgray: #FBFBFB !important;
  --list-marker-color: #B2B2B2 !important;
  --menu-background: #FBFBFB !important;
  --metadata-border-color: #92a1a17a !important;
  --metadata-divider-color: #92a1a17a !important;
  --metadata-input-text-color: #333 !important;
  --modal-background: #FBFBFB !important;
  --nav-collapse-icon-color: #B2B2B2 !important;
  --nav-collapse-icon-color-collapsed: #B2B2B2 !important;
  --nav-heading-color: #333 !important;
  --nav-heading-color-collapsed: #B2B2B2 !important;
  --nav-heading-color-hover: #333 !important;
  --nav-item-color-active: #333 !important;
  --nav-item-color-hover: #333 !important;
  --nav-item-color-selected: #333 !important;
  --nav-tag-color: #B2B2B2 !important;
  --pdf-background: #FBFBFB !important;
  --pdf-page-background: #FBFBFB !important;
  --pdf-sidebar-background: #FBFBFB !important;
  --pill-border-color: #92a1a17a !important;
  --pill-color-hover: #333 !important;
  --pill-color-remove: #B2B2B2 !important;
  --pre-code: #FFFFFF !important;
  --prompt-background: #FBFBFB !important;
  --raised-background: color-mix(in srgb, #FBFBFB 65%, transparent) linear-gradient(#FBFBFB, color-mix(in srgb, #FBFBFB 65%, transparent)) !important;
  --ribbon-background: #FBFBFB !important;
  --ribbon-background-collapsed: #FBFBFB !important;
  --search-result-background: #FBFBFB !important;
  --secondary: #92A1A1 !important;
  --setting-group-heading-color: #333 !important;
  --setting-items-background: #FBFBFB !important;
  --setting-items-border-color: #92a1a17a !important;
  --slider-track-background: #92a1a17a !important;
  --status-bar-background: #FBFBFB !important;
  --status-bar-border-color: #92a1a17a !important;
  --suggestion-background: #FBFBFB !important;
  --tab-background-active: #FBFBFB !important;
  --tab-container-background: #FBFBFB !important;
  --tab-outline-color: #92a1a17a !important;
  --tab-switcher-background: #FBFBFB !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #FBFBFB, transparent) !important;
  --tab-text-color: #B2B2B2 !important;
  --tab-text-color-focused-active-current: #333 !important;
  --table-add-button-border-color: #92a1a17a !important;
  --table-border-color: #92a1a17a !important;
  --table-drag-handle-background-active: #92A1A1 !important;
  --table-drag-handle-color: #B2B2B2 !important;
  --table-header-border-color: #92a1a17a !important;
  --table-header-color: #333 !important;
  --table-selection-border-color: #92A1A1 !important;
  --tag-background: #A7B0B3 !important;
  --text-a: #db4d52 !important;
  --text-a-hover: #db4d52 !important;
  --text-faint: #B2B2B2 !important;
  --text-link: #B4B4B4 !important;
  --text-mark: #D3FFA4 !important;
  --text-normal: #333 !important;
  --text-title-h1: #333 !important;
  --text-title-h2: #333 !important;
  --text-title-h3: #333 !important;
  --text-title-h4: #333 !important;
  --text-title-h5: #333 !important;
  --titlebar-background: #FBFBFB !important;
  --titlebar-background-focused: #2E3236 !important;
  --titlebar-border-color: #92a1a17a !important;
  --titlebar-text-color-focused: #333 !important;
  --vault-profile-color: #333 !important;
  --vault-profile-color-hover: #333 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
  font-weight: 800;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(251, 251, 251);
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(167, 176, 179);
  border-radius: 26.25px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(251, 251, 251);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  font-weight: 900;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  font-weight: 900;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(211, 255, 164);
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(178, 178, 178);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(146, 161, 161);
  border-color: rgb(146, 161, 161);
}

html[saved-theme="light"] body p {
  font-family: Avenir, "Avenir Next";
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(219, 77, 82);
  font-family: Avenir, "Avenir Next";
  outline: rgb(219, 77, 82) none 0px;
  text-decoration-color: rgb(219, 77, 82);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(219, 77, 82);
  font-family: Avenir, "Avenir Next";
  outline: rgb(219, 77, 82) none 0px;
  text-decoration-color: rgb(219, 77, 82);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(219, 77, 82);
  font-family: Avenir, "Avenir Next";
  outline: rgb(219, 77, 82) none 0px;
  text-decoration-color: rgb(219, 77, 82);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="light"] body dt {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(219, 77, 82);
}

html[saved-theme="light"] body blockquote {
  font-family: Avenir, "Avenir Next";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body table {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  width: 180.766px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
  font-weight: 800;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 51, 51);
  font-size: 15px;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(251, 251, 251);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(167, 176, 179);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(167, 176, 179);
  border-right-color: rgb(167, 176, 179);
  border-top-color: rgb(167, 176, 179);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 0px;
  width: 16.6562px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
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
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(251, 251, 251);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(251, 251, 251);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(167, 176, 179);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html[saved-theme="light"] body h1 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body h2 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body h3 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body h4 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body h5 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body h6 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Avenir, "Avenir Next";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(51, 51, 51);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir, "Avenir Next";
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 178, 178);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 178, 178);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(178, 178, 178);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body .metadata-properties {
  font-family: Avenir, "Avenir Next";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(251, 251, 251);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body abbr {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 51, 51);
  font-size: 12.5px;
}

html[saved-theme="light"] body summary {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 51, 51);
  font-size: 12.5px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(167, 176, 179);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(255, 255, 255);
}`,
  },
};
