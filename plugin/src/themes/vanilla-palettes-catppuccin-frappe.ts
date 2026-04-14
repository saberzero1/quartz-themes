import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.catppuccin-frappe",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(277, 59%, 76%) !important;
  --accent-color-dark: #ca9ee6 !important;
  --accent-color-hover: #ea999c !important;
  --accent-color-light: #8caaee !important;
  --accent-h: 277 !important;
  --accent-l: 76% !important;
  --accent-s: 59% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #51576d !important;
  --background-modifier-border-focus: #414559 !important;
  --background-modifier-border-hover: #414559 !important;
  --background-modifier-error: #e78284 !important;
  --background-modifier-error-hover: #e78284 !important;
  --background-modifier-form-field: #232634 !important;
  --background-modifier-form-field-hover: #232634 !important;
  --background-modifier-hover: #51576d !important;
  --background-modifier-success: #a6d189 !important;
  --background-primary: #303446 !important;
  --background-secondary: #232634 !important;
  --base: #303446 !important;
  --bases-cards-background: #303446 !important;
  --bases-cards-shadow: 0 0 0 1px #51576d !important;
  --bases-cards-shadow-hover: 0 0 0 1px #414559 !important;
  --bases-embed-border-color: #51576d !important;
  --bases-group-heading-property-color: #c6d0f5 !important;
  --bases-table-border-color: #51576d !important;
  --bases-table-cell-background-active: #303446 !important;
  --bases-table-cell-background-selected: #51576d !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #414559 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(277, 59%, 76%) !important;
  --bases-table-header-background: #303446 !important;
  --bases-table-header-background-hover: #51576d !important;
  --bases-table-header-color: #c6d0f5 !important;
  --bases-table-summary-background: #303446 !important;
  --bases-table-summary-background-hover: #51576d !important;
  --blockquote-border-color: #ca9ee6 !important;
  --blue: #8caaee !important;
  --blur-background: color-mix(in srgb, #232634 65%, transparent) linear-gradient(#232634, color-mix(in srgb, #232634 65%, transparent)) !important;
  --bold-color: #8caaee !important;
  --border-color: #51576d !important;
  --border-color-primary: #51576d !important;
  --border-color-secondary: #414559 !important;
  --canvas-background: #303446 !important;
  --canvas-card-label-color: #737994 !important;
  --canvas-color: 202, 158, 230 !important;
  --caret-color: #c6d0f5 !important;
  --checkbox-border-color: #737994 !important;
  --checkbox-border-color-hover: #ea999c !important;
  --checkbox-color: #ca9ee6 !important;
  --checkbox-color-hover: #ea999c !important;
  --checkbox-marker-color: #303446 !important;
  --checklist-done-color: #737994 !important;
  --code-background: #232634 !important;
  --code-boolean: #ef9f76 !important;
  --code-border-color: #51576d !important;
  --code-bracket-background: #51576d !important;
  --code-builtin: #ef9f76 !important;
  --code-comment: #737994 !important;
  --code-definition: #babbf1 !important;
  --code-function: #e5c890 !important;
  --code-important: #e5c890 !important;
  --code-keyword: #ca9ee6 !important;
  --code-normal: #c6d0f5 !important;
  --code-operator: #99d1db !important;
  --code-parentheses: #949cbb !important;
  --code-property: #babbf1 !important;
  --code-punctuation: #c6d0f5 !important;
  --code-string: #a6d189 !important;
  --code-tag: #e78284 !important;
  --code-value: #ef9f76 !important;
  --code-variable: #c6d0f5 !important;
  --collapse-icon-color: #737994 !important;
  --collapse-icon-color-collapsed: hsl(277, 59%, 76%) !important;
  --color-accent: hsl(277, 59%, 76%) !important;
  --color-accent-1: hsl(274, 60.18%, 87.4%) !important;
  --color-accent-2: hsl(272, 61.95%, 98.04%) !important;
  --color-accent-hsl: 277, 59%, 76% !important;
  --color-blue: #8caaee !important;
  --color-cyan: #81c8be !important;
  --color-green: #a6d189 !important;
  --color-orange: #ef9f76 !important;
  --color-pink: #f4b8e4 !important;
  --color-purple: #ca9ee6 !important;
  --color-red: #e78284 !important;
  --color-yellow: #e5c890 !important;
  --crust: #232634 !important;
  --dark: #c6d0f5 !important;
  --darkgray: #c6d0f5 !important;
  --divider-color: #51576d !important;
  --divider-color-hover: hsl(277, 59%, 76%) !important;
  --dropdown-background: #232634 !important;
  --dropdown-background-hover: #51576d !important;
  --embed-block-shadow-hover: 0 0 0 1px #51576d, inset 0 0 0 1px #51576d !important;
  --embed-border-start: 2px solid hsl(277, 59%, 76%) !important;
  --file-header-background: #303446 !important;
  --file-header-background-focused: #303446 !important;
  --flair-background: #232634 !important;
  --flair-color: #c6d0f5 !important;
  --flamingo: #eebebe !important;
  --footnote-divider-color: #51576d !important;
  --footnote-id-color: #c6d0f5 !important;
  --footnote-id-color-no-occurrences: #737994 !important;
  --footnote-input-background-active: #51576d !important;
  --graph-line: #414559 !important;
  --graph-node: hsl(277, 59%, 76%) !important;
  --graph-node-attachment: #ca9ee6 !important;
  --graph-node-focused: #ea999c !important;
  --graph-node-tag: #8caaee !important;
  --graph-node-unresolved: #51576d !important;
  --graph-text: #c6d0f5 !important;
  --gray: #c6d0f5 !important;
  --green: #a6d189 !important;
  --h1-color: #ca9ee6 !important;
  --h2-color: #8caaee !important;
  --h3-color: #a6d189 !important;
  --h4-color: #e5c890 !important;
  --h5-color: #ef9f76 !important;
  --h6-color: #e78284 !important;
  --heading-formatting: #737994 !important;
  --highlight: hsl(277, 59%, 76%) !important;
  --hr-color: #414559 !important;
  --icon-color: #c6d0f5 !important;
  --icon-color-active: hsl(277, 59%, 76%) !important;
  --icon-color-focused: #c6d0f5 !important;
  --icon-color-hover: #c6d0f5 !important;
  --indentation-guide-color: #414559 !important;
  --indentation-guide-color-active: #737994 !important;
  --inline-title-color: #c6d0f5 !important;
  --input-date-separator: #737994 !important;
  --input-placeholder-color: #737994 !important;
  --interactive-accent: hsl(277, 59%, 76%) !important;
  --interactive-accent-hover: hsl(274, 60.18%, 87.4%) !important;
  --interactive-accent-hsl: 277, 59%, 76% !important;
  --interactive-hover: #51576d !important;
  --interactive-normal: #232634 !important;
  --italic-color: #8caaee !important;
  --lavender: #babbf1 !important;
  --light: #303446 !important;
  --lightgray: #232634 !important;
  --link-color: #ca9ee6 !important;
  --link-color-hover: #ea999c !important;
  --link-external-color: #ca9ee6 !important;
  --link-external-color-hover: #ea999c !important;
  --link-unresolved-color: #e78284 !important;
  --link-unresolved-color-hover: #e78284 !important;
  --link-unresolved-decoration-color: hsla(277, 59%, 76%, 0.3) !important;
  --list-marker-color: #ca9ee6 !important;
  --list-marker-color-collapsed: hsl(277, 59%, 76%) !important;
  --list-marker-color-hover: #c6d0f5 !important;
  --mantle: #292c3c !important;
  --maroon: #ea999c !important;
  --mauve: #ca9ee6 !important;
  --menu-background: #232634 !important;
  --menu-border-color: #414559 !important;
  --metadata-border-color: #51576d !important;
  --metadata-divider-color: #51576d !important;
  --metadata-input-background-active: #51576d !important;
  --metadata-input-text-color: #c6d0f5 !important;
  --metadata-label-background-active: #51576d !important;
  --metadata-label-text-color: #c6d0f5 !important;
  --metadata-label-text-color-hover: #c6d0f5 !important;
  --metadata-property-background-active: #51576d !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #414559 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #414559 !important;
  --modal-background: #232634 !important;
  --modal-border-color: #51576d !important;
  --nav-collapse-icon-color: #414559 !important;
  --nav-collapse-icon-color-collapsed: #414559 !important;
  --nav-heading-color: #c6d0f5 !important;
  --nav-heading-color-collapsed: #737994 !important;
  --nav-heading-color-collapsed-hover: #c6d0f5 !important;
  --nav-heading-color-hover: #c6d0f5 !important;
  --nav-indentation-guide-color: #414559 !important;
  --nav-item-background-active: #ca9ee6 !important;
  --nav-item-background-hover: #51576d !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #c6d0f5 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #8caaee !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #737994 !important;
  --nav-tag-color-active: #c6d0f5 !important;
  --nav-tag-color-hover: #c6d0f5 !important;
  --overlay0: #737994 !important;
  --overlay1: #838ba7 !important;
  --overlay2: #949cbb !important;
  --pdf-background: #303446 !important;
  --pdf-page-background: #303446 !important;
  --pdf-shadow: 0 0 0 1px #51576d !important;
  --pdf-sidebar-background: #303446 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #51576d !important;
  --peach: #ef9f76 !important;
  --pill-border-color: #51576d !important;
  --pill-border-color-hover: #414559 !important;
  --pill-color: #c6d0f5 !important;
  --pill-color-hover: #c6d0f5 !important;
  --pill-color-remove: #737994 !important;
  --pill-color-remove-hover: hsl(277, 59%, 76%) !important;
  --pink: #f4b8e4 !important;
  --prompt-background: #303446 !important;
  --prompt-border-color: #51576d !important;
  --raised-background: color-mix(in srgb, #232634 65%, transparent) linear-gradient(#232634, color-mix(in srgb, #232634 65%, transparent)) !important;
  --red: #e78284 !important;
  --ribbon-background: #232634 !important;
  --ribbon-background-collapsed: #303446 !important;
  --rosewater: #f2d5cf !important;
  --sapphire: #85c1dc !important;
  --search-clear-button-color: #c6d0f5 !important;
  --search-icon-color: #c6d0f5 !important;
  --search-result-background: #303446 !important;
  --secondary: hsl(277, 59%, 76%) !important;
  --selection-background-color: #51576d !important;
  --selection-border-color: #ea999c !important;
  --setting-group-heading-color: #c6d0f5 !important;
  --setting-items-border-color: #51576d !important;
  --sky: #99d1db !important;
  --slider-track-background: #232634 !important;
  --status-bar-background: #232634 !important;
  --status-bar-border-color: #51576d !important;
  --status-bar-text-color: #c6d0f5 !important;
  --subtext0: #a5adce !important;
  --subtext1: #b5bfe2 !important;
  --suggestion-background: #303446 !important;
  --surface0: #414559 !important;
  --surface1: #51576d !important;
  --surface2: #626880 !important;
  --sync-avatar-color-1: #e78284 !important;
  --sync-avatar-color-2: #ef9f76 !important;
  --sync-avatar-color-3: #e5c890 !important;
  --sync-avatar-color-4: #a6d189 !important;
  --sync-avatar-color-5: #81c8be !important;
  --sync-avatar-color-6: #8caaee !important;
  --sync-avatar-color-7: #ca9ee6 !important;
  --sync-avatar-color-8: #f4b8e4 !important;
  --tab-background-active: #303446 !important;
  --tab-container-background: #232634 !important;
  --tab-divider-color: #51576d !important;
  --tab-outline-color: #51576d !important;
  --tab-switcher-background: #232634 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #232634, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(277, 59%, 76%) !important;
  --tab-text-color: #51576d !important;
  --tab-text-color-active: #c6d0f5 !important;
  --tab-text-color-focused: #c6d0f5 !important;
  --tab-text-color-focused-active: #c6d0f5 !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #51576d !important;
  --table-border-color: #51576d !important;
  --table-drag-handle-background-active: #ea999c !important;
  --table-drag-handle-color: #51576d !important;
  --table-drag-handle-color-active: #51576d !important;
  --table-header-border-color: #51576d !important;
  --table-header-color: #c6d0f5 !important;
  --table-selection: #51576d !important;
  --table-selection-border-color: #ea999c !important;
  --tag-background: #414559 !important;
  --tag-background-hover: #737994 !important;
  --tag-border-color: hsla(277, 59%, 76%, 0.15) !important;
  --tag-border-color-hover: hsla(277, 59%, 76%, 0.15) !important;
  --tag-color: #ca9ee6 !important;
  --tag-color-hover: #ca9ee6 !important;
  --teal: #81c8be !important;
  --tertiary: red !important;
  --text: #c6d0f5 !important;
  --text-accent: hsl(277, 59%, 76%) !important;
  --text-accent-hover: red !important;
  --text-color: #c6d0f5 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #414559 !important;
  --text-color-muted-light: #737994 !important;
  --text-error: #e78284 !important;
  --text-faint: #737994 !important;
  --text-highlight-bg: hsl(277, 59%, 76%) !important;
  --text-muted: #c6d0f5 !important;
  --text-normal: #c6d0f5 !important;
  --text-on-accent-inverted: #303446 !important;
  --text-selection: #51576d !important;
  --text-success: #a6d189 !important;
  --text-warning: #e5c890 !important;
  --textHighlight: hsl(277, 59%, 76%) !important;
  --titlebar-background: #232634 !important;
  --titlebar-background-focused: #51576d !important;
  --titlebar-border-color: #51576d !important;
  --titlebar-text-color: #c6d0f5 !important;
  --titlebar-text-color-focused: #c6d0f5 !important;
  --vault-profile-color: #c6d0f5 !important;
  --vault-profile-color-hover: #c6d0f5 !important;
  --yellow: #e5c890 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 38, 52);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(48, 52, 70);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(35, 38, 52);
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(81, 87, 109);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(65, 69, 89);
  color: rgb(202, 158, 230);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 38, 52);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(81, 87, 109);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 38, 52);
  border-left-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(48, 52, 70);
  color: rgb(198, 208, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(140, 170, 238);
  outline: rgb(140, 170, 238) none 0px;
  text-decoration-color: rgb(140, 170, 238);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(140, 170, 238);
  outline: rgb(140, 170, 238) none 0px;
  text-decoration-color: rgb(140, 170, 238);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(140, 170, 238);
  outline: rgb(140, 170, 238) none 0px;
  text-decoration-color: rgb(140, 170, 238);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(140, 170, 238);
  outline: rgb(140, 170, 238) none 0px;
  text-decoration-color: rgb(140, 170, 238);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(202, 158, 230);
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(115, 121, 148);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(202, 158, 230);
  border-color: rgb(202, 158, 230);
}

