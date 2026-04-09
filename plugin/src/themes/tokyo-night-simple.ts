import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tokyo-night-simple",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: #292e42 !important;
  --background-modifier-border: #292e42 !important;
  --background-modifier-hover: #292e42 !important;
  --background-primary: #1a1b26 !important;
  --background-secondary: #16161e !important;
  --background-secondary-alt: #0c0e14 !important;
  --bases-cards-background: #1a1b26 !important;
  --bases-cards-shadow: 0 0 0 1px #292e42 !important;
  --bases-embed-border-color: #292e42 !important;
  --bases-group-heading-property-color: #a9b1d6 !important;
  --bases-table-border-color: #292e42 !important;
  --bases-table-cell-background-active: #1a1b26 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7aa2f7 !important;
  --bases-table-header-background: #1a1b26 !important;
  --bases-table-header-background-hover: #292e42 !important;
  --bases-table-header-color: #a9b1d6 !important;
  --bases-table-summary-background: #1a1b26 !important;
  --bases-table-summary-background-hover: #292e42 !important;
  --blockquote-border-color: #7aa2f7 !important;
  --canvas-background: #1a1b26 !important;
  --canvas-card-label-color: #565f89 !important;
  --caret-color: #c0caf5 !important;
  --checkbox-border-color: #565f89 !important;
  --checkbox-border-color-hover: #a9b1d6 !important;
  --checkbox-color: #7aa2f7 !important;
  --checkbox-color-hover: #7dcfff !important;
  --checkbox-marker-color: #1a1b26 !important;
  --checklist-done-color: #a9b1d6 !important;
  --code-background: #16161e !important;
  --code-border-color: #292e42 !important;
  --code-bracket-background: #292e42 !important;
  --code-comment: #565f89 !important;
  --code-function: #7dcfff !important;
  --code-keyword: #bb9af7 !important;
  --code-normal: #7aa2f7 !important;
  --code-number: #e0af68 !important;
  --code-operator: #f7768e !important;
  --code-punctuation: #a9b1d6 !important;
  --code-string: #9ece6a !important;
  --collapse-icon-color: #565f89 !important;
  --collapse-icon-color-collapsed: #7aa2f7 !important;
  --dark: #c0caf5 !important;
  --darkgray: #c0caf5 !important;
  --divider-color: #292e42 !important;
  --divider-color-hover: #7aa2f7 !important;
  --embed-block-shadow-hover: 0 0 0 1px #292e42, inset 0 0 0 1px #292e42 !important;
  --embed-border-start: 2px solid #7aa2f7 !important;
  --file-header-background: #1a1b26 !important;
  --file-header-background-focused: #1a1b26 !important;
  --flair-color: #c0caf5 !important;
  --footnote-divider-color: #292e42 !important;
  --footnote-id-color: #a9b1d6 !important;
  --footnote-id-color-no-occurrences: #565f89 !important;
  --footnote-input-background-active: #292e42 !important;
  --graph-node: #a9b1d6 !important;
  --graph-node-focused: #7aa2f7 !important;
  --graph-node-unresolved: #565f89 !important;
  --graph-text: #c0caf5 !important;
  --gray: #a9b1d6 !important;
  --heading-formatting: #565f89 !important;
  --highlight: #292e42 !important;
  --hr-color: #292e42 !important;
  --icon-color: #a9b1d6 !important;
  --icon-color-active: #7aa2f7 !important;
  --icon-color-focused: #c0caf5 !important;
  --icon-color-hover: #a9b1d6 !important;
  --input-date-separator: #565f89 !important;
  --input-placeholder-color: #565f89 !important;
  --interactive-accent: #7aa2f7 !important;
  --interactive-accent-hover: #7dcfff !important;
  --interactive-danger: #f7768e !important;
  --interactive-success: #9ece6a !important;
  --interactive-warning: #e0af68 !important;
  --light: #1a1b26 !important;
  --lightgray: #16161e !important;
  --link-color: #7aa2f7 !important;
  --link-color-hover: #7dcfff !important;
  --link-external-color: #7aa2f7 !important;
  --link-external-color-hover: #7dcfff !important;
  --link-unresolved-color: #7aa2f7 !important;
  --list-marker-color: #565f89 !important;
  --list-marker-color-collapsed: #7aa2f7 !important;
  --list-marker-color-hover: #a9b1d6 !important;
  --menu-background: #16161e !important;
  --metadata-border-color: #292e42 !important;
  --metadata-divider-color: #292e42 !important;
  --metadata-input-background-active: #292e42 !important;
  --metadata-input-text-color: #c0caf5 !important;
  --metadata-label-background-active: #292e42 !important;
  --metadata-label-text-color: #a9b1d6 !important;
  --metadata-label-text-color-hover: #a9b1d6 !important;
  --metadata-property-background-active: #292e42 !important;
  --modal-background: #1a1b26 !important;
  --nav-collapse-icon-color: #565f89 !important;
  --nav-collapse-icon-color-collapsed: #565f89 !important;
  --nav-heading-color: #c0caf5 !important;
  --nav-heading-color-collapsed: #565f89 !important;
  --nav-heading-color-collapsed-hover: #a9b1d6 !important;
  --nav-heading-color-hover: #c0caf5 !important;
  --nav-item-background-active: #292e42 !important;
  --nav-item-background-hover: #292e42 !important;
  --nav-item-color: #a9b1d6 !important;
  --nav-item-color-active: #c0caf5 !important;
  --nav-item-color-highlighted: #7aa2f7 !important;
  --nav-item-color-hover: #c0caf5 !important;
  --nav-item-color-selected: #c0caf5 !important;
  --nav-tag-color: #565f89 !important;
  --nav-tag-color-active: #a9b1d6 !important;
  --nav-tag-color-hover: #a9b1d6 !important;
  --pdf-background: #1a1b26 !important;
  --pdf-page-background: #1a1b26 !important;
  --pdf-shadow: 0 0 0 1px #292e42 !important;
  --pdf-sidebar-background: #1a1b26 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #292e42 !important;
  --pill-border-color: #292e42 !important;
  --pill-color: #a9b1d6 !important;
  --pill-color-hover: #c0caf5 !important;
  --pill-color-remove: #565f89 !important;
  --pill-color-remove-hover: #7aa2f7 !important;
  --prompt-background: #1a1b26 !important;
  --ribbon-background: #16161e !important;
  --ribbon-background-collapsed: #1a1b26 !important;
  --scrollbar-thumb-bg: #292e42 !important;
  --search-clear-button-color: #a9b1d6 !important;
  --search-icon-color: #a9b1d6 !important;
  --search-result-background: #1a1b26 !important;
  --secondary: #7aa2f7 !important;
  --setting-group-heading-color: #c0caf5 !important;
  --setting-items-border-color: #292e42 !important;
  --slider-track-background: #292e42 !important;
  --status-bar-background: #16161e !important;
  --status-bar-border-color: #292e42 !important;
  --status-bar-text-color: #a9b1d6 !important;
  --suggestion-background: #1a1b26 !important;
  --tab-background-active: #1a1b26 !important;
  --tab-container-background: #16161e !important;
  --tab-outline-color: #292e42 !important;
  --tab-switcher-background: #16161e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #16161e, transparent) !important;
  --tab-text-color: #565f89 !important;
  --tab-text-color-active: #a9b1d6 !important;
  --tab-text-color-focused: #a9b1d6 !important;
  --tab-text-color-focused-active: #a9b1d6 !important;
  --tab-text-color-focused-active-current: #c0caf5 !important;
  --tab-text-color-focused-highlighted: #7aa2f7 !important;
  --table-add-button-border-color: #292e42 !important;
  --table-border-color: #292e42 !important;
  --table-drag-handle-background-active: #7aa2f7 !important;
  --table-drag-handle-color: #565f89 !important;
  --table-header-border-color: #292e42 !important;
  --table-header-color: #c0caf5 !important;
  --table-selection-border-color: #7aa2f7 !important;
  --tag-color: #7aa2f7 !important;
  --tag-color-hover: #7aa2f7 !important;
  --tertiary: #7dcfff !important;
  --text-accent: #7aa2f7 !important;
  --text-accent-hover: #7dcfff !important;
  --text-faint: #565f89 !important;
  --text-highlight-bg: #292e42 !important;
  --text-link: #7aa2f7 !important;
  --text-link-hover: #7dcfff !important;
  --text-muted: #a9b1d6 !important;
  --text-normal: #c0caf5 !important;
  --text-selection: #364a82 !important;
  --textHighlight: #292e42 !important;
  --titlebar-background: #16161e !important;
  --titlebar-background-focused: #0c0e14 !important;
  --titlebar-border-color: #292e42 !important;
  --titlebar-text-color: #a9b1d6 !important;
  --titlebar-text-color-focused: #c0caf5 !important;
  --vault-profile-color: #c0caf5 !important;
  --vault-profile-color-hover: #c0caf5 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}

