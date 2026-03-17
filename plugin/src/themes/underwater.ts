import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "underwater",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lexend"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 193 !important;
  --accent-l: 75% !important;
  --accent-s: 46% !important;
  --background: #191724 !important;
  --background-modifier-active-hover: hsla(193, 46%, 75%, 0.1) !important;
  --background-modifier-border: rgba(64, 61, 82, 0.6) !important;
  --background-modifier-border-focus: rgba(64, 61, 82, 0.6) !important;
  --background-modifier-border-hover: rgb(64, 61, 82) !important;
  --background-modifier-error: rgb(235, 188, 186) !important;
  --background-modifier-error-hover: rgb(235, 188, 186) !important;
  --background-modifier-error-rgb: 235, 188, 186 !important;
  --background-modifier-form-field: #26233a !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-success: rgb(156, 207, 216) !important;
  --background-modifier-success-rgb: 156, 207, 216 !important;
  --background-primary: rgb(31, 29, 46) !important;
  --background-primary-alt: #26233a !important;
  --background-secondary: rgb(31, 29, 46) !important;
  --background-secondary-alt: #26233a !important;
  --base: #191724 !important;
  --bases-cards-background: #191724 !important;
  --bases-cards-cover-background: #26233a !important;
  --bases-cards-shadow: 0 0 0 1px rgba(64, 61, 82, 0.6) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(64, 61, 82) !important;
  --bases-embed-border-color: rgb(64, 61, 82) !important;
  --bases-embed-border-radius: 11px !important;
  --bases-group-heading-property-color: #6e6a86 !important;
  --bases-header-border-width: 0px !important;
  --bases-table-border-color: #524f67 !important;
  --bases-table-cell-background-active: rgb(31, 29, 46) !important;
  --bases-table-cell-background-disabled: #26233a !important;
  --bases-table-cell-background-selected: hsla(193, 46%, 75%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(64, 61, 82, 0.6) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 188, 186) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-container-border-radius: 10px !important;
  --bases-table-group-background: transparent !important;
  --bases-table-header-background: #26233a !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: #e0def4 !important;
  --bases-table-row-border-width: 0px !important;
  --bases-table-summary-background: rgb(31, 29, 46) !important;
  --bases-toolbar-label-display: none !important;
  --blockquote-border-color: rgb(246, 193, 119) !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, rgba(64, 61, 82, 0.5) 65%, transparent) linear-gradient(rgba(64, 61, 82, 0.5), color-mix(in srgb, rgba(64, 61, 82, 0.5) 65%, transparent)) !important;
  --bodyFont: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(235, 111, 146) !important;
  --bold-weight: 600 !important;
  --button-radius: 7px !important;
  --callout-bug: 235, 188, 186;
  --callout-default: 49, 116, 143;
  --callout-error: 235, 188, 186;
  --callout-example: 196, 167, 231;
  --callout-fail: 235, 188, 186;
  --callout-important: 156, 207, 216;
  --callout-info: 49, 116, 143;
  --callout-padding: 12px 24px;
  --callout-question: 246, 193, 119;
  --callout-radius: 13px;
  --callout-success: 156, 207, 216;
  --callout-summary: 156, 207, 216;
  --callout-tip: 156, 207, 216;
  --callout-title-size: 1rem;
  --callout-title-weight: 400;
  --callout-todo: 49, 116, 143;
  --callout-warning: 246, 193, 119;
  --canvas-background: rgb(31, 29, 46) !important;
  --canvas-card-label-color: #6e6a86 !important;
  --canvas-color-1: 49, 116, 143 !important;
  --canvas-color-2: 156, 207, 216 !important;
  --canvas-color-3: 196, 167, 231 !important;
  --canvas-color-4: 235, 111, 146 !important;
  --canvas-color-5: 235, 188, 186 !important;
  --canvas-color-6: 246, 193, 119 !important;
  --canvas-dot-pattern: #6e6a86 !important;
  --caret-color: rgb(235, 111, 146) !important;
  --checkbox-border: 5px !important;
  --checkbox-border-color: rgb(235, 188, 186) !important;
  --checkbox-border-color-hover: rgb(235, 111, 146) !important;
  --checkbox-color: rgb(49, 116, 143) !important;
  --checkbox-color-hover: rgb(156, 207, 216) !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 5px !important;
  --checklist-done-color: #6e6a86 !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #191724 !important;
  --code-border-color: rgba(64, 61, 82, 0.6) !important;
  --code-comment: #6e6a86 !important;
  --code-function: rgb(156, 207, 216) !important;
  --code-important: rgb(235, 188, 186) !important;
  --code-keyword: rgb(235, 188, 186) !important;
  --code-normal: #908caa !important;
  --code-operator: rgb(246, 193, 119) !important;
  --code-property: rgb(49, 116, 143) !important;
  --code-punctuation: rgb(235, 111, 146) !important;
  --code-string: rgb(246, 193, 119) !important;
  --code-tag: rgb(156, 207, 216) !important;
  --code-value: rgb(196, 167, 231) !important;
  --codeFont: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #6e6a86 !important;
  --collapse-icon-color-collapsed: rgb(235, 188, 186) !important;
  --color-accent: hsl(193, 46%, 75%) !important;
  --color-accent-1: rgb(235, 188, 186) !important;
  --color-accent-2: rgb(156, 207, 216) !important;
  --color-accent-hsl: 193, 46%, 75% !important;
  --color-base-00: #191724 !important;
  --color-base-05: #191724 !important;
  --color-base-10: rgb(31, 29, 46) !important;
  --color-base-100: #e0def4 !important;
  --color-base-20: rgb(31, 29, 46) !important;
  --color-base-25: #26233a !important;
  --color-base-30: #524f67 !important;
  --color-base-35: rgba(64, 61, 82, 0.6) !important;
  --color-base-40: rgb(64, 61, 82) !important;
  --color-base-50: #21202e !important;
  --color-base-60: #6e6a86 !important;
  --color-base-70: #908caa !important;
  --color-blue: rgb(49, 116, 143) !important;
  --color-blue-rgb: 49, 116, 143 !important;
  --color-cyan: rgb(156, 207, 216) !important;
  --color-cyan-rgb: 156, 207, 216 !important;
  --color-green: rgb(156, 207, 216) !important;
  --color-green-rgb: 156, 207, 216 !important;
  --color-orange: rgb(246, 193, 119) !important;
  --color-orange-rgb: 246, 193, 119 !important;
  --color-pink: rgb(235, 111, 146) !important;
  --color-pink-rgb: 235, 111, 146 !important;
  --color-purple: rgb(196, 167, 231) !important;
  --color-purple-rgb: 196, 167, 231 !important;
  --color-red: rgb(235, 188, 186) !important;
  --color-red-rgb: 235, 188, 186 !important;
  --color-yellow: rgb(246, 193, 119) !important;
  --color-yellow-rgb: 246, 193, 119 !important;
  --cursor: pointer !important;
  --dark: #e0def4 !important;
  --darkgray: #e0def4 !important;
  --divider-color: rgba(64, 61, 82, 0.6) !important;
  --divider-color-hover: rgb(235, 188, 186) !important;
  --divider-width: 0px !important;
  --dropdown-background: rgba(64, 61, 82, 0.5) !important;
  --dropdown-background-hover: rgb(64, 61, 82) !important;
  --embed-block-shadow-hover: transparent !important;
  --embed-border-start: 2px solid rgb(235, 188, 186) !important;
  --file-header-background: rgb(31, 29, 46) !important;
  --file-header-background-focused: rgb(31, 29, 46) !important;
  --file-header-border: 1px dashed rgb(64, 61, 82) !important;
  --file-header-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgba(64, 61, 82, 0.5) !important;
  --flair-color: #e0def4 !important;
  --foam: rgb(156, 207, 216) !important;
  --foam-rgb: 156, 207, 216 !important;
  --font-interface: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif !important;
  --font-mermaid: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Arial' !important;
  --font-text: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif !important;
  --footnote-divider-color: rgba(64, 61, 82, 0.6) !important;
  --footnote-id-color: #6e6a86 !important;
  --footnote-id-color-no-occurrences: #6e6a86 !important;
  --gold: rgb(246, 193, 119) !important;
  --gold-rgb: 246, 193, 119 !important;
  --graph-line: rgb(64, 61, 82) !important;
  --graph-node: #e0def4 !important;
  --graph-node-attachment: rgb(235, 188, 186) !important;
  --graph-node-focused: rgb(235, 188, 186) !important;
  --graph-node-tag: rgb(156, 207, 216) !important;
  --graph-node-unresolved: #6e6a86 !important;
  --graph-text: #e0def4 !important;
  --gray: #6e6a86 !important;
  --h1-color: rgb(235, 111, 146) !important;
  --h1-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h1-size: 1.45em !important;
  --h2-color: rgb(235, 188, 186) !important;
  --h2-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h2-size: 1.3em !important;
  --h3-color: rgb(246, 193, 119) !important;
  --h3-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h3-size: 1.15em !important;
  --h4-color: rgb(49, 116, 143) !important;
  --h4-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h4-size: 1.05em !important;
  --h5-color: rgb(196, 167, 231) !important;
  --h5-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h5-size: 1em !important;
  --h6-color: #e0def4 !important;
  --h6-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h6-variant: small-caps !important;
  --headerFont: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #6e6a86 !important;
  --heading-spacing: 2.5rem !important;
  --headings-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --highlight: rgba(246, 193, 119, 0.2) !important;
  --highlight-high: #524f67 !important;
  --highlight-low: #21202e !important;
  --highlight-med: rgb(64, 61, 82) !important;
  --highlight-med-rgb: 64, 61, 82 !important;
  --hr-color: rgba(64, 61, 82, 0.6) !important;
  --icon-color: #e0def4 !important;
  --icon-color-active: rgb(235, 188, 186) !important;
  --icon-color-focused: #e0def4 !important;
  --icon-color-hover: #6e6a86 !important;
  --inline-title-color: rgb(156, 207, 216) !important;
  --inline-title-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --inline-title-margin-bottom: 1.2em !important;
  --inline-title-size: 1.8em !important;
  --input-date-separator: #6e6a86 !important;
  --input-placeholder-color: #6e6a86 !important;
  --interactive-accent: rgb(235, 188, 186) !important;
  --interactive-accent-hover: rgba(235, 188, 186, 0.8) !important;
  --interactive-accent-hsl: 193, 46%, 75% !important;
  --interactive-hover: rgb(64, 61, 82) !important;
  --interactive-normal: rgba(64, 61, 82, 0.5) !important;
  --iris: rgb(196, 167, 231) !important;
  --iris-rgb: 196, 167, 231 !important;
  --italic-color: rgb(156, 207, 216) !important;
  --latex-color: rgb(246, 193, 119) !important;
  --light: rgb(31, 29, 46) !important;
  --lightgray: rgb(31, 29, 46) !important;
  --link-color: rgb(235, 188, 186) !important;
  --link-color-hover: rgba(235, 188, 186, 0.6) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(49, 116, 143) !important;
  --link-external-color-hover: rgba(49, 116, 143, 0.6) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #908caa !important;
  --link-unresolved-decoration-color: hsla(193, 46%, 75%, 0.3) !important;
  --list-bullet-size: 0.35em !important;
  --list-indent: 2.25em !important;
  --list-indent-editing: 0 !important;
  --list-marker-color: #6e6a86 !important;
  --list-marker-color-collapsed: rgb(235, 188, 186) !important;
  --list-marker-color-hover: #6e6a86 !important;
  --love: rgb(235, 111, 146) !important;
  --love-rgb: 235, 111, 146 !important;
  --menu-background: rgb(31, 29, 46) !important;
  --menu-border-color: rgb(64, 61, 82) !important;
  --metadata-border-color: rgba(64, 61, 82, 0.6) !important;
  --metadata-display-reading: none !important;
  --metadata-divider-color: rgba(64, 61, 82, 0.6) !important;
  --metadata-input-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #e0def4 !important;
  --metadata-label-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #6e6a86 !important;
  --metadata-label-text-color-hover: #6e6a86 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(64, 61, 82, 0.6) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(64, 61, 82) !important;
  --mk-ui-text-secondary: #e0def4 !important;
  --modal-background: rgb(31, 29, 46) !important;
  --modal-border-color: rgb(64, 61, 82) !important;
  --muted: #6e6a86 !important;
  --nav-collapse-icon-color: rgb(49, 116, 143) !important;
  --nav-collapse-icon-color-collapsed: #6e6a86 !important;
  --nav-heading-color: rgb(49, 116, 143) !important;
  --nav-heading-color-collapsed: rgb(49, 116, 143) !important;
  --nav-heading-color-collapsed-hover: #6e6a86 !important;
  --nav-heading-color-hover: #e0def4 !important;
  --nav-item-background-active: rgb(156, 207, 216) !important;
  --nav-item-background-selected: hsla(193, 46%, 75%, 0.15) !important;
  --nav-item-color: #e0def4 !important;
  --nav-item-color-active: rgb(31, 29, 46) !important;
  --nav-item-color-highlighted: rgb(235, 188, 186) !important;
  --nav-item-color-hover: #908caa !important;
  --nav-item-color-selected: #e0def4 !important;
  --nav-tag-color: #6e6a86 !important;
  --nav-tag-color-active: #6e6a86 !important;
  --nav-tag-color-hover: #6e6a86 !important;
  --overlay: #26233a !important;
  --pdf-background: rgb(31, 29, 46) !important;
  --pdf-page-background: rgb(31, 29, 46) !important;
  --pdf-shadow: 0 0 0 1px rgba(64, 61, 82, 0.6) !important;
  --pdf-sidebar-background: rgb(31, 29, 46) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(64, 61, 82, 0.6) !important;
  --pill-border-color: rgba(64, 61, 82, 0.6) !important;
  --pill-border-color-hover: rgb(64, 61, 82) !important;
  --pill-color: #6e6a86 !important;
  --pill-color-hover: #e0def4 !important;
  --pill-color-remove: #6e6a86 !important;
  --pill-color-remove-hover: rgb(235, 188, 186) !important;
  --pine: rgb(49, 116, 143) !important;
  --pine-rgb: 49, 116, 143 !important;
  --pomodoro-timer-color: rgb(64, 61, 82, 0.5) !important;
  --pomodoro-timer-dot-color: rgb(235, 111, 146) !important;
  --prompt-background: rgb(31, 29, 46) !important;
  --prompt-border-color: rgb(64, 61, 82) !important;
  --raised-background: color-mix(in srgb, rgba(64, 61, 82, 0.5) 65%, transparent) linear-gradient(rgba(64, 61, 82, 0.5), color-mix(in srgb, rgba(64, 61, 82, 0.5) 65%, transparent)) !important;
  --ribbon-background: rgb(31, 29, 46) !important;
  --ribbon-background-collapsed: rgb(31, 29, 46) !important;
  --rose: rgb(235, 188, 186) !important;
  --rose-rgb: 235, 188, 186 !important;
  --scrollbar-active-thumb-bg: #524f67 !important;
  --scrollbar-thumb-bg: rgb(64, 61, 82) !important;
  --search-clear-button-color: #6e6a86 !important;
  --search-icon-color: #6e6a86 !important;
  --search-result-background: #191724 !important;
  --search-result-background-hover: rgb(235, 188, 186) !important;
  --secondary: rgb(235, 188, 186) !important;
  --setting-group-heading-color: #e0def4 !important;
  --setting-items-background: #26233a !important;
  --setting-items-border-color: rgba(64, 61, 82, 0.6) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: rgb(64, 61, 82) !important;
  --slider-track-background: rgb(64, 61, 82) !important;
  --status-bar-background: #191724 !important;
  --status-bar-border-color: rgba(64, 61, 82, 0.6) !important;
  --status-bar-font-size: 0.733em !important;
  --status-bar-radius: 12px 0 0 12px !important;
  --status-bar-text-color: #6e6a86 !important;
  --subtle: #908caa !important;
  --suggestion-background: rgb(31, 29, 46) !important;
  --surface: rgb(31, 29, 46) !important;
  --surface-rgb: 31, 29, 46 !important;
  --sync-avatar-color-1: rgb(235, 188, 186) !important;
  --sync-avatar-color-2: rgb(246, 193, 119) !important;
  --sync-avatar-color-3: rgb(246, 193, 119) !important;
  --sync-avatar-color-4: rgb(156, 207, 216) !important;
  --sync-avatar-color-5: rgb(156, 207, 216) !important;
  --sync-avatar-color-6: rgb(49, 116, 143) !important;
  --sync-avatar-color-7: rgb(196, 167, 231) !important;
  --sync-avatar-color-8: rgb(235, 111, 146) !important;
  --tab-background-active: rgb(31, 29, 46) !important;
  --tab-container-background: transparent !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-img: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8" standalone="no"%3F><!-- Created with Inkscape (http://www.inkscape.org/) --><svg version="1.1" id="svg1" xml:space="preserve" width="93.058769" height="115.69744" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><sodipodi:namedview id="namedview1" pagecolor="%23ffffff" bordercolor="%23000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="%23d1d1d1" /><inkscape:clipboard style="font-variation-settings:normalopacity:1vector-effect:nonefill:%2300ff00fill-opacity:1stroke-width:3.77953stroke-linecap:roundstroke-linejoin:roundstroke-miterlimit:4stroke-dasharray:nonestroke-dashoffset:0stroke-opacity:1-inkscape-stroke:nonestop-color:%23000000stop-opacity:1" min="69.195827,-2.7355726" max="162.2546,112.96187" geom-min="69.195827,-2.7355726" geom-max="162.2546,112.96187" /><g id="g1" transform="translate(-69.195827,2.7355726)"><path d="m 122.01098,-2.7355726 c -1.43622,0.00378 -2.86866,0.037795 -4.28599,0.1133859 a 72.264614,72.264614 0 0 0 -10.80189,1.3266151 c -0.10205,0.018898 -0.21166,0.018898 -0.31371,0.037795 a 1.9842532,1.9842532 0 0 0 -0.034,0.015118 C 85.515837,1.433249 69.195827,19.431371 69.195827,41.212802 c 0.02268,18.701115 12.075598,30.822067 26.948049,32.035297 a 29.041909,29.041909 0 0 0 8.666464,-0.502678 c 2.30551,-0.461103 4.33134,-0.982678 7.7178,-1.171654 2.28661,-0.124725 5.08347,1.583623 6.67465,3.892916 0.7937,1.160315 1.26992,2.418899 1.34929,3.480947 0.0756,1.065827 -0.15874,1.904883 -0.86929,2.694805 -0.20032,0.222992 -1.24725,0.808819 -2.60032,1.273701 -1.36063,0.464882 -2.97071,0.903308 -4.45228,1.519371 -3.92694,1.644096 -9.0671,2.774175 -12.854186,5.336697 -2.502049,1.68945 -4.285987,3.635908 -5.38583,5.574806 -1.096064,1.942679 -1.602521,3.919373 -0.990237,5.78646 0.56315,1.71969 2.082521,2.85733 3.522522,3.2504 1.436221,0.38929 2.857325,0.30992 4.195281,0.18141 1.33795,-0.13228 2.60787,-0.34015 3.53764,-0.41574 0.7748,-0.0643 0.94488,0.034 0.84283,-0.0869 0.81638,1.19055 1.23213,2.52094 1.79906,4.07811 0.61228,1.68945 1.84441,3.78709 4.30866,4.55433 a 1.9842532,1.9842532 0 0 0 0.28725,0.0643 c 3.75685,0.57826 6.91276,-0.11339 9.35055,-1.67434 2.4378,-1.56094 4.11213,-3.87024 5.44253,-6.31559 2.61921,-4.811343 4.1726,-10.318118 6.37229,-13.247254 8.62866,-4.550554 15.12945,-9.346778 19.31339,-15.979853 4.14615,0.771024 7.25292,1.080946 7.25292,1.080946 a 1.9842532,1.9842532 0 0 0 2.16189,-1.738584 c 0,0 0.62363,-5.230869 0.43087,-11.327251 -0.18142,-5.858272 -0.86173,-12.585835 -4.40315,-16.758436 -1.06205,-9.316542 -4.49008,-19.14332 -8.95749,-26.842222 3.84756,-5.537012 5.63906,-11.5162284 5.21197,-17.703319 a 1.9842532,1.9842532 0 0 0 -1.64031,-1.8179539 c -9.94773,-1.7159066 -20.36033,-3.1974824 -30.41766,-3.1672461 z m 6.03969,4.2633099 c 7.2189,0.377953 14.60032,1.3681898 21.87214,2.5851985 -0.008,4.0856719 -1.24725,8.0163832 -3.59056,11.8828422 A 38.75908,38.75908 0 0 0 141.9858,10.74979 l -0.0265,-0.04535 a 1.9842532,1.9842532 0 0 0 -0.0151,-0.0076 1.9842532,1.9842532 0 0 0 -0.58205,-0.347717 l 0.27969,-0.0189 A 42.803177,42.803177 0 0 0 128.05067,1.5315168 Z m -17.6882,1.0658274 c 6.34961,0.00756 11.94331,0.9637802 16.8378,2.8875609 a 38.808214,38.808214 0 0 1 11.69009,7.7102414 1.9842532,1.9842532 0 0 0 0.0113,0 1.9842532,1.9842532 0 0 0 0.0227,0.03024 23.07781,23.07781 0 0 1 1.47779,1.579844 c 0.21166,0.245669 0.42709,0.483779 0.63496,0.744567 l 0.11339,0.136063 c 4.97764,6.198429 9.67182,16.705523 11.73922,26.838443 a 36.540496,36.540496 0 0 0 -11.52001,-5.238429 h -0.0151 a 29.27246,29.27246 0 0 0 -2.31685,-0.491339 h -0.008 a 23.448204,23.448204 0 0 0 -4.61858,-0.332598 c -0.75591,0.02268 -1.50048,0.09071 -2.22993,0.207874 h -0.008 l -0.27591,0.05291 c -0.63496,0.113386 -1.2548,0.253229 -1.85953,0.442205 a 12.018905,12.018905 0 0 0 -4.67906,2.683466 11.625834,11.625834 0 0 0 -0.78614,0.812599 9.5735495,9.5735495 0 0 0 -1.13386,1.579844 10.77166,10.77166 0 0 0 -1.36063,5.404728 c 0.008,2.483151 0.69921,4.996538 1.73858,7.434335 a 31.891674,31.891674 0 0 0 1.79906,3.590554 41.744909,41.744909 0 0 0 3.34488,4.954964 c 1.19434,1.534489 2.4378,2.929135 3.63591,4.123467 0.45355,0.453543 0.95244,0.88063 1.48158,1.28504 l 0.0227,0.0189 c 3.71905,2.823309 9.05953,4.437168 13.9389,5.582366 -3.77197,5.348034 -9.33544,9.550872 -17.36316,13.719693 a 1.9842532,1.9842532 0 0 0 -0.65008,0.540473 c -3.12567,4.006302 -4.51276,9.73229 -6.82205,13.984254 -1.15654,2.1241 -2.47559,3.82867 -4.10079,4.87182 -1.57606,1.00913 -3.52252,1.48157 -6.37607,1.09228 -1.03181,-0.34393 -1.22078,-0.73323 -1.70079,-2.05228 -0.49133,-1.36063 -0.97511,-3.47717 -2.5474,-5.503 a 1.9842532,1.9842532 0 0 0 -0.32882,-0.32882 c -1.34929,-1.084719 -2.60787,-0.85795 -3.81354,-0.76346 -1.19811,0.0983 -2.44914,0.30992 -3.6019,0.42331 -1.152752,0.11338 -2.192123,0.0945 -2.77417,-0.0643 -0.582048,-0.15496 -0.634961,-0.17386 -0.793702,-0.653852 -0.07559,-0.249449 -0.06425,-1.285041 0.680316,-2.596538 0.737008,-1.307717 2.101418,-2.849765 4.149926,-4.236853 2.75905,-1.870867 7.77449,-3.129451 12.1663,-4.966302 1.11119,-0.464882 2.67591,-0.903308 4.20284,-1.424883 1.52693,-0.525355 3.06142,-1.04315 4.26331,-2.373545 a 7.55906,7.55906 0 0 0 1.87843,-5.639058 c -0.14362,-1.950238 -0.91087,-3.805987 -2.03339,-5.438744 -2.24504,-3.265514 -5.99055,-5.843154 -10.16693,-5.612602 -3.71528,0.204094 -6.1115,0.816378 -8.2734,1.247245 -2.15811,0.427087 -4.119683,0.71811 -7.570394,0.434646 C 83.501348,68.232662 73.183231,58.254703 73.168113,41.209023 c 0,-19.884108 14.891348,-36.2343544 34.148057,-38.5474267 1.03181,-0.045354 2.0485,-0.068032 3.04252,-0.068032 z M 93.05222,21.513892 c -7.018587,0 -12.449772,6.478114 -12.449772,14.090088 0,7.611973 5.431185,14.090088 12.453552,14.090088 7.01859,0 12.44977,-6.478115 12.44977,-14.090088 0,-7.611974 -5.43118,-14.090088 -12.44977,-14.090088 z m 0,3.968506 c 4.542995,0 8.48505,4.361578 8.48505,10.121582 0,5.760003 -3.942055,10.121581 -8.48127,10.121581 -0.207874,0 -0.408189,-0.01134 -0.612284,-0.03024 a 5.4160665,5.7146494 0 0 0 2.165671,-4.550554 5.4160665,5.7146494 0 0 0 -5.416067,-5.71465 5.4160665,5.7146494 0 0 0 -4.410711,2.422679 12.132291,12.132291 0 0 1 -0.211654,-2.24882 c 0,-5.760004 3.945829,-10.121582 8.485045,-10.121582 z m 41.61263,14.936703 c 1.17921,-0.03024 2.43401,0.07181 3.73417,0.291024 0.64252,0.109606 1.29638,0.249449 1.9578,0.415748 0.0113,0 0.0189,0 0.0265,0.0076 h 0.0151 a 28.278443,28.278443 0 0 1 4.0063,1.337954 34.665849,34.665849 0 0 1 5.64284,2.951813 c 0.57449,0.377953 1.13008,0.759685 1.65544,1.156536 0.52913,0.393071 1.02047,0.793701 1.48913,1.20189 0.46488,0.40819 0.89953,0.816379 1.29638,1.232127 l 0.0151,0.01512 c 2.34331,2.452915 3.56787,8.893234 3.74929,14.653238 0.14362,4.633704 -0.18897,7.211343 -0.32882,8.643785 -1.18299,-0.136063 -3.06898,-0.31748 -6.25512,-0.96 -5.15906,-1.04693 -11.50111,-2.985829 -14.94426,-5.355594 l -0.0718,-0.04536 a 11.346149,11.346149 0 0 1 -0.51024,-0.385512 c -0.0605,-0.04535 -0.12472,-0.09071 -0.17764,-0.136063 a 8.0730761,8.0730761 0 0 1 -0.56693,-0.506457 37.587426,37.587426 0 0 1 -2.19212,-2.392442 39.96853,39.96853 0 0 1 -5.00032,-7.445675 c -0.26457,-0.529134 -0.51402,-1.054488 -0.73701,-1.579843 -0.89575,-2.097639 -1.40976,-4.146144 -1.41732,-5.888508 0,-1.307717 0.24189,-2.418899 0.8126,-3.401577 0.18897,-0.328819 0.41574,-0.64252 0.68409,-0.944882 0.1663,-0.188977 0.34016,-0.370394 0.52158,-0.536694 0.0378,-0.03779 0.0756,-0.06425 0.11338,-0.09449 a 7.9710288,7.9710288 0 0 1 1.73859,-1.171654 c 1.36063,-0.672756 2.97071,-1.012914 4.74331,-1.058269 z m -31.21136,9.274967 a 1.9842532,1.9842532 0 0 0 -1.92378,2.044725 c 0.0756,2.381104 -0.40441,3.77953 -0.96,4.42205 -0.5556,0.638741 -1.32284,0.963781 -3.099219,0.767245 a 1.9842532,1.9842532 0 0 0 -2.188348,1.753702 1.9842532,1.9842532 0 0 0 1.753702,2.192127 c 2.562521,0.279686 5.000315,-0.351496 6.531025,-2.116536 1.53449,-1.768821 2.01449,-4.221735 1.92756,-7.135753 a 1.9842532,1.9842532 0 0 0 -2.04094,-1.92756 z" class="class1" style="fill:%2397c0fffill-opacity:1stroke-width:3.77953stroke-linecap:roundstroke-linejoin:round" id="path1" /></g></svg>') !important;
  --tab-max-width: 200px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 9px !important;
  --tab-radius-active: 9px !important;
  --tab-stacked-pane-width: 90% !important;
  --tab-switcher-background: rgb(31, 29, 46) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(31, 29, 46), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(193, 46%, 75%) !important;
  --tab-text-color: #6e6a86 !important;
  --tab-text-color-active: #6e6a86 !important;
  --tab-text-color-focused: #6e6a86 !important;
  --tab-text-color-focused-active: #6e6a86 !important;
  --tab-text-color-focused-active-current: #e0def4 !important;
  --tab-text-color-focused-highlighted: rgb(235, 188, 186) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: #524f67 !important;
  --table-border-radius: 7px !important;
  --table-drag-handle-background-active: rgb(235, 188, 186) !important;
  --table-drag-handle-color: #6e6a86 !important;
  --table-drag-handle-color-active: rgb(31, 29, 46) !important;
  --table-header-background: rgb(196, 167, 231) !important;
  --table-header-background-hover: rgb(196, 167, 231) !important;
  --table-header-border-color: #524f67 !important;
  --table-header-color: rgb(31, 29, 46) !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: #21202e !important;
  --table-row-alt-background-hover: #21202e !important;
  --table-selection: hsla(193, 46%, 75%, 0.1) !important;
  --table-selection-border-color: rgb(235, 188, 186) !important;
  --tag-background: rgba(235, 188, 186, 0.1) !important;
  --tag-background-hover: rgba(235, 188, 186, 0.2) !important;
  --tag-border-color: hsla(193, 46%, 75%, 0.15) !important;
  --tag-border-color-hover: hsla(193, 46%, 75%, 0.15) !important;
  --tag-color: rgb(235, 188, 186) !important;
  --tag-color-hover: rgb(235, 188, 186) !important;
  --tertiary: rgb(156, 207, 216) !important;
  --text: #e0def4 !important;
  --text-accent: rgb(235, 188, 186) !important;
  --text-accent-hover: rgb(156, 207, 216) !important;
  --text-error: rgb(235, 188, 186) !important;
  --text-faint: #6e6a86 !important;
  --text-highlight-bg: rgba(246, 193, 119, 0.2) !important;
  --text-muted: #6e6a86 !important;
  --text-normal: #e0def4 !important;
  --text-on-accent: rgb(31, 29, 46) !important;
  --text-on-accent-inverted: rgb(31, 29, 46) !important;
  --text-selection: rgb(64, 61, 82, 0.5) !important;
  --text-success: rgb(156, 207, 216) !important;
  --text-warning: rgb(246, 193, 119) !important;
  --textHighlight: rgba(246, 193, 119, 0.2) !important;
  --titleFont: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgba(64, 61, 82, 0.6) !important;
  --titlebar-text-color: #6e6a86 !important;
  --titlebar-text-color-focused: #e0def4 !important;
  --todoist-p4-border: rgb(235, 188, 186) !important;
  --todoist-p4-border-hover: rgb(235, 111, 146) !important;
  --todoist-task-separator-color: rgba(64, 61, 82, 0.6) !important;
  --uw-background: #26233a !important;
  --vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M240-400q48 0 88 26t59 71l10 23h25q42 0 70 29.5t28 70.5q0 42-29 71t-71 29H240q-66 0-113-47T80-240q0-67 47-113.5T240-400Zm321-81q60 60 138.5 90.5T863-366q11-1 19.5 3t14.5 12q6 8 8 17t-1 19q-35 121-140.5 197T533-40q32-26 49.5-62.5T600-180q0-68-42.5-117.5T449-357q-32-57-87.5-90T240-480q-32 0-62.5 8T120-448q2-131 76.5-232T394-822q10-3 19.5-1t17.5 8q8 6 12.5 14.5T447-781q-5 86 24 162.5T561-481Z'/%3E%3C/svg%3E") !important;
  --vault-profile-color: #e0def4 !important;
  --vault-profile-color-hover: #e0def4 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(64, 61, 82, 0.6);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(64, 61, 82, 0.6);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(235, 111, 146);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(156, 207, 216);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 207, 216) none 0px;
  text-decoration: rgb(156, 207, 216);
  text-decoration-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(156, 207, 216);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 207, 216) none 0px;
  text-decoration: rgb(156, 207, 216);
  text-decoration-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(235, 111, 146);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(246, 193, 119, 0.2);
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: line-through 2px rgb(246, 193, 119);
  text-decoration-color: rgb(246, 193, 119);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body p {
  color: rgb(110, 106, 134);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 106, 134) none 0px;
  text-decoration: rgb(110, 106, 134);
  text-decoration-color: rgb(110, 106, 134);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(49, 116, 143);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(49, 116, 143) none 0px;
  text-decoration: rgb(49, 116, 143);
  text-decoration-color: rgb(49, 116, 143);
  transition: color 0.5s;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(235, 188, 186, 0.1);
  color: rgb(235, 188, 186);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 188, 186) none 0px;
  text-decoration: rgb(235, 188, 186);
  text-decoration-color: rgb(235, 188, 186);
  transition: background-color 0.5s;
}

