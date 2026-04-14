import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.catppuccin-macchiato",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(267, 83%, 80%) !important;
  --accent-color-dark: #c6a0f6 !important;
  --accent-color-hover: #ee99a0 !important;
  --accent-color-light: #8aadf4 !important;
  --accent-h: 267 !important;
  --accent-l: 80% !important;
  --accent-s: 83% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #494d64 !important;
  --background-modifier-border-focus: #363a4f !important;
  --background-modifier-border-hover: #363a4f !important;
  --background-modifier-error: #ed8796 !important;
  --background-modifier-error-hover: #ed8796 !important;
  --background-modifier-form-field: #181926 !important;
  --background-modifier-form-field-hover: #181926 !important;
  --background-modifier-hover: #494d64 !important;
  --background-modifier-success: #a6da95 !important;
  --background-primary: #24273a !important;
  --background-secondary: #181926 !important;
  --base: #24273a !important;
  --bases-cards-background: #24273a !important;
  --bases-cards-shadow: 0 0 0 1px #494d64 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #363a4f !important;
  --bases-embed-border-color: #494d64 !important;
  --bases-group-heading-property-color: #cad3f5 !important;
  --bases-table-border-color: #494d64 !important;
  --bases-table-cell-background-active: #24273a !important;
  --bases-table-cell-background-selected: #494d64 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #363a4f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(267, 83%, 80%) !important;
  --bases-table-header-background: #24273a !important;
  --bases-table-header-background-hover: #494d64 !important;
  --bases-table-header-color: #cad3f5 !important;
  --bases-table-summary-background: #24273a !important;
  --bases-table-summary-background-hover: #494d64 !important;
  --blockquote-border-color: #c6a0f6 !important;
  --blue: #8aadf4 !important;
  --blur-background: color-mix(in srgb, #181926 65%, transparent) linear-gradient(#181926, color-mix(in srgb, #181926 65%, transparent)) !important;
  --bold-color: #8aadf4 !important;
  --border-color: #494d64 !important;
  --border-color-primary: #494d64 !important;
  --border-color-secondary: #363a4f !important;
  --canvas-background: #24273a !important;
  --canvas-card-label-color: #6e738d !important;
  --canvas-color: 198, 160, 246 !important;
  --caret-color: #cad3f5 !important;
  --checkbox-border-color: #6e738d !important;
  --checkbox-border-color-hover: #ee99a0 !important;
  --checkbox-color: #c6a0f6 !important;
  --checkbox-color-hover: #ee99a0 !important;
  --checkbox-marker-color: #24273a !important;
  --checklist-done-color: #6e738d !important;
  --code-background: #181926 !important;
  --code-boolean: #f5a97f !important;
  --code-border-color: #494d64 !important;
  --code-bracket-background: #494d64 !important;
  --code-builtin: #f5a97f !important;
  --code-comment: #6e738d !important;
  --code-definition: #b7bdf8 !important;
  --code-function: #eed49f !important;
  --code-important: #eed49f !important;
  --code-keyword: #c6a0f6 !important;
  --code-normal: #cad3f5 !important;
  --code-operator: #91d7e3 !important;
  --code-parentheses: #939ab7 !important;
  --code-property: #b7bdf8 !important;
  --code-punctuation: #cad3f5 !important;
  --code-string: #a6da95 !important;
  --code-tag: #ed8796 !important;
  --code-value: #f5a97f !important;
  --code-variable: #cad3f5 !important;
  --collapse-icon-color: #6e738d !important;
  --collapse-icon-color-collapsed: hsl(267, 83%, 80%) !important;
  --color-accent: hsl(267, 83%, 80%) !important;
  --color-accent-1: hsl(264, 84.66%, 92%) !important;
  --color-accent-2: hsl(262, 87.15%, 103.2%) !important;
  --color-accent-hsl: 267, 83%, 80% !important;
  --color-blue: #8aadf4 !important;
  --color-cyan: #8bd5ca !important;
  --color-green: #a6da95 !important;
  --color-orange: #f5a97f !important;
  --color-pink: #f5bde6 !important;
  --color-purple: #c6a0f6 !important;
  --color-red: #ed8796 !important;
  --color-yellow: #eed49f !important;
  --crust: #181926 !important;
  --dark: #cad3f5 !important;
  --darkgray: #cad3f5 !important;
  --divider-color: #494d64 !important;
  --divider-color-hover: hsl(267, 83%, 80%) !important;
  --dropdown-background: #181926 !important;
  --dropdown-background-hover: #494d64 !important;
  --embed-block-shadow-hover: 0 0 0 1px #494d64, inset 0 0 0 1px #494d64 !important;
  --embed-border-start: 2px solid hsl(267, 83%, 80%) !important;
  --file-header-background: #24273a !important;
  --file-header-background-focused: #24273a !important;
  --flair-background: #181926 !important;
  --flair-color: #cad3f5 !important;
  --flamingo: #f0c6c6 !important;
  --footnote-divider-color: #494d64 !important;
  --footnote-id-color: #cad3f5 !important;
  --footnote-id-color-no-occurrences: #6e738d !important;
  --footnote-input-background-active: #494d64 !important;
  --graph-line: #363a4f !important;
  --graph-node: hsl(267, 83%, 80%) !important;
  --graph-node-attachment: #c6a0f6 !important;
  --graph-node-focused: #ee99a0 !important;
  --graph-node-tag: #8aadf4 !important;
  --graph-node-unresolved: #494d64 !important;
  --graph-text: #cad3f5 !important;
  --gray: #cad3f5 !important;
  --green: #a6da95 !important;
  --h1-color: #c6a0f6 !important;
  --h2-color: #8aadf4 !important;
  --h3-color: #a6da95 !important;
  --h4-color: #eed49f !important;
  --h5-color: #f5a97f !important;
  --h6-color: #ed8796 !important;
  --heading-formatting: #6e738d !important;
  --highlight: hsl(267, 83%, 80%) !important;
  --hr-color: #363a4f !important;
  --icon-color: #cad3f5 !important;
  --icon-color-active: hsl(267, 83%, 80%) !important;
  --icon-color-focused: #cad3f5 !important;
  --icon-color-hover: #cad3f5 !important;
  --indentation-guide-color: #363a4f !important;
  --indentation-guide-color-active: #6e738d !important;
  --inline-title-color: #cad3f5 !important;
  --input-date-separator: #6e738d !important;
  --input-placeholder-color: #6e738d !important;
  --interactive-accent: hsl(267, 83%, 80%) !important;
  --interactive-accent-hover: hsl(264, 84.66%, 92%) !important;
  --interactive-accent-hsl: 267, 83%, 80% !important;
  --interactive-hover: #494d64 !important;
  --interactive-normal: #181926 !important;
  --italic-color: #8aadf4 !important;
  --lavender: #b7bdf8 !important;
  --light: #24273a !important;
  --lightgray: #181926 !important;
  --link-color: #c6a0f6 !important;
  --link-color-hover: #ee99a0 !important;
  --link-external-color: #c6a0f6 !important;
  --link-external-color-hover: #ee99a0 !important;
  --link-unresolved-color: #ed8796 !important;
  --link-unresolved-color-hover: #ed8796 !important;
  --link-unresolved-decoration-color: hsla(267, 83%, 80%, 0.3) !important;
  --list-marker-color: #c6a0f6 !important;
  --list-marker-color-collapsed: hsl(267, 83%, 80%) !important;
  --list-marker-color-hover: #cad3f5 !important;
  --mantle: #1e2030 !important;
  --maroon: #ee99a0 !important;
  --mauve: #c6a0f6 !important;
  --menu-background: #181926 !important;
  --menu-border-color: #363a4f !important;
  --metadata-border-color: #494d64 !important;
  --metadata-divider-color: #494d64 !important;
  --metadata-input-background-active: #494d64 !important;
  --metadata-input-text-color: #cad3f5 !important;
  --metadata-label-background-active: #494d64 !important;
  --metadata-label-text-color: #cad3f5 !important;
  --metadata-label-text-color-hover: #cad3f5 !important;
  --metadata-property-background-active: #494d64 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #363a4f !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363a4f !important;
  --modal-background: #181926 !important;
  --modal-border-color: #494d64 !important;
  --nav-collapse-icon-color: #363a4f !important;
  --nav-collapse-icon-color-collapsed: #363a4f !important;
  --nav-heading-color: #cad3f5 !important;
  --nav-heading-color-collapsed: #6e738d !important;
  --nav-heading-color-collapsed-hover: #cad3f5 !important;
  --nav-heading-color-hover: #cad3f5 !important;
  --nav-indentation-guide-color: #363a4f !important;
  --nav-item-background-active: #c6a0f6 !important;
  --nav-item-background-hover: #494d64 !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #cad3f5 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #8aadf4 !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #6e738d !important;
  --nav-tag-color-active: #cad3f5 !important;
  --nav-tag-color-hover: #cad3f5 !important;
  --overlay0: #6e738d !important;
  --overlay1: #8087a2 !important;
  --overlay2: #939ab7 !important;
  --pdf-background: #24273a !important;
  --pdf-page-background: #24273a !important;
  --pdf-shadow: 0 0 0 1px #494d64 !important;
  --pdf-sidebar-background: #24273a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #494d64 !important;
  --peach: #f5a97f !important;
  --pill-border-color: #494d64 !important;
  --pill-border-color-hover: #363a4f !important;
  --pill-color: #cad3f5 !important;
  --pill-color-hover: #cad3f5 !important;
  --pill-color-remove: #6e738d !important;
  --pill-color-remove-hover: hsl(267, 83%, 80%) !important;
  --pink: #f5bde6 !important;
  --prompt-background: #24273a !important;
  --prompt-border-color: #494d64 !important;
  --raised-background: color-mix(in srgb, #181926 65%, transparent) linear-gradient(#181926, color-mix(in srgb, #181926 65%, transparent)) !important;
  --red: #ed8796 !important;
  --ribbon-background: #181926 !important;
  --ribbon-background-collapsed: #24273a !important;
  --rosewater: #f4dbd6 !important;
  --sapphire: #7dc4e4 !important;
  --search-clear-button-color: #cad3f5 !important;
  --search-icon-color: #cad3f5 !important;
  --search-result-background: #24273a !important;
  --secondary: hsl(267, 83%, 80%) !important;
  --selection-background-color: #494d64 !important;
  --selection-border-color: #ee99a0 !important;
  --setting-group-heading-color: #cad3f5 !important;
  --setting-items-border-color: #494d64 !important;
  --sky: #91d7e3 !important;
  --slider-track-background: #181926 !important;
  --status-bar-background: #181926 !important;
  --status-bar-border-color: #494d64 !important;
  --status-bar-text-color: #cad3f5 !important;
  --subtext0: #a5adcb !important;
  --subtext1: #b8c0e0 !important;
  --suggestion-background: #24273a !important;
  --surface0: #363a4f !important;
  --surface1: #494d64 !important;
  --surface2: #5b6078 !important;
  --sync-avatar-color-1: #ed8796 !important;
  --sync-avatar-color-2: #f5a97f !important;
  --sync-avatar-color-3: #eed49f !important;
  --sync-avatar-color-4: #a6da95 !important;
  --sync-avatar-color-5: #8bd5ca !important;
  --sync-avatar-color-6: #8aadf4 !important;
  --sync-avatar-color-7: #c6a0f6 !important;
  --sync-avatar-color-8: #f5bde6 !important;
  --tab-background-active: #24273a !important;
  --tab-container-background: #181926 !important;
  --tab-divider-color: #494d64 !important;
  --tab-outline-color: #494d64 !important;
  --tab-switcher-background: #181926 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181926, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(267, 83%, 80%) !important;
  --tab-text-color: #494d64 !important;
  --tab-text-color-active: #cad3f5 !important;
  --tab-text-color-focused: #cad3f5 !important;
  --tab-text-color-focused-active: #cad3f5 !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #494d64 !important;
  --table-border-color: #494d64 !important;
  --table-drag-handle-background-active: #ee99a0 !important;
  --table-drag-handle-color: #494d64 !important;
  --table-drag-handle-color-active: #494d64 !important;
  --table-header-border-color: #494d64 !important;
  --table-header-color: #cad3f5 !important;
  --table-selection: #494d64 !important;
  --table-selection-border-color: #ee99a0 !important;
  --tag-background: #363a4f !important;
  --tag-background-hover: #6e738d !important;
  --tag-border-color: hsla(267, 83%, 80%, 0.15) !important;
  --tag-border-color-hover: hsla(267, 83%, 80%, 0.15) !important;
  --tag-color: #c6a0f6 !important;
  --tag-color-hover: #c6a0f6 !important;
  --teal: #8bd5ca !important;
  --tertiary: red !important;
  --text: #cad3f5 !important;
  --text-accent: hsl(267, 83%, 80%) !important;
  --text-accent-hover: red !important;
  --text-color: #cad3f5 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #363a4f !important;
  --text-color-muted-light: #6e738d !important;
  --text-error: #ed8796 !important;
  --text-faint: #6e738d !important;
  --text-highlight-bg: hsl(267, 83%, 80%) !important;
  --text-muted: #cad3f5 !important;
  --text-normal: #cad3f5 !important;
  --text-on-accent-inverted: #24273a !important;
  --text-selection: #494d64 !important;
  --text-success: #a6da95 !important;
  --text-warning: #eed49f !important;
  --textHighlight: hsl(267, 83%, 80%) !important;
  --titlebar-background: #181926 !important;
  --titlebar-background-focused: #494d64 !important;
  --titlebar-border-color: #494d64 !important;
  --titlebar-text-color: #cad3f5 !important;
  --titlebar-text-color-focused: #cad3f5 !important;
  --vault-profile-color: #cad3f5 !important;
  --vault-profile-color-hover: #cad3f5 !important;
  --yellow: #eed49f !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 25, 38);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(36, 39, 58);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 25, 38);
  border-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(73, 77, 100);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(54, 58, 79);
  color: rgb(198, 160, 246);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 25, 38);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(73, 77, 100);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 25, 38);
  border-left-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(36, 39, 58);
  color: rgb(202, 211, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(138, 173, 244);
  outline: rgb(138, 173, 244) none 0px;
  text-decoration-color: rgb(138, 173, 244);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(138, 173, 244);
  outline: rgb(138, 173, 244) none 0px;
  text-decoration-color: rgb(138, 173, 244);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(138, 173, 244);
  outline: rgb(138, 173, 244) none 0px;
  text-decoration-color: rgb(138, 173, 244);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(138, 173, 244);
  outline: rgb(138, 173, 244) none 0px;
  text-decoration-color: rgb(138, 173, 244);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(200, 162, 246);
  color: rgb(202, 211, 245);
  outline: rgb(202, 211, 245) none 0px;
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(202, 211, 245);
  outline: rgb(202, 211, 245) none 0px;
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(110, 115, 141);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(198, 160, 246);
  border-color: rgb(198, 160, 246);
}