html body .bases-table thead th {
  border-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html body .canvas-node {
  border-color: rgb(192, 202, 245);
}

html body .canvas-node-content {
  color: rgb(192, 202, 245);
}

html body .canvas-node-file {
  color: rgb(192, 202, 245);
}

html body .canvas-node-group {
  border-color: rgb(192, 202, 245);
}

html body .canvas-sidebar {
  background-color: rgb(22, 22, 30);
  border-color: rgb(192, 202, 245);
}

html body .note-properties {
  border-color: rgb(41, 46, 66);
}

html body .note-properties-key {
  color: rgb(169, 177, 214);
}

html body .note-properties-row {
  border-color: rgb(169, 177, 214);
}

html body .note-properties-tags {
  color: rgb(122, 162, 247);
}

html body .note-properties-value {
  color: rgb(169, 177, 214);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 46, 66);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 30);
  border-left-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html body div#quartz-root {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body .page article p > em, html em {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body .page article p > i, html i {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body .page article p > strong, html strong {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body .text-highlight {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body h1.article-title {
  color: rgb(192, 202, 245);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(86, 95, 137);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(122, 162, 247);
  border-color: rgb(122, 162, 247);
}

html body p {
  color: rgb(169, 177, 214);
  outline: rgb(169, 177, 214) none 0px;
  text-decoration-color: rgb(169, 177, 214);
}`,
    links: `html body a.external, html footer a {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html body a.internal.broken {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
}`,
    lists: `html body dd {
  color: rgb(192, 202, 245);
}

html body dt {
  color: rgb(192, 202, 245);
}

html body ol > li {
  color: rgb(192, 202, 245);
}

html body ol.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body ul > li {
  color: rgb(192, 202, 245);
}

html body ul.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(86, 95, 137);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body table {
  color: rgb(192, 202, 245);
}

html body td {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html body th {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}`,
    code: `html body code {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html body pre > code > [data-line] {
  border-left-color: rgb(125, 207, 255);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(125, 207, 255);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(125, 207, 255);
  border-left-color: rgb(125, 207, 255);
  border-right-color: rgb(125, 207, 255);
  border-top-color: rgb(125, 207, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}

html body pre:has(> code) {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}`,
    images: `html body audio {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body figcaption {
  color: rgb(192, 202, 245);
}

html body figure {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body img {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body video {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
}

html body .footnotes {
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body .transclude {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body .transclude-inner {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(86, 95, 137);
  border-left-color: rgb(86, 95, 137);
  border-right-color: rgb(86, 95, 137);
  border-top-color: rgb(86, 95, 137);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
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
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 38);
}

html body .search > .search-container > .search-space > * {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 30);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(41, 46, 66);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html body a.internal.tag-link::before {
  color: rgb(122, 162, 247);
}

html body h1 {
  color: rgb(192, 202, 245);
}

html body h2 {
  color: rgb(192, 202, 245);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(192, 202, 245);
}

html body h3 {
  color: rgb(192, 202, 245);
}

html body h4 {
  color: rgb(192, 202, 245);
}

html body h5 {
  color: rgb(192, 202, 245);
}

html body h6 {
  color: rgb(192, 202, 245);
}

html body hr {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 177, 214);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 177, 214);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(192, 202, 245);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}`,
    footer: `html body footer {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(169, 177, 214);
}

html body footer ul li a {
  color: rgb(169, 177, 214);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(192, 202, 245);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 177, 214);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body li.section-li > .section .meta {
  color: rgb(169, 177, 214);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
}

html body ul.section-ul {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html body .darkmode svg {
  color: rgb(169, 177, 214);
  stroke: rgb(169, 177, 214);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html body .breadcrumb-element p {
  color: rgb(86, 95, 137);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body .metadata {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(169, 177, 214);
}

html body .metadata-properties {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html body .navigation-progress {
  background-color: rgb(22, 22, 30);
}

html body .page-header h2.page-title {
  color: rgb(192, 202, 245);
}

html body abbr {
  color: rgb(192, 202, 245);
}

html body details {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body input[type=text] {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html body kbd {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
}

html body progress {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body sub {
  color: rgb(192, 202, 245);
}

html body summary {
  color: rgb(192, 202, 245);
}

html body sup {
  color: rgb(192, 202, 245);
}

html body ul.tags > li {
  color: rgb(122, 162, 247);
}`,
  },
  light: {},
};
