import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "hipstersmoothie", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #3c383b !important;
  --background-modifier-border-focus: #7a0041 !important;
  --background-modifier-cover: #181517 !important;
  --background-modifier-form-field: #0c0c0c !important;
  --background-modifier-form-field-highlighted: #181517 !important;
  --background-modifier-form-field-hover: #0c0c0c !important;
  --background-modifier-message: #3c383b !important;
  --background-primary: #0c0c0c !important;
  --background-primary-alt: #181517 !important;
  --background-secondary: #0c0c0c !important;
  --background-secondary-alt: #181517 !important;
  --bases-cards-background: #0c0c0c !important;
  --bases-cards-cover-background: #181517 !important;
  --bases-cards-shadow: 0 0 0 1px #3c383b !important;
  --bases-embed-border-color: #3c383b !important;
  --bases-group-heading-property-color: #706a69 !important;
  --bases-table-border-color: #3c383b !important;
  --bases-table-cell-background-active: #0c0c0c !important;
  --bases-table-cell-background-disabled: #181517 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #7a0041 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #870048 !important;
  --bases-table-group-background: #181517 !important;
  --bases-table-header-background: #0c0c0c !important;
  --bases-table-header-color: #706a69 !important;
  --bases-table-row-background-hover: #2e2c2f !important;
  --bases-table-summary-background: #0c0c0c !important;
  --blockquote-border-color: #870048 !important;
  --canvas-background: #0c0c0c !important;
  --canvas-card-label-color: #9f9697 !important;
  --caret-color: #dcd5d4 !important;
  --checkbox-border-color: #9f9697 !important;
  --checkbox-border-color-hover: #706a69 !important;
  --checkbox-color: #870048 !important;
  --checkbox-color-hover: #ab4d7f !important;
  --checkbox-marker-color: #0c0c0c !important;
  --checklist-done-color: #706a69 !important;
  --code-background: #181517 !important;
  --code-border-color: #3c383b !important;
  --code-comment: #9f9697 !important;
  --code-normal: #dcd5d4 !important;
  --code-punctuation: #706a69 !important;
  --collapse-icon-color: #9f9697 !important;
  --collapse-icon-color-collapsed: #ab4d7f !important;
  --dark: #dcd5d4 !important;
  --darkgray: #dcd5d4 !important;
  --divider-color: #2e2c2f !important;
  --divider-color-hover: #870048 !important;
  --dropdown-background-hover: #3d0020 !important;
  --embed-block-shadow-hover: 0 0 0 1px #3c383b, inset 0 0 0 1px #3c383b !important;
  --embed-border-start: 2px solid #870048 !important;
  --file-header-background: #0c0c0c !important;
  --file-header-background-focused: #0c0c0c !important;
  --flair-color: #dcd5d4 !important;
  --footnote-divider-color: #3c383b !important;
  --footnote-id-color: #706a69 !important;
  --footnote-id-color-no-occurrences: #9f9697 !important;
  --graph-node: #706a69 !important;
  --graph-node-focused: #ab4d7f !important;
  --graph-node-unresolved: #9f9697 !important;
  --graph-text: #dcd5d4 !important;
  --gray: #706a69 !important;
  --gray-100: #f6f7f5 !important;
  --gray-1000: #181517 !important;
  --gray-1100: #0c0c0c !important;
  --gray-200: #eaeae7 !important;
  --gray-300: #dcd5d4 !important;
  --gray-400: #c2bdbd !important;
  --gray-500: #9f9697 !important;
  --gray-600: #706a69 !important;
  --gray-700: #534e4f !important;
  --gray-800: #3c383b !important;
  --gray-900: #2e2c2f !important;
  --heading-formatting: #9f9697 !important;
  --highlight: #7b5a07 !important;
  --hr-color: #3c383b !important;
  --icon-color: #706a69 !important;
  --icon-color-active: #ab4d7f !important;
  --icon-color-focused: #dcd5d4 !important;
  --icon-color-hover: #706a69 !important;
  --input-date-separator: #9f9697 !important;
  --input-placeholder-color: #9f9697 !important;
  --interactive-accent: #870048 !important;
  --interactive-accent-hover: #ab4d7f !important;
  --interactive-accent-rgb: 135 0
    72 !important;
  --interactive-hover: #3d0020 !important;
  --light: #0c0c0c !important;
  --lightgray: #0c0c0c !important;
  --link-color: #ab4d7f !important;
  --link-color-hover: #ab4d7f !important;
  --link-external-color: #ab4d7f !important;
  --link-external-color-hover: #ab4d7f !important;
  --link-unresolved-color: #ab4d7f !important;
  --list-marker-color: #9f9697 !important;
  --list-marker-color-collapsed: #ab4d7f !important;
  --list-marker-color-hover: #706a69 !important;
  --menu-background: #0c0c0c !important;
  --metadata-border-color: #3c383b !important;
  --metadata-divider-color: #3c383b !important;
  --metadata-input-text-color: #dcd5d4 !important;
  --metadata-label-text-color: #706a69 !important;
  --metadata-label-text-color-hover: #706a69 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #7a0041 !important;
  --modal-background: #0c0c0c !important;
  --nav-collapse-icon-color: #9f9697 !important;
  --nav-collapse-icon-color-collapsed: #9f9697 !important;
  --nav-heading-color: #dcd5d4 !important;
  --nav-heading-color-collapsed: #9f9697 !important;
  --nav-heading-color-collapsed-hover: #706a69 !important;
  --nav-heading-color-hover: #dcd5d4 !important;
  --nav-item-color: #706a69 !important;
  --nav-item-color-active: #dcd5d4 !important;
  --nav-item-color-highlighted: #ab4d7f !important;
  --nav-item-color-hover: #dcd5d4 !important;
  --nav-item-color-selected: #dcd5d4 !important;
  --nav-tag-color: #9f9697 !important;
  --nav-tag-color-active: #706a69 !important;
  --nav-tag-color-hover: #706a69 !important;
  --pdf-background: #0c0c0c !important;
  --pdf-page-background: #0c0c0c !important;
  --pdf-shadow: 0 0 0 1px #3c383b !important;
  --pdf-sidebar-background: #0c0c0c !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #3c383b !important;
  --pill-border-color: #3c383b !important;
  --pill-color: #706a69 !important;
  --pill-color-hover: #dcd5d4 !important;
  --pill-color-remove: #9f9697 !important;
  --pill-color-remove-hover: #ab4d7f !important;
  --primary-100: #f3e6ed !important;
  --primary-200: #e1bfd1 !important;
  --primary-300: #cf99b6 !important;
  --primary-400: #ab4d7f !important;
  --primary-450: #ab4d7f !important;
  --primary-500: #870048 !important;
  --primary-500-B: 72 !important;
  --primary-500-G: 0 !important;
  --primary-500-H: 328 !important;
  --primary-500-L: 26.5 !important;
  --primary-500-R: 135 !important;
  --primary-500-S: 100 !important;
  --primary-600: #7a0041 !important;
  --primary-700: #51002b !important;
  --primary-800: #3d0020 !important;
  --primary-900: #290016 !important;
  --prompt-background: #0c0c0c !important;
  --red-100: #f2b5b6 !important;
  --red-200: #e98485 !important;
  --red-300: #e05354 !important;
  --red-400: #d72223 !important;
  --red-500: #d3090b !important;
  --red-600: #be080a !important;
  --red-700: #940608 !important;
  --red-800: #6a0506 !important;
  --red-900: #3f0303 !important;
  --ribbon-background: #0c0c0c !important;
  --ribbon-background-collapsed: #0c0c0c !important;
  --scrollbar-active-thumb-bg: #51002b !important;
  --search-clear-button-color: #706a69 !important;
  --search-icon-color: #706a69 !important;
  --search-result-background: #0c0c0c !important;
  --secondary: #ab4d7f !important;
  --setting-group-heading-color: #dcd5d4 !important;
  --setting-items-background: #181517 !important;
  --setting-items-border-color: #3c383b !important;
  --slider-track-background: #3c383b !important;
  --status-bar-background: #0c0c0c !important;
  --status-bar-border-color: #2e2c2f !important;
  --status-bar-text-color: #706a69 !important;
  --suggestion-background: #0c0c0c !important;
  --tab-background-active: #0c0c0c !important;
  --tab-container-background: #0c0c0c !important;
  --tab-outline-color: #2e2c2f !important;
  --tab-switcher-background: #0c0c0c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0c0c0c, transparent) !important;
  --tab-text-color: #9f9697 !important;
  --tab-text-color-active: #706a69 !important;
  --tab-text-color-focused: #706a69 !important;
  --tab-text-color-focused-active: #706a69 !important;
  --tab-text-color-focused-active-current: #dcd5d4 !important;
  --tab-text-color-focused-highlighted: #ab4d7f !important;
  --table-add-button-border-color: #3c383b !important;
  --table-border-color: #3c383b !important;
  --table-border-radius: 8px !important;
  --table-drag-handle-background-active: #870048 !important;
  --table-drag-handle-color: #9f9697 !important;
  --table-drag-handle-color-active: #f6f7f5 !important;
  --table-header-background-hover: #3d0020 !important;
  --table-header-border-color: #3c383b !important;
  --table-header-color: #eaeae7 !important;
  --table-row-background-hover: #2e2c2f !important;
  --table-selection-border-color: #870048 !important;
  --tag-color: #ab4d7f !important;
  --tag-color-hover: #ab4d7f !important;
  --tertiary: #ab4d7f !important;
  --text-accent: #ab4d7f !important;
  --text-accent-hover: #ab4d7f !important;
  --text-error: #d72223 !important;
  --text-faint: #9f9697 !important;
  --text-highlight-bg: #7b5a07 !important;
  --text-muted: #706a69 !important;
  --text-muted-rgb: 112, 106, 105 !important;
  --text-normal: #dcd5d4 !important;
  --text-on-accent: #f6f7f5 !important;
  --text-selection: rgba(245, 180, 13, 0.5) !important;
  --textHighlight: #7b5a07 !important;
  --titlebar-background: #0c0c0c !important;
  --titlebar-background-focused: #181517 !important;
  --titlebar-border-color: #3c383b !important;
  --titlebar-text-color: #706a69 !important;
  --titlebar-text-color-focused: #dcd5d4 !important;
  --vault-profile-color: #dcd5d4 !important;
  --vault-profile-color-hover: #dcd5d4 !important;
  --yellow-100: #fce9b6 !important;
  --yellow-200: #fada86 !important;
  --yellow-300: #f8cb56 !important;
  --yellow-400: #f6bc25 !important;
  --yellow-500: #f5b40d !important;
  --yellow-500-B: 13 !important;
  --yellow-500-G: 180 !important;
  --yellow-500-R: 245 !important;
  --yellow-600: #dda20c !important;
  --yellow-700: #ac7e09 !important;
  --yellow-800: #7b5a07 !important;
  --yellow-900: #4a3604 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(12, 12, 12);
  color: rgb(220, 213, 212);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(12, 12, 12);
  color: rgb(220, 213, 212);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(35, 31, 33);
}

