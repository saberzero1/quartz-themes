import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "shimmering-focus",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "ia-writer-quattro-s",
      "eb-garamond",
      "optima",
      "recursive",
      "icons/material-icons",
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --a-row: #0003 !important;
  --active-line-color: #18c1cd !important;
  --alt-heading-color: #8c96d9 !important;
  --b-row: #00000059 !important;
  --background-modifier-active-hover: hsla(184,79%,45%, 0.1) !important;
  --background-modifier-border: hsl(230/**/15%22%) !important;
  --background-modifier-border-focus: hsl(230/**/15%33%) !important;
  --background-modifier-border-hover: hsl(230/**/15%25%) !important;
  --background-modifier-form-field: hsl(230/**/15%18%) !important;
  --background-modifier-form-field-hover: hsl(230/**/15%18%) !important;
  --background-primary: hsl(230/**/15%12%) !important;
  --background-primary-alt: hsl(230/**/15%14%) !important;
  --background-secondary: hsl(230/**/15%16%) !important;
  --background-secondary-alt: hsl(230/**/15%22%) !important;
  --bases-cards-background: hsl(230/**/15%12%) !important;
  --bases-cards-cover-background: hsl(230/**/15%14%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(230/**/15%22%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(230/**/15%25%) !important;
  --bases-embed-border-color: hsl(230/**/15%22%) !important;
  --bases-group-heading-property-color: hsl(230/**/15%73%) !important;
  --bases-table-border-color: hsl(230/**/15%40%) !important;
  --bases-table-cell-background-active: hsl(230/**/15%12%) !important;
  --bases-table-cell-background-disabled: hsl(230/**/15%14%) !important;
  --bases-table-cell-background-selected: hsla(184,79%,45%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(230/**/15%33%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #108189 !important;
  --bases-table-group-background: hsl(230/**/15%14%) !important;
  --bases-table-header-background: hsl(230/**/15%18%) !important;
  --bases-table-header-color: hsl(230/**/15%73%) !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-summary-background: hsl(230/**/15%12%) !important;
  --basic-border: 2px solid hsl(230/**/15%40%) !important;
  --basic-border-color: hsl(230/**/15%40%) !important;
  --bg-hue: 230 !important;
  --bg-hue-dark: 230 !important;
  --bg-hue-light: 230 !important;
  --bg-sat: 15% !important;
  --bg1: hsl(230/**/15%12%) !important;
  --bg2: hsl(230/**/15%14%) !important;
  --bg3: hsl(230/**/15%16%) !important;
  --bg4: hsl(230/**/15%18%) !important;
  --bg5: hsl(230/**/15%22%) !important;
  --bg6: hsl(230/**/15%25%) !important;
  --blockquote-background-color: hsl(230/**/15%16%) !important;
  --blockquote-border-color: hsl(230/**/15%22%) !important;
  --blockquote-border-thickness: 8px !important;
  --blur-background: color-mix(in srgb, hsl(230/**/15%12%) 65%, transparent) linear-gradient(hsl(230/**/15%12%), color-mix(in srgb, hsl(230/**/15%12%) 65%, transparent)) !important;
  --bodyFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #ed5aa8 !important;
  --callout-padding: 8px;
  --callout-title-size: 110%;
  --canvas-background: hsl(230/**/15%12%) !important;
  --canvas-card-label-color: hsl(230/**/15%40%) !important;
  --canvas-dot-pattern: hsl(230/**/15%22%) !important;
  --caret-color: hsl(230/**/30%82%) !important;
  --checkbox-border-color: hsl(230/**/15%60%) !important;
  --checkbox-border-color-hover: #ed5aa8 !important;
  --checkbox-color: #da975d !important;
  --checkbox-color-hover: #ed5aa8 !important;
  --checkbox-marker-color: hsl(230/**/15%12%) !important;
  --checkbox-radius: 8px !important;
  --checkbox-size: 17px !important;
  --checklist-done-color: hsl(230/**/15%40%) !important;
  --code-background: hsl(230/**/15%16%) !important;
  --code-border-color: hsl(230/**/15%22%) !important;
  --code-comment: hsl(230/**/15%40%) !important;
  --code-normal: hsl(230/**/30%82%) !important;
  --code-punctuation: hsl(230/**/15%73%) !important;
  --codeFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(230/**/15%40%) !important;
  --collapse-icon-color-collapsed: #18c1cd !important;
  --color-accent: #18c1cd !important;
  --color-accent-hsl: 184,79%,45% !important;
  --color-base-00: hsl(230/**/15%12%) !important;
  --color-base-10: hsl(230/**/15%14%) !important;
  --color-base-100: hsl(230/**/15%85%) !important;
  --color-base-20: hsl(230/**/15%16%) !important;
  --color-base-25: hsl(230/**/15%18%) !important;
  --color-base-30: hsl(230/**/15%22%) !important;
  --color-base-35: hsl(230/**/15%25%) !important;
  --color-base-40: hsl(230/**/15%33%) !important;
  --color-base-50: hsl(230/**/15%40%) !important;
  --color-base-60: hsl(230/**/15%60%) !important;
  --color-base-70: hsl(230/**/15%73%) !important;
  --color-base-85s: hsl(230/**/30%82%) !important;
  --dark: hsl(230/**/30%82%) !important;
  --darkgray: hsl(230/**/30%82%) !important;
  --divider-color: hsl(230/**/15%22%) !important;
  --divider-color-hover: #ed5aa8 !important;
  --divider-width: 2px !important;
  --dropdown-background: hsl(230/**/15%12%) !important;
  --dropdown-background-hover: hsl(230/**/15%16%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(230/**/15%22%), inset 0 0 0 1px hsl(230/**/15%22%) !important;
  --embed-border: 4px double hsl(230/**/15%40%) !important;
  --embed-border-bottom: 4px double hsl(230/**/15%40%) !important;
  --embed-border-end: 4px double hsl(230/**/15%40%) !important;
  --embed-border-start: 4px double hsl(230/**/15%40%) !important;
  --embed-border-top: 4px double hsl(230/**/15%40%) !important;
  --embed-padding: 4px 8px !important;
  --file-header-background: hsl(230/**/15%12%) !important;
  --file-header-background-focused: hsl(230/**/15%12%) !important;
  --file-header-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(230/**/15%12%) !important;
  --flair-color: hsl(230/**/30%82%) !important;
  --font-heading-theme: "Optima","Recursive S" !important;
  --font-interface: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Recursive S" !important;
  --font-mermaid: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "iA Writer Quattro S", Arial' !important;
  --font-text: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "iA Writer Quattro S" !important;
  --footnote-divider-color: hsl(230/**/15%22%) !important;
  --footnote-id-color: hsl(230/**/15%73%) !important;
  --footnote-id-color-no-occurrences: hsl(230/**/15%40%) !important;
  --graph-line: hsl(230/**/15%25%) !important;
  --graph-node: hsl(230/**/15%73%) !important;
  --graph-node-focused: #18c1cd !important;
  --graph-node-unresolved: hsl(230/**/15%40%) !important;
  --graph-text: hsl(230/**/30%82%) !important;
  --gray: hsl(230/**/15%73%) !important;
  --h1-font: "Optima","Recursive S" !important;
  --h1-size: 1.7em !important;
  --h2-font: "Optima","Recursive S" !important;
  --h2-size: 1.5em !important;
  --h3-font: "Optima","Recursive S" !important;
  --h3-size: 1.35em !important;
  --h4-font: "Optima","Recursive S" !important;
  --h4-size: 1.2em !important;
  --h5-font: "Optima","Recursive S" !important;
  --h5-size: 1.1em !important;
  --h6-font: "Optima","Recursive S" !important;
  --h6-size: 1em !important;
  --headerFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(230/**/15%40%) !important;
  --heading-letter-spacing: 1.5px !important;
  --heading-scaling: 1 !important;
  --highlight: hsla(184,79%,45%, 0.1) !important;
  --highlight-hue-1: 50 !important;
  --highlight-sla-values: 85% 40%/40% !important;
  --hotkey-color: #da975d !important;
  --hover-accent: #ed5aa8 !important;
  --hr-color: hsl(230/**/15%40%) !important;
  --icon-color: hsl(230/**/15%73%) !important;
  --icon-color-active: #18c1cd !important;
  --icon-color-focused: hsl(230/**/30%82%) !important;
  --icon-color-hover: #ed5aa8 !important;
  --icon-font: "Material Icons (Filled)" !important;
  --icon-stroke: 2px !important;
  --image-size: 50 !important;
  --inactive-pane-opacity: 75% !important;
  --indentation-guide-color: hsl(230/**/15%40%) !important;
  --indentation-guide-color-active: hsl(230/**/15%40%) !important;
  --indentation-guide-width: 1.5px !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-code-color: #da975d !important;
  --inline-title-color: hsl(230/**/15%60%) !important;
  --inline-title-font: "Optima","Recursive S" !important;
  --inline-title-margin-bottom: .75em !important;
  --inline-title-size: 1.7em !important;
  --input-date-separator: hsl(230/**/15%40%) !important;
  --input-placeholder-color: hsl(230/**/15%40%) !important;
  --interactive-accent: #108189 !important;
  --interactive-accent-hover: #ed5aa8 !important;
  --interactive-accent-hsl: 184,79%,45% !important;
  --interactive-hover: hsl(230/**/15%16%) !important;
  --interactive-normal: hsl(230/**/15%12%) !important;
  --italic-color: #ed5aa8 !important;
  --light: hsl(230/**/15%12%) !important;
  --lightgray: hsl(230/**/15%16%) !important;
  --line-height-tight: 1.2 !important;
  --link-color: #18c1cd !important;
  --link-color-hover: #ed5aa8 !important;
  --link-decoration-thickness: 1.2px !important;
  --link-external-color: #18c1cd !important;
  --link-external-color-hover: #ed5aa8 !important;
  --link-unresolved-color: #6fb74e !important;
  --link-unresolved-decoration-color: hsla(184,79%,45%, 0.3) !important;
  --link-unresolved-opacity: .8 !important;
  --list-indent: 1.6em !important;
  --list-marker-color: hsl(230/**/15%40%) !important;
  --list-marker-color-collapsed: #18c1cd !important;
  --list-marker-color-hover: hsl(230/**/15%73%) !important;
  --longform-base-line-height: 1 !important;
  --longform-font-size: 1.3rem !important;
  --longform-font-text-theme: "Garamond","Times New Roman",serif !important;
  --longform-letter-spacing: 0px !important;
  --menu-background: hsl(230/**/15%16%) !important;
  --menu-border-color: hsl(230/**/15%25%) !important;
  --metadata-border-color: hsl(230/**/15%22%) !important;
  --metadata-divider-color: hsl(230/**/15%22%) !important;
  --metadata-gap: 1px !important;
  --metadata-input-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.8em !important;
  --metadata-input-text-color: hsl(230/**/30%82%) !important;
  --metadata-label-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(230/**/15%73%) !important;
  --metadata-label-text-color-hover: hsl(230/**/15%73%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(230/**/15%33%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(230/**/15%25%) !important;
  --modal-background: hsl(230/**/15%12%) !important;
  --modal-border-color: hsl(230/**/15%33%) !important;
  --modal-height: 92vh !important;
  --muted-border: 2px solid hsl(230/**/15%22%) !important;
  --muted-border-color: hsl(230/**/15%22%) !important;
  --nav-collapse-icon-color: hsl(230/**/15%40%) !important;
  --nav-collapse-icon-color-collapsed: hsl(230/**/15%40%) !important;
  --nav-heading-color: hsl(230/**/30%82%) !important;
  --nav-heading-color-collapsed: hsl(230/**/15%40%) !important;
  --nav-heading-color-collapsed-hover: hsl(230/**/15%73%) !important;
  --nav-heading-color-hover: hsl(230/**/30%82%) !important;
  --nav-indentation-guide-color: hsl(230/**/15%40%) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-selected: hsla(184,79%,45%, 0.15) !important;
  --nav-item-color: hsl(230/**/15%73%) !important;
  --nav-item-color-active: #18c1cd !important;
  --nav-item-color-highlighted: #ed5aa8 !important;
  --nav-item-color-hover: #ed5aa8 !important;
  --nav-item-color-selected: hsl(230/**/30%82%) !important;
  --nav-item-size: 15px !important;
  --nav-tag-color: hsl(230/**/15%40%) !important;
  --nav-tag-color-active: hsl(230/**/15%73%) !important;
  --nav-tag-color-hover: hsl(230/**/15%73%) !important;
  --pdf-background: hsl(230/**/15%12%) !important;
  --pdf-page-background: hsl(230/**/15%12%) !important;
  --pdf-shadow: 0 0 0 1px hsl(230/**/15%22%) !important;
  --pdf-sidebar-background: hsl(230/**/15%12%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(230/**/15%22%) !important;
  --pill-border-color: hsl(230/**/15%22%) !important;
  --pill-border-color-hover: hsl(230/**/15%25%) !important;
  --pill-color: hsl(230/**/15%73%) !important;
  --pill-color-hover: hsl(230/**/30%82%) !important;
  --pill-color-remove: hsl(230/**/15%40%) !important;
  --pill-color-remove-hover: #18c1cd !important;
  --prompt-background: hsl(230/**/15%12%) !important;
  --prompt-border-color: hsl(230/**/15%33%) !important;
  --radius-xs: 2px !important;
  --raised-background: color-mix(in srgb, hsl(230/**/15%12%) 65%, transparent) linear-gradient(hsl(230/**/15%12%), color-mix(in srgb, hsl(230/**/15%12%) 65%, transparent)) !important;
  --readability-text-shadow-dark: 1px 1px 0px #000 !important;
  --ribbon-background: hsl(230/**/15%16%) !important;
  --ribbon-background-collapsed: hsl(230/**/15%12%) !important;
  --search-clear-button-color: hsl(230/**/15%73%) !important;
  --search-icon-color: hsl(230/**/15%73%) !important;
  --search-match-color: #e0de71 !important;
  --search-result-background: hsl(230/**/15%12%) !important;
  --secondary: #18c1cd !important;
  --secondary-accent: #da975d !important;
  --setting-group-heading-color: hsl(230/**/30%82%) !important;
  --setting-items-background: hsl(230/**/15%14%) !important;
  --setting-items-border-color: hsl(230/**/15%22%) !important;
  --signature: "⟡" !important;
  --slider-thumb-border-color: hsl(230/**/15%25%) !important;
  --slider-track-background: hsl(230/**/15%22%) !important;
  --status-bar-background: hsl(230/**/15%16%) !important;
  --status-bar-border-color: hsl(230/**/15%22%) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: hsl(230/**/15%73%) !important;
  --suggestion-background: hsl(230/**/15%12%) !important;
  --tab-background-active: hsl(230/**/15%16%) !important;
  --tab-container-background: hsl(230/**/15%16%) !important;
  --tab-divider-color: hsl(230/**/15%25%) !important;
  --tab-outline-color: hsl(230/**/15%22%) !important;
  --tab-stacked-header-width: 28px !important;
  --tab-switcher-background: hsl(230/**/15%16%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230/**/15%16%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #18c1cd !important;
  --tab-text-color: hsl(230/**/15%40%) !important;
  --tab-text-color-active: hsl(230/**/15%73%) !important;
  --tab-text-color-focused: hsl(230/**/15%73%) !important;
  --tab-text-color-focused-active: hsl(230/**/15%73%) !important;
  --tab-text-color-focused-active-current: hsl(230/**/30%82%) !important;
  --tab-text-color-focused-highlighted: #18c1cd !important;
  --table-add-button-border-color: hsl(230/**/15%22%) !important;
  --table-border-color: hsl(230/**/15%40%) !important;
  --table-drag-handle-background-active: #108189 !important;
  --table-drag-handle-color: hsl(230/**/15%40%) !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-background: hsl(230/**/15%22%) !important;
  --table-header-background-hover: hsl(230/**/15%22%) !important;
  --table-header-border-color: hsl(230/**/15%40%) !important;
  --table-header-color: hsl(230/**/30%82%) !important;
  --table-header-size: 14.4px !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: #00000059 !important;
  --table-selection: hsla(184,79%,45%, 0.1) !important;
  --table-selection-border-color: #108189 !important;
  --table-text-size: 14.4px !important;
  --table-white-space: normal !important;
  --tag-background: none !important;
  --tag-background-hover: none !important;
  --tag-border-color: hsla(184,79%,45%, 0.15) !important;
  --tag-border-color-hover: hsla(184,79%,45%, 0.15) !important;
  --tag-border-width: 0 !important;
  --tag-color: #da975d !important;
  --tag-color-hover: #ed5aa8 !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0 !important;
  --tag-padding-y: 0 !important;
  --tag-size: 1em !important;
  --tertiary: #ed5aa8 !important;
  --text-accent: #18c1cd !important;
  --text-accent-hover: #ed5aa8 !important;
  --text-faint: hsl(230/**/15%40%) !important;
  --text-gray: hsl(230/**/15%60%) !important;
  --text-muted: hsl(230/**/15%73%) !important;
  --text-normal: hsl(230/**/30%82%) !important;
  --text-on-accent: #fff !important;
  --text-selection: hsl(184,79%,45%,20%) !important;
  --textHighlight: hsla(184,79%,45%, 0.1) !important;
  --thin-border: 1px solid hsl(230/**/15%40%) !important;
  --thin-muted-border: 1px solid hsl(230/**/15%22%) !important;
  --titleFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(230/**/15%25%) !important;
  --titlebar-background-focused: hsl(230/**/15%22%) !important;
  --titlebar-border-color: hsl(230/**/15%22%) !important;
  --titlebar-text-color: hsl(230/**/15%73%) !important;
  --titlebar-text-color-focused: hsl(230/**/30%82%) !important;
  --transition-delay-passing-over-protection: .2s !important;
  --vault-profile-color: hsl(230/**/30%82%) !important;
  --vault-profile-color-hover: hsl(230/**/30%82%) !important;
  --vim-cursor-bg: #000 !important;
  --vim-cursor-blink-rate: 1.2s !important;
  --vim-cursor-color: #b3b3b3 !important;
  --vim-cursor-outline: #e6e6e6 !important;
  --vim-cursor-outline-width: 1px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 37, 47);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 28, 35);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.35);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(87, 92, 117);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(35, 37, 47);
  border-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(30, 32, 41);
  border-color: rgb(87, 92, 117);
  border-radius: 4px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25.6px;
  color: rgb(218, 151, 93);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 37, 47);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 50, 65);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(35, 37, 47);
  border-left-color: rgb(48, 50, 65);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 28, 35);
  color: rgb(195, 200, 223);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration-color: rgb(237, 90, 168);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration-color: rgb(237, 90, 168);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration-color: rgb(237, 90, 168);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(237, 90, 168);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(237, 90, 168) none 0px;
  text-decoration-color: rgb(237, 90, 168);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(189, 160, 15, 0.4);
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body del {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 143, 168);
  border-radius: 8px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(218, 151, 93);
  border-color: rgb(138, 143, 168);
}

html[saved-theme="dark"] body p {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 179, 196) none 0px;
  text-decoration-color: rgb(176, 179, 196);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(24, 193, 205);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(24, 193, 205) none 0px;
  text-decoration: underline 1.2px;
  text-decoration-color: rgb(24, 193, 205);
  text-decoration-thickness: 1.2px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(24, 193, 205);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(24, 193, 205) none 0px;
  text-decoration: underline 1.2px double;
  text-decoration-color: rgb(24, 193, 205);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(111, 183, 78);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 183, 78) none 0px;
  text-decoration: underline 1.2px double rgba(24, 193, 205, 0.3);
  text-decoration-color: rgba(24, 193, 205, 0.3);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body dt {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 143, 168);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(35, 37, 47);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body table {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 192.594px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.35);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(48, 50, 65);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(30, 32, 41);
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-style: double;
  border-bottom-width: 4px;
  border-left-color: rgb(87, 92, 117);
  border-left-style: double;
  border-left-width: 4px;
  border-right-color: rgb(87, 92, 117);
  border-right-style: double;
  border-right-width: 4px;
  border-top-color: rgb(87, 92, 117);
  border-top-style: double;
  border-top-width: 4px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(195, 200, 223);
  border-bottom-style: double;
  border-left-color: rgb(195, 200, 223);
  border-left-style: double;
  border-right-color: rgb(195, 200, 223);
  border-right-style: double;
  border-top-color: rgb(195, 200, 223);
  border-top-style: double;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 143, 168);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(138, 143, 168);
  border-right-color: rgb(138, 143, 168);
  border-top-color: rgb(138, 143, 168);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: -25.5px;
  width: 17px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(195, 200, 223);
  text-decoration-color: rgb(195, 200, 223);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(176, 179, 196);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
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
  background-color: rgb(39, 41, 53);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(48, 50, 65);
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 28, 35);
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-width: 2px;
  border-left-color: rgb(87, 92, 117);
  border-left-width: 2px;
  border-right-color: rgb(87, 92, 117);
  border-right-width: 2px;
  border-top-color: rgb(87, 92, 117);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(195, 200, 223);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(195, 200, 223) none 0px;
  text-decoration-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-width: 2px;
  border-left-color: rgb(87, 92, 117);
  border-left-width: 2px;
  border-right-color: rgb(87, 92, 117);
  border-right-width: 2px;
  border-top-color: rgb(87, 92, 117);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(48, 50, 65);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: ridge;
  border-left-color: rgb(48, 50, 65);
  border-left-style: ridge;
  border-left-width: 1px;
  border-right-color: rgb(48, 50, 65);
  border-right-style: ridge;
  border-right-width: 1px;
  border-top-color: rgb(48, 50, 65);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: ridge;
  border-top-width: 1px;
  box-shadow: rgba(255, 255, 255, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(24, 193, 205);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(24, 193, 205, 0.15);
  border-bottom-left-radius: 25.6px;
  border-bottom-right-radius: 25.6px;
  border-left-color: rgba(24, 193, 205, 0.15);
  border-right-color: rgba(24, 193, 205, 0.15);
  border-top-color: rgba(24, 193, 205, 0.15);
  border-top-left-radius: 25.6px;
  border-top-right-radius: 25.6px;
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(218, 151, 93);
}

