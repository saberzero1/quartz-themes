import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "publisher",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lato"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 11 !important;
  --accent-l: 50% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(11, 100%, 50%, 1) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-hover: transparent !important;
  --background-primary: hsla(0, 0%, 10%, 1) !important;
  --background-primary-alt: hsla(0, 0%, 10%, 1) !important;
  --background-secondary: hsla(0, 0%, 10%, 1) !important;
  --background-secondary-alt: hsla(0, 0%, 10%, 1) !important;
  --bases-cards-background: hsla(0, 0%, 10%, 1) !important;
  --bases-cards-cover-background: hsla(0, 0%, 10%, 1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-group-heading-property-color: hsla(0, 0%, 60%, 1) !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: hsla(0, 0%, 10%, 1) !important;
  --bases-table-cell-background-disabled: hsla(0, 0%, 10%, 1) !important;
  --bases-table-cell-background-selected: hsla(11, 100%, 50%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px transparent !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(11, 100%, 50%) !important;
  --bases-table-group-background: hsla(0, 0%, 10%, 1) !important;
  --bases-table-header-background: hsla(0, 0%, 10%, 1) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: hsla(0, 0%, 60%, 1) !important;
  --bases-table-summary-background: hsla(0, 0%, 10%, 1) !important;
  --bases-table-summary-background-hover: transparent !important;
  --black-10: hsla(0, 0%, 90%, 1) !important;
  --black-100: hsla(0, 0%, 0%, 1) !important;
  --black-20: hsla(0, 0%, 80%, 1) !important;
  --black-30: hsla(0, 0%, 70%, 1) !important;
  --black-40: hsla(0, 0%, 60%, 1) !important;
  --black-50: hsla(0, 0%, 50%, 1) !important;
  --black-60: hsla(0, 0%, 40%, 1) !important;
  --black-70: hsla(0, 0%, 30%, 1) !important;
  --black-75: hsla(0, 0%, 25%, 1) !important;
  --black-80: hsla(0, 0%, 20%, 1) !important;
  --black-85: hsla(0, 0%, 15%, 1) !important;
  --black-90: hsla(0, 0%, 10%, 1) !important;
  --black-95: hsla(0, 0%, 5%, 1) !important;
  --blockquote-border-color: hsl(11, 100%, 50%) !important;
  --blur-background: color-mix(in srgb, hsla(0, 0%, 20%, 1) 65%, transparent) linear-gradient(hsla(0, 0%, 20%, 1), color-mix(in srgb, hsla(0, 0%, 20%, 1) 65%, transparent)) !important;
  --bodyFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 8px !important;
  --callout-border-width: 2px;
  --callout-radius: 8px;
  --canvas-background: hsla(0, 0%, 10%, 1) !important;
  --canvas-card-label-color: hsla(0, 0%, 50%, 1) !important;
  --caret-color: hsla(0, 0%, 70%, 1) !important;
  --checkbox-border-color: hsla(0, 0%, 40%, 1) !important;
  --checkbox-border-color-hover: hsla(0, 0%, 40%, 1) !important;
  --checkbox-color: hsla(0, 0%, 0%, 1) !important;
  --checkbox-color-hover: hsla(0, 0%, 10%, 1) !important;
  --checkbox-marker-color: hsla(0, 0%, 100%, 1) !important;
  --checkbox-radius: 8px !important;
  --checkbox-size: 15px !important;
  --checklist-done-color: hsla(0, 0%, 60%, 1) !important;
  --clickable-icon-radius: 8px !important;
  --code-background: hsla(0, 0%, 20%, 1) !important;
  --code-bracket-background: transparent !important;
  --code-comment: hsla(0, 0%, 50%, 1) !important;
  --code-normal: hsla(0, 0%, 80%, 1) !important;
  --code-punctuation: hsla(0, 0%, 60%, 1) !important;
  --codeFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsla(0, 0%, 50%, 1) !important;
  --collapse-icon-color-collapsed: hsla(11, 100%, 50%, 1) !important;
  --color-accent: hsl(11, 100%, 50%) !important;
  --color-accent-1: hsl(8, 102%, 57.5%) !important;
  --color-accent-2: hsl(6, 105%, 64.5%) !important;
  --color-accent-hsl: 11, 100%, 50% !important;
  --dark: hsla(0, 0%, 70%, 1) !important;
  --darkgray: hsla(0, 0%, 70%, 1) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(11, 100%, 50%) !important;
  --drag-ghost-background: hsla(0, 0%, 100%, 1) !important;
  --drag-ghost-text-color: hsla(0, 0%, 80%, 1) !important;
  --dropdown-background: hsla(0, 0%, 20%, 1) !important;
  --dropdown-background-hover: hsla(0, 0%, 10%, 1) !important;
  --embed-border-start: 2px solid hsl(11, 100%, 50%) !important;
  --file-header-background: hsla(0, 0%, 10%, 1) !important;
  --file-header-background-focused: hsla(0, 0%, 10%, 1) !important;
  --file-header-font: "Lato Light", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsla(0, 0%, 20%, 1) !important;
  --flair-color: hsla(0, 0%, 70%, 1) !important;
  --font-interface: "Lato Light", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Lato Light" !important;
  --font-mermaid: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Times New Roman", Times, serif, Arial' !important;
  --font-text: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Times New Roman", Times, serif !important;
  --footnote-id-color: hsla(0, 0%, 60%, 1) !important;
  --footnote-id-color-no-occurrences: hsla(0, 0%, 50%, 1) !important;
  --footnote-input-background-active: transparent !important;
  --graph-node: hsla(0, 0%, 60%, 1) !important;
  --graph-node-attachment: hsla(0, 0%, 80%, 1) !important;
  --graph-node-focused: hsla(11, 100%, 50%, 1) !important;
  --graph-node-tag: hsla(0, 0%, 70%, 1) !important;
  --graph-node-unresolved: hsla(0, 0%, 50%, 1) !important;
  --graph-text: hsla(0, 0%, 70%, 1) !important;
  --gray: hsla(0, 0%, 60%, 1) !important;
  --h1-line-height: 1.5rem !important;
  --h1-size: 1.5rem !important;
  --h1-weight: 425 !important;
  --h2-line-height: 1.25rem !important;
  --h2-size: 1.375rem !important;
  --h2-weight: 415 !important;
  --h3-line-height: 1.2rem !important;
  --h3-size: 1.25rem !important;
  --h3-weight: 400 !important;
  --h4-line-height: 1.15rem !important;
  --h4-size: 1.125rem !important;
  --h4-weight: 390 !important;
  --h5-line-height: 1.1rem !important;
  --h5-size: 1rem !important;
  --h5-weight: 380 !important;
  --h6-size: .88rem !important;
  --h6-weight: 375 !important;
  --headerFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsla(0, 0%, 50%, 1) !important;
  --highlight: transparent !important;
  --hr-color: hsla(0, 0%, 60%, 1) !important;
  --hr-thickness: 1px !important;
  --icon-color: hsla(0, 0%, 80%, 1) !important;
  --icon-color-active: hsla(0, 0%, 100%, 1) !important;
  --icon-color-focused: hsla(0, 0%, 100%, 1) !important;
  --icon-color-hover: hsla(0, 0%, 100%, 1) !important;
  --inline-title-line-height: 1.5rem !important;
  --inline-title-size: 1.5rem !important;
  --inline-title-weight: 425 !important;
  --input-date-separator: hsla(0, 0%, 50%, 1) !important;
  --input-placeholder-color: hsla(0, 0%, 50%, 1) !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(11, 100%, 50%) !important;
  --interactive-accent-hover: hsl(8, 102%, 57.5%) !important;
  --interactive-accent-hsl: 11, 100%, 50% !important;
  --interactive-hover: hsla(0, 0%, 10%, 1) !important;
  --interactive-normal: hsla(0, 0%, 20%, 1) !important;
  --light: hsla(0, 0%, 10%, 1) !important;
  --lightgray: hsla(0, 0%, 10%, 1) !important;
  --link-color: hsla(0, 0%, 70%, 1) !important;
  --link-color-hover: hsla(0, 0%, 80%, 1) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsla(0, 0%, 70%, 1) !important;
  --link-external-color-hover: hsla(0, 0%, 80%, 1) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsla(0, 0%, 50%, 1) !important;
  --link-unresolved-decoration-color: hsla(11, 100%, 50%, 0.3) !important;
  --link-unresolved-opacity: .4 !important;
  --list-bullet-radius: 8px !important;
  --list-marker-color: hsla(0, 0%, 50%, 1) !important;
  --list-marker-color-collapsed: hsla(11, 100%, 50%, 1) !important;
  --list-marker-color-hover: hsla(0, 0%, 60%, 1) !important;
  --menu-background: hsla(0, 0%, 10%, 1) !important;
  --menu-border-color: transparent !important;
  --metadata-background-color: hsla(0, 0%, 20%, 1) !important;
  --metadata-border-radius: 8px !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-font: "Lato Light", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsla(0, 0%, 70%, 1) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-font: "Lato Light", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsla(0, 0%, 60%, 1) !important;
  --metadata-label-text-color-hover: hsla(0, 0%, 60%, 1) !important;
  --metadata-padding: 2px !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-property-radius: 8px !important;
  --metadata-property-radius-hover: 8px !important;
  --metadata-property-radius-hover-focus: 8px !important;
  --modal-background: hsla(0, 0%, 10%, 1) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: hsla(0, 0%, 80%, 1) !important;
  --nav-collapse-icon-color-collapsed: hsla(0, 0%, 100%, 1) !important;
  --nav-heading-color: hsla(0, 0%, 80%, 1) !important;
  --nav-heading-color-colapsed-hover: hsla(0, 0%, 100%, 1) !important;
  --nav-heading-color-collapsed: hsla(0, 0%, 80%, 1) !important;
  --nav-heading-color-collapsed-hover: hsla(0, 0%, 60%, 1) !important;
  --nav-heading-color-hover: hsla(0, 0%, 90%, 1) !important;
  --nav-heading-weight: 425 !important;
  --nav-indentation-guide-color: hsla(0, 0%, 40%, 1) !important;
  --nav-item-background-active: hsla(0, 0%, 15%, 1) !important;
  --nav-item-background-hover: hsla(0, 0%, 15%, 1) !important;
  --nav-item-background-selected: hsla(0, 0%, 15%, 1) !important;
  --nav-item-color: hsla(0, 0%, 80%, 1) !important;
  --nav-item-color-active: hsla(0, 0%, 100%, 1) !important;
  --nav-item-color-highlighted: hsla(0, 0%, 90%, 1) !important;
  --nav-item-color-hover: hsla(0, 0%, 90%, 1) !important;
  --nav-item-color-selected: hsla(0, 0%, 100%, 1) !important;
  --nav-item-weight: 425 !important;
  --nav-tag-color: hsla(0, 0%, 50%, 1) !important;
  --nav-tag-color-active: hsla(0, 0%, 60%, 1) !important;
  --nav-tag-color-hover: hsla(0, 0%, 60%, 1) !important;
  --orange-10: hsla(11, 100%, 10%, 1) !important;
  --orange-100: hsla(11, 100%, 95%, 1) !important;
  --orange-20: hsla(11, 100%, 20%, 1) !important;
  --orange-30: hsla(11, 100%, 30%, 1) !important;
  --orange-40: hsla(11, 100%, 40%, 1) !important;
  --orange-50: hsla(11, 100%, 50%, 1) !important;
  --orange-60: hsla(11, 100%, 60%, 1) !important;
  --orange-70: hsla(11, 100%, 70%, 1) !important;
  --orange-80: hsla(11, 100%, 80%, 1) !important;
  --orange-90: hsla(11, 100%, 90%, 1) !important;
  --pdf-background: hsla(0, 0%, 10%, 1) !important;
  --pdf-page-background: hsla(0, 0%, 10%, 1) !important;
  --pdf-sidebar-background: hsla(0, 0%, 10%, 1) !important;
  --pill-background: hsla(0, 0%, 15%, 1) !important;
  --pill-background-hover: hsla(0, 0%, 10%, 1) !important;
  --pill-border-color: hsla(0, 0%, 15%, 1) !important;
  --pill-border-color-hover: hsla(0, 0%, 10%, 1) !important;
  --pill-color: hsla(0, 0%, 80%, 1) !important;
  --pill-color-hover: hsla(0, 0%, 20%, 1) !important;
  --pill-color-remove: hsla(0, 0%, 50%, 1) !important;
  --pill-color-remove-hover: hsla(11, 100%, 50%, 1) !important;
  --pill-radius: 8px !important;
  --prompt-background: hsla(0, 0%, 10%, 1) !important;
  --raised-background: color-mix(in srgb, hsla(0, 0%, 20%, 1) 65%, transparent) linear-gradient(hsla(0, 0%, 20%, 1), color-mix(in srgb, hsla(0, 0%, 20%, 1) 65%, transparent)) !important;
  --ribbon-background: hsla(0, 0%, 0%, 1) !important;
  --ribbon-background-collapsed: hsla(0, 0%, 0%, 1) !important;
  --scrollbar-active-thumb-bg: hsla(0, 0%, 20%, 1) !important;
  --scrollbar-bg-color: hsla(0, 0%, 40%, 1) !important;
  --scrollbar-thumb-bg: hsla(0, 0%, 40%, 1) !important;
  --search-clear-button-color: hsla(0, 0%, 60%, 1) !important;
  --search-icon-color: hsla(0, 0%, 80%, 1) !important;
  --search-result-background: hsla(0, 0%, 20%, 1) !important;
  --secondary: hsla(11, 100%, 50%, 1) !important;
  --setting-group-heading-color: hsla(0, 0%, 70%, 1) !important;
  --setting-items-background: hsla(0, 0%, 10%, 1) !important;
  --shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --slider-thumb-border-color: transparent !important;
  --slider-thumb-radius: 10px !important;
  --slider-track-background: hsla(11, 100%, 60%, 1) !important;
  --status-bar-background: hsla(0, 0%, 10%, 1) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: hsla(0, 0%, 80%, 1) !important;
  --suggestion-background: hsla(0, 0%, 10%, 1) !important;
  --swatch-radius: 8px !important;
  --tab-background-active: hsla(0, 0%, 15%, 1) !important;
  --tab-container-background: hsla(0, 0%, 10%, 1) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-background: hsla(0, 0%, 10%, 1) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(0, 0%, 10%, 1), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(11, 100%, 50%) !important;
  --tab-text-color: hsla(0, 0%, 80%, 1) !important;
  --tab-text-color-active: hsla(0, 0%, 60%, 1) !important;
  --tab-text-color-focused: hsla(0, 0%, 60%, 1) !important;
  --tab-text-color-focused-active: hsla(0, 0%, 90%, 1) !important;
  --tab-text-color-focused-active-current: hsla(11, 100%, 60%, 1) !important;
  --tab-text-color-focused-highlighted: hsla(11, 100%, 60%, 1) !important;
  --table-background-color: hsla(0, 0%, 40%, 1) !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: hsl(11, 100%, 50%) !important;
  --table-drag-handle-color: hsla(0, 0%, 50%, 1) !important;
  --table-header-background: hsla(0, 0%, 15%, 1) !important;
  --table-header-background-hover: hsla(0, 0%, 10%, 1) !important;
  --table-header-border-color: transparent !important;
  --table-header-color: hsla(0, 0%, 80%, 1) !important;
  --table-header-font: "Lato Light" !important;
  --table-line-height: 2rem !important;
  --table-selection: hsla(11, 100%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(11, 100%, 50%) !important;
  --tag-background: hsla(11, 100%, 50%, 0.1) !important;
  --tag-background-hover: hsla(11, 100%, 50%, 0.2) !important;
  --tag-border-color: hsla(11, 100%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(11, 100%, 50%, 0.15) !important;
  --tag-color: hsla(11, 100%, 50%, 1) !important;
  --tag-color-hover: hsla(11, 100%, 50%, 1) !important;
  --tag-radius: 8px !important;
  --tertiary: hsla(11, 100%, 60%, 1) !important;
  --text-accent: hsla(11, 100%, 50%, 1) !important;
  --text-accent-hover: hsla(11, 100%, 60%, 1) !important;
  --text-faint: hsla(0, 0%, 50%, 1) !important;
  --text-muted: hsla(0, 0%, 60%, 1) !important;
  --text-normal: hsla(0, 0%, 70%, 1) !important;
  --text-selection: hsla(11, 100%, 50%, 0.33) !important;
  --textHighlight: transparent !important;
  --titleFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsla(0, 0%, 10%, 1) !important;
  --titlebar-background-focused: hsla(0, 0%, 10%, 1) !important;
  --titlebar-text-color: hsla(0, 0%, 80%, 1) !important;
  --titlebar-text-color-focused: hsla(0, 0%, 80%, 1) !important;
  --toggle-border-width: 1px !important;
  --toggle-s-border-width: 1px !important;
  --vault-profile-actions-display: none !important;
  --vault-profile-color: hsla(0, 0%, 80%, 1) !important;
  --vault-profile-color-hover: hsla(0, 0%, 100%, 1) !important;
  --white-10: hsla(0, 0%, 10%, 1) !important;
  --white-100: hsla(0, 0%, 100%, 1) !important;
  --white-20: hsla(0, 0%, 20%, 1) !important;
  --white-30: hsla(0, 0%, 30%, 1) !important;
  --white-40: hsla(0, 0%, 40%, 1) !important;
  --white-50: hsla(0, 0%, 50%, 1) !important;
  --white-60: hsla(0, 0%, 60%, 1) !important;
  --white-70: hsla(0, 0%, 70%, 1) !important;
  --white-80: hsla(0, 0%, 80%, 1) !important;
  --white-85: hsla(0, 0%, 85%, 1) !important;
  --white-90: hsla(0, 0%, 90%, 1) !important;
  --white-92: hsla(0, 0%, 92%, 1) !important;
  --white-96: hsla(0, 0%, 96%, 1) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(26, 26, 26);
  border-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .note-properties {
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(255, 47, 0, 0.1);
  border-radius: 8px;
  color: rgb(255, 47, 0);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(13, 13, 13);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(179, 179, 179);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body del {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 8px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(128, 128, 128);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: rgba(255, 47, 0, 0.3);
  text-decoration-color: rgba(255, 47, 0, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body dt {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body table {
  background-color: rgb(51, 51, 51);
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.312px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(38, 38, 38);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(51, 51, 51);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(51, 51, 51);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(255, 47, 0);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: -22.5px;
  width: 15px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  padding-left: 10px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(179, 179, 179);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 47, 0, 0.1);
  border-bottom-color: rgba(255, 47, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 47, 0, 0.15);
  border-right-color: rgba(255, 47, 0, 0.15);
  border-top-color: rgba(255, 47, 0, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 47, 0);
}

html[saved-theme="dark"] body h1 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(102, 102, 102);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 425;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(204, 204, 204);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(204, 204, 204);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(179, 179, 179);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(204, 204, 204);
  stroke: rgb(204, 204, 204);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(128, 128, 128);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(153, 153, 153);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(179, 179, 179);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body sub {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body summary {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body sup {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgba(255, 47, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 47, 0, 0.15);
  border-right-color: rgba(255, 47, 0, 0.15);
  border-top-color: rgba(255, 47, 0, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 11 !important;
  --accent-l: 50% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(0, 0%, 90%, 1) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-hover: transparent !important;
  --background-primary: hsla(0, 0%, 100%, 1) !important;
  --background-primary-alt: hsla(0, 0%, 96%, 1) !important;
  --background-secondary: hsla(0, 0%, 100%, 1) !important;
  --background-secondary-alt: hsla(0, 0%, 100%, 1) !important;
  --bases-cards-background: hsla(0, 0%, 100%, 1) !important;
  --bases-cards-cover-background: hsla(0, 0%, 96%, 1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-group-heading-property-color: hsla(0, 0%, 40%, 1) !important;
  --bases-table-cell-background-active: hsla(0, 0%, 100%, 1) !important;
  --bases-table-cell-background-disabled: hsla(0, 0%, 96%, 1) !important;
  --bases-table-cell-background-selected: hsla(11, 100%, 50%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px transparent !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(10, 101%, 53.75%) !important;
  --bases-table-group-background: hsla(0, 0%, 96%, 1) !important;
  --bases-table-header-background: hsla(0, 0%, 100%, 1) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: hsla(0, 0%, 40%, 1) !important;
  --bases-table-summary-background: hsla(0, 0%, 100%, 1) !important;
  --bases-table-summary-background-hover: transparent !important;
  --black-10: hsla(0, 0%, 90%, 1) !important;
  --black-100: hsla(0, 0%, 0%, 1) !important;
  --black-20: hsla(0, 0%, 80%, 1) !important;
  --black-30: hsla(0, 0%, 70%, 1) !important;
  --black-40: hsla(0, 0%, 60%, 1) !important;
  --black-50: hsla(0, 0%, 50%, 1) !important;
  --black-60: hsla(0, 0%, 40%, 1) !important;
  --black-70: hsla(0, 0%, 30%, 1) !important;
  --black-75: hsla(0, 0%, 25%, 1) !important;
  --black-80: hsla(0, 0%, 20%, 1) !important;
  --black-85: hsla(0, 0%, 15%, 1) !important;
  --black-90: hsla(0, 0%, 10%, 1) !important;
  --black-95: hsla(0, 0%, 5%, 1) !important;
  --blockquote-border-color: hsl(10, 101%, 53.75%) !important;
  --blur-background: color-mix(in srgb, hsla(0, 0%, 100%, 1) 65%, transparent) linear-gradient(hsla(0, 0%, 100%, 1), color-mix(in srgb, hsla(0, 0%, 100%, 1) 65%, transparent)) !important;
  --bodyFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 8px !important;
  --callout-border-width: 2px;
  --callout-radius: 8px;
  --canvas-background: hsla(0, 0%, 100%, 1) !important;
  --canvas-card-label-color: hsla(0, 0%, 50%, 1) !important;
  --caret-color: hsla(0, 0%, 30%, 1) !important;
  --checkbox-border-color: hsla(0, 0%, 20%, 1) !important;
  --checkbox-border-color-hover: hsla(0, 0%, 30%, 1) !important;
  --checkbox-color: hsla(0, 0%, 0%, 1) !important;
  --checkbox-color-hover: hsla(0, 0%, 10%, 1) !important;
  --checkbox-marker-color: hsla(0, 0%, 100%, 1) !important;
  --checkbox-radius: 8px !important;
  --checkbox-size: 15px !important;
  --checklist-done-color: hsla(0, 0%, 40%, 1) !important;
  --clickable-icon-radius: 8px !important;
  --code-background: hsla(0, 0%, 100%, 1) !important;
  --code-bracket-background: transparent !important;
  --code-comment: hsla(0, 0%, 50%, 1) !important;
  --code-normal: hsla(0, 0%, 10%, 1) !important;
  --code-punctuation: hsla(0, 0%, 40%, 1) !important;
  --codeFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsla(0, 0%, 50%, 1) !important;
  --collapse-icon-color-collapsed: hsla(11, 100%, 50%, 1) !important;
  --color-accent: hsl(11, 100%, 50%) !important;
  --color-accent-1: hsl(10, 101%, 53.75%) !important;
  --color-accent-2: hsl(8, 102%, 57.5%) !important;
  --color-accent-hsl: 11, 100%, 50% !important;
  --dark: hsla(0, 0%, 30%, 1) !important;
  --darkgray: hsla(0, 0%, 30%, 1) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(10, 101%, 53.75%) !important;
  --drag-ghost-background: hsla(11, 100%, 90%, 1) !important;
  --drag-ghost-text-color: hsla(0, 0%, 10%, 1) !important;
  --dropdown-background: hsla(0, 0%, 92%, 1) !important;
  --dropdown-background-hover: hsla(0, 0%, 100%, 1) !important;
  --embed-block-shadow-hover: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --embed-border-start: 2px solid hsl(10, 101%, 53.75%) !important;
  --file-header-background: hsla(0, 0%, 100%, 1) !important;
  --file-header-background-focused: hsla(0, 0%, 100%, 1) !important;
  --file-header-font: "Lato Light", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsla(0, 0%, 90%, 1) !important;
  --flair-color: hsla(0, 0%, 30%, 1) !important;
  --font-interface: "Lato Light", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Lato Light" !important;
  --font-mermaid: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Times New Roman", Times, serif, Arial' !important;
  --font-text: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Times New Roman", Times, serif !important;
  --footnote-id-color: hsla(0, 0%, 40%, 1) !important;
  --footnote-id-color-no-occurrences: hsla(0, 0%, 50%, 1) !important;
  --footnote-input-background-active: transparent !important;
  --graph-node: hsla(0, 0%, 20%, 1) !important;
  --graph-node-attachment: hsla(0, 0%, 0%, 1) !important;
  --graph-node-focused: hsla(11, 100%, 50%, 1) !important;
  --graph-node-tag: hsla(0, 0%, 0%, 1) !important;
  --graph-node-unresolved: hsla(0, 0%, 50%, 1) !important;
  --graph-text: hsla(0, 0%, 30%, 1) !important;
  --gray: hsla(0, 0%, 40%, 1) !important;
  --h1-line-height: 1.5rem !important;
  --h1-size: 1.5rem !important;
  --h1-weight: 425 !important;
  --h2-line-height: 1.25rem !important;
  --h2-size: 1.375rem !important;
  --h2-weight: 415 !important;
  --h3-line-height: 1.2rem !important;
  --h3-size: 1.25rem !important;
  --h3-weight: 400 !important;
  --h4-line-height: 1.15rem !important;
  --h4-size: 1.125rem !important;
  --h4-weight: 390 !important;
  --h5-line-height: 1.1rem !important;
  --h5-size: 1rem !important;
  --h5-weight: 380 !important;
  --h6-size: .88rem !important;
  --h6-weight: 375 !important;
  --headerFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsla(0, 0%, 50%, 1) !important;
  --highlight: transparent !important;
  --hr-color: hsla(0, 0%, 20%, 1) !important;
  --hr-thickness: 1px !important;
  --icon-color: hsla(0, 0%, 20%, 1) !important;
  --icon-color-active: hsla(0, 0%, 0%, 1) !important;
  --icon-color-focused: hsla(0, 0%, 10%, 1) !important;
  --icon-color-hover: hsla(0, 0%, 10%, 1) !important;
  --inline-title-line-height: 1.5rem !important;
  --inline-title-size: 1.5rem !important;
  --inline-title-weight: 425 !important;
  --input-date-separator: hsla(0, 0%, 50%, 1) !important;
  --input-placeholder-color: hsla(0, 0%, 50%, 1) !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(10, 101%, 53.75%) !important;
  --interactive-accent-hover: hsl(8, 102%, 57.5%) !important;
  --interactive-accent-hsl: 11, 100%, 50% !important;
  --interactive-hover: hsla(0, 0%, 100%, 1) !important;
  --interactive-normal: hsla(0, 0%, 90%, 1) !important;
  --light: hsla(0, 0%, 100%, 1) !important;
  --lightgray: hsla(0, 0%, 100%, 1) !important;
  --link-color: hsla(0, 0%, 30%, 1) !important;
  --link-color-hover: hsla(0, 0%, 0%, 1) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsla(0, 0%, 30%, 1) !important;
  --link-external-color-hover: hsla(0, 0%, 0%, 1) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsla(0, 0%, 50%, 1) !important;
  --link-unresolved-decoration-color: hsla(0, 0%, 20%, 1) !important;
  --link-unresolved-opacity: .5 !important;
  --list-bullet-radius: 8px !important;
  --list-marker-color: hsla(0, 0%, 50%, 1) !important;
  --list-marker-color-collapsed: hsla(11, 100%, 50%, 1) !important;
  --list-marker-color-hover: hsla(0, 0%, 40%, 1) !important;
  --menu-background: hsla(0, 0%, 100%, 1) !important;
  --menu-border-color: transparent !important;
  --metadata-border-radius: 8px !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-font: "Lato Light", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsla(0, 0%, 30%, 1) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-font: "Lato Light", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsla(0, 0%, 40%, 1) !important;
  --metadata-label-text-color-hover: hsla(0, 0%, 40%, 1) !important;
  --metadata-padding: 2px !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-property-radius: 8px !important;
  --metadata-property-radius-hover: 8px !important;
  --metadata-property-radius-hover-focus: 8px !important;
  --modal-background: hsla(0, 0%, 100%, 1) !important;
  --modal-border-color: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: hsla(0, 0%, 80%, 1) !important;
  --nav-collapse-icon-color-collapsed: hsla(0, 0%, 100%, 1) !important;
  --nav-heading-color: hsla(0, 0%, 80%, 1) !important;
  --nav-heading-color-colapsed-hover: hsla(0, 0%, 100%, 1) !important;
  --nav-heading-color-collapsed: hsla(0, 0%, 80%, 1) !important;
  --nav-heading-color-collapsed-hover: hsla(0, 0%, 40%, 1) !important;
  --nav-heading-color-hover: hsla(0, 0%, 90%, 1) !important;
  --nav-heading-weight: 425 !important;
  --nav-indentation-guide-color: hsla(0, 0%, 40%, 1) !important;
  --nav-item-background-active: hsla(0, 0%, 20%, 1) !important;
  --nav-item-background-hover: hsla(0, 0%, 20%, 1) !important;
  --nav-item-background-selected: hsla(0, 0%, 20%, 1) !important;
  --nav-item-color: hsla(0, 0%, 80%, 1) !important;
  --nav-item-color-active: hsla(0, 0%, 100%, 1) !important;
  --nav-item-color-highlighted: hsla(0, 0%, 90%, 1) !important;
  --nav-item-color-hover: hsla(0, 0%, 90%, 1) !important;
  --nav-item-color-selected: hsla(0, 0%, 100%, 1) !important;
  --nav-item-weight: 425 !important;
  --nav-tag-color: hsla(0, 0%, 50%, 1) !important;
  --nav-tag-color-active: hsla(0, 0%, 40%, 1) !important;
  --nav-tag-color-hover: hsla(0, 0%, 40%, 1) !important;
  --orange-10: hsla(11, 100%, 10%, 1) !important;
  --orange-100: hsla(11, 100%, 95%, 1) !important;
  --orange-20: hsla(11, 100%, 20%, 1) !important;
  --orange-30: hsla(11, 100%, 30%, 1) !important;
  --orange-40: hsla(11, 100%, 40%, 1) !important;
  --orange-50: hsla(11, 100%, 50%, 1) !important;
  --orange-60: hsla(11, 100%, 60%, 1) !important;
  --orange-70: hsla(11, 100%, 70%, 1) !important;
  --orange-80: hsla(11, 100%, 80%, 1) !important;
  --orange-90: hsla(11, 100%, 90%, 1) !important;
  --pdf-background: hsla(0, 0%, 100%, 1) !important;
  --pdf-page-background: hsla(0, 0%, 100%, 1) !important;
  --pdf-sidebar-background: hsla(0, 0%, 100%, 1) !important;
  --pill-background: hsla(0, 0%, 96%, 1) !important;
  --pill-background-hover: hsla(0, 0%, 92%, 1) !important;
  --pill-border-color: hsla(0, 0%, 90%, 1) !important;
  --pill-border-color-hover: hsla(0, 0%, 10%, 1) !important;
  --pill-color: hsla(0, 0%, 20%, 1) !important;
  --pill-color-hover: hsla(0, 0%, 20%, 1) !important;
  --pill-color-remove: hsla(0, 0%, 50%, 1) !important;
  --pill-color-remove-hover: hsla(11, 100%, 50%, 1) !important;
  --pill-radius: 8px !important;
  --prompt-background: hsla(0, 0%, 100%, 1) !important;
  --raised-background: color-mix(in srgb, hsla(0, 0%, 100%, 1) 65%, transparent) linear-gradient(hsla(0, 0%, 100%, 1), color-mix(in srgb, hsla(0, 0%, 100%, 1) 65%, transparent)) !important;
  --ribbon-background: hsla(0, 0%, 10%, 1) !important;
  --ribbon-background-collapsed: hsla(0, 0%, 10%, 1) !important;
  --scrollbar-active-thumb-bg: hsla(0, 0%, 20%, 1) !important;
  --scrollbar-bg-color: hsla(0, 0%, 40%, 1) !important;
  --scrollbar-thumb-bg: hsla(0, 0%, 40%, 1) !important;
  --search-clear-button-color: hsla(0, 0%, 40%, 1) !important;
  --search-icon-color: hsla(0, 0%, 20%, 1) !important;
  --search-result-background: hsla(0, 0%, 20%, 1) !important;
  --secondary: hsla(11, 100%, 50%, 1) !important;
  --setting-group-heading-color: hsla(0, 0%, 30%, 1) !important;
  --setting-items-background: hsla(0, 0%, 96%, 1) !important;
  --shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --slider-thumb-border-color: transparent !important;
  --slider-thumb-radius: 10px !important;
  --slider-track-background: hsla(0, 0%, 20%, 1) !important;
  --status-bar-background: hsla(0, 0%, 15%, 1) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: hsla(0, 0%, 80%, 1) !important;
  --suggestion-background: hsla(0, 0%, 100%, 1) !important;
  --swatch-radius: 8px !important;
  --swatch-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --tab-background-active: hsla(0, 0%, 96%, 1) !important;
  --tab-container-background: hsla(0, 0%, 100%, 1) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-background: hsla(0, 0%, 100%, 1) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(0, 0%, 100%, 1), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(11, 100%, 50%) !important;
  --tab-text-color: hsla(0, 0%, 20%, 1) !important;
  --tab-text-color-active: hsla(0, 0%, 40%, 1) !important;
  --tab-text-color-focused: hsla(0, 0%, 40%, 1) !important;
  --tab-text-color-focused-active: hsla(0, 0%, 0%, 1) !important;
  --tab-text-color-focused-active-current: hsla(11, 100%, 50%, 1) !important;
  --tab-text-color-focused-highlighted: hsla(11, 100%, 50%, 1) !important;
  --table-background-color: hsla(0, 0%, 20%, 1) !important;
  --table-drag-handle-background-active: hsl(10, 101%, 53.75%) !important;
  --table-drag-handle-color: hsla(0, 0%, 50%, 1) !important;
  --table-drag-handle-color-active: hsla(0, 0%, 100%, 1) !important;
  --table-header-background: hsla(0, 0%, 96%, 1) !important;
  --table-header-background-hover: hsla(0, 0%, 92%, 1) !important;
  --table-header-color: hsla(0, 0%, 10%, 1) !important;
  --table-header-font: "Lato Light" !important;
  --table-line-height: 2rem !important;
  --table-selection: hsla(11, 100%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(10, 101%, 53.75%) !important;
  --tag-background: hsla(11, 100%, 50%, 0.1) !important;
  --tag-background-hover: hsla(11, 100%, 50%, 0.2) !important;
  --tag-border-color: hsla(11, 100%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(11, 100%, 50%, 0.15) !important;
  --tag-color: hsla(11, 100%, 50%, 1) !important;
  --tag-color-hover: hsla(11, 100%, 50%, 1) !important;
  --tag-radius: 8px !important;
  --tertiary: hsla(11, 100%, 60%, 1) !important;
  --text-accent: hsla(11, 100%, 50%, 1) !important;
  --text-accent-hover: hsla(11, 100%, 60%, 1) !important;
  --text-faint: hsla(0, 0%, 50%, 1) !important;
  --text-muted: hsla(0, 0%, 40%, 1) !important;
  --text-normal: hsla(0, 0%, 30%, 1) !important;
  --text-on-accent: hsla(0, 0%, 100%, 1) !important;
  --text-selection: hsla(11, 100%, 50%, 0.2) !important;
  --textHighlight: transparent !important;
  --titleFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsla(0, 0%, 100%, 1) !important;
  --titlebar-background-focused: hsla(0, 0%, 100%, 1) !important;
  --titlebar-text-color: hsla(0, 0%, 10%, 1) !important;
  --titlebar-text-color-focused: hsla(0, 0%, 0%, 1) !important;
  --toggle-border-width: 1px !important;
  --toggle-s-border-width: 1px !important;
  --vault-profile-actions-display: none !important;
  --vault-profile-color: hsla(0, 0%, 90%, 1) !important;
  --vault-profile-color-hover: hsla(0, 0%, 100%, 1) !important;
  --white-10: hsla(0, 0%, 10%, 1) !important;
  --white-100: hsla(0, 0%, 100%, 1) !important;
  --white-20: hsla(0, 0%, 20%, 1) !important;
  --white-30: hsla(0, 0%, 30%, 1) !important;
  --white-40: hsla(0, 0%, 40%, 1) !important;
  --white-50: hsla(0, 0%, 50%, 1) !important;
  --white-60: hsla(0, 0%, 60%, 1) !important;
  --white-70: hsla(0, 0%, 70%, 1) !important;
  --white-80: hsla(0, 0%, 80%, 1) !important;
  --white-85: hsla(0, 0%, 85%, 1) !important;
  --white-90: hsla(0, 0%, 90%, 1) !important;
  --white-92: hsla(0, 0%, 92%, 1) !important;
  --white-96: hsla(0, 0%, 96%, 1) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .note-properties {
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(255, 47, 0, 0.1);
  border-radius: 8px;
  color: rgb(255, 47, 0);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 38, 38);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(77, 77, 77);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body del {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(51, 51, 51);
  border-radius: 8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(102, 102, 102);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(128, 128, 128);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body dt {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body ol > li {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body ul > li {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body table {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.312px;
}

html[saved-theme="light"] body td {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body th {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body tr {
  background-color: rgb(245, 245, 245);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 255, 255);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body figcaption {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(255, 58, 19);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: -22.5px;
  width: 15px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  padding-left: 10px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(77, 77, 77);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 47, 0, 0.1);
  border-bottom-color: rgba(255, 47, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 47, 0, 0.15);
  border-right-color: rgba(255, 47, 0, 0.15);
  border-top-color: rgba(255, 47, 0, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(255, 47, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(102, 102, 102);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 425;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(51, 51, 51);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(204, 204, 204);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(77, 77, 77);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(51, 51, 51);
  stroke: rgb(51, 51, 51);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(128, 128, 128);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .metadata {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(102, 102, 102);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(77, 77, 77);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body sub {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body summary {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body sup {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(255, 47, 0, 0.1);
  border-bottom-color: rgba(255, 47, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 47, 0, 0.15);
  border-right-color: rgba(255, 47, 0, 0.15);
  border-top-color: rgba(255, 47, 0, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 47, 0);
}`,
  },
};
