import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "planetary",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-sans"],
    fontFiles: [
      {
        family: "IBM Plex Sans",
        style: "normal italic",
        weight: "100 900",
        file: "ibm-plex-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Mono",
        style: "normal",
        weight: "400",
        file: "ibm-plex-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Mono",
        style: "normal",
        weight: "700",
        file: "ibm-plex-mono-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IBM Plex Mono",
        style: "italic",
        weight: "400",
        file: "ibm-plex-mono-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
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
}

html[saved-theme="dark"] body html {
  --font-monospace-theme: 'IBM Plex Mono', monospace;
  --font-text-theme: 'IBM Plex Sans', sans-serif;
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(255, 235, 209);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 17, 16);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 17, 16);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(10, 206, 203);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(162, 155, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(35, 209, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(35, 209, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(35, 209, 140);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 10, 206, 203;
  background: rgba(10, 206, 203, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 206, 203, 0.1);
  border-bottom-color: rgba(10, 206, 203, 0.25);
  border-left-color: rgba(10, 206, 203, 0.25);
  border-right-color: rgba(10, 206, 203, 0.25);
  border-top-color: rgba(10, 206, 203, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 248, 92, 81;
  background: rgba(248, 92, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 248, 92, 81;
  background: rgba(248, 92, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 162, 155, 254;
  background: rgba(162, 155, 254, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(162, 155, 254, 0.1);
  border-bottom-color: rgba(162, 155, 254, 0.25);
  border-left-color: rgba(162, 155, 254, 0.25);
  border-right-color: rgba(162, 155, 254, 0.25);
  border-top-color: rgba(162, 155, 254, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 248, 92, 81;
  background: rgba(248, 92, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 105, 175, 255;
  background: rgba(105, 175, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(105, 175, 255, 0.1);
  border-bottom-color: rgba(105, 175, 255, 0.25);
  border-left-color: rgba(105, 175, 255, 0.25);
  border-right-color: rgba(105, 175, 255, 0.25);
  border-top-color: rgba(105, 175, 255, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 105, 175, 255;
  background: rgba(105, 175, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(105, 175, 255, 0.1);
  border-bottom-color: rgba(105, 175, 255, 0.25);
  border-left-color: rgba(105, 175, 255, 0.25);
  border-right-color: rgba(105, 175, 255, 0.25);
  border-top-color: rgba(105, 175, 255, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 35, 209, 140;
  background: rgba(35, 209, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(35, 209, 140, 0.1);
  border-bottom-color: rgba(35, 209, 140, 0.25);
  border-left-color: rgba(35, 209, 140, 0.25);
  border-right-color: rgba(35, 209, 140, 0.25);
  border-top-color: rgba(35, 209, 140, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 10, 206, 203;
  background: rgba(10, 206, 203, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(10, 206, 203, 0.1);
  border-bottom-color: rgba(10, 206, 203, 0.25);
  border-left-color: rgba(10, 206, 203, 0.25);
  border-right-color: rgba(10, 206, 203, 0.25);
  border-top-color: rgba(10, 206, 203, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 105, 175, 255;
  background: rgba(105, 175, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(105, 175, 255, 0.1);
  border-bottom-color: rgba(105, 175, 255, 0.25);
  border-left-color: rgba(105, 175, 255, 0.25);
  border-right-color: rgba(105, 175, 255, 0.25);
  border-top-color: rgba(105, 175, 255, 0.25);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 105, 175, 255;
  border-bottom-color: rgb(105, 175, 255);
  border-left-color: rgb(105, 175, 255);
  border-right-color: rgb(105, 175, 255);
  border-top-color: rgb(105, 175, 255);
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(105, 175, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 235, 209);
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
}

html[saved-theme="light"] body html {
  --font-monospace-theme: 'IBM Plex Mono', monospace;
  --font-text-theme: 'IBM Plex Sans', sans-serif;
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(178, 150, 136);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(74, 56, 39);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 254, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 254, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 207, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 205, 201);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(214, 233, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(214, 233, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 207, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 207, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(162, 155, 254);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 92, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(12, 199, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(12, 199, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(12, 199, 124);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 14, 205, 201;
  background: rgba(14, 205, 201, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(14, 205, 201, 0.1);
  border-bottom-color: rgba(14, 205, 201, 0.25);
  border-left-color: rgba(14, 205, 201, 0.25);
  border-right-color: rgba(14, 205, 201, 0.25);
  border-top-color: rgba(14, 205, 201, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 248, 92, 81;
  background: rgba(248, 92, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 248, 92, 81;
  background: rgba(248, 92, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 162, 155, 254;
  background: rgba(162, 155, 254, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(162, 155, 254, 0.1);
  border-bottom-color: rgba(162, 155, 254, 0.25);
  border-left-color: rgba(162, 155, 254, 0.25);
  border-right-color: rgba(162, 155, 254, 0.25);
  border-top-color: rgba(162, 155, 254, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 248, 92, 81;
  background: rgba(248, 92, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(248, 92, 81, 0.1);
  border-bottom-color: rgba(248, 92, 81, 0.25);
  border-left-color: rgba(248, 92, 81, 0.25);
  border-right-color: rgba(248, 92, 81, 0.25);
  border-top-color: rgba(248, 92, 81, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 214, 233, 255;
  background: rgba(214, 233, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(214, 233, 255, 0.1);
  border-bottom-color: rgba(214, 233, 255, 0.25);
  border-left-color: rgba(214, 233, 255, 0.25);
  border-right-color: rgba(214, 233, 255, 0.25);
  border-top-color: rgba(214, 233, 255, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 214, 233, 255;
  background: rgba(214, 233, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(214, 233, 255, 0.1);
  border-bottom-color: rgba(214, 233, 255, 0.25);
  border-left-color: rgba(214, 233, 255, 0.25);
  border-right-color: rgba(214, 233, 255, 0.25);
  border-top-color: rgba(214, 233, 255, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgba(233, 151, 63, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 12, 199, 124;
  background: rgba(12, 199, 124, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(12, 199, 124, 0.1);
  border-bottom-color: rgba(12, 199, 124, 0.25);
  border-left-color: rgba(12, 199, 124, 0.25);
  border-right-color: rgba(12, 199, 124, 0.25);
  border-top-color: rgba(12, 199, 124, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 14, 205, 201;
  background: rgba(14, 205, 201, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(14, 205, 201, 0.1);
  border-bottom-color: rgba(14, 205, 201, 0.25);
  border-left-color: rgba(14, 205, 201, 0.25);
  border-right-color: rgba(14, 205, 201, 0.25);
  border-top-color: rgba(14, 205, 201, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 214, 233, 255;
  background: rgba(214, 233, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(214, 233, 255, 0.1);
  border-bottom-color: rgba(214, 233, 255, 0.25);
  border-left-color: rgba(214, 233, 255, 0.25);
  border-right-color: rgba(214, 233, 255, 0.25);
  border-top-color: rgba(214, 233, 255, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgba(233, 151, 63, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 214, 233, 255;
  border-bottom-color: rgb(214, 233, 255);
  border-left-color: rgb(214, 233, 255);
  border-right-color: rgb(214, 233, 255);
  border-top-color: rgb(214, 233, 255);
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(214, 233, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(74, 56, 39);
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
