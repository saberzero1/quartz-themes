import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "bolt",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["formular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 181 !important;
  --accent-l: 41% !important;
  --accent-s: 80% !important;
  --background: #0d1a1a !important;
  --background-modifier-active-hover: rgba(21, 185, 188, 0.1) !important;
  --background-modifier-border: #2f3f3f !important;
  --background-modifier-border-focus: #2f8a8b !important;
  --background-modifier-border-hover: #2f3f3f !important;
  --background-modifier-form-field: #2f3f3f !important;
  --background-modifier-form-field-hover: #2f3f3f !important;
  --background-modifier-hover: rgba(106, 148, 149, 0.15) !important;
  --background-primary: #0d1a1a !important;
  --background-primary-alt: #2f3f3f !important;
  --background-secondary: #192e2e !important;
  --background-secondary-alt: #2f3f3f !important;
  --bases-cards-background: #0d1a1a !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: #2f3f3f !important;
  --bases-cards-radius: 1.1em !important;
  --bases-cards-shadow: 0 0 0 1px #2f3f3f !important;
  --bases-cards-shadow-hover: 0 0 0 1px #2f3f3f !important;
  --bases-embed-border-color: #2f3f3f !important;
  --bases-embed-border-radius: 0.75em !important;
  --bases-group-heading-property-color: #bec8c8 !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: #2f3f3f !important;
  --bases-table-cell-background-active: #0d1a1a !important;
  --bases-table-cell-background-disabled: #2f3f3f !important;
  --bases-table-cell-background-selected: rgba(21, 185, 188, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #2f8a8b !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(21, 185, 188) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-radius: 0.75em !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: #2f3f3f !important;
  --bases-table-header-background: #0d1a1a !important;
  --bases-table-header-background-hover: rgba(106, 148, 149, 0.15) !important;
  --bases-table-header-color: #bec8c8 !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: #0d1a1a !important;
  --bases-table-summary-background-hover: rgba(106, 148, 149, 0.15) !important;
  --blockquote-background-color: #156f73 !important;
  --blockquote-border-color: rgb(21, 185, 188) !important;
  --blockquote-border-thickness: 0px !important;
  --blockquote-color: #cce8e8 !important;
  --blur-background: color-mix(in srgb, #2f3f3f 65%, transparent) linear-gradient(#2f3f3f, color-mix(in srgb, #2f3f3f 65%, transparent)) !important;
  --bodyFont: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border-width: 2px !important;
  --button-radius: 20px !important;
  --callout-radius: 0.75em;
  --canvas-background: #0d1a1a !important;
  --canvas-card-label-color: #899392 !important;
  --canvas-controls-radius: 0.75em !important;
  --canvas-dot-pattern: #2f3f3f !important;
  --caret-color: #e0e3e2 !important;
  --checkbox-border-color: #899392 !important;
  --checkbox-border-color-hover: #bec8c8 !important;
  --checkbox-color: rgb(21, 185, 188) !important;
  --checkbox-color-hover: rgb(22, 218, 212) !important;
  --checkbox-marker-color: #0d1a1a !important;
  --checkbox-radius: 0.2rem !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 0.75em !important;
  --code-background: #2f3f3f !important;
  --code-border-color: #2f3f3f !important;
  --code-bracket-background: rgba(106, 148, 149, 0.15) !important;
  --code-comment: #899392 !important;
  --code-normal: #e0e3e2 !important;
  --code-punctuation: #bec8c8 !important;
  --code-radius: 0.75em !important;
  --codeFont: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #899392 !important;
  --collapse-icon-color-collapsed: rgb(22, 218, 212) !important;
  --color-accent: rgb(21, 185, 188) !important;
  --color-accent-1: rgb(22, 218, 212) !important;
  --color-accent-2: #b0cccc !important;
  --color-accent-hsl: 181,
			80%,
			41% !important;
  --color-base-00: #0d1a1a !important;
  --color-base-05: #192e2e !important;
  --color-base-10: #2f3f3f !important;
  --color-base-100: #e0e3e2 !important;
  --color-base-20: #192e2e !important;
  --color-base-25: #2f3f3f !important;
  --color-base-30: #2f3f3f !important;
  --color-base-35: #2f3f3f !important;
  --color-base-40: #2f3f3f !important;
  --color-base-50: #899392 !important;
  --color-base-60: #b0cccc !important;
  --color-base-70: #bec8c8 !important;
  --custom-drawer-header: "Bolt" !important;
  --dark: #e0e3e2 !important;
  --darkgray: #e0e3e2 !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(21, 185, 188) !important;
  --dropdown-background: #2f3f3f !important;
  --dropdown-background-hover: #2f3f3f !important;
  --embed-block-shadow-hover: 0 0 0 1px #2f3f3f, inset 0 0 0 1px #2f3f3f !important;
  --embed-border-start: 2px solid rgb(21, 185, 188) !important;
  --error: #ffb4ab !important;
  --error-container: #93000a !important;
  --file-header-background: #0d1a1a !important;
  --file-header-background-focused: #0d1a1a !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-justify: left !important;
  --file-line-width: 750px !important;
  --flair-background: #2f3f3f !important;
  --flair-color: #e0e3e2 !important;
  --font-interface: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R' !important;
  --footnote-divider-color: #2f3f3f !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: #bec8c8 !important;
  --footnote-id-color-no-occurrences: #899392 !important;
  --footnote-input-background-active: rgba(106, 148, 149, 0.15) !important;
  --footnote-radius: 0.75em !important;
  --graph-line: #2f3f3f !important;
  --graph-node: rgb(26, 206, 209) !important;
  --graph-node-focused: #2f8a8b !important;
  --graph-node-tag: #53dfdd !important;
  --graph-node-unresolved: #b4c8e9 !important;
  --graph-text: #e0e3e2 !important;
  --gray: #bec8c8 !important;
  --h1-size: 2.3em !important;
  --h1-weight: 300 !important;
  --h2-size: 2em !important;
  --h2-weight: 300 !important;
  --h3-size: 1.85em !important;
  --h3-weight: 400 !important;
  --h4-size: 1.7em !important;
  --h4-weight: 400 !important;
  --h5-size: 1.58em !important;
  --h5-weight: 400 !important;
  --h6-size: 1.35em !important;
  --h6-weight: 500 !important;
  --headerFont: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #899392 !important;
  --highlight: rgba(106, 148, 149, 0.15) !important;
  --hr-color: #2f3f3f !important;
  --icon-color: #bec8c8 !important;
  --icon-color-active: rgb(22, 218, 212) !important;
  --icon-color-focused: #e0e3e2 !important;
  --icon-color-hover: #bec8c8 !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-line-height: 1.3em !important;
  --inline-title-size: 2.5em !important;
  --inline-title-weight: 500 !important;
  --input-border-width: 0 !important;
  --input-date-separator: #899392 !important;
  --input-placeholder-color: #899392 !important;
  --input-radius: 20px !important;
  --input-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --interactive-accent: rgb(21, 185, 188) !important;
  --interactive-accent-hover: rgb(22, 218, 212) !important;
  --interactive-accent-hsl: 181,
			80%,
			41% !important;
  --interactive-hover: #2f3f3f !important;
  --interactive-normal: #2f3f3f !important;
  --light: #0d1a1a !important;
  --lightgray: #192e2e !important;
  --link-color: rgb(21, 185, 188) !important;
  --link-color-hover: rgb(21, 185, 188) !important;
  --link-decoration-thickness: 1.5px !important;
  --link-external-color: #b4c8e9 !important;
  --link-external-color-hover: #b0cccc !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(22, 218, 212) !important;
  --link-unresolved-decoration-color: rgba(21, 185, 188, 0.3) !important;
  --list-marker-color: #899392 !important;
  --list-marker-color-collapsed: rgb(22, 218, 212) !important;
  --list-marker-color-hover: #bec8c8 !important;
  --lower-accent: #156f73 !important;
  --menu-background: #192e2e !important;
  --menu-border-color: #2f3f3f !important;
  --menu-border-width: 2px !important;
  --menu-radius: 1.1em !important;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --metadata-background: #192e2e !important;
  --metadata-border-color: #2f3f3f !important;
  --metadata-border-radius: 0.75em !important;
  --metadata-divider-color: #2f3f3f !important;
  --metadata-input-background-active: rgba(106, 148, 149, 0.15) !important;
  --metadata-input-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #e0e3e2 !important;
  --metadata-label-background-active: rgba(106, 148, 149, 0.15) !important;
  --metadata-label-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #bec8c8 !important;
  --metadata-label-text-color-hover: #bec8c8 !important;
  --metadata-padding: 1em !important;
  --metadata-property-background-active: rgba(106, 148, 149, 0.15) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #2f8a8b !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px #2f3f3f !important;
  --modal-background: #0d1a1a !important;
  --modal-border-color: #2f3f3f !important;
  --modal-border-width: 2px !important;
  --modal-radius: 20px !important;
  --nav-collapse-icon-color: #899392 !important;
  --nav-collapse-icon-color-collapsed: #899392 !important;
  --nav-heading-color: #e0e3e2 !important;
  --nav-heading-color-collapsed: #899392 !important;
  --nav-heading-color-collapsed-hover: #bec8c8 !important;
  --nav-heading-color-hover: #e0e3e2 !important;
  --nav-indentation-guide-color: rgb(21, 185, 188) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgba(106, 148, 149, 0.15) !important;
  --nav-item-background-hover: rgba(106, 148, 149, 0.15) !important;
  --nav-item-background-selected: rgba(21, 185, 188, 0.15) !important;
  --nav-item-color: #bec8c8 !important;
  --nav-item-color-active: #e0e3e2 !important;
  --nav-item-color-highlighted: rgb(22, 218, 212) !important;
  --nav-item-color-hover: #e0e3e2 !important;
  --nav-item-color-selected: #e0e3e2 !important;
  --nav-item-radius: 0.75em !important;
  --nav-tag-color: #899392 !important;
  --nav-tag-color-active: #bec8c8 !important;
  --nav-tag-color-hover: #bec8c8 !important;
  --nav-tag-radius: 0.75em !important;
  --on-background: #e0e3e2 !important;
  --on-error: #690005 !important;
  --on-error-container: #ffdad6 !important;
  --on-lower-accent: #cce8e8 !important;
  --on-primary: #e2f0f0 !important;
  --on-primary-container: #b4dcdd !important;
  --on-secondary: #034747 !important;
  --on-secondary-container: #cce8e8 !important;
  --on-surface: #e0e3e2 !important;
  --on-surface-variant: #bec8c8 !important;
  --on-tertiary: #1d314c !important;
  --on-tertiary-container: #d4e3ff !important;
  --on-upper-accent: #b0cccc !important;
  --outline: #899392 !important;
  --pdf-background: #0d1a1a !important;
  --pdf-page-background: #0d1a1a !important;
  --pdf-shadow: 0 0 0 1px #2f3f3f !important;
  --pdf-sidebar-background: #0d1a1a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #2f3f3f !important;
  --pill-border-color: #2f3f3f !important;
  --pill-border-color-hover: #2f3f3f !important;
  --pill-border-width: 2px !important;
  --pill-color: #bec8c8 !important;
  --pill-color-hover: #e0e3e2 !important;
  --pill-color-remove: #899392 !important;
  --pill-color-remove-hover: rgb(22, 218, 212) !important;
  --primary: rgb(21, 185, 188) !important;
  --primary-container: #2f8a8b !important;
  --primary-lighter: rgb(26, 206, 209) !important;
  --prompt-background: #0d1a1a !important;
  --prompt-border-color: #2f3f3f !important;
  --prompt-border-width: 2px !important;
  --radius-l: 20px !important;
  --radius-m: 1.1em !important;
  --radius-s: 0.75em !important;
  --raised-background: color-mix(in srgb, #2f3f3f 65%, transparent) linear-gradient(#2f3f3f, color-mix(in srgb, #2f3f3f 65%, transparent)) !important;
  --ribbon-background: #192e2e !important;
  --ribbon-background-collapsed: #0d1a1a !important;
  --scrollbar-active-thumb-bg: #156f73 !important;
  --scrollbar-radius: 20px !important;
  --scrollbar-thumb-bg: #2f3f3f !important;
  --search-clear-button-color: #bec8c8 !important;
  --search-icon-color: #bec8c8 !important;
  --search-result-background: #0d1a1a !important;
  --secondary: #b0cccc !important;
  --secondary-container: #156f73 !important;
  --setting-group-heading-color: #e0e3e2 !important;
  --setting-items-background: #2f3f3f !important;
  --setting-items-border-color: #2f3f3f !important;
  --setting-items-radius: 20px !important;
  --shadow-bottom: 0 10px 10px -10px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23) !important;
  --shadow-m: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --slider-thumb-border-color: #2f3f3f !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: #2f3f3f !important;
  --status-bar-background: #192e2e !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-radius: 1.1em 0 0 0 !important;
  --status-bar-text-color: #bec8c8 !important;
  --suggestion-background: #0d1a1a !important;
  --surface: #192e2e !important;
  --surface-variant: #2f3f3f !important;
  --tab-background-active: transparent !important;
  --tab-container-background: #192e2e !important;
  --tab-curve: 0 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 0.75em !important;
  --tab-radius-active: 0 !important;
  --tab-switcher-background: #192e2e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #192e2e, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(21, 185, 188) !important;
  --tab-text-color: #899392 !important;
  --tab-text-color-active: #bec8c8 !important;
  --tab-text-color-focused: #bec8c8 !important;
  --tab-text-color-focused-active: #bec8c8 !important;
  --tab-text-color-focused-active-current: #e0e3e2 !important;
  --tab-text-color-focused-highlighted: rgb(22, 218, 212) !important;
  --tab-width: 250px !important;
  --table-add-button-border-color: #2f3f3f !important;
  --table-border-color: #2f3f3f !important;
  --table-drag-handle-background-active: rgb(21, 185, 188) !important;
  --table-drag-handle-color: #899392 !important;
  --table-header-align: center !important;
  --table-header-background: #b0cccc !important;
  --table-header-background-hover: #b0cccc !important;
  --table-header-border-color: #2f3f3f !important;
  --table-header-color: #e0e3e2 !important;
  --table-header-size: 0.875em !important;
  --table-selection: rgba(21, 185, 188, 0.1) !important;
  --table-selection-border-color: rgb(21, 185, 188) !important;
  --tag-background: #354863 !important;
  --tag-background-hover: #354863 !important;
  --tag-border-color: rgba(21, 185, 188, 0.15) !important;
  --tag-border-color-hover: rgba(21, 185, 188, 0.15) !important;
  --tag-color: #d4e3ff !important;
  --tag-color-hover: #d4e3ff !important;
  --tag-radius: 5px !important;
  --tertiary: #b4c8e9 !important;
  --tertiary-container: #354863 !important;
  --text-accent: rgb(22, 218, 212) !important;
  --text-accent-hover: #b0cccc !important;
  --text-faint: #899392 !important;
  --text-muted: #bec8c8 !important;
  --text-normal: #e0e3e2 !important;
  --text-selection: rgba(21, 185, 188, 0.33) !important;
  --textHighlight: rgba(106, 148, 149, 0.15) !important;
  --titleFont: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #192e2e !important;
  --titlebar-background-focused: #2f3f3f !important;
  --titlebar-border-color: #2f3f3f !important;
  --titlebar-text-color: #bec8c8 !important;
  --titlebar-text-color-focused: #e0e3e2 !important;
  --upper-accent: #034747 !important;
  --vault-profile-color: #e0e3e2 !important;
  --vault-profile-color-hover: #e0e3e2 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 46, 46);
  color: rgb(224, 227, 226);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 26, 26);
  color: rgb(224, 227, 226);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 46, 46);
  color: rgb(224, 227, 226);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 46, 46);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(224, 227, 226);
}