html[saved-theme="dark"] body h1 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h2 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(138, 143, 168);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h3 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h4 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h5 {
  color: rgb(140, 150, 217);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body h6 {
  color: rgb(195, 200, 223);
  font-family: Optima, "Recursive S";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(48, 50, 65);
  border-right-color: rgb(48, 50, 65);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 28, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 35);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(87, 92, 117);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(195, 200, 223);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(48, 50, 65);
  border-left-color: rgb(35, 37, 47);
  border-left-style: groove;
  border-left-width: 2px;
  border-right-color: rgb(48, 50, 65);
  border-top-color: rgb(35, 37, 47);
  border-top-style: groove;
  border-top-width: 2px;
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(176, 179, 196);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(176, 179, 196);
  stroke: rgb(176, 179, 196);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(87, 92, 117);
  border-left-color: rgb(87, 92, 117);
  border-right-color: rgb(87, 92, 117);
  border-top-color: rgb(87, 92, 117);
  color: rgb(87, 92, 117);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(87, 92, 117);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(30, 32, 41);
  border-bottom-color: rgb(87, 92, 117);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(87, 92, 117);
  border-left-width: 1px;
  border-right-color: rgb(87, 92, 117);
  border-right-width: 1px;
  border-top-color: rgb(87, 92, 117);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 12px;
  margin-left: 4px;
  margin-right: -4px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(176, 179, 196);
  border-left-color: rgb(176, 179, 196);
  border-right-color: rgb(176, 179, 196);
  border-top-color: rgb(176, 179, 196);
  color: rgb(176, 179, 196);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(48, 50, 65);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(195, 200, 223);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(24, 193, 205);
  border-left-color: rgb(24, 193, 205);
  border-right-color: rgb(24, 193, 205);
  border-top-color: rgb(24, 193, 205);
  color: rgb(24, 193, 205);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 37, 47);
  border-bottom-color: rgb(195, 200, 223);
  border-bottom-style: solid;
  border-left-color: rgb(195, 200, 223);
  border-left-style: solid;
  border-right-color: rgb(195, 200, 223);
  border-right-style: solid;
  border-top-color: rgb(195, 200, 223);
  border-top-style: solid;
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(195, 200, 223);
  border-left-color: rgb(195, 200, 223);
  border-right-color: rgb(195, 200, 223);
  border-top-color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body sub {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body summary {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body sup {
  color: rgb(195, 200, 223);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(24, 193, 205, 0.15);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-left-color: rgba(24, 193, 205, 0.15);
  border-right-color: rgba(24, 193, 205, 0.15);
  border-top-color: rgba(24, 193, 205, 0.15);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: rgb(218, 151, 93);
}`,
  },
  light: {
    base: `:root:root {
  --a-row: #00000008 !important;
  --active-line-color: #1396a0 !important;
  --alt-heading-color: #5460ab !important;
  --b-row: #00000014 !important;
  --background-modifier-active-hover: hsla(184,79%,35%, 0.1) !important;
  --background-modifier-border: hsl(230/**/25%88%) !important;
  --background-modifier-border-focus: hsl(230/**/25%74%) !important;
  --background-modifier-border-hover: hsl(230/**/25%83%) !important;
  --background-modifier-form-field: hsl(230/**/37.5%99%) !important;
  --background-modifier-form-field-hover: hsl(230/**/37.5%99%) !important;
  --background-primary: hsl(230/**/37.5%99%) !important;
  --background-primary-alt: hsl(230/**/25%97%) !important;
  --background-secondary: hsl(230/**/25%95%) !important;
  --bases-cards-background: hsl(230/**/37.5%99%) !important;
  --bases-cards-cover-background: hsl(230/**/25%97%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(230/**/25%88%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(230/**/25%83%) !important;
  --bases-embed-border-color: hsl(230/**/25%88%) !important;
  --bases-group-heading-property-color: hsl(230/**/25%35%) !important;
  --bases-table-border-color: hsl(230/**/25%67%) !important;
  --bases-table-cell-background-active: hsl(230/**/37.5%99%) !important;
  --bases-table-cell-background-disabled: hsl(230/**/25%97%) !important;
  --bases-table-cell-background-selected: hsla(184,79%,35%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(230/**/25%74%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #108189 !important;
  --bases-table-group-background: hsl(230/**/25%97%) !important;
  --bases-table-header-background: hsl(230/**/25%92%) !important;
  --bases-table-header-color: hsl(230/**/25%35%) !important;
  --bases-table-header-weight: 600 !important;
  --bases-table-summary-background: hsl(230/**/37.5%99%) !important;
  --basic-border: 2px solid hsl(230/**/25%67%) !important;
  --basic-border-color: hsl(230/**/25%67%) !important;
  --bg-hue: 230 !important;
  --bg-hue-dark: 230 !important;
  --bg-hue-light: 230 !important;
  --bg-sat: 25% !important;
  --bg1: hsl(230/**/37.5%99%) !important;
  --bg2: hsl(230/**/25%97%) !important;
  --bg3: hsl(230/**/25%95%) !important;
  --bg4: hsl(230/**/25%92%) !important;
  --bg5: hsl(230/**/25%88%) !important;
  --bg6: hsl(230/**/25%83%) !important;
  --blockquote-background-color: hsl(230/**/25%95%) !important;
  --blockquote-border-color: hsl(230/**/25%88%) !important;
  --blockquote-border-thickness: 8px !important;
  --blur-background: color-mix(in srgb, hsl(230/**/37.5%99%) 65%, transparent) linear-gradient(hsl(230/**/37.5%99%), color-mix(in srgb, hsl(230/**/37.5%99%) 65%, transparent)) !important;
  --bodyFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #dc388f !important;
  --callout-padding: 8px;
  --callout-title-size: 110%;
  --canvas-background: hsl(230/**/37.5%99%) !important;
  --canvas-card-label-color: hsl(230/**/25%67%) !important;
  --canvas-dot-pattern: hsl(230/**/25%88%) !important;
  --caret-color: hsl(230/**/50%24%) !important;
  --checkbox-border-color: hsl(230/**/25%44%) !important;
  --checkbox-border-color-hover: #dc388f !important;
  --checkbox-color: #c67e3f !important;
  --checkbox-color-hover: #dc388f !important;
  --checkbox-marker-color: hsl(230/**/37.5%99%) !important;
  --checkbox-radius: 8px !important;
  --checkbox-size: 17px !important;
  --checklist-done-color: hsl(230/**/25%67%) !important;
  --code-background: hsl(230/**/25%95%) !important;
  --code-border-color: hsl(230/**/25%88%) !important;
  --code-comment: hsl(230/**/25%67%) !important;
  --code-normal: hsl(230/**/50%24%) !important;
  --code-property: #279b99 !important;
  --code-punctuation: hsl(230/**/25%35%) !important;
  --codeFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(230/**/25%67%) !important;
  --collapse-icon-color-collapsed: #1396a0 !important;
  --color-accent: #1396a0 !important;
  --color-accent-hsl: 184,79%,35% !important;
  --color-base-00: hsl(230/**/37.5%99%) !important;
  --color-base-10: hsl(230/**/25%97%) !important;
  --color-base-100: hsl(230/**/25%13%) !important;
  --color-base-20: hsl(230/**/25%95%) !important;
  --color-base-25: hsl(230/**/25%92%) !important;
  --color-base-30: hsl(230/**/25%88%) !important;
  --color-base-35: hsl(230/**/25%83%) !important;
  --color-base-40: hsl(230/**/25%74%) !important;
  --color-base-50: hsl(230/**/25%67%) !important;
  --color-base-60: hsl(230/**/25%44%) !important;
  --color-base-70: hsl(230/**/25%35%) !important;
  --color-base-85s: hsl(230/**/50%24%) !important;
  --color-cyan: #279b99 !important;
  --dark: hsl(230/**/50%24%) !important;
  --darkgray: hsl(230/**/50%24%) !important;
  --divider-color: hsl(230/**/25%92%) !important;
  --divider-color-hover: #dc388f !important;
  --divider-width: 2px !important;
  --dropdown-background: hsl(230/**/37.5%99%) !important;
  --dropdown-background-hover: hsl(230/**/25%95%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(230/**/25%88%), inset 0 0 0 1px hsl(230/**/25%88%) !important;
  --embed-border: 4px double hsl(230/**/25%67%) !important;
  --embed-border-bottom: 4px double hsl(230/**/25%67%) !important;
  --embed-border-end: 4px double hsl(230/**/25%67%) !important;
  --embed-border-start: 4px double hsl(230/**/25%67%) !important;
  --embed-border-top: 4px double hsl(230/**/25%67%) !important;
  --embed-padding: 4px 8px !important;
  --file-header-background: hsl(230/**/37.5%99%) !important;
  --file-header-background-focused: hsl(230/**/37.5%99%) !important;
  --file-header-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(230/**/37.5%99%) !important;
  --flair-color: hsl(230/**/50%24%) !important;
  --font-heading-theme: "Optima","Recursive S" !important;
  --font-interface: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Recursive S" !important;
  --font-mermaid: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "iA Writer Quattro S", Arial' !important;
  --font-text: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "iA Writer Quattro S" !important;
  --footnote-divider-color: hsl(230/**/25%88%) !important;
  --footnote-id-color: hsl(230/**/25%35%) !important;
  --footnote-id-color-no-occurrences: hsl(230/**/25%67%) !important;
  --graph-line: hsl(230/**/25%83%) !important;
  --graph-node: hsl(230/**/25%35%) !important;
  --graph-node-focused: #1396a0 !important;
  --graph-node-unresolved: hsl(230/**/25%67%) !important;
  --graph-text: hsl(230/**/50%24%) !important;
  --gray: hsl(230/**/25%35%) !important;
  --h1-font: "Optima","Recursive S" !important;
  --h1-size: 1.7em !important;
  --h2-font: "Optima","Recursive S" !important;
  --h2-size: 1.5em !important;
  --h3-font: "Optima","Recursive S" !important;
  --h3-size: 1.35em !important;
  --h4-font: "Optima","Recursive S" !important;
  --h4-size: 1.2em !important;
  --h5-font: "Optima","Recursive S" !important;
  --h5-size: 1.1em !important;
  --h6-font: "Optima","Recursive S" !important;
  --h6-size: 1em !important;
  --headerFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(230/**/25%67%) !important;
  --heading-letter-spacing: 1.5px !important;
  --heading-scaling: 1 !important;
  --highlight: hsla(184,79%,35%, 0.1) !important;
  --highlight-hue-1: 50 !important;
  --highlight-sla-values: 85% 70%/40% !important;
  --hotkey-color: #c67e3f !important;
  --hover-accent: #dc388f !important;
  --hr-color: hsl(230/**/25%67%) !important;
  --icon-color: hsl(230/**/25%35%) !important;
  --icon-color-active: #1396a0 !important;
  --icon-color-focused: hsl(230/**/50%24%) !important;
  --icon-color-hover: #dc388f !important;
  --icon-font: "Material Icons (Filled)" !important;
  --icon-stroke: 2px !important;
  --image-size: 50 !important;
  --inactive-pane-opacity: 75% !important;
  --indentation-guide-color: hsl(230/**/25%67%) !important;
  --indentation-guide-color-active: hsl(230/**/25%67%) !important;
  --indentation-guide-width: 1.5px !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-code-color: #c67e3f !important;
  --inline-title-color: hsl(230/**/25%44%) !important;
  --inline-title-font: "Optima","Recursive S" !important;
  --inline-title-margin-bottom: .75em !important;
  --inline-title-size: 1.7em !important;
  --input-date-separator: hsl(230/**/25%67%) !important;
  --input-placeholder-color: hsl(230/**/25%67%) !important;
  --interactive-accent: #108189 !important;
  --interactive-accent-hover: #dc388f !important;
  --interactive-accent-hsl: 184,79%,35% !important;
  --interactive-hover: hsl(230/**/25%95%) !important;
  --interactive-normal: hsl(230/**/37.5%99%) !important;
  --italic-color: #dc388f !important;
  --light: hsl(230/**/37.5%99%) !important;
  --lightgray: hsl(230/**/25%95%) !important;
  --line-height-tight: 1.2 !important;
  --link-color: #1396a0 !important;
  --link-color-hover: #dc388f !important;
  --link-decoration-thickness: 1.2px !important;
  --link-external-color: #1396a0 !important;
  --link-external-color-hover: #dc388f !important;
  --link-unresolved-color: #6fb74e !important;
  --link-unresolved-decoration-color: hsla(184,79%,35%, 0.3) !important;
  --link-unresolved-opacity: .8 !important;
  --list-indent: 1.6em !important;
  --list-marker-color: hsl(230/**/25%67%) !important;
  --list-marker-color-collapsed: #1396a0 !important;
  --list-marker-color-hover: hsl(230/**/25%35%) !important;
  --longform-base-line-height: 1 !important;
  --longform-font-size: 1.3rem !important;
  --longform-font-text-theme: "Garamond","Times New Roman",serif !important;
  --longform-letter-spacing: 0px !important;
  --menu-background: hsl(230/**/25%95%) !important;
  --menu-border-color: hsl(230/**/25%83%) !important;
  --metadata-border-color: hsl(230/**/25%88%) !important;
  --metadata-divider-color: hsl(230/**/25%88%) !important;
  --metadata-gap: 1px !important;
  --metadata-input-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.8em !important;
  --metadata-input-text-color: hsl(230/**/50%24%) !important;
  --metadata-label-font: "Recursive S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(230/**/25%35%) !important;
  --metadata-label-text-color-hover: hsl(230/**/25%35%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(230/**/25%74%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(230/**/25%83%) !important;
  --modal-background: hsl(230/**/37.5%99%) !important;
  --modal-border-color: hsl(230/**/25%74%) !important;
  --modal-height: 92vh !important;
  --muted-border: 2px solid hsl(230/**/25%88%) !important;
  --muted-border-color: hsl(230/**/25%88%) !important;
  --nav-collapse-icon-color: hsl(230/**/25%67%) !important;
  --nav-collapse-icon-color-collapsed: hsl(230/**/25%67%) !important;
  --nav-heading-color: hsl(230/**/50%24%) !important;
  --nav-heading-color-collapsed: hsl(230/**/25%67%) !important;
  --nav-heading-color-collapsed-hover: hsl(230/**/25%35%) !important;
  --nav-heading-color-hover: hsl(230/**/50%24%) !important;
  --nav-indentation-guide-color: hsl(230/**/25%67%) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-selected: hsla(184,79%,35%, 0.15) !important;
  --nav-item-color: hsl(230/**/25%35%) !important;
  --nav-item-color-active: #1396a0 !important;
  --nav-item-color-highlighted: #dc388f !important;
  --nav-item-color-hover: #dc388f !important;
  --nav-item-color-selected: hsl(230/**/50%24%) !important;
  --nav-item-size: 15px !important;
  --nav-tag-color: hsl(230/**/25%67%) !important;
  --nav-tag-color-active: hsl(230/**/25%35%) !important;
  --nav-tag-color-hover: hsl(230/**/25%35%) !important;
  --pdf-background: hsl(230/**/37.5%99%) !important;
  --pdf-page-background: hsl(230/**/37.5%99%) !important;
  --pdf-sidebar-background: hsl(230/**/37.5%99%) !important;
  --pill-border-color: hsl(230/**/25%88%) !important;
  --pill-border-color-hover: hsl(230/**/25%83%) !important;
  --pill-color: hsl(230/**/25%35%) !important;
  --pill-color-hover: hsl(230/**/50%24%) !important;
  --pill-color-remove: hsl(230/**/25%67%) !important;
  --pill-color-remove-hover: #1396a0 !important;
  --prompt-background: hsl(230/**/37.5%99%) !important;
  --prompt-border-color: hsl(230/**/25%74%) !important;
  --radius-xs: 2px !important;
  --raised-background: color-mix(in srgb, hsl(230/**/37.5%99%) 65%, transparent) linear-gradient(hsl(230/**/37.5%99%), color-mix(in srgb, hsl(230/**/37.5%99%) 65%, transparent)) !important;
  --readability-text-shadow-dark: 1px 1px 0px #000 !important;
  --ribbon-background: hsl(230/**/25%95%) !important;
  --ribbon-background-collapsed: hsl(230/**/37.5%99%) !important;
  --search-clear-button-color: hsl(230/**/25%35%) !important;
  --search-icon-color: hsl(230/**/25%35%) !important;
  --search-match-color: #ec7500 !important;
  --search-result-background: hsl(230/**/37.5%99%) !important;
  --secondary: #1396a0 !important;
  --secondary-accent: #c67e3f !important;
  --setting-group-heading-color: hsl(230/**/50%24%) !important;
  --setting-items-background: hsl(230/**/25%97%) !important;
  --setting-items-border-color: hsl(230/**/25%88%) !important;
  --signature: "⟡" !important;
  --slider-thumb-border-color: hsl(230/**/25%83%) !important;
  --slider-track-background: hsl(230/**/25%88%) !important;
  --status-bar-background: hsl(230/**/25%95%) !important;
  --status-bar-border-color: hsl(230/**/25%92%) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: hsl(230/**/25%35%) !important;
  --suggestion-background: hsl(230/**/37.5%99%) !important;
  --sync-avatar-color-5: #279b99 !important;
  --tab-background-active: hsl(230/**/25%95%) !important;
  --tab-container-background: hsl(230/**/25%95%) !important;
  --tab-divider-color: hsl(230/**/25%83%) !important;
  --tab-outline-color: hsl(230/**/25%92%) !important;
  --tab-stacked-header-width: 28px !important;
  --tab-switcher-background: hsl(230/**/25%95%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(230/**/25%95%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #1396a0 !important;
  --tab-text-color: hsl(230/**/25%67%) !important;
  --tab-text-color-active: hsl(230/**/25%35%) !important;
  --tab-text-color-focused: hsl(230/**/25%35%) !important;
  --tab-text-color-focused-active: hsl(230/**/25%35%) !important;
  --tab-text-color-focused-active-current: hsl(230/**/50%24%) !important;
  --tab-text-color-focused-highlighted: #1396a0 !important;
  --table-add-button-border-color: hsl(230/**/25%88%) !important;
  --table-border-color: hsl(230/**/25%67%) !important;
  --table-drag-handle-background-active: #108189 !important;
  --table-drag-handle-color: hsl(230/**/25%67%) !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-background: hsl(230/**/25%88%) !important;
  --table-header-background-hover: hsl(230/**/25%88%) !important;
  --table-header-border-color: hsl(230/**/25%67%) !important;
  --table-header-color: hsl(230/**/50%24%) !important;
  --table-header-size: 14.4px !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: #00000014 !important;
  --table-selection: hsla(184,79%,35%, 0.1) !important;
  --table-selection-border-color: #108189 !important;
  --table-text-size: 14.4px !important;
  --table-white-space: normal !important;
  --tag-background: none !important;
  --tag-background-hover: none !important;
  --tag-border-color: hsla(184,79%,35%, 0.15) !important;
  --tag-border-color-hover: hsla(184,79%,35%, 0.15) !important;
  --tag-border-width: 0 !important;
  --tag-color: #c67e3f !important;
  --tag-color-hover: #dc388f !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0 !important;
  --tag-padding-y: 0 !important;
  --tag-size: 1em !important;
  --tertiary: #dc388f !important;
  --text-accent: #1396a0 !important;
  --text-accent-hover: #dc388f !important;
  --text-faint: hsl(230/**/25%67%) !important;
  --text-gray: hsl(230/**/25%44%) !important;
  --text-muted: hsl(230/**/25%35%) !important;
  --text-normal: hsl(230/**/50%24%) !important;
  --text-on-accent: #fff !important;
  --text-selection: hsl(184,79%,35%,20%) !important;
  --textHighlight: hsla(184,79%,35%, 0.1) !important;
  --thin-border: 1px solid hsl(230/**/25%67%) !important;
  --thin-muted-border: 1px solid hsl(230/**/25%88%) !important;
  --titleFont: "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(230/**/25%88%) !important;
  --titlebar-background-focused: hsl(230/**/25%92%) !important;
  --titlebar-border-color: hsl(230/**/25%88%) !important;
  --titlebar-text-color: hsl(230/**/25%35%) !important;
  --titlebar-text-color-focused: hsl(230/**/50%24%) !important;
  --transition-delay-passing-over-protection: .2s !important;
  --vault-profile-color: hsl(230/**/50%24%) !important;
  --vault-profile-color-hover: hsl(230/**/50%24%) !important;
  --vim-cursor-bg: #404040 !important;
  --vim-cursor-blink-rate: 1.2s !important;
  --vim-cursor-color: #e6e6e6 !important;
  --vim-cursor-outline: #b0b5bf !important;
  --vim-cursor-outline-width: 1.3px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 240, 245);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(251, 252, 253);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.08);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(150, 157, 192);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(251, 252, 253);
  border-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(245, 246, 249);
  border-color: rgb(150, 157, 192);
  border-radius: 4px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25.6px;
  color: rgb(198, 126, 63);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 240, 245);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 231, 240);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 240, 245);
  border-left-color: rgb(230, 231, 240);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(251, 252, 253);
  color: rgb(31, 41, 92);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration-color: rgb(220, 56, 143);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration-color: rgb(220, 56, 143);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration-color: rgb(220, 56, 143);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(220, 56, 143);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 56, 143) none 0px;
  text-decoration-color: rgb(220, 56, 143);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(244, 222, 113, 0.4);
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body del {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(84, 94, 140);
  border-radius: 8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(198, 126, 63);
  border-color: rgb(84, 94, 140);
}

html[saved-theme="light"] body p {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(67, 74, 112) none 0px;
  text-decoration-color: rgb(67, 74, 112);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(19, 150, 160);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(19, 150, 160) none 0px;
  text-decoration: underline 1.2px;
  text-decoration-color: rgb(19, 150, 160);
  text-decoration-thickness: 1.2px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(19, 150, 160);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(19, 150, 160) none 0px;
  text-decoration: underline 1.2px double;
  text-decoration-color: rgb(19, 150, 160);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(111, 183, 78);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 183, 78) none 0px;
  text-decoration: underline 1.2px double rgba(19, 150, 160, 0.3);
  text-decoration-color: rgba(19, 150, 160, 0.3);
  text-decoration-style: double;
  text-decoration-thickness: 1.2px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body dt {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ol > li {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ul > li {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(84, 94, 140);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(239, 240, 245);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 4px;
  padding-top: 4px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body table {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 192.594px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.08);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body tr {
  background-color: rgb(217, 219, 232);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body figcaption {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 246, 249);
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-style: double;
  border-bottom-width: 4px;
  border-left-color: rgb(150, 157, 192);
  border-left-style: double;
  border-left-width: 4px;
  border-right-color: rgb(150, 157, 192);
  border-right-style: double;
  border-right-width: 4px;
  border-top-color: rgb(150, 157, 192);
  border-top-style: double;
  border-top-width: 4px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(31, 41, 92);
  border-bottom-style: double;
  border-left-color: rgb(31, 41, 92);
  border-left-style: double;
  border-right-color: rgb(31, 41, 92);
  border-right-style: double;
  border-top-color: rgb(31, 41, 92);
  border-top-style: double;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(84, 94, 140);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(84, 94, 140);
  border-right-color: rgb(84, 94, 140);
  border-top-color: rgb(84, 94, 140);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: -25.5px;
  width: 17px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(31, 41, 92);
  text-decoration-color: rgb(31, 41, 92);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  padding-bottom: 3px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(67, 74, 112);
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(158, 158, 158, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.11);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
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
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(217, 219, 232);
  border-left-color: rgb(217, 219, 232);
  border-right-color: rgb(217, 219, 232);
  border-top-color: rgb(217, 219, 232);
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-width: 2px;
  border-left-color: rgb(150, 157, 192);
  border-left-width: 2px;
  border-right-color: rgb(150, 157, 192);
  border-right-width: 2px;
  border-top-color: rgb(150, 157, 192);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(31, 41, 92);
  font-family: "??", "iA Writer Quattro S", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(31, 41, 92) none 0px;
  text-decoration-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-width: 2px;
  border-left-color: rgb(150, 157, 192);
  border-left-width: 2px;
  border-right-color: rgb(150, 157, 192);
  border-right-width: 2px;
  border-top-color: rgb(150, 157, 192);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(217, 219, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: ridge;
  border-left-color: rgb(217, 219, 232);
  border-left-style: ridge;
  border-left-width: 1px;
  border-right-color: rgb(217, 219, 232);
  border-right-style: ridge;
  border-right-width: 1px;
  border-top-color: rgb(217, 219, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: ridge;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.05) 0px 2px 3px 0px, rgba(0, 0, 0, 0.03) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(19, 150, 160);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(19, 150, 160, 0.15);
  border-bottom-left-radius: 25.6px;
  border-bottom-right-radius: 25.6px;
  border-left-color: rgba(19, 150, 160, 0.15);
  border-right-color: rgba(19, 150, 160, 0.15);
  border-top-color: rgba(19, 150, 160, 0.15);
  border-top-left-radius: 25.6px;
  border-top-right-radius: 25.6px;
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(198, 126, 63);
}

html[saved-theme="light"] body h1 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h2 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(84, 94, 140);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h3 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h4 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h5 {
  color: rgb(84, 96, 171);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body h6 {
  color: rgb(31, 41, 92);
  font-family: Optima, "Recursive S";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(230, 231, 240);
  border-left-color: rgb(230, 231, 240);
  border-right-color: rgb(230, 231, 240);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(251, 252, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 252, 253);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(150, 157, 192);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(31, 41, 92);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(217, 219, 232);
  border-bottom-color: rgb(230, 231, 240);
  border-left-color: rgb(239, 240, 245);
  border-left-style: groove;
  border-left-width: 2px;
  border-right-color: rgb(230, 231, 240);
  border-top-color: rgb(239, 240, 245);
  border-top-style: groove;
  border-top-width: 2px;
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(67, 74, 112);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(67, 74, 112);
  stroke: rgb(67, 74, 112);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(150, 157, 192);
  border-left-color: rgb(150, 157, 192);
  border-right-color: rgb(150, 157, 192);
  border-top-color: rgb(150, 157, 192);
  color: rgb(150, 157, 192);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(150, 157, 192);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(245, 246, 249);
  border-bottom-color: rgb(150, 157, 192);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(150, 157, 192);
  border-left-width: 1px;
  border-right-color: rgb(150, 157, 192);
  border-right-width: 1px;
  border-top-color: rgb(150, 157, 192);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 1px;
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 12px;
  margin-left: 4px;
  margin-right: -4px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(67, 74, 112);
  border-left-color: rgb(67, 74, 112);
  border-right-color: rgb(67, 74, 112);
  border-top-color: rgb(67, 74, 112);
  color: rgb(67, 74, 112);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(217, 219, 232);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(31, 41, 92);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(19, 150, 160);
  border-left-color: rgb(19, 150, 160);
  border-right-color: rgb(19, 150, 160);
  border-top-color: rgb(19, 150, 160);
  color: rgb(19, 150, 160);
  font-family: "??", "Recursive S", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(239, 240, 245);
  border-bottom-color: rgb(31, 41, 92);
  border-bottom-style: solid;
  border-left-color: rgb(31, 41, 92);
  border-left-style: solid;
  border-right-color: rgb(31, 41, 92);
  border-right-style: solid;
  border-top-color: rgb(31, 41, 92);
  border-top-style: solid;
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(31, 41, 92);
  border-left-color: rgb(31, 41, 92);
  border-right-color: rgb(31, 41, 92);
  border-top-color: rgb(31, 41, 92);
}

html[saved-theme="light"] body sub {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body summary {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body sup {
  color: rgb(31, 41, 92);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(19, 150, 160, 0.15);
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-left-color: rgba(19, 150, 160, 0.15);
  border-right-color: rgba(19, 150, 160, 0.15);
  border-top-color: rgba(19, 150, 160, 0.15);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: rgb(198, 126, 63);
}`,
  },
};
