import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "fastppuccin",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["noto-serif"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anp-bold-color: 243, 139, 168 !important;
  --anp-header-font: "Noto Serif" !important;
  --anp-header-margin-value: 15px !important;
  --anp-highlight-color: 249, 226, 175 !important;
  --anp-italic-color: 166, 227, 161 !important;
  --anp-preview-width-max: 800px !important;
  --anp-preview-width-pct: 95% !important;
  --anp-rainbow-folder-bg-opacity: 1 !important;
  --anp-rainbow-folder-border-opacity: 1 !important;
  --anp-rainbow-folder-collapse-border-custom: #00000044 !important;
  --anp-speech-bubble-opacity: 0.9 !important;
  --anp-table-width-pct: 100% !important;
  --background-modifier-active: rgba(245, 224, 220, 0.1) !important;
  --background-modifier-active-hover: rgba(245, 224, 220, 0.15) !important;
  --background-modifier-border: rgb(49, 50, 68) !important;
  --background-modifier-border-focus: rgb(86, 89, 112) !important;
  --background-modifier-border-hover: rgb(67, 70, 90) !important;
  --background-modifier-cover: rgba(24, 24, 37, 0.4) !important;
  --background-modifier-error: rgb(243, 139, 168) !important;
  --background-modifier-error-hover: rgba(243, 139, 168, 0.9) !important;
  --background-modifier-error-rgb: 243, 139, 168 !important;
  --background-modifier-form-field: rgba(17, 17, 27, 0.3) !important;
  --background-modifier-form-field-hover: rgba(17, 17, 27, 0.3) !important;
  --background-modifier-hover: rgba(198, 208, 245, 0.075) !important;
  --background-modifier-message: rgba(17, 17, 27, 0.9) !important;
  --background-modifier-success: rgb(166, 227, 161) !important;
  --background-modifier-success-hover: rgba(166, 227, 161, 0.9) !important;
  --background-modifier-success-rgb: 166, 227, 161 !important;
  --background-primary: rgb(30, 30, 46) !important;
  --background-primary-alt: rgb(24, 24, 37) !important;
  --background-secondary: rgb(24, 24, 37) !important;
  --background-secondary-alt: rgb(17, 17, 27) !important;
  --bases-cards-background: rgb(30, 30, 46) !important;
  --bases-cards-cover-background: rgb(24, 24, 37) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(49, 50, 68) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(67, 70, 90) !important;
  --bases-embed-border-color: rgb(49, 50, 68) !important;
  --bases-group-heading-property-color: rgb(142, 149, 179) !important;
  --bases-table-border-color: rgb(49, 50, 68) !important;
  --bases-table-cell-background-active: rgb(30, 30, 46) !important;
  --bases-table-cell-background-disabled: rgb(24, 24, 37) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(86, 89, 112) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 224, 220) !important;
  --bases-table-group-background: rgb(24, 24, 37) !important;
  --bases-table-header-background: rgb(30, 30, 46) !important;
  --bases-table-header-background-hover: rgba(198, 208, 245, 0.075) !important;
  --bases-table-header-color: rgb(142, 149, 179) !important;
  --bases-table-summary-background: rgb(30, 30, 46) !important;
  --bases-table-summary-background-hover: rgba(198, 208, 245, 0.075) !important;
  --blockquote-background-color: rgba(17, 17, 27, 0.5) !important;
  --blockquote-border-color: rgb(245, 224, 220) !important;
  --blur-background: color-mix(in srgb, rgb(49, 50, 68) 65%, transparent) linear-gradient(rgb(49, 50, 68), color-mix(in srgb, rgb(49, 50, 68) 65%, transparent)) !important;
  --callout-blend-mode: none;
  --callout-bug: 243, 139, 168;
  --callout-content-padding: 8px;
  --callout-default: 135, 176, 249;
  --callout-error: 243, 139, 168;
  --callout-example: 180, 190, 254;
  --callout-fail: 243, 139, 168;
  --callout-important: 137, 220, 235;
  --callout-info: 135, 176, 249;
  --callout-padding: 0;
  --callout-question: 250, 179, 135;
  --callout-success: 166, 227, 161;
  --callout-summary: 137, 220, 235;
  --callout-tip: 137, 220, 235;
  --callout-title-padding: 8px;
  --callout-todo: 135, 176, 249;
  --callout-warning: 250, 179, 135;
  --canvas-background: rgb(30, 30, 46) !important;
  --canvas-card-label-color: rgb(161, 168, 201) !important;
  --canvas-color: 105, 109, 134 !important;
  --canvas-color-1: 243, 139, 168 !important;
  --canvas-color-2: 250, 179, 135 !important;
  --canvas-color-3: 249, 226, 175 !important;
  --canvas-color-4: 166, 227, 161 !important;
  --canvas-color-5: 137, 220, 235 !important;
  --canvas-color-6: 180, 190, 254 !important;
  --canvas-dot-pattern: rgb(67, 70, 90) !important;
  --card-background-color: rgb(17, 17, 27) !important;
  --card-foreground-color: rgb(30, 30, 46) !important;
  --caret-color: rgb(198, 208, 245) !important;
  --checkbox-border-color: rgb(161, 168, 201) !important;
  --checkbox-border-color-hover: rgb(142, 149, 179) !important;
  --checkbox-color: rgb(245, 224, 220) !important;
  --checkbox-color-hover: rgba(245, 224, 220, 0.9) !important;
  --checkbox-marker-color: rgb(30, 30, 46) !important;
  --checklist-done-color: rgb(142, 149, 179) !important;
  --code-background: rgb(17, 17, 27) !important;
  --code-border-color: rgb(49, 50, 68) !important;
  --code-bracket-background: rgba(198, 208, 245, 0.075) !important;
  --code-comment: rgb(161, 168, 201) !important;
  --code-function: rgb(249, 226, 175) !important;
  --code-important: rgb(250, 179, 135) !important;
  --code-keyword: rgb(245, 194, 231) !important;
  --code-normal: rgb(198, 208, 245) !important;
  --code-operator: rgb(243, 139, 168) !important;
  --code-property: rgb(137, 220, 235) !important;
  --code-punctuation: rgb(142, 149, 179) !important;
  --code-string: rgb(166, 227, 161) !important;
  --code-tag: rgb(243, 139, 168) !important;
  --code-value: rgb(180, 190, 254) !important;
  --collapse-icon-color: rgb(161, 168, 201) !important;
  --collapse-icon-color-collapsed: rgb(245, 224, 220) !important;
  --color-accent: rgb(245, 224, 220) !important;
  --color-accent-1: rgb(245, 224, 220) !important;
  --color-accent-2: rgba(245, 224, 220, 0.9) !important;
  --color-base-00: rgb(17, 17, 27) !important;
  --color-base-10: rgb(24, 24, 37) !important;
  --color-base-100: rgb(198, 208, 245) !important;
  --color-base-20: rgb(30, 30, 46) !important;
  --color-base-25: rgb(49, 50, 68) !important;
  --color-base-30: rgb(67, 70, 90) !important;
  --color-base-35: rgb(86, 89, 112) !important;
  --color-base-40: rgb(105, 109, 134) !important;
  --color-base-50: rgb(123, 129, 157) !important;
  --color-base-60: rgb(142, 149, 179) !important;
  --color-base-70: rgb(161, 168, 201) !important;
  --color-blue: rgb(135, 176, 249) !important;
  --color-blue-rgb: 135, 176, 249 !important;
  --color-cyan: rgb(137, 220, 235) !important;
  --color-cyan-rgb: 137, 220, 235 !important;
  --color-green: rgb(166, 227, 161) !important;
  --color-green-rgb: 166, 227, 161 !important;
  --color-orange: rgb(250, 179, 135) !important;
  --color-orange-rgb: 250, 179, 135 !important;
  --color-pink: rgb(245, 194, 231) !important;
  --color-pink-rgb: 245, 194, 231 !important;
  --color-purple: rgb(180, 190, 254) !important;
  --color-purple-rgb: 180, 190, 254 !important;
  --color-red: rgb(243, 139, 168) !important;
  --color-red-rgb: 243, 139, 168 !important;
  --color-yellow: rgb(249, 226, 175) !important;
  --color-yellow-rgb: 249, 226, 175 !important;
  --ctp-accent: 245, 224, 220 !important;
  --ctp-base: 30, 30, 46 !important;
  --ctp-blue: 135, 176, 249 !important;
  --ctp-crust: 17, 17, 27 !important;
  --ctp-flamingo: 242, 205, 205 !important;
  --ctp-green: 166, 227, 161 !important;
  --ctp-lavender: 180, 190, 254 !important;
  --ctp-mantle: 24, 24, 37 !important;
  --ctp-maroon: 235, 160, 172 !important;
  --ctp-mauve: 203, 166, 247 !important;
  --ctp-overlay0: 105, 109, 134 !important;
  --ctp-overlay1: 123, 129, 157 !important;
  --ctp-overlay2: 142, 149, 179 !important;
  --ctp-peach: 250, 179, 135 !important;
  --ctp-pink: 245, 194, 231 !important;
  --ctp-red: 243, 139, 168 !important;
  --ctp-rosewater: 245, 224, 220 !important;
  --ctp-sapphire: 116, 199, 236 !important;
  --ctp-sky: 137, 220, 235 !important;
  --ctp-subtext0: 161, 168, 201 !important;
  --ctp-subtext1: 179, 188, 223 !important;
  --ctp-surface0: 49, 50, 68 !important;
  --ctp-surface1: 67, 70, 90 !important;
  --ctp-surface2: 86, 89, 112 !important;
  --ctp-teal: 148, 226, 213 !important;
  --ctp-text: 198, 208, 245 !important;
  --ctp-yellow: 249, 226, 175 !important;
  --dark: rgb(198, 208, 245) !important;
  --darkgray: rgb(198, 208, 245) !important;
  --divider-color: rgb(49, 50, 68) !important;
  --divider-color-hover: rgb(245, 224, 220) !important;
  --drag-ghost-background: rgb(198, 208, 245) !important;
  --drag-ghost-text-color: rgb(17, 17, 27) !important;
  --dropdown-background: rgb(49, 50, 68) !important;
  --dropdown-background-hover: rgb(67, 70, 90) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(245, 224, 220) !important;
  --file-header-background: rgb(30, 30, 46) !important;
  --file-header-background-focused: rgb(30, 30, 46) !important;
  --flair-background: rgb(49, 50, 68) !important;
  --flair-color: rgb(198, 208, 245) !important;
  --footnote-divider-color: rgb(49, 50, 68) !important;
  --footnote-id-color: rgb(142, 149, 179) !important;
  --footnote-id-color-no-occurrences: rgb(161, 168, 201) !important;
  --footnote-input-background-active: rgba(198, 208, 245, 0.075) !important;
  --graph-line: rgb(86, 89, 112) !important;
  --graph-node: rgb(142, 149, 179) !important;
  --graph-node-attachment: rgb(249, 226, 175) !important;
  --graph-node-focused: rgb(245, 224, 220) !important;
  --graph-node-tag: rgb(166, 227, 161) !important;
  --graph-node-unresolved: rgb(161, 168, 201) !important;
  --graph-text: rgb(198, 208, 245) !important;
  --gray: rgb(142, 149, 179) !important;
  --h1-color: rgb(243, 139, 168) !important;
  --h2-color: rgb(250, 179, 135) !important;
  --h3-color: rgb(166, 227, 161) !important;
  --h4-color: rgb(148, 226, 213) !important;
  --h5-color: rgb(180, 190, 254) !important;
  --h6-color: rgb(203, 166, 247) !important;
  --heading-formatting: rgb(245, 224, 220) !important;
  --highlight: rgba(249, 226, 175, 0.2) !important;
  --highlight-mix-blend-mode: none !important;
  --hr-color: rgb(49, 50, 68) !important;
  --icon-color: rgb(142, 149, 179) !important;
  --icon-color-active: rgb(245, 224, 220) !important;
  --icon-color-focused: rgb(245, 224, 220) !important;
  --icon-color-hover: rgb(142, 149, 179) !important;
  --indentation-guide-color: rgba(198, 208, 245, 0.12) !important;
  --indentation-guide-color-active: rgba(198, 208, 245, 0.3) !important;
  --inline-title-color: rgb(198, 208, 245) !important;
  --input-date-separator: rgb(161, 168, 201) !important;
  --input-placeholder-color: rgb(161, 168, 201) !important;
  --interactive-accent: rgb(245, 224, 220) !important;
  --interactive-accent-hover: rgba(245, 224, 220, 0.9) !important;
  --interactive-accent-rgb: 245, 224, 220 !important;
  --interactive-hover: rgb(67, 70, 90) !important;
  --interactive-normal: rgb(49, 50, 68) !important;
  --interactive-success: rgb(166, 227, 161) !important;
  --light: rgb(30, 30, 46) !important;
  --lightgray: rgb(24, 24, 37) !important;
  --link-color: rgb(245, 224, 220) !important;
  --link-color-hover: rgb(245, 224, 220) !important;
  --link-external-color: rgb(245, 224, 220) !important;
  --link-external-color-hover: rgb(245, 224, 220) !important;
  --link-unresolved-color: rgb(245, 224, 220) !important;
  --link-unresolved-decoration-color: rgba(245, 224, 220, 0.3) !important;
  --list-marker-color: rgb(161, 168, 201) !important;
  --list-marker-color-collapsed: rgb(245, 224, 220) !important;
  --list-marker-color-hover: rgb(142, 149, 179) !important;
  --max-width-image: 90% !important;
  --menu-background: rgb(24, 24, 37) !important;
  --menu-border-color: rgb(67, 70, 90) !important;
  --menu-shadow: 0px 1px 2px rgba(17, 17, 27, 0.121),
      0px 3.4px 6.7px rgba(17, 17, 27, 0.179),
      0px 15px 30px rgba(17, 17, 27, 0.3) !important;
  --metadata-border-color: rgb(49, 50, 68) !important;
  --metadata-divider-color: rgb(49, 50, 68) !important;
  --metadata-input-background-active: rgba(198, 208, 245, 0.075) !important;
  --metadata-input-text-color: rgb(198, 208, 245) !important;
  --metadata-label-background-active: rgba(198, 208, 245, 0.075) !important;
  --metadata-label-text-color: rgb(142, 149, 179) !important;
  --metadata-label-text-color-hover: rgb(142, 149, 179) !important;
  --metadata-property-background-active: rgba(198, 208, 245, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(86, 89, 112) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(67, 70, 90) !important;
  --min-width-image: 50% !important;
  --modal-background: rgb(30, 30, 46) !important;
  --modal-border-color: rgb(49, 50, 68) !important;
  --mono-rgb-0: 17, 17, 27 !important;
  --mono-rgb-100: 198, 208, 245 !important;
  --nav-collapse-icon-color: rgb(161, 168, 201) !important;
  --nav-collapse-icon-color-collapsed: rgb(161, 168, 201) !important;
  --nav-heading-color: rgb(198, 208, 245) !important;
  --nav-heading-color-collapsed: rgb(161, 168, 201) !important;
  --nav-heading-color-collapsed-hover: rgb(142, 149, 179) !important;
  --nav-heading-color-hover: rgb(198, 208, 245) !important;
  --nav-indentation-guide-color: rgb(30, 30, 46) !important;
  --nav-item-background-active: rgba(198, 208, 245, 0.075) !important;
  --nav-item-background-hover: rgba(198, 208, 245, 0.075) !important;
  --nav-item-background-selected: rgba(245, 224, 220, 0.2) !important;
  --nav-item-color: rgb(142, 149, 179) !important;
  --nav-item-color-active: rgb(198, 208, 245) !important;
  --nav-item-color-highlighted: rgb(245, 224, 220) !important;
  --nav-item-color-hover: rgb(198, 208, 245) !important;
  --nav-item-color-selected: rgb(198, 208, 245) !important;
  --nav-tag-color: rgb(161, 168, 201) !important;
  --nav-tag-color-active: rgb(142, 149, 179) !important;
  --nav-tag-color-hover: rgb(142, 149, 179) !important;
  --pdf-background: rgb(30, 30, 46) !important;
  --pdf-dark-opacity: 1 !important;
  --pdf-page-background: rgb(30, 30, 46) !important;
  --pdf-shadow: 0 0 0 1px rgb(49, 50, 68) !important;
  --pdf-sidebar-background: rgb(30, 30, 46) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(49, 50, 68) !important;
  --pill-border-color: rgb(49, 50, 68) !important;
  --pill-border-color-hover: rgb(67, 70, 90) !important;
  --pill-color: rgb(142, 149, 179) !important;
  --pill-color-hover: rgb(198, 208, 245) !important;
  --pill-color-remove: rgb(161, 168, 201) !important;
  --pill-color-remove-hover: rgb(245, 224, 220) !important;
  --prompt-background: rgb(30, 30, 46) !important;
  --prompt-border-color: rgb(105, 109, 134) !important;
  --raised-background: color-mix(in srgb, rgb(49, 50, 68) 65%, transparent) linear-gradient(rgb(49, 50, 68), color-mix(in srgb, rgb(49, 50, 68) 65%, transparent)) !important;
  --ribbon-background: rgb(24, 24, 37) !important;
  --ribbon-background-collapsed: rgb(30, 30, 46) !important;
  --scrollbar-active-thumb-bg: rgba(198, 208, 245, 0.2) !important;
  --scrollbar-bg: rgba(198, 208, 245, 0.05) !important;
  --scrollbar-thumb-bg: rgba(198, 208, 245, 0.1) !important;
  --search-clear-button-color: rgb(142, 149, 179) !important;
  --search-icon-color: rgb(142, 149, 179) !important;
  --search-result-background: rgb(30, 30, 46) !important;
  --secondary: rgb(245, 224, 220) !important;
  --setting-group-heading-color: rgb(198, 208, 245) !important;
  --setting-items-background: rgb(24, 24, 37) !important;
  --setting-items-border-color: rgb(49, 50, 68) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(17, 17, 27, 0.071),
      0px 6.3px 24.7px rgba(17, 17, 27, 0.112),
      0px 30px 90px rgba(17, 17, 27, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(17, 17, 27, 0.121),
      0px 3.4px 6.7px rgba(17, 17, 27, 0.179),
      0px 15px 30px rgba(17, 17, 27, 0.3) !important;
  --slider-thumb-border-color: rgb(67, 70, 90) !important;
  --slider-track-background: rgb(49, 50, 68) !important;
  --status-bar-background: rgb(24, 24, 37) !important;
  --status-bar-border-color: rgb(49, 50, 68) !important;
  --status-bar-text-color: rgb(142, 149, 179) !important;
  --suggestion-background: rgb(30, 30, 46) !important;
  --swatch-shadow: inset 0 0 0 1px rgba(198, 208, 245, 0.15) !important;
  --sync-avatar-color-1: rgb(243, 139, 168) !important;
  --sync-avatar-color-2: rgb(250, 179, 135) !important;
  --sync-avatar-color-3: rgb(249, 226, 175) !important;
  --sync-avatar-color-4: rgb(166, 227, 161) !important;
  --sync-avatar-color-5: rgb(137, 220, 235) !important;
  --sync-avatar-color-6: rgb(135, 176, 249) !important;
  --sync-avatar-color-7: rgb(180, 190, 254) !important;
  --sync-avatar-color-8: rgb(245, 194, 231) !important;
  --tab-background-active: rgb(30, 30, 46) !important;
  --tab-container-background: rgb(24, 24, 37) !important;
  --tab-divider-color: rgb(67, 70, 90) !important;
  --tab-inactive-color: rgb(24, 24, 37) !important;
  --tab-outline-color: rgb(49, 50, 68) !important;
  --tab-stacked-pane-width: 700px !important;
  --tab-switcher-background: rgb(24, 24, 37) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(24, 24, 37), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(198, 208, 245, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 224, 220) !important;
  --tab-text-color: rgb(161, 168, 201) !important;
  --tab-text-color-active: rgb(142, 149, 179) !important;
  --tab-text-color-focused: rgb(142, 149, 179) !important;
  --tab-text-color-focused-active: rgb(142, 149, 179) !important;
  --tab-text-color-focused-active-current: rgb(198, 208, 245) !important;
  --tab-text-color-focused-highlighted: rgb(245, 224, 220) !important;
  --table-add-button-border-color: rgb(49, 50, 68) !important;
  --table-border-color: rgb(49, 50, 68) !important;
  --table-drag-handle-background-active: rgb(245, 224, 220) !important;
  --table-drag-handle-color: rgb(161, 168, 201) !important;
  --table-drag-handle-color-active: rgb(30, 30, 46) !important;
  --table-header-border-color: rgb(49, 50, 68) !important;
  --table-header-color: rgb(198, 208, 245) !important;
  --table-selection-blend-mode: none !important;
  --table-selection-border-color: rgb(245, 224, 220) !important;
  --tag-background: rgba(245, 224, 220, 0.1) !important;
  --tag-background-hover: rgba(245, 224, 220, 0.2) !important;
  --tag-border-color: rgba(245, 224, 220, 0.15) !important;
  --tag-border-color-hover: rgba(245, 224, 220, 0.15) !important;
  --tag-color: rgb(245, 224, 220) !important;
  --tag-color-hover: rgb(245, 224, 220) !important;
  --tertiary: rgb(245, 224, 220) !important;
  --text-accent: rgb(245, 224, 220) !important;
  --text-accent-hover: rgb(245, 224, 220) !important;
  --text-error: rgb(243, 139, 168) !important;
  --text-error-hover: rgba(243, 139, 168, 0.8) !important;
  --text-faint: rgb(161, 168, 201) !important;
  --text-highlight-bg: rgba(249, 226, 175, 0.2) !important;
  --text-highlight-bg-active: rgba(249, 226, 175, 0.4) !important;
  --text-muted: rgb(142, 149, 179) !important;
  --text-muted-rgb: 142, 149, 179 !important;
  --text-normal: rgb(198, 208, 245) !important;
  --text-on-accent: rgb(30, 30, 46) !important;
  --text-selection: rgba(245, 224, 220, 0.25) !important;
  --text-success: rgb(166, 227, 161) !important;
  --text-warning: rgb(250, 179, 135) !important;
  --textHighlight: rgba(249, 226, 175, 0.2) !important;
  --titlebar-background: rgb(24, 24, 37) !important;
  --titlebar-background-focused: rgb(17, 17, 27) !important;
  --titlebar-border-color: rgb(49, 50, 68) !important;
  --titlebar-text-color: rgb(142, 149, 179) !important;
  --titlebar-text-color-focused: rgb(245, 224, 220) !important;
  --vault-profile-color: rgb(198, 208, 245) !important;
  --vault-profile-color-hover: rgb(198, 208, 245) !important;
  --width-image-gallery: 200px !important;
  --workspace-background-translucent: rgba(17, 17, 27, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 37);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 30, 46);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 24, 37);
  border-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(49, 50, 68);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(245, 224, 220, 0.1);
  color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 37);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(49, 50, 68);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 37);
  border-left-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 30, 46);
  color: rgb(198, 208, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(249, 226, 175, 0.2);
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(245, 224, 220);
  border-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body p {
  color: rgb(142, 149, 179);
  outline: rgb(142, 149, 179) none 0px;
  text-decoration-color: rgb(142, 149, 179);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(245, 224, 220);
  outline: rgb(245, 224, 220) none 0px;
  text-decoration-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 224, 220);
  outline: rgb(245, 224, 220) none 0px;
  text-decoration-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(245, 224, 220);
  outline: rgb(245, 224, 220) none 0px;
  text-decoration: underline rgba(245, 224, 220, 0.3);
  text-decoration-color: rgba(245, 224, 220, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(17, 17, 27, 0.5);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(249, 226, 175);
  border-left-color: rgb(249, 226, 175);
  border-right-color: rgb(249, 226, 175);
  border-top-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(243, 139, 168);
  border-left-color: rgb(243, 139, 168);
  border-right-color: rgb(243, 139, 168);
  border-top-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(24, 24, 37);
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(245, 224, 220);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(161, 168, 201);
  border-left-color: rgb(161, 168, 201);
  border-right-color: rgb(161, 168, 201);
  border-top-color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(142, 149, 179);
  text-decoration: line-through;
  text-decoration-color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 179, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(161, 168, 201);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 226, 213);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 199, 236);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 176, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 160, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(203, 166, 247);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(135, 176, 249);
  border-left-color: rgb(135, 176, 249);
  border-right-color: rgb(135, 176, 249);
  border-top-color: rgb(135, 176, 249);
  color: rgb(135, 176, 249);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(135, 176, 249);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 137, 220, 235;
  background-color: rgba(137, 220, 235, 0.1);
  border-bottom-color: rgba(137, 220, 235, 0.25);
  border-left-color: rgba(137, 220, 235, 0.25);
  border-right-color: rgba(137, 220, 235, 0.25);
  border-top-color: rgba(137, 220, 235, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.1);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.1);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 180, 190, 254;
  background-color: rgba(180, 190, 254, 0.1);
  border-bottom-color: rgba(180, 190, 254, 0.25);
  border-left-color: rgba(180, 190, 254, 0.25);
  border-right-color: rgba(180, 190, 254, 0.25);
  border-top-color: rgba(180, 190, 254, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.1);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.25);
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 135, 176, 249;
  background-color: rgba(135, 176, 249, 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 135, 176, 249;
  background-color: rgba(135, 176, 249, 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 250, 179, 135;
  background-color: rgba(250, 179, 135, 0.1);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.25);
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 166, 227, 161;
  background-color: rgba(166, 227, 161, 0.1);
  border-bottom-color: rgba(166, 227, 161, 0.25);
  border-left-color: rgba(166, 227, 161, 0.25);
  border-right-color: rgba(166, 227, 161, 0.25);
  border-top-color: rgba(166, 227, 161, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 137, 220, 235;
  background-color: rgba(137, 220, 235, 0.1);
  border-bottom-color: rgba(137, 220, 235, 0.25);
  border-left-color: rgba(137, 220, 235, 0.25);
  border-right-color: rgba(137, 220, 235, 0.25);
  border-top-color: rgba(137, 220, 235, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 135, 176, 249;
  background-color: rgba(135, 176, 249, 0.1);
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 250, 179, 135;
  background-color: rgba(250, 179, 135, 0.1);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.25);
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
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
  background-color: rgba(17, 17, 27, 0.3);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 30, 46);
  border-bottom-color: rgb(105, 109, 134);
  border-left-color: rgb(105, 109, 134);
  border-right-color: rgb(105, 109, 134);
  border-top-color: rgb(105, 109, 134);
  box-shadow: rgba(17, 17, 27, 0.07) 0px 1.8px 7.3px 0px, rgba(17, 17, 27, 0.114) 0px 6.3px 24.7px 0px, rgba(17, 17, 27, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 208, 245);
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(198, 208, 245, 0.075);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(105, 109, 134);
  border-left-color: rgb(105, 109, 134);
  border-right-color: rgb(105, 109, 134);
  border-top-color: rgb(105, 109, 134);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 37);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(198, 208, 245, 0.075);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(198, 208, 245, 0.075);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 224, 220, 0.1);
  border-bottom-color: rgba(245, 224, 220, 0.15);
  border-left-color: rgba(245, 224, 220, 0.15);
  border-right-color: rgba(245, 224, 220, 0.15);
  border-top-color: rgba(245, 224, 220, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body h1 {
  color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body h2 {
  color: rgb(250, 179, 135);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body h3 {
  color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body h4 {
  color: rgb(148, 226, 213);
}

html[saved-theme="dark"] body h5 {
  color: rgb(180, 190, 254);
}

html[saved-theme="dark"] body h6 {
  color: rgb(203, 166, 247);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 135, 176, 249;
  border-bottom-color: rgba(135, 176, 249, 0.25);
  border-left-color: rgba(135, 176, 249, 0.25);
  border-right-color: rgba(135, 176, 249, 0.25);
  border-top-color: rgba(135, 176, 249, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 30, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 30, 46);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(30, 30, 46);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 208, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 24, 37);
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(142, 149, 179);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 149, 179);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(142, 149, 179);
  stroke: rgb(142, 149, 179);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(161, 168, 201);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(49, 50, 68);
  border-left-color: rgb(49, 50, 68);
  border-right-color: rgb(49, 50, 68);
  border-top-color: rgb(49, 50, 68);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 24, 37);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(17, 17, 27);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(245, 224, 220, 0.1);
  border-bottom-color: rgba(245, 224, 220, 0.15);
  border-left-color: rgba(245, 224, 220, 0.15);
  border-right-color: rgba(245, 224, 220, 0.15);
  border-top-color: rgba(245, 224, 220, 0.15);
  color: rgb(245, 224, 220);
}`,
  },
  light: {
    base: `:root:root {
  --anp-bold-color: 210, 15, 57 !important;
  --anp-header-font: "Noto Serif" !important;
  --anp-header-margin-value: 15px !important;
  --anp-highlight-color: 228, 147, 32 !important;
  --anp-italic-color: 64, 160, 43 !important;
  --anp-preview-width-max: 800px !important;
  --anp-preview-width-pct: 95% !important;
  --anp-rainbow-folder-bg-opacity: 1 !important;
  --anp-rainbow-folder-border-opacity: 1 !important;
  --anp-rainbow-folder-collapse-border-custom: #00000044 !important;
  --anp-speech-bubble-opacity: 0.5 !important;
  --anp-table-width-pct: 100% !important;
  --background-modifier-active: rgba(222, 149, 132, 0.1) !important;
  --background-modifier-active-hover: rgba(222, 149, 132, 0.15) !important;
  --background-modifier-border: rgb(188, 192, 204) !important;
  --background-modifier-border-focus: rgb(156, 160, 176) !important;
  --background-modifier-border-hover: rgb(172, 176, 190) !important;
  --background-modifier-cover: #00000022 !important;
  --background-modifier-error: rgb(210, 15, 57) !important;
  --background-modifier-error-hover: rgba(210, 15, 57, 0.9) !important;
  --background-modifier-error-rgb: 210, 15, 57 !important;
  --background-modifier-form-field: rgba(220, 224, 232, 0.3) !important;
  --background-modifier-form-field-hover: rgba(220, 224, 232, 0.3) !important;
  --background-modifier-hover: rgba(76, 79, 105, 0.075) !important;
  --background-modifier-message: rgba(220, 224, 232, 0.9) !important;
  --background-modifier-success: rgb(64, 160, 43) !important;
  --background-modifier-success-hover: rgba(64, 160, 43, 0.9) !important;
  --background-modifier-success-rgb: 64, 160, 43 !important;
  --background-primary: rgb(239, 241, 245) !important;
  --background-primary-alt: rgb(230, 233, 239) !important;
  --background-secondary: rgb(230, 233, 239) !important;
  --background-secondary-alt: rgb(220, 224, 232) !important;
  --bases-cards-background: rgb(239, 241, 245) !important;
  --bases-cards-cover-background: rgb(230, 233, 239) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(188, 192, 204) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(172, 176, 190) !important;
  --bases-embed-border-color: rgb(188, 192, 204) !important;
  --bases-group-heading-property-color: rgb(124, 127, 147) !important;
  --bases-table-border-color: rgb(188, 192, 204) !important;
  --bases-table-cell-background-active: rgb(239, 241, 245) !important;
  --bases-table-cell-background-disabled: rgb(230, 233, 239) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(156, 160, 176) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(222, 149, 132) !important;
  --bases-table-group-background: rgb(230, 233, 239) !important;
  --bases-table-header-background: rgb(239, 241, 245) !important;
  --bases-table-header-background-hover: rgba(76, 79, 105, 0.075) !important;
  --bases-table-header-color: rgb(124, 127, 147) !important;
  --bases-table-summary-background: rgb(239, 241, 245) !important;
  --bases-table-summary-background-hover: rgba(76, 79, 105, 0.075) !important;
  --blockquote-background-color: rgba(220, 224, 232, 0.5) !important;
  --blockquote-border-color: rgb(222, 149, 132) !important;
  --blur-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent)) !important;
  --callout-blend-mode: none;
  --callout-bug: 210, 15, 57;
  --callout-content-padding: 8px;
  --callout-default: 42, 110, 245;
  --callout-error: 210, 15, 57;
  --callout-example: 114, 135, 253;
  --callout-fail: 210, 15, 57;
  --callout-important: 4, 165, 229;
  --callout-info: 42, 110, 245;
  --callout-padding: 0;
  --callout-question: 254, 100, 11;
  --callout-success: 64, 160, 43;
  --callout-summary: 4, 165, 229;
  --callout-tip: 4, 165, 229;
  --callout-title-padding: 8px;
  --callout-todo: 42, 110, 245;
  --callout-warning: 254, 100, 11;
  --canvas-background: rgb(239, 241, 245) !important;
  --canvas-card-label-color: rgb(108, 111, 133) !important;
  --canvas-color: 156, 160, 176 !important;
  --canvas-color-1: 210, 15, 57 !important;
  --canvas-color-2: 254, 100, 11 !important;
  --canvas-color-3: 228, 147, 32 !important;
  --canvas-color-4: 64, 160, 43 !important;
  --canvas-color-5: 4, 165, 229 !important;
  --canvas-color-6: 114, 135, 253 !important;
  --canvas-dot-pattern: rgb(188, 192, 204) !important;
  --card-background-color: rgb(220, 224, 232) !important;
  --card-foreground-color: rgb(239, 241, 245) !important;
  --caret-color: rgb(76, 79, 105) !important;
  --checkbox-border-color: rgb(108, 111, 133) !important;
  --checkbox-border-color-hover: rgb(124, 127, 147) !important;
  --checkbox-color: rgb(222, 149, 132) !important;
  --checkbox-color-hover: rgba(222, 149, 132, 0.9) !important;
  --checkbox-marker-color: rgb(239, 241, 245) !important;
  --checklist-done-color: rgb(124, 127, 147) !important;
  --code-background: rgb(220, 224, 232) !important;
  --code-border-color: rgb(188, 192, 204) !important;
  --code-bracket-background: rgba(76, 79, 105, 0.075) !important;
  --code-comment: rgb(108, 111, 133) !important;
  --code-function: rgb(228, 147, 32) !important;
  --code-important: rgb(254, 100, 11) !important;
  --code-keyword: rgb(236, 131, 208) !important;
  --code-normal: rgb(76, 79, 105) !important;
  --code-operator: rgb(210, 15, 57) !important;
  --code-property: rgb(4, 165, 229) !important;
  --code-punctuation: rgb(124, 127, 147) !important;
  --code-string: rgb(64, 160, 43) !important;
  --code-tag: rgb(210, 15, 57) !important;
  --code-value: rgb(114, 135, 253) !important;
  --collapse-icon-color: rgb(108, 111, 133) !important;
  --collapse-icon-color-collapsed: rgb(222, 149, 132) !important;
  --color-accent: rgb(222, 149, 132) !important;
  --color-accent-1: rgb(222, 149, 132) !important;
  --color-accent-2: rgba(222, 149, 132, 0.9) !important;
  --color-base-00: rgb(220, 224, 232) !important;
  --color-base-10: rgb(230, 233, 239) !important;
  --color-base-100: rgb(76, 79, 105) !important;
  --color-base-20: rgb(239, 241, 245) !important;
  --color-base-25: rgb(204, 208, 218) !important;
  --color-base-30: rgb(188, 192, 204) !important;
  --color-base-35: rgb(172, 176, 190) !important;
  --color-base-40: rgb(156, 160, 176) !important;
  --color-base-50: rgb(140, 143, 161) !important;
  --color-base-60: rgb(124, 127, 147) !important;
  --color-base-70: rgb(108, 111, 133) !important;
  --color-blue: rgb(42, 110, 245) !important;
  --color-blue-rgb: 42, 110, 245 !important;
  --color-cyan: rgb(4, 165, 229) !important;
  --color-cyan-rgb: 4, 165, 229 !important;
  --color-green: rgb(64, 160, 43) !important;
  --color-green-rgb: 64, 160, 43 !important;
  --color-orange: rgb(254, 100, 11) !important;
  --color-orange-rgb: 254, 100, 11 !important;
  --color-pink: rgb(236, 131, 208) !important;
  --color-pink-rgb: 236, 131, 208 !important;
  --color-purple: rgb(114, 135, 253) !important;
  --color-purple-rgb: 114, 135, 253 !important;
  --color-red: rgb(210, 15, 57) !important;
  --color-red-rgb: 210, 15, 57 !important;
  --color-yellow: rgb(228, 147, 32) !important;
  --color-yellow-rgb: 228, 147, 32 !important;
  --ctp-accent: 222, 149, 132 !important;
  --ctp-base: 239, 241, 245 !important;
  --ctp-blue: 42, 110, 245 !important;
  --ctp-crust: 220, 224, 232 !important;
  --ctp-flamingo: 221, 120, 120 !important;
  --ctp-green: 64, 160, 43 !important;
  --ctp-lavender: 114, 135, 253 !important;
  --ctp-mantle: 230, 233, 239 !important;
  --ctp-maroon: 230, 69, 83 !important;
  --ctp-mauve: 136, 57, 239 !important;
  --ctp-overlay0: 156, 160, 176 !important;
  --ctp-overlay1: 140, 143, 161 !important;
  --ctp-overlay2: 124, 127, 147 !important;
  --ctp-peach: 254, 100, 11 !important;
  --ctp-pink: 236, 131, 208 !important;
  --ctp-red: 210, 15, 57 !important;
  --ctp-rosewater: 222, 149, 132 !important;
  --ctp-sapphire: 32, 159, 181 !important;
  --ctp-sky: 4, 165, 229 !important;
  --ctp-subtext0: 108, 111, 133 !important;
  --ctp-subtext1: 92, 95, 119 !important;
  --ctp-surface0: 204, 208, 218 !important;
  --ctp-surface1: 188, 192, 204 !important;
  --ctp-surface2: 172, 176, 190 !important;
  --ctp-teal: 23, 146, 153 !important;
  --ctp-text: 76, 79, 105 !important;
  --ctp-yellow: 228, 147, 32 !important;
  --dark: rgb(76, 79, 105) !important;
  --darkgray: rgb(76, 79, 105) !important;
  --divider-color: rgb(188, 192, 204) !important;
  --divider-color-hover: rgb(222, 149, 132) !important;
  --drag-ghost-background: rgb(76, 79, 105) !important;
  --drag-ghost-text-color: rgb(220, 224, 232) !important;
  --dropdown-background: rgb(204, 208, 218) !important;
  --dropdown-background-hover: rgb(188, 192, 204) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(222, 149, 132) !important;
  --file-header-background: rgb(239, 241, 245) !important;
  --file-header-background-focused: rgb(239, 241, 245) !important;
  --flair-background: rgb(204, 208, 218) !important;
  --flair-color: rgb(76, 79, 105) !important;
  --footnote-divider-color: rgb(188, 192, 204) !important;
  --footnote-id-color: rgb(124, 127, 147) !important;
  --footnote-id-color-no-occurrences: rgb(108, 111, 133) !important;
  --footnote-input-background-active: rgba(76, 79, 105, 0.075) !important;
  --graph-line: rgb(172, 176, 190) !important;
  --graph-node: rgb(124, 127, 147) !important;
  --graph-node-attachment: rgb(228, 147, 32) !important;
  --graph-node-focused: rgb(222, 149, 132) !important;
  --graph-node-tag: rgb(64, 160, 43) !important;
  --graph-node-unresolved: rgb(108, 111, 133) !important;
  --graph-text: rgb(76, 79, 105) !important;
  --gray: rgb(124, 127, 147) !important;
  --h1-color: rgb(210, 15, 57) !important;
  --h2-color: rgb(254, 100, 11) !important;
  --h3-color: rgb(64, 160, 43) !important;
  --h4-color: rgb(23, 146, 153) !important;
  --h5-color: rgb(114, 135, 253) !important;
  --h6-color: rgb(136, 57, 239) !important;
  --heading-formatting: rgb(222, 149, 132) !important;
  --highlight: rgba(228, 147, 32, 0.2) !important;
  --highlight-mix-blend-mode: none !important;
  --hr-color: rgb(188, 192, 204) !important;
  --icon-color: rgb(124, 127, 147) !important;
  --icon-color-active: rgb(222, 149, 132) !important;
  --icon-color-focused: rgb(222, 149, 132) !important;
  --icon-color-hover: rgb(124, 127, 147) !important;
  --indentation-guide-color: rgba(76, 79, 105, 0.12) !important;
  --indentation-guide-color-active: rgba(76, 79, 105, 0.3) !important;
  --inline-title-color: rgb(76, 79, 105) !important;
  --input-date-separator: rgb(108, 111, 133) !important;
  --input-placeholder-color: rgb(108, 111, 133) !important;
  --interactive-accent: rgb(222, 149, 132) !important;
  --interactive-accent-hover: rgba(222, 149, 132, 0.9) !important;
  --interactive-accent-rgb: 222, 149, 132 !important;
  --interactive-hover: rgb(188, 192, 204) !important;
  --interactive-normal: rgb(204, 208, 218) !important;
  --interactive-success: rgb(64, 160, 43) !important;
  --light: rgb(239, 241, 245) !important;
  --lightgray: rgb(230, 233, 239) !important;
  --link-color: rgb(222, 149, 132) !important;
  --link-color-hover: rgb(222, 149, 132) !important;
  --link-external-color: rgb(222, 149, 132) !important;
  --link-external-color-hover: rgb(222, 149, 132) !important;
  --link-unresolved-color: rgb(222, 149, 132) !important;
  --link-unresolved-decoration-color: rgba(222, 149, 132, 0.3) !important;
  --list-marker-color: rgb(108, 111, 133) !important;
  --list-marker-color-collapsed: rgb(222, 149, 132) !important;
  --list-marker-color-hover: rgb(124, 127, 147) !important;
  --max-width-image: 90% !important;
  --menu-background: rgb(230, 233, 239) !important;
  --menu-border-color: rgb(172, 176, 190) !important;
  --menu-shadow: 0px 1px 2px rgba(220, 224, 232, 0.121),
      0px 3.4px 6.7px rgba(220, 224, 232, 0.179),
      0px 15px 30px rgba(220, 224, 232, 0.3) !important;
  --metadata-border-color: rgb(188, 192, 204) !important;
  --metadata-divider-color: rgb(188, 192, 204) !important;
  --metadata-input-background-active: rgba(76, 79, 105, 0.075) !important;
  --metadata-input-text-color: rgb(76, 79, 105) !important;
  --metadata-label-background-active: rgba(76, 79, 105, 0.075) !important;
  --metadata-label-text-color: rgb(124, 127, 147) !important;
  --metadata-label-text-color-hover: rgb(124, 127, 147) !important;
  --metadata-property-background-active: rgba(76, 79, 105, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(156, 160, 176) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(172, 176, 190) !important;
  --min-width-image: 50% !important;
  --modal-background: rgb(239, 241, 245) !important;
  --modal-border-color: rgb(204, 208, 218) !important;
  --mono-rgb-0: 220, 224, 232 !important;
  --mono-rgb-100: 76, 79, 105 !important;
  --nav-collapse-icon-color: rgb(108, 111, 133) !important;
  --nav-collapse-icon-color-collapsed: rgb(108, 111, 133) !important;
  --nav-heading-color: rgb(76, 79, 105) !important;
  --nav-heading-color-collapsed: rgb(108, 111, 133) !important;
  --nav-heading-color-collapsed-hover: rgb(124, 127, 147) !important;
  --nav-heading-color-hover: rgb(76, 79, 105) !important;
  --nav-indentation-guide-color: rgb(239, 241, 245) !important;
  --nav-item-background-active: rgba(76, 79, 105, 0.075) !important;
  --nav-item-background-hover: rgba(76, 79, 105, 0.075) !important;
  --nav-item-background-selected: rgba(222, 149, 132, 0.2) !important;
  --nav-item-color: rgb(124, 127, 147) !important;
  --nav-item-color-active: rgb(76, 79, 105) !important;
  --nav-item-color-highlighted: rgb(222, 149, 132) !important;
  --nav-item-color-hover: rgb(76, 79, 105) !important;
  --nav-item-color-selected: rgb(76, 79, 105) !important;
  --nav-tag-color: rgb(108, 111, 133) !important;
  --nav-tag-color-active: rgb(124, 127, 147) !important;
  --nav-tag-color-hover: rgb(124, 127, 147) !important;
  --pdf-background: rgb(239, 241, 245) !important;
  --pdf-dark-opacity: 1 !important;
  --pdf-page-background: rgb(239, 241, 245) !important;
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px transparent !important;
  --pdf-sidebar-background: rgb(239, 241, 245) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px transparent !important;
  --pill-border-color: rgb(188, 192, 204) !important;
  --pill-border-color-hover: rgb(172, 176, 190) !important;
  --pill-color: rgb(124, 127, 147) !important;
  --pill-color-hover: rgb(76, 79, 105) !important;
  --pill-color-remove: rgb(108, 111, 133) !important;
  --pill-color-remove-hover: rgb(222, 149, 132) !important;
  --prompt-background: rgb(239, 241, 245) !important;
  --prompt-border-color: rgb(156, 160, 176) !important;
  --raised-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent)) !important;
  --ribbon-background: rgb(230, 233, 239) !important;
  --ribbon-background-collapsed: rgb(239, 241, 245) !important;
  --scrollbar-active-thumb-bg: rgba(76, 79, 105, 0.2) !important;
  --scrollbar-bg: rgba(76, 79, 105, 0.05) !important;
  --scrollbar-thumb-bg: rgba(76, 79, 105, 0.1) !important;
  --search-clear-button-color: rgb(124, 127, 147) !important;
  --search-icon-color: rgb(124, 127, 147) !important;
  --search-result-background: rgb(239, 241, 245) !important;
  --secondary: rgb(222, 149, 132) !important;
  --setting-group-heading-color: rgb(76, 79, 105) !important;
  --setting-items-background: rgb(230, 233, 239) !important;
  --setting-items-border-color: rgb(188, 192, 204) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(220, 224, 232, 0.071),
      0px 6.3px 24.7px rgba(220, 224, 232, 0.112),
      0px 30px 90px rgba(220, 224, 232, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(220, 224, 232, 0.121),
      0px 3.4px 6.7px rgba(220, 224, 232, 0.179),
      0px 15px 30px rgba(220, 224, 232, 0.3) !important;
  --slider-thumb-border-color: rgb(172, 176, 190) !important;
  --slider-track-background: rgb(188, 192, 204) !important;
  --status-bar-background: rgb(230, 233, 239) !important;
  --status-bar-border-color: rgb(188, 192, 204) !important;
  --status-bar-text-color: rgb(124, 127, 147) !important;
  --suggestion-background: rgb(239, 241, 245) !important;
  --swatch-shadow: inset 0 0 0 1px rgba(76, 79, 105, 0.15) !important;
  --sync-avatar-color-1: rgb(210, 15, 57) !important;
  --sync-avatar-color-2: rgb(254, 100, 11) !important;
  --sync-avatar-color-3: rgb(228, 147, 32) !important;
  --sync-avatar-color-4: rgb(64, 160, 43) !important;
  --sync-avatar-color-5: rgb(4, 165, 229) !important;
  --sync-avatar-color-6: rgb(42, 110, 245) !important;
  --sync-avatar-color-7: rgb(114, 135, 253) !important;
  --sync-avatar-color-8: rgb(236, 131, 208) !important;
  --tab-background-active: rgb(239, 241, 245) !important;
  --tab-container-background: rgb(230, 233, 239) !important;
  --tab-divider-color: rgb(172, 176, 190) !important;
  --tab-inactive-color: rgb(230, 233, 239) !important;
  --tab-outline-color: rgb(188, 192, 204) !important;
  --tab-stacked-pane-width: 700px !important;
  --tab-switcher-background: rgb(230, 233, 239) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(230, 233, 239), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(76, 79, 105, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(222, 149, 132) !important;
  --tab-text-color: rgb(108, 111, 133) !important;
  --tab-text-color-active: rgb(124, 127, 147) !important;
  --tab-text-color-focused: rgb(124, 127, 147) !important;
  --tab-text-color-focused-active: rgb(124, 127, 147) !important;
  --tab-text-color-focused-active-current: rgb(76, 79, 105) !important;
  --tab-text-color-focused-highlighted: rgb(222, 149, 132) !important;
  --table-add-button-border-color: rgb(188, 192, 204) !important;
  --table-border-color: rgb(188, 192, 204) !important;
  --table-drag-handle-background-active: rgb(222, 149, 132) !important;
  --table-drag-handle-color: rgb(108, 111, 133) !important;
  --table-drag-handle-color-active: rgb(239, 241, 245) !important;
  --table-header-border-color: rgb(188, 192, 204) !important;
  --table-header-color: rgb(76, 79, 105) !important;
  --table-selection-blend-mode: none !important;
  --table-selection-border-color: rgb(222, 149, 132) !important;
  --tag-background: rgba(222, 149, 132, 0.1) !important;
  --tag-background-hover: rgba(222, 149, 132, 0.2) !important;
  --tag-border-color: rgba(222, 149, 132, 0.15) !important;
  --tag-border-color-hover: rgba(222, 149, 132, 0.15) !important;
  --tag-color: rgb(222, 149, 132) !important;
  --tag-color-hover: rgb(222, 149, 132) !important;
  --tertiary: rgb(222, 149, 132) !important;
  --text-accent: rgb(222, 149, 132) !important;
  --text-accent-hover: rgb(222, 149, 132) !important;
  --text-error: rgb(210, 15, 57) !important;
  --text-error-hover: rgba(210, 15, 57, 0.8) !important;
  --text-faint: rgb(108, 111, 133) !important;
  --text-highlight-bg: rgba(228, 147, 32, 0.2) !important;
  --text-highlight-bg-active: rgba(228, 147, 32, 0.4) !important;
  --text-muted: rgb(124, 127, 147) !important;
  --text-muted-rgb: 124, 127, 147 !important;
  --text-normal: rgb(76, 79, 105) !important;
  --text-on-accent: rgb(239, 241, 245) !important;
  --text-selection: rgba(222, 149, 132, 0.25) !important;
  --text-success: rgb(64, 160, 43) !important;
  --text-warning: rgb(254, 100, 11) !important;
  --textHighlight: rgba(228, 147, 32, 0.2) !important;
  --titlebar-background: rgb(230, 233, 239) !important;
  --titlebar-background-focused: rgb(220, 224, 232) !important;
  --titlebar-border-color: rgb(188, 192, 204) !important;
  --titlebar-text-color: rgb(124, 127, 147) !important;
  --titlebar-text-color-focused: rgb(222, 149, 132) !important;
  --vault-profile-color: rgb(76, 79, 105) !important;
  --vault-profile-color-hover: rgb(76, 79, 105) !important;
  --width-image-gallery: 200px !important;
  --workspace-background-translucent: rgba(220, 224, 232, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(239, 241, 245);
  border-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(222, 149, 132, 0.1);
  color: rgb(222, 149, 132);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 233, 239);
  border-left-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(228, 147, 32, 0.2);
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body del {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(222, 149, 132);
  border-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body p {
  color: rgb(124, 127, 147);
  outline: rgb(124, 127, 147) none 0px;
  text-decoration-color: rgb(124, 127, 147);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(222, 149, 132);
  outline: rgb(222, 149, 132) none 0px;
  text-decoration-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(222, 149, 132);
  outline: rgb(222, 149, 132) none 0px;
  text-decoration-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(222, 149, 132);
  outline: rgb(222, 149, 132) none 0px;
  text-decoration: underline rgba(222, 149, 132, 0.3);
  text-decoration-color: rgba(222, 149, 132, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(108, 111, 133);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(220, 224, 232, 0.5);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body table {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(228, 147, 32);
  border-left-color: rgb(228, 147, 32);
  border-right-color: rgb(228, 147, 32);
  border-top-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(210, 15, 57);
  border-left-color: rgb(210, 15, 57);
  border-right-color: rgb(210, 15, 57);
  border-top-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(222, 149, 132);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(124, 127, 147);
  text-decoration: line-through;
  text-decoration-color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 100, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(23, 146, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 159, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(210, 15, 57);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 110, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 147, 32);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 57, 239);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 69, 83);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 57, 239);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(42, 110, 245);
  border-left-color: rgb(42, 110, 245);
  border-right-color: rgb(42, 110, 245);
  border-top-color: rgb(42, 110, 245);
  color: rgb(42, 110, 245);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(42, 110, 245);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 4, 165, 229;
  background-color: rgba(4, 165, 229, 0.1);
  border-bottom-color: rgba(4, 165, 229, 0.25);
  border-left-color: rgba(4, 165, 229, 0.25);
  border-right-color: rgba(4, 165, 229, 0.25);
  border-top-color: rgba(4, 165, 229, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 114, 135, 253;
  background-color: rgba(114, 135, 253, 0.1);
  border-bottom-color: rgba(114, 135, 253, 0.25);
  border-left-color: rgba(114, 135, 253, 0.25);
  border-right-color: rgba(114, 135, 253, 0.25);
  border-top-color: rgba(114, 135, 253, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.25);
  border-left-color: rgba(210, 15, 57, 0.25);
  border-right-color: rgba(210, 15, 57, 0.25);
  border-top-color: rgba(210, 15, 57, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 42, 110, 245;
  background-color: rgba(42, 110, 245, 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 42, 110, 245;
  background-color: rgba(42, 110, 245, 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 254, 100, 11;
  background-color: rgba(254, 100, 11, 0.1);
  border-bottom-color: rgba(254, 100, 11, 0.25);
  border-left-color: rgba(254, 100, 11, 0.25);
  border-right-color: rgba(254, 100, 11, 0.25);
  border-top-color: rgba(254, 100, 11, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 64, 160, 43;
  background-color: rgba(64, 160, 43, 0.1);
  border-bottom-color: rgba(64, 160, 43, 0.25);
  border-left-color: rgba(64, 160, 43, 0.25);
  border-right-color: rgba(64, 160, 43, 0.25);
  border-top-color: rgba(64, 160, 43, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 4, 165, 229;
  background-color: rgba(4, 165, 229, 0.1);
  border-bottom-color: rgba(4, 165, 229, 0.25);
  border-left-color: rgba(4, 165, 229, 0.25);
  border-right-color: rgba(4, 165, 229, 0.25);
  border-top-color: rgba(4, 165, 229, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 42, 110, 245;
  background-color: rgba(42, 110, 245, 0.1);
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 254, 100, 11;
  background-color: rgba(254, 100, 11, 0.1);
  border-bottom-color: rgba(254, 100, 11, 0.25);
  border-left-color: rgba(254, 100, 11, 0.25);
  border-right-color: rgba(254, 100, 11, 0.25);
  border-top-color: rgba(254, 100, 11, 0.25);
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
  background-color: rgba(220, 224, 232, 0.3);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
  box-shadow: rgba(220, 224, 232, 0.07) 0px 1.8px 7.3px 0px, rgba(220, 224, 232, 0.114) 0px 6.3px 24.7px 0px, rgba(220, 224, 232, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 79, 105);
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(76, 79, 105, 0.075);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(156, 160, 176);
  border-left-color: rgb(156, 160, 176);
  border-right-color: rgb(156, 160, 176);
  border-top-color: rgb(156, 160, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(76, 79, 105, 0.075);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(76, 79, 105, 0.075);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(222, 149, 132, 0.1);
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(222, 149, 132);
}

html[saved-theme="light"] body h1 {
  color: rgb(210, 15, 57);
}

html[saved-theme="light"] body h2 {
  color: rgb(254, 100, 11);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body h3 {
  color: rgb(64, 160, 43);
}

html[saved-theme="light"] body h4 {
  color: rgb(23, 146, 153);
}

html[saved-theme="light"] body h5 {
  color: rgb(114, 135, 253);
}

html[saved-theme="light"] body h6 {
  color: rgb(136, 57, 239);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 42, 110, 245;
  border-bottom-color: rgba(42, 110, 245, 0.25);
  border-left-color: rgba(42, 110, 245, 0.25);
  border-right-color: rgba(42, 110, 245, 0.25);
  border-top-color: rgba(42, 110, 245, 0.25);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(239, 241, 245);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 79, 105);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(124, 127, 147);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(124, 127, 147);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(124, 127, 147);
  stroke: rgb(124, 127, 147);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(108, 111, 133);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(188, 192, 204);
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(230, 233, 239);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(220, 224, 232);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(222, 149, 132, 0.1);
  border-bottom-color: rgba(222, 149, 132, 0.15);
  border-left-color: rgba(222, 149, 132, 0.15);
  border-right-color: rgba(222, 149, 132, 0.15);
  border-top-color: rgba(222, 149, 132, 0.15);
  color: rgb(222, 149, 132);
}`,
  },
};
