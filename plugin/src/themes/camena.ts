import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "camena",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["avenir", "cascadia-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: hsl(258, 88%, 66%) !important;
  --accent-rgb: from hsl(258, 88%, 66%) r g b !important;
  --background-modifier-border: hsl(258, 29.33333%, 35%) !important;
  --background-modifier-border-focus: hsl(258, 29.33333%, 45%) !important;
  --background-modifier-border-hover: hsl(258, 29.33333%, 40%) !important;
  --background-modifier-error: hsl(5, 88%, 66%) !important;
  --background-modifier-error-hover: hsl(5, 88%, 66%) !important;
  --background-modifier-error-rgb: from hsl(5, 88%, 66%) r g b !important;
  --background-modifier-form-field: hsl(258, 29.33333%, 20%) !important;
  --background-modifier-form-field-hover: hsl(258, 29.33333%, 20%) !important;
  --background-modifier-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --background-modifier-message: hsl(258, 88%, 66%) !important;
  --background-modifier-success: hsl(100, 88%, 66%) !important;
  --background-modifier-success-rgb: from hsl(100, 88%, 66%) r g b !important;
  --background-primary: hsl(258, 29.33333%, 10%) !important;
  --background-primary-alt: hsl(258, 29.33333%, 20%) !important;
  --background-secondary: hsl(258, 29.33333%, 15%) !important;
  --background-secondary-alt: hsl(258, 29.33333%, 15%) !important;
  --bases-cards-background: hsl(258, 29.33333%, 10%) !important;
  --bases-cards-cover-background: hsl(258, 29.33333%, 20%) !important;
  --bases-cards-font-size: 0.875rem !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258, 29.33333%, 35%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(258, 29.33333%, 40%) !important;
  --bases-embed-border-color: hsl(258, 29.33333%, 35%) !important;
  --bases-group-heading-property-color: hsl(258, 29.33333%, 50%) !important;
  --bases-group-heading-value-size: 0.875rem !important;
  --bases-table-border-color: hsl(258, 88%, 66%) !important;
  --bases-table-cell-background-active: hsl(258, 29.33333%, 10%) !important;
  --bases-table-cell-background-disabled: hsl(258, 29.33333%, 20%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258, 29.33333%, 45%) !important;
  --bases-table-font-size: 0.875rem !important;
  --bases-table-group-background: hsl(258, 29.33333%, 20%) !important;
  --bases-table-header-background: hsl(258, 29.33333%, 10%) !important;
  --bases-table-header-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --bases-table-header-color: hsl(258, 29.33333%, 10%) !important;
  --bases-table-row-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.15) !important;
  --bases-table-summary-background: hsl(258, 29.33333%, 10%) !important;
  --bases-table-summary-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --blue-h: 210 !important;
  --blur-background: color-mix(in srgb, hsl(258, 29.33333%, 15%) 65%, transparent) linear-gradient(hsl(258, 29.33333%, 15%), color-mix(in srgb, hsl(258, 29.33333%, 15%) 65%, transparent)) !important;
  --bodyFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-bug: from hsl(5, 88%, 66%) r g b;
  --callout-color: from hsl(258, 88%, 66%) r g b;
  --callout-default: from hsl(210, 88%, 66%) r g b;
  --callout-error: from hsl(5, 88%, 66%) r g b;
  --callout-example: from hsl(270, 88%, 66%) r g b;
  --callout-fail: from hsl(5, 88%, 66%) r g b;
  --callout-important: from hsl(185, 88%, 66%) r g b;
  --callout-info: from hsl(210, 88%, 66%) r g b;
  --callout-question: from hsl(25, 88%, 66%) r g b;
  --callout-quote: from hsl(258, 88%, 66%) r g b;
  --callout-success: from hsl(100, 88%, 66%) r g b;
  --callout-summary: from hsl(185, 88%, 66%) r g b;
  --callout-tip: from hsl(185, 88%, 66%) r g b;
  --callout-todo: from hsl(210, 88%, 66%) r g b;
  --callout-warning: from hsl(25, 88%, 66%) r g b;
  --canvas-background: hsl(258, 29.33333%, 10%) !important;
  --canvas-card-label-color: hsl(258, 29.33333%, 35%) !important;
  --canvas-color-1: from hsl(5, 88%, 66%) r g b !important;
  --canvas-color-2: from hsl(25, 88%, 66%) r g b !important;
  --canvas-color-3: from hsl(50, 88%, 66%) r g b !important;
  --canvas-color-4: from hsl(100, 88%, 66%) r g b !important;
  --canvas-color-5: from hsl(185, 88%, 66%) r g b !important;
  --canvas-color-6: from hsl(270, 88%, 66%) r g b !important;
  --canvas-dot-pattern: hsl(258, 29.33333%, 35%) !important;
  --caret-color: hsl(258, 29.33333%, 80%) !important;
  --checkbox-border-color: hsl(258, 29.33333%, 35%) !important;
  --checkbox-border-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-color: hsl(258, 29.33333%, 50%) !important;
  --checkbox-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: hsl(258, 29.33333%, 10%) !important;
  --checklist-done-color: hsl(258, 29.33333%, 50%) !important;
  --code-background: rgba(from hsl(258, 88%, 66%) r g b / 0.15) !important;
  --code-border-color: hsl(258, 29.33333%, 35%) !important;
  --code-bracket-background: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --code-comment: hsl(258, 29.33333%, 45%) !important;
  --code-function: hsl(50, 88%, 66%) !important;
  --code-important: hsl(25, 88%, 66%) !important;
  --code-keyword: hsl(320, 88%, 66%) !important;
  --code-normal: hsl(258, 88%, 66%) !important;
  --code-operator: hsl(5, 88%, 66%) !important;
  --code-property: hsl(185, 88%, 66%) !important;
  --code-punctuation: hsl(258, 29.33333%, 50%) !important;
  --code-string: hsl(100, 88%, 66%) !important;
  --code-tag: hsl(5, 88%, 66%) !important;
  --code-value: hsl(270, 88%, 66%) !important;
  --codeFont: ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(258, 29.33333%, 35%) !important;
  --color-base-00: hsl(258, 29.33333%, 10%) !important;
  --color-base-05: hsl(258, 29.33333%, 15%) !important;
  --color-base-10: hsl(258, 29.33333%, 20%) !important;
  --color-base-100: hsl(258, 29.33333%, 80%) !important;
  --color-base-20: hsl(258, 29.33333%, 25%) !important;
  --color-base-25: hsl(258, 29.33333%, 30%) !important;
  --color-base-30: hsl(258, 29.33333%, 35%) !important;
  --color-base-35: hsl(258, 29.33333%, 40%) !important;
  --color-base-40: hsl(258, 29.33333%, 45%) !important;
  --color-base-50: hsl(258, 29.33333%, 50%) !important;
  --color-base-60: hsl(258, 29.33333%, 60%) !important;
  --color-base-70: hsl(258, 29.33333%, 70%) !important;
  --color-blue: hsl(210, 88%, 66%) !important;
  --color-blue-rgb: from hsl(210, 88%, 66%) r g b !important;
  --color-cyan: hsl(185, 88%, 66%) !important;
  --color-cyan-rgb: from hsl(185, 88%, 66%) r g b !important;
  --color-green: hsl(100, 88%, 66%) !important;
  --color-green-rgb: from hsl(100, 88%, 66%) r g b !important;
  --color-grey: hsl(0, 0%, 66%) !important;
  --color-grey-rgb: from hsl(0, 0%, 66%) r g b !important;
  --color-orange: hsl(25, 88%, 66%) !important;
  --color-orange-rgb: from hsl(25, 88%, 66%) r g b !important;
  --color-pink: hsl(320, 88%, 66%) !important;
  --color-pink-rgb: from hsl(320, 88%, 66%) r g b !important;
  --color-purple: hsl(270, 88%, 66%) !important;
  --color-purple-rgb: from hsl(270, 88%, 66%) r g b !important;
  --color-red: hsl(5, 88%, 66%) !important;
  --color-red-rgb: from hsl(5, 88%, 66%) r g b !important;
  --color-yellow: hsl(50, 88%, 66%) !important;
  --color-yellow-rgb: from hsl(50, 88%, 66%) r g b !important;
  --cyan-h: 185 !important;
  --dark: hsl(258, 29.33333%, 80%) !important;
  --darkgray: hsl(258, 29.33333%, 80%) !important;
  --divider-color: hsl(258, 29.33333%, 35%) !important;
  --dropdown-background: hsl(258, 29.33333%, 15%) !important;
  --dropdown-background-hover: hsl(258, 29.33333%, 25%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(258, 29.33333%, 35%), inset 0 0 0 1px hsl(258, 29.33333%, 35%) !important;
  --embed-max-height: 80vh !important;
  --embed-padding: 0 !important;
  --file-header-background: hsl(258, 29.33333%, 10%) !important;
  --file-header-background-focused: hsl(258, 29.33333%, 10%) !important;
  --file-header-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(258, 29.33333%, 15%) !important;
  --flair-color: hsl(258, 29.33333%, 80%) !important;
  --font-heading-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif !important;
  --font-interface: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif !important;
  --font-mermaid: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace !important;
  --font-print: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, Arial' !important;
  --font-small: 0.933rem !important;
  --font-smaller: 0.875rem !important;
  --font-smallest: 0.8rem !important;
  --font-text: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif !important;
  --footnote-divider-color: hsl(258, 29.33333%, 35%) !important;
  --footnote-id-color: hsl(258, 29.33333%, 50%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 29.33333%, 35%) !important;
  --footnote-input-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --footnote-size: 0.875rem !important;
  --graph-line: hsl(258, 29.33333%, 35%) !important;
  --graph-node: hsl(5, 88%, 66%) !important;
  --graph-node-attachment: hsl(210, 88%, 66%) !important;
  --graph-node-tag: hsl(50, 88%, 66%) !important;
  --graph-node-unresolved: rgba(from hsl(5, 88%, 66%) r g b / 0.8) !important;
  --graph-text: hsl(258, 29.33333%, 80%) !important;
  --gray: hsl(258, 29.33333%, 50%) !important;
  --green-h: 100 !important;
  --h1-color: hsl(258, 88%, 66%) !important;
  --h1-size: 2.488em !important;
  --h2-color: hsl(258, 88%, 66%) !important;
  --h2-size: 2.047em !important;
  --h3-color: hsl(258, 88%, 66%) !important;
  --h3-size: 1.728em !important;
  --h4-color: hsl(258, 88%, 66%) !important;
  --h4-size: 1.44em !important;
  --h5-color: hsl(258, 88%, 66%) !important;
  --h5-size: 1.2em !important;
  --h6-color: hsl(258, 88%, 66%) !important;
  --headerFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(258, 29.33333%, 35%) !important;
  --heading-spacing: 1.2em !important;
  --highlight: rgba(from hsl(258, 88%, 66%) r g b / 0.25) !important;
  --hr-color: hsl(258, 88%, 66%) !important;
  --hr-thickness: 0.1rem !important;
  --icon-color: hsl(258, 29.33333%, 50%) !important;
  --icon-color-focused: hsl(258, 29.33333%, 60%) !important;
  --icon-color-hover: hsl(258, 29.33333%, 50%) !important;
  --indentation-guide-color: rgba(255, 255, 255 / 0.12) !important;
  --indentation-guide-color-active: rgba(255, 255, 255 / 0.3) !important;
  --inline-title-color: hsl(258, 88%, 66%) !important;
  --inline-title-size: 2.488em !important;
  --input-date-separator: hsl(258, 29.33333%, 35%) !important;
  --input-placeholder-color: hsl(258, 29.33333%, 35%) !important;
  --interactive-hover: hsl(258, 29.33333%, 25%) !important;
  --interactive-normal: hsl(258, 29.33333%, 15%) !important;
  --light: hsl(258, 29.33333%, 10%) !important;
  --lightgray: hsl(258, 29.33333%, 15%) !important;
  --link-color: hsl(258, 88%, 66%) !important;
  --link-color-hover: hsl(258, 88%, 66%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: wavy !important;
  --link-external-color: hsl(258, 88%, 66%) !important;
  --link-external-color-hover: hsl(258, 88%, 66%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(258, 88%, 66%) !important;
  --link-unresolved-decoration-color: rgba(from hsl(258, 88%, 66%) r g b / 0.3) !important;
  --list-marker-color: hsl(258, 29.33333%, 50%) !important;
  --list-marker-color-hover: hsl(258, 29.33333%, 50%) !important;
  --menu-background: hsl(258, 29.33333%, 15%) !important;
  --menu-border-color: hsl(258, 29.33333%, 40%) !important;
  --metadata-border-color: hsl(258, 29.33333%, 35%) !important;
  --metadata-divider-color: hsl(258, 29.33333%, 35%) !important;
  --metadata-input-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --metadata-input-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.875rem !important;
  --metadata-input-text-color: hsl(258, 29.33333%, 80%) !important;
  --metadata-label-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --metadata-label-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.875rem !important;
  --metadata-label-text-color: hsl(258, 29.33333%, 50%) !important;
  --metadata-label-text-color-hover: hsl(258, 29.33333%, 50%) !important;
  --metadata-property-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258, 29.33333%, 45%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(258, 29.33333%, 40%) !important;
  --modal-background: hsl(258, 29.33333%, 10%) !important;
  --modal-border-color: hsl(258, 29.33333%, 45%) !important;
  --nav-collapse-icon-color: hsl(258, 29.33333%, 35%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 29.33333%, 35%) !important;
  --nav-heading-color: hsl(258, 29.33333%, 80%) !important;
  --nav-heading-color-collapsed: hsl(258, 29.33333%, 35%) !important;
  --nav-heading-color-collapsed-hover: hsl(258, 29.33333%, 50%) !important;
  --nav-heading-color-hover: hsl(258, 29.33333%, 80%) !important;
  --nav-indentation-guide-color: rgba(255, 255, 255 / 0.12) !important;
  --nav-item-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --nav-item-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --nav-item-color: hsl(258, 29.33333%, 50%) !important;
  --nav-item-color-active: hsl(258, 29.33333%, 60%) !important;
  --nav-item-color-hover: hsl(258, 29.33333%, 80%) !important;
  --nav-item-color-selected: hsl(258, 29.33333%, 80%) !important;
  --nav-tag-color: hsl(258, 29.33333%, 35%) !important;
  --nav-tag-color-active: hsl(258, 29.33333%, 50%) !important;
  --nav-tag-color-hover: hsl(258, 29.33333%, 50%) !important;
  --opacity: 0.15 !important;
  --orange-h: 25 !important;
  --p-spacing: 1.5rem !important;
  --pdf-background: hsl(258, 29.33333%, 10%) !important;
  --pdf-page-background: hsl(258, 29.33333%, 10%) !important;
  --pdf-shadow: 0 0 0 1px hsl(258, 29.33333%, 35%) !important;
  --pdf-sidebar-background: hsl(258, 29.33333%, 10%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(258, 29.33333%, 35%) !important;
  --pill-border-color: hsl(258, 29.33333%, 35%) !important;
  --pill-border-color-hover: hsl(258, 29.33333%, 40%) !important;
  --pill-color: hsl(258, 29.33333%, 50%) !important;
  --pill-color-hover: hsl(258, 29.33333%, 80%) !important;
  --pill-color-remove: hsl(258, 29.33333%, 35%) !important;
  --pink-h: 320 !important;
  --prompt-background: hsl(258, 29.33333%, 10%) !important;
  --prompt-border-color: hsl(258, 29.33333%, 45%) !important;
  --purple-h: 270 !important;
  --raised-background: color-mix(in srgb, hsl(258, 29.33333%, 15%) 65%, transparent) linear-gradient(hsl(258, 29.33333%, 15%), color-mix(in srgb, hsl(258, 29.33333%, 15%) 65%, transparent)) !important;
  --red-h: 5 !important;
  --ribbon-background: hsl(258, 29.33333%, 15%) !important;
  --ribbon-background-collapsed: hsl(258, 29.33333%, 10%) !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255 / 0.2) !important;
  --scrollbar-bg: rgba(255, 255, 255 / 0.05) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255 / 0.1) !important;
  --search-clear-button-color: hsl(258, 29.33333%, 50%) !important;
  --search-icon-color: hsl(258, 29.33333%, 50%) !important;
  --search-result-background: hsl(258, 29.33333%, 10%) !important;
  --setting-group-heading-color: hsl(258, 29.33333%, 80%) !important;
  --setting-items-background: hsl(258, 29.33333%, 20%) !important;
  --setting-items-border-color: hsl(258, 29.33333%, 35%) !important;
  --slider-thumb-border-color: hsl(258, 29.33333%, 40%) !important;
  --slider-track-background: hsl(258, 29.33333%, 35%) !important;
  --status-bar-background: hsl(258, 29.33333%, 15%) !important;
  --status-bar-border-color: hsl(258, 29.33333%, 50%) !important;
  --status-bar-text-color: hsl(258, 29.33333%, 50%) !important;
  --suggestion-background: hsl(258, 29.33333%, 10%) !important;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255 / 0.15) !important;
  --sync-avatar-color-1: hsl(5, 88%, 66%) !important;
  --sync-avatar-color-2: hsl(25, 88%, 66%) !important;
  --sync-avatar-color-3: hsl(50, 88%, 66%) !important;
  --sync-avatar-color-4: hsl(100, 88%, 66%) !important;
  --sync-avatar-color-5: hsl(185, 88%, 66%) !important;
  --sync-avatar-color-6: hsl(210, 88%, 66%) !important;
  --sync-avatar-color-7: hsl(270, 88%, 66%) !important;
  --sync-avatar-color-8: hsl(320, 88%, 66%) !important;
  --tab-background-active: hsl(258, 29.33333%, 10%) !important;
  --tab-container-background: hsl(258, 29.33333%, 15%) !important;
  --tab-divider-color: hsl(258, 29.33333%, 40%) !important;
  --tab-outline-color: hsl(258, 29.33333%, 35%) !important;
  --tab-switcher-background: hsl(258, 29.33333%, 15%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 29.33333%, 15%), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255 / 0.05) !important;
  --tab-text-color: hsl(258, 29.33333%, 35%) !important;
  --tab-text-color-active: hsl(258, 29.33333%, 50%) !important;
  --tab-text-color-focused: hsl(258, 29.33333%, 50%) !important;
  --tab-text-color-focused-active: hsl(258, 29.33333%, 50%) !important;
  --tab-text-color-focused-active-current: hsl(258, 29.33333%, 60%) !important;
  --table-add-button-border-color: hsl(258, 29.33333%, 35%) !important;
  --table-add-button-border-width: 0.1rem !important;
  --table-border-color: hsl(258, 88%, 66%) !important;
  --table-border-width: 0.1rem !important;
  --table-column-first-border-width: 0.1rem !important;
  --table-column-last-border-width: 0.1rem !important;
  --table-drag-handle-color: hsl(258, 29.33333%, 35%) !important;
  --table-header-background: hsl(258, 88%, 66%) !important;
  --table-header-background-hover: hsl(258, 88%, 66%) !important;
  --table-header-border-color: hsl(258, 88%, 66%) !important;
  --table-header-border-width: 0.1rem !important;
  --table-header-color: hsl(258, 29.33333%, 10%) !important;
  --table-row-alt-background: rgba(from hsl(258, 88%, 66%) r g b / 0.15) !important;
  --table-row-alt-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.3) !important;
  --table-row-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.15) !important;
  --table-row-last-border-width: 0.1rem !important;
  --tag-size: 0.875rem !important;
  --text-error: hsl(5, 88%, 66%) !important;
  --text-faint: hsl(258, 29.33333%, 35%) !important;
  --text-highlight-bg: rgba(from hsl(258, 88%, 66%) r g b / 0.25) !important;
  --text-highlight-bg-rgb: from hsl(258, 88%, 66%) r g b !important;
  --text-muted: hsl(258, 29.33333%, 50%) !important;
  --text-normal: hsl(258, 29.33333%, 80%) !important;
  --text-success: hsl(100, 88%, 66%) !important;
  --text-warning: hsl(25, 88%, 66%) !important;
  --textHighlight: rgba(from hsl(258, 88%, 66%) r g b / 0.25) !important;
  --titleFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(258, 29.33333%, 15%) !important;
  --titlebar-background-focused: hsl(258, 29.33333%, 15%) !important;
  --titlebar-border-color: hsl(258, 29.33333%, 35%) !important;
  --titlebar-text-color: hsl(258, 29.33333%, 50%) !important;
  --titlebar-text-color-focused: hsl(258, 29.33333%, 80%) !important;
  --vault-profile-color: hsl(258, 29.33333%, 60%) !important;
  --vault-profile-color-hover: hsl(258, 29.33333%, 60%) !important;
  --workspace-background-translucent: rgba(0, 0, 0 / 0.6) !important;
  --yellow-h: 50 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 27, 49);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(23, 18, 33);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(138, 92, 245);
  color: rgb(23, 18, 33);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(34, 27, 49);
  border-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(79, 63, 115);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 27, 49);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(79, 63, 115);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 27, 49);
  border-left-color: rgb(79, 63, 115);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(23, 18, 33);
  color: rgb(198, 189, 219);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(141, 123, 183);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(79, 63, 115);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(113, 90, 165);
  border-color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body p {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 90, 165) none 0px;
  text-decoration-color: rgb(113, 90, 165);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  text-decoration-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(79, 63, 115);
}

