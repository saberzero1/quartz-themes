import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "mammoth", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #333 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #dd99bb !important;
  --background-modifier-error-hover: #f1a6cc !important;
  --background-modifier-error-rgb: 221, 153, 187 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #bfffbc !important;
  --background-primary: #171b1f !important;
  --background-primary-alt: #20252a !important;
  --background-secondary: #171e24 !important;
  --background-secondary-alt: #242f38 !important;
  --bases-cards-background: #171b1f !important;
  --bases-cards-cover-background: #20252a !important;
  --bases-cards-shadow: 0 0 0 1px #333 !important;
  --bases-embed-border-color: #333 !important;
  --bases-group-heading-property-color: #999 !important;
  --bases-table-border-color: #333 !important;
  --bases-table-cell-background-active: #171b1f !important;
  --bases-table-cell-background-disabled: #20252a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0ad1ed !important;
  --bases-table-group-background: #20252a !important;
  --bases-table-header-background: #171b1f !important;
  --bases-table-header-color: #999 !important;
  --bases-table-summary-background: #171b1f !important;
  --blockquote-border-color: #0ad1ed !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --canvas-background: #171b1f !important;
  --canvas-card-label-color: #666 !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: #666 !important;
  --checkbox-border-color-hover: #999 !important;
  --checkbox-color: #0ad1ed !important;
  --checkbox-color-hover: #64d9e9 !important;
  --checkbox-marker-color: #171b1f !important;
  --checklist-done-color: #999 !important;
  --code-background: #20252a !important;
  --code-border-color: #333 !important;
  --code-comment: #666 !important;
  --code-normal: #dcddde !important;
  --code-punctuation: #999 !important;
  --collapse-icon-color: #666 !important;
  --collapse-icon-color-collapsed: #0ad1ed !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --divider-color: #333 !important;
  --divider-color-hover: #0ad1ed !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333 !important;
  --embed-border-start: 2px solid #0ad1ed !important;
  --english-violet: #544261 !important;
  --file-header-background: #171b1f !important;
  --file-header-background-focused: #171b1f !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #dcddde !important;
  --footnote-divider-color: #333 !important;
  --footnote-id-color: #999 !important;
  --footnote-id-color-no-occurrences: #666 !important;
  --granny-smith-apple: #bfffbc !important;
  --graph-node: #999 !important;
  --graph-node-focused: #0ad1ed !important;
  --graph-node-unresolved: #666 !important;
  --graph-text: #dcddde !important;
  --gray: #999 !important;
  --heading-formatting: #666 !important;
  --highlight: rgba(245, 184, 0, 0.397) !important;
  --hr-color: #333 !important;
  --icon-color: #999 !important;
  --icon-color-active: #0ad1ed !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #999 !important;
  --input-date-separator: #666 !important;
  --input-placeholder-color: #666 !important;
  --interactive-accent: #0ad1ed !important;
  --interactive-accent-hover: #64d9e9 !important;
  --interactive-accent-rgb: 10, 209, 237 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --kobi: #dd99bb !important;
  --kobi-dark: #DC3B8C !important;
  --light: #171b1f !important;
  --lightgray: #171e24 !important;
  --link-color: #0ad1ed !important;
  --link-color-hover: #48e5fa !important;
  --link-external-color: #0ad1ed !important;
  --link-external-color-hover: #48e5fa !important;
  --link-unresolved-color: #0ad1ed !important;
  --list-marker-color: #666 !important;
  --list-marker-color-collapsed: #0ad1ed !important;
  --list-marker-color-hover: #999 !important;
  --menu-background: #171e24 !important;
  --metadata-border-color: #333 !important;
  --metadata-divider-color: #333 !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-text-color: #999 !important;
  --metadata-label-text-color-hover: #999 !important;
  --modal-background: #171b1f !important;
  --nav-collapse-icon-color: #666 !important;
  --nav-collapse-icon-color-collapsed: #666 !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: #666 !important;
  --nav-heading-color-collapsed-hover: #999 !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-color: #999 !important;
  --nav-item-color-active: #dcddde !important;
  --nav-item-color-highlighted: #0ad1ed !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-tag-color: #666 !important;
  --nav-tag-color-active: #999 !important;
  --nav-tag-color-hover: #999 !important;
  --orange-yellow: #f5b700 !important;
  --pdf-background: #171b1f !important;
  --pdf-page-background: #171b1f !important;
  --pdf-shadow: 0 0 0 1px #333 !important;
  --pdf-sidebar-background: #171b1f !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #333 !important;
  --pill-border-color: #333 !important;
  --pill-color: #999 !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: #666 !important;
  --pill-color-remove-hover: #0ad1ed !important;
  --prompt-background: #171b1f !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: #171e24 !important;
  --ribbon-background-collapsed: #171b1f !important;
  --search-clear-button-color: #999 !important;
  --search-icon-color: #999 !important;
  --search-result-background: #171b1f !important;
  --secondary: #0ad1ed !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: #20252a !important;
  --setting-items-border-color: #333 !important;
  --sky-blue-crayola: #0ad1ed !important;
  --slate-gray: #647d90 !important;
  --slider-track-background: #333 !important;
  --status-bar-background: #171e24 !important;
  --status-bar-border-color: #333 !important;
  --status-bar-text-color: #999 !important;
  --suggestion-background: #171b1f !important;
  --tab-background-active: #171b1f !important;
  --tab-container-background: #171e24 !important;
  --tab-outline-color: #333 !important;
  --tab-switcher-background: #171e24 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #171e24, transparent) !important;
  --tab-text-color: #666 !important;
  --tab-text-color-active: #999 !important;
  --tab-text-color-focused: #999 !important;
  --tab-text-color-focused-active: #999 !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: #0ad1ed !important;
  --table-add-button-border-color: #333 !important;
  --table-border-color: #333 !important;
  --table-drag-handle-background-active: #0ad1ed !important;
  --table-drag-handle-color: #666 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #333 !important;
  --table-header-color: #dcddde !important;
  --table-selection-border-color: #0ad1ed !important;
  --tag-color: #0ad1ed !important;
  --tag-color-hover: #0ad1ed !important;
  --tertiary: #48e5fa !important;
  --text-accent: #0ad1ed !important;
  --text-accent-hover: #48e5fa !important;
  --text-error: #dd99bb !important;
  --text-error-hover: #c55d91 !important;
  --text-faint: #666 !important;
  --text-highlight-bg: rgba(245, 184, 0, 0.397) !important;
  --text-highlight-bg-active: rgba(243, 195, 49, 0.459) !important;
  --text-muted: #999 !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(100, 125, 144, 0.99) !important;
  --textHighlight: rgba(245, 184, 0, 0.397) !important;
  --titlebar-background: #171e24 !important;
  --titlebar-background-focused: #242f38 !important;
  --titlebar-border-color: #333 !important;
  --titlebar-text-color: #999 !important;
  --titlebar-text-color-focused: #dcddde !important;
  --todoist-blue: #5297ff !important;
  --todoist-blue-background: rgba(82, 151, 255, 0.1) !important;
  --todoist-green: #25b84c !important;
  --todoist-orange: #ff9a14 !important;
  --todoist-orange-background: rgba(255, 154, 20, 0.1) !important;
  --todoist-red: #ff7066 !important;
  --todoist-red-background: rgba(255, 112, 102, 0.1) !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 30, 36);
  color: rgb(220, 221, 222);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(23, 27, 31);
  color: rgb(220, 221, 222);
}