html[saved-theme="dark"] body p {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(202, 158, 230);
  outline: rgb(202, 158, 230) none 0px;
  text-decoration-color: rgb(202, 158, 230);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(202, 158, 230);
  outline: rgb(202, 158, 230) none 0px;
  text-decoration-color: rgb(202, 158, 230);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(231, 130, 132);
  outline: rgb(231, 130, 132) none 0px;
  text-decoration: underline rgba(202, 158, 230, 0.3);
  text-decoration-color: rgba(202, 158, 230, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(115, 121, 148);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 38, 52);
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 38, 52);
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(229, 200, 144);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 200, 144);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 200, 144);
  border-left-color: rgb(229, 200, 144);
  border-right-color: rgb(229, 200, 144);
  border-top-color: rgb(229, 200, 144);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 38, 52);
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 38, 52);
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(202, 158, 230);
  border-left-color: rgb(202, 158, 230);
  border-right-color: rgb(202, 158, 230);
  border-top-color: rgb(202, 158, 230);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(202, 158, 230);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(115, 121, 148);
  border-left-color: rgb(115, 121, 148);
  border-right-color: rgb(115, 121, 148);
  border-top-color: rgb(115, 121, 148);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
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
  background-color: rgb(35, 38, 52);
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(48, 52, 70);
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(35, 38, 52);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(81, 87, 109);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(65, 69, 89);
  border-bottom-color: rgba(202, 158, 230, 0.15);
  border-left-color: rgba(202, 158, 230, 0.15);
  border-right-color: rgba(202, 158, 230, 0.15);
  border-top-color: rgba(202, 158, 230, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(202, 158, 230);
}

