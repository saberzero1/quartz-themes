import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "royal-velvet",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["fira-sans", "fira-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: transparent !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-box-shadow: hsl(235, 15%, 19%) !important;
  --background-modifier-cover: hsl(235, 15%, 9%) !important;
  --background-modifier-error: hsla(10, 100%, 75.1%, 0.9) !important;
  --background-modifier-error-hover: hsl(10, 100%, 75.1%) !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: hsla(330, 100%, 75.1%, 0.1) !important;
  --background-modifier-form-field-highlighted: hsla(330, 100%, 75.1%, 0.3) !important;
  --background-modifier-form-field-hover: hsla(330, 100%, 75.1%, 0.1) !important;
  --background-modifier-success: hsla(115, 100%, 75.1%, 0.2) !important;
  --background-primary: hsl(235, 15%, 15%) !important;
  --background-primary-alt: hsl(235, 15%, 13%) !important;
  --background-secondary: hsl(235, 15%, 13%) !important;
  --background-secondary-alt: hsl(235, 15%, 9%) !important;
  --bases-cards-background: hsl(235, 15%, 15%) !important;
  --bases-cards-cover-background: hsl(235, 15%, 13%) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-group-heading-property-color: hsla(60, 30%, 96%, 0.6) !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: hsl(235, 15%, 15%) !important;
  --bases-table-cell-background-disabled: hsl(235, 15%, 13%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px transparent !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(330, 100%, 75.1%) !important;
  --bases-table-group-background: hsl(235, 15%, 13%) !important;
  --bases-table-header-background: hsl(235, 15%, 15%) !important;
  --bases-table-header-color: hsla(60, 30%, 96%, 0.6) !important;
  --bases-table-summary-background: hsl(235, 15%, 15%) !important;
  --blockquote-border: hsl(10, 100%, 75.1%) !important;
  --blockquote-border-color: none !important;
  --blue: hsl(170, 100%, 75.1%) !important;
  --blue-600: hsla(170, 100%, 75.1%, 0.6) !important;
  --blue-hue: 170 !important;
  --blue-secondary-tuple: 170, 100%, 90% !important;
  --blue-tuple: 170, 100%, 75.1% !important;
  --blur-background: color-mix(in srgb, hsl(235, 15%, 13%) 65%, transparent) linear-gradient(hsl(235, 15%, 13%), color-mix(in srgb, hsl(235, 15%, 13%) 65%, transparent)) !important;
  --bodyFont: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: hsl(235, 15%, 15%) !important;
  --canvas-card-label-color: hsla(60, 30%, 96%, 0.6) !important;
  --caret-color: hsl(60, 30%, 96%) !important;
  --checkbox-border-color: hsla(60, 30%, 96%, 0.6) !important;
  --checkbox-border-color-hover: hsla(60, 30%, 96%, 0.6) !important;
  --checkbox-color: hsl(330, 100%, 75.1%) !important;
  --checkbox-color-hover: hsla(60, 30%, 96%, 0.6) !important;
  --checkbox-marker-color: hsl(235, 15%, 15%) !important;
  --checklist-done-color: hsla(60, 30%, 96%, 0.6) !important;
  --code-background: hsl(235, 15%, 13%) !important;
  --code-border-color: transparent !important;
  --code-comment: hsla(60, 30%, 96%, 0.6) !important;
  --code-normal: hsl(285, 100%, 75.1%) !important;
  --code-punctuation: hsla(60, 30%, 96%, 0.6) !important;
  --code-size: 1em !important;
  --codeFont: "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsla(60, 30%, 96%, 0.6) !important;
  --collapse-icon-color-collapsed: hsl(330, 100%, 75.1%) !important;
  --dark: hsl(60, 30%, 96%) !important;
  --darkgray: hsl(60, 30%, 96%) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(330, 100%, 75.1%) !important;
  --dropdown-background: hsl(235, 15%, 13%) !important;
  --dropdown-background-hover: hsl(235, 15%, 9%) !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid hsl(330, 100%, 75.1%) !important;
  --file-header-background: hsl(235, 15%, 15%) !important;
  --file-header-background-focused: hsl(235, 15%, 15%) !important;
  --file-header-font: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(235, 15%, 13%) !important;
  --flair-color: hsl(60, 30%, 96%) !important;
  --font-interface: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Fira Sans", sans-serif !important;
  --font-mermaid: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Fira Code", monospace !important;
  --font-print: "Fira Sans", sans-serif, Arial' !important;
  --font-text: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Fira Sans", sans-serif !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: hsla(60, 30%, 96%, 0.6) !important;
  --footnote-id-color-no-occurrences: hsla(60, 30%, 96%, 0.6) !important;
  --gradientDegree: 135deg !important;
  --graph-node: hsla(60, 30%, 96%, 0.6) !important;
  --graph-node-focused: hsl(330, 100%, 75.1%) !important;
  --graph-node-unresolved: hsla(60, 30%, 96%, 0.6) !important;
  --graph-text: hsl(60, 30%, 96%) !important;
  --gray: hsla(60, 30%, 96%, 0.6) !important;
  --green: hsl(115, 100%, 75.1%) !important;
  --green-200: hsla(115, 100%, 75.1%, 0.2) !important;
  --green-hue: 115 !important;
  --green-secondary-tuple: 115, 100%, 90% !important;
  --green-tuple: 115, 100%, 75.1% !important;
  --greenSecondary: hsl(115, 100%, 90%) !important;
  --headerFont: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsla(60, 30%, 96%, 0.6) !important;
  --highlight: hsla(60, 100%, 75.1%, 0.1) !important;
  --hr-color: hsl(35, 100%, 75.1%) !important;
  --icon-color: hsla(60, 30%, 96%, 0.6) !important;
  --icon-color-active: hsl(330, 100%, 75.1%) !important;
  --icon-color-focused: hsl(60, 30%, 96%) !important;
  --icon-color-hover: hsla(60, 30%, 96%, 0.6) !important;
  --indentation-guide: hsl(235, 15%, 30%) !important;
  --indentation-guide-opacity: 10% !important;
  --input-date-separator: hsla(60, 30%, 96%, 0.6) !important;
  --input-placeholder-color: hsla(60, 30%, 96%, 0.6) !important;
  --input-shadow: none !important;
  --interactive-accent: hsl(330, 100%, 75.1%) !important;
  --interactive-accent-hover: hsl(35, 100%, 75.1%) !important;
  --interactive-hover: hsl(235, 15%, 9%) !important;
  --interactive-normal: hsl(235, 15%, 13%) !important;
  --interactive-success: hsl(115, 100%, 75.1%) !important;
  --layer-0: hsl(235, 15%, 9%) !important;
  --layer-1: hsl(235, 15%, 13%) !important;
  --layer-2: hsl(235, 15%, 15%) !important;
  --layer-3: hsl(235, 15%, 19%) !important;
  --layer-4: hsl(235, 15%, 30%) !important;
  --layer-hue-sat: 235, 15% !important;
  --light: hsl(235, 15%, 15%) !important;
  --lightgray: hsl(235, 15%, 13%) !important;
  --link-color: hsl(35, 100%, 75.1%) !important;
  --link-color-hover: hsl(35, 100%, 90%) !important;
  --link-external-color: hsl(115, 100%, 75.1%) !important;
  --link-external-color-hover: hsl(115, 100%, 90%) !important;
  --link-unresolved-color: hsla(60, 100%, 75.1%, 0.7) !important;
  --link-unresolved-hover: hsl(60, 100%, 75.1%) !important;
  --list-marker-color: hsla(60, 30%, 96%, 0.6) !important;
  --list-marker-color-collapsed: hsl(330, 100%, 75.1%) !important;
  --list-marker-color-hover: hsla(60, 30%, 96%, 0.6) !important;
  --menu-background: hsl(235, 15%, 13%) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-font: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(60, 30%, 96%) !important;
  --metadata-label-font: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsla(60, 30%, 96%, 0.6) !important;
  --metadata-label-text-color-hover: hsla(60, 30%, 96%, 0.6) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --modal-background: hsl(235, 15%, 15%) !important;
  --modal-border-color: transparent !important;
  --nav-collapse-icon-color: hsla(60, 30%, 96%, 0.6) !important;
  --nav-collapse-icon-color-collapsed: hsla(60, 30%, 96%, 0.6) !important;
  --nav-heading-color: hsl(60, 30%, 96%) !important;
  --nav-heading-color-collapsed: hsla(60, 30%, 96%, 0.6) !important;
  --nav-heading-color-collapsed-hover: hsla(60, 30%, 96%, 0.6) !important;
  --nav-heading-color-hover: hsl(60, 30%, 96%) !important;
  --nav-item-color: hsla(60, 30%, 96%, 0.6) !important;
  --nav-item-color-active: hsl(60, 30%, 96%) !important;
  --nav-item-color-highlighted: hsl(330, 100%, 75.1%) !important;
  --nav-item-color-hover: hsl(60, 30%, 96%) !important;
  --nav-item-color-selected: hsl(60, 30%, 96%) !important;
  --nav-tag-color: hsla(60, 30%, 96%, 0.6) !important;
  --nav-tag-color-active: hsla(60, 30%, 96%, 0.6) !important;
  --nav-tag-color-hover: hsla(60, 30%, 96%, 0.6) !important;
  --on-layer: hsl(60, 30%, 96%) !important;
  --on-layer-400: hsla(60, 30%, 96%, 0.4) !important;
  --on-layer-600: hsla(60, 30%, 96%, 0.6) !important;
  --on-layer-tuple: 60, 30%, 96% !important;
  --orange: hsl(35, 100%, 75.1%) !important;
  --orange-100: hsla(35, 100%, 75.1%, 0.1) !important;
  --orange-hue: 35 !important;
  --orange-secondary-tuple: 35, 100%, 90% !important;
  --orange-tuple: 35, 100%, 75.1% !important;
  --orangeSecondary: hsl(35, 100%, 90%) !important;
  --pdf-background: hsl(235, 15%, 15%) !important;
  --pdf-page-background: hsl(235, 15%, 15%) !important;
  --pdf-shadow: 0 0 0 1px transparent !important;
  --pdf-sidebar-background: hsl(235, 15%, 15%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent !important;
  --pill-border-color: transparent !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: hsla(60, 30%, 96%, 0.6) !important;
  --pill-color-hover: hsl(60, 30%, 96%) !important;
  --pill-color-remove: hsla(60, 30%, 96%, 0.6) !important;
  --pill-color-remove-hover: hsl(330, 100%, 75.1%) !important;
  --pink: hsl(330, 100%, 75.1%) !important;
  --pink-100: hsla(330, 100%, 75.1%, 0.1) !important;
  --pink-300: hsla(330, 100%, 75.1%, 0.3) !important;
  --pink-400: hsla(330, 100%, 75.1%, 0.4) !important;
  --pink-hue: 330 !important;
  --pink-secondary-tuple: 330, 100%, 90% !important;
  --pink-tuple: 330, 100%, 75.1% !important;
  --pinkSecondary: hsl(330, 100%, 90%) !important;
  --primary-lit: 75.1% !important;
  --primary-sat: 100% !important;
  --prompt-background: hsl(235, 15%, 15%) !important;
  --prompt-border-color: transparent !important;
  --purple: hsl(250, 100%, 75.1%) !important;
  --purple-200: hsla(250, 100%, 75.1%, 0.2) !important;
  --purple-hue: 250 !important;
  --purple-pink: hsl(285, 100%, 75.1%) !important;
  --purple-pink-hue: 285 !important;
  --purple-pink-secondary-tuple: 285, 100%, 90% !important;
  --purple-pink-tuple: 285, 100%, 75.1% !important;
  --purple-secondary-tuple: 250, 100%, 90% !important;
  --purple-tuple: 250, 100%, 75.1% !important;
  --raised-background: color-mix(in srgb, hsl(235, 15%, 13%) 65%, transparent) linear-gradient(hsl(235, 15%, 13%), color-mix(in srgb, hsl(235, 15%, 13%) 65%, transparent)) !important;
  --red: hsl(10, 100%, 75.1%) !important;
  --red-900: hsla(10, 100%, 75.1%, 0.9) !important;
  --red-hue: 10 !important;
  --red-secondary-tuple: 10, 100%, 90% !important;
  --red-tuple: 10, 100%, 75.1% !important;
  --ribbon-background: hsl(235, 15%, 9%) !important;
  --ribbon-background-collapsed: hsl(235, 15%, 9%) !important;
  --scrollbar-active-thumb-bg: hsla(330, 100%, 75.1%, 0.3) !important;
  --scrollbar-bg: hsl(235, 15%, 15%) !important;
  --scrollbar-thumb-bg: hsla(330, 100%, 75.1%, 0.1) !important;
  --search-clear-button-color: hsla(60, 30%, 96%, 0.6) !important;
  --search-icon-color: hsla(60, 30%, 96%, 0.6) !important;
  --search-result-background: hsl(235, 15%, 15%) !important;
  --secondary: hsl(330, 100%, 75.1%) !important;
  --secondary-lit: 90% !important;
  --secondary-sat: 100% !important;
  --setting-group-heading-color: hsl(60, 30%, 96%) !important;
  --setting-items-background: hsl(235, 15%, 13%) !important;
  --setting-items-border-color: transparent !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: hsl(235, 15%, 13%) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: hsla(60, 30%, 96%, 0.6) !important;
  --suggestion-background: hsl(235, 15%, 15%) !important;
  --tab-background-active: hsl(235, 15%, 15%) !important;
  --tab-container-background: hsl(235, 15%, 13%) !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: hsl(235, 15%, 13%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(235, 15%, 13%), transparent) !important;
  --tab-text-color: hsla(60, 30%, 96%, 0.6) !important;
  --tab-text-color-active: hsla(60, 30%, 96%, 0.6) !important;
  --tab-text-color-focused: hsla(60, 30%, 96%, 0.6) !important;
  --tab-text-color-focused-active: hsla(60, 30%, 96%, 0.6) !important;
  --tab-text-color-focused-active-current: hsl(60, 30%, 96%) !important;
  --tab-text-color-focused-highlighted: hsl(330, 100%, 75.1%) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: hsl(330, 100%, 75.1%) !important;
  --table-drag-handle-color: hsla(60, 30%, 96%, 0.6) !important;
  --table-drag-handle-color-active: hsl(235, 15%, 15%) !important;
  --table-header-border-color: transparent !important;
  --table-header-color: hsl(235, 15%, 15%) !important;
  --table-selection-border-color: hsl(330, 100%, 75.1%) !important;
  --tag-color: hsl(330, 100%, 75.1%) !important;
  --tag-color-hover: hsl(330, 100%, 75.1%) !important;
  --tertiary: hsl(330, 100%, 90%) !important;
  --text-accent: hsl(330, 100%, 75.1%) !important;
  --text-accent-hover: hsl(330, 100%, 90%) !important;
  --text-error: hsl(10, 100%, 75.1%) !important;
  --text-faint: hsla(60, 30%, 96%, 0.6) !important;
  --text-highlight-bg: hsla(60, 100%, 75.1%, 0.1) !important;
  --text-highlight-bg-active: hsla(35, 100%, 75.1%, 0.1) !important;
  --text-muted: hsla(60, 30%, 96%, 0.6) !important;
  --text-normal: hsl(60, 30%, 96%) !important;
  --text-on-accent: hsl(235, 15%, 15%) !important;
  --text-selection: hsla(250, 100%, 75.1%, 0.2) !important;
  --textHighlight: hsla(60, 100%, 75.1%, 0.1) !important;
  --titleFont: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(235, 15%, 13%) !important;
  --titlebar-background-focused: hsl(235, 15%, 9%) !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: hsla(60, 30%, 96%, 0.6) !important;
  --titlebar-text-color-focused: hsl(60, 30%, 96%) !important;
  --vault-profile-color: hsl(60, 30%, 96%) !important;
  --vault-profile-color-hover: hsl(60, 30%, 96%) !important;
  --yellow: hsl(60, 100%, 75.1%) !important;
  --yellow-100: hsla(60, 100%, 75.1%, 0.1) !important;
  --yellow-700: hsla(60, 100%, 75.1%, 0.7) !important;
  --yellow-hue: 60 !important;
  --yellow-secondary-tuple: 60, 100%, 90% !important;
  --yellow-tuple: 60, 100%, 75.1% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 29, 38);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(33, 33, 44);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(28, 29, 38);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 44);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(28, 29, 38);
  border-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 29, 38);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 29, 38);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(33, 33, 44);
  color: rgb(248, 248, 242);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 128, 192);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 192) none 0px;
  text-decoration-color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(128, 255, 234);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 255, 234) none 0px;
  text-decoration-color: rgb(128, 255, 234);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(128, 255, 234);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 255, 234) none 0px;
  text-decoration-color: rgb(128, 255, 234);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 128, 192);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 192) none 0px;
  text-decoration-color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 255, 128, 0.1);
  color: rgb(255, 255, 128);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(255, 255, 128) none 0px;
  text-decoration-color: rgb(255, 255, 128);
}