html[saved-theme="dark"] body blockquote {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 237.469px;
  margin-right: 237.469px;
  margin-top: 24px;
  width: 195.062px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(23, 18, 33);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(138, 92, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(245, 219, 92);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(245, 219, 92);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(245, 219, 92);
  border-left-color: rgb(245, 219, 92);
  border-right-color: rgb(245, 219, 92);
  border-top-color: rgb(245, 219, 92);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  text-align: center;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(138, 92, 245);
  border-radius: 8px;
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(45, 36, 66);
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 189, 219);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-right-style: solid;
  border-top-color: rgb(198, 189, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
  transition: 0.2s ease-in-out;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  color: color(srgb 0.3608 0.66 0.9592);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: color(srgb 0.3608 0.66 0.9592);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: from hsl(185, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: from hsl(5, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: from hsl(5, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: from hsl(270, 88%, 66%) r g b;
  background-color: color(srgb 0.66 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: from hsl(5, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: from hsl(25, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: from hsl(258, 88%, 66%) r g b;
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: from hsl(100, 88%, 66%) r g b;
  background-color: color(srgb 0.560267 0.9592 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-left-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-right-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-top-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: from hsl(185, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: from hsl(25, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
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
  background-color: rgb(45, 36, 66);
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(23, 18, 33);
  border-bottom-color: rgb(101, 81, 148);
  border-left-color: rgb(101, 81, 148);
  border-right-color: rgb(101, 81, 148);
  border-top-color: rgb(101, 81, 148);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(101, 81, 148);
  border-left-color: rgb(101, 81, 148);
  border-right-color: rgb(101, 81, 148);
  border-top-color: rgb(101, 81, 148);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 27, 49);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(23, 18, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 18, 33);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(138, 92, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(34, 27, 49);
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(113, 90, 165);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(113, 90, 165);
  stroke: rgb(113, 90, 165);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(79, 63, 115);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(79, 63, 115);
  border-left-color: rgb(79, 63, 115);
  border-right-color: rgb(79, 63, 115);
  border-top-color: rgb(79, 63, 115);
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(34, 27, 49);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body details {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 8px;
  padding-left: 26.6953px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(113, 90, 165);
  border-left-color: rgb(113, 90, 165);
  border-right-color: rgb(113, 90, 165);
  border-top-color: rgb(113, 90, 165);
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 189, 219);
  border-left-color: rgb(198, 189, 219);
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body summary {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: hsl(258, 88%, 66%) !important;
  --accent-rgb: from hsl(258, 88%, 66%) r g b !important;
  --background-modifier-border: hsl(258, 29.33333%, 75%) !important;
  --background-modifier-border-focus: hsl(258, 29.33333%, 65%) !important;
  --background-modifier-border-hover: hsl(258, 29.33333%, 70%) !important;
  --background-modifier-error: hsl(5, 88%, 66%) !important;
  --background-modifier-error-hover: hsl(5, 88%, 66%) !important;
  --background-modifier-error-rgb: from hsl(5, 88%, 66%) r g b !important;
  --background-modifier-form-field: hsl(258, 29.33333%, 98%) !important;
  --background-modifier-form-field-hover: hsl(258, 29.33333%, 98%) !important;
  --background-modifier-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --background-modifier-message: hsl(258, 88%, 66%) !important;
  --background-modifier-success: hsl(100, 88%, 66%) !important;
  --background-modifier-success-rgb: from hsl(100, 88%, 66%) r g b !important;
  --background-primary: hsl(258, 29.33333%, 98%) !important;
  --background-primary-alt: hsl(258, 29.33333%, 90%) !important;
  --background-secondary: hsl(258, 29.33333%, 95%) !important;
  --background-secondary-alt: hsl(258, 29.33333%, 95%) !important;
  --bases-cards-background: hsl(258, 29.33333%, 98%) !important;
  --bases-cards-cover-background: hsl(258, 29.33333%, 90%) !important;
  --bases-cards-font-size: 0.875rem !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258, 29.33333%, 75%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(258, 29.33333%, 70%) !important;
  --bases-embed-border-color: hsl(258, 29.33333%, 75%) !important;
  --bases-group-heading-property-color: hsl(258, 29.33333%, 60%) !important;
  --bases-group-heading-value-size: 0.875rem !important;
  --bases-table-border-color: hsl(258, 88%, 66%) !important;
  --bases-table-cell-background-active: hsl(258, 29.33333%, 98%) !important;
  --bases-table-cell-background-disabled: hsl(258, 29.33333%, 90%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258, 29.33333%, 65%) !important;
  --bases-table-font-size: 0.875rem !important;
  --bases-table-group-background: hsl(258, 29.33333%, 90%) !important;
  --bases-table-header-background: hsl(258, 29.33333%, 98%) !important;
  --bases-table-header-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --bases-table-header-color: hsl(258, 29.33333%, 98%) !important;
  --bases-table-row-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.1) !important;
  --bases-table-summary-background: hsl(258, 29.33333%, 98%) !important;
  --bases-table-summary-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --blue-h: 210 !important;
  --blur-background: color-mix(in srgb, hsl(258, 29.33333%, 98%) 65%, transparent) linear-gradient(hsl(258, 29.33333%, 98%), color-mix(in srgb, hsl(258, 29.33333%, 98%) 65%, transparent)) !important;
  --bodyFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-bug: from hsl(5, 88%, 66%) r g b;
  --callout-color: from hsl(258, 88%, 66%) r g b;
  --callout-default: from hsl(210, 88%, 66%) r g b;
  --callout-error: from hsl(5, 88%, 66%) r g b;
  --callout-example: from hsl(270, 88%, 66%) r g b;
  --callout-fail: from hsl(5, 88%, 66%) r g b;
  --callout-important: from hsl(185, 88%, 66%) r g b;
  --callout-info: from hsl(210, 88%, 66%) r g b;
  --callout-question: from hsl(25, 88%, 66%) r g b;
  --callout-quote: from hsl(258, 88%, 66%) r g b;
  --callout-success: from hsl(100, 88%, 66%) r g b;
  --callout-summary: from hsl(185, 88%, 66%) r g b;
  --callout-tip: from hsl(185, 88%, 66%) r g b;
  --callout-todo: from hsl(210, 88%, 66%) r g b;
  --callout-warning: from hsl(25, 88%, 66%) r g b;
  --canvas-background: hsl(258, 29.33333%, 98%) !important;
  --canvas-card-label-color: hsl(258, 29.33333%, 75%) !important;
  --canvas-color-1: from hsl(5, 88%, 66%) r g b !important;
  --canvas-color-2: from hsl(25, 88%, 66%) r g b !important;
  --canvas-color-3: from hsl(50, 88%, 66%) r g b !important;
  --canvas-color-4: from hsl(100, 88%, 66%) r g b !important;
  --canvas-color-5: from hsl(185, 88%, 66%) r g b !important;
  --canvas-color-6: from hsl(270, 88%, 66%) r g b !important;
  --canvas-dot-pattern: hsl(258, 29.33333%, 75%) !important;
  --caret-color: hsl(258, 29.33333%, 20%) !important;
  --checkbox-border-color: hsl(258, 29.33333%, 75%) !important;
  --checkbox-border-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-color: hsl(258, 29.33333%, 60%) !important;
  --checkbox-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: hsl(258, 29.33333%, 98%) !important;
  --checklist-done-color: hsl(258, 29.33333%, 60%) !important;
  --code-background: rgba(from hsl(258, 88%, 66%) r g b / 0.1) !important;
  --code-border-color: hsl(258, 29.33333%, 75%) !important;
  --code-bracket-background: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --code-comment: hsl(258, 29.33333%, 65%) !important;
  --code-function: hsl(50, 88%, 66%) !important;
  --code-important: hsl(25, 88%, 66%) !important;
  --code-keyword: hsl(320, 88%, 66%) !important;
  --code-normal: hsl(258, 88%, 66%) !important;
  --code-operator: hsl(5, 88%, 66%) !important;
  --code-property: hsl(185, 88%, 66%) !important;
  --code-punctuation: hsl(258, 29.33333%, 60%) !important;
  --code-string: hsl(100, 88%, 66%) !important;
  --code-tag: hsl(5, 88%, 66%) !important;
  --code-value: hsl(270, 88%, 66%) !important;
  --codeFont: ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(258, 29.33333%, 75%) !important;
  --color-base-00: hsl(258, 29.33333%, 98%) !important;
  --color-base-05: hsl(258, 29.33333%, 95%) !important;
  --color-base-10: hsl(258, 29.33333%, 90%) !important;
  --color-base-100: hsl(258, 29.33333%, 20%) !important;
  --color-base-20: hsl(258, 29.33333%, 85%) !important;
  --color-base-25: hsl(258, 29.33333%, 80%) !important;
  --color-base-30: hsl(258, 29.33333%, 75%) !important;
  --color-base-35: hsl(258, 29.33333%, 70%) !important;
  --color-base-40: hsl(258, 29.33333%, 65%) !important;
  --color-base-50: hsl(258, 29.33333%, 60%) !important;
  --color-base-60: hsl(258, 29.33333%, 40%) !important;
  --color-base-70: hsl(258, 29.33333%, 30%) !important;
  --color-blue: hsl(210, 88%, 66%) !important;
  --color-blue-rgb: from hsl(210, 88%, 66%) r g b !important;
  --color-cyan: hsl(185, 88%, 66%) !important;
  --color-cyan-rgb: from hsl(185, 88%, 66%) r g b !important;
  --color-green: hsl(100, 88%, 66%) !important;
  --color-green-rgb: from hsl(100, 88%, 66%) r g b !important;
  --color-grey: hsl(0, 0%, 66%) !important;
  --color-grey-rgb: from hsl(0, 0%, 66%) r g b !important;
  --color-orange: hsl(25, 88%, 66%) !important;
  --color-orange-rgb: from hsl(25, 88%, 66%) r g b !important;
  --color-pink: hsl(320, 88%, 66%) !important;
  --color-pink-rgb: from hsl(320, 88%, 66%) r g b !important;
  --color-purple: hsl(270, 88%, 66%) !important;
  --color-purple-rgb: from hsl(270, 88%, 66%) r g b !important;
  --color-red: hsl(5, 88%, 66%) !important;
  --color-red-rgb: from hsl(5, 88%, 66%) r g b !important;
  --color-yellow: hsl(50, 88%, 66%) !important;
  --color-yellow-rgb: from hsl(50, 88%, 66%) r g b !important;
  --cyan-h: 185 !important;
  --dark: hsl(258, 29.33333%, 20%) !important;
  --darkgray: hsl(258, 29.33333%, 20%) !important;
  --divider-color: hsl(258, 29.33333%, 75%) !important;
  --dropdown-background: hsl(258, 29.33333%, 98%) !important;
  --dropdown-background-hover: hsl(258, 29.33333%, 90%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(258, 29.33333%, 75%), inset 0 0 0 1px hsl(258, 29.33333%, 75%) !important;
  --embed-max-height: 80vh !important;
  --embed-padding: 0 !important;
  --file-header-background: hsl(258, 29.33333%, 98%) !important;
  --file-header-background-focused: hsl(258, 29.33333%, 98%) !important;
  --file-header-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(258, 29.33333%, 98%) !important;
  --flair-color: hsl(258, 29.33333%, 20%) !important;
  --font-heading-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif !important;
  --font-interface: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif !important;
  --font-mermaid: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace !important;
  --font-print: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, Arial' !important;
  --font-small: 0.933rem !important;
  --font-smaller: 0.875rem !important;
  --font-smallest: 0.8rem !important;
  --font-text: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif !important;
  --footnote-divider-color: hsl(258, 29.33333%, 75%) !important;
  --footnote-id-color: hsl(258, 29.33333%, 60%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 29.33333%, 75%) !important;
  --footnote-input-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --footnote-size: 0.875rem !important;
  --graph-line: hsl(258, 29.33333%, 75%) !important;
  --graph-node: hsl(5, 88%, 66%) !important;
  --graph-node-attachment: hsl(210, 88%, 66%) !important;
  --graph-node-tag: hsl(50, 88%, 66%) !important;
  --graph-node-unresolved: rgba(from hsl(5, 88%, 66%) r g b / 0.8) !important;
  --graph-text: hsl(258, 29.33333%, 20%) !important;
  --gray: hsl(258, 29.33333%, 60%) !important;
  --green-h: 100 !important;
  --h1-color: hsl(258, 88%, 66%) !important;
  --h1-size: 2.488em !important;
  --h2-color: hsl(258, 88%, 66%) !important;
  --h2-size: 2.047em !important;
  --h3-color: hsl(258, 88%, 66%) !important;
  --h3-size: 1.728em !important;
  --h4-color: hsl(258, 88%, 66%) !important;
  --h4-size: 1.44em !important;
  --h5-color: hsl(258, 88%, 66%) !important;
  --h5-size: 1.2em !important;
  --h6-color: hsl(258, 88%, 66%) !important;
  --headerFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(258, 29.33333%, 75%) !important;
  --heading-spacing: 1.2em !important;
  --highlight: rgba(from hsl(258, 88%, 66%) r g b / 0.25) !important;
  --hr-color: hsl(258, 88%, 66%) !important;
  --hr-thickness: 0.1rem !important;
  --icon-color: hsl(258, 29.33333%, 60%) !important;
  --icon-color-focused: hsl(258, 29.33333%, 40%) !important;
  --icon-color-hover: hsl(258, 29.33333%, 60%) !important;
  --indentation-guide-color: rgba(0, 0, 0 / 0.12) !important;
  --indentation-guide-color-active: rgba(0, 0, 0 / 0.2) !important;
  --inline-title-color: hsl(258, 88%, 66%) !important;
  --inline-title-size: 2.488em !important;
  --input-date-separator: hsl(258, 29.33333%, 75%) !important;
  --input-placeholder-color: hsl(258, 29.33333%, 75%) !important;
  --interactive-hover: hsl(258, 29.33333%, 90%) !important;
  --interactive-normal: hsl(258, 29.33333%, 98%) !important;
  --light: hsl(258, 29.33333%, 98%) !important;
  --lightgray: hsl(258, 29.33333%, 95%) !important;
  --link-color-hover: hsl(258, 88%, 66%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: wavy !important;
  --link-external-color-hover: hsl(258, 88%, 66%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-decoration-color: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --list-marker-color: hsl(258, 29.33333%, 60%) !important;
  --list-marker-color-hover: hsl(258, 29.33333%, 60%) !important;
  --menu-background: hsl(258, 29.33333%, 95%) !important;
  --menu-border-color: hsl(258, 29.33333%, 70%) !important;
  --metadata-border-color: hsl(258, 29.33333%, 75%) !important;
  --metadata-divider-color: hsl(258, 29.33333%, 75%) !important;
  --metadata-input-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --metadata-input-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.875rem !important;
  --metadata-input-text-color: hsl(258, 29.33333%, 20%) !important;
  --metadata-label-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --metadata-label-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.875rem !important;
  --metadata-label-text-color: hsl(258, 29.33333%, 60%) !important;
  --metadata-label-text-color-hover: hsl(258, 29.33333%, 60%) !important;
  --metadata-property-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258, 29.33333%, 65%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(258, 29.33333%, 70%) !important;
  --modal-background: hsl(258, 29.33333%, 98%) !important;
  --modal-border-color: hsl(258, 29.33333%, 65%) !important;
  --nav-collapse-icon-color: hsl(258, 29.33333%, 75%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 29.33333%, 75%) !important;
  --nav-heading-color: hsl(258, 29.33333%, 20%) !important;
  --nav-heading-color-collapsed: hsl(258, 29.33333%, 75%) !important;
  --nav-heading-color-collapsed-hover: hsl(258, 29.33333%, 60%) !important;
  --nav-heading-color-hover: hsl(258, 29.33333%, 20%) !important;
  --nav-indentation-guide-color: rgba(0, 0, 0 / 0.12) !important;
  --nav-item-background-active: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --nav-item-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --nav-item-color: hsl(258, 29.33333%, 60%) !important;
  --nav-item-color-active: hsl(258, 29.33333%, 40%) !important;
  --nav-item-color-hover: hsl(258, 29.33333%, 20%) !important;
  --nav-item-color-selected: hsl(258, 29.33333%, 20%) !important;
  --nav-tag-color: hsl(258, 29.33333%, 75%) !important;
  --nav-tag-color-active: hsl(258, 29.33333%, 60%) !important;
  --nav-tag-color-hover: hsl(258, 29.33333%, 60%) !important;
  --opacity: 0.1 !important;
  --orange-h: 25 !important;
  --p-spacing: 1.5rem !important;
  --pdf-background: hsl(258, 29.33333%, 98%) !important;
  --pdf-page-background: hsl(258, 29.33333%, 98%) !important;
  --pdf-sidebar-background: hsl(258, 29.33333%, 98%) !important;
  --pill-border-color: hsl(258, 29.33333%, 75%) !important;
  --pill-border-color-hover: hsl(258, 29.33333%, 70%) !important;
  --pill-color: hsl(258, 29.33333%, 60%) !important;
  --pill-color-hover: hsl(258, 29.33333%, 20%) !important;
  --pill-color-remove: hsl(258, 29.33333%, 75%) !important;
  --pink-h: 320 !important;
  --prompt-background: hsl(258, 29.33333%, 98%) !important;
  --prompt-border-color: hsl(258, 29.33333%, 65%) !important;
  --purple-h: 270 !important;
  --raised-background: color-mix(in srgb, hsl(258, 29.33333%, 98%) 65%, transparent) linear-gradient(hsl(258, 29.33333%, 98%), color-mix(in srgb, hsl(258, 29.33333%, 98%) 65%, transparent)) !important;
  --red-h: 5 !important;
  --ribbon-background: hsl(258, 29.33333%, 95%) !important;
  --ribbon-background-collapsed: hsl(258, 29.33333%, 98%) !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0 / 0.2) !important;
  --scrollbar-bg: rgba(0, 0, 0 / 0.05) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0 / 0.1) !important;
  --search-clear-button-color: hsl(258, 29.33333%, 60%) !important;
  --search-icon-color: hsl(258, 29.33333%, 60%) !important;
  --search-result-background: hsl(258, 29.33333%, 98%) !important;
  --setting-group-heading-color: hsl(258, 29.33333%, 20%) !important;
  --setting-items-background: hsl(258, 29.33333%, 90%) !important;
  --setting-items-border-color: hsl(258, 29.33333%, 75%) !important;
  --slider-thumb-border-color: hsl(258, 29.33333%, 70%) !important;
  --slider-track-background: hsl(258, 29.33333%, 75%) !important;
  --status-bar-background: hsl(258, 29.33333%, 95%) !important;
  --status-bar-border-color: hsl(258, 29.33333%, 60%) !important;
  --status-bar-text-color: hsl(258, 29.33333%, 60%) !important;
  --suggestion-background: hsl(258, 29.33333%, 98%) !important;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0 / 0.1) !important;
  --sync-avatar-color-1: hsl(5, 88%, 66%) !important;
  --sync-avatar-color-2: hsl(25, 88%, 66%) !important;
  --sync-avatar-color-3: hsl(50, 88%, 66%) !important;
  --sync-avatar-color-4: hsl(100, 88%, 66%) !important;
  --sync-avatar-color-5: hsl(185, 88%, 66%) !important;
  --sync-avatar-color-6: hsl(210, 88%, 66%) !important;
  --sync-avatar-color-7: hsl(270, 88%, 66%) !important;
  --sync-avatar-color-8: hsl(320, 88%, 66%) !important;
  --tab-background-active: hsl(258, 29.33333%, 98%) !important;
  --tab-container-background: hsl(258, 29.33333%, 95%) !important;
  --tab-divider-color: hsl(258, 29.33333%, 70%) !important;
  --tab-outline-color: hsl(258, 29.33333%, 75%) !important;
  --tab-switcher-background: hsl(258, 29.33333%, 95%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 29.33333%, 95%), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0 / 0.05) !important;
  --tab-text-color: hsl(258, 29.33333%, 75%) !important;
  --tab-text-color-active: hsl(258, 29.33333%, 60%) !important;
  --tab-text-color-focused: hsl(258, 29.33333%, 60%) !important;
  --tab-text-color-focused-active: hsl(258, 29.33333%, 60%) !important;
  --tab-text-color-focused-active-current: hsl(258, 29.33333%, 40%) !important;
  --table-add-button-border-color: hsl(258, 29.33333%, 75%) !important;
  --table-add-button-border-width: 0.1rem !important;
  --table-border-color: hsl(258, 88%, 66%) !important;
  --table-border-width: 0.1rem !important;
  --table-column-first-border-width: 0.1rem !important;
  --table-column-last-border-width: 0.1rem !important;
  --table-drag-handle-color: hsl(258, 29.33333%, 75%) !important;
  --table-header-background: hsl(258, 88%, 66%) !important;
  --table-header-background-hover: hsl(258, 88%, 66%) !important;
  --table-header-border-color: hsl(258, 88%, 66%) !important;
  --table-header-border-width: 0.1rem !important;
  --table-header-color: hsl(258, 29.33333%, 98%) !important;
  --table-row-alt-background: rgba(from hsl(258, 88%, 66%) r g b / 0.1) !important;
  --table-row-alt-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.2) !important;
  --table-row-background-hover: rgba(from hsl(258, 88%, 66%) r g b / 0.1) !important;
  --table-row-last-border-width: 0.1rem !important;
  --tag-size: 0.875rem !important;
  --text-error: hsl(5, 88%, 66%) !important;
  --text-faint: hsl(258, 29.33333%, 75%) !important;
  --text-highlight-bg: rgba(from hsl(258, 88%, 66%) r g b / 0.25) !important;
  --text-highlight-bg-rgb: from hsl(258, 88%, 66%) r g b !important;
  --text-muted: hsl(258, 29.33333%, 60%) !important;
  --text-normal: hsl(258, 29.33333%, 20%) !important;
  --text-success: hsl(100, 88%, 66%) !important;
  --text-warning: hsl(25, 88%, 66%) !important;
  --textHighlight: rgba(from hsl(258, 88%, 66%) r g b / 0.25) !important;
  --titleFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(258, 29.33333%, 95%) !important;
  --titlebar-background-focused: hsl(258, 29.33333%, 95%) !important;
  --titlebar-border-color: hsl(258, 29.33333%, 75%) !important;
  --titlebar-text-color: hsl(258, 29.33333%, 60%) !important;
  --titlebar-text-color-focused: hsl(258, 29.33333%, 20%) !important;
  --vault-profile-color: hsl(258, 29.33333%, 40%) !important;
  --vault-profile-color-hover: hsl(258, 29.33333%, 40%) !important;
  --workspace-background-translucent: rgba(255, 255, 255 / 0.6) !important;
  --yellow-h: 50 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(241, 239, 246);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(249, 248, 251);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(138, 92, 245);
  color: rgb(249, 248, 251);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(249, 248, 251);
  border-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(184, 173, 210);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(241, 239, 246);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(184, 173, 210);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(241, 239, 246);
  border-left-color: rgb(184, 173, 210);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(249, 248, 251);
  color: rgb(45, 36, 66);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body del {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(90, 72, 132);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(184, 173, 210);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(141, 123, 183);
  border-color: rgb(141, 123, 183);
}

html[saved-theme="light"] body p {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 123, 183) none 0px;
  text-decoration-color: rgb(141, 123, 183);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  text-decoration-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body dt {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body ol > li {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body ul > li {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(184, 173, 210);
}

html[saved-theme="light"] body blockquote {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body table {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 237.469px;
  margin-right: 237.469px;
  margin-top: 24px;
  width: 195.062px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(249, 248, 251);
}

html[saved-theme="light"] body tr {
  background-color: rgb(138, 92, 245);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(245, 219, 92);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(245, 219, 92);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(245, 219, 92);
  border-left-color: rgb(245, 219, 92);
  border-right-color: rgb(245, 219, 92);
  border-top-color: rgb(245, 219, 92);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body figcaption {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
  text-align: center;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(138, 92, 245);
  border-radius: 8px;
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(227, 222, 237);
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(45, 36, 66);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-right-style: solid;
  border-top-color: rgb(45, 36, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
  transition: 0.2s ease-in-out;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  color: color(srgb 0.3608 0.66 0.9592);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: color(srgb 0.3608 0.66 0.9592);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: from hsl(185, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: from hsl(5, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: from hsl(5, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: from hsl(270, 88%, 66%) r g b;
  background-color: color(srgb 0.66 0.3608 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: from hsl(5, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: from hsl(25, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: from hsl(258, 88%, 66%) r g b;
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: from hsl(100, 88%, 66%) r g b;
  background-color: color(srgb 0.560267 0.9592 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-left-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-right-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-top-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: from hsl(185, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: from hsl(25, 88%, 66%) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
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
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(155, 140, 192);
  border-left-color: rgb(155, 140, 192);
  border-right-color: rgb(155, 140, 192);
  border-top-color: rgb(155, 140, 192);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(155, 140, 192);
  border-left-color: rgb(155, 140, 192);
  border-right-color: rgb(155, 140, 192);
  border-top-color: rgb(155, 140, 192);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 239, 246);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(138, 92, 245);
  font-family: Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(249, 248, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 248, 251);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(138, 92, 245);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(241, 239, 246);
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(141, 123, 183);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(141, 123, 183);
  stroke: rgb(141, 123, 183);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(184, 173, 210);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(184, 173, 210);
  border-left-color: rgb(184, 173, 210);
  border-right-color: rgb(184, 173, 210);
  border-top-color: rgb(184, 173, 210);
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(241, 239, 246);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(90, 72, 132);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body details {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 8px;
  padding-left: 26.6953px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(45, 36, 66);
  border-left-color: rgb(45, 36, 66);
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body sub {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body summary {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body sup {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
}`,
  },
};