html body .bases-table thead th {
  border-color: rgb(234, 234, 231);
  color: rgb(234, 234, 231);
}

html body .canvas-node {
  border-color: rgb(220, 213, 212);
}

html body .canvas-node-content {
  color: rgb(220, 213, 212);
}

html body .canvas-node-file {
  color: rgb(220, 213, 212);
}

html body .canvas-node-group {
  border-color: rgb(220, 213, 212);
}

html body .canvas-sidebar {
  background-color: rgb(12, 12, 12);
  border-color: rgb(220, 213, 212);
}

html body .note-properties {
  border-color: rgb(60, 56, 59);
}

html body .note-properties-key {
  color: rgb(112, 106, 105);
}

html body .note-properties-row {
  border-color: rgb(112, 106, 105);
}

html body .note-properties-tags {
  color: rgb(171, 77, 127);
}

html body .note-properties-value {
  color: rgb(112, 106, 105);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(12, 12, 12);
  color: rgb(220, 213, 212);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(46, 44, 47);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(12, 12, 12);
  border-left-color: rgb(46, 44, 47);
  color: rgb(220, 213, 212);
}

html body div#quartz-root {
  background-color: rgb(12, 12, 12);
  color: rgb(220, 213, 212);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration-color: rgb(220, 213, 212);
}

