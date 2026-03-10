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
  --background-modifier-active-hover: rgb(255, 47, 0) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-hover: transparent !important;
  --background-primary: rgb(26, 26, 26) !important;
  --background-primary-alt: rgb(26, 26, 26) !important;
  --background-secondary: rgb(26, 26, 26) !important;
  --background-secondary-alt: rgb(26, 26, 26) !important;
  --bases-cards-background: rgb(26, 26, 26) !important;
  --bases-cards-cover-background: rgb(26, 26, 26) !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-group-heading-property-color: rgb(153, 153, 153) !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: rgb(26, 26, 26) !important;
  --bases-table-cell-background-disabled: rgb(26, 26, 26) !important;
  --bases-table-cell-background-selected: rgba(255, 47, 0, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px transparent !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 47, 0) !important;
  --bases-table-group-background: rgb(26, 26, 26) !important;
  --bases-table-header-background: rgb(26, 26, 26) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: rgb(153, 153, 153) !important;
  --bases-table-summary-background: rgb(26, 26, 26) !important;
  --bases-table-summary-background-hover: transparent !important;
  --black-10: rgb(230, 230, 230) !important;
  --black-100: rgb(0, 0, 0) !important;
  --black-20: rgb(204, 204, 204) !important;
  --black-30: rgb(179, 179, 179) !important;
  --black-40: rgb(153, 153, 153) !important;
  --black-50: rgb(128, 128, 128) !important;
  --black-60: rgb(102, 102, 102) !important;
  --black-70: rgb(77, 77, 77) !important;
  --black-75: rgb(64, 64, 64) !important;
  --black-80: rgb(51, 51, 51) !important;
  --black-85: rgb(38, 38, 38) !important;
  --black-90: rgb(26, 26, 26) !important;
  --black-95: rgb(13, 13, 13) !important;
  --blockquote-border-color: rgb(255, 47, 0) !important;
  --blur-background: color-mix(in srgb, rgb(51, 51, 51) 65%, transparent) linear-gradient(rgb(51, 51, 51), color-mix(in srgb, rgb(51, 51, 51) 65%, transparent)) !important;
  --bodyFont: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 8px !important;
  --callout-border-width: 2px;
  --callout-radius: 8px;
  --canvas-background: rgb(26, 26, 26) !important;
  --canvas-card-label-color: rgb(128, 128, 128) !important;
  --caret-color: rgb(179, 179, 179) !important;
  --checkbox-border-color: rgb(102, 102, 102) !important;
  --checkbox-border-color-hover: rgb(102, 102, 102) !important;
  --checkbox-color: rgb(0, 0, 0) !important;
  --checkbox-color-hover: rgb(26, 26, 26) !important;
  --checkbox-marker-color: rgb(255, 255, 255) !important;
  --checkbox-radius: 8px !important;
  --checkbox-size: 15px !important;
  --checklist-done-color: rgb(153, 153, 153) !important;
  --clickable-icon-radius: 8px !important;
  --code-background: rgb(51, 51, 51) !important;
  --code-bracket-background: transparent !important;
  --code-comment: rgb(128, 128, 128) !important;
  --code-normal: rgb(204, 204, 204) !important;
  --code-punctuation: rgb(153, 153, 153) !important;
  --codeFont: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(128, 128, 128) !important;
  --collapse-icon-color-collapsed: rgb(255, 47, 0) !important;
  --color-accent: rgb(255, 47, 0) !important;
  --color-accent-1: hsl(8, 102%, 57.5%) !important;
  --color-accent-2: hsl(6, 105%, 64.5%) !important;
  --color-accent-hsl: 11, 100%, 50% !important;
  --dark: rgb(179, 179, 179) !important;
  --darkgray: rgb(179, 179, 179) !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(255, 47, 0) !important;
  --drag-ghost-background: rgb(255, 255, 255) !important;
  --drag-ghost-text-color: rgb(204, 204, 204) !important;
  --dropdown-background: rgb(51, 51, 51) !important;
  --dropdown-background-hover: rgb(26, 26, 26) !important;
  --embed-border-start: 2px solid rgb(255, 47, 0) !important;
  --file-header-background: rgb(26, 26, 26) !important;
  --file-header-background-focused: rgb(26, 26, 26) !important;
  --file-header-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(51, 51, 51) !important;
  --flair-color: rgb(179, 179, 179) !important;
  --font-interface: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Lato Light" !important;
  --font-mermaid: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', "Times New Roman", Times, serif, 'Arial' !important;
  --font-text: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Times New Roman", Times, serif !important;
  --footnote-id-color: rgb(153, 153, 153) !important;
  --footnote-id-color-no-occurrences: rgb(128, 128, 128) !important;
  --footnote-input-background-active: transparent !important;
  --graph-node: rgb(153, 153, 153) !important;
  --graph-node-attachment: rgb(204, 204, 204) !important;
  --graph-node-focused: rgb(255, 47, 0) !important;
  --graph-node-tag: rgb(179, 179, 179) !important;
  --graph-node-unresolved: rgb(128, 128, 128) !important;
  --graph-text: rgb(179, 179, 179) !important;
  --gray: rgb(153, 153, 153) !important;
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
  --headerFont: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(128, 128, 128) !important;
  --highlight: transparent !important;
  --hr-color: rgb(153, 153, 153) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(204, 204, 204) !important;
  --icon-color-active: rgb(255, 255, 255) !important;
  --icon-color-focused: rgb(255, 255, 255) !important;
  --icon-color-hover: rgb(255, 255, 255) !important;
  --inline-title-line-height: 1.5rem !important;
  --inline-title-size: 1.5rem !important;
  --inline-title-weight: 425 !important;
  --input-date-separator: rgb(128, 128, 128) !important;
  --input-placeholder-color: rgb(128, 128, 128) !important;
  --input-radius: 8px !important;
  --interactive-accent: rgb(255, 47, 0) !important;
  --interactive-accent-hover: hsl(8, 102%, 57.5%) !important;
  --interactive-accent-hsl: 11, 100%, 50% !important;
  --interactive-hover: rgb(26, 26, 26) !important;
  --interactive-normal: rgb(51, 51, 51) !important;
  --light: rgb(26, 26, 26) !important;
  --lightgray: rgb(26, 26, 26) !important;
  --link-color: rgb(179, 179, 179) !important;
  --link-color-hover: rgb(204, 204, 204) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(179, 179, 179) !important;
  --link-external-color-hover: rgb(204, 204, 204) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(128, 128, 128) !important;
  --link-unresolved-decoration-color: rgba(255, 47, 0, 0.3) !important;
  --link-unresolved-opacity: .4 !important;
  --list-bullet-radius: 8px !important;
  --list-marker-color: rgb(128, 128, 128) !important;
  --list-marker-color-collapsed: rgb(255, 47, 0) !important;
  --list-marker-color-hover: rgb(153, 153, 153) !important;
  --menu-background: rgb(26, 26, 26) !important;
  --menu-border-color: transparent !important;
  --metadata-background-color: rgb(51, 51, 51) !important;
  --metadata-border-radius: 8px !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(179, 179, 179) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(153, 153, 153) !important;
  --metadata-label-text-color-hover: rgb(153, 153, 153) !important;
  --metadata-padding: 2px !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-property-radius: 8px !important;
  --metadata-property-radius-hover: 8px !important;
  --metadata-property-radius-hover-focus: 8px !important;
  --modal-background: rgb(26, 26, 26) !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: rgb(204, 204, 204) !important;
  --nav-collapse-icon-color-collapsed: rgb(255, 255, 255) !important;
  --nav-heading-color: rgb(204, 204, 204) !important;
  --nav-heading-color-colapsed-hover: rgb(255, 255, 255) !important;
  --nav-heading-color-collapsed: rgb(204, 204, 204) !important;
  --nav-heading-color-collapsed-hover: rgb(153, 153, 153) !important;
  --nav-heading-color-hover: rgb(230, 230, 230) !important;
  --nav-heading-weight: 425 !important;
  --nav-indentation-guide-color: rgb(102, 102, 102) !important;
  --nav-item-background-active: rgb(38, 38, 38) !important;
  --nav-item-background-hover: rgb(38, 38, 38) !important;
  --nav-item-background-selected: rgb(38, 38, 38) !important;
  --nav-item-color: rgb(204, 204, 204) !important;
  --nav-item-color-active: rgb(255, 255, 255) !important;
  --nav-item-color-highlighted: rgb(230, 230, 230) !important;
  --nav-item-color-hover: rgb(230, 230, 230) !important;
  --nav-item-color-selected: rgb(255, 255, 255) !important;
  --nav-item-weight: 425 !important;
  --nav-tag-color: rgb(128, 128, 128) !important;
  --nav-tag-color-active: rgb(153, 153, 153) !important;
  --nav-tag-color-hover: rgb(153, 153, 153) !important;
  --orange-10: rgb(51, 9, 0) !important;
  --orange-100: rgb(255, 234, 229) !important;
  --orange-20: rgb(102, 19, 0) !important;
  --orange-30: rgb(153, 28, 0) !important;
  --orange-40: rgb(204, 37, 0) !important;
  --orange-50: rgb(255, 47, 0) !important;
  --orange-60: rgb(255, 88, 51) !important;
  --orange-70: rgb(255, 130, 102) !important;
  --orange-80: rgb(255, 172, 153) !important;
  --orange-90: rgb(255, 213, 204) !important;
  --pdf-background: rgb(26, 26, 26) !important;
  --pdf-page-background: rgb(26, 26, 26) !important;
  --pdf-sidebar-background: rgb(26, 26, 26) !important;
  --pill-background: rgb(38, 38, 38) !important;
  --pill-background-hover: rgb(26, 26, 26) !important;
  --pill-border-color: rgb(38, 38, 38) !important;
  --pill-border-color-hover: rgb(26, 26, 26) !important;
  --pill-color: rgb(204, 204, 204) !important;
  --pill-color-hover: rgb(51, 51, 51) !important;
  --pill-color-remove: rgb(128, 128, 128) !important;
  --pill-color-remove-hover: rgb(255, 47, 0) !important;
  --pill-radius: 8px !important;
  --prompt-background: rgb(26, 26, 26) !important;
  --raised-background: color-mix(in srgb, rgb(51, 51, 51) 65%, transparent) linear-gradient(rgb(51, 51, 51), color-mix(in srgb, rgb(51, 51, 51) 65%, transparent)) !important;
  --ribbon-background: rgb(0, 0, 0) !important;
  --ribbon-background-collapsed: rgb(0, 0, 0) !important;
  --scrollbar-active-thumb-bg: rgb(51, 51, 51) !important;
  --scrollbar-bg-color: rgb(102, 102, 102) !important;
  --scrollbar-thumb-bg: rgb(102, 102, 102) !important;
  --search-clear-button-color: rgb(153, 153, 153) !important;
  --search-icon-color: rgb(204, 204, 204) !important;
  --search-result-background: rgb(51, 51, 51) !important;
  --secondary: rgb(255, 47, 0) !important;
  --setting-group-heading-color: rgb(179, 179, 179) !important;
  --setting-items-background: rgb(26, 26, 26) !important;
  --shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --slider-thumb-border-color: transparent !important;
  --slider-thumb-radius: 10px !important;
  --slider-track-background: rgb(255, 88, 51) !important;
  --status-bar-background: rgb(26, 26, 26) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: rgb(204, 204, 204) !important;
  --suggestion-background: rgb(26, 26, 26) !important;
  --swatch-radius: 8px !important;
  --tab-background-active: rgb(38, 38, 38) !important;
  --tab-container-background: rgb(26, 26, 26) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-background: rgb(26, 26, 26) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(26, 26, 26), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 47, 0) !important;
  --tab-text-color: rgb(204, 204, 204) !important;
  --tab-text-color-active: rgb(153, 153, 153) !important;
  --tab-text-color-focused: rgb(153, 153, 153) !important;
  --tab-text-color-focused-active: rgb(230, 230, 230) !important;
  --tab-text-color-focused-active-current: rgb(255, 88, 51) !important;
  --tab-text-color-focused-highlighted: rgb(255, 88, 51) !important;
  --table-background-color: rgb(102, 102, 102) !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: rgb(255, 47, 0) !important;
  --table-drag-handle-color: rgb(128, 128, 128) !important;
  --table-header-background: rgb(38, 38, 38) !important;
  --table-header-background-hover: rgb(26, 26, 26) !important;
  --table-header-border-color: transparent !important;
  --table-header-color: rgb(204, 204, 204) !important;
  --table-header-font: "Lato Light" !important;
  --table-line-height: 2rem !important;
  --table-selection: rgba(255, 47, 0, 0.1) !important;
  --table-selection-border-color: rgb(255, 47, 0) !important;
  --tag-background: rgba(255, 47, 0, 0.1) !important;
  --tag-background-hover: rgba(255, 47, 0, 0.2) !important;
  --tag-border-color: rgba(255, 47, 0, 0.15) !important;
  --tag-border-color-hover: rgba(255, 47, 0, 0.15) !important;
  --tag-color: rgb(255, 47, 0) !important;
  --tag-color-hover: rgb(255, 47, 0) !important;
  --tag-radius: 8px !important;
  --tertiary: rgb(255, 88, 51) !important;
  --text-accent: rgb(255, 47, 0) !important;
  --text-accent-hover: rgb(255, 88, 51) !important;
  --text-faint: rgb(128, 128, 128) !important;
  --text-muted: rgb(153, 153, 153) !important;
  --text-normal: rgb(179, 179, 179) !important;
  --text-selection: rgba(255, 47, 0, 0.33) !important;
  --textHighlight: transparent !important;
  --titleFont: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(26, 26, 26) !important;
  --titlebar-background-focused: rgb(26, 26, 26) !important;
  --titlebar-text-color: rgb(204, 204, 204) !important;
  --titlebar-text-color-focused: rgb(204, 204, 204) !important;
  --toggle-border-width: 1px !important;
  --toggle-s-border-width: 1px !important;
  --vault-profile-actions-display: none !important;
  --vault-profile-color: rgb(204, 204, 204) !important;
  --vault-profile-color-hover: rgb(255, 255, 255) !important;
  --white-10: rgb(26, 26, 26) !important;
  --white-100: rgb(255, 255, 255) !important;
  --white-20: rgb(51, 51, 51) !important;
  --white-30: rgb(77, 77, 77) !important;
  --white-40: rgb(102, 102, 102) !important;
  --white-50: rgb(128, 128, 128) !important;
  --white-60: rgb(153, 153, 153) !important;
  --white-70: rgb(179, 179, 179) !important;
  --white-80: rgb(204, 204, 204) !important;
  --white-85: rgb(217, 217, 217) !important;
  --white-90: rgb(230, 230, 230) !important;
  --white-92: rgb(235, 235, 235) !important;
  --white-96: rgb(245, 245, 245) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(179, 179, 179);
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
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body del {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: line-through rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
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
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
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

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-left-color: rgb(255, 47, 0);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
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
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  padding-left: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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
  text-decoration: rgb(179, 179, 179);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
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
  text-decoration: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
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
  text-decoration: rgb(204, 204, 204);
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
  text-decoration: rgb(204, 204, 204);
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
  text-decoration: rgb(204, 204, 204);
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
  text-decoration: underline dotted rgb(179, 179, 179);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 11 !important;
  --accent-l: 50% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgb(230, 230, 230) !important;
  --background-modifier-border-focus: transparent !important;
  --background-modifier-border-hover: transparent !important;
  --background-modifier-hover: transparent !important;
  --background-primary: rgb(255, 255, 255) !important;
  --background-primary-alt: rgb(245, 245, 245) !important;
  --background-secondary: rgb(255, 255, 255) !important;
  --background-secondary-alt: rgb(255, 255, 255) !important;
  --bases-cards-background: rgb(255, 255, 255) !important;
  --bases-cards-cover-background: rgb(245, 245, 245) !important;
  --bases-cards-shadow-hover: 0 0 0 1px transparent !important;
  --bases-group-heading-property-color: rgb(102, 102, 102) !important;
  --bases-table-cell-background-active: rgb(255, 255, 255) !important;
  --bases-table-cell-background-disabled: rgb(245, 245, 245) !important;
  --bases-table-cell-background-selected: rgba(255, 47, 0, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px transparent !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(10, 101%, 53.75%) !important;
  --bases-table-group-background: rgb(245, 245, 245) !important;
  --bases-table-header-background: rgb(255, 255, 255) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: rgb(102, 102, 102) !important;
  --bases-table-summary-background: rgb(255, 255, 255) !important;
  --bases-table-summary-background-hover: transparent !important;
  --black-10: rgb(230, 230, 230) !important;
  --black-100: rgb(0, 0, 0) !important;
  --black-20: rgb(204, 204, 204) !important;
  --black-30: rgb(179, 179, 179) !important;
  --black-40: rgb(153, 153, 153) !important;
  --black-50: rgb(128, 128, 128) !important;
  --black-60: rgb(102, 102, 102) !important;
  --black-70: rgb(77, 77, 77) !important;
  --black-75: rgb(64, 64, 64) !important;
  --black-80: rgb(51, 51, 51) !important;
  --black-85: rgb(38, 38, 38) !important;
  --black-90: rgb(26, 26, 26) !important;
  --black-95: rgb(13, 13, 13) !important;
  --blockquote-border-color: hsl(10, 101%, 53.75%) !important;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --bodyFont: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 8px !important;
  --callout-border-width: 2px;
  --callout-radius: 8px;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-card-label-color: rgb(128, 128, 128) !important;
  --caret-color: rgb(77, 77, 77) !important;
  --checkbox-border-color: rgb(51, 51, 51) !important;
  --checkbox-border-color-hover: rgb(77, 77, 77) !important;
  --checkbox-color: rgb(0, 0, 0) !important;
  --checkbox-color-hover: rgb(26, 26, 26) !important;
  --checkbox-marker-color: rgb(255, 255, 255) !important;
  --checkbox-radius: 8px !important;
  --checkbox-size: 15px !important;
  --checklist-done-color: rgb(102, 102, 102) !important;
  --clickable-icon-radius: 8px !important;
  --code-background: rgb(255, 255, 255) !important;
  --code-bracket-background: transparent !important;
  --code-comment: rgb(128, 128, 128) !important;
  --code-normal: rgb(26, 26, 26) !important;
  --code-punctuation: rgb(102, 102, 102) !important;
  --codeFont: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(128, 128, 128) !important;
  --collapse-icon-color-collapsed: rgb(255, 47, 0) !important;
  --color-accent: rgb(255, 47, 0) !important;
  --color-accent-1: hsl(10, 101%, 53.75%) !important;
  --color-accent-2: hsl(8, 102%, 57.5%) !important;
  --color-accent-hsl: 11, 100%, 50% !important;
  --dark: rgb(77, 77, 77) !important;
  --darkgray: rgb(77, 77, 77) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(10, 101%, 53.75%) !important;
  --drag-ghost-background: rgb(255, 213, 204) !important;
  --drag-ghost-text-color: rgb(26, 26, 26) !important;
  --dropdown-background: rgb(235, 235, 235) !important;
  --dropdown-background-hover: rgb(255, 255, 255) !important;
  --embed-block-shadow-hover: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --embed-border-start: 2px solid hsl(10, 101%, 53.75%) !important;
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --file-header-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(230, 230, 230) !important;
  --flair-color: rgb(77, 77, 77) !important;
  --font-interface: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Lato Light" !important;
  --font-mermaid: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', "Times New Roman", Times, serif, 'Arial' !important;
  --font-text: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Times New Roman", Times, serif !important;
  --footnote-id-color: rgb(102, 102, 102) !important;
  --footnote-id-color-no-occurrences: rgb(128, 128, 128) !important;
  --footnote-input-background-active: transparent !important;
  --graph-node: rgb(51, 51, 51) !important;
  --graph-node-attachment: rgb(0, 0, 0) !important;
  --graph-node-focused: rgb(255, 47, 0) !important;
  --graph-node-tag: rgb(0, 0, 0) !important;
  --graph-node-unresolved: rgb(128, 128, 128) !important;
  --graph-text: rgb(77, 77, 77) !important;
  --gray: rgb(102, 102, 102) !important;
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
  --headerFont: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(128, 128, 128) !important;
  --highlight: transparent !important;
  --hr-color: rgb(51, 51, 51) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(51, 51, 51) !important;
  --icon-color-active: rgb(0, 0, 0) !important;
  --icon-color-focused: rgb(26, 26, 26) !important;
  --icon-color-hover: rgb(26, 26, 26) !important;
  --inline-title-line-height: 1.5rem !important;
  --inline-title-size: 1.5rem !important;
  --inline-title-weight: 425 !important;
  --input-date-separator: rgb(128, 128, 128) !important;
  --input-placeholder-color: rgb(128, 128, 128) !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(10, 101%, 53.75%) !important;
  --interactive-accent-hover: hsl(8, 102%, 57.5%) !important;
  --interactive-accent-hsl: 11, 100%, 50% !important;
  --interactive-hover: rgb(255, 255, 255) !important;
  --interactive-normal: rgb(230, 230, 230) !important;
  --light: rgb(255, 255, 255) !important;
  --lightgray: rgb(255, 255, 255) !important;
  --link-color: rgb(77, 77, 77) !important;
  --link-color-hover: rgb(0, 0, 0) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(77, 77, 77) !important;
  --link-external-color-hover: rgb(0, 0, 0) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(128, 128, 128) !important;
  --link-unresolved-decoration-color: rgb(51, 51, 51) !important;
  --link-unresolved-opacity: .5 !important;
  --list-bullet-radius: 8px !important;
  --list-marker-color: rgb(128, 128, 128) !important;
  --list-marker-color-collapsed: rgb(255, 47, 0) !important;
  --list-marker-color-hover: rgb(102, 102, 102) !important;
  --menu-background: rgb(255, 255, 255) !important;
  --menu-border-color: transparent !important;
  --metadata-border-radius: 8px !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(77, 77, 77) !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(102, 102, 102) !important;
  --metadata-label-text-color-hover: rgb(102, 102, 102) !important;
  --metadata-padding: 2px !important;
  --metadata-property-background-active: transparent !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent !important;
  --metadata-property-radius: 8px !important;
  --metadata-property-radius-hover: 8px !important;
  --metadata-property-radius-hover-focus: 8px !important;
  --modal-background: rgb(255, 255, 255) !important;
  --modal-border-color: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: rgb(204, 204, 204) !important;
  --nav-collapse-icon-color-collapsed: rgb(255, 255, 255) !important;
  --nav-heading-color: rgb(204, 204, 204) !important;
  --nav-heading-color-colapsed-hover: rgb(255, 255, 255) !important;
  --nav-heading-color-collapsed: rgb(204, 204, 204) !important;
  --nav-heading-color-collapsed-hover: rgb(102, 102, 102) !important;
  --nav-heading-color-hover: rgb(230, 230, 230) !important;
  --nav-heading-weight: 425 !important;
  --nav-indentation-guide-color: rgb(102, 102, 102) !important;
  --nav-item-background-active: rgb(51, 51, 51) !important;
  --nav-item-background-hover: rgb(51, 51, 51) !important;
  --nav-item-background-selected: rgb(51, 51, 51) !important;
  --nav-item-color: rgb(204, 204, 204) !important;
  --nav-item-color-active: rgb(255, 255, 255) !important;
  --nav-item-color-highlighted: rgb(230, 230, 230) !important;
  --nav-item-color-hover: rgb(230, 230, 230) !important;
  --nav-item-color-selected: rgb(255, 255, 255) !important;
  --nav-item-weight: 425 !important;
  --nav-tag-color: rgb(128, 128, 128) !important;
  --nav-tag-color-active: rgb(102, 102, 102) !important;
  --nav-tag-color-hover: rgb(102, 102, 102) !important;
  --orange-10: rgb(51, 9, 0) !important;
  --orange-100: rgb(255, 234, 229) !important;
  --orange-20: rgb(102, 19, 0) !important;
  --orange-30: rgb(153, 28, 0) !important;
  --orange-40: rgb(204, 37, 0) !important;
  --orange-50: rgb(255, 47, 0) !important;
  --orange-60: rgb(255, 88, 51) !important;
  --orange-70: rgb(255, 130, 102) !important;
  --orange-80: rgb(255, 172, 153) !important;
  --orange-90: rgb(255, 213, 204) !important;
  --pdf-background: rgb(255, 255, 255) !important;
  --pdf-page-background: rgb(255, 255, 255) !important;
  --pdf-sidebar-background: rgb(255, 255, 255) !important;
  --pill-background: rgb(245, 245, 245) !important;
  --pill-background-hover: rgb(235, 235, 235) !important;
  --pill-border-color: rgb(230, 230, 230) !important;
  --pill-border-color-hover: rgb(26, 26, 26) !important;
  --pill-color: rgb(51, 51, 51) !important;
  --pill-color-hover: rgb(51, 51, 51) !important;
  --pill-color-remove: rgb(128, 128, 128) !important;
  --pill-color-remove-hover: rgb(255, 47, 0) !important;
  --pill-radius: 8px !important;
  --prompt-background: rgb(255, 255, 255) !important;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --ribbon-background: rgb(26, 26, 26) !important;
  --ribbon-background-collapsed: rgb(26, 26, 26) !important;
  --scrollbar-active-thumb-bg: rgb(51, 51, 51) !important;
  --scrollbar-bg-color: rgb(102, 102, 102) !important;
  --scrollbar-thumb-bg: rgb(102, 102, 102) !important;
  --search-clear-button-color: rgb(102, 102, 102) !important;
  --search-icon-color: rgb(51, 51, 51) !important;
  --search-result-background: rgb(51, 51, 51) !important;
  --secondary: rgb(255, 47, 0) !important;
  --setting-group-heading-color: rgb(77, 77, 77) !important;
  --setting-items-background: rgb(245, 245, 245) !important;
  --shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --slider-thumb-border-color: transparent !important;
  --slider-thumb-radius: 10px !important;
  --slider-track-background: rgb(51, 51, 51) !important;
  --status-bar-background: rgb(38, 38, 38) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: rgb(204, 204, 204) !important;
  --suggestion-background: rgb(255, 255, 255) !important;
  --swatch-radius: 8px !important;
  --swatch-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px !important;
  --tab-background-active: rgb(245, 245, 245) !important;
  --tab-container-background: rgb(255, 255, 255) !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-background: rgb(255, 255, 255) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 255, 255), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 47, 0) !important;
  --tab-text-color: rgb(51, 51, 51) !important;
  --tab-text-color-active: rgb(102, 102, 102) !important;
  --tab-text-color-focused: rgb(102, 102, 102) !important;
  --tab-text-color-focused-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active-current: rgb(255, 47, 0) !important;
  --tab-text-color-focused-highlighted: rgb(255, 47, 0) !important;
  --table-background-color: rgb(51, 51, 51) !important;
  --table-drag-handle-background-active: hsl(10, 101%, 53.75%) !important;
  --table-drag-handle-color: rgb(128, 128, 128) !important;
  --table-drag-handle-color-active: rgb(255, 255, 255) !important;
  --table-header-background: rgb(245, 245, 245) !important;
  --table-header-background-hover: rgb(235, 235, 235) !important;
  --table-header-color: rgb(26, 26, 26) !important;
  --table-header-font: "Lato Light" !important;
  --table-line-height: 2rem !important;
  --table-selection: rgba(255, 47, 0, 0.1) !important;
  --table-selection-border-color: hsl(10, 101%, 53.75%) !important;
  --tag-background: rgba(255, 47, 0, 0.1) !important;
  --tag-background-hover: rgba(255, 47, 0, 0.2) !important;
  --tag-border-color: rgba(255, 47, 0, 0.15) !important;
  --tag-border-color-hover: rgba(255, 47, 0, 0.15) !important;
  --tag-color: rgb(255, 47, 0) !important;
  --tag-color-hover: rgb(255, 47, 0) !important;
  --tag-radius: 8px !important;
  --tertiary: rgb(255, 88, 51) !important;
  --text-accent: rgb(255, 47, 0) !important;
  --text-accent-hover: rgb(255, 88, 51) !important;
  --text-faint: rgb(128, 128, 128) !important;
  --text-muted: rgb(102, 102, 102) !important;
  --text-normal: rgb(77, 77, 77) !important;
  --text-on-accent: rgb(255, 255, 255) !important;
  --text-selection: rgba(255, 47, 0, 0.2) !important;
  --textHighlight: transparent !important;
  --titleFont: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(255, 255, 255) !important;
  --titlebar-background-focused: rgb(255, 255, 255) !important;
  --titlebar-text-color: rgb(26, 26, 26) !important;
  --titlebar-text-color-focused: rgb(0, 0, 0) !important;
  --toggle-border-width: 1px !important;
  --toggle-s-border-width: 1px !important;
  --vault-profile-actions-display: none !important;
  --vault-profile-color: rgb(230, 230, 230) !important;
  --vault-profile-color-hover: rgb(255, 255, 255) !important;
  --white-10: rgb(26, 26, 26) !important;
  --white-100: rgb(255, 255, 255) !important;
  --white-20: rgb(51, 51, 51) !important;
  --white-30: rgb(77, 77, 77) !important;
  --white-40: rgb(102, 102, 102) !important;
  --white-50: rgb(128, 128, 128) !important;
  --white-60: rgb(153, 153, 153) !important;
  --white-70: rgb(179, 179, 179) !important;
  --white-80: rgb(204, 204, 204) !important;
  --white-85: rgb(217, 217, 217) !important;
  --white-90: rgb(230, 230, 230) !important;
  --white-92: rgb(235, 235, 235) !important;
  --white-96: rgb(245, 245, 245) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(77, 77, 77);
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
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body del {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body p {
  color: rgb(102, 102, 102);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
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
  text-decoration: rgb(128, 128, 128);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  border-left-color: rgb(255, 58, 19);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(102, 102, 102);
  text-decoration: line-through rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
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
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  padding-left: 10px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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
  text-decoration: rgb(77, 77, 77);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, h2.page-title a {
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
  text-decoration: rgb(204, 204, 204);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
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
  text-decoration: rgb(204, 204, 204);
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
  text-decoration: rgb(204, 204, 204);
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
  text-decoration: rgb(204, 204, 204);
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
  text-decoration: underline dotted rgb(77, 77, 77);
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
}`,
  },
};
