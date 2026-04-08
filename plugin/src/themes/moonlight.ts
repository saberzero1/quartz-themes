import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "moonlight",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-accent: #000 !important;
  --background-modifier-border: #333 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: #202020 !important;
  --background-primary-alt: #1a1a1a !important;
  --background-secondary: #161616 !important;
  --background-secondary-alt: #080808 !important;
  --bases-cards-background: #202020 !important;
  --bases-cards-cover-background: #1a1a1a !important;
  --bases-cards-shadow: 0 0 0 1px #333 !important;
  --bases-embed-border-color: #333 !important;
  --bases-group-heading-property-color: #888 !important;
  --bases-table-border-color: #333 !important;
  --bases-table-cell-background-active: #202020 !important;
  --bases-table-cell-background-disabled: #1a1a1a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5c73f2 !important;
  --bases-table-group-background: #1a1a1a !important;
  --bases-table-header-background: #202020 !important;
  --bases-table-header-color: #888 !important;
  --bases-table-summary-background: #202020 !important;
  --blockquote-border-color: #5c73f2 !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --canvas-background: #202020 !important;
  --canvas-card-label-color: #555 !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: #555 !important;
  --checkbox-border-color-hover: #888 !important;
  --checkbox-color: #5c73f2 !important;
  --checkbox-color-hover: #5c73f2 !important;
  --checkbox-marker-color: #202020 !important;
  --checklist-done-color: #888 !important;
  --code-background: #1a1a1a !important;
  --code-border-color: #333 !important;
  --code-comment: #555 !important;
  --code-normal: #dcddde !important;
  --code-punctuation: #888 !important;
  --collapse-icon-color: #555 !important;
  --collapse-icon-color-collapsed: #5c73f2 !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --divider-color: #333 !important;
  --divider-color-hover: #5c73f2 !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333 !important;
  --embed-border-start: 2px solid #5c73f2 !important;
  --file-header-background: #202020 !important;
  --file-header-background-focused: #202020 !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #dcddde !important;
  --footnote-divider-color: #333 !important;
  --footnote-id-color: #888 !important;
  --footnote-id-color-no-occurrences: #555 !important;
  --graph-node: #888 !important;
  --graph-node-focused: #5c73f2 !important;
  --graph-node-unresolved: #555 !important;
  --graph-text: #dcddde !important;
  --gray: #888 !important;
  --heading-formatting: #555 !important;
  --highlight: #5cd6f296 !important;
  --hr-color: #333 !important;
  --icon-color: #888 !important;
  --icon-color-active: #5c73f2 !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #888 !important;
  --input-date-separator: #555 !important;
  --input-placeholder-color: #555 !important;
  --interactive-accent: #5c73f2 !important;
  --interactive-accent-hover: #5c73f2 !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --light: #202020 !important;
  --lightgray: #161616 !important;
  --link-color: #5c73f2 !important;
  --link-color-hover: #5c73f2 !important;
  --link-external-color: #5c73f2 !important;
  --link-external-color-hover: #5c73f2 !important;
  --link-unresolved-color: #5c73f2 !important;
  --list-marker-color: #555 !important;
  --list-marker-color-collapsed: #5c73f2 !important;
  --list-marker-color-hover: #888 !important;
  --menu-background: #161616 !important;
  --metadata-border-color: #333 !important;
  --metadata-divider-color: #333 !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-text-color: #888 !important;
  --metadata-label-text-color-hover: #888 !important;
  --modal-background: #202020 !important;
  --nav-collapse-icon-color: #555 !important;
  --nav-collapse-icon-color-collapsed: #555 !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: #555 !important;
  --nav-heading-color-collapsed-hover: #888 !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-color: #888 !important;
  --nav-item-color-active: #dcddde !important;
  --nav-item-color-highlighted: #5c73f2 !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-tag-color: #555 !important;
  --nav-tag-color-active: #888 !important;
  --nav-tag-color-hover: #888 !important;
  --pdf-background: #202020 !important;
  --pdf-page-background: #202020 !important;
  --pdf-shadow: 0 0 0 1px #333 !important;
  --pdf-sidebar-background: #202020 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #333 !important;
  --pill-border-color: #333 !important;
  --pill-color: #888 !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: #555 !important;
  --pill-color-remove-hover: #5c73f2 !important;
  --prompt-background: #202020 !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: #161616 !important;
  --ribbon-background-collapsed: #202020 !important;
  --search-clear-button-color: #888 !important;
  --search-icon-color: #888 !important;
  --search-result-background: #202020 !important;
  --secondary: #5c73f2 !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: #1a1a1a !important;
  --setting-items-border-color: #333 !important;
  --slider-track-background: #333 !important;
  --status-bar-background: #161616 !important;
  --status-bar-border-color: #333 !important;
  --status-bar-text-color: #888 !important;
  --suggestion-background: #202020 !important;
  --tab-background-active: #202020 !important;
  --tab-container-background: #161616 !important;
  --tab-outline-color: #333 !important;
  --tab-switcher-background: #161616 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #161616, transparent) !important;
  --tab-text-color: #555 !important;
  --tab-text-color-active: #888 !important;
  --tab-text-color-focused: #888 !important;
  --tab-text-color-focused-active: #888 !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: #5c73f2 !important;
  --table-add-button-border-color: #333 !important;
  --table-border-color: #333 !important;
  --table-drag-handle-background-active: #5c73f2 !important;
  --table-drag-handle-color: #555 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #333 !important;
  --table-header-color: #dcddde !important;
  --table-selection-border-color: #5c73f2 !important;
  --tag-color: #5c73f2 !important;
  --tag-color-hover: #5c73f2 !important;
  --tertiary: #5c73f2 !important;
  --text-accent: #5c73f2 !important;
  --text-accent-hover: #5c73f2 !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #555 !important;
  --text-highlight-bg: #5cd6f296 !important;
  --text-muted: #888 !important;
  --text-normal: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --textHighlight: #5cd6f296 !important;
  --titlebar-background: #161616 !important;
  --titlebar-background-focused: #080808 !important;
  --titlebar-border-color: #333 !important;
  --titlebar-text-color: #888 !important;
  --titlebar-text-color-focused: #dcddde !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 22);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(32, 32, 32);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(92, 115, 242);
  border-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 22, 22);
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(92, 115, 242);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 22);
  border-left-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 32, 32);
  color: rgb(220, 221, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(92, 214, 242, 0.59);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(92, 115, 242);
  border-color: rgb(92, 115, 242);
}