html body .page article p > em, html em {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration-color: rgb(220, 213, 212);
}

html body .page article p > i, html i {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration-color: rgb(220, 213, 212);
}

html body .page article p > strong, html strong {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration-color: rgb(220, 213, 212);
}

html body .text-highlight {
  background-color: rgb(123, 90, 7);
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration-color: rgb(220, 213, 212);
}

html body del {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration-color: rgb(220, 213, 212);
}

html body h1.article-title {
  color: rgb(220, 213, 212);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(159, 150, 151);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(135, 0, 72);
  border-color: rgb(135, 0, 72);
}

html body p {
  color: rgb(112, 106, 105);
  outline: rgb(112, 106, 105) none 0px;
  text-decoration-color: rgb(112, 106, 105);
}`,
    links: `html body a.external, html footer a {
  color: rgb(221, 162, 12);
  outline: rgb(221, 162, 12) none 0px;
  text-decoration-color: rgb(221, 162, 12);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(171, 77, 127);
  outline: rgb(171, 77, 127) none 0px;
  text-decoration-color: rgb(171, 77, 127);
}

html body a.internal.broken {
  color: rgb(171, 77, 127);
  outline: rgb(171, 77, 127) none 0px;
}`,
    lists: `html body dd {
  color: rgb(220, 213, 212);
}

html body dt {
  color: rgb(220, 213, 212);
}

html body ol > li {
  color: rgb(220, 213, 212);
}

