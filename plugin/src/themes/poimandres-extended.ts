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
  --bases-table-cell-background-selected: hsla(200, 100%, 75%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(33, 36, 47) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(200, 100%, 75%) !important;
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
  --blockquote-border-color: hsl(200, 100%, 75%) !important;
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
  --color-accent: hsl(200, 100%, 75%) !important;
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
  --divider-color-hover: hsl(200, 100%, 75%) !important;
  --dropdown-background: rgb(27, 30, 40) !important;
  --dropdown-background-hover: rgb(27, 30, 40) !important;
  --embed-background: rgb(27, 30, 40) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(33, 36, 47), inset 0 0 0 1px rgb(33, 36, 47) !important;
  --embed-border-start: 2px solid hsl(200, 100%, 75%) !important;
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
  --interactive-accent: hsl(200, 100%, 75%) !important;
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
  --link-unresolved-decoration-color: hsla(200, 100%, 75%, 0.3) !important;
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
  --nav-item-background-selected: hsla(200, 100%, 75%, 0.15) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(200, 100%, 75%) !important;
  --tab-text-color: rgb(118, 124, 157) !important;
  --tab-text-color-active: rgb(118, 124, 157) !important;
  --tab-text-color-focused: rgb(118, 124, 157) !important;
  --tab-text-color-focused-active: rgba(208, 103, 157, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(208, 103, 157) !important;
  --tab-text-color-focused-highlighted: rgb(173, 215, 255) !important;
  --table-add-button-border-color: rgb(33, 36, 47) !important;
  --table-border-color: rgb(33, 36, 47) !important;
  --table-drag-handle-background-active: hsl(200, 100%, 75%) !important;
  --table-drag-handle-color: rgb(118, 124, 157) !important;
  --table-drag-handle-color-active: rgb(27, 30, 40) !important;
  --table-header-background: rgb(32, 36, 48) !important;
  --table-header-background-hover: rgb(32, 36, 48) !important;
  --table-header-border-color: rgb(33, 36, 47) !important;
  --table-header-color: rgb(166, 172, 205) !important;
  --table-selection: hsla(200, 100%, 75%, 0.1) !important;
  --table-selection-border-color: hsl(200, 100%, 75%) !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(95, 179, 161, 0.25) !important;
  --tag-background-hover: rgba(173, 215, 255, 0.15) !important;
  --tag-border-color: hsla(200, 100%, 75%, 0.15) !important;
  --tag-border-color-hover: hsla(200, 100%, 75%, 0.15) !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(33, 36, 47);
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(27, 30, 40);
  border-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(33, 36, 47);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(95, 179, 161, 0.25);
  border-radius: 4px;
  color: rgb(95, 179, 161);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(118, 124, 157);
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
  text-decoration-color: rgba(137, 221, 255, 0.65);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgba(137, 221, 255, 0.65);
  outline: rgba(137, 221, 255, 0.65) none 0px;
  text-decoration-color: rgba(137, 221, 255, 0.65);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 250, 194, 0.25);
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body del {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(93, 228, 199);
  border-color: rgb(93, 228, 199);
}

html[saved-theme="dark"] body p {
  color: rgb(118, 124, 157);
  outline: rgb(118, 124, 157) none 0px;
  text-decoration-color: rgb(118, 124, 157);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgba(95, 179, 161, 0.85);
  outline: rgba(95, 179, 161, 0.85) none 0px;
  text-decoration-color: rgba(95, 179, 161, 0.85);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(173, 215, 255);
  outline: rgb(173, 215, 255) none 0px;
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
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(118, 124, 157);
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
  border-bottom-color: rgb(173, 215, 255);
  border-left-color: rgb(173, 215, 255);
  border-right-color: rgb(173, 215, 255);
  border-top-color: rgb(173, 215, 255);
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
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(118, 124, 157);
  border-left-color: rgb(118, 124, 157);
  border-right-color: rgb(118, 124, 157);
  border-top-color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
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
  color: rgb(255, 250, 194);
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
  color: rgb(240, 135, 189);
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
  color: rgb(240, 135, 189);
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
  color: rgb(255, 250, 194);
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
  color: rgb(255, 250, 194);
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
  color: rgb(173, 215, 255);
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
  color: rgb(240, 135, 189);
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
  color: rgb(173, 215, 255);
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
  color: rgb(208, 103, 157);
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
  color: rgb(208, 103, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Z%22/%3E%3C/g%3E%3C/svg%3E");
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
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(255, 250, 194);
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
  color: rgb(208, 103, 157);
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
  color: rgb(93, 228, 199);
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
  color: rgb(93, 228, 199);
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
  color: rgb(93, 228, 199);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(173, 215, 255);
  border-left-color: rgb(173, 215, 255);
  border-right-color: rgb(173, 215, 255);
  border-top-color: rgb(173, 215, 255);
  color: rgb(173, 215, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(173, 215, 255);
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(118, 124, 157);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(33, 36, 47);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(166, 172, 205);
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(95, 179, 161, 0.25);
  border-bottom-color: rgba(128, 213, 255, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(128, 213, 255, 0.15);
  border-right-color: rgba(128, 213, 255, 0.15);
  border-top-color: rgba(128, 213, 255, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(95, 179, 161);
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
  --bases-table-cell-background-selected: hsla(198, 100%, 50%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(192, 208, 223) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(198, 100%, 50%) !important;
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
  --blockquote-border-color: hsl(198, 100%, 50%) !important;
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
  --color-accent: hsl(198, 100%, 50%) !important;
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
  --divider-color-hover: hsl(198, 100%, 50%) !important;
  --dropdown-background: rgb(254, 254, 255) !important;
  --dropdown-background-hover: rgb(254, 254, 255) !important;
  --embed-background: rgb(254, 254, 255) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(192, 208, 223), inset 0 0 0 1px rgb(192, 208, 223) !important;
  --embed-border-start: 2px solid hsl(198, 100%, 50%) !important;
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
  --interactive-accent: hsl(198, 100%, 50%) !important;
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
  --link-unresolved-decoration-color: hsla(198, 100%, 50%, 0.3) !important;
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
  --nav-item-background-selected: hsla(198, 100%, 50%, 0.15) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(198, 100%, 50%) !important;
  --tab-text-color: rgb(192, 208, 223) !important;
  --tab-text-color-active: rgb(150, 156, 189) !important;
  --tab-text-color-focused: rgb(150, 156, 189) !important;
  --tab-text-color-focused-active: rgba(255, 32, 144, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(255, 32, 144) !important;
  --tab-text-color-focused-highlighted: rgb(14, 191, 255) !important;
  --table-add-button-border-color: rgb(192, 208, 223) !important;
  --table-border-color: rgb(192, 208, 223) !important;
  --table-drag-handle-background-active: hsl(198, 100%, 50%) !important;
  --table-drag-handle-color: rgb(192, 208, 223) !important;
  --table-drag-handle-color-active: rgb(254, 254, 255) !important;
  --table-header-background: rgb(192, 208, 223) !important;
  --table-header-background-hover: rgb(192, 208, 223) !important;
  --table-header-border-color: rgb(192, 208, 223) !important;
  --table-header-color: rgb(59, 62, 72) !important;
  --table-selection: hsla(198, 100%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(198, 100%, 50%) !important;
  --table-width: 88cqw !important;
  --tag-background: rgba(98, 170, 155, 0.25) !important;
  --tag-background-hover: rgba(14, 191, 255, 0.15) !important;
  --tag-border-color: hsla(198, 100%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(198, 100%, 50%, 0.15) !important;
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

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(192, 208, 223);
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(254, 254, 255);
  border-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(192, 208, 223);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(150, 156, 189);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(98, 170, 155, 0.25);
  border-radius: 4px;
  color: rgb(98, 170, 155);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(150, 156, 189);
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
  text-decoration-color: rgba(98, 170, 155, 0.72);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgba(98, 170, 155, 0.72);
  outline: rgba(98, 170, 155, 0.72) none 0px;
  text-decoration-color: rgba(98, 170, 155, 0.72);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 212, 103, 0.25);
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body del {
  color: rgb(59, 62, 72);
  outline: rgb(59, 62, 72) none 0px;
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(192, 208, 223);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(1, 218, 178);
  border-color: rgb(1, 218, 178);
}

html[saved-theme="light"] body p {
  color: rgb(150, 156, 189);
  outline: rgb(150, 156, 189) none 0px;
  text-decoration-color: rgb(150, 156, 189);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgba(98, 170, 155, 0.85);
  outline: rgba(98, 170, 155, 0.85) none 0px;
  text-decoration-color: rgba(98, 170, 155, 0.85);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(14, 191, 255);
  outline: rgb(14, 191, 255) none 0px;
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
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body ul > li {
  color: rgb(59, 62, 72);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(59, 62, 72);
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(192, 208, 223);
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
  border-bottom-color: rgb(138, 186, 205);
  border-left-color: rgb(138, 186, 205);
  border-right-color: rgb(138, 186, 205);
  border-top-color: rgb(138, 186, 205);
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
  border-left-color: rgb(59, 62, 72);
  border-right-color: rgb(59, 62, 72);
  border-top-color: rgb(59, 62, 72);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(192, 208, 223);
  border-left-color: rgb(192, 208, 223);
  border-right-color: rgb(192, 208, 223);
  border-top-color: rgb(192, 208, 223);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(59, 62, 72);
  text-decoration-color: rgb(59, 62, 72);
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
  color: rgb(255, 212, 103);
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
  color: rgb(235, 131, 148);
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
  color: rgb(235, 131, 148);
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
  color: rgb(255, 212, 103);
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
  color: rgb(255, 212, 103);
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
  color: rgb(14, 191, 255);
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
  color: rgb(235, 131, 148);
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
  color: rgb(14, 191, 255);
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
  color: rgb(255, 32, 144);
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
  color: rgb(255, 32, 144);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Z%22/%3E%3C/g%3E%3C/svg%3E");
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
  color: rgb(14, 191, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(255, 212, 103);
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
  color: rgb(255, 32, 144);
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
  color: rgb(1, 218, 178);
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
  color: rgb(1, 218, 178);
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
  color: rgb(1, 218, 178);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(14, 191, 255);
  border-left-color: rgb(14, 191, 255);
  border-right-color: rgb(14, 191, 255);
  border-top-color: rgb(14, 191, 255);
  color: rgb(14, 191, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(14, 191, 255);
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(150, 156, 189);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(192, 208, 223);
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(59, 62, 72);
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(98, 170, 155, 0.25);
  border-bottom-color: rgba(0, 178, 255, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 178, 255, 0.15);
  border-right-color: rgba(0, 178, 255, 0.15);
  border-top-color: rgba(0, 178, 255, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(98, 170, 155);
}`,
  },
};