html[saved-theme="dark"] body p {
  color: rgb(202, 211, 245);
  outline: rgb(202, 211, 245) none 0px;
  text-decoration-color: rgb(202, 211, 245);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(198, 160, 246);
  outline: rgb(198, 160, 246) none 0px;
  text-decoration-color: rgb(198, 160, 246);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(198, 160, 246);
  outline: rgb(198, 160, 246) none 0px;
  text-decoration-color: rgb(198, 160, 246);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(237, 135, 150);
  outline: rgb(237, 135, 150) none 0px;
  text-decoration: underline rgba(200, 162, 246, 0.3);
  text-decoration-color: rgba(200, 162, 246, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(110, 115, 141);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(238, 212, 159);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(238, 212, 159);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(238, 212, 159);
  border-left-color: rgb(238, 212, 159);
  border-right-color: rgb(238, 212, 159);
  border-top-color: rgb(238, 212, 159);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(198, 160, 246);
  border-left-color: rgb(198, 160, 246);
  border-right-color: rgb(198, 160, 246);
  border-top-color: rgb(198, 160, 246);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(200, 162, 246);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(110, 115, 141);
  border-left-color: rgb(110, 115, 141);
  border-right-color: rgb(110, 115, 141);
  border-top-color: rgb(110, 115, 141);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(202, 211, 245);
  text-decoration-color: rgb(202, 211, 245);
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
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(36, 39, 58);
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(202, 211, 245);
  outline: rgb(202, 211, 245) none 0px;
  text-decoration-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 25, 38);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(73, 77, 100);
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(54, 58, 79);
  border-bottom-color: rgba(200, 162, 246, 0.15);
  border-left-color: rgba(200, 162, 246, 0.15);
  border-right-color: rgba(200, 162, 246, 0.15);
  border-top-color: rgba(200, 162, 246, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(198, 160, 246);
}

html[saved-theme="dark"] body h1 {
  color: rgb(198, 160, 246);
}

html[saved-theme="dark"] body h2 {
  color: rgb(138, 173, 244);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body h3 {
  color: rgb(166, 218, 149);
}

html[saved-theme="dark"] body h4 {
  color: rgb(238, 212, 159);
}

html[saved-theme="dark"] body h5 {
  color: rgb(245, 169, 127);
}

html[saved-theme="dark"] body h6 {
  color: rgb(237, 135, 150);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(36, 39, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 39, 58);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(54, 58, 79);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(202, 211, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(202, 211, 245);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(202, 211, 245);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(202, 211, 245);
  stroke: rgb(202, 211, 245);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(110, 115, 141);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(73, 77, 100);
  border-left-color: rgb(73, 77, 100);
  border-right-color: rgb(73, 77, 100);
  border-top-color: rgb(73, 77, 100);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 25, 38);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body abbr {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(24, 25, 38);
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(202, 211, 245);
  border-left-color: rgb(202, 211, 245);
  border-right-color: rgb(202, 211, 245);
  border-top-color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(202, 211, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(54, 58, 79);
  border-bottom-color: rgba(200, 162, 246, 0.15);
  border-left-color: rgba(200, 162, 246, 0.15);
  border-right-color: rgba(200, 162, 246, 0.15);
  border-top-color: rgba(200, 162, 246, 0.15);
  color: rgb(198, 160, 246);
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
