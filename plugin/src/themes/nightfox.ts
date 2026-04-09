import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nightfox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 181 !important;
  --accent-l: 51% !important;
  --accent-s: 37% !important;
  --background-modifier-active-hover: hsla(181, 37%, 51%, 0.1) !important;
  --background-modifier-border: #243347 !important;
  --background-modifier-border-focus: #39506d !important;
  --background-modifier-border-hover: #29394f !important;
  --background-modifier-error: #c94f6d !important;
  --background-modifier-error-hover: #c94f6d !important;
  --background-modifier-error-rgb: 201, 79, 109 !important;
  --background-modifier-form-field: #243347 !important;
  --background-modifier-form-field-hover: #243347 !important;
  --background-modifier-hover: rgba(205, 206, 207, 0.067) !important;
  --background-modifier-success: #81b29a !important;
  --background-modifier-success-rgb: 129, 178, 154 !important;
  --background-primary: #192330 !important;
  --background-primary-alt: #151d28 !important;
  --background-secondary: #151d28 !important;
  --background-secondary-alt: #29394f !important;
  --bases-cards-background: #192330 !important;
  --bases-cards-cover-background: #151d28 !important;
  --bases-cards-shadow: 0 0 0 1px #243347 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #29394f !important;
  --bases-embed-border-color: #243347 !important;
  --bases-group-heading-property-color: #aeafb0 !important;
  --bases-table-border-color: #243347 !important;
  --bases-table-cell-background-active: #192330 !important;
  --bases-table-cell-background-disabled: #151d28 !important;
  --bases-table-cell-background-selected: hsla(181, 37%, 51%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #39506d !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(181, 37%, 51%) !important;
  --bases-table-group-background: #151d28 !important;
  --bases-table-header-background: #192330 !important;
  --bases-table-header-background-hover: rgba(205, 206, 207, 0.067) !important;
  --bases-table-header-color: #aeafb0 !important;
  --bases-table-summary-background: #192330 !important;
  --bases-table-summary-background-hover: rgba(205, 206, 207, 0.067) !important;
  --blockquote-background-color: rgba(99, 205, 207, 0.03) !important;
  --blockquote-border-color: hsl(181, 37%, 51%) !important;
  --blur-background: color-mix(in srgb, #29394f 65%, transparent) linear-gradient(#29394f, color-mix(in srgb, #29394f 65%, transparent)) !important;
  --bold-color: #d6d6d7 !important;
  --callout-bug: 201, 79, 109;
  --callout-default: 113, 156, 214;
  --callout-error: 201, 79, 109;
  --callout-example: 157, 121, 214;
  --callout-fail: 201, 79, 109;
  --callout-important: 99, 205, 207;
  --callout-info: 113, 156, 214;
  --callout-question: 244, 162, 97;
  --callout-success: 129, 178, 154;
  --callout-summary: 99, 205, 207;
  --callout-tip: 99, 205, 207;
  --callout-todo: 113, 156, 214;
  --callout-warning: 244, 162, 97;
  --canvas-background: #192330 !important;
  --canvas-card-label-color: #5d728e !important;
  --canvas-color-1: 201, 79, 109 !important;
  --canvas-color-2: 244, 162, 97 !important;
  --canvas-color-3: 219, 192, 116 !important;
  --canvas-color-4: 129, 178, 154 !important;
  --canvas-color-5: 99, 205, 207 !important;
  --canvas-color-6: 157, 121, 214 !important;
  --canvas-dot-pattern: #29394f !important;
  --caret-color: #cdcecf !important;
  --checkbox-border-color: #5d728e !important;
  --checkbox-border-color-hover: #aeafb0 !important;
  --checkbox-color: hsl(181, 37%, 51%) !important;
  --checkbox-color-hover: hsl(178, 37.74%, 58.65%) !important;
  --checkbox-marker-color: #192330 !important;
  --checklist-done-color: #aeafb0 !important;
  --code-background: #151d28 !important;
  --code-border-color: #243347 !important;
  --code-bracket-background: rgba(205, 206, 207, 0.067) !important;
  --code-comment: #738091 !important;
  --code-function: #dbc074 !important;
  --code-important: #f4a261 !important;
  --code-inline-background: #131a24 !important;
  --code-keyword: #d67ad2 !important;
  --code-normal: #cdcecf !important;
  --code-operator: #c94f6d !important;
  --code-property: #63cdcf !important;
  --code-punctuation: #aeafb0 !important;
  --code-string: #81b29a !important;
  --code-tag: #c94f6d !important;
  --code-value: #9d79d6 !important;
  --collapse-icon-color: #5d728e !important;
  --collapse-icon-color-collapsed: hsl(178, 37.74%, 58.65%) !important;
  --color-accent: hsl(181, 37%, 51%) !important;
  --color-accent-1: hsl(178, 37.74%, 58.65%) !important;
  --color-accent-2: hsl(176, 38.85%, 65.79%) !important;
  --color-accent-hsl: 181, 37%, 51% !important;
  --color-base-00: #131a24 !important;
  --color-base-05: #151d28 !important;
  --color-base-10: #192330 !important;
  --color-base-100: #cdcecf !important;
  --color-base-110: #d6d6d7 !important;
  --color-base-20: #212e3f !important;
  --color-base-25: #243347 !important;
  --color-base-30: #29394f !important;
  --color-base-35: #39506d !important;
  --color-base-40: #496283 !important;
  --color-base-50: #5d728e !important;
  --color-base-60: #71839b !important;
  --color-base-70: #aeafb0 !important;
  --color-blue: #719cd6 !important;
  --color-blue-bright: #86abdc !important;
  --color-blue-dim: #6085b6 !important;
  --color-blue-rgb: 113, 156, 214 !important;
  --color-cyan: #63cdcf !important;
  --color-cyan-bright: #7ad5d6 !important;
  --color-cyan-dim: #54aeb0 !important;
  --color-cyan-rgb: 99, 205, 207 !important;
  --color-green: #81b29a !important;
  --color-green-bright: #8ebaa4 !important;
  --color-green-dim: #6e9783 !important;
  --color-green-rgb: 129, 178, 154 !important;
  --color-orange: #f4a261 !important;
  --color-orange-bright: #f6b079 !important;
  --color-orange-dim: #cf8a52 !important;
  --color-orange-rgb: 244, 162, 97 !important;
  --color-pink: #d67ad2 !important;
  --color-pink-bright: #dc8ed9 !important;
  --color-pink-dim: #b668b3 !important;
  --color-pink-rgb: 214, 122, 210 !important;
  --color-purple: #9d79d6 !important;
  --color-purple-bright: #baa1e2 !important;
  --color-purple-dim: #8567b6 !important;
  --color-purple-rgb: 157, 121, 214 !important;
  --color-red: #c94f6d !important;
  --color-red-bright: #d16983 !important;
  --color-red-dim: #ab435d !important;
  --color-red-rgb: 201, 79, 109 !important;
  --color-yellow: #dbc074 !important;
  --color-yellow-bright: #e0c989 !important;
  --color-yellow-dim: #baa363 !important;
  --color-yellow-rgb: 219, 192, 116 !important;
  --dark: #cdcecf !important;
  --darkgray: #cdcecf !important;
  --divider-color: #243347 !important;
  --divider-color-hover: hsl(181, 37%, 51%) !important;
  --dropdown-background: #29394f !important;
  --dropdown-background-hover: #39506d !important;
  --embed-block-shadow-hover: 0 0 0 1px #243347, inset 0 0 0 1px #243347 !important;
  --embed-border-start: 2px solid hsl(181, 37%, 51%) !important;
  --file-header-background: #192330 !important;
  --file-header-background-focused: #192330 !important;
  --flair-background: #29394f !important;
  --flair-color: #cdcecf !important;
  --footnote-divider-color: #243347 !important;
  --footnote-id-color: #aeafb0 !important;
  --footnote-id-color-no-occurrences: #5d728e !important;
  --footnote-input-background-active: rgba(205, 206, 207, 0.067) !important;
  --graph-line: #39506d !important;
  --graph-node: #aeafb0 !important;
  --graph-node-attachment: #dbc074 !important;
  --graph-node-focused: hsl(178, 37.74%, 58.65%) !important;
  --graph-node-tag: #4f9c77 !important;
  --graph-node-unresolved: #5d728e !important;
  --graph-text: #cdcecf !important;
  --gray: #aeafb0 !important;
  --h1-color: #d6d6d7 !important;
  --h1-size: 2.75em !important;
  --h1-weight: 300 !important;
  --h2-color: #d6d6d7 !important;
  --h2-size: 2.0em !important;
  --h2-weight: 700 !important;
  --h3-color: #d6d6d7 !important;
  --h3-size: 1.75em !important;
  --h3-weight: 700 !important;
  --h4-color: #d6d6d7 !important;
  --h4-size: 1.4em !important;
  --h4-weight: 700 !important;
  --h5-color: #d6d6d7 !important;
  --h5-size: 1.2em !important;
  --h5-style: italic !important;
  --h5-weight: 700 !important;
  --h6-color: #d6d6d7 !important;
  --h6-size: 1.0em !important;
  --h6-style: italic !important;
  --h6-weight: 700 !important;
  --heading-color: #d6d6d7 !important;
  --heading-formatting: #5d728e !important;
  --highlight: rgba(205, 206, 207, 0.067) !important;
  --hr-color: #243347 !important;
  --hr-thickness: 3px !important;
  --icon-color: #aeafb0 !important;
  --icon-color-active: hsl(178, 37.74%, 58.65%) !important;
  --icon-color-focused: #cdcecf !important;
  --icon-color-hover: #aeafb0 !important;
  --indentation-guide-color: rgba(205, 206, 207, 0.12) !important;
  --indentation-guide-color-active: rgba(205, 206, 207, 0.3) !important;
  --inline-title-color: #d6d6d7 !important;
  --inline-title-size: 2.75em !important;
  --inline-title-weight: 300 !important;
  --input-date-separator: #5d728e !important;
  --input-placeholder-color: #5d728e !important;
  --interactive-accent: hsl(181, 37%, 51%) !important;
  --interactive-accent-hover: hsl(178, 37.74%, 58.65%) !important;
  --interactive-accent-hsl: 181, 37%, 51% !important;
  --interactive-hover: #39506d !important;
  --interactive-normal: #29394f !important;
  --light: #192330 !important;
  --lightgray: #151d28 !important;
  --link-color: hsl(178, 37.74%, 58.65%) !important;
  --link-color-hover: hsl(176, 38.85%, 65.79%) !important;
  --link-external-color: hsl(178, 37.74%, 58.65%) !important;
  --link-external-color-hover: hsl(176, 38.85%, 65.79%) !important;
  --link-unresolved-color: hsl(178, 37.74%, 58.65%) !important;
  --link-unresolved-decoration-color: hsla(181, 37%, 51%, 0.3) !important;
  --list-marker-color: #5d728e !important;
  --list-marker-color-collapsed: hsl(178, 37.74%, 58.65%) !important;
  --list-marker-color-hover: #aeafb0 !important;
  --menu-background: #151d28 !important;
  --menu-border-color: #29394f !important;
  --metadata-border-color: #243347 !important;
  --metadata-divider-color: #243347 !important;
  --metadata-input-background-active: rgba(205, 206, 207, 0.067) !important;
  --metadata-input-text-color: #cdcecf !important;
  --metadata-label-background-active: rgba(205, 206, 207, 0.067) !important;
  --metadata-label-text-color: #aeafb0 !important;
  --metadata-label-text-color-hover: #aeafb0 !important;
  --metadata-property-background-active: rgba(205, 206, 207, 0.067) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #39506d !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #29394f !important;
  --modal-background: #192330 !important;
  --modal-border-color: #29394f !important;
  --mono-rgb-0: 19, 26, 36 !important;
  --mono-rgb-100: 205, 206, 207 !important;
  --nav-collapse-icon-color: #5d728e !important;
  --nav-collapse-icon-color-collapsed: #5d728e !important;
  --nav-heading-color: #cdcecf !important;
  --nav-heading-color-collapsed: #5d728e !important;
  --nav-heading-color-collapsed-hover: #aeafb0 !important;
  --nav-heading-color-hover: #cdcecf !important;
  --nav-indentation-guide-color: rgba(205, 206, 207, 0.12) !important;
  --nav-item-background-active: rgba(205, 206, 207, 0.067) !important;
  --nav-item-background-hover: rgba(205, 206, 207, 0.067) !important;
  --nav-item-background-selected: hsla(181, 37%, 51%, 0.15) !important;
  --nav-item-color: #aeafb0 !important;
  --nav-item-color-active: #cdcecf !important;
  --nav-item-color-highlighted: hsl(178, 37.74%, 58.65%) !important;
  --nav-item-color-hover: #cdcecf !important;
  --nav-item-color-selected: #cdcecf !important;
  --nav-tag-color: #5d728e !important;
  --nav-tag-color-active: #aeafb0 !important;
  --nav-tag-color-hover: #aeafb0 !important;
  --pdf-background: #192330 !important;
  --pdf-page-background: #192330 !important;
  --pdf-shadow: 0 0 0 1px #243347 !important;
  --pdf-sidebar-background: #192330 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #243347 !important;
  --pill-border-color: #243347 !important;
  --pill-border-color-hover: #29394f !important;
  --pill-color: #aeafb0 !important;
  --pill-color-hover: #cdcecf !important;
  --pill-color-remove: #5d728e !important;
  --pill-color-remove-hover: hsl(178, 37.74%, 58.65%) !important;
  --prompt-background: #192330 !important;
  --prompt-border-color: #496283 !important;
  --raised-background: color-mix(in srgb, #29394f 65%, transparent) linear-gradient(#29394f, color-mix(in srgb, #29394f 65%, transparent)) !important;
  --ribbon-background: #131a24 !important;
  --ribbon-background-collapsed: #151d28 !important;
  --scrollbar-active-thumb-bg: rgba(205, 206, 207, 0.2) !important;
  --scrollbar-bg: rgba(205, 206, 207, 0.05) !important;
  --scrollbar-thumb-bg: rgba(205, 206, 207, 0.1) !important;
  --search-clear-button-color: #aeafb0 !important;
  --search-icon-color: #aeafb0 !important;
  --search-result-background: #192330 !important;
  --secondary: hsl(178, 37.74%, 58.65%) !important;
  --setting-group-heading-color: #cdcecf !important;
  --setting-items-background: #151d28 !important;
  --setting-items-border-color: #243347 !important;
  --slider-thumb-border-color: #29394f !important;
  --slider-track-background: #243347 !important;
  --status-bar-background: #151d28 !important;
  --status-bar-border-color: #243347 !important;
  --status-bar-text-color: #aeafb0 !important;
  --suggestion-background: #192330 !important;
  --swatch-shadow: inset 0 0 0 1px rgba(205, 206, 207, 0.15) !important;
  --sync-avatar-color-1: #c94f6d !important;
  --sync-avatar-color-2: #f4a261 !important;
  --sync-avatar-color-3: #dbc074 !important;
  --sync-avatar-color-4: #81b29a !important;
  --sync-avatar-color-5: #63cdcf !important;
  --sync-avatar-color-6: #719cd6 !important;
  --sync-avatar-color-7: #9d79d6 !important;
  --sync-avatar-color-8: #d67ad2 !important;
  --tab-background-active: #192330 !important;
  --tab-container-background: #151d28 !important;
  --tab-divider-color: #29394f !important;
  --tab-outline-color: #243347 !important;
  --tab-switcher-background: #151d28 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #151d28, transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(205, 206, 207, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(181, 37%, 51%) !important;
  --tab-text-color: #5d728e !important;
  --tab-text-color-active: #aeafb0 !important;
  --tab-text-color-focused: #aeafb0 !important;
  --tab-text-color-focused-active: #aeafb0 !important;
  --tab-text-color-focused-active-current: #cdcecf !important;
  --tab-text-color-focused-highlighted: hsl(178, 37.74%, 58.65%) !important;
  --table-add-button-border-color: #243347 !important;
  --table-border-color: #243347 !important;
  --table-drag-handle-background-active: hsl(181, 37%, 51%) !important;
  --table-drag-handle-color: #5d728e !important;
  --table-header-background: #151d28 !important;
  --table-header-background-hover: #151d28 !important;
  --table-header-border-color: #243347 !important;
  --table-header-color: #cdcecf !important;
  --table-selection: hsla(181, 37%, 51%, 0.1) !important;
  --table-selection-border-color: hsl(181, 37%, 51%) !important;
  --tag-background: hsla(181, 37%, 51%, 0.1) !important;
  --tag-background-hover: hsla(181, 37%, 51%, 0.2) !important;
  --tag-border-color: hsla(181, 37%, 51%, 0.15) !important;
  --tag-border-color-hover: hsla(181, 37%, 51%, 0.15) !important;
  --tag-color: hsl(178, 37.74%, 58.65%) !important;
  --tag-color-hover: hsl(178, 37.74%, 58.65%) !important;
  --tertiary: hsl(176, 38.85%, 65.79%) !important;
  --text-accent: hsl(178, 37.74%, 58.65%) !important;
  --text-accent-hover: hsl(176, 38.85%, 65.79%) !important;
  --text-error: #c94f6d !important;
  --text-faint: #5d728e !important;
  --text-muted: #aeafb0 !important;
  --text-normal: #cdcecf !important;
  --text-selection: hsla(181, 37%, 51%, 0.33) !important;
  --text-success: #81b29a !important;
  --text-warning: #f4a261 !important;
  --textHighlight: rgba(205, 206, 207, 0.067) !important;
  --titlebar-background: #131a24 !important;
  --titlebar-background-focused: #131a24 !important;
  --titlebar-border-color: #243347 !important;
  --titlebar-text-color: #aeafb0 !important;
  --titlebar-text-color-focused: #cdcecf !important;
  --vault-profile-color: #cdcecf !important;
  --vault-profile-color-hover: #cdcecf !important;
  --workspace-background-translucent: rgba(19, 26, 36, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 29, 40);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 35, 48);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(21, 29, 40);
  border-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(36, 51, 71);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(84, 175, 176, 0.1);
  color: rgb(110, 189, 187);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 29, 40);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 51, 71);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 29, 40);
  border-left-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 35, 48);
  color: rgb(205, 206, 207);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(214, 214, 215);
  outline: rgb(214, 214, 215) none 0px;
  text-decoration-color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(214, 214, 215);
  outline: rgb(214, 214, 215) none 0px;
  text-decoration-color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body del {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(93, 114, 142);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(84, 175, 176);
  border-color: rgb(84, 175, 176);
}

