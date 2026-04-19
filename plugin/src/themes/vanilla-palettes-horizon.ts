import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.horizon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #2e303e !important;
  --accent-color-dark: #e95678 !important;
  --accent-color-hover: #fab795 !important;
  --accent-color-light: #25b0bc !important;
  --accent-h: 345 !important;
  --accent-l: 62% !important;
  --accent-s: 77% !important;
  --accentAlt: #6c6f93 !important;
  --apricot: #f09483 !important;
  --background: #1c1e26 !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #2e303e !important;
  --background-modifier-border-focus: #2e303e !important;
  --background-modifier-border-hover: #2e303e !important;
  --background-modifier-error: #e95678 !important;
  --background-modifier-error-hover: #e95678 !important;
  --background-modifier-form-field: #232530 !important;
  --background-modifier-form-field-hover: #232530 !important;
  --background-modifier-hover: #2e303e !important;
  --background-modifier-success: #29d398 !important;
  --background-primary: #1c1e26 !important;
  --background-secondary: #232530 !important;
  --backgroundAlt: #232530 !important;
  --bases-cards-background: #1c1e26 !important;
  --bases-cards-shadow: 0 0 0 1px #2e303e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #2e303e !important;
  --bases-embed-border-color: #2e303e !important;
  --bases-group-heading-property-color: #d5d8da !important;
  --bases-table-border-color: #2e303e !important;
  --bases-table-cell-background-active: #1c1e26 !important;
  --bases-table-cell-background-selected: #2e303e !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #2e303e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2e303e !important;
  --bases-table-header-background: #1c1e26 !important;
  --bases-table-header-background-hover: #2e303e !important;
  --bases-table-header-color: #d5d8da !important;
  --bases-table-summary-background: #1c1e26 !important;
  --bases-table-summary-background-hover: #2e303e !important;
  --blockquote-border-color: #e95678 !important;
  --blue: #26bbd9 !important;
  --blur-background: color-mix(in srgb, #232530 65%, transparent) linear-gradient(#232530, color-mix(in srgb, #232530 65%, transparent)) !important;
  --bold-color: #25b0bc !important;
  --border: #1a1c23 !important;
  --border-color: #2e303e !important;
  --border-color-primary: #2e303e !important;
  --border-color-secondary: #2e303e !important;
  --canvas-background: #1c1e26 !important;
  --canvas-card-label-color: #6c6f93 !important;
  --canvas-color: 233, 83, 120 !important;
  --caret-color: #d5d8da !important;
  --checkbox-border-color: #6c6f93 !important;
  --checkbox-border-color-hover: #fab795 !important;
  --checkbox-color: #e95678 !important;
  --checkbox-color-hover: #fab795 !important;
  --checkbox-marker-color: #1c1e26 !important;
  --checklist-done-color: #6c6f93 !important;
  --code-background: #232530 !important;
  --code-boolean: #f09483 !important;
  --code-border-color: #2e303e !important;
  --code-bracket-background: #2e303e !important;
  --code-builtin: #25b0bc !important;
  --code-comment: #4c4d53 !important;
  --code-definition: #e95678 !important;
  --code-function: #fab795 !important;
  --code-important: #fab795 !important;
  --code-keyword: #b877db !important;
  --code-normal: #d5d8da !important;
  --code-operator: #bbbbbb !important;
  --code-parentheses: #bbbbbb !important;
  --code-property: #25b0bc !important;
  --code-punctuation: #d5d8da !important;
  --code-string: #fab795 !important;
  --code-tag: #e95678 !important;
  --code-value: #f09483 !important;
  --code-variable: #e95678 !important;
  --collapse-icon-color: #6c6f93 !important;
  --collapse-icon-color-collapsed: #2e303e !important;
  --color-accent: hsl(345, 77%, 62%) !important;
  --color-accent-1: hsl(342, 78.54%, 71.3%) !important;
  --color-accent-2: hsl(340, 80.85%, 79.98%) !important;
  --color-accent-hsl: 345, 77%, 62% !important;
  --color-blue: #26bbd9 !important;
  --color-cyan: #59e1e3 !important;
  --color-green: #29d398 !important;
  --color-orange: #f09483 !important;
  --color-pink: pink !important;
  --color-purple: #b877db !important;
  --color-red: #e95678 !important;
  --color-yellow: #fab795 !important;
  --cranberry: #e95678 !important;
  --cyan: #59e1e3 !important;
  --dark: #d5d8da !important;
  --darkgray: #d5d8da !important;
  --divider-color: #2e303e !important;
  --divider-color-hover: #2e303e !important;
  --dropdown-background: #232530 !important;
  --dropdown-background-hover: #2e303e !important;
  --embed-block-shadow-hover: 0 0 0 1px #2e303e, inset 0 0 0 1px #2e303e !important;
  --embed-border-start: 2px solid #2e303e !important;
  --file-header-background: #1c1e26 !important;
  --file-header-background-focused: #1c1e26 !important;
  --flair-background: #232530 !important;
  --flair-color: #d5d8da !important;
  --footnote-divider-color: #2e303e !important;
  --footnote-id-color: #d5d8da !important;
  --footnote-id-color-no-occurrences: #6c6f93 !important;
  --footnote-input-background-active: #2e303e !important;
  --graph-line: #2e303e !important;
  --graph-node: #2e303e !important;
  --graph-node-attachment: #e95678 !important;
  --graph-node-focused: #fab795 !important;
  --graph-node-tag: #25b0bc !important;
  --graph-node-unresolved: #2e303e !important;
  --graph-text: #d5d8da !important;
  --gray: #bbbbbb !important;
  --green: #29d398 !important;
  --h1-color: #b877db !important;
  --h2-color: #26bbd9 !important;
  --h3-color: #29d398 !important;
  --h4-color: #fab795 !important;
  --h5-color: #f09483 !important;
  --h6-color: #e95678 !important;
  --heading-formatting: #6c6f93 !important;
  --highlight: #2e303e !important;
  --hr-color: #2e303e !important;
  --icon-color: #d5d8da !important;
  --icon-color-active: #2e303e !important;
  --icon-color-focused: #d5d8da !important;
  --icon-color-hover: #d5d8da !important;
  --indentation-guide-color: #2e303e !important;
  --indentation-guide-color-active: #6c6f93 !important;
  --inline-title-color: #d5d8da !important;
  --input-date-separator: #6c6f93 !important;
  --input-placeholder-color: #6c6f93 !important;
  --interactive-accent: #2e303e !important;
  --interactive-accent-hover: hsl(342, 78.54%, 71.3%) !important;
  --interactive-accent-hsl: 345, 77%, 62% !important;
  --interactive-hover: #2e303e !important;
  --interactive-normal: #232530 !important;
  --italic-color: #25b0bc !important;
  --lavender: #b877db !important;
  --light: #1c1e26 !important;
  --lightText: #d5d8da !important;
  --lightgray: #232530 !important;
  --link-color: #e95678 !important;
  --link-color-hover: #fab795 !important;
  --link-external-color: #e95678 !important;
  --link-external-color-hover: #fab795 !important;
  --link-unresolved-color: #e95678 !important;
  --link-unresolved-color-hover: #e95678 !important;
  --link-unresolved-decoration-color: hsla(345, 77%, 62%, 0.3) !important;
  --list-marker-color: #e95678 !important;
  --list-marker-color-collapsed: #2e303e !important;
  --list-marker-color-hover: #d5d8da !important;
  --magenta: #ee64ac !important;
  --menu-background: #232530 !important;
  --menu-border-color: #2e303e !important;
  --metadata-border-color: #2e303e !important;
  --metadata-divider-color: #2e303e !important;
  --metadata-input-background-active: #2e303e !important;
  --metadata-input-text-color: #d5d8da !important;
  --metadata-label-background-active: #2e303e !important;
  --metadata-label-text-color: #d5d8da !important;
  --metadata-label-text-color-hover: #d5d8da !important;
  --metadata-property-background-active: #2e303e !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #2e303e !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #2e303e !important;
  --modal-background: #232530 !important;
  --modal-border-color: #2e303e !important;
  --nav-collapse-icon-color: #2e303e !important;
  --nav-collapse-icon-color-collapsed: #2e303e !important;
  --nav-heading-color: #d5d8da !important;
  --nav-heading-color-collapsed: #6c6f93 !important;
  --nav-heading-color-collapsed-hover: #d5d8da !important;
  --nav-heading-color-hover: #d5d8da !important;
  --nav-indentation-guide-color: #2e303e !important;
  --nav-item-background-active: #e95678 !important;
  --nav-item-background-hover: #2e303e !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #d5d8da !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #25b0bc !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #6c6f93 !important;
  --nav-tag-color-active: #d5d8da !important;
  --nav-tag-color-hover: #d5d8da !important;
  --pdf-background: #1c1e26 !important;
  --pdf-page-background: #1c1e26 !important;
  --pdf-shadow: 0 0 0 1px #2e303e !important;
  --pdf-sidebar-background: #1c1e26 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #2e303e !important;
  --pill-border-color: #2e303e !important;
  --pill-border-color-hover: #2e303e !important;
  --pill-color: #d5d8da !important;
  --pill-color-hover: #d5d8da !important;
  --pill-color-remove: #6c6f93 !important;
  --pill-color-remove-hover: #2e303e !important;
  --prompt-background: #1c1e26 !important;
  --prompt-border-color: #2e303e !important;
  --raised-background: color-mix(in srgb, #232530 65%, transparent) linear-gradient(#232530, color-mix(in srgb, #232530 65%, transparent)) !important;
  --red: #e95678 !important;
  --ribbon-background: #232530 !important;
  --ribbon-background-collapsed: #1c1e26 !important;
  --rosebud: #fab795 !important;
  --search-clear-button-color: #d5d8da !important;
  --search-icon-color: #d5d8da !important;
  --search-result-background: #1c1e26 !important;
  --secondary: #2e303e !important;
  --selection-background-color: #2e303e !important;
  --selection-border-color: #fab795 !important;
  --setting-group-heading-color: #d5d8da !important;
  --setting-items-border-color: #2e303e !important;
  --slider-track-background: #232530 !important;
  --status-bar-background: #232530 !important;
  --status-bar-border-color: #2e303e !important;
  --status-bar-text-color: #d5d8da !important;
  --suggestion-background: #1c1e26 !important;
  --sync-avatar-color-1: #e95678 !important;
  --sync-avatar-color-2: #f09483 !important;
  --sync-avatar-color-3: #fab795 !important;
  --sync-avatar-color-4: #29d398 !important;
  --sync-avatar-color-5: #59e1e3 !important;
  --sync-avatar-color-6: #26bbd9 !important;
  --sync-avatar-color-7: #b877db !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #1c1e26 !important;
  --tab-container-background: #232530 !important;
  --tab-divider-color: #2e303e !important;
  --tab-outline-color: #2e303e !important;
  --tab-switcher-background: #232530 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #232530, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(345, 77%, 62%) !important;
  --tab-text-color: #2e303e !important;
  --tab-text-color-active: #d5d8da !important;
  --tab-text-color-focused: #d5d8da !important;
  --tab-text-color-focused-active: #d5d8da !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #2e303e !important;
  --table-border-color: #2e303e !important;
  --table-drag-handle-background-active: #fab795 !important;
  --table-drag-handle-color: #2e303e !important;
  --table-drag-handle-color-active: #2e303e !important;
  --table-header-border-color: #2e303e !important;
  --table-header-color: #d5d8da !important;
  --table-selection: #2e303e !important;
  --table-selection-border-color: #fab795 !important;
  --tacao: #fac29a !important;
  --tag-background: #2e303e !important;
  --tag-background-hover: #6c6f93 !important;
  --tag-border-color: hsla(345, 77%, 62%, 0.15) !important;
  --tag-border-color-hover: hsla(345, 77%, 62%, 0.15) !important;
  --tag-color: #e95678 !important;
  --tag-color-hover: #e95678 !important;
  --tertiary: red !important;
  --text-accent: #2e303e !important;
  --text-accent-hover: red !important;
  --text-color: #d5d8da !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #2e303e !important;
  --text-color-muted-light: #6c6f93 !important;
  --text-error: #e95678 !important;
  --text-faint: #6c6f93 !important;
  --text-highlight-bg: #2e303e !important;
  --text-muted: #d5d8da !important;
  --text-normal: #d5d8da !important;
  --text-on-accent-inverted: #1c1e26 !important;
  --text-selection: #2e303e !important;
  --text-success: #29d398 !important;
  --text-warning: #fab795 !important;
  --textHighlight: #2e303e !important;
  --titlebar-background: #232530 !important;
  --titlebar-background-focused: #2e303e !important;
  --titlebar-border-color: #2e303e !important;
  --titlebar-text-color: #d5d8da !important;
  --titlebar-text-color-focused: #d5d8da !important;
  --turquoise: #25b0bc !important;
  --vault-profile-color: #d5d8da !important;
  --vault-profile-color-hover: #d5d8da !important;
  --yellow: #fab795 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 37, 48);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(28, 30, 38);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(35, 37, 48);
  border-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(46, 48, 62);
  color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 37, 48);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 37, 48);
  border-left-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 30, 38);
  color: rgb(213, 216, 218);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(37, 176, 188);
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(37, 176, 188);
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(37, 176, 188);
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(37, 176, 188);
  outline: rgb(37, 176, 188) none 0px;
  text-decoration-color: rgb(37, 176, 188);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
  outline: rgb(213, 216, 218) none 0px;
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body del {
  color: rgb(213, 216, 218);
  outline: rgb(213, 216, 218) none 0px;
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 111, 147);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(233, 86, 120);
  border-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body p {
  color: rgb(213, 216, 218);
  outline: rgb(213, 216, 218) none 0px;
  text-decoration-color: rgb(213, 216, 218);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(233, 86, 120);
  outline: rgb(233, 86, 120) none 0px;
  text-decoration-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(233, 86, 120);
  outline: rgb(233, 86, 120) none 0px;
  text-decoration-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(233, 86, 120);
  outline: rgb(233, 86, 120) none 0px;
  text-decoration: underline rgba(233, 83, 121, 0.3);
  text-decoration-color: rgba(233, 83, 121, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body dt {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(108, 111, 147);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body table {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 37, 48);
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 37, 48);
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(250, 183, 149);
  border-left-color: rgb(250, 183, 149);
  border-right-color: rgb(250, 183, 149);
  border-top-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 37, 48);
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 37, 48);
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(184, 119, 219);
  border-left-color: rgb(184, 119, 219);
  border-right-color: rgb(184, 119, 219);
  border-top-color: rgb(184, 119, 219);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 147);
  border-left-color: rgb(108, 111, 147);
  border-right-color: rgb(108, 111, 147);
  border-top-color: rgb(108, 111, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(213, 216, 218);
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(28, 30, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(28, 30, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 148, 131);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 225, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 187, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 187, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(184, 119, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
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
  background-color: rgb(35, 37, 48);
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 30, 38);
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(213, 216, 218);
  outline: rgb(213, 216, 218) none 0px;
  text-decoration-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(35, 37, 48);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(46, 48, 62);
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(46, 48, 62);
  border-bottom-color: rgba(233, 83, 121, 0.15);
  border-left-color: rgba(233, 83, 121, 0.15);
  border-right-color: rgba(233, 83, 121, 0.15);
  border-top-color: rgba(233, 83, 121, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body h1 {
  color: rgb(184, 119, 219);
}

html[saved-theme="dark"] body h2 {
  color: rgb(38, 187, 217);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body h3 {
  color: rgb(41, 211, 152);
}

html[saved-theme="dark"] body h4 {
  color: rgb(250, 183, 149);
}

html[saved-theme="dark"] body h5 {
  color: rgb(240, 148, 131);
}

html[saved-theme="dark"] body h6 {
  color: rgb(233, 86, 120);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(46, 48, 62);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(213, 216, 218);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(35, 37, 48);
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(213, 216, 218);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 216, 218);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(213, 216, 218);
  stroke: rgb(213, 216, 218);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(108, 111, 147);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(46, 48, 62);
  border-left-color: rgb(46, 48, 62);
  border-right-color: rgb(46, 48, 62);
  border-top-color: rgb(46, 48, 62);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(35, 37, 48);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body abbr {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 37, 48);
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body sub {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body summary {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body sup {
  color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(46, 48, 62);
  border-bottom-color: rgba(233, 83, 121, 0.15);
  border-left-color: rgba(233, 83, 121, 0.15);
  border-right-color: rgba(233, 83, 121, 0.15);
  border-top-color: rgba(233, 83, 121, 0.15);
  color: rgb(233, 86, 120);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #f9cbbe !important;
  --accent-color-dark: #e95678 !important;
  --accent-color-hover: #fab795 !important;
  --accent-color-light: #1d8991 !important;
  --accent-h: 346 !important;
  --accent-l: 63% !important;
  --accent-s: 77% !important;
  --accentAlt: #f9cec3 !important;
  --amethyst: #8a31b9 !important;
  --background: #fdf0ed !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #f9cbbe !important;
  --background-modifier-border-focus: #f9cbbe !important;
  --background-modifier-border-hover: #f9cbbe !important;
  --background-modifier-error: #e95678 !important;
  --background-modifier-error-hover: #e95678 !important;
  --background-modifier-form-field: #fadad1 !important;
  --background-modifier-form-field-hover: #fadad1 !important;
  --background-modifier-hover: #f9cbbe !important;
  --background-modifier-success: #29d398 !important;
  --background-primary: #fdf0ed !important;
  --background-secondary: #fadad1 !important;
  --backgroundAlt: #fadad1 !important;
  --bases-cards-background: #fdf0ed !important;
  --bases-cards-shadow: 0 0 0 1px #f9cbbe !important;
  --bases-cards-shadow-hover: 0 0 0 1px #f9cbbe !important;
  --bases-embed-border-color: #f9cbbe !important;
  --bases-group-heading-property-color: #333333 !important;
  --bases-table-border-color: #f9cbbe !important;
  --bases-table-cell-background-active: #fdf0ed !important;
  --bases-table-cell-background-selected: #f9cbbe !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #f9cbbe !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f9cbbe !important;
  --bases-table-header-background: #fdf0ed !important;
  --bases-table-header-background-hover: #f9cbbe !important;
  --bases-table-header-color: #333333 !important;
  --bases-table-summary-background: #fdf0ed !important;
  --bases-table-summary-background-hover: #f9cbbe !important;
  --black: #333333 !important;
  --blockquote-border-color: #e95678 !important;
  --blue: #26bbd9 !important;
  --blur-background: color-mix(in srgb, #fdf0ed 65%, transparent) linear-gradient(#fdf0ed, color-mix(in srgb, #fdf0ed 65%, transparent)) !important;
  --bold-color: #1d8991 !important;
  --border: #1a1c23 !important;
  --border-color: #f9cbbe !important;
  --border-color-primary: #f9cbbe !important;
  --border-color-secondary: #f9cbbe !important;
  --canvas-background: #fdf0ed !important;
  --canvas-card-label-color: #f9cec3 !important;
  --canvas-color: 233, 86, 120 !important;
  --caret-color: #333333 !important;
  --checkbox-border-color: #f9cec3 !important;
  --checkbox-border-color-hover: #fab795 !important;
  --checkbox-color: #e95678 !important;
  --checkbox-color-hover: #fab795 !important;
  --checkbox-marker-color: #fdf0ed !important;
  --checklist-done-color: #f9cec3 !important;
  --code-background: #fadad1 !important;
  --code-boolean: #da103f !important;
  --code-border-color: #f9cbbe !important;
  --code-bracket-background: #f9cbbe !important;
  --code-builtin: #1d8991 !important;
  --code-comment: #989290 !important;
  --code-definition: #dc3318 !important;
  --code-function: #fab795 !important;
  --code-important: #fab795 !important;
  --code-keyword: #8a31b9 !important;
  --code-normal: #333333 !important;
  --code-operator: #333333 !important;
  --code-parentheses: #333333 !important;
  --code-property: #1d8991 !important;
  --code-punctuation: #333333 !important;
  --code-string: #f77d26 !important;
  --code-tag: #e95678 !important;
  --code-value: #da103f !important;
  --code-variable: #dc3318 !important;
  --collapse-icon-color: #f9cec3 !important;
  --collapse-icon-color-collapsed: #f9cbbe !important;
  --color-accent: hsl(346, 77%, 63%) !important;
  --color-accent-1: hsl(345, 77.77%, 67.725%) !important;
  --color-accent-2: hsl(343, 78.54%, 72.45%) !important;
  --color-accent-hsl: 346, 77%, 63% !important;
  --color-blue: #26bbd9 !important;
  --color-cyan: #59e1e3 !important;
  --color-green: #29d398 !important;
  --color-orange: #f77d26 !important;
  --color-pink: pink !important;
  --color-purple: #8a31b9 !important;
  --color-red: #e95678 !important;
  --color-yellow: #fab795 !important;
  --crimson: #da103f !important;
  --cyan: #59e1e3 !important;
  --dark: #333333 !important;
  --darkText: #06060c !important;
  --darkgray: #333333 !important;
  --divider-color: #f9cbbe !important;
  --divider-color-hover: #f9cbbe !important;
  --dropdown-background: #fadad1 !important;
  --dropdown-background-hover: #f9cbbe !important;
  --elm: #1d8991 !important;
  --embed-block-shadow-hover: 0 0 0 1px #f9cbbe, inset 0 0 0 1px #f9cbbe !important;
  --embed-border-start: 2px solid #f9cbbe !important;
  --file-header-background: #fdf0ed !important;
  --file-header-background-focused: #fdf0ed !important;
  --flair-background: #fadad1 !important;
  --flair-color: #333333 !important;
  --footnote-divider-color: #f9cbbe !important;
  --footnote-id-color: #333333 !important;
  --footnote-id-color-no-occurrences: #f9cec3 !important;
  --footnote-input-background-active: #f9cbbe !important;
  --graph-line: #f9cbbe !important;
  --graph-node: #f9cbbe !important;
  --graph-node-attachment: #e95678 !important;
  --graph-node-focused: #fab795 !important;
  --graph-node-tag: #1d8991 !important;
  --graph-node-unresolved: #f9cbbe !important;
  --graph-text: #333333 !important;
  --gray: #333333 !important;
  --green: #29d398 !important;
  --h1-color: #8a31b9 !important;
  --h2-color: #26bbd9 !important;
  --h3-color: #29d398 !important;
  --h4-color: #fab795 !important;
  --h5-color: #f77d26 !important;
  --h6-color: #e95678 !important;
  --heading-formatting: #f9cec3 !important;
  --highlight: #f9cbbe !important;
  --hr-color: #f9cbbe !important;
  --icon-color: #333333 !important;
  --icon-color-active: #f9cbbe !important;
  --icon-color-focused: #333333 !important;
  --icon-color-hover: #333333 !important;
  --indentation-guide-color: #f9cbbe !important;
  --indentation-guide-color-active: #f9cec3 !important;
  --inline-title-color: #333333 !important;
  --input-date-separator: #f9cec3 !important;
  --input-placeholder-color: #f9cec3 !important;
  --interactive-accent: #f9cbbe !important;
  --interactive-accent-hover: hsl(343, 78.54%, 72.45%) !important;
  --interactive-accent-hsl: 346, 77%, 63% !important;
  --interactive-hover: #f9cbbe !important;
  --interactive-normal: #fadad1 !important;
  --italic-color: #1d8991 !important;
  --jaffa: #f77d26 !important;
  --light: #fdf0ed !important;
  --lightgray: #fadad1 !important;
  --link-color: #e95678 !important;
  --link-color-hover: #fab795 !important;
  --link-external-color: #e95678 !important;
  --link-external-color-hover: #fab795 !important;
  --link-unresolved-color: #e95678 !important;
  --link-unresolved-color-hover: #e95678 !important;
  --link-unresolved-decoration-color: hsla(346, 77%, 63%, 0.3) !important;
  --list-marker-color: #e95678 !important;
  --list-marker-color-collapsed: #f9cbbe !important;
  --list-marker-color-hover: #333333 !important;
  --magenta: #ee64ac !important;
  --menu-background: #fadad1 !important;
  --menu-border-color: #f9cbbe !important;
  --metadata-border-color: #f9cbbe !important;
  --metadata-divider-color: #f9cbbe !important;
  --metadata-input-background-active: #f9cbbe !important;
  --metadata-input-text-color: #333333 !important;
  --metadata-label-background-active: #f9cbbe !important;
  --metadata-label-text-color: #333333 !important;
  --metadata-label-text-color-hover: #333333 !important;
  --metadata-property-background-active: #f9cbbe !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #f9cbbe !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #f9cbbe !important;
  --modal-background: #fadad1 !important;
  --modal-border-color: #f9cbbe !important;
  --nav-collapse-icon-color: #f9cbbe !important;
  --nav-collapse-icon-color-collapsed: #f9cbbe !important;
  --nav-heading-color: #333333 !important;
  --nav-heading-color-collapsed: #f9cec3 !important;
  --nav-heading-color-collapsed-hover: #333333 !important;
  --nav-heading-color-hover: #333333 !important;
  --nav-indentation-guide-color: #f9cbbe !important;
  --nav-item-background-active: #e95678 !important;
  --nav-item-background-hover: #f9cbbe !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #333333 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #1d8991 !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #f9cec3 !important;
  --nav-tag-color-active: #333333 !important;
  --nav-tag-color-hover: #333333 !important;
  --pdf-background: #fdf0ed !important;
  --pdf-page-background: #fdf0ed !important;
  --pdf-sidebar-background: #fdf0ed !important;
  --pill-border-color: #f9cbbe !important;
  --pill-border-color-hover: #f9cbbe !important;
  --pill-color: #333333 !important;
  --pill-color-hover: #333333 !important;
  --pill-color-remove: #f9cec3 !important;
  --pill-color-remove-hover: #f9cbbe !important;
  --prompt-background: #fdf0ed !important;
  --prompt-border-color: #f9cbbe !important;
  --raised-background: color-mix(in srgb, #fdf0ed 65%, transparent) linear-gradient(#fdf0ed, color-mix(in srgb, #fdf0ed 65%, transparent)) !important;
  --red: #e95678 !important;
  --ribbon-background: #fadad1 !important;
  --ribbon-background-collapsed: #fdf0ed !important;
  --search-clear-button-color: #333333 !important;
  --search-icon-color: #333333 !important;
  --search-result-background: #fdf0ed !important;
  --secondary: #f9cbbe !important;
  --selection-background-color: #f9cbbe !important;
  --selection-border-color: #fab795 !important;
  --setting-group-heading-color: #333333 !important;
  --setting-items-border-color: #f9cbbe !important;
  --slider-thumb-border-color: #333333 !important;
  --slider-track-background: #fadad1 !important;
  --status-bar-background: #fadad1 !important;
  --status-bar-border-color: #f9cbbe !important;
  --status-bar-text-color: #333333 !important;
  --suggestion-background: #fdf0ed !important;
  --sync-avatar-color-1: #e95678 !important;
  --sync-avatar-color-2: #f77d26 !important;
  --sync-avatar-color-3: #fab795 !important;
  --sync-avatar-color-4: #29d398 !important;
  --sync-avatar-color-5: #59e1e3 !important;
  --sync-avatar-color-6: #26bbd9 !important;
  --sync-avatar-color-7: #8a31b9 !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #fdf0ed !important;
  --tab-container-background: #fadad1 !important;
  --tab-divider-color: #f9cbbe !important;
  --tab-outline-color: #f9cbbe !important;
  --tab-switcher-background: #fadad1 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fadad1, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(346, 77%, 63%) !important;
  --tab-text-color: #f9cbbe !important;
  --tab-text-color-active: #333333 !important;
  --tab-text-color-focused: #333333 !important;
  --tab-text-color-focused-active: #333333 !important;
  --tab-text-color-focused-active-current: #333333 !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #f9cbbe !important;
  --table-border-color: #f9cbbe !important;
  --table-drag-handle-background-active: #fab795 !important;
  --table-drag-handle-color: #f9cbbe !important;
  --table-drag-handle-color-active: #f9cbbe !important;
  --table-header-border-color: #f9cbbe !important;
  --table-header-color: #333333 !important;
  --table-selection: #f9cbbe !important;
  --table-selection-border-color: #fab795 !important;
  --tag-background: #f9cbbe !important;
  --tag-background-hover: #f9cec3 !important;
  --tag-border-color: hsla(346, 77%, 63%, 0.15) !important;
  --tag-border-color-hover: hsla(346, 77%, 63%, 0.15) !important;
  --tag-color: #e95678 !important;
  --tag-color-hover: #e95678 !important;
  --tango: #f6661e !important;
  --tertiary: red !important;
  --text-accent: #f9cbbe !important;
  --text-accent-hover: red !important;
  --text-color: #333333 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #f9cbbe !important;
  --text-color-muted-light: #f9cec3 !important;
  --text-error: #e95678 !important;
  --text-faint: #f9cec3 !important;
  --text-highlight-bg: #f9cbbe !important;
  --text-muted: #333333 !important;
  --text-normal: #333333 !important;
  --text-on-accent-inverted: #fdf0ed !important;
  --text-selection: #f9cbbe !important;
  --text-success: #29d398 !important;
  --text-warning: #fab795 !important;
  --textHighlight: #f9cbbe !important;
  --thunderbird: #dc3318 !important;
  --titlebar-background: #fadad1 !important;
  --titlebar-background-focused: #f9cbbe !important;
  --titlebar-border-color: #f9cbbe !important;
  --titlebar-text-color: #333333 !important;
  --titlebar-text-color-focused: #333333 !important;
  --vault-profile-color: #333333 !important;
  --vault-profile-color-hover: #333333 !important;
  --yellow: #fab795 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 218, 209);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 240, 237);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 240, 237);
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(249, 203, 190);
  color: rgb(233, 86, 120);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 218, 209);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 218, 209);
  border-left-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 240, 237);
  color: rgb(51, 51, 51);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(29, 137, 145);
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(29, 137, 145);
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(29, 137, 145);
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(29, 137, 145);
  outline: rgb(29, 137, 145) none 0px;
  text-decoration-color: rgb(29, 137, 145);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(249, 206, 195);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(233, 86, 120);
  border-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body p {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(233, 86, 120);
  outline: rgb(233, 86, 120) none 0px;
  text-decoration-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(233, 86, 120);
  outline: rgb(233, 86, 120) none 0px;
  text-decoration-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(233, 86, 120);
  outline: rgb(233, 86, 120) none 0px;
  text-decoration: underline rgba(233, 88, 122, 0.3);
  text-decoration-color: rgba(233, 88, 122, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body dt {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(249, 206, 195);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body table {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(250, 218, 209);
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(250, 218, 209);
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(250, 183, 149);
  border-left-color: rgb(250, 183, 149);
  border-right-color: rgb(250, 183, 149);
  border-top-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(250, 218, 209);
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(250, 218, 209);
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(138, 49, 185);
  border-left-color: rgb(138, 49, 185);
  border-right-color: rgb(138, 49, 185);
  border-top-color: rgb(138, 49, 185);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(249, 206, 195);
  border-left-color: rgb(249, 206, 195);
  border-right-color: rgb(249, 206, 195);
  border-top-color: rgb(249, 206, 195);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 240, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 240, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 125, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 225, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 187, 217);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 187, 217);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 183, 149);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 49, 185);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 86, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(41, 211, 152);
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
  background-color: rgb(250, 218, 209);
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(253, 240, 237);
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 218, 209);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(249, 203, 190);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(249, 203, 190);
  border-bottom-color: rgba(233, 88, 122, 0.15);
  border-left-color: rgba(233, 88, 122, 0.15);
  border-right-color: rgba(233, 88, 122, 0.15);
  border-top-color: rgba(233, 88, 122, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(233, 86, 120);
}

html[saved-theme="light"] body h1 {
  color: rgb(138, 49, 185);
}

html[saved-theme="light"] body h2 {
  color: rgb(38, 187, 217);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body h3 {
  color: rgb(41, 211, 152);
}

html[saved-theme="light"] body h4 {
  color: rgb(250, 183, 149);
}

html[saved-theme="light"] body h5 {
  color: rgb(247, 125, 38);
}

html[saved-theme="light"] body h6 {
  color: rgb(233, 86, 120);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(249, 203, 190);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(51, 51, 51);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 218, 209);
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(51, 51, 51);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 51, 51);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(51, 51, 51);
  stroke: rgb(51, 51, 51);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(249, 206, 195);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(249, 203, 190);
  border-left-color: rgb(249, 203, 190);
  border-right-color: rgb(249, 203, 190);
  border-top-color: rgb(249, 203, 190);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 218, 209);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body abbr {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(250, 218, 209);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body summary {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(249, 203, 190);
  border-bottom-color: rgba(233, 88, 122, 0.15);
  border-left-color: rgba(233, 88, 122, 0.15);
  border-right-color: rgba(233, 88, 122, 0.15);
  border-top-color: rgba(233, 88, 122, 0.15);
  color: rgb(233, 86, 120);
}`,
  },
};
