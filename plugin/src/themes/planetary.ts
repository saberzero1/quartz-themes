import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "planetary",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 4 !important;
  --accent-l: 64% !important;
  --accent-s: 89% !important;
  --background-code: #232120 !important;
  --background-code-preview: #232120 !important;
  --background-modifier-active-hover: hsla(4, 89%, 64%, 0.15) !important;
  --background-modifier-border: #232120 !important;
  --background-modifier-border-focus: #807874 !important;
  --background-modifier-border-hover: #ffebd1 !important;
  --background-modifier-error: #f85c51 !important;
  --background-modifier-error-hover: #f85c51 !important;
  --background-modifier-error-rgb: 248, 92, 81 !important;
  --background-modifier-form-field: #121110 !important;
  --background-modifier-form-field-hover: #121110 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: #23d18c !important;
  --background-modifier-success-rgb: 35, 209, 140 !important;
  --background-preview: #121110 !important;
  --background-primary: #121110 !important;
  --background-primary-alt: #232120 !important;
  --background-quick: #232120 !important;
  --background-secondary: #181716 !important;
  --background-secondary-alt: #181716 !important;
  --background-tag: #000000 !important;
  --bases-cards-background: #121110 !important;
  --bases-cards-cover-background: #232120 !important;
  --bases-cards-shadow: 0 0 0 1px #232120 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #ffebd1 !important;
  --bases-embed-border-color: #232120 !important;
  --bases-group-heading-property-color: #807874 !important;
  --bases-table-border-color: #232120 !important;
  --bases-table-cell-background-active: #121110 !important;
  --bases-table-cell-background-disabled: #232120 !important;
  --bases-table-cell-background-selected: hsla(4, 89%, 64%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #807874 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(4, 89%, 64%) !important;
  --bases-table-group-background: #232120 !important;
  --bases-table-header-background: #121110 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #807874 !important;
  --bases-table-summary-background: #121110 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: hsl(4, 89%, 64%) !important;
  --blur-background: color-mix(in srgb, #232120 65%, transparent) linear-gradient(#232120, color-mix(in srgb, #232120 65%, transparent)) !important;
  --bodyFont: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(4, 89%, 64%) !important;
  --bold-weight: 600 !important;
  --callout-bug: 248, 92, 81;
  --callout-default: 105, 175, 255;
  --callout-error: 248, 92, 81;
  --callout-example: 162, 155, 254;
  --callout-fail: 248, 92, 81;
  --callout-important: 10, 206, 203;
  --callout-info: 105, 175, 255;
  --callout-success: 35, 209, 140;
  --callout-summary: 10, 206, 203;
  --callout-tip: 10, 206, 203;
  --callout-todo: 105, 175, 255;
  --canvas-background: #121110 !important;
  --canvas-card-label-color: hsl(4, 89%, 64%) !important;
  --canvas-color-1: 248, 92, 81 !important;
  --canvas-color-4: 35, 209, 140 !important;
  --canvas-color-5: 10, 206, 203 !important;
  --canvas-color-6: 162, 155, 254 !important;
  --canvas-contrast-high: #ffebd1 !important;
  --canvas-contrast-low: #807874 !important;
  --canvas-contrast-medium: #989692 !important;
  --canvas-dot-pattern: #181716 !important;
  --canvas1: #121110 !important;
  --canvas2: #232120 !important;
  --canvas3: #181716 !important;
  --canvas4: #403938 !important;
  --caret-color: #ffebd1 !important;
  --checkbox-border-color: hsl(4, 89%, 64%) !important;
  --checkbox-border-color-hover: #807874 !important;
  --checkbox-color: hsl(4, 89%, 64%) !important;
  --checkbox-color-hover: hsl(4, 89%, 49%) !important;
  --checkbox-marker-color: #121110 !important;
  --checklist-done-color: #807874 !important;
  --code-background: #181716 !important;
  --code-border-color: #232120 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: hsl(4, 89%, 64%) !important;
  --code-normal: #989692 !important;
  --code-operator: #f85c51 !important;
  --code-property: #0acecb !important;
  --code-punctuation: #807874 !important;
  --code-string: #23d18c !important;
  --code-tag: #f85c51 !important;
  --code-value: #a29bfe !important;
  --codeFont: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(4, 89%, 64%) !important;
  --collapse-icon-color-collapsed: hsl(4, 89%, 64%) !important;
  --color-accent: hsl(4, 89%, 64%) !important;
  --color-accent-1: hsl(1, 90.78%, 73.6%) !important;
  --color-accent-2: hsl(4, 89%, 49%) !important;
  --color-accent-hsl: 4, 89%, 64% !important;
  --color-blue: #69afff !important;
  --color-blue-rgb: 105, 175, 255 !important;
  --color-cyan: #0acecb !important;
  --color-cyan-rgb: 10, 206, 203 !important;
  --color-green: #23d18c !important;
  --color-green-rgb: 35, 209, 140 !important;
  --color-head: hsl(4, 89%, 64%) !important;
  --color-purple: #a29bfe !important;
  --color-purple-rgb: 162, 155, 254 !important;
  --color-red: #f85c51 !important;
  --color-red-rgb: 248, 92, 81 !important;
  --dark: #ffebd1 !important;
  --darkgray: #ffebd1 !important;
  --divider-color: #232120 !important;
  --divider-color-hover: hsl(4, 89%, 64%) !important;
  --dropdown-background: #232120 !important;
  --dropdown-background-hover: #403938 !important;
  --embed-block-shadow-hover: 0 0 0 1px #232120,
	  inset 0 0 0 1px #232120 !important;
  --embed-border-left: 2px solid hsl(4, 89%, 64%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(4, 89%, 64%) !important;
  --file-header-background: #121110 !important;
  --file-header-background-focused: #121110 !important;
  --file-hr: #232120 !important;
  --file-margins: 32px !important;
  --flair-background: #232120 !important;
  --flair-color: #ffebd1 !important;
  --font-mermaid: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: IBM Plex Sans, sans-serif, Arial' !important;
  --font-text: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: IBM Plex Sans, sans-serif !important;
  --footnote-divider-color: #232120 !important;
  --footnote-id-color: #807874 !important;
  --footnote-id-color-no-occurrences: hsl(4, 89%, 64%) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: #ffebd1 !important;
  --graph-node: #807874 !important;
  --graph-node-focused: hsl(4, 89%, 64%) !important;
  --graph-node-tag: #23d18c !important;
  --graph-node-unresolved: hsl(4, 89%, 64%) !important;
  --graph-text: #ffebd1 !important;
  --gray: #807874 !important;
  --h1-color: hsl(4, 89%, 64%) !important;
  --h1-size: 2.00em !important;
  --h2-color: hsl(4, 85%, 62%) !important;
  --h2-size: 1.8em !important;
  --h2-weight: 600 !important;
  --h3-color: hsl(4, 81%, 60%) !important;
  --h3-size: 1.4em !important;
  --h3-weight: 600 !important;
  --h4-color: hsl(4, 77%, 58%) !important;
  --h4-size: 1.2em !important;
  --h4-weight: 600 !important;
  --h5-color: hsl(4, 73%, 56%) !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-color: hsl(4, 69%, 54%) !important;
  --headerFont: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(4, 89%, 64%) !important;
  --highlight: hsla(4, 89%, 64%, 0.2) !important;
  --hr-color: #232120 !important;
  --icon-color: #807874 !important;
  --icon-color-active: hsl(4, 89%, 64%) !important;
  --icon-color-focused: #ffebd1 !important;
  --icon-color-hover: #807874 !important;
  --inline-title-color: hsl(4, 89%, 64%) !important;
  --inline-title-size: 2.00em !important;
  --input-date-separator: hsl(4, 89%, 64%) !important;
  --input-placeholder-color: hsl(4, 89%, 64%) !important;
  --interactive-accent: hsl(4, 89%, 64%) !important;
  --interactive-accent-hover: hsl(4, 89%, 49%) !important;
  --interactive-accent-hsl: 4, 89%, 64% !important;
  --interactive-hover: #403938 !important;
  --interactive-normal: #232120 !important;
  --italic-color: #0acecb !important;
  --leaf-handle: #232120 !important;
  --light: #121110 !important;
  --lightgray: #181716 !important;
  --link-color: hsl(4, 89%, 64%) !important;
  --link-color-hover: hsl(4, 89%, 49%) !important;
  --link-external-color: hsl(4, 89%, 64%) !important;
  --link-external-color-hover: hsl(4, 89%, 49%) !important;
  --link-unresolved-color: hsl(4, 89%, 64%) !important;
  --link-unresolved-decoration-color: hsla(4, 89%, 64%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(4, 89%, 64%) !important;
  --list-marker-color-collapsed: hsl(4, 89%, 64%) !important;
  --list-marker-color-hover: #807874 !important;
  --menu-background: #181716 !important;
  --menu-border-color: #ffebd1 !important;
  --menu-selection: #232120 !important;
  --menu-selection-text: #ffebd1 !important;
  --metadata-border-color: #232120 !important;
  --metadata-divider-color: #232120 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-text-color: #ffebd1 !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-text-color: #807874 !important;
  --metadata-label-text-color-hover: #807874 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #807874 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #ffebd1 !important;
  --modal-background: #121110 !important;
  --modal-border-color: #807874 !important;
  --nav-collapse-icon-color: hsl(4, 89%, 64%) !important;
  --nav-collapse-icon-color-collapsed: hsl(4, 89%, 64%) !important;
  --nav-heading-color: #ffebd1 !important;
  --nav-heading-color-collapsed: hsl(4, 89%, 64%) !important;
  --nav-heading-color-collapsed-hover: #807874 !important;
  --nav-heading-color-hover: #ffebd1 !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(4, 89%, 64%, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #807874 !important;
  --nav-item-color-active: #ffebd1 !important;
  --nav-item-color-highlighted: hsl(4, 89%, 49%) !important;
  --nav-item-color-hover: #ffebd1 !important;
  --nav-item-color-selected: #ffebd1 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl(4, 89%, 64%) !important;
  --nav-tag-color-active: #807874 !important;
  --nav-tag-color-hover: #807874 !important;
  --pdf-background: #121110 !important;
  --pdf-page-background: #121110 !important;
  --pdf-shadow: 0 0 0 1px #232120 !important;
  --pdf-sidebar-background: #121110 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #232120 !important;
  --pill-border-color: #232120 !important;
  --pill-border-color-hover: #ffebd1 !important;
  --pill-color: #807874 !important;
  --pill-color-hover: #ffebd1 !important;
  --pill-color-remove: hsl(4, 89%, 64%) !important;
  --pill-color-remove-hover: hsl(4, 89%, 64%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #121110 !important;
  --prompt-border-color: #807874 !important;
  --raised-background: color-mix(in srgb, #232120 65%, transparent) linear-gradient(#232120, color-mix(in srgb, #232120 65%, transparent)) !important;
  --ribbon-background: #181716 !important;
  --ribbon-background-collapsed: #121110 !important;
  --scrollbar-bg: #232120 !important;
  --search-clear-button-color: #807874 !important;
  --search-icon-color: #807874 !important;
  --search-result-background: #121110 !important;
  --secondary: hsl(4, 89%, 64%) !important;
  --setting-group-heading-color: #ffebd1 !important;
  --setting-items-background: #232120 !important;
  --setting-items-border-color: #232120 !important;
  --slider-thumb-border-color: #ffebd1 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #232120 !important;
  --status-bar-background: #181716 !important;
  --status-bar-border-color: #232120 !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #807874 !important;
  --suggestion-background: #121110 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #f85c51 !important;
  --sync-avatar-color-4: #23d18c !important;
  --sync-avatar-color-5: #0acecb !important;
  --sync-avatar-color-6: #69afff !important;
  --sync-avatar-color-7: #a29bfe !important;
  --tab-background-active: #121110 !important;
  --tab-container-background: #181716 !important;
  --tab-divider-color: #232120 !important;
  --tab-outline-color: #232120 !important;
  --tab-radius: 8px 8px 0 0 !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #181716 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181716, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(4, 89%, 64%) !important;
  --tab-text-color: #807874 !important;
  --tab-text-color-active: #807874 !important;
  --tab-text-color-focused: #807874 !important;
  --tab-text-color-focused-active: #807874 !important;
  --tab-text-color-focused-active-current: #ffebd1 !important;
  --tab-text-color-focused-highlighted: hsl(4, 89%, 64%) !important;
  --table-add-button-border-color: #232120 !important;
  --table-border-color: #232120 !important;
  --table-drag-handle-background-active: hsl(4, 89%, 64%) !important;
  --table-drag-handle-color: hsl(4, 89%, 64%) !important;
  --table-drag-handle-color-active: #121110 !important;
  --table-header-background: #181716 !important;
  --table-header-background-hover: #181716 !important;
  --table-header-border-color: #232120 !important;
  --table-header-color: hsl(4, 89%, 64%) !important;
  --table-header-weight: 600 !important;
  --table-line: #807874 !important;
  --table-selection: hsla(4, 89%, 64%, 0.1) !important;
  --table-selection-border-color: hsl(4, 89%, 64%) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: hsla(4, 89%, 64%, 0.15) !important;
  --tag-background-hover: hsla(4, 89%, 64%, 0.2) !important;
  --tag-border-color: hsla(4, 89%, 64%, 0.15) !important;
  --tag-border-color-hover: hsla(4, 89%, 64%, 0.15) !important;
  --tag-color: hsl(4, 89%, 64%) !important;
  --tag-color-hover: hsl(4, 89%, 64%) !important;
  --tertiary: hsl(4, 89%, 49%) !important;
  --text-accent: hsl(4, 89%, 64%) !important;
  --text-accent-hover: hsl(4, 89%, 49%) !important;
  --text-error: #f85c51 !important;
  --text-faint: hsl(4, 89%, 64%) !important;
  --text-highlight-bg: hsla(4, 89%, 64%, 0.2) !important;
  --text-muted: #807874 !important;
  --text-normal: #ffebd1 !important;
  --text-on-accent: #121110 !important;
  --text-selection: #403938 !important;
  --text-success: #23d18c !important;
  --text-tag: #23d18c !important;
  --textHighlight: hsla(4, 89%, 64%, 0.2) !important;
  --titleFont: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #181716 !important;
  --titlebar-background-focused: #181716 !important;
  --titlebar-border-color: #232120 !important;
  --titlebar-text-color: #807874 !important;
  --titlebar-text-color-focused: #ffebd1 !important;
  --vault-name-color: #ffebd1 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #ffebd1 !important;
  --vault-profile-color-hover: #ffebd1 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 23, 22);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(18, 17, 16);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(35, 33, 32);
  color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 23, 22);
  border-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(35, 33, 32);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(245, 92, 81, 0.15);
  color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 23, 22);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(35, 33, 32);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 23, 22);
  border-left-color: rgb(35, 33, 32);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(18, 17, 16);
  color: rgb(255, 235, 209);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(10, 206, 203);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(10, 206, 203) none 0px;
  text-decoration-color: rgb(10, 206, 203);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(10, 206, 203);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(10, 206, 203) none 0px;
  text-decoration-color: rgb(10, 206, 203);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(245, 92, 81, 0.2);
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 235, 209) none 0px;
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 235, 209) none 0px;
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(245, 92, 81);
  border-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body p {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
  outline: rgb(128, 120, 116) none 0px;
  text-decoration-color: rgb(128, 120, 116);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgba(245, 92, 81, 0.3);
  text-decoration-color: rgba(245, 92, 81, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 190.469px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  border-top-width: 0px;
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  border-top-left-radius: 8px;
  color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(24, 23, 22);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(152, 150, 146);
  border-left-color: rgb(152, 150, 146);
  border-right-color: rgb(152, 150, 146);
  border-top-color: rgb(152, 150, 146);
  color: rgb(152, 150, 146);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(245, 92, 81);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(245, 92, 81);
  border-top-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(35, 33, 32);
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(245, 92, 81);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(245, 92, 81);
  border-top-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 10, 206, 203;
  background-color: rgba(10, 206, 203, 0.1);
  border-bottom-color: rgba(10, 206, 203, 0.25);
  border-left-color: rgba(10, 206, 203, 0.25);
  border-right-color: rgba(10, 206, 203, 0.25);
  border-top-color: rgba(10, 206, 203, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 248, 92, 81;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 248, 92, 81;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 162, 155, 254;
  background-color: rgba(162, 155, 254, 0.1);
  border-bottom-color: rgba(162, 155, 254, 0.25);
  border-left-color: rgba(162, 155, 254, 0.25);
  border-right-color: rgba(162, 155, 254, 0.25);
  border-top-color: rgba(162, 155, 254, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 248, 92, 81;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 105, 175, 255;
  background-color: rgba(105, 175, 255, 0.1);
  border-bottom-color: rgba(105, 175, 255, 0.25);
  border-left-color: rgba(105, 175, 255, 0.25);
  border-right-color: rgba(105, 175, 255, 0.25);
  border-top-color: rgba(105, 175, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 105, 175, 255;
  background-color: rgba(105, 175, 255, 0.1);
  border-bottom-color: rgba(105, 175, 255, 0.25);
  border-left-color: rgba(105, 175, 255, 0.25);
  border-right-color: rgba(105, 175, 255, 0.25);
  border-top-color: rgba(105, 175, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 35, 209, 140;
  background-color: rgba(35, 209, 140, 0.1);
  border-bottom-color: rgba(35, 209, 140, 0.25);
  border-left-color: rgba(35, 209, 140, 0.25);
  border-right-color: rgba(35, 209, 140, 0.25);
  border-top-color: rgba(35, 209, 140, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 10, 206, 203;
  background-color: rgba(10, 206, 203, 0.1);
  border-bottom-color: rgba(10, 206, 203, 0.25);
  border-left-color: rgba(10, 206, 203, 0.25);
  border-right-color: rgba(10, 206, 203, 0.25);
  border-top-color: rgba(10, 206, 203, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 105, 175, 255;
  background-color: rgba(105, 175, 255, 0.1);
  border-bottom-color: rgba(105, 175, 255, 0.25);
  border-left-color: rgba(105, 175, 255, 0.25);
  border-right-color: rgba(105, 175, 255, 0.25);
  border-top-color: rgba(105, 175, 255, 0.25);
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
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  color: rgb(255, 235, 209);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 235, 209) none 0px;
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 23, 22);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 92, 81, 0.15);
  border-bottom-color: rgba(245, 92, 81, 0.15);
  border-left-color: rgba(245, 92, 81, 0.15);
  border-right-color: rgba(245, 92, 81, 0.15);
  border-top-color: rgba(245, 92, 81, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body h1 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(240, 87, 76);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(236, 81, 70);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(230, 76, 65);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(225, 72, 61);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(219, 68, 57);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgba(105, 175, 255, 0.25);
  border-left-color: rgba(105, 175, 255, 0.25);
  border-right-color: rgba(105, 175, 255, 0.25);
  border-top-color: rgba(105, 175, 255, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 235, 209);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(128, 120, 116);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 235, 209);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(128, 120, 116);
  stroke: rgb(128, 120, 116);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(245, 92, 81);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  color: rgb(128, 120, 116);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 23, 22);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(152, 150, 146);
  border-left-color: rgb(152, 150, 146);
  border-right-color: rgb(152, 150, 146);
  border-top-color: rgb(152, 150, 146);
  color: rgb(152, 150, 146);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(245, 92, 81, 0.15);
  border-bottom-color: rgba(245, 92, 81, 0.15);
  border-left-color: rgba(245, 92, 81, 0.15);
  border-right-color: rgba(245, 92, 81, 0.15);
  border-top-color: rgba(245, 92, 81, 0.15);
  color: rgb(245, 92, 81);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 4 !important;
  --accent-l: 64% !important;
  --accent-s: 89% !important;
  --background-code: #f8f1eb !important;
  --background-code-preview: #f8f1eb !important;
  --background-modifier-active-hover: hsla(4, 89%, 64%, 0.15) !important;
  --background-modifier-border: #f8f1eb !important;
  --background-modifier-border-focus: #b29688 !important;
  --background-modifier-border-hover: #4a3827 !important;
  --background-modifier-error: #f85c51 !important;
  --background-modifier-error-hover: #f85c51 !important;
  --background-modifier-error-rgb: 248, 92, 81 !important;
  --background-modifier-form-field: #fffefd !important;
  --background-modifier-form-field-hover: #fffefd !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-modifier-success: #0cc77c !important;
  --background-modifier-success-rgb: 12, 199, 124 !important;
  --background-preview: #fffefd !important;
  --background-primary: #fffefd !important;
  --background-primary-alt: #f8f1eb !important;
  --background-quick: #f8f1eb !important;
  --background-secondary: #fdf9f5 !important;
  --background-secondary-alt: #fdf9f5 !important;
  --background-tag: #d7c3ba !important;
  --bases-cards-background: #fffefd !important;
  --bases-cards-cover-background: #f8f1eb !important;
  --bases-cards-shadow: 0 0 0 1px #f8f1eb !important;
  --bases-cards-shadow-hover: 0 0 0 1px #4a3827 !important;
  --bases-embed-border-color: #f8f1eb !important;
  --bases-group-heading-property-color: #b29688 !important;
  --bases-table-border-color: #f8f1eb !important;
  --bases-table-cell-background-active: #fffefd !important;
  --bases-table-cell-background-disabled: #f8f1eb !important;
  --bases-table-cell-background-selected: hsla(4, 89%, 64%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b29688 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(4, 89%, 64%) !important;
  --bases-table-group-background: #f8f1eb !important;
  --bases-table-header-background: #fffefd !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: #b29688 !important;
  --bases-table-summary-background: #fffefd !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: hsl(4, 89%, 64%) !important;
  --blur-background: color-mix(in srgb, #fffefd 65%, transparent) linear-gradient(#fffefd, color-mix(in srgb, #fffefd 65%, transparent)) !important;
  --bodyFont: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(4, 89%, 64%) !important;
  --bold-weight: 600 !important;
  --callout-bug: 248, 92, 81;
  --callout-default: 214, 233, 255;
  --callout-error: 248, 92, 81;
  --callout-example: 162, 155, 254;
  --callout-fail: 248, 92, 81;
  --callout-important: 14, 205, 201;
  --callout-info: 214, 233, 255;
  --callout-question: 233, 151, 63;
  --callout-success: 12, 199, 124;
  --callout-summary: 14, 205, 201;
  --callout-tip: 14, 205, 201;
  --callout-todo: 214, 233, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #fffefd !important;
  --canvas-card-label-color: hsl(4, 89%, 64%) !important;
  --canvas-color-1: 248, 92, 81 !important;
  --canvas-color-2: 233, 151, 63 !important;
  --canvas-color-3: 234, 207, 0 !important;
  --canvas-color-4: 12, 199, 124 !important;
  --canvas-color-5: 14, 205, 201 !important;
  --canvas-color-6: 162, 155, 254 !important;
  --canvas-contrast-high: #4a3827 !important;
  --canvas-contrast-low: #b29688 !important;
  --canvas-contrast-medium: #765c4f !important;
  --canvas-dot-pattern: #fdf9f5 !important;
  --canvas1: #fffefd !important;
  --canvas2: #f8f1eb !important;
  --canvas3: #fdf9f5 !important;
  --canvas4: #d7c3ba !important;
  --caret-color: #4a3827 !important;
  --checkbox-border-color: hsl(4, 89%, 64%) !important;
  --checkbox-border-color-hover: #b29688 !important;
  --checkbox-color: hsl(4, 89%, 64%) !important;
  --checkbox-color-hover: hsl(4, 89%, 49%) !important;
  --checkbox-marker-color: #fffefd !important;
  --checklist-done-color: #b29688 !important;
  --code-background: #fdf9f5 !important;
  --code-border-color: #f8f1eb !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: hsl(4, 89%, 64%) !important;
  --code-function: #eacf00 !important;
  --code-important: #e9973f !important;
  --code-keyword: #f22c96 !important;
  --code-normal: #765c4f !important;
  --code-operator: #f85c51 !important;
  --code-property: #0ecdc9 !important;
  --code-punctuation: #b29688 !important;
  --code-string: #0cc77c !important;
  --code-tag: #f85c51 !important;
  --code-value: #a29bfe !important;
  --codeFont: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(4, 89%, 64%) !important;
  --collapse-icon-color-collapsed: hsl(4, 89%, 64%) !important;
  --color-accent: hsl(4, 89%, 64%) !important;
  --color-accent-1: hsl(3, 89.89%, 68.8%) !important;
  --color-accent-2: hsl(4, 89%, 49%) !important;
  --color-accent-hsl: 4, 89%, 64% !important;
  --color-blue: #d6e9ff !important;
  --color-blue-rgb: 214, 233, 255 !important;
  --color-cyan: #0ecdc9 !important;
  --color-cyan-rgb: 14, 205, 201 !important;
  --color-green: #0cc77c !important;
  --color-green-rgb: 12, 199, 124 !important;
  --color-head: hsl(4, 89%, 64%) !important;
  --color-orange: #e9973f !important;
  --color-orange-rgb: 233, 151, 63 !important;
  --color-pink: #f22c96 !important;
  --color-pink-rgb: 242, 44, 150 !important;
  --color-purple: #a29bfe !important;
  --color-purple-rgb: 162, 155, 254 !important;
  --color-red: #f85c51 !important;
  --color-red-rgb: 248, 92, 81 !important;
  --color-yellow: #eacf00 !important;
  --color-yellow-rgb: 234, 207, 0 !important;
  --dark: #4a3827 !important;
  --darkgray: #4a3827 !important;
  --divider-color: #f8f1eb !important;
  --divider-color-hover: hsl(4, 89%, 64%) !important;
  --dropdown-background: #f8f1eb !important;
  --dropdown-background-hover: #d7c3ba !important;
  --embed-block-shadow-hover: 0 0 0 1px #f8f1eb,
	  inset 0 0 0 1px #f8f1eb !important;
  --embed-border-left: 2px solid hsl(4, 89%, 64%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(4, 89%, 64%) !important;
  --file-header-background: #fffefd !important;
  --file-header-background-focused: #fffefd !important;
  --file-hr: #f8f1eb !important;
  --file-margins: 32px !important;
  --flair-background: #f8f1eb !important;
  --flair-color: #4a3827 !important;
  --font-mermaid: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: IBM Plex Sans, sans-serif, Arial' !important;
  --font-text: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: IBM Plex Sans, sans-serif !important;
  --footnote-divider-color: #f8f1eb !important;
  --footnote-id-color: #b29688 !important;
  --footnote-id-color-no-occurrences: hsl(4, 89%, 64%) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --graph-line: #4a3827 !important;
  --graph-node: #b29688 !important;
  --graph-node-attachment: #eacf00 !important;
  --graph-node-focused: hsl(4, 89%, 64%) !important;
  --graph-node-tag: #0cc77c !important;
  --graph-node-unresolved: hsl(4, 89%, 64%) !important;
  --graph-text: #4a3827 !important;
  --gray: #b29688 !important;
  --h1-color: hsl(4, 89%, 64%) !important;
  --h1-size: 2.00em !important;
  --h2-color: hsl(4, 89%, 66%) !important;
  --h2-size: 1.8em !important;
  --h2-weight: 600 !important;
  --h3-color: hsl(4, 89%, 68%) !important;
  --h3-size: 1.4em !important;
  --h3-weight: 600 !important;
  --h4-color: hsl(4, 89%, 70%) !important;
  --h4-size: 1.2em !important;
  --h4-weight: 600 !important;
  --h5-color: hsl(4, 89%, 72%) !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-color: hsl(4, 89%, 74%) !important;
  --headerFont: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(4, 89%, 64%) !important;
  --highlight: hsla(4, 89%, 64%, 0.2) !important;
  --hr-color: #f8f1eb !important;
  --icon-color: #b29688 !important;
  --icon-color-active: hsl(4, 89%, 64%) !important;
  --icon-color-focused: #4a3827 !important;
  --icon-color-hover: #b29688 !important;
  --inline-title-color: hsl(4, 89%, 64%) !important;
  --inline-title-size: 2.00em !important;
  --input-date-separator: hsl(4, 89%, 64%) !important;
  --input-placeholder-color: hsl(4, 89%, 64%) !important;
  --interactive-accent: hsl(4, 89%, 64%) !important;
  --interactive-accent-hover: hsl(4, 89%, 49%) !important;
  --interactive-accent-hsl: 4, 89%, 64% !important;
  --interactive-hover: #d7c3ba !important;
  --interactive-normal: #f8f1eb !important;
  --italic-color: #0ecdc9 !important;
  --leaf-handle: #f8f1eb !important;
  --light: #fffefd !important;
  --lightgray: #fdf9f5 !important;
  --link-color: hsl(4, 89%, 64%) !important;
  --link-color-hover: hsl(4, 89%, 49%) !important;
  --link-external-color: hsl(4, 89%, 64%) !important;
  --link-external-color-hover: hsl(4, 89%, 49%) !important;
  --link-unresolved-color: hsl(4, 89%, 64%) !important;
  --link-unresolved-decoration-color: hsla(4, 89%, 64%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(4, 89%, 64%) !important;
  --list-marker-color-collapsed: hsl(4, 89%, 64%) !important;
  --list-marker-color-hover: #b29688 !important;
  --menu-background: #fdf9f5 !important;
  --menu-border-color: #4a3827 !important;
  --menu-selection: #f8f1eb !important;
  --menu-selection-text: #4a3827 !important;
  --metadata-border-color: #f8f1eb !important;
  --metadata-divider-color: #f8f1eb !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-input-text-color: #4a3827 !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-text-color: #b29688 !important;
  --metadata-label-text-color-hover: #b29688 !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b29688 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4a3827 !important;
  --modal-background: #fffefd !important;
  --modal-border-color: #b29688 !important;
  --nav-collapse-icon-color: hsl(4, 89%, 64%) !important;
  --nav-collapse-icon-color-collapsed: hsl(4, 89%, 64%) !important;
  --nav-heading-color: #4a3827 !important;
  --nav-heading-color-collapsed: hsl(4, 89%, 64%) !important;
  --nav-heading-color-collapsed-hover: #b29688 !important;
  --nav-heading-color-hover: #4a3827 !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: hsla(4, 89%, 64%, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #b29688 !important;
  --nav-item-color-active: #4a3827 !important;
  --nav-item-color-highlighted: hsl(4, 89%, 49%) !important;
  --nav-item-color-hover: #4a3827 !important;
  --nav-item-color-selected: #4a3827 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl(4, 89%, 64%) !important;
  --nav-tag-color-active: #b29688 !important;
  --nav-tag-color-hover: #b29688 !important;
  --pdf-background: #fffefd !important;
  --pdf-page-background: #fffefd !important;
  --pdf-sidebar-background: #fffefd !important;
  --pill-border-color: #f8f1eb !important;
  --pill-border-color-hover: #4a3827 !important;
  --pill-color: #b29688 !important;
  --pill-color-hover: #4a3827 !important;
  --pill-color-remove: hsl(4, 89%, 64%) !important;
  --pill-color-remove-hover: hsl(4, 89%, 64%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #fffefd !important;
  --prompt-border-color: #b29688 !important;
  --raised-background: color-mix(in srgb, #fffefd 65%, transparent) linear-gradient(#fffefd, color-mix(in srgb, #fffefd 65%, transparent)) !important;
  --ribbon-background: #fdf9f5 !important;
  --ribbon-background-collapsed: #fffefd !important;
  --scrollbar-bg: #f8f1eb !important;
  --search-clear-button-color: #b29688 !important;
  --search-icon-color: #b29688 !important;
  --search-result-background: #fffefd !important;
  --secondary: hsl(4, 89%, 64%) !important;
  --setting-group-heading-color: #4a3827 !important;
  --setting-items-background: #f8f1eb !important;
  --setting-items-border-color: #f8f1eb !important;
  --slider-thumb-border-color: #4a3827 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #f8f1eb !important;
  --status-bar-background: #fdf9f5 !important;
  --status-bar-border-color: #f8f1eb !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #b29688 !important;
  --suggestion-background: #fffefd !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #f85c51 !important;
  --sync-avatar-color-2: #e9973f !important;
  --sync-avatar-color-3: #eacf00 !important;
  --sync-avatar-color-4: #0cc77c !important;
  --sync-avatar-color-5: #0ecdc9 !important;
  --sync-avatar-color-6: #d6e9ff !important;
  --sync-avatar-color-7: #a29bfe !important;
  --sync-avatar-color-8: #f22c96 !important;
  --tab-background-active: #fffefd !important;
  --tab-container-background: #fdf9f5 !important;
  --tab-divider-color: #f8f1eb !important;
  --tab-outline-color: #f8f1eb !important;
  --tab-radius: 8px 8px 0 0 !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #fdf9f5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf9f5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(4, 89%, 64%) !important;
  --tab-text-color: #b29688 !important;
  --tab-text-color-active: #b29688 !important;
  --tab-text-color-focused: #b29688 !important;
  --tab-text-color-focused-active: #b29688 !important;
  --tab-text-color-focused-active-current: #4a3827 !important;
  --tab-text-color-focused-highlighted: hsl(4, 89%, 64%) !important;
  --table-add-button-border-color: #f8f1eb !important;
  --table-border-color: #f8f1eb !important;
  --table-drag-handle-background-active: hsl(4, 89%, 64%) !important;
  --table-drag-handle-color: hsl(4, 89%, 64%) !important;
  --table-drag-handle-color-active: #fffefd !important;
  --table-header-background: #fdf9f5 !important;
  --table-header-background-hover: #fdf9f5 !important;
  --table-header-border-color: #f8f1eb !important;
  --table-header-color: hsl(4, 89%, 64%) !important;
  --table-header-weight: 600 !important;
  --table-line: #b29688 !important;
  --table-selection: hsla(4, 89%, 64%, 0.1) !important;
  --table-selection-border-color: hsl(4, 89%, 64%) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: hsla(4, 89%, 64%, 0.15) !important;
  --tag-background-hover: hsla(4, 89%, 64%, 0.2) !important;
  --tag-border-color: hsla(4, 89%, 64%, 0.15) !important;
  --tag-border-color-hover: hsla(4, 89%, 64%, 0.15) !important;
  --tag-color: hsl(4, 89%, 64%) !important;
  --tag-color-hover: hsl(4, 89%, 64%) !important;
  --tertiary: hsl(4, 89%, 49%) !important;
  --text-accent: hsl(4, 89%, 64%) !important;
  --text-accent-hover: hsl(4, 89%, 49%) !important;
  --text-error: #f85c51 !important;
  --text-faint: hsl(4, 89%, 64%) !important;
  --text-highlight-bg: hsla(4, 89%, 64%, 0.2) !important;
  --text-muted: #b29688 !important;
  --text-normal: #4a3827 !important;
  --text-on-accent: #fffefd !important;
  --text-selection: #d7c3ba !important;
  --text-success: #0cc77c !important;
  --text-tag: #0cc77c !important;
  --text-warning: #e9973f !important;
  --textHighlight: hsla(4, 89%, 64%, 0.2) !important;
  --titleFont: IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #fdf9f5 !important;
  --titlebar-background-focused: #fdf9f5 !important;
  --titlebar-border-color: #f8f1eb !important;
  --titlebar-text-color: #b29688 !important;
  --titlebar-text-color-focused: #4a3827 !important;
  --vault-name-color: #4a3827 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #4a3827 !important;
  --vault-profile-color-hover: #4a3827 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 249, 245);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 254, 253);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(248, 241, 235);
  color: rgb(245, 92, 81);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 254, 253);
  border-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(248, 241, 235);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(245, 92, 81, 0.15);
  color: rgb(245, 92, 81);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 249, 245);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(248, 241, 235);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 249, 245);
  border-left-color: rgb(248, 241, 235);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 254, 253);
  color: rgb(74, 56, 39);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(14, 205, 201);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(14, 205, 201) none 0px;
  text-decoration-color: rgb(14, 205, 201);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(14, 205, 201);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(14, 205, 201) none 0px;
  text-decoration-color: rgb(14, 205, 201);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(245, 92, 81, 0.2);
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(74, 56, 39) none 0px;
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body del {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(74, 56, 39) none 0px;
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(245, 92, 81);
  border-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body p {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
  outline: rgb(178, 150, 136) none 0px;
  text-decoration-color: rgb(178, 150, 136);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgba(245, 92, 81, 0.3);
  text-decoration-color: rgba(245, 92, 81, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body dt {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body ol > li {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body ul > li {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(245, 92, 81);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body table {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 190.469px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
  border-top-width: 0px;
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
  border-top-left-radius: 8px;
  color: rgb(245, 92, 81);
}

html[saved-theme="light"] body tr {
  background-color: rgb(253, 249, 245);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(118, 92, 79);
  border-left-color: rgb(118, 92, 79);
  border-right-color: rgb(118, 92, 79);
  border-top-color: rgb(118, 92, 79);
  color: rgb(118, 92, 79);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(234, 207, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(234, 207, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(234, 207, 0);
  border-left-color: rgb(234, 207, 0);
  border-right-color: rgb(234, 207, 0);
  border-top-color: rgb(234, 207, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body figcaption {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(245, 92, 81);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(245, 92, 81);
  border-top-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(248, 241, 235);
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(245, 92, 81);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(245, 92, 81);
  border-top-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 14, 205, 201;
  background-color: rgba(14, 205, 201, 0.1);
  border-bottom-color: rgba(14, 205, 201, 0.25);
  border-left-color: rgba(14, 205, 201, 0.25);
  border-right-color: rgba(14, 205, 201, 0.25);
  border-top-color: rgba(14, 205, 201, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 248, 92, 81;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 248, 92, 81;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 162, 155, 254;
  background-color: rgba(162, 155, 254, 0.1);
  border-bottom-color: rgba(162, 155, 254, 0.25);
  border-left-color: rgba(162, 155, 254, 0.25);
  border-right-color: rgba(162, 155, 254, 0.25);
  border-top-color: rgba(162, 155, 254, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 248, 92, 81;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 214, 233, 255;
  background-color: rgba(214, 233, 255, 0.1);
  border-bottom-color: rgba(214, 233, 255, 0.25);
  border-left-color: rgba(214, 233, 255, 0.25);
  border-right-color: rgba(214, 233, 255, 0.25);
  border-top-color: rgba(214, 233, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 214, 233, 255;
  background-color: rgba(214, 233, 255, 0.1);
  border-bottom-color: rgba(214, 233, 255, 0.25);
  border-left-color: rgba(214, 233, 255, 0.25);
  border-right-color: rgba(214, 233, 255, 0.25);
  border-top-color: rgba(214, 233, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 12, 199, 124;
  background-color: rgba(12, 199, 124, 0.1);
  border-bottom-color: rgba(12, 199, 124, 0.25);
  border-left-color: rgba(12, 199, 124, 0.25);
  border-right-color: rgba(12, 199, 124, 0.25);
  border-top-color: rgba(12, 199, 124, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 14, 205, 201;
  background-color: rgba(14, 205, 201, 0.1);
  border-bottom-color: rgba(14, 205, 201, 0.25);
  border-left-color: rgba(14, 205, 201, 0.25);
  border-right-color: rgba(14, 205, 201, 0.25);
  border-top-color: rgba(14, 205, 201, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 214, 233, 255;
  background-color: rgba(214, 233, 255, 0.1);
  border-bottom-color: rgba(214, 233, 255, 0.25);
  border-left-color: rgba(214, 233, 255, 0.25);
  border-right-color: rgba(214, 233, 255, 0.25);
  border-top-color: rgba(214, 233, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
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
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
  color: rgb(74, 56, 39);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(74, 56, 39) none 0px;
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 249, 245);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 92, 81, 0.15);
  border-bottom-color: rgba(245, 92, 81, 0.15);
  border-left-color: rgba(245, 92, 81, 0.15);
  border-right-color: rgba(245, 92, 81, 0.15);
  border-top-color: rgba(245, 92, 81, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(245, 92, 81);
}

html[saved-theme="light"] body h1 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(245, 101, 91);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(246, 110, 101);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(247, 119, 110);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(247, 129, 120);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(248, 138, 130);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgba(214, 233, 255, 0.25);
  border-left-color: rgba(214, 233, 255, 0.25);
  border-right-color: rgba(214, 233, 255, 0.25);
  border-top-color: rgba(214, 233, 255, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(74, 56, 39);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(178, 150, 136);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(74, 56, 39);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(178, 150, 136);
  stroke: rgb(178, 150, 136);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(245, 92, 81);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(248, 241, 235);
  border-left-color: rgb(248, 241, 235);
  border-right-color: rgb(248, 241, 235);
  border-top-color: rgb(248, 241, 235);
  color: rgb(178, 150, 136);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(253, 249, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body abbr {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(118, 92, 79);
  border-left-color: rgb(118, 92, 79);
  border-right-color: rgb(118, 92, 79);
  border-top-color: rgb(118, 92, 79);
  color: rgb(118, 92, 79);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body sub {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body summary {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body sup {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(245, 92, 81, 0.15);
  border-bottom-color: rgba(245, 92, 81, 0.15);
  border-left-color: rgba(245, 92, 81, 0.15);
  border-right-color: rgba(245, 92, 81, 0.15);
  border-top-color: rgba(245, 92, 81, 0.15);
  color: rgb(245, 92, 81);
}`,
  },
};
