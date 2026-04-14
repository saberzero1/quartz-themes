import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.tokyo-night",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(261, 85%, 79%) !important;
  --accent-color-dark: #9d7cd8 !important;
  --accent-color-hover: #bb9af7 !important;
  --accent-color-light: #7aa2f7 !important;
  --accent-h: 261 !important;
  --accent-l: 79% !important;
  --accent-s: 85% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #3b4261 !important;
  --background-modifier-border-focus: #3b4261 !important;
  --background-modifier-border-hover: #3b4261 !important;
  --background-modifier-error: #f7768e !important;
  --background-modifier-error-hover: #f7768e !important;
  --background-modifier-form-field: #16161e !important;
  --background-modifier-form-field-hover: #16161e !important;
  --background-modifier-hover: #363a4a !important;
  --background-modifier-success: #9ece6a !important;
  --background-primary: #1a1b26 !important;
  --background-secondary: #16161e !important;
  --bases-cards-background: #1a1b26 !important;
  --bases-cards-shadow: 0 0 0 1px #3b4261 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3b4261 !important;
  --bases-embed-border-color: #3b4261 !important;
  --bases-group-heading-property-color: #c0caf5 !important;
  --bases-table-border-color: #3b4261 !important;
  --bases-table-cell-background-active: #1a1b26 !important;
  --bases-table-cell-background-selected: #363a4a !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #3b4261 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(261, 85%, 79%) !important;
  --bases-table-header-background: #1a1b26 !important;
  --bases-table-header-background-hover: #363a4a !important;
  --bases-table-header-color: #c0caf5 !important;
  --bases-table-summary-background: #1a1b26 !important;
  --bases-table-summary-background-hover: #363a4a !important;
  --bg: #1a1b26 !important;
  --bg-dark: #16161e !important;
  --bg-highlight: #363a4a !important;
  --blockquote-border-color: #9d7cd8 !important;
  --blue: #7aa2f7 !important;
  --blue0: #3d59a1 !important;
  --blue1: #2ac3de !important;
  --blue2: #0db9d7 !important;
  --blue5: #89ddff !important;
  --blue6: #b4f9f8 !important;
  --blue7: #394b70 !important;
  --blur-background: color-mix(in srgb, #16161e 65%, transparent) linear-gradient(#16161e, color-mix(in srgb, #16161e 65%, transparent)) !important;
  --bold-color: #7aa2f7 !important;
  --border-color: #3b4261 !important;
  --border-color-primary: #3b4261 !important;
  --border-color-secondary: #3b4261 !important;
  --canvas-background: #1a1b26 !important;
  --canvas-card-label-color: #a9b1d6 !important;
  --canvas-color: 187, 154, 247 !important;
  --caret-color: #c0caf5 !important;
  --checkbox-border-color: #a9b1d6 !important;
  --checkbox-border-color-hover: #bb9af7 !important;
  --checkbox-color: #9d7cd8 !important;
  --checkbox-color-hover: #bb9af7 !important;
  --checkbox-marker-color: #1a1b26 !important;
  --checklist-done-color: #a9b1d6 !important;
  --code-background: #16161e !important;
  --code-boolean: #ff9e64 !important;
  --code-border-color: #3b4261 !important;
  --code-bracket-background: #363a4a !important;
  --code-builtin: #7dcfff !important;
  --code-comment: #565f89 !important;
  --code-definition: #7aa2f7 !important;
  --code-function: #e0af68 !important;
  --code-important: #e0af68 !important;
  --code-keyword: #9d7cd8 !important;
  --code-normal: #c0caf5 !important;
  --code-operator: #7dcfff !important;
  --code-parentheses: #a9b1d6 !important;
  --code-property: #7aa2f7 !important;
  --code-punctuation: #c0caf5 !important;
  --code-string: #9ece6a !important;
  --code-tag: #f7768e !important;
  --code-value: #ff9e64 !important;
  --code-variable: #c0caf5 !important;
  --collapse-icon-color: #a9b1d6 !important;
  --collapse-icon-color-collapsed: hsl(261, 85%, 79%) !important;
  --color-accent: hsl(261, 85%, 79%) !important;
  --color-accent-1: hsl(258, 86.7%, 90.85%) !important;
  --color-accent-2: hsl(256, 89.25%, 101.91%) !important;
  --color-accent-hsl: 261, 85%, 79% !important;
  --color-blue: #7aa2f7 !important;
  --color-cyan: #7dcfff !important;
  --color-green: #9ece6a !important;
  --color-orange: #ff9e64 !important;
  --color-pink: pink !important;
  --color-purple: #9d7cd8 !important;
  --color-red: #f7768e !important;
  --color-yellow: #e0af68 !important;
  --comment: #565f89 !important;
  --cyan: #7dcfff !important;
  --dark: #c0caf5 !important;
  --dark3: #545c7e !important;
  --dark5: #737aa2 !important;
  --darkgray: #c0caf5 !important;
  --divider-color: #3b4261 !important;
  --divider-color-hover: hsl(261, 85%, 79%) !important;
  --dropdown-background: #16161e !important;
  --dropdown-background-hover: #3b4261 !important;
  --embed-block-shadow-hover: 0 0 0 1px #3b4261, inset 0 0 0 1px #3b4261 !important;
  --embed-border-start: 2px solid hsl(261, 85%, 79%) !important;
  --fg: #c0caf5 !important;
  --fg-dark: #a9b1d6 !important;
  --fg-gutter: #3b4261 !important;
  --file-header-background: #1a1b26 !important;
  --file-header-background-focused: #1a1b26 !important;
  --flair-background: #16161e !important;
  --flair-color: #c0caf5 !important;
  --footnote-divider-color: #3b4261 !important;
  --footnote-id-color: #c0caf5 !important;
  --footnote-id-color-no-occurrences: #a9b1d6 !important;
  --footnote-input-background-active: #363a4a !important;
  --graph-line: #3b4261 !important;
  --graph-node: hsl(261, 85%, 79%) !important;
  --graph-node-attachment: #9d7cd8 !important;
  --graph-node-focused: #bb9af7 !important;
  --graph-node-tag: #7aa2f7 !important;
  --graph-node-unresolved: #3b4261 !important;
  --graph-text: #c0caf5 !important;
  --gray: #c0caf5 !important;
  --green: #9ece6a !important;
  --green1: #73daca !important;
  --green2: #41a6b5 !important;
  --h1-color: #9d7cd8 !important;
  --h2-color: #7aa2f7 !important;
  --h3-color: #9ece6a !important;
  --h4-color: #e0af68 !important;
  --h5-color: #ff9e64 !important;
  --h6-color: #f7768e !important;
  --heading-formatting: #a9b1d6 !important;
  --highlight: hsl(261, 85%, 79%) !important;
  --hr-color: #3b4261 !important;
  --icon-color: #c0caf5 !important;
  --icon-color-active: hsl(261, 85%, 79%) !important;
  --icon-color-focused: #c0caf5 !important;
  --icon-color-hover: #c0caf5 !important;
  --indentation-guide-color: #3b4261 !important;
  --indentation-guide-color-active: #a9b1d6 !important;
  --inline-title-color: #c0caf5 !important;
  --input-date-separator: #a9b1d6 !important;
  --input-placeholder-color: #a9b1d6 !important;
  --interactive-accent: hsl(261, 85%, 79%) !important;
  --interactive-accent-hover: hsl(258, 86.7%, 90.85%) !important;
  --interactive-accent-hsl: 261, 85%, 79% !important;
  --interactive-hover: #3b4261 !important;
  --interactive-normal: #16161e !important;
  --italic-color: #7aa2f7 !important;
  --light: #1a1b26 !important;
  --lightgray: #16161e !important;
  --link-color: #9d7cd8 !important;
  --link-color-hover: #bb9af7 !important;
  --link-external-color: #9d7cd8 !important;
  --link-external-color-hover: #bb9af7 !important;
  --link-unresolved-color: #f7768e !important;
  --link-unresolved-color-hover: #f7768e !important;
  --link-unresolved-decoration-color: hsla(261, 85%, 79%, 0.3) !important;
  --list-marker-color: #9d7cd8 !important;
  --list-marker-color-collapsed: hsl(261, 85%, 79%) !important;
  --list-marker-color-hover: #c0caf5 !important;
  --magenta: #bb9af7 !important;
  --magenta2: #ff007c !important;
  --menu-background: #16161e !important;
  --menu-border-color: #3b4261 !important;
  --metadata-border-color: #3b4261 !important;
  --metadata-divider-color: #3b4261 !important;
  --metadata-input-background-active: #363a4a !important;
  --metadata-input-text-color: #c0caf5 !important;
  --metadata-label-background-active: #363a4a !important;
  --metadata-label-text-color: #c0caf5 !important;
  --metadata-label-text-color-hover: #c0caf5 !important;
  --metadata-property-background-active: #363a4a !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #3b4261 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3b4261 !important;
  --modal-background: #16161e !important;
  --modal-border-color: #3b4261 !important;
  --nav-collapse-icon-color: #3b4261 !important;
  --nav-collapse-icon-color-collapsed: #3b4261 !important;
  --nav-heading-color: #c0caf5 !important;
  --nav-heading-color-collapsed: #a9b1d6 !important;
  --nav-heading-color-collapsed-hover: #c0caf5 !important;
  --nav-heading-color-hover: #c0caf5 !important;
  --nav-indentation-guide-color: #3b4261 !important;
  --nav-item-background-active: #9d7cd8 !important;
  --nav-item-background-hover: #363a4a !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #c0caf5 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #7aa2f7 !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #a9b1d6 !important;
  --nav-tag-color-active: #c0caf5 !important;
  --nav-tag-color-hover: #c0caf5 !important;
  --orange: #ff9e64 !important;
  --pdf-background: #1a1b26 !important;
  --pdf-page-background: #1a1b26 !important;
  --pdf-shadow: 0 0 0 1px #3b4261 !important;
  --pdf-sidebar-background: #1a1b26 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #3b4261 !important;
  --pill-border-color: #3b4261 !important;
  --pill-border-color-hover: #3b4261 !important;
  --pill-color: #c0caf5 !important;
  --pill-color-hover: #c0caf5 !important;
  --pill-color-remove: #a9b1d6 !important;
  --pill-color-remove-hover: hsl(261, 85%, 79%) !important;
  --prompt-background: #1a1b26 !important;
  --prompt-border-color: #3b4261 !important;
  --purple: #9d7cd8 !important;
  --raised-background: color-mix(in srgb, #16161e 65%, transparent) linear-gradient(#16161e, color-mix(in srgb, #16161e 65%, transparent)) !important;
  --red: #f7768e !important;
  --red1: #db4b4b !important;
  --ribbon-background: #16161e !important;
  --ribbon-background-collapsed: #1a1b26 !important;
  --search-clear-button-color: #c0caf5 !important;
  --search-icon-color: #c0caf5 !important;
  --search-result-background: #1a1b26 !important;
  --secondary: hsl(261, 85%, 79%) !important;
  --selection-background-color: #363a4a !important;
  --selection-border-color: #bb9af7 !important;
  --setting-group-heading-color: #c0caf5 !important;
  --setting-items-border-color: #3b4261 !important;
  --slider-track-background: #16161e !important;
  --status-bar-background: #16161e !important;
  --status-bar-border-color: #3b4261 !important;
  --status-bar-text-color: #c0caf5 !important;
  --suggestion-background: #1a1b26 !important;
  --sync-avatar-color-1: #f7768e !important;
  --sync-avatar-color-2: #ff9e64 !important;
  --sync-avatar-color-3: #e0af68 !important;
  --sync-avatar-color-4: #9ece6a !important;
  --sync-avatar-color-5: #7dcfff !important;
  --sync-avatar-color-6: #7aa2f7 !important;
  --sync-avatar-color-7: #9d7cd8 !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #1a1b26 !important;
  --tab-container-background: #16161e !important;
  --tab-divider-color: #363a4a !important;
  --tab-outline-color: #3b4261 !important;
  --tab-switcher-background: #16161e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #16161e, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(261, 85%, 79%) !important;
  --tab-text-color: #3b4261 !important;
  --tab-text-color-active: #c0caf5 !important;
  --tab-text-color-focused: #c0caf5 !important;
  --tab-text-color-focused-active: #c0caf5 !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #3b4261 !important;
  --table-border-color: #3b4261 !important;
  --table-drag-handle-background-active: #bb9af7 !important;
  --table-drag-handle-color: #363a4a !important;
  --table-drag-handle-color-active: #363a4a !important;
  --table-header-border-color: #3b4261 !important;
  --table-header-color: #c0caf5 !important;
  --table-selection: #363a4a !important;
  --table-selection-border-color: #bb9af7 !important;
  --tag-background: #3b4261 !important;
  --tag-background-hover: #a9b1d6 !important;
  --tag-border-color: hsla(261, 85%, 79%, 0.15) !important;
  --tag-border-color-hover: hsla(261, 85%, 79%, 0.15) !important;
  --tag-color: #9d7cd8 !important;
  --tag-color-hover: #9d7cd8 !important;
  --teal: #1abc9c !important;
  --terminal-black: #414868 !important;
  --tertiary: red !important;
  --text-accent: hsl(261, 85%, 79%) !important;
  --text-accent-hover: red !important;
  --text-color: #c0caf5 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #3b4261 !important;
  --text-color-muted-light: #a9b1d6 !important;
  --text-error: #f7768e !important;
  --text-faint: #a9b1d6 !important;
  --text-highlight-bg: hsl(261, 85%, 79%) !important;
  --text-muted: #c0caf5 !important;
  --text-normal: #c0caf5 !important;
  --text-on-accent-inverted: #1a1b26 !important;
  --text-selection: #363a4a !important;
  --text-success: #9ece6a !important;
  --text-warning: #e0af68 !important;
  --textHighlight: hsl(261, 85%, 79%) !important;
  --titlebar-background: #16161e !important;
  --titlebar-background-focused: #3b4261 !important;
  --titlebar-border-color: #3b4261 !important;
  --titlebar-text-color: #c0caf5 !important;
  --titlebar-text-color-focused: #c0caf5 !important;
  --vault-profile-color: #c0caf5 !important;
  --vault-profile-color-hover: #c0caf5 !important;
  --yellow: #e0af68 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 22, 30);
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(59, 66, 97);
  color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 30);
  border-left-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(188, 156, 247);
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(157, 124, 216);
  border-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body p {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(157, 124, 216);
  outline: rgb(157, 124, 216) none 0px;
  text-decoration-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(157, 124, 216);
  outline: rgb(157, 124, 216) none 0px;
  text-decoration-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(247, 118, 142);
  outline: rgb(247, 118, 142) none 0px;
  text-decoration: underline rgba(188, 156, 247, 0.3);
  text-decoration-color: rgba(188, 156, 247, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(169, 177, 214);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(224, 175, 104);
  border-left-color: rgb(224, 175, 104);
  border-right-color: rgb(224, 175, 104);
  border-top-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(157, 124, 216);
  border-left-color: rgb(157, 124, 216);
  border-right-color: rgb(157, 124, 216);
  border-top-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(188, 156, 247);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
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
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(54, 58, 74);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 30);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(54, 58, 74);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(54, 58, 74);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(59, 66, 97);
  border-bottom-color: rgba(188, 156, 247, 0.15);
  border-left-color: rgba(188, 156, 247, 0.15);
  border-right-color: rgba(188, 156, 247, 0.15);
  border-top-color: rgba(188, 156, 247, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body h1 {
  color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body h2 {
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body h3 {
  color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 158, 100);
}

html[saved-theme="dark"] body h6 {
  color: rgb(247, 118, 142);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(59, 66, 97);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(192, 202, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(192, 202, 245);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(192, 202, 245);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(192, 202, 245);
  stroke: rgb(192, 202, 245);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(169, 177, 214);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 22, 30);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body abbr {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(59, 66, 97);
  border-bottom-color: rgba(188, 156, 247, 0.15);
  border-left-color: rgba(188, 156, 247, 0.15);
  border-right-color: rgba(188, 156, 247, 0.15);
  border-top-color: rgba(188, 156, 247, 0.15);
  color: rgb(157, 124, 216);
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(265, 47%, 51%) !important;
  --accent-color-dark: #7847bd !important;
  --accent-color-hover: #b28af6 !important;
  --accent-color-light: #77a0f7 !important;
  --accent-h: 265 !important;
  --accent-l: 51% !important;
  --accent-s: 47% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #a8aecb !important;
  --background-modifier-border-focus: #a8aecb !important;
  --background-modifier-border-hover: #a8aecb !important;
  --background-modifier-error: #f77e94 !important;
  --background-modifier-error-hover: #f77e94 !important;
  --background-modifier-form-field: #cbccd1 !important;
  --background-modifier-form-field-hover: #cbccd1 !important;
  --background-modifier-hover: #b5b9c9 !important;
  --background-modifier-success: #799f50 !important;
  --background-primary: #d5d6db !important;
  --background-secondary: #cbccd1 !important;
  --bases-cards-background: #d5d6db !important;
  --bases-cards-shadow: 0 0 0 1px #a8aecb !important;
  --bases-cards-shadow-hover: 0 0 0 1px #a8aecb !important;
  --bases-embed-border-color: #a8aecb !important;
  --bases-group-heading-property-color: #4c505e !important;
  --bases-table-border-color: #a8aecb !important;
  --bases-table-cell-background-active: #d5d6db !important;
  --bases-table-cell-background-selected: #b5b9c9 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #a8aecb !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(265, 47%, 51%) !important;
  --bases-table-header-background: #d5d6db !important;
  --bases-table-header-background-hover: #b5b9c9 !important;
  --bases-table-header-color: #4c505e !important;
  --bases-table-summary-background: #d5d6db !important;
  --bases-table-summary-background-hover: #b5b9c9 !important;
  --bg: #d5d6db !important;
  --bg-dark: #cbccd1 !important;
  --bg-highlight: #b5b9c9 !important;
  --blockquote-border-color: #7847bd !important;
  --blue: #77a0f7 !important;
  --blue0: #7890dd !important;
  --blue1: #23a8c0 !important;
  --blue2: #0baeca !important;
  --blue5: #0098bb !important;
  --blue6: #4c8988 !important;
  --blue7: #92a6d5 !important;
  --blur-background: color-mix(in srgb, #d5d6db 65%, transparent) linear-gradient(#d5d6db, color-mix(in srgb, #d5d6db 65%, transparent)) !important;
  --bold-color: #77a0f7 !important;
  --border-color: #a8aecb !important;
  --border-color-primary: #a8aecb !important;
  --border-color-secondary: #a8aecb !important;
  --canvas-background: #d5d6db !important;
  --canvas-card-label-color: #8d98c9 !important;
  --canvas-color: 120, 71, 189 !important;
  --caret-color: #4c505e !important;
  --checkbox-border-color: #8d98c9 !important;
  --checkbox-border-color-hover: #b28af6 !important;
  --checkbox-color: #7847bd !important;
  --checkbox-color-hover: #b28af6 !important;
  --checkbox-marker-color: #d5d6db !important;
  --checklist-done-color: #8d98c9 !important;
  --code-background: #cbccd1 !important;
  --code-boolean: #e97c00 !important;
  --code-border-color: #a8aecb !important;
  --code-bracket-background: #b5b9c9 !important;
  --code-builtin: #009cd0 !important;
  --code-comment: #848cb5 !important;
  --code-definition: #77a0f7 !important;
  --code-function: #ba9155 !important;
  --code-important: #ba9155 !important;
  --code-keyword: #7847bd !important;
  --code-normal: #4c505e !important;
  --code-operator: #009cd0 !important;
  --code-parentheses: #8d98c9 !important;
  --code-property: #77a0f7 !important;
  --code-punctuation: #4c505e !important;
  --code-string: #799f50 !important;
  --code-tag: #f77e94 !important;
  --code-value: #e97c00 !important;
  --code-variable: #4c505e !important;
  --collapse-icon-color: #8d98c9 !important;
  --collapse-icon-color-collapsed: hsl(265, 47%, 51%) !important;
  --color-accent: hsl(265, 47%, 51%) !important;
  --color-accent-1: hsl(264, 47.47%, 54.825%) !important;
  --color-accent-2: hsl(262, 47.94%, 58.65%) !important;
  --color-accent-hsl: 265, 47%, 51% !important;
  --color-blue: #77a0f7 !important;
  --color-cyan: #009cd0 !important;
  --color-green: #799f50 !important;
  --color-orange: #e97c00 !important;
  --color-pink: pink !important;
  --color-purple: #7847bd !important;
  --color-red: #f77e94 !important;
  --color-yellow: #ba9155 !important;
  --comment: #848cb5 !important;
  --cyan: #009cd0 !important;
  --dark: #4c505e !important;
  --dark3: #8990b3 !important;
  --dark5: #68709a !important;
  --darkgray: #4c505e !important;
  --divider-color: #a8aecb !important;
  --divider-color-hover: hsl(265, 47%, 51%) !important;
  --dropdown-background: #cbccd1 !important;
  --dropdown-background-hover: #a8aecb !important;
  --embed-block-shadow-hover: 0 0 0 1px #a8aecb, inset 0 0 0 1px #a8aecb !important;
  --embed-border-start: 2px solid hsl(265, 47%, 51%) !important;
  --fg: #4c505e !important;
  --fg-dark: #8d98c9 !important;
  --fg-gutter: #a8aecb !important;
  --file-header-background: #d5d6db !important;
  --file-header-background-focused: #d5d6db !important;
  --flair-background: #cbccd1 !important;
  --flair-color: #4c505e !important;
  --footnote-divider-color: #a8aecb !important;
  --footnote-id-color: #4c505e !important;
  --footnote-id-color-no-occurrences: #8d98c9 !important;
  --footnote-input-background-active: #b5b9c9 !important;
  --graph-line: #a8aecb !important;
  --graph-node: hsl(265, 47%, 51%) !important;
  --graph-node-attachment: #7847bd !important;
  --graph-node-focused: #b28af6 !important;
  --graph-node-tag: #77a0f7 !important;
  --graph-node-unresolved: #a8aecb !important;
  --graph-text: #4c505e !important;
  --gray: #4c505e !important;
  --green: #799f50 !important;
  --green1: #519c91 !important;
  --green2: #48b5c6 !important;
  --h1-color: #7847bd !important;
  --h2-color: #77a0f7 !important;
  --h3-color: #799f50 !important;
  --h4-color: #ba9155 !important;
  --h5-color: #e97c00 !important;
  --h6-color: #f77e94 !important;
  --heading-formatting: #8d98c9 !important;
  --highlight: hsl(265, 47%, 51%) !important;
  --hr-color: #a8aecb !important;
  --icon-color: #4c505e !important;
  --icon-color-active: hsl(265, 47%, 51%) !important;
  --icon-color-focused: #4c505e !important;
  --icon-color-hover: #4c505e !important;
  --indentation-guide-color: #a8aecb !important;
  --indentation-guide-color-active: #8d98c9 !important;
  --inline-title-color: #4c505e !important;
  --input-date-separator: #8d98c9 !important;
  --input-placeholder-color: #8d98c9 !important;
  --interactive-accent: hsl(265, 47%, 51%) !important;
  --interactive-accent-hover: hsl(262, 47.94%, 58.65%) !important;
  --interactive-accent-hsl: 265, 47%, 51% !important;
  --interactive-hover: #a8aecb !important;
  --interactive-normal: #cbccd1 !important;
  --italic-color: #77a0f7 !important;
  --light: #d5d6db !important;
  --lightgray: #cbccd1 !important;
  --link-color: #7847bd !important;
  --link-color-hover: #b28af6 !important;
  --link-external-color: #7847bd !important;
  --link-external-color-hover: #b28af6 !important;
  --link-unresolved-color: #f77e94 !important;
  --link-unresolved-color-hover: #f77e94 !important;
  --link-unresolved-decoration-color: hsla(265, 47%, 51%, 0.3) !important;
  --list-marker-color: #7847bd !important;
  --list-marker-color-collapsed: hsl(265, 47%, 51%) !important;
  --list-marker-color-hover: #4c505e !important;
  --magenta: #b28af6 !important;
  --magenta2: #d20065 !important;
  --menu-background: #cbccd1 !important;
  --menu-border-color: #a8aecb !important;
  --metadata-border-color: #a8aecb !important;
  --metadata-divider-color: #a8aecb !important;
  --metadata-input-background-active: #b5b9c9 !important;
  --metadata-input-text-color: #4c505e !important;
  --metadata-label-background-active: #b5b9c9 !important;
  --metadata-label-text-color: #4c505e !important;
  --metadata-label-text-color-hover: #4c505e !important;
  --metadata-property-background-active: #b5b9c9 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a8aecb !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #a8aecb !important;
  --modal-background: #cbccd1 !important;
  --modal-border-color: #a8aecb !important;
  --nav-collapse-icon-color: #a8aecb !important;
  --nav-collapse-icon-color-collapsed: #a8aecb !important;
  --nav-heading-color: #4c505e !important;
  --nav-heading-color-collapsed: #8d98c9 !important;
  --nav-heading-color-collapsed-hover: #4c505e !important;
  --nav-heading-color-hover: #4c505e !important;
  --nav-indentation-guide-color: #a8aecb !important;
  --nav-item-background-active: #7847bd !important;
  --nav-item-background-hover: #b5b9c9 !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #4c505e !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #77a0f7 !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #8d98c9 !important;
  --nav-tag-color-active: #4c505e !important;
  --nav-tag-color-hover: #4c505e !important;
  --orange: #e97c00 !important;
  --pdf-background: #d5d6db !important;
  --pdf-page-background: #d5d6db !important;
  --pdf-sidebar-background: #d5d6db !important;
  --pill-border-color: #a8aecb !important;
  --pill-border-color-hover: #a8aecb !important;
  --pill-color: #4c505e !important;
  --pill-color-hover: #4c505e !important;
  --pill-color-remove: #8d98c9 !important;
  --pill-color-remove-hover: hsl(265, 47%, 51%) !important;
  --prompt-background: #d5d6db !important;
  --prompt-border-color: #a8aecb !important;
  --purple: #7847bd !important;
  --raised-background: color-mix(in srgb, #d5d6db 65%, transparent) linear-gradient(#d5d6db, color-mix(in srgb, #d5d6db 65%, transparent)) !important;
  --red: #f77e94 !important;
  --red1: #c64343 !important;
  --ribbon-background: #cbccd1 !important;
  --ribbon-background-collapsed: #d5d6db !important;
  --search-clear-button-color: #4c505e !important;
  --search-icon-color: #4c505e !important;
  --search-result-background: #d5d6db !important;
  --secondary: hsl(265, 47%, 51%) !important;
  --selection-background-color: #b5b9c9 !important;
  --selection-border-color: #b28af6 !important;
  --setting-group-heading-color: #4c505e !important;
  --setting-items-border-color: #a8aecb !important;
  --slider-track-background: #cbccd1 !important;
  --status-bar-background: #cbccd1 !important;
  --status-bar-border-color: #a8aecb !important;
  --status-bar-text-color: #4c505e !important;
  --suggestion-background: #d5d6db !important;
  --sync-avatar-color-1: #f77e94 !important;
  --sync-avatar-color-2: #e97c00 !important;
  --sync-avatar-color-3: #ba9155 !important;
  --sync-avatar-color-4: #799f50 !important;
  --sync-avatar-color-5: #009cd0 !important;
  --sync-avatar-color-6: #77a0f7 !important;
  --sync-avatar-color-7: #7847bd !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #d5d6db !important;
  --tab-container-background: #cbccd1 !important;
  --tab-divider-color: #b5b9c9 !important;
  --tab-outline-color: #a8aecb !important;
  --tab-switcher-background: #cbccd1 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #cbccd1, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(265, 47%, 51%) !important;
  --tab-text-color: #a8aecb !important;
  --tab-text-color-active: #4c505e !important;
  --tab-text-color-focused: #4c505e !important;
  --tab-text-color-focused-active: #4c505e !important;
  --tab-text-color-focused-active-current: #4c505e !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #a8aecb !important;
  --table-border-color: #a8aecb !important;
  --table-drag-handle-background-active: #b28af6 !important;
  --table-drag-handle-color: #b5b9c9 !important;
  --table-drag-handle-color-active: #b5b9c9 !important;
  --table-header-border-color: #a8aecb !important;
  --table-header-color: #4c505e !important;
  --table-selection: #b5b9c9 !important;
  --table-selection-border-color: #b28af6 !important;
  --tag-background: #a8aecb !important;
  --tag-background-hover: #8d98c9 !important;
  --tag-border-color: hsla(265, 47%, 51%, 0.15) !important;
  --tag-border-color-hover: hsla(265, 47%, 51%, 0.15) !important;
  --tag-color: #7847bd !important;
  --tag-color-hover: #7847bd !important;
  --teal: #18b495 !important;
  --terminal-black: #a1a6c5 !important;
  --tertiary: red !important;
  --text-accent: hsl(265, 47%, 51%) !important;
  --text-accent-hover: red !important;
  --text-color: #4c505e !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #a8aecb !important;
  --text-color-muted-light: #8d98c9 !important;
  --text-error: #f77e94 !important;
  --text-faint: #8d98c9 !important;
  --text-highlight-bg: hsl(265, 47%, 51%) !important;
  --text-muted: #4c505e !important;
  --text-normal: #4c505e !important;
  --text-on-accent-inverted: #d5d6db !important;
  --text-selection: #b5b9c9 !important;
  --text-success: #799f50 !important;
  --text-warning: #ba9155 !important;
  --textHighlight: hsl(265, 47%, 51%) !important;
  --titlebar-background: #cbccd1 !important;
  --titlebar-background-focused: #a8aecb !important;
  --titlebar-border-color: #a8aecb !important;
  --titlebar-text-color: #4c505e !important;
  --titlebar-text-color-focused: #4c505e !important;
  --vault-profile-color: #4c505e !important;
  --vault-profile-color-hover: #4c505e !important;
  --yellow: #ba9155 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(203, 204, 209);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(213, 214, 219);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(213, 214, 219);
  border-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(168, 174, 203);
  color: rgb(120, 71, 189);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(203, 204, 209);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(203, 204, 209);
  border-left-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(213, 214, 219);
  color: rgb(76, 80, 94);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(119, 160, 247);
  outline: rgb(119, 160, 247) none 0px;
  text-decoration-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(119, 160, 247);
  outline: rgb(119, 160, 247) none 0px;
  text-decoration-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(119, 160, 247);
  outline: rgb(119, 160, 247) none 0px;
  text-decoration-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(119, 160, 247);
  outline: rgb(119, 160, 247) none 0px;
  text-decoration-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(120, 71, 189);
  color: rgb(76, 80, 94);
  outline: rgb(76, 80, 94) none 0px;
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body del {
  color: rgb(76, 80, 94);
  outline: rgb(76, 80, 94) none 0px;
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(141, 152, 201);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(120, 71, 189);
  border-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body p {
  color: rgb(76, 80, 94);
  outline: rgb(76, 80, 94) none 0px;
  text-decoration-color: rgb(76, 80, 94);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(120, 71, 189);
  outline: rgb(120, 71, 189) none 0px;
  text-decoration-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(120, 71, 189);
  outline: rgb(120, 71, 189) none 0px;
  text-decoration-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(247, 126, 148);
  outline: rgb(247, 126, 148) none 0px;
  text-decoration: underline rgba(120, 71, 189, 0.3);
  text-decoration-color: rgba(120, 71, 189, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(141, 152, 201);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body table {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(186, 145, 85);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(186, 145, 85);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(186, 145, 85);
  border-left-color: rgb(186, 145, 85);
  border-right-color: rgb(186, 145, 85);
  border-top-color: rgb(186, 145, 85);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(120, 71, 189);
  border-left-color: rgb(120, 71, 189);
  border-right-color: rgb(120, 71, 189);
  border-top-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(120, 71, 189);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(141, 152, 201);
  border-left-color: rgb(141, 152, 201);
  border-right-color: rgb(141, 152, 201);
  border-top-color: rgb(141, 152, 201);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
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
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 80, 94);
  outline: rgb(76, 80, 94) none 0px;
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(181, 185, 201);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(203, 204, 209);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(181, 185, 201);
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(181, 185, 201);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(168, 174, 203);
  border-bottom-color: rgba(120, 71, 189, 0.15);
  border-left-color: rgba(120, 71, 189, 0.15);
  border-right-color: rgba(120, 71, 189, 0.15);
  border-top-color: rgba(120, 71, 189, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(120, 71, 189);
}

html[saved-theme="light"] body h1 {
  color: rgb(120, 71, 189);
}

html[saved-theme="light"] body h2 {
  color: rgb(119, 160, 247);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body h3 {
  color: rgb(121, 159, 80);
}

html[saved-theme="light"] body h4 {
  color: rgb(186, 145, 85);
}

html[saved-theme="light"] body h5 {
  color: rgb(233, 124, 0);
}

html[saved-theme="light"] body h6 {
  color: rgb(247, 126, 148);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(168, 174, 203);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 80, 94);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(76, 80, 94);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(76, 80, 94);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(76, 80, 94);
  stroke: rgb(76, 80, 94);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(141, 152, 201);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(203, 204, 209);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(168, 174, 203);
  border-bottom-color: rgba(120, 71, 189, 0.15);
  border-left-color: rgba(120, 71, 189, 0.15);
  border-right-color: rgba(120, 71, 189, 0.15);
  border-top-color: rgba(120, 71, 189, 0.15);
  color: rgb(120, 71, 189);
}`,
  },
};
