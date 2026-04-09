import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "behave-dark", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 152 !important;
  --accent-l: 60% !important;
  --accent-s: 56% !important;
  --background-accent: #D2D8E1 !important;
  --background-modifier-active-hover: hsla(152, 56%, 60%, 0.1) !important;
  --background-modifier-border: #D2D8E1 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #EF4D44 !important;
  --background-modifier-error-hover: #EF4D44 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-success: #61D29D !important;
  --background-primary: #2C333D !important;
  --background-primary-alt: #232932 !important;
  --background-secondary: #232932 !important;
  --background-secondary-alt: #2C333D !important;
  --bases-cards-background: #2C333D !important;
  --bases-cards-cover-background: #232932 !important;
  --bases-cards-shadow: 0 0 0 1px #D2D8E1 !important;
  --bases-embed-border-color: #D2D8E1 !important;
  --bases-group-heading-property-color: #D2D8E1 !important;
  --bases-table-border-color: #D2D8E1 !important;
  --bases-table-cell-background-active: #2C333D !important;
  --bases-table-cell-background-disabled: #232932 !important;
  --bases-table-cell-background-selected: hsla(152, 56%, 60%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #61D29D !important;
  --bases-table-group-background: #232932 !important;
  --bases-table-header-background: #2C333D !important;
  --bases-table-header-color: #D2D8E1 !important;
  --bases-table-summary-background: #2C333D !important;
  --blockquote-border: #FACB68 !important;
  --blockquote-border-color: #61D29D !important;
  --blur-background: color-mix(in srgb, #FACB68 65%, transparent) linear-gradient(#FACB68, color-mix(in srgb, #FACB68 65%, transparent)) !important;
  --border-color: #232932 !important;
  --canvas-background: #2C333D !important;
  --canvas-card-label-color: #909FB5 !important;
  --caret-color: #D2D8E1 !important;
  --checkbox-border-color: #909FB5 !important;
  --checkbox-border-color-hover: #D2D8E1 !important;
  --checkbox-color: #61D29D !important;
  --checkbox-color-hover: #C9A9F9 !important;
  --checkbox-marker-color: #2C333D !important;
  --checklist-done-color: #D2D8E1 !important;
  --code-background: #232932 !important;
  --code-block: #6AB8E5 !important;
  --code-border-color: #D2D8E1 !important;
  --code-comment: #909FB5 !important;
  --code-normal: #D2D8E1 !important;
  --code-punctuation: #D2D8E1 !important;
  --collapse-icon-color: #909FB5 !important;
  --collapse-icon-color-collapsed: #61D29D !important;
  --color-accent: hsl(152, 56%, 60%) !important;
  --color-accent-1: hsl(149, 57.12%, 69%) !important;
  --color-accent-2: hsl(147, 58.8%, 77.4%) !important;
  --color-accent-hsl: 152, 56%, 60% !important;
  --dark: #D2D8E1 !important;
  --darkgray: #D2D8E1 !important;
  --divider-color: #D2D8E1 !important;
  --divider-color-hover: #61D29D !important;
  --dropdown-background: #FACB68 !important;
  --dropdown-background-hover: #EF4D44 !important;
  --embed-block-shadow-hover: 0 0 0 1px #D2D8E1, inset 0 0 0 1px #D2D8E1 !important;
  --embed-border-start: 2px solid #61D29D !important;
  --file-header-background: #2C333D !important;
  --file-header-background-focused: #2C333D !important;
  --flair-background: #FACB68 !important;
  --flair-color: #D2D8E1 !important;
  --footnote-divider-color: #D2D8E1 !important;
  --footnote-id-color: #D2D8E1 !important;
  --footnote-id-color-no-occurrences: #909FB5 !important;
  --graph-node: #D2D8E1 !important;
  --graph-node-focused: #61D29D !important;
  --graph-node-unresolved: #909FB5 !important;
  --graph-text: #D2D8E1 !important;
  --gray: #D2D8E1 !important;
  --heading-formatting: #909FB5 !important;
  --highlight: #4271AE !important;
  --hr-color: #D2D8E1 !important;
  --icon-color: #D2D8E1 !important;
  --icon-color-active: #61D29D !important;
  --icon-color-focused: #D2D8E1 !important;
  --icon-color-hover: #D2D8E1 !important;
  --inline-code: #6AB8E5 !important;
  --input-date-separator: #909FB5 !important;
  --input-placeholder-color: #909FB5 !important;
  --interactive-accent: #61D29D !important;
  --interactive-accent-hover: #C9A9F9 !important;
  --interactive-accent-hsl: 152, 56%, 60% !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #EF4D44 !important;
  --interactive-normal: #FACB68 !important;
  --light: #2C333D !important;
  --lightgray: #232932 !important;
  --link-color: #61D29D !important;
  --link-color-hover: #C9A9F9 !important;
  --link-external-color: #61D29D !important;
  --link-external-color-hover: #C9A9F9 !important;
  --link-unresolved-color: #61D29D !important;
  --link-unresolved-decoration-color: hsla(152, 56%, 60%, 0.3) !important;
  --list-marker-color: #909FB5 !important;
  --list-marker-color-collapsed: #61D29D !important;
  --list-marker-color-hover: #D2D8E1 !important;
  --menu-background: #232932 !important;
  --metadata-border-color: #D2D8E1 !important;
  --metadata-divider-color: #D2D8E1 !important;
  --metadata-input-text-color: #D2D8E1 !important;
  --metadata-label-text-color: #D2D8E1 !important;
  --metadata-label-text-color-hover: #D2D8E1 !important;
  --modal-background: #2C333D !important;
  --nav-collapse-icon-color: #909FB5 !important;
  --nav-collapse-icon-color-collapsed: #909FB5 !important;
  --nav-heading-color: #D2D8E1 !important;
  --nav-heading-color-collapsed: #909FB5 !important;
  --nav-heading-color-collapsed-hover: #D2D8E1 !important;
  --nav-heading-color-hover: #D2D8E1 !important;
  --nav-item-background-selected: hsla(152, 56%, 60%, 0.15) !important;
  --nav-item-color: #D2D8E1 !important;
  --nav-item-color-active: #D2D8E1 !important;
  --nav-item-color-highlighted: #61D29D !important;
  --nav-item-color-hover: #D2D8E1 !important;
  --nav-item-color-selected: #D2D8E1 !important;
  --nav-tag-color: #909FB5 !important;
  --nav-tag-color-active: #D2D8E1 !important;
  --nav-tag-color-hover: #D2D8E1 !important;
  --pdf-background: #2C333D !important;
  --pdf-page-background: #2C333D !important;
  --pdf-shadow: 0 0 0 1px #D2D8E1 !important;
  --pdf-sidebar-background: #2C333D !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #D2D8E1 !important;
  --pill-border-color: #D2D8E1 !important;
  --pill-color: #D2D8E1 !important;
  --pill-color-hover: #D2D8E1 !important;
  --pill-color-remove: #909FB5 !important;
  --pill-color-remove-hover: #61D29D !important;
  --pre-code: #434D5B !important;
  --prompt-background: #2C333D !important;
  --raised-background: color-mix(in srgb, #FACB68 65%, transparent) linear-gradient(#FACB68, color-mix(in srgb, #FACB68 65%, transparent)) !important;
  --ribbon-background: #232932 !important;
  --ribbon-background-collapsed: #2C333D !important;
  --search-clear-button-color: #D2D8E1 !important;
  --search-icon-color: #D2D8E1 !important;
  --search-result-background: #2C333D !important;
  --secondary: #61D29D !important;
  --setting-group-heading-color: #D2D8E1 !important;
  --setting-items-background: #232932 !important;
  --setting-items-border-color: #D2D8E1 !important;
  --slider-track-background: #D2D8E1 !important;
  --status-bar-background: #232932 !important;
  --status-bar-border-color: #D2D8E1 !important;
  --status-bar-text-color: #D2D8E1 !important;
  --suggestion-background: #2C333D !important;
  --tab-background-active: #2C333D !important;
  --tab-container-background: #232932 !important;
  --tab-outline-color: #D2D8E1 !important;
  --tab-switcher-background: #232932 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #232932, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(152, 56%, 60%) !important;
  --tab-text-color: #909FB5 !important;
  --tab-text-color-active: #D2D8E1 !important;
  --tab-text-color-focused: #D2D8E1 !important;
  --tab-text-color-focused-active: #D2D8E1 !important;
  --tab-text-color-focused-active-current: #D2D8E1 !important;
  --tab-text-color-focused-highlighted: #61D29D !important;
  --table-add-button-border-color: #D2D8E1 !important;
  --table-border-color: #D2D8E1 !important;
  --table-drag-handle-background-active: #61D29D !important;
  --table-drag-handle-color: #909FB5 !important;
  --table-drag-handle-color-active: #434D5B !important;
  --table-header-border-color: #D2D8E1 !important;
  --table-header-color: #D2D8E1 !important;
  --table-selection: hsla(152, 56%, 60%, 0.1) !important;
  --table-selection-border-color: #61D29D !important;
  --tag-background: hsla(152, 56%, 60%, 0.1) !important;
  --tag-background-hover: hsla(152, 56%, 60%, 0.2) !important;
  --tag-border-color: hsla(152, 56%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(152, 56%, 60%, 0.15) !important;
  --tag-color: #61D29D !important;
  --tag-color-hover: #61D29D !important;
  --tertiary: #C9A9F9 !important;
  --text-accent: #61D29D !important;
  --text-accent-hover: #C9A9F9 !important;
  --text-accent-second: #F0D879 !important;
  --text-error: #EF4D44 !important;
  --text-error-hover: #EF4D44 !important;
  --text-faint: #909FB5 !important;
  --text-highlight-bg: #4271AE !important;
  --text-muted: #D2D8E1 !important;
  --text-normal: #D2D8E1 !important;
  --text-on-accent: #434D5B !important;
  --text-selection: #434D5B !important;
  --text-title-h1: #F0D879 !important;
  --text-title-h2: #61D29D !important;
  --text-title-h3: #EC9076 !important;
  --text-title-h4: #6AB8E5 !important;
  --text-title-h5: #7DCBC4 !important;
  --text-title-h6: #4271AE !important;
  --textHighlight: #4271AE !important;
  --titlebar-background: #232932 !important;
  --titlebar-background-focused: #2C333D !important;
  --titlebar-border-color: #D2D8E1 !important;
  --titlebar-text-color: #D2D8E1 !important;
  --titlebar-text-color-focused: #D2D8E1 !important;
  --vault-profile-color: #D2D8E1 !important;
  --vault-profile-color-hover: #D2D8E1 !important;
  --vim-cursor: #EC9076 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 41, 50);
  color: rgb(210, 216, 225);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(44, 51, 61);
  color: rgb(210, 216, 225);
}

html body .bases-table thead th {
  background-color: rgb(35, 41, 50);
  border-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
  font-weight: 800;
}

html body .canvas-node {
  border-color: rgb(210, 216, 225);
}

html body .canvas-node-content {
  color: rgb(210, 216, 225);
}

html body .canvas-node-file {
  color: rgb(210, 216, 225);
}

html body .canvas-node-group {
  border-color: rgb(210, 216, 225);
}

html body .canvas-sidebar {
  background-color: rgb(35, 41, 50);
  border-color: rgb(210, 216, 225);
}

html body .note-properties {
  border-color: rgb(210, 216, 225);
}

html body .note-properties-key {
  color: rgb(210, 216, 225);
}

html body .note-properties-row {
  border-color: rgb(210, 216, 225);
}

html body .note-properties-tags {
  background-color: rgba(96, 210, 157, 0.1);
  color: rgb(97, 210, 157);
}

html body .note-properties-value {
  color: rgb(210, 216, 225);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 41, 50);
  color: rgb(210, 216, 225);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(210, 216, 225);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 41, 50);
  border-left-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body div#quartz-root {
  background-color: rgb(44, 51, 61);
  color: rgb(210, 216, 225);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration-color: rgb(97, 210, 157);
}

html body .page article p > em, html em {
  color: rgb(240, 216, 121);
  outline: rgb(240, 216, 121) none 0px;
  text-decoration-color: rgb(240, 216, 121);
}

html body .page article p > i, html i {
  color: rgb(240, 216, 121);
  outline: rgb(240, 216, 121) none 0px;
  text-decoration-color: rgb(240, 216, 121);
}

html body .page article p > strong, html strong {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration-color: rgb(97, 210, 157);
}

html body .text-highlight {
  background-color: rgb(236, 144, 118);
  color: rgb(44, 51, 61);
  outline: rgb(44, 51, 61) none 0px;
  text-decoration-color: rgb(44, 51, 61);
}

html body del {
  color: rgb(239, 77, 68);
  outline: rgb(239, 77, 68) none 0px;
  text-decoration-color: rgb(239, 77, 68);
}

html body h1.article-title {
  color: rgb(210, 216, 225);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(144, 159, 181);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(97, 210, 157);
  border-color: rgb(97, 210, 157);
}

html body p {
  color: rgb(210, 216, 225);
  outline: rgb(210, 216, 225) none 0px;
  text-decoration-color: rgb(210, 216, 225);
}`,
    links: `html body a.external, html footer a {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration-color: rgb(97, 210, 157);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration-color: rgb(97, 210, 157);
}

html body a.internal.broken {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration-color: rgb(97, 210, 157);
}`,
    lists: `html body dd {
  color: rgb(210, 216, 225);
}

html body dt {
  color: rgb(210, 216, 225);
}

html body ol > li {
  color: rgb(210, 216, 225);
}

html body ol.overflow {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body ul > li {
  color: rgb(210, 216, 225);
}

html body ul.overflow {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(144, 159, 181);
}

html body blockquote {
  background-color: rgb(67, 77, 91);
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body table {
  color: rgb(210, 216, 225);
}

html body td {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body th {
  background-color: rgb(35, 41, 50);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgb(210, 216, 225);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html body tr {
  border-bottom-color: rgb(210, 216, 225);
}`,
    code: `html body code {
  background-color: rgb(67, 77, 91);
  border-bottom-color: rgb(144, 159, 181);
  border-left-color: rgb(144, 159, 181);
  border-right-color: rgb(144, 159, 181);
  border-top-color: rgb(144, 159, 181);
  color: rgb(144, 159, 181);
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(67, 77, 91);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(67, 77, 91);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(144, 159, 181);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(67, 77, 91);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(67, 77, 91);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body figcaption {
  color: rgb(210, 216, 225);
}

html body figure {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body img {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body video {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(35, 41, 50);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body .footnotes {
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .transclude {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(97, 210, 157);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body .transclude-inner {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  margin-right: 0px;
  width: 16.6562px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
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
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .search > .search-container > .search-space {
  background-color: rgb(44, 51, 61);
}

html body .search > .search-container > .search-space > * {
  color: rgb(210, 216, 225);
  outline: rgb(210, 216, 225) none 0px;
  text-decoration-color: rgb(210, 216, 225);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(210, 216, 225);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(210, 216, 225);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(210, 216, 225);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(35, 41, 50);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(210, 216, 225);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(96, 210, 157, 0.1);
  border-bottom-color: rgba(96, 210, 157, 0.15);
  border-left-color: rgba(96, 210, 157, 0.15);
  border-right-color: rgba(96, 210, 157, 0.15);
  border-top-color: rgba(96, 210, 157, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(97, 210, 157);
}

html body h1 {
  color: rgb(240, 216, 121);
}

html body h2 {
  color: rgb(97, 210, 157);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(210, 216, 225);
}

html body h3 {
  color: rgb(236, 144, 118);
}

html body h4 {
  color: rgb(106, 184, 229);
}

html body h5 {
  color: rgb(125, 203, 196);
}

html body h6 {
  color: rgb(66, 113, 174);
}

html body hr {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}

html body ::-webkit-scrollbar-track {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(210, 216, 225);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(210, 216, 225);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(210, 216, 225);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}`,
    footer: `html body footer {
  background-color: rgb(35, 41, 50);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body footer ul li a {
  color: rgb(210, 216, 225);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(210, 216, 225);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(210, 216, 225);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(210, 216, 225);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body li.section-li > .section .meta {
  color: rgb(210, 216, 225);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(210, 216, 225);
}

html body ul.section-ul {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .darkmode svg {
  color: rgb(210, 216, 225);
  stroke: rgb(210, 216, 225);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .breadcrumb-element p {
  color: rgb(144, 159, 181);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .metadata {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .metadata-properties {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body .navigation-progress {
  background-color: rgb(35, 41, 50);
}

html body .page-header h2.page-title {
  color: rgb(210, 216, 225);
}

html body abbr {
  color: rgb(210, 216, 225);
}

html body details {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body input[type=text] {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body kbd {
  background-color: rgb(35, 41, 50);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

html body progress {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

html body sub {
  color: rgb(210, 216, 225);
}

html body summary {
  color: rgb(210, 216, 225);
}

html body sup {
  color: rgb(210, 216, 225);
}

html body ul.tags > li {
  background-color: rgba(96, 210, 157, 0.1);
  border-bottom-color: rgba(96, 210, 157, 0.15);
  border-left-color: rgba(96, 210, 157, 0.15);
  border-right-color: rgba(96, 210, 157, 0.15);
  border-top-color: rgba(96, 210, 157, 0.15);
  color: rgb(201, 169, 249);
}`,
  },
  light: {},
};
