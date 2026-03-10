import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "behave-dark", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 152 !important;
  --accent-l: 60% !important;
  --accent-s: 56% !important;
  --background-accent: #D2D8E1 !important;
  --background-modifier-active-hover: rgba(96, 210, 157, 0.1) !important;
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
  --bases-table-cell-background-selected: rgba(96, 210, 157, 0.1) !important;
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
  --color-accent: rgb(96, 210, 157) !important;
  --color-accent-1: rgb(131, 221, 174) !important;
  --color-accent-2: rgb(162, 231, 193) !important;
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
  --link-unresolved-decoration-color: rgba(96, 210, 157, 0.3) !important;
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
  --nav-item-background-selected: rgba(96, 210, 157, 0.15) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(96, 210, 157) !important;
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
  --table-selection: rgba(96, 210, 157, 0.1) !important;
  --table-selection-border-color: #61D29D !important;
  --tag-background: rgba(96, 210, 157, 0.1) !important;
  --tag-background-hover: rgba(96, 210, 157, 0.2) !important;
  --tag-border-color: rgba(96, 210, 157, 0.15) !important;
  --tag-border-color-hover: rgba(96, 210, 157, 0.15) !important;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 41, 50);
  color: rgb(210, 216, 225);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(44, 51, 61);
  color: rgb(210, 216, 225);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 41, 50);
  color: rgb(210, 216, 225);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(210, 216, 225);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 41, 50);
  border-left-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body div#quartz-root {
  background-color: rgb(44, 51, 61);
  color: rgb(210, 216, 225);
}`,
    typography: `body .page article p > b, b {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration: rgb(97, 210, 157);
  text-decoration-color: rgb(97, 210, 157);
}

body .page article p > em, em {
  color: rgb(240, 216, 121);
  outline: rgb(240, 216, 121) none 0px;
  text-decoration: rgb(240, 216, 121);
  text-decoration-color: rgb(240, 216, 121);
}

body .page article p > i, i {
  color: rgb(240, 216, 121);
  outline: rgb(240, 216, 121) none 0px;
  text-decoration: rgb(240, 216, 121);
  text-decoration-color: rgb(240, 216, 121);
}

body .page article p > strong, strong {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration: rgb(97, 210, 157);
  text-decoration-color: rgb(97, 210, 157);
}

body .text-highlight {
  background-color: rgb(236, 144, 118);
  color: rgb(44, 51, 61);
  outline: rgb(44, 51, 61) none 0px;
  text-decoration: rgb(44, 51, 61);
  text-decoration-color: rgb(44, 51, 61);
}

body del {
  color: rgb(239, 77, 68);
  outline: rgb(239, 77, 68) none 0px;
  text-decoration: line-through rgb(239, 77, 68);
  text-decoration-color: rgb(239, 77, 68);
}

body p {
  color: rgb(210, 216, 225);
  outline: rgb(210, 216, 225) none 0px;
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration: rgb(97, 210, 157);
  text-decoration-color: rgb(97, 210, 157);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration: rgb(97, 210, 157);
  text-decoration-color: rgb(97, 210, 157);
}

body a.internal.broken {
  color: rgb(97, 210, 157);
  outline: rgb(97, 210, 157) none 0px;
  text-decoration: rgb(97, 210, 157);
  text-decoration-color: rgb(97, 210, 157);
}`,
    lists: `body dd {
  color: rgb(210, 216, 225);
}

body dt {
  color: rgb(210, 216, 225);
}

body ol > li {
  color: rgb(210, 216, 225);
}

body ol.overflow {
  background-color: rgb(44, 51, 61);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body ul > li {
  color: rgb(210, 216, 225);
}

body ul.overflow {
  background-color: rgb(44, 51, 61);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(144, 159, 181);
  text-decoration: rgb(144, 159, 181);
}

body blockquote {
  background-color: rgb(67, 77, 91);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body table {
  color: rgb(210, 216, 225);
}

body td {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body th {
  background-color: rgb(35, 41, 50);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(210, 216, 225);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(210, 216, 225);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(67, 77, 91);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(67, 77, 91);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(144, 159, 181);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body figcaption {
  color: rgb(210, 216, 225);
}

body figure {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body img {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body video {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}`,
    embeds: `body .file-embed {
  background-color: rgb(35, 41, 50);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body .footnotes {
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .transclude {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(97, 210, 157);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body .transclude-inner {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(97, 210, 157);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(210, 216, 225);
  text-decoration: line-through rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body input[type=checkbox] {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='*'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='-'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='/'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='>'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='?'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='I'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='S'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='b'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='c'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='d'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='f'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='i'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='k'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='l'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='p'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='u'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body li.task-list-item[data-task='w'] {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .search > .search-container > .search-space {
  background-color: rgb(44, 51, 61);
}

body .search > .search-container > .search-space > * {
  color: rgb(210, 216, 225);
  outline: rgb(210, 216, 225) none 0px;
  text-decoration: rgb(210, 216, 225);
  text-decoration-color: rgb(210, 216, 225);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(210, 216, 225);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(210, 216, 225);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(210, 216, 225);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(35, 41, 50);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(210, 216, 225);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(96, 210, 157, 0.1);
  border-bottom-color: rgba(96, 210, 157, 0.15);
  border-left-color: rgba(96, 210, 157, 0.15);
  border-right-color: rgba(96, 210, 157, 0.15);
  border-top-color: rgba(96, 210, 157, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(97, 210, 157);
}

body h1 {
  color: rgb(240, 216, 121);
}

body h2 {
  color: rgb(97, 210, 157);
}

body h2.page-title, h2.page-title a {
  color: rgb(210, 216, 225);
}

body h3 {
  color: rgb(236, 144, 118);
}

body h4 {
  color: rgb(106, 184, 229);
}

body h5 {
  color: rgb(125, 203, 196);
}

body h6 {
  color: rgb(66, 113, 174);
}

body hr {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}

body ::-webkit-scrollbar-corner {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}

body ::-webkit-scrollbar-track {
  background: rgb(44, 51, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 51, 61);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(210, 216, 225);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(210, 216, 225);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}`,
    footer: `body footer {
  background-color: rgb(35, 41, 50);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body footer ul li a {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(210, 216, 225);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(210, 216, 225);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body li.section-li > .section .meta {
  color: rgb(210, 216, 225);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(210, 216, 225);
  text-decoration: rgb(210, 216, 225);
}

body ul.section-ul {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .darkmode svg {
  color: rgb(210, 216, 225);
  stroke: rgb(210, 216, 225);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .breadcrumb-element p {
  color: rgb(144, 159, 181);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .metadata {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .metadata-properties {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body .navigation-progress {
  background-color: rgb(35, 41, 50);
}

body .page-header h2.page-title {
  color: rgb(210, 216, 225);
}

body abbr {
  color: rgb(210, 216, 225);
  text-decoration: underline dotted rgb(210, 216, 225);
}

body details {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body input[type=text] {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body kbd {
  background-color: rgb(35, 41, 50);
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
  color: rgb(210, 216, 225);
}

body progress {
  border-bottom-color: rgb(210, 216, 225);
  border-left-color: rgb(210, 216, 225);
  border-right-color: rgb(210, 216, 225);
  border-top-color: rgb(210, 216, 225);
}

body sub {
  color: rgb(210, 216, 225);
}

body summary {
  color: rgb(210, 216, 225);
}

body sup {
  color: rgb(210, 216, 225);
}`,
  },
  light: {},
};
