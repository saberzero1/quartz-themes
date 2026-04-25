import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "royal-velvet",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["fira-sans", "fira-code"],
    fontFiles: [
      {
        family: "Fira Sans",
        style: "normal",
        weight: "normal",
        file: "fira-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Sans",
        style: "italic",
        weight: "normal",
        file: "fira-sans-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Sans",
        style: "normal",
        weight: "500",
        file: "fira-sans-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Sans",
        style: "italic",
        weight: "500",
        file: "fira-sans-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Sans",
        style: "normal",
        weight: "bold",
        file: "fira-sans-4.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Sans",
        style: "italic",
        weight: "bold",
        file: "fira-sans-5.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Code",
        style: "normal",
        weight: "normal",
        file: "fira-code.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Code",
        style: "normal",
        weight: "500",
        file: "fira-code-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Fira Code",
        style: "normal",
        weight: "bold",
        file: "fira-code-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(248, 248, 242, 0.6);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(248, 248, 242);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 33, 44);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 33, 44);
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
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
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
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(248, 248, 242);
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(33, 34, 44, 0.6);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(33, 34, 44);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
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
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(33, 34, 44);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(33, 34, 44);
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
