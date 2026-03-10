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
  --background-modifier-active-hover: rgba(150, 82, 218, 0.15) !important;
  --background-modifier-border: rgb(255, 157, 0) !important;
  --background-modifier-border-focus: rgb(166, 154, 177) !important;
  --background-modifier-border-hover: rgb(128, 117, 138) !important;
  --background-modifier-error: rgb(226, 18, 88) !important;
  --background-modifier-error-hover: rgb(226, 18, 88) !important;
  --background-modifier-error-rgb: 228, 18, 88 !important;
  --background-modifier-form-field: rgb(51, 46, 56) !important;
  --background-modifier-form-field-hover: rgb(51, 46, 56) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: rgba(61, 165, 9, 0) !important;
  --background-modifier-success-rgb: 51, 138, 7 !important;
  --background-primary: rgb(38, 34, 42) !important;
  --background-primary-alt: rgb(46, 41, 50) !important;
  --background-secondary: rgb(38, 34, 42) !important;
  --background-secondary-alt: rgb(89, 82, 96) !important;
  --bases-cards-background: rgb(38, 34, 42) !important;
  --bases-cards-cover-background: rgb(46, 41, 50) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(255, 157, 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(128, 117, 138) !important;
  --bases-embed-border-color: rgb(255, 157, 0) !important;
  --bases-group-heading-property-color: rgb(186, 179, 193) !important;
  --bases-table-border-color: rgb(255, 157, 0) !important;
  --bases-table-cell-background-active: rgb(38, 34, 42) !important;
  --bases-table-cell-background-disabled: rgb(46, 41, 50) !important;
  --bases-table-cell-background-selected: rgba(150, 82, 218, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(166, 154, 177) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(150, 82, 218) !important;
  --bases-table-group-background: rgb(46, 41, 50) !important;
  --bases-table-header-background: rgb(38, 34, 42) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: rgb(186, 179, 193) !important;
  --bases-table-summary-background: rgb(38, 34, 42) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-border-color: rgb(150, 82, 218) !important;
  --blur-background: color-mix(in srgb, rgb(89, 82, 96) 65%, transparent) linear-gradient(rgb(89, 82, 96), color-mix(in srgb, rgb(89, 82, 96) 65%, transparent)) !important;
  --bodyFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(221, 120, 95) !important;
  --callout-bug: 228, 18, 88;
  --callout-error: 228, 18, 88;
  --callout-fail: 228, 18, 88;
  --callout-success: 51, 138, 7;
  --canvas-background: rgb(38, 34, 42) !important;
  --canvas-card-label-color: rgb(166, 154, 177) !important;
  --canvas-color-1: 228, 18, 88 !important;
  --canvas-color-4: 51, 138, 7 !important;
  --canvas-dot-pattern: rgb(89, 82, 96) !important;
  --caret-color: rgb(191, 185, 198) !important;
  --checkbox-border-color: rgb(166, 154, 177) !important;
  --checkbox-border-color-hover: rgb(186, 179, 193) !important;
  --checkbox-color: rgb(150, 82, 218) !important;
  --checkbox-color-hover: rgb(168, 120, 227) !important;
  --checkbox-marker-color: rgb(38, 34, 42) !important;
  --checklist-done-color: rgb(186, 179, 193) !important;
  --code-background: rgb(46, 41, 50) !important;
  --code-border-color: rgb(255, 157, 0) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: rgb(166, 154, 177) !important;
  --code-function: rgb(255, 157, 0) !important;
  --code-important: rgb(236, 109, 19) !important;
  --code-keyword: rgb(222, 18, 120) !important;
  --code-normal: rgb(191, 185, 198) !important;
  --code-operator: rgb(226, 18, 88) !important;
  --code-property: rgba(0, 255, 234, 0) !important;
  --code-punctuation: rgb(186, 179, 193) !important;
  --code-string: rgba(61, 165, 9, 0) !important;
  --code-tag: rgb(226, 18, 88) !important;
  --code-value: rgb(150, 82, 218) !important;
  --codeFont: "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(166, 154, 177) !important;
  --collapse-icon-color-collapsed: rgb(168, 120, 227) !important;
  --color-accent: rgb(150, 82, 218) !important;
  --color-accent-1: rgb(168, 120, 227) !important;
  --color-accent-2: rgb(187, 152, 235) !important;
  --color-accent-hsl: 270, 65%, 58.8% !important;
  --color-base-00: rgb(33, 30, 36) !important;
  --color-base-10: rgb(38, 34, 42) !important;
  --color-base-100: rgb(204, 199, 209) !important;
  --color-base-20: rgb(46, 41, 50) !important;
  --color-base-25: rgb(51, 46, 56) !important;
  --color-base-30: rgb(89, 82, 96) !important;
  --color-base-35: rgb(128, 117, 138) !important;
  --color-base-40: rgb(166, 154, 177) !important;
  --color-base-50: rgb(186, 179, 193) !important;
  --color-base-60: rgb(191, 185, 198) !important;
  --color-base-70: rgb(199, 193, 205) !important;
  --color-blue: rgb(0, 111, 133) !important;
  --color-cyan: rgba(0, 255, 234, 0) !important;
  --color-green: rgba(61, 165, 9, 0) !important;
  --color-green-rgb: 51, 138, 7 !important;
  --color-orange: rgb(236, 109, 19) !important;
  --color-pink: rgb(222, 18, 120) !important;
  --color-purple: rgb(150, 82, 218) !important;
  --color-red: rgb(226, 18, 88) !important;
  --color-red-rgb: 228, 18, 88 !important;
  --color-yellow: rgb(255, 157, 0) !important;
  --dark: rgb(191, 185, 198) !important;
  --darkgray: rgb(191, 185, 198) !important;
  --divider-color: rgb(255, 157, 0) !important;
  --divider-color-hover: rgb(150, 82, 218) !important;
  --dropdown-background: rgb(89, 82, 96) !important;
  --dropdown-background-hover: rgb(128, 117, 138) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(255, 157, 0), inset 0 0 0 1px rgb(255, 157, 0) !important;
  --embed-border-start: 2px solid rgb(150, 82, 218) !important;
  --file-header-background: rgb(38, 34, 42) !important;
  --file-header-background-focused: rgb(38, 34, 42) !important;
  --file-header-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(89, 82, 96) !important;
  --flair-color: rgb(191, 185, 198) !important;
  --font-interface: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Neucha !important;
  --font-mermaid: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Space Mono" !important;
  --font-print: Neucha, Arial' !important;
  --font-text: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Neucha !important;
  --footnote-divider-color: rgb(255, 157, 0) !important;
  --footnote-id-color: rgb(186, 179, 193) !important;
  --footnote-id-color-no-occurrences: rgb(166, 154, 177) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: rgb(204, 126, 0) !important;
  --graph-node: rgb(186, 179, 193) !important;
  --graph-node-attachment: rgb(236, 109, 19) !important;
  --graph-node-focused: rgb(255, 157, 0) !important;
  --graph-node-tag: rgba(61, 165, 9, 0) !important;
  --graph-node-unresolved: rgb(166, 154, 177) !important;
  --graph-text: rgb(191, 185, 198) !important;
  --gray: rgb(186, 179, 193) !important;
  --h1-color: rgb(150, 82, 218) !important;
  --h1-font: "Architects Daughter", Neucha !important;
  --h2-color: rgb(222, 18, 120) !important;
  --h2-font: "Architects Daughter", Neucha !important;
  --h3-color: rgb(94, 51, 204) !important;
  --h3-font: "Architects Daughter", Neucha !important;
  --h4-color: rgba(61, 165, 9, 0) !important;
  --h4-font: "Architects Daughter", Neucha !important;
  --h5-color: rgb(0, 184, 122) !important;
  --h5-font: "Architects Daughter", Neucha !important;
  --h6-color: rgb(0, 111, 133) !important;
  --h6-font: "Architects Daughter", Neucha !important;
  --headerFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(186, 179, 193) !important;
  --highlight: rgba(255, 157, 0, 0.7) !important;
  --hr-color: rgb(255, 157, 0) !important;
  --icon-color: rgb(186, 179, 193) !important;
  --icon-color-active: rgb(168, 120, 227) !important;
  --icon-color-focused: rgb(191, 185, 198) !important;
  --icon-color-hover: rgb(186, 179, 193) !important;
  --inline-title-color: rgb(150, 82, 218) !important;
  --inline-title-font: "Architects Daughter", Neucha !important;
  --input-date-separator: rgb(166, 154, 177) !important;
  --input-placeholder-color: rgb(166, 154, 177) !important;
  --interactive-accent: rgb(150, 82, 218) !important;
  --interactive-accent-hover: rgb(168, 120, 227) !important;
  --interactive-accent-hsl: 270, 65%, 58.8% !important;
  --interactive-hover: rgb(128, 117, 138) !important;
  --interactive-normal: rgb(89, 82, 96) !important;
  --italic-color: rgb(216, 75, 108) !important;
  --light: rgb(38, 34, 42) !important;
  --lightgray: rgb(38, 34, 42) !important;
  --link-color: rgb(255, 157, 0) !important;
  --link-color-hover: rgb(255, 177, 51) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgba(0, 204, 187, 0) !important;
  --link-external-color-hover: rgba(0, 255, 234, 0) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(189, 88, 15) !important;
  --link-unresolved-color-hover: rgb(236, 109, 19) !important;
  --link-unresolved-decoration-color: rgba(150, 82, 218, 0.5) !important;
  --link-unresolved-opacity: 0.8 !important;
  --list-marker-color: rgb(166, 154, 177) !important;
  --list-marker-color-collapsed: rgb(168, 120, 227) !important;
  --list-marker-color-hover: rgb(186, 179, 193) !important;
  --menu-background: rgb(38, 34, 42) !important;
  --menu-border-color: rgb(128, 117, 138) !important;
  --metadata-border-color: rgb(255, 157, 0) !important;
  --metadata-divider-color: rgb(255, 157, 0) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(191, 185, 198) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(186, 179, 193) !important;
  --metadata-label-text-color-hover: rgb(186, 179, 193) !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(166, 154, 177) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(128, 117, 138) !important;
  --modal-background: rgb(38, 34, 42) !important;
  --modal-border-color: rgb(166, 154, 177) !important;
  --nav-collapse-icon-color: rgb(166, 154, 177) !important;
  --nav-collapse-icon-color-collapsed: rgb(166, 154, 177) !important;
  --nav-heading-color: rgb(191, 185, 198) !important;
  --nav-heading-color-collapsed: rgb(166, 154, 177) !important;
  --nav-heading-color-collapsed-hover: rgb(186, 179, 193) !important;
  --nav-heading-color-hover: rgb(191, 185, 198) !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: rgba(150, 82, 218, 0.15) !important;
  --nav-item-color: rgb(186, 179, 193) !important;
  --nav-item-color-active: rgb(191, 185, 198) !important;
  --nav-item-color-highlighted: rgb(187, 152, 235) !important;
  --nav-item-color-hover: rgb(191, 185, 198) !important;
  --nav-item-color-selected: rgb(191, 185, 198) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(166, 154, 177) !important;
  --nav-tag-color-active: rgb(186, 179, 193) !important;
  --nav-tag-color-hover: rgb(186, 179, 193) !important;
  --pdf-background: rgb(38, 34, 42) !important;
  --pdf-page-background: rgb(38, 34, 42) !important;
  --pdf-shadow: 0 0 0 1px rgb(255, 157, 0) !important;
  --pdf-sidebar-background: rgb(38, 34, 42) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(255, 157, 0) !important;
  --pill-border-color: rgb(255, 157, 0) !important;
  --pill-border-color-hover: rgb(128, 117, 138) !important;
  --pill-color: rgb(186, 179, 193) !important;
  --pill-color-hover: rgb(191, 185, 198) !important;
  --pill-color-remove: rgb(166, 154, 177) !important;
  --pill-color-remove-hover: rgb(168, 120, 227) !important;
  --prompt-background: rgb(38, 34, 42) !important;
  --prompt-border-color: rgb(166, 154, 177) !important;
  --raised-background: color-mix(in srgb, rgb(89, 82, 96) 65%, transparent) linear-gradient(rgb(89, 82, 96), color-mix(in srgb, rgb(89, 82, 96) 65%, transparent)) !important;
  --ribbon-background: rgb(38, 34, 42) !important;
  --ribbon-background-collapsed: rgb(38, 34, 42) !important;
  --search-clear-button-color: rgb(186, 179, 193) !important;
  --search-icon-color: rgb(186, 179, 193) !important;
  --search-result-background: rgb(38, 34, 42) !important;
  --secondary: rgb(168, 120, 227) !important;
  --setting-group-heading-color: rgb(191, 185, 198) !important;
  --setting-items-background: rgb(46, 41, 50) !important;
  --setting-items-border-color: rgb(255, 157, 0) !important;
  --slider-thumb-border-color: rgb(128, 117, 138) !important;
  --slider-track-background: rgb(255, 157, 0) !important;
  --status-bar-background: rgb(38, 34, 42) !important;
  --status-bar-border-color: rgb(255, 157, 0) !important;
  --status-bar-text-color: rgb(186, 179, 193) !important;
  --suggestion-background: rgb(38, 34, 42) !important;
  --sync-avatar-color-1: rgb(226, 18, 88) !important;
  --sync-avatar-color-2: rgb(236, 109, 19) !important;
  --sync-avatar-color-3: rgb(255, 157, 0) !important;
  --sync-avatar-color-4: rgba(61, 165, 9, 0) !important;
  --sync-avatar-color-5: rgba(0, 255, 234, 0) !important;
  --sync-avatar-color-6: rgb(0, 111, 133) !important;
  --sync-avatar-color-7: rgb(150, 82, 218) !important;
  --sync-avatar-color-8: rgb(222, 18, 120) !important;
  --tab-background-active: rgb(38, 34, 42) !important;
  --tab-container-background: rgb(46, 41, 50) !important;
  --tab-divider-color: rgb(128, 117, 138) !important;
  --tab-outline-color: rgb(255, 157, 0) !important;
  --tab-switcher-background: rgb(38, 34, 42) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(38, 34, 42), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(150, 82, 218) !important;
  --tab-text-color: rgb(166, 154, 177) !important;
  --tab-text-color-active: rgb(186, 179, 193) !important;
  --tab-text-color-focused: rgb(186, 179, 193) !important;
  --tab-text-color-focused-active: rgb(191, 185, 198) !important;
  --tab-text-color-focused-active-current: rgb(191, 185, 198) !important;
  --tab-text-color-focused-highlighted: rgb(168, 120, 227) !important;
  --table-add-button-border-color: rgb(255, 157, 0) !important;
  --table-border-color: rgb(255, 157, 0) !important;
  --table-drag-handle-background-active: rgb(150, 82, 218) !important;
  --table-drag-handle-color: rgb(166, 154, 177) !important;
  --table-header-border-color: rgb(255, 157, 0) !important;
  --table-header-color: rgb(191, 185, 198) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(150, 82, 218, 0.1) !important;
  --table-selection-border-color: rgb(150, 82, 218) !important;
  --table-white-space: normal !important;
  --tag-background: rgba(150, 82, 218, 0.1) !important;
  --tag-background-hover: rgba(150, 82, 218, 0.2) !important;
  --tag-border-color: rgba(150, 82, 218, 0.15) !important;
  --tag-border-color-hover: rgba(150, 82, 218, 0.15) !important;
  --tag-color: rgb(168, 120, 227) !important;
  --tag-color-hover: rgb(168, 120, 227) !important;
  --tertiary: rgb(187, 152, 235) !important;
  --text-accent: rgb(168, 120, 227) !important;
  --text-accent-hover: rgb(187, 152, 235) !important;
  --text-error: rgb(226, 18, 88) !important;
  --text-faint: rgb(166, 154, 177) !important;
  --text-highlight-bg: rgba(255, 157, 0, 0.7) !important;
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8) !important;
  --text-muted: rgb(186, 179, 193) !important;
  --text-normal: rgb(191, 185, 198) !important;
  --text-selection: rgba(150, 82, 218, 0.33) !important;
  --text-success: rgba(61, 165, 9, 0) !important;
  --text-warning: rgb(236, 109, 19) !important;
  --textHighlight: rgba(255, 157, 0, 0.7) !important;
  --titleFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(38, 34, 42) !important;
  --titlebar-background-focused: rgb(46, 41, 50) !important;
  --titlebar-border-color: rgb(255, 157, 0) !important;
  --titlebar-text-color: rgb(186, 179, 193) !important;
  --titlebar-text-color-focused: rgb(191, 185, 198) !important;
  --titlebar-text-color-highlighted: rgb(187, 152, 235) !important;
  --vault-name-color: rgb(255, 157, 0) !important;
  --vault-profile-color: rgb(191, 185, 198) !important;
  --vault-profile-color-hover: rgb(191, 185, 198) !important;
  --wyrd-base-00: rgb(33, 30, 36) !important;
  --wyrd-base-10: rgb(38, 34, 42) !important;
  --wyrd-base-100: rgb(212, 207, 216) !important;
  --wyrd-base-20: rgb(46, 41, 50) !important;
  --wyrd-base-30: rgb(51, 46, 56) !important;
  --wyrd-base-40: rgb(89, 82, 96) !important;
  --wyrd-base-50: rgb(128, 117, 138) !important;
  --wyrd-base-50-rgb: 128, 117, 138 !important;
  --wyrd-base-60: rgb(166, 154, 177) !important;
  --wyrd-base-70: rgb(186, 179, 193) !important;
  --wyrd-base-80: rgb(191, 185, 198) !important;
  --wyrd-base-90: rgb(199, 193, 205) !important;
  --wyrd-base-95: rgb(204, 199, 209) !important;
  --wyrd-blue: rgb(0, 111, 133) !important;
  --wyrd-blue-dark: rgb(0, 68, 82) !important;
  --wyrd-blue-light: rgb(0, 153, 184) !important;
  --wyrd-blue-rgb: 0, 153, 184 !important;
  --wyrd-cyan: rgba(0, 255, 234, 0) !important;
  --wyrd-cyan-dark: rgba(0, 204, 187, 0) !important;
  --wyrd-cyan-light: rgba(51, 255, 238, 0) !important;
  --wyrd-cyan-rgb: 0, 255, 234 !important;
  --wyrd-green: rgba(61, 165, 9, 0) !important;
  --wyrd-green-dark: rgba(43, 116, 6, 0) !important;
  --wyrd-green-light: rgba(79, 213, 11, 0) !important;
  --wyrd-green-rgb: 51, 138, 7 !important;
  --wyrd-indigo: rgb(94, 51, 204) !important;
  --wyrd-indigo-dark: rgb(75, 41, 163) !important;
  --wyrd-indigo-light: rgb(126, 92, 214) !important;
  --wyrd-indigo-rgb: 94, 51, 204 !important;
  --wyrd-orange: rgb(236, 109, 19) !important;
  --wyrd-orange-dark: rgb(189, 88, 15) !important;
  --wyrd-orange-light: rgb(240, 139, 66) !important;
  --wyrd-orange-rgb: 236, 109, 19 !important;
  --wyrd-pink: rgb(222, 18, 120) !important;
  --wyrd-pink-dark: rgb(175, 14, 94) !important;
  --wyrd-pink-light: rgb(239, 52, 145) !important;
  --wyrd-pink-rgb: 223, 18, 120 !important;
  --wyrd-purple: rgb(150, 82, 218) !important;
  --wyrd-purple-dark: rgb(125, 44, 206) !important;
  --wyrd-purple-light: rgb(176, 125, 227) !important;
  --wyrd-purple-rgb: 150, 82, 218 !important;
  --wyrd-red: rgb(226, 18, 88) !important;
  --wyrd-red-dark: rgb(179, 15, 69) !important;
  --wyrd-red-light: rgb(239, 57, 118) !important;
  --wyrd-red-rgb: 228, 18, 88 !important;
  --wyrd-strike-color: rgb(89, 82, 96) !important;
  --wyrd-strike-color-hover: rgb(166, 154, 177) !important;
  --wyrd-teal: rgb(0, 184, 122) !important;
  --wyrd-teal-dark: rgb(0, 133, 88) !important;
  --wyrd-teal-light: rgb(0, 235, 156) !important;
  --wyrd-teal-rgb: 0, 184, 122 !important;
  --wyrd-yellow: rgb(255, 157, 0) !important;
  --wyrd-yellow-dark: rgb(204, 126, 0) !important;
  --wyrd-yellow-dark-rgb: 204, 126, 0 !important;
  --wyrd-yellow-light: rgb(255, 177, 51) !important;
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
  text-decoration: rgb(191, 185, 198);
  text-decoration-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration: rgb(216, 75, 108);
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration: rgb(216, 75, 108);
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration: rgb(191, 185, 198);
  text-decoration-color: rgb(191, 185, 198);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 157, 0, 0.7);
  color: rgb(191, 185, 198);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 185, 198) none 0px;
  text-decoration: rgb(191, 185, 198);
  text-decoration-color: rgb(191, 185, 198);
  transition: background-color 0.25s ease-in-out;
}