html body .bases-table thead th {
  border-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html body .canvas-node {
  border-color: rgb(220, 221, 222);
}

html body .canvas-node-content {
  color: rgb(220, 221, 222);
}

html body .canvas-node-file {
  color: rgb(220, 221, 222);
}

html body .canvas-node-group {
  border-color: rgb(220, 221, 222);
}

html body .canvas-sidebar {
  background-color: rgb(23, 30, 36);
  border-color: rgb(220, 221, 222);
}

html body .note-properties {
  border-color: rgb(51, 51, 51);
}

html body .note-properties-key {
  color: rgb(153, 153, 153);
}

html body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html body .note-properties-tags {
  color: rgb(10, 209, 237);
}

html body .note-properties-value {
  color: rgb(153, 153, 153);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 30, 36);
  color: rgb(220, 221, 222);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 30, 36);
  border-left-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html body div#quartz-root {
  background-color: rgb(23, 27, 31);
  color: rgb(220, 221, 222);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .page article p > em, html em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .page article p > i, html i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .page article p > strong, html strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .text-highlight {
  background-color: rgb(221, 153, 187);
  color: rgb(23, 27, 31);
  font-weight: 600;
  outline: rgb(23, 27, 31) none 0px;
  text-decoration-color: rgb(23, 27, 31);
}

