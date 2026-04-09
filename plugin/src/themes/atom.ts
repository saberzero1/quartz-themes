import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "atom", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 219 !important;
  --accent-l: 55% !important;
  --accent-s: 56% !important;
  --aqua: #56b6c2 !important;
  --background-accent: #000 !important;
  --background-modifier-active-hover: hsla(219, 56%, 55%, 0.1) !important;
  --background-modifier-border: #424958 !important;
  --background-modifier-border-focus: #353b47 !important;
  --background-modifier-border-hover: #353b47 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-hover: hsla(219, 21%, 55%, 0.06) !important;
  --background-modifier-message: #1a1e24 !important;
  --background-modifier-success: #539126 !important;
  --background-primary: #272b34 !important;
  --background-primary-alt: #20242b !important;
  --background-secondary: #20242b !important;
  --background-secondary-alt: #1a1e24 !important;
  --bases-cards-background: #272b34 !important;
  --bases-cards-cover-background: #20242b !important;
  --bases-cards-shadow: 0 0 0 1px #424958 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #353b47 !important;
  --bases-embed-border-color: #424958 !important;
  --bases-group-heading-property-color: #888 !important;
  --bases-table-border-color: #424958 !important;
  --bases-table-cell-background-active: #272b34 !important;
  --bases-table-cell-background-disabled: #20242b !important;
  --bases-table-cell-background-selected: hsla(219, 56%, 55%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #353b47 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(219, 56%, 55%) !important;
  --bases-table-group-background: #20242b !important;
  --bases-table-header-background: #272b34 !important;
  --bases-table-header-background-hover: hsla(219, 21%, 55%, 0.06) !important;
  --bases-table-header-color: #888 !important;
  --bases-table-summary-background: #272b34 !important;
  --bases-table-summary-background-hover: hsla(219, 21%, 55%, 0.06) !important;
  --blockquote-border-color: hsl(219, 56%, 55%) !important;
  --blue: #61afef !important;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --canvas-background: #272b34 !important;
  --canvas-card-label-color: rgb(81, 86, 99) !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: rgb(81, 86, 99) !important;
  --checkbox-border-color-hover: #888 !important;
  --checkbox-color: #61afef !important;
  --checkbox-color-hover: #70bdfc !important;
  --checkbox-marker-color: #272b34 !important;
  --checklist-done-color: #888 !important;
  --code-background: #20242b !important;
  --code-border-color: #424958 !important;
  --code-bracket-background: hsla(219, 21%, 55%, 0.06) !important;
  --code-comment: rgb(81, 86, 99) !important;
  --code-normal: #dcddde !important;
  --code-punctuation: #888 !important;
  --collapse-icon-color: rgb(81, 86, 99) !important;
  --collapse-icon-color-collapsed: #61afef !important;
  --color-accent: hsl(219, 56%, 55%) !important;
  --color-accent-1: hsl(216, 57.12%, 63.25%) !important;
  --color-accent-2: hsl(214, 58.8%, 70.95%) !important;
  --color-accent-hsl: 219, 56%, 55% !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --divider-color: transparent !important;
  --divider-color-hover: #404754 !important;
  --drag-ghost-background: #1a1e24 !important;
  --dropdown-background: #20242b !important;
  --dropdown-background-hover: #353b47 !important;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958 !important;
  --embed-border-start: 2px solid hsl(219, 56%, 55%) !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #272b34 !important;
  --file-header-background-focused: #272b34 !important;
  --flair-background: #20242b !important;
  --flair-color: #dcddde !important;
  --footnote-divider-color: #424958 !important;
  --footnote-id-color: #888 !important;
  --footnote-id-color-no-occurrences: rgb(81, 86, 99) !important;
  --footnote-input-background-active: hsla(219, 21%, 55%, 0.06) !important;
  --graph-node: #888 !important;
  --graph-node-focused: #61afef !important;
  --graph-node-unresolved: rgb(81, 86, 99) !important;
  --graph-text: #dcddde !important;
  --gray: #888 !important;
  --gray-1: #5C6370 !important;
  --gray-2: #abb2bf !important;
  --green: #98c379 !important;
  --heading-formatting: rgb(81, 86, 99) !important;
  --highlight: rgba(255, 255, 0, 0.4) !important;
  --hr-color: #424958 !important;
  --icon-color: #888 !important;
  --icon-color-active: #61afef !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #888 !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgb(81, 86, 99) !important;
  --input-placeholder-color: rgb(81, 86, 99) !important;
  --interactive-accent: hsl(219, 56%, 55%) !important;
  --interactive-accent-hover: hsl(219, 61%, 45%) !important;
  --interactive-accent-hsl: 219, 56%, 55% !important;
  --interactive-hover: #353b47 !important;
  --interactive-normal: #20242b !important;
  --light: #272b34 !important;
  --lightgray: #20242b !important;
  --link-color: #61afef !important;
  --link-color-hover: #70bdfc !important;
  --link-decoration: none !important;
  --link-external-color: #61afef !important;
  --link-external-color-hover: #70bdfc !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #61afef !important;
  --link-unresolved-decoration-color: hsla(219, 56%, 55%, 0.3) !important;
  --list-marker-color: rgb(81, 86, 99) !important;
  --list-marker-color-collapsed: #61afef !important;
  --list-marker-color-hover: #888 !important;
  --menu-background: #20242b !important;
  --menu-border-color: #353b47 !important;
  --metadata-border-color: #424958 !important;
  --metadata-divider-color: #424958 !important;
  --metadata-input-background-active: hsla(219, 21%, 55%, 0.06) !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-background-active: hsla(219, 21%, 55%, 0.06) !important;
  --metadata-label-text-color: #888 !important;
  --metadata-label-text-color-hover: #888 !important;
  --metadata-property-background-active: hsla(219, 21%, 55%, 0.06) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #353b47 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #353b47 !important;
  --modal-background: #272b34 !important;
  --modal-border-color: #18191e !important;
  --nav-collapse-icon-color: rgb(81, 86, 99) !important;
  --nav-collapse-icon-color-collapsed: rgb(81, 86, 99) !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: rgb(81, 86, 99) !important;
  --nav-heading-color-collapsed-hover: #888 !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-background-active: hsl(219, 56%, 55%) !important;
  --nav-item-background-hover: hsla(219, 21%, 55%, 0.06) !important;
  --nav-item-background-selected: hsla(219, 56%, 55%, 0.15) !important;
  --nav-item-color: #888 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #61afef !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-tag-color: rgb(81, 86, 99) !important;
  --nav-tag-color-active: #888 !important;
  --nav-tag-color-hover: #888 !important;
  --orange: #d19a66 !important;
  --panel-border-color: #18191e !important;
  --pdf-background: #272b34 !important;
  --pdf-page-background: #272b34 !important;
  --pdf-shadow: 0 0 0 1px #424958 !important;
  --pdf-sidebar-background: #272b34 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #424958 !important;
  --pill-border-color: #424958 !important;
  --pill-border-color-hover: #353b47 !important;
  --pill-color: #888 !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: rgb(81, 86, 99) !important;
  --pill-color-remove-hover: #61afef !important;
  --prompt-background: #272b34 !important;
  --prompt-border-color: #18191e !important;
  --purple: #c678dd !important;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --red: #e06c75 !important;
  --ribbon-background: #272b34 !important;
  --ribbon-background-collapsed: #272b34 !important;
  --search-clear-button-color: #888 !important;
  --search-icon-color: #888 !important;
  --search-result-background: #272b34 !important;
  --secondary: #61afef !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: #20242b !important;
  --setting-items-border-color: #424958 !important;
  --slider-thumb-border-color: #353b47 !important;
  --slider-track-background: #424958 !important;
  --status-bar-background: #20242b !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #888 !important;
  --suggestion-background: #272b34 !important;
  --tab-background-active: #272b34 !important;
  --tab-container-background: #20242b !important;
  --tab-divider-color: #353b47 !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #20242b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #20242b, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(219, 56%, 55%) !important;
  --tab-text-color: rgb(81, 86, 99) !important;
  --tab-text-color-active: #888 !important;
  --tab-text-color-focused: #888 !important;
  --tab-text-color-focused-active: #888 !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: #61afef !important;
  --table-add-button-border-color: #424958 !important;
  --table-border-color: #424958 !important;
  --table-drag-handle-background-active: hsl(219, 56%, 55%) !important;
  --table-drag-handle-color: rgb(81, 86, 99) !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #424958 !important;
  --table-header-color: #dcddde !important;
  --table-selection: hsla(219, 56%, 55%, 0.1) !important;
  --table-selection-border-color: hsl(219, 56%, 55%) !important;
  --tag-background: #20242b !important;
  --tag-background-hover: #20242b !important;
  --tag-border-color: hsla(219, 56%, 55%, 0.15) !important;
  --tag-border-color-hover: hsla(219, 56%, 55%, 0.15) !important;
  --tag-color: #e5c07b !important;
  --tag-color-hover: #e5c07b !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 4px !important;
  --tertiary: #70bdfc !important;
  --text-accent: #61afef !important;
  --text-accent-hover: #70bdfc !important;
  --text-error: #e16d76 !important;
  --text-error-hover: #c9626a !important;
  --text-faint: rgb(81, 86, 99) !important;
  --text-highlight-bg: rgba(255, 255, 0, 0.4) !important;
  --text-muted: #888 !important;
  --text-normal: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --textHighlight: rgba(255, 255, 0, 0.4) !important;
  --titlebar-background: #20242b !important;
  --titlebar-background-focused: #1a1e24 !important;
  --titlebar-border-color: #424958 !important;
  --titlebar-text-color: #888 !important;
  --titlebar-text-color-focused: #dcddde !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --yellow: #e5c07b !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 36, 43);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(39, 43, 52);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
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
  background-color: rgb(32, 36, 43);
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(66, 73, 88);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(32, 36, 43);
  border-radius: 4px;
  color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 36, 43);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 36, 43);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(39, 43, 52);
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
  background-color: rgba(255, 255, 0, 0.4);
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
  text-decoration: underline rgb(136, 136, 136);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(81, 86, 99);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(97, 175, 239);
  border-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgba(76, 121, 205, 0.3);
  text-decoration-color: rgba(76, 121, 205, 0.3);
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
  color: rgb(81, 86, 99);
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
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-bottom: 16px;
  padding-top: 16px;
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
  background-color: rgb(32, 36, 43);
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
  border-left-color: rgb(76, 121, 205);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  text-align: left;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(81, 86, 99);
  border-left-color: rgb(81, 86, 99);
  border-right-color: rgb(81, 86, 99);
  border-top-color: rgb(81, 86, 99);
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(39, 43, 52);
  border-bottom-color: rgb(24, 25, 30);
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-top-color: rgb(24, 25, 30);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(116, 133, 164, 0.06);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(24, 25, 30);
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-top-color: rgb(24, 25, 30);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 36, 43);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(116, 133, 164, 0.06);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(116, 133, 164, 0.06);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(76, 121, 205, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(76, 121, 205, 0.15);
  border-right-color: rgba(76, 121, 205, 0.15);
  border-top-color: rgba(76, 121, 205, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(229, 192, 123);
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
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
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
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(136, 136, 136);
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
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
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
  color: rgb(81, 86, 99);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
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
  background-color: rgb(32, 36, 43);
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
  background-color: rgb(32, 36, 43);
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
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(76, 121, 205, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(76, 121, 205, 0.15);
  border-right-color: rgba(76, 121, 205, 0.15);
  border-top-color: rgba(76, 121, 205, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(229, 192, 123);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 230 !important;
  --accent-l: 64% !important;
  --accent-s: 83% !important;
  --aqua: #0084bc !important;
  --background-accent: #fff !important;
  --background-modifier-active-hover: hsla(230, 83%, 64%, 0.1) !important;
  --background-modifier-border: #dbdbdc !important;
  --background-modifier-border-focus: #dbdbdc !important;
  --background-modifier-border-hover: #dbdbdc !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #e68787 !important;
  --background-modifier-error-hover: #FF9494 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-form-field: #fff !important;
  --background-modifier-form-field-highlighted: #fff !important;
  --background-modifier-form-field-hover: #fff !important;
  --background-modifier-message: #dbdbdc !important;
  --background-modifier-success: #A4E7C3 !important;
  --background-primary: #fafafa !important;
  --background-primary-alt: #eaeaeb !important;
  --background-secondary: #eaeaeb !important;
  --background-secondary-alt: #dbdbdc !important;
  --bases-cards-background: #fafafa !important;
  --bases-cards-cover-background: #eaeaeb !important;
  --bases-cards-shadow: 0 0 0 1px #dbdbdc !important;
  --bases-cards-shadow-hover: 0 0 0 1px #dbdbdc !important;
  --bases-embed-border-color: #dbdbdc !important;
  --bases-group-heading-property-color: #8e8e90 !important;
  --bases-table-border-color: #dbdbdc !important;
  --bases-table-cell-background-active: #fafafa !important;
  --bases-table-cell-background-disabled: #eaeaeb !important;
  --bases-table-cell-background-selected: hsla(230, 83%, 64%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #dbdbdc !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(229, 83.83%, 68.8%) !important;
  --bases-table-group-background: #eaeaeb !important;
  --bases-table-header-background: #fafafa !important;
  --bases-table-header-color: #8e8e90 !important;
  --bases-table-summary-background: #fafafa !important;
  --blockquote-border-color: hsl(229, 83.83%, 68.8%) !important;
  --blue: #3d74f6 !important;
  --blur-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent)) !important;
  --canvas-background: #fafafa !important;
  --canvas-card-label-color: #999999 !important;
  --caret-color: #383a42 !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #8e8e90 !important;
  --checkbox-color: #1592ff !important;
  --checkbox-color-hover: #097add !important;
  --checkbox-marker-color: #fafafa !important;
  --checklist-done-color: #8e8e90 !important;
  --code-background: #eaeaeb !important;
  --code-border-color: #dbdbdc !important;
  --code-comment: #999999 !important;
  --code-normal: #383a42 !important;
  --code-punctuation: #8e8e90 !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #1592ff !important;
  --color-accent: hsl(230, 83%, 64%) !important;
  --color-accent-1: hsl(229, 83.83%, 68.8%) !important;
  --color-accent-2: hsl(227, 84.66%, 73.6%) !important;
  --color-accent-hsl: 230, 83%, 64% !important;
  --dark: #383a42 !important;
  --darkgray: #383a42 !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(229, 83.83%, 68.8%) !important;
  --drag-ghost-background: #dbdbdc !important;
  --dropdown-background: #eaeaeb !important;
  --dropdown-background-hover: #dbdbdc !important;
  --embed-block-shadow-hover: 0 0 0 1px #dbdbdc, inset 0 0 0 1px #dbdbdc !important;
  --embed-border-start: 2px solid hsl(229, 83.83%, 68.8%) !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #fafafa !important;
  --file-header-background-focused: #fafafa !important;
  --flair-background: #eaeaeb !important;
  --flair-color: #383a42 !important;
  --footnote-divider-color: #dbdbdc !important;
  --footnote-id-color: #8e8e90 !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --graph-node: #8e8e90 !important;
  --graph-node-focused: #1592ff !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #383a42 !important;
  --gray: #8e8e90 !important;
  --gray-1: #383a42 !important;
  --gray-2: #383a42 !important;
  --green: #4ea24c !important;
  --heading-formatting: #999999 !important;
  --highlight: rgba(255, 255, 0, 0.4) !important;
  --hr-color: #dbdbdc !important;
  --icon-color: #8e8e90 !important;
  --icon-color-active: #1592ff !important;
  --icon-color-focused: #383a42 !important;
  --icon-color-hover: #8e8e90 !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: hsl(229, 83.83%, 68.8%) !important;
  --interactive-accent-hover: hsl(230, 73%, 60%) !important;
  --interactive-accent-hsl: 230, 83%, 64% !important;
  --interactive-accent-rgb: 21, 146, 255 !important;
  --interactive-hover: #dbdbdc !important;
  --interactive-normal: #eaeaeb !important;
  --light: #fafafa !important;
  --lightgray: #eaeaeb !important;
  --link-color: #1592ff !important;
  --link-color-hover: #097add !important;
  --link-decoration: none !important;
  --link-external-color: #1592ff !important;
  --link-external-color-hover: #097add !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #1592ff !important;
  --link-unresolved-decoration-color: hsla(230, 83%, 64%, 0.3) !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: #1592ff !important;
  --list-marker-color-hover: #8e8e90 !important;
  --menu-background: #eaeaeb !important;
  --menu-border-color: #dbdbdc !important;
  --metadata-border-color: #dbdbdc !important;
  --metadata-divider-color: #dbdbdc !important;
  --metadata-input-text-color: #383a42 !important;
  --metadata-label-text-color: #8e8e90 !important;
  --metadata-label-text-color-hover: #8e8e90 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #dbdbdc !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #dbdbdc !important;
  --modal-background: #fafafa !important;
  --modal-border-color: #dbdbdc !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #383a42 !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #8e8e90 !important;
  --nav-heading-color-hover: #383a42 !important;
  --nav-item-background-active: hsl(229, 83.83%, 68.8%) !important;
  --nav-item-background-selected: hsla(230, 83%, 64%, 0.15) !important;
  --nav-item-color: #8e8e90 !important;
  --nav-item-color-active: #383a42 !important;
  --nav-item-color-highlighted: #1592ff !important;
  --nav-item-color-hover: #383a42 !important;
  --nav-item-color-selected: #383a42 !important;
  --nav-tag-color: #999999 !important;
  --nav-tag-color-active: #8e8e90 !important;
  --nav-tag-color-hover: #8e8e90 !important;
  --orange: #986800 !important;
  --panel-border-color: #dbdbdc !important;
  --pdf-background: #fafafa !important;
  --pdf-page-background: #fafafa !important;
  --pdf-sidebar-background: #fafafa !important;
  --pill-border-color: #dbdbdc !important;
  --pill-border-color-hover: #dbdbdc !important;
  --pill-color: #8e8e90 !important;
  --pill-color-hover: #383a42 !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #1592ff !important;
  --prompt-background: #fafafa !important;
  --prompt-border-color: #dbdbdc !important;
  --purple: #a625a4 !important;
  --raised-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent)) !important;
  --red: #e75545 !important;
  --ribbon-background: #fafafa !important;
  --ribbon-background-collapsed: #fafafa !important;
  --search-clear-button-color: #8e8e90 !important;
  --search-icon-color: #8e8e90 !important;
  --search-result-background: #fafafa !important;
  --secondary: #1592ff !important;
  --setting-group-heading-color: #383a42 !important;
  --setting-items-background: #eaeaeb !important;
  --setting-items-border-color: #dbdbdc !important;
  --slider-thumb-border-color: #dbdbdc !important;
  --slider-track-background: #dbdbdc !important;
  --status-bar-background: #eaeaeb !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #8e8e90 !important;
  --suggestion-background: #fafafa !important;
  --tab-background-active: #fafafa !important;
  --tab-container-background: #eaeaeb !important;
  --tab-divider-color: #dbdbdc !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #eaeaeb !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #eaeaeb, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(230, 83%, 64%) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-active: #8e8e90 !important;
  --tab-text-color-focused: #8e8e90 !important;
  --tab-text-color-focused-active: #8e8e90 !important;
  --tab-text-color-focused-active-current: #383a42 !important;
  --tab-text-color-focused-highlighted: #1592ff !important;
  --table-add-button-border-color: #dbdbdc !important;
  --table-border-color: #dbdbdc !important;
  --table-drag-handle-background-active: hsl(229, 83.83%, 68.8%) !important;
  --table-drag-handle-color: #999999 !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: #dbdbdc !important;
  --table-header-color: #383a42 !important;
  --table-selection: hsla(230, 83%, 64%, 0.1) !important;
  --table-selection-border-color: hsl(229, 83.83%, 68.8%) !important;
  --tag-background: #eaeaeb !important;
  --tag-background-hover: #eaeaeb !important;
  --tag-border-color: hsla(230, 83%, 64%, 0.15) !important;
  --tag-border-color-hover: hsla(230, 83%, 64%, 0.15) !important;
  --tag-color: #e35649 !important;
  --tag-color-hover: #e35649 !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 4px !important;
  --tertiary: #097add !important;
  --text-accent: #1592ff !important;
  --text-accent-hover: #097add !important;
  --text-error: #e75545 !important;
  --text-error-hover: #f86959 !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: rgba(255, 255, 0, 0.4) !important;
  --text-muted: #8e8e90 !important;
  --text-normal: #383a42 !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(0, 122, 255, 0.15) !important;
  --textHighlight: rgba(255, 255, 0, 0.4) !important;
  --titlebar-background: #eaeaeb !important;
  --titlebar-background-focused: #dbdbdc !important;
  --titlebar-border-color: #dbdbdc !important;
  --titlebar-text-color: #8e8e90 !important;
  --titlebar-text-color-focused: #383a42 !important;
  --vault-profile-color: #383a42 !important;
  --vault-profile-color-hover: #383a42 !important;
  --yellow: #e35649 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(234, 234, 235);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 250, 250);
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(219, 219, 220);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(234, 234, 235);
  border-radius: 4px;
  color: rgb(227, 86, 73);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(234, 234, 235);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(234, 234, 235);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(56, 58, 66);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 255, 0, 0.4);
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body del {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(56, 58, 66);
  text-decoration: underline rgb(142, 142, 144);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(21, 146, 255);
  border-color: rgb(21, 146, 255);
}

