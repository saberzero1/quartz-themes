import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "poimandres-extended",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 200 !important;
  --accent-l: 75% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgb(33, 36, 47) !important;
  --background-modifier-border: rgb(33, 36, 47) !important;
  --background-modifier-border-focus: rgb(33, 36, 47) !important;
  --background-modifier-border-hover: rgb(33, 36, 47) !important;
  --background-modifier-cover: rgba(27, 30, 40, 0.8) !important;
  --background-modifier-error: rgb(208, 103, 157) !important;
  --background-modifier-error-hover: rgb(208, 103, 157) !important;
  --background-modifier-form-field: rgb(27, 30, 40) !important;
  --background-modifier-form-field-highlighted: rgb(27, 30, 40) !important;
  --background-modifier-form-field-hover: rgb(27, 30, 40) !important;
  --background-modifier-hover: rgb(33, 36, 47) !important;
  --background-modifier-message: rgba(33, 36, 47, 0.9) !important;
  --background-modifier-success: rgb(93, 228, 199) !important;
  --background-primary: rgb(27, 30, 40) !important;
  --background-primary-alt: rgb(27, 30, 40) !important;
  --background-secondary: rgb(27, 30, 40) !important;
  --background-secondary-alt: rgb(27, 30, 40) !important;
  --bases-cards-background: rgb(27, 30, 40) !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: rgb(27, 30, 40) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(33, 36, 47) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(33, 36, 47) !important;
  --bases-embed-border-color: rgb(33, 36, 47) !important;
  --bases-group-heading-property-color: rgb(118, 124, 157) !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: rgb(33, 36, 47) !important;
  --bases-table-cell-background-active: rgb(27, 30, 40) !important;
  --bases-table-cell-background-disabled: rgb(27, 30, 40) !important;
  --bases-table-cell-background-selected: rgba(128, 212, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(33, 36, 47) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(128, 212, 255) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: rgb(27, 30, 40) !important;
  --bases-table-header-background: rgb(27, 30, 40) !important;
  --bases-table-header-background-hover: rgb(33, 36, 47) !important;
  --bases-table-header-color: rgb(118, 124, 157) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: rgb(27, 30, 40) !important;
  --bases-table-summary-background-hover: rgb(33, 36, 47) !important;
  --bg: rgb(27, 30, 40) !important;
  --bg_dark: rgb(27, 30, 40) !important;
  --bg_dark2: rgb(32, 36, 48) !important;
  --bg_dark2_x: 32, 36, 48 !important;
  --bg_dark_x: 27, 30, 40 !important;
  --bg_highlight: rgb(33, 36, 47) !important;
  --bg_highlight_dark: rgb(32, 36, 48) !important;
  --bg_highlight_dark_x: 32, 36, 48 !important;
  --bg_highlight_x: 33, 36, 47 !important;
  --bg_x: 27, 30, 40 !important;
  --blockquote-background-color: rgb(27, 30, 40) !important;
  --blockquote-border-color: rgb(128, 212, 255) !important;
  --blue: rgb(173, 215, 255) !important;
  --blue0: rgb(137, 221, 255) !important;
  --blue0_x: 137, 221, 255 !important;
  --blue_x: 173, 215, 255 !important;
  --blur-background: color-mix(in srgb, rgb(27, 30, 40) 65%, transparent) linear-gradient(rgb(27, 30, 40), color-mix(in srgb, rgb(27, 30, 40) 65%, transparent)) !important;
  --bold-color: rgba(137, 221, 255, 0.65) !important;
  --border-width: 2px !important;
  --callout-bug: 208, 103, 157;
  --callout-default: 173, 215, 255;
  --callout-error: 208, 103, 157;
  --callout-example: 240, 135, 189;
  --callout-fail: 208, 103, 157;
  --callout-important: 93, 228, 199;
  --callout-info: 173, 215, 255;
  --callout-question: 255, 250, 194;
  --callout-quote: 118, 124, 157;
  --callout-success: 66, 103, 90;
  --callout-summary: 173, 215, 255;
  --callout-tip: 173, 215, 255;
  --callout-todo: 173, 215, 255;
  --callout-warning: 255, 250, 194;
  --canvas-background: rgb(27, 30, 40) !important;
  --canvas-card-label-color: rgb(118, 124, 157) !important;
  --caret-color: rgb(166, 172, 205) !important;
  --checkbox-border-color: rgb(118, 124, 157) !important;
  --checkbox-border-color-hover: rgb(118, 124, 157) !important;
  --checkbox-color: rgb(93, 228, 199) !important;
  --checkbox-color-hover: rgb(93, 228, 199) !important;
  --checkbox-marker-color: rgb(27, 30, 40) !important;
  --checklist-done-color: rgb(118, 124, 157) !important;
  --code-background: rgb(32, 36, 48) !important;
  --code-border-color: rgb(33, 36, 47) !important;
  --code-bracket-background: rgb(33, 36, 47) !important;
  --code-comment: rgb(118, 124, 157) !important;
  --code-function: rgb(173, 215, 255) !important;
  --code-important: rgb(208, 103, 157) !important;
  --code-keyword: rgb(166, 172, 205) !important;
  --code-normal: rgb(166, 172, 205) !important;
  --code-operator: rgb(173, 215, 255) !important;
  --code-property: rgb(173, 215, 255) !important;
  --code-punctuation: rgb(166, 172, 205) !important;
  --code-string: rgb(93, 228, 199) !important;
  --code-tag: rgb(93, 228, 199) !important;
  --code-value: rgb(93, 228, 199) !important;
  --collapse-icon-color: rgb(118, 124, 157) !important;
  --collapse-icon-color-collapsed: rgb(173, 215, 255) !important;
  --color-accent: rgb(128, 212, 255) !important;
  --color-accent-1: hsl(197, 102%, 86.25%) !important;
  --color-accent-2: hsl(195, 105%, 96.75%) !important;
  --color-accent-hsl: 200, 100%, 75% !important;
  --color-blue: rgb(173, 215, 255) !important;
  --color-cyan: rgb(173, 215, 255) !important;
  --color-green: rgb(93, 228, 199) !important;
  --color-orange: rgb(255, 250, 194) !important;
  --color-pink: rgb(240, 135, 189) !important;
  --color-purple: rgb(240, 135, 189) !important;
  --color-red: rgb(208, 103, 157) !important;
  --color-yellow: rgb(255, 250, 194) !important;
  --color_blue_rgb: 173, 215, 255 !important;
  --color_cyan_rgb: 173, 215, 255 !important;
  --color_green_rgb: 93, 228, 199 !important;
  --color_orange_rgb: 255, 250, 194 !important;
  --color_pink_rgb: 240, 135, 189 !important;
  --color_purple_rgb: 240, 135, 189 !important;
  --color_red_rgb: 208, 103, 157 !important;
  --color_yellow_rgb: 255, 250, 194 !important;
  --comment: rgb(118, 124, 157) !important;
  --comment_x: 118, 124, 157 !important;
  --cyan: rgb(173, 215, 255) !important;
  --cyan0: rgb(137, 221, 255) !important;
  --cyan0_x: 137, 221, 255 !important;
  --cyan_x: 173, 215, 255 !important;
  --dark: rgb(166, 172, 205) !important;
  --darkgray: rgb(166, 172, 205) !important;
  --date-background-color: rgb(33, 36, 47) !important;
  --date-color: rgb(173, 215, 255) !important;
  --divider-color: rgb(33, 36, 47) !important;
  --divider-color-hover: rgb(128, 212, 255) !important;
  --dropdown-background: rgb(27, 30, 40) !important;
  --dropdown-background-hover: rgb(27, 30, 40) !important;
  --embed-background: rgb(27, 30, 40) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(33, 36, 47), inset 0 0 0 1px rgb(33, 36, 47) !important;
  --embed-border-start: 2px solid rgb(128, 212, 255) !important;
  --embed-padding: 1.5rem 1.5rem 0.5rem !important;
  --fg: rgb(166, 172, 205) !important;
  --fg_dark: rgb(118, 124, 157) !important;
  --fg_dark_x: 118, 124, 157 !important;
  --fg_x: 166, 172, 205 !important;
  --file-header-background: rgb(27, 30, 40) !important;
  --file-header-background-focused: rgb(27, 30, 40) !important;
  --file-header-border: 2px solid transparent !important;
  --flair-background: rgb(27, 30, 40) !important;
  --flair-color: rgb(166, 172, 205) !important;
  --flashing-background: rgba(137, 221, 255, 0.3) !important;
  --footnote-divider-color: rgb(33, 36, 47) !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgb(118, 124, 157) !important;
  --footnote-id-color-no-occurrences: rgb(118, 124, 157) !important;
  --footnote-input-background-active: rgb(33, 36, 47) !important;
  --graph-line: rgb(118, 124, 157) !important;
  --graph-node: rgb(166, 172, 205) !important;
  --graph-node-attachment: rgb(173, 215, 255) !important;
  --graph-node-focused: rgb(173, 215, 255) !important;
  --graph-node-tag: rgb(255, 250, 194) !important;
  --graph-node-unresolved: rgb(118, 124, 157) !important;
  --graph-text: rgb(166, 172, 205) !important;
  --gray: rgb(118, 124, 157) !important;
  --green: rgb(93, 228, 199) !important;
  --green0: rgb(95, 179, 161) !important;
  --green0_x: 95, 179, 161 !important;
  --green_x: 93, 228, 199 !important;
  --h1-color: rgb(173, 215, 255) !important;
  --h2-color: rgb(173, 215, 255) !important;
  --h3-color: rgb(173, 215, 255) !important;
  --h4-color: rgb(173, 215, 255) !important;
  --h5-color: rgb(173, 215, 255) !important;
  --h6-color: rgb(173, 215, 255) !important;
  --heading-formatting: rgb(118, 124, 157) !important;
  --highlight: rgba(255, 250, 194, 0.25) !important;
  --hr-color: rgb(33, 36, 47) !important;
  --icon-color: rgb(118, 124, 157) !important;
  --icon-color-active: rgb(240, 135, 189) !important;
  --icon-color-focused: rgb(240, 135, 189) !important;
  --icon-color-hover: rgb(173, 215, 255) !important;
  --image-radius: 0px !important;
  --indentation-guide-color: rgb(118, 124, 157) !important;
  --indentation-guide-color-active: rgb(118, 124, 157) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: rgb(173, 215, 255) !important;
  --input-border-width: 2px !important;
  --input-date-separator: rgb(118, 124, 157) !important;
  --input-placeholder-color: rgb(118, 124, 157) !important;
  --interactive-accent: rgb(128, 212, 255) !important;
  --interactive-accent-hover: rgb(173, 215, 255) !important;
  --interactive-accent-hsl: 200, 100%, 75% !important;
  --interactive-hover: rgb(27, 30, 40) !important;
  --interactive-normal: rgb(27, 30, 40) !important;
  --interactive-success: rgb(93, 228, 199) !important;
  --light: rgb(27, 30, 40) !important;
  --lightgray: rgb(27, 30, 40) !important;
  --link-color: rgb(173, 215, 255) !important;
  --link-color-hover: rgb(255, 250, 194) !important;
  --link-external-color: rgba(95, 179, 161, 0.85) !important;
  --link-external-color-hover: rgb(173, 215, 255) !important;
  --link-external-filter: invert(35%) sepia(28%) saturate(681%)
    hue-rotate(192deg) brightness(94%) contrast(85%) !important;
  --link-unresolved-color: rgb(173, 215, 255) !important;
  --link-unresolved-decoration-color: rgba(128, 212, 255, 0.3) !important;
  --list-marker-color: rgb(118, 124, 157) !important;
  --list-marker-color-collapsed: rgb(173, 215, 255) !important;
  --list-marker-color-hover: rgb(118, 124, 157) !important;
  --magenta: rgb(240, 135, 189) !important;
  --magenta_x: 240, 135, 189 !important;
  --menu-background: rgb(27, 30, 40) !important;
  --menu-border-color: rgb(33, 36, 47) !important;
  --menu-border-width: 2px !important;
  --mermaid-actor: rgb(118, 124, 157) !important;
  --mermaid-loopline: rgb(173, 215, 255) !important;
  --mermaid-note: rgb(137, 221, 255) !important;
  --metadata-border-color: rgb(33, 36, 47) !important;
  --metadata-divider-color: rgb(33, 36, 47) !important;
  --metadata-input-background-active: rgb(33, 36, 47) !important;
  --metadata-input-text-color: rgb(166, 172, 205) !important;
  --metadata-label-background-active: rgb(33, 36, 47) !important;
  --metadata-label-text-color: rgb(118, 124, 157) !important;
  --metadata-label-text-color-hover: rgb(118, 124, 157) !important;
  --metadata-property-background-active: rgb(33, 36, 47) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(33, 36, 47) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(33, 36, 47) !important;
  --modal-background: rgb(27, 30, 40) !important;
  --modal-border-color: rgb(33, 36, 47) !important;
  --modal-border-width: 2px !important;
  --nav-collapse-icon-color: rgb(118, 124, 157) !important;
  --nav-collapse-icon-color-collapsed: rgb(118, 124, 157) !important;
  --nav-file-tag: rgba(255, 250, 194, 0.9) !important;
  --nav-heading-color: rgb(166, 172, 205) !important;
  --nav-heading-color-collapsed: rgb(118, 124, 157) !important;
  --nav-heading-color-collapsed-hover: rgb(118, 124, 157) !important;
  --nav-heading-color-hover: rgb(166, 172, 205) !important;
  --nav-indentation-guide-color: rgb(33, 36, 47) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgb(33, 36, 47) !important;
  --nav-item-background-hover: rgb(33, 36, 47) !important;
  --nav-item-background-selected: rgba(128, 212, 255, 0.15) !important;
  --nav-item-color: rgb(118, 124, 157) !important;
  --nav-item-color-active: rgb(208, 103, 157) !important;
  --nav-item-color-highlighted: rgb(173, 215, 255) !important;
  --nav-item-color-hover: rgb(166, 172, 205) !important;
  --nav-item-color-selected: rgb(166, 172, 205) !important;
  --nav-tag-color: rgb(118, 124, 157) !important;
  --nav-tag-color-active: rgb(118, 124, 157) !important;
  --nav-tag-color-hover: rgb(118, 124, 157) !important;
  --orange: rgb(255, 250, 194) !important;
  --orange_x: 255, 250, 194 !important;
  --pdf-background: rgb(27, 30, 40) !important;
  --pdf-page-background: rgb(27, 30, 40) !important;
  --pdf-shadow: 0 0 0 1px rgb(33, 36, 47) !important;
  --pdf-sidebar-background: rgb(27, 30, 40) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(33, 36, 47) !important;
  --pill-border-color: rgb(33, 36, 47) !important;
  --pill-border-color-hover: rgb(33, 36, 47) !important;
  --pill-border-width: 2px !important;
  --pill-color: rgb(118, 124, 157) !important;
  --pill-color-hover: rgb(166, 172, 205) !important;
  --pill-color-remove: rgb(118, 124, 157) !important;
  --pill-color-remove-hover: rgb(173, 215, 255) !important;
  --pink: rgb(240, 135, 189) !important;
  --pink_x: 240, 135, 189 !important;
  --prompt-background: rgb(27, 30, 40) !important;
  --prompt-border-color: rgb(33, 36, 47) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, rgb(27, 30, 40) 65%, transparent) linear-gradient(rgb(27, 30, 40), color-mix(in srgb, rgb(27, 30, 40) 65%, transparent)) !important;
  --red: rgb(208, 103, 157) !important;
  --red1: rgb(208, 103, 157) !important;
  --red1_x: 208, 103, 157 !important;
  --red_x: 208, 103, 157 !important;
  --ribbon-background: rgb(27, 30, 40) !important;
  --ribbon-background-collapsed: rgb(27, 30, 40) !important;
  --scrollbar-active-thumb-bg: rgba(118, 124, 157, 0.5) !important;
  --scrollbar-bg: rgb(27, 30, 40) !important;
  --scrollbar-thumb-bg: rgba(118, 124, 157, 0.35) !important;
  --scrollbar-width: 7px !important;
  --search-clear-button-color: rgb(118, 124, 157) !important;
  --search-icon-color: rgb(118, 124, 157) !important;
  --search-result-background: rgb(27, 30, 40) !important;
  --secondary: rgb(173, 215, 255) !important;
  --setting-group-heading-color: rgb(166, 172, 205) !important;
  --setting-items-background: rgb(27, 30, 40) !important;
  --setting-items-border-color: rgb(33, 36, 47) !important;
  --slider-thumb-border-color: rgb(33, 36, 47) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: rgb(33, 36, 47) !important;
  --status-bar-background: rgb(27, 30, 40) !important;
  --status-bar-border-color: rgb(33, 36, 47) !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-text-color: rgb(118, 124, 157) !important;
  --suggestion-background: rgb(27, 30, 40) !important;
  --sync-avatar-color-1: rgb(208, 103, 157) !important;
  --sync-avatar-color-2: rgb(255, 250, 194) !important;
  --sync-avatar-color-3: rgb(255, 250, 194) !important;
  --sync-avatar-color-4: rgb(93, 228, 199) !important;
  --sync-avatar-color-5: rgb(173, 215, 255) !important;
  --sync-avatar-color-6: rgb(173, 215, 255) !important;
  --sync-avatar-color-7: rgb(240, 135, 189) !important;
  --sync-avatar-color-8: rgb(240, 135, 189) !important;
  --tab-background-active: rgb(27, 30, 40) !important;
  --tab-container-background: rgb(27, 30, 40) !important;
  --tab-divider-color: rgb(33, 36, 47) !important;
  --tab-outline-color: rgb(33, 36, 47) !important;
  --tab-switcher-background: rgb(27, 30, 40) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(27, 30, 40), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(128, 212, 255) !important;
  --tab-text-color: rgb(118, 124, 157) !important;
  --tab-text-color-active: rgb(118, 124, 157) !important;
  --tab-text-color-focused: rgb(118, 124, 157) !important;
  --tab-text-color-focused-active: rgba(208, 103, 157, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(208, 103, 157) !important;
  --tab-text-color-focused-highlighted: rgb(173, 215, 255) !important;
  --table-add-button-border-color: rgb(33, 36, 47) !important;
  --table-border-color: rgb(33, 36, 47) !important;
  --table-drag-handle-background-active: rgb(128, 212, 255) !important;
  --table-drag-handle-color: rgb(118, 124, 157) !important;
  --table-drag-handle-color-active: rgb(27, 30, 40) !important;
  --table-header-background: rgb(32, 36, 48) !important;
  --table-header-background-hover: rgb(32, 36, 48) !important;
  --table-header-border-color: rgb(33, 36, 47) !important;
  --table-header-color: rgb(166, 172, 205) !important;
  --table-selection: rgba(128, 212, 255, 0.1) !important;
  --table-selection-border-color: rgb(128, 212, 255) !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(95, 179, 161, 0.25) !important;
  --tag-background-hover: rgba(173, 215, 255, 0.15) !important;
  --tag-border-color: rgba(128, 212, 255, 0.15) !important;
  --tag-border-color-hover: rgba(128, 212, 255, 0.15) !important;
  --tag-color: rgb(95, 179, 161) !important;
  --tag-color-hover: rgb(173, 215, 255) !important;
  --tag-radius: 4px !important;
  --teal: rgb(66, 103, 90) !important;
  --teal_x: 66, 103, 90 !important;
  --terminal_black: rgb(48, 51, 64) !important;
  --terminal_black_x: 48, 51, 64 !important;
  --tertiary: rgb(173, 215, 255) !important;
  --text-accent: rgb(173, 215, 255) !important;
  --text-accent-hover: rgb(173, 215, 255) !important;
  --text-error: rgb(208, 103, 157) !important;
  --text-error-hover: rgb(208, 103, 157) !important;
  --text-faint: rgb(118, 124, 157) !important;
  --text-highlight-bg: rgba(255, 250, 194, 0.25) !important;
  --text-muted: rgb(118, 124, 157) !important;
  --text-normal: rgb(166, 172, 205) !important;
  --text-on-accent: rgb(27, 30, 40) !important;
  --text-selection: rgba(113, 124, 180, 0.15) !important;
  --text-success: rgb(93, 228, 199) !important;
  --text-warning: rgb(255, 250, 194) !important;
  --textHighlight: rgba(255, 250, 194, 0.25) !important;
  --titlebar-background: rgb(27, 30, 40) !important;
  --titlebar-background-focused: rgb(27, 30, 40) !important;
  --titlebar-border-color: rgb(33, 36, 47) !important;
  --titlebar-text-color: rgb(118, 124, 157) !important;
  --titlebar-text-color-focused: rgb(166, 172, 205) !important;
  --toggle-thumb-color: rgb(27, 30, 40) !important;
  --unknown: #ffffff !important;
  --vault-profile-color: rgb(166, 172, 205) !important;
  --vault-profile-color-hover: rgb(166, 172, 205) !important;
  --yellow: rgb(255, 250, 194) !important;
  --yellow_x: 255, 250, 194 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 30, 40);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(27, 30, 40);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 30, 40);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(33, 36, 47);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 30, 40);
  border-left-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 36, 48);
  color: rgb(166, 172, 205);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgba(137, 221, 255, 0.65);
  outline: rgba(137, 221, 255, 0.65) none 0px;
  text-decoration: rgba(137, 221, 255, 0.65);
  text-decoration-color: rgba(137, 221, 255, 0.65);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgba(137, 221, 255, 0.65);
  outline: rgba(137, 221, 255, 0.65) none 0px;
  text-decoration: rgba(137, 221, 255, 0.65);
  text-decoration-color: rgba(137, 221, 255, 0.65);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 250, 194, 0.25);
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body del {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: line-through rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body p {
  color: rgb(118, 124, 157);
  outline: rgb(118, 124, 157) none 0px;
  text-decoration: rgb(118, 124, 157);
  text-decoration-color: rgb(118, 124, 157);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(95, 179, 161, 0.85);
  outline: rgba(95, 179, 161, 0.85) none 0px;
  text-decoration: underline rgba(95, 179, 161, 0.85);
  text-decoration-color: rgba(95, 179, 161, 0.85);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(173, 215, 255);
  outline: rgb(173, 215, 255) none 0px;
  text-decoration: underline rgb(173, 215, 255);
  text-decoration-color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(173, 215, 255);
  outline: rgb(173, 215, 255) none 0px;
  text-decoration: underline rgba(128, 213, 255, 0.3);
  text-decoration-color: rgba(128, 213, 255, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body dt {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(27, 30, 40);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body table {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(32, 36, 48);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(173, 215, 255);
  border-left-color: rgb(173, 215, 255);
  border-right-color: rgb(173, 215, 255);
  border-top-color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(128, 213, 255);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(128, 213, 255);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(118, 124, 157);
  text-decoration: line-through rgb(118, 124, 157);
  text-decoration-color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(173, 215, 255);
  border-left-color: rgb(173, 215, 255);
  border-right-color: rgb(173, 215, 255);
  border-top-color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 208, 103, 157;
  background-color: rgba(208, 103, 157, 0.1);
  border-bottom-color: rgba(208, 103, 157, 0.25);
  border-left-color: rgba(208, 103, 157, 0.25);
  border-right-color: rgba(208, 103, 157, 0.25);
  border-top-color: rgba(208, 103, 157, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 208, 103, 157;
  background-color: rgba(208, 103, 157, 0.1);
  border-bottom-color: rgba(208, 103, 157, 0.25);
  border-left-color: rgba(208, 103, 157, 0.25);
  border-right-color: rgba(208, 103, 157, 0.25);
  border-top-color: rgba(208, 103, 157, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 240, 135, 189;
  background-color: rgba(240, 135, 189, 0.1);
  border-bottom-color: rgba(240, 135, 189, 0.25);
  border-left-color: rgba(240, 135, 189, 0.25);
  border-right-color: rgba(240, 135, 189, 0.25);
  border-top-color: rgba(240, 135, 189, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 208, 103, 157;
  background-color: rgba(208, 103, 157, 0.1);
  border-bottom-color: rgba(208, 103, 157, 0.25);
  border-left-color: rgba(208, 103, 157, 0.25);
  border-right-color: rgba(208, 103, 157, 0.25);
  border-top-color: rgba(208, 103, 157, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 255, 250, 194;
  background-color: rgba(255, 250, 194, 0.1);
  border-bottom-color: rgba(255, 250, 194, 0.25);
  border-left-color: rgba(255, 250, 194, 0.25);
  border-right-color: rgba(255, 250, 194, 0.25);
  border-top-color: rgba(255, 250, 194, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 118, 124, 157;
  background-color: rgba(118, 124, 157, 0.1);
  border-bottom-color: rgba(118, 124, 157, 0.25);
  border-left-color: rgba(118, 124, 157, 0.25);
  border-right-color: rgba(118, 124, 157, 0.25);
  border-top-color: rgba(118, 124, 157, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 66, 103, 90;
  background-color: rgba(66, 103, 90, 0.1);
  border-bottom-color: rgba(66, 103, 90, 0.25);
  border-left-color: rgba(66, 103, 90, 0.25);
  border-right-color: rgba(66, 103, 90, 0.25);
  border-top-color: rgba(66, 103, 90, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 173, 215, 255;
  background-color: rgba(173, 215, 255, 0.1);
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 250, 194;
  background-color: rgba(255, 250, 194, 0.1);
  border-bottom-color: rgba(255, 250, 194, 0.25);
  border-left-color: rgba(255, 250, 194, 0.25);
  border-right-color: rgba(255, 250, 194, 0.25);
  border-top-color: rgba(255, 250, 194, 0.25);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(33, 36, 47);
  border-bottom-width: 2px;
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
  border-right-color: rgb(33, 36, 47);
  border-right-width: 2px;
  border-top-color: rgb(33, 36, 47);
  border-top-width: 2px;
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(33, 36, 47);
  border-bottom-width: 2px;
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
  border-right-color: rgb(33, 36, 47);
  border-right-width: 2px;
  border-top-color: rgb(33, 36, 47);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(33, 36, 47);
  border-bottom-width: 2px;
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
  border-right-color: rgb(33, 36, 47);
  border-right-width: 2px;
  border-top-color: rgb(33, 36, 47);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 30, 40);
  border-bottom-width: 2px;
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(33, 36, 47);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(95, 179, 161, 0.25);
  border-bottom-color: rgba(128, 213, 255, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(128, 213, 255, 0.15);
  border-right-color: rgba(128, 213, 255, 0.15);
  border-top-color: rgba(128, 213, 255, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(95, 179, 161);
}

html[saved-theme="dark"] body h1 {
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body h2 {
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body h3 {
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body h4 {
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body h5 {
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body h6 {
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 173, 215, 255;
  border-bottom-color: rgba(173, 215, 255, 0.25);
  border-left-color: rgba(173, 215, 255, 0.25);
  border-right-color: rgba(173, 215, 255, 0.25);
  border-top-color: rgba(173, 215, 255, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(32, 36, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 36, 48);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(33, 36, 47);
  border-bottom-color: rgb(208, 103, 157);
  border-left-color: rgb(208, 103, 157);
  border-right-color: rgb(208, 103, 157);
  border-top-color: rgb(208, 103, 157);
  color: rgb(208, 103, 157);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(27, 30, 40);
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  border-top-width: 2px;
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(118, 124, 157);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(118, 124, 157);
  text-decoration: rgb(118, 124, 157);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(118, 124, 157);
  stroke: rgb(118, 124, 157);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(118, 124, 157);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(33, 36, 47);
  border-left-color: rgb(33, 36, 47);
  border-right-color: rgb(33, 36, 47);
  border-top-color: rgb(33, 36, 47);
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(27, 30, 40);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body abbr {
  color: rgb(166, 172, 205);
  text-decoration: underline dotted rgb(166, 172, 205);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(32, 36, 48);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body sub {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body summary {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body sup {
  color: rgb(166, 172, 205);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 198 !important;
  --accent-l: 50% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgb(192, 208, 223) !important;
  --background-modifier-border: rgb(192, 208, 223) !important;
  --background-modifier-border-focus: rgb(192, 208, 223) !important;
  --background-modifier-border-hover: rgb(192, 208, 223) !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(254, 254, 255, 0.8) !important;
  --background-modifier-error: rgb(255, 32, 144) !important;
  --background-modifier-error-hover: rgb(255, 32, 144) !important;
  --background-modifier-form-field: rgb(254, 254, 255) !important;
  --background-modifier-form-field-highlighted: rgb(254, 254, 255) !important;
  --background-modifier-form-field-hover: rgb(254, 254, 255) !important;
  --background-modifier-hover: rgb(192, 208, 223) !important;
  --background-modifier-message: rgba(192, 208, 223, 0.9) !important;
  --background-modifier-success: rgb(1, 218, 178) !important;
  --background-primary: rgb(254, 254, 255) !important;
  --background-primary-alt: rgb(254, 254, 255) !important;
  --background-secondary: rgb(254, 254, 255) !important;
  --background-secondary-alt: rgb(254, 254, 255) !important;
  --bases-cards-background: rgb(254, 254, 255) !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: rgb(254, 254, 255) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(192, 208, 223) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(192, 208, 223) !important;
  --bases-embed-border-color: rgb(192, 208, 223) !important;
  --bases-group-heading-property-color: rgb(150, 156, 189) !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: rgb(192, 208, 223) !important;
  --bases-table-cell-background-active: rgb(254, 254, 255) !important;
  --bases-table-cell-background-disabled: rgb(254, 254, 255) !important;
  --bases-table-cell-background-selected: rgba(0, 179, 255, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(192, 208, 223) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 179, 255) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-group-background: rgb(254, 254, 255) !important;
  --bases-table-header-background: rgb(254, 254, 255) !important;
  --bases-table-header-background-hover: rgb(192, 208, 223) !important;
  --bases-table-header-color: rgb(150, 156, 189) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: rgb(254, 254, 255) !important;
  --bases-table-summary-background-hover: rgb(192, 208, 223) !important;
  --bg: rgb(254, 254, 255) !important;
  --bg_dark: rgb(254, 254, 255) !important;
  --bg_dark2: rgb(192, 208, 223) !important;
  --bg_dark2_x: 192, 208, 223 !important;
  --bg_dark_x: 254, 254, 255 !important;
  --bg_highlight: rgb(192, 208, 223) !important;
  --bg_highlight_dark: rgb(255, 255, 255) !important;
  --bg_highlight_dark_x: 255, 255, 255 !important;
  --bg_highlight_x: 192, 208, 223 !important;
  --bg_x: 254, 254, 255 !important;
  --blockquote-background-color: rgb(254, 254, 255) !important;
  --blockquote-border-color: rgb(0, 179, 255) !important;
  --blue: rgb(14, 191, 255) !important;
  --blue0: rgb(138, 186, 205) !important;
  --blue0_x: 138, 186, 205 !important;
  --blue_x: 14, 191, 255 !important;
  --blur-background: color-mix(in srgb, rgb(254, 254, 255) 65%, transparent) linear-gradient(rgb(254, 254, 255), color-mix(in srgb, rgb(254, 254, 255) 65%, transparent)) !important;
  --bold-color: rgba(98, 170, 155, 0.72) !important;
  --border-width: 2px !important;
  --callout-bug: 255, 32, 144;
  --callout-default: 14, 191, 255;
  --callout-error: 255, 32, 144;
  --callout-example: 235, 131, 148;
  --callout-fail: 255, 32, 144;
  --callout-important: 1, 218, 178;
  --callout-info: 14, 191, 255;
  --callout-question: 255, 212, 103;
  --callout-quote: 150, 156, 189;
  --callout-success: 98, 170, 155;
  --callout-summary: 14, 191, 255;
  --callout-tip: 14, 191, 255;
  --callout-todo: 14, 191, 255;
  --callout-warning: 255, 212, 103;
  --canvas-background: rgb(254, 254, 255) !important;
  --canvas-card-label-color: rgb(192, 208, 223) !important;
  --canvas-color: 192, 208, 223 !important;
  --caret-color: rgb(59, 62, 72) !important;
  --checkbox-border-color: rgb(192, 208, 223) !important;
  --checkbox-border-color-hover: rgb(192, 208, 223) !important;
  --checkbox-color: rgb(1, 218, 178) !important;
  --checkbox-color-hover: rgb(1, 218, 178) !important;
  --checkbox-marker-color: rgb(254, 254, 255) !important;
  --checklist-done-color: rgb(150, 156, 189) !important;
  --code-background: rgba(192, 208, 223, 0.35) !important;
  --code-border-color: rgb(192, 208, 223) !important;
  --code-bracket-background: rgb(192, 208, 223) !important;
  --code-comment: rgb(150, 156, 189) !important;
  --code-function: rgb(14, 191, 255) !important;
  --code-important: rgb(255, 32, 144) !important;
  --code-keyword: rgb(59, 62, 72) !important;
  --code-normal: rgb(59, 62, 72) !important;
  --code-operator: rgb(14, 191, 255) !important;
  --code-property: rgb(14, 191, 255) !important;
  --code-punctuation: rgb(59, 62, 72) !important;
  --code-string: rgb(1, 218, 178) !important;
  --code-tag: rgb(1, 218, 178) !important;
  --code-value: rgb(1, 218, 178) !important;
  --collapse-icon-color: rgb(192, 208, 223) !important;
  --collapse-icon-color-collapsed: rgb(14, 191, 255) !important;
  --color-accent: rgb(0, 179, 255) !important;
  --color-accent-1: hsl(197, 101%, 53.75%) !important;
  --color-accent-2: hsl(195, 102%, 57.5%) !important;
  --color-accent-hsl: 198, 100%, 50% !important;
  --color-blue: rgb(14, 191, 255) !important;
  --color-cyan: rgb(14, 191, 255) !important;
  --color-green: rgb(1, 218, 178) !important;
  --color-orange: rgb(255, 212, 103) !important;
  --color-pink: rgb(235, 131, 148) !important;
  --color-purple: rgb(235, 131, 148) !important;
  --color-red: rgb(255, 32, 144) !important;
  --color-yellow: rgb(255, 212, 103) !important;
  --color_blue_rgb: 14, 191, 255 !important;
  --color_cyan_rgb: 14, 191, 255 !important;
  --color_green_rgb: 1, 218, 178 !important;
  --color_orange_rgb: 255, 212, 103 !important;
  --color_pink_rgb: 235, 131, 148 !important;
  --color_purple_rgb: 235, 131, 148 !important;
  --color_red_rgb: 255, 32, 144 !important;
  --color_yellow_rgb: 255, 212, 103 !important;
  --comment: rgb(192, 208, 223) !important;
  --comment_x: 192, 208, 223 !important;
  --cyan: rgb(14, 191, 255) !important;
  --cyan0: rgb(138, 186, 205) !important;
  --cyan0_x: 138, 186, 205 !important;
  --cyan_x: 14, 191, 255 !important;
  --dark: rgb(59, 62, 72) !important;
  --darkgray: rgb(59, 62, 72) !important;
  --date-background-color: rgb(192, 208, 223) !important;
  --date-color: rgb(14, 191, 255) !important;
  --divider-color: rgb(192, 208, 223) !important;
  --divider-color-hover: rgb(0, 179, 255) !important;
  --dropdown-background: rgb(254, 254, 255) !important;
  --dropdown-background-hover: rgb(254, 254, 255) !important;
  --embed-background: rgb(254, 254, 255) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(192, 208, 223), inset 0 0 0 1px rgb(192, 208, 223) !important;
  --embed-border-start: 2px solid rgb(0, 179, 255) !important;
  --embed-padding: 1.5rem 1.5rem 0.5rem !important;
  --fg: rgb(59, 62, 72) !important;
  --fg_dark: rgb(150, 156, 189) !important;
  --fg_dark_x: 150, 156, 189 !important;
  --fg_x: 59, 62, 72 !important;
  --file-header-background: rgb(254, 254, 255) !important;
  --file-header-background-focused: rgb(254, 254, 255) !important;
  --file-header-border: 2px solid transparent !important;
  --flair-background: rgb(254, 254, 255) !important;
  --flair-color: rgb(59, 62, 72) !important;
  --flashing-background: rgba(138, 186, 205, 0.3) !important;
  --footnote-divider-color: rgb(192, 208, 223) !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgb(150, 156, 189) !important;
  --footnote-id-color-no-occurrences: rgb(192, 208, 223) !important;
  --footnote-input-background-active: rgb(192, 208, 223) !important;
  --graph-line: rgb(192, 208, 223) !important;
  --graph-node: rgb(59, 62, 72) !important;
  --graph-node-attachment: rgb(14, 191, 255) !important;
  --graph-node-focused: rgb(14, 191, 255) !important;
  --graph-node-tag: rgb(255, 212, 103) !important;
  --graph-node-unresolved: rgb(192, 208, 223) !important;
  --graph-text: rgb(59, 62, 72) !important;
  --gray: rgb(150, 156, 189) !important;
  --green: rgb(1, 218, 178) !important;
  --green0: rgb(98, 170, 155) !important;
  --green0_x: 98, 170, 155 !important;
  --green_x: 1, 218, 178 !important;
  --h1-color: rgb(138, 186, 205) !important;
  --h2-color: rgb(138, 186, 205) !important;
  --h3-color: rgb(138, 186, 205) !important;
  --h4-color: rgb(138, 186, 205) !important;
  --h5-color: rgb(138, 186, 205) !important;
  --h6-color: rgb(138, 186, 205) !important;
  --heading-formatting: rgb(192, 208, 223) !important;
  --highlight: rgba(255, 212, 103, 0.25) !important;
  --hr-color: rgb(192, 208, 223) !important;
  --icon-color: rgb(150, 156, 189) !important;
  --icon-color-active: rgb(235, 131, 148) !important;
  --icon-color-focused: rgb(235, 131, 148) !important;
  --icon-color-hover: rgb(14, 191, 255) !important;
  --image-radius: 0px !important;
  --indentation-guide-color: rgb(192, 208, 223) !important;
  --indentation-guide-color-active: rgb(192, 208, 223) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: rgb(138, 186, 205) !important;
  --input-border-width: 2px !important;
  --input-date-separator: rgb(192, 208, 223) !important;
  --input-placeholder-color: rgb(192, 208, 223) !important;
  --interactive-accent: rgb(0, 179, 255) !important;
  --interactive-accent-hover: rgb(14, 191, 255) !important;
  --interactive-accent-hsl: 198, 100%, 50% !important;
  --interactive-hover: rgb(254, 254, 255) !important;
  --interactive-normal: rgb(254, 254, 255) !important;
  --interactive-success: rgb(1, 218, 178) !important;
  --light: rgb(254, 254, 255) !important;
  --lightgray: rgb(254, 254, 255) !important;
  --link-color: rgb(14, 191, 255) !important;
  --link-color-hover: rgb(255, 212, 103) !important;
  --link-external-color: rgba(98, 170, 155, 0.85) !important;
  --link-external-color-hover: rgb(14, 191, 255) !important;
  --link-external-filter: invert(31%) sepia(96%) saturate(1412%)
    hue-rotate(173deg) brightness(102%) contrast(104%) !important;
  --link-unresolved-color: rgb(14, 191, 255) !important;
  --link-unresolved-decoration-color: rgba(0, 179, 255, 0.3) !important;
  --list-marker-color: rgb(192, 208, 223) !important;
  --list-marker-color-collapsed: rgb(14, 191, 255) !important;
  --list-marker-color-hover: rgb(150, 156, 189) !important;
  --magenta: rgb(235, 131, 148) !important;
  --magenta_x: 235, 131, 148 !important;
  --menu-background: rgb(254, 254, 255) !important;
  --menu-border-color: rgb(192, 208, 223) !important;
  --menu-border-width: 2px !important;
  --mermaid-actor: rgb(150, 156, 189) !important;
  --mermaid-loopline: rgb(14, 191, 255) !important;
  --mermaid-note: rgb(138, 186, 205) !important;
  --metadata-border-color: rgb(192, 208, 223) !important;
  --metadata-divider-color: rgb(192, 208, 223) !important;
  --metadata-input-background-active: rgb(192, 208, 223) !important;
  --metadata-input-text-color: rgb(59, 62, 72) !important;
  --metadata-label-background-active: rgb(192, 208, 223) !important;
  --metadata-label-text-color: rgb(150, 156, 189) !important;
  --metadata-label-text-color-hover: rgb(150, 156, 189) !important;
  --metadata-property-background-active: rgb(192, 208, 223) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(192, 208, 223) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(192, 208, 223) !important;
  --modal-background: rgb(254, 254, 255) !important;
  --modal-border-color: rgb(192, 208, 223) !important;
  --modal-border-width: 2px !important;
  --nav-collapse-icon-color: rgb(192, 208, 223) !important;
  --nav-collapse-icon-color-collapsed: rgb(192, 208, 223) !important;
  --nav-file-tag: rgba(255, 212, 103, 0.9) !important;
  --nav-heading-color: rgb(59, 62, 72) !important;
  --nav-heading-color-collapsed: rgb(192, 208, 223) !important;
  --nav-heading-color-collapsed-hover: rgb(150, 156, 189) !important;
  --nav-heading-color-hover: rgb(59, 62, 72) !important;
  --nav-indentation-guide-color: rgb(192, 208, 223) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgb(192, 208, 223) !important;
  --nav-item-background-hover: rgb(192, 208, 223) !important;
  --nav-item-background-selected: rgba(0, 179, 255, 0.15) !important;
  --nav-item-color: rgb(150, 156, 189) !important;
  --nav-item-color-active: rgb(255, 32, 144) !important;
  --nav-item-color-highlighted: rgb(14, 191, 255) !important;
  --nav-item-color-hover: rgb(59, 62, 72) !important;
  --nav-item-color-selected: rgb(59, 62, 72) !important;
  --nav-tag-color: rgb(192, 208, 223) !important;
  --nav-tag-color-active: rgb(150, 156, 189) !important;
  --nav-tag-color-hover: rgb(150, 156, 189) !important;
  --orange: rgb(255, 212, 103) !important;
  --orange_x: 255, 212, 103 !important;
  --pdf-background: rgb(254, 254, 255) !important;
  --pdf-page-background: rgb(254, 254, 255) !important;
  --pdf-sidebar-background: rgb(254, 254, 255) !important;
  --pill-border-color: rgb(192, 208, 223) !important;
  --pill-border-color-hover: rgb(192, 208, 223) !important;
  --pill-border-width: 2px !important;
  --pill-color: rgb(150, 156, 189) !important;
  --pill-color-hover: rgb(59, 62, 72) !important;
  --pill-color-remove: rgb(192, 208, 223) !important;
  --pill-color-remove-hover: rgb(14, 191, 255) !important;
  --pink: rgb(235, 131, 148) !important;
  --pink_x: 235, 131, 148 !important;
  --prompt-background: rgb(254, 254, 255) !important;
  --prompt-border-color: rgb(192, 208, 223) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, rgb(254, 254, 255) 65%, transparent) linear-gradient(rgb(254, 254, 255), color-mix(in srgb, rgb(254, 254, 255) 65%, transparent)) !important;
  --red: rgb(255, 32, 144) !important;
  --red1: rgb(255, 32, 144) !important;
  --red1_x: 255, 32, 144 !important;
  --red_x: 255, 32, 144 !important;
  --ribbon-background: rgb(254, 254, 255) !important;
  --ribbon-background-collapsed: rgb(254, 254, 255) !important;
  --scrollbar-active-thumb-bg: rgba(150, 156, 189, 0.5) !important;
  --scrollbar-bg: rgb(254, 254, 255) !important;
  --scrollbar-thumb-bg: rgba(150, 156, 189, 0.35) !important;
  --scrollbar-width: 7px !important;
  --search-clear-button-color: rgb(150, 156, 189) !important;
  --search-icon-color: rgb(150, 156, 189) !important;
  --search-result-background: rgb(254, 254, 255) !important;
  --secondary: rgb(14, 191, 255) !important;
  --setting-group-heading-color: rgb(59, 62, 72) !important;
  --setting-items-background: rgb(254, 254, 255) !important;
  --setting-items-border-color: rgb(192, 208, 223) !important;
  --slider-thumb-border-color: rgb(192, 208, 223) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: rgb(192, 208, 223) !important;
  --status-bar-background: rgb(254, 254, 255) !important;
  --status-bar-border-color: rgb(192, 208, 223) !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-text-color: rgb(150, 156, 189) !important;
  --suggestion-background: rgb(254, 254, 255) !important;
  --sync-avatar-color-1: rgb(255, 32, 144) !important;
  --sync-avatar-color-2: rgb(255, 212, 103) !important;
  --sync-avatar-color-3: rgb(255, 212, 103) !important;
  --sync-avatar-color-4: rgb(1, 218, 178) !important;
  --sync-avatar-color-5: rgb(14, 191, 255) !important;
  --sync-avatar-color-6: rgb(14, 191, 255) !important;
  --sync-avatar-color-7: rgb(235, 131, 148) !important;
  --sync-avatar-color-8: rgb(235, 131, 148) !important;
  --tab-background-active: rgb(254, 254, 255) !important;
  --tab-container-background: rgb(254, 254, 255) !important;
  --tab-divider-color: rgb(192, 208, 223) !important;
  --tab-outline-color: rgb(192, 208, 223) !important;
  --tab-switcher-background: rgb(254, 254, 255) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(254, 254, 255), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 179, 255) !important;
  --tab-text-color: rgb(192, 208, 223) !important;
  --tab-text-color-active: rgb(150, 156, 189) !important;
  --tab-text-color-focused: rgb(150, 156, 189) !important;
  --tab-text-color-focused-active: rgba(255, 32, 144, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(255, 32, 144) !important;
  --tab-text-color-focused-highlighted: rgb(14, 191, 255) !important;
  --table-add-button-border-color: rgb(192, 208, 223) !important;
  --table-border-color: rgb(192, 208, 223) !important;
  --table-drag-handle-background-active: rgb(0, 179, 255) !important;
  --table-drag-handle-color: rgb(192, 208, 223) !important;
  --table-drag-handle-color-active: rgb(254, 254, 255) !important;
  --table-header-background: rgb(192, 208, 223) !important;
  --table-header-background-hover: rgb(192, 208, 223) !important;
  --table-header-border-color: rgb(192, 208, 223) !important;
  --table-header-color: rgb(59, 62, 72) !important;
  --table-selection: rgba(0, 179, 255, 0.1) !important;
  --table-selection-border-color: rgb(0, 179, 255) !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(98, 170, 155, 0.25) !important;
  --tag-background-hover: rgba(14, 191, 255, 0.15) !important;
  --tag-border-color: rgba(0, 179, 255, 0.15) !important;
  --tag-border-color-hover: rgba(0, 179, 255, 0.15) !important;
  --tag-color: rgb(98, 170, 155) !important;
  --tag-color-hover: rgb(14, 191, 255) !important;
  --tag-radius: 4px !important;
  --teal: rgb(98, 170, 155) !important;
  --teal_x: 98, 170, 155 !important;
  --terminal_black: rgb(59, 62, 72) !important;
  --terminal_black_x: 59, 62, 72 !important;
  --tertiary: rgb(14, 191, 255) !important;
  --text-accent: rgb(14, 191, 255) !important;
  --text-accent-hover: rgb(14, 191, 255) !important;
  --text-error: rgb(255, 32, 144) !important;
  --text-error-hover: rgb(255, 32, 144) !important;
  --text-faint: rgb(192, 208, 223) !important;
  --text-highlight-bg: rgba(255, 212, 103, 0.25) !important;
  --text-muted: rgb(150, 156, 189) !important;
  --text-normal: rgb(59, 62, 72) !important;
  --text-on-accent: rgb(254, 254, 255) !important;
  --text-selection: rgba(113, 124, 180, 0.15) !important;
  --text-success: rgb(1, 218, 178) !important;
  --text-warning: rgb(255, 212, 103) !important;
  --textHighlight: rgba(255, 212, 103, 0.25) !important;
  --titlebar-background: rgb(254, 254, 255) !important;
  --titlebar-background-focused: rgb(254, 254, 255) !important;
  --titlebar-border-color: rgb(192, 208, 223) !important;
  --titlebar-text-color: rgb(150, 156, 189) !important;
  --titlebar-text-color-focused: rgb(59, 62, 72) !important;
  --toggle-thumb-color: rgb(254, 254, 255) !important;
  --unknown: #000000 !important;
  --vault-profile-color: rgb(59, 62, 72) !important;
  --vault-profile-color-hover: rgb(59, 62, 72) !important;
  --yellow: rgb(255, 212, 103) !important;
  --yellow_x: 255, 212, 103 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(254, 254, 255);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(254, 254, 255);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(254, 254, 255);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(192, 208, 223);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(254, 254, 255);
  border-left-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(254, 254, 255);
  color: rgb(59, 62, 72);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgba(98, 170, 155, 0.72);
  outline: rgba(98, 170, 155, 0.72) none 0px;
  text-decoration: rgba(98, 170, 155, 0.72);
  text-decoration-color: rgba(98, 170, 155, 0.72);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgba(98, 170, 155, 0.72);
  outline: rgba(98, 170, 155, 0.72) none 0px;
  text-decoration: rgba(98, 170, 155, 0.72);
  text-decoration-color: rgba(98, 170, 155, 0.72);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 212, 103, 0.25);
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body del {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: line-through rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body p {
  color: rgb(150, 156, 189);
  outline: rgb(150, 156, 189) none 0px;
  text-decoration: rgb(150, 156, 189);
  text-decoration-color: rgb(150, 156, 189);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgba(98, 170, 155, 0.85);
  outline: rgba(98, 170, 155, 0.85) none 0px;
  text-decoration: underline rgba(98, 170, 155, 0.85);
  text-decoration-color: rgba(98, 170, 155, 0.85);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(14, 191, 255);
  outline: rgb(14, 191, 255) none 0px;
  text-decoration: underline rgb(14, 191, 255);
  text-decoration-color: rgb(14, 191, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(14, 191, 255);
  outline: rgb(14, 191, 255) none 0px;
  text-decoration: underline rgba(0, 178, 255, 0.3);
  text-decoration-color: rgba(0, 178, 255, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body dt {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body ol > li {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body ul > li {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(192, 208, 223);
  text-decoration: rgb(192, 208, 223);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(254, 254, 255);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body table {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body tr {
  background-color: rgb(192, 208, 223);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(14, 191, 255);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(14, 191, 255);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(14, 191, 255);
  border-left-color: rgb(14, 191, 255);
  border-right-color: rgb(14, 191, 255);
  border-top-color: rgb(14, 191, 255);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body figcaption {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(0, 178, 255);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(0, 178, 255);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(150, 156, 189);
  text-decoration: line-through rgb(150, 156, 189);
  text-decoration-color: rgb(150, 156, 189);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(59, 62, 72);
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(14, 191, 255);
  border-left-color: rgb(14, 191, 255);
  border-right-color: rgb(14, 191, 255);
  border-top-color: rgb(14, 191, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 255, 32, 144;
  background-color: rgba(255, 32, 144, 0.1);
  border-bottom-color: rgba(255, 32, 144, 0.25);
  border-left-color: rgba(255, 32, 144, 0.25);
  border-right-color: rgba(255, 32, 144, 0.25);
  border-top-color: rgba(255, 32, 144, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 255, 32, 144;
  background-color: rgba(255, 32, 144, 0.1);
  border-bottom-color: rgba(255, 32, 144, 0.25);
  border-left-color: rgba(255, 32, 144, 0.25);
  border-right-color: rgba(255, 32, 144, 0.25);
  border-top-color: rgba(255, 32, 144, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 235, 131, 148;
  background-color: rgba(235, 131, 148, 0.1);
  border-bottom-color: rgba(235, 131, 148, 0.25);
  border-left-color: rgba(235, 131, 148, 0.25);
  border-right-color: rgba(235, 131, 148, 0.25);
  border-top-color: rgba(235, 131, 148, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 255, 32, 144;
  background-color: rgba(255, 32, 144, 0.1);
  border-bottom-color: rgba(255, 32, 144, 0.25);
  border-left-color: rgba(255, 32, 144, 0.25);
  border-right-color: rgba(255, 32, 144, 0.25);
  border-top-color: rgba(255, 32, 144, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 255, 212, 103;
  background-color: rgba(255, 212, 103, 0.1);
  border-bottom-color: rgba(255, 212, 103, 0.25);
  border-left-color: rgba(255, 212, 103, 0.25);
  border-right-color: rgba(255, 212, 103, 0.25);
  border-top-color: rgba(255, 212, 103, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 150, 156, 189;
  background-color: rgba(150, 156, 189, 0.1);
  border-bottom-color: rgba(150, 156, 189, 0.25);
  border-left-color: rgba(150, 156, 189, 0.25);
  border-right-color: rgba(150, 156, 189, 0.25);
  border-top-color: rgba(150, 156, 189, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 98, 170, 155;
  background-color: rgba(98, 170, 155, 0.1);
  border-bottom-color: rgba(98, 170, 155, 0.25);
  border-left-color: rgba(98, 170, 155, 0.25);
  border-right-color: rgba(98, 170, 155, 0.25);
  border-top-color: rgba(98, 170, 155, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 14, 191, 255;
  background-color: rgba(14, 191, 255, 0.1);
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 212, 103;
  background-color: rgba(255, 212, 103, 0.1);
  border-bottom-color: rgba(255, 212, 103, 0.25);
  border-left-color: rgba(255, 212, 103, 0.25);
  border-right-color: rgba(255, 212, 103, 0.25);
  border-top-color: rgba(255, 212, 103, 0.25);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(192, 208, 223);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
  border-right-color: rgb(192, 208, 223);
  border-right-width: 2px;
  border-top-color: rgb(192, 208, 223);
  border-top-width: 2px;
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(192, 208, 223);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
  border-right-color: rgb(192, 208, 223);
  border-right-width: 2px;
  border-top-color: rgb(192, 208, 223);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(192, 208, 223);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
  border-right-color: rgb(192, 208, 223);
  border-right-width: 2px;
  border-top-color: rgb(192, 208, 223);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(254, 254, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(192, 208, 223);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(98, 170, 155, 0.25);
  border-bottom-color: rgba(0, 178, 255, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 178, 255, 0.15);
  border-right-color: rgba(0, 178, 255, 0.15);
  border-top-color: rgba(0, 178, 255, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(98, 170, 155);
}

html[saved-theme="light"] body h1 {
  color: rgb(138, 186, 205);
}

html[saved-theme="light"] body h2 {
  color: rgb(138, 186, 205);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(138, 186, 205);
}

html[saved-theme="light"] body h3 {
  color: rgb(138, 186, 205);
}

html[saved-theme="light"] body h4 {
  color: rgb(138, 186, 205);
}

html[saved-theme="light"] body h5 {
  color: rgb(138, 186, 205);
}

html[saved-theme="light"] body h6 {
  color: rgb(138, 186, 205);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 14, 191, 255;
  border-bottom-color: rgba(14, 191, 255, 0.25);
  border-left-color: rgba(14, 191, 255, 0.25);
  border-right-color: rgba(14, 191, 255, 0.25);
  border-top-color: rgba(14, 191, 255, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(254, 254, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 254, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(192, 208, 223);
  border-bottom-color: rgb(255, 32, 144);
  border-left-color: rgb(255, 32, 144);
  border-right-color: rgb(255, 32, 144);
  border-top-color: rgb(255, 32, 144);
  color: rgb(255, 32, 144);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(254, 254, 255);
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  border-top-width: 2px;
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(150, 156, 189);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(150, 156, 189);
  text-decoration: rgb(150, 156, 189);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(150, 156, 189);
  stroke: rgb(150, 156, 189);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(192, 208, 223);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(254, 254, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body abbr {
  color: rgb(59, 62, 72);
  text-decoration: underline dotted rgb(59, 62, 72);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(150, 156, 189);
  border-left-color: rgb(150, 156, 189);
  border-right-color: rgb(150, 156, 189);
  border-top-color: rgb(150, 156, 189);
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body kbd {
  background-color: rgba(192, 208, 223, 0.35);
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body sub {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body summary {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body sup {
  color: rgb(59, 62, 72);
}`,
  },
};
