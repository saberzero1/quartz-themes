import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.dracula-soft",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(262, 61%, 77%) !important;
  --accent-color-dark: #baa0e8 !important;
  --accent-color-hover: #87e58e !important;
  --accent-color-light: #e48cc1 !important;
  --accent-h: 262 !important;
  --accent-l: 77% !important;
  --accent-s: 61% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #4b5263 !important;
  --background-modifier-border-focus: #3e4452 !important;
  --background-modifier-border-hover: #3e4452 !important;
  --background-modifier-error: #dd6e6b !important;
  --background-modifier-error-hover: #dd6e6b !important;
  --background-modifier-form-field: #21222c !important;
  --background-modifier-form-field-hover: #21222c !important;
  --background-modifier-hover: #7c7f8a !important;
  --background-modifier-success: #87e58e !important;
  --background-primary: #292a35 !important;
  --background-secondary: #21222c !important;
  --bases-cards-background: #292a35 !important;
  --bases-cards-shadow: 0 0 0 1px #4b5263 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3e4452 !important;
  --bases-embed-border-color: #4b5263 !important;
  --bases-group-heading-property-color: #f6f6f5 !important;
  --bases-table-border-color: #4b5263 !important;
  --bases-table-cell-background-active: #292a35 !important;
  --bases-table-cell-background-selected: #7c7f8a !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #3e4452 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(262, 61%, 77%) !important;
  --bases-table-header-background: #292a35 !important;
  --bases-table-header-background-hover: #7c7f8a !important;
  --bases-table-header-color: #f6f6f5 !important;
  --bases-table-summary-background: #292a35 !important;
  --bases-table-summary-background-hover: #7c7f8a !important;
  --bg: #292a35 !important;
  --black: #1c1c1c !important;
  --blockquote-border-color: #baa0e8 !important;
  --blur-background: color-mix(in srgb, #21222c 65%, transparent) linear-gradient(#21222c, color-mix(in srgb, #21222c 65%, transparent)) !important;
  --bold-color: #e48cc1 !important;
  --border-color: #4b5263 !important;
  --border-color-primary: #4b5263 !important;
  --border-color-secondary: #3e4452 !important;
  --bright-blue: #d0b5f3 !important;
  --bright-cyan: #bcf4f5 !important;
  --bright-green: #97eda2 !important;
  --bright-magenta: #e7a1d7 !important;
  --bright-red: #e1837f !important;
  --bright-white: #ffffff !important;
  --bright-yellow: #f6f6b6 !important;
  --canvas-background: #292a35 !important;
  --canvas-card-label-color: #4b5263 !important;
  --canvas-color: 186, 160, 232 !important;
  --caret-color: #f6f6f5 !important;
  --checkbox-border-color: #4b5263 !important;
  --checkbox-border-color-hover: #87e58e !important;
  --checkbox-color: #baa0e8 !important;
  --checkbox-color-hover: #87e58e !important;
  --checkbox-marker-color: #292a35 !important;
  --checklist-done-color: #4b5263 !important;
  --code-background: #21222c !important;
  --code-boolean: #baa0e8 !important;
  --code-border-color: #4b5263 !important;
  --code-bracket-background: #7c7f8a !important;
  --code-builtin: #87e58e !important;
  --code-comment: #70747f !important;
  --code-definition: #f6f6f5 !important;
  --code-function: #e8eda2 !important;
  --code-important: #e8eda2 !important;
  --code-keyword: #e48cc1 !important;
  --code-normal: #f6f6f5 !important;
  --code-operator: #e48cc1 !important;
  --code-parentheses: #a7dfef !important;
  --code-property: #87e58e !important;
  --code-punctuation: #f6f6f5 !important;
  --code-string: #e8eda2 !important;
  --code-tag: #dd6e6b !important;
  --code-value: #baa0e8 !important;
  --code-variable: #baa0e8 !important;
  --collapse-icon-color: #4b5263 !important;
  --collapse-icon-color-collapsed: hsl(262, 61%, 77%) !important;
  --color-accent: hsl(262, 61%, 77%) !important;
  --color-accent-1: hsl(259, 62.22%, 88.55%) !important;
  --color-accent-2: hsl(257, 64.05%, 99.33%) !important;
  --color-accent-hsl: 262, 61%, 77% !important;
  --color-blue: #70747f !important;
  --color-cyan: #a7dfef !important;
  --color-green: #87e58e !important;
  --color-orange: #fdc38e !important;
  --color-pink: #e48cc1 !important;
  --color-purple: #baa0e8 !important;
  --color-red: #dd6e6b !important;
  --color-yellow: #e8eda2 !important;
  --comment: #70747f !important;
  --cyan: #a7dfef !important;
  --dark: #f6f6f5 !important;
  --darkgray: #f6f6f5 !important;
  --divider-color: #4b5263 !important;
  --divider-color-hover: hsl(262, 61%, 77%) !important;
  --dropdown-background: #21222c !important;
  --dropdown-background-hover: #4b5263 !important;
  --embed-block-shadow-hover: 0 0 0 1px #4b5263, inset 0 0 0 1px #4b5263 !important;
  --embed-border-start: 2px solid hsl(262, 61%, 77%) !important;
  --fg: #f6f6f5 !important;
  --file-header-background: #292a35 !important;
  --file-header-background-focused: #292a35 !important;
  --flair-background: #21222c !important;
  --flair-color: #f6f6f5 !important;
  --footnote-divider-color: #4b5263 !important;
  --footnote-id-color: #f6f6f5 !important;
  --footnote-id-color-no-occurrences: #4b5263 !important;
  --footnote-input-background-active: #7c7f8a !important;
  --graph-line: #3e4452 !important;
  --graph-node: hsl(262, 61%, 77%) !important;
  --graph-node-attachment: #baa0e8 !important;
  --graph-node-focused: #87e58e !important;
  --graph-node-tag: #e48cc1 !important;
  --graph-node-unresolved: #4b5263 !important;
  --graph-text: #f6f6f5 !important;
  --gray: #f6f6f5 !important;
  --green: #87e58e !important;
  --gutter-fg: #4b5263 !important;
  --h1-color: #baa0e8 !important;
  --h2-color: #e48cc1 !important;
  --h3-color: #87e58e !important;
  --h4-color: #e8eda2 !important;
  --h5-color: #fdc38e !important;
  --h6-color: #dd6e6b !important;
  --heading-formatting: #4b5263 !important;
  --highlight: hsl(262, 61%, 77%) !important;
  --hr-color: #3b4048 !important;
  --icon-color: #f6f6f5 !important;
  --icon-color-active: hsl(262, 61%, 77%) !important;
  --icon-color-focused: #f6f6f5 !important;
  --icon-color-hover: #f6f6f5 !important;
  --indentation-guide-color: #3b4048 !important;
  --indentation-guide-color-active: #4b5263 !important;
  --inline-title-color: #f6f6f5 !important;
  --input-date-separator: #4b5263 !important;
  --input-placeholder-color: #4b5263 !important;
  --interactive-accent: hsl(262, 61%, 77%) !important;
  --interactive-accent-hover: hsl(259, 62.22%, 88.55%) !important;
  --interactive-accent-hsl: 262, 61%, 77% !important;
  --interactive-hover: #4b5263 !important;
  --interactive-normal: #21222c !important;
  --italic-color: #e48cc1 !important;
  --light: #292a35 !important;
  --lightgray: #21222c !important;
  --link-color: #baa0e8 !important;
  --link-color-hover: #87e58e !important;
  --link-external-color: #baa0e8 !important;
  --link-external-color-hover: #87e58e !important;
  --link-unresolved-color: #dd6e6b !important;
  --link-unresolved-color-hover: #dd6e6b !important;
  --link-unresolved-decoration-color: hsla(262, 61%, 77%, 0.3) !important;
  --list-marker-color: #baa0e8 !important;
  --list-marker-color-collapsed: hsl(262, 61%, 77%) !important;
  --list-marker-color-hover: #f6f6f5 !important;
  --menu: #21222c !important;
  --menu-background: #21222c !important;
  --menu-border-color: #3e4452 !important;
  --metadata-border-color: #4b5263 !important;
  --metadata-divider-color: #4b5263 !important;
  --metadata-input-background-active: #7c7f8a !important;
  --metadata-input-text-color: #f6f6f5 !important;
  --metadata-label-background-active: #7c7f8a !important;
  --metadata-label-text-color: #f6f6f5 !important;
  --metadata-label-text-color-hover: #f6f6f5 !important;
  --metadata-property-background-active: #7c7f8a !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #3e4452 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3e4452 !important;
  --modal-background: #21222c !important;
  --modal-border-color: #4b5263 !important;
  --nav-collapse-icon-color: #3e4452 !important;
  --nav-collapse-icon-color-collapsed: #3e4452 !important;
  --nav-heading-color: #f6f6f5 !important;
  --nav-heading-color-collapsed: #4b5263 !important;
  --nav-heading-color-collapsed-hover: #f6f6f5 !important;
  --nav-heading-color-hover: #f6f6f5 !important;
  --nav-indentation-guide-color: #3e4452 !important;
  --nav-item-background-active: #baa0e8 !important;
  --nav-item-background-hover: #7c7f8a !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #f6f6f5 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #e48cc1 !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #4b5263 !important;
  --nav-tag-color-active: #f6f6f5 !important;
  --nav-tag-color-hover: #f6f6f5 !important;
  --nontext: #3b4048 !important;
  --orange: #fdc38e !important;
  --pdf-background: #292a35 !important;
  --pdf-page-background: #292a35 !important;
  --pdf-shadow: 0 0 0 1px #4b5263 !important;
  --pdf-sidebar-background: #292a35 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #4b5263 !important;
  --pill-border-color: #4b5263 !important;
  --pill-border-color-hover: #3e4452 !important;
  --pill-color: #f6f6f5 !important;
  --pill-color-hover: #f6f6f5 !important;
  --pill-color-remove: #4b5263 !important;
  --pill-color-remove-hover: hsl(262, 61%, 77%) !important;
  --pink: #e48cc1 !important;
  --prompt-background: #292a35 !important;
  --prompt-border-color: #4b5263 !important;
  --purple: #baa0e8 !important;
  --raised-background: color-mix(in srgb, #21222c 65%, transparent) linear-gradient(#21222c, color-mix(in srgb, #21222c 65%, transparent)) !important;
  --red: #dd6e6b !important;
  --ribbon-background: #21222c !important;
  --ribbon-background-collapsed: #292a35 !important;
  --search-clear-button-color: #f6f6f5 !important;
  --search-icon-color: #f6f6f5 !important;
  --search-result-background: #292a35 !important;
  --secondary: hsl(262, 61%, 77%) !important;
  --selection: #7c7f8a !important;
  --selection-background-color: #7c7f8a !important;
  --selection-border-color: #87e58e !important;
  --setting-group-heading-color: #f6f6f5 !important;
  --setting-items-border-color: #4b5263 !important;
  --slider-thumb-border-color: #1c1c1c !important;
  --slider-track-background: #21222c !important;
  --status-bar-background: #21222c !important;
  --status-bar-border-color: #4b5263 !important;
  --status-bar-text-color: #f6f6f5 !important;
  --suggestion-background: #292a35 !important;
  --sync-avatar-color-1: #dd6e6b !important;
  --sync-avatar-color-2: #fdc38e !important;
  --sync-avatar-color-3: #e8eda2 !important;
  --sync-avatar-color-4: #87e58e !important;
  --sync-avatar-color-5: #a7dfef !important;
  --sync-avatar-color-6: #70747f !important;
  --sync-avatar-color-7: #baa0e8 !important;
  --sync-avatar-color-8: #e48cc1 !important;
  --tab-background-active: #292a35 !important;
  --tab-container-background: #21222c !important;
  --tab-divider-color: #7c7f8a !important;
  --tab-outline-color: #4b5263 !important;
  --tab-switcher-background: #21222c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #21222c, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(262, 61%, 77%) !important;
  --tab-text-color: #4b5263 !important;
  --tab-text-color-active: #f6f6f5 !important;
  --tab-text-color-focused: #f6f6f5 !important;
  --tab-text-color-focused-active: #f6f6f5 !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #4b5263 !important;
  --table-border-color: #4b5263 !important;
  --table-drag-handle-background-active: #87e58e !important;
  --table-drag-handle-color: #7c7f8a !important;
  --table-drag-handle-color-active: #7c7f8a !important;
  --table-header-border-color: #4b5263 !important;
  --table-header-color: #f6f6f5 !important;
  --table-selection: #7c7f8a !important;
  --table-selection-border-color: #87e58e !important;
  --tag-background: #3b4048 !important;
  --tag-background-hover: #4b5263 !important;
  --tag-border-color: hsla(262, 61%, 77%, 0.15) !important;
  --tag-border-color-hover: hsla(262, 61%, 77%, 0.15) !important;
  --tag-color: #baa0e8 !important;
  --tag-color-hover: #baa0e8 !important;
  --tertiary: red !important;
  --text-accent: hsl(262, 61%, 77%) !important;
  --text-accent-hover: red !important;
  --text-color: #f6f6f5 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #3b4048 !important;
  --text-color-muted-light: #4b5263 !important;
  --text-error: #dd6e6b !important;
  --text-faint: #4b5263 !important;
  --text-highlight-bg: hsl(262, 61%, 77%) !important;
  --text-muted: #f6f6f5 !important;
  --text-normal: #f6f6f5 !important;
  --text-on-accent-inverted: #292a35 !important;
  --text-selection: #7c7f8a !important;
  --text-success: #87e58e !important;
  --text-warning: #e8eda2 !important;
  --textHighlight: hsl(262, 61%, 77%) !important;
  --titlebar-background: #21222c !important;
  --titlebar-background-focused: #4b5263 !important;
  --titlebar-border-color: #4b5263 !important;
  --titlebar-text-color: #f6f6f5 !important;
  --titlebar-text-color-focused: #f6f6f5 !important;
  --vault-profile-color: #f6f6f5 !important;
  --vault-profile-color-hover: #f6f6f5 !important;
  --visual: #3e4452 !important;
  --white: #f6f6f5 !important;
  --yellow: #e8eda2 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 34, 44);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(41, 42, 53);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(75, 82, 99);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(33, 34, 44);
  border-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(75, 82, 99);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(59, 64, 72);
  color: rgb(186, 160, 232);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 34, 44);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(75, 82, 99);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 34, 44);
  border-left-color: rgb(75, 82, 99);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(41, 42, 53);
  color: rgb(246, 246, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(228, 140, 193);
  outline: rgb(228, 140, 193) none 0px;
  text-decoration-color: rgb(228, 140, 193);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(228, 140, 193);
  outline: rgb(228, 140, 193) none 0px;
  text-decoration-color: rgb(228, 140, 193);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(228, 140, 193);
  outline: rgb(228, 140, 193) none 0px;
  text-decoration-color: rgb(228, 140, 193);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(228, 140, 193);
  outline: rgb(228, 140, 193) none 0px;
  text-decoration-color: rgb(228, 140, 193);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(187, 161, 232);
  color: rgb(246, 246, 245);
  outline: rgb(246, 246, 245) none 0px;
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(246, 246, 245);
  outline: rgb(246, 246, 245) none 0px;
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(75, 82, 99);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(186, 160, 232);
  border-color: rgb(186, 160, 232);
}

