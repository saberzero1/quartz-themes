import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "solarized",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 17.5690607735deg !important;
  --accent-l: 44.1176470588% !important;
  --accent-s: 80.4444444444% !important;
  --active-bg: rgba(255, 255, 255, 0.067) !important;
  --background-modifier-active-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --background-modifier-border: rgb(7, 54, 66) !important;
  --background-modifier-border-focus: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --background-modifier-border-hover: rgb(7, 54, 66) !important;
  --background-modifier-error: rgb(220, 50, 47) !important;
  --background-modifier-error-hover: rgb(220, 50, 47) !important;
  --background-modifier-error-rgb: 220, 50, 47 !important;
  --background-modifier-form-field: rgb(0, 43, 54) !important;
  --background-modifier-form-field-hover: rgb(0, 43, 54) !important;
  --background-modifier-success: rgb(133, 153, 0) !important;
  --background-modifier-success-rgb: 133, 153, 0 !important;
  --background-primary: rgb(0, 43, 54) !important;
  --background-primary-alt: rgb(7, 54, 66) !important;
  --background-secondary: rgb(0, 43, 54) !important;
  --background-secondary-alt: rgb(7, 54, 66) !important;
  --base0: rgb(131, 148, 150) !important;
  --base00: rgb(101, 123, 131) !important;
  --base01: rgb(88, 110, 117) !important;
  --base02: rgb(7, 54, 66) !important;
  --base03: rgb(0, 43, 54) !important;
  --base1: rgb(147, 161, 161) !important;
  --base2: rgb(238, 232, 213) !important;
  --base3: rgb(253, 246, 227) !important;
  --bases-cards-background: rgb(0, 43, 54) !important;
  --bases-cards-cover-background: rgb(7, 54, 66) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(7, 54, 66) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(7, 54, 66) !important;
  --bases-embed-border-color: rgb(7, 54, 66) !important;
  --bases-group-heading-property-color: rgb(101, 123, 131) !important;
  --bases-table-border-color: rgb(7, 54, 66) !important;
  --bases-table-cell-background-active: rgb(0, 43, 54) !important;
  --bases-table-cell-background-disabled: rgb(7, 54, 66) !important;
  --bases-table-cell-background-selected: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --bases-table-group-background: rgb(7, 54, 66) !important;
  --bases-table-header-background: rgb(0, 43, 54) !important;
  --bases-table-header-color: rgb(101, 123, 131) !important;
  --bases-table-summary-background: rgb(0, 43, 54) !important;
  --blockquote-border-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --blur-background: color-mix(in srgb, rgb(7, 54, 66) 65%, transparent) linear-gradient(rgb(7, 54, 66), color-mix(in srgb, rgb(7, 54, 66) 65%, transparent)) !important;
  --callout-bug: 220, 50, 47;
  --callout-default: 38, 139, 210;
  --callout-error: 220, 50, 47;
  --callout-example: 108, 113, 196;
  --callout-fail: 220, 50, 47;
  --callout-important: 42, 161, 152;
  --callout-info: 38, 139, 210;
  --callout-question: 203, 75, 22;
  --callout-success: 133, 153, 0;
  --callout-summary: 42, 161, 152;
  --callout-tip: 42, 161, 152;
  --callout-todo: 38, 139, 210;
  --callout-warning: 203, 75, 22;
  --canvas-background: rgb(0, 43, 54) !important;
  --canvas-card-label-color: rgb(88, 110, 117) !important;
  --canvas-color-1: 220, 50, 47 !important;
  --canvas-color-2: 203, 75, 22 !important;
  --canvas-color-3: 181, 137, 0 !important;
  --canvas-color-4: 133, 153, 0 !important;
  --canvas-color-5: 42, 161, 152 !important;
  --canvas-color-6: 108, 113, 196 !important;
  --canvas-dot-pattern: rgb(7, 54, 66) !important;
  --caret-color: rgb(131, 148, 150) !important;
  --checkbox-border-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --checkbox-border-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --checkbox-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --checkbox-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --checkbox-marker-color: rgb(0, 43, 54) !important;
  --checklist-done-color: rgb(101, 123, 131) !important;
  --code-background: rgb(7, 54, 66) !important;
  --code-border-color: rgb(7, 54, 66) !important;
  --code-comment: rgb(42, 161, 152) !important;
  --code-function: rgb(38, 139, 210) !important;
  --code-important: rgb(203, 75, 22) !important;
  --code-keyword: rgb(133, 153, 0) !important;
  --code-normal: rgb(131, 148, 150) !important;
  --code-operator: rgb(131, 148, 150) !important;
  --code-property: rgb(131, 148, 150) !important;
  --code-punctuation: rgb(131, 148, 150) !important;
  --code-string: rgb(42, 161, 152) !important;
  --code-tag: rgb(220, 50, 47) !important;
  --code-value: rgb(211, 54, 130) !important;
  --collapse-icon-color: rgb(88, 110, 117) !important;
  --collapse-icon-color-collapsed: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --color-accent: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --color-accent-1: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --color-accent-2: hsl(calc(17.56906deg - 5), 84.46667%, 56.91176%) !important;
  --color-accent-hsl: 17.5690607735deg, 80.4444444444%, 44.1176470588% !important;
  --color-base-25: rgb(0, 43, 54) !important;
  --color-base-30: rgb(7, 54, 66) !important;
  --color-base-35: rgb(7, 54, 66) !important;
  --color-base-40: rgb(131, 148, 150) !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bababa !important;
  --color-blue: rgb(38, 139, 210) !important;
  --color-blue-rgb: 38, 139, 210 !important;
  --color-cyan: rgb(42, 161, 152) !important;
  --color-cyan-rgb: 42, 161, 152 !important;
  --color-green: rgb(133, 153, 0) !important;
  --color-green-rgb: 133, 153, 0 !important;
  --color-orange: rgb(203, 75, 22) !important;
  --color-orange-rgb: 203, 75, 22 !important;
  --color-pink: rgb(211, 54, 130) !important;
  --color-pink-rgb: 211, 54, 130 !important;
  --color-purple: rgb(108, 113, 196) !important;
  --color-purple-rgb: 108, 113, 196 !important;
  --color-red: rgb(220, 50, 47) !important;
  --color-red-rgb: 220, 50, 47 !important;
  --color-yellow: rgb(181, 137, 0) !important;
  --color-yellow-rgb: 181, 137, 0 !important;
  --dark: rgb(131, 148, 150) !important;
  --darkgray: rgb(131, 148, 150) !important;
  --divider-color: rgb(7, 54, 66) !important;
  --divider-color-hover: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --dropdown-background: rgb(7, 54, 66) !important;
  --dropdown-background-hover: rgb(0, 43, 54) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(7, 54, 66), inset 0 0 0 1px rgb(7, 54, 66) !important;
  --embed-border-start: 2px solid hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --file-header-background: rgb(0, 43, 54) !important;
  --file-header-background-focused: rgb(0, 43, 54) !important;
  --flair-background: rgb(7, 54, 66) !important;
  --flair-color: rgb(131, 148, 150) !important;
  --footnote-divider-color: rgb(7, 54, 66) !important;
  --footnote-id-color: rgb(101, 123, 131) !important;
  --footnote-id-color-no-occurrences: rgb(88, 110, 117) !important;
  --graph-line: rgb(7, 54, 66) !important;
  --graph-node: rgb(101, 123, 131) !important;
  --graph-node-attachment: rgb(181, 137, 0) !important;
  --graph-node-focused: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --graph-node-tag: rgb(133, 153, 0) !important;
  --graph-node-unresolved: rgb(88, 110, 117) !important;
  --graph-text: rgb(131, 148, 150) !important;
  --gray: rgb(101, 123, 131) !important;
  --h1-color: rgb(42, 161, 152) !important;
  --h2-color: rgb(42, 161, 152) !important;
  --h3-color: rgb(42, 161, 152) !important;
  --h4-color: rgb(42, 161, 152) !important;
  --h5-color: rgb(42, 161, 152) !important;
  --h6-color: rgb(42, 161, 152) !important;
  --heading-formatting: rgb(42, 161, 152) !important;
  --highlight: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --hr-color: rgb(7, 54, 66) !important;
  --icon-color: rgb(101, 123, 131) !important;
  --icon-color-active: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --icon-color-focused: rgb(131, 148, 150) !important;
  --icon-color-hover: rgb(101, 123, 131) !important;
  --inline-title-color: rgb(42, 161, 152) !important;
  --input-date-separator: rgb(88, 110, 117) !important;
  --input-placeholder-color: rgb(88, 110, 117) !important;
  --interactive-accent: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --interactive-accent-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --interactive-accent-hsl: 17.5690607735deg, 80.4444444444%, 44.1176470588% !important;
  --interactive-hover: rgb(0, 43, 54) !important;
  --interactive-normal: rgb(7, 54, 66) !important;
  --light: rgb(0, 43, 54) !important;
  --lightgray: rgb(0, 43, 54) !important;
  --link-color: rgb(38, 139, 210) !important;
  --link-color-hover: rgb(38, 139, 210) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(108, 113, 196) !important;
  --link-external-color-hover: rgb(108, 113, 196) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(220, 50, 47) !important;
  --link-unresolved-color-hover: rgb(220, 50, 47) !important;
  --link-unresolved-decoration-color: rgb(220, 50, 47) !important;
  --list-marker-color: rgb(88, 110, 117) !important;
  --list-marker-color-collapsed: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --list-marker-color-hover: rgb(101, 123, 131) !important;
  --menu-background: rgb(0, 43, 54) !important;
  --menu-border-color: rgb(7, 54, 66) !important;
  --metadata-border-color: rgb(7, 54, 66) !important;
  --metadata-divider-color: rgb(7, 54, 66) !important;
  --metadata-input-text-color: rgb(131, 148, 150) !important;
  --metadata-label-text-color: rgb(101, 123, 131) !important;
  --metadata-label-text-color-hover: rgb(101, 123, 131) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(7, 54, 66) !important;
  --modal-background: rgb(0, 43, 54) !important;
  --modal-border-color: rgb(131, 148, 150) !important;
  --nav-collapse-icon-color: rgb(88, 110, 117) !important;
  --nav-collapse-icon-color-collapsed: rgb(88, 110, 117) !important;
  --nav-heading-color: rgb(131, 148, 150) !important;
  --nav-heading-color-collapsed: rgb(88, 110, 117) !important;
  --nav-heading-color-collapsed-hover: rgb(101, 123, 131) !important;
  --nav-heading-color-hover: rgb(131, 148, 150) !important;
  --nav-item-background-selected: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15) !important;
  --nav-item-color: rgb(101, 123, 131) !important;
  --nav-item-color-active: rgb(131, 148, 150) !important;
  --nav-item-color-highlighted: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --nav-item-color-hover: rgb(131, 148, 150) !important;
  --nav-item-color-selected: rgb(131, 148, 150) !important;
  --nav-tag-color: rgb(88, 110, 117) !important;
  --nav-tag-color-active: rgb(101, 123, 131) !important;
  --nav-tag-color-hover: rgb(101, 123, 131) !important;
  --pdf-background: rgb(0, 43, 54) !important;
  --pdf-page-background: rgb(0, 43, 54) !important;
  --pdf-shadow: 0 0 0 1px rgb(7, 54, 66) !important;
  --pdf-sidebar-background: rgb(0, 43, 54) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(7, 54, 66) !important;
  --pill-border-color: rgb(7, 54, 66) !important;
  --pill-border-color-hover: rgb(7, 54, 66) !important;
  --pill-color: rgb(101, 123, 131) !important;
  --pill-color-hover: rgb(131, 148, 150) !important;
  --pill-color-remove: rgb(88, 110, 117) !important;
  --pill-color-remove-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --prompt-background: rgb(0, 43, 54) !important;
  --prompt-border-color: rgb(131, 148, 150) !important;
  --raised-background: color-mix(in srgb, rgb(7, 54, 66) 65%, transparent) linear-gradient(rgb(7, 54, 66), color-mix(in srgb, rgb(7, 54, 66) 65%, transparent)) !important;
  --ribbon-background: rgb(0, 43, 54) !important;
  --ribbon-background-collapsed: rgb(0, 43, 54) !important;
  --search-clear-button-color: rgb(101, 123, 131) !important;
  --search-icon-color: rgb(101, 123, 131) !important;
  --search-result-background: rgb(0, 43, 54) !important;
  --secondary: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --setting-group-heading-color: rgb(131, 148, 150) !important;
  --setting-items-background: rgb(7, 54, 66) !important;
  --setting-items-border-color: rgb(7, 54, 66) !important;
  --slider-thumb-border-color: rgb(7, 54, 66) !important;
  --slider-track-background: rgb(7, 54, 66) !important;
  --status-bar-background: rgb(0, 43, 54) !important;
  --status-bar-border-color: rgb(7, 54, 66) !important;
  --status-bar-text-color: rgb(101, 123, 131) !important;
  --suggestion-background: rgb(0, 43, 54) !important;
  --sync-avatar-color-1: rgb(220, 50, 47) !important;
  --sync-avatar-color-2: rgb(203, 75, 22) !important;
  --sync-avatar-color-3: rgb(181, 137, 0) !important;
  --sync-avatar-color-4: rgb(133, 153, 0) !important;
  --sync-avatar-color-5: rgb(42, 161, 152) !important;
  --sync-avatar-color-6: rgb(38, 139, 210) !important;
  --sync-avatar-color-7: rgb(108, 113, 196) !important;
  --sync-avatar-color-8: rgb(211, 54, 130) !important;
  --tab-background-active: rgb(0, 43, 54) !important;
  --tab-container-background: rgb(0, 43, 54) !important;
  --tab-divider-color: rgb(7, 54, 66) !important;
  --tab-outline-color: rgb(7, 54, 66) !important;
  --tab-switcher-background: rgb(0, 43, 54) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 43, 54), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --tab-text-color: rgb(88, 110, 117) !important;
  --tab-text-color-active: rgb(101, 123, 131) !important;
  --tab-text-color-focused: rgb(101, 123, 131) !important;
  --tab-text-color-focused-active: rgb(101, 123, 131) !important;
  --tab-text-color-focused-active-current: rgb(131, 148, 150) !important;
  --tab-text-color-focused-highlighted: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --table-add-button-border-color: rgb(7, 54, 66) !important;
  --table-border-color: rgb(7, 54, 66) !important;
  --table-drag-handle-background-active: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --table-drag-handle-color: rgb(88, 110, 117) !important;
  --table-drag-handle-color-active: rgb(0, 43, 54) !important;
  --table-header-border-color: rgb(7, 54, 66) !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --table-selection-border-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --tag-background: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.2) !important;
  --tag-background-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.2) !important;
  --tag-border-color: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15) !important;
  --tag-border-color-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15) !important;
  --tag-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --tag-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --tag-padding-x: 0.25em !important;
  --tertiary: hsl(calc(17.56906deg - 5), 84.46667%, 56.91176%) !important;
  --text-accent: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --text-accent-hover: hsl(calc(17.56906deg - 5), 84.46667%, 56.91176%) !important;
  --text-error: rgb(220, 50, 47) !important;
  --text-faint: rgb(88, 110, 117) !important;
  --text-highlight-bg: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --text-highlight-bg-active: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --text-muted: rgb(101, 123, 131) !important;
  --text-normal: rgb(131, 148, 150) !important;
  --text-on-accent: rgb(0, 43, 54) !important;
  --text-selection: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.33) !important;
  --text-success: rgb(133, 153, 0) !important;
  --text-title: rgb(42, 161, 152) !important;
  --text-warning: rgb(203, 75, 22) !important;
  --textHighlight: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --titlebar-background: rgb(0, 43, 54) !important;
  --titlebar-background-focused: rgb(7, 54, 66) !important;
  --titlebar-border-color: rgb(7, 54, 66) !important;
  --titlebar-text-color: rgb(101, 123, 131) !important;
  --titlebar-text-color-focused: rgb(131, 148, 150) !important;
  --vault-profile-color: rgb(131, 148, 150) !important;
  --vault-profile-color-hover: rgb(131, 148, 150) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 43, 54);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 43, 54);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(0, 43, 54);
  border-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(7, 54, 66);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(203, 75, 22, 0.2);
  color: rgb(203, 75, 22);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 43, 54);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(7, 54, 66);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 43, 54);
  border-left-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 43, 54);
  color: rgb(131, 148, 150);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(203, 75, 22);
  color: rgb(0, 43, 54);
  outline: rgb(0, 43, 54) none 0px;
  text-decoration-color: rgb(0, 43, 54);
}