html[saved-theme="dark"] body p {
  color: rgb(174, 175, 176);
  outline: rgb(174, 175, 176) none 0px;
  text-decoration-color: rgb(174, 175, 176);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(110, 189, 187);
  outline: rgb(110, 189, 187) none 0px;
  text-decoration-color: rgb(110, 189, 187);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 189, 187);
  outline: rgb(110, 189, 187) none 0px;
  text-decoration-color: rgb(110, 189, 187);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(110, 189, 187);
  outline: rgb(110, 189, 187) none 0px;
  text-decoration: underline rgba(84, 175, 176, 0.3);
  text-decoration-color: rgba(84, 175, 176, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body dt {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(93, 114, 142);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(99, 205, 207, 0.03);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body table {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(21, 29, 40);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(219, 192, 116);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(219, 192, 116);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(219, 192, 116);
  border-left-color: rgb(219, 192, 116);
  border-right-color: rgb(219, 192, 116);
  border-top-color: rgb(219, 192, 116);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(214, 214, 215);
  border-left-color: rgb(214, 214, 215);
  border-right-color: rgb(214, 214, 215);
  border-top-color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(84, 175, 176);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(93, 114, 142);
  border-left-color: rgb(93, 114, 142);
  border-right-color: rgb(93, 114, 142);
  border-top-color: rgb(93, 114, 142);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
  color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(113, 156, 214);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 99, 205, 207;
  background-color: rgba(99, 205, 207, 0.1);
  border-bottom-color: rgba(99, 205, 207, 0.25);
  border-left-color: rgba(99, 205, 207, 0.25);
  border-right-color: rgba(99, 205, 207, 0.25);
  border-top-color: rgba(99, 205, 207, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 201, 79, 109;
  background-color: rgba(201, 79, 109, 0.1);
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 201, 79, 109;
  background-color: rgba(201, 79, 109, 0.1);
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 157, 121, 214;
  background-color: rgba(157, 121, 214, 0.1);
  border-bottom-color: rgba(157, 121, 214, 0.25);
  border-left-color: rgba(157, 121, 214, 0.25);
  border-right-color: rgba(157, 121, 214, 0.25);
  border-top-color: rgba(157, 121, 214, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 201, 79, 109;
  background-color: rgba(201, 79, 109, 0.1);
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 113, 156, 214;
  background-color: rgba(113, 156, 214, 0.1);
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 113, 156, 214;
  background-color: rgba(113, 156, 214, 0.1);
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 244, 162, 97;
  background-color: rgba(244, 162, 97, 0.1);
  border-bottom-color: rgba(244, 162, 97, 0.25);
  border-left-color: rgba(244, 162, 97, 0.25);
  border-right-color: rgba(244, 162, 97, 0.25);
  border-top-color: rgba(244, 162, 97, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 129, 178, 154;
  background-color: rgba(129, 178, 154, 0.1);
  border-bottom-color: rgba(129, 178, 154, 0.25);
  border-left-color: rgba(129, 178, 154, 0.25);
  border-right-color: rgba(129, 178, 154, 0.25);
  border-top-color: rgba(129, 178, 154, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 99, 205, 207;
  background-color: rgba(99, 205, 207, 0.1);
  border-bottom-color: rgba(99, 205, 207, 0.25);
  border-left-color: rgba(99, 205, 207, 0.25);
  border-right-color: rgba(99, 205, 207, 0.25);
  border-top-color: rgba(99, 205, 207, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 113, 156, 214;
  background-color: rgba(113, 156, 214, 0.1);
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 244, 162, 97;
  background-color: rgba(244, 162, 97, 0.1);
  border-bottom-color: rgba(244, 162, 97, 0.25);
  border-left-color: rgba(244, 162, 97, 0.25);
  border-right-color: rgba(244, 162, 97, 0.25);
  border-top-color: rgba(244, 162, 97, 0.25);
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
  background-color: rgb(36, 51, 71);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 35, 48);
  border-bottom-color: rgb(73, 98, 131);
  border-left-color: rgb(73, 98, 131);
  border-right-color: rgb(73, 98, 131);
  border-top-color: rgb(73, 98, 131);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(205, 206, 207, 0.067);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(73, 98, 131);
  border-left-color: rgb(73, 98, 131);
  border-right-color: rgb(73, 98, 131);
  border-top-color: rgb(73, 98, 131);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(21, 29, 40);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(205, 206, 207, 0.067);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(205, 206, 207, 0.067);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(84, 175, 176, 0.1);
  border-bottom-color: rgba(84, 175, 176, 0.15);
  border-left-color: rgba(84, 175, 176, 0.15);
  border-right-color: rgba(84, 175, 176, 0.15);
  border-top-color: rgba(84, 175, 176, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(110, 189, 187);
}

html[saved-theme="dark"] body h1 {
  color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body h2 {
  color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body h3 {
  color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body h4 {
  color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body h5 {
  color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body h6 {
  color: rgb(214, 214, 215);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(205, 206, 207, 0.12);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(205, 206, 207);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(174, 175, 176);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(174, 175, 176);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(174, 175, 176);
  stroke: rgb(174, 175, 176);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(93, 114, 142);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(21, 29, 40);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body abbr {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body sub {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body summary {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body sup {
  color: rgb(205, 206, 207);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(84, 175, 176, 0.1);
  border-bottom-color: rgba(84, 175, 176, 0.15);
  border-left-color: rgba(84, 175, 176, 0.15);
  border-right-color: rgba(84, 175, 176, 0.15);
  border-top-color: rgba(84, 175, 176, 0.15);
  color: rgb(110, 189, 187);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 185 !important;
  --accent-l: 43% !important;
  --accent-s: 34% !important;
  --background-modifier-active-hover: hsla(185, 34%, 43%, 0.1) !important;
  --background-modifier-border: #d3c7bb !important;
  --background-modifier-border-focus: #a4a2a1 !important;
  --background-modifier-border-hover: #aab0ad !important;
  --background-modifier-error: #a5222f !important;
  --background-modifier-error-hover: #a5222f !important;
  --background-modifier-error-rgb: 165, 34, 47 !important;
  --background-modifier-form-field: #e4dcd4 !important;
  --background-modifier-form-field-hover: #e4dcd4 !important;
  --background-modifier-hover: rgba(61, 43, 90, 0.067) !important;
  --background-modifier-success: #396847 !important;
  --background-modifier-success-rgb: 87, 127, 99 !important;
  --background-primary: #f6f2ee !important;
  --background-primary-alt: #eae3dc !important;
  --background-secondary: #eae3dc !important;
  --background-secondary-alt: #eae3dc !important;
  --bases-cards-background: #f6f2ee !important;
  --bases-cards-cover-background: #eae3dc !important;
  --bases-cards-shadow: 0 0 0 1px #d3c7bb !important;
  --bases-cards-shadow-hover: 0 0 0 1px #aab0ad !important;
  --bases-embed-border-color: #d3c7bb !important;
  --bases-group-heading-property-color: #643f61 !important;
  --bases-table-border-color: #d3c7bb !important;
  --bases-table-cell-background-active: #f6f2ee !important;
  --bases-table-cell-background-disabled: #eae3dc !important;
  --bases-table-cell-background-selected: hsla(185, 34%, 43%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #a4a2a1 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(184, 34.34%, 46.225%) !important;
  --bases-table-group-background: #eae3dc !important;
  --bases-table-header-background: #f6f2ee !important;
  --bases-table-header-background-hover: rgba(61, 43, 90, 0.067) !important;
  --bases-table-header-color: #643f61 !important;
  --bases-table-summary-background: #f6f2ee !important;
  --bases-table-summary-background-hover: rgba(61, 43, 90, 0.067) !important;
  --blockquote-background-color: rgba(40, 121, 128, 0.03) !important;
  --blockquote-border-color: hsl(184, 34.34%, 46.225%) !important;
  --blur-background: color-mix(in srgb, #f6f2ee 65%, transparent) linear-gradient(#f6f2ee, color-mix(in srgb, #f6f2ee 65%, transparent)) !important;
  --bold-color: #302b5d !important;
  --callout-bug: 165, 34, 47;
  --callout-default: 40, 72, 169;
  --callout-error: 165, 34, 47;
  --callout-example: 110, 51, 206;
  --callout-fail: 165, 34, 47;
  --callout-important: 40, 121, 128;
  --callout-info: 40, 72, 169;
  --callout-question: 149, 95, 97;
  --callout-success: 87, 127, 99;
  --callout-summary: 40, 121, 128;
  --callout-tip: 40, 121, 128;
  --callout-todo: 40, 72, 169;
  --callout-warning: 172, 84, 2;
  --canvas-background: #f6f2ee !important;
  --canvas-card-label-color: #99868a !important;
  --canvas-color-1: 209, 105, 131 !important;
  --canvas-color-2: 246, 176, 121 !important;
  --canvas-color-3: 224, 201, 137 !important;
  --canvas-color-4: 142, 186, 164 !important;
  --canvas-color-5: 122, 213, 214 !important;
  --canvas-color-6: 186, 161, 226 !important;
  --canvas-dot-pattern: #aab0ad !important;
  --caret-color: #3d2b5a !important;
  --checkbox-border-color: #99868a !important;
  --checkbox-border-color-hover: #643f61 !important;
  --checkbox-color: hsl(184, 34.34%, 46.225%) !important;
  --checkbox-color-hover: hsl(182, 34.68%, 49.45%) !important;
  --checkbox-marker-color: #f6f2ee !important;
  --checklist-done-color: #643f61 !important;
  --code-background: #eae3dc !important;
  --code-border-color: #d3c7bb !important;
  --code-bracket-background: rgba(61, 43, 90, 0.067) !important;
  --code-comment: #837a72 !important;
  --code-function: #ac5402 !important;
  --code-important: #955f61 !important;
  --code-inline-background: #eae3dc !important;
  --code-keyword: #a440b5 !important;
  --code-normal: #3d2b5a !important;
  --code-operator: #a5222f !important;
  --code-property: #287980 !important;
  --code-punctuation: #643f61 !important;
  --code-string: #396847 !important;
  --code-tag: #a5222f !important;
  --code-value: #6e33ce !important;
  --collapse-icon-color: #99868a !important;
  --collapse-icon-color-collapsed: hsl(185, 34%, 43%) !important;
  --color-accent: hsl(185, 34%, 43%) !important;
  --color-accent-1: hsl(184, 34.34%, 46.225%) !important;
  --color-accent-2: hsl(182, 34.68%, 49.45%) !important;
  --color-accent-hsl: 185, 34%, 43% !important;
  --color-base-00: #e4dcd4 !important;
  --color-base-05: #eae3dc !important;
  --color-base-10: #f6f2ee !important;
  --color-base-100: #3d2b5a !important;
  --color-base-110: #302b5d !important;
  --color-base-20: #dbd1dd !important;
  --color-base-25: #d3c7bb !important;
  --color-base-30: #aab0ad !important;
  --color-base-35: #a4a2a1 !important;
  --color-base-40: #9f9496 !important;
  --color-base-50: #99868a !important;
  --color-base-60: #824d5b !important;
  --color-base-70: #643f61 !important;
  --color-blue: #2848a9 !important;
  --color-blue-bright: #4863b6 !important;
  --color-blue-bright-rgb: 134, 171, 220 !important;
  --color-blue-dim: #223d90 !important;
  --color-blue-rgb: 40, 72, 169 !important;
  --color-cyan: #287980 !important;
  --color-cyan-bright: #488d93 !important;
  --color-cyan-bright-rgb: 122, 213, 214 !important;
  --color-cyan-dim: #22676d !important;
  --color-cyan-rgb: 40, 121, 128 !important;
  --color-green: #396847 !important;
  --color-green-bright: #577f63 !important;
  --color-green-bright-rgb: 142, 186, 164 !important;
  --color-green-dim: #30583c !important;
  --color-green-rgb: 87, 127, 99 !important;
  --color-orange: #955f61 !important;
  --color-orange-bright: #a57779 !important;
  --color-orange-bright-rgb: 246, 176, 121 !important;
  --color-orange-dim: #7f5152 !important;
  --color-orange-rgb: 149, 95, 97 !important;
  --color-pink: #a440b5 !important;
  --color-pink-bright: #b25dc0 !important;
  --color-pink-bright-rgb: 220, 142, 217 !important;
  --color-pink-dim: #8b369a !important;
  --color-pink-rgb: 164, 64, 181 !important;
  --color-purple: #6e33ce !important;
  --color-purple-bright: #8452d5 !important;
  --color-purple-bright-rgb: 186, 161, 226 !important;
  --color-purple-dim: #5e2baf !important;
  --color-purple-rgb: 110, 51, 206 !important;
  --color-red: #a5222f !important;
  --color-red-bright: #b3434e !important;
  --color-red-bright-rgb: 209, 105, 131 !important;
  --color-red-dim: #8c1d28 !important;
  --color-red-rgb: 165, 34, 47 !important;
  --color-yellow: #ac5402 !important;
  --color-yellow-bright: #b86e28 !important;
  --color-yellow-bright-rgb: 224, 201, 137 !important;
  --color-yellow-dim: #924702 !important;
  --color-yellow-rgb: 172, 84, 2 !important;
  --dark: #3d2b5a !important;
  --darkgray: #3d2b5a !important;
  --divider-color: #d3c7bb !important;
  --divider-color-hover: hsl(184, 34.34%, 46.225%) !important;
  --dropdown-background: #e4dcd4 !important;
  --dropdown-background-hover: #f6f2ee !important;
  --embed-block-shadow-hover: 0 0 0 1px #d3c7bb, inset 0 0 0 1px #d3c7bb !important;
  --embed-border-start: 2px solid hsl(184, 34.34%, 46.225%) !important;
  --file-header-background: #f6f2ee !important;
  --file-header-background-focused: #f6f2ee !important;
  --flair-background: #e4dcd4 !important;
  --flair-color: #3d2b5a !important;
  --footnote-divider-color: #d3c7bb !important;
  --footnote-id-color: #643f61 !important;
  --footnote-id-color-no-occurrences: #99868a !important;
  --footnote-input-background-active: rgba(61, 43, 90, 0.067) !important;
  --graph-line: #dbd1dd !important;
  --graph-node: #643f61 !important;
  --graph-node-attachment: #e0af0f !important;
  --graph-node-focused: hsl(185, 34%, 43%) !important;
  --graph-node-tag: #19ae5b !important;
  --graph-node-unresolved: #99868a !important;
  --graph-text: #3d2b5a !important;
  --gray: #643f61 !important;
  --h1-color: #302b5d !important;
  --h1-size: 2.75em !important;
  --h1-weight: 300 !important;
  --h2-color: #302b5d !important;
  --h2-size: 2.0em !important;
  --h2-weight: 700 !important;
  --h3-color: #302b5d !important;
  --h3-size: 1.75em !important;
  --h3-weight: 700 !important;
  --h4-color: #302b5d !important;
  --h4-size: 1.4em !important;
  --h4-weight: 700 !important;
  --h5-color: #302b5d !important;
  --h5-size: 1.2em !important;
  --h5-style: italic !important;
  --h5-weight: 700 !important;
  --h6-color: #302b5d !important;
  --h6-size: 1.0em !important;
  --h6-style: italic !important;
  --h6-weight: 700 !important;
  --heading-color: #302b5d !important;
  --heading-formatting: #99868a !important;
  --highlight: rgba(61, 43, 90, 0.067) !important;
  --hr-color: #d3c7bb !important;
  --hr-thickness: 3px !important;
  --icon-color: #643f61 !important;
  --icon-color-active: hsl(185, 34%, 43%) !important;
  --icon-color-focused: #3d2b5a !important;
  --icon-color-hover: #643f61 !important;
  --indentation-guide-color: rgba(61, 43, 90, 0.12) !important;
  --indentation-guide-color-active: rgba(61, 43, 90, 0.3) !important;
  --inline-title-color: #302b5d !important;
  --inline-title-size: 2.75em !important;
  --inline-title-weight: 300 !important;
  --input-date-separator: #99868a !important;
  --input-placeholder-color: #99868a !important;
  --interactive-accent: hsl(184, 34.34%, 46.225%) !important;
  --interactive-accent-hover: hsl(182, 34.68%, 49.45%) !important;
  --interactive-accent-hsl: 185, 34%, 43% !important;
  --interactive-hover: #f6f2ee !important;
  --interactive-normal: #e4dcd4 !important;
  --light: #f6f2ee !important;
  --lightgray: #eae3dc !important;
  --link-color: hsl(185, 34%, 43%) !important;
  --link-color-hover: hsl(182, 34.68%, 49.45%) !important;
  --link-external-color: hsl(185, 34%, 43%) !important;
  --link-external-color-hover: hsl(182, 34.68%, 49.45%) !important;
  --link-unresolved-color: hsl(185, 34%, 43%) !important;
  --link-unresolved-decoration-color: hsla(185, 34%, 43%, 0.3) !important;
  --list-marker-color: #99868a !important;
  --list-marker-color-collapsed: hsl(185, 34%, 43%) !important;
  --list-marker-color-hover: #643f61 !important;
  --menu-background: #eae3dc !important;
  --menu-border-color: #aab0ad !important;
  --metadata-border-color: #d3c7bb !important;
  --metadata-divider-color: #d3c7bb !important;
  --metadata-input-background-active: rgba(61, 43, 90, 0.067) !important;
  --metadata-input-text-color: #3d2b5a !important;
  --metadata-label-background-active: rgba(61, 43, 90, 0.067) !important;
  --metadata-label-text-color: #643f61 !important;
  --metadata-label-text-color-hover: #643f61 !important;
  --metadata-property-background-active: rgba(61, 43, 90, 0.067) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a4a2a1 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #aab0ad !important;
  --modal-background: #f6f2ee !important;
  --modal-border-color: #aab0ad !important;
  --mono-rgb-0: 228, 220, 212 !important;
  --mono-rgb-100: 61, 43, 90 !important;
  --nav-collapse-icon-color: #99868a !important;
  --nav-collapse-icon-color-collapsed: #99868a !important;
  --nav-heading-color: #3d2b5a !important;
  --nav-heading-color-collapsed: #99868a !important;
  --nav-heading-color-collapsed-hover: #643f61 !important;
  --nav-heading-color-hover: #3d2b5a !important;
  --nav-indentation-guide-color: rgba(61, 43, 90, 0.12) !important;
  --nav-item-background-active: rgba(61, 43, 90, 0.067) !important;
  --nav-item-background-hover: rgba(61, 43, 90, 0.067) !important;
  --nav-item-background-selected: hsla(185, 34%, 43%, 0.15) !important;
  --nav-item-color: #643f61 !important;
  --nav-item-color-active: #3d2b5a !important;
  --nav-item-color-highlighted: hsl(185, 34%, 43%) !important;
  --nav-item-color-hover: #3d2b5a !important;
  --nav-item-color-selected: #3d2b5a !important;
  --nav-tag-color: #99868a !important;
  --nav-tag-color-active: #643f61 !important;
  --nav-tag-color-hover: #643f61 !important;
  --pdf-background: #f6f2ee !important;
  --pdf-page-background: #f6f2ee !important;
  --pdf-sidebar-background: #f6f2ee !important;
  --pill-border-color: #d3c7bb !important;
  --pill-border-color-hover: #aab0ad !important;
  --pill-color: #643f61 !important;
  --pill-color-hover: #3d2b5a !important;
  --pill-color-remove: #99868a !important;
  --pill-color-remove-hover: hsl(185, 34%, 43%) !important;
  --prompt-background: #f6f2ee !important;
  --prompt-border-color: #9f9496 !important;
  --raised-background: color-mix(in srgb, #f6f2ee 65%, transparent) linear-gradient(#f6f2ee, color-mix(in srgb, #f6f2ee 65%, transparent)) !important;
  --ribbon-background: #e4dcd4 !important;
  --ribbon-background-collapsed: #eae3dc !important;
  --scrollbar-active-thumb-bg: rgba(61, 43, 90, 0.2) !important;
  --scrollbar-bg: rgba(61, 43, 90, 0.05) !important;
  --scrollbar-thumb-bg: rgba(61, 43, 90, 0.1) !important;
  --search-clear-button-color: #643f61 !important;
  --search-icon-color: #643f61 !important;
  --search-result-background: #f6f2ee !important;
  --secondary: hsl(185, 34%, 43%) !important;
  --setting-group-heading-color: #3d2b5a !important;
  --setting-items-background: #eae3dc !important;
  --setting-items-border-color: #d3c7bb !important;
  --slider-thumb-border-color: #aab0ad !important;
  --slider-track-background: #d3c7bb !important;
  --status-bar-background: #eae3dc !important;
  --status-bar-border-color: #d3c7bb !important;
  --status-bar-text-color: #643f61 !important;
  --suggestion-background: #f6f2ee !important;
  --swatch-shadow: inset 0 0 0 1px rgba(61, 43, 90, 0.15) !important;
  --sync-avatar-color-1: #a5222f !important;
  --sync-avatar-color-2: #955f61 !important;
  --sync-avatar-color-3: #ac5402 !important;
  --sync-avatar-color-4: #396847 !important;
  --sync-avatar-color-5: #287980 !important;
  --sync-avatar-color-6: #2848a9 !important;
  --sync-avatar-color-7: #6e33ce !important;
  --sync-avatar-color-8: #a440b5 !important;
  --tab-background-active: #f6f2ee !important;
  --tab-container-background: #eae3dc !important;
  --tab-divider-color: #aab0ad !important;
  --tab-outline-color: #d3c7bb !important;
  --tab-switcher-background: #eae3dc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #eae3dc, transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(61, 43, 90, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(185, 34%, 43%) !important;
  --tab-text-color: #99868a !important;
  --tab-text-color-active: #643f61 !important;
  --tab-text-color-focused: #643f61 !important;
  --tab-text-color-focused-active: #643f61 !important;
  --tab-text-color-focused-active-current: #3d2b5a !important;
  --tab-text-color-focused-highlighted: hsl(185, 34%, 43%) !important;
  --table-add-button-border-color: #d3c7bb !important;
  --table-border-color: #d3c7bb !important;
  --table-drag-handle-background-active: hsl(184, 34.34%, 46.225%) !important;
  --table-drag-handle-color: #99868a !important;
  --table-header-background: #eae3dc !important;
  --table-header-background-hover: #eae3dc !important;
  --table-header-border-color: #d3c7bb !important;
  --table-header-color: #3d2b5a !important;
  --table-selection: hsla(185, 34%, 43%, 0.1) !important;
  --table-selection-border-color: hsl(184, 34.34%, 46.225%) !important;
  --tag-background: hsla(185, 34%, 43%, 0.1) !important;
  --tag-background-hover: hsla(185, 34%, 43%, 0.2) !important;
  --tag-border-color: hsla(185, 34%, 43%, 0.15) !important;
  --tag-border-color-hover: hsla(185, 34%, 43%, 0.15) !important;
  --tag-color: hsl(185, 34%, 43%) !important;
  --tag-color-hover: hsl(185, 34%, 43%) !important;
  --tertiary: hsl(182, 34.68%, 49.45%) !important;
  --text-accent: hsl(185, 34%, 43%) !important;
  --text-accent-hover: hsl(182, 34.68%, 49.45%) !important;
  --text-error: #a5222f !important;
  --text-faint: #99868a !important;
  --text-muted: #643f61 !important;
  --text-normal: #3d2b5a !important;
  --text-selection: hsla(185, 34%, 43%, 0.2) !important;
  --text-success: #396847 !important;
  --text-warning: #ac5402 !important;
  --textHighlight: rgba(61, 43, 90, 0.067) !important;
  --titlebar-background: #e4dcd4 !important;
  --titlebar-background-focused: #e4dcd4 !important;
  --titlebar-border-color: #d3c7bb !important;
  --titlebar-text-color: #643f61 !important;
  --titlebar-text-color-focused: #3d2b5a !important;
  --vault-profile-color: #3d2b5a !important;
  --vault-profile-color-hover: #3d2b5a !important;
  --workspace-background-translucent: rgba(228, 220, 212, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(234, 227, 220);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(246, 242, 238);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(246, 242, 238);
  border-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(211, 199, 187);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(72, 141, 147, 0.1);
  color: rgb(72, 141, 147);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(234, 227, 220);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(211, 199, 187);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(234, 227, 220);
  border-left-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 242, 238);
  color: rgb(61, 43, 90);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(48, 43, 93);
  outline: rgb(48, 43, 93) none 0px;
  text-decoration-color: rgb(48, 43, 93);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(48, 43, 93);
  outline: rgb(48, 43, 93) none 0px;
  text-decoration-color: rgb(48, 43, 93);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body del {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 134, 138);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(77, 153, 158);
  border-color: rgb(77, 153, 158);
}

html[saved-theme="light"] body p {
  color: rgb(100, 63, 97);
  outline: rgb(100, 63, 97) none 0px;
  text-decoration-color: rgb(100, 63, 97);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(72, 141, 147);
  outline: rgb(72, 141, 147) none 0px;
  text-decoration-color: rgb(72, 141, 147);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(72, 141, 147);
  outline: rgb(72, 141, 147) none 0px;
  text-decoration-color: rgb(72, 141, 147);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(72, 141, 147);
  outline: rgb(72, 141, 147) none 0px;
  text-decoration: underline rgba(72, 141, 147, 0.3);
  text-decoration-color: rgba(72, 141, 147, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body dt {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ol > li {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ul > li {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(153, 134, 138);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(40, 121, 128, 0.03);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body table {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body tr {
  background-color: rgb(234, 227, 220);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(172, 84, 2);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(172, 84, 2);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(172, 84, 2);
  border-left-color: rgb(172, 84, 2);
  border-right-color: rgb(172, 84, 2);
  border-top-color: rgb(172, 84, 2);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body figcaption {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(48, 43, 93);
  border-left-color: rgb(48, 43, 93);
  border-right-color: rgb(48, 43, 93);
  border-top-color: rgb(48, 43, 93);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(77, 153, 158);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 134, 138);
  border-left-color: rgb(153, 134, 138);
  border-right-color: rgb(153, 134, 138);
  border-top-color: rgb(153, 134, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
  color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(40, 72, 169);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 40, 121, 128;
  background-color: rgba(40, 121, 128, 0.1);
  border-bottom-color: rgba(40, 121, 128, 0.25);
  border-left-color: rgba(40, 121, 128, 0.25);
  border-right-color: rgba(40, 121, 128, 0.25);
  border-top-color: rgba(40, 121, 128, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 165, 34, 47;
  background-color: rgba(165, 34, 47, 0.1);
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 165, 34, 47;
  background-color: rgba(165, 34, 47, 0.1);
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 110, 51, 206;
  background-color: rgba(110, 51, 206, 0.1);
  border-bottom-color: rgba(110, 51, 206, 0.25);
  border-left-color: rgba(110, 51, 206, 0.25);
  border-right-color: rgba(110, 51, 206, 0.25);
  border-top-color: rgba(110, 51, 206, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 165, 34, 47;
  background-color: rgba(165, 34, 47, 0.1);
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 40, 72, 169;
  background-color: rgba(40, 72, 169, 0.1);
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 40, 72, 169;
  background-color: rgba(40, 72, 169, 0.1);
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 149, 95, 97;
  background-color: rgba(149, 95, 97, 0.1);
  border-bottom-color: rgba(149, 95, 97, 0.25);
  border-left-color: rgba(149, 95, 97, 0.25);
  border-right-color: rgba(149, 95, 97, 0.25);
  border-top-color: rgba(149, 95, 97, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 87, 127, 99;
  background-color: rgba(87, 127, 99, 0.1);
  border-bottom-color: rgba(87, 127, 99, 0.25);
  border-left-color: rgba(87, 127, 99, 0.25);
  border-right-color: rgba(87, 127, 99, 0.25);
  border-top-color: rgba(87, 127, 99, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 40, 121, 128;
  background-color: rgba(40, 121, 128, 0.1);
  border-bottom-color: rgba(40, 121, 128, 0.25);
  border-left-color: rgba(40, 121, 128, 0.25);
  border-right-color: rgba(40, 121, 128, 0.25);
  border-top-color: rgba(40, 121, 128, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 40, 72, 169;
  background-color: rgba(40, 72, 169, 0.1);
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 172, 84, 2;
  background-color: rgba(172, 84, 2, 0.1);
  border-bottom-color: rgba(172, 84, 2, 0.25);
  border-left-color: rgba(172, 84, 2, 0.25);
  border-right-color: rgba(172, 84, 2, 0.25);
  border-top-color: rgba(172, 84, 2, 0.25);
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
  background-color: rgb(228, 220, 212);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(246, 242, 238);
  border-bottom-color: rgb(159, 148, 150);
  border-left-color: rgb(159, 148, 150);
  border-right-color: rgb(159, 148, 150);
  border-top-color: rgb(159, 148, 150);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(61, 43, 90, 0.067);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(159, 148, 150);
  border-left-color: rgb(159, 148, 150);
  border-right-color: rgb(159, 148, 150);
  border-top-color: rgb(159, 148, 150);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(234, 227, 220);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(61, 43, 90, 0.067);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(61, 43, 90, 0.067);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(72, 141, 147, 0.1);
  border-bottom-color: rgba(72, 141, 147, 0.15);
  border-left-color: rgba(72, 141, 147, 0.15);
  border-right-color: rgba(72, 141, 147, 0.15);
  border-top-color: rgba(72, 141, 147, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(72, 141, 147);
}

html[saved-theme="light"] body h1 {
  color: rgb(48, 43, 93);
}

html[saved-theme="light"] body h2 {
  color: rgb(48, 43, 93);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(48, 43, 93);
}

html[saved-theme="light"] body h3 {
  color: rgb(48, 43, 93);
}

html[saved-theme="light"] body h4 {
  color: rgb(48, 43, 93);
}

html[saved-theme="light"] body h5 {
  color: rgb(48, 43, 93);
}

html[saved-theme="light"] body h6 {
  color: rgb(48, 43, 93);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(61, 43, 90, 0.12);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(61, 43, 90);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(100, 63, 97);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(100, 63, 97);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(100, 63, 97);
  stroke: rgb(100, 63, 97);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 134, 138);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(234, 227, 220);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body abbr {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

html[saved-theme="light"] body sub {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body summary {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body sup {
  color: rgb(61, 43, 90);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(72, 141, 147, 0.1);
  border-bottom-color: rgba(72, 141, 147, 0.15);
  border-left-color: rgba(72, 141, 147, 0.15);
  border-right-color: rgba(72, 141, 147, 0.15);
  border-top-color: rgba(72, 141, 147, 0.15);
  color: rgb(72, 141, 147);
}`,
  },
};
