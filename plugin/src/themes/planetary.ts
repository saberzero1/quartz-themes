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
  --background-modifier-active-hover: rgba(245, 92, 81, 0.15) !important;
  --background-modifier-border: #232120 !important;
  --background-modifier-border-focus: #807874 !important;
  --background-modifier-border-hover: #ffebd1 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #f85c51 !important;
  --background-modifier-error-hover: #f85c51 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: #23d18c !important;
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
  --bases-table-cell-background-selected: rgba(245, 92, 81, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #807874 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 92, 81) !important;
  --bases-table-group-background: #232120 !important;
  --bases-table-header-background: #121110 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #807874 !important;
  --bases-table-summary-background: #121110 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: rgb(245, 92, 81) !important;
  --blur-background: color-mix(in srgb, #232120 65%, transparent) linear-gradient(#232120, color-mix(in srgb, #232120 65%, transparent)) !important;
  --bodyFont: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #f85c51 !important;
  --bold-weight: 600 !important;
  --canvas-background: #121110 !important;
  --canvas-card-label-color: rgb(245, 92, 81) !important;
  --canvas-contrast-high: #ffebd1 !important;
  --canvas-contrast-low: #807874 !important;
  --canvas-contrast-medium: #989692 !important;
  --canvas-dot-pattern: #181716 !important;
  --canvas1: #121110 !important;
  --canvas2: #232120 !important;
  --canvas3: #181716 !important;
  --canvas4: #403938 !important;
  --caret-color: #ffebd1 !important;
  --checkbox-border-color: rgb(245, 92, 81) !important;
  --checkbox-border-color-hover: #807874 !important;
  --checkbox-color: rgb(245, 92, 81) !important;
  --checkbox-color-hover: #a83e37 !important;
  --checkbox-marker-color: #121110 !important;
  --checklist-done-color: #807874 !important;
  --code-background: #181716 !important;
  --code-border-color: #232120 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: rgb(245, 92, 81) !important;
  --code-normal: #989692 !important;
  --code-operator: #f85c51 !important;
  --code-property: #0acecb !important;
  --code-punctuation: #807874 !important;
  --code-string: #23d18c !important;
  --code-tag: #f85c51 !important;
  --code-value: #a29bfe !important;
  --codeFont: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(245, 92, 81) !important;
  --collapse-icon-color-collapsed: rgb(245, 92, 81) !important;
  --color-accent: rgb(245, 92, 81) !important;
  --color-accent-1: #f85c51 !important;
  --color-accent-2: #a83e37 !important;
  --color-accent-hsl: 4, 89%, 64% !important;
  --color-blue: #69afff !important;
  --color-cyan: #0acecb !important;
  --color-green: #23d18c !important;
  --color-head: rgb(245, 92, 81) !important;
  --color-purple: #a29bfe !important;
  --color-red: #f85c51 !important;
  --dark: #ffebd1 !important;
  --darkgray: #ffebd1 !important;
  --divider-color: #232120 !important;
  --divider-color-hover: rgb(245, 92, 81) !important;
  --dropdown-background: #232120 !important;
  --dropdown-background-hover: #403938 !important;
  --embed-block-shadow-hover: 0 0 0 1px #232120,
	  inset 0 0 0 1px #232120 !important;
  --embed-border-left: 2px solid rgb(245, 92, 81) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(245, 92, 81) !important;
  --file-header-background: #121110 !important;
  --file-header-background-focused: #121110 !important;
  --file-hr: #232120 !important;
  --file-margins: 32px !important;
  --flair-background: #232120 !important;
  --flair-color: #ffebd1 !important;
  --font-mermaid: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', IBM Plex Sans, sans-serif, 'Arial' !important;
  --font-text: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: IBM Plex Sans, sans-serif !important;
  --footnote-divider-color: #232120 !important;
  --footnote-id-color: #807874 !important;
  --footnote-id-color-no-occurrences: rgb(245, 92, 81) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: #ffebd1 !important;
  --graph-node: #807874 !important;
  --graph-node-focused: rgb(245, 92, 81) !important;
  --graph-node-tag: #23d18c !important;
  --graph-node-unresolved: rgb(245, 92, 81) !important;
  --graph-text: #ffebd1 !important;
  --gray: #807874 !important;
  --h1-color: rgb(245, 92, 81) !important;
  --h1-size: 2.00em !important;
  --h2-color: rgb(245, 92, 81) !important;
  --h2-size: 1.8em !important;
  --h2-weight: 600 !important;
  --h3-color: rgb(245, 92, 81) !important;
  --h3-size: 1.4em !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(245, 92, 81) !important;
  --h4-size: 1.2em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(245, 92, 81) !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(245, 92, 81) !important;
  --headerFont: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(245, 92, 81) !important;
  --highlight: #69afff !important;
  --hr-color: #232120 !important;
  --icon-color: #807874 !important;
  --icon-color-active: rgb(245, 92, 81) !important;
  --icon-color-focused: #ffebd1 !important;
  --icon-color-hover: #807874 !important;
  --inline-title-color: rgb(245, 92, 81) !important;
  --inline-title-size: 2.00em !important;
  --input-date-separator: rgb(245, 92, 81) !important;
  --input-placeholder-color: rgb(245, 92, 81) !important;
  --interactive-accent: rgb(245, 92, 81) !important;
  --interactive-accent-hover: #a83e37 !important;
  --interactive-accent-hsl: 4, 89%, 64% !important;
  --interactive-hover: #403938 !important;
  --interactive-normal: #232120 !important;
  --italic-color: #0acecb !important;
  --leaf-handle: #232120 !important;
  --light: #121110 !important;
  --lightgray: #181716 !important;
  --link-color: rgb(245, 92, 81) !important;
  --link-color-hover: #a83e37 !important;
  --link-external-color: rgb(245, 92, 81) !important;
  --link-external-color-hover: #a83e37 !important;
  --link-unresolved-color: rgb(245, 92, 81) !important;
  --link-unresolved-decoration-color: rgba(245, 92, 81, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(245, 92, 81) !important;
  --list-marker-color-collapsed: rgb(245, 92, 81) !important;
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
  --nav-collapse-icon-color: rgb(245, 92, 81) !important;
  --nav-collapse-icon-color-collapsed: rgb(245, 92, 81) !important;
  --nav-heading-color: #ffebd1 !important;
  --nav-heading-color-collapsed: rgb(245, 92, 81) !important;
  --nav-heading-color-collapsed-hover: #807874 !important;
  --nav-heading-color-hover: #ffebd1 !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: rgba(245, 92, 81, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #807874 !important;
  --nav-item-color-active: #ffebd1 !important;
  --nav-item-color-highlighted: #a83e37 !important;
  --nav-item-color-hover: #ffebd1 !important;
  --nav-item-color-selected: #ffebd1 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(245, 92, 81) !important;
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
  --pill-color-remove: rgb(245, 92, 81) !important;
  --pill-color-remove-hover: rgb(245, 92, 81) !important;
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
  --secondary: rgb(245, 92, 81) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 92, 81) !important;
  --tab-text-color: #807874 !important;
  --tab-text-color-active: #807874 !important;
  --tab-text-color-focused: #807874 !important;
  --tab-text-color-focused-active: #807874 !important;
  --tab-text-color-focused-active-current: #ffebd1 !important;
  --tab-text-color-focused-highlighted: rgb(245, 92, 81) !important;
  --table-add-button-border-color: #232120 !important;
  --table-border-color: #232120 !important;
  --table-drag-handle-background-active: rgb(245, 92, 81) !important;
  --table-drag-handle-color: rgb(245, 92, 81) !important;
  --table-drag-handle-color-active: #121110 !important;
  --table-header-background: #181716 !important;
  --table-header-background-hover: #181716 !important;
  --table-header-border-color: #232120 !important;
  --table-header-color: rgb(245, 92, 81) !important;
  --table-header-weight: 600 !important;
  --table-line: #807874 !important;
  --table-selection: rgba(245, 92, 81, 0.1) !important;
  --table-selection-border-color: rgb(245, 92, 81) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: #782b1d52 !important;
  --tag-background-hover: rgba(245, 92, 81, 0.2) !important;
  --tag-border-color: rgba(245, 92, 81, 0.15) !important;
  --tag-border-color-hover: rgba(245, 92, 81, 0.15) !important;
  --tag-color: rgb(245, 92, 81) !important;
  --tag-color-hover: rgb(245, 92, 81) !important;
  --tertiary: #a83e37 !important;
  --text-accent: rgb(245, 92, 81) !important;
  --text-accent-hover: #a83e37 !important;
  --text-error: #f85c51 !important;
  --text-faint: rgb(245, 92, 81) !important;
  --text-highlight-bg: #69afff !important;
  --text-muted: #807874 !important;
  --text-normal: #ffebd1 !important;
  --text-on-accent: #121110 !important;
  --text-selection: #403938 !important;
  --text-success: #23d18c !important;
  --text-tag: #23d18c !important;
  --textHighlight: #69afff !important;
  --titleFont: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 23, 22);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(18, 17, 16);
  color: rgb(255, 235, 209);
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
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(248, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 92, 81) none 0px;
  text-decoration: rgb(248, 92, 81);
  text-decoration-color: rgb(248, 92, 81);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(10, 206, 203);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(10, 206, 203) none 0px;
  text-decoration: rgb(10, 206, 203);
  text-decoration-color: rgb(10, 206, 203);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(10, 206, 203);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(10, 206, 203) none 0px;
  text-decoration: rgb(10, 206, 203);
  text-decoration-color: rgb(10, 206, 203);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(248, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 92, 81) none 0px;
  text-decoration: rgb(248, 92, 81);
  text-decoration-color: rgb(248, 92, 81);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(105, 175, 255);
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 235, 209) none 0px;
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 235, 209) none 0px;
  text-decoration: line-through rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body p {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
  outline: rgb(128, 120, 116) none 0px;
  text-decoration: rgb(128, 120, 116);
  text-decoration-color: rgb(128, 120, 116);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgb(245, 92, 81);
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgb(245, 92, 81);
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
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(245, 92, 81);
  text-decoration: rgb(245, 92, 81);
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

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
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
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 120, 116);
  text-decoration: line-through rgb(128, 120, 116);
  text-decoration-color: rgb(128, 120, 116);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(245, 92, 81);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(245, 92, 81);
  border-top-color: rgb(245, 92, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
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
  text-decoration: rgb(255, 235, 209);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(255, 235, 209);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(120, 43, 29, 0.32);
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
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
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
  text-decoration: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(128, 120, 116);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
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
  text-decoration: rgb(128, 120, 116);
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
  text-decoration: rgb(128, 120, 116);
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
  text-decoration: rgb(128, 120, 116);
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
  text-decoration: underline dotted rgb(255, 235, 209);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 4 !important;
  --accent-l: 64% !important;
  --accent-s: 89% !important;
  --background-code: #f6e2db !important;
  --background-code-preview: #f6e2db !important;
  --background-modifier-active-hover: rgba(245, 92, 81, 0.15) !important;
  --background-modifier-border: #f6e2db !important;
  --background-modifier-border-focus: #b29688 !important;
  --background-modifier-border-hover: #4a3827 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #f85c51 !important;
  --background-modifier-error-hover: #f85c51 !important;
  --background-modifier-error-rgb: 251, 70, 76 !important;
  --background-modifier-form-field: #fffefd !important;
  --background-modifier-form-field-hover: #fffefd !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-modifier-success: #0cc77c !important;
  --background-modifier-success-rgb: 68, 207, 110 !important;
  --background-preview: #fffefd !important;
  --background-primary: #fffefd !important;
  --background-primary-alt: #f6e2db !important;
  --background-quick: #f6e2db !important;
  --background-secondary: #fdf9f5 !important;
  --background-secondary-alt: #fdf9f5 !important;
  --background-tag: #000000 !important;
  --bases-cards-background: #fffefd !important;
  --bases-cards-cover-background: #f6e2db !important;
  --bases-cards-shadow: 0 0 0 1px #f6e2db !important;
  --bases-cards-shadow-hover: 0 0 0 1px #4a3827 !important;
  --bases-embed-border-color: #f6e2db !important;
  --bases-group-heading-property-color: #b29688 !important;
  --bases-table-border-color: #f6e2db !important;
  --bases-table-cell-background-active: #fffefd !important;
  --bases-table-cell-background-disabled: #f6e2db !important;
  --bases-table-cell-background-selected: rgba(245, 92, 81, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b29688 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 92, 81) !important;
  --bases-table-group-background: #f6e2db !important;
  --bases-table-header-background: #fffefd !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: #b29688 !important;
  --bases-table-summary-background: #fffefd !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: rgb(245, 92, 81) !important;
  --blur-background: color-mix(in srgb, #fffefd 65%, transparent) linear-gradient(#fffefd, color-mix(in srgb, #fffefd 65%, transparent)) !important;
  --bodyFont: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #f85c51 !important;
  --bold-weight: 600 !important;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-question: 233, 151, 63;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #fffefd !important;
  --canvas-card-label-color: rgb(245, 92, 81) !important;
  --canvas-color-1: 251, 70, 76 !important;
  --canvas-color-2: 233, 151, 63 !important;
  --canvas-color-3: 224, 222, 113 !important;
  --canvas-color-4: 68, 207, 110 !important;
  --canvas-color-5: 83, 223, 221 !important;
  --canvas-color-6: 168, 130, 255 !important;
  --canvas-contrast-high: #4a3827 !important;
  --canvas-contrast-low: #b29688 !important;
  --canvas-contrast-medium: #765c4f !important;
  --canvas-dot-pattern: #fdf9f5 !important;
  --canvas1: #fffefd !important;
  --canvas2: #f6e2db !important;
  --canvas3: #fdf9f5 !important;
  --canvas4: #d7c3ba !important;
  --caret-color: #4a3827 !important;
  --checkbox-border-color: rgb(245, 92, 81) !important;
  --checkbox-border-color-hover: #b29688 !important;
  --checkbox-color: rgb(245, 92, 81) !important;
  --checkbox-color-hover: #a83e37 !important;
  --checkbox-marker-color: #fffefd !important;
  --checklist-done-color: #b29688 !important;
  --code-background: #fdf9f5 !important;
  --code-border-color: #f6e2db !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: rgb(245, 92, 81) !important;
  --code-function: #eacf00 !important;
  --code-important: #e9973f !important;
  --code-keyword: #f22c96 !important;
  --code-normal: #765c4f !important;
  --code-operator: #f85c51 !important;
  --code-property: rgb(14, 205, 201) !important;
  --code-punctuation: #b29688 !important;
  --code-string: #0cc77c !important;
  --code-tag: #f85c51 !important;
  --code-value: #a29bfe !important;
  --codeFont: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(245, 92, 81) !important;
  --collapse-icon-color-collapsed: rgb(245, 92, 81) !important;
  --color-accent: rgb(245, 92, 81) !important;
  --color-accent-1: #f85c51 !important;
  --color-accent-2: #a83e37 !important;
  --color-accent-hsl: 4, 89%, 64% !important;
  --color-blue: #d6e9ff !important;
  --color-blue-rgb: 2, 122, 255 !important;
  --color-cyan: rgb(14, 205, 201) !important;
  --color-cyan-rgb: 83, 223, 221 !important;
  --color-green: #0cc77c !important;
  --color-green-rgb: 68, 207, 110 !important;
  --color-head: rgb(245, 92, 81) !important;
  --color-orange: #e9973f !important;
  --color-orange-rgb: 233, 151, 63 !important;
  --color-pink: #f22c96 !important;
  --color-pink-rgb: 250, 153, 205 !important;
  --color-purple: #a29bfe !important;
  --color-purple-rgb: 168, 130, 255 !important;
  --color-red: #f85c51 !important;
  --color-red-rgb: 251, 70, 76 !important;
  --color-yellow: #eacf00 !important;
  --color-yellow-rgb: 224, 222, 113 !important;
  --dark: #4a3827 !important;
  --darkgray: #4a3827 !important;
  --divider-color: #f6e2db !important;
  --divider-color-hover: rgb(245, 92, 81) !important;
  --dropdown-background: #f6e2db !important;
  --dropdown-background-hover: #d7c3ba !important;
  --embed-block-shadow-hover: 0 0 0 1px #f6e2db,
	  inset 0 0 0 1px #f6e2db !important;
  --embed-border-left: 2px solid rgb(245, 92, 81) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(245, 92, 81) !important;
  --file-header-background: #fffefd !important;
  --file-header-background-focused: #fffefd !important;
  --file-hr: #f6e2db !important;
  --file-margins: 32px !important;
  --flair-background: #f6e2db !important;
  --flair-color: #4a3827 !important;
  --font-mermaid: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', IBM Plex Sans, sans-serif, 'Arial' !important;
  --font-text: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: IBM Plex Sans, sans-serif !important;
  --footnote-divider-color: #f6e2db !important;
  --footnote-id-color: #b29688 !important;
  --footnote-id-color-no-occurrences: rgb(245, 92, 81) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --graph-line: #4a3827 !important;
  --graph-node: #b29688 !important;
  --graph-node-attachment: #eacf00 !important;
  --graph-node-focused: rgb(245, 92, 81) !important;
  --graph-node-tag: #0cc77c !important;
  --graph-node-unresolved: rgb(245, 92, 81) !important;
  --graph-text: #4a3827 !important;
  --gray: #b29688 !important;
  --h1-color: rgb(245, 92, 81) !important;
  --h1-size: 2.00em !important;
  --h2-color: rgb(245, 92, 81) !important;
  --h2-size: 1.8em !important;
  --h2-weight: 600 !important;
  --h3-color: rgb(245, 92, 81) !important;
  --h3-size: 1.4em !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(245, 92, 81) !important;
  --h4-size: 1.2em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(245, 92, 81) !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(245, 92, 81) !important;
  --headerFont: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(245, 92, 81) !important;
  --highlight: #d6e9ff !important;
  --hr-color: #f6e2db !important;
  --icon-color: #b29688 !important;
  --icon-color-active: rgb(245, 92, 81) !important;
  --icon-color-focused: #4a3827 !important;
  --icon-color-hover: #b29688 !important;
  --inline-title-color: rgb(245, 92, 81) !important;
  --inline-title-size: 2.00em !important;
  --input-date-separator: rgb(245, 92, 81) !important;
  --input-placeholder-color: rgb(245, 92, 81) !important;
  --interactive-accent: rgb(245, 92, 81) !important;
  --interactive-accent-hover: #a83e37 !important;
  --interactive-accent-hsl: 4, 89%, 64% !important;
  --interactive-hover: #d7c3ba !important;
  --interactive-normal: #f6e2db !important;
  --italic-color: rgb(14, 205, 201) !important;
  --leaf-handle: #f6e2db !important;
  --light: #fffefd !important;
  --lightgray: #fdf9f5 !important;
  --link-color: rgb(245, 92, 81) !important;
  --link-color-hover: #a83e37 !important;
  --link-external-color: rgb(245, 92, 81) !important;
  --link-external-color-hover: #a83e37 !important;
  --link-unresolved-color: rgb(245, 92, 81) !important;
  --link-unresolved-decoration-color: rgba(245, 92, 81, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(245, 92, 81) !important;
  --list-marker-color-collapsed: rgb(245, 92, 81) !important;
  --list-marker-color-hover: #b29688 !important;
  --menu-background: #fdf9f5 !important;
  --menu-border-color: #4a3827 !important;
  --menu-selection: #f6e2db !important;
  --menu-selection-text: #4a3827 !important;
  --metadata-border-color: #f6e2db !important;
  --metadata-divider-color: #f6e2db !important;
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
  --nav-collapse-icon-color: rgb(245, 92, 81) !important;
  --nav-collapse-icon-color-collapsed: rgb(245, 92, 81) !important;
  --nav-heading-color: #4a3827 !important;
  --nav-heading-color-collapsed: rgb(245, 92, 81) !important;
  --nav-heading-color-collapsed-hover: #b29688 !important;
  --nav-heading-color-hover: #4a3827 !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: rgba(245, 92, 81, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #b29688 !important;
  --nav-item-color-active: #4a3827 !important;
  --nav-item-color-highlighted: #a83e37 !important;
  --nav-item-color-hover: #4a3827 !important;
  --nav-item-color-selected: #4a3827 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(245, 92, 81) !important;
  --nav-tag-color-active: #b29688 !important;
  --nav-tag-color-hover: #b29688 !important;
  --pdf-background: #fffefd !important;
  --pdf-page-background: #fffefd !important;
  --pdf-sidebar-background: #fffefd !important;
  --pill-border-color: #f6e2db !important;
  --pill-border-color-hover: #4a3827 !important;
  --pill-color: #b29688 !important;
  --pill-color-hover: #4a3827 !important;
  --pill-color-remove: rgb(245, 92, 81) !important;
  --pill-color-remove-hover: rgb(245, 92, 81) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #fffefd !important;
  --prompt-border-color: #b29688 !important;
  --raised-background: color-mix(in srgb, #fffefd 65%, transparent) linear-gradient(#fffefd, color-mix(in srgb, #fffefd 65%, transparent)) !important;
  --ribbon-background: #fdf9f5 !important;
  --ribbon-background-collapsed: #fffefd !important;
  --scrollbar-bg: #f6e2db !important;
  --search-clear-button-color: #b29688 !important;
  --search-icon-color: #b29688 !important;
  --search-result-background: #fffefd !important;
  --secondary: rgb(245, 92, 81) !important;
  --setting-group-heading-color: #4a3827 !important;
  --setting-items-background: #f6e2db !important;
  --setting-items-border-color: #f6e2db !important;
  --slider-thumb-border-color: #4a3827 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #f6e2db !important;
  --status-bar-background: #fdf9f5 !important;
  --status-bar-border-color: #f6e2db !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #b29688 !important;
  --suggestion-background: #fffefd !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #f85c51 !important;
  --sync-avatar-color-2: #e9973f !important;
  --sync-avatar-color-3: #eacf00 !important;
  --sync-avatar-color-4: #0cc77c !important;
  --sync-avatar-color-5: rgb(14, 205, 201) !important;
  --sync-avatar-color-6: #d6e9ff !important;
  --sync-avatar-color-7: #a29bfe !important;
  --sync-avatar-color-8: #f22c96 !important;
  --tab-background-active: #fffefd !important;
  --tab-container-background: #fdf9f5 !important;
  --tab-divider-color: #f6e2db !important;
  --tab-outline-color: #f6e2db !important;
  --tab-radius: 8px 8px 0 0 !important;
  --tab-radius-active: 8px 8px 0 0 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #fdf9f5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf9f5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 92, 81) !important;
  --tab-text-color: #b29688 !important;
  --tab-text-color-active: #b29688 !important;
  --tab-text-color-focused: #b29688 !important;
  --tab-text-color-focused-active: #b29688 !important;
  --tab-text-color-focused-active-current: #4a3827 !important;
  --tab-text-color-focused-highlighted: rgb(245, 92, 81) !important;
  --table-add-button-border-color: #f6e2db !important;
  --table-border-color: #f6e2db !important;
  --table-drag-handle-background-active: rgb(245, 92, 81) !important;
  --table-drag-handle-color: rgb(245, 92, 81) !important;
  --table-drag-handle-color-active: #fffefd !important;
  --table-header-background: #fdf9f5 !important;
  --table-header-background-hover: #fdf9f5 !important;
  --table-header-border-color: #f6e2db !important;
  --table-header-color: rgb(245, 92, 81) !important;
  --table-header-weight: 600 !important;
  --table-line: #b29688 !important;
  --table-selection: rgba(245, 92, 81, 0.1) !important;
  --table-selection-border-color: rgb(245, 92, 81) !important;
  --table-selection-border-radius: 8px !important;
  --tag-background: #782b1d52 !important;
  --tag-background-hover: rgba(245, 92, 81, 0.2) !important;
  --tag-border-color: rgba(245, 92, 81, 0.15) !important;
  --tag-border-color-hover: rgba(245, 92, 81, 0.15) !important;
  --tag-color: rgb(245, 92, 81) !important;
  --tag-color-hover: rgb(245, 92, 81) !important;
  --tertiary: #a83e37 !important;
  --text-accent: rgb(245, 92, 81) !important;
  --text-accent-hover: #a83e37 !important;
  --text-error: #f85c51 !important;
  --text-faint: rgb(245, 92, 81) !important;
  --text-highlight-bg: #d6e9ff !important;
  --text-muted: #b29688 !important;
  --text-normal: #4a3827 !important;
  --text-on-accent: #fffefd !important;
  --text-selection: #d7c3ba !important;
  --text-success: #0cc77c !important;
  --text-tag: #0cc77c !important;
  --text-warning: #e9973f !important;
  --textHighlight: #d6e9ff !important;
  --titleFont: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #fdf9f5 !important;
  --titlebar-background-focused: #fdf9f5 !important;
  --titlebar-border-color: #f6e2db !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 249, 245);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 254, 253);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 249, 245);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(246, 226, 219);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 249, 245);
  border-left-color: rgb(246, 226, 219);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 254, 253);
  color: rgb(74, 56, 39);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(248, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 92, 81) none 0px;
  text-decoration: rgb(248, 92, 81);
  text-decoration-color: rgb(248, 92, 81);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(14, 205, 201);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(14, 205, 201) none 0px;
  text-decoration: rgb(14, 205, 201);
  text-decoration-color: rgb(14, 205, 201);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(14, 205, 201);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(14, 205, 201) none 0px;
  text-decoration: rgb(14, 205, 201);
  text-decoration-color: rgb(14, 205, 201);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(248, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 92, 81) none 0px;
  text-decoration: rgb(248, 92, 81);
  text-decoration-color: rgb(248, 92, 81);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(214, 233, 255);
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(74, 56, 39) none 0px;
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body del {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(74, 56, 39) none 0px;
  text-decoration: line-through rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body p {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
  outline: rgb(178, 150, 136) none 0px;
  text-decoration: rgb(178, 150, 136);
  text-decoration-color: rgb(178, 150, 136);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgb(245, 92, 81);
  text-decoration-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgb(245, 92, 81);
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
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body ul > li {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(245, 92, 81);
  text-decoration: rgb(245, 92, 81);
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
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
  border-top-width: 0px;
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
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
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
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
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(246, 226, 219);
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
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(178, 150, 136);
  text-decoration: line-through rgb(178, 150, 136);
  text-decoration-color: rgb(178, 150, 136);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(245, 92, 81);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(245, 92, 81);
  border-top-color: rgb(245, 92, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(2, 122, 255);
  border-left-color: rgb(2, 122, 255);
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-left-color: rgba(83, 223, 221, 0.25);
  border-right-color: rgba(83, 223, 221, 0.25);
  border-top-color: rgba(83, 223, 221, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-left-color: rgba(251, 70, 76, 0.25);
  border-right-color: rgba(251, 70, 76, 0.25);
  border-top-color: rgba(251, 70, 76, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-left-color: rgba(251, 70, 76, 0.25);
  border-right-color: rgba(251, 70, 76, 0.25);
  border-top-color: rgba(251, 70, 76, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.1);
  border-bottom-color: rgba(168, 130, 255, 0.25);
  border-left-color: rgba(168, 130, 255, 0.25);
  border-right-color: rgba(168, 130, 255, 0.25);
  border-top-color: rgba(168, 130, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-left-color: rgba(251, 70, 76, 0.25);
  border-right-color: rgba(251, 70, 76, 0.25);
  border-top-color: rgba(251, 70, 76, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-left-color: rgba(2, 122, 255, 0.25);
  border-right-color: rgba(2, 122, 255, 0.25);
  border-top-color: rgba(2, 122, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-left-color: rgba(2, 122, 255, 0.25);
  border-right-color: rgba(2, 122, 255, 0.25);
  border-top-color: rgba(2, 122, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-left-color: rgba(68, 207, 110, 0.25);
  border-right-color: rgba(68, 207, 110, 0.25);
  border-top-color: rgba(68, 207, 110, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-left-color: rgba(83, 223, 221, 0.25);
  border-right-color: rgba(83, 223, 221, 0.25);
  border-top-color: rgba(83, 223, 221, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-left-color: rgba(2, 122, 255, 0.25);
  border-right-color: rgba(2, 122, 255, 0.25);
  border-top-color: rgba(2, 122, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
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
  text-decoration: rgb(74, 56, 39);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(74, 56, 39);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(120, 43, 29, 0.32);
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
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-left-color: rgba(2, 122, 255, 0.25);
  border-right-color: rgba(2, 122, 255, 0.25);
  border-top-color: rgba(2, 122, 255, 0.25);
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
  text-decoration: rgb(178, 150, 136);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(178, 150, 136);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(178, 150, 136);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
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
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(178, 150, 136);
  text-decoration: rgb(178, 150, 136);
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
  text-decoration: rgb(178, 150, 136);
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
  text-decoration: rgb(178, 150, 136);
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
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
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
  text-decoration: underline dotted rgb(74, 56, 39);
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
}`,
  },
};
