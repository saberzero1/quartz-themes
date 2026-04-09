import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "githubdhc",
    modes: ["dark"],
    variations: [],
    fonts: ["fira-code", "noto-sans"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 220 !important;
  --accent-h-theme: 220 !important;
  --accent-l: 70% !important;
  --accent-l-theme: 70% !important;
  --accent-s: 13% !important;
  --accent-s-theme: 13% !important;
  --background-modifier-active-hover: hsla(220, 13%, 70%, 0.15) !important;
  --background-modifier-border: #b7bdc8 !important;
  --background-modifier-border-focus: #b7bdc8 !important;
  --background-modifier-border-hover: #b7bdc8 !important;
  --background-modifier-error: #ff9492 !important;
  --background-modifier-error-hover: #ff9492 !important;
  --background-modifier-error-rgb: 255, 148, 146 !important;
  --background-modifier-form-field: #010409 !important;
  --background-modifier-form-field-hover: #010409 !important;
  --background-modifier-hover: rgba(183, 189, 200, 0.12) !important;
  --background-modifier-hover-alpha: 0.12 !important;
  --background-modifier-success: #2bd853 !important;
  --background-modifier-success-rgb: 43, 216, 83 !important;
  --background-primary: #010409 !important;
  --background-primary-alt: #151b23 !important;
  --background-secondary: #010409 !important;
  --background-secondary-alt: #010409 !important;
  --bases-cards-background: #010409 !important;
  --bases-cards-cover-background: #151b23 !important;
  --bases-cards-shadow: 0 0 0 1px #b7bdc8 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #b7bdc8 !important;
  --bases-embed-border-color: #b7bdc8 !important;
  --bases-group-heading-property-color: #b7bdc8 !important;
  --bases-table-border-color: #b7bdc8 !important;
  --bases-table-cell-background-active: #010409 !important;
  --bases-table-cell-background-disabled: #151b23 !important;
  --bases-table-cell-background-selected: hsla(220, 13%, 70%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b7bdc8 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #b7bdc8 !important;
  --bases-table-group-background: #151b23 !important;
  --bases-table-header-background: #010409 !important;
  --bases-table-header-background-hover: rgba(183, 189, 200, 0.12) !important;
  --bases-table-header-color: #b7bdc8 !important;
  --bases-table-summary-background: #010409 !important;
  --bases-table-summary-background-hover: rgba(183, 189, 200, 0.12) !important;
  --blockquote-border-color: #7a828e !important;
  --blockquote-border-thickness: .25em !important;
  --blur-background: color-mix(in srgb, #3d444d 65%, transparent) linear-gradient(#3d444d, color-mix(in srgb, #3d444d 65%, transparent)) !important;
  --bodyFont: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --callout-bug: 255, 148, 146;
  --callout-error: 255, 148, 146;
  --callout-fail: 255, 148, 146;
  --callout-success: 43, 216, 83;
  --canvas-background: #010409 !important;
  --canvas-card-label-color: #7a828e !important;
  --canvas-color-1: 255, 148, 146 !important;
  --canvas-color-4: 43, 216, 83 !important;
  --canvas-dot-pattern: #b7bdc8 !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #7a828e !important;
  --checkbox-border-color-hover: #b7bdc8 !important;
  --checkbox-color: #b7bdc8 !important;
  --checkbox-color-hover: #9ea7b3 !important;
  --checkbox-marker-color: #010409 !important;
  --checkbox-size: 15px !important;
  --checklist-done-color: #b7bdc8 !important;
  --code-background: #161b22 !important;
  --code-border-color: #b7bdc8 !important;
  --code-bracket-background: rgba(183, 189, 200, 0.12) !important;
  --code-comment: #7a828e !important;
  --code-function: #ffa657 !important;
  --code-important: #ffa657 !important;
  --code-keyword: #ff9492 !important;
  --code-normal: #ffffff !important;
  --code-operator: #ff9492 !important;
  --code-property: #71b7ff !important;
  --code-punctuation: #b7bdc8 !important;
  --code-string: #a5d6ff !important;
  --code-tag: #ff9492 !important;
  --code-value: #d2a8ff !important;
  --codeFont: DM Mono, Fira Code, Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #7a828e !important;
  --collapse-icon-color-collapsed: #71b7ff !important;
  --color-accent: #b7bdc8 !important;
  --color-accent-1: #9ea7b3 !important;
  --color-accent-2: #d1d9e0 !important;
  --color-accent-hsl: 220, 13%, 70% !important;
  --color-base-00: #010409 !important;
  --color-base-10: #151b23 !important;
  --color-base-100: #ffffff !important;
  --color-base-20: #151b23 !important;
  --color-base-25: #010409 !important;
  --color-base-30: #b7bdc8 !important;
  --color-base-35: #3d444d !important;
  --color-base-40: #b7bdc8 !important;
  --color-base-50: #7a828e !important;
  --color-base-60: #999 !important;
  --color-base-70: #b7bdc8 !important;
  --color-blue: #71b7ff !important;
  --color-btn-primary-bg: #09b43a !important;
  --color-btn-primary-hover-bg: #0c8e33 !important;
  --color-cyan: #a5d6ff !important;
  --color-green: #2bd853 !important;
  --color-green-rgb: 43, 216, 83 !important;
  --color-orange: #ffa657 !important;
  --color-pink: #f778ba !important;
  --color-purple: #d2a8ff !important;
  --color-red: #ff9492 !important;
  --color-red-rgb: 255, 148, 146 !important;
  --color-white: #ffffff !important;
  --color-yellow: #f0b72f !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: #b7bdc8 !important;
  --divider-color-hover: #b7bdc8 !important;
  --dropdown-background: #3d444d !important;
  --dropdown-background-hover: #6e7781 !important;
  --embed-block-shadow-hover: 0 0 0 1px #b7bdc8,
        inset 0 0 0 1px #b7bdc8 !important;
  --embed-border-left: 2px solid #b7bdc8 !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid #b7bdc8 !important;
  --file-header-background: #010409 !important;
  --file-header-background-focused: #010409 !important;
  --file-header-font: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 32px !important;
  --flair-background: #3d444d !important;
  --flair-color: #ffffff !important;
  --font-interface: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji' !important;
  --font-mermaid: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono: 'DM Mono', 'Fira Code', Courier, monospace !important;
  --font-monospace: DM Mono, Fira Code, Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'DM Mono', 'Fira Code', Courier, monospace !important;
  --font-print: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Arial' !important;
  --font-sans: system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji' !important;
  --font-text: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji' !important;
  --footnote-divider-color: #b7bdc8 !important;
  --footnote-id-color: #b7bdc8 !important;
  --footnote-id-color-no-occurrences: #7a828e !important;
  --footnote-input-background-active: rgba(183, 189, 200, 0.12) !important;
  --graph-line: #3d444d !important;
  --graph-node: #b7bdc8 !important;
  --graph-node-attachment: #f0b72f !important;
  --graph-node-focused: #71b7ff !important;
  --graph-node-tag: #2bd853 !important;
  --graph-node-unresolved: #7a828e !important;
  --graph-text: #ffffff !important;
  --gray: #b7bdc8 !important;
  --h-color-theme: #ffffff !important;
  --h1-color: #ffffff !important;
  --h1-color-theme: #ffffff !important;
  --h1-size: 2em !important;
  --h1-weight: 600 !important;
  --h2-color: #ffffff !important;
  --h2-color-theme: #ffffff !important;
  --h2-size: 1.5em !important;
  --h2-weight: 600 !important;
  --h3-color: #ffffff !important;
  --h3-color-theme: #ffffff !important;
  --h3-size: 1.25em !important;
  --h3-weight: 600 !important;
  --h4-color: #ffffff !important;
  --h4-color-theme: #ffffff !important;
  --h4-size: 1em !important;
  --h4-weight: 600 !important;
  --h5-color: #ffffff !important;
  --h5-color-theme: #ffffff !important;
  --h5-size: .875em !important;
  --h5-weight: 600 !important;
  --h6-color: #ffffff !important;
  --h6-color-theme: #ffffff !important;
  --h6-size: .85em !important;
  --headerFont: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #7a828e !important;
  --highlight: rgba(183, 189, 200, 0.12) !important;
  --hr-color: #7a828e !important;
  --hr-thickness: .25em !important;
  --icon-color: #b7bdc8 !important;
  --icon-color-active: #71b7ff !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #b7bdc8 !important;
  --inline-code-background: rgba(158, 167, 179, 0.4) !important;
  --inline-title-color: #ffffff !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #7a828e !important;
  --input-placeholder-color: #7a828e !important;
  --input-shadow: inset 0 0 0 1px #f0f6fc1a !important;
  --input-shadow-hover: inset 0 0 0 1px #b7bdc8 !important;
  --interactive-accent: #b7bdc8 !important;
  --interactive-accent-hover: #9ea7b3 !important;
  --interactive-accent-hsl: 220, 13%, 70% !important;
  --interactive-hover: #6e7781 !important;
  --interactive-normal: #3d444d !important;
  --kanban-background: #010409 !important;
  --kanban-item-background: #151b23 !important;
  --kanban-lane-background: #010409 !important;
  --kanban-lane-border: #3d444d !important;
  --kanban-lane-count: #3d444d !important;
  --kanban-options-btn: #b7bdc8 !important;
  --light: #010409 !important;
  --lightgray: #010409 !important;
  --link-color: #71b7ff !important;
  --link-color-hover: #a5d6ff !important;
  --link-decoration: none !important;
  --link-external-color: #71b7ff !important;
  --link-external-color-hover: #a5d6ff !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #71b7ff !important;
  --link-unresolved-decoration-color: hsla(220, 13%, 70%, 0.3) !important;
  --list-bullet-size: 5px !important;
  --list-indent: 2em !important;
  --list-marker-color: #ffffff !important;
  --list-marker-color-collapsed: #71b7ff !important;
  --list-marker-color-hover: #b7bdc8 !important;
  --menu-background: #010409 !important;
  --menu-border-color: #b7bdc8 !important;
  --menu-shadow: none !important;
  --metadata-border-color: #b7bdc8 !important;
  --metadata-divider-color: #b7bdc8 !important;
  --metadata-input-background-active: rgba(183, 189, 200, 0.12) !important;
  --metadata-input-font: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-background-active: rgba(183, 189, 200, 0.12) !important;
  --metadata-label-font: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #b7bdc8 !important;
  --metadata-label-text-color-hover: #b7bdc8 !important;
  --metadata-property-background-active: rgba(183, 189, 200, 0.12) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b7bdc8 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b7bdc8 !important;
  --modal-background: #010409 !important;
  --modal-border-color: #b7bdc8 !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: #7a828e !important;
  --nav-collapse-icon-color-collapsed: #7a828e !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #7a828e !important;
  --nav-heading-color-collapsed-hover: #b7bdc8 !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-background-active: rgba(183, 189, 200, 0.12) !important;
  --nav-item-background-hover: rgba(183, 189, 200, 0.12) !important;
  --nav-item-background-selected: hsla(220, 13%, 70%, 0.2) !important;
  --nav-item-color: #b7bdc8 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #a5d6ff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #7a828e !important;
  --nav-tag-color-active: #b7bdc8 !important;
  --nav-tag-color-hover: #b7bdc8 !important;
  --pdf-background: #010409 !important;
  --pdf-page-background: #010409 !important;
  --pdf-shadow: 0 0 0 1px #b7bdc8 !important;
  --pdf-sidebar-background: #010409 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #b7bdc8 !important;
  --pill-border-color: #b7bdc8 !important;
  --pill-border-color-hover: #b7bdc8 !important;
  --pill-color: #b7bdc8 !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #7a828e !important;
  --pill-color-remove-hover: #71b7ff !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #010409 !important;
  --prompt-border-color: #b7bdc8 !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, #3d444d 65%, transparent) linear-gradient(#3d444d, color-mix(in srgb, #3d444d 65%, transparent)) !important;
  --rgb-hover: 183, 189, 200 !important;
  --ribbon-background: #010409 !important;
  --ribbon-background-collapsed: #010409 !important;
  --scrollbar-radius: 10px !important;
  --search-clear-button-color: #b7bdc8 !important;
  --search-icon-color: #b7bdc8 !important;
  --search-result-background: #010409 !important;
  --secondary: #71b7ff !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: #151b23 !important;
  --setting-items-border-color: #b7bdc8 !important;
  --setting-items-radius: 10px !important;
  --shadow-l: none !important;
  --shadow-s: none !important;
  --slider-thumb-border-color: #b7bdc8 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #b7bdc8 !important;
  --status-bar-background: #010409 !important;
  --status-bar-border-color: #b7bdc8 !important;
  --status-bar-text-color: #b7bdc8 !important;
  --suggestion-background: #010409 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #ff9492 !important;
  --sync-avatar-color-2: #ffa657 !important;
  --sync-avatar-color-3: #f0b72f !important;
  --sync-avatar-color-4: #2bd853 !important;
  --sync-avatar-color-5: #a5d6ff !important;
  --sync-avatar-color-6: #71b7ff !important;
  --sync-avatar-color-7: #d2a8ff !important;
  --sync-avatar-color-8: #f778ba !important;
  --tab-background-active: #010409 !important;
  --tab-container-background: #010409 !important;
  --tab-divider-color: #b7bdc8 !important;
  --tab-outline-color: #b7bdc8 !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #010409 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #010409, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #b7bdc8 !important;
  --tab-text-color: #7a828e !important;
  --tab-text-color-active: #b7bdc8 !important;
  --tab-text-color-focused: #b7bdc8 !important;
  --tab-text-color-focused-active: #ffffff !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: #71b7ff !important;
  --table-add-button-border-color: #b7bdc8 !important;
  --table-border-color: #b7bdc8 !important;
  --table-drag-handle-background-active: #b7bdc8 !important;
  --table-drag-handle-color: #7a828e !important;
  --table-drag-handle-color-active: black !important;
  --table-header-border-color: #b7bdc8 !important;
  --table-header-color: #ffffff !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: #151b23 !important;
  --table-selection: hsla(220, 13%, 70%, 0.1) !important;
  --table-selection-border-color: #b7bdc8 !important;
  --table-white-space: normal !important;
  --tag-background: hsla(220, 13%, 70%, 0.1) !important;
  --tag-background-hover: hsla(220, 13%, 70%, 0.2) !important;
  --tag-border-color: hsla(220, 13%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(220, 13%, 70%, 0.15) !important;
  --tag-color: #71b7ff !important;
  --tag-color-hover: #71b7ff !important;
  --tertiary: #a5d6ff !important;
  --text-accent: #71b7ff !important;
  --text-accent-hover: #a5d6ff !important;
  --text-error: #ff9492 !important;
  --text-faint: #7a828e !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #b7bdc8 !important;
  --text-normal: #ffffff !important;
  --text-on-accent: black !important;
  --text-selection: hsla(220, 13%, 70%, 0.4) !important;
  --text-success: #2bd853 !important;
  --text-warning: #ffa657 !important;
  --textHighlight: rgba(183, 189, 200, 0.12) !important;
  --titleFont: -apple-system BlinkMacSystemFont, Segoe UI, Noto Sans,
        Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #010409 !important;
  --titlebar-background-focused: #010409 !important;
  --titlebar-border-color: #b7bdc8 !important;
  --titlebar-text-color: #b7bdc8 !important;
  --titlebar-text-color-focused: #ffffff !important;
  --titlebar-text-color-highlighted: #a5d6ff !important;
  --toggle-background-color: #b7bdc8 !important;
  --toggle-background-color-off: #3d444d !important;
  --toggle-border-color: #b7bdc8 !important;
  --vault-name-color: #ffffff !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(1, 4, 9);
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(1, 4, 9);
  color: rgb(255, 255, 255);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(1, 4, 9);
}

html body .bases-table thead th {
  border-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
}

html body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html body .canvas-sidebar {
  background-color: rgb(1, 4, 9);
  border-color: rgb(255, 255, 255);
  box-shadow: rgba(240, 246, 252, 0.1) 0px 0px 0px 1px inset;
}

html body .note-properties {
  border-color: rgb(183, 189, 200);
}

html body .note-properties-key {
  color: rgb(183, 189, 200);
}

html body .note-properties-row {
  border-color: rgb(183, 189, 200);
}

html body .note-properties-tags {
  background-color: rgba(169, 175, 188, 0.1);
  color: rgb(113, 183, 255);
}

html body .note-properties-value {
  color: rgb(183, 189, 200);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(1, 4, 9);
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(183, 189, 200);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(1, 4, 9);
  border-left-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
}

html body div#quartz-root {
  background-color: rgb(1, 4, 9);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body h1.article-title {
  color: rgb(255, 255, 255);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(122, 130, 142);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(183, 189, 200);
  border-color: rgb(183, 189, 200);
}

html body p {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(183, 189, 200) none 0px;
  text-decoration-color: rgb(183, 189, 200);
}`,
    links: `html body a.external, html footer a {
  color: rgb(113, 183, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 183, 255) none 0px;
  text-decoration-color: rgb(113, 183, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(113, 183, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 183, 255) none 0px;
  text-decoration-color: rgb(113, 183, 255);
}

html body a.internal.broken {
  color: rgb(113, 183, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 183, 255) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(113, 183, 255);
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(122, 130, 142);
  text-decoration: underline;
}

html body blockquote {
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 211.062px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(21, 27, 35);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(1, 4, 9);
}

html body td {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html body th {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "DM Mono", "Fira Code", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 166, 87);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 166, 87);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 166, 87);
  border-left-color: rgb(255, 166, 87);
  border-right-color: rgb(255, 166, 87);
  border-top-color: rgb(255, 166, 87);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
}

html body pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(21, 27, 35);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(122, 130, 142);
  border-left-color: rgb(122, 130, 142);
  border-right-color: rgb(122, 130, 142);
  border-top-color: rgb(122, 130, 142);
  margin-left: -22.5px;
  width: 15px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(113, 183, 255);
  border-left-color: rgb(113, 183, 255);
  border-right-color: rgb(113, 183, 255);
  border-top-color: rgb(113, 183, 255);
  color: rgb(113, 183, 255);
  gap: 8px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(113, 183, 255);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 255, 148, 146;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: #ff9492;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 148, 146);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 255, 148, 146;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: #71b7ff;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 183, 255);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: #71b7ff;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 183, 255);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: #2bd853;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 216, 83);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: #2bd853;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(43, 216, 83);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: #f0b72f;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(240, 183, 47);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(183, 189, 200, 0.12);
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(183, 189, 200);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(183, 189, 200);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(183, 189, 200);
  border-top-style: solid;
  border-top-width: 1px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(183, 189, 200, 0.12);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(183, 189, 200, 0.12);
  color: rgb(255, 255, 255);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(169, 175, 188, 0.1);
  border-bottom-color: rgba(169, 175, 188, 0.15);
  border-left-color: rgba(169, 175, 188, 0.15);
  border-right-color: rgba(169, 175, 188, 0.15);
  border-top-color: rgba(169, 175, 188, 0.15);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(113, 183, 255);
}

html body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
}`,
    scrollbars: `html body .callout {
  --callout-color: #71b7ff;
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 183, 255);
  border-left-width: 4px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 11px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 11px;
}