html[saved-theme="light"] body p {
  color: rgb(142, 142, 144);
  outline: rgb(142, 142, 144) none 0px;
  text-decoration-color: rgb(142, 142, 144);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(21, 146, 255);
  outline: rgb(21, 146, 255) none 0px;
  text-decoration-color: rgb(21, 146, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 146, 255);
  outline: rgb(21, 146, 255) none 0px;
  text-decoration-color: rgb(21, 146, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(21, 146, 255);
  outline: rgb(21, 146, 255) none 0px;
  text-decoration: rgba(87, 112, 239, 0.3);
  text-decoration-color: rgba(87, 112, 239, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body dt {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ol > li {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul > li {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(153, 153, 153);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body table {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(227, 86, 73);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(227, 86, 73);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(227, 86, 73);
  border-left-color: rgb(227, 86, 73);
  border-right-color: rgb(227, 86, 73);
  border-top-color: rgb(227, 86, 73);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figcaption {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(109, 133, 242);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  text-align: left;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
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
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(234, 234, 235);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgba(87, 112, 239, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(87, 112, 239, 0.15);
  border-right-color: rgba(87, 112, 239, 0.15);
  border-top-color: rgba(87, 112, 239, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(227, 86, 73);
}

html[saved-theme="light"] body h1 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h2 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h3 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h4 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h5 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h6 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 142, 144);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(56, 58, 66);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgb(219, 219, 220);
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 220);
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(142, 142, 144);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 142, 144);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(142, 142, 144);
  stroke: rgb(142, 142, 144);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(234, 234, 235);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body abbr {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body sub {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body summary {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body sup {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgba(87, 112, 239, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(87, 112, 239, 0.15);
  border-right-color: rgba(87, 112, 239, 0.15);
  border-top-color: rgba(87, 112, 239, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(227, 86, 73);
}`,
  },
};