html[saved-theme="dark"] body del {
  color: rgba(248, 248, 242, 0.4);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 242, 0.4) none 0px;
  text-decoration-color: rgba(248, 248, 242, 0.4);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgba(248, 248, 242, 0.6);
  font-weight: 700;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 128, 192);
  border-color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body p {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 242, 0.6) none 0px;
  text-decoration-color: rgba(248, 248, 242, 0.6);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(139, 255, 128);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(139, 255, 128) none 0px;
  text-decoration-color: rgb(139, 255, 128);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 202, 128);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 202, 128) none 0px;
  text-decoration-color: rgb(255, 202, 128);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(255, 255, 128, 0.7);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(255, 255, 128, 0.7) none 0px;
  text-decoration: underline rgba(255, 255, 128, 0.7);
  text-decoration-color: rgba(255, 255, 128, 0.7);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body dt {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(255, 128, 192, 0.4);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(28, 29, 38);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 239.578px;
  margin-right: 239.578px;
  width: 182.844px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(28, 29, 38);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-width: 0px;
  border-left-color: rgb(248, 248, 242);
  border-left-width: 0px;
  border-right-color: rgb(248, 248, 242);
  border-right-width: 0px;
  border-top-color: rgb(248, 248, 242);
  border-top-width: 0px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(33, 33, 44);
  font-weight: 700;
  padding-bottom: 6px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(149, 128, 255);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(149, 128, 255);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(248, 248, 242);
  border-radius: 4px;
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(255, 128, 192);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 128, 192);
  border-left-color: rgb(255, 128, 192);
  border-right-color: rgb(255, 128, 192);
  border-top-color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
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
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgb(28, 29, 38);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 128, 192);
}

