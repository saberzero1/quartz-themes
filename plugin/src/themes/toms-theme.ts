import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "toms-theme",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #306850 !important;
  --background-modifier-box-shadow: #44cf6e !important;
  --background-modifier-cover: #071821 !important;
  --background-modifier-error: red !important;
  --background-modifier-error-hover: orange !important;
  --background-modifier-form-field: #071821 !important;
  --background-modifier-form-field-highlighted: #44cf6e !important;
  --background-modifier-form-field-hover: #071821 !important;
  --background-modifier-success: #A4E7C3 !important;
  --background-primary: black !important;
  --background-primary-alt: #071821 !important;
  --background-secondary: black !important;
  --background-secondary-alt: black !important;
  --bases-cards-background: black !important;
  --bases-cards-cover-background: #071821 !important;
  --bases-cards-shadow: 0 0 0 1px #306850 !important;
  --bases-embed-border-color: #306850 !important;
  --bases-group-heading-property-color: #44cf6e !important;
  --bases-table-border-color: #306850 !important;
  --bases-table-cell-background-active: black !important;
  --bases-table-cell-background-disabled: #071821 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #44cf6e !important;
  --bases-table-group-background: #071821 !important;
  --bases-table-header-background: black !important;
  --bases-table-header-color: #44cf6e !important;
  --bases-table-summary-background: black !important;
  --blockquote-border-color: #44cf6e !important;
  --blur-background: color-mix(in srgb, #306850 65%, transparent) linear-gradient(#306850, color-mix(in srgb, #306850 65%, transparent)) !important;
  --bodyFont: Courier, monospace !important;
  --canvas-background: black !important;
  --canvas-card-label-color: #306850 !important;
  --caret-color: #44cf6e !important;
  --checkbox-border-color: #306850 !important;
  --checkbox-border-color-hover: #44cf6e !important;
  --checkbox-color: #44cf6e !important;
  --checkbox-color-hover: #e0f8cf !important;
  --checkbox-marker-color: black !important;
  --checklist-done-color: #44cf6e !important;
  --code-background: #071821 !important;
  --code-border-color: #306850 !important;
  --code-comment: #306850 !important;
  --code-normal: #44cf6e !important;
  --code-punctuation: #44cf6e !important;
  --codeFont: "Lucida Console", monospace !important;
  --collapse-icon-color: #306850 !important;
  --collapse-icon-color-collapsed: #44cf6e !important;
  --color-darkgreen: #306850 !important;
  --color-light: #e0f8cf !important;
  --color-nearblack: #071821 !important;
  --color-off-light: #cfe6be !important;
  --dark: #44cf6e !important;
  --darkgray: #44cf6e !important;
  --divider-color: #306850 !important;
  --divider-color-hover: #44cf6e !important;
  --dropdown-background: #306850 !important;
  --dropdown-background-hover: #071821 !important;
  --embed-block-shadow-hover: 0 0 0 1px #306850, inset 0 0 0 1px #306850 !important;
  --embed-border-start: 2px solid #44cf6e !important;
  --file-header-background: black !important;
  --file-header-background-focused: black !important;
  --file-header-font: Courier, monospace !important;
  --file-line-width: 520px !important;
  --flair-background: #306850 !important;
  --flair-color: #44cf6e !important;
  --font-default: Courier, monospace !important;
  --font-interface: Courier, monospace !important;
  --font-mermaid: Courier, monospace !important;
  --font-monospace: "Lucida Console", monospace !important;
  --font-monospace-default: "Lucida Console", monospace !important;
  --font-text: Courier, monospace !important;
  --footnote-divider-color: #306850 !important;
  --footnote-id-color: #44cf6e !important;
  --footnote-id-color-no-occurrences: #306850 !important;
  --graph-node: #44cf6e !important;
  --graph-node-focused: #44cf6e !important;
  --graph-node-unresolved: #306850 !important;
  --graph-text: #44cf6e !important;
  --gray: #44cf6e !important;
  --headerFont: Courier, monospace !important;
  --heading-formatting: #306850 !important;
  --highlight: rgba(48, 104, 80, 0.5) !important;
  --hr-color: #306850 !important;
  --icon-color: #44cf6e !important;
  --icon-color-active: #44cf6e !important;
  --icon-color-focused: #44cf6e !important;
  --icon-color-hover: #44cf6e !important;
  --input-date-separator: #306850 !important;
  --input-placeholder-color: #306850 !important;
  --interactive-accent: #44cf6e !important;
  --interactive-accent-hover: #e0f8cf !important;
  --interactive-hover: #071821 !important;
  --interactive-normal: #306850 !important;
  --interactive-success: #44cf6e !important;
  --light: black !important;
  --lightgray: black !important;
  --link-color: #44cf6e !important;
  --link-color-hover: #e0f8cf !important;
  --link-external-color: #44cf6e !important;
  --link-external-color-hover: #e0f8cf !important;
  --link-unresolved-color: #44cf6e !important;
  --list-marker-color: #306850 !important;
  --list-marker-color-collapsed: #44cf6e !important;
  --list-marker-color-hover: #44cf6e !important;
  --menu-background: black !important;
  --metadata-border-color: #306850 !important;
  --metadata-divider-color: #306850 !important;
  --metadata-input-font: Courier, monospace !important;
  --metadata-input-text-color: #44cf6e !important;
  --metadata-label-font: Courier, monospace !important;
  --metadata-label-text-color: #44cf6e !important;
  --metadata-label-text-color-hover: #44cf6e !important;
  --modal-background: black !important;
  --nav-collapse-icon-color: #306850 !important;
  --nav-collapse-icon-color-collapsed: #306850 !important;
  --nav-heading-color: #44cf6e !important;
  --nav-heading-color-collapsed: #306850 !important;
  --nav-heading-color-collapsed-hover: #44cf6e !important;
  --nav-heading-color-hover: #44cf6e !important;
  --nav-item-color: #44cf6e !important;
  --nav-item-color-active: #44cf6e !important;
  --nav-item-color-highlighted: #44cf6e !important;
  --nav-item-color-hover: #44cf6e !important;
  --nav-item-color-selected: #44cf6e !important;
  --nav-tag-color: #306850 !important;
  --nav-tag-color-active: #44cf6e !important;
  --nav-tag-color-hover: #44cf6e !important;
  --pdf-background: black !important;
  --pdf-page-background: black !important;
  --pdf-shadow: 0 0 0 1px #306850 !important;
  --pdf-sidebar-background: black !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #306850 !important;
  --pill-border-color: #306850 !important;
  --pill-color: #44cf6e !important;
  --pill-color-hover: #44cf6e !important;
  --pill-color-remove: #306850 !important;
  --pill-color-remove-hover: #44cf6e !important;
  --prompt-background: black !important;
  --raised-background: color-mix(in srgb, #306850 65%, transparent) linear-gradient(#306850, color-mix(in srgb, #306850 65%, transparent)) !important;
  --ribbon-background: black !important;
  --ribbon-background-collapsed: black !important;
  --scrollbar-active-thumb-bg: #44cf6e !important;
  --scrollbar-bg: rgba(0, 0, 0, 0.05)	

  
  --scrollbar-thumb-bg: #306850 !important;
  --search-clear-button-color: #44cf6e !important;
  --search-icon-color: #44cf6e !important;
  --search-result-background: black !important;
  --secondary: #44cf6e !important;
  --setting-group-heading-color: #44cf6e !important;
  --setting-items-background: #071821 !important;
  --setting-items-border-color: #306850 !important;
  --slider-track-background: #306850 !important;
  --status-bar-background: black !important;
  --status-bar-border-color: #306850 !important;
  --status-bar-text-color: #44cf6e !important;
  --suggestion-background: black !important;
  --tab-background-active: black !important;
  --tab-container-background: black !important;
  --tab-outline-color: #306850 !important;
  --tab-switcher-background: black !important;
  --tab-switcher-menubar-background: linear-gradient(to top, black, transparent) !important;
  --tab-text-color: #306850 !important;
  --tab-text-color-active: #44cf6e !important;
  --tab-text-color-focused: #44cf6e !important;
  --tab-text-color-focused-active: #44cf6e !important;
  --tab-text-color-focused-active-current: #44cf6e !important;
  --tab-text-color-focused-highlighted: #44cf6e !important;
  --table-add-button-border-color: #306850 !important;
  --table-border-color: #306850 !important;
  --table-drag-handle-background-active: #44cf6e !important;
  --table-drag-handle-color: #306850 !important;
  --table-drag-handle-color-active: #306850 !important;
  --table-header-border-color: #306850 !important;
  --table-header-color: #44cf6e !important;
  --table-selection-border-color: #44cf6e !important;
  --tag-color: #44cf6e !important;
  --tag-color-hover: #44cf6e !important;
  --tertiary: #e0f8cf !important;
  --text-accent: #44cf6e !important;
  --text-accent-hover: #e0f8cf !important;
  --text-error: red !important;
  --text-error-hover: orange !important;
  --text-faint: #306850 !important;
  --text-highlight-bg: rgba(48, 104, 80, 0.5) !important;
  --text-highlight-bg-active: blue !important;
  --text-muted: #44cf6e !important;
  --text-normal: #44cf6e !important;
  --text-on-accent: #306850 !important;
  --text-selection: #306850 !important;
  --textHighlight: rgba(48, 104, 80, 0.5) !important;
  --titleFont: Courier, monospace !important;
  --titlebar-background: black !important;
  --titlebar-background-focused: black !important;
  --titlebar-border-color: #306850 !important;
  --titlebar-text-color: #44cf6e !important;
  --titlebar-text-color-focused: #44cf6e !important;
  --vault-profile-color: #44cf6e !important;
  --vault-profile-color-hover: #44cf6e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
  border-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(48, 104, 80);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 104, 80);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(68, 207, 110);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(48, 104, 80, 0.5);
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body del {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(48, 104, 80);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(68, 207, 110);
  border-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body p {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body dt {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(48, 104, 80);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", Courier, monospace;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body table {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  width: 217.438px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "Lucida Console", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
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
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body h1 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body h2 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body h3 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body h4 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body h5 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body h6 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(68, 207, 110);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(68, 207, 110);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(68, 207, 110);
  stroke: rgb(68, 207, 110);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(48, 104, 80);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body abbr {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "Lucida Console", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body sub {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body summary {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body sup {
  color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(68, 207, 110);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #071821 !important;
  --background-modifier-box-shadow: #08b94e !important;
  --background-modifier-cover: #e0f8cf !important;
  --background-modifier-error: red !important;
  --background-modifier-error-hover: orange !important;
  --background-modifier-form-field: #e0f8cf !important;
  --background-modifier-form-field-highlighted: #08b94e !important;
  --background-modifier-form-field-hover: #e0f8cf !important;
  --background-modifier-success: #A4E7C3 !important;
  --background-primary: #e0f8cf !important;
  --background-primary-alt: #cfe6be !important;
  --background-secondary: #e0f8cf !important;
  --background-secondary-alt: #e0f8cf !important;
  --bases-cards-background: #e0f8cf !important;
  --bases-cards-cover-background: #cfe6be !important;
  --bases-cards-shadow: 0 0 0 1px #071821 !important;
  --bases-embed-border-color: #071821 !important;
  --bases-group-heading-property-color: #08b94e !important;
  --bases-table-border-color: #071821 !important;
  --bases-table-cell-background-active: #e0f8cf !important;
  --bases-table-cell-background-disabled: #cfe6be !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #08b94e !important;
  --bases-table-group-background: #cfe6be !important;
  --bases-table-header-background: #e0f8cf !important;
  --bases-table-header-color: #08b94e !important;
  --bases-table-summary-background: #e0f8cf !important;
  --blockquote-border-color: #08b94e !important;
  --blur-background: color-mix(in srgb, #e0f8cf 65%, transparent) linear-gradient(#e0f8cf, color-mix(in srgb, #e0f8cf 65%, transparent)) !important;
  --bodyFont: Courier, monospace !important;
  --canvas-background: #e0f8cf !important;
  --canvas-card-label-color: #306850 !important;
  --caret-color: #071821 !important;
  --checkbox-border-color: #306850 !important;
  --checkbox-border-color-hover: #08b94e !important;
  --checkbox-color: #08b94e !important;
  --checkbox-color-hover: #071821 !important;
  --checkbox-marker-color: #e0f8cf !important;
  --checklist-done-color: #08b94e !important;
  --code-background: #cfe6be !important;
  --code-border-color: #071821 !important;
  --code-comment: #306850 !important;
  --code-normal: #071821 !important;
  --code-punctuation: #08b94e !important;
  --codeFont: "Lucida Console", monospace !important;
  --collapse-icon-color: #306850 !important;
  --collapse-icon-color-collapsed: #08b94e !important;
  --color-darkgreen: #306850 !important;
  --color-light: #e0f8cf !important;
  --color-nearblack: #071821 !important;
  --color-off-light: #cfe6be !important;
  --dark: #071821 !important;
  --darkgray: #071821 !important;
  --divider-color: #071821 !important;
  --divider-color-hover: #08b94e !important;
  --dropdown-background: #e0f8cf !important;
  --dropdown-background-hover: #306850 !important;
  --embed-block-shadow-hover: 0 0 0 1px #071821, inset 0 0 0 1px #071821 !important;
  --embed-border-start: 2px solid #08b94e !important;
  --file-header-background: #e0f8cf !important;
  --file-header-background-focused: #e0f8cf !important;
  --file-header-font: Courier, monospace !important;
  --file-line-width: 520px !important;
  --flair-background: #e0f8cf !important;
  --flair-color: #071821 !important;
  --font-default: Courier, monospace !important;
  --font-interface: Courier, monospace !important;
  --font-mermaid: Courier, monospace !important;
  --font-monospace: "Lucida Console", monospace !important;
  --font-monospace-default: "Lucida Console", monospace !important;
  --font-text: Courier, monospace !important;
  --footnote-divider-color: #071821 !important;
  --footnote-id-color: #08b94e !important;
  --footnote-id-color-no-occurrences: #306850 !important;
  --graph-node: #08b94e !important;
  --graph-node-focused: #08b94e !important;
  --graph-node-unresolved: #306850 !important;
  --graph-text: #071821 !important;
  --gray: #08b94e !important;
  --headerFont: Courier, monospace !important;
  --heading-formatting: #306850 !important;
  --highlight: #08b94e !important;
  --hr-color: #071821 !important;
  --icon-color: #08b94e !important;
  --icon-color-active: #08b94e !important;
  --icon-color-focused: #071821 !important;
  --icon-color-hover: #08b94e !important;
  --input-date-separator: #306850 !important;
  --input-placeholder-color: #306850 !important;
  --interactive-accent: #08b94e !important;
  --interactive-accent-hover: #071821 !important;
  --interactive-hover: #306850 !important;
  --interactive-normal: #e0f8cf !important;
  --interactive-success: #197300 !important;
  --light: #e0f8cf !important;
  --lightgray: #e0f8cf !important;
  --link-color: #08b94e !important;
  --link-color-hover: #071821 !important;
  --link-external-color: #08b94e !important;
  --link-external-color-hover: #071821 !important;
  --link-unresolved-color: #08b94e !important;
  --list-marker-color: #306850 !important;
  --list-marker-color-collapsed: #08b94e !important;
  --list-marker-color-hover: #08b94e !important;
  --menu-background: #e0f8cf !important;
  --metadata-border-color: #071821 !important;
  --metadata-divider-color: #071821 !important;
  --metadata-input-font: Courier, monospace !important;
  --metadata-input-text-color: #071821 !important;
  --metadata-label-font: Courier, monospace !important;
  --metadata-label-text-color: #08b94e !important;
  --metadata-label-text-color-hover: #08b94e !important;
  --modal-background: #e0f8cf !important;
  --nav-collapse-icon-color: #306850 !important;
  --nav-collapse-icon-color-collapsed: #306850 !important;
  --nav-heading-color: #071821 !important;
  --nav-heading-color-collapsed: #306850 !important;
  --nav-heading-color-collapsed-hover: #08b94e !important;
  --nav-heading-color-hover: #071821 !important;
  --nav-item-color: #08b94e !important;
  --nav-item-color-active: #071821 !important;
  --nav-item-color-highlighted: #08b94e !important;
  --nav-item-color-hover: #071821 !important;
  --nav-item-color-selected: #071821 !important;
  --nav-tag-color: #306850 !important;
  --nav-tag-color-active: #08b94e !important;
  --nav-tag-color-hover: #08b94e !important;
  --pdf-background: #e0f8cf !important;
  --pdf-page-background: #e0f8cf !important;
  --pdf-sidebar-background: #e0f8cf !important;
  --pill-border-color: #071821 !important;
  --pill-color: #08b94e !important;
  --pill-color-hover: #071821 !important;
  --pill-color-remove: #306850 !important;
  --pill-color-remove-hover: #08b94e !important;
  --prompt-background: #e0f8cf !important;
  --raised-background: color-mix(in srgb, #e0f8cf 65%, transparent) linear-gradient(#e0f8cf, color-mix(in srgb, #e0f8cf 65%, transparent)) !important;
  --ribbon-background: #e0f8cf !important;
  --ribbon-background-collapsed: #e0f8cf !important;
  --scrollbar-active-thumb-bg: #08b94e !important;
  --scrollbar-thumb-bg: #306850 !important;
  --search-clear-button-color: #08b94e !important;
  --search-icon-color: #08b94e !important;
  --search-result-background: #e0f8cf !important;
  --secondary: #08b94e !important;
  --setting-group-heading-color: #071821 !important;
  --setting-items-background: #cfe6be !important;
  --setting-items-border-color: #071821 !important;
  --slider-track-background: #071821 !important;
  --status-bar-background: #e0f8cf !important;
  --status-bar-border-color: #071821 !important;
  --status-bar-text-color: #08b94e !important;
  --suggestion-background: #e0f8cf !important;
  --tab-background-active: #e0f8cf !important;
  --tab-container-background: #e0f8cf !important;
  --tab-outline-color: #071821 !important;
  --tab-switcher-background: #e0f8cf !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e0f8cf, transparent) !important;
  --tab-text-color: #306850 !important;
  --tab-text-color-active: #08b94e !important;
  --tab-text-color-focused: #08b94e !important;
  --tab-text-color-focused-active: #08b94e !important;
  --tab-text-color-focused-active-current: #071821 !important;
  --tab-text-color-focused-highlighted: #08b94e !important;
  --table-add-button-border-color: #071821 !important;
  --table-border-color: #071821 !important;
  --table-drag-handle-background-active: #08b94e !important;
  --table-drag-handle-color: #306850 !important;
  --table-drag-handle-color-active: #306850 !important;
  --table-header-border-color: #071821 !important;
  --table-header-color: #071821 !important;
  --table-selection-border-color: #08b94e !important;
  --tag-color: #08b94e !important;
  --tag-color-hover: #08b94e !important;
  --tertiary: #071821 !important;
  --text-accent: #08b94e !important;
  --text-accent-hover: #071821 !important;
  --text-error: red !important;
  --text-error-hover: orange !important;
  --text-faint: #306850 !important;
  --text-highlight-bg: #08b94e !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #08b94e !important;
  --text-normal: #071821 !important;
  --text-on-accent: #306850 !important;
  --text-selection: #08b94e !important;
  --textHighlight: #08b94e !important;
  --titleFont: Courier, monospace !important;
  --titlebar-background: #e0f8cf !important;
  --titlebar-background-focused: #e0f8cf !important;
  --titlebar-border-color: #071821 !important;
  --titlebar-text-color: #08b94e !important;
  --titlebar-text-color-focused: #071821 !important;
  --vault-profile-color: #071821 !important;
  --vault-profile-color-hover: #071821 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(224, 248, 207);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(224, 248, 207);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(224, 248, 207);
  border-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(224, 248, 207);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(224, 248, 207);
  border-left-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(224, 248, 207);
  color: rgb(7, 24, 33);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(8, 185, 78);
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body del {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(48, 104, 80);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(8, 185, 78);
  border-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body p {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration-color: rgb(8, 185, 78);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(8, 185, 78) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body dt {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body ol > li {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body ul > li {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(48, 104, 80);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", Courier, monospace;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body table {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  width: 217.438px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
  font-family: "??", "??", "Lucida Console", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body figcaption {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
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
  background-color: rgb(224, 248, 207);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(224, 248, 207);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 248, 207);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body h1 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body h2 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body h3 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body h4 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body h5 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body h6 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(7, 24, 33);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(224, 248, 207);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(8, 185, 78);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(8, 185, 78);
  stroke: rgb(8, 185, 78);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(48, 104, 80);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(224, 248, 207);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(7, 24, 33);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="light"] body abbr {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
  font-family: "??", "??", "Lucida Console", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

html[saved-theme="light"] body sub {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body summary {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body sup {
  color: rgb(7, 24, 33);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(8, 185, 78);
}`,
  },
};
