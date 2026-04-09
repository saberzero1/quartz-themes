import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tokyo-night-storm",
    modes: ["dark"],
    variations: [],
    fonts: ["anonymous-pro", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 202 !important;
  --accent-l: 75% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(202, 100%, 75%, 0.1) !important;
  --background-modifier-border: rgb(65, 72, 104) !important;
  --background-modifier-border-focus: rgb(65, 72, 104) !important;
  --background-modifier-border-hover: rgb(65, 72, 104) !important;
  --background-modifier-cover: rgba(36, 40, 59, 0.8) !important;
  --background-modifier-error: rgba(255, 117, 127, 0.8) !important;
  --background-modifier-error-hover: rgb(255, 117, 127) !important;
  --background-modifier-form-field: rgb(36, 40, 59) !important;
  --background-modifier-form-field-highlighted: rgb(36, 40, 59) !important;
  --background-modifier-form-field-hover: rgb(36, 40, 59) !important;
  --background-modifier-hover: rgb(65, 72, 104) !important;
  --background-modifier-message: rgba(65, 72, 104, 0.9) !important;
  --background-modifier-success: rgb(158, 206, 106) !important;
  --background-primary: rgb(36, 40, 59) !important;
  --background-primary-alt: rgb(36, 40, 59) !important;
  --background-secondary: rgb(36, 40, 59) !important;
  --background-secondary-alt: rgb(36, 40, 59) !important;
  --bases-cards-background: rgb(36, 40, 59) !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: rgb(36, 40, 59) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(65, 72, 104) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(65, 72, 104) !important;
  --bases-embed-border-color: rgb(65, 72, 104) !important;
  --bases-group-heading-property-color: rgb(169, 177, 214) !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: rgb(65, 72, 104) !important;
  --bases-table-cell-background-active: rgb(36, 40, 59) !important;
  --bases-table-cell-background-disabled: rgb(36, 40, 59) !important;
  --bases-table-cell-background-selected: hsla(202, 100%, 75%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(65, 72, 104) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(202, 100%, 75%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: rgb(36, 40, 59) !important;
  --bases-table-header-background: rgb(36, 40, 59) !important;
  --bases-table-header-background-hover: rgb(65, 72, 104) !important;
  --bases-table-header-color: rgb(169, 177, 214) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: rgb(36, 40, 59) !important;
  --bases-table-summary-background-hover: rgb(65, 72, 104) !important;
  --bg: rgb(36, 40, 59) !important;
  --bg_dark: rgb(36, 40, 59) !important;
  --bg_dark2: rgb(18, 18, 24) !important;
  --bg_dark2_x: 18, 18, 24 !important;
  --bg_dark_x: 36, 40, 59 !important;
  --bg_highlight: rgb(65, 72, 104) !important;
  --bg_highlight_dark: rgb(35, 35, 55) !important;
  --bg_highlight_dark_x: 35, 35, 55 !important;
  --bg_highlight_x: 65, 72, 104 !important;
  --bg_x: 36, 40, 59 !important;
  --blockquote-background-color: rgb(36, 40, 59) !important;
  --blockquote-border-color: hsl(202, 100%, 75%) !important;
  --blue: rgb(122, 162, 247) !important;
  --blue0: rgb(61, 89, 161) !important;
  --blue0_x: 61, 89, 161 !important;
  --blue_x: 122, 162, 247 !important;
  --blur-background: color-mix(in srgb, rgb(36, 40, 59) 65%, transparent) linear-gradient(rgb(36, 40, 59), color-mix(in srgb, rgb(36, 40, 59) 65%, transparent)) !important;
  --bodyFont: "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(202, 100%, 75%) !important;
  --border-width: 2px !important;
  --callout-quote: rgb(169, 177, 214);
  --canvas-background: rgb(36, 40, 59) !important;
  --canvas-card-label-color: rgb(86, 95, 137) !important;
  --caret-color: rgb(192, 202, 245) !important;
  --checkbox-border-color: rgb(86, 95, 137) !important;
  --checkbox-border-color-hover: rgb(86, 95, 137) !important;
  --checkbox-color: rgb(86, 95, 137) !important;
  --checkbox-color-hover: rgb(86, 95, 137) !important;
  --checkbox-marker-color: rgb(36, 40, 59) !important;
  --checklist-done-color: rgba(rgb(158, 206, 106), 0.5) !important;
  --code-background: rgb(35, 35, 55) !important;
  --code-border-color: rgb(65, 72, 104) !important;
  --code-bracket-background: rgb(65, 72, 104) !important;
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
  --code-value: rgb(157, 124, 21) !important;
  --codeFont: "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(86, 95, 137) !important;
  --collapse-icon-color-collapsed: hsl(199, 102%, 86.25%) !important;
  --color-accent: hsl(202, 100%, 75%) !important;
  --color-accent-1: hsl(199, 102%, 86.25%) !important;
  --color-accent-2: hsl(197, 105%, 96.75%) !important;
  --color-accent-hsl: 202, 100%, 75% !important;
  --color-blue: rgb(122, 162, 247) !important;
  --color-cyan: rgb(125, 207, 255) !important;
  --color-green: rgb(158, 206, 106) !important;
  --color-orange: rgb(255, 158, 100) !important;
  --color-pink: rgb(187, 154, 247) !important;
  --color-purple: rgb(157, 124, 21) !important;
  --color-red: rgb(255, 117, 127) !important;
  --color-yellow: rgb(224, 175, 104) !important;
  --color_blue_rgb: 122, 162, 247 !important;
  --color_cyan_rgb: 125, 207, 255 !important;
  --color_green_rgb: 158, 206, 106 !important;
  --color_orange_rgb: 255, 158, 100 !important;
  --color_pink_rgb: 187, 154, 247 !important;
  --color_purple_rgb: 157, 124, 21 !important;
  --color_red_rgb: 255, 117, 127 !important;
  --color_yellow_rgb: 224, 175, 104 !important;
  --comment: rgb(86, 95, 137) !important;
  --comment_x: 86, 95, 137 !important;
  --cyan: rgb(125, 207, 255) !important;
  --cyan_hsl: 202 100% 75% !important;
  --cyan_x: 125, 207, 255 !important;
  --dark: rgb(192, 202, 245) !important;
  --darkgray: rgb(192, 202, 245) !important;
  --default-font: "JetBrains Mono Nerd Font", monospace !important;
  --divider-color: rgb(65, 72, 104) !important;
  --divider-color-hover: hsl(202, 100%, 75%) !important;
  --dropdown-background: rgb(36, 40, 59) !important;
  --dropdown-background-hover: rgb(36, 40, 59) !important;
  --embed-background: rgb(36, 40, 59) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(65, 72, 104), inset 0 0 0 1px rgb(65, 72, 104) !important;
  --embed-border-start: 2px solid hsl(202, 100%, 75%) !important;
  --embed-padding: 1.5rem 1.5rem 0.5rem !important;
  --external-link-filter: invert(35%) sepia(28%) saturate(681%)
    hue-rotate(192deg) brightness(94%) contrast(85%) !important;
  --fg: rgb(192, 202, 245) !important;
  --fg_dark: rgb(169, 177, 214) !important;
  --fg_dark_x: 169, 177, 214 !important;
  --fg_x: 192, 202, 245 !important;
  --file-header-background: rgb(36, 40, 59) !important;
  --file-header-background-focused: rgb(36, 40, 59) !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font: "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(36, 40, 59) !important;
  --flair-color: rgb(192, 202, 245) !important;
  --flashing-background: rgba(61, 89, 161, 0.3) !important;
  --font-interface: "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: rgb(65, 72, 104) !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgb(169, 177, 214) !important;
  --footnote-id-color-no-occurrences: rgb(86, 95, 137) !important;
  --footnote-input-background-active: rgb(65, 72, 104) !important;
  --graph-line: rgb(86, 95, 137) !important;
  --graph-node: rgb(192, 202, 245) !important;
  --graph-node-attachment: rgb(122, 162, 247) !important;
  --graph-node-focused: hsl(199, 102%, 86.25%) !important;
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
  --headerFont: "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(86, 95, 137) !important;
  --highlight: rgba(255, 158, 100, 0.4) !important;
  --hr-color: rgb(65, 72, 104) !important;
  --icon-color: rgb(169, 177, 214) !important;
  --icon-color-active: hsl(199, 102%, 86.25%) !important;
  --icon-color-focused: rgb(122, 162, 247) !important;
  --icon-color-hover: rgb(224, 175, 104) !important;
  --indentation-guide-color: rgb(86, 95, 137) !important;
  --indentation-guide-color-active: rgb(86, 95, 137) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: rgb(187, 154, 247) !important;
  --input-border-width: 2px !important;
  --input-date-separator: rgb(86, 95, 137) !important;
  --input-placeholder-color: rgb(86, 95, 137) !important;
  --interactive-accent: hsl(202, 100%, 75%) !important;
  --interactive-accent-hover: hsl(199, 102%, 86.25%) !important;
  --interactive-accent-hsl: 202, 100%, 75% !important;
  --interactive-hover: rgb(36, 40, 59) !important;
  --interactive-normal: rgb(36, 40, 59) !important;
  --interactive-success: rgb(158, 206, 106) !important;
  --italic-color: hsl(202, 100%, 75%) !important;
  --light: rgb(36, 40, 59) !important;
  --lightgray: rgb(36, 40, 59) !important;
  --link-color: hsl(199, 102%, 86.25%) !important;
  --link-color-hover: hsl(197, 105%, 96.75%) !important;
  --link-external-color: hsl(199, 102%, 86.25%) !important;
  --link-external-color-hover: hsl(197, 105%, 96.75%) !important;
  --link-unresolved-color: hsl(199, 102%, 86.25%) !important;
  --link-unresolved-decoration-color: hsla(202, 100%, 75%, 0.3) !important;
  --list-marker-color: rgb(86, 95, 137) !important;
  --list-marker-color-collapsed: hsl(199, 102%, 86.25%) !important;
  --list-marker-color-hover: rgb(169, 177, 214) !important;
  --magent_hsl: 261 85% 79% !important;
  --magenta: rgb(187, 154, 247) !important;
  --magenta_x: 187, 154, 247 !important;
  --menu-background: rgb(36, 40, 59) !important;
  --menu-border-color: rgb(65, 72, 104) !important;
  --menu-border-width: 2px !important;
  --mermaid-actor: rgb(169, 177, 214) !important;
  --mermaid-loopline: rgb(122, 162, 247) !important;
  --mermaid-note: rgb(61, 89, 161) !important;
  --metadata-border-color: rgb(65, 72, 104) !important;
  --metadata-divider-color: rgb(65, 72, 104) !important;
  --metadata-input-background-active: rgb(65, 72, 104) !important;
  --metadata-input-font: "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(192, 202, 245) !important;
  --metadata-label-background-active: rgb(65, 72, 104) !important;
  --metadata-label-font: "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(169, 177, 214) !important;
  --metadata-label-text-color-hover: rgb(169, 177, 214) !important;
  --metadata-property-background-active: rgb(65, 72, 104) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(65, 72, 104) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(65, 72, 104) !important;
  --modal-background: rgb(36, 40, 59) !important;
  --modal-border-color: rgb(65, 72, 104) !important;
  --modal-border-width: 2px !important;
  --nav-collapse-icon-color: rgb(86, 95, 137) !important;
  --nav-collapse-icon-color-collapsed: rgb(86, 95, 137) !important;
  --nav-file-tag: rgba(224, 175, 104, 0.9) !important;
  --nav-heading-color: rgb(192, 202, 245) !important;
  --nav-heading-color-collapsed: rgb(86, 95, 137) !important;
  --nav-heading-color-collapsed-hover: rgb(169, 177, 214) !important;
  --nav-heading-color-hover: rgb(192, 202, 245) !important;
  --nav-indentation-guide-color: rgb(65, 72, 104) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgb(65, 72, 104) !important;
  --nav-item-background-hover: rgb(65, 72, 104) !important;
  --nav-item-background-selected: hsla(202, 100%, 75%, 0.15) !important;
  --nav-item-color: rgb(169, 177, 214) !important;
  --nav-item-color-active: rgb(255, 117, 127) !important;
  --nav-item-color-highlighted: hsl(199, 102%, 86.25%) !important;
  --nav-item-color-hover: rgb(192, 202, 245) !important;
  --nav-item-color-selected: rgb(192, 202, 245) !important;
  --nav-tag-color: rgb(86, 95, 137) !important;
  --nav-tag-color-active: rgb(169, 177, 214) !important;
  --nav-tag-color-hover: rgb(169, 177, 214) !important;
  --orange: rgb(255, 158, 100) !important;
  --orange_x: 255, 158, 100 !important;
  --pdf-background: rgb(36, 40, 59) !important;
  --pdf-page-background: rgb(36, 40, 59) !important;
  --pdf-shadow: 0 0 0 1px rgb(65, 72, 104) !important;
  --pdf-sidebar-background: rgb(36, 40, 59) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 72, 104) !important;
  --pill-border-color: rgb(65, 72, 104) !important;
  --pill-border-color-hover: rgb(65, 72, 104) !important;
  --pill-border-width: 2px !important;
  --pill-color: rgb(169, 177, 214) !important;
  --pill-color-hover: rgb(192, 202, 245) !important;
  --pill-color-remove: rgb(86, 95, 137) !important;
  --pill-color-remove-hover: hsl(199, 102%, 86.25%) !important;
  --prompt-background: rgb(36, 40, 59) !important;
  --prompt-border-color: rgb(65, 72, 104) !important;
  --prompt-border-width: 2px !important;
  --purple: rgb(157, 124, 21) !important;
  --purple_x: 157, 124, 21 !important;
  --raised-background: color-mix(in srgb, rgb(36, 40, 59) 65%, transparent) linear-gradient(rgb(36, 40, 59), color-mix(in srgb, rgb(36, 40, 59) 65%, transparent)) !important;
  --red: rgb(255, 117, 127) !important;
  --red1: rgb(219, 75, 75) !important;
  --red1_x: 219, 75, 75 !important;
  --red_x: 255, 117, 127 !important;
  --ribbon-background: rgb(36, 40, 59) !important;
  --ribbon-background-collapsed: rgb(36, 40, 59) !important;
  --search-clear-button-color: rgb(169, 177, 214) !important;
  --search-icon-color: rgb(169, 177, 214) !important;
  --search-result-background: rgb(36, 40, 59) !important;
  --secondary: hsl(199, 102%, 86.25%) !important;
  --setting-group-heading-color: rgb(192, 202, 245) !important;
  --setting-items-background: rgb(36, 40, 59) !important;
  --setting-items-border-color: rgb(65, 72, 104) !important;
  --slider-thumb-border-color: rgb(65, 72, 104) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: rgb(65, 72, 104) !important;
  --status-bar-background: rgb(36, 40, 59) !important;
  --status-bar-border-color: rgb(65, 72, 104) !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-text-color: rgb(169, 177, 214) !important;
  --suggestion-background: rgb(36, 40, 59) !important;
  --sync-avatar-color-1: rgb(255, 117, 127) !important;
  --sync-avatar-color-2: rgb(255, 158, 100) !important;
  --sync-avatar-color-3: rgb(224, 175, 104) !important;
  --sync-avatar-color-4: rgb(158, 206, 106) !important;
  --sync-avatar-color-5: rgb(125, 207, 255) !important;
  --sync-avatar-color-6: rgb(122, 162, 247) !important;
  --sync-avatar-color-7: rgb(157, 124, 21) !important;
  --sync-avatar-color-8: rgb(187, 154, 247) !important;
  --tab-background-active: rgb(36, 40, 59) !important;
  --tab-container-background: rgb(36, 40, 59) !important;
  --tab-divider-color: rgb(65, 72, 104) !important;
  --tab-outline-color: rgb(65, 72, 104) !important;
  --tab-switcher-background: rgb(36, 40, 59) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(36, 40, 59), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(202, 100%, 75%) !important;
  --tab-text-color: rgb(86, 95, 137) !important;
  --tab-text-color-active: rgb(169, 177, 214) !important;
  --tab-text-color-focused: rgb(169, 177, 214) !important;
  --tab-text-color-focused-active: rgba(255, 117, 127, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(255, 117, 127) !important;
  --tab-text-color-focused-highlighted: hsl(199, 102%, 86.25%) !important;
  --table-add-button-border-color: rgb(65, 72, 104) !important;
  --table-border-color: rgb(65, 72, 104) !important;
  --table-drag-handle-background-active: hsl(202, 100%, 75%) !important;
  --table-drag-handle-color: rgb(86, 95, 137) !important;
  --table-drag-handle-color-active: rgb(36, 40, 59) !important;
  --table-header-background: rgb(36, 40, 59) !important;
  --table-header-background-hover: rgb(18, 18, 24) !important;
  --table-header-border-color: rgb(65, 72, 104) !important;
  --table-header-color: rgb(192, 202, 245) !important;
  --table-row-alt-background: rgb(36, 40, 59) !important;
  --table-selection: hsla(202, 100%, 75%, 0.1) !important;
  --table-selection-border-color: hsl(202, 100%, 75%) !important;
  --tag-background: rgba(187, 154, 247, 0.15) !important;
  --tag-background-hover: hsla(202, 100%, 75%, 0.2) !important;
  --tag-border-color: hsla(202, 100%, 75%, 0.15) !important;
  --tag-border-color-hover: hsla(202, 100%, 75%, 0.15) !important;
  --tag-color: rgb(187, 154, 247) !important;
  --tag-color-hover: hsl(199, 102%, 86.25%) !important;
  --teal: rgb(26, 188, 156) !important;
  --teal_x: 26, 188, 156 !important;
  --terminal_black: rgb(65, 72, 104) !important;
  --terminal_black_x: 65, 72, 104 !important;
  --tertiary: hsl(197, 105%, 96.75%) !important;
  --text-accent: hsl(199, 102%, 86.25%) !important;
  --text-accent-hover: hsl(197, 105%, 96.75%) !important;
  --text-error: rgb(219, 75, 75) !important;
  --text-error-hover: rgb(255, 117, 127) !important;
  --text-faint: rgb(86, 95, 137) !important;
  --text-highlight-bg: rgba(255, 158, 100, 0.4) !important;
  --text-highlight-fg: rgb(36, 40, 59) !important;
  --text-muted: rgb(169, 177, 214) !important;
  --text-normal: rgb(192, 202, 245) !important;
  --text-on-accent: rgb(36, 40, 59) !important;
  --text-selection: rgba(61, 89, 161, 0.6) !important;
  --text-success: rgb(158, 206, 106) !important;
  --text-warning: rgb(255, 158, 100) !important;
  --textHighlight: rgba(255, 158, 100, 0.4) !important;
  --titleFont: "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(36, 40, 59) !important;
  --titlebar-background-focused: rgb(36, 40, 59) !important;
  --titlebar-border-color: rgb(65, 72, 104) !important;
  --titlebar-text-color: rgb(169, 177, 214) !important;
  --titlebar-text-color-focused: rgb(187, 154, 247) !important;
  --unknown: #ffffff !important;
  --vault-profile-color: rgb(192, 202, 245) !important;
  --vault-profile-color-hover: rgb(192, 202, 245) !important;
  --yellow: rgb(224, 175, 104) !important;
  --yellow_x: 224, 175, 104 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 40, 59);
  color: rgb(192, 202, 245);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(36, 40, 59);
  color: rgb(192, 202, 245);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(36, 40, 59);
}

html body .bases-table thead th {
  border-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

html body .canvas-node {
  border-color: rgb(192, 202, 245);
}

html body .canvas-node-content {
  color: rgb(192, 202, 245);
}

html body .canvas-node-file {
  color: rgb(192, 202, 245);
}

html body .canvas-node-group {
  border-color: rgb(192, 202, 245);
}

html body .canvas-sidebar {
  background-color: rgb(36, 40, 59);
  border-color: rgb(192, 202, 245);
}

html body .note-properties {
  border-color: rgb(65, 72, 104);
}

html body .note-properties-key {
  color: rgb(169, 177, 214);
}

html body .note-properties-row {
  border-color: rgb(169, 177, 214);
}

html body .note-properties-tags {
  background-color: rgba(187, 154, 247, 0.15);
  color: rgb(187, 154, 247);
}

html body .note-properties-value {
  color: rgb(169, 177, 214);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 40, 59);
  color: rgb(192, 202, 245);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 72, 104);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 40, 59);
  border-left-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

