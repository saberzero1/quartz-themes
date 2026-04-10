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
  --background-modifier-active-hover: hsla(181,
			80%,
			41%, 0.1) !important;
  --background-modifier-border: #2f3f3f !important;
  --background-modifier-border-focus: #2f8a8b !important;
  --background-modifier-border-hover: #2f3f3f !important;
  --background-modifier-form-field: #2f3f3f !important;
  --background-modifier-form-field-hover: #2f3f3f !important;
  --background-modifier-hover: hsla(181, 17%, 50%, 0.15) !important;
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
  --bases-table-cell-background-selected: hsla(181,
			80%,
			41%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #2f8a8b !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(181, 80%, 41%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-radius: 0.75em !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: #2f3f3f !important;
  --bases-table-header-background: #0d1a1a !important;
  --bases-table-header-background-hover: hsla(181, 17%, 50%, 0.15) !important;
  --bases-table-header-color: #bec8c8 !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: #0d1a1a !important;
  --bases-table-summary-background-hover: hsla(181, 17%, 50%, 0.15) !important;
  --blockquote-background-color: #156f73 !important;
  --blockquote-border-color: hsl(181, 80%, 41%) !important;
  --blockquote-border-thickness: 0px !important;
  --blockquote-color: #cce8e8 !important;
  --blur-background: color-mix(in srgb, #2f3f3f 65%, transparent) linear-gradient(#2f3f3f, color-mix(in srgb, #2f3f3f 65%, transparent)) !important;
  --bodyFont: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --checkbox-color: hsl(181, 80%, 41%) !important;
  --checkbox-color-hover: hsl(178, 81.6%, 47.15%) !important;
  --checkbox-marker-color: #0d1a1a !important;
  --checkbox-radius: 0.2rem !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 0.75em !important;
  --code-background: #2f3f3f !important;
  --code-border-color: #2f3f3f !important;
  --code-bracket-background: hsla(181, 17%, 50%, 0.15) !important;
  --code-comment: #899392 !important;
  --code-normal: #e0e3e2 !important;
  --code-punctuation: #bec8c8 !important;
  --code-radius: 0.75em !important;
  --codeFont: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #899392 !important;
  --collapse-icon-color-collapsed: hsl(178, 81.6%, 47.15%) !important;
  --color-accent: hsl(181, 80%, 41%) !important;
  --color-accent-1: hsl(178, 81.6%, 47.15%) !important;
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
  --divider-color-hover: hsl(181, 80%, 41%) !important;
  --dropdown-background: #2f3f3f !important;
  --dropdown-background-hover: #2f3f3f !important;
  --embed-block-shadow-hover: 0 0 0 1px #2f3f3f, inset 0 0 0 1px #2f3f3f !important;
  --embed-border-start: 2px solid hsl(181, 80%, 41%) !important;
  --error: #ffb4ab !important;
  --error-container: #93000a !important;
  --file-header-background: #0d1a1a !important;
  --file-header-background-focused: #0d1a1a !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-justify: left !important;
  --file-line-width: 750px !important;
  --flair-background: #2f3f3f !important;
  --flair-color: #e0e3e2 !important;
  --font-interface: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R' !important;
  --footnote-divider-color: #2f3f3f !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: #bec8c8 !important;
  --footnote-id-color-no-occurrences: #899392 !important;
  --footnote-input-background-active: hsla(181, 17%, 50%, 0.15) !important;
  --footnote-radius: 0.75em !important;
  --graph-line: #2f3f3f !important;
  --graph-node: hsl(181, 78%, 46%) !important;
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
  --headerFont: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #899392 !important;
  --highlight: hsla(181, 17%, 50%, 0.15) !important;
  --hr-color: #2f3f3f !important;
  --icon-color: #bec8c8 !important;
  --icon-color-active: hsl(178, 81.6%, 47.15%) !important;
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
  --interactive-accent: hsl(181, 80%, 41%) !important;
  --interactive-accent-hover: hsl(178, 81.6%, 47.15%) !important;
  --interactive-accent-hsl: 181,
			80%,
			41% !important;
  --interactive-hover: #2f3f3f !important;
  --interactive-normal: #2f3f3f !important;
  --light: #0d1a1a !important;
  --lightgray: #192e2e !important;
  --link-color: hsl(181, 80%, 41%) !important;
  --link-color-hover: hsl(181, 80%, 41%) !important;
  --link-decoration-thickness: 1.5px !important;
  --link-external-color: #b4c8e9 !important;
  --link-external-color-hover: #b0cccc !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(178, 81.6%, 47.15%) !important;
  --link-unresolved-decoration-color: hsla(181,
			80%,
			41%, 0.3) !important;
  --list-marker-color: #899392 !important;
  --list-marker-color-collapsed: hsl(178, 81.6%, 47.15%) !important;
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
  --metadata-input-background-active: hsla(181, 17%, 50%, 0.15) !important;
  --metadata-input-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #e0e3e2 !important;
  --metadata-label-background-active: hsla(181, 17%, 50%, 0.15) !important;
  --metadata-label-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #bec8c8 !important;
  --metadata-label-text-color-hover: #bec8c8 !important;
  --metadata-padding: 1em !important;
  --metadata-property-background-active: hsla(181, 17%, 50%, 0.15) !important;
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
  --nav-indentation-guide-color: hsl(181, 80%, 41%) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: hsla(181, 17%, 50%, 0.15) !important;
  --nav-item-background-hover: hsla(181, 17%, 50%, 0.15) !important;
  --nav-item-background-selected: hsla(181,
			80%,
			41%, 0.15) !important;
  --nav-item-color: #bec8c8 !important;
  --nav-item-color-active: #e0e3e2 !important;
  --nav-item-color-highlighted: hsl(178, 81.6%, 47.15%) !important;
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
  --pill-color-remove-hover: hsl(178, 81.6%, 47.15%) !important;
  --primary: hsl(181, 80%, 41%) !important;
  --primary-container: #2f8a8b !important;
  --primary-lighter: hsl(181, 78%, 46%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(181, 80%, 41%) !important;
  --tab-text-color: #899392 !important;
  --tab-text-color-active: #bec8c8 !important;
  --tab-text-color-focused: #bec8c8 !important;
  --tab-text-color-focused-active: #bec8c8 !important;
  --tab-text-color-focused-active-current: #e0e3e2 !important;
  --tab-text-color-focused-highlighted: hsl(178, 81.6%, 47.15%) !important;
  --tab-width: 250px !important;
  --table-add-button-border-color: #2f3f3f !important;
  --table-border-color: #2f3f3f !important;
  --table-drag-handle-background-active: hsl(181, 80%, 41%) !important;
  --table-drag-handle-color: #899392 !important;
  --table-header-align: center !important;
  --table-header-background: #b0cccc !important;
  --table-header-background-hover: #b0cccc !important;
  --table-header-border-color: #2f3f3f !important;
  --table-header-color: #e0e3e2 !important;
  --table-header-size: 0.875em !important;
  --table-selection: hsla(181,
			80%,
			41%, 0.1) !important;
  --table-selection-border-color: hsl(181, 80%, 41%) !important;
  --tag-background: #354863 !important;
  --tag-background-hover: #354863 !important;
  --tag-border-color: hsla(181,
			80%,
			41%, 0.15) !important;
  --tag-border-color-hover: hsla(181,
			80%,
			41%, 0.15) !important;
  --tag-color: #d4e3ff !important;
  --tag-color-hover: #d4e3ff !important;
  --tag-radius: 5px !important;
  --tertiary: #b4c8e9 !important;
  --tertiary-container: #354863 !important;
  --text-accent: hsl(178, 81.6%, 47.15%) !important;
  --text-accent-hover: #b0cccc !important;
  --text-faint: #899392 !important;
  --text-muted: #bec8c8 !important;
  --text-normal: #e0e3e2 !important;
  --text-selection: hsla(181,
			80%,
			41%, 0.33) !important;
  --textHighlight: hsla(181, 17%, 50%, 0.15) !important;
  --titleFont: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 46, 46);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(13, 26, 26);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(3, 71, 71);
  color: rgb(3, 71, 71);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 46, 46);
  border-color: rgb(224, 227, 226);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(25, 46, 46);
  border-color: rgb(47, 63, 63);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(53, 72, 99);
  border-radius: 5px;
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 46, 46);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 46, 46);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 26, 26);
  color: rgb(224, 227, 226);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(137, 147, 146);
  border-radius: 3.2px;
  border-width: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(21, 185, 188);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 200, 200) none 0px;
  text-decoration-color: rgb(190, 200, 200);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(180, 200, 233);
  outline: rgb(180, 200, 233) none 0px;
  text-decoration: 1.5px;
  text-decoration-color: rgb(180, 200, 233);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 185, 188);
  outline: rgb(21, 185, 188) none 0px;
  text-decoration: underline 1.5px;
  text-decoration-color: rgb(21, 185, 188);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(22, 218, 212);
  outline: rgb(22, 218, 212) none 0px;
  text-decoration: underline 1.5px rgba(21, 185, 188, 0.3);
  text-decoration-color: rgba(21, 185, 188, 0.3);
  text-decoration-thickness: 1.5px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(137, 147, 146);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(21, 111, 115);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 227, 226);
  width: 226.438px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(47, 63, 63);
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-width: 0px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body th {
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

html[saved-theme="dark"] body tr {
  background-color: rgb(176, 204, 204);
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 40.48px;
  border-bottom-right-radius: 40.48px;
  border-left-color: rgb(224, 227, 226);
  border-radius: 40.48px;
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 40.48px;
  border-top-right-radius: 40.48px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(21, 185, 188);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 46, 46);
  border-bottom-width: 2px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h2 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h3 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h5 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(21, 185, 188);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(190, 200, 200);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(21, 185, 188);
  stroke: rgb(21, 185, 188);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(190, 200, 200);
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 46, 46);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(190, 200, 200);
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(53, 72, 99);
  border-bottom-color: rgba(21, 185, 188, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(21, 185, 188, 0.15);
  border-right-color: rgba(21, 185, 188, 0.15);
  border-top-color: rgba(21, 185, 188, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 227, 255);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 181 !important;
  --accent-l: 21% !important;
  --accent-s: 100% !important;
  --background: #fdfcfa !important;
  --background-modifier-active-hover: hsla(181,
			100%,
			21%, 0.1) !important;
  --background-modifier-border: #dbe8e8 !important;
  --background-modifier-border-focus: #5fb9bb !important;
  --background-modifier-border-hover: #dbe8e8 !important;
  --background-modifier-form-field: #dbe8e8 !important;
  --background-modifier-form-field-hover: #dbe8e8 !important;
  --background-modifier-hover: hsla(181, 17%, 50%, 0.15) !important;
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
  --bases-table-cell-background-selected: hsla(181,
			100%,
			21%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #5fb9bb !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(180, 101%, 22.575%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-radius: 0.75em !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: #dbe8e8 !important;
  --bases-table-header-background: #fdfcfa !important;
  --bases-table-header-background-hover: hsla(181, 17%, 50%, 0.15) !important;
  --bases-table-header-color: #3f4949 !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: #fdfcfa !important;
  --bases-table-summary-background-hover: hsla(181, 17%, 50%, 0.15) !important;
  --blockquote-background-color: #cce8e8 !important;
  --blockquote-border-color: hsl(180, 101%, 22.575%) !important;
  --blockquote-border-thickness: 0px !important;
  --blockquote-color: #041f20 !important;
  --blur-background: color-mix(in srgb, #fdfcfa 65%, transparent) linear-gradient(#fdfcfa, color-mix(in srgb, #fdfcfa 65%, transparent)) !important;
  --bodyFont: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --code-bracket-background: hsla(181, 17%, 50%, 0.15) !important;
  --code-comment: #6f7979 !important;
  --code-normal: #191c1c !important;
  --code-punctuation: #3f4949 !important;
  --code-radius: 0.75em !important;
  --codeFont: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #6f7979 !important;
  --collapse-icon-color-collapsed: hsl(181, 100%, 21%) !important;
  --color-accent: hsl(181, 100%, 21%) !important;
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
  --file-header-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-justify: left !important;
  --file-line-width: 750px !important;
  --flair-background: #eef5f3 !important;
  --flair-color: #191c1c !important;
  --font-interface: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R' !important;
  --footnote-divider-color: #dbe8e8 !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: #3f4949 !important;
  --footnote-id-color-no-occurrences: #6f7979 !important;
  --footnote-input-background-active: hsla(181, 17%, 50%, 0.15) !important;
  --footnote-radius: 0.75em !important;
  --graph-line: #dbe8e8 !important;
  --graph-node: hsl(181, 86%, 28%) !important;
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
  --headerFont: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #6f7979 !important;
  --highlight: hsla(181, 17%, 50%, 0.15) !important;
  --hr-color: #dbe8e8 !important;
  --icon-color: #3f4949 !important;
  --icon-color-active: hsl(181, 100%, 21%) !important;
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
  --link-unresolved-color: hsl(181, 100%, 21%) !important;
  --link-unresolved-decoration-color: hsla(181,
			100%,
			21%, 0.3) !important;
  --list-marker-color: #6f7979 !important;
  --list-marker-color-collapsed: hsl(181, 100%, 21%) !important;
  --list-marker-color-hover: #3f4949 !important;
  --lower-accent: hsl(181, 86%, 28%) !important;
  --menu-background: #eef5f3 !important;
  --menu-border-color: #dbe8e8 !important;
  --menu-border-width: 2px !important;
  --menu-radius: 1.1em !important;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
  --metadata-background: #eef5f3 !important;
  --metadata-border-color: #dbe8e8 !important;
  --metadata-border-radius: 0.75em !important;
  --metadata-divider-color: #dbe8e8 !important;
  --metadata-input-background-active: hsla(181, 17%, 50%, 0.15) !important;
  --metadata-input-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #191c1c !important;
  --metadata-label-background-active: hsla(181, 17%, 50%, 0.15) !important;
  --metadata-label-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #3f4949 !important;
  --metadata-label-text-color-hover: #3f4949 !important;
  --metadata-padding: 1em !important;
  --metadata-property-background-active: hsla(181, 17%, 50%, 0.15) !important;
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
  --nav-item-background-active: hsla(181, 17%, 50%, 0.15) !important;
  --nav-item-background-hover: hsla(181, 17%, 50%, 0.15) !important;
  --nav-item-background-selected: hsla(181,
			100%,
			21%, 0.15) !important;
  --nav-item-color: #3f4949 !important;
  --nav-item-color-active: #191c1c !important;
  --nav-item-color-highlighted: hsl(181, 100%, 21%) !important;
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
  --pill-color-remove-hover: hsl(181, 100%, 21%) !important;
  --primary: #00696b !important;
  --primary-container: #5fb9bb !important;
  --primary-lighter: hsl(181, 86%, 28%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(181, 100%, 21%) !important;
  --tab-text-color: #6f7979 !important;
  --tab-text-color-active: #3f4949 !important;
  --tab-text-color-focused: #3f4949 !important;
  --tab-text-color-focused-active: #3f4949 !important;
  --tab-text-color-focused-active-current: #191c1c !important;
  --tab-text-color-focused-highlighted: hsl(181, 100%, 21%) !important;
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
  --table-selection: hsla(181,
			100%,
			21%, 0.1) !important;
  --table-selection-border-color: hsl(180, 101%, 22.575%) !important;
  --tag-background: #d4e3ff !important;
  --tag-background-hover: #d4e3ff !important;
  --tag-border-color: hsla(181,
			100%,
			21%, 0.15) !important;
  --tag-border-color-hover: hsla(181,
			100%,
			21%, 0.15) !important;
  --tag-color: #061c36 !important;
  --tag-color-hover: #061c36 !important;
  --tag-radius: 5px !important;
  --tertiary: #4c5f7c !important;
  --tertiary-container: #d4e3ff !important;
  --text-accent: hsl(181, 100%, 21%) !important;
  --text-accent-hover: #4a6363 !important;
  --text-faint: #6f7979 !important;
  --text-muted: #3f4949 !important;
  --text-normal: #191c1c !important;
  --text-selection: hsla(181,
			100%,
			21%, 0.2) !important;
  --textHighlight: hsla(181, 17%, 50%, 0.15) !important;
  --titleFont: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 245, 243);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 252, 250);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 252, 250);
  border-color: rgb(25, 28, 28);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(238, 245, 243);
  border-color: rgb(219, 232, 232);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(212, 227, 255);
  border-radius: 5px;
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 245, 243);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 245, 243);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 252, 250);
  color: rgb(25, 28, 28);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body del {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(111, 121, 121);
  border-radius: 3.2px;
  border-width: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 115, 115);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(63, 73, 73) none 0px;
  text-decoration-color: rgb(63, 73, 73);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(76, 95, 124);
  outline: rgb(76, 95, 124) none 0px;
  text-decoration: 1.5px;
  text-decoration-color: rgb(76, 95, 124);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 105, 107);
  outline: rgb(0, 105, 107) none 0px;
  text-decoration: underline 1.5px;
  text-decoration-color: rgb(0, 105, 107);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 105, 107);
  outline: rgb(0, 105, 107) none 0px;
  text-decoration: underline 1.5px rgba(0, 105, 107, 0.3);
  text-decoration-color: rgba(0, 105, 107, 0.3);
  text-decoration-thickness: 1.5px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body dt {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ol > li {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ul > li {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(111, 121, 121);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(204, 232, 232);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body table {
  color: rgb(25, 28, 28);
  width: 226.438px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(219, 232, 232);
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-width: 0px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body th {
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

html[saved-theme="light"] body tr {
  background-color: rgb(74, 99, 99);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body figcaption {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 40.48px;
  border-bottom-right-radius: 40.48px;
  border-left-color: rgb(25, 28, 28);
  border-radius: 40.48px;
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 40.48px;
  border-top-right-radius: 40.48px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(0, 115, 115);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(238, 245, 243);
  border-bottom-width: 2px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body h1 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h2 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h3 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h4 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h5 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h6 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(0, 115, 115);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(63, 73, 73);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(0, 105, 107);
  stroke: rgb(0, 105, 107);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
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

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(63, 73, 73);
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(238, 245, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(63, 73, 73);
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body sub {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body summary {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body sup {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(212, 227, 255);
  border-bottom-color: rgba(0, 105, 107, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 105, 107, 0.15);
  border-right-color: rgba(0, 105, 107, 0.15);
  border-top-color: rgba(0, 105, 107, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(6, 28, 54);
}`,
  },
};
