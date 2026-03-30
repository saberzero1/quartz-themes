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
  border-left-color: rgb(135, 0, 72);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 106, 105);
  text-decoration-color: rgb(112, 106, 105);
}

html body input[type=checkbox] {
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
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(12, 12, 12);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
}`,
  },
  light: {},
};