body div#quartz-root {
  background-color: rgb(13, 26, 26);
  color: rgb(224, 227, 226);
}`,
    typography: `body .page article p > b, b {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .page article p > em, em {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .page article p > i, i {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .page article p > strong, strong {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .text-highlight {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body del {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: line-through rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body p {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 200, 200) none 0px;
  text-decoration: rgb(190, 200, 200);
  text-decoration-color: rgb(190, 200, 200);
}`,
    links: `body a.external, footer a {
  color: rgb(180, 200, 233);
  outline: rgb(180, 200, 233) none 0px;
  text-decoration: 1.5px rgb(180, 200, 233);
  text-decoration-color: rgb(180, 200, 233);
  text-decoration-thickness: 1.5px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 185, 188);
  outline: rgb(21, 185, 188) none 0px;
  text-decoration: underline 1.5px rgb(21, 185, 188);
  text-decoration-color: rgb(21, 185, 188);
  text-decoration-thickness: 1.5px;
}

body a.internal.broken {
  color: rgb(22, 218, 212);
  outline: rgb(22, 218, 212) none 0px;
  text-decoration: underline 1.5px rgba(21, 185, 188, 0.3);
  text-decoration-color: rgba(21, 185, 188, 0.3);
  text-decoration-thickness: 1.5px;
}`,
    lists: `body dd {
  color: rgb(224, 227, 226);
}

body dt {
  color: rgb(224, 227, 226);
}

body ol > li {
  color: rgb(224, 227, 226);
}

body ol.overflow {
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body ul > li {
  color: rgb(224, 227, 226);
}

body ul.overflow {
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(137, 147, 146);
  text-decoration: rgb(137, 147, 146);
}

body blockquote {
  background-color: rgb(21, 111, 115);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body table {
  color: rgb(224, 227, 226);
  width: 226.438px;
}

body td {
  border-bottom-color: rgb(47, 63, 63);
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-width: 0px;
  color: rgb(224, 227, 226);
}

body th {
  border-bottom-color: rgb(3, 71, 71);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 71, 71);
  border-left-width: 0px;
  border-right-color: rgb(3, 71, 71);
  border-right-width: 0px;
  border-top-color: rgb(3, 71, 71);
  border-top-left-radius: 10.5px;
  border-top-width: 0px;
  color: rgb(3, 71, 71);
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 7px;
  text-align: center;
}

body tr {
  background-color: rgb(176, 204, 204);
}`,
    code: `body code {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(224, 227, 226);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

body pre > code, pre:has(> code) {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body figcaption {
  color: rgb(224, 227, 226);
}

body figure {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body img {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 17.6px;
  border-bottom-right-radius: 17.6px;
  border-left-color: rgb(224, 227, 226);
  border-radius: 17.6px;
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 17.6px;
  border-top-right-radius: 17.6px;
}

body video {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    embeds: `body .file-embed {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(190, 200, 200);
  border-bottom-left-radius: 15.4px;
  border-bottom-right-radius: 15.4px;
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  border-top-left-radius: 15.4px;
  border-top-right-radius: 15.4px;
}

body .footnotes {
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

body .transclude {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(21, 185, 188);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body .transclude-inner {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(21, 185, 188);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body input[type=checkbox] {
  border-bottom-color: rgb(137, 147, 146);
  border-bottom-left-radius: 3.2px;
  border-bottom-right-radius: 3.2px;
  border-bottom-width: 2px;
  border-left-color: rgb(137, 147, 146);
  border-left-width: 2px;
  border-right-color: rgb(137, 147, 146);
  border-right-width: 2px;
  border-top-color: rgb(137, 147, 146);
  border-top-left-radius: 3.2px;
  border-top-right-radius: 3.2px;
  border-top-width: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='*'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='-'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='/'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='>'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='?'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='I'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='S'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='b'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='c'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='d'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='f'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='i'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='k'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='l'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='p'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='u'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='w'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(47, 63, 63);
  border-left-width: 0px;
  border-right-color: rgb(47, 63, 63);
  border-right-width: 0px;
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: rgb(224, 227, 226);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 2px;
  border-left-color: rgb(47, 63, 63);
  border-left-width: 2px;
  border-right-color: rgb(47, 63, 63);
  border-right-width: 2px;
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 227, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 227, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  color: rgb(224, 227, 226);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 2px;
  border-left-color: rgb(47, 63, 63);
  border-left-width: 2px;
  border-right-color: rgb(47, 63, 63);
  border-right-width: 2px;
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 46, 46);
  border-bottom-width: 2px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(224, 227, 226);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(224, 227, 226);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(53, 72, 99);
  border-bottom-color: rgba(21, 185, 188, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(21, 185, 188, 0.15);
  border-right-color: rgba(21, 185, 188, 0.15);
  border-top-color: rgba(21, 185, 188, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(212, 227, 255);
}

body h1 {
  color: rgb(224, 227, 226);
}

body h2 {
  color: rgb(224, 227, 226);
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 227, 226);
}

body h3 {
  color: rgb(224, 227, 226);
}

body h4 {
  color: rgb(224, 227, 226);
}

body h5 {
  color: rgb(224, 227, 226);
}

body h6 {
  color: rgb(224, 227, 226);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(190, 200, 200);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(190, 200, 200);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 200, 200);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 9.75px;
  border-bottom-right-radius: 9.75px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 9.75px;
  border-top-right-radius: 9.75px;
  color: rgb(224, 227, 226);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(190, 200, 200);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(190, 200, 200);
}`,
    footer: `body footer {
  background-color: rgb(25, 46, 46);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 13.2px;
  border-top-width: 2px;
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(190, 200, 200);
  text-decoration: rgb(190, 200, 200);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(190, 200, 200);
  text-decoration: rgb(190, 200, 200);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body li.section-li > .section .meta {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(190, 200, 200);
  text-decoration: rgb(190, 200, 200);
}

body ul.section-ul {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(190, 200, 200);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(190, 200, 200);
}

body .darkmode svg {
  color: rgb(21, 185, 188);
  stroke: rgb(21, 185, 188);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(204, 232, 232);
  border-bottom-left-radius: 9.75px;
  border-bottom-right-radius: 9.75px;
  border-left-color: rgb(204, 232, 232);
  border-right-color: rgb(204, 232, 232);
  border-top-color: rgb(204, 232, 232);
  border-top-left-radius: 9.75px;
  border-top-right-radius: 9.75px;
  color: rgb(204, 232, 232);
}

body .breadcrumb-element p {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

body .metadata {
  background-color: rgb(25, 46, 46);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(190, 200, 200);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .metadata-properties {
  border-bottom-color: rgb(190, 200, 200);
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  color: rgb(190, 200, 200);
}

body .navigation-progress {
  background-color: rgb(25, 46, 46);
}

body .page-header h2.page-title {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(224, 227, 226);
  text-decoration: underline dotted rgb(224, 227, 226);
}

body details {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body input[type=text] {
  border-bottom-color: rgb(190, 200, 200);
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 10.5px;
  border-bottom-right-radius: 10.5px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 10.5px;
  border-top-right-radius: 10.5px;
  color: rgb(224, 227, 226);
}

body progress {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body sub {
  color: rgb(224, 227, 226);
}

body summary {
  color: rgb(224, 227, 226);
}

body sup {
  color: rgb(224, 227, 226);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 181 !important;
  --accent-l: 21% !important;
  --accent-s: 100% !important;
  --background: #fdfcfa !important;
  --background-modifier-active-hover: rgba(0, 105, 107, 0.1) !important;
  --background-modifier-border: #dbe8e8 !important;
  --background-modifier-border-focus: #5fb9bb !important;
  --background-modifier-border-hover: #dbe8e8 !important;
  --background-modifier-form-field: #dbe8e8 !important;
  --background-modifier-form-field-hover: #dbe8e8 !important;
  --background-modifier-hover: rgba(106, 148, 149, 0.15) !important;
  --background-primary: #fdfcfa !important;
  --background-primary-alt: #dbe8e8 !important;
  --background-secondary: #eef5f3 !important;
  --background-secondary-alt: #eef5f3 !important;
  --bases-cards-background: #fdfcfa !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: #dbe8e8 !important;
  --bases-cards-radius: 1.1em !important;
  --bases-cards-shadow: 0 0 0 1px #dbe8e8 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #dbe8e8 !important;
  --bases-embed-border-color: #dbe8e8 !important;
  --bases-embed-border-radius: 0.75em !important;
  --bases-group-heading-property-color: #3f4949 !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: #dbe8e8 !important;
  --bases-table-cell-background-active: #fdfcfa !important;
  --bases-table-cell-background-disabled: #dbe8e8 !important;
  --bases-table-cell-background-selected: rgba(0, 105, 107, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #5fb9bb !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(180, 101%, 22.575%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-radius: 0.75em !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: #dbe8e8 !important;
  --bases-table-header-background: #fdfcfa !important;
  --bases-table-header-background-hover: rgba(106, 148, 149, 0.15) !important;
  --bases-table-header-color: #3f4949 !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: #fdfcfa !important;
  --bases-table-summary-background-hover: rgba(106, 148, 149, 0.15) !important;
  --blockquote-background-color: #cce8e8 !important;
  --blockquote-border-color: hsl(180, 101%, 22.575%) !important;
  --blockquote-border-thickness: 0px !important;
  --blockquote-color: #041f20 !important;
  --blur-background: color-mix(in srgb, #fdfcfa 65%, transparent) linear-gradient(#fdfcfa, color-mix(in srgb, #fdfcfa 65%, transparent)) !important;
  --bodyFont: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border-width: 2px !important;
  --button-radius: 20px !important;
  --callout-radius: 0.75em;
  --canvas-background: #fdfcfa !important;
  --canvas-card-label-color: #6f7979 !important;
  --canvas-controls-radius: 0.75em !important;
  --canvas-dot-pattern: #dbe8e8 !important;
  --caret-color: #191c1c !important;
  --checkbox-border-color: #6f7979 !important;
  --checkbox-border-color-hover: #3f4949 !important;
  --checkbox-color: hsl(180, 101%, 22.575%) !important;
  --checkbox-color-hover: #4a6363 !important;
  --checkbox-marker-color: #fdfcfa !important;
  --checkbox-radius: 0.2rem !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 0.75em !important;
  --code-background: #dbe8e8 !important;
  --code-border-color: #dbe8e8 !important;
  --code-bracket-background: rgba(106, 148, 149, 0.15) !important;
  --code-comment: #6f7979 !important;
  --code-normal: #191c1c !important;
  --code-punctuation: #3f4949 !important;
  --code-radius: 0.75em !important;
  --codeFont: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #6f7979 !important;
  --collapse-icon-color-collapsed: rgb(0, 105, 107) !important;
  --color-accent: rgb(0, 105, 107) !important;
  --color-accent-1: hsl(180, 101%, 22.575%) !important;
  --color-accent-2: #4a6363 !important;
  --color-accent-hsl: 181,
			100%,
			21% !important;
  --color-base-00: #fdfcfa !important;
  --color-base-05: #eef5f3 !important;
  --color-base-10: #dbe8e8 !important;
  --color-base-100: #191c1c !important;
  --color-base-20: #eef5f3 !important;
  --color-base-25: #dbe8e8 !important;
  --color-base-30: #dbe8e8 !important;
  --color-base-35: #dbe8e8 !important;
  --color-base-40: #dbe8e8 !important;
  --color-base-50: #6f7979 !important;
  --color-base-60: #4a6363 !important;
  --color-base-70: #3f4949 !important;
  --custom-drawer-header: "Bolt" !important;
  --dark: #191c1c !important;
  --darkgray: #191c1c !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(180, 101%, 22.575%) !important;
  --dropdown-background: #eef5f3 !important;
  --dropdown-background-hover: #dbe8e8 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dbe8e8, inset 0 0 0 1px #dbe8e8 !important;
  --embed-border-start: 2px solid hsl(180, 101%, 22.575%) !important;
  --error: #ba1a1a !important;
  --error-container: #ffdad6 !important;
  --file-header-background: #fdfcfa !important;
  --file-header-background-focused: #fdfcfa !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-justify: left !important;
  --file-line-width: 750px !important;
  --flair-background: #eef5f3 !important;
  --flair-color: #191c1c !important;
  --font-interface: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R' !important;
  --footnote-divider-color: #dbe8e8 !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: #3f4949 !important;
  --footnote-id-color-no-occurrences: #6f7979 !important;
  --footnote-input-background-active: rgba(106, 148, 149, 0.15) !important;
  --footnote-radius: 0.75em !important;
  --graph-line: #dbe8e8 !important;
  --graph-node: rgb(10, 131, 133) !important;
  --graph-node-focused: #5fb9bb !important;
  --graph-node-tag: #00bfbc !important;
  --graph-node-unresolved: #4c5f7c !important;
  --graph-text: #191c1c !important;
  --gray: #3f4949 !important;
  --h1-size: 2.3em !important;
  --h1-weight: 300 !important;
  --h2-size: 2em !important;
  --h2-weight: 300 !important;
  --h3-size: 1.85em !important;
  --h3-weight: 400 !important;
  --h4-size: 1.7em !important;
  --h4-weight: 400 !important;
  --h5-size: 1.58em !important;
  --h5-weight: 400 !important;
  --h6-size: 1.35em !important;
  --h6-weight: 500 !important;
  --headerFont: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #6f7979 !important;
  --highlight: rgba(106, 148, 149, 0.15) !important;
  --hr-color: #dbe8e8 !important;
  --icon-color: #3f4949 !important;
  --icon-color-active: rgb(0, 105, 107) !important;
  --icon-color-focused: #191c1c !important;
  --icon-color-hover: #3f4949 !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-line-height: 1.3em !important;
  --inline-title-size: 2.5em !important;
  --inline-title-weight: 500 !important;
  --input-border-width: 0 !important;
  --input-date-separator: #6f7979 !important;
  --input-placeholder-color: #6f7979 !important;
  --input-radius: 20px !important;
  --input-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --interactive-accent: hsl(180, 101%, 22.575%) !important;
  --interactive-accent-hover: #4a6363 !important;
  --interactive-accent-hsl: 181,
			100%,
			21% !important;
  --interactive-hover: #dbe8e8 !important;
  --interactive-normal: #eef5f3 !important;
  --light: #fdfcfa !important;
  --lightgray: #eef5f3 !important;
  --link-color: #00696b !important;
  --link-color-hover: #00696b !important;
  --link-decoration-thickness: 1.5px !important;
  --link-external-color: #4c5f7c !important;
  --link-external-color-hover: #4a6363 !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(0, 105, 107) !important;
  --link-unresolved-decoration-color: rgba(0, 105, 107, 0.3) !important;
  --list-marker-color: #6f7979 !important;
  --list-marker-color-collapsed: rgb(0, 105, 107) !important;
  --list-marker-color-hover: #3f4949 !important;
  --lower-accent: rgb(10, 131, 133) !important;
  --menu-background: #eef5f3 !important;
  --menu-border-color: #dbe8e8 !important;
  --menu-border-width: 2px !important;
  --menu-radius: 1.1em !important;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --metadata-background: #eef5f3 !important;
  --metadata-border-color: #dbe8e8 !important;
  --metadata-border-radius: 0.75em !important;
  --metadata-divider-color: #dbe8e8 !important;
  --metadata-input-background-active: rgba(106, 148, 149, 0.15) !important;
  --metadata-input-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #191c1c !important;
  --metadata-label-background-active: rgba(106, 148, 149, 0.15) !important;
  --metadata-label-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #3f4949 !important;
  --metadata-label-text-color-hover: #3f4949 !important;
  --metadata-padding: 1em !important;
  --metadata-property-background-active: rgba(106, 148, 149, 0.15) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #5fb9bb !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px #dbe8e8 !important;
  --modal-background: #fdfcfa !important;
  --modal-border-color: #dbe8e8 !important;
  --modal-border-width: 2px !important;
  --modal-radius: 20px !important;
  --nav-collapse-icon-color: #6f7979 !important;
  --nav-collapse-icon-color-collapsed: #6f7979 !important;
  --nav-heading-color: #191c1c !important;
  --nav-heading-color-collapsed: #6f7979 !important;
  --nav-heading-color-collapsed-hover: #3f4949 !important;
  --nav-heading-color-hover: #191c1c !important;
  --nav-indentation-guide-color: hsl(180, 101%, 22.575%) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgba(106, 148, 149, 0.15) !important;
  --nav-item-background-hover: rgba(106, 148, 149, 0.15) !important;
  --nav-item-background-selected: rgba(0, 105, 107, 0.15) !important;
  --nav-item-color: #3f4949 !important;
  --nav-item-color-active: #191c1c !important;
  --nav-item-color-highlighted: rgb(0, 105, 107) !important;
  --nav-item-color-hover: #191c1c !important;
  --nav-item-color-selected: #191c1c !important;
  --nav-item-radius: 0.75em !important;
  --nav-tag-color: #6f7979 !important;
  --nav-tag-color-active: #3f4949 !important;
  --nav-tag-color-hover: #3f4949 !important;
  --nav-tag-radius: 0.75em !important;
  --on-background: #191c1c !important;
  --on-error: #ffffff !important;
  --on-error-container: #410002 !important;
  --on-lower-accent: #ffffff !important;
  --on-primary: #ffffff !important;
  --on-primary-container: #002021 !important;
  --on-secondary: #ffffff !important;
  --on-secondary-container: #041f20 !important;
  --on-surface: #191c1c !important;
  --on-surface-variant: #3f4949 !important;
  --on-tertiary: #ffffff !important;
  --on-tertiary-container: #061c36 !important;
  --on-upper-accent: #ffffff !important;
  --outline: #6f7979 !important;
  --pdf-background: #fdfcfa !important;
  --pdf-page-background: #fdfcfa !important;
  --pdf-sidebar-background: #fdfcfa !important;
  --pill-border-color: #dbe8e8 !important;
  --pill-border-color-hover: #dbe8e8 !important;
  --pill-border-width: 2px !important;
  --pill-color: #3f4949 !important;
  --pill-color-hover: #191c1c !important;
  --pill-color-remove: #6f7979 !important;
  --pill-color-remove-hover: rgb(0, 105, 107) !important;
  --primary: #00696b !important;
  --primary-container: #5fb9bb !important;
  --primary-lighter: rgb(10, 131, 133) !important;
  --prompt-background: #fdfcfa !important;
  --prompt-border-color: #dbe8e8 !important;
  --prompt-border-width: 2px !important;
  --radius-l: 20px !important;
  --radius-m: 1.1em !important;
  --radius-s: 0.75em !important;
  --raised-background: color-mix(in srgb, #fdfcfa 65%, transparent) linear-gradient(#fdfcfa, color-mix(in srgb, #fdfcfa 65%, transparent)) !important;
  --ribbon-background: #eef5f3 !important;
  --ribbon-background-collapsed: #fdfcfa !important;
  --scrollbar-active-thumb-bg: #cce8e8 !important;
  --scrollbar-radius: 20px !important;
  --scrollbar-thumb-bg: #dbe8e8 !important;
  --search-clear-button-color: #3f4949 !important;
  --search-icon-color: #3f4949 !important;
  --search-result-background: #fdfcfa !important;
  --secondary: #4a6363 !important;
  --secondary-container: #cce8e8 !important;
  --setting-group-heading-color: #191c1c !important;
  --setting-items-background: #dbe8e8 !important;
  --setting-items-border-color: #dbe8e8 !important;
  --setting-items-radius: 20px !important;
  --shadow-bottom: 0 10px 10px -10px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23) !important;
  --shadow-m: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --slider-thumb-border-color: #dbe8e8 !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: #dbe8e8 !important;
  --status-bar-background: #eef5f3 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-radius: 1.1em 0 0 0 !important;
  --status-bar-text-color: #3f4949 !important;
  --suggestion-background: #fdfcfa !important;
  --surface: #eef5f3 !important;
  --surface-variant: #dbe8e8 !important;
  --tab-background-active: transparent !important;
  --tab-container-background: #eef5f3 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-outline-width: 0 !important;
  --tab-radius: 0.75em !important;
  --tab-radius-active: 0 !important;
  --tab-switcher-background: #eef5f3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #eef5f3, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 105, 107) !important;
  --tab-text-color: #6f7979 !important;
  --tab-text-color-active: #3f4949 !important;
  --tab-text-color-focused: #3f4949 !important;
  --tab-text-color-focused-active: #3f4949 !important;
  --tab-text-color-focused-active-current: #191c1c !important;
  --tab-text-color-focused-highlighted: rgb(0, 105, 107) !important;
  --tab-width: 250px !important;
  --table-add-button-border-color: #dbe8e8 !important;
  --table-border-color: #dbe8e8 !important;
  --table-drag-handle-background-active: hsl(180, 101%, 22.575%) !important;
  --table-drag-handle-color: #6f7979 !important;
  --table-header-align: center !important;
  --table-header-background: #4a6363 !important;
  --table-header-background-hover: #4a6363 !important;
  --table-header-border-color: #dbe8e8 !important;
  --table-header-color: #191c1c !important;
  --table-header-size: 0.875em !important;
  --table-selection: rgba(0, 105, 107, 0.1) !important;
  --table-selection-border-color: hsl(180, 101%, 22.575%) !important;
  --tag-background: #d4e3ff !important;
  --tag-background-hover: #d4e3ff !important;
  --tag-border-color: rgba(0, 105, 107, 0.15) !important;
  --tag-border-color-hover: rgba(0, 105, 107, 0.15) !important;
  --tag-color: #061c36 !important;
  --tag-color-hover: #061c36 !important;
  --tag-radius: 5px !important;
  --tertiary: #4c5f7c !important;
  --tertiary-container: #d4e3ff !important;
  --text-accent: rgb(0, 105, 107) !important;
  --text-accent-hover: #4a6363 !important;
  --text-faint: #6f7979 !important;
  --text-muted: #3f4949 !important;
  --text-normal: #191c1c !important;
  --text-selection: rgba(0, 105, 107, 0.2) !important;
  --textHighlight: rgba(106, 148, 149, 0.15) !important;
  --titleFont: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #eef5f3 !important;
  --titlebar-background-focused: #eef5f3 !important;
  --titlebar-border-color: #dbe8e8 !important;
  --titlebar-text-color: #3f4949 !important;
  --titlebar-text-color-focused: #191c1c !important;
  --upper-accent: #00696b !important;
  --vault-profile-color: #191c1c !important;
  --vault-profile-color-hover: #191c1c !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 245, 243);
  color: rgb(25, 28, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 252, 250);
  color: rgb(25, 28, 28);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 245, 243);
  color: rgb(25, 28, 28);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 245, 243);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(25, 28, 28);
}

body div#quartz-root {
  background-color: rgb(253, 252, 250);
  color: rgb(25, 28, 28);
}`,
    typography: `body .page article p > b, b {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .page article p > em, em {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .page article p > i, i {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .page article p > strong, strong {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .text-highlight {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body del {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: line-through rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body p {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(63, 73, 73) none 0px;
  text-decoration: rgb(63, 73, 73);
  text-decoration-color: rgb(63, 73, 73);
}`,
    links: `body a.external, footer a {
  color: rgb(76, 95, 124);
  outline: rgb(76, 95, 124) none 0px;
  text-decoration: 1.5px rgb(76, 95, 124);
  text-decoration-color: rgb(76, 95, 124);
  text-decoration-thickness: 1.5px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 105, 107);
  outline: rgb(0, 105, 107) none 0px;
  text-decoration: underline 1.5px rgb(0, 105, 107);
  text-decoration-color: rgb(0, 105, 107);
  text-decoration-thickness: 1.5px;
}

body a.internal.broken {
  color: rgb(0, 105, 107);
  outline: rgb(0, 105, 107) none 0px;
  text-decoration: underline 1.5px rgba(0, 105, 107, 0.3);
  text-decoration-color: rgba(0, 105, 107, 0.3);
  text-decoration-thickness: 1.5px;
}`,
    lists: `body dd {
  color: rgb(25, 28, 28);
}

body dt {
  color: rgb(25, 28, 28);
}

body ol > li {
  color: rgb(25, 28, 28);
}

body ol.overflow {
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body ul > li {
  color: rgb(25, 28, 28);
}

body ul.overflow {
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(111, 121, 121);
  text-decoration: rgb(111, 121, 121);
}

body blockquote {
  background-color: rgb(204, 232, 232);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body table {
  color: rgb(25, 28, 28);
  width: 226.438px;
}

body td {
  border-bottom-color: rgb(219, 232, 232);
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-width: 0px;
  color: rgb(25, 28, 28);
}

body th {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10.5px;
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 7px;
  text-align: center;
}

body tr {
  background-color: rgb(74, 99, 99);
}`,
    code: `body code {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(25, 28, 28);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

body pre > code, pre:has(> code) {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body figcaption {
  color: rgb(25, 28, 28);
}

body figure {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body img {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 17.6px;
  border-bottom-right-radius: 17.6px;
  border-left-color: rgb(25, 28, 28);
  border-radius: 17.6px;
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 17.6px;
  border-top-right-radius: 17.6px;
}

body video {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    embeds: `body .file-embed {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(63, 73, 73);
  border-bottom-left-radius: 15.4px;
  border-bottom-right-radius: 15.4px;
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  border-top-left-radius: 15.4px;
  border-top-right-radius: 15.4px;
}

body .footnotes {
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

body .transclude {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(0, 115, 115);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body .transclude-inner {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(0, 115, 115);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body input[type=checkbox] {
  border-bottom-color: rgb(111, 121, 121);
  border-bottom-left-radius: 3.2px;
  border-bottom-right-radius: 3.2px;
  border-bottom-width: 2px;
  border-left-color: rgb(111, 121, 121);
  border-left-width: 2px;
  border-right-color: rgb(111, 121, 121);
  border-right-width: 2px;
  border-top-color: rgb(111, 121, 121);
  border-top-left-radius: 3.2px;
  border-top-right-radius: 3.2px;
  border-top-width: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='*'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='-'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='/'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='>'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='?'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='I'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='S'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='b'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='c'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='d'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='f'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='i'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='k'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='l'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='p'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='u'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='w'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(219, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: rgb(25, 28, 28);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 2px;
  border-left-color: rgb(219, 232, 232);
  border-left-width: 2px;
  border-right-color: rgb(219, 232, 232);
  border-right-width: 2px;
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 28, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(25, 28, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  color: rgb(25, 28, 28);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 2px;
  border-left-color: rgb(219, 232, 232);
  border-left-width: 2px;
  border-right-color: rgb(219, 232, 232);
  border-right-width: 2px;
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(238, 245, 243);
  border-bottom-width: 2px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(25, 28, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(25, 28, 28);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(212, 227, 255);
  border-bottom-color: rgba(0, 105, 107, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 105, 107, 0.15);
  border-right-color: rgba(0, 105, 107, 0.15);
  border-top-color: rgba(0, 105, 107, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(6, 28, 54);
}

body h1 {
  color: rgb(25, 28, 28);
}

body h2 {
  color: rgb(25, 28, 28);
}

body h2.page-title, h2.page-title a {
  color: rgb(25, 28, 28);
}

body h3 {
  color: rgb(25, 28, 28);
}

body h4 {
  color: rgb(25, 28, 28);
}

body h5 {
  color: rgb(25, 28, 28);
}

body h6 {
  color: rgb(25, 28, 28);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(63, 73, 73);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(63, 73, 73);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(63, 73, 73);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 9.75px;
  border-bottom-right-radius: 9.75px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 9.75px;
  border-top-right-radius: 9.75px;
  color: rgb(25, 28, 28);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(63, 73, 73);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(63, 73, 73);
}`,
    footer: `body footer {
  background-color: rgb(238, 245, 243);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 13.2px;
  border-top-width: 2px;
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(63, 73, 73);
  text-decoration: rgb(63, 73, 73);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 73, 73);
  text-decoration: rgb(63, 73, 73);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body li.section-li > .section .meta {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 73, 73);
  text-decoration: rgb(63, 73, 73);
}

body ul.section-ul {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(63, 73, 73);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(63, 73, 73);
}

body .darkmode svg {
  color: rgb(0, 105, 107);
  stroke: rgb(0, 105, 107);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9.75px;
  border-bottom-right-radius: 9.75px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9.75px;
  border-top-right-radius: 9.75px;
  color: rgb(255, 255, 255);
}

body .breadcrumb-element p {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

body .metadata {
  background-color: rgb(238, 245, 243);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(63, 73, 73);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .metadata-properties {
  border-bottom-color: rgb(63, 73, 73);
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  color: rgb(63, 73, 73);
}

body .navigation-progress {
  background-color: rgb(238, 245, 243);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(25, 28, 28);
  text-decoration: underline dotted rgb(25, 28, 28);
}

body details {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body input[type=text] {
  border-bottom-color: rgb(63, 73, 73);
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 10.5px;
  border-bottom-right-radius: 10.5px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 10.5px;
  border-top-right-radius: 10.5px;
  color: rgb(25, 28, 28);
}

body progress {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body sub {
  color: rgb(25, 28, 28);
}

body summary {
  color: rgb(25, 28, 28);
}

body sup {
  color: rgb(25, 28, 28);
}`,
  },
};
