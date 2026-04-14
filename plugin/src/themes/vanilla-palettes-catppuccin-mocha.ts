import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.catppuccin-mocha",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(267, 84%, 81%) !important;
  --accent-color-dark: #cba6f7 !important;
  --accent-color-hover: #eba0ac !important;
  --accent-color-light: #89b4fa !important;
  --accent-h: 267 !important;
  --accent-l: 81% !important;
  --accent-s: 84% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #45475a !important;
  --background-modifier-border-focus: #313244 !important;
  --background-modifier-border-hover: #313244 !important;
  --background-modifier-error: #f38ba8 !important;
  --background-modifier-error-hover: #f38ba8 !important;
  --background-modifier-form-field: #11111b !important;
  --background-modifier-form-field-hover: #11111b !important;
  --background-modifier-hover: #45475a !important;
  --background-modifier-success: #a6e3a1 !important;
  --background-primary: #1e1e2e !important;
  --background-secondary: #11111b !important;
  --base: #1e1e2e !important;
  --bases-cards-background: #1e1e2e !important;
  --bases-cards-shadow: 0 0 0 1px #45475a !important;
  --bases-cards-shadow-hover: 0 0 0 1px #313244 !important;
  --bases-embed-border-color: #45475a !important;
  --bases-group-heading-property-color: #cdd6f4 !important;
  --bases-table-border-color: #45475a !important;
  --bases-table-cell-background-active: #1e1e2e !important;
  --bases-table-cell-background-selected: #45475a !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #313244 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(267, 84%, 81%) !important;
  --bases-table-header-background: #1e1e2e !important;
  --bases-table-header-background-hover: #45475a !important;
  --bases-table-header-color: #cdd6f4 !important;
  --bases-table-summary-background: #1e1e2e !important;
  --bases-table-summary-background-hover: #45475a !important;
  --blockquote-border-color: #cba6f7 !important;
  --blue: #89b4fa !important;
  --blur-background: color-mix(in srgb, #11111b 65%, transparent) linear-gradient(#11111b, color-mix(in srgb, #11111b 65%, transparent)) !important;
  --bold-color: #89b4fa !important;
  --border-color: #45475a !important;
  --border-color-primary: #45475a !important;
  --border-color-secondary: #313244 !important;
  --canvas-background: #1e1e2e !important;
  --canvas-card-label-color: #6c7086 !important;
  --canvas-color: 203, 166, 247 !important;
  --caret-color: #cdd6f4 !important;
  --checkbox-border-color: #6c7086 !important;
  --checkbox-border-color-hover: #eba0ac !important;
  --checkbox-color: #cba6f7 !important;
  --checkbox-color-hover: #eba0ac !important;
  --checkbox-marker-color: #1e1e2e !important;
  --checklist-done-color: #6c7086 !important;
  --code-background: #11111b !important;
  --code-boolean: #fab387 !important;
  --code-border-color: #45475a !important;
  --code-bracket-background: #45475a !important;
  --code-builtin: #fab387 !important;
  --code-comment: #6c7086 !important;
  --code-definition: #b4befe !important;
  --code-function: #f9e2af !important;
  --code-important: #f9e2af !important;
  --code-keyword: #cba6f7 !important;
  --code-normal: #cdd6f4 !important;
  --code-operator: #89dceb !important;
  --code-parentheses: #9399b2 !important;
  --code-property: #b4befe !important;
  --code-punctuation: #cdd6f4 !important;
  --code-string: #a6e3a1 !important;
  --code-tag: #f38ba8 !important;
  --code-value: #fab387 !important;
  --code-variable: #cdd6f4 !important;
  --collapse-icon-color: #6c7086 !important;
  --collapse-icon-color-collapsed: hsl(267, 84%, 81%) !important;
  --color-accent: hsl(267, 84%, 81%) !important;
  --color-accent-1: hsl(264, 85.68%, 93.15%) !important;
  --color-accent-2: hsl(262, 88.2%, 104.49%) !important;
  --color-accent-hsl: 267, 84%, 81% !important;
  --color-blue: #89b4fa !important;
  --color-cyan: #94e2d5 !important;
  --color-green: #a6e3a1 !important;
  --color-orange: #fab387 !important;
  --color-pink: #f5c2e7 !important;
  --color-purple: #cba6f7 !important;
  --color-red: #f38ba8 !important;
  --color-yellow: #f9e2af !important;
  --crust: #11111b !important;
  --dark: #cdd6f4 !important;
  --darkgray: #cdd6f4 !important;
  --divider-color: #45475a !important;
  --divider-color-hover: hsl(267, 84%, 81%) !important;
  --dropdown-background: #11111b !important;
  --dropdown-background-hover: #45475a !important;
  --embed-block-shadow-hover: 0 0 0 1px #45475a, inset 0 0 0 1px #45475a !important;
  --embed-border-start: 2px solid hsl(267, 84%, 81%) !important;
  --file-header-background: #1e1e2e !important;
  --file-header-background-focused: #1e1e2e !important;
  --flair-background: #11111b !important;
  --flair-color: #cdd6f4 !important;
  --flamingo: #f2cdcd !important;
  --footnote-divider-color: #45475a !important;
  --footnote-id-color: #cdd6f4 !important;
  --footnote-id-color-no-occurrences: #6c7086 !important;
  --footnote-input-background-active: #45475a !important;
  --graph-line: #313244 !important;
  --graph-node: hsl(267, 84%, 81%) !important;
  --graph-node-attachment: #cba6f7 !important;
  --graph-node-focused: #eba0ac !important;
  --graph-node-tag: #89b4fa !important;
  --graph-node-unresolved: #45475a !important;
  --graph-text: #cdd6f4 !important;
  --gray: #cdd6f4 !important;
  --green: #a6e3a1 !important;
  --h1-color: #cba6f7 !important;
  --h2-color: #89b4fa !important;
  --h3-color: #a6e3a1 !important;
  --h4-color: #f9e2af !important;
  --h5-color: #fab387 !important;
  --h6-color: #f38ba8 !important;
  --heading-formatting: #6c7086 !important;
  --highlight: hsl(267, 84%, 81%) !important;
  --hr-color: #313244 !important;
  --icon-color: #cdd6f4 !important;
  --icon-color-active: hsl(267, 84%, 81%) !important;
  --icon-color-focused: #cdd6f4 !important;
  --icon-color-hover: #cdd6f4 !important;
  --indentation-guide-color: #313244 !important;
  --indentation-guide-color-active: #6c7086 !important;
  --inline-title-color: #cdd6f4 !important;
  --input-date-separator: #6c7086 !important;
  --input-placeholder-color: #6c7086 !important;
  --interactive-accent: hsl(267, 84%, 81%) !important;
  --interactive-accent-hover: hsl(264, 85.68%, 93.15%) !important;
  --interactive-accent-hsl: 267, 84%, 81% !important;
  --interactive-hover: #45475a !important;
  --interactive-normal: #11111b !important;
  --italic-color: #89b4fa !important;
  --lavender: #b4befe !important;
  --light: #1e1e2e !important;
  --lightgray: #11111b !important;
  --link-color: #cba6f7 !important;
  --link-color-hover: #eba0ac !important;
  --link-external-color: #cba6f7 !important;
  --link-external-color-hover: #eba0ac !important;
  --link-unresolved-color: #f38ba8 !important;
  --link-unresolved-color-hover: #f38ba8 !important;
  --link-unresolved-decoration-color: hsla(267, 84%, 81%, 0.3) !important;
  --list-marker-color: #cba6f7 !important;
  --list-marker-color-collapsed: hsl(267, 84%, 81%) !important;
  --list-marker-color-hover: #cdd6f4 !important;
  --mantle: #181825 !important;
  --maroon: #eba0ac !important;
  --mauve: #cba6f7 !important;
  --menu-background: #11111b !important;
  --menu-border-color: #313244 !important;
  --metadata-border-color: #45475a !important;
  --metadata-divider-color: #45475a !important;
  --metadata-input-background-active: #45475a !important;
  --metadata-input-text-color: #cdd6f4 !important;
  --metadata-label-background-active: #45475a !important;
  --metadata-label-text-color: #cdd6f4 !important;
  --metadata-label-text-color-hover: #cdd6f4 !important;
  --metadata-property-background-active: #45475a !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #313244 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #313244 !important;
  --modal-background: #11111b !important;
  --modal-border-color: #45475a !important;
  --nav-collapse-icon-color: #313244 !important;
  --nav-collapse-icon-color-collapsed: #313244 !important;
  --nav-heading-color: #cdd6f4 !important;
  --nav-heading-color-collapsed: #6c7086 !important;
  --nav-heading-color-collapsed-hover: #cdd6f4 !important;
  --nav-heading-color-hover: #cdd6f4 !important;
  --nav-indentation-guide-color: #313244 !important;
  --nav-item-background-active: #cba6f7 !important;
  --nav-item-background-hover: #45475a !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #cdd6f4 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #89b4fa !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #6c7086 !important;
  --nav-tag-color-active: #cdd6f4 !important;
  --nav-tag-color-hover: #cdd6f4 !important;
  --overlay0: #6c7086 !important;
  --overlay1: #7f849c !important;
  --overlay2: #9399b2 !important;
  --pdf-background: #1e1e2e !important;
  --pdf-page-background: #1e1e2e !important;
  --pdf-shadow: 0 0 0 1px #45475a !important;
  --pdf-sidebar-background: #1e1e2e !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #45475a !important;
  --peach: #fab387 !important;
  --pill-border-color: #45475a !important;
  --pill-border-color-hover: #313244 !important;
  --pill-color: #cdd6f4 !important;
  --pill-color-hover: #cdd6f4 !important;
  --pill-color-remove: #6c7086 !important;
  --pill-color-remove-hover: hsl(267, 84%, 81%) !important;
  --pink: #f5c2e7 !important;
  --prompt-background: #1e1e2e !important;
  --prompt-border-color: #45475a !important;
  --raised-background: color-mix(in srgb, #11111b 65%, transparent) linear-gradient(#11111b, color-mix(in srgb, #11111b 65%, transparent)) !important;
  --red: #f38ba8 !important;
  --ribbon-background: #11111b !important;
  --ribbon-background-collapsed: #1e1e2e !important;
  --rosewater: #f5e0dc !important;
  --sapphire: #74c7ec !important;
  --search-clear-button-color: #cdd6f4 !important;
  --search-icon-color: #cdd6f4 !important;
  --search-result-background: #1e1e2e !important;
  --secondary: hsl(267, 84%, 81%) !important;
  --selection-background-color: #45475a !important;
  --selection-border-color: #eba0ac !important;
  --setting-group-heading-color: #cdd6f4 !important;
  --setting-items-border-color: #45475a !important;
  --sky: #89dceb !important;
  --slider-track-background: #11111b !important;
  --status-bar-background: #11111b !important;
  --status-bar-border-color: #45475a !important;
  --status-bar-text-color: #cdd6f4 !important;
  --subtext0: #a6adc8 !important;
  --subtext1: #bac2de !important;
  --suggestion-background: #1e1e2e !important;
  --surface0: #313244 !important;
  --surface1: #45475a !important;
  --surface2: #585b70 !important;
  --sync-avatar-color-1: #f38ba8 !important;
  --sync-avatar-color-2: #fab387 !important;
  --sync-avatar-color-3: #f9e2af !important;
  --sync-avatar-color-4: #a6e3a1 !important;
  --sync-avatar-color-5: #94e2d5 !important;
  --sync-avatar-color-6: #89b4fa !important;
  --sync-avatar-color-7: #cba6f7 !important;
  --sync-avatar-color-8: #f5c2e7 !important;
  --tab-background-active: #1e1e2e !important;
  --tab-container-background: #11111b !important;
  --tab-divider-color: #45475a !important;
  --tab-outline-color: #45475a !important;
  --tab-switcher-background: #11111b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #11111b, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(267, 84%, 81%) !important;
  --tab-text-color: #45475a !important;
  --tab-text-color-active: #cdd6f4 !important;
  --tab-text-color-focused: #cdd6f4 !important;
  --tab-text-color-focused-active: #cdd6f4 !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #45475a !important;
  --table-border-color: #45475a !important;
  --table-drag-handle-background-active: #eba0ac !important;
  --table-drag-handle-color: #45475a !important;
  --table-drag-handle-color-active: #45475a !important;
  --table-header-border-color: #45475a !important;
  --table-header-color: #cdd6f4 !important;
  --table-selection: #45475a !important;
  --table-selection-border-color: #eba0ac !important;
  --tag-background: #313244 !important;
  --tag-background-hover: #6c7086 !important;
  --tag-border-color: hsla(267, 84%, 81%, 0.15) !important;
  --tag-border-color-hover: hsla(267, 84%, 81%, 0.15) !important;
  --tag-color: #cba6f7 !important;
  --tag-color-hover: #cba6f7 !important;
  --teal: #94e2d5 !important;
  --tertiary: red !important;
  --text: #cdd6f4 !important;
  --text-accent: hsl(267, 84%, 81%) !important;
  --text-accent-hover: red !important;
  --text-color: #cdd6f4 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #313244 !important;
  --text-color-muted-light: #6c7086 !important;
  --text-error: #f38ba8 !important;
  --text-faint: #6c7086 !important;
  --text-highlight-bg: hsl(267, 84%, 81%) !important;
  --text-muted: #cdd6f4 !important;
  --text-normal: #cdd6f4 !important;
  --text-on-accent-inverted: #1e1e2e !important;
  --text-selection: #45475a !important;
  --text-success: #a6e3a1 !important;
  --text-warning: #f9e2af !important;
  --textHighlight: hsl(267, 84%, 81%) !important;
  --titlebar-background: #11111b !important;
  --titlebar-background-focused: #45475a !important;
  --titlebar-border-color: #45475a !important;
  --titlebar-text-color: #cdd6f4 !important;
  --titlebar-text-color-focused: #cdd6f4 !important;
  --vault-profile-color: #cdd6f4 !important;
  --vault-profile-color-hover: #cdd6f4 !important;
  --yellow: #f9e2af !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 27);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 30, 46);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(17, 17, 27);
  border-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(69, 71, 90);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(49, 50, 68);
  color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 27);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(69, 71, 90);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 27);
  border-left-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 30, 46);
  color: rgb(205, 214, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(137, 180, 250);
  outline: rgb(137, 180, 250) none 0px;
  text-decoration-color: rgb(137, 180, 250);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(137, 180, 250);
  outline: rgb(137, 180, 250) none 0px;
  text-decoration-color: rgb(137, 180, 250);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(137, 180, 250);
  outline: rgb(137, 180, 250) none 0px;
  text-decoration-color: rgb(137, 180, 250);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(137, 180, 250);
  outline: rgb(137, 180, 250) none 0px;
  text-decoration-color: rgb(137, 180, 250);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(202, 166, 247);
  color: rgb(205, 214, 244);
  outline: rgb(205, 214, 244) none 0px;
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(205, 214, 244);
  outline: rgb(205, 214, 244) none 0px;
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 112, 134);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(203, 166, 247);
  border-color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body p {
  color: rgb(205, 214, 244);
  outline: rgb(205, 214, 244) none 0px;
  text-decoration-color: rgb(205, 214, 244);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(203, 166, 247);
  outline: rgb(203, 166, 247) none 0px;
  text-decoration-color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 166, 247);
  outline: rgb(203, 166, 247) none 0px;
  text-decoration-color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(243, 139, 168);
  outline: rgb(243, 139, 168) none 0px;
  text-decoration: underline rgba(202, 166, 247, 0.3);
  text-decoration-color: rgba(202, 166, 247, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(108, 112, 134);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body table {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(249, 226, 175);
  border-left-color: rgb(249, 226, 175);
  border-right-color: rgb(249, 226, 175);
  border-top-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(203, 166, 247);
  border-left-color: rgb(203, 166, 247);
  border-right-color: rgb(203, 166, 247);
  border-top-color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(202, 166, 247);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 112, 134);
  border-left-color: rgb(108, 112, 134);
  border-right-color: rgb(108, 112, 134);
  border-top-color: rgb(108, 112, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(205, 214, 244);
  text-decoration-color: rgb(205, 214, 244);
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
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 30, 46);
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(205, 214, 244);
  outline: rgb(205, 214, 244) none 0px;
  text-decoration-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 27);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(69, 71, 90);
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(49, 50, 68);
  border-bottom-color: rgba(202, 166, 247, 0.15);
  border-left-color: rgba(202, 166, 247, 0.15);
  border-right-color: rgba(202, 166, 247, 0.15);
  border-top-color: rgba(202, 166, 247, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body h1 {
  color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body h2 {
  color: rgb(137, 180, 250);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body h3 {
  color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body h4 {
  color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body h5 {
  color: rgb(250, 179, 135);
}

html[saved-theme="dark"] body h6 {
  color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(49, 50, 68);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(205, 214, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(205, 214, 244);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(205, 214, 244);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(205, 214, 244);
  stroke: rgb(205, 214, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(108, 112, 134);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(69, 71, 90);
  border-left-color: rgb(69, 71, 90);
  border-right-color: rgb(69, 71, 90);
  border-top-color: rgb(69, 71, 90);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 17, 27);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body abbr {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(205, 214, 244);
  border-left-color: rgb(205, 214, 244);
  border-right-color: rgb(205, 214, 244);
  border-top-color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(205, 214, 244);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(49, 50, 68);
  border-bottom-color: rgba(202, 166, 247, 0.15);
  border-left-color: rgba(202, 166, 247, 0.15);
  border-right-color: rgba(202, 166, 247, 0.15);
  border-top-color: rgba(202, 166, 247, 0.15);
  color: rgb(203, 166, 247);
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