html body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body h1.article-title {
  color: rgb(220, 221, 222);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(10, 209, 237);
  border-color: rgb(10, 209, 237);
}

html body p {
  color: rgb(153, 153, 153);
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html body a.external, html footer a {
  color: rgb(10, 209, 237);
  outline: rgb(10, 209, 237) none 0px;
  text-decoration-color: rgb(10, 209, 237);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(10, 209, 237);
  outline: rgb(10, 209, 237) none 0px;
  text-decoration-color: rgb(10, 209, 237);
}

html body a.internal.broken {
  color: rgb(10, 209, 237);
  outline: rgb(10, 209, 237) none 0px;
}`,
    lists: `html body dd {
  color: rgb(220, 221, 222);
}

html body dt {
  color: rgb(220, 221, 222);
}

html body ol > li {
  color: rgb(220, 221, 222);
}

html body ol.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body ul > li {
  color: rgb(220, 221, 222);
}

html body ul.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body table {
  color: rgb(220, 221, 222);
}

html body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}`,
    code: `html body code {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html body pre:has(> code) {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `html body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body figcaption {
  color: rgb(220, 221, 222);
}

html body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(10, 209, 237);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  border-bottom-width: 2px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 2px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 2px;
  border-top-color: rgb(220, 221, 222);
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  border-top-width: 2px;
  margin-left: -6px;
  margin-right: 5px;
  padding-bottom: 5px;
  width: 18px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through;
  text-decoration-color: rgb(191, 255, 188);
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

html body .search > .search-container > .search-space {
  background-color: rgb(23, 27, 31);
}

html body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(23, 27, 31);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(23, 27, 31);
  border-left-color: rgb(23, 27, 31);
  border-right-color: rgb(23, 27, 31);
  border-top-color: rgb(23, 27, 31);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(23, 27, 31);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(245, 183, 0);
  color: rgb(23, 27, 31);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 30, 36);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(245, 183, 0);
  border-bottom-color: rgb(23, 27, 31);
  border-left-color: rgb(23, 27, 31);
  border-right-color: rgb(23, 27, 31);
  border-top-color: rgb(23, 27, 31);
  color: rgb(23, 27, 31);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(245, 183, 0);
  color: rgb(23, 27, 31);
}

html body a.internal.tag-link::before {
  color: rgb(10, 209, 237);
}

html body h1 {
  color: rgb(220, 221, 222);
}

html body h2 {
  color: rgb(191, 255, 188);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(220, 221, 222);
}

html body h3 {
  color: rgb(245, 183, 0);
}

html body h4 {
  color: rgb(221, 153, 187);
}

html body h5 {
  color: rgb(100, 125, 144);
}

html body h6 {
  color: rgb(153, 153, 153);
}

html body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}

html body ::-webkit-scrollbar-track {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(220, 221, 222);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `html body footer {
  background-color: rgb(23, 30, 36);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(153, 153, 153);
}

html body footer ul li a {
  color: rgb(153, 153, 153);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(220, 221, 222);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
}

html body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(153, 153, 153);
}

html body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html body .navigation-progress {
  background-color: rgb(23, 30, 36);
}

html body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

html body abbr {
  color: rgb(220, 221, 222);
}

html body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html body kbd {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html body sub {
  color: rgb(220, 221, 222);
}

html body summary {
  color: rgb(220, 221, 222);
}

html body sup {
  color: rgb(220, 221, 222);
}

html body ul.tags > li {
  color: rgb(10, 209, 237);
}`,
  },
  light: {},
};