html[saved-theme="dark"] body del {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(203, 75, 22);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(203, 75, 22);
  border-color: rgb(203, 75, 22);
}

html[saved-theme="dark"] body p {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration-color: rgb(101, 123, 131);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(108, 113, 196);
  outline: rgb(108, 113, 196) none 0px;
  text-decoration-color: rgb(108, 113, 196);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(38, 139, 210);
  outline: rgb(38, 139, 210) none 0px;
  text-decoration-color: rgb(38, 139, 210);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(220, 50, 47);
  outline: rgb(220, 50, 47) none 0px;
  text-decoration: rgb(220, 50, 47);
  text-decoration-color: rgb(220, 50, 47);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body dt {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(88, 110, 117);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body table {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
  font-weight: 700;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(38, 139, 210);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 139, 210);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 139, 210);
  border-left-color: rgb(38, 139, 210);
  border-right-color: rgb(38, 139, 210);
  border-top-color: rgb(38, 139, 210);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(42, 161, 152);
  border-left-color: rgb(42, 161, 152);
  border-right-color: rgb(42, 161, 152);
  border-top-color: rgb(42, 161, 152);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(203, 75, 22);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(203, 75, 22);
  border-top-color: rgb(203, 75, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(38, 139, 210);
  border-left-color: rgb(38, 139, 210);
  border-right-color: rgb(38, 139, 210);
  border-top-color: rgb(38, 139, 210);
  color: rgb(38, 139, 210);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(38, 139, 210);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 42, 161, 152;
  background-color: rgba(42, 161, 152, 0.1);
  border-bottom-color: rgba(42, 161, 152, 0.25);
  border-left-color: rgba(42, 161, 152, 0.25);
  border-right-color: rgba(42, 161, 152, 0.25);
  border-top-color: rgba(42, 161, 152, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 108, 113, 196;
  background-color: rgba(108, 113, 196, 0.1);
  border-bottom-color: rgba(108, 113, 196, 0.25);
  border-left-color: rgba(108, 113, 196, 0.25);
  border-right-color: rgba(108, 113, 196, 0.25);
  border-top-color: rgba(108, 113, 196, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 203, 75, 22;
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.25);
  border-left-color: rgba(203, 75, 22, 0.25);
  border-right-color: rgba(203, 75, 22, 0.25);
  border-top-color: rgba(203, 75, 22, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 133, 153, 0;
  background-color: rgba(133, 153, 0, 0.1);
  border-bottom-color: rgba(133, 153, 0, 0.25);
  border-left-color: rgba(133, 153, 0, 0.25);
  border-right-color: rgba(133, 153, 0, 0.25);
  border-top-color: rgba(133, 153, 0, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 42, 161, 152;
  background-color: rgba(42, 161, 152, 0.1);
  border-bottom-color: rgba(42, 161, 152, 0.25);
  border-left-color: rgba(42, 161, 152, 0.25);
  border-right-color: rgba(42, 161, 152, 0.25);
  border-top-color: rgba(42, 161, 152, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 203, 75, 22;
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.25);
  border-left-color: rgba(203, 75, 22, 0.25);
  border-right-color: rgba(203, 75, 22, 0.25);
  border-top-color: rgba(203, 75, 22, 0.25);
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
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 43, 54);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(203, 75, 22, 0.2);
  border-bottom-color: rgba(203, 75, 22, 0.15);
  border-left-color: rgba(203, 75, 22, 0.15);
  border-right-color: rgba(203, 75, 22, 0.15);
  border-top-color: rgba(203, 75, 22, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(203, 75, 22);
}

html[saved-theme="dark"] body h1 {
  color: rgb(42, 161, 152);
}

html[saved-theme="dark"] body h2 {
  color: rgb(42, 161, 152);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(42, 161, 152);
}

html[saved-theme="dark"] body h3 {
  color: rgb(42, 161, 152);
}

html[saved-theme="dark"] body h4 {
  color: rgb(42, 161, 152);
}

html[saved-theme="dark"] body h5 {
  color: rgb(42, 161, 152);
}

html[saved-theme="dark"] body h6 {
  color: rgb(42, 161, 152);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 38, 139, 210;
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(101, 123, 131);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(131, 148, 150);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(101, 123, 131);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(101, 123, 131);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(101, 123, 131);
  stroke: rgb(101, 123, 131);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(88, 110, 117);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 43, 54);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body abbr {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body sub {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body summary {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body sup {
  color: rgb(131, 148, 150);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(203, 75, 22, 0.2);
  border-bottom-color: rgba(203, 75, 22, 0.15);
  border-left-color: rgba(203, 75, 22, 0.15);
  border-right-color: rgba(203, 75, 22, 0.15);
  border-top-color: rgba(203, 75, 22, 0.15);
  color: rgb(203, 75, 22);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 17.5690607735deg !important;
  --accent-l: 44.1176470588% !important;
  --accent-s: 80.4444444444% !important;
  --active-bg: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --background-modifier-active-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --background-modifier-border: rgb(238, 232, 213) !important;
  --background-modifier-border-focus: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --background-modifier-border-hover: rgb(238, 232, 213) !important;
  --background-modifier-error: rgb(220, 50, 47) !important;
  --background-modifier-error-hover: rgb(220, 50, 47) !important;
  --background-modifier-error-rgb: 220, 50, 47 !important;
  --background-modifier-form-field: rgb(238, 232, 213) !important;
  --background-modifier-form-field-hover: rgb(238, 232, 213) !important;
  --background-modifier-success: rgb(133, 153, 0) !important;
  --background-modifier-success-rgb: 133, 153, 0 !important;
  --background-primary: rgb(253, 246, 227) !important;
  --background-primary-alt: rgb(238, 232, 213) !important;
  --background-secondary: rgb(253, 246, 227) !important;
  --background-secondary-alt: rgb(238, 232, 213) !important;
  --base0: rgb(131, 148, 150) !important;
  --base00: rgb(101, 123, 131) !important;
  --base01: rgb(88, 110, 117) !important;
  --base02: rgb(7, 54, 66) !important;
  --base03: rgb(0, 43, 54) !important;
  --base1: rgb(147, 161, 161) !important;
  --base2: rgb(238, 232, 213) !important;
  --base3: rgb(253, 246, 227) !important;
  --bases-cards-background: rgb(253, 246, 227) !important;
  --bases-cards-cover-background: rgb(238, 232, 213) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(238, 232, 213) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(238, 232, 213) !important;
  --bases-embed-border-color: rgb(238, 232, 213) !important;
  --bases-group-heading-property-color: rgb(131, 148, 150) !important;
  --bases-table-border-color: rgb(238, 232, 213) !important;
  --bases-table-cell-background-active: rgb(253, 246, 227) !important;
  --bases-table-cell-background-disabled: rgb(238, 232, 213) !important;
  --bases-table-cell-background-selected: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --bases-table-group-background: rgb(238, 232, 213) !important;
  --bases-table-header-background: rgb(253, 246, 227) !important;
  --bases-table-header-color: rgb(131, 148, 150) !important;
  --bases-table-summary-background: rgb(253, 246, 227) !important;
  --blockquote-border-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --blur-background: color-mix(in srgb, rgb(253, 246, 227) 65%, transparent) linear-gradient(rgb(253, 246, 227), color-mix(in srgb, rgb(253, 246, 227) 65%, transparent)) !important;
  --callout-bug: 220, 50, 47;
  --callout-default: 38, 139, 210;
  --callout-error: 220, 50, 47;
  --callout-example: 108, 113, 196;
  --callout-fail: 220, 50, 47;
  --callout-important: 42, 161, 152;
  --callout-info: 38, 139, 210;
  --callout-question: 203, 75, 22;
  --callout-success: 133, 153, 0;
  --callout-summary: 42, 161, 152;
  --callout-tip: 42, 161, 152;
  --callout-todo: 38, 139, 210;
  --callout-warning: 203, 75, 22;
  --canvas-background: rgb(253, 246, 227) !important;
  --canvas-card-label-color: rgb(147, 161, 161) !important;
  --canvas-color-1: 220, 50, 47 !important;
  --canvas-color-2: 203, 75, 22 !important;
  --canvas-color-3: 181, 137, 0 !important;
  --canvas-color-4: 133, 153, 0 !important;
  --canvas-color-5: 42, 161, 152 !important;
  --canvas-color-6: 108, 113, 196 !important;
  --canvas-dot-pattern: rgb(238, 232, 213) !important;
  --caret-color: rgb(101, 123, 131) !important;
  --checkbox-border-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --checkbox-border-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --checkbox-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --checkbox-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --checkbox-marker-color: rgb(253, 246, 227) !important;
  --checklist-done-color: rgb(131, 148, 150) !important;
  --code-background: rgb(238, 232, 213) !important;
  --code-border-color: rgb(238, 232, 213) !important;
  --code-comment: rgb(42, 161, 152) !important;
  --code-function: rgb(38, 139, 210) !important;
  --code-important: rgb(203, 75, 22) !important;
  --code-keyword: rgb(133, 153, 0) !important;
  --code-normal: rgb(101, 123, 131) !important;
  --code-operator: rgb(101, 123, 131) !important;
  --code-property: rgb(101, 123, 131) !important;
  --code-punctuation: rgb(101, 123, 131) !important;
  --code-string: rgb(42, 161, 152) !important;
  --code-tag: rgb(220, 50, 47) !important;
  --code-value: rgb(211, 54, 130) !important;
  --collapse-icon-color: rgb(147, 161, 161) !important;
  --collapse-icon-color-collapsed: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --color-accent: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --color-accent-1: hsl(calc(17.56906deg - 1), 81.24889%, 47.42647%) !important;
  --color-accent-2: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --color-accent-hsl: 17.5690607735deg, 80.4444444444%, 44.1176470588% !important;
  --color-base-00: rgb(238, 232, 213) !important;
  --color-base-10: rgb(238, 232, 213) !important;
  --color-base-30: rgb(238, 232, 213) !important;
  --color-base-35: rgb(238, 232, 213) !important;
  --color-base-40: rgb(101, 123, 131) !important;
  --color-base-70: #5a5a5a !important;
  --color-blue: rgb(38, 139, 210) !important;
  --color-blue-rgb: 38, 139, 210 !important;
  --color-cyan: rgb(42, 161, 152) !important;
  --color-cyan-rgb: 42, 161, 152 !important;
  --color-green: rgb(133, 153, 0) !important;
  --color-green-rgb: 133, 153, 0 !important;
  --color-orange: rgb(203, 75, 22) !important;
  --color-orange-rgb: 203, 75, 22 !important;
  --color-pink: rgb(211, 54, 130) !important;
  --color-pink-rgb: 211, 54, 130 !important;
  --color-purple: rgb(108, 113, 196) !important;
  --color-purple-rgb: 108, 113, 196 !important;
  --color-red: rgb(220, 50, 47) !important;
  --color-red-rgb: 220, 50, 47 !important;
  --color-yellow: rgb(181, 137, 0) !important;
  --color-yellow-rgb: 181, 137, 0 !important;
  --dark: rgb(101, 123, 131) !important;
  --darkgray: rgb(101, 123, 131) !important;
  --divider-color: rgb(238, 232, 213) !important;
  --divider-color-hover: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --dropdown-background: rgb(238, 232, 213) !important;
  --dropdown-background-hover: rgb(253, 246, 227) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(238, 232, 213), inset 0 0 0 1px rgb(238, 232, 213) !important;
  --embed-border-start: 2px solid hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --file-header-background: rgb(253, 246, 227) !important;
  --file-header-background-focused: rgb(253, 246, 227) !important;
  --flair-background: rgb(238, 232, 213) !important;
  --flair-color: rgb(101, 123, 131) !important;
  --footnote-divider-color: rgb(238, 232, 213) !important;
  --footnote-id-color: rgb(131, 148, 150) !important;
  --footnote-id-color-no-occurrences: rgb(147, 161, 161) !important;
  --graph-line: rgb(238, 232, 213) !important;
  --graph-node: rgb(131, 148, 150) !important;
  --graph-node-attachment: rgb(181, 137, 0) !important;
  --graph-node-focused: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --graph-node-tag: rgb(133, 153, 0) !important;
  --graph-node-unresolved: rgb(147, 161, 161) !important;
  --graph-text: rgb(101, 123, 131) !important;
  --gray: rgb(131, 148, 150) !important;
  --h1-color: rgb(42, 161, 152) !important;
  --h2-color: rgb(42, 161, 152) !important;
  --h3-color: rgb(42, 161, 152) !important;
  --h4-color: rgb(42, 161, 152) !important;
  --h5-color: rgb(42, 161, 152) !important;
  --h6-color: rgb(42, 161, 152) !important;
  --heading-formatting: rgb(42, 161, 152) !important;
  --highlight: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --hr-color: rgb(238, 232, 213) !important;
  --icon-color: rgb(131, 148, 150) !important;
  --icon-color-active: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --icon-color-focused: rgb(101, 123, 131) !important;
  --icon-color-hover: rgb(131, 148, 150) !important;
  --inline-title-color: rgb(42, 161, 152) !important;
  --input-date-separator: rgb(147, 161, 161) !important;
  --input-placeholder-color: rgb(147, 161, 161) !important;
  --interactive-accent: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --interactive-accent-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --interactive-accent-hsl: 17.5690607735deg, 80.4444444444%, 44.1176470588% !important;
  --interactive-hover: rgb(253, 246, 227) !important;
  --interactive-normal: rgb(238, 232, 213) !important;
  --light: rgb(253, 246, 227) !important;
  --lightgray: rgb(253, 246, 227) !important;
  --link-color: rgb(38, 139, 210) !important;
  --link-color-hover: rgb(38, 139, 210) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(108, 113, 196) !important;
  --link-external-color-hover: rgb(108, 113, 196) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(220, 50, 47) !important;
  --link-unresolved-color-hover: rgb(220, 50, 47) !important;
  --link-unresolved-decoration-color: rgb(220, 50, 47) !important;
  --list-marker-color: rgb(147, 161, 161) !important;
  --list-marker-color-collapsed: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --list-marker-color-hover: rgb(131, 148, 150) !important;
  --menu-background: rgb(253, 246, 227) !important;
  --menu-border-color: rgb(238, 232, 213) !important;
  --metadata-border-color: rgb(238, 232, 213) !important;
  --metadata-divider-color: rgb(238, 232, 213) !important;
  --metadata-input-text-color: rgb(101, 123, 131) !important;
  --metadata-label-text-color: rgb(131, 148, 150) !important;
  --metadata-label-text-color-hover: rgb(131, 148, 150) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(238, 232, 213) !important;
  --modal-background: rgb(253, 246, 227) !important;
  --modal-border-color: rgb(101, 123, 131) !important;
  --nav-collapse-icon-color: rgb(147, 161, 161) !important;
  --nav-collapse-icon-color-collapsed: rgb(147, 161, 161) !important;
  --nav-heading-color: rgb(101, 123, 131) !important;
  --nav-heading-color-collapsed: rgb(147, 161, 161) !important;
  --nav-heading-color-collapsed-hover: rgb(131, 148, 150) !important;
  --nav-heading-color-hover: rgb(101, 123, 131) !important;
  --nav-item-background-active: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --nav-item-background-selected: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15) !important;
  --nav-item-color: rgb(131, 148, 150) !important;
  --nav-item-color-active: rgb(101, 123, 131) !important;
  --nav-item-color-highlighted: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --nav-item-color-hover: rgb(101, 123, 131) !important;
  --nav-item-color-selected: rgb(101, 123, 131) !important;
  --nav-tag-color: rgb(147, 161, 161) !important;
  --nav-tag-color-active: rgb(131, 148, 150) !important;
  --nav-tag-color-hover: rgb(131, 148, 150) !important;
  --pdf-background: rgb(253, 246, 227) !important;
  --pdf-page-background: rgb(253, 246, 227) !important;
  --pdf-sidebar-background: rgb(253, 246, 227) !important;
  --pill-border-color: rgb(238, 232, 213) !important;
  --pill-border-color-hover: rgb(238, 232, 213) !important;
  --pill-color: rgb(131, 148, 150) !important;
  --pill-color-hover: rgb(101, 123, 131) !important;
  --pill-color-remove: rgb(147, 161, 161) !important;
  --pill-color-remove-hover: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --prompt-background: rgb(253, 246, 227) !important;
  --prompt-border-color: rgb(101, 123, 131) !important;
  --raised-background: color-mix(in srgb, rgb(253, 246, 227) 65%, transparent) linear-gradient(rgb(253, 246, 227), color-mix(in srgb, rgb(253, 246, 227) 65%, transparent)) !important;
  --ribbon-background: rgb(253, 246, 227) !important;
  --ribbon-background-collapsed: rgb(253, 246, 227) !important;
  --search-clear-button-color: rgb(131, 148, 150) !important;
  --search-icon-color: rgb(131, 148, 150) !important;
  --search-result-background: rgb(253, 246, 227) !important;
  --secondary: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --setting-group-heading-color: rgb(101, 123, 131) !important;
  --setting-items-background: rgb(238, 232, 213) !important;
  --setting-items-border-color: rgb(238, 232, 213) !important;
  --slider-thumb-border-color: rgb(238, 232, 213) !important;
  --slider-track-background: rgb(238, 232, 213) !important;
  --status-bar-background: rgb(253, 246, 227) !important;
  --status-bar-border-color: rgb(238, 232, 213) !important;
  --status-bar-text-color: rgb(131, 148, 150) !important;
  --suggestion-background: rgb(253, 246, 227) !important;
  --sync-avatar-color-1: rgb(220, 50, 47) !important;
  --sync-avatar-color-2: rgb(203, 75, 22) !important;
  --sync-avatar-color-3: rgb(181, 137, 0) !important;
  --sync-avatar-color-4: rgb(133, 153, 0) !important;
  --sync-avatar-color-5: rgb(42, 161, 152) !important;
  --sync-avatar-color-6: rgb(38, 139, 210) !important;
  --sync-avatar-color-7: rgb(108, 113, 196) !important;
  --sync-avatar-color-8: rgb(211, 54, 130) !important;
  --tab-background-active: rgb(253, 246, 227) !important;
  --tab-container-background: rgb(253, 246, 227) !important;
  --tab-divider-color: rgb(238, 232, 213) !important;
  --tab-outline-color: rgb(238, 232, 213) !important;
  --tab-switcher-background: rgb(253, 246, 227) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(253, 246, 227), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --tab-text-color: rgb(147, 161, 161) !important;
  --tab-text-color-active: rgb(131, 148, 150) !important;
  --tab-text-color-focused: rgb(131, 148, 150) !important;
  --tab-text-color-focused-active: rgb(131, 148, 150) !important;
  --tab-text-color-focused-active-current: rgb(101, 123, 131) !important;
  --tab-text-color-focused-highlighted: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --table-add-button-border-color: rgb(238, 232, 213) !important;
  --table-border-color: rgb(238, 232, 213) !important;
  --table-drag-handle-background-active: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --table-drag-handle-color: rgb(147, 161, 161) !important;
  --table-drag-handle-color-active: rgb(253, 246, 227) !important;
  --table-header-border-color: rgb(238, 232, 213) !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --table-selection-border-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --tag-background: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1) !important;
  --tag-background-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.2) !important;
  --tag-border-color: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15) !important;
  --tag-border-color-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15) !important;
  --tag-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --tag-color-hover: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --tag-padding-x: 0.25em !important;
  --tertiary: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --text-accent: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --text-accent-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%) !important;
  --text-error: rgb(220, 50, 47) !important;
  --text-faint: rgb(147, 161, 161) !important;
  --text-highlight-bg: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --text-highlight-bg-active: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --text-muted: rgb(131, 148, 150) !important;
  --text-normal: rgb(101, 123, 131) !important;
  --text-on-accent: rgb(253, 246, 227) !important;
  --text-selection: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.2) !important;
  --text-success: rgb(133, 153, 0) !important;
  --text-title: rgb(42, 161, 152) !important;
  --text-warning: rgb(203, 75, 22) !important;
  --textHighlight: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%) !important;
  --titlebar-background: rgb(253, 246, 227) !important;
  --titlebar-background-focused: rgb(238, 232, 213) !important;
  --titlebar-border-color: rgb(238, 232, 213) !important;
  --titlebar-text-color: rgb(131, 148, 150) !important;
  --titlebar-text-color-focused: rgb(101, 123, 131) !important;
  --vault-profile-color: rgb(101, 123, 131) !important;
  --vault-profile-color-hover: rgb(101, 123, 131) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 246, 227);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 246, 227);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 246, 227);
  border-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(238, 232, 213);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(203, 75, 22, 0.1);
  color: rgb(203, 75, 22);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 246, 227);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(238, 232, 213);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 246, 227);
  border-left-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 246, 227);
  color: rgb(101, 123, 131);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(203, 75, 22);
  color: rgb(253, 246, 227);
  outline: rgb(253, 246, 227) none 0px;
  text-decoration-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body del {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(203, 75, 22);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(203, 75, 22);
  border-color: rgb(203, 75, 22);
}

