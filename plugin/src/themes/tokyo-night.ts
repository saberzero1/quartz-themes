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
  --bases-table-cell-background-selected: hsla(202, 100%, 75%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(41, 46, 66) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(202, 100%, 75%) !important;
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
  --blockquote-border-color: hsl(202, 100%, 75%) !important;
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
  --color-accent: hsl(202, 100%, 75%) !important;
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
  --divider-color-hover: hsl(202, 100%, 75%) !important;
  --dropdown-background: rgb(22, 22, 30) !important;
  --dropdown-background-hover: rgb(26, 27, 38) !important;
  --embed-background: rgb(22, 22, 30) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(41, 46, 66), inset 0 0 0 1px rgb(41, 46, 66) !important;
  --embed-border-start: 2px solid hsl(202, 100%, 75%) !important;
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
  --interactive-accent: hsl(202, 100%, 75%) !important;
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
  --link-unresolved-decoration-color: hsla(202, 100%, 75%, 0.3) !important;
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
  --nav-item-background-selected: hsla(202, 100%, 75%, 0.15) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(202, 100%, 75%) !important;
  --tab-text-color: rgb(86, 95, 137) !important;
  --tab-text-color-active: rgb(169, 177, 214) !important;
  --tab-text-color-focused: rgb(169, 177, 214) !important;
  --tab-text-color-focused-active: rgba(255, 117, 127, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(255, 117, 127) !important;
  --tab-text-color-focused-highlighted: rgb(187, 154, 247) !important;
  --table-add-button-border-color: rgb(41, 46, 66) !important;
  --table-border-color: rgb(41, 46, 66) !important;
  --table-drag-handle-background-active: hsl(202, 100%, 75%) !important;
  --table-drag-handle-color: rgb(86, 95, 137) !important;
  --table-drag-handle-color-active: rgb(26, 27, 38) !important;
  --table-header-background: rgb(18, 18, 24) !important;
  --table-header-background-hover: rgb(18, 18, 24) !important;
  --table-header-border-color: rgb(41, 46, 66) !important;
  --table-header-color: rgb(192, 202, 245) !important;
  --table-selection: hsla(202, 100%, 75%, 0.1) !important;
  --table-selection-border-color: hsl(202, 100%, 75%) !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(187, 154, 247, 0.15) !important;
  --tag-background-hover: rgba(125, 207, 255, 0.15) !important;
  --tag-border-color: hsla(202, 100%, 75%, 0.15) !important;
  --tag-border-color-hover: hsla(202, 100%, 75%, 0.15) !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 22, 30);
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(41, 46, 66);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(187, 154, 247, 0.15);
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(169, 177, 214);
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
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 158, 100, 0.25);
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(86, 95, 137);
  border-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(158, 206, 106);
  border-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body p {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(169, 177, 214) none 0px;
  text-decoration-color: rgb(169, 177, 214);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration-color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
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
  border-bottom-color: rgb(255, 117, 127);
  border-left-color: rgb(255, 117, 127);
  border-right-color: rgb(255, 117, 127);
  border-top-color: rgb(255, 117, 127);
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
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(86, 95, 137);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(255, 158, 100);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(255, 158, 100);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(158, 206, 106);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(122, 162, 247);
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(192, 202, 245);
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  color: rgb(187, 154, 247);
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
  --bases-table-cell-background-selected: hsla(202, 86%, 43%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(220, 222, 226) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(202, 86%, 43%) !important;
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
  --blockquote-border-color: hsl(202, 86%, 43%) !important;
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
  --color-accent: hsl(202, 86%, 43%) !important;
  --color-accent-1: hsl(201, 86.86%, 46.225%) !important;
  --color-accent-2: hsl(199, 87.72%, 49.45%) !important;
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
  --divider-color-hover: hsl(202, 86%, 43%) !important;
  --dropdown-background: rgb(203, 204, 209) !important;
  --dropdown-background-hover: rgb(213, 214, 219) !important;
  --embed-background: rgb(203, 204, 209) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(220, 222, 226), inset 0 0 0 1px rgb(220, 222, 226) !important;
  --embed-border-start: 2px solid hsl(202, 86%, 43%) !important;
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
  --interactive-accent: hsl(202, 86%, 43%) !important;
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
  --link-unresolved-decoration-color: hsla(202, 86%, 43%, 0.3) !important;
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
  --nav-item-background-selected: hsla(202, 86%, 43%, 0.15) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(202, 86%, 43%) !important;
  --tab-text-color: rgb(150, 153, 163) !important;
  --tab-text-color-active: rgb(39, 46, 75) !important;
  --tab-text-color-focused: rgb(39, 46, 75) !important;
  --tab-text-color-focused-active: rgba(140, 67, 81, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(140, 67, 81) !important;
  --tab-text-color-focused-highlighted: rgb(90, 74, 120) !important;
  --table-add-button-border-color: rgb(220, 222, 226) !important;
  --table-border-color: rgb(220, 222, 226) !important;
  --table-drag-handle-background-active: hsl(202, 86%, 43%) !important;
  --table-drag-handle-color: rgb(150, 153, 163) !important;
  --table-drag-handle-color-active: rgb(213, 214, 219) !important;
  --table-header-background: rgb(188, 189, 194) !important;
  --table-header-background-hover: rgb(188, 189, 194) !important;
  --table-header-border-color: rgb(220, 222, 226) !important;
  --table-header-color: rgb(52, 59, 88) !important;
  --table-selection: hsla(202, 86%, 43%, 0.1) !important;
  --table-selection-border-color: hsl(202, 86%, 43%) !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(90, 74, 120, 0.15) !important;
  --tag-background-hover: rgba(15, 75, 110, 0.15) !important;
  --tag-border-color: hsla(202, 86%, 43%, 0.15) !important;
  --tag-border-color-hover: hsla(202, 86%, 43%, 0.15) !important;
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

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(213, 214, 219);
  border-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(220, 222, 226);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(90, 74, 120, 0.15);
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(39, 46, 75);
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
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(150, 80, 39, 0.25);
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body del {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(150, 153, 163);
  border-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(51, 99, 92);
  border-color: rgb(51, 99, 92);
}

html[saved-theme="light"] body p {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 46, 75) none 0px;
  text-decoration-color: rgb(39, 46, 75);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(90, 74, 120);
  outline: rgb(90, 74, 120) none 0px;
  text-decoration-color: rgb(90, 74, 120);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 74, 120);
  outline: rgb(90, 74, 120) none 0px;
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
  border-bottom-color: rgb(140, 67, 81);
  border-left-color: rgb(140, 67, 81);
  border-right-color: rgb(140, 67, 81);
  border-top-color: rgb(140, 67, 81);
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
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(150, 153, 163);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(150, 80, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(143, 94, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(143, 94, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(52, 84, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(52, 84, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(140, 67, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(140, 67, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(15, 75, 110);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(150, 80, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(140, 67, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  color: rgb(15, 75, 110);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(51, 99, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  color: rgb(51, 99, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(51, 99, 92);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(52, 84, 138);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(52, 84, 138);
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(52, 59, 88);
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(90, 74, 120, 0.15);
  border-bottom-color: rgba(15, 135, 204, 0.15);
  border-left-color: rgba(15, 135, 204, 0.15);
  border-right-color: rgba(15, 135, 204, 0.15);
  border-top-color: rgba(15, 135, 204, 0.15);
  color: rgb(90, 74, 120);
}`,
  },
};
