import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wyrd",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["architects-daughter", "neucha", "space-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 270 !important;
  --accent-l: 58.8% !important;
  --accent-s: 65% !important;
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15) !important;
  --background-modifier-border: hsl(37, 100%, 50%) !important;
  --background-modifier-border-focus: hsl(270, 13%, 65%) !important;
  --background-modifier-border-hover: hsl(270, 8%, 50%) !important;
  --background-modifier-error: hsl(340, 85%, 48.3%) !important;
  --background-modifier-error-hover: hsl(340, 85%, 48.3%) !important;
  --background-modifier-error-rgb: 228, 18, 88 !important;
  --background-modifier-form-field: hsl(270, 10%, 20%) !important;
  --background-modifier-form-field-hover: hsl(270, 10%, 20%) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: hsla(100, 90%, 33.5%) !important;
  --background-modifier-success-rgb: 51, 138, 7 !important;
  --background-primary: hsl(270, 10%, 15%) !important;
  --background-primary-alt: hsl(270, 10%, 17.5%) !important;
  --background-secondary: hsl(270, 10%, 15%) !important;
  --background-secondary-alt: hsl(270, 8%, 35%) !important;
  --bases-cards-background: hsl(270, 10%, 15%) !important;
  --bases-cards-cover-background: hsl(270, 10%, 17.5%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(37, 100%, 50%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(270, 8%, 50%) !important;
  --bases-embed-border-color: hsl(37, 100%, 50%) !important;
  --bases-group-heading-property-color: hsl(270, 10%, 72.5%) !important;
  --bases-table-border-color: hsl(37, 100%, 50%) !important;
  --bases-table-cell-background-active: hsl(270, 10%, 15%) !important;
  --bases-table-cell-background-disabled: hsl(270, 10%, 17.5%) !important;
  --bases-table-cell-background-selected: hsla(270, 65%, 58.8%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(270, 13%, 65%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(270, 65%, 58.8%) !important;
  --bases-table-group-background: hsl(270, 10%, 17.5%) !important;
  --bases-table-header-background: hsl(270, 10%, 15%) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: hsl(270, 10%, 72.5%) !important;
  --bases-table-summary-background: hsl(270, 10%, 15%) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: hsl(270, 65%, 58.8%) !important;
  --blur-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent)) !important;
  --bodyFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(12, 65%, 62%) !important;
  --callout-bug: 228, 18, 88;
  --callout-error: 228, 18, 88;
  --callout-fail: 228, 18, 88;
  --callout-success: 51, 138, 7;
  --canvas-background: hsl(270, 10%, 15%) !important;
  --canvas-card-label-color: hsl(270, 13%, 65%) !important;
  --canvas-color-1: 228, 18, 88 !important;
  --canvas-color-4: 51, 138, 7 !important;
  --canvas-dot-pattern: hsl(270, 8%, 35%) !important;
  --caret-color: hsl(270, 10%, 75%) !important;
  --checkbox-border-color: hsl(270, 13%, 65%) !important;
  --checkbox-border-color-hover: hsl(270, 10%, 72.5%) !important;
  --checkbox-color: hsl(270, 65%, 58.8%) !important;
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%) !important;
  --checkbox-marker-color: hsl(270, 10%, 15%) !important;
  --checklist-done-color: hsl(270, 10%, 72.5%) !important;
  --code-background: hsl(270, 10%, 17.5%) !important;
  --code-border-color: hsl(37, 100%, 50%) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: hsl(270, 13%, 65%) !important;
  --code-function: hsl(37, 100%, 50%) !important;
  --code-important: hsl(25, 85%, 50%) !important;
  --code-keyword: hsl(330, 85%, 47.2%) !important;
  --code-normal: hsl(270, 10%, 75%) !important;
  --code-operator: hsl(340, 85%, 48.3%) !important;
  --code-property: hsla(175, 100%, 50%) !important;
  --code-punctuation: hsl(270, 10%, 72.5%) !important;
  --code-string: hsla(100, 90%, 33.5%) !important;
  --code-tag: hsl(340, 85%, 48.3%) !important;
  --code-value: hsl(270, 65%, 58.8%) !important;
  --codeFont: "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(270, 13%, 65%) !important;
  --collapse-icon-color-collapsed: hsl(267, 66.3%, 67.62%) !important;
  --color-accent: hsl(270, 65%, 58.8%) !important;
  --color-accent-1: hsl(267, 66.3%, 67.62%) !important;
  --color-accent-2: hsl(265, 68.25%, 75.852%) !important;
  --color-accent-hsl: 270, 65%, 58.8% !important;
  --color-base-00: hsl(270, 10%, 12.5%) !important;
  --color-base-10: hsl(270, 10%, 15%) !important;
  --color-base-100: hsl(270, 10%, 80%) !important;
  --color-base-20: hsl(270, 10%, 17.5%) !important;
  --color-base-25: hsl(270, 10%, 20%) !important;
  --color-base-30: hsl(270, 8%, 35%) !important;
  --color-base-35: hsl(270, 8%, 50%) !important;
  --color-base-40: hsl(270, 13%, 65%) !important;
  --color-base-50: hsl(270, 10%, 72.5%) !important;
  --color-base-60: hsl(270, 10%, 75%) !important;
  --color-base-70: hsl(270, 10%, 77.5%) !important;
  --color-blue: hsl(190, 100%, 26%) !important;
  --color-cyan: hsla(175, 100%, 50%) !important;
  --color-green: hsla(100, 90%, 33.5%) !important;
  --color-green-rgb: 51, 138, 7 !important;
  --color-orange: hsl(25, 85%, 50%) !important;
  --color-pink: hsl(330, 85%, 47.2%) !important;
  --color-purple: hsl(270, 65%, 58.8%) !important;
  --color-red: hsl(340, 85%, 48.3%) !important;
  --color-red-rgb: 228, 18, 88 !important;
  --color-yellow: hsl(37, 100%, 50%) !important;
  --dark: hsl(270, 10%, 75%) !important;
  --darkgray: hsl(270, 10%, 75%) !important;
  --divider-color: hsl(37, 100%, 50%) !important;
  --divider-color-hover: hsl(270, 65%, 58.8%) !important;
  --dropdown-background: hsl(270, 8%, 35%) !important;
  --dropdown-background-hover: hsl(270, 8%, 50%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(37, 100%, 50%), inset 0 0 0 1px hsl(37, 100%, 50%) !important;
  --embed-border-start: 2px solid hsl(270, 65%, 58.8%) !important;
  --file-header-background: hsl(270, 10%, 15%) !important;
  --file-header-background-focused: hsl(270, 10%, 15%) !important;
  --file-header-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(270, 8%, 35%) !important;
  --flair-color: hsl(270, 10%, 75%) !important;
  --font-interface: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Neucha !important;
  --font-mermaid: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Space Mono" !important;
  --font-print: Neucha, Arial' !important;
  --font-text: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Neucha !important;
  --footnote-divider-color: hsl(37, 100%, 50%) !important;
  --footnote-id-color: hsl(270, 10%, 72.5%) !important;
  --footnote-id-color-no-occurrences: hsl(270, 13%, 65%) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: hsl(37, 100%, 40%) !important;
  --graph-node: hsl(270, 10%, 72.5%) !important;
  --graph-node-attachment: hsl(25, 85%, 50%) !important;
  --graph-node-focused: hsl(37, 100%, 50%) !important;
  --graph-node-tag: hsla(100, 90%, 33.5%) !important;
  --graph-node-unresolved: hsl(270, 13%, 65%) !important;
  --graph-text: hsl(270, 10%, 75%) !important;
  --gray: hsl(270, 10%, 72.5%) !important;
  --h1-color: hsl(270, 65%, 58.8%) !important;
  --h1-font: "Architects Daughter", Neucha !important;
  --h2-color: hsl(330, 85%, 47.2%) !important;
  --h2-font: "Architects Daughter", Neucha !important;
  --h3-color: hsl(257, 60%, 50%) !important;
  --h3-font: "Architects Daughter", Neucha !important;
  --h4-color: hsla(100, 90%, 33.5%) !important;
  --h4-font: "Architects Daughter", Neucha !important;
  --h5-color: hsl(160, 100%, 36%) !important;
  --h5-font: "Architects Daughter", Neucha !important;
  --h6-color: hsl(190, 100%, 26%) !important;
  --h6-font: "Architects Daughter", Neucha !important;
  --headerFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(270, 10%, 72.5%) !important;
  --highlight: rgba(255, 157, 0, 0.7) !important;
  --hr-color: hsl(37, 100%, 50%) !important;
  --icon-color: hsl(270, 10%, 72.5%) !important;
  --icon-color-active: hsl(267, 66.3%, 67.62%) !important;
  --icon-color-focused: hsl(270, 10%, 75%) !important;
  --icon-color-hover: hsl(270, 10%, 72.5%) !important;
  --inline-title-color: hsl(270, 65%, 58.8%) !important;
  --inline-title-font: "Architects Daughter", Neucha !important;
  --input-date-separator: hsl(270, 13%, 65%) !important;
  --input-placeholder-color: hsl(270, 13%, 65%) !important;
  --interactive-accent: hsl(270, 65%, 58.8%) !important;
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%) !important;
  --interactive-accent-hsl: 270, 65%, 58.8% !important;
  --interactive-hover: hsl(270, 8%, 50%) !important;
  --interactive-normal: hsl(270, 8%, 35%) !important;
  --italic-color: hsl(346, 64%, 57%) !important;
  --light: hsl(270, 10%, 15%) !important;
  --lightgray: hsl(270, 10%, 15%) !important;
  --link-color: hsl(37, 100%, 50%) !important;
  --link-color-hover: hsl(37, 100%, 60%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsla(175, 100%, 40%) !important;
  --link-external-color-hover: hsla(175, 100%, 50%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsl(25, 85%, 40%) !important;
  --link-unresolved-color-hover: hsl(25, 85%, 50%) !important;
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5) !important;
  --link-unresolved-opacity: 0.8 !important;
  --list-marker-color: hsl(270, 13%, 65%) !important;
  --list-marker-color-collapsed: hsl(267, 66.3%, 67.62%) !important;
  --list-marker-color-hover: hsl(270, 10%, 72.5%) !important;
  --menu-background: hsl(270, 10%, 15%) !important;
  --menu-border-color: hsl(270, 8%, 50%) !important;
  --metadata-border-color: hsl(37, 100%, 50%) !important;
  --metadata-divider-color: hsl(37, 100%, 50%) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(270, 10%, 75%) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(270, 10%, 72.5%) !important;
  --metadata-label-text-color-hover: hsl(270, 10%, 72.5%) !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(270, 13%, 65%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(270, 8%, 50%) !important;
  --modal-background: hsl(270, 10%, 15%) !important;
  --modal-border-color: hsl(270, 13%, 65%) !important;
  --nav-collapse-icon-color: hsl(270, 13%, 65%) !important;
  --nav-collapse-icon-color-collapsed: hsl(270, 13%, 65%) !important;
  --nav-heading-color: hsl(270, 10%, 75%) !important;
  --nav-heading-color-collapsed: hsl(270, 13%, 65%) !important;
  --nav-heading-color-collapsed-hover: hsl(270, 10%, 72.5%) !important;
  --nav-heading-color-hover: hsl(270, 10%, 75%) !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(270, 65%, 58.8%, 0.15) !important;
  --nav-item-color: hsl(270, 10%, 72.5%) !important;
  --nav-item-color-active: hsl(270, 10%, 75%) !important;
  --nav-item-color-highlighted: hsl(265, 68.25%, 75.852%) !important;
  --nav-item-color-hover: hsl(270, 10%, 75%) !important;
  --nav-item-color-selected: hsl(270, 10%, 75%) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl(270, 13%, 65%) !important;
  --nav-tag-color-active: hsl(270, 10%, 72.5%) !important;
  --nav-tag-color-hover: hsl(270, 10%, 72.5%) !important;
  --pdf-background: hsl(270, 10%, 15%) !important;
  --pdf-page-background: hsl(270, 10%, 15%) !important;
  --pdf-shadow: 0 0 0 1px hsl(37, 100%, 50%) !important;
  --pdf-sidebar-background: hsl(270, 10%, 15%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(37, 100%, 50%) !important;
  --pill-border-color: hsl(37, 100%, 50%) !important;
  --pill-border-color-hover: hsl(270, 8%, 50%) !important;
  --pill-color: hsl(270, 10%, 72.5%) !important;
  --pill-color-hover: hsl(270, 10%, 75%) !important;
  --pill-color-remove: hsl(270, 13%, 65%) !important;
  --pill-color-remove-hover: hsl(267, 66.3%, 67.62%) !important;
  --prompt-background: hsl(270, 10%, 15%) !important;
  --prompt-border-color: hsl(270, 13%, 65%) !important;
  --raised-background: color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent) linear-gradient(hsl(270, 8%, 35%), color-mix(in srgb, hsl(270, 8%, 35%) 65%, transparent)) !important;
  --ribbon-background: hsl(270, 10%, 15%) !important;
  --ribbon-background-collapsed: hsl(270, 10%, 15%) !important;
  --search-clear-button-color: hsl(270, 10%, 72.5%) !important;
  --search-icon-color: hsl(270, 10%, 72.5%) !important;
  --search-result-background: hsl(270, 10%, 15%) !important;
  --secondary: hsl(267, 66.3%, 67.62%) !important;
  --setting-group-heading-color: hsl(270, 10%, 75%) !important;
  --setting-items-background: hsl(270, 10%, 17.5%) !important;
  --setting-items-border-color: hsl(37, 100%, 50%) !important;
  --slider-thumb-border-color: hsl(270, 8%, 50%) !important;
  --slider-track-background: hsl(37, 100%, 50%) !important;
  --status-bar-background: hsl(270, 10%, 15%) !important;
  --status-bar-border-color: hsl(37, 100%, 50%) !important;
  --status-bar-text-color: hsl(270, 10%, 72.5%) !important;
  --suggestion-background: hsl(270, 10%, 15%) !important;
  --sync-avatar-color-1: hsl(340, 85%, 48.3%) !important;
  --sync-avatar-color-2: hsl(25, 85%, 50%) !important;
  --sync-avatar-color-3: hsl(37, 100%, 50%) !important;
  --sync-avatar-color-4: hsla(100, 90%, 33.5%) !important;
  --sync-avatar-color-5: hsla(175, 100%, 50%) !important;
  --sync-avatar-color-6: hsl(190, 100%, 26%) !important;
  --sync-avatar-color-7: hsl(270, 65%, 58.8%) !important;
  --sync-avatar-color-8: hsl(330, 85%, 47.2%) !important;
  --tab-background-active: hsl(270, 10%, 15%) !important;
  --tab-container-background: hsl(270, 10%, 17.5%) !important;
  --tab-divider-color: hsl(270, 8%, 50%) !important;
  --tab-outline-color: hsl(37, 100%, 50%) !important;
  --tab-switcher-background: hsl(270, 10%, 15%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 15%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%) !important;
  --tab-text-color: hsl(270, 13%, 65%) !important;
  --tab-text-color-active: hsl(270, 10%, 72.5%) !important;
  --tab-text-color-focused: hsl(270, 10%, 72.5%) !important;
  --tab-text-color-focused-active: hsl(270, 10%, 75%) !important;
  --tab-text-color-focused-active-current: hsl(270, 10%, 75%) !important;
  --tab-text-color-focused-highlighted: hsl(267, 66.3%, 67.62%) !important;
  --table-add-button-border-color: hsl(37, 100%, 50%) !important;
  --table-border-color: hsl(37, 100%, 50%) !important;
  --table-drag-handle-background-active: hsl(270, 65%, 58.8%) !important;
  --table-drag-handle-color: hsl(270, 13%, 65%) !important;
  --table-header-border-color: hsl(37, 100%, 50%) !important;
  --table-header-color: hsl(270, 10%, 75%) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(270, 65%, 58.8%, 0.1) !important;
  --table-selection-border-color: hsl(270, 65%, 58.8%) !important;
  --table-white-space: normal !important;
  --tag-background: hsla(270, 65%, 58.8%, 0.1) !important;
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2) !important;
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15) !important;
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15) !important;
  --tag-color: hsl(267, 66.3%, 67.62%) !important;
  --tag-color-hover: hsl(267, 66.3%, 67.62%) !important;
  --tertiary: hsl(265, 68.25%, 75.852%) !important;
  --text-accent: hsl(267, 66.3%, 67.62%) !important;
  --text-accent-hover: hsl(265, 68.25%, 75.852%) !important;
  --text-error: hsl(340, 85%, 48.3%) !important;
  --text-faint: hsl(270, 13%, 65%) !important;
  --text-highlight-bg: rgba(255, 157, 0, 0.7) !important;
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8) !important;
  --text-muted: hsl(270, 10%, 72.5%) !important;
  --text-normal: hsl(270, 10%, 75%) !important;
  --text-selection: hsla(270, 65%, 58.8%, 0.33) !important;
  --text-success: hsla(100, 90%, 33.5%) !important;
  --text-warning: hsl(25, 85%, 50%) !important;
  --textHighlight: rgba(255, 157, 0, 0.7) !important;
  --titleFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(270, 10%, 15%) !important;
  --titlebar-background-focused: hsl(270, 10%, 17.5%) !important;
  --titlebar-border-color: hsl(37, 100%, 50%) !important;
  --titlebar-text-color: hsl(270, 10%, 72.5%) !important;
  --titlebar-text-color-focused: hsl(270, 10%, 75%) !important;
  --titlebar-text-color-highlighted: hsl(265, 68.25%, 75.852%) !important;
  --vault-name-color: hsl(37, 100%, 50%) !important;
  --vault-profile-color: hsl(270, 10%, 75%) !important;
  --vault-profile-color-hover: hsl(270, 10%, 75%) !important;
  --wyrd-base-00: hsl(270, 10%, 12.5%) !important;
  --wyrd-base-10: hsl(270, 10%, 15%) !important;
  --wyrd-base-100: hsl(270, 10%, 82.5%) !important;
  --wyrd-base-20: hsl(270, 10%, 17.5%) !important;
  --wyrd-base-30: hsl(270, 10%, 20%) !important;
  --wyrd-base-40: hsl(270, 8%, 35%) !important;
  --wyrd-base-50: hsl(270, 8%, 50%) !important;
  --wyrd-base-50-rgb: 128, 117, 138 !important;
  --wyrd-base-60: hsl(270, 13%, 65%) !important;
  --wyrd-base-70: hsl(270, 10%, 72.5%) !important;
  --wyrd-base-80: hsl(270, 10%, 75%) !important;
  --wyrd-base-90: hsl(270, 10%, 77.5%) !important;
  --wyrd-base-95: hsl(270, 10%, 80%) !important;
  --wyrd-blue: hsl(190, 100%, 26%) !important;
  --wyrd-blue-dark: hsl(190, 100%, 16%) !important;
  --wyrd-blue-light: hsl(190, 100%, 36%) !important;
  --wyrd-blue-rgb: 0, 153, 184 !important;
  --wyrd-cyan: hsla(175, 100%, 50%) !important;
  --wyrd-cyan-dark: hsla(175, 100%, 40%) !important;
  --wyrd-cyan-light: hsla(175, 100%, 60%) !important;
  --wyrd-cyan-rgb: 0, 255, 234 !important;
  --wyrd-green: hsla(100, 90%, 33.5%) !important;
  --wyrd-green-dark: hsla(100, 90%, 23.5%) !important;
  --wyrd-green-light: hsla(100, 90%, 43.5%) !important;
  --wyrd-green-rgb: 51, 138, 7 !important;
  --wyrd-indigo: hsl(257, 60%, 50%) !important;
  --wyrd-indigo-dark: hsl(257, 60%, 40%) !important;
  --wyrd-indigo-light: hsl(257, 60%, 60%) !important;
  --wyrd-indigo-rgb: 94, 51, 204 !important;
  --wyrd-orange: hsl(25, 85%, 50%) !important;
  --wyrd-orange-dark: hsl(25, 85%, 40%) !important;
  --wyrd-orange-light: hsl(25, 85%, 60%) !important;
  --wyrd-orange-rgb: 236, 109, 19 !important;
  --wyrd-pink: hsl(330, 85%, 47.2%) !important;
  --wyrd-pink-dark: hsl(330, 85%, 37.2%) !important;
  --wyrd-pink-light: hsl(330, 85%, 57.2%) !important;
  --wyrd-pink-rgb: 223, 18, 120 !important;
  --wyrd-purple: hsl(270, 65%, 58.8%) !important;
  --wyrd-purple-dark: hsl(270, 65%, 48.8%) !important;
  --wyrd-purple-light: hsl(270, 65%, 68.8%) !important;
  --wyrd-purple-rgb: 150, 82, 218 !important;
  --wyrd-red: hsl(340, 85%, 48.3%) !important;
  --wyrd-red-dark: hsl(340, 85%, 38.3%) !important;
  --wyrd-red-light: hsl(340, 85%, 58.3%) !important;
  --wyrd-red-rgb: 228, 18, 88 !important;
  --wyrd-strike-color: hsl(270, 8%, 35%) !important;
  --wyrd-strike-color-hover: hsl(270, 13%, 65%) !important;
  --wyrd-teal: hsl(160, 100%, 36%) !important;
  --wyrd-teal-dark: hsl(160, 100%, 26%) !important;
  --wyrd-teal-light: hsl(160, 100%, 46%) !important;
  --wyrd-teal-rgb: 0, 184, 122 !important;
  --wyrd-yellow: hsl(37, 100%, 50%) !important;
  --wyrd-yellow-dark: hsl(37, 100%, 40%) !important;
  --wyrd-yellow-dark-rgb: 204, 126, 0 !important;
  --wyrd-yellow-light: hsl(37, 100%, 60%) !important;
  --wyrd-yellow-light-rgb: 255, 177, 51 !important;
  --wyrd-yellow-rgb: 255, 157, 0 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(45, 40, 49);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(38, 34, 42);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(38, 34, 42);
  border-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(150, 82, 218, 0.1);
  color: rgb(167, 118, 227);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 34, 42);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(45, 40, 49);
  border-left-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(38, 34, 42);
  color: rgb(191, 185, 198);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 157, 0, 0.7);
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration-color: rgb(191, 185, 198);
  transition: background-color 0.25s ease-in-out;
}