html[saved-theme="dark"] body h1 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(248, 248, 242, 0.6);
  border-top-width: 0px;
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(248, 248, 242, 0.6);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(248, 248, 242, 0.6);
  stroke: rgba(248, 248, 242, 0.6);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(149, 128, 255);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(255, 128, 192);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 20, 26);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgb(223, 128, 255);
  border-left-color: rgb(223, 128, 255);
  border-right-color: rgb(223, 128, 255);
  border-top-color: rgb(223, 128, 255);
  color: rgb(223, 128, 255);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body sub {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body summary {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body sup {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(255, 128, 192);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: transparent !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-box-shadow: hsl(235, 15%, 83%) !important;
  --background-modifier-cover: hsl(235, 15%, 89%) !important;
  --background-modifier-error: hsla(0, 100%, 43%, 0.9) !important;
  --background-modifier-error-hover: hsl(0, 100%, 43%) !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: hsla(330, 100%, 43%, 0.1) !important;
  --background-modifier-form-field-highlighted: hsla(330, 100%, 43%, 0.3) !important;
  --background-modifier-form-field-hover: hsla(330, 100%, 43%, 0.1) !important;
  --background-modifier-success: hsla(105, 100%, 43%, 0.2) !important;
  --background-primary: hsl(235, 15%, 96%) !important;
  --background-primary-alt: hsl(235, 15%, 99%) !important;
  --background-secondary: hsl(235, 15%, 99%) !important;
  --background-secondary-alt: hsl(235, 15%, 89%) !important;
  --bases-cards-background: hsl(235, 15%, 96%) !important;
  --bases-cards-cover-background: hsl(235, 15%, 99%) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-group-heading-property-color: hsla(234, 14%, 15%, 0.6) !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: hsl(235, 15%, 96%) !important;
  --bases-table-cell-background-disabled: hsl(235, 15%, 99%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px transparent !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(330, 100%, 43%) !important;
  --bases-table-group-background: hsl(235, 15%, 99%) !important;
  --bases-table-header-background: hsl(235, 15%, 96%) !important;
  --bases-table-header-color: hsla(234, 14%, 15%, 0.6) !important;
  --bases-table-summary-background: hsl(235, 15%, 96%) !important;
  --blockquote-border: hsl(0, 100%, 43%) !important;
  --blockquote-border-color: none !important;
  --blue: hsl(200, 100%, 43%) !important;
  --blue-600: hsla(200, 100%, 43%, 0.6) !important;
  --blue-hue: 200 !important;
  --blue-secondary-tuple: 200, 80%, 50% !important;
  --blue-tuple: 200, 100%, 43% !important;
  --blur-background: color-mix(in srgb, hsl(235, 15%, 96%) 65%, transparent) linear-gradient(hsl(235, 15%, 96%), color-mix(in srgb, hsl(235, 15%, 96%) 65%, transparent)) !important;
  --bodyFont: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: hsl(235, 15%, 96%) !important;
  --canvas-card-label-color: hsla(234, 14%, 15%, 0.6) !important;
  --caret-color: hsl(234, 14%, 15%) !important;
  --checkbox-border-color: hsla(234, 14%, 15%, 0.6) !important;
  --checkbox-border-color-hover: hsla(234, 14%, 15%, 0.6) !important;
  --checkbox-color: hsl(330, 100%, 43%) !important;
  --checkbox-color-hover: hsla(234, 14%, 15%, 0.6) !important;
  --checkbox-marker-color: hsl(235, 15%, 96%) !important;
  --checklist-done-color: hsla(234, 14%, 15%, 0.6) !important;
  --code-background: hsl(235, 15%, 99%) !important;
  --code-border-color: transparent !important;
  --code-comment: hsla(234, 14%, 15%, 0.6) !important;
  --code-normal: hsl(310, 100%, 43%) !important;
  --code-punctuation: hsla(234, 14%, 15%, 0.6) !important;
  --code-size: 1em !important;
  --codeFont: "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsla(234, 14%, 15%, 0.6) !important;
  --collapse-icon-color-collapsed: hsl(330, 100%, 43%) !important;
  --dark: hsl(234, 14%, 15%) !important;
  --darkgray: hsl(234, 14%, 15%) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(330, 100%, 43%) !important;
  --dropdown-background: hsl(235, 15%, 99%) !important;
  --dropdown-background-hover: hsl(235, 15%, 89%) !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid hsl(330, 100%, 43%) !important;
  --file-header-background: hsl(235, 15%, 96%) !important;
  --file-header-background-focused: hsl(235, 15%, 96%) !important;
  --file-header-font: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(235, 15%, 99%) !important;
  --flair-color: hsl(234, 14%, 15%) !important;
  --font-interface: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Fira Sans", sans-serif !important;
  --font-mermaid: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Fira Code", monospace !important;
  --font-print: "Fira Sans", sans-serif, Arial' !important;
  --font-text: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Fira Sans", sans-serif !important;
  --footnote-divider-color: transparent !important;
  --footnote-id-color: hsla(234, 14%, 15%, 0.6) !important;
  --footnote-id-color-no-occurrences: hsla(234, 14%, 15%, 0.6) !important;
  --gradientDegree: 135deg !important;
  --graph-node: hsla(234, 14%, 15%, 0.6) !important;
  --graph-node-focused: hsl(330, 100%, 43%) !important;
  --graph-node-unresolved: hsla(234, 14%, 15%, 0.6) !important;
  --graph-text: hsl(234, 14%, 15%) !important;
  --gray: hsla(234, 14%, 15%, 0.6) !important;
  --green: hsl(105, 100%, 43%) !important;
  --green-200: hsla(105, 100%, 43%, 0.2) !important;
  --green-hue: 105 !important;
  --green-secondary-tuple: 105, 80%, 50% !important;
  --green-tuple: 105, 100%, 43% !important;
  --greenSecondary: hsl(105, 80%, 50%) !important;
  --headerFont: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsla(234, 14%, 15%, 0.6) !important;
  --highlight: hsla(40, 100%, 43%, 0.1) !important;
  --hr-color: hsl(30, 100%, 43%) !important;
  --icon-color: hsla(234, 14%, 15%, 0.6) !important;
  --icon-color-active: hsl(330, 100%, 43%) !important;
  --icon-color-focused: hsl(234, 14%, 15%) !important;
  --icon-color-hover: hsla(234, 14%, 15%, 0.6) !important;
  --indentation-guide: hsl(235, 15%, 80%) !important;
  --indentation-guide-opacity: 10% !important;
  --input-date-separator: hsla(234, 14%, 15%, 0.6) !important;
  --input-placeholder-color: hsla(234, 14%, 15%, 0.6) !important;
  --input-shadow: none !important;
  --interactive-accent: hsl(330, 100%, 43%) !important;
  --interactive-accent-hover: hsl(30, 100%, 43%) !important;
  --interactive-hover: hsl(235, 15%, 89%) !important;
  --interactive-normal: hsl(235, 15%, 99%) !important;
  --interactive-success: hsl(105, 100%, 43%) !important;
  --layer-0: hsl(235, 15%, 89%) !important;
  --layer-1: hsl(235, 15%, 99%) !important;
  --layer-2: hsl(235, 15%, 96%) !important;
  --layer-3: hsl(235, 15%, 83%) !important;
  --layer-4: hsl(235, 15%, 80%) !important;
  --layer-hue-sat: 235, 15% !important;
  --light: hsl(235, 15%, 96%) !important;
  --lightgray: hsl(235, 15%, 99%) !important;
  --link-color: hsl(30, 100%, 43%) !important;
  --link-color-hover: hsl(30, 80%, 50%) !important;
  --link-external-color: hsl(105, 100%, 43%) !important;
  --link-external-color-hover: hsl(105, 80%, 50%) !important;
  --link-unresolved-color: hsla(40, 100%, 43%, 0.7) !important;
  --link-unresolved-hover: hsl(40, 100%, 43%) !important;
  --list-marker-color: hsla(234, 14%, 15%, 0.6) !important;
  --list-marker-color-collapsed: hsl(330, 100%, 43%) !important;
  --list-marker-color-hover: hsla(234, 14%, 15%, 0.6) !important;
  --menu-background: hsl(235, 15%, 99%) !important;
  --menu-border-color: transparent !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --metadata-input-font: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(234, 14%, 15%) !important;
  --metadata-label-font: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsla(234, 14%, 15%, 0.6) !important;
  --metadata-label-text-color-hover: hsla(234, 14%, 15%, 0.6) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --modal-background: hsl(235, 15%, 96%) !important;
  --modal-border-color: transparent !important;
  --nav-collapse-icon-color: hsla(234, 14%, 15%, 0.6) !important;
  --nav-collapse-icon-color-collapsed: hsla(234, 14%, 15%, 0.6) !important;
  --nav-heading-color: hsl(234, 14%, 15%) !important;
  --nav-heading-color-collapsed: hsla(234, 14%, 15%, 0.6) !important;
  --nav-heading-color-collapsed-hover: hsla(234, 14%, 15%, 0.6) !important;
  --nav-heading-color-hover: hsl(234, 14%, 15%) !important;
  --nav-item-color: hsla(234, 14%, 15%, 0.6) !important;
  --nav-item-color-active: hsl(234, 14%, 15%) !important;
  --nav-item-color-highlighted: hsl(330, 100%, 43%) !important;
  --nav-item-color-hover: hsl(234, 14%, 15%) !important;
  --nav-item-color-selected: hsl(234, 14%, 15%) !important;
  --nav-tag-color: hsla(234, 14%, 15%, 0.6) !important;
  --nav-tag-color-active: hsla(234, 14%, 15%, 0.6) !important;
  --nav-tag-color-hover: hsla(234, 14%, 15%, 0.6) !important;
  --on-layer: hsl(234, 14%, 15%) !important;
  --on-layer-400: hsla(234, 14%, 15%, 0.4) !important;
  --on-layer-600: hsla(234, 14%, 15%, 0.6) !important;
  --on-layer-tuple: 234, 14%, 15% !important;
  --orange: hsl(30, 100%, 43%) !important;
  --orange-100: hsla(30, 100%, 43%, 0.1) !important;
  --orange-hue: 30 !important;
  --orange-secondary-tuple: 30, 80%, 50% !important;
  --orange-tuple: 30, 100%, 43% !important;
  --orangeSecondary: hsl(30, 80%, 50%) !important;
  --pdf-background: hsl(235, 15%, 96%) !important;
  --pdf-page-background: hsl(235, 15%, 96%) !important;
  --pdf-sidebar-background: hsl(235, 15%, 96%) !important;
  --pill-border-color: transparent !important;
  --pill-border-color-hover: transparent !important;
  --pill-color: hsla(234, 14%, 15%, 0.6) !important;
  --pill-color-hover: hsl(234, 14%, 15%) !important;
  --pill-color-remove: hsla(234, 14%, 15%, 0.6) !important;
  --pill-color-remove-hover: hsl(330, 100%, 43%) !important;
  --pink: hsl(330, 100%, 43%) !important;
  --pink-100: hsla(330, 100%, 43%, 0.1) !important;
  --pink-300: hsla(330, 100%, 43%, 0.3) !important;
  --pink-400: hsla(330, 100%, 43%, 0.4) !important;
  --pink-hue: 330 !important;
  --pink-secondary-tuple: 330, 80%, 50% !important;
  --pink-tuple: 330, 100%, 43% !important;
  --pinkSecondary: hsl(330, 80%, 50%) !important;
  --primary-lit: 43% !important;
  --primary-sat: 100% !important;
  --prompt-background: hsl(235, 15%, 96%) !important;
  --prompt-border-color: transparent !important;
  --purple: hsl(300, 100%, 43%) !important;
  --purple-200: hsla(300, 100%, 43%, 0.2) !important;
  --purple-hue: 300 !important;
  --purple-pink: hsl(310, 100%, 43%) !important;
  --purple-pink-hue: 310 !important;
  --purple-pink-secondary-tuple: 310, 80%, 50% !important;
  --purple-pink-tuple: 310, 100%, 43% !important;
  --purple-secondary-tuple: 300, 80%, 50% !important;
  --purple-tuple: 300, 100%, 43% !important;
  --raised-background: color-mix(in srgb, hsl(235, 15%, 96%) 65%, transparent) linear-gradient(hsl(235, 15%, 96%), color-mix(in srgb, hsl(235, 15%, 96%) 65%, transparent)) !important;
  --red: hsl(0, 100%, 43%) !important;
  --red-900: hsla(0, 100%, 43%, 0.9) !important;
  --red-hue: 0 !important;
  --red-secondary-tuple: 0, 80%, 50% !important;
  --red-tuple: 0, 100%, 43% !important;
  --ribbon-background: hsl(235, 15%, 89%) !important;
  --ribbon-background-collapsed: hsl(235, 15%, 89%) !important;
  --scrollbar-active-thumb-bg: hsla(330, 100%, 43%, 0.3) !important;
  --scrollbar-bg: hsl(235, 15%, 96%) !important;
  --scrollbar-thumb-bg: hsla(330, 100%, 43%, 0.1) !important;
  --search-clear-button-color: hsla(234, 14%, 15%, 0.6) !important;
  --search-icon-color: hsla(234, 14%, 15%, 0.6) !important;
  --search-result-background: hsl(235, 15%, 96%) !important;
  --secondary: hsl(330, 100%, 43%) !important;
  --secondary-lit: 50% !important;
  --secondary-sat: 80% !important;
  --setting-group-heading-color: hsl(234, 14%, 15%) !important;
  --setting-items-background: hsl(235, 15%, 99%) !important;
  --setting-items-border-color: transparent !important;
  --slider-thumb-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: hsl(235, 15%, 99%) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: hsla(234, 14%, 15%, 0.6) !important;
  --suggestion-background: hsl(235, 15%, 96%) !important;
  --tab-background-active: hsl(235, 15%, 96%) !important;
  --tab-container-background: hsl(235, 15%, 99%) !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: hsl(235, 15%, 99%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(235, 15%, 99%), transparent) !important;
  --tab-text-color: hsla(234, 14%, 15%, 0.6) !important;
  --tab-text-color-active: hsla(234, 14%, 15%, 0.6) !important;
  --tab-text-color-focused: hsla(234, 14%, 15%, 0.6) !important;
  --tab-text-color-focused-active: hsla(234, 14%, 15%, 0.6) !important;
  --tab-text-color-focused-active-current: hsl(234, 14%, 15%) !important;
  --tab-text-color-focused-highlighted: hsl(330, 100%, 43%) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: hsl(330, 100%, 43%) !important;
  --table-drag-handle-color: hsla(234, 14%, 15%, 0.6) !important;
  --table-drag-handle-color-active: hsl(235, 15%, 96%) !important;
  --table-header-border-color: transparent !important;
  --table-header-color: hsl(235, 15%, 96%) !important;
  --table-selection-border-color: hsl(330, 100%, 43%) !important;
  --tag-color: hsl(330, 100%, 43%) !important;
  --tag-color-hover: hsl(330, 100%, 43%) !important;
  --tertiary: hsl(330, 80%, 50%) !important;
  --text-accent: hsl(330, 100%, 43%) !important;
  --text-accent-hover: hsl(330, 80%, 50%) !important;
  --text-error: hsl(0, 100%, 43%) !important;
  --text-faint: hsla(234, 14%, 15%, 0.6) !important;
  --text-highlight-bg: hsla(40, 100%, 43%, 0.1) !important;
  --text-highlight-bg-active: hsla(30, 100%, 43%, 0.1) !important;
  --text-muted: hsla(234, 14%, 15%, 0.6) !important;
  --text-normal: hsl(234, 14%, 15%) !important;
  --text-on-accent: hsl(235, 15%, 96%) !important;
  --text-selection: hsla(300, 100%, 43%, 0.2) !important;
  --textHighlight: hsla(40, 100%, 43%, 0.1) !important;
  --titleFont: "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(235, 15%, 99%) !important;
  --titlebar-background-focused: hsl(235, 15%, 89%) !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: hsla(234, 14%, 15%, 0.6) !important;
  --titlebar-text-color-focused: hsl(234, 14%, 15%) !important;
  --vault-profile-color: hsl(234, 14%, 15%) !important;
  --vault-profile-color-hover: hsl(234, 14%, 15%) !important;
  --yellow: hsl(40, 100%, 43%) !important;
  --yellow-100: hsla(40, 100%, 43%, 0.1) !important;
  --yellow-700: hsla(40, 100%, 43%, 0.7) !important;
  --yellow-hue: 40 !important;
  --yellow-secondary-tuple: 40, 80%, 50% !important;
  --yellow-tuple: 40, 100%, 43% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(252, 252, 253);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(243, 244, 246);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(252, 252, 253);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
  color: rgb(243, 244, 246);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(243, 244, 246);
  border-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(219, 0, 110);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 253);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(252, 252, 253);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(243, 244, 246);
  color: rgb(33, 34, 44);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(219, 0, 110);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 0, 110) none 0px;
  text-decoration-color: rgb(219, 0, 110);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 146, 219);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 146, 219) none 0px;
  text-decoration-color: rgb(0, 146, 219);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 146, 219);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 146, 219) none 0px;
  text-decoration-color: rgb(0, 146, 219);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(219, 0, 110);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 0, 110) none 0px;
  text-decoration-color: rgb(219, 0, 110);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(219, 146, 0, 0.1);
  color: rgb(219, 146, 0);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(219, 146, 0) none 0px;
  text-decoration-color: rgb(219, 146, 0);
}

