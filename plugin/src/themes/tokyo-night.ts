import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tokyo-night",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 202 !important;
  --accent-l: 75% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgb(41, 46, 66) !important;
  --background-modifier-border: rgb(41, 46, 66) !important;
  --background-modifier-border-focus: rgb(41, 46, 66) !important;
  --background-modifier-border-hover: rgb(41, 46, 66) !important;
  --background-modifier-cover: rgba(22, 22, 30, 0.8) !important;
  --background-modifier-error: rgb(219, 75, 75) !important;
  --background-modifier-error-hover: rgb(255, 117, 127) !important;
  --background-modifier-form-field: rgb(22, 22, 30) !important;
  --background-modifier-form-field-highlighted: rgb(22, 22, 30) !important;
  --background-modifier-form-field-hover: rgb(22, 22, 30) !important;
  --background-modifier-hover: rgb(41, 46, 66) !important;
  --background-modifier-message: rgba(41, 46, 66, 0.9) !important;
  --background-modifier-success: rgb(158, 206, 106) !important;
  --background-primary: rgb(26, 27, 38) !important;
  --background-primary-alt: rgb(26, 27, 38) !important;
  --background-secondary: rgb(22, 22, 30) !important;
  --background-secondary-alt: rgb(22, 22, 30) !important;
  --bases-cards-background: rgb(26, 27, 38) !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: rgb(26, 27, 38) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(41, 46, 66) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(41, 46, 66) !important;
  --bases-embed-border-color: rgb(41, 46, 66) !important;
  --bases-group-heading-property-color: rgb(169, 177, 214) !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: rgb(41, 46, 66) !important;
  --bases-table-cell-background-active: rgb(26, 27, 38) !important;
  --bases-table-cell-background-disabled: rgb(26, 27, 38) !important;
  --bases-table-cell-background-selected: rgba(128, 208, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(41, 46, 66) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(128, 208, 255) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: rgb(26, 27, 38) !important;
  --bases-table-header-background: rgb(26, 27, 38) !important;
  --bases-table-header-background-hover: rgb(41, 46, 66) !important;
  --bases-table-header-color: rgb(169, 177, 214) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: rgb(26, 27, 38) !important;
  --bases-table-summary-background-hover: rgb(41, 46, 66) !important;
  --bg: rgb(26, 27, 38) !important;
  --bg_dark: rgb(22, 22, 30) !important;
  --bg_dark2: rgb(18, 18, 24) !important;
  --bg_dark2_x: 18, 18, 24 !important;
  --bg_dark_x: 22, 22, 30 !important;
  --bg_highlight: rgb(41, 46, 66) !important;
  --bg_highlight_dark: rgb(36, 40, 59) !important;
  --bg_highlight_dark_x: 36, 40, 59 !important;
  --bg_highlight_x: 41, 46, 66 !important;
  --bg_x: 26, 27, 38 !important;
  --blockquote-background-color: rgb(22, 22, 30) !important;
  --blockquote-border-color: rgb(128, 208, 255) !important;
  --blue: rgb(122, 162, 247) !important;
  --blue0: rgb(61, 89, 161) !important;
  --blue0_x: 61, 89, 161 !important;
  --blue_x: 122, 162, 247 !important;
  --blur-background: color-mix(in srgb, rgb(22, 22, 30) 65%, transparent) linear-gradient(rgb(22, 22, 30), color-mix(in srgb, rgb(22, 22, 30) 65%, transparent)) !important;
  --bodyFont: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(125, 207, 255) !important;
  --border-width: 2px !important;
  --callout-bug: 255, 117, 127;
  --callout-default: 122, 162, 247;
  --callout-error: 219, 75, 75;
  --callout-example: 187, 154, 247;
  --callout-fail: 219, 75, 75;
  --callout-important: 158, 206, 106;
  --callout-info: 122, 162, 247;
  --callout-question: 224, 175, 104;
  --callout-quote: 169, 177, 214;
  --callout-success: 26, 188, 156;
  --callout-summary: 125, 207, 255;
  --callout-tip: 125, 207, 255;
  --callout-todo: 125, 207, 255;
  --callout-warning: 255, 158, 100;
  --canvas-background: rgb(26, 27, 38) !important;
  --canvas-card-label-color: rgb(86, 95, 137) !important;
  --caret-color: rgb(192, 202, 245) !important;
  --checkbox-border-color: rgb(86, 95, 137) !important;
  --checkbox-border-color-hover: rgb(86, 95, 137) !important;
  --checkbox-color: rgb(158, 206, 106) !important;
  --checkbox-color-hover: rgb(158, 206, 106) !important;
  --checkbox-marker-color: rgb(26, 27, 38) !important;
  --checkbox-radius: 12px !important;
  --checklist-done-color: rgb(169, 177, 214) !important;
  --code-background: rgb(36, 40, 59) !important;
  --code-border-color: rgb(41, 46, 66) !important;
  --code-bracket-background: rgb(41, 46, 66) !important;
  --code-comment: rgb(86, 95, 137) !important;
  --code-function: rgb(224, 175, 104) !important;
  --code-important: rgb(255, 158, 100) !important;
  --code-keyword: rgb(187, 154, 247) !important;
  --code-normal: rgb(192, 202, 245) !important;
  --code-operator: rgb(255, 117, 127) !important;
  --code-property: rgb(125, 207, 255) !important;
  --code-punctuation: rgb(169, 177, 214) !important;
  --code-string: rgb(158, 206, 106) !important;
  --code-tag: rgb(255, 117, 127) !important;
  --code-value: rgb(187, 154, 247) !important;
  --codeFont: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(86, 95, 137) !important;
  --collapse-icon-color-collapsed: rgb(187, 154, 247) !important;
  --color-accent: rgb(128, 208, 255) !important;
  --color-accent-1: hsl(199, 102%, 86.25%) !important;
  --color-accent-2: hsl(197, 105%, 96.75%) !important;
  --color-accent-hsl: 202, 100%, 75% !important;
  --color-blue: rgb(122, 162, 247) !important;
  --color-cyan: rgb(125, 207, 255) !important;
  --color-green: rgb(158, 206, 106) !important;
  --color-orange: rgb(255, 158, 100) !important;
  --color-pink: rgb(187, 154, 247) !important;
  --color-purple: rgb(187, 154, 247) !important;
  --color-red: rgb(255, 117, 127) !important;
  --color-yellow: rgb(224, 175, 104) !important;
  --color_blue_rgb: 122, 162, 247 !important;
  --color_cyan_rgb: 125, 207, 255 !important;
  --color_green_rgb: 158, 206, 106 !important;
  --color_orange_rgb: 255, 158, 100 !important;
  --color_pink_rgb: 187, 154, 247 !important;
  --color_purple_rgb: 187, 154, 247 !important;
  --color_red_rgb: 255, 117, 127 !important;
  --color_yellow_rgb: 224, 175, 104 !important;
  --comment: rgb(86, 95, 137) !important;
  --comment_x: 86, 95, 137 !important;
  --cyan: rgb(125, 207, 255) !important;
  --cyan_hsl: 202 100% 75% !important;
  --cyan_x: 125, 207, 255 !important;
  --dark: rgb(192, 202, 245) !important;
  --darkgray: rgb(192, 202, 245) !important;
  --date-background-color: rgb(41, 46, 66) !important;
  --date-color: rgb(122, 162, 247) !important;
  --default-font: '"JetBrains Mono", monospace, "Inter", sans-serif' !important;
  --divider-color: rgb(41, 46, 66) !important;
  --divider-color-hover: rgb(128, 208, 255) !important;
  --dropdown-background: rgb(22, 22, 30) !important;
  --dropdown-background-hover: rgb(26, 27, 38) !important;
  --embed-background: rgb(22, 22, 30) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(41, 46, 66), inset 0 0 0 1px rgb(41, 46, 66) !important;
  --embed-border-start: 2px solid rgb(128, 208, 255) !important;
  --embed-padding: 1.5rem 1.5rem 0.5rem !important;
  --fg: rgb(192, 202, 245) !important;
  --fg_dark: rgb(169, 177, 214) !important;
  --fg_dark_x: 169, 177, 214 !important;
  --fg_x: 192, 202, 245 !important;
  --file-header-background: rgb(26, 27, 38) !important;
  --file-header-background-focused: rgb(26, 27, 38) !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(22, 22, 30) !important;
  --flair-color: rgb(192, 202, 245) !important;
  --flashing-background: rgba(61, 89, 161, 0.3) !important;
  --font-interface: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgb(41, 46, 66) !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgb(169, 177, 214) !important;
  --footnote-id-color-no-occurrences: rgb(86, 95, 137) !important;
  --footnote-input-background-active: rgb(41, 46, 66) !important;
  --graph-line: rgb(86, 95, 137) !important;
  --graph-node: rgb(192, 202, 245) !important;
  --graph-node-attachment: rgb(122, 162, 247) !important;
  --graph-node-focused: rgb(187, 154, 247) !important;
  --graph-node-tag: rgb(255, 158, 100) !important;
  --graph-node-unresolved: rgb(86, 95, 137) !important;
  --graph-text: rgb(192, 202, 245) !important;
  --gray: rgb(169, 177, 214) !important;
  --green: rgb(158, 206, 106) !important;
  --green_x: 158, 206, 106 !important;
  --h1-color: rgb(255, 117, 127) !important;
  --h2-color: rgb(224, 175, 104) !important;
  --h3-color: rgb(158, 206, 106) !important;
  --h4-color: rgb(125, 207, 255) !important;
  --h5-color: rgb(122, 162, 247) !important;
  --h6-color: rgb(187, 154, 247) !important;
  --headerFont: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(86, 95, 137) !important;
  --highlight: rgba(255, 158, 100, 0.25) !important;
  --hr-color: rgb(41, 46, 66) !important;
  --icon-color: rgb(169, 177, 214) !important;
  --icon-color-active: rgb(187, 154, 247) !important;
  --icon-color-focused: rgb(187, 154, 247) !important;
  --icon-color-hover: rgb(122, 162, 247) !important;
  --image-radius: 0px !important;
  --indentation-guide-color: rgb(86, 95, 137) !important;
  --indentation-guide-color-active: rgb(86, 95, 137) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: rgb(255, 117, 127) !important;
  --input-border-width: 2px !important;
  --input-date-separator: rgb(86, 95, 137) !important;
  --input-placeholder-color: rgb(86, 95, 137) !important;
  --interactive-accent: rgb(128, 208, 255) !important;
  --interactive-accent-hover: rgb(122, 162, 247) !important;
  --interactive-accent-hsl: 202, 100%, 75% !important;
  --interactive-hover: rgb(26, 27, 38) !important;
  --interactive-normal: rgb(22, 22, 30) !important;
  --interactive-success: rgb(158, 206, 106) !important;
  --italic-color: rgb(125, 207, 255) !important;
  --light: rgb(26, 27, 38) !important;
  --lightgray: rgb(22, 22, 30) !important;
  --link-color: rgb(187, 154, 247) !important;
  --link-color-hover: rgb(125, 207, 255) !important;
  --link-external-color: rgb(187, 154, 247) !important;
  --link-external-color-hover: rgb(125, 207, 255) !important;
  --link-external-filter: invert(35%) sepia(28%) saturate(681%) hue-rotate(192deg) brightness(94%) contrast(85%) !important;
  --link-unresolved-color: rgb(187, 154, 247) !important;
  --link-unresolved-decoration-color: rgba(128, 208, 255, 0.3) !important;
  --list-marker-color: rgb(86, 95, 137) !important;
  --list-marker-color-collapsed: rgb(187, 154, 247) !important;
  --list-marker-color-hover: rgb(169, 177, 214) !important;
  --magent_hsl: 261 85% 79% !important;
  --magenta: rgb(187, 154, 247) !important;
  --magenta_x: 187, 154, 247 !important;
  --menu-background: rgb(22, 22, 30) !important;
  --menu-border-color: rgb(41, 46, 66) !important;
  --menu-border-width: 2px !important;
  --mermaid-actor: rgb(169, 177, 214) !important;
  --mermaid-loopline: rgb(122, 162, 247) !important;
  --mermaid-note: rgb(61, 89, 161) !important;
  --metadata-border-color: rgb(41, 46, 66) !important;
  --metadata-divider-color: rgb(41, 46, 66) !important;
  --metadata-input-background-active: rgb(41, 46, 66) !important;
  --metadata-input-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(192, 202, 245) !important;
  --metadata-label-background-active: rgb(41, 46, 66) !important;
  --metadata-label-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(169, 177, 214) !important;
  --metadata-label-text-color-hover: rgb(169, 177, 214) !important;
  --metadata-property-background-active: rgb(41, 46, 66) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(41, 46, 66) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(41, 46, 66) !important;
  --modal-background: rgb(26, 27, 38) !important;
  --modal-border-color: rgb(41, 46, 66) !important;
  --modal-border-width: 2px !important;
  --nav-collapse-icon-color: rgb(86, 95, 137) !important;
  --nav-collapse-icon-color-collapsed: rgb(86, 95, 137) !important;
  --nav-file-tag: rgba(224, 175, 104, 0.9) !important;
  --nav-heading-color: rgb(192, 202, 245) !important;
  --nav-heading-color-collapsed: rgb(86, 95, 137) !important;
  --nav-heading-color-collapsed-hover: rgb(169, 177, 214) !important;
  --nav-heading-color-hover: rgb(192, 202, 245) !important;
  --nav-indentation-guide-color: rgb(41, 46, 66) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgb(41, 46, 66) !important;
  --nav-item-background-hover: rgb(41, 46, 66) !important;
  --nav-item-background-selected: rgba(128, 208, 255, 0.15) !important;
  --nav-item-color: rgb(169, 177, 214) !important;
  --nav-item-color-active: rgb(255, 117, 127) !important;
  --nav-item-color-highlighted: rgb(187, 154, 247) !important;
  --nav-item-color-hover: rgb(192, 202, 245) !important;
  --nav-item-color-selected: rgb(192, 202, 245) !important;
  --nav-tag-color: rgb(86, 95, 137) !important;
  --nav-tag-color-active: rgb(169, 177, 214) !important;
  --nav-tag-color-hover: rgb(169, 177, 214) !important;
  --orange: rgb(255, 158, 100) !important;
  --orange_x: 255, 158, 100 !important;
  --pdf-background: rgb(26, 27, 38) !important;
  --pdf-page-background: rgb(26, 27, 38) !important;
  --pdf-shadow: 0 0 0 1px rgb(41, 46, 66) !important;
  --pdf-sidebar-background: rgb(26, 27, 38) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(41, 46, 66) !important;
  --pill-border-color: rgb(41, 46, 66) !important;
  --pill-border-color-hover: rgb(41, 46, 66) !important;
  --pill-border-width: 2px !important;
  --pill-color: rgb(169, 177, 214) !important;
  --pill-color-hover: rgb(192, 202, 245) !important;
  --pill-color-remove: rgb(86, 95, 137) !important;
  --pill-color-remove-hover: rgb(187, 154, 247) !important;
  --pink: rgb(217, 0, 105) !important;
  --pink_hsl: 331 100% 43% !important;
  --pink_x: 217, 0, 105 !important;
  --prompt-background: rgb(26, 27, 38) !important;
  --prompt-border-color: rgb(41, 46, 66) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, rgb(22, 22, 30) 65%, transparent) linear-gradient(rgb(22, 22, 30), color-mix(in srgb, rgb(22, 22, 30) 65%, transparent)) !important;
  --red: rgb(255, 117, 127) !important;
  --red1: rgb(219, 75, 75) !important;
  --red1_x: 219, 75, 75 !important;
  --red_x: 255, 117, 127 !important;
  --ribbon-background: rgb(22, 22, 30) !important;
  --ribbon-background-collapsed: rgb(26, 27, 38) !important;
  --scrollbar-active-thumb-bg: rgb(86, 95, 137) !important;
  --scrollbar-bg: rgb(18, 18, 24) !important;
  --scrollbar-thumb-bg: rgb(86, 95, 137) !important;
  --scrollbar-width: 7px !important;
  --search-clear-button-color: rgb(169, 177, 214) !important;
  --search-icon-color: rgb(169, 177, 214) !important;
  --search-result-background: rgb(26, 27, 38) !important;
  --secondary: rgb(187, 154, 247) !important;
  --setting-group-heading-color: rgb(192, 202, 245) !important;
  --setting-items-background: rgb(26, 27, 38) !important;
  --setting-items-border-color: rgb(41, 46, 66) !important;
  --slider-thumb-border-color: rgb(41, 46, 66) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: rgb(41, 46, 66) !important;
  --status-bar-background: rgb(22, 22, 30) !important;
  --status-bar-border-color: rgb(41, 46, 66) !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-text-color: rgb(169, 177, 214) !important;
  --suggestion-background: rgb(26, 27, 38) !important;
  --sync-avatar-color-1: rgb(255, 117, 127) !important;
  --sync-avatar-color-2: rgb(255, 158, 100) !important;
  --sync-avatar-color-3: rgb(224, 175, 104) !important;
  --sync-avatar-color-4: rgb(158, 206, 106) !important;
  --sync-avatar-color-5: rgb(125, 207, 255) !important;
  --sync-avatar-color-6: rgb(122, 162, 247) !important;
  --sync-avatar-color-7: rgb(187, 154, 247) !important;
  --sync-avatar-color-8: rgb(187, 154, 247) !important;
  --tab-background-active: rgb(26, 27, 38) !important;
  --tab-container-background: rgb(22, 22, 30) !important;
  --tab-divider-color: rgb(41, 46, 66) !important;
  --tab-outline-color: rgb(41, 46, 66) !important;
  --tab-switcher-background: rgb(22, 22, 30) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(22, 22, 30), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(128, 208, 255) !important;
  --tab-text-color: rgb(86, 95, 137) !important;
  --tab-text-color-active: rgb(169, 177, 214) !important;
  --tab-text-color-focused: rgb(169, 177, 214) !important;
  --tab-text-color-focused-active: rgba(255, 117, 127, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(255, 117, 127) !important;
  --tab-text-color-focused-highlighted: rgb(187, 154, 247) !important;
  --table-add-button-border-color: rgb(41, 46, 66) !important;
  --table-border-color: rgb(41, 46, 66) !important;
  --table-drag-handle-background-active: rgb(128, 208, 255) !important;
  --table-drag-handle-color: rgb(86, 95, 137) !important;
  --table-drag-handle-color-active: rgb(26, 27, 38) !important;
  --table-header-background: rgb(18, 18, 24) !important;
  --table-header-background-hover: rgb(18, 18, 24) !important;
  --table-header-border-color: rgb(41, 46, 66) !important;
  --table-header-color: rgb(192, 202, 245) !important;
  --table-selection: rgba(128, 208, 255, 0.1) !important;
  --table-selection-border-color: rgb(128, 208, 255) !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(187, 154, 247, 0.15) !important;
  --tag-background-hover: rgba(125, 207, 255, 0.15) !important;
  --tag-border-color: rgba(128, 208, 255, 0.15) !important;
  --tag-border-color-hover: rgba(128, 208, 255, 0.15) !important;
  --tag-color: rgb(187, 154, 247) !important;
  --tag-color-hover: rgb(125, 207, 255) !important;
  --teal: rgb(26, 188, 156) !important;
  --teal_x: 26, 188, 156 !important;
  --terminal_black: rgb(65, 72, 104) !important;
  --terminal_black_x: 65, 72, 104 !important;
  --tertiary: rgb(125, 207, 255) !important;
  --text-accent: rgb(187, 154, 247) !important;
  --text-accent-hover: rgb(125, 207, 255) !important;
  --text-error: rgb(219, 75, 75) !important;
  --text-error-hover: rgb(255, 117, 127) !important;
  --text-faint: rgb(86, 95, 137) !important;
  --text-highlight-bg: rgba(255, 158, 100, 0.25) !important;
  --text-muted: rgb(169, 177, 214) !important;
  --text-normal: rgb(192, 202, 245) !important;
  --text-on-accent: rgb(26, 27, 38) !important;
  --text-selection: rgba(61, 89, 161, 0.6) !important;
  --text-success: rgb(158, 206, 106) !important;
  --text-warning: rgb(255, 158, 100) !important;
  --textHighlight: rgba(255, 158, 100, 0.25) !important;
  --titleFont: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(22, 22, 30) !important;
  --titlebar-background-focused: rgb(22, 22, 30) !important;
  --titlebar-border-color: rgb(41, 46, 66) !important;
  --titlebar-text-color: rgb(169, 177, 214) !important;
  --titlebar-text-color-focused: rgb(192, 202, 245) !important;
  --toggle-thumb-color: rgb(26, 27, 38) !important;
  --unknown: #ffffff !important;
  --vault-profile-color: rgb(192, 202, 245) !important;
  --vault-profile-color-hover: rgb(192, 202, 245) !important;
  --yellow: rgb(224, 175, 104) !important;
  --yellow_x: 224, 175, 104 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 46, 66);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 30);
  border-left-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(18, 18, 24);
  color: rgb(192, 202, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 158, 100, 0.25);
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: line-through rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body p {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(169, 177, 214) none 0px;
  text-decoration: rgb(169, 177, 214);
  text-decoration-color: rgb(169, 177, 214);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: underline rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: underline rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: underline rgba(128, 208, 255, 0.3);
  text-decoration-color: rgba(128, 208, 255, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(86, 95, 137);
  text-decoration: rgb(86, 95, 137);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(22, 22, 30);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(192, 202, 245);
  width: 643px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(18, 18, 24);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(224, 175, 104);
  border-left-color: rgb(224, 175, 104);
  border-right-color: rgb(224, 175, 104);
  border-top-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(169, 177, 214);
  text-decoration: line-through rgb(169, 177, 214);
  text-decoration-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(86, 95, 137);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(86, 95, 137);
  border-right-color: rgb(86, 95, 137);
  border-top-color: rgb(86, 95, 137);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 117, 127;
  background-color: rgba(255, 117, 127, 0.1);
  border-bottom-color: rgba(255, 117, 127, 0.25);
  border-left-color: rgba(255, 117, 127, 0.25);
  border-right-color: rgba(255, 117, 127, 0.25);
  border-top-color: rgba(255, 117, 127, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.1);
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-left-color: rgba(219, 75, 75, 0.25);
  border-right-color: rgba(219, 75, 75, 0.25);
  border-top-color: rgba(219, 75, 75, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 187, 154, 247;
  background-color: rgba(187, 154, 247, 0.1);
  border-bottom-color: rgba(187, 154, 247, 0.25);
  border-left-color: rgba(187, 154, 247, 0.25);
  border-right-color: rgba(187, 154, 247, 0.25);
  border-top-color: rgba(187, 154, 247, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.1);
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-left-color: rgba(219, 75, 75, 0.25);
  border-right-color: rgba(219, 75, 75, 0.25);
  border-top-color: rgba(219, 75, 75, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.1);
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.1);
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 224, 175, 104;
  background-color: rgba(224, 175, 104, 0.1);
  border-bottom-color: rgba(224, 175, 104, 0.25);
  border-left-color: rgba(224, 175, 104, 0.25);
  border-right-color: rgba(224, 175, 104, 0.25);
  border-top-color: rgba(224, 175, 104, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 169, 177, 214;
  background-color: rgba(36, 40, 59, 0.5);
  border-bottom-color: rgba(169, 177, 214, 0.25);
  border-left-color: rgba(169, 177, 214, 0.25);
  border-right-color: rgba(169, 177, 214, 0.25);
  border-top-color: rgba(169, 177, 214, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 26, 188, 156;
  background-color: rgba(26, 188, 156, 0.1);
  border-bottom-color: rgba(26, 188, 156, 0.25);
  border-left-color: rgba(26, 188, 156, 0.25);
  border-right-color: rgba(26, 188, 156, 0.25);
  border-top-color: rgba(26, 188, 156, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 158, 100;
  background-color: rgba(255, 158, 100, 0.1);
  border-bottom-color: rgba(255, 158, 100, 0.25);
  border-left-color: rgba(255, 158, 100, 0.25);
  border-right-color: rgba(255, 158, 100, 0.25);
  border-top-color: rgba(255, 158, 100, 0.25);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
  color: rgb(192, 202, 245);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 30);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(41, 46, 66);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body h2 {
  color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body h3 {
  color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body h4 {
  color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body h5 {
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body h6 {
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(41, 46, 66);
  border-bottom-color: rgb(255, 117, 127);
  border-left-color: rgb(255, 117, 127);
  border-right-color: rgb(255, 117, 127);
  border-top-color: rgb(255, 117, 127);
  color: rgb(255, 117, 127);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(169, 177, 214);
  stroke: rgb(169, 177, 214);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(86, 95, 137);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 22, 30);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(192, 202, 245);
  text-decoration: underline dotted rgb(192, 202, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(192, 202, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 202 !important;
  --accent-l: 43% !important;
  --accent-s: 86% !important;
  --background-modifier-active-hover: rgb(220, 222, 226) !important;
  --background-modifier-border: rgb(220, 222, 226) !important;
  --background-modifier-border-focus: rgb(220, 222, 226) !important;
  --background-modifier-border-hover: rgb(220, 222, 226) !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(203, 204, 209, 0.8) !important;
  --background-modifier-error: rgb(115, 42, 56) !important;
  --background-modifier-error-hover: rgb(140, 67, 81) !important;
  --background-modifier-form-field: rgb(203, 204, 209) !important;
  --background-modifier-form-field-highlighted: rgb(203, 204, 209) !important;
  --background-modifier-form-field-hover: rgb(203, 204, 209) !important;
  --background-modifier-hover: rgb(220, 222, 226) !important;
  --background-modifier-message: rgba(220, 222, 226, 0.9) !important;
  --background-modifier-success: rgb(51, 99, 92) !important;
  --background-primary: rgb(213, 214, 219) !important;
  --background-primary-alt: rgb(213, 214, 219) !important;
  --background-secondary: rgb(203, 204, 209) !important;
  --background-secondary-alt: rgb(203, 204, 209) !important;
  --bases-cards-background: rgb(213, 214, 219) !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: rgb(213, 214, 219) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(220, 222, 226) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(220, 222, 226) !important;
  --bases-embed-border-color: rgb(220, 222, 226) !important;
  --bases-group-heading-property-color: rgb(39, 46, 75) !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: rgb(220, 222, 226) !important;
  --bases-table-cell-background-active: rgb(213, 214, 219) !important;
  --bases-table-cell-background-disabled: rgb(213, 214, 219) !important;
  --bases-table-cell-background-selected: rgba(15, 135, 204, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(220, 222, 226) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(15, 135, 204) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: rgb(213, 214, 219) !important;
  --bases-table-header-background: rgb(213, 214, 219) !important;
  --bases-table-header-background-hover: rgb(220, 222, 226) !important;
  --bases-table-header-color: rgb(39, 46, 75) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: rgb(213, 214, 219) !important;
  --bases-table-summary-background-hover: rgb(220, 222, 226) !important;
  --bg: rgb(213, 214, 219) !important;
  --bg_dark: rgb(203, 204, 209) !important;
  --bg_dark2: rgb(188, 189, 194) !important;
  --bg_dark2_x: 188, 189, 194 !important;
  --bg_dark_x: 203, 204, 209 !important;
  --bg_highlight: rgb(220, 222, 226) !important;
  --bg_highlight_dark: rgb(195, 197, 201) !important;
  --bg_highlight_dark_x: 195, 197, 201 !important;
  --bg_highlight_x: 220, 222, 226 !important;
  --bg_x: 213, 214, 219 !important;
  --blockquote-background-color: rgb(203, 204, 209) !important;
  --blockquote-border-color: rgb(15, 135, 204) !important;
  --blue: rgb(52, 84, 138) !important;
  --blue0: rgb(39, 71, 125) !important;
  --blue0_x: 39, 71, 125 !important;
  --blue_x: 52, 84, 138 !important;
  --blur-background: color-mix(in srgb, rgb(213, 214, 219) 65%, transparent) linear-gradient(rgb(213, 214, 219), color-mix(in srgb, rgb(213, 214, 219) 65%, transparent)) !important;
  --bodyFont: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(15, 75, 110) !important;
  --border-width: 2px !important;
  --callout-bug: 140, 67, 81;
  --callout-default: 52, 84, 138;
  --callout-error: 115, 42, 56;
  --callout-example: 90, 74, 120;
  --callout-fail: 115, 42, 56;
  --callout-important: 51, 99, 92;
  --callout-info: 52, 84, 138;
  --callout-question: 143, 94, 21;
  --callout-quote: 39, 46, 75;
  --callout-success: 22, 103, 117;
  --callout-summary: 15, 75, 110;
  --callout-tip: 15, 75, 110;
  --callout-todo: 15, 75, 110;
  --callout-warning: 150, 80, 39;
  --canvas-background: rgb(213, 214, 219) !important;
  --canvas-card-label-color: rgb(150, 153, 163) !important;
  --canvas-color: 220, 222, 226 !important;
  --caret-color: rgb(52, 59, 88) !important;
  --checkbox-border-color: rgb(150, 153, 163) !important;
  --checkbox-border-color-hover: rgb(150, 153, 163) !important;
  --checkbox-color: rgb(51, 99, 92) !important;
  --checkbox-color-hover: rgb(51, 99, 92) !important;
  --checkbox-marker-color: rgb(213, 214, 219) !important;
  --checkbox-radius: 12px !important;
  --checklist-done-color: rgb(39, 46, 75) !important;
  --code-background: rgb(195, 197, 201) !important;
  --code-border-color: rgb(220, 222, 226) !important;
  --code-bracket-background: rgb(220, 222, 226) !important;
  --code-comment: rgb(150, 153, 163) !important;
  --code-function: rgb(143, 94, 21) !important;
  --code-important: rgb(150, 80, 39) !important;
  --code-keyword: rgb(90, 74, 120) !important;
  --code-normal: rgb(52, 59, 88) !important;
  --code-operator: rgb(140, 67, 81) !important;
  --code-property: rgb(15, 75, 110) !important;
  --code-punctuation: rgb(39, 46, 75) !important;
  --code-string: rgb(51, 99, 92) !important;
  --code-tag: rgb(140, 67, 81) !important;
  --code-value: rgb(90, 74, 120) !important;
  --codeFont: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(150, 153, 163) !important;
  --collapse-icon-color-collapsed: rgb(90, 74, 120) !important;
  --color-accent: rgb(15, 135, 204) !important;
  --color-accent-1: rgb(15, 148, 219) !important;
  --color-accent-2: rgb(15, 165, 235) !important;
  --color-accent-hsl: 202, 86%, 43% !important;
  --color-blue: rgb(52, 84, 138) !important;
  --color-cyan: rgb(15, 75, 110) !important;
  --color-green: rgb(51, 99, 92) !important;
  --color-orange: rgb(150, 80, 39) !important;
  --color-pink: rgb(90, 74, 120) !important;
  --color-purple: rgb(90, 74, 120) !important;
  --color-red: rgb(140, 67, 81) !important;
  --color-yellow: rgb(143, 94, 21) !important;
  --color_blue_rgb: 52, 84, 138 !important;
  --color_cyan_rgb: 15, 75, 110 !important;
  --color_green_rgb: 51, 99, 92 !important;
  --color_orange_rgb: 150, 80, 39 !important;
  --color_pink_rgb: 90, 74, 120 !important;
  --color_purple_rgb: 90, 74, 120 !important;
  --color_red_rgb: 140, 67, 81 !important;
  --color_yellow_rgb: 143, 94, 21 !important;
  --comment: rgb(150, 153, 163) !important;
  --comment_x: 150, 153, 163 !important;
  --cyan: rgb(15, 75, 110) !important;
  --cyan_x: 15, 75, 110 !important;
  --dark: rgb(52, 59, 88) !important;
  --darkgray: rgb(52, 59, 88) !important;
  --date-background-color: rgb(220, 222, 226) !important;
  --date-color: rgb(52, 84, 138) !important;
  --default-font: '"JetBrains Mono", monospace, "Inter", sans-serif' !important;
  --divider-color: rgb(220, 222, 226) !important;
  --divider-color-hover: rgb(15, 135, 204) !important;
  --dropdown-background: rgb(203, 204, 209) !important;
  --dropdown-background-hover: rgb(213, 214, 219) !important;
  --embed-background: rgb(203, 204, 209) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(220, 222, 226), inset 0 0 0 1px rgb(220, 222, 226) !important;
  --embed-border-start: 2px solid rgb(15, 135, 204) !important;
  --embed-padding: 1.5rem 1.5rem 0.5rem !important;
  --fg: rgb(52, 59, 88) !important;
  --fg_dark: rgb(39, 46, 75) !important;
  --fg_dark_x: 39, 46, 75 !important;
  --fg_x: 52, 59, 88 !important;
  --file-header-background: rgb(213, 214, 219) !important;
  --file-header-background-focused: rgb(213, 214, 219) !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(203, 204, 209) !important;
  --flair-color: rgb(52, 59, 88) !important;
  --flashing-background: rgba(39, 71, 125, 0.3) !important;
  --font-interface: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgb(220, 222, 226) !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgb(39, 46, 75) !important;
  --footnote-id-color-no-occurrences: rgb(150, 153, 163) !important;
  --footnote-input-background-active: rgb(220, 222, 226) !important;
  --graph-line: rgb(150, 153, 163) !important;
  --graph-node: rgb(52, 59, 88) !important;
  --graph-node-attachment: rgb(52, 84, 138) !important;
  --graph-node-focused: rgb(90, 74, 120) !important;
  --graph-node-tag: rgb(150, 80, 39) !important;
  --graph-node-unresolved: rgb(150, 153, 163) !important;
  --graph-text: rgb(52, 59, 88) !important;
  --gray: rgb(39, 46, 75) !important;
  --green: rgb(51, 99, 92) !important;
  --green_x: 51, 99, 92 !important;
  --h1-color: rgb(140, 67, 81) !important;
  --h2-color: rgb(143, 94, 21) !important;
  --h3-color: rgb(51, 99, 92) !important;
  --h4-color: rgb(15, 75, 110) !important;
  --h5-color: rgb(52, 84, 138) !important;
  --h6-color: rgb(90, 74, 120) !important;
  --headerFont: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(150, 153, 163) !important;
  --highlight: rgba(150, 80, 39, 0.25) !important;
  --hr-color: rgb(220, 222, 226) !important;
  --icon-color: rgb(39, 46, 75) !important;
  --icon-color-active: rgb(90, 74, 120) !important;
  --icon-color-focused: rgb(90, 74, 120) !important;
  --icon-color-hover: rgb(52, 84, 138) !important;
  --image-radius: 0px !important;
  --indentation-guide-color: rgb(150, 153, 163) !important;
  --indentation-guide-color-active: rgb(150, 153, 163) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: rgb(140, 67, 81) !important;
  --input-border-width: 2px !important;
  --input-date-separator: rgb(150, 153, 163) !important;
  --input-placeholder-color: rgb(150, 153, 163) !important;
  --interactive-accent: rgb(15, 135, 204) !important;
  --interactive-accent-hover: rgb(52, 84, 138) !important;
  --interactive-accent-hsl: 202, 86%, 43% !important;
  --interactive-hover: rgb(213, 214, 219) !important;
  --interactive-normal: rgb(203, 204, 209) !important;
  --interactive-success: rgb(51, 99, 92) !important;
  --italic-color: rgb(15, 75, 110) !important;
  --light: rgb(213, 214, 219) !important;
  --lightgray: rgb(203, 204, 209) !important;
  --link-color: rgb(90, 74, 120) !important;
  --link-color-hover: rgb(15, 75, 110) !important;
  --link-external-color: rgb(90, 74, 120) !important;
  --link-external-color-hover: rgb(15, 75, 110) !important;
  --link-external-filter: invert(62%) sepia(9%) saturate(266%) hue-rotate(189deg) brightness(97%) contrast(88%) !important;
  --link-unresolved-color: rgb(90, 74, 120) !important;
  --link-unresolved-decoration-color: rgba(15, 135, 204, 0.3) !important;
  --list-marker-color: rgb(150, 153, 163) !important;
  --list-marker-color-collapsed: rgb(90, 74, 120) !important;
  --list-marker-color-hover: rgb(39, 46, 75) !important;
  --magent_hsl: 261 24% 38% !important;
  --magenta: rgb(90, 74, 120) !important;
  --magenta_x: 90, 74, 120 !important;
  --menu-background: rgb(203, 204, 209) !important;
  --menu-border-color: rgb(220, 222, 226) !important;
  --menu-border-width: 2px !important;
  --mermaid-actor: rgb(39, 46, 75) !important;
  --mermaid-loopline: rgb(52, 84, 138) !important;
  --mermaid-note: rgb(39, 71, 125) !important;
  --metadata-border-color: rgb(220, 222, 226) !important;
  --metadata-divider-color: rgb(220, 222, 226) !important;
  --metadata-input-background-active: rgb(220, 222, 226) !important;
  --metadata-input-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(52, 59, 88) !important;
  --metadata-label-background-active: rgb(220, 222, 226) !important;
  --metadata-label-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(39, 46, 75) !important;
  --metadata-label-text-color-hover: rgb(39, 46, 75) !important;
  --metadata-property-background-active: rgb(220, 222, 226) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(220, 222, 226) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(220, 222, 226) !important;
  --modal-background: rgb(213, 214, 219) !important;
  --modal-border-color: rgb(220, 222, 226) !important;
  --modal-border-width: 2px !important;
  --nav-collapse-icon-color: rgb(150, 153, 163) !important;
  --nav-collapse-icon-color-collapsed: rgb(150, 153, 163) !important;
  --nav-file-tag: rgba(143, 94, 21, 0.9) !important;
  --nav-heading-color: rgb(52, 59, 88) !important;
  --nav-heading-color-collapsed: rgb(150, 153, 163) !important;
  --nav-heading-color-collapsed-hover: rgb(39, 46, 75) !important;
  --nav-heading-color-hover: rgb(52, 59, 88) !important;
  --nav-indentation-guide-color: rgb(220, 222, 226) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgb(220, 222, 226) !important;
  --nav-item-background-hover: rgb(220, 222, 226) !important;
  --nav-item-background-selected: rgba(15, 135, 204, 0.15) !important;
  --nav-item-color: rgb(39, 46, 75) !important;
  --nav-item-color-active: rgb(140, 67, 81) !important;
  --nav-item-color-highlighted: rgb(90, 74, 120) !important;
  --nav-item-color-hover: rgb(52, 59, 88) !important;
  --nav-item-color-selected: rgb(52, 59, 88) !important;
  --nav-tag-color: rgb(150, 153, 163) !important;
  --nav-tag-color-active: rgb(39, 46, 75) !important;
  --nav-tag-color-hover: rgb(39, 46, 75) !important;
  --orange: rgb(150, 80, 39) !important;
  --orange_x: 150, 80, 39 !important;
  --pdf-background: rgb(213, 214, 219) !important;
  --pdf-page-background: rgb(213, 214, 219) !important;
  --pdf-sidebar-background: rgb(213, 214, 219) !important;
  --pill-border-color: rgb(220, 222, 226) !important;
  --pill-border-color-hover: rgb(220, 222, 226) !important;
  --pill-border-width: 2px !important;
  --pill-color: rgb(39, 46, 75) !important;
  --pill-color-hover: rgb(52, 59, 88) !important;
  --pill-color-remove: rgb(150, 153, 163) !important;
  --pill-color-remove-hover: rgb(90, 74, 120) !important;
  --pink: rgb(109, 74, 120) !important;
  --pink_hsl: 286 24% 38% !important;
  --pink_x: 109, 74, 120 !important;
  --prompt-background: rgb(213, 214, 219) !important;
  --prompt-border-color: rgb(220, 222, 226) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, rgb(213, 214, 219) 65%, transparent) linear-gradient(rgb(213, 214, 219), color-mix(in srgb, rgb(213, 214, 219) 65%, transparent)) !important;
  --red: rgb(140, 67, 81) !important;
  --red1: rgb(115, 42, 56) !important;
  --red1_x: 115, 42, 56 !important;
  --red_x: 140, 67, 81 !important;
  --ribbon-background: rgb(203, 204, 209) !important;
  --ribbon-background-collapsed: rgb(213, 214, 219) !important;
  --scrollbar-active-thumb-bg: rgb(150, 153, 163) !important;
  --scrollbar-bg: rgb(188, 189, 194) !important;
  --scrollbar-thumb-bg: rgb(150, 153, 163) !important;
  --scrollbar-width: 7px !important;
  --search-clear-button-color: rgb(39, 46, 75) !important;
  --search-icon-color: rgb(39, 46, 75) !important;
  --search-result-background: rgb(213, 214, 219) !important;
  --secondary: rgb(90, 74, 120) !important;
  --setting-group-heading-color: rgb(52, 59, 88) !important;
  --setting-items-background: rgb(213, 214, 219) !important;
  --setting-items-border-color: rgb(220, 222, 226) !important;
  --slider-thumb-border-color: rgb(220, 222, 226) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: rgb(220, 222, 226) !important;
  --status-bar-background: rgb(203, 204, 209) !important;
  --status-bar-border-color: rgb(220, 222, 226) !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-text-color: rgb(39, 46, 75) !important;
  --suggestion-background: rgb(213, 214, 219) !important;
  --sync-avatar-color-1: rgb(140, 67, 81) !important;
  --sync-avatar-color-2: rgb(150, 80, 39) !important;
  --sync-avatar-color-3: rgb(143, 94, 21) !important;
  --sync-avatar-color-4: rgb(51, 99, 92) !important;
  --sync-avatar-color-5: rgb(15, 75, 110) !important;
  --sync-avatar-color-6: rgb(52, 84, 138) !important;
  --sync-avatar-color-7: rgb(90, 74, 120) !important;
  --sync-avatar-color-8: rgb(90, 74, 120) !important;
  --tab-background-active: rgb(213, 214, 219) !important;
  --tab-container-background: rgb(203, 204, 209) !important;
  --tab-divider-color: rgb(220, 222, 226) !important;
  --tab-outline-color: rgb(220, 222, 226) !important;
  --tab-switcher-background: rgb(203, 204, 209) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(203, 204, 209), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(15, 135, 204) !important;
  --tab-text-color: rgb(150, 153, 163) !important;
  --tab-text-color-active: rgb(39, 46, 75) !important;
  --tab-text-color-focused: rgb(39, 46, 75) !important;
  --tab-text-color-focused-active: rgba(140, 67, 81, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(140, 67, 81) !important;
  --tab-text-color-focused-highlighted: rgb(90, 74, 120) !important;
  --table-add-button-border-color: rgb(220, 222, 226) !important;
  --table-border-color: rgb(220, 222, 226) !important;
  --table-drag-handle-background-active: rgb(15, 135, 204) !important;
  --table-drag-handle-color: rgb(150, 153, 163) !important;
  --table-drag-handle-color-active: rgb(213, 214, 219) !important;
  --table-header-background: rgb(188, 189, 194) !important;
  --table-header-background-hover: rgb(188, 189, 194) !important;
  --table-header-border-color: rgb(220, 222, 226) !important;
  --table-header-color: rgb(52, 59, 88) !important;
  --table-selection: rgba(15, 135, 204, 0.1) !important;
  --table-selection-border-color: rgb(15, 135, 204) !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(90, 74, 120, 0.15) !important;
  --tag-background-hover: rgba(15, 75, 110, 0.15) !important;
  --tag-border-color: rgba(15, 135, 204, 0.15) !important;
  --tag-border-color-hover: rgba(15, 135, 204, 0.15) !important;
  --tag-color: rgb(90, 74, 120) !important;
  --tag-color-hover: rgb(15, 75, 110) !important;
  --teal: rgb(22, 103, 117) !important;
  --teal_x: 22, 103, 117 !important;
  --terminal_black: rgb(15, 15, 20) !important;
  --terminal_black_x: 15, 15, 20 !important;
  --tertiary: rgb(15, 75, 110) !important;
  --text-accent: rgb(90, 74, 120) !important;
  --text-accent-hover: rgb(15, 75, 110) !important;
  --text-error: rgb(115, 42, 56) !important;
  --text-error-hover: rgb(140, 67, 81) !important;
  --text-faint: rgb(150, 153, 163) !important;
  --text-highlight-bg: rgba(150, 80, 39, 0.25) !important;
  --text-muted: rgb(39, 46, 75) !important;
  --text-normal: rgb(52, 59, 88) !important;
  --text-on-accent: rgb(213, 214, 219) !important;
  --text-selection: rgba(39, 71, 125, 0.6) !important;
  --text-success: rgb(51, 99, 92) !important;
  --text-warning: rgb(150, 80, 39) !important;
  --textHighlight: rgba(150, 80, 39, 0.25) !important;
  --titleFont: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(203, 204, 209) !important;
  --titlebar-background-focused: rgb(203, 204, 209) !important;
  --titlebar-border-color: rgb(220, 222, 226) !important;
  --titlebar-text-color: rgb(39, 46, 75) !important;
  --titlebar-text-color-focused: rgb(52, 59, 88) !important;
  --toggle-thumb-color: rgb(213, 214, 219) !important;
  --unknown: #000000 !important;
  --vault-profile-color: rgb(52, 59, 88) !important;
  --vault-profile-color-hover: rgb(52, 59, 88) !important;
  --yellow: rgb(143, 94, 21) !important;
  --yellow_x: 143, 94, 21 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(203, 204, 209);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(213, 214, 219);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(203, 204, 209);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(220, 222, 226);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(203, 204, 209);
  border-left-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(213, 214, 219);
  color: rgb(52, 59, 88);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration: rgb(15, 75, 110);
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration: rgb(15, 75, 110);
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration: rgb(15, 75, 110);
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration: rgb(15, 75, 110);
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(150, 80, 39, 0.25);
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body del {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration: line-through rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body p {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 46, 75) none 0px;
  text-decoration: rgb(39, 46, 75);
  text-decoration-color: rgb(39, 46, 75);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(90, 74, 120);
  outline: rgb(90, 74, 120) none 0px;
  text-decoration: underline rgb(90, 74, 120);
  text-decoration-color: rgb(90, 74, 120);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 74, 120);
  outline: rgb(90, 74, 120) none 0px;
  text-decoration: underline rgb(90, 74, 120);
  text-decoration-color: rgb(90, 74, 120);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(90, 74, 120);
  outline: rgb(90, 74, 120) none 0px;
  text-decoration: underline rgba(15, 135, 204, 0.3);
  text-decoration-color: rgba(15, 135, 204, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body dt {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ol > li {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ul > li {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(150, 153, 163);
  text-decoration: rgb(150, 153, 163);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(203, 204, 209);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body table {
  color: rgb(52, 59, 88);
  width: 643px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body tr {
  background-color: rgb(188, 189, 194);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(143, 94, 21);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(143, 94, 21);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(143, 94, 21);
  border-left-color: rgb(143, 94, 21);
  border-right-color: rgb(143, 94, 21);
  border-top-color: rgb(143, 94, 21);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body figcaption {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(15, 135, 204);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(15, 135, 204);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(39, 46, 75);
  text-decoration: line-through rgb(39, 46, 75);
  text-decoration-color: rgb(39, 46, 75);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(150, 153, 163);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(150, 153, 163);
  border-right-color: rgb(150, 153, 163);
  border-top-color: rgb(150, 153, 163);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 15, 75, 110;
  background-color: rgba(15, 75, 110, 0.1);
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 140, 67, 81;
  background-color: rgba(140, 67, 81, 0.1);
  border-bottom-color: rgba(140, 67, 81, 0.25);
  border-left-color: rgba(140, 67, 81, 0.25);
  border-right-color: rgba(140, 67, 81, 0.25);
  border-top-color: rgba(140, 67, 81, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 115, 42, 56;
  background-color: rgba(115, 42, 56, 0.1);
  border-bottom-color: rgba(115, 42, 56, 0.25);
  border-left-color: rgba(115, 42, 56, 0.25);
  border-right-color: rgba(115, 42, 56, 0.25);
  border-top-color: rgba(115, 42, 56, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 90, 74, 120;
  background-color: rgba(90, 74, 120, 0.1);
  border-bottom-color: rgba(90, 74, 120, 0.25);
  border-left-color: rgba(90, 74, 120, 0.25);
  border-right-color: rgba(90, 74, 120, 0.25);
  border-top-color: rgba(90, 74, 120, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 115, 42, 56;
  background-color: rgba(115, 42, 56, 0.1);
  border-bottom-color: rgba(115, 42, 56, 0.25);
  border-left-color: rgba(115, 42, 56, 0.25);
  border-right-color: rgba(115, 42, 56, 0.25);
  border-top-color: rgba(115, 42, 56, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 52, 84, 138;
  background-color: rgba(52, 84, 138, 0.1);
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 52, 84, 138;
  background-color: rgba(52, 84, 138, 0.1);
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 143, 94, 21;
  background-color: rgba(143, 94, 21, 0.1);
  border-bottom-color: rgba(143, 94, 21, 0.25);
  border-left-color: rgba(143, 94, 21, 0.25);
  border-right-color: rgba(143, 94, 21, 0.25);
  border-top-color: rgba(143, 94, 21, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 39, 46, 75;
  background-color: rgba(195, 197, 201, 0.5);
  border-bottom-color: rgba(39, 46, 75, 0.25);
  border-left-color: rgba(39, 46, 75, 0.25);
  border-right-color: rgba(39, 46, 75, 0.25);
  border-top-color: rgba(39, 46, 75, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 22, 103, 117;
  background-color: rgba(22, 103, 117, 0.1);
  border-bottom-color: rgba(22, 103, 117, 0.25);
  border-left-color: rgba(22, 103, 117, 0.25);
  border-right-color: rgba(22, 103, 117, 0.25);
  border-top-color: rgba(22, 103, 117, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 15, 75, 110;
  background-color: rgba(15, 75, 110, 0.1);
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 15, 75, 110;
  background-color: rgba(15, 75, 110, 0.1);
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 150, 80, 39;
  background-color: rgba(150, 80, 39, 0.1);
  border-bottom-color: rgba(150, 80, 39, 0.25);
  border-left-color: rgba(150, 80, 39, 0.25);
  border-right-color: rgba(150, 80, 39, 0.25);
  border-top-color: rgba(150, 80, 39, 0.25);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
  color: rgb(52, 59, 88);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(203, 204, 209);
  border-bottom-width: 2px;
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(220, 222, 226);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(90, 74, 120, 0.15);
  border-bottom-color: rgba(15, 135, 204, 0.15);
  border-left-color: rgba(15, 135, 204, 0.15);
  border-right-color: rgba(15, 135, 204, 0.15);
  border-top-color: rgba(15, 135, 204, 0.15);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body h1 {
  color: rgb(140, 67, 81);
}

html[saved-theme="light"] body h2 {
  color: rgb(143, 94, 21);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(140, 67, 81);
}

html[saved-theme="light"] body h3 {
  color: rgb(51, 99, 92);
}

html[saved-theme="light"] body h4 {
  color: rgb(15, 75, 110);
}

html[saved-theme="light"] body h5 {
  color: rgb(52, 84, 138);
}

html[saved-theme="light"] body h6 {
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(39, 46, 75);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(39, 46, 75);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(39, 46, 75);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(220, 222, 226);
  border-bottom-color: rgb(140, 67, 81);
  border-left-color: rgb(140, 67, 81);
  border-right-color: rgb(140, 67, 81);
  border-top-color: rgb(140, 67, 81);
  color: rgb(140, 67, 81);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(39, 46, 75);
  text-decoration: rgb(39, 46, 75);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(52, 59, 88);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(39, 46, 75);
  text-decoration: rgb(39, 46, 75);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(39, 46, 75);
  text-decoration: rgb(39, 46, 75);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(39, 46, 75);
  stroke: rgb(39, 46, 75);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(150, 153, 163);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(203, 204, 209);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(52, 59, 88);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(52, 59, 88);
  text-decoration: underline dotted rgb(52, 59, 88);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body sub {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body summary {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body sup {
  color: rgb(52, 59, 88);
}`,
  },
};