html[saved-theme="dark"] body del {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
  transition: color 0.25s ease-in-out;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(166, 154, 177);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(150, 82, 218);
  border-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(185, 178, 192) none 0px;
  text-decoration-color: rgb(185, 178, 192);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 204, 187);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 187) none 0px;
  text-decoration-color: rgb(0, 204, 187);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 157, 0);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 157, 0) none 0px;
  text-decoration-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(189, 88, 15);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 88, 15) none 0px;
  text-decoration: rgba(150, 82, 218, 0.5);
  text-decoration-color: rgba(150, 82, 218, 0.5);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body dt {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(223, 18, 120);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body table {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 230.281px;
  margin-right: 230.281px;
  width: 201.438px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
  font-weight: 700;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
  font-family: "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
  color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(150, 82, 218);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 153, 184;
  background-color: rgba(0, 153, 184, 0.1);
  border-bottom-color: rgba(0, 153, 184, 0.25);
  border-left-color: rgba(0, 153, 184, 0.25);
  border-right-color: rgba(0, 153, 184, 0.25);
  border-top-color: rgba(0, 153, 184, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 94, 51, 204;
  background-color: rgba(94, 51, 204, 0.1);
  border-bottom-color: rgba(94, 51, 204, 0.25);
  border-left-color: rgba(94, 51, 204, 0.25);
  border-right-color: rgba(94, 51, 204, 0.25);
  border-top-color: rgba(94, 51, 204, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 236, 109, 19;
  background-color: rgba(236, 109, 19, 0.1);
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 150, 82, 218;
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 0, 184, 122;
  background-color: rgba(0, 184, 122, 0.1);
  border-bottom-color: rgba(0, 184, 122, 0.25);
  border-left-color: rgba(0, 184, 122, 0.25);
  border-right-color: rgba(0, 184, 122, 0.25);
  border-top-color: rgba(0, 184, 122, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 128, 117, 138;
  background-color: rgba(128, 117, 138, 0.1);
  border-bottom-color: rgba(128, 117, 138, 0.25);
  border-left-color: rgba(128, 117, 138, 0.25);
  border-right-color: rgba(128, 117, 138, 0.25);
  border-top-color: rgba(128, 117, 138, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 51, 138, 7;
  background-color: rgba(51, 138, 7, 0.1);
  border-bottom-color: rgba(51, 138, 7, 0.25);
  border-left-color: rgba(51, 138, 7, 0.25);
  border-right-color: rgba(51, 138, 7, 0.25);
  border-top-color: rgba(51, 138, 7, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 223, 18, 120;
  background-color: rgba(223, 18, 120, 0.1);
  border-bottom-color: rgba(223, 18, 120, 0.25);
  border-left-color: rgba(223, 18, 120, 0.25);
  border-right-color: rgba(223, 18, 120, 0.25);
  border-top-color: rgba(223, 18, 120, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 236, 109, 19;
  background-color: rgba(236, 109, 19, 0.1);
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 157, 0;
  background-color: rgba(255, 157, 0, 0.1);
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
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
  background-color: rgb(51, 46, 56);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(38, 34, 42);
  border-bottom-color: rgb(166, 154, 177);
  border-left-color: rgb(166, 154, 177);
  border-right-color: rgb(166, 154, 177);
  border-top-color: rgb(166, 154, 177);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(166, 154, 177);
  border-left-color: rgb(166, 154, 177);
  border-right-color: rgb(166, 154, 177);
  border-top-color: rgb(166, 154, 177);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 34, 42);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(167, 118, 227);
}

html[saved-theme="dark"] body h1 {
  color: rgb(150, 82, 218);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(223, 18, 120);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(150, 82, 218);
  font-family: "Architects Daughter", Neucha;
}

html[saved-theme="dark"] body h3 {
  color: rgb(94, 51, 204);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="dark"] body h4 {
  color: rgb(60, 162, 9);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="dark"] body h5 {
  color: rgb(0, 184, 122);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="dark"] body h6 {
  color: rgb(0, 110, 133);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(38, 34, 42) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 42);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(191, 185, 198);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(38, 34, 42);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(185, 178, 192);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(185, 178, 192);
  stroke: rgb(185, 178, 192);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(166, 154, 177);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(38, 34, 42);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(185, 178, 192);
  border-left-color: rgb(185, 178, 192);
  border-right-color: rgb(185, 178, 192);
  border-top-color: rgb(185, 178, 192);
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(45, 40, 49);
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
  color: rgb(191, 185, 198);
  font-family: "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body sub {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body summary {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body sup {
  color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  color: rgb(167, 118, 227);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 270 !important;
  --accent-l: 58.8% !important;
  --accent-s: 65% !important;
  --background-modifier-active-hover: hsla(270, 65%, 58.8%, 0.15) !important;
  --background-modifier-border: hsl(37, 100%, 50%) !important;
  --background-modifier-border-focus: hsl(270, 8%, 35%) !important;
  --background-modifier-border-hover: hsl(270, 8%, 50%) !important;
  --background-modifier-error: hsl(340, 85%, 48.3%) !important;
  --background-modifier-error-hover: hsl(340, 85%, 48.3%) !important;
  --background-modifier-error-rgb: 228, 18, 88 !important;
  --background-modifier-form-field: hsl(270, 10%, 82.5%) !important;
  --background-modifier-form-field-hover: hsl(270, 10%, 82.5%) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-modifier-success: hsla(100, 90%, 33.5%) !important;
  --background-modifier-success-rgb: 51, 138, 7 !important;
  --background-primary: hsl(270, 10%, 77.5%) !important;
  --background-primary-alt: hsl(270, 10%, 75%) !important;
  --background-secondary: hsl(270, 10%, 77.5%) !important;
  --background-secondary-alt: hsl(270, 10%, 80%) !important;
  --bases-cards-background: hsl(270, 10%, 77.5%) !important;
  --bases-cards-cover-background: hsl(270, 10%, 75%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(37, 100%, 50%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(270, 8%, 50%) !important;
  --bases-embed-border-color: hsl(37, 100%, 50%) !important;
  --bases-group-heading-property-color: hsl(270, 10%, 20%) !important;
  --bases-table-border-color: hsl(37, 100%, 50%) !important;
  --bases-table-cell-background-active: hsl(270, 10%, 77.5%) !important;
  --bases-table-cell-background-disabled: hsl(270, 10%, 75%) !important;
  --bases-table-cell-background-selected: hsla(270, 65%, 58.8%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(270, 8%, 35%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(269, 65.65%, 63.21%) !important;
  --bases-table-group-background: hsl(270, 10%, 75%) !important;
  --bases-table-header-background: hsl(270, 10%, 77.5%) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: hsl(270, 10%, 20%) !important;
  --bases-table-summary-background: hsl(270, 10%, 77.5%) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: hsl(269, 65.65%, 63.21%) !important;
  --blur-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent)) !important;
  --bodyFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(12, 65%, 62%) !important;
  --callout-bug: 228, 18, 88;
  --callout-error: 228, 18, 88;
  --callout-fail: 228, 18, 88;
  --callout-success: 51, 138, 7;
  --canvas-background: hsl(270, 10%, 77.5%) !important;
  --canvas-card-label-color: hsl(270, 10%, 17.5%) !important;
  --canvas-color-1: 228, 18, 88 !important;
  --canvas-color-4: 51, 138, 7 !important;
  --canvas-dot-pattern: hsl(270, 13%, 65%) !important;
  --caret-color: hsl(270, 8%, 35%) !important;
  --checkbox-border-color: hsl(270, 10%, 17.5%) !important;
  --checkbox-border-color-hover: hsl(270, 10%, 20%) !important;
  --checkbox-color: hsl(269, 65.65%, 63.21%) !important;
  --checkbox-color-hover: hsl(267, 66.3%, 67.62%) !important;
  --checkbox-marker-color: hsl(270, 10%, 77.5%) !important;
  --checklist-done-color: hsl(270, 10%, 20%) !important;
  --code-background: hsl(270, 10%, 75%) !important;
  --code-border-color: hsl(37, 100%, 50%) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: hsl(270, 10%, 17.5%) !important;
  --code-function: hsl(37, 100%, 50%) !important;
  --code-important: hsl(25, 85%, 50%) !important;
  --code-keyword: hsl(330, 85%, 47.2%) !important;
  --code-normal: hsl(270, 8%, 35%) !important;
  --code-operator: hsl(340, 85%, 48.3%) !important;
  --code-property: hsla(175, 100%, 50%) !important;
  --code-punctuation: hsl(270, 10%, 20%) !important;
  --code-string: hsla(100, 90%, 33.5%) !important;
  --code-tag: hsl(340, 85%, 48.3%) !important;
  --code-value: hsl(270, 65%, 58.8%) !important;
  --codeFont: "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(270, 10%, 17.5%) !important;
  --collapse-icon-color-collapsed: hsl(270, 65%, 58.8%) !important;
  --color-accent: hsl(270, 65%, 58.8%) !important;
  --color-accent-1: hsl(269, 65.65%, 63.21%) !important;
  --color-accent-2: hsl(267, 66.3%, 67.62%) !important;
  --color-accent-hsl: 270, 65%, 58.8% !important;
  --color-base-00: hsl(270, 10%, 82.5%) !important;
  --color-base-05: hsl(270, 10%, 80%) !important;
  --color-base-10: hsl(270, 10%, 77.5%) !important;
  --color-base-100: hsl(270, 10%, 12.5%) !important;
  --color-base-20: hsl(270, 10%, 75%) !important;
  --color-base-25: hsl(270, 10%, 72.5%) !important;
  --color-base-30: hsl(270, 13%, 65%) !important;
  --color-base-35: hsl(270, 8%, 50%) !important;
  --color-base-40: hsl(270, 8%, 35%) !important;
  --color-base-50: hsl(270, 10%, 20%) !important;
  --color-base-60: hsl(270, 10%, 17.5%) !important;
  --color-base-70: hsl(270, 10%, 15%) !important;
  --color-blue: hsl(190, 100%, 26%) !important;
  --color-cyan: hsla(175, 100%, 50%) !important;
  --color-green: hsla(100, 90%, 33.5%) !important;
  --color-green-rgb: 51, 138, 7 !important;
  --color-orange: hsl(25, 85%, 50%) !important;
  --color-pink: hsl(330, 85%, 47.2%) !important;
  --color-purple: hsl(270, 65%, 58.8%) !important;
  --color-red: hsl(340, 85%, 48.3%) !important;
  --color-red-rgb: 228, 18, 88 !important;
  --color-yellow: hsl(37, 100%, 50%) !important;
  --dark: hsl(270, 8%, 35%) !important;
  --darkgray: hsl(270, 8%, 35%) !important;
  --divider-color: hsl(37, 100%, 50%) !important;
  --divider-color-hover: hsl(269, 65.65%, 63.21%) !important;
  --dropdown-background: hsl(270, 10%, 82.5%) !important;
  --dropdown-background-hover: hsl(270, 10%, 77.5%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(37, 100%, 50%), inset 0 0 0 1px hsl(37, 100%, 50%) !important;
  --embed-border-start: 2px solid hsl(269, 65.65%, 63.21%) !important;
  --file-header-background: hsl(270, 10%, 77.5%) !important;
  --file-header-background-focused: hsl(270, 10%, 77.5%) !important;
  --file-header-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(270, 10%, 82.5%) !important;
  --flair-color: hsl(270, 8%, 35%) !important;
  --font-interface: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Neucha !important;
  --font-mermaid: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Space Mono" !important;
  --font-print: Neucha, Arial' !important;
  --font-text: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Neucha !important;
  --footnote-divider-color: hsl(37, 100%, 50%) !important;
  --footnote-id-color: hsl(270, 10%, 20%) !important;
  --footnote-id-color-no-occurrences: hsl(270, 10%, 17.5%) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --graph-line: hsl(37, 100%, 40%) !important;
  --graph-node: hsl(270, 10%, 20%) !important;
  --graph-node-attachment: hsl(25, 85%, 50%) !important;
  --graph-node-focused: hsl(37, 100%, 50%) !important;
  --graph-node-tag: hsla(100, 90%, 33.5%) !important;
  --graph-node-unresolved: hsl(270, 10%, 17.5%) !important;
  --graph-text: hsl(270, 8%, 35%) !important;
  --gray: hsl(270, 10%, 20%) !important;
  --h1-color: hsl(270, 65%, 58.8%) !important;
  --h1-font: "Architects Daughter", Neucha !important;
  --h2-color: hsl(330, 85%, 47.2%) !important;
  --h2-font: "Architects Daughter", Neucha !important;
  --h3-color: hsl(257, 60%, 50%) !important;
  --h3-font: "Architects Daughter", Neucha !important;
  --h4-color: hsla(100, 90%, 33.5%) !important;
  --h4-font: "Architects Daughter", Neucha !important;
  --h5-color: hsl(160, 100%, 36%) !important;
  --h5-font: "Architects Daughter", Neucha !important;
  --h6-color: hsl(190, 100%, 26%) !important;
  --h6-font: "Architects Daughter", Neucha !important;
  --headerFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(270, 10%, 20%) !important;
  --highlight: rgba(255, 157, 0, 0.7) !important;
  --hr-color: hsl(37, 100%, 50%) !important;
  --icon-color: hsl(270, 10%, 20%) !important;
  --icon-color-active: hsl(270, 65%, 58.8%) !important;
  --icon-color-focused: hsl(270, 8%, 35%) !important;
  --icon-color-hover: hsl(270, 10%, 20%) !important;
  --inline-title-color: hsl(270, 65%, 58.8%) !important;
  --inline-title-font: "Architects Daughter", Neucha !important;
  --input-date-separator: hsl(270, 10%, 17.5%) !important;
  --input-placeholder-color: hsl(270, 10%, 17.5%) !important;
  --interactive-accent: hsl(269, 65.65%, 63.21%) !important;
  --interactive-accent-hover: hsl(267, 66.3%, 67.62%) !important;
  --interactive-accent-hsl: 270, 65%, 58.8% !important;
  --interactive-hover: hsl(270, 10%, 77.5%) !important;
  --interactive-normal: hsl(270, 10%, 82.5%) !important;
  --italic-color: hsl(346, 64%, 57%) !important;
  --light: hsl(270, 10%, 77.5%) !important;
  --lightgray: hsl(270, 10%, 77.5%) !important;
  --link-color: hsl(37, 100%, 50%) !important;
  --link-color-hover: hsl(37, 100%, 60%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsla(175, 100%, 40%) !important;
  --link-external-color-hover: hsla(175, 100%, 50%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: hsl(25, 85%, 40%) !important;
  --link-unresolved-color-hover: hsl(25, 85%, 50%) !important;
  --link-unresolved-decoration-color: hsla(270, 65%, 58.8%, 0.5) !important;
  --link-unresolved-opacity: 0.8 !important;
  --list-marker-color: hsl(270, 10%, 17.5%) !important;
  --list-marker-color-collapsed: hsl(270, 65%, 58.8%) !important;
  --list-marker-color-hover: hsl(270, 10%, 20%) !important;
  --menu-background: hsl(270, 10%, 77.5%) !important;
  --menu-border-color: hsl(270, 8%, 50%) !important;
  --metadata-border-color: hsl(37, 100%, 50%) !important;
  --metadata-divider-color: hsl(37, 100%, 50%) !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-input-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(270, 8%, 35%) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(270, 10%, 20%) !important;
  --metadata-label-text-color-hover: hsl(270, 10%, 20%) !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(270, 8%, 35%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(270, 8%, 50%) !important;
  --modal-background: hsl(270, 10%, 77.5%) !important;
  --modal-border-color: hsl(270, 8%, 35%) !important;
  --nav-collapse-icon-color: hsl(270, 10%, 17.5%) !important;
  --nav-collapse-icon-color-collapsed: hsl(270, 10%, 17.5%) !important;
  --nav-heading-color: hsl(270, 8%, 35%) !important;
  --nav-heading-color-collapsed: hsl(270, 10%, 17.5%) !important;
  --nav-heading-color-collapsed-hover: hsl(270, 10%, 20%) !important;
  --nav-heading-color-hover: hsl(270, 8%, 35%) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: hsla(270, 65%, 58.8%, 0.15) !important;
  --nav-item-color: hsl(270, 10%, 20%) !important;
  --nav-item-color-active: hsl(270, 8%, 35%) !important;
  --nav-item-color-highlighted: hsl(267, 66.3%, 67.62%) !important;
  --nav-item-color-hover: hsl(270, 8%, 35%) !important;
  --nav-item-color-selected: hsl(270, 8%, 35%) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl(270, 10%, 17.5%) !important;
  --nav-tag-color-active: hsl(270, 10%, 20%) !important;
  --nav-tag-color-hover: hsl(270, 10%, 20%) !important;
  --pdf-background: hsl(270, 10%, 77.5%) !important;
  --pdf-page-background: hsl(270, 10%, 77.5%) !important;
  --pdf-sidebar-background: hsl(270, 10%, 77.5%) !important;
  --pill-border-color: hsl(37, 100%, 50%) !important;
  --pill-border-color-hover: hsl(270, 8%, 50%) !important;
  --pill-color: hsl(270, 10%, 20%) !important;
  --pill-color-hover: hsl(270, 8%, 35%) !important;
  --pill-color-remove: hsl(270, 10%, 17.5%) !important;
  --pill-color-remove-hover: hsl(270, 65%, 58.8%) !important;
  --prompt-background: hsl(270, 10%, 77.5%) !important;
  --prompt-border-color: hsl(270, 8%, 35%) !important;
  --raised-background: color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent) linear-gradient(hsl(270, 10%, 77.5%), color-mix(in srgb, hsl(270, 10%, 77.5%) 65%, transparent)) !important;
  --ribbon-background: hsl(270, 10%, 77.5%) !important;
  --ribbon-background-collapsed: hsl(270, 10%, 77.5%) !important;
  --search-clear-button-color: hsl(270, 10%, 20%) !important;
  --search-icon-color: hsl(270, 10%, 20%) !important;
  --search-result-background: hsl(270, 10%, 77.5%) !important;
  --secondary: hsl(270, 65%, 58.8%) !important;
  --setting-group-heading-color: hsl(270, 8%, 35%) !important;
  --setting-items-background: hsl(270, 10%, 75%) !important;
  --setting-items-border-color: hsl(37, 100%, 50%) !important;
  --slider-thumb-border-color: hsl(270, 8%, 50%) !important;
  --slider-track-background: hsl(37, 100%, 50%) !important;
  --status-bar-background: hsl(270, 10%, 77.5%) !important;
  --status-bar-border-color: hsl(37, 100%, 50%) !important;
  --status-bar-text-color: hsl(270, 10%, 20%) !important;
  --suggestion-background: hsl(270, 10%, 77.5%) !important;
  --sync-avatar-color-1: hsl(340, 85%, 48.3%) !important;
  --sync-avatar-color-2: hsl(25, 85%, 50%) !important;
  --sync-avatar-color-3: hsl(37, 100%, 50%) !important;
  --sync-avatar-color-4: hsla(100, 90%, 33.5%) !important;
  --sync-avatar-color-5: hsla(175, 100%, 50%) !important;
  --sync-avatar-color-6: hsl(190, 100%, 26%) !important;
  --sync-avatar-color-7: hsl(270, 65%, 58.8%) !important;
  --sync-avatar-color-8: hsl(330, 85%, 47.2%) !important;
  --tab-background-active: hsl(270, 10%, 77.5%) !important;
  --tab-container-background: hsl(270, 10%, 75%) !important;
  --tab-divider-color: hsl(270, 8%, 50%) !important;
  --tab-outline-color: hsl(37, 100%, 50%) !important;
  --tab-switcher-background: hsl(270, 10%, 77.5%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(270, 10%, 77.5%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(270, 65%, 58.8%) !important;
  --tab-text-color: hsl(270, 10%, 17.5%) !important;
  --tab-text-color-active: hsl(270, 10%, 20%) !important;
  --tab-text-color-focused: hsl(270, 10%, 20%) !important;
  --tab-text-color-focused-active: hsl(270, 8%, 35%) !important;
  --tab-text-color-focused-active-current: hsl(270, 8%, 35%) !important;
  --tab-text-color-focused-highlighted: hsl(270, 65%, 58.8%) !important;
  --table-add-button-border-color: hsl(37, 100%, 50%) !important;
  --table-border-color: hsl(37, 100%, 50%) !important;
  --table-drag-handle-background-active: hsl(269, 65.65%, 63.21%) !important;
  --table-drag-handle-color: hsl(270, 10%, 17.5%) !important;
  --table-header-border-color: hsl(37, 100%, 50%) !important;
  --table-header-color: hsl(270, 8%, 35%) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(270, 65%, 58.8%, 0.1) !important;
  --table-selection-border-color: hsl(269, 65.65%, 63.21%) !important;
  --table-white-space: normal !important;
  --tag-background: hsla(270, 65%, 58.8%, 0.1) !important;
  --tag-background-hover: hsla(270, 65%, 58.8%, 0.2) !important;
  --tag-border-color: hsla(270, 65%, 58.8%, 0.15) !important;
  --tag-border-color-hover: hsla(270, 65%, 58.8%, 0.15) !important;
  --tag-color: hsl(270, 65%, 58.8%) !important;
  --tag-color-hover: hsl(270, 65%, 58.8%) !important;
  --tertiary: hsl(267, 66.3%, 67.62%) !important;
  --text-accent: hsl(270, 65%, 58.8%) !important;
  --text-accent-hover: hsl(267, 66.3%, 67.62%) !important;
  --text-error: hsl(340, 85%, 48.3%) !important;
  --text-faint: hsl(270, 10%, 17.5%) !important;
  --text-highlight-bg: rgba(255, 157, 0, 0.7) !important;
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8) !important;
  --text-muted: hsl(270, 10%, 20%) !important;
  --text-normal: hsl(270, 8%, 35%) !important;
  --text-selection: hsla(270, 65%, 58.8%, 0.2) !important;
  --text-success: hsla(100, 90%, 33.5%) !important;
  --text-warning: hsl(25, 85%, 50%) !important;
  --textHighlight: rgba(255, 157, 0, 0.7) !important;
  --titleFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(270, 10%, 77.5%) !important;
  --titlebar-background-focused: hsl(270, 10%, 75%) !important;
  --titlebar-border-color: hsl(37, 100%, 50%) !important;
  --titlebar-text-color: hsl(270, 10%, 20%) !important;
  --titlebar-text-color-focused: hsl(270, 8%, 35%) !important;
  --titlebar-text-color-highlighted: hsl(267, 66.3%, 67.62%) !important;
  --vault-name-color: hsl(37, 100%, 50%) !important;
  --vault-profile-color: hsl(270, 8%, 35%) !important;
  --vault-profile-color-hover: hsl(270, 8%, 35%) !important;
  --wyrd-base-00: hsl(270, 10%, 12.5%) !important;
  --wyrd-base-10: hsl(270, 10%, 15%) !important;
  --wyrd-base-100: hsl(270, 10%, 82.5%) !important;
  --wyrd-base-20: hsl(270, 10%, 17.5%) !important;
  --wyrd-base-30: hsl(270, 10%, 20%) !important;
  --wyrd-base-40: hsl(270, 8%, 35%) !important;
  --wyrd-base-50: hsl(270, 8%, 50%) !important;
  --wyrd-base-50-rgb: 128, 117, 138 !important;
  --wyrd-base-60: hsl(270, 13%, 65%) !important;
  --wyrd-base-70: hsl(270, 10%, 72.5%) !important;
  --wyrd-base-80: hsl(270, 10%, 75%) !important;
  --wyrd-base-90: hsl(270, 10%, 77.5%) !important;
  --wyrd-base-95: hsl(270, 10%, 80%) !important;
  --wyrd-blue: hsl(190, 100%, 26%) !important;
  --wyrd-blue-dark: hsl(190, 100%, 16%) !important;
  --wyrd-blue-light: hsl(190, 100%, 36%) !important;
  --wyrd-blue-rgb: 0, 153, 184 !important;
  --wyrd-cyan: hsla(175, 100%, 50%) !important;
  --wyrd-cyan-dark: hsla(175, 100%, 40%) !important;
  --wyrd-cyan-light: hsla(175, 100%, 60%) !important;
  --wyrd-cyan-rgb: 0, 255, 234 !important;
  --wyrd-green: hsla(100, 90%, 33.5%) !important;
  --wyrd-green-dark: hsla(100, 90%, 23.5%) !important;
  --wyrd-green-light: hsla(100, 90%, 43.5%) !important;
  --wyrd-green-rgb: 51, 138, 7 !important;
  --wyrd-indigo: hsl(257, 60%, 50%) !important;
  --wyrd-indigo-dark: hsl(257, 60%, 40%) !important;
  --wyrd-indigo-light: hsl(257, 60%, 60%) !important;
  --wyrd-indigo-rgb: 94, 51, 204 !important;
  --wyrd-orange: hsl(25, 85%, 50%) !important;
  --wyrd-orange-dark: hsl(25, 85%, 40%) !important;
  --wyrd-orange-light: hsl(25, 85%, 60%) !important;
  --wyrd-orange-rgb: 236, 109, 19 !important;
  --wyrd-pink: hsl(330, 85%, 47.2%) !important;
  --wyrd-pink-dark: hsl(330, 85%, 37.2%) !important;
  --wyrd-pink-light: hsl(330, 85%, 57.2%) !important;
  --wyrd-pink-rgb: 223, 18, 120 !important;
  --wyrd-purple: hsl(270, 65%, 58.8%) !important;
  --wyrd-purple-dark: hsl(270, 65%, 48.8%) !important;
  --wyrd-purple-light: hsl(270, 65%, 68.8%) !important;
  --wyrd-purple-rgb: 150, 82, 218 !important;
  --wyrd-red: hsl(340, 85%, 48.3%) !important;
  --wyrd-red-dark: hsl(340, 85%, 38.3%) !important;
  --wyrd-red-light: hsl(340, 85%, 58.3%) !important;
  --wyrd-red-rgb: 228, 18, 88 !important;
  --wyrd-strike-color: hsl(270, 13%, 65%) !important;
  --wyrd-strike-color-hover: hsl(270, 10%, 17.5%) !important;
  --wyrd-teal: hsl(160, 100%, 36%) !important;
  --wyrd-teal-dark: hsl(160, 100%, 26%) !important;
  --wyrd-teal-light: hsl(160, 100%, 46%) !important;
  --wyrd-teal-rgb: 0, 184, 122 !important;
  --wyrd-yellow: hsl(37, 100%, 50%) !important;
  --wyrd-yellow-dark: hsl(37, 100%, 40%) !important;
  --wyrd-yellow-dark-rgb: 204, 126, 0 !important;
  --wyrd-yellow-light: hsl(37, 100%, 60%) !important;
  --wyrd-yellow-light-rgb: 255, 177, 51 !important;
  --wyrd-yellow-rgb: 255, 157, 0 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(191, 185, 198);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(198, 192, 203);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(198, 192, 203);
  border-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(150, 82, 218, 0.1);
  color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(198, 192, 203);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(191, 185, 198);
  border-left-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(198, 192, 203);
  color: rgb(89, 82, 96);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 157, 0, 0.7);
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
  transition: background-color 0.25s ease-in-out;
}

html[saved-theme="light"] body del {
  color: rgb(166, 154, 177);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 154, 177) none 0px;
  text-decoration-color: rgb(166, 154, 177);
  transition: color 0.25s ease-in-out;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(45, 40, 49);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(159, 100, 223);
  border-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body p {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 46, 56) none 0px;
  text-decoration-color: rgb(51, 46, 56);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 204, 187);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 187) none 0px;
  text-decoration-color: rgb(0, 204, 187);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 157, 0);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 157, 0) none 0px;
  text-decoration-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(189, 88, 15);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 88, 15) none 0px;
  text-decoration: rgba(150, 82, 218, 0.5);
  text-decoration-color: rgba(150, 82, 218, 0.5);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body dt {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ol > li {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ul > li {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(223, 18, 120);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body table {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 230.281px;
  margin-right: 230.281px;
  width: 201.438px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
  font-weight: 700;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
  font-family: "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body figcaption {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(159, 100, 223);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
  color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(150, 82, 218);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 153, 184;
  background-color: rgba(0, 153, 184, 0.1);
  border-bottom-color: rgba(0, 153, 184, 0.25);
  border-left-color: rgba(0, 153, 184, 0.25);
  border-right-color: rgba(0, 153, 184, 0.25);
  border-top-color: rgba(0, 153, 184, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 94, 51, 204;
  background-color: rgba(94, 51, 204, 0.1);
  border-bottom-color: rgba(94, 51, 204, 0.25);
  border-left-color: rgba(94, 51, 204, 0.25);
  border-right-color: rgba(94, 51, 204, 0.25);
  border-top-color: rgba(94, 51, 204, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 228, 18, 88;
  background-color: rgba(228, 18, 88, 0.1);
  border-bottom-color: rgba(228, 18, 88, 0.25);
  border-left-color: rgba(228, 18, 88, 0.25);
  border-right-color: rgba(228, 18, 88, 0.25);
  border-top-color: rgba(228, 18, 88, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 236, 109, 19;
  background-color: rgba(236, 109, 19, 0.1);
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 150, 82, 218;
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 0, 184, 122;
  background-color: rgba(0, 184, 122, 0.1);
  border-bottom-color: rgba(0, 184, 122, 0.25);
  border-left-color: rgba(0, 184, 122, 0.25);
  border-right-color: rgba(0, 184, 122, 0.25);
  border-top-color: rgba(0, 184, 122, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 128, 117, 138;
  background-color: rgba(128, 117, 138, 0.1);
  border-bottom-color: rgba(128, 117, 138, 0.25);
  border-left-color: rgba(128, 117, 138, 0.25);
  border-right-color: rgba(128, 117, 138, 0.25);
  border-top-color: rgba(128, 117, 138, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 51, 138, 7;
  background-color: rgba(51, 138, 7, 0.1);
  border-bottom-color: rgba(51, 138, 7, 0.25);
  border-left-color: rgba(51, 138, 7, 0.25);
  border-right-color: rgba(51, 138, 7, 0.25);
  border-top-color: rgba(51, 138, 7, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 223, 18, 120;
  background-color: rgba(223, 18, 120, 0.1);
  border-bottom-color: rgba(223, 18, 120, 0.25);
  border-left-color: rgba(223, 18, 120, 0.25);
  border-right-color: rgba(223, 18, 120, 0.25);
  border-top-color: rgba(223, 18, 120, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 236, 109, 19;
  background-color: rgba(236, 109, 19, 0.1);
  border-bottom-color: rgba(236, 109, 19, 0.25);
  border-left-color: rgba(236, 109, 19, 0.25);
  border-right-color: rgba(236, 109, 19, 0.25);
  border-top-color: rgba(236, 109, 19, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 157, 0;
  background-color: rgba(255, 157, 0, 0.1);
  border-bottom-color: rgba(255, 157, 0, 0.25);
  border-left-color: rgba(255, 157, 0, 0.25);
  border-right-color: rgba(255, 157, 0, 0.25);
  border-top-color: rgba(255, 157, 0, 0.25);
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
  background-color: rgb(210, 206, 215);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(198, 192, 203);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(198, 192, 203);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(150, 82, 218);
}

html[saved-theme="light"] body h1 {
  color: rgb(150, 82, 218);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="light"] body h2 {
  color: rgb(223, 18, 120);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(150, 82, 218);
  font-family: "Architects Daughter", Neucha;
}

html[saved-theme="light"] body h3 {
  color: rgb(94, 51, 204);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="light"] body h4 {
  color: rgb(60, 162, 9);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 184, 122);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 110, 133);
  font-family: "Architects Daughter", Neucha;
  text-shadow: rgb(32, 29, 35) 0px 0px 4px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 150, 82, 218;
  border-bottom-color: rgba(150, 82, 218, 0.25);
  border-left-color: rgba(150, 82, 218, 0.25);
  border-right-color: rgba(150, 82, 218, 0.25);
  border-top-color: rgba(150, 82, 218, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(198, 192, 203) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(198, 192, 203);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(89, 82, 96);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(198, 192, 203);
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(51, 46, 56);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(255, 157, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(255, 157, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(51, 46, 56);
  stroke: rgb(51, 46, 56);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(45, 40, 49);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(198, 192, 203);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 46, 56);
  border-left-color: rgb(51, 46, 56);
  border-right-color: rgb(51, 46, 56);
  border-top-color: rgb(51, 46, 56);
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(191, 185, 198);
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
  color: rgb(89, 82, 96);
  font-family: "??", "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body sub {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body summary {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body sup {
  color: rgb(89, 82, 96);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(150, 82, 218, 0.1);
  border-bottom-color: rgba(150, 82, 218, 0.15);
  border-left-color: rgba(150, 82, 218, 0.15);
  border-right-color: rgba(150, 82, 218, 0.15);
  border-top-color: rgba(150, 82, 218, 0.15);
  color: rgb(150, 82, 218);
}`,
  },
};