html body ol.overflow {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body ul > li {
  color: rgb(220, 213, 212);
}

html body ul.overflow {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(221, 162, 12);
}

html body blockquote {
  background-color: rgb(24, 21, 23);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(220, 213, 212);
  margin-top: 40px;
  width: 662px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(24, 21, 23);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(35, 31, 33);
}

html body td {
  border-bottom-color: rgb(220, 213, 212);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 213, 212);
  border-left-width: 0px;
  border-right-color: rgb(220, 213, 212);
  border-right-width: 0px;
  border-top-color: rgb(220, 213, 212);
  border-top-width: 0px;
  color: rgb(220, 213, 212);
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
}

html body th {
  border-bottom-color: rgb(234, 234, 231);
  border-bottom-width: 0px;
  border-left-color: rgb(234, 234, 231);
  border-left-width: 0px;
  border-right-color: rgb(234, 234, 231);
  border-right-width: 0px;
  border-top-color: rgb(234, 234, 231);
  border-top-left-radius: 8px;
  border-top-width: 0px;
  color: rgb(234, 234, 231);
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
}

html body thead {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html body tr {
  background-color: rgb(81, 0, 43);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html body code {
  border-bottom-color: rgb(171, 77, 127);
  border-left-color: rgb(171, 77, 127);
  border-right-color: rgb(171, 77, 127);
  border-top-color: rgb(171, 77, 127);
  color: rgb(171, 77, 127);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
  color: rgb(220, 213, 212);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}

html body pre:has(> code) {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}`,
    images: `html body audio {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body figcaption {
  color: rgb(220, 213, 212);
}

html body figure {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body img {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body video {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
}

html body .footnotes {
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

html body .transclude {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(135, 0, 72);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body .transclude-inner {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(159, 150, 151);
  border-left-color: rgb(159, 150, 151);
  border-right-color: rgb(159, 150, 151);
  border-top-color: rgb(159, 150, 151);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
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
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
  color: rgb(220, 213, 212);
}

html body .search > .search-container > .search-space {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}

html body .search > .search-container > .search-space > * {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration-color: rgb(220, 213, 212);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 213, 212);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(220, 213, 212);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(122, 0, 65);
  color: rgb(220, 213, 212);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(12, 12, 12);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(122, 0, 65);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(122, 0, 65);
  color: rgb(220, 213, 212);
}

html body a.internal.tag-link::before {
  color: rgb(171, 77, 127);
}

html body h1 {
  color: rgb(220, 213, 212);
}

html body h2 {
  color: rgb(220, 213, 212);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(220, 213, 212);
}

html body h3 {
  color: rgb(220, 213, 212);
}

html body h4 {
  color: rgb(220, 213, 212);
}

html body h5 {
  color: rgb(220, 213, 212);
}

html body h6 {
  color: rgb(220, 213, 212);
}

html body hr {
  border-bottom-color: rgb(46, 44, 47);
  border-left-color: rgb(46, 44, 47);
  border-right-color: rgb(46, 44, 47);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

html body ::-webkit-scrollbar-track {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(112, 106, 105);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(112, 106, 105);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(220, 213, 212);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}`,
    footer: `html body footer {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(46, 44, 47);
  border-left-color: rgb(46, 44, 47);
  border-right-color: rgb(46, 44, 47);
  border-top-color: rgb(46, 44, 47);
  color: rgb(112, 106, 105);
}

html body footer ul li a {
  color: rgb(112, 106, 105);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(220, 213, 212);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(112, 106, 105);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(112, 106, 105);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body li.section-li > .section .meta {
  color: rgb(112, 106, 105);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(112, 106, 105);
}

html body ul.section-ul {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}

html body .darkmode svg {
  color: rgb(112, 106, 105);
  stroke: rgb(112, 106, 105);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}

html body .breadcrumb-element p {
  color: rgb(159, 150, 151);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

html body .metadata {
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
  color: rgb(112, 106, 105);
}

html body .metadata-properties {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}

html body .navigation-progress {
  background-color: rgb(12, 12, 12);
}

html body .page-header h2.page-title {
  color: rgb(220, 213, 212);
}

html body abbr {
  color: rgb(220, 213, 212);
}

html body details {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body input[type=text] {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}

html body kbd {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

html body progress {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

html body sub {
  color: rgb(220, 213, 212);
}

html body summary {
  color: rgb(220, 213, 212);
}

html body sup {
  color: rgb(220, 213, 212);
}

html body ul.tags > li {
  background-color: rgba(135, 0, 72, 0.18);
  border-bottom-color: rgb(81, 0, 43);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(81, 0, 43);
  border-left-width: 2px;
  border-right-color: rgb(81, 0, 43);
  border-right-width: 2px;
  border-top-color: rgb(81, 0, 43);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
  color: rgb(255, 237, 247);
}`,
  },
  light: {},
};
