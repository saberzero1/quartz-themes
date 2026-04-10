import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nordic",
    modes: ["light"],
    variations: [],
    fonts: ["deadhead-script", "gentium-book-basic", "norwester"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-color: hsl(210, 34%, 63%) !important;
  --accent-h: 210 !important;
  --accent-l: 63% !important;
  --accent-s: 34% !important;
  --background-modifier-active-hover: hsla(210, 34%, 63%, 0.1) !important;
  --background-modifier-border: #E5E9F0 !important;
  --background-modifier-border-focus: #D8DEE9 !important;
  --background-modifier-border-hover: #D8DEE9 !important;
  --background-modifier-error: #bf616a !important;
  --background-modifier-error-hover: #bf616a !important;
  --background-modifier-error-rgb: 191, 97, 106 !important;
  --background-modifier-form-field: white !important;
  --background-modifier-form-field-hover: white !important;
  --background-modifier-success: #a3be8c !important;
  --background-modifier-success-rgb: 163, 190, 140 !important;
  --background-primary: white !important;
  --background-primary-alt: #ECEFF4 !important;
  --background-secondary: #ECEFF4 !important;
  --background-secondary-alt: white !important;
  --bases-cards-background: white !important;
  --bases-cards-cover-background: #ECEFF4 !important;
  --bases-cards-shadow: 0 0 0 1px #E5E9F0 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #D8DEE9 !important;
  --bases-embed-border-color: #E5E9F0 !important;
  --bases-group-heading-property-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --bases-table-border-color: rgba(0, 0, 0, 0.5) !important;
  --bases-table-cell-background-active: white !important;
  --bases-table-cell-background-disabled: #ECEFF4 !important;
  --bases-table-cell-background-selected: hsla(210, 34%, 63%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #D8DEE9 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(209, 34.34%, 67.725%) !important;
  --bases-table-group-background: #ECEFF4 !important;
  --bases-table-header-background: white !important;
  --bases-table-header-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --bases-table-row-background-hover: rgba(255, 255, 255, 0.1) !important;
  --bases-table-summary-background: white !important;
  --blockquote-border-color: hsl(209, 34.34%, 67.725%) !important;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --bodyFont: Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 700 !important;
  --callout-bug: 191, 97, 106;
  --callout-default: 97, 153, 191;
  --callout-error: 191, 97, 106;
  --callout-example: 149, 142, 180;
  --callout-fail: 191, 97, 106;
  --callout-important: 97, 177, 191;
  --callout-info: 97, 153, 191;
  --callout-question: 208, 135, 112;
  --callout-success: 163, 190, 140;
  --callout-summary: 97, 177, 191;
  --callout-tip: 97, 177, 191;
  --callout-todo: 97, 153, 191;
  --callout-warning: 208, 135, 112;
  --canvas-background: white !important;
  --canvas-card-label-color: #4C566A !important;
  --canvas-color-1: 191, 97, 106 !important;
  --canvas-color-2: 208, 135, 112 !important;
  --canvas-color-3: 235, 203, 139 !important;
  --canvas-color-4: 163, 190, 140 !important;
  --canvas-color-5: 97, 177, 191 !important;
  --canvas-color-6: 149, 142, 180 !important;
  --canvas-dot-pattern: #E5E9F0 !important;
  --caret-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --checkbox-border-color: #4C566A !important;
  --checkbox-border-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --checkbox-color: hsl(209, 34.34%, 67.725%) !important;
  --checkbox-color-hover: hsl(207, 34.68%, 72.45%) !important;
  --checkbox-marker-color: white !important;
  --checklist-done-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --code-background: #ECEFF4 !important;
  --code-border-color: #E5E9F0 !important;
  --code-comment: #4C566A !important;
  --code-function: #ebcb8b !important;
  --code-important: #d08770 !important;
  --code-keyword: #b48ead !important;
  --code-normal: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --code-operator: #bf616a !important;
  --code-property: #61b1bf !important;
  --code-punctuation: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --code-string: #a3be8c !important;
  --code-tag: #bf616a !important;
  --code-value: #958eb4 !important;
  --codeFont: Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #4C566A !important;
  --collapse-icon-color-collapsed: hsl(210, 34%, 63%) !important;
  --color-accent: hsl(210, 34%, 63%) !important;
  --color-accent-1: hsl(209, 34.34%, 67.725%) !important;
  --color-accent-2: hsl(207, 34.68%, 72.45%) !important;
  --color-accent-hsl: 210, 34%, 63% !important;
  --color-base-00: white !important;
  --color-base-05: white !important;
  --color-base-10: #ECEFF4 !important;
  --color-base-100: #2E3440 !important;
  --color-base-20: #ECEFF4 !important;
  --color-base-25: #E5E9F0 !important;
  --color-base-30: #E5E9F0 !important;
  --color-base-35: #D8DEE9 !important;
  --color-base-40: #D8DEE9 !important;
  --color-base-50: #4C566A !important;
  --color-base-60: #434C5E !important;
  --color-base-70: #3B4252 !important;
  --color-blue: #6199bf !important;
  --color-blue-rgb: 97, 153, 191 !important;
  --color-cyan: #61b1bf !important;
  --color-cyan-rgb: 97, 177, 191 !important;
  --color-green: #a3be8c !important;
  --color-green-rgb: 163, 190, 140 !important;
  --color-orange: #d08770 !important;
  --color-orange-rgb: 208, 135, 112 !important;
  --color-pink: #b48ead !important;
  --color-pink-rgb: 180, 142, 173 !important;
  --color-purple: #958eb4 !important;
  --color-purple-rgb: 149, 142, 180 !important;
  --color-red: #bf616a !important;
  --color-red-rgb: 191, 97, 106 !important;
  --color-yellow: #ebcb8b !important;
  --color-yellow-rgb: 235, 203, 139 !important;
  --dark: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --dark0: #2e3440 !important;
  --dark0-raw: 46, 52, 64 !important;
  --dark1: #3b4252 !important;
  --dark1-raw: 59, 66, 82 !important;
  --dark2: #434c5e !important;
  --dark2-raw: 67, 76, 94 !important;
  --dark3: #4c566a !important;
  --dark3-raw: 76, 86, 106 !important;
  --darkgray: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --divider-color: #E5E9F0 !important;
  --divider-color-hover: hsl(209, 34.34%, 67.725%) !important;
  --dropdown-background: white !important;
  --dropdown-background-hover: #ECEFF4 !important;
  --embed-block-shadow-hover: 0 0 0 1px #E5E9F0, inset 0 0 0 1px #E5E9F0 !important;
  --embed-border-start: 2px solid hsl(209, 34.34%, 67.725%) !important;
  --file-header-background: white !important;
  --file-header-background-focused: white !important;
  --flair-background: white !important;
  --flair-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --font-mermaid: Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Avenir, Arial' !important;
  --font-text: Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Avenir' !important;
  --footnote-divider-color: #E5E9F0 !important;
  --footnote-id-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --footnote-id-color-no-occurrences: #4C566A !important;
  --frost0: #8fbcbb !important;
  --frost0-raw: 143, 188, 187 !important;
  --frost1: #88c0d0 !important;
  --frost1-raw: 136, 192, 208 !important;
  --frost2: #81a1c1 !important;
  --frost2-raw: 129, 161, 193 !important;
  --frost3: #5e81ac !important;
  --frost3-raw: 94, 129, 172 !important;
  --graph-line: #D8DEE9 !important;
  --graph-node: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --graph-node-attachment: #ebcb8b !important;
  --graph-node-focused: hsl(210, 34%, 63%) !important;
  --graph-node-tag: #a3be8c !important;
  --graph-node-unresolved: #4C566A !important;
  --graph-text: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --gray: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --h1-color: hsl(210, 34%, 63%) !important;
  --h2-color: hsl(210, 34%, 63%) !important;
  --h3-color: hsl(210, 34%, 63%) !important;
  --h4-color: hsl(210, 34%, 63%) !important;
  --h5-color: hsl(210, 34%, 63%) !important;
  --h6-color: hsl(210, 34%, 63%) !important;
  --header-color: hsl(210, 34%, 63%) !important;
  --header-font: "Norwester" !important;
  --headerFont: Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #4C566A !important;
  --highlight: hsl(210, 34%, 63%) !important;
  --hr-color: #E5E9F0 !important;
  --icon-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --icon-color-active: hsl(210, 34%, 63%) !important;
  --icon-color-focused: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --icon-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --inline-title-color: hsl(210, 34%, 63%) !important;
  --inline-title-font: "Norwester" !important;
  --input-date-separator: #4C566A !important;
  --input-placeholder-color: #4C566A !important;
  --interactive-accent: hsl(209, 34.34%, 67.725%) !important;
  --interactive-accent-hover: hsl(207, 34.68%, 72.45%) !important;
  --interactive-accent-hsl: 210, 34%, 63% !important;
  --interactive-hover: #ECEFF4 !important;
  --interactive-normal: white !important;
  --light: white !important;
  --light0: #d8dee9 !important;
  --light0-raw: 216, 222, 233 !important;
  --light1: #e5e9f0 !important;
  --light1-raw: 229, 233, 240 !important;
  --light2: #eceff4 !important;
  --light2-raw: 236, 239, 244 !important;
  --light3: #ffffff !important;
  --light3-raw: 255, 255, 255 !important;
  --lightgray: #ECEFF4 !important;
  --link-color: hsl(210, 34%, 63%) !important;
  --link-color-hover: hsl(207, 34.68%, 72.45%) !important;
  --link-external-color: hsl(210, 34%, 63%) !important;
  --link-external-color-hover: hsl(207, 34.68%, 72.45%) !important;
  --link-unresolved-color: hsl(210, 34%, 63%) !important;
  --link-unresolved-decoration-color: hsla(210, 34%, 63%, 0.3) !important;
  --list-marker-color: hsl(210, 34%, 63%) !important;
  --list-marker-color-collapsed: hsl(210, 34%, 63%) !important;
  --list-marker-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --menu-background: #ECEFF4 !important;
  --menu-border-color: #D8DEE9 !important;
  --metadata-border-color: #E5E9F0 !important;
  --metadata-divider-color: #E5E9F0 !important;
  --metadata-input-text-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --metadata-label-text-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #D8DEE9 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D8DEE9 !important;
  --modal-background: white !important;
  --modal-border-color: #D8DEE9 !important;
  --nav-collapse-icon-color: #4C566A !important;
  --nav-collapse-icon-color-collapsed: #4C566A !important;
  --nav-heading-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --nav-heading-color-collapsed: #4C566A !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --nav-heading-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --nav-item-background-selected: hsla(210, 34%, 63%, 0.15) !important;
  --nav-item-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --nav-item-color-active: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --nav-item-color-highlighted: hsl(210, 34%, 63%) !important;
  --nav-item-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --nav-item-color-selected: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --nav-tag-color: #4C566A !important;
  --nav-tag-color-active: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --nav-tag-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --nord-color-base-00: white !important;
  --nord-color-base-05: white !important;
  --nord-color-base-10: #ECEFF4 !important;
  --nord-color-base-100: #2E3440 !important;
  --nord-color-base-20: #ECEFF4 !important;
  --nord-color-base-25: #E5E9F0 !important;
  --nord-color-base-30: #E5E9F0 !important;
  --nord-color-base-35: #D8DEE9 !important;
  --nord-color-base-40: #D8DEE9 !important;
  --nord-color-base-50: #4C566A !important;
  --nord-color-base-60: #434C5E !important;
  --nord-color-base-70: #3B4252 !important;
  --nordic-darken: 0% !important;
  --pdf-background: white !important;
  --pdf-page-background: white !important;
  --pdf-sidebar-background: white !important;
  --pill-border-color: #E5E9F0 !important;
  --pill-border-color-hover: #D8DEE9 !important;
  --pill-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --pill-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --pill-color-remove: #4C566A !important;
  --pill-color-remove-hover: hsl(210, 34%, 63%) !important;
  --prompt-background: white !important;
  --prompt-border-color: #D8DEE9 !important;
  --raised-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --ribbon-background: #ECEFF4 !important;
  --ribbon-background-collapsed: white !important;
  --search-clear-button-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --search-icon-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --search-result-background: white !important;
  --secondary: hsl(210, 34%, 63%) !important;
  --setting-group-heading-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --setting-items-background: #ECEFF4 !important;
  --setting-items-border-color: #E5E9F0 !important;
  --slider-thumb-border-color: #D8DEE9 !important;
  --slider-track-background: #E5E9F0 !important;
  --statblock-background-color: rgba(0, 0, 0, 0.05) !important;
  --statblock-bar-color: #5e81ac !important;
  --statblock-border-color: #eceff4 !important;
  --statblock-box-shadow-color: #eceff4 !important;
  --statblock-font-color: #81a1c1 !important;
  --statblock-heading-font-color: #5e81ac !important;
  --statblock-image-border-color: #81a1c1 !important;
  --statblock-primary-color: #81a1c1 !important;
  --statblock-property-font-color: #81a1c1 !important;
  --statblock-property-name-font-color: #5e81ac !important;
  --statblock-rule-color: #5e81ac !important;
  --statblock-section-heading-border-color: #81a1c1 !important;
  --statblock-section-heading-font-color: #5e81ac !important;
  --status-bar-background: #ECEFF4 !important;
  --status-bar-border-color: #E5E9F0 !important;
  --status-bar-text-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --suggestion-background: white !important;
  --sync-avatar-color-1: #bf616a !important;
  --sync-avatar-color-2: #d08770 !important;
  --sync-avatar-color-3: #ebcb8b !important;
  --sync-avatar-color-4: #a3be8c !important;
  --sync-avatar-color-5: #61b1bf !important;
  --sync-avatar-color-6: #6199bf !important;
  --sync-avatar-color-7: #958eb4 !important;
  --sync-avatar-color-8: #b48ead !important;
  --tab-background-active: white !important;
  --tab-container-background: #ECEFF4 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #D8DEE9 !important;
  --tab-outline-color: hsl(210, 34%, 63%) !important;
  --tab-outline-width: 2px !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-switcher-background: #ECEFF4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 34%, 63%) !important;
  --tab-text-color: #4C566A !important;
  --tab-text-color-active: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --tab-text-color-focused: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --tab-text-color-focused-active: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --tab-text-color-focused-active-current: #81a1c1 !important;
  --tab-text-color-focused-highlighted: hsl(210, 34%, 63%) !important;
  --table-add-button-border-color: #E5E9F0 !important;
  --table-background: rgba(255, 255, 255, 0.05) !important;
  --table-border-color: rgba(0, 0, 0, 0.5) !important;
  --table-drag-handle-background-active: hsl(209, 34.34%, 67.725%) !important;
  --table-drag-handle-color: #4C566A !important;
  --table-header-background: rgba(0, 0, 0, 0.25) !important;
  --table-header-background-hover: rgba(255, 255, 255, 0.1) !important;
  --table-header-border-color: rgba(0, 0, 0, 0.5) !important;
  --table-header-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --table-header-font: "Norwester" !important;
  --table-row-alt-background: rgba(0, 0, 0, 0.05) !important;
  --table-row-alt-background-hover: rgba(255, 255, 255, 0.1) !important;
  --table-row-background-hover: rgba(255, 255, 255, 0.1) !important;
  --table-selection: hsla(210, 34%, 63%, 0.1) !important;
  --table-selection-border-color: hsl(209, 34.34%, 67.725%) !important;
  --tag-background: hsla(210, 34%, 63%, 0.1) !important;
  --tag-background-hover: hsla(210, 34%, 63%, 0.2) !important;
  --tag-border-color: hsla(210, 34%, 63%, 0.15) !important;
  --tag-border-color-hover: hsla(210, 34%, 63%, 0.15) !important;
  --tag-color: hsl(210, 34%, 63%) !important;
  --tag-color-hover: hsl(210, 34%, 63%) !important;
  --tertiary: hsl(207, 34.68%, 72.45%) !important;
  --text-accent: hsl(210, 34%, 63%) !important;
  --text-accent-hover: hsl(207, 34.68%, 72.45%) !important;
  --text-error: #bf616a !important;
  --text-faint: #4C566A !important;
  --text-highlight-bg: hsl(210, 34%, 63%) !important;
  --text-muted: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --text-normal: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --text-selection: hsla(210, 34%, 63%, 0.2) !important;
  --text-success: #a3be8c !important;
  --text-warning: #d08770 !important;
  --textHighlight: hsl(210, 34%, 63%) !important;
  --titleFont: Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #ECEFF4 !important;
  --titlebar-background-focused: white !important;
  --titlebar-border-color: #E5E9F0 !important;
  --titlebar-text-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 20%) !important;
  --titlebar-text-color-focused: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --vault-profile-color: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --vault-profile-color-hover: color-mix(in srgb, hsl(210, 34%, 63%), #000 45%) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 239, 244);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

html body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0.5);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .canvas-node {
  border-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .canvas-node-content {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .canvas-node-file {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .canvas-node-group {
  border-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .canvas-sidebar {
  border-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .note-properties {
  border-color: rgb(229, 233, 240);
}

html body .note-properties-key {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .note-properties-row {
  border-color: color(srgb 0.40336 0.504 0.60464);
}

html body .note-properties-tags {
  background-color: rgba(129, 161, 193, 0.1);
  color: rgb(129, 161, 193);
}

html body .note-properties-value {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 239, 244);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 233, 240);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 239, 244);
  border-left-color: rgb(229, 233, 240);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body div#quartz-root {
  color: color(srgb 0.27731 0.3465 0.41569);
}`,
    typography: `html body .page article p > b, html b {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .page article p > em, html em {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .page article p > i, html i {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .page article p > strong, html strong {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .text-highlight {
  background-color: rgb(129, 161, 193);
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body del {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body h1.article-title {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(76, 86, 106);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(144, 174, 201);
  border-color: rgb(144, 174, 201);
}

html body p {
  color: color(srgb 0.40336 0.504 0.60464);
  outline: color(srgb 0.40336 0.504 0.60464) none 0px;
  text-decoration-color: color(srgb 0.40336 0.504 0.60464);
}`,
    links: `html body a.external, html footer a {
  color: rgb(129, 161, 193);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration-color: rgb(129, 161, 193);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 161, 193);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration-color: rgb(129, 161, 193);
}

html body a.internal.broken {
  color: rgb(129, 161, 193);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgba(129, 161, 193, 0.3);
  text-decoration-color: rgba(129, 161, 193, 0.3);
}`,
    lists: `html body dd {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body dt {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body ol > li {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body ol.overflow {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body ul > li {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body ul.overflow {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(76, 86, 106);
}

html body blockquote {
  background-color: rgb(236, 239, 244);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html body .table-container {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body table {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.125px;
}

html body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.05);
}

html body tbody tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

html body td {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body th {
  border-bottom-color: rgba(0, 0, 0, 0.5);
  border-left-color: rgba(0, 0, 0, 0.5);
  border-right-color: rgba(0, 0, 0, 0.5);
  border-top-color: rgba(0, 0, 0, 0.5);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body tr {
  background-color: rgba(0, 0, 0, 0.25);
}`,
    code: `html body code {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}

html body pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}`,
    images: `html body audio {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body figcaption {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body img {
  border-bottom-color: rgb(129, 161, 193);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(129, 161, 193);
  border-top-color: rgb(129, 161, 193);
}

html body video {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(236, 239, 244);
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
}

html body .footnotes {
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .transclude {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: rgb(144, 174, 201);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .transclude-inner {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

html body li.task-list-item[data-task='!'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='*'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='-'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='/'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='>'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='?'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='I'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='S'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='b'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='c'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='d'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='f'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='i'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='k'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='l'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='p'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='u'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.task-list-item[data-task='w'] {
  color: color(srgb 0.27731 0.3465 0.41569);
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(97, 153, 191);
  border-left-color: rgb(97, 153, 191);
  border-right-color: rgb(97, 153, 191);
  border-top-color: rgb(97, 153, 191);
  color: rgb(97, 153, 191);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(97, 153, 191);
}

html body .callout > .callout-content {
  padding-left: 10px;
  padding-right: 10px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: 97, 177, 191;
  background-color: rgba(97, 177, 191, 0.1);
  border-bottom-color: rgba(97, 177, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 177, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 177, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 177, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="example"] {
  --callout-color: 149, 142, 180;
  background-color: rgba(149, 142, 180, 0.1);
  border-bottom-color: rgba(149, 142, 180, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(149, 142, 180, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(149, 142, 180, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(149, 142, 180, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(191, 97, 106, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(191, 97, 106, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(191, 97, 106, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="info"] {
  --callout-color: 97, 153, 191;
  background-color: rgba(97, 153, 191, 0.1);
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  --callout-color: 97, 153, 191;
  background-color: rgba(97, 153, 191, 0.1);
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="question"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 135, 112, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(208, 135, 112, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(208, 135, 112, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgba(158, 158, 158, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(163, 190, 140, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(163, 190, 140, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(163, 190, 140, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 97, 177, 191;
  background-color: rgba(97, 177, 191, 0.1);
  border-bottom-color: rgba(97, 177, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 177, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 177, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 177, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 97, 153, 191;
  background-color: rgba(97, 153, 191, 0.1);
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 135, 112, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(208, 135, 112, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(208, 135, 112, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
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
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html body .search > .search-container > .search-space > * {
  color: color(srgb 0.27731 0.3465 0.41569);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.27731 0.3465 0.41569) none 0px;
  text-decoration-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(129, 161, 193);
}

html body h1 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

html body h2 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

html body h3 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

html body h4 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

html body h5 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

html body h6 {
  color: rgb(129, 161, 193);
  font-family: Norwester;
}

html body hr {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
}`,
    scrollbars: `html body .callout {
  --callout-color: 97, 153, 191;
  border-bottom-color: rgba(97, 153, 191, 0.5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 153, 191, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(97, 153, 191, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(97, 153, 191, 0.5);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body ::-webkit-scrollbar-thumb {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.40336 0.504 0.60464);
}`,
    toc: `html body details.toc summary::marker {
  color: color(srgb 0.27731 0.3465 0.41569);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}`,
    footer: `html body footer {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: color(srgb 0.40336 0.504 0.60464);
}

html body footer ul li a {
  color: color(srgb 0.40336 0.504 0.60464);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.40336 0.504 0.60464);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body li.section-li > .section .meta {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.40336 0.504 0.60464);
}

html body ul.section-ul {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .darkmode svg {
  color: color(srgb 0.40336 0.504 0.60464);
  stroke: color(srgb 0.40336 0.504 0.60464);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}

html body .breadcrumb-element p {
  color: rgb(76, 86, 106);
}`,
    misc: `html body .katex-display {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body .metadata {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: color(srgb 0.40336 0.504 0.60464);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
  font-family: "??", Avenir, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(236, 239, 244);
}

html body .page-header h2.page-title {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body abbr {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body details {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body input[type=text] {
  border-bottom-color: color(srgb 0.40336 0.504 0.60464);
  border-left-color: color(srgb 0.40336 0.504 0.60464);
  border-right-color: color(srgb 0.40336 0.504 0.60464);
  border-top-color: color(srgb 0.40336 0.504 0.60464);
  color: color(srgb 0.40336 0.504 0.60464);
}

html body kbd {
  background-color: rgb(236, 239, 244);
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body progress {
  border-bottom-color: color(srgb 0.27731 0.3465 0.41569);
  border-left-color: color(srgb 0.27731 0.3465 0.41569);
  border-right-color: color(srgb 0.27731 0.3465 0.41569);
  border-top-color: color(srgb 0.27731 0.3465 0.41569);
}

html body sub {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body summary {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body sup {
  color: color(srgb 0.27731 0.3465 0.41569);
}

html body ul.tags > li {
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
  color: rgb(129, 161, 193);
}`,
  },
};
