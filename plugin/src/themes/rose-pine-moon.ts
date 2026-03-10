import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rose-pine-moon", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-accent: #232136 !important;
  --background-modifier-border: #e0def4 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #eb6f92 !important;
  --background-modifier-error-hover: #eb6f92 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-success: #3e8fb0 !important;
  --background-primary: #232136 !important;
  --background-primary-alt: #2a273f !important;
  --background-secondary: #312f44 !important;
  --background-secondary-alt: #393552 !important;
  --bases-cards-background: #232136 !important;
  --bases-cards-cover-background: #2a273f !important;
  --bases-cards-shadow: 0 0 0 1px #e0def4 !important;
  --bases-embed-border-color: #e0def4 !important;
  --bases-group-heading-property-color: #e0def4 !important;
  --bases-table-border-color: #e0def4 !important;
  --bases-table-cell-background-active: #232136 !important;
  --bases-table-cell-background-disabled: #2a273f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f6c177 !important;
  --bases-table-group-background: #2a273f !important;
  --bases-table-header-background: #232136 !important;
  --bases-table-header-color: #e0def4 !important;
  --bases-table-summary-background: #232136 !important;
  --blockquote-border: #eb6f92 !important;
  --blockquote-border-color: #f6c177 !important;
  --blur-background: color-mix(in srgb, #f6c177 65%, transparent) linear-gradient(#f6c177, color-mix(in srgb, #f6c177 65%, transparent)) !important;
  --border-color: #2b2727 !important;
  --canvas-background: #232136 !important;
  --canvas-card-label-color: #eb6f92 !important;
  --caret-color: #e0def4 !important;
  --checkbox-border-color: #eb6f92 !important;
  --checkbox-border-color-hover: #e0def4 !important;
  --checkbox-color: #f6c177 !important;
  --checkbox-color-hover: #ea9a97 !important;
  --checkbox-marker-color: #232136 !important;
  --checklist-done-color: #e0def4 !important;
  --code-background: #2a273f !important;
  --code-block: #9ccfd8 !important;
  --code-border-color: #e0def4 !important;
  --code-comment: #eb6f92 !important;
  --code-normal: #e0def4 !important;
  --code-punctuation: #e0def4 !important;
  --collapse-icon-color: #eb6f92 !important;
  --collapse-icon-color-collapsed: #c4a7e7 !important;
  --dark: #e0def4 !important;
  --darkgray: #e0def4 !important;
  --divider-color: #e0def4 !important;
  --divider-color-hover: #f6c177 !important;
  --dropdown-background: #f6c177 !important;
  --dropdown-background-hover: #ea9a97 !important;
  --embed-block-shadow-hover: 0 0 0 1px #e0def4, inset 0 0 0 1px #e0def4 !important;
  --embed-border-start: 2px solid #f6c177 !important;
  --file-header-background: #232136 !important;
  --file-header-background-focused: #232136 !important;
  --flair-background: #f6c177 !important;
  --flair-color: #e0def4 !important;
  --font-family-editor: Avenir, Avenir Next, sans-serif !important;
  --font-family-preview: Avenir, Avenir Next, sans-serif !important;
  --font-size-code: 15px !important;
  --font-size-h1: 26px !important;
  --font-size-h2: 25px !important;
  --font-size-h3: 21px !important;
  --font-size-h4: 20px !important;
  --font-size-h5: 19px !important;
  --font-size-h6: 18px !important;
  --font-size-normal: 18px !important;
  --font-size-side-dock: 15px !important;
  --font-size-side-dock-title: 18px !important;
  --font-size-status-bar: 15px !important;
  --footnote-divider-color: #e0def4 !important;
  --footnote-id-color: #e0def4 !important;
  --footnote-id-color-no-occurrences: #eb6f92 !important;
  --graph-node: #e0def4 !important;
  --graph-node-focused: #c4a7e7 !important;
  --graph-node-unresolved: #eb6f92 !important;
  --graph-text: #e0def4 !important;
  --gray: #e0def4 !important;
  --heading-formatting: #eb6f92 !important;
  --highlight: #312f44 !important;
  --hr-color: #e0def4 !important;
  --icon-color: #e0def4 !important;
  --icon-color-active: #c4a7e7 !important;
  --icon-color-focused: #e0def4 !important;
  --icon-color-hover: #e0def4 !important;
  --inline-code: #c4a7e7 !important;
  --input-date-separator: #eb6f92 !important;
  --input-placeholder-color: #eb6f92 !important;
  --interactive-accent: #f6c177 !important;
  --interactive-accent-hover: #ea9a97 !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #ea9a97 !important;
  --interactive-normal: #f6c177 !important;
  --light: #232136 !important;
  --lightgray: #312f44 !important;
  --link-color: #c4a7e7 !important;
  --link-color-hover: #9ccfd8 !important;
  --link-external-color: #c4a7e7 !important;
  --link-external-color-hover: #9ccfd8 !important;
  --link-unresolved-color: #c4a7e7 !important;
  --list-marker-color: #eb6f92 !important;
  --list-marker-color-collapsed: #c4a7e7 !important;
  --list-marker-color-hover: #e0def4 !important;
  --menu-background: #312f44 !important;
  --metadata-border-color: #e0def4 !important;
  --metadata-divider-color: #e0def4 !important;
  --metadata-input-text-color: #e0def4 !important;
  --metadata-label-text-color: #e0def4 !important;
  --metadata-label-text-color-hover: #e0def4 !important;
  --modal-background: #232136 !important;
  --nav-collapse-icon-color: #eb6f92 !important;
  --nav-collapse-icon-color-collapsed: #eb6f92 !important;
  --nav-heading-color: #e0def4 !important;
  --nav-heading-color-collapsed: #eb6f92 !important;
  --nav-heading-color-collapsed-hover: #e0def4 !important;
  --nav-heading-color-hover: #e0def4 !important;
  --nav-item-color: #e0def4 !important;
  --nav-item-color-active: #e0def4 !important;
  --nav-item-color-highlighted: #c4a7e7 !important;
  --nav-item-color-hover: #e0def4 !important;
  --nav-item-color-selected: #e0def4 !important;
  --nav-tag-color: #eb6f92 !important;
  --nav-tag-color-active: #e0def4 !important;
  --nav-tag-color-hover: #e0def4 !important;
  --pdf-background: #232136 !important;
  --pdf-page-background: #232136 !important;
  --pdf-shadow: 0 0 0 1px #e0def4 !important;
  --pdf-sidebar-background: #232136 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #e0def4 !important;
  --pill-border-color: #e0def4 !important;
  --pill-color: #e0def4 !important;
  --pill-color-hover: #e0def4 !important;
  --pill-color-remove: #eb6f92 !important;
  --pill-color-remove-hover: #c4a7e7 !important;
  --pre-code: #312f44 !important;
  --prompt-background: #232136 !important;
  --raised-background: color-mix(in srgb, #f6c177 65%, transparent) linear-gradient(#f6c177, color-mix(in srgb, #f6c177 65%, transparent)) !important;
  --ribbon-background: #312f44 !important;
  --ribbon-background-collapsed: #232136 !important;
  --scrollbar-active-thumb-bg: #232136 !important;
  --scrollbar-bg: #232136 !important;
  --scrollbar-thumb-bg: #232136 !important;
  --search-clear-button-color: #e0def4 !important;
  --search-icon-color: #e0def4 !important;
  --search-result-background: #232136 !important;
  --secondary: #c4a7e7 !important;
  --setting-group-heading-color: #e0def4 !important;
  --setting-items-background: #2a273f !important;
  --setting-items-border-color: #e0def4 !important;
  --slider-track-background: #e0def4 !important;
  --status-bar-background: #312f44 !important;
  --status-bar-border-color: #e0def4 !important;
  --status-bar-text-color: #e0def4 !important;
  --suggestion-background: #232136 !important;
  --tab-background-active: #232136 !important;
  --tab-container-background: #312f44 !important;
  --tab-outline-color: #e0def4 !important;
  --tab-switcher-background: #312f44 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #312f44, transparent) !important;
  --tab-text-color: #eb6f92 !important;
  --tab-text-color-active: #e0def4 !important;
  --tab-text-color-focused: #e0def4 !important;
  --tab-text-color-focused-active: #e0def4 !important;
  --tab-text-color-focused-active-current: #e0def4 !important;
  --tab-text-color-focused-highlighted: #c4a7e7 !important;
  --table-add-button-border-color: #e0def4 !important;
  --table-border-color: #e0def4 !important;
  --table-drag-handle-background-active: #f6c177 !important;
  --table-drag-handle-color: #eb6f92 !important;
  --table-drag-handle-color-active: #c4a7e7 !important;
  --table-header-border-color: #e0def4 !important;
  --table-header-color: #e0def4 !important;
  --table-selection-border-color: #f6c177 !important;
  --tag-color: #c4a7e7 !important;
  --tag-color-hover: #c4a7e7 !important;
  --tertiary: #9ccfd8 !important;
  --text-accent: #c4a7e7 !important;
  --text-accent-hover: #9ccfd8 !important;
  --text-error: #eb6f92 !important;
  --text-error-hover: #eb6f92 !important;
  --text-faint: #eb6f92 !important;
  --text-highlight-bg: #312f44 !important;
  --text-muted: #e0def4 !important;
  --text-normal: #e0def4 !important;
  --text-on-accent: #c4a7e7 !important;
  --text-selection: #6272a4 !important;
  --text-title-h1: #eb6f92 !important;
  --text-title-h2: #c4a7e7 !important;
  --text-title-h3: #ea9a97 !important;
  --text-title-h4: #f6c177 !important;
  --text-title-h5: #3e8fb0 !important;
  --text-title-h6: #9ccfd8 !important;
  --textHighlight: #312f44 !important;
  --titlebar-background: #312f44 !important;
  --titlebar-background-focused: #393552 !important;
  --titlebar-border-color: #e0def4 !important;
  --titlebar-text-color: #e0def4 !important;
  --titlebar-text-color-focused: #e0def4 !important;
  --vault-profile-color: #e0def4 !important;
  --vault-profile-color-hover: #e0def4 !important;
  --vim-cursor: #ea9a97 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 47, 68);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(35, 33, 54);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 47, 68);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 222, 244);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 47, 68);
  border-left-color: rgb(224, 222, 244);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(9, 15, 35);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  background-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

body .page article p > em, em {
  color: rgb(196, 167, 231);
  font-family: "Cartograph CF";
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body .page article p > i, i {
  color: rgb(196, 167, 231);
  font-family: "Cartograph CF";
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body .page article p > strong, strong {
  background-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

body .text-highlight {
  background-color: rgb(49, 47, 68);
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}`,
    links: `body a.external, footer a {
  color: rgb(196, 167, 231);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
  transition: 0.35s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(196, 167, 231);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body a.internal.broken {
  color: rgb(196, 167, 231);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}`,
    lists: `body dd {
  color: rgb(224, 222, 244);
}

body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

body dt {
  color: rgb(224, 222, 244);
}

body ol > li {
  color: rgb(224, 222, 244);
}

body ol.overflow {
  background-color: rgb(35, 33, 54);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(224, 222, 244);
}

body ul.overflow {
  background-color: rgb(35, 33, 54);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(235, 111, 146);
  text-decoration: rgb(235, 111, 146);
}

body blockquote {
  background-color: rgb(49, 47, 68);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body th {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(224, 222, 244);
}`,
    code: `body code {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  font-family: "Cartograph CF";
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(235, 111, 146);
}

body pre > code, pre:has(> code) {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-size: 18px;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  margin-bottom: 18px;
  margin-top: 18px;
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(42, 39, 63);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(246, 193, 119);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(246, 193, 119);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(224, 222, 244);
  text-decoration: line-through rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body input[type=checkbox] {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='-'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(35, 33, 54);
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 47, 68);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
}

body a.internal.tag-link::before {
  color: rgb(196, 167, 231);
}

body h1 {
  color: rgb(235, 111, 146);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2 {
  color: rgb(196, 167, 231);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h3 {
  color: rgb(234, 154, 151);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h4 {
  color: rgb(246, 193, 119);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h5 {
  color: rgb(62, 143, 176);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h6 {
  color: rgb(156, 207, 216);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body hr {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(224, 222, 244);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(224, 222, 244);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(224, 222, 244);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 222, 244);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}`,
    footer: `body footer {
  background-color: rgb(57, 53, 82);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-width: 0px;
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body footer ul li a {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .darkmode svg {
  color: rgb(224, 222, 244);
  stroke: rgb(224, 222, 244);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .breadcrumb-element p {
  color: rgb(235, 111, 146);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .navigation-progress {
  background-color: rgb(57, 53, 82);
}

body .page-header h2.page-title {
  color: rgb(224, 222, 244);
}

body abbr {
  color: rgb(224, 222, 244);
  text-decoration: underline dotted rgb(224, 222, 244);
}

body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body input[type=text] {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body kbd {
  background-color: rgb(42, 39, 63);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(224, 222, 244);
  font-size: 15px;
}

body summary {
  color: rgb(224, 222, 244);
}

body sup {
  color: rgb(224, 222, 244);
  font-size: 15px;
}`,
  },
  light: {},
};