html[saved-theme="light"] body del {
  color: rgba(33, 34, 44, 0.4);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(33, 34, 44, 0.4) none 0px;
  text-decoration-color: rgba(33, 34, 44, 0.4);
}

html[saved-theme="light"] body h1.article-title {
  color: rgba(33, 34, 44, 0.6);
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(219, 0, 110);
  border-color: rgb(219, 0, 110);
}

html[saved-theme="light"] body p {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(33, 34, 44, 0.6) none 0px;
  text-decoration-color: rgba(33, 34, 44, 0.6);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(55, 219, 0);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 219, 0) none 0px;
  text-decoration-color: rgb(55, 219, 0);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(219, 110, 0);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 110, 0) none 0px;
  text-decoration-color: rgb(219, 110, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(219, 146, 0, 0.7);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(219, 146, 0, 0.7) none 0px;
  text-decoration: underline rgba(219, 146, 0, 0.7);
  text-decoration-color: rgba(219, 146, 0, 0.7);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body dt {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ol > li {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ul > li {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(219, 0, 110, 0.4);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(252, 252, 253);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 239.578px;
  margin-right: 239.578px;
  width: 182.844px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(252, 252, 253);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 34, 44);
  border-left-width: 0px;
  border-right-color: rgb(33, 34, 44);
  border-right-width: 0px;
  border-top-color: rgb(33, 34, 44);
  border-top-width: 0px;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(243, 244, 246);
  font-weight: 700;
  padding-bottom: 6px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(219, 0, 219);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(219, 0, 219);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(219, 0, 219);
  border-left-color: rgb(219, 0, 219);
  border-right-color: rgb(219, 0, 219);
  border-top-color: rgb(219, 0, 219);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body figcaption {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(33, 34, 44);
  border-radius: 4px;
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(219, 0, 110);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(219, 0, 110);
  border-left-color: rgb(219, 0, 110);
  border-right-color: rgb(219, 0, 110);
  border-top-color: rgb(219, 0, 110);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
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
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(33, 34, 44) none 0px;
  text-decoration-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgb(252, 252, 253);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(219, 0, 110);
}

html[saved-theme="light"] body h1 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(33, 34, 44);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(33, 34, 44, 0.6);
  border-top-width: 0px;
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(33, 34, 44, 0.6);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(33, 34, 44, 0.6);
  stroke: rgba(33, 34, 44, 0.6);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(219, 0, 219);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(219, 0, 110);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(33, 34, 44);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(223, 223, 231);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgb(219, 0, 183);
  border-left-color: rgb(219, 0, 183);
  border-right-color: rgb(219, 0, 183);
  border-top-color: rgb(219, 0, 183);
  color: rgb(219, 0, 183);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

html[saved-theme="light"] body sub {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body summary {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body sup {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(219, 0, 110);
}`,
  },
};
