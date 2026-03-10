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
  --bodyFont: '??', '??', Courier, monospace !important;
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
  --codeFont: '??', '??', "Lucida Console", monospace !important;
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
  --file-header-font: '??', '??', '??', Courier, monospace !important;
  --file-line-width: 520px !important;
  --flair-background: #306850 !important;
  --flair-color: #44cf6e !important;
  --font-default: Courier, monospace !important;
  --font-interface: '??', '??', '??', Courier, monospace !important;
  --font-mermaid: '??', '??', Courier, monospace !important;
  --font-monospace: '??', '??', "Lucida Console", monospace !important;
  --font-monospace-default: "Lucida Console", monospace !important;
  --font-text: '??', '??', Courier, monospace !important;
  --footnote-divider-color: #306850 !important;
  --footnote-id-color: #44cf6e !important;
  --footnote-id-color-no-occurrences: #306850 !important;
  --graph-node: #44cf6e !important;
  --graph-node-focused: #44cf6e !important;
  --graph-node-unresolved: #306850 !important;
  --graph-text: #44cf6e !important;
  --gray: #44cf6e !important;
  --headerFont: '??', '??', Courier, monospace !important;
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
  --metadata-input-font: '??', '??', '??', Courier, monospace !important;
  --metadata-input-text-color: #44cf6e !important;
  --metadata-label-font: '??', '??', '??', Courier, monospace !important;
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
  --titleFont: '??', '??', Courier, monospace !important;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(68, 207, 110);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(68, 207, 110);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(68, 207, 110);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 104, 80);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(68, 207, 110);
}`,
    typography: `body .page article p > b, b {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body .page article p > em, em {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body .page article p > i, i {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body .page article p > strong, strong {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body .text-highlight {
  background-color: rgba(48, 104, 80, 0.5);
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body del {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: line-through rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body p {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}`,
    links: `body a.external, footer a {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: underline rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: underline rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body a.internal.broken {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
}`,
    lists: `body dd {
  color: rgb(68, 207, 110);
}

body dt {
  color: rgb(68, 207, 110);
}

body ol > li {
  color: rgb(68, 207, 110);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body ul > li {
  color: rgb(68, 207, 110);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(48, 104, 80);
  text-decoration: rgb(48, 104, 80);
}

body blockquote {
  font-family: "??", "??", Courier, monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body table {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  width: 217.438px;
}

body td {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}

body th {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}`,
    code: `body code {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "Lucida Console", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
}

body pre > code, pre:has(> code) {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}

body pre:has(> code) {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}`,
    images: `body audio {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body figcaption {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body figure {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body img {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body video {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}`,
    embeds: `body .file-embed {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body .footnotes {
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

body .transclude {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body .transclude-inner {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Courier, monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Courier, monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(68, 207, 110);
  text-decoration: line-through rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body input[type=checkbox] {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}

body li.task-list-item[data-task='!'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='*'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='-'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='/'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='>'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='?'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='I'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='S'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='b'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='c'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='d'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='f'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='i'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='k'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='l'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='p'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='u'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body li.task-list-item[data-task='w'] {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}`,
    search: `body .search > .search-button {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(68, 207, 110) none 0px;
  text-decoration: rgb(68, 207, 110);
  text-decoration-color: rgb(68, 207, 110);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(68, 207, 110);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(68, 207, 110);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(68, 207, 110);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(68, 207, 110);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Courier, monospace;
}

body a.internal.tag-link::before {
  color: rgb(68, 207, 110);
}

body h1 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body h2 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body h2.page-title, h2.page-title a {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body h3 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body h4 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body h5 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body h6 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body hr {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
  text-decoration: rgb(68, 207, 110);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
  text-decoration: rgb(68, 207, 110);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
  text-decoration: rgb(68, 207, 110);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

body footer ul li a {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body li.section-li > .section .meta {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(68, 207, 110);
  text-decoration: rgb(68, 207, 110);
}

body ul.section-ul {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

body .darkmode svg {
  color: rgb(68, 207, 110);
  stroke: rgb(68, 207, 110);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

body .breadcrumb-element p {
  color: rgb(48, 104, 80);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
}

body .metadata {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body .metadata-properties {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
  font-family: "??", "??", Courier, monospace;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

body abbr {
  color: rgb(68, 207, 110);
  text-decoration: underline dotted rgb(68, 207, 110);
}

body details {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body input[type=text] {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "??", Courier, monospace;
}

body kbd {
  background-color: rgb(7, 24, 33);
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
  color: rgb(68, 207, 110);
  font-family: "??", "??", "Lucida Console", monospace;
}

body progress {
  border-bottom-color: rgb(68, 207, 110);
  border-left-color: rgb(68, 207, 110);
  border-right-color: rgb(68, 207, 110);
  border-top-color: rgb(68, 207, 110);
}

body sub {
  color: rgb(68, 207, 110);
}

body summary {
  color: rgb(68, 207, 110);
}

body sup {
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
  --bodyFont: '??', '??', Courier, monospace !important;
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
  --codeFont: '??', '??', "Lucida Console", monospace !important;
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
  --file-header-font: '??', '??', '??', Courier, monospace !important;
  --file-line-width: 520px !important;
  --flair-background: #e0f8cf !important;
  --flair-color: #071821 !important;
  --font-default: Courier, monospace !important;
  --font-interface: '??', '??', '??', Courier, monospace !important;
  --font-mermaid: '??', '??', Courier, monospace !important;
  --font-monospace: '??', '??', "Lucida Console", monospace !important;
  --font-monospace-default: "Lucida Console", monospace !important;
  --font-text: '??', '??', Courier, monospace !important;
  --footnote-divider-color: #071821 !important;
  --footnote-id-color: #08b94e !important;
  --footnote-id-color-no-occurrences: #306850 !important;
  --graph-node: #08b94e !important;
  --graph-node-focused: #08b94e !important;
  --graph-node-unresolved: #306850 !important;
  --graph-text: #071821 !important;
  --gray: #08b94e !important;
  --headerFont: '??', '??', Courier, monospace !important;
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
  --metadata-input-font: '??', '??', '??', Courier, monospace !important;
  --metadata-input-text-color: #071821 !important;
  --metadata-label-font: '??', '??', '??', Courier, monospace !important;
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
  --titleFont: '??', '??', Courier, monospace !important;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(224, 248, 207);
  color: rgb(7, 24, 33);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(224, 248, 207);
  color: rgb(7, 24, 33);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(224, 248, 207);
  color: rgb(7, 24, 33);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(7, 24, 33);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(224, 248, 207);
  border-left-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

body div#quartz-root {
  background-color: rgb(224, 248, 207);
  color: rgb(7, 24, 33);
}`,
    typography: `body .page article p > b, b {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body .page article p > em, em {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body .page article p > i, i {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body .page article p > strong, strong {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body .text-highlight {
  background-color: rgb(8, 185, 78);
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body del {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration: line-through rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body p {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration: rgb(8, 185, 78);
  text-decoration-color: rgb(8, 185, 78);
}`,
    links: `body a.external, footer a {
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration: underline rgb(8, 185, 78);
  text-decoration-color: rgb(8, 185, 78);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(8, 185, 78) none 0px;
  text-decoration: underline rgb(8, 185, 78);
  text-decoration-color: rgb(8, 185, 78);
}

body a.internal.broken {
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(8, 185, 78) none 0px;
}`,
    lists: `body dd {
  color: rgb(7, 24, 33);
}

body dt {
  color: rgb(7, 24, 33);
}

body ol > li {
  color: rgb(7, 24, 33);
}

body ol.overflow {
  background-color: rgb(224, 248, 207);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body ul > li {
  color: rgb(7, 24, 33);
}

body ul.overflow {
  background-color: rgb(224, 248, 207);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(48, 104, 80);
  text-decoration: rgb(48, 104, 80);
}

body blockquote {
  font-family: "??", "??", Courier, monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body table {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  width: 217.438px;
}

body td {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

body th {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}`,
    code: `body code {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
  font-family: "??", "??", "Lucida Console", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

body pre > code, pre:has(> code) {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body pre:has(> code) {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    images: `body audio {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body figcaption {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

body figure {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body img {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body video {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    embeds: `body .file-embed {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
}

body .footnotes {
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

body .transclude {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body .transclude-inner {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Courier, monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Courier, monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(8, 185, 78);
  text-decoration: line-through rgb(8, 185, 78);
  text-decoration-color: rgb(8, 185, 78);
}

body input[type=checkbox] {
  border-bottom-color: rgb(48, 104, 80);
  border-left-color: rgb(48, 104, 80);
  border-right-color: rgb(48, 104, 80);
  border-top-color: rgb(48, 104, 80);
}

body li.task-list-item[data-task='!'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='*'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='-'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='/'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='>'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='?'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='I'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='S'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='b'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='c'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='d'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='f'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='i'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='k'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='l'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='p'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='u'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body li.task-list-item[data-task='w'] {
  color: rgb(7, 24, 33);
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}`,
    search: `body .search > .search-button {
  background-color: rgb(224, 248, 207);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
  font-family: "??", "??", "??", Courier, monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(224, 248, 207);
}

body .search > .search-container > .search-space > * {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
  outline: rgb(7, 24, 33) none 0px;
  text-decoration: rgb(7, 24, 33);
  text-decoration-color: rgb(7, 24, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(7, 24, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(7, 24, 33);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(7, 24, 33);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 248, 207);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(7, 24, 33);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Courier, monospace;
}

body a.internal.tag-link::before {
  color: rgb(8, 185, 78);
}

body h1 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

body h2 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

body h2.page-title, h2.page-title a {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

body h3 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

body h4 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

body h5 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

body h6 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", Courier, monospace;
}

body hr {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}

body ::-webkit-scrollbar-corner {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}

body ::-webkit-scrollbar-track {
  background: rgb(224, 248, 207) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 248, 207);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
  text-decoration: rgb(8, 185, 78);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
  text-decoration: rgb(8, 185, 78);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
  text-decoration: rgb(8, 185, 78);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}`,
    footer: `body footer {
  background-color: rgb(224, 248, 207);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}

body footer ul li a {
  color: rgb(8, 185, 78);
  text-decoration: rgb(8, 185, 78);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(7, 24, 33);
  font-family: "??", "??", "??", Courier, monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(8, 185, 78);
  text-decoration: rgb(8, 185, 78);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body li.section-li > .section .meta {
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(8, 185, 78);
  text-decoration: rgb(8, 185, 78);
}

body ul.section-ul {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}

body .darkmode svg {
  color: rgb(8, 185, 78);
  stroke: rgb(8, 185, 78);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
}

body .breadcrumb-element p {
  color: rgb(48, 104, 80);
  font-family: "??", "??", "??", Courier, monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
}

body .metadata {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
}

body .metadata-properties {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
  font-family: "??", "??", Courier, monospace;
}

body .navigation-progress {
  background-color: rgb(224, 248, 207);
}

body .page-header h2.page-title {
  color: rgb(7, 24, 33);
  font-family: "??", "??", "??", Courier, monospace;
}

body abbr {
  color: rgb(7, 24, 33);
  text-decoration: underline dotted rgb(7, 24, 33);
}

body details {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body input[type=text] {
  border-bottom-color: rgb(8, 185, 78);
  border-left-color: rgb(8, 185, 78);
  border-right-color: rgb(8, 185, 78);
  border-top-color: rgb(8, 185, 78);
  color: rgb(8, 185, 78);
  font-family: "??", "??", "??", Courier, monospace;
}

body kbd {
  background-color: rgb(207, 230, 190);
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
  color: rgb(7, 24, 33);
  font-family: "??", "??", "Lucida Console", monospace;
}

body progress {
  border-bottom-color: rgb(7, 24, 33);
  border-left-color: rgb(7, 24, 33);
  border-right-color: rgb(7, 24, 33);
  border-top-color: rgb(7, 24, 33);
}

body sub {
  color: rgb(7, 24, 33);
}

body summary {
  color: rgb(7, 24, 33);
}

body sup {
  color: rgb(7, 24, 33);
}`,
  },
};