html[saved-theme="dark"] body p {
  color: rgb(246, 246, 245);
  outline: rgb(246, 246, 245) none 0px;
  text-decoration-color: rgb(246, 246, 245);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(186, 160, 232);
  outline: rgb(186, 160, 232) none 0px;
  text-decoration-color: rgb(186, 160, 232);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(186, 160, 232);
  outline: rgb(186, 160, 232) none 0px;
  text-decoration-color: rgb(186, 160, 232);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(221, 110, 107);
  outline: rgb(221, 110, 107) none 0px;
  text-decoration: underline rgba(187, 161, 232, 0.3);
  text-decoration-color: rgba(187, 161, 232, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(75, 82, 99);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
  color: rgb(246, 246, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(232, 237, 162);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(232, 237, 162);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(232, 237, 162);
  border-left-color: rgb(232, 237, 162);
  border-right-color: rgb(232, 237, 162);
  border-top-color: rgb(232, 237, 162);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(186, 160, 232);
  border-left-color: rgb(186, 160, 232);
  border-right-color: rgb(186, 160, 232);
  border-top-color: rgb(186, 160, 232);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(187, 161, 232);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(246, 246, 245);
  text-decoration-color: rgb(246, 246, 245);
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
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(41, 42, 53);
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(246, 246, 245);
  outline: rgb(246, 246, 245) none 0px;
  text-decoration-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(124, 127, 138);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(124, 127, 138);
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(124, 127, 138);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(59, 64, 72);
  border-bottom-color: rgba(187, 161, 232, 0.15);
  border-left-color: rgba(187, 161, 232, 0.15);
  border-right-color: rgba(187, 161, 232, 0.15);
  border-top-color: rgba(187, 161, 232, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(186, 160, 232);
}

html[saved-theme="dark"] body h1 {
  color: rgb(186, 160, 232);
}

html[saved-theme="dark"] body h2 {
  color: rgb(228, 140, 193);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body h3 {
  color: rgb(135, 229, 142);
}

html[saved-theme="dark"] body h4 {
  color: rgb(232, 237, 162);
}

html[saved-theme="dark"] body h5 {
  color: rgb(253, 195, 142);
}

html[saved-theme="dark"] body h6 {
  color: rgb(221, 110, 107);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(41, 42, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 42, 53);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(41, 42, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 42, 53);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(41, 42, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 42, 53);
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 42, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 42, 53);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 42, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 42, 53);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(41, 42, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 42, 53);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(62, 68, 82);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(246, 246, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(246, 246, 245);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(246, 246, 245);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(246, 246, 245);
  stroke: rgb(246, 246, 245);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(75, 82, 99);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(75, 82, 99);
  border-left-color: rgb(75, 82, 99);
  border-right-color: rgb(75, 82, 99);
  border-top-color: rgb(75, 82, 99);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(33, 34, 44);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body abbr {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 34, 44);
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(246, 246, 245);
  border-left-color: rgb(246, 246, 245);
  border-right-color: rgb(246, 246, 245);
  border-top-color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(246, 246, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(59, 64, 72);
  border-bottom-color: rgba(187, 161, 232, 0.15);
  border-left-color: rgba(187, 161, 232, 0.15);
  border-right-color: rgba(187, 161, 232, 0.15);
  border-top-color: rgba(187, 161, 232, 0.15);
  color: rgb(186, 160, 232);
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(3, 53%, 67%) !important;
  --accent-color-dark: #286983 !important;
  --accent-color-hover: #907aa9 !important;
  --accent-color-light: #d7827e !important;
  --accent-h: 3 !important;
  --accent-l: 67% !important;
  --accent-s: 53% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #dfdad9 !important;
  --background-modifier-border-focus: #cecacd !important;
  --background-modifier-border-hover: #cecacd !important;
  --background-modifier-error: #b4637a !important;
  --background-modifier-error-hover: #b4637a !important;
  --background-modifier-form-field: #fffaf3 !important;
  --background-modifier-form-field-hover: #fffaf3 !important;
  --background-modifier-hover: #f2e9e1 !important;
  --background-modifier-success: #56949f !important;
  --background-primary: #faf4ed !important;
  --background-secondary: #fffaf3 !important;
  --base: #faf4ed !important;
  --bases-cards-background: #faf4ed !important;
  --bases-cards-shadow: 0 0 0 1px #dfdad9 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #cecacd !important;
  --bases-embed-border-color: #dfdad9 !important;
  --bases-group-heading-property-color: #575279 !important;
  --bases-table-border-color: #dfdad9 !important;
  --bases-table-cell-background-active: #faf4ed !important;
  --bases-table-cell-background-selected: #f2e9e1 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #cecacd !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(3, 53%, 67%) !important;
  --bases-table-header-background: #faf4ed !important;
  --bases-table-header-background-hover: #f2e9e1 !important;
  --bases-table-header-color: #575279 !important;
  --bases-table-summary-background: #faf4ed !important;
  --bases-table-summary-background-hover: #f2e9e1 !important;
  --blockquote-border-color: #286983 !important;
  --blur-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent)) !important;
  --bold-color: #d7827e !important;
  --border-color: #dfdad9 !important;
  --border-color-primary: #dfdad9 !important;
  --border-color-secondary: #cecacd !important;
  --canvas-background: #faf4ed !important;
  --canvas-card-label-color: #9893a5 !important;
  --canvas-color: 215, 130, 126 !important;
  --caret-color: #575279 !important;
  --checkbox-border-color: #9893a5 !important;
  --checkbox-border-color-hover: #907aa9 !important;
  --checkbox-color: #286983 !important;
  --checkbox-color-hover: #907aa9 !important;
  --checkbox-marker-color: #faf4ed !important;
  --checklist-done-color: #9893a5 !important;
  --code-background: #fffaf3 !important;
  --code-boolean: #d7827e !important;
  --code-border-color: #dfdad9 !important;
  --code-bracket-background: #f2e9e1 !important;
  --code-builtin: #b4637a !important;
  --code-comment: #9893a5 !important;
  --code-definition: #d7827e !important;
  --code-function: #ea9d34 !important;
  --code-important: #ea9d34 !important;
  --code-keyword: #286983 !important;
  --code-normal: #575279 !important;
  --code-operator: #286983 !important;
  --code-parentheses: #797593 !important;
  --code-property: #56949f !important;
  --code-punctuation: #575279 !important;
  --code-string: #ea9d34 !important;
  --code-tag: #b4637a !important;
  --code-value: #d7827e !important;
  --code-variable: #575279 !important;
  --collapse-icon-color: #9893a5 !important;
  --collapse-icon-color-collapsed: hsl(3, 53%, 67%) !important;
  --color-accent: hsl(3, 53%, 67%) !important;
  --color-accent-1: hsl(2, 53.53%, 72.025%) !important;
  --color-accent-2: hsl(0, 54.06%, 77.05%) !important;
  --color-accent-hsl: 3, 53%, 67% !important;
  --color-blue: #286983 !important;
  --color-cyan: #56949f !important;
  --color-green: #56949f !important;
  --color-orange: #d7827e !important;
  --color-pink: pink !important;
  --color-purple: #907aa9 !important;
  --color-red: #b4637a !important;
  --color-yellow: #ea9d34 !important;
  --dark: #575279 !important;
  --darkgray: #575279 !important;
  --divider-color: #dfdad9 !important;
  --divider-color-hover: hsl(3, 53%, 67%) !important;
  --dropdown-background: #fffaf3 !important;
  --dropdown-background-hover: #dfdad9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dfdad9, inset 0 0 0 1px #dfdad9 !important;
  --embed-border-start: 2px solid hsl(3, 53%, 67%) !important;
  --file-header-background: #faf4ed !important;
  --file-header-background-focused: #faf4ed !important;
  --flair-background: #fffaf3 !important;
  --flair-color: #575279 !important;
  --foam: #56949f !important;
  --footnote-divider-color: #dfdad9 !important;
  --footnote-id-color: #575279 !important;
  --footnote-id-color-no-occurrences: #9893a5 !important;
  --footnote-input-background-active: #f2e9e1 !important;
  --gold: #ea9d34 !important;
  --graph-line: #cecacd !important;
  --graph-node: hsl(3, 53%, 67%) !important;
  --graph-node-attachment: #286983 !important;
  --graph-node-focused: #907aa9 !important;
  --graph-node-tag: #d7827e !important;
  --graph-node-unresolved: #dfdad9 !important;
  --graph-text: #575279 !important;
  --gray: #575279 !important;
  --h1-color: #907aa9 !important;
  --h2-color: #286983 !important;
  --h3-color: #56949f !important;
  --h4-color: #ea9d34 !important;
  --h5-color: #d7827e !important;
  --h6-color: #b4637a !important;
  --heading-formatting: #9893a5 !important;
  --highlight: hsl(3, 53%, 67%) !important;
  --highlight-high: #cecacd !important;
  --highlight-low: #f4ede8 !important;
  --highlight-med: #dfdad9 !important;
  --hr-color: #f2e9e1 !important;
  --icon-color: #575279 !important;
  --icon-color-active: hsl(3, 53%, 67%) !important;
  --icon-color-focused: #575279 !important;
  --icon-color-hover: #575279 !important;
  --indentation-guide-color: #f2e9e1 !important;
  --indentation-guide-color-active: #9893a5 !important;
  --inline-title-color: #575279 !important;
  --input-date-separator: #9893a5 !important;
  --input-placeholder-color: #9893a5 !important;
  --interactive-accent: hsl(3, 53%, 67%) !important;
  --interactive-accent-hover: hsl(0, 54.06%, 77.05%) !important;
  --interactive-accent-hsl: 3, 53%, 67% !important;
  --interactive-hover: #dfdad9 !important;
  --interactive-normal: #fffaf3 !important;
  --iris: #907aa9 !important;
  --italic-color: #d7827e !important;
  --light: #faf4ed !important;
  --lightgray: #fffaf3 !important;
  --link-color: #286983 !important;
  --link-color-hover: #907aa9 !important;
  --link-external-color: #286983 !important;
  --link-external-color-hover: #907aa9 !important;
  --link-unresolved-decoration-color: hsla(3, 53%, 67%, 0.3) !important;
  --list-marker-color: #286983 !important;
  --list-marker-color-collapsed: hsl(3, 53%, 67%) !important;
  --list-marker-color-hover: #575279 !important;
  --love: #b4637a !important;
  --menu-background: #fffaf3 !important;
  --menu-border-color: #cecacd !important;
  --metadata-border-color: #dfdad9 !important;
  --metadata-divider-color: #dfdad9 !important;
  --metadata-input-background-active: #f2e9e1 !important;
  --metadata-input-text-color: #575279 !important;
  --metadata-label-background-active: #f2e9e1 !important;
  --metadata-label-text-color: #575279 !important;
  --metadata-label-text-color-hover: #575279 !important;
  --metadata-property-background-active: #f2e9e1 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #cecacd !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #cecacd !important;
  --modal-background: #fffaf3 !important;
  --modal-border-color: #dfdad9 !important;
  --muted: #9893a5 !important;
  --nav-collapse-icon-color: #cecacd !important;
  --nav-collapse-icon-color-collapsed: #cecacd !important;
  --nav-heading-color: #575279 !important;
  --nav-heading-color-collapsed: #9893a5 !important;
  --nav-heading-color-collapsed-hover: #575279 !important;
  --nav-heading-color-hover: #575279 !important;
  --nav-indentation-guide-color: #cecacd !important;
  --nav-item-background-active: #286983 !important;
  --nav-item-background-hover: #f2e9e1 !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #575279 !important;
  --nav-item-color-active: #575279 !important;
  --nav-item-color-highlighted: #d7827e !important;
  --nav-item-color-hover: #575279 !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #9893a5 !important;
  --nav-tag-color-active: #575279 !important;
  --nav-tag-color-hover: #575279 !important;
  --nc: #f8f0e7 !important;
  --overlay: #f2e9e1 !important;
  --pdf-background: #faf4ed !important;
  --pdf-page-background: #faf4ed !important;
  --pdf-sidebar-background: #faf4ed !important;
  --pill-border-color: #dfdad9 !important;
  --pill-border-color-hover: #cecacd !important;
  --pill-color: #575279 !important;
  --pill-color-hover: #575279 !important;
  --pill-color-remove: #9893a5 !important;
  --pill-color-remove-hover: hsl(3, 53%, 67%) !important;
  --pine: #286983 !important;
  --prompt-background: #faf4ed !important;
  --prompt-border-color: #dfdad9 !important;
  --raised-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent)) !important;
  --ribbon-background: #fffaf3 !important;
  --ribbon-background-collapsed: #faf4ed !important;
  --rose: #d7827e !important;
  --search-clear-button-color: #575279 !important;
  --search-icon-color: #575279 !important;
  --search-result-background: #faf4ed !important;
  --secondary: hsl(3, 53%, 67%) !important;
  --selection-background-color: #f2e9e1 !important;
  --selection-border-color: #907aa9 !important;
  --setting-group-heading-color: #575279 !important;
  --setting-items-border-color: #dfdad9 !important;
  --slider-track-background: #fffaf3 !important;
  --status-bar-background: #fffaf3 !important;
  --status-bar-border-color: #dfdad9 !important;
  --status-bar-text-color: #575279 !important;
  --subtle: #797593 !important;
  --suggestion-background: #faf4ed !important;
  --surface: #fffaf3 !important;
  --sync-avatar-color-1: #b4637a !important;
  --sync-avatar-color-2: #d7827e !important;
  --sync-avatar-color-3: #ea9d34 !important;
  --sync-avatar-color-4: #56949f !important;
  --sync-avatar-color-5: #56949f !important;
  --sync-avatar-color-6: #286983 !important;
  --sync-avatar-color-7: #907aa9 !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #faf4ed !important;
  --tab-container-background: #fffaf3 !important;
  --tab-divider-color: #f2e9e1 !important;
  --tab-outline-color: #dfdad9 !important;
  --tab-switcher-background: #fffaf3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffaf3, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(3, 53%, 67%) !important;
  --tab-text-color: #dfdad9 !important;
  --tab-text-color-active: #575279 !important;
  --tab-text-color-focused: #575279 !important;
  --tab-text-color-focused-active: #575279 !important;
  --tab-text-color-focused-active-current: #575279 !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #dfdad9 !important;
  --table-border-color: #dfdad9 !important;
  --table-drag-handle-background-active: #907aa9 !important;
  --table-drag-handle-color: #f2e9e1 !important;
  --table-drag-handle-color-active: #f2e9e1 !important;
  --table-header-border-color: #dfdad9 !important;
  --table-header-color: #575279 !important;
  --table-selection: #f2e9e1 !important;
  --table-selection-border-color: #907aa9 !important;
  --tag-background: #f2e9e1 !important;
  --tag-background-hover: #9893a5 !important;
  --tag-border-color: hsla(3, 53%, 67%, 0.15) !important;
  --tag-border-color-hover: hsla(3, 53%, 67%, 0.15) !important;
  --tag-color: #286983 !important;
  --tag-color-hover: #286983 !important;
  --tertiary: red !important;
  --text: #575279 !important;
  --text-accent: hsl(3, 53%, 67%) !important;
  --text-accent-hover: red !important;
  --text-color: #575279 !important;
  --text-color-accent: #575279 !important;
  --text-color-muted-dark: #f2e9e1 !important;
  --text-color-muted-light: #9893a5 !important;
  --text-error: #b4637a !important;
  --text-faint: #9893a5 !important;
  --text-highlight-bg: hsl(3, 53%, 67%) !important;
  --text-muted: #575279 !important;
  --text-normal: #575279 !important;
  --text-on-accent: #575279 !important;
  --text-on-accent-inverted: #faf4ed !important;
  --text-selection: #f2e9e1 !important;
  --text-success: #56949f !important;
  --text-warning: #ea9d34 !important;
  --textHighlight: hsl(3, 53%, 67%) !important;
  --titlebar-background: #fffaf3 !important;
  --titlebar-background-focused: #dfdad9 !important;
  --titlebar-border-color: #dfdad9 !important;
  --titlebar-text-color: #575279 !important;
  --titlebar-text-color-focused: #575279 !important;
  --toggle-thumb-color: #575279 !important;
  --vault-profile-color: #575279 !important;
  --vault-profile-color-hover: #575279 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 244, 237);
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(242, 233, 225);
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 250, 243);
  border-left-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(215, 131, 126);
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body del {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(40, 105, 131);
  border-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body p {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(40, 105, 131);
  outline: rgb(40, 105, 131) none 0px;
  text-decoration-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(40, 105, 131);
  outline: rgb(40, 105, 131) none 0px;
  text-decoration-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: underline rgba(215, 131, 126, 0.3);
  text-decoration-color: rgba(215, 131, 126, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body dt {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(152, 147, 165);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body table {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(234, 157, 52);
  border-left-color: rgb(234, 157, 52);
  border-right-color: rgb(234, 157, 52);
  border-top-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figcaption {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(144, 122, 169);
  border-left-color: rgb(144, 122, 169);
  border-right-color: rgb(144, 122, 169);
  border-top-color: rgb(144, 122, 169);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 131, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
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
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgba(215, 131, 126, 0.15);
  border-left-color: rgba(215, 131, 126, 0.15);
  border-right-color: rgba(215, 131, 126, 0.15);
  border-top-color: rgba(215, 131, 126, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body h1 {
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body h2 {
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body h3 {
  color: rgb(86, 148, 159);
}

html[saved-theme="light"] body h4 {
  color: rgb(234, 157, 52);
}

html[saved-theme="light"] body h5 {
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body h6 {
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(206, 202, 205);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(87, 82, 121);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(87, 82, 121);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 82, 121);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(152, 147, 165);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body abbr {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sub {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body summary {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sup {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgba(215, 131, 126, 0.15);
  border-left-color: rgba(215, 131, 126, 0.15);
  border-right-color: rgba(215, 131, 126, 0.15);
  border-top-color: rgba(215, 131, 126, 0.15);
  color: rgb(40, 105, 131);
}`,
  },
};