html[saved-theme="dark"] body a.internal.broken {
  background-color: rgba(235, 188, 186, 0.1);
  color: rgb(144, 140, 170);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 140, 170) none 0px;
  text-decoration: rgba(162, 208, 221, 0.3);
  text-decoration-color: rgba(162, 208, 221, 0.3);
  transition: background-color 0.5s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 234.578px;
  margin-right: 234.578px;
  width: 194.844px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(33, 32, 46);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(82, 79, 103);
  border-left-color: rgb(82, 79, 103);
  border-right-color: rgb(82, 79, 103);
  border-top-color: rgb(82, 79, 103);
  border-top-width: 0px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(82, 79, 103);
  border-left-color: rgb(82, 79, 103);
  border-right-color: rgb(82, 79, 103);
  border-top-color: rgb(82, 79, 103);
  border-top-left-radius: 7px;
  color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(196, 167, 231);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-top-color: rgba(64, 61, 82, 0.6);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-top-color: rgba(64, 61, 82, 0.6);
  color: rgb(224, 222, 244);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(156, 207, 216);
  border-left-color: rgb(156, 207, 216);
  border-right-color: rgb(156, 207, 216);
  border-top-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-top-color: rgba(64, 61, 82, 0.6);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-top-color: rgba(64, 61, 82, 0.6);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: justify;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  text-align: justify;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(224, 222, 244);
  border-radius: 10px;
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 35, 58);
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 106, 134);
  text-decoration: line-through rgb(110, 106, 134);
  text-decoration-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(235, 188, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(235, 188, 186);
  border-top-color: rgb(235, 188, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: background 0.4s, stroke-dashoffset 0.6s, border-color 0.2s ease-out;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(110, 106, 134);
  text-decoration: line-through rgb(110, 106, 134);
  text-decoration-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 156, 207, 216;
  background-color: rgba(156, 207, 216, 0.1);
  border-bottom-color: rgba(156, 207, 216, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(156, 207, 216, 0.25);
  border-right-color: rgba(156, 207, 216, 0.25);
  border-top-color: rgba(156, 207, 216, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 235, 188, 186;
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(235, 188, 186, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(235, 188, 186, 0.25);
  border-right-color: rgba(235, 188, 186, 0.25);
  border-top-color: rgba(235, 188, 186, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 235, 188, 186;
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(235, 188, 186, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(235, 188, 186, 0.25);
  border-right-color: rgba(235, 188, 186, 0.25);
  border-top-color: rgba(235, 188, 186, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 196, 167, 231;
  background-color: rgba(196, 167, 231, 0.1);
  border-bottom-color: rgba(196, 167, 231, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(196, 167, 231, 0.25);
  border-right-color: rgba(196, 167, 231, 0.25);
  border-top-color: rgba(196, 167, 231, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 235, 188, 186;
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(235, 188, 186, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(235, 188, 186, 0.25);
  border-right-color: rgba(235, 188, 186, 0.25);
  border-top-color: rgba(235, 188, 186, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 49, 116, 143;
  background-color: rgba(49, 116, 143, 0.1);
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-right-color: rgba(49, 116, 143, 0.25);
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 49, 116, 143;
  background-color: rgba(49, 116, 143, 0.1);
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-right-color: rgba(49, 116, 143, 0.25);
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 235, 111, 146;
  background-color: rgba(235, 111, 146, 0.1);
  border-bottom-color: rgba(235, 111, 146, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(235, 111, 146, 0.25);
  border-right-color: rgba(235, 111, 146, 0.25);
  border-top-color: rgba(235, 111, 146, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 156, 207, 216;
  background-color: rgba(156, 207, 216, 0.1);
  border-bottom-color: rgba(156, 207, 216, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(156, 207, 216, 0.25);
  border-right-color: rgba(156, 207, 216, 0.25);
  border-top-color: rgba(156, 207, 216, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 156, 207, 216;
  background-color: rgba(156, 207, 216, 0.1);
  border-bottom-color: rgba(156, 207, 216, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(156, 207, 216, 0.25);
  border-right-color: rgba(156, 207, 216, 0.25);
  border-top-color: rgba(156, 207, 216, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 49, 116, 143;
  background-color: rgba(49, 116, 143, 0.1);
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-right-color: rgba(49, 116, 143, 0.25);
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 246, 193, 119;
  background-color: rgba(246, 193, 119, 0.1);
  border-bottom-color: rgba(246, 193, 119, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(246, 193, 119, 0.25);
  border-right-color: rgba(246, 193, 119, 0.25);
  border-top-color: rgba(246, 193, 119, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(38, 35, 58);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-top-color: rgba(64, 61, 82, 0.6);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 29, 46);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(162, 208, 221, 0.15);
  border-left-color: rgba(162, 208, 221, 0.15);
  border-right-color: rgba(162, 208, 221, 0.15);
  border-top-color: rgba(162, 208, 221, 0.15);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body h1 {
  color: rgb(235, 111, 146);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(235, 188, 186);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(156, 207, 216);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(246, 193, 119);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(49, 116, 143);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(196, 167, 231);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 49, 116, 143;
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-right-color: rgba(49, 116, 143, 0.25);
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding-right: 24px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(31, 29, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(31, 29, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(31, 29, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 29, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 29, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(31, 29, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 29, 46);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(224, 222, 244);
  cursor: pointer;
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(224, 222, 244);
  cursor: pointer;
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(224, 222, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(224, 222, 244);
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(82, 79, 103);
  border-bottom-left-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(82, 79, 103);
  border-right-color: rgb(82, 79, 103);
  border-top-color: rgb(82, 79, 103);
  border-top-left-radius: 12px;
  color: rgb(110, 106, 134);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(110, 106, 134);
  text-decoration: rgb(110, 106, 134);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(224, 222, 244);
  cursor: pointer;
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 222, 244);
  stroke: rgb(224, 222, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(110, 106, 134);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgba(64, 61, 82, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(64, 61, 82, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(64, 61, 82, 0.6);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(110, 106, 134);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 222, 244);
  text-decoration: underline dotted rgb(224, 222, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(110, 106, 134);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: rgb(110, 106, 134);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 222, 244);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 187 !important;
  --accent-l: 45% !important;
  --accent-s: 30% !important;
  --background: #faf4ed !important;
  --background-modifier-active-hover: hsla(187, 30%, 45%, 0.1) !important;
  --background-modifier-border: rgba(223, 218, 217, 0.6) !important;
  --background-modifier-border-focus: rgba(223, 218, 217, 0.6) !important;
  --background-modifier-border-hover: rgb(223, 218, 217) !important;
  --background-modifier-error: rgb(215, 130, 126) !important;
  --background-modifier-error-hover: rgb(215, 130, 126) !important;
  --background-modifier-error-rgb: 215, 130, 126 !important;
  --background-modifier-form-field: #f2e9e1 !important;
  --background-modifier-form-field-hover: transparent !important;
  --background-modifier-success: rgb(86, 148, 159) !important;
  --background-modifier-success-rgb: 86, 148, 159 !important;
  --background-primary: rgb(255, 250, 243) !important;
  --background-primary-alt: #f2e9e1 !important;
  --background-secondary: rgb(255, 250, 243) !important;
  --background-secondary-alt: #f2e9e1 !important;
  --base: #faf4ed !important;
  --bases-cards-background: #faf4ed !important;
  --bases-cards-cover-background: #f2e9e1 !important;
  --bases-cards-shadow: 0 0 0 1px rgba(223, 218, 217, 0.6) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(223, 218, 217) !important;
  --bases-embed-border-color: rgb(223, 218, 217) !important;
  --bases-embed-border-radius: 11px !important;
  --bases-group-heading-property-color: #9893a5 !important;
  --bases-header-border-width: 0px !important;
  --bases-table-border-color: #cecacd !important;
  --bases-table-cell-background-active: rgb(255, 250, 243) !important;
  --bases-table-cell-background-disabled: #f2e9e1 !important;
  --bases-table-cell-background-selected: hsla(187, 30%, 45%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(223, 218, 217, 0.6) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(215, 130, 126) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-container-border-radius: 10px !important;
  --bases-table-group-background: transparent !important;
  --bases-table-header-background: #f2e9e1 !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-header-color: #575279 !important;
  --bases-table-row-border-width: 0px !important;
  --bases-table-summary-background: rgb(255, 250, 243) !important;
  --bases-toolbar-label-display: none !important;
  --blockquote-border-color: rgb(234, 157, 52) !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, rgb(255, 250, 243) 65%, transparent) linear-gradient(rgb(255, 250, 243), color-mix(in srgb, rgb(255, 250, 243) 65%, transparent)) !important;
  --bodyFont: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(180, 99, 122) !important;
  --bold-weight: 600 !important;
  --button-radius: 7px !important;
  --callout-bug: 215, 130, 126;
  --callout-default: 40, 105, 131;
  --callout-error: 215, 130, 126;
  --callout-example: 144, 122, 169;
  --callout-fail: 215, 130, 126;
  --callout-important: 86, 148, 159;
  --callout-info: 40, 105, 131;
  --callout-padding: 12px 24px;
  --callout-question: 234, 157, 52;
  --callout-radius: 13px;
  --callout-success: 86, 148, 159;
  --callout-summary: 86, 148, 159;
  --callout-tip: 86, 148, 159;
  --callout-title-size: 1rem;
  --callout-title-weight: 400;
  --callout-todo: 40, 105, 131;
  --callout-warning: 234, 157, 52;
  --canvas-background: rgb(255, 250, 243) !important;
  --canvas-card-label-color: #9893a5 !important;
  --canvas-color-1: 40, 105, 131 !important;
  --canvas-color-2: 86, 148, 159 !important;
  --canvas-color-3: 144, 122, 169 !important;
  --canvas-color-4: 180, 99, 122 !important;
  --canvas-color-5: 215, 130, 126 !important;
  --canvas-color-6: 234, 157, 52 !important;
  --canvas-dot-pattern: #9893a5 !important;
  --caret-color: rgb(180, 99, 122) !important;
  --checkbox-border: 5px !important;
  --checkbox-border-color: rgb(215, 130, 126) !important;
  --checkbox-border-color-hover: rgb(180, 99, 122) !important;
  --checkbox-color: rgb(40, 105, 131) !important;
  --checkbox-color-hover: rgb(86, 148, 159) !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 5px !important;
  --checklist-done-color: #9893a5 !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #faf4ed !important;
  --code-border-color: rgba(223, 218, 217, 0.6) !important;
  --code-comment: #9893a5 !important;
  --code-function: rgb(86, 148, 159) !important;
  --code-important: rgb(215, 130, 126) !important;
  --code-keyword: rgb(215, 130, 126) !important;
  --code-normal: #797593 !important;
  --code-operator: rgb(234, 157, 52) !important;
  --code-property: rgb(40, 105, 131) !important;
  --code-punctuation: rgb(180, 99, 122) !important;
  --code-string: rgb(234, 157, 52) !important;
  --code-tag: rgb(86, 148, 159) !important;
  --code-value: rgb(144, 122, 169) !important;
  --codeFont: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #9893a5 !important;
  --collapse-icon-color-collapsed: rgb(215, 130, 126) !important;
  --color-accent: hsl(187, 30%, 45%) !important;
  --color-accent-1: rgb(215, 130, 126) !important;
  --color-accent-2: rgb(86, 148, 159) !important;
  --color-accent-hsl: 187, 30%, 45% !important;
  --color-base-00: #faf4ed !important;
  --color-base-05: #faf4ed !important;
  --color-base-10: rgb(255, 250, 243) !important;
  --color-base-100: #575279 !important;
  --color-base-20: rgb(255, 250, 243) !important;
  --color-base-25: #f2e9e1 !important;
  --color-base-30: #cecacd !important;
  --color-base-35: rgba(223, 218, 217, 0.6) !important;
  --color-base-40: rgb(223, 218, 217) !important;
  --color-base-50: #f4ede8 !important;
  --color-base-60: #9893a5 !important;
  --color-base-70: #797593 !important;
  --color-blue: rgb(40, 105, 131) !important;
  --color-blue-rgb: 40, 105, 131 !important;
  --color-cyan: rgb(86, 148, 159) !important;
  --color-cyan-rgb: 86, 148, 159 !important;
  --color-green: rgb(86, 148, 159) !important;
  --color-green-rgb: 86, 148, 159 !important;
  --color-orange: rgb(234, 157, 52) !important;
  --color-orange-rgb: 234, 157, 52 !important;
  --color-pink: rgb(180, 99, 122) !important;
  --color-pink-rgb: 180, 99, 122 !important;
  --color-purple: rgb(144, 122, 169) !important;
  --color-purple-rgb: 144, 122, 169 !important;
  --color-red: rgb(215, 130, 126) !important;
  --color-red-rgb: 215, 130, 126 !important;
  --color-yellow: rgb(234, 157, 52) !important;
  --color-yellow-rgb: 234, 157, 52 !important;
  --cursor: pointer !important;
  --dark: #575279 !important;
  --darkgray: #575279 !important;
  --divider-color: rgba(223, 218, 217, 0.6) !important;
  --divider-color-hover: rgb(215, 130, 126) !important;
  --divider-width: 0px !important;
  --dropdown-background: rgba(223, 218, 217, 0.5) !important;
  --dropdown-background-hover: rgb(223, 218, 217) !important;
  --embed-block-shadow-hover: transparent !important;
  --embed-border-start: 2px solid rgb(215, 130, 126) !important;
  --file-header-background: rgb(255, 250, 243) !important;
  --file-header-background-focused: rgb(255, 250, 243) !important;
  --file-header-border: 1px dashed rgb(223, 218, 217) !important;
  --file-header-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgba(223, 218, 217, 0.5) !important;
  --flair-color: #575279 !important;
  --foam: rgb(86, 148, 159) !important;
  --foam-rgb: 86, 148, 159 !important;
  --font-interface: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif !important;
  --font-mermaid: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Arial' !important;
  --font-text: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif !important;
  --footnote-divider-color: rgba(223, 218, 217, 0.6) !important;
  --footnote-id-color: #9893a5 !important;
  --footnote-id-color-no-occurrences: #9893a5 !important;
  --gold: rgb(234, 157, 52) !important;
  --gold-rgb: 234, 157, 52 !important;
  --graph-line: rgb(223, 218, 217) !important;
  --graph-node: #575279 !important;
  --graph-node-attachment: rgb(215, 130, 126) !important;
  --graph-node-focused: rgb(215, 130, 126) !important;
  --graph-node-tag: rgb(86, 148, 159) !important;
  --graph-node-unresolved: #9893a5 !important;
  --graph-text: #575279 !important;
  --gray: #9893a5 !important;
  --h1-color: rgb(180, 99, 122) !important;
  --h1-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h1-size: 1.45em !important;
  --h2-color: rgb(215, 130, 126) !important;
  --h2-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h2-size: 1.3em !important;
  --h3-color: rgb(234, 157, 52) !important;
  --h3-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h3-size: 1.15em !important;
  --h4-color: rgb(40, 105, 131) !important;
  --h4-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h4-size: 1.05em !important;
  --h5-color: rgb(144, 122, 169) !important;
  --h5-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h5-size: 1em !important;
  --h6-color: #575279 !important;
  --h6-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --h6-variant: small-caps !important;
  --headerFont: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #9893a5 !important;
  --heading-spacing: 2.5rem !important;
  --headings-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --highlight: rgba(234, 157, 52, 0.2) !important;
  --highlight-high: #cecacd !important;
  --highlight-low: #f4ede8 !important;
  --highlight-med: rgb(223, 218, 217) !important;
  --highlight-med-rgb: 223, 218, 217 !important;
  --hr-color: rgba(223, 218, 217, 0.6) !important;
  --icon-color: #575279 !important;
  --icon-color-active: rgb(215, 130, 126) !important;
  --icon-color-focused: #575279 !important;
  --icon-color-hover: #9893a5 !important;
  --inline-title-color: rgb(86, 148, 159) !important;
  --inline-title-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif !important;
  --inline-title-margin-bottom: 1.2em !important;
  --inline-title-size: 1.8em !important;
  --input-date-separator: #9893a5 !important;
  --input-placeholder-color: #9893a5 !important;
  --interactive-accent: rgb(215, 130, 126) !important;
  --interactive-accent-hover: rgba(215, 130, 126, 0.8) !important;
  --interactive-accent-hsl: 187, 30%, 45% !important;
  --interactive-hover: rgb(223, 218, 217) !important;
  --interactive-normal: rgba(223, 218, 217, 0.5) !important;
  --iris: rgb(144, 122, 169) !important;
  --iris-rgb: 144, 122, 169 !important;
  --italic-color: rgb(86, 148, 159) !important;
  --latex-color: rgb(40, 105, 131) !important;
  --light: rgb(255, 250, 243) !important;
  --lightgray: rgb(255, 250, 243) !important;
  --link-color: rgb(215, 130, 126) !important;
  --link-color-hover: rgba(215, 130, 126, 0.6) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(40, 105, 131) !important;
  --link-external-color-hover: rgba(40, 105, 131, 0.6) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #797593 !important;
  --link-unresolved-decoration-color: hsla(187, 30%, 45%, 0.3) !important;
  --list-bullet-size: 0.35em !important;
  --list-indent: 2.25em !important;
  --list-indent-editing: 0 !important;
  --list-marker-color: #9893a5 !important;
  --list-marker-color-collapsed: rgb(215, 130, 126) !important;
  --list-marker-color-hover: #9893a5 !important;
  --love: rgb(180, 99, 122) !important;
  --love-rgb: 180, 99, 122 !important;
  --menu-background: rgb(255, 250, 243) !important;
  --menu-border-color: rgb(223, 218, 217) !important;
  --metadata-border-color: rgba(223, 218, 217, 0.6) !important;
  --metadata-display-reading: none !important;
  --metadata-divider-color: rgba(223, 218, 217, 0.6) !important;
  --metadata-input-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #575279 !important;
  --metadata-label-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #9893a5 !important;
  --metadata-label-text-color-hover: #9893a5 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(223, 218, 217, 0.6) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(223, 218, 217) !important;
  --mk-ui-text-secondary: #575279 !important;
  --modal-background: rgb(255, 250, 243) !important;
  --modal-border-color: rgb(223, 218, 217) !important;
  --muted: #9893a5 !important;
  --nav-collapse-icon-color: rgb(40, 105, 131) !important;
  --nav-collapse-icon-color-collapsed: #9893a5 !important;
  --nav-heading-color: rgb(40, 105, 131) !important;
  --nav-heading-color-collapsed: rgb(40, 105, 131) !important;
  --nav-heading-color-collapsed-hover: #9893a5 !important;
  --nav-heading-color-hover: #575279 !important;
  --nav-item-background-active: rgb(86, 148, 159) !important;
  --nav-item-background-selected: hsla(187, 30%, 45%, 0.15) !important;
  --nav-item-color: #575279 !important;
  --nav-item-color-active: rgb(255, 250, 243) !important;
  --nav-item-color-highlighted: rgb(215, 130, 126) !important;
  --nav-item-color-hover: #797593 !important;
  --nav-item-color-selected: #575279 !important;
  --nav-tag-color: #9893a5 !important;
  --nav-tag-color-active: #9893a5 !important;
  --nav-tag-color-hover: #9893a5 !important;
  --overlay: #f2e9e1 !important;
  --pdf-background: rgb(255, 250, 243) !important;
  --pdf-page-background: rgb(255, 250, 243) !important;
  --pdf-sidebar-background: rgb(255, 250, 243) !important;
  --pill-border-color: rgba(223, 218, 217, 0.6) !important;
  --pill-border-color-hover: rgb(223, 218, 217) !important;
  --pill-color: #9893a5 !important;
  --pill-color-hover: #575279 !important;
  --pill-color-remove: #9893a5 !important;
  --pill-color-remove-hover: rgb(215, 130, 126) !important;
  --pine: rgb(40, 105, 131) !important;
  --pine-rgb: 40, 105, 131 !important;
  --pomodoro-timer-color: rgb(223, 218, 217, 0.5) !important;
  --pomodoro-timer-dot-color: rgb(180, 99, 122) !important;
  --prompt-background: rgb(255, 250, 243) !important;
  --prompt-border-color: rgb(223, 218, 217) !important;
  --raised-background: color-mix(in srgb, rgb(255, 250, 243) 65%, transparent) linear-gradient(rgb(255, 250, 243), color-mix(in srgb, rgb(255, 250, 243) 65%, transparent)) !important;
  --ribbon-background: rgb(255, 250, 243) !important;
  --ribbon-background-collapsed: rgb(255, 250, 243) !important;
  --rose: rgb(215, 130, 126) !important;
  --rose-rgb: 215, 130, 126 !important;
  --scrollbar-active-thumb-bg: #cecacd !important;
  --scrollbar-thumb-bg: rgb(223, 218, 217) !important;
  --search-clear-button-color: #9893a5 !important;
  --search-icon-color: #9893a5 !important;
  --search-result-background: #faf4ed !important;
  --search-result-background-hover: rgb(215, 130, 126) !important;
  --secondary: rgb(215, 130, 126) !important;
  --setting-group-heading-color: #575279 !important;
  --setting-items-background: #f2e9e1 !important;
  --setting-items-border-color: rgba(223, 218, 217, 0.6) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: rgb(223, 218, 217) !important;
  --slider-track-background: rgb(223, 218, 217) !important;
  --status-bar-background: #faf4ed !important;
  --status-bar-border-color: rgba(223, 218, 217, 0.6) !important;
  --status-bar-font-size: 0.733em !important;
  --status-bar-radius: 12px 0 0 12px !important;
  --status-bar-text-color: #9893a5 !important;
  --subtle: #797593 !important;
  --suggestion-background: rgb(255, 250, 243) !important;
  --surface: rgb(255, 250, 243) !important;
  --surface-rgb: 255, 250, 243 !important;
  --sync-avatar-color-1: rgb(215, 130, 126) !important;
  --sync-avatar-color-2: rgb(234, 157, 52) !important;
  --sync-avatar-color-3: rgb(234, 157, 52) !important;
  --sync-avatar-color-4: rgb(86, 148, 159) !important;
  --sync-avatar-color-5: rgb(86, 148, 159) !important;
  --sync-avatar-color-6: rgb(40, 105, 131) !important;
  --sync-avatar-color-7: rgb(144, 122, 169) !important;
  --sync-avatar-color-8: rgb(180, 99, 122) !important;
  --tab-background-active: rgb(255, 250, 243) !important;
  --tab-container-background: transparent !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-img: url('data:image/svg+xml,<%3Fxml version="1.0" encoding="UTF-8" standalone="no"%3F><!-- Created with Inkscape (http://www.inkscape.org/) --><svg version="1.1" id="svg1" xml:space="preserve" width="93.058769" height="115.69744" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><sodipodi:namedview id="namedview1" pagecolor="%23ffffff" bordercolor="%23000000" borderopacity="0.25" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="%23d1d1d1" /><inkscape:clipboard style="font-variation-settings:normalopacity:1vector-effect:nonefill:%2300ff00fill-opacity:1stroke-width:3.77953stroke-linecap:roundstroke-linejoin:roundstroke-miterlimit:4stroke-dasharray:nonestroke-dashoffset:0stroke-opacity:1-inkscape-stroke:nonestop-color:%23000000stop-opacity:1" min="69.195827,-2.7355726" max="162.2546,112.96187" geom-min="69.195827,-2.7355726" geom-max="162.2546,112.96187" /><g id="g1" transform="translate(-69.195827,2.7355726)"><path d="m 122.01098,-2.7355726 c -1.43622,0.00378 -2.86866,0.037795 -4.28599,0.1133859 a 72.264614,72.264614 0 0 0 -10.80189,1.3266151 c -0.10205,0.018898 -0.21166,0.018898 -0.31371,0.037795 a 1.9842532,1.9842532 0 0 0 -0.034,0.015118 C 85.515837,1.433249 69.195827,19.431371 69.195827,41.212802 c 0.02268,18.701115 12.075598,30.822067 26.948049,32.035297 a 29.041909,29.041909 0 0 0 8.666464,-0.502678 c 2.30551,-0.461103 4.33134,-0.982678 7.7178,-1.171654 2.28661,-0.124725 5.08347,1.583623 6.67465,3.892916 0.7937,1.160315 1.26992,2.418899 1.34929,3.480947 0.0756,1.065827 -0.15874,1.904883 -0.86929,2.694805 -0.20032,0.222992 -1.24725,0.808819 -2.60032,1.273701 -1.36063,0.464882 -2.97071,0.903308 -4.45228,1.519371 -3.92694,1.644096 -9.0671,2.774175 -12.854186,5.336697 -2.502049,1.68945 -4.285987,3.635908 -5.38583,5.574806 -1.096064,1.942679 -1.602521,3.919373 -0.990237,5.78646 0.56315,1.71969 2.082521,2.85733 3.522522,3.2504 1.436221,0.38929 2.857325,0.30992 4.195281,0.18141 1.33795,-0.13228 2.60787,-0.34015 3.53764,-0.41574 0.7748,-0.0643 0.94488,0.034 0.84283,-0.0869 0.81638,1.19055 1.23213,2.52094 1.79906,4.07811 0.61228,1.68945 1.84441,3.78709 4.30866,4.55433 a 1.9842532,1.9842532 0 0 0 0.28725,0.0643 c 3.75685,0.57826 6.91276,-0.11339 9.35055,-1.67434 2.4378,-1.56094 4.11213,-3.87024 5.44253,-6.31559 2.61921,-4.811343 4.1726,-10.318118 6.37229,-13.247254 8.62866,-4.550554 15.12945,-9.346778 19.31339,-15.979853 4.14615,0.771024 7.25292,1.080946 7.25292,1.080946 a 1.9842532,1.9842532 0 0 0 2.16189,-1.738584 c 0,0 0.62363,-5.230869 0.43087,-11.327251 -0.18142,-5.858272 -0.86173,-12.585835 -4.40315,-16.758436 -1.06205,-9.316542 -4.49008,-19.14332 -8.95749,-26.842222 3.84756,-5.537012 5.63906,-11.5162284 5.21197,-17.703319 a 1.9842532,1.9842532 0 0 0 -1.64031,-1.8179539 c -9.94773,-1.7159066 -20.36033,-3.1974824 -30.41766,-3.1672461 z m 6.03969,4.2633099 c 7.2189,0.377953 14.60032,1.3681898 21.87214,2.5851985 -0.008,4.0856719 -1.24725,8.0163832 -3.59056,11.8828422 A 38.75908,38.75908 0 0 0 141.9858,10.74979 l -0.0265,-0.04535 a 1.9842532,1.9842532 0 0 0 -0.0151,-0.0076 1.9842532,1.9842532 0 0 0 -0.58205,-0.347717 l 0.27969,-0.0189 A 42.803177,42.803177 0 0 0 128.05067,1.5315168 Z m -17.6882,1.0658274 c 6.34961,0.00756 11.94331,0.9637802 16.8378,2.8875609 a 38.808214,38.808214 0 0 1 11.69009,7.7102414 1.9842532,1.9842532 0 0 0 0.0113,0 1.9842532,1.9842532 0 0 0 0.0227,0.03024 23.07781,23.07781 0 0 1 1.47779,1.579844 c 0.21166,0.245669 0.42709,0.483779 0.63496,0.744567 l 0.11339,0.136063 c 4.97764,6.198429 9.67182,16.705523 11.73922,26.838443 a 36.540496,36.540496 0 0 0 -11.52001,-5.238429 h -0.0151 a 29.27246,29.27246 0 0 0 -2.31685,-0.491339 h -0.008 a 23.448204,23.448204 0 0 0 -4.61858,-0.332598 c -0.75591,0.02268 -1.50048,0.09071 -2.22993,0.207874 h -0.008 l -0.27591,0.05291 c -0.63496,0.113386 -1.2548,0.253229 -1.85953,0.442205 a 12.018905,12.018905 0 0 0 -4.67906,2.683466 11.625834,11.625834 0 0 0 -0.78614,0.812599 9.5735495,9.5735495 0 0 0 -1.13386,1.579844 10.77166,10.77166 0 0 0 -1.36063,5.404728 c 0.008,2.483151 0.69921,4.996538 1.73858,7.434335 a 31.891674,31.891674 0 0 0 1.79906,3.590554 41.744909,41.744909 0 0 0 3.34488,4.954964 c 1.19434,1.534489 2.4378,2.929135 3.63591,4.123467 0.45355,0.453543 0.95244,0.88063 1.48158,1.28504 l 0.0227,0.0189 c 3.71905,2.823309 9.05953,4.437168 13.9389,5.582366 -3.77197,5.348034 -9.33544,9.550872 -17.36316,13.719693 a 1.9842532,1.9842532 0 0 0 -0.65008,0.540473 c -3.12567,4.006302 -4.51276,9.73229 -6.82205,13.984254 -1.15654,2.1241 -2.47559,3.82867 -4.10079,4.87182 -1.57606,1.00913 -3.52252,1.48157 -6.37607,1.09228 -1.03181,-0.34393 -1.22078,-0.73323 -1.70079,-2.05228 -0.49133,-1.36063 -0.97511,-3.47717 -2.5474,-5.503 a 1.9842532,1.9842532 0 0 0 -0.32882,-0.32882 c -1.34929,-1.084719 -2.60787,-0.85795 -3.81354,-0.76346 -1.19811,0.0983 -2.44914,0.30992 -3.6019,0.42331 -1.152752,0.11338 -2.192123,0.0945 -2.77417,-0.0643 -0.582048,-0.15496 -0.634961,-0.17386 -0.793702,-0.653852 -0.07559,-0.249449 -0.06425,-1.285041 0.680316,-2.596538 0.737008,-1.307717 2.101418,-2.849765 4.149926,-4.236853 2.75905,-1.870867 7.77449,-3.129451 12.1663,-4.966302 1.11119,-0.464882 2.67591,-0.903308 4.20284,-1.424883 1.52693,-0.525355 3.06142,-1.04315 4.26331,-2.373545 a 7.55906,7.55906 0 0 0 1.87843,-5.639058 c -0.14362,-1.950238 -0.91087,-3.805987 -2.03339,-5.438744 -2.24504,-3.265514 -5.99055,-5.843154 -10.16693,-5.612602 -3.71528,0.204094 -6.1115,0.816378 -8.2734,1.247245 -2.15811,0.427087 -4.119683,0.71811 -7.570394,0.434646 C 83.501348,68.232662 73.183231,58.254703 73.168113,41.209023 c 0,-19.884108 14.891348,-36.2343544 34.148057,-38.5474267 1.03181,-0.045354 2.0485,-0.068032 3.04252,-0.068032 z M 93.05222,21.513892 c -7.018587,0 -12.449772,6.478114 -12.449772,14.090088 0,7.611973 5.431185,14.090088 12.453552,14.090088 7.01859,0 12.44977,-6.478115 12.44977,-14.090088 0,-7.611974 -5.43118,-14.090088 -12.44977,-14.090088 z m 0,3.968506 c 4.542995,0 8.48505,4.361578 8.48505,10.121582 0,5.760003 -3.942055,10.121581 -8.48127,10.121581 -0.207874,0 -0.408189,-0.01134 -0.612284,-0.03024 a 5.4160665,5.7146494 0 0 0 2.165671,-4.550554 5.4160665,5.7146494 0 0 0 -5.416067,-5.71465 5.4160665,5.7146494 0 0 0 -4.410711,2.422679 12.132291,12.132291 0 0 1 -0.211654,-2.24882 c 0,-5.760004 3.945829,-10.121582 8.485045,-10.121582 z m 41.61263,14.936703 c 1.17921,-0.03024 2.43401,0.07181 3.73417,0.291024 0.64252,0.109606 1.29638,0.249449 1.9578,0.415748 0.0113,0 0.0189,0 0.0265,0.0076 h 0.0151 a 28.278443,28.278443 0 0 1 4.0063,1.337954 34.665849,34.665849 0 0 1 5.64284,2.951813 c 0.57449,0.377953 1.13008,0.759685 1.65544,1.156536 0.52913,0.393071 1.02047,0.793701 1.48913,1.20189 0.46488,0.40819 0.89953,0.816379 1.29638,1.232127 l 0.0151,0.01512 c 2.34331,2.452915 3.56787,8.893234 3.74929,14.653238 0.14362,4.633704 -0.18897,7.211343 -0.32882,8.643785 -1.18299,-0.136063 -3.06898,-0.31748 -6.25512,-0.96 -5.15906,-1.04693 -11.50111,-2.985829 -14.94426,-5.355594 l -0.0718,-0.04536 a 11.346149,11.346149 0 0 1 -0.51024,-0.385512 c -0.0605,-0.04535 -0.12472,-0.09071 -0.17764,-0.136063 a 8.0730761,8.0730761 0 0 1 -0.56693,-0.506457 37.587426,37.587426 0 0 1 -2.19212,-2.392442 39.96853,39.96853 0 0 1 -5.00032,-7.445675 c -0.26457,-0.529134 -0.51402,-1.054488 -0.73701,-1.579843 -0.89575,-2.097639 -1.40976,-4.146144 -1.41732,-5.888508 0,-1.307717 0.24189,-2.418899 0.8126,-3.401577 0.18897,-0.328819 0.41574,-0.64252 0.68409,-0.944882 0.1663,-0.188977 0.34016,-0.370394 0.52158,-0.536694 0.0378,-0.03779 0.0756,-0.06425 0.11338,-0.09449 a 7.9710288,7.9710288 0 0 1 1.73859,-1.171654 c 1.36063,-0.672756 2.97071,-1.012914 4.74331,-1.058269 z m -31.21136,9.274967 a 1.9842532,1.9842532 0 0 0 -1.92378,2.044725 c 0.0756,2.381104 -0.40441,3.77953 -0.96,4.42205 -0.5556,0.638741 -1.32284,0.963781 -3.099219,0.767245 a 1.9842532,1.9842532 0 0 0 -2.188348,1.753702 1.9842532,1.9842532 0 0 0 1.753702,2.192127 c 2.562521,0.279686 5.000315,-0.351496 6.531025,-2.116536 1.53449,-1.768821 2.01449,-4.221735 1.92756,-7.135753 a 1.9842532,1.9842532 0 0 0 -2.04094,-1.92756 z" class="class1" style="fill:%2397c0fffill-opacity:1stroke-width:3.77953stroke-linecap:roundstroke-linejoin:round" id="path1" /></g></svg>') !important;
  --tab-max-width: 200px !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 9px !important;
  --tab-radius-active: 9px !important;
  --tab-stacked-pane-width: 90% !important;
  --tab-switcher-background: rgb(255, 250, 243) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 250, 243), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(187, 30%, 45%) !important;
  --tab-text-color: #9893a5 !important;
  --tab-text-color-active: #9893a5 !important;
  --tab-text-color-focused: #9893a5 !important;
  --tab-text-color-focused-active: #9893a5 !important;
  --tab-text-color-focused-active-current: #575279 !important;
  --tab-text-color-focused-highlighted: rgb(215, 130, 126) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: #cecacd !important;
  --table-border-radius: 7px !important;
  --table-drag-handle-background-active: rgb(215, 130, 126) !important;
  --table-drag-handle-color: #9893a5 !important;
  --table-drag-handle-color-active: rgb(255, 250, 243) !important;
  --table-header-background: rgb(144, 122, 169) !important;
  --table-header-background-hover: rgb(144, 122, 169) !important;
  --table-header-border-color: #cecacd !important;
  --table-header-color: rgb(255, 250, 243) !important;
  --table-header-weight: 600 !important;
  --table-row-alt-background: #f4ede8 !important;
  --table-row-alt-background-hover: #f4ede8 !important;
  --table-selection: hsla(187, 30%, 45%, 0.1) !important;
  --table-selection-border-color: rgb(215, 130, 126) !important;
  --tag-background: rgba(215, 130, 126, 0.1) !important;
  --tag-background-hover: rgba(215, 130, 126, 0.2) !important;
  --tag-border-color: hsla(187, 30%, 45%, 0.15) !important;
  --tag-border-color-hover: hsla(187, 30%, 45%, 0.15) !important;
  --tag-color: rgb(215, 130, 126) !important;
  --tag-color-hover: rgb(215, 130, 126) !important;
  --tertiary: rgb(86, 148, 159) !important;
  --text: #575279 !important;
  --text-accent: rgb(215, 130, 126) !important;
  --text-accent-hover: rgb(86, 148, 159) !important;
  --text-error: rgb(215, 130, 126) !important;
  --text-faint: #9893a5 !important;
  --text-highlight-bg: rgba(234, 157, 52, 0.2) !important;
  --text-muted: #9893a5 !important;
  --text-normal: #575279 !important;
  --text-on-accent: rgb(255, 250, 243) !important;
  --text-on-accent-inverted: rgb(255, 250, 243) !important;
  --text-selection: rgb(223, 218, 217, 0.5) !important;
  --text-success: rgb(86, 148, 159) !important;
  --text-warning: rgb(234, 157, 52) !important;
  --textHighlight: rgba(234, 157, 52, 0.2) !important;
  --titleFont: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgba(223, 218, 217, 0.6) !important;
  --titlebar-text-color: #9893a5 !important;
  --titlebar-text-color-focused: #575279 !important;
  --todoist-p4-border: rgb(215, 130, 126) !important;
  --todoist-p4-border-hover: rgb(180, 99, 122) !important;
  --todoist-task-separator-color: rgba(223, 218, 217, 0.6) !important;
  --uw-background: #f2e9e1 !important;
  --vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M240-400q48 0 88 26t59 71l10 23h25q42 0 70 29.5t28 70.5q0 42-29 71t-71 29H240q-66 0-113-47T80-240q0-67 47-113.5T240-400Zm321-81q60 60 138.5 90.5T863-366q11-1 19.5 3t14.5 12q6 8 8 17t-1 19q-35 121-140.5 197T533-40q32-26 49.5-62.5T600-180q0-68-42.5-117.5T449-357q-32-57-87.5-90T240-480q-32 0-62.5 8T120-448q2-131 76.5-232T394-822q10-3 19.5-1t17.5 8q8 6 12.5 14.5T447-781q-5 86 24 162.5T561-481Z'/%3E%3C/svg%3E") !important;
  --vault-profile-color: #575279 !important;
  --vault-profile-color-hover: #575279 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(223, 218, 217, 0.6);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(223, 218, 217, 0.6);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(180, 99, 122);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(180, 99, 122) none 0px;
  text-decoration: rgb(180, 99, 122);
  text-decoration-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(86, 148, 159);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 148, 159) none 0px;
  text-decoration: rgb(86, 148, 159);
  text-decoration-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(86, 148, 159);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 148, 159) none 0px;
  text-decoration: rgb(86, 148, 159);
  text-decoration-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(180, 99, 122);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(180, 99, 122) none 0px;
  text-decoration: rgb(180, 99, 122);
  text-decoration-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(234, 157, 52, 0.2);
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body del {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: line-through 2px rgb(234, 157, 52);
  text-decoration-color: rgb(234, 157, 52);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body p {
  color: rgb(152, 147, 165);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(152, 147, 165) none 0px;
  text-decoration: rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(40, 105, 131);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 105, 131) none 0px;
  text-decoration: rgb(40, 105, 131);
  text-decoration-color: rgb(40, 105, 131);
  transition: color 0.5s;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(215, 130, 126, 0.1);
  color: rgb(215, 130, 126);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
  transition: background-color 0.5s;
}

html[saved-theme="light"] body a.internal.broken {
  background-color: rgba(215, 130, 126, 0.1);
  color: rgb(121, 117, 147);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 117, 147) none 0px;
  text-decoration: rgba(80, 141, 149, 0.3);
  text-decoration-color: rgba(80, 141, 149, 0.3);
  transition: background-color 0.5s;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body dt {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body table {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 234.578px;
  margin-right: 234.578px;
  width: 194.844px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(244, 237, 232);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(206, 202, 205);
  border-left-color: rgb(206, 202, 205);
  border-right-color: rgb(206, 202, 205);
  border-top-color: rgb(206, 202, 205);
  border-top-width: 0px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(206, 202, 205);
  border-left-color: rgb(206, 202, 205);
  border-right-color: rgb(206, 202, 205);
  border-top-color: rgb(206, 202, 205);
  border-top-left-radius: 7px;
  color: rgb(255, 250, 243);
}

html[saved-theme="light"] body tr {
  background-color: rgb(144, 122, 169);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
  color: rgb(121, 117, 147);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-top-color: rgba(223, 218, 217, 0.6);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-top-color: rgba(223, 218, 217, 0.6);
  color: rgb(87, 82, 121);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(86, 148, 159);
  border-left-color: rgb(86, 148, 159);
  border-right-color: rgb(86, 148, 159);
  border-top-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-top-color: rgba(223, 218, 217, 0.6);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-top-color: rgba(223, 218, 217, 0.6);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figcaption {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: justify;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  text-align: justify;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(87, 82, 121);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(87, 82, 121);
  border-radius: 10px;
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 130, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 130, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(152, 147, 165);
  text-decoration: line-through rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(215, 130, 126);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(215, 130, 126);
  border-right-color: rgb(215, 130, 126);
  border-top-color: rgb(215, 130, 126);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: background 0.4s, stroke-dashoffset 0.6s, border-color 0.2s ease-out;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(152, 147, 165);
  text-decoration: line-through rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 86, 148, 159;
  background-color: rgba(86, 148, 159, 0.1);
  border-bottom-color: rgba(86, 148, 159, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(86, 148, 159, 0.25);
  border-right-color: rgba(86, 148, 159, 0.25);
  border-top-color: rgba(86, 148, 159, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 215, 130, 126;
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(215, 130, 126, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(215, 130, 126, 0.25);
  border-right-color: rgba(215, 130, 126, 0.25);
  border-top-color: rgba(215, 130, 126, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 215, 130, 126;
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(215, 130, 126, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(215, 130, 126, 0.25);
  border-right-color: rgba(215, 130, 126, 0.25);
  border-top-color: rgba(215, 130, 126, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 144, 122, 169;
  background-color: rgba(144, 122, 169, 0.1);
  border-bottom-color: rgba(144, 122, 169, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(144, 122, 169, 0.25);
  border-right-color: rgba(144, 122, 169, 0.25);
  border-top-color: rgba(144, 122, 169, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 215, 130, 126;
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(215, 130, 126, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(215, 130, 126, 0.25);
  border-right-color: rgba(215, 130, 126, 0.25);
  border-top-color: rgba(215, 130, 126, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 40, 105, 131;
  background-color: rgba(40, 105, 131, 0.1);
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-right-color: rgba(40, 105, 131, 0.25);
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 40, 105, 131;
  background-color: rgba(40, 105, 131, 0.1);
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-right-color: rgba(40, 105, 131, 0.25);
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 180, 99, 122;
  background-color: rgba(180, 99, 122, 0.1);
  border-bottom-color: rgba(180, 99, 122, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(180, 99, 122, 0.25);
  border-right-color: rgba(180, 99, 122, 0.25);
  border-top-color: rgba(180, 99, 122, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 86, 148, 159;
  background-color: rgba(86, 148, 159, 0.1);
  border-bottom-color: rgba(86, 148, 159, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(86, 148, 159, 0.25);
  border-right-color: rgba(86, 148, 159, 0.25);
  border-top-color: rgba(86, 148, 159, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 86, 148, 159;
  background-color: rgba(86, 148, 159, 0.1);
  border-bottom-color: rgba(86, 148, 159, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(86, 148, 159, 0.25);
  border-right-color: rgba(86, 148, 159, 0.25);
  border-top-color: rgba(86, 148, 159, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 40, 105, 131;
  background-color: rgba(40, 105, 131, 0.1);
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-right-color: rgba(40, 105, 131, 0.25);
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 234, 157, 52;
  background-color: rgba(234, 157, 52, 0.1);
  border-bottom-color: rgba(234, 157, 52, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(234, 157, 52, 0.25);
  border-right-color: rgba(234, 157, 52, 0.25);
  border-top-color: rgba(234, 157, 52, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-top-color: rgba(223, 218, 217, 0.6);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(80, 141, 149, 0.15);
  border-left-color: rgba(80, 141, 149, 0.15);
  border-right-color: rgba(80, 141, 149, 0.15);
  border-top-color: rgba(80, 141, 149, 0.15);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body h1 {
  color: rgb(180, 99, 122);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(215, 130, 126);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(86, 148, 159);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(234, 157, 52);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(40, 105, 131);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(144, 122, 169);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 40, 105, 131;
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-right-color: rgba(40, 105, 131, 0.25);
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding-right: 24px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(255, 250, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 250, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 250, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 250, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 250, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 250, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 243);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(87, 82, 121);
  cursor: pointer;
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(87, 82, 121);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(87, 82, 121);
  cursor: pointer;
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(87, 82, 121);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(87, 82, 121);
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(206, 202, 205);
  border-bottom-left-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 202, 205);
  border-right-color: rgb(206, 202, 205);
  border-top-color: rgb(206, 202, 205);
  border-top-left-radius: 12px;
  color: rgb(152, 147, 165);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(87, 82, 121);
  cursor: pointer;
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(152, 147, 165);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgba(223, 218, 217, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(223, 218, 217, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(223, 218, 217, 0.6);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(152, 147, 165);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(87, 82, 121);
  text-decoration: underline dotted rgb(87, 82, 121);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(152, 147, 165);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: rgb(152, 147, 165);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
  color: rgb(121, 117, 147);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sub {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body summary {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sup {
  color: rgb(87, 82, 121);
}`,
  },
};
