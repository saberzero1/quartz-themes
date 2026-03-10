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
  --accent-color: rgb(138, 92, 245) !important;
  --accent-rgb: from rgb(138, 92, 245) r g b !important;
  --background-modifier-border: rgb(79, 63, 115) !important;
  --background-modifier-border-focus: rgb(101, 81, 148) !important;
  --background-modifier-border-hover: rgb(90, 72, 132) !important;
  --background-modifier-error: rgb(245, 105, 92) !important;
  --background-modifier-error-hover: rgb(245, 105, 92) !important;
  --background-modifier-error-rgb: from rgb(245, 105, 92) r g b !important;
  --background-modifier-form-field: rgb(45, 36, 66) !important;
  --background-modifier-form-field-hover: rgb(45, 36, 66) !important;
  --background-modifier-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --background-modifier-message: rgb(138, 92, 245) !important;
  --background-modifier-success: rgb(143, 245, 92) !important;
  --background-modifier-success-rgb: from rgb(143, 245, 92) r g b !important;
  --background-primary: rgb(23, 18, 33) !important;
  --background-primary-alt: rgb(45, 36, 66) !important;
  --background-secondary: rgb(34, 27, 49) !important;
  --background-secondary-alt: rgb(34, 27, 49) !important;
  --bases-cards-background: rgb(23, 18, 33) !important;
  --bases-cards-cover-background: rgb(45, 36, 66) !important;
  --bases-cards-font-size: 0.875rem !important;
  --bases-cards-shadow: 0 0 0 1px rgb(79, 63, 115) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(90, 72, 132) !important;
  --bases-embed-border-color: rgb(79, 63, 115) !important;
  --bases-group-heading-property-color: rgb(113, 91, 164) !important;
  --bases-group-heading-value-size: 0.875rem !important;
  --bases-table-border-color: rgb(138, 92, 245) !important;
  --bases-table-cell-background-active: rgb(23, 18, 33) !important;
  --bases-table-cell-background-disabled: rgb(45, 36, 66) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(101, 81, 148) !important;
  --bases-table-font-size: 0.875rem !important;
  --bases-table-group-background: rgb(45, 36, 66) !important;
  --bases-table-header-background: rgb(23, 18, 33) !important;
  --bases-table-header-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --bases-table-header-color: rgb(23, 18, 33) !important;
  --bases-table-row-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.15) !important;
  --bases-table-summary-background: rgb(23, 18, 33) !important;
  --bases-table-summary-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --blue-h: 210 !important;
  --blur-background: color-mix(in srgb, rgb(34, 27, 49) 65%, transparent) linear-gradient(rgb(34, 27, 49), color-mix(in srgb, rgb(34, 27, 49) 65%, transparent)) !important;
  --bodyFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-bug: from rgb(245, 105, 92) r g b;
  --callout-color: from rgb(138, 92, 245) r g b;
  --callout-default: from rgb(92, 168, 245) r g b;
  --callout-error: from rgb(245, 105, 92) r g b;
  --callout-example: from rgb(168, 92, 245) r g b;
  --callout-fail: from rgb(245, 105, 92) r g b;
  --callout-important: from rgb(92, 232, 245) r g b;
  --callout-info: from rgb(92, 168, 245) r g b;
  --callout-question: from rgb(245, 156, 92) r g b;
  --callout-quote: from rgb(138, 92, 245) r g b;
  --callout-success: from rgb(143, 245, 92) r g b;
  --callout-summary: from rgb(92, 232, 245) r g b;
  --callout-tip: from rgb(92, 232, 245) r g b;
  --callout-todo: from rgb(92, 168, 245) r g b;
  --callout-warning: from rgb(245, 156, 92) r g b;
  --canvas-background: rgb(23, 18, 33) !important;
  --canvas-card-label-color: rgb(79, 63, 115) !important;
  --canvas-color-1: from rgb(245, 105, 92) r g b !important;
  --canvas-color-2: from rgb(245, 156, 92) r g b !important;
  --canvas-color-3: from rgb(245, 219, 92) r g b !important;
  --canvas-color-4: from rgb(143, 245, 92) r g b !important;
  --canvas-color-5: from rgb(92, 232, 245) r g b !important;
  --canvas-color-6: from rgb(168, 92, 245) r g b !important;
  --canvas-dot-pattern: rgb(79, 63, 115) !important;
  --caret-color: rgb(198, 189, 219) !important;
  --checkbox-border-color: rgb(79, 63, 115) !important;
  --checkbox-border-color-hover: rgb(138, 92, 245) !important;
  --checkbox-color: rgb(113, 91, 164) !important;
  --checkbox-color-hover: rgb(138, 92, 245) !important;
  --checkbox-marker-color: rgb(23, 18, 33) !important;
  --checklist-done-color: rgb(113, 91, 164) !important;
  --code-background: rgba(from rgb(138, 92, 245) r g b / 0.15) !important;
  --code-border-color: rgb(79, 63, 115) !important;
  --code-bracket-background: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --code-comment: rgb(101, 81, 148) !important;
  --code-function: rgb(245, 219, 92) !important;
  --code-important: rgb(245, 156, 92) !important;
  --code-keyword: rgb(245, 92, 194) !important;
  --code-normal: rgb(138, 92, 245) !important;
  --code-operator: rgb(245, 105, 92) !important;
  --code-property: rgb(92, 232, 245) !important;
  --code-punctuation: rgb(113, 91, 164) !important;
  --code-string: rgb(143, 245, 92) !important;
  --code-tag: rgb(245, 105, 92) !important;
  --code-value: rgb(168, 92, 245) !important;
  --codeFont: ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(79, 63, 115) !important;
  --color-base-00: rgb(23, 18, 33) !important;
  --color-base-05: rgb(34, 27, 49) !important;
  --color-base-10: rgb(45, 36, 66) !important;
  --color-base-100: rgb(198, 189, 219) !important;
  --color-base-20: rgb(56, 45, 82) !important;
  --color-base-25: rgb(68, 54, 99) !important;
  --color-base-30: rgb(79, 63, 115) !important;
  --color-base-35: rgb(90, 72, 132) !important;
  --color-base-40: rgb(101, 81, 148) !important;
  --color-base-50: rgb(113, 91, 164) !important;
  --color-base-60: rgb(141, 123, 183) !important;
  --color-base-70: rgb(170, 156, 201) !important;
  --color-blue: rgb(92, 168, 245) !important;
  --color-blue-rgb: from rgb(92, 168, 245) r g b !important;
  --color-cyan: rgb(92, 232, 245) !important;
  --color-cyan-rgb: from rgb(92, 232, 245) r g b !important;
  --color-green: rgb(143, 245, 92) !important;
  --color-green-rgb: from rgb(143, 245, 92) r g b !important;
  --color-grey: rgb(168, 168, 168) !important;
  --color-grey-rgb: from rgb(168, 168, 168) r g b !important;
  --color-orange: rgb(245, 156, 92) !important;
  --color-orange-rgb: from rgb(245, 156, 92) r g b !important;
  --color-pink: rgb(245, 92, 194) !important;
  --color-pink-rgb: from rgb(245, 92, 194) r g b !important;
  --color-purple: rgb(168, 92, 245) !important;
  --color-purple-rgb: from rgb(168, 92, 245) r g b !important;
  --color-red: rgb(245, 105, 92) !important;
  --color-red-rgb: from rgb(245, 105, 92) r g b !important;
  --color-yellow: rgb(245, 219, 92) !important;
  --color-yellow-rgb: from rgb(245, 219, 92) r g b !important;
  --cyan-h: 185 !important;
  --dark: rgb(198, 189, 219) !important;
  --darkgray: rgb(198, 189, 219) !important;
  --divider-color: rgb(79, 63, 115) !important;
  --dropdown-background: rgb(34, 27, 49) !important;
  --dropdown-background-hover: rgb(56, 45, 82) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(79, 63, 115), inset 0 0 0 1px rgb(79, 63, 115) !important;
  --embed-max-height: 80vh !important;
  --embed-padding: 0 !important;
  --file-header-background: rgb(23, 18, 33) !important;
  --file-header-background-focused: rgb(23, 18, 33) !important;
  --file-header-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(34, 27, 49) !important;
  --flair-color: rgb(198, 189, 219) !important;
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
  --footnote-divider-color: rgb(79, 63, 115) !important;
  --footnote-id-color: rgb(113, 91, 164) !important;
  --footnote-id-color-no-occurrences: rgb(79, 63, 115) !important;
  --footnote-input-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --footnote-size: 0.875rem !important;
  --graph-line: rgb(79, 63, 115) !important;
  --graph-node: rgb(245, 105, 92) !important;
  --graph-node-attachment: rgb(92, 168, 245) !important;
  --graph-node-tag: rgb(245, 219, 92) !important;
  --graph-node-unresolved: rgba(from rgb(245, 105, 92) r g b / 0.8) !important;
  --graph-text: rgb(198, 189, 219) !important;
  --gray: rgb(113, 91, 164) !important;
  --green-h: 100 !important;
  --h1-color: rgb(138, 92, 245) !important;
  --h1-size: 2.488em !important;
  --h2-color: rgb(138, 92, 245) !important;
  --h2-size: 2.047em !important;
  --h3-color: rgb(138, 92, 245) !important;
  --h3-size: 1.728em !important;
  --h4-color: rgb(138, 92, 245) !important;
  --h4-size: 1.44em !important;
  --h5-color: rgb(138, 92, 245) !important;
  --h5-size: 1.2em !important;
  --h6-color: rgb(138, 92, 245) !important;
  --headerFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(79, 63, 115) !important;
  --heading-spacing: 1.2em !important;
  --highlight: rgba(from rgb(138, 92, 245) r g b / 0.25) !important;
  --hr-color: rgb(138, 92, 245) !important;
  --hr-thickness: 0.1rem !important;
  --icon-color: rgb(113, 91, 164) !important;
  --icon-color-focused: rgb(141, 123, 183) !important;
  --icon-color-hover: rgb(113, 91, 164) !important;
  --indentation-guide-color: rgba(255, 255, 255 / 0.12) !important;
  --indentation-guide-color-active: rgba(255, 255, 255 / 0.3) !important;
  --inline-title-color: rgb(138, 92, 245) !important;
  --inline-title-size: 2.488em !important;
  --input-date-separator: rgb(79, 63, 115) !important;
  --input-placeholder-color: rgb(79, 63, 115) !important;
  --interactive-hover: rgb(56, 45, 82) !important;
  --interactive-normal: rgb(34, 27, 49) !important;
  --light: rgb(23, 18, 33) !important;
  --lightgray: rgb(34, 27, 49) !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(138, 92, 245) !important;
  --link-decoration: none !important;
  --link-decoration-hover: wavy !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(138, 92, 245) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(from rgb(138, 92, 245) r g b / 0.3) !important;
  --list-marker-color: rgb(113, 91, 164) !important;
  --list-marker-color-hover: rgb(113, 91, 164) !important;
  --menu-background: rgb(34, 27, 49) !important;
  --menu-border-color: rgb(90, 72, 132) !important;
  --metadata-border-color: rgb(79, 63, 115) !important;
  --metadata-divider-color: rgb(79, 63, 115) !important;
  --metadata-input-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --metadata-input-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.875rem !important;
  --metadata-input-text-color: rgb(198, 189, 219) !important;
  --metadata-label-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --metadata-label-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.875rem !important;
  --metadata-label-text-color: rgb(113, 91, 164) !important;
  --metadata-label-text-color-hover: rgb(113, 91, 164) !important;
  --metadata-property-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(101, 81, 148) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(90, 72, 132) !important;
  --modal-background: rgb(23, 18, 33) !important;
  --modal-border-color: rgb(101, 81, 148) !important;
  --nav-collapse-icon-color: rgb(79, 63, 115) !important;
  --nav-collapse-icon-color-collapsed: rgb(79, 63, 115) !important;
  --nav-heading-color: rgb(198, 189, 219) !important;
  --nav-heading-color-collapsed: rgb(79, 63, 115) !important;
  --nav-heading-color-collapsed-hover: rgb(113, 91, 164) !important;
  --nav-heading-color-hover: rgb(198, 189, 219) !important;
  --nav-indentation-guide-color: rgba(255, 255, 255 / 0.12) !important;
  --nav-item-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --nav-item-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --nav-item-color: rgb(113, 91, 164) !important;
  --nav-item-color-active: rgb(141, 123, 183) !important;
  --nav-item-color-hover: rgb(198, 189, 219) !important;
  --nav-item-color-selected: rgb(198, 189, 219) !important;
  --nav-tag-color: rgb(79, 63, 115) !important;
  --nav-tag-color-active: rgb(113, 91, 164) !important;
  --nav-tag-color-hover: rgb(113, 91, 164) !important;
  --opacity: 0.15 !important;
  --orange-h: 25 !important;
  --p-spacing: 1.5rem !important;
  --pdf-background: rgb(23, 18, 33) !important;
  --pdf-page-background: rgb(23, 18, 33) !important;
  --pdf-shadow: 0 0 0 1px rgb(79, 63, 115) !important;
  --pdf-sidebar-background: rgb(23, 18, 33) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(79, 63, 115) !important;
  --pill-border-color: rgb(79, 63, 115) !important;
  --pill-border-color-hover: rgb(90, 72, 132) !important;
  --pill-color: rgb(113, 91, 164) !important;
  --pill-color-hover: rgb(198, 189, 219) !important;
  --pill-color-remove: rgb(79, 63, 115) !important;
  --pink-h: 320 !important;
  --prompt-background: rgb(23, 18, 33) !important;
  --prompt-border-color: rgb(101, 81, 148) !important;
  --purple-h: 270 !important;
  --raised-background: color-mix(in srgb, rgb(34, 27, 49) 65%, transparent) linear-gradient(rgb(34, 27, 49), color-mix(in srgb, rgb(34, 27, 49) 65%, transparent)) !important;
  --red-h: 5 !important;
  --ribbon-background: rgb(34, 27, 49) !important;
  --ribbon-background-collapsed: rgb(23, 18, 33) !important;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255 / 0.2) !important;
  --scrollbar-bg: rgba(255, 255, 255 / 0.05) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255 / 0.1) !important;
  --search-clear-button-color: rgb(113, 91, 164) !important;
  --search-icon-color: rgb(113, 91, 164) !important;
  --search-result-background: rgb(23, 18, 33) !important;
  --setting-group-heading-color: rgb(198, 189, 219) !important;
  --setting-items-background: rgb(45, 36, 66) !important;
  --setting-items-border-color: rgb(79, 63, 115) !important;
  --slider-thumb-border-color: rgb(90, 72, 132) !important;
  --slider-track-background: rgb(79, 63, 115) !important;
  --status-bar-background: rgb(34, 27, 49) !important;
  --status-bar-border-color: rgb(113, 91, 164) !important;
  --status-bar-text-color: rgb(113, 91, 164) !important;
  --suggestion-background: rgb(23, 18, 33) !important;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255 / 0.15) !important;
  --sync-avatar-color-1: rgb(245, 105, 92) !important;
  --sync-avatar-color-2: rgb(245, 156, 92) !important;
  --sync-avatar-color-3: rgb(245, 219, 92) !important;
  --sync-avatar-color-4: rgb(143, 245, 92) !important;
  --sync-avatar-color-5: rgb(92, 232, 245) !important;
  --sync-avatar-color-6: rgb(92, 168, 245) !important;
  --sync-avatar-color-7: rgb(168, 92, 245) !important;
  --sync-avatar-color-8: rgb(245, 92, 194) !important;
  --tab-background-active: rgb(23, 18, 33) !important;
  --tab-container-background: rgb(34, 27, 49) !important;
  --tab-divider-color: rgb(90, 72, 132) !important;
  --tab-outline-color: rgb(79, 63, 115) !important;
  --tab-switcher-background: rgb(34, 27, 49) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(34, 27, 49), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255 / 0.05) !important;
  --tab-text-color: rgb(79, 63, 115) !important;
  --tab-text-color-active: rgb(113, 91, 164) !important;
  --tab-text-color-focused: rgb(113, 91, 164) !important;
  --tab-text-color-focused-active: rgb(113, 91, 164) !important;
  --tab-text-color-focused-active-current: rgb(141, 123, 183) !important;
  --table-add-button-border-color: rgb(79, 63, 115) !important;
  --table-add-button-border-width: 0.1rem !important;
  --table-border-color: rgb(138, 92, 245) !important;
  --table-border-width: 0.1rem !important;
  --table-column-first-border-width: 0.1rem !important;
  --table-column-last-border-width: 0.1rem !important;
  --table-drag-handle-color: rgb(79, 63, 115) !important;
  --table-header-background: rgb(138, 92, 245) !important;
  --table-header-background-hover: rgb(138, 92, 245) !important;
  --table-header-border-color: rgb(138, 92, 245) !important;
  --table-header-border-width: 0.1rem !important;
  --table-header-color: rgb(23, 18, 33) !important;
  --table-row-alt-background: rgba(from rgb(138, 92, 245) r g b / 0.15) !important;
  --table-row-alt-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.3) !important;
  --table-row-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.15) !important;
  --table-row-last-border-width: 0.1rem !important;
  --tag-size: 0.875rem !important;
  --text-error: rgb(245, 105, 92) !important;
  --text-faint: rgb(79, 63, 115) !important;
  --text-highlight-bg: rgba(from rgb(138, 92, 245) r g b / 0.25) !important;
  --text-highlight-bg-rgb: from rgb(138, 92, 245) r g b !important;
  --text-muted: rgb(113, 91, 164) !important;
  --text-normal: rgb(198, 189, 219) !important;
  --text-success: rgb(143, 245, 92) !important;
  --text-warning: rgb(245, 156, 92) !important;
  --textHighlight: rgba(from rgb(138, 92, 245) r g b / 0.25) !important;
  --titleFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(34, 27, 49) !important;
  --titlebar-background-focused: rgb(34, 27, 49) !important;
  --titlebar-border-color: rgb(79, 63, 115) !important;
  --titlebar-text-color: rgb(113, 91, 164) !important;
  --titlebar-text-color-focused: rgb(198, 189, 219) !important;
  --vault-profile-color: rgb(141, 123, 183) !important;
  --vault-profile-color-hover: rgb(141, 123, 183) !important;
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
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration: line-through rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body p {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 90, 165) none 0px;
  text-decoration: rgb(113, 90, 165);
  text-decoration-color: rgb(113, 90, 165);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
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
  text-decoration: rgb(79, 63, 115);
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
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(198, 189, 219);
  border-radius: 8px;
  border-right-color: rgb(198, 189, 219);
  border-top-color: rgb(198, 189, 219);
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
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(113, 90, 165);
  text-decoration: line-through rgb(113, 90, 165);
  text-decoration-color: rgb(113, 90, 165);
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
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 189, 219);
  text-decoration: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-top-color: color(srgb 0.3608 0.66 0.9592);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: from rgb(92, 232, 245) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: from rgb(168, 92, 245) r g b;
  background-color: color(srgb 0.66 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: from rgb(245, 156, 92) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: from rgb(138, 92, 245) r g b;
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: from rgb(143, 245, 92) r g b;
  background-color: color(srgb 0.560267 0.9592 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-left-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-right-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-top-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: from rgb(92, 232, 245) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: from rgb(245, 156, 92) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.15);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
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
  text-decoration: rgb(198, 189, 219);
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
  --callout-color: from rgb(92, 168, 245) r g b;
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
  text-decoration: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  border-bottom-color: rgb(141, 123, 183);
  border-left-color: rgb(141, 123, 183);
  border-right-color: rgb(141, 123, 183);
  border-top-color: rgb(141, 123, 183);
  color: rgb(141, 123, 183);
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
  text-decoration: rgb(113, 90, 165);
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
  text-decoration: rgb(113, 90, 165);
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
  text-decoration: rgb(113, 90, 165);
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
  text-decoration: underline dotted rgb(198, 189, 219);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: rgb(138, 92, 245) !important;
  --accent-rgb: from rgb(138, 92, 245) r g b !important;
  --background-modifier-border: rgb(184, 173, 210) !important;
  --background-modifier-border-focus: rgb(155, 140, 192) !important;
  --background-modifier-border-hover: rgb(170, 156, 201) !important;
  --background-modifier-error: rgb(245, 105, 92) !important;
  --background-modifier-error-hover: rgb(245, 105, 92) !important;
  --background-modifier-error-rgb: from rgb(245, 105, 92) r g b !important;
  --background-modifier-form-field: rgb(249, 248, 251) !important;
  --background-modifier-form-field-hover: rgb(249, 248, 251) !important;
  --background-modifier-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --background-modifier-message: rgb(138, 92, 245) !important;
  --background-modifier-success: rgb(143, 245, 92) !important;
  --background-modifier-success-rgb: from rgb(143, 245, 92) r g b !important;
  --background-primary: rgb(249, 248, 251) !important;
  --background-primary-alt: rgb(227, 222, 237) !important;
  --background-secondary: rgb(241, 239, 246) !important;
  --background-secondary-alt: rgb(241, 239, 246) !important;
  --bases-cards-background: rgb(249, 248, 251) !important;
  --bases-cards-cover-background: rgb(227, 222, 237) !important;
  --bases-cards-font-size: 0.875rem !important;
  --bases-cards-shadow: 0 0 0 1px rgb(184, 173, 210) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(170, 156, 201) !important;
  --bases-embed-border-color: rgb(184, 173, 210) !important;
  --bases-group-heading-property-color: rgb(141, 123, 183) !important;
  --bases-group-heading-value-size: 0.875rem !important;
  --bases-table-border-color: rgb(138, 92, 245) !important;
  --bases-table-cell-background-active: rgb(249, 248, 251) !important;
  --bases-table-cell-background-disabled: rgb(227, 222, 237) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(155, 140, 192) !important;
  --bases-table-font-size: 0.875rem !important;
  --bases-table-group-background: rgb(227, 222, 237) !important;
  --bases-table-header-background: rgb(249, 248, 251) !important;
  --bases-table-header-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --bases-table-header-color: rgb(249, 248, 251) !important;
  --bases-table-row-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.1) !important;
  --bases-table-summary-background: rgb(249, 248, 251) !important;
  --bases-table-summary-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --blue-h: 210 !important;
  --blur-background: color-mix(in srgb, rgb(249, 248, 251) 65%, transparent) linear-gradient(rgb(249, 248, 251), color-mix(in srgb, rgb(249, 248, 251) 65%, transparent)) !important;
  --bodyFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-bug: from rgb(245, 105, 92) r g b;
  --callout-color: from rgb(138, 92, 245) r g b;
  --callout-default: from rgb(92, 168, 245) r g b;
  --callout-error: from rgb(245, 105, 92) r g b;
  --callout-example: from rgb(168, 92, 245) r g b;
  --callout-fail: from rgb(245, 105, 92) r g b;
  --callout-important: from rgb(92, 232, 245) r g b;
  --callout-info: from rgb(92, 168, 245) r g b;
  --callout-question: from rgb(245, 156, 92) r g b;
  --callout-quote: from rgb(138, 92, 245) r g b;
  --callout-success: from rgb(143, 245, 92) r g b;
  --callout-summary: from rgb(92, 232, 245) r g b;
  --callout-tip: from rgb(92, 232, 245) r g b;
  --callout-todo: from rgb(92, 168, 245) r g b;
  --callout-warning: from rgb(245, 156, 92) r g b;
  --canvas-background: rgb(249, 248, 251) !important;
  --canvas-card-label-color: rgb(184, 173, 210) !important;
  --canvas-color-1: from rgb(245, 105, 92) r g b !important;
  --canvas-color-2: from rgb(245, 156, 92) r g b !important;
  --canvas-color-3: from rgb(245, 219, 92) r g b !important;
  --canvas-color-4: from rgb(143, 245, 92) r g b !important;
  --canvas-color-5: from rgb(92, 232, 245) r g b !important;
  --canvas-color-6: from rgb(168, 92, 245) r g b !important;
  --canvas-dot-pattern: rgb(184, 173, 210) !important;
  --caret-color: rgb(45, 36, 66) !important;
  --checkbox-border-color: rgb(184, 173, 210) !important;
  --checkbox-border-color-hover: rgb(138, 92, 245) !important;
  --checkbox-color: rgb(141, 123, 183) !important;
  --checkbox-color-hover: rgb(138, 92, 245) !important;
  --checkbox-marker-color: rgb(249, 248, 251) !important;
  --checklist-done-color: rgb(141, 123, 183) !important;
  --code-background: rgba(from rgb(138, 92, 245) r g b / 0.1) !important;
  --code-border-color: rgb(184, 173, 210) !important;
  --code-bracket-background: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --code-comment: rgb(155, 140, 192) !important;
  --code-function: rgb(245, 219, 92) !important;
  --code-important: rgb(245, 156, 92) !important;
  --code-keyword: rgb(245, 92, 194) !important;
  --code-normal: rgb(138, 92, 245) !important;
  --code-operator: rgb(245, 105, 92) !important;
  --code-property: rgb(92, 232, 245) !important;
  --code-punctuation: rgb(141, 123, 183) !important;
  --code-string: rgb(143, 245, 92) !important;
  --code-tag: rgb(245, 105, 92) !important;
  --code-value: rgb(168, 92, 245) !important;
  --codeFont: ui-monospace, Cascadia Code, Source Code Pro, Menlo, Consolas, DejaVu Sans Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(184, 173, 210) !important;
  --color-base-00: rgb(249, 248, 251) !important;
  --color-base-05: rgb(241, 239, 246) !important;
  --color-base-10: rgb(227, 222, 237) !important;
  --color-base-100: rgb(45, 36, 66) !important;
  --color-base-20: rgb(212, 206, 228) !important;
  --color-base-25: rgb(198, 189, 219) !important;
  --color-base-30: rgb(184, 173, 210) !important;
  --color-base-35: rgb(170, 156, 201) !important;
  --color-base-40: rgb(155, 140, 192) !important;
  --color-base-50: rgb(141, 123, 183) !important;
  --color-base-60: rgb(90, 72, 132) !important;
  --color-base-70: rgb(68, 54, 99) !important;
  --color-blue: rgb(92, 168, 245) !important;
  --color-blue-rgb: from rgb(92, 168, 245) r g b !important;
  --color-cyan: rgb(92, 232, 245) !important;
  --color-cyan-rgb: from rgb(92, 232, 245) r g b !important;
  --color-green: rgb(143, 245, 92) !important;
  --color-green-rgb: from rgb(143, 245, 92) r g b !important;
  --color-grey: rgb(168, 168, 168) !important;
  --color-grey-rgb: from rgb(168, 168, 168) r g b !important;
  --color-orange: rgb(245, 156, 92) !important;
  --color-orange-rgb: from rgb(245, 156, 92) r g b !important;
  --color-pink: rgb(245, 92, 194) !important;
  --color-pink-rgb: from rgb(245, 92, 194) r g b !important;
  --color-purple: rgb(168, 92, 245) !important;
  --color-purple-rgb: from rgb(168, 92, 245) r g b !important;
  --color-red: rgb(245, 105, 92) !important;
  --color-red-rgb: from rgb(245, 105, 92) r g b !important;
  --color-yellow: rgb(245, 219, 92) !important;
  --color-yellow-rgb: from rgb(245, 219, 92) r g b !important;
  --cyan-h: 185 !important;
  --dark: rgb(45, 36, 66) !important;
  --darkgray: rgb(45, 36, 66) !important;
  --divider-color: rgb(184, 173, 210) !important;
  --dropdown-background: rgb(249, 248, 251) !important;
  --dropdown-background-hover: rgb(227, 222, 237) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(184, 173, 210), inset 0 0 0 1px rgb(184, 173, 210) !important;
  --embed-max-height: 80vh !important;
  --embed-padding: 0 !important;
  --file-header-background: rgb(249, 248, 251) !important;
  --file-header-background-focused: rgb(249, 248, 251) !important;
  --file-header-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(249, 248, 251) !important;
  --flair-color: rgb(45, 36, 66) !important;
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
  --footnote-divider-color: rgb(184, 173, 210) !important;
  --footnote-id-color: rgb(141, 123, 183) !important;
  --footnote-id-color-no-occurrences: rgb(184, 173, 210) !important;
  --footnote-input-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --footnote-size: 0.875rem !important;
  --graph-line: rgb(184, 173, 210) !important;
  --graph-node: rgb(245, 105, 92) !important;
  --graph-node-attachment: rgb(92, 168, 245) !important;
  --graph-node-tag: rgb(245, 219, 92) !important;
  --graph-node-unresolved: rgba(from rgb(245, 105, 92) r g b / 0.8) !important;
  --graph-text: rgb(45, 36, 66) !important;
  --gray: rgb(141, 123, 183) !important;
  --green-h: 100 !important;
  --h1-color: rgb(138, 92, 245) !important;
  --h1-size: 2.488em !important;
  --h2-color: rgb(138, 92, 245) !important;
  --h2-size: 2.047em !important;
  --h3-color: rgb(138, 92, 245) !important;
  --h3-size: 1.728em !important;
  --h4-color: rgb(138, 92, 245) !important;
  --h4-size: 1.44em !important;
  --h5-color: rgb(138, 92, 245) !important;
  --h5-size: 1.2em !important;
  --h6-color: rgb(138, 92, 245) !important;
  --headerFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(184, 173, 210) !important;
  --heading-spacing: 1.2em !important;
  --highlight: rgba(from rgb(138, 92, 245) r g b / 0.25) !important;
  --hr-color: rgb(138, 92, 245) !important;
  --hr-thickness: 0.1rem !important;
  --icon-color: rgb(141, 123, 183) !important;
  --icon-color-focused: rgb(90, 72, 132) !important;
  --icon-color-hover: rgb(141, 123, 183) !important;
  --indentation-guide-color: rgba(0, 0, 0 / 0.12) !important;
  --indentation-guide-color-active: rgba(0, 0, 0 / 0.2) !important;
  --inline-title-color: rgb(138, 92, 245) !important;
  --inline-title-size: 2.488em !important;
  --input-date-separator: rgb(184, 173, 210) !important;
  --input-placeholder-color: rgb(184, 173, 210) !important;
  --interactive-hover: rgb(227, 222, 237) !important;
  --interactive-normal: rgb(249, 248, 251) !important;
  --light: rgb(249, 248, 251) !important;
  --lightgray: rgb(241, 239, 246) !important;
  --link-color-hover: rgb(138, 92, 245) !important;
  --link-decoration: none !important;
  --link-decoration-hover: wavy !important;
  --link-external-color-hover: rgb(138, 92, 245) !important;
  --link-external-decoration: none !important;
  --link-unresolved-decoration-color: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --list-marker-color: rgb(141, 123, 183) !important;
  --list-marker-color-hover: rgb(141, 123, 183) !important;
  --menu-background: rgb(241, 239, 246) !important;
  --menu-border-color: rgb(170, 156, 201) !important;
  --metadata-border-color: rgb(184, 173, 210) !important;
  --metadata-divider-color: rgb(184, 173, 210) !important;
  --metadata-input-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --metadata-input-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.875rem !important;
  --metadata-input-text-color: rgb(45, 36, 66) !important;
  --metadata-label-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --metadata-label-font: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.875rem !important;
  --metadata-label-text-color: rgb(141, 123, 183) !important;
  --metadata-label-text-color-hover: rgb(141, 123, 183) !important;
  --metadata-property-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(155, 140, 192) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(170, 156, 201) !important;
  --modal-background: rgb(249, 248, 251) !important;
  --modal-border-color: rgb(155, 140, 192) !important;
  --nav-collapse-icon-color: rgb(184, 173, 210) !important;
  --nav-collapse-icon-color-collapsed: rgb(184, 173, 210) !important;
  --nav-heading-color: rgb(45, 36, 66) !important;
  --nav-heading-color-collapsed: rgb(184, 173, 210) !important;
  --nav-heading-color-collapsed-hover: rgb(141, 123, 183) !important;
  --nav-heading-color-hover: rgb(45, 36, 66) !important;
  --nav-indentation-guide-color: rgba(0, 0, 0 / 0.12) !important;
  --nav-item-background-active: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --nav-item-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --nav-item-color: rgb(141, 123, 183) !important;
  --nav-item-color-active: rgb(90, 72, 132) !important;
  --nav-item-color-hover: rgb(45, 36, 66) !important;
  --nav-item-color-selected: rgb(45, 36, 66) !important;
  --nav-tag-color: rgb(184, 173, 210) !important;
  --nav-tag-color-active: rgb(141, 123, 183) !important;
  --nav-tag-color-hover: rgb(141, 123, 183) !important;
  --opacity: 0.1 !important;
  --orange-h: 25 !important;
  --p-spacing: 1.5rem !important;
  --pdf-background: rgb(249, 248, 251) !important;
  --pdf-page-background: rgb(249, 248, 251) !important;
  --pdf-sidebar-background: rgb(249, 248, 251) !important;
  --pill-border-color: rgb(184, 173, 210) !important;
  --pill-border-color-hover: rgb(170, 156, 201) !important;
  --pill-color: rgb(141, 123, 183) !important;
  --pill-color-hover: rgb(45, 36, 66) !important;
  --pill-color-remove: rgb(184, 173, 210) !important;
  --pink-h: 320 !important;
  --prompt-background: rgb(249, 248, 251) !important;
  --prompt-border-color: rgb(155, 140, 192) !important;
  --purple-h: 270 !important;
  --raised-background: color-mix(in srgb, rgb(249, 248, 251) 65%, transparent) linear-gradient(rgb(249, 248, 251), color-mix(in srgb, rgb(249, 248, 251) 65%, transparent)) !important;
  --red-h: 5 !important;
  --ribbon-background: rgb(241, 239, 246) !important;
  --ribbon-background-collapsed: rgb(249, 248, 251) !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0 / 0.2) !important;
  --scrollbar-bg: rgba(0, 0, 0 / 0.05) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0 / 0.1) !important;
  --search-clear-button-color: rgb(141, 123, 183) !important;
  --search-icon-color: rgb(141, 123, 183) !important;
  --search-result-background: rgb(249, 248, 251) !important;
  --setting-group-heading-color: rgb(45, 36, 66) !important;
  --setting-items-background: rgb(227, 222, 237) !important;
  --setting-items-border-color: rgb(184, 173, 210) !important;
  --slider-thumb-border-color: rgb(170, 156, 201) !important;
  --slider-track-background: rgb(184, 173, 210) !important;
  --status-bar-background: rgb(241, 239, 246) !important;
  --status-bar-border-color: rgb(141, 123, 183) !important;
  --status-bar-text-color: rgb(141, 123, 183) !important;
  --suggestion-background: rgb(249, 248, 251) !important;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0 / 0.1) !important;
  --sync-avatar-color-1: rgb(245, 105, 92) !important;
  --sync-avatar-color-2: rgb(245, 156, 92) !important;
  --sync-avatar-color-3: rgb(245, 219, 92) !important;
  --sync-avatar-color-4: rgb(143, 245, 92) !important;
  --sync-avatar-color-5: rgb(92, 232, 245) !important;
  --sync-avatar-color-6: rgb(92, 168, 245) !important;
  --sync-avatar-color-7: rgb(168, 92, 245) !important;
  --sync-avatar-color-8: rgb(245, 92, 194) !important;
  --tab-background-active: rgb(249, 248, 251) !important;
  --tab-container-background: rgb(241, 239, 246) !important;
  --tab-divider-color: rgb(170, 156, 201) !important;
  --tab-outline-color: rgb(184, 173, 210) !important;
  --tab-switcher-background: rgb(241, 239, 246) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(241, 239, 246), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0 / 0.05) !important;
  --tab-text-color: rgb(184, 173, 210) !important;
  --tab-text-color-active: rgb(141, 123, 183) !important;
  --tab-text-color-focused: rgb(141, 123, 183) !important;
  --tab-text-color-focused-active: rgb(141, 123, 183) !important;
  --tab-text-color-focused-active-current: rgb(90, 72, 132) !important;
  --table-add-button-border-color: rgb(184, 173, 210) !important;
  --table-add-button-border-width: 0.1rem !important;
  --table-border-color: rgb(138, 92, 245) !important;
  --table-border-width: 0.1rem !important;
  --table-column-first-border-width: 0.1rem !important;
  --table-column-last-border-width: 0.1rem !important;
  --table-drag-handle-color: rgb(184, 173, 210) !important;
  --table-header-background: rgb(138, 92, 245) !important;
  --table-header-background-hover: rgb(138, 92, 245) !important;
  --table-header-border-color: rgb(138, 92, 245) !important;
  --table-header-border-width: 0.1rem !important;
  --table-header-color: rgb(249, 248, 251) !important;
  --table-row-alt-background: rgba(from rgb(138, 92, 245) r g b / 0.1) !important;
  --table-row-alt-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.2) !important;
  --table-row-background-hover: rgba(from rgb(138, 92, 245) r g b / 0.1) !important;
  --table-row-last-border-width: 0.1rem !important;
  --tag-size: 0.875rem !important;
  --text-error: rgb(245, 105, 92) !important;
  --text-faint: rgb(184, 173, 210) !important;
  --text-highlight-bg: rgba(from rgb(138, 92, 245) r g b / 0.25) !important;
  --text-highlight-bg-rgb: from rgb(138, 92, 245) r g b !important;
  --text-muted: rgb(141, 123, 183) !important;
  --text-normal: rgb(45, 36, 66) !important;
  --text-success: rgb(143, 245, 92) !important;
  --text-warning: rgb(245, 156, 92) !important;
  --textHighlight: rgba(from rgb(138, 92, 245) r g b / 0.25) !important;
  --titleFont: Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(241, 239, 246) !important;
  --titlebar-background-focused: rgb(241, 239, 246) !important;
  --titlebar-border-color: rgb(184, 173, 210) !important;
  --titlebar-text-color: rgb(141, 123, 183) !important;
  --titlebar-text-color-focused: rgb(45, 36, 66) !important;
  --vault-profile-color: rgb(90, 72, 132) !important;
  --vault-profile-color-hover: rgb(90, 72, 132) !important;
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
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body del {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration: line-through rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body p {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 123, 183) none 0px;
  text-decoration: rgb(141, 123, 183);
  text-decoration-color: rgb(141, 123, 183);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
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
  text-decoration: rgb(184, 173, 210);
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
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(45, 36, 66);
  border-radius: 8px;
  border-right-color: rgb(45, 36, 66);
  border-top-color: rgb(45, 36, 66);
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
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 123, 183);
  text-decoration: line-through rgb(141, 123, 183);
  text-decoration-color: rgb(141, 123, 183);
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
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(45, 36, 66);
  text-decoration: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-top-color: color(srgb 0.3608 0.66 0.9592);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: from rgb(92, 232, 245) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: from rgb(168, 92, 245) r g b;
  background-color: color(srgb 0.66 0.3608 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: from rgb(245, 105, 92) r g b;
  background-color: color(srgb 0.9592 0.410667 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: from rgb(245, 156, 92) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: from rgb(138, 92, 245) r g b;
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: from rgb(143, 245, 92) r g b;
  background-color: color(srgb 0.560267 0.9592 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-left-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-right-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-top-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: from rgb(92, 232, 245) r g b;
  background-color: color(srgb 0.3608 0.909334 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: from rgb(92, 168, 245) r g b;
  background-color: color(srgb 0.3608 0.66 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: from rgb(245, 156, 92) r g b;
  background-color: color(srgb 0.9592 0.610133 0.3608 / 0.1);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
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
  text-decoration: rgb(45, 36, 66);
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
  --callout-color: from rgb(92, 168, 245) r g b;
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
  text-decoration: rgb(141, 123, 183);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(141, 123, 183);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(141, 123, 183);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  border-bottom-color: rgb(90, 72, 132);
  border-left-color: rgb(90, 72, 132);
  border-right-color: rgb(90, 72, 132);
  border-top-color: rgb(90, 72, 132);
  color: rgb(90, 72, 132);
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
  text-decoration: rgb(141, 123, 183);
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
  text-decoration: rgb(141, 123, 183);
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
  text-decoration: rgb(141, 123, 183);
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
  text-decoration: underline dotted rgb(45, 36, 66);
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
}`,
  },
};