html[saved-theme="light"] body p {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration-color: rgb(131, 148, 150);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(108, 113, 196);
  outline: rgb(108, 113, 196) none 0px;
  text-decoration-color: rgb(108, 113, 196);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(38, 139, 210);
  outline: rgb(38, 139, 210) none 0px;
  text-decoration-color: rgb(38, 139, 210);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(220, 50, 47);
  outline: rgb(220, 50, 47) none 0px;
  text-decoration: rgb(220, 50, 47);
  text-decoration-color: rgb(220, 50, 47);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body dt {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body ol > li {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body ul > li {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(147, 161, 161);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body table {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
  font-weight: 700;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(38, 139, 210);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 139, 210);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 139, 210);
  border-left-color: rgb(38, 139, 210);
  border-right-color: rgb(38, 139, 210);
  border-top-color: rgb(38, 139, 210);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body figcaption {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(42, 161, 152);
  border-left-color: rgb(42, 161, 152);
  border-right-color: rgb(42, 161, 152);
  border-top-color: rgb(42, 161, 152);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(203, 75, 22);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(203, 75, 22);
  border-top-color: rgb(203, 75, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(38, 139, 210);
  border-left-color: rgb(38, 139, 210);
  border-right-color: rgb(38, 139, 210);
  border-top-color: rgb(38, 139, 210);
  color: rgb(38, 139, 210);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(38, 139, 210);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 42, 161, 152;
  background-color: rgba(42, 161, 152, 0.1);
  border-bottom-color: rgba(42, 161, 152, 0.25);
  border-left-color: rgba(42, 161, 152, 0.25);
  border-right-color: rgba(42, 161, 152, 0.25);
  border-top-color: rgba(42, 161, 152, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 108, 113, 196;
  background-color: rgba(108, 113, 196, 0.1);
  border-bottom-color: rgba(108, 113, 196, 0.25);
  border-left-color: rgba(108, 113, 196, 0.25);
  border-right-color: rgba(108, 113, 196, 0.25);
  border-top-color: rgba(108, 113, 196, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 203, 75, 22;
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.25);
  border-left-color: rgba(203, 75, 22, 0.25);
  border-right-color: rgba(203, 75, 22, 0.25);
  border-top-color: rgba(203, 75, 22, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 133, 153, 0;
  background-color: rgba(133, 153, 0, 0.1);
  border-bottom-color: rgba(133, 153, 0, 0.25);
  border-left-color: rgba(133, 153, 0, 0.25);
  border-right-color: rgba(133, 153, 0, 0.25);
  border-top-color: rgba(133, 153, 0, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 42, 161, 152;
  background-color: rgba(42, 161, 152, 0.1);
  border-bottom-color: rgba(42, 161, 152, 0.25);
  border-left-color: rgba(42, 161, 152, 0.25);
  border-right-color: rgba(42, 161, 152, 0.25);
  border-top-color: rgba(42, 161, 152, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 203, 75, 22;
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.25);
  border-left-color: rgba(203, 75, 22, 0.25);
  border-right-color: rgba(203, 75, 22, 0.25);
  border-top-color: rgba(203, 75, 22, 0.25);
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
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 246, 227);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.15);
  border-left-color: rgba(203, 75, 22, 0.15);
  border-right-color: rgba(203, 75, 22, 0.15);
  border-top-color: rgba(203, 75, 22, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(203, 75, 22);
}

html[saved-theme="light"] body h1 {
  color: rgb(42, 161, 152);
}

html[saved-theme="light"] body h2 {
  color: rgb(42, 161, 152);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(42, 161, 152);
}

html[saved-theme="light"] body h3 {
  color: rgb(42, 161, 152);
}

html[saved-theme="light"] body h4 {
  color: rgb(42, 161, 152);
}

html[saved-theme="light"] body h5 {
  color: rgb(42, 161, 152);
}

html[saved-theme="light"] body h6 {
  color: rgb(42, 161, 152);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 38, 139, 210;
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(131, 148, 150);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(101, 123, 131);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(131, 148, 150);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(131, 148, 150);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(131, 148, 150);
  stroke: rgb(131, 148, 150);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(147, 161, 161);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body abbr {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

html[saved-theme="light"] body sub {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body summary {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body sup {
  color: rgb(101, 123, 131);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.15);
  border-left-color: rgba(203, 75, 22, 0.15);
  border-right-color: rgba(203, 75, 22, 0.15);
  border-top-color: rgba(203, 75, 22, 0.15);
  color: rgb(203, 75, 22);
}`,
  },
};
