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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(28, 30, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 30, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(28, 30, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 30, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(28, 30, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 30, 38);
  border-bottom-color: rgb(213, 216, 218);
  border-left-color: rgb(213, 216, 218);
  border-right-color: rgb(213, 216, 218);
  border-top-color: rgb(213, 216, 218);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 30, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 30, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 30, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 30, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(28, 30, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 30, 38);
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
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(253, 240, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 240, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(253, 240, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 240, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(253, 240, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 240, 237);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 240, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 240, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 240, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 240, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(253, 240, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 240, 237);
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
