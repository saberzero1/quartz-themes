import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "anuppuccin",
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
  --checkbox-color-hover: rgb(245, 224, 220) !important;
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
  --colorful-frame-color: rgb(245, 224, 220) !important;
  --colorful-icon-color: rgb(24, 24, 37) !important;
  --colorful-icon-color-alt: rgb(17, 17, 27) !important;
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
  --input-date-separator: rgb(161, 168, 201) !important;
  --input-placeholder-color: rgb(161, 168, 201) !important;
  --interactive-accent: rgb(245, 224, 220) !important;
  --interactive-accent-hover: rgb(245, 224, 220) !important;
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
  --nav-indentation-guide-color: rgb(105, 109, 134) !important;
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
  --notion-kanban-card: rgb(49, 50, 68) !important;
  --notion-kanban-card-hover: rgb(67, 70, 90) !important;
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
  border-color: rgb(49, 50, 68);
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(249, 226, 175, 0.2);
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 224, 220) none 0px;
  text-decoration-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 224, 220);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 224, 220) none 0px;
  text-decoration-color: rgb(245, 224, 220);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(245, 224, 220);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 224, 220) none 0px;
  text-decoration: rgba(245, 224, 220, 0.3);
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(198, 208, 245);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 208, 245);
  border-radius: 4px;
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 208, 245);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(198, 208, 245);
  border-radius: 4px;
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
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
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
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
  color: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
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
  font-weight: 500;
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

html[saved-theme="dark"] body .callout[data-callout="blank-container"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-body"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-card-prop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-card"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-index"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-prop-image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-prop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="capacities-sidebar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="formula"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(198, 208, 245);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  border-left-color: rgb(105, 109, 134);
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(142, 149, 179);
  border-left-color: rgb(142, 149, 179);
  border-right-color: rgb(142, 149, 179);
  border-top-color: rgb(142, 149, 179);
  color: rgb(142, 149, 179);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-size: 12.8px;
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
  --checkbox-color-hover: rgb(222, 149, 132) !important;
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
  --colorful-frame-color: rgb(222, 149, 132) !important;
  --colorful-icon-color: rgb(230, 233, 239) !important;
  --colorful-icon-color-alt: rgb(220, 224, 232) !important;
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
  --input-date-separator: rgb(108, 111, 133) !important;
  --input-placeholder-color: rgb(108, 111, 133) !important;
  --interactive-accent: rgb(222, 149, 132) !important;
  --interactive-accent-hover: rgb(222, 149, 132) !important;
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
  --nav-indentation-guide-color: rgb(156, 160, 176) !important;
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
  background-color: rgb(230, 233, 239);
  border-color: rgb(188, 192, 204);
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(228, 147, 32, 0.2);
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body del {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 149, 132) none 0px;
  text-decoration-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(222, 149, 132);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 149, 132) none 0px;
  text-decoration-color: rgb(222, 149, 132);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(222, 149, 132);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 149, 132) none 0px;
  text-decoration: rgba(222, 149, 132, 0.3);
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body table {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(76, 79, 105);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(76, 79, 105);
  border-radius: 4px;
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 79, 105);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(76, 79, 105);
  border-radius: 4px;
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
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
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
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
  color: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
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
  color: rgb(76, 79, 105);
  font-weight: 500;
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

html[saved-theme="light"] body .callout[data-callout="blank-container"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-body"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-card-prop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-card"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-index"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-prop-image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-prop"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="capacities-sidebar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="formula"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="seealso"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(76, 79, 105);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  border-left-color: rgb(156, 160, 176);
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
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(124, 127, 147);
  border-left-color: rgb(124, 127, 147);
  border-right-color: rgb(124, 127, 147);
  border-top-color: rgb(124, 127, 147);
  color: rgb(124, 127, 147);
  font-family: "??", "??", "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-size: 12.8px;
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