html[saved-theme="dark"] body del {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
  transition: color 0.25s ease-in-out;
}

html[saved-theme="dark"] body p {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(185, 178, 192) none 0px;
  text-decoration: rgb(185, 178, 192);
  text-decoration-color: rgb(185, 178, 192);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 204, 187);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 187) none 0px;
  text-decoration: rgb(0, 204, 187);
  text-decoration-color: rgb(0, 204, 187);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 157, 0);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 157, 0) none 0px;
  text-decoration: rgb(255, 157, 0);
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
  text-decoration: rgb(223, 18, 120);
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
  border-bottom-color: rgb(191, 185, 198);
  border-left-color: rgb(191, 185, 198);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
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
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(191, 185, 198);
  border-top-color: rgb(191, 185, 198);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(89, 82, 96);
  text-decoration: line-through rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 82, 96);
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
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
  text-decoration: rgb(191, 185, 198);
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
  text-decoration: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(185, 178, 192);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(185, 178, 192);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 126, 0);
  border-left-color: rgb(204, 126, 0);
  border-right-color: rgb(204, 126, 0);
  border-top-color: rgb(204, 126, 0);
  color: rgb(204, 126, 0);
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
  text-decoration: rgb(185, 178, 192);
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
  text-decoration: rgb(185, 178, 192);
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
  text-decoration: rgb(185, 178, 192);
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
  text-decoration: underline dotted rgb(191, 185, 198);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 270 !important;
  --accent-l: 58.8% !important;
  --accent-s: 65% !important;
  --background-modifier-active-hover: rgba(150, 82, 218, 0.15) !important;
  --background-modifier-border: rgb(255, 157, 0) !important;
  --background-modifier-border-focus: rgb(89, 82, 96) !important;
  --background-modifier-border-hover: rgb(128, 117, 138) !important;
  --background-modifier-error: rgb(226, 18, 88) !important;
  --background-modifier-error-hover: rgb(226, 18, 88) !important;
  --background-modifier-error-rgb: 228, 18, 88 !important;
  --background-modifier-form-field: rgb(212, 207, 216) !important;
  --background-modifier-form-field-hover: rgb(212, 207, 216) !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-modifier-success: rgba(61, 165, 9, 0) !important;
  --background-modifier-success-rgb: 51, 138, 7 !important;
  --background-primary: rgb(199, 193, 205) !important;
  --background-primary-alt: rgb(191, 185, 198) !important;
  --background-secondary: rgb(199, 193, 205) !important;
  --background-secondary-alt: rgb(204, 199, 209) !important;
  --bases-cards-background: rgb(199, 193, 205) !important;
  --bases-cards-cover-background: rgb(191, 185, 198) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(255, 157, 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(128, 117, 138) !important;
  --bases-embed-border-color: rgb(255, 157, 0) !important;
  --bases-group-heading-property-color: rgb(51, 46, 56) !important;
  --bases-table-border-color: rgb(255, 157, 0) !important;
  --bases-table-cell-background-active: rgb(199, 193, 205) !important;
  --bases-table-cell-background-disabled: rgb(191, 185, 198) !important;
  --bases-table-cell-background-selected: rgba(150, 82, 218, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(89, 82, 96) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(159, 98, 223) !important;
  --bases-table-group-background: rgb(191, 185, 198) !important;
  --bases-table-header-background: rgb(199, 193, 205) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: rgb(51, 46, 56) !important;
  --bases-table-summary-background: rgb(199, 193, 205) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --blockquote-border-color: rgb(159, 98, 223) !important;
  --blur-background: color-mix(in srgb, rgb(199, 193, 205) 65%, transparent) linear-gradient(rgb(199, 193, 205), color-mix(in srgb, rgb(199, 193, 205) 65%, transparent)) !important;
  --bodyFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(221, 120, 95) !important;
  --callout-bug: 228, 18, 88;
  --callout-error: 228, 18, 88;
  --callout-fail: 228, 18, 88;
  --callout-success: 51, 138, 7;
  --canvas-background: rgb(199, 193, 205) !important;
  --canvas-card-label-color: rgb(46, 41, 50) !important;
  --canvas-color-1: 228, 18, 88 !important;
  --canvas-color-4: 51, 138, 7 !important;
  --canvas-dot-pattern: rgb(166, 154, 177) !important;
  --caret-color: rgb(89, 82, 96) !important;
  --checkbox-border-color: rgb(46, 41, 50) !important;
  --checkbox-border-color-hover: rgb(51, 46, 56) !important;
  --checkbox-color: rgb(159, 98, 223) !important;
  --checkbox-color-hover: rgb(168, 120, 227) !important;
  --checkbox-marker-color: rgb(199, 193, 205) !important;
  --checklist-done-color: rgb(51, 46, 56) !important;
  --code-background: rgb(191, 185, 198) !important;
  --code-border-color: rgb(255, 157, 0) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: rgb(46, 41, 50) !important;
  --code-function: rgb(255, 157, 0) !important;
  --code-important: rgb(236, 109, 19) !important;
  --code-keyword: rgb(222, 18, 120) !important;
  --code-normal: rgb(89, 82, 96) !important;
  --code-operator: rgb(226, 18, 88) !important;
  --code-property: rgba(0, 255, 234, 0) !important;
  --code-punctuation: rgb(51, 46, 56) !important;
  --code-string: rgba(61, 165, 9, 0) !important;
  --code-tag: rgb(226, 18, 88) !important;
  --code-value: rgb(150, 82, 218) !important;
  --codeFont: "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(46, 41, 50) !important;
  --collapse-icon-color-collapsed: rgb(150, 82, 218) !important;
  --color-accent: rgb(150, 82, 218) !important;
  --color-accent-1: rgb(159, 98, 223) !important;
  --color-accent-2: rgb(168, 120, 227) !important;
  --color-accent-hsl: 270, 65%, 58.8% !important;
  --color-base-00: rgb(212, 207, 216) !important;
  --color-base-05: rgb(204, 199, 209) !important;
  --color-base-10: rgb(199, 193, 205) !important;
  --color-base-100: rgb(33, 30, 36) !important;
  --color-base-20: rgb(191, 185, 198) !important;
  --color-base-25: rgb(186, 179, 193) !important;
  --color-base-30: rgb(166, 154, 177) !important;
  --color-base-35: rgb(128, 117, 138) !important;
  --color-base-40: rgb(89, 82, 96) !important;
  --color-base-50: rgb(51, 46, 56) !important;
  --color-base-60: rgb(46, 41, 50) !important;
  --color-base-70: rgb(38, 34, 42) !important;
  --color-blue: rgb(0, 111, 133) !important;
  --color-cyan: rgba(0, 255, 234, 0) !important;
  --color-green: rgba(61, 165, 9, 0) !important;
  --color-green-rgb: 51, 138, 7 !important;
  --color-orange: rgb(236, 109, 19) !important;
  --color-pink: rgb(222, 18, 120) !important;
  --color-purple: rgb(150, 82, 218) !important;
  --color-red: rgb(226, 18, 88) !important;
  --color-red-rgb: 228, 18, 88 !important;
  --color-yellow: rgb(255, 157, 0) !important;
  --dark: rgb(89, 82, 96) !important;
  --darkgray: rgb(89, 82, 96) !important;
  --divider-color: rgb(255, 157, 0) !important;
  --divider-color-hover: rgb(159, 98, 223) !important;
  --dropdown-background: rgb(212, 207, 216) !important;
  --dropdown-background-hover: rgb(199, 193, 205) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(255, 157, 0), inset 0 0 0 1px rgb(255, 157, 0) !important;
  --embed-border-start: 2px solid rgb(159, 98, 223) !important;
  --file-header-background: rgb(199, 193, 205) !important;
  --file-header-background-focused: rgb(199, 193, 205) !important;
  --file-header-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(212, 207, 216) !important;
  --flair-color: rgb(89, 82, 96) !important;
  --font-interface: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Neucha !important;
  --font-mermaid: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Space Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Space Mono" !important;
  --font-print: Neucha, Arial' !important;
  --font-text: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Neucha !important;
  --footnote-divider-color: rgb(255, 157, 0) !important;
  --footnote-id-color: rgb(51, 46, 56) !important;
  --footnote-id-color-no-occurrences: rgb(46, 41, 50) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --graph-line: rgb(204, 126, 0) !important;
  --graph-node: rgb(51, 46, 56) !important;
  --graph-node-attachment: rgb(236, 109, 19) !important;
  --graph-node-focused: rgb(255, 157, 0) !important;
  --graph-node-tag: rgba(61, 165, 9, 0) !important;
  --graph-node-unresolved: rgb(46, 41, 50) !important;
  --graph-text: rgb(89, 82, 96) !important;
  --gray: rgb(51, 46, 56) !important;
  --h1-color: rgb(150, 82, 218) !important;
  --h1-font: "Architects Daughter", Neucha !important;
  --h2-color: rgb(222, 18, 120) !important;
  --h2-font: "Architects Daughter", Neucha !important;
  --h3-color: rgb(94, 51, 204) !important;
  --h3-font: "Architects Daughter", Neucha !important;
  --h4-color: rgba(61, 165, 9, 0) !important;
  --h4-font: "Architects Daughter", Neucha !important;
  --h5-color: rgb(0, 184, 122) !important;
  --h5-font: "Architects Daughter", Neucha !important;
  --h6-color: rgb(0, 111, 133) !important;
  --h6-font: "Architects Daughter", Neucha !important;
  --headerFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(51, 46, 56) !important;
  --highlight: rgba(255, 157, 0, 0.7) !important;
  --hr-color: rgb(255, 157, 0) !important;
  --icon-color: rgb(51, 46, 56) !important;
  --icon-color-active: rgb(150, 82, 218) !important;
  --icon-color-focused: rgb(89, 82, 96) !important;
  --icon-color-hover: rgb(51, 46, 56) !important;
  --inline-title-color: rgb(150, 82, 218) !important;
  --inline-title-font: "Architects Daughter", Neucha !important;
  --input-date-separator: rgb(46, 41, 50) !important;
  --input-placeholder-color: rgb(46, 41, 50) !important;
  --interactive-accent: rgb(159, 98, 223) !important;
  --interactive-accent-hover: rgb(168, 120, 227) !important;
  --interactive-accent-hsl: 270, 65%, 58.8% !important;
  --interactive-hover: rgb(199, 193, 205) !important;
  --interactive-normal: rgb(212, 207, 216) !important;
  --italic-color: rgb(216, 75, 108) !important;
  --light: rgb(199, 193, 205) !important;
  --lightgray: rgb(199, 193, 205) !important;
  --link-color: rgb(255, 157, 0) !important;
  --link-color-hover: rgb(255, 177, 51) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgba(0, 204, 187, 0) !important;
  --link-external-color-hover: rgba(0, 255, 234, 0) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(189, 88, 15) !important;
  --link-unresolved-color-hover: rgb(236, 109, 19) !important;
  --link-unresolved-decoration-color: rgba(150, 82, 218, 0.5) !important;
  --link-unresolved-opacity: 0.8 !important;
  --list-marker-color: rgb(46, 41, 50) !important;
  --list-marker-color-collapsed: rgb(150, 82, 218) !important;
  --list-marker-color-hover: rgb(51, 46, 56) !important;
  --menu-background: rgb(199, 193, 205) !important;
  --menu-border-color: rgb(128, 117, 138) !important;
  --metadata-border-color: rgb(255, 157, 0) !important;
  --metadata-divider-color: rgb(255, 157, 0) !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-input-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(89, 82, 96) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-font: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(51, 46, 56) !important;
  --metadata-label-text-color-hover: rgb(51, 46, 56) !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(89, 82, 96) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(128, 117, 138) !important;
  --modal-background: rgb(199, 193, 205) !important;
  --modal-border-color: rgb(89, 82, 96) !important;
  --nav-collapse-icon-color: rgb(46, 41, 50) !important;
  --nav-collapse-icon-color-collapsed: rgb(46, 41, 50) !important;
  --nav-heading-color: rgb(89, 82, 96) !important;
  --nav-heading-color-collapsed: rgb(46, 41, 50) !important;
  --nav-heading-color-collapsed-hover: rgb(51, 46, 56) !important;
  --nav-heading-color-hover: rgb(89, 82, 96) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: rgba(150, 82, 218, 0.15) !important;
  --nav-item-color: rgb(51, 46, 56) !important;
  --nav-item-color-active: rgb(89, 82, 96) !important;
  --nav-item-color-highlighted: rgb(168, 120, 227) !important;
  --nav-item-color-hover: rgb(89, 82, 96) !important;
  --nav-item-color-selected: rgb(89, 82, 96) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(46, 41, 50) !important;
  --nav-tag-color-active: rgb(51, 46, 56) !important;
  --nav-tag-color-hover: rgb(51, 46, 56) !important;
  --pdf-background: rgb(199, 193, 205) !important;
  --pdf-page-background: rgb(199, 193, 205) !important;
  --pdf-sidebar-background: rgb(199, 193, 205) !important;
  --pill-border-color: rgb(255, 157, 0) !important;
  --pill-border-color-hover: rgb(128, 117, 138) !important;
  --pill-color: rgb(51, 46, 56) !important;
  --pill-color-hover: rgb(89, 82, 96) !important;
  --pill-color-remove: rgb(46, 41, 50) !important;
  --pill-color-remove-hover: rgb(150, 82, 218) !important;
  --prompt-background: rgb(199, 193, 205) !important;
  --prompt-border-color: rgb(89, 82, 96) !important;
  --raised-background: color-mix(in srgb, rgb(199, 193, 205) 65%, transparent) linear-gradient(rgb(199, 193, 205), color-mix(in srgb, rgb(199, 193, 205) 65%, transparent)) !important;
  --ribbon-background: rgb(199, 193, 205) !important;
  --ribbon-background-collapsed: rgb(199, 193, 205) !important;
  --search-clear-button-color: rgb(51, 46, 56) !important;
  --search-icon-color: rgb(51, 46, 56) !important;
  --search-result-background: rgb(199, 193, 205) !important;
  --secondary: rgb(150, 82, 218) !important;
  --setting-group-heading-color: rgb(89, 82, 96) !important;
  --setting-items-background: rgb(191, 185, 198) !important;
  --setting-items-border-color: rgb(255, 157, 0) !important;
  --slider-thumb-border-color: rgb(128, 117, 138) !important;
  --slider-track-background: rgb(255, 157, 0) !important;
  --status-bar-background: rgb(199, 193, 205) !important;
  --status-bar-border-color: rgb(255, 157, 0) !important;
  --status-bar-text-color: rgb(51, 46, 56) !important;
  --suggestion-background: rgb(199, 193, 205) !important;
  --sync-avatar-color-1: rgb(226, 18, 88) !important;
  --sync-avatar-color-2: rgb(236, 109, 19) !important;
  --sync-avatar-color-3: rgb(255, 157, 0) !important;
  --sync-avatar-color-4: rgba(61, 165, 9, 0) !important;
  --sync-avatar-color-5: rgba(0, 255, 234, 0) !important;
  --sync-avatar-color-6: rgb(0, 111, 133) !important;
  --sync-avatar-color-7: rgb(150, 82, 218) !important;
  --sync-avatar-color-8: rgb(222, 18, 120) !important;
  --tab-background-active: rgb(199, 193, 205) !important;
  --tab-container-background: rgb(191, 185, 198) !important;
  --tab-divider-color: rgb(128, 117, 138) !important;
  --tab-outline-color: rgb(255, 157, 0) !important;
  --tab-switcher-background: rgb(199, 193, 205) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(199, 193, 205), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(150, 82, 218) !important;
  --tab-text-color: rgb(46, 41, 50) !important;
  --tab-text-color-active: rgb(51, 46, 56) !important;
  --tab-text-color-focused: rgb(51, 46, 56) !important;
  --tab-text-color-focused-active: rgb(89, 82, 96) !important;
  --tab-text-color-focused-active-current: rgb(89, 82, 96) !important;
  --tab-text-color-focused-highlighted: rgb(150, 82, 218) !important;
  --table-add-button-border-color: rgb(255, 157, 0) !important;
  --table-border-color: rgb(255, 157, 0) !important;
  --table-drag-handle-background-active: rgb(159, 98, 223) !important;
  --table-drag-handle-color: rgb(46, 41, 50) !important;
  --table-header-border-color: rgb(255, 157, 0) !important;
  --table-header-color: rgb(89, 82, 96) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(150, 82, 218, 0.1) !important;
  --table-selection-border-color: rgb(159, 98, 223) !important;
  --table-white-space: normal !important;
  --tag-background: rgba(150, 82, 218, 0.1) !important;
  --tag-background-hover: rgba(150, 82, 218, 0.2) !important;
  --tag-border-color: rgba(150, 82, 218, 0.15) !important;
  --tag-border-color-hover: rgba(150, 82, 218, 0.15) !important;
  --tag-color: rgb(150, 82, 218) !important;
  --tag-color-hover: rgb(150, 82, 218) !important;
  --tertiary: rgb(168, 120, 227) !important;
  --text-accent: rgb(150, 82, 218) !important;
  --text-accent-hover: rgb(168, 120, 227) !important;
  --text-error: rgb(226, 18, 88) !important;
  --text-faint: rgb(46, 41, 50) !important;
  --text-highlight-bg: rgba(255, 157, 0, 0.7) !important;
  --text-highlight-bg-active: rgba(255, 177, 51, 0.8) !important;
  --text-muted: rgb(51, 46, 56) !important;
  --text-normal: rgb(89, 82, 96) !important;
  --text-selection: rgba(150, 82, 218, 0.2) !important;
  --text-success: rgba(61, 165, 9, 0) !important;
  --text-warning: rgb(236, 109, 19) !important;
  --textHighlight: rgba(255, 157, 0, 0.7) !important;
  --titleFont: Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(199, 193, 205) !important;
  --titlebar-background-focused: rgb(191, 185, 198) !important;
  --titlebar-border-color: rgb(255, 157, 0) !important;
  --titlebar-text-color: rgb(51, 46, 56) !important;
  --titlebar-text-color-focused: rgb(89, 82, 96) !important;
  --titlebar-text-color-highlighted: rgb(168, 120, 227) !important;
  --vault-name-color: rgb(255, 157, 0) !important;
  --vault-profile-color: rgb(89, 82, 96) !important;
  --vault-profile-color-hover: rgb(89, 82, 96) !important;
  --wyrd-base-00: rgb(33, 30, 36) !important;
  --wyrd-base-10: rgb(38, 34, 42) !important;
  --wyrd-base-100: rgb(212, 207, 216) !important;
  --wyrd-base-20: rgb(46, 41, 50) !important;
  --wyrd-base-30: rgb(51, 46, 56) !important;
  --wyrd-base-40: rgb(89, 82, 96) !important;
  --wyrd-base-50: rgb(128, 117, 138) !important;
  --wyrd-base-50-rgb: 128, 117, 138 !important;
  --wyrd-base-60: rgb(166, 154, 177) !important;
  --wyrd-base-70: rgb(186, 179, 193) !important;
  --wyrd-base-80: rgb(191, 185, 198) !important;
  --wyrd-base-90: rgb(199, 193, 205) !important;
  --wyrd-base-95: rgb(204, 199, 209) !important;
  --wyrd-blue: rgb(0, 111, 133) !important;
  --wyrd-blue-dark: rgb(0, 68, 82) !important;
  --wyrd-blue-light: rgb(0, 153, 184) !important;
  --wyrd-blue-rgb: 0, 153, 184 !important;
  --wyrd-cyan: rgba(0, 255, 234, 0) !important;
  --wyrd-cyan-dark: rgba(0, 204, 187, 0) !important;
  --wyrd-cyan-light: rgba(51, 255, 238, 0) !important;
  --wyrd-cyan-rgb: 0, 255, 234 !important;
  --wyrd-green: rgba(61, 165, 9, 0) !important;
  --wyrd-green-dark: rgba(43, 116, 6, 0) !important;
  --wyrd-green-light: rgba(79, 213, 11, 0) !important;
  --wyrd-green-rgb: 51, 138, 7 !important;
  --wyrd-indigo: rgb(94, 51, 204) !important;
  --wyrd-indigo-dark: rgb(75, 41, 163) !important;
  --wyrd-indigo-light: rgb(126, 92, 214) !important;
  --wyrd-indigo-rgb: 94, 51, 204 !important;
  --wyrd-orange: rgb(236, 109, 19) !important;
  --wyrd-orange-dark: rgb(189, 88, 15) !important;
  --wyrd-orange-light: rgb(240, 139, 66) !important;
  --wyrd-orange-rgb: 236, 109, 19 !important;
  --wyrd-pink: rgb(222, 18, 120) !important;
  --wyrd-pink-dark: rgb(175, 14, 94) !important;
  --wyrd-pink-light: rgb(239, 52, 145) !important;
  --wyrd-pink-rgb: 223, 18, 120 !important;
  --wyrd-purple: rgb(150, 82, 218) !important;
  --wyrd-purple-dark: rgb(125, 44, 206) !important;
  --wyrd-purple-light: rgb(176, 125, 227) !important;
  --wyrd-purple-rgb: 150, 82, 218 !important;
  --wyrd-red: rgb(226, 18, 88) !important;
  --wyrd-red-dark: rgb(179, 15, 69) !important;
  --wyrd-red-light: rgb(239, 57, 118) !important;
  --wyrd-red-rgb: 228, 18, 88 !important;
  --wyrd-strike-color: rgb(166, 154, 177) !important;
  --wyrd-strike-color-hover: rgb(46, 41, 50) !important;
  --wyrd-teal: rgb(0, 184, 122) !important;
  --wyrd-teal-dark: rgb(0, 133, 88) !important;
  --wyrd-teal-light: rgb(0, 235, 156) !important;
  --wyrd-teal-rgb: 0, 184, 122 !important;
  --wyrd-yellow: rgb(255, 157, 0) !important;
  --wyrd-yellow-dark: rgb(204, 126, 0) !important;
  --wyrd-yellow-dark-rgb: 204, 126, 0 !important;
  --wyrd-yellow-light: rgb(255, 177, 51) !important;
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
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration: rgb(216, 75, 108);
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(216, 75, 108);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 75, 108) none 0px;
  text-decoration: rgb(216, 75, 108);
  text-decoration-color: rgb(216, 75, 108);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 157, 0, 0.7);
  color: rgb(89, 82, 96);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 82, 96) none 0px;
  text-decoration: rgb(89, 82, 96);
  text-decoration-color: rgb(89, 82, 96);
  transition: background-color 0.25s ease-in-out;
}