html[saved-theme="dark"] body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(173, 216, 230);
  outline: rgb(173, 216, 230) none 0px;
  text-decoration-color: rgb(173, 216, 230);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 115, 242);
  outline: rgb(92, 115, 242) none 0px;
  text-decoration-color: rgb(92, 115, 242);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(92, 115, 242);
  outline: rgb(92, 115, 242) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(173, 216, 230);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body th {
  background-color: rgb(92, 115, 242);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(92, 115, 242);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(92, 115, 242);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(92, 115, 242);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(92, 115, 242);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(92, 115, 242);
}

html[saved-theme="dark"] body h1 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h2 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h3 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h4 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h5 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h6 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 221, 222);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 221, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 221, 222);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(85, 85, 85);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(173, 216, 230);
}`,
  },
  light: {
    base: `:root:root {
  --background-accent: #5c73f2 !important;
  --background-modifier-border: #ddd !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #e68787 !important;
  --background-modifier-error-hover: #FF9494 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-form-field: #fff !important;
  --background-modifier-form-field-highlighted: #fff !important;
  --background-modifier-form-field-hover: #fff !important;
  --background-modifier-success: #A4E7C3 !important;
  --background-primary-alt: #f5f6f8 !important;
  --background-secondary: #f2f3f5 !important;
  --background-secondary-alt: #e3e5e8 !important;
  --bases-cards-cover-background: #f5f6f8 !important;
  --bases-cards-shadow: 0 0 0 1px #ddd !important;
  --bases-embed-border-color: #ddd !important;
  --bases-group-heading-property-color: #888888 !important;
  --bases-table-border-color: #ddd !important;
  --bases-table-cell-background-disabled: #f5f6f8 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5c73f2 !important;
  --bases-table-group-background: #f5f6f8 !important;
  --bases-table-header-color: #888888 !important;
  --blockquote-border-color: #5c73f2 !important;
  --canvas-card-label-color: #999999 !important;
  --caret-color: #2e3338 !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #888888 !important;
  --checkbox-color: #5c73f2 !important;
  --checkbox-color-hover: #5c73f2 !important;
  --checklist-done-color: #888888 !important;
  --code-background: #f5f6f8 !important;
  --code-border-color: #ddd !important;
  --code-comment: #999999 !important;
  --code-normal: #2e3338 !important;
  --code-punctuation: #888888 !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #5c73f2 !important;
  --dark: #2e3338 !important;
  --darkgray: #2e3338 !important;
  --divider-color: #ddd !important;
  --divider-color-hover: #5c73f2 !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd !important;
  --embed-border-start: 2px solid #5c73f2 !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: #2e3338 !important;
  --footnote-divider-color: #ddd !important;
  --footnote-id-color: #888888 !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --graph-node: #888888 !important;
  --graph-node-focused: #5c73f2 !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #2e3338 !important;
  --gray: #888888 !important;
  --heading-formatting: #999999 !important;
  --highlight: #5cd6f296 !important;
  --hr-color: #ddd !important;
  --icon-color: #888888 !important;
  --icon-color-active: #5c73f2 !important;
  --icon-color-focused: #2e3338 !important;
  --icon-color-hover: #888888 !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: #5c73f2 !important;
  --interactive-accent-hover: #5c73f2 !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --light: #f5f6f8 !important;
  --lightgray: #f2f3f5 !important;
  --link-color: #5c73f2 !important;
  --link-color-hover: #5c73f2 !important;
  --link-external-color: #5c73f2 !important;
  --link-external-color-hover: #5c73f2 !important;
  --link-unresolved-color: #5c73f2 !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: #5c73f2 !important;
  --list-marker-color-hover: #888888 !important;
  --menu-background: #f2f3f5 !important;
  --metadata-border-color: #ddd !important;
  --metadata-divider-color: #ddd !important;
  --metadata-input-text-color: #2e3338 !important;
  --metadata-label-text-color: #888888 !important;
  --metadata-label-text-color-hover: #888888 !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #2e3338 !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #888888 !important;
  --nav-heading-color-hover: #2e3338 !important;
  --nav-item-color: #888888 !important;
  --nav-item-color-active: #2e3338 !important;
  --nav-item-color-highlighted: #5c73f2 !important;
  --nav-item-color-hover: #2e3338 !important;
  --nav-item-color-selected: #2e3338 !important;
  --nav-tag-color: #999999 !important;
  --nav-tag-color-active: #888888 !important;
  --nav-tag-color-hover: #888888 !important;
  --pill-border-color: #ddd !important;
  --pill-color: #888888 !important;
  --pill-color-hover: #2e3338 !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #5c73f2 !important;
  --ribbon-background: #f2f3f5 !important;
  --search-clear-button-color: #888888 !important;
  --search-icon-color: #888888 !important;
  --secondary: #5c73f2 !important;
  --setting-group-heading-color: #2e3338 !important;
  --setting-items-background: #f5f6f8 !important;
  --setting-items-border-color: #ddd !important;
  --slider-track-background: #ddd !important;
  --status-bar-background: #f2f3f5 !important;
  --status-bar-border-color: #ddd !important;
  --status-bar-text-color: #888888 !important;
  --tab-container-background: #f2f3f5 !important;
  --tab-outline-color: #ddd !important;
  --tab-switcher-background: #f2f3f5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f3f5, transparent) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-active: #888888 !important;
  --tab-text-color-focused: #888888 !important;
  --tab-text-color-focused-active: #888888 !important;
  --tab-text-color-focused-active-current: #2e3338 !important;
  --tab-text-color-focused-highlighted: #5c73f2 !important;
  --table-add-button-border-color: #ddd !important;
  --table-border-color: #ddd !important;
  --table-drag-handle-background-active: #5c73f2 !important;
  --table-drag-handle-color: #999999 !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: #ddd !important;
  --table-header-color: #2e3338 !important;
  --table-selection-border-color: #5c73f2 !important;
  --tag-color: #5c73f2 !important;
  --tag-color-hover: #5c73f2 !important;
  --tertiary: #5c73f2 !important;
  --text-accent: #5c73f2 !important;
  --text-accent-hover: #5c73f2 !important;
  --text-error: #800000 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: #5cd6f296 !important;
  --text-muted: #888888 !important;
  --text-normal: #2e3338 !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(0, 122, 255, 0.15) !important;
  --textHighlight: #5cd6f296 !important;
  --titlebar-background: #f2f3f5 !important;
  --titlebar-background-focused: #e3e5e8 !important;
  --titlebar-border-color: #ddd !important;
  --titlebar-text-color: #888888 !important;
  --titlebar-text-color-focused: #2e3338 !important;
  --vault-profile-color: #2e3338 !important;
  --vault-profile-color-hover: #2e3338 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(92, 115, 242);
  border-color: rgb(221, 221, 221);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(92, 115, 242);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 245);
  border-left-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(46, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(92, 214, 242, 0.59);
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body del {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(92, 115, 242);
  border-color: rgb(92, 115, 242);
}

html[saved-theme="light"] body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(173, 216, 230);
  outline: rgb(173, 216, 230) none 0px;
  text-decoration-color: rgb(173, 216, 230);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 115, 242);
  outline: rgb(92, 115, 242) none 0px;
  text-decoration-color: rgb(92, 115, 242);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(92, 115, 242);
  outline: rgb(92, 115, 242) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body dt {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ol > li {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul > li {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(173, 216, 230);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body table {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body th {
  background-color: rgb(92, 115, 242);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(255, 255, 255);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figcaption {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(92, 115, 242);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(92, 115, 242);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(92, 115, 242);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(92, 115, 242);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(92, 115, 242);
}

html[saved-theme="light"] body h1 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h2 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h4 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h6 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(46, 51, 56);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(46, 51, 56);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(46, 51, 56);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 243, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 246, 248);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sub {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body summary {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(173, 216, 230);
}`,
  },
};