html[saved-theme="dark"] body h1 {
  color: rgb(202, 158, 230);
}

html[saved-theme="dark"] body h2 {
  color: rgb(140, 170, 238);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body h3 {
  color: rgb(166, 209, 137);
}

html[saved-theme="dark"] body h4 {
  color: rgb(229, 200, 144);
}

html[saved-theme="dark"] body h5 {
  color: rgb(239, 159, 118);
}

html[saved-theme="dark"] body h6 {
  color: rgb(231, 130, 132);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(65, 69, 89);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 208, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(35, 38, 52);
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(198, 208, 245);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 208, 245);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(198, 208, 245);
  stroke: rgb(198, 208, 245);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(115, 121, 148);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(81, 87, 109);
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(35, 38, 52);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 38, 52);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(65, 69, 89);
  border-bottom-color: rgba(202, 158, 230, 0.15);
  border-left-color: rgba(202, 158, 230, 0.15);
  border-right-color: rgba(202, 158, 230, 0.15);
  border-top-color: rgba(202, 158, 230, 0.15);
  color: rgb(202, 158, 230);
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(266, 85%, 58%) !important;
  --accent-color-dark: #8839ef !important;
  --accent-color-hover: #e64553 !important;
  --accent-color-light: #1e66f5 !important;
  --accent-h: 266 !important;
  --accent-l: 58% !important;
  --accent-s: 85% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #ccd0da !important;
  --background-modifier-border-focus: #bcc0cc !important;
  --background-modifier-border-hover: #bcc0cc !important;
  --background-modifier-error: #d20f39 !important;
  --background-modifier-error-hover: #d20f39 !important;
  --background-modifier-form-field: #dce0e8 !important;
  --background-modifier-form-field-hover: #dce0e8 !important;
  --background-modifier-hover: #dce0e8 !important;
  --background-modifier-success: #40a02b !important;
  --background-primary: #eff1f5 !important;
  --background-secondary: #dce0e8 !important;
  --base: #eff1f5 !important;
  --bases-cards-background: #eff1f5 !important;
  --bases-cards-shadow: 0 0 0 1px #ccd0da !important;
  --bases-cards-shadow-hover: 0 0 0 1px #bcc0cc !important;
  --bases-embed-border-color: #ccd0da !important;
  --bases-group-heading-property-color: #4c4f69 !important;
  --bases-table-border-color: #ccd0da !important;
  --bases-table-cell-background-active: #eff1f5 !important;
  --bases-table-cell-background-selected: #dce0e8 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #bcc0cc !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(266, 85%, 58%) !important;
  --bases-table-header-background: #eff1f5 !important;
  --bases-table-header-background-hover: #dce0e8 !important;
  --bases-table-header-color: #4c4f69 !important;
  --bases-table-summary-background: #eff1f5 !important;
  --bases-table-summary-background-hover: #dce0e8 !important;
  --blockquote-border-color: #8839ef !important;
  --blue: #1e66f5 !important;
  --blur-background: color-mix(in srgb, #eff1f5 65%, transparent) linear-gradient(#eff1f5, color-mix(in srgb, #eff1f5 65%, transparent)) !important;
  --bold-color: #1e66f5 !important;
  --border-color: #ccd0da !important;
  --border-color-primary: #ccd0da !important;
  --border-color-secondary: #bcc0cc !important;
  --canvas-background: #eff1f5 !important;
  --canvas-card-label-color: #9ca0b0 !important;
  --canvas-color: 136, 57, 239 !important;
  --caret-color: #4c4f69 !important;
  --checkbox-border-color: #9ca0b0 !important;
  --checkbox-border-color-hover: #e64553 !important;
  --checkbox-color: #8839ef !important;
  --checkbox-color-hover: #e64553 !important;
  --checkbox-marker-color: #eff1f5 !important;
  --checklist-done-color: #9ca0b0 !important;
  --code-background: #dce0e8 !important;
  --code-boolean: #fe640b !important;
  --code-border-color: #ccd0da !important;
  --code-bracket-background: #dce0e8 !important;
  --code-builtin: #fe640b !important;
  --code-comment: #9ca0b0 !important;
  --code-definition: #7287fd !important;
  --code-function: #df8e1d !important;
  --code-important: #df8e1d !important;
  --code-keyword: #8839ef !important;
  --code-normal: #4c4f69 !important;
  --code-operator: #04a5e5 !important;
  --code-parentheses: #7c7f93 !important;
  --code-property: #7287fd !important;
  --code-punctuation: #4c4f69 !important;
  --code-string: #40a02b !important;
  --code-tag: #d20f39 !important;
  --code-value: #fe640b !important;
  --code-variable: #4c4f69 !important;
  --collapse-icon-color: #9ca0b0 !important;
  --collapse-icon-color-collapsed: hsl(266, 85%, 58%) !important;
  --color-accent: hsl(266, 85%, 58%) !important;
  --color-accent-1: hsl(265, 85.85%, 62.35%) !important;
  --color-accent-2: hsl(263, 86.7%, 66.7%) !important;
  --color-accent-hsl: 266, 85%, 58% !important;
  --color-blue: #1e66f5 !important;
  --color-cyan: #179299 !important;
  --color-green: #40a02b !important;
  --color-orange: #fe640b !important;
  --color-pink: #ea76cb !important;
  --color-purple: #8839ef !important;
  --color-red: #d20f39 !important;
  --color-yellow: #df8e1d !important;
  --crust: #dce0e8 !important;
  --dark: #4c4f69 !important;
  --darkgray: #4c4f69 !important;
  --divider-color: #ccd0da !important;
  --divider-color-hover: hsl(266, 85%, 58%) !important;
  --dropdown-background: #dce0e8 !important;
  --dropdown-background-hover: #ccd0da !important;
  --embed-block-shadow-hover: 0 0 0 1px #ccd0da, inset 0 0 0 1px #ccd0da !important;
  --embed-border-start: 2px solid hsl(266, 85%, 58%) !important;
  --file-header-background: #eff1f5 !important;
  --file-header-background-focused: #eff1f5 !important;
  --flair-background: #dce0e8 !important;
  --flair-color: #4c4f69 !important;
  --flamingo: #dd7878 !important;
  --footnote-divider-color: #ccd0da !important;
  --footnote-id-color: #4c4f69 !important;
  --footnote-id-color-no-occurrences: #9ca0b0 !important;
  --footnote-input-background-active: #dce0e8 !important;
  --graph-line: #bcc0cc !important;
  --graph-node: hsl(266, 85%, 58%) !important;
  --graph-node-attachment: #8839ef !important;
  --graph-node-focused: #e64553 !important;
  --graph-node-tag: #1e66f5 !important;
  --graph-node-unresolved: #ccd0da !important;
  --graph-text: #4c4f69 !important;
  --gray: #4c4f69 !important;
  --green: #40a02b !important;
  --h1-color: #8839ef !important;
  --h2-color: #1e66f5 !important;
  --h3-color: #40a02b !important;
  --h4-color: #df8e1d !important;
  --h5-color: #fe640b !important;
  --h6-color: #d20f39 !important;
  --heading-formatting: #9ca0b0 !important;
  --highlight: hsl(266, 85%, 58%) !important;
  --hr-color: #ccd0da !important;
  --icon-color: #4c4f69 !important;
  --icon-color-active: hsl(266, 85%, 58%) !important;
  --icon-color-focused: #4c4f69 !important;
  --icon-color-hover: #4c4f69 !important;
  --indentation-guide-color: #ccd0da !important;
  --indentation-guide-color-active: #9ca0b0 !important;
  --inline-title-color: #4c4f69 !important;
  --input-date-separator: #9ca0b0 !important;
  --input-placeholder-color: #9ca0b0 !important;
  --interactive-accent: hsl(266, 85%, 58%) !important;
  --interactive-accent-hover: hsl(263, 86.7%, 66.7%) !important;
  --interactive-accent-hsl: 266, 85%, 58% !important;
  --interactive-hover: #ccd0da !important;
  --interactive-normal: #dce0e8 !important;
  --italic-color: #1e66f5 !important;
  --lavender: #7287fd !important;
  --light: #eff1f5 !important;
  --lightgray: #dce0e8 !important;
  --link-color: #8839ef !important;
  --link-color-hover: #e64553 !important;
  --link-external-color: #8839ef !important;
  --link-external-color-hover: #e64553 !important;
  --link-unresolved-color: #d20f39 !important;
  --link-unresolved-color-hover: #d20f39 !important;
  --link-unresolved-decoration-color: hsla(266, 85%, 58%, 0.3) !important;
  --list-marker-color: #8839ef !important;
  --list-marker-color-collapsed: hsl(266, 85%, 58%) !important;
  --list-marker-color-hover: #4c4f69 !important;
  --mantle: #e6e9ef !important;
  --maroon: #e64553 !important;
  --mauve: #8839ef !important;
  --menu-background: #dce0e8 !important;
  --menu-border-color: #bcc0cc !important;
  --metadata-border-color: #ccd0da !important;
  --metadata-divider-color: #ccd0da !important;
  --metadata-input-background-active: #dce0e8 !important;
  --metadata-input-text-color: #4c4f69 !important;
  --metadata-label-background-active: #dce0e8 !important;
  --metadata-label-text-color: #4c4f69 !important;
  --metadata-label-text-color-hover: #4c4f69 !important;
  --metadata-property-background-active: #dce0e8 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #bcc0cc !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #bcc0cc !important;
  --modal-background: #dce0e8 !important;
  --modal-border-color: #ccd0da !important;
  --nav-collapse-icon-color: #bcc0cc !important;
  --nav-collapse-icon-color-collapsed: #bcc0cc !important;
  --nav-heading-color: #4c4f69 !important;
  --nav-heading-color-collapsed: #9ca0b0 !important;
  --nav-heading-color-collapsed-hover: #4c4f69 !important;
  --nav-heading-color-hover: #4c4f69 !important;
  --nav-indentation-guide-color: #bcc0cc !important;
  --nav-item-background-active: #8839ef !important;
  --nav-item-background-hover: #dce0e8 !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #4c4f69 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #1e66f5 !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #9ca0b0 !important;
  --nav-tag-color-active: #4c4f69 !important;
  --nav-tag-color-hover: #4c4f69 !important;
  --overlay0: #9ca0b0 !important;
  --overlay1: #8c8fa1 !important;
  --overlay2: #7c7f93 !important;
  --pdf-background: #eff1f5 !important;
  --pdf-page-background: #eff1f5 !important;
  --pdf-sidebar-background: #eff1f5 !important;
  --peach: #fe640b !important;
  --pill-border-color: #ccd0da !important;
  --pill-border-color-hover: #bcc0cc !important;
  --pill-color: #4c4f69 !important;
  --pill-color-hover: #4c4f69 !important;
  --pill-color-remove: #9ca0b0 !important;
  --pill-color-remove-hover: hsl(266, 85%, 58%) !important;
  --pink: #ea76cb !important;
  --prompt-background: #eff1f5 !important;
  --prompt-border-color: #ccd0da !important;
  --raised-background: color-mix(in srgb, #eff1f5 65%, transparent) linear-gradient(#eff1f5, color-mix(in srgb, #eff1f5 65%, transparent)) !important;
  --red: #d20f39 !important;
  --ribbon-background: #dce0e8 !important;
  --ribbon-background-collapsed: #eff1f5 !important;
  --rosewater: #dc8a78 !important;
  --sapphire: #209fb5 !important;
  --search-clear-button-color: #4c4f69 !important;
  --search-icon-color: #4c4f69 !important;
  --search-result-background: #eff1f5 !important;
  --secondary: hsl(266, 85%, 58%) !important;
  --selection-background-color: #dce0e8 !important;
  --selection-border-color: #e64553 !important;
  --setting-group-heading-color: #4c4f69 !important;
  --setting-items-border-color: #ccd0da !important;
  --sky: #04a5e5 !important;
  --slider-track-background: #dce0e8 !important;
  --status-bar-background: #dce0e8 !important;
  --status-bar-border-color: #ccd0da !important;
  --status-bar-text-color: #4c4f69 !important;
  --subtext0: #6c6f85 !important;
  --subtext1: #5c5f77 !important;
  --suggestion-background: #eff1f5 !important;
  --surface0: #ccd0da !important;
  --surface1: #bcc0cc !important;
  --surface2: #acb0be !important;
  --sync-avatar-color-1: #d20f39 !important;
  --sync-avatar-color-2: #fe640b !important;
  --sync-avatar-color-3: #df8e1d !important;
  --sync-avatar-color-4: #40a02b !important;
  --sync-avatar-color-5: #179299 !important;
  --sync-avatar-color-6: #1e66f5 !important;
  --sync-avatar-color-7: #8839ef !important;
  --sync-avatar-color-8: #ea76cb !important;
  --tab-background-active: #eff1f5 !important;
  --tab-container-background: #dce0e8 !important;
  --tab-divider-color: #dce0e8 !important;
  --tab-outline-color: #ccd0da !important;
  --tab-switcher-background: #dce0e8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #dce0e8, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(266, 85%, 58%) !important;
  --tab-text-color: #ccd0da !important;
  --tab-text-color-active: #4c4f69 !important;
  --tab-text-color-focused: #4c4f69 !important;
  --tab-text-color-focused-active: #4c4f69 !important;
  --tab-text-color-focused-active-current: #4c4f69 !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #ccd0da !important;
  --table-border-color: #ccd0da !important;
  --table-drag-handle-background-active: #e64553 !important;
  --table-drag-handle-color: #dce0e8 !important;
  --table-drag-handle-color-active: #dce0e8 !important;
  --table-header-border-color: #ccd0da !important;
  --table-header-color: #4c4f69 !important;
  --table-selection: #dce0e8 !important;
  --table-selection-border-color: #e64553 !important;
  --tag-background: #ccd0da !important;
  --tag-background-hover: #9ca0b0 !important;
  --tag-border-color: hsla(266, 85%, 58%, 0.15) !important;
  --tag-border-color-hover: hsla(266, 85%, 58%, 0.15) !important;
  --tag-color: #8839ef !important;
  --tag-color-hover: #8839ef !important;
  --teal: #179299 !important;
  --tertiary: red !important;
  --text: #4c4f69 !important;
  --text-accent: hsl(266, 85%, 58%) !important;
  --text-accent-hover: red !important;
  --text-color: #4c4f69 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #ccd0da !important;
  --text-color-muted-light: #9ca0b0 !important;
  --text-error: #d20f39 !important;
  --text-faint: #9ca0b0 !important;
  --text-highlight-bg: hsl(266, 85%, 58%) !important;
  --text-muted: #4c4f69 !important;
  --text-normal: #4c4f69 !important;
  --text-on-accent-inverted: #eff1f5 !important;
  --text-selection: #dce0e8 !important;
  --text-success: #40a02b !important;
  --text-warning: #df8e1d !important;
  --textHighlight: hsl(266, 85%, 58%) !important;
  --titlebar-background: #dce0e8 !important;
  --titlebar-background-focused: #ccd0da !important;
  --titlebar-border-color: #ccd0da !important;
  --titlebar-text-color: #4c4f69 !important;
  --titlebar-text-color-focused: #4c4f69 !important;
  --vault-profile-color: #4c4f69 !important;
  --vault-profile-color-hover: #4c4f69 !important;
  --yellow: #df8e1d !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(220, 224, 232);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(239, 241, 245);
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(204, 208, 218);
  color: rgb(136, 57, 239);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(220, 224, 232);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(220, 224, 232);
  border-left-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(30, 102, 245);
  outline: rgb(30, 102, 245) none 0px;
  text-decoration-color: rgb(30, 102, 245);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(30, 102, 245);
  outline: rgb(30, 102, 245) none 0px;
  text-decoration-color: rgb(30, 102, 245);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(30, 102, 245);
  outline: rgb(30, 102, 245) none 0px;
  text-decoration-color: rgb(30, 102, 245);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(30, 102, 245);
  outline: rgb(30, 102, 245) none 0px;
  text-decoration-color: rgb(30, 102, 245);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(136, 57, 239);
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body del {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(156, 160, 176);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(136, 57, 239);
  border-color: rgb(136, 57, 239);
}

html[saved-theme="light"] body p {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(136, 57, 239);
  outline: rgb(136, 57, 239) none 0px;
  text-decoration-color: rgb(136, 57, 239);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 57, 239);
  outline: rgb(136, 57, 239) none 0px;
  text-decoration-color: rgb(136, 57, 239);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(210, 15, 57);
  outline: rgb(210, 15, 57) none 0px;
  text-decoration: underline rgba(136, 57, 239, 0.3);
  text-decoration-color: rgba(136, 57, 239, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(156, 160, 176);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body table {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(223, 142, 29);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(223, 142, 29);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(223, 142, 29);
  border-left-color: rgb(223, 142, 29);
  border-right-color: rgb(223, 142, 29);
  border-top-color: rgb(223, 142, 29);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(136, 57, 239);
  border-left-color: rgb(136, 57, 239);
  border-right-color: rgb(136, 57, 239);
  border-top-color: rgb(136, 57, 239);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(136, 57, 239);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
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
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(220, 224, 232);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(220, 224, 232);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(220, 224, 232);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(204, 208, 218);
  border-bottom-color: rgba(136, 57, 239, 0.15);
  border-left-color: rgba(136, 57, 239, 0.15);
  border-right-color: rgba(136, 57, 239, 0.15);
  border-top-color: rgba(136, 57, 239, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(136, 57, 239);
}

html[saved-theme="light"] body h1 {
  color: rgb(136, 57, 239);
}

html[saved-theme="light"] body h2 {
  color: rgb(30, 102, 245);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body h3 {
  color: rgb(64, 160, 43);
}

html[saved-theme="light"] body h4 {
  color: rgb(223, 142, 29);
}

html[saved-theme="light"] body h5 {
  color: rgb(254, 100, 11);
}

html[saved-theme="light"] body h6 {
  color: rgb(210, 15, 57);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(188, 192, 204);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 79, 105);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(76, 79, 105);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(76, 79, 105);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(76, 79, 105);
  stroke: rgb(76, 79, 105);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(156, 160, 176);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(220, 224, 232);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(204, 208, 218);
  border-bottom-color: rgba(136, 57, 239, 0.15);
  border-left-color: rgba(136, 57, 239, 0.15);
  border-right-color: rgba(136, 57, 239, 0.15);
  border-top-color: rgba(136, 57, 239, 0.15);
  color: rgb(136, 57, 239);
}`,
  },
};