html body div#quartz-root {
  background-color: rgb(36, 40, 59);
  color: rgb(192, 202, 245);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(128, 208, 255);
  outline: rgb(128, 208, 255) none 0px;
  text-decoration-color: rgb(128, 208, 255);
}

html body .page article p > em, html em {
  color: rgb(128, 208, 255);
  outline: rgb(128, 208, 255) none 0px;
  text-decoration-color: rgb(128, 208, 255);
}

html body .page article p > i, html i {
  color: rgb(128, 208, 255);
  outline: rgb(128, 208, 255) none 0px;
  text-decoration-color: rgb(128, 208, 255);
}

html body .page article p > strong, html strong {
  color: rgb(128, 208, 255);
  outline: rgb(128, 208, 255) none 0px;
  text-decoration-color: rgb(128, 208, 255);
}

html body .text-highlight {
  background-color: rgba(255, 158, 100, 0.4);
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body h1.article-title {
  color: rgb(192, 202, 245);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(86, 95, 137);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(86, 95, 137);
  border-color: rgb(86, 95, 137);
}

html body p {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(169, 177, 214) none 0px;
  text-decoration-color: rgb(169, 177, 214);
}`,
    links: `html body a.external, html footer a {
  color: rgb(185, 233, 255);
  outline: rgb(185, 233, 255) none 0px;
  text-decoration-color: rgb(185, 233, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(185, 233, 255);
  outline: rgb(185, 233, 255) none 0px;
  text-decoration-color: rgb(185, 233, 255);
}

html body a.internal.broken {
  color: rgb(185, 233, 255);
  outline: rgb(185, 233, 255) none 0px;
  text-decoration: underline rgba(128, 208, 255, 0.3);
  text-decoration-color: rgba(128, 208, 255, 0.3);
}`,
    lists: `html body dd {
  color: rgb(192, 202, 245);
}

html body dt {
  color: rgb(192, 202, 245);
}

html body ol > li {
  color: rgb(192, 202, 245);
}

html body ol.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body ul > li {
  color: rgb(192, 202, 245);
}

html body ul.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(86, 95, 137);
}

html body blockquote {
  background-color: rgb(36, 40, 59);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body table {
  color: rgb(192, 202, 245);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(36, 40, 59);
}

html body td {
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

html body th {
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

html body tr {
  background-color: rgb(36, 40, 59);
}`,
    code: `html body code {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

html body pre > code > [data-line] {
  border-left-color: rgb(224, 175, 104);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(224, 175, 104);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(224, 175, 104);
  border-left-color: rgb(224, 175, 104);
  border-right-color: rgb(224, 175, 104);
  border-top-color: rgb(224, 175, 104);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
}

html body pre:has(> code) {
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
}`,
    images: `html body audio {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body figcaption {
  color: rgb(192, 202, 245);
}

html body figure {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body img {
  border-bottom-color: rgb(255, 117, 127);
  border-left-color: rgb(255, 117, 127);
  border-right-color: rgb(255, 117, 127);
  border-top-color: rgb(255, 117, 127);
}

html body video {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
}

html body .footnotes {
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body .transclude {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body .transclude-inner {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(86, 95, 137);
  border-left-color: rgb(86, 95, 137);
  border-right-color: rgb(86, 95, 137);
  border-top-color: rgb(86, 95, 137);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: rgb(169, 177, 214);
  background-color: rgba(35, 35, 55, 0.5);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(65, 72, 104);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
  border-right-color: rgb(65, 72, 104);
  border-right-width: 2px;
  border-top-color: rgb(65, 72, 104);
  border-top-width: 2px;
  color: rgb(192, 202, 245);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(65, 72, 104);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
  border-right-color: rgb(65, 72, 104);
  border-right-width: 2px;
  border-top-color: rgb(65, 72, 104);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(65, 72, 104);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
  border-right-color: rgb(65, 72, 104);
  border-right-width: 2px;
  border-top-color: rgb(65, 72, 104);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 40, 59);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(65, 72, 104);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(187, 154, 247);
}

html body h1 {
  color: rgb(255, 117, 127);
}

html body h2 {
  color: rgb(224, 175, 104);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(187, 154, 247);
}

html body h3 {
  color: rgb(158, 206, 106);
}

html body h4 {
  color: rgb(125, 207, 255);
}

html body h5 {
  color: rgb(122, 162, 247);
}

html body h6 {
  color: rgb(187, 154, 247);
}

html body hr {
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}

html body ::-webkit-scrollbar-track {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(192, 202, 245);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}`,
    footer: `html body footer {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
  border-top-width: 2px;
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(169, 177, 214);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body li.section-li > .section .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
}

html body ul.section-ul {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html body .darkmode svg {
  color: rgb(169, 177, 214);
  stroke: rgb(169, 177, 214);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html body .breadcrumb-element p {
  color: rgb(86, 95, 137);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body .metadata {
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
  color: rgb(169, 177, 214);
}

html body .metadata-properties {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html body .navigation-progress {
  background-color: rgb(36, 40, 59);
}

html body .page-header h2.page-title {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(192, 202, 245);
}

html body details {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body input[type=text] {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html body progress {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html body sub {
  color: rgb(192, 202, 245);
}

html body summary {
  color: rgb(192, 202, 245);
}

html body sup {
  color: rgb(192, 202, 245);
}

html body ul.tags > li {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  color: rgb(187, 154, 247);
}`,
  },
  light: {},
};