html[saved-theme="light"] body del {
  color: rgb(166, 154, 177);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 154, 177) none 0px;
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
  transition: color 0.25s ease-in-out;
}

html[saved-theme="light"] body p {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 46, 56) none 0px;
  text-decoration: rgb(51, 46, 56);
  text-decoration-color: rgb(51, 46, 56);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 204, 187);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 204, 187) none 0px;
  text-decoration: rgb(0, 204, 187);
  text-decoration-color: rgb(0, 204, 187);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 157, 0);
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 157, 0) none 0px;
  text-decoration: rgb(255, 157, 0);
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
  text-decoration: rgb(223, 18, 120);
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
  border-bottom-color: rgb(89, 82, 96);
  border-left-color: rgb(89, 82, 96);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
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
  border-left-color: rgb(159, 100, 223);
  border-right-color: rgb(89, 82, 96);
  border-top-color: rgb(89, 82, 96);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Neucha, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 154, 177);
  text-decoration: line-through rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 157, 0);
  border-left-color: rgb(255, 157, 0);
  border-right-color: rgb(255, 157, 0);
  border-top-color: rgb(255, 157, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(166, 154, 177);
  text-decoration: rgb(166, 154, 177);
  text-decoration-color: rgb(166, 154, 177);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(150, 82, 218);
  border-left-color: rgb(150, 82, 218);
  border-right-color: rgb(150, 82, 218);
  border-top-color: rgb(150, 82, 218);
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
  text-decoration: rgb(89, 82, 96);
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
  text-decoration: rgb(51, 46, 56);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(51, 46, 56);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(51, 46, 56);
  font-family: "??", Neucha, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(51, 46, 56);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 126, 0);
  border-left-color: rgb(204, 126, 0);
  border-right-color: rgb(204, 126, 0);
  border-top-color: rgb(204, 126, 0);
  color: rgb(204, 126, 0);
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
  text-decoration: rgb(51, 46, 56);
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
  text-decoration: rgb(51, 46, 56);
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
  text-decoration: rgb(51, 46, 56);
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
  text-decoration: underline dotted rgb(89, 82, 96);
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
}`,
  },
};
