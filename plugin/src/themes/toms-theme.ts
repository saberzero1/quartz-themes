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
  --background-modifier-border: #306850;
  --background-modifier-box-shadow: #44cf6e;
  --background-modifier-cover: #071821;
  --background-modifier-error: red;
  --background-modifier-error-hover: orange;
  --background-modifier-form-field: #071821;
  --background-modifier-form-field-highlighted: #44cf6e;
  --background-modifier-form-field-hover: #071821;
  --background-modifier-success: #A4E7C3;
  --background-primary: black;
  --background-primary-alt: #071821;
  --background-secondary: black;
  --background-secondary-alt: black;
  --bases-cards-background: black;
  --bases-cards-cover-background: #071821;
  --bases-cards-shadow: 0 0 0 1px #306850;
  --bases-embed-border-color: #306850;
  --bases-group-heading-property-color: #44cf6e;
  --bases-table-border-color: #306850;
  --bases-table-cell-background-active: black;
  --bases-table-cell-background-disabled: #071821;
  --bases-table-cell-shadow-focus: 0 0 0 2px #44cf6e;
  --bases-table-group-background: #071821;
  --bases-table-header-background: black;
  --bases-table-header-color: #44cf6e;
  --bases-table-summary-background: black;
  --blockquote-border-color: #44cf6e;
  --blur-background: color-mix(in srgb, #306850 65%, transparent) linear-gradient(#306850, color-mix(in srgb, #306850 65%, transparent));
  --canvas-background: black;
  --canvas-card-label-color: #306850;
  --caret-color: #44cf6e;
  --checkbox-border-color: #306850;
  --checkbox-border-color-hover: #44cf6e;
  --checkbox-color: #44cf6e;
  --checkbox-color-hover: #e0f8cf;
  --checkbox-marker-color: black;
  --checklist-done-color: #44cf6e;
  --code-background: #071821;
  --code-border-color: #306850;
  --code-comment: #306850;
  --code-normal: #44cf6e;
  --code-punctuation: #44cf6e;
  --collapse-icon-color: #306850;
  --collapse-icon-color-collapsed: #44cf6e;
  --color-darkgreen: #306850;
  --color-light: #e0f8cf;
  --color-nearblack: #071821;
  --color-off-light: #cfe6be;
  --divider-color: #306850;
  --divider-color-hover: #44cf6e;
  --dropdown-background: #306850;
  --dropdown-background-hover: #071821;
  --embed-block-shadow-hover: 0 0 0 1px #306850, inset 0 0 0 1px #306850;
  --embed-border-start: 2px solid #44cf6e;
  --file-header-background: black;
  --file-header-background-focused: black;
  --file-header-font: '??', '??', '??', Courier, monospace;
  --file-line-width: 520px;
  --flair-background: #306850;
  --flair-color: #44cf6e;
  --font-default: Courier, monospace;
  --font-interface: '??', '??', '??', Courier, monospace;
  --font-mermaid: '??', '??', Courier, monospace;
  --font-monospace: '??', '??', "Lucida Console", monospace;
  --font-monospace-default: "Lucida Console", monospace;
  --font-text: '??', '??', Courier, monospace;
  --footnote-divider-color: #306850;
  --footnote-id-color: #44cf6e;
  --footnote-id-color-no-occurrences: #306850;
  --graph-node: #44cf6e;
  --graph-node-focused: #44cf6e;
  --graph-node-unresolved: #306850;
  --graph-text: #44cf6e;
  --heading-formatting: #306850;
  --hr-color: #306850;
  --icon-color: #44cf6e;
  --icon-color-active: #44cf6e;
  --icon-color-focused: #44cf6e;
  --icon-color-hover: #44cf6e;
  --input-date-separator: #306850;
  --input-placeholder-color: #306850;
  --interactive-accent: #44cf6e;
  --interactive-accent-hover: #e0f8cf;
  --interactive-hover: #071821;
  --interactive-normal: #306850;
  --interactive-success: #44cf6e;
  --link-color: #44cf6e;
  --link-color-hover: #e0f8cf;
  --link-external-color: #44cf6e;
  --link-external-color-hover: #e0f8cf;
  --link-unresolved-color: #44cf6e;
  --list-marker-color: #306850;
  --list-marker-color-collapsed: #44cf6e;
  --list-marker-color-hover: #44cf6e;
  --menu-background: black;
  --metadata-border-color: #306850;
  --metadata-divider-color: #306850;
  --metadata-input-font: '??', '??', '??', Courier, monospace;
  --metadata-input-text-color: #44cf6e;
  --metadata-label-font: '??', '??', '??', Courier, monospace;
  --metadata-label-text-color: #44cf6e;
  --metadata-label-text-color-hover: #44cf6e;
  --modal-background: black;
  --nav-collapse-icon-color: #306850;
  --nav-collapse-icon-color-collapsed: #306850;
  --nav-heading-color: #44cf6e;
  --nav-heading-color-collapsed: #306850;
  --nav-heading-color-collapsed-hover: #44cf6e;
  --nav-heading-color-hover: #44cf6e;
  --nav-item-color: #44cf6e;
  --nav-item-color-active: #44cf6e;
  --nav-item-color-highlighted: #44cf6e;
  --nav-item-color-hover: #44cf6e;
  --nav-item-color-selected: #44cf6e;
  --nav-tag-color: #306850;
  --nav-tag-color-active: #44cf6e;
  --nav-tag-color-hover: #44cf6e;
  --pdf-background: black;
  --pdf-page-background: black;
  --pdf-shadow: 0 0 0 1px #306850;
  --pdf-sidebar-background: black;
  --pdf-thumbnail-shadow: 0 0 0 1px #306850;
  --pill-border-color: #306850;
  --pill-color: #44cf6e;
  --pill-color-hover: #44cf6e;
  --pill-color-remove: #306850;
  --pill-color-remove-hover: #44cf6e;
  --prompt-background: black;
  --raised-background: color-mix(in srgb, #306850 65%, transparent) linear-gradient(#306850, color-mix(in srgb, #306850 65%, transparent));
  --ribbon-background: black;
  --ribbon-background-collapsed: black;
  --scrollbar-active-thumb-bg: #44cf6e;
  --scrollbar-bg: rgba(0, 0, 0, 0.05)	

  
  --scrollbar-thumb-bg: #306850;
  --search-clear-button-color: #44cf6e;
  --search-icon-color: #44cf6e;
  --search-result-background: black;
  --setting-group-heading-color: #44cf6e;
  --setting-items-background: #071821;
  --setting-items-border-color: #306850;
  --slider-track-background: #306850;
  --status-bar-background: black;
  --status-bar-border-color: #306850;
  --status-bar-text-color: #44cf6e;
  --suggestion-background: black;
  --tab-background-active: black;
  --tab-container-background: black;
  --tab-outline-color: #306850;
  --tab-switcher-background: black;
  --tab-switcher-menubar-background: linear-gradient(to top, black, transparent);
  --tab-text-color: #306850;
  --tab-text-color-active: #44cf6e;
  --tab-text-color-focused: #44cf6e;
  --tab-text-color-focused-active: #44cf6e;
  --tab-text-color-focused-active-current: #44cf6e;
  --tab-text-color-focused-highlighted: #44cf6e;
  --table-add-button-border-color: #306850;
  --table-border-color: #306850;
  --table-drag-handle-background-active: #44cf6e;
  --table-drag-handle-color: #306850;
  --table-drag-handle-color-active: #306850;
  --table-header-border-color: #306850;
  --table-header-color: #44cf6e;
  --table-selection-border-color: #44cf6e;
  --tag-color: #44cf6e;
  --tag-color-hover: #44cf6e;
  --text-accent: #44cf6e;
  --text-accent-hover: #e0f8cf;
  --text-error: red;
  --text-error-hover: orange;
  --text-faint: #306850;
  --text-highlight-bg: rgba(48, 104, 80, 0.5);
  --text-highlight-bg-active: blue;
  --text-muted: #44cf6e;
  --text-normal: #44cf6e;
  --text-on-accent: #306850;
  --text-selection: #306850;
  --titlebar-background: black;
  --titlebar-background-focused: black;
  --titlebar-border-color: #306850;
  --titlebar-text-color: #44cf6e;
  --titlebar-text-color-focused: #44cf6e;
  --vault-profile-color: #44cf6e;
  --vault-profile-color-hover: #44cf6e;
  --quartz-icon-color: currentColor;
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
  --background-modifier-border: #071821;
  --background-modifier-box-shadow: #08b94e;
  --background-modifier-cover: #e0f8cf;
  --background-modifier-error: red;
  --background-modifier-error-hover: orange;
  --background-modifier-form-field: #e0f8cf;
  --background-modifier-form-field-highlighted: #08b94e;
  --background-modifier-form-field-hover: #e0f8cf;
  --background-modifier-success: #A4E7C3;
  --background-primary: #e0f8cf;
  --background-primary-alt: #cfe6be;
  --background-secondary: #e0f8cf;
  --background-secondary-alt: #e0f8cf;
  --bases-cards-background: #e0f8cf;
  --bases-cards-cover-background: #cfe6be;
  --bases-cards-shadow: 0 0 0 1px #071821;
  --bases-embed-border-color: #071821;
  --bases-group-heading-property-color: #08b94e;
  --bases-table-border-color: #071821;
  --bases-table-cell-background-active: #e0f8cf;
  --bases-table-cell-background-disabled: #cfe6be;
  --bases-table-cell-shadow-focus: 0 0 0 2px #08b94e;
  --bases-table-group-background: #cfe6be;
  --bases-table-header-background: #e0f8cf;
  --bases-table-header-color: #08b94e;
  --bases-table-summary-background: #e0f8cf;
  --blockquote-border-color: #08b94e;
  --blur-background: color-mix(in srgb, #e0f8cf 65%, transparent) linear-gradient(#e0f8cf, color-mix(in srgb, #e0f8cf 65%, transparent));
  --canvas-background: #e0f8cf;
  --canvas-card-label-color: #306850;
  --caret-color: #071821;
  --checkbox-border-color: #306850;
  --checkbox-border-color-hover: #08b94e;
  --checkbox-color: #08b94e;
  --checkbox-color-hover: #071821;
  --checkbox-marker-color: #e0f8cf;
  --checklist-done-color: #08b94e;
  --code-background: #cfe6be;
  --code-border-color: #071821;
  --code-comment: #306850;
  --code-normal: #071821;
  --code-punctuation: #08b94e;
  --collapse-icon-color: #306850;
  --collapse-icon-color-collapsed: #08b94e;
  --color-darkgreen: #306850;
  --color-light: #e0f8cf;
  --color-nearblack: #071821;
  --color-off-light: #cfe6be;
  --divider-color: #071821;
  --divider-color-hover: #08b94e;
  --dropdown-background: #e0f8cf;
  --dropdown-background-hover: #306850;
  --embed-block-shadow-hover: 0 0 0 1px #071821, inset 0 0 0 1px #071821;
  --embed-border-start: 2px solid #08b94e;
  --file-header-background: #e0f8cf;
  --file-header-background-focused: #e0f8cf;
  --file-header-font: '??', '??', '??', Courier, monospace;
  --file-line-width: 520px;
  --flair-background: #e0f8cf;
  --flair-color: #071821;
  --font-default: Courier, monospace;
  --font-interface: '??', '??', '??', Courier, monospace;
  --font-mermaid: '??', '??', Courier, monospace;
  --font-monospace: '??', '??', "Lucida Console", monospace;
  --font-monospace-default: "Lucida Console", monospace;
  --font-text: '??', '??', Courier, monospace;
  --footnote-divider-color: #071821;
  --footnote-id-color: #08b94e;
  --footnote-id-color-no-occurrences: #306850;
  --graph-node: #08b94e;
  --graph-node-focused: #08b94e;
  --graph-node-unresolved: #306850;
  --graph-text: #071821;
  --heading-formatting: #306850;
  --hr-color: #071821;
  --icon-color: #08b94e;
  --icon-color-active: #08b94e;
  --icon-color-focused: #071821;
  --icon-color-hover: #08b94e;
  --input-date-separator: #306850;
  --input-placeholder-color: #306850;
  --interactive-accent: #08b94e;
  --interactive-accent-hover: #071821;
  --interactive-hover: #306850;
  --interactive-normal: #e0f8cf;
  --interactive-success: #197300;
  --link-color: #08b94e;
  --link-color-hover: #071821;
  --link-external-color: #08b94e;
  --link-external-color-hover: #071821;
  --link-unresolved-color: #08b94e;
  --list-marker-color: #306850;
  --list-marker-color-collapsed: #08b94e;
  --list-marker-color-hover: #08b94e;
  --menu-background: #e0f8cf;
  --metadata-border-color: #071821;
  --metadata-divider-color: #071821;
  --metadata-input-font: '??', '??', '??', Courier, monospace;
  --metadata-input-text-color: #071821;
  --metadata-label-font: '??', '??', '??', Courier, monospace;
  --metadata-label-text-color: #08b94e;
  --metadata-label-text-color-hover: #08b94e;
  --modal-background: #e0f8cf;
  --nav-collapse-icon-color: #306850;
  --nav-collapse-icon-color-collapsed: #306850;
  --nav-heading-color: #071821;
  --nav-heading-color-collapsed: #306850;
  --nav-heading-color-collapsed-hover: #08b94e;
  --nav-heading-color-hover: #071821;
  --nav-item-color: #08b94e;
  --nav-item-color-active: #071821;
  --nav-item-color-highlighted: #08b94e;
  --nav-item-color-hover: #071821;
  --nav-item-color-selected: #071821;
  --nav-tag-color: #306850;
  --nav-tag-color-active: #08b94e;
  --nav-tag-color-hover: #08b94e;
  --pdf-background: #e0f8cf;
  --pdf-page-background: #e0f8cf;
  --pdf-sidebar-background: #e0f8cf;
  --pill-border-color: #071821;
  --pill-color: #08b94e;
  --pill-color-hover: #071821;
  --pill-color-remove: #306850;
  --pill-color-remove-hover: #08b94e;
  --prompt-background: #e0f8cf;
  --raised-background: color-mix(in srgb, #e0f8cf 65%, transparent) linear-gradient(#e0f8cf, color-mix(in srgb, #e0f8cf 65%, transparent));
  --ribbon-background: #e0f8cf;
  --ribbon-background-collapsed: #e0f8cf;
  --scrollbar-active-thumb-bg: #08b94e;
  --scrollbar-thumb-bg: #306850;
  --search-clear-button-color: #08b94e;
  --search-icon-color: #08b94e;
  --search-result-background: #e0f8cf;
  --setting-group-heading-color: #071821;
  --setting-items-background: #cfe6be;
  --setting-items-border-color: #071821;
  --slider-track-background: #071821;
  --status-bar-background: #e0f8cf;
  --status-bar-border-color: #071821;
  --status-bar-text-color: #08b94e;
  --suggestion-background: #e0f8cf;
  --tab-background-active: #e0f8cf;
  --tab-container-background: #e0f8cf;
  --tab-outline-color: #071821;
  --tab-switcher-background: #e0f8cf;
  --tab-switcher-menubar-background: linear-gradient(to top, #e0f8cf, transparent);
  --tab-text-color: #306850;
  --tab-text-color-active: #08b94e;
  --tab-text-color-focused: #08b94e;
  --tab-text-color-focused-active: #08b94e;
  --tab-text-color-focused-active-current: #071821;
  --tab-text-color-focused-highlighted: #08b94e;
  --table-add-button-border-color: #071821;
  --table-border-color: #071821;
  --table-drag-handle-background-active: #08b94e;
  --table-drag-handle-color: #306850;
  --table-drag-handle-color-active: #306850;
  --table-header-border-color: #071821;
  --table-header-color: #071821;
  --table-selection-border-color: #08b94e;
  --tag-color: #08b94e;
  --tag-color-hover: #08b94e;
  --text-accent: #08b94e;
  --text-accent-hover: #071821;
  --text-error: red;
  --text-error-hover: orange;
  --text-faint: #306850;
  --text-highlight-bg: #08b94e;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #08b94e;
  --text-normal: #071821;
  --text-on-accent: #306850;
  --text-selection: #08b94e;
  --titlebar-background: #e0f8cf;
  --titlebar-background-focused: #e0f8cf;
  --titlebar-border-color: #071821;
  --titlebar-text-color: #08b94e;
  --titlebar-text-color-focused: #071821;
  --vault-profile-color: #071821;
  --vault-profile-color-hover: #071821;
  --quartz-icon-color: currentColor;
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