html body ::-webkit-scrollbar {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}

html body ::-webkit-scrollbar-track {
  background: rgb(1, 4, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(1, 4, 9);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
}`,
    footer: `html body footer {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(183, 189, 200);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(183, 189, 200);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(183, 189, 200);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
}

html body .darkmode svg {
  color: rgb(183, 189, 200);
  stroke: rgb(183, 189, 200);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
}

html body .breadcrumb-element p {
  color: rgb(122, 130, 142);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .metadata {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(183, 189, 200);
  border-left-color: rgb(183, 189, 200);
  border-right-color: rgb(183, 189, 200);
  border-top-color: rgb(183, 189, 200);
  color: rgb(183, 189, 200);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(1, 4, 9);
}

html body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  margin-bottom: 16px;
  margin-top: 16px;
}

html body input[type=text] {
  background-color: rgb(1, 4, 9);
  border-bottom-color: rgb(183, 189, 200);
  border-bottom-width: 1px;
  border-left-color: rgb(183, 189, 200);
  border-left-width: 1px;
  border-right-color: rgb(183, 189, 200);
  border-right-width: 1px;
  border-top-color: rgb(183, 189, 200);
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  font-family: "??", "-apple-system BlinkMacSystemFont", "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "DM Mono", "Fira Code", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-weight: 600;
}

html body sup {
  color: rgb(255, 255, 255);
}

html body ul.tags > li {
  background-color: rgba(169, 175, 188, 0.1);
  border-bottom-color: rgba(169, 175, 188, 0.15);
  border-left-color: rgba(169, 175, 188, 0.15);
  border-right-color: rgba(169, 175, 188, 0.15);
  border-top-color: rgba(169, 175, 188, 0.15);
  color: rgb(113, 183, 255);
}`,
  },
  light: {},
};
