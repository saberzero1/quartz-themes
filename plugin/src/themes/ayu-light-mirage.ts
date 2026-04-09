import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ayu-light-mirage",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lora", "monaspace-neon"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 40 !important;
  --accent-l: 70% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgb(99 117 153 / 0.15) !important;
  --background-modifier-border: rgb(23 27 36) !important;
  --background-modifier-border-focus: rgb(99 117 153 / 0.15) !important;
  --background-modifier-border-hover: rgb(105 117 140 / 0.12) !important;
  --background-modifier-error: rgb(242 121 131) !important;
  --background-modifier-error-hover: rgb(242 121 131 / 0.8) !important;
  --background-modifier-error-rgb: 242 121 131 !important;
  --background-modifier-form-field: rgb(105 117 140 / 0.12) !important;
  --background-modifier-form-field-hover: rgb(105 117 140 / 0.12) !important;
  --background-modifier-hover: rgb(105 117 140 / 0.12) !important;
  --background-modifier-message: rgb(128 191 255) !important;
  --background-modifier-success: rgb(135 217 108) !important;
  --background-modifier-success-rgb: 135 217 108 !important;
  --background-primary: rgb(36 41 54) !important;
  --background-primary-alt: rgb(28 33 43) !important;
  --background-secondary: rgb(31 36 48) !important;
  --background-secondary-alt: rgb(28 33 43) !important;
  --bases-cards-background: rgb(36 41 54) !important;
  --bases-cards-cover-background: rgb(28 33 43) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(23 27 36) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(105 117 140 / 0.12) !important;
  --bases-embed-border-color: rgb(23 27 36) !important;
  --bases-group-heading-property-color: rgb(184 207 230 / 0.5) !important;
  --bases-table-border-color: rgb(23 27 36) !important;
  --bases-table-cell-background-active: rgb(36 41 54) !important;
  --bases-table-cell-background-disabled: rgb(28 33 43) !important;
  --bases-table-cell-background-selected: hsla(40, 100%, 70%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(99 117 153 / 0.15) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255 204 102) !important;
  --bases-table-group-background: rgb(28 33 43) !important;
  --bases-table-header-background: rgb(36 41 54) !important;
  --bases-table-header-background-hover: rgb(105 117 140 / 0.12) !important;
  --bases-table-header-color: rgb(184 207 230 / 0.5) !important;
  --bases-table-summary-background: rgb(36 41 54) !important;
  --bases-table-summary-background-hover: rgb(105 117 140 / 0.12) !important;
  --blockquote-border-color: rgb(255 204 102) !important;
  --blur-background: color-mix(in srgb, rgb(105 117 140 / 0.12) 65%, transparent) linear-gradient(rgb(105 117 140 / 0.12), color-mix(in srgb, rgb(105 117 140 / 0.12) 65%, transparent)) !important;
  --bodyFont: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(213 255 128) !important;
  --bold-modifier: 100 !important;
  --bold-weight: 500 !important;
  --callout-bug: 242 135 121;
  --callout-default: 115 208 255;
  --callout-error: 242 135 121;
  --callout-example: 223 191 255;
  --callout-fail: 242 135 121;
  --callout-important: 149 230 203;
  --callout-info: 115 208 255;
  --callout-question: 255 173 102;
  --callout-quote: 204 202 194;
  --callout-success: 213 255 128;
  --callout-summary: 149 230 203;
  --callout-tip: 149 230 203;
  --callout-title-weight: 500;
  --callout-todo: 115 208 255;
  --callout-warning: 255 173 102;
  --canvas-background: rgb(36 41 54) !important;
  --canvas-card-label-color: rgb(138 145 153 / 0.4) !important;
  --canvas-color-1: 242 135 121 !important;
  --canvas-color-2: 255 173 102 !important;
  --canvas-color-3: 255 208 115 !important;
  --canvas-color-4: 213 255 128 !important;
  --canvas-color-5: 149 230 203 !important;
  --canvas-color-6: 223 191 255 !important;
  --canvas-dot-pattern: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 30%) !important;
  --caret-color: rgb(128 191 255) !important;
  --checkbox-border-color: rgb(138 145 153 / 0.4) !important;
  --checkbox-border-color-hover: rgb(184 207 230 / 0.5) !important;
  --checkbox-color: rgb(255 204 102) !important;
  --checkbox-color-hover: rgb(255 204 102 / 0.8) !important;
  --checkbox-marker-color: rgb(36 41 54) !important;
  --checklist-done-color: rgb(184 207 230 / 0.5) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(28 33 43) !important;
  --code-border-color: rgb(23 27 36) !important;
  --code-bracket-background: rgb(105 117 140 / 0.12) !important;
  --code-comment: rgb(184 207 230 / 0.5) !important;
  --code-function: rgb(255 208 115) !important;
  --code-important: rgb(255 223 179) !important;
  --code-keyword: rgb(255 173 102) !important;
  --code-normal: rgb(204 202 194) !important;
  --code-operator: rgb(242 158 116) !important;
  --code-property: rgb(115 208 255) !important;
  --code-punctuation: rgb(204 202 194) !important;
  --code-string: rgb(213 255 128) !important;
  --code-tag: rgb(92 207 230) !important;
  --code-value: rgb(223 191 255) !important;
  --codeFont: Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(138 145 153 / 0.4) !important;
  --collapse-icon-color-collapsed: rgb(255 204 102) !important;
  --color-accent: hsl(40, 100%, 70%) !important;
  --color-accent-1: hsl(37, 102%, 80.5%) !important;
  --color-accent-2: hsl(35, 105%, 90.3%) !important;
  --color-accent-hsl: 40, 100%, 70% !important;
  --color-base-00: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 0%) !important;
  --color-base-05: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 5%) !important;
  --color-base-10: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 10%) !important;
  --color-base-100: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 100%) !important;
  --color-base-20: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 20%) !important;
  --color-base-25: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 25%) !important;
  --color-base-30: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 30%) !important;
  --color-base-35: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 35%) !important;
  --color-base-40: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 40%) !important;
  --color-base-50: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 50%) !important;
  --color-base-60: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 60%) !important;
  --color-base-70: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 70%) !important;
  --color-blue: rgb(115 208 255) !important;
  --color-blue-rgb: 115 208 255 !important;
  --color-cyan: rgb(149 230 203) !important;
  --color-cyan-rgb: 149 230 203 !important;
  --color-green: rgb(213 255 128) !important;
  --color-green-rgb: 213 255 128 !important;
  --color-orange: rgb(255 173 102) !important;
  --color-orange-rgb: 255 173 102 !important;
  --color-pink: rgb(242 158 116) !important;
  --color-pink-rgb: 242 158 116 !important;
  --color-purple: rgb(223 191 255) !important;
  --color-purple-rgb: 223 191 255 !important;
  --color-red: rgb(242 135 121) !important;
  --color-red-rgb: 242 135 121 !important;
  --color-yellow: rgb(255 208 115) !important;
  --color-yellow-rgb: 255 208 115 !important;
  --common-accent: 255 204 102 !important;
  --common-error: 255 102 102 !important;
  --dark: rgb(204 202 194) !important;
  --darkgray: rgb(204 202 194) !important;
  --divider-color: rgb(23 27 36) !important;
  --divider-color-hover: rgb(255 204 102) !important;
  --dropdown-background: rgb(105 117 140 / 0.12) !important;
  --dropdown-background-hover: rgb(99 117 153 / 0.15) !important;
  --editor-bg: 36 41 54 !important;
  --editor-fg: 204 202 194 !important;
  --editor-guide-active: 138 145 153 / 0.35 !important;
  --editor-guide-normal: 138 145 153 / 0.18 !important;
  --editor-gutter-active: 138 145 153 / 0.8 !important;
  --editor-gutter-normal: 138 145 153 / 0.4 !important;
  --editor-line: 26 31 41 !important;
  --editor-match-active: 105 83 128 !important;
  --editor-match-inactive: 105 83 128 / 0.4 !important;
  --editor-selection-active: 64 159 255 / 0.25 !important;
  --editor-selection-inactive: 64 159 255 / 0.13 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(23 27 36), inset 0 0 0 1px rgb(23 27 36) !important;
  --embed-border-start: 2px solid rgb(255 204 102) !important;
  --file-header-background: rgb(36 41 54) !important;
  --file-header-background-focused: rgb(36 41 54) !important;
  --file-header-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --fill: rgb(31 36 48) !important;
  --flair-background: rgb(105 117 140 / 0.12) !important;
  --flair-color: rgb(204 202 194) !important;
  --font-interface: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Inter, Heiti, Dotum !important;
  --font-mermaid: Inter, Heiti, Dotum !important;
  --font-monospace: Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: Monaspace Neon !important;
  --font-print: Lora, Songti, Batang, Arial' !important;
  --font-text: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Lora, Songti, Batang !important;
  --footnote-divider-color: rgb(23 27 36) !important;
  --footnote-id-color: rgb(184 207 230 / 0.5) !important;
  --footnote-id-color-no-occurrences: rgb(138 145 153 / 0.4) !important;
  --footnote-input-background-active: rgb(105 117 140 / 0.12) !important;
  --graph-line: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 35%) !important;
  --graph-node: rgb(184 207 230 / 0.5) !important;
  --graph-node-attachment: rgb(255 208 115) !important;
  --graph-node-focused: rgb(255 204 102) !important;
  --graph-node-tag: rgb(213 255 128) !important;
  --graph-node-unresolved: rgb(138 145 153 / 0.4) !important;
  --graph-text: rgb(204 202 194) !important;
  --gray: rgb(184 207 230 / 0.5) !important;
  --h1-color: rgb(255 173 102) !important;
  --h1-line-height: normal !important;
  --h1-size: 1.8em !important;
  --h1-weight: 500 !important;
  --h2-color: rgb(255 208 115) !important;
  --h2-line-height: normal !important;
  --h2-size: 1.6em !important;
  --h2-style: italic !important;
  --h2-weight: 500 !important;
  --h3-color: rgb(255 223 179) !important;
  --h3-line-height: normal !important;
  --h3-size: 1.4em !important;
  --h3-weight: 500 !important;
  --h4-color: rgb(242 158 116) !important;
  --h4-line-height: normal !important;
  --h4-size: 1.2em !important;
  --h4-weight: 500 !important;
  --h5-color: rgb(242 158 116) !important;
  --h5-line-height: normal !important;
  --h5-size: 1em !important;
  --h5-style: italic !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(242 158 116) !important;
  --h6-line-height: normal !important;
  --h6-size: 0.8em !important;
  --h6-weight: 700 !important;
  --headerFont: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(138 145 153 / 0.4) !important;
  --highlight: rgb(105 83 128) !important;
  --hr-color: rgb(23 27 36) !important;
  --icon-color: rgb(112 122 140) !important;
  --icon-color-active: hsl(40, 100%, 70%) !important;
  --icon-color-focused: hsl(37, 102%, 80.5%) !important;
  --icon-color-hover: rgb(112 122 140 / 0.8) !important;
  --indentation-guide-color: rgb(138 145 153 / 0.18) !important;
  --indentation-guide-color-active: rgb(138 145 153 / 0.35) !important;
  --inline-title-color: rgb(115 208 255) !important;
  --inline-title-line-height: normal !important;
  --inline-title-size: 2em !important;
  --inline-title-style: italic !important;
  --inline-title-weight: bold !important;
  --input-date-separator: rgb(138 145 153 / 0.4) !important;
  --input-placeholder-color: rgb(138 145 153 / 0.4) !important;
  --interactive-accent: rgb(255 204 102) !important;
  --interactive-accent-hover: rgb(255 204 102 / 0.8) !important;
  --interactive-accent-hsl: 40, 100%, 70% !important;
  --interactive-hover: rgb(99 117 153 / 0.15) !important;
  --interactive-normal: rgb(105 117 140 / 0.12) !important;
  --italic-color: rgb(223 191 255) !important;
  --light: rgb(36 41 54) !important;
  --lightgray: rgb(31 36 48) !important;
  --link-color: rgb(128 191 255) !important;
  --link-color-hover: rgb(128 191 255 / 0.8) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(128 191 255) !important;
  --link-external-color-hover: rgb(128 191 255 / 0.8) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(128 191 255) !important;
  --link-unresolved-decoration-color: hsla(40, 100%, 70%, 0.3) !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(242 158 116) !important;
  --list-marker-color-collapsed: rgb(242 158 116 / 0.4) !important;
  --list-marker-color-hover: rgb(242 158 116 / 0.8) !important;
  --menu-background: rgb(31 36 48) !important;
  --menu-border-color: rgb(105 117 140 / 0.12) !important;
  --metadata-border-color: rgb(23 27 36) !important;
  --metadata-divider-color: rgb(23 27 36) !important;
  --metadata-input-background-active: rgb(105 117 140 / 0.12) !important;
  --metadata-input-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(204 202 194) !important;
  --metadata-label-background-active: rgb(105 117 140 / 0.12) !important;
  --metadata-label-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(184 207 230 / 0.5) !important;
  --metadata-label-text-color-hover: rgb(184 207 230 / 0.5) !important;
  --metadata-property-background-active: rgb(105 117 140 / 0.12) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(99 117 153 / 0.15) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(105 117 140 / 0.12) !important;
  --modal-background: rgb(36 41 54) !important;
  --modal-border-color: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 40%) !important;
  --nav-collapse-icon-color: rgb(138 145 153 / 0.4) !important;
  --nav-collapse-icon-color-collapsed: rgb(138 145 153 / 0.4) !important;
  --nav-heading-color: rgb(204 202 194) !important;
  --nav-heading-color-collapsed: rgb(138 145 153 / 0.4) !important;
  --nav-heading-color-collapsed-hover: rgb(184 207 230 / 0.5) !important;
  --nav-heading-color-hover: rgb(204 202 194) !important;
  --nav-indentation-guide-color: rgb(138 145 153 / 0.18) !important;
  --nav-item-background-active: rgb(105 117 140 / 0.12) !important;
  --nav-item-background-hover: rgb(105 117 140 / 0.12) !important;
  --nav-item-background-selected: hsla(40, 100%, 70%, 0.15) !important;
  --nav-item-color: rgb(184 207 230 / 0.5) !important;
  --nav-item-color-active: rgb(204 202 194) !important;
  --nav-item-color-highlighted: rgb(255 204 102) !important;
  --nav-item-color-hover: rgb(204 202 194) !important;
  --nav-item-color-selected: rgb(204 202 194) !important;
  --nav-tag-color: rgb(138 145 153 / 0.4) !important;
  --nav-tag-color-active: rgb(184 207 230 / 0.5) !important;
  --nav-tag-color-hover: rgb(184 207 230 / 0.5) !important;
  --pdf-background: rgb(36 41 54) !important;
  --pdf-page-background: rgb(36 41 54) !important;
  --pdf-shadow: 0 0 0 1px rgb(23 27 36) !important;
  --pdf-sidebar-background: rgb(36 41 54) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(23 27 36) !important;
  --pill-border-color: rgb(23 27 36) !important;
  --pill-border-color-hover: rgb(105 117 140 / 0.12) !important;
  --pill-color: rgb(184 207 230 / 0.5) !important;
  --pill-color-hover: rgb(204 202 194) !important;
  --pill-color-remove: rgb(138 145 153 / 0.4) !important;
  --pill-color-remove-hover: rgb(255 204 102) !important;
  --prompt-background: rgb(36 41 54) !important;
  --prompt-border-color: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 40%) !important;
  --raised-background: color-mix(in srgb, rgb(105 117 140 / 0.12) 65%, transparent) linear-gradient(rgb(105 117 140 / 0.12), color-mix(in srgb, rgb(105 117 140 / 0.12) 65%, transparent)) !important;
  --ribbon-background: rgb(31 36 48) !important;
  --ribbon-background-collapsed: rgb(36 41 54) !important;
  --search-clear-button-color: rgb(184 207 230 / 0.5) !important;
  --search-icon-color: rgb(184 207 230 / 0.5) !important;
  --search-result-background: rgb(36 41 54) !important;
  --secondary: rgb(255 204 102) !important;
  --setting-group-heading-color: rgb(204 202 194) !important;
  --setting-items-background: rgb(28 33 43) !important;
  --setting-items-border-color: rgb(23 27 36) !important;
  --slider-thumb-border-color: rgb(105 117 140 / 0.12) !important;
  --slider-track-background: rgb(23 27 36) !important;
  --status-bar-background: rgb(31 36 48) !important;
  --status-bar-border-color: rgb(23 27 36) !important;
  --status-bar-text-color: rgb(184 207 230 / 0.5) !important;
  --suggestion-background: rgb(36 41 54) !important;
  --sync-avatar-color-1: rgb(242 135 121) !important;
  --sync-avatar-color-2: rgb(255 173 102) !important;
  --sync-avatar-color-3: rgb(255 208 115) !important;
  --sync-avatar-color-4: rgb(213 255 128) !important;
  --sync-avatar-color-5: rgb(149 230 203) !important;
  --sync-avatar-color-6: rgb(115 208 255) !important;
  --sync-avatar-color-7: rgb(223 191 255) !important;
  --sync-avatar-color-8: rgb(242 158 116) !important;
  --syntax-comment: 184 207 230 / 0.5 !important;
  --syntax-constant: 223 191 255 !important;
  --syntax-entity: 115 208 255 !important;
  --syntax-func: 255 208 115 !important;
  --syntax-keyword: 255 173 102 !important;
  --syntax-markup: 242 135 121 !important;
  --syntax-operator: 242 158 116 !important;
  --syntax-regexp: 149 230 203 !important;
  --syntax-special: 255 223 179 !important;
  --syntax-string: 213 255 128 !important;
  --syntax-tag: 92 207 230 !important;
  --tab-background-active: rgb(36 41 54) !important;
  --tab-container-background: rgb(31 36 48) !important;
  --tab-divider-color: rgb(105 117 140 / 0.12) !important;
  --tab-outline-color: rgb(23 27 36) !important;
  --tab-switcher-background: rgb(31 36 48) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(31 36 48), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40, 100%, 70%) !important;
  --tab-text-color: rgb(138 145 153 / 0.4) !important;
  --tab-text-color-active: rgb(184 207 230 / 0.5) !important;
  --tab-text-color-focused: rgb(184 207 230 / 0.5) !important;
  --tab-text-color-focused-active: rgb(184 207 230 / 0.5) !important;
  --tab-text-color-focused-active-current: rgb(204 202 194) !important;
  --tab-text-color-focused-highlighted: rgb(255 204 102) !important;
  --table-add-button-border-color: rgb(23 27 36) !important;
  --table-border-color: rgb(23 27 36) !important;
  --table-drag-handle-background-active: rgb(255 204 102) !important;
  --table-drag-handle-color: rgb(138 145 153 / 0.4) !important;
  --table-drag-handle-color-active: rgb(31 36 48) !important;
  --table-header-border-color: rgb(23 27 36) !important;
  --table-header-color: rgb(204 202 194) !important;
  --table-header-weight: 500 !important;
  --table-selection: hsla(40, 100%, 70%, 0.1) !important;
  --table-selection-border-color: rgb(255 204 102) !important;
  --tag-background: rgb(92 207 230 / 0.2) !important;
  --tag-background-hover: rgb(92 207 230 / 0.4) !important;
  --tag-border-color: hsla(40, 100%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(40, 100%, 70%, 0.15) !important;
  --tag-color: rgb(92 207 230) !important;
  --tag-color-hover: rgb(92 207 230 / 0.8) !important;
  --tertiary: rgb(255 204 102 / 0.8) !important;
  --text: rgb(112 122 140) !important;
  --text-accent: rgb(255 204 102) !important;
  --text-accent-hover: rgb(255 204 102 / 0.8) !important;
  --text-error: rgb(255 102 102) !important;
  --text-faint: rgb(138 145 153 / 0.4) !important;
  --text-highlight-bg: rgb(105 83 128) !important;
  --text-muted: rgb(184 207 230 / 0.5) !important;
  --text-normal: rgb(204 202 194) !important;
  --text-on-accent: rgb(31 36 48) !important;
  --text-on-accent-inverted: rgb(112 122 140) !important;
  --text-selection: rgb(64 159 255 / 0.25) !important;
  --text-success: rgb(135 217 108) !important;
  --text-warning: rgb(255 204 102) !important;
  --textHighlight: rgb(105 83 128) !important;
  --titleFont: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(31 36 48) !important;
  --titlebar-background-focused: rgb(28 33 43) !important;
  --titlebar-border-color: rgb(23 27 36) !important;
  --titlebar-text-color: rgb(184 207 230 / 0.5) !important;
  --titlebar-text-color-focused: rgb(204 202 194) !important;
  --ui-bg: 31 36 48 !important;
  --ui-fg: 112 122 140 !important;
  --ui-line: 23 27 36 !important;
  --ui-panel-bg: 28 33 43 !important;
  --ui-panel-shadow: 18 21 28 / 0.7 !important;
  --ui-selection-active: 99 117 153 / 0.15 !important;
  --ui-selection-normal: 105 117 140 / 0.12 !important;
  --vault-profile-color: rgb(204 202 194) !important;
  --vault-profile-color-hover: rgb(204 202 194) !important;
  --vcs-added: 135 217 108 !important;
  --vcs-modified: 128 191 255 !important;
  --vcs-removed: 242 121 131 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 36, 48);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(36, 41, 54);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
  font-weight: 500;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(31, 36, 48);
  border-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(23, 27, 36);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(92, 207, 230, 0.2);
  color: rgb(92, 207, 230);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 36, 48);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(23, 27, 36);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 36, 48);
  border-left-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(36, 41, 54);
  color: rgb(204, 202, 194);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(213, 255, 128);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(213, 255, 128) none 0px;
  text-decoration-color: rgb(213, 255, 128);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(223, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 191, 255) none 0px;
  text-decoration-color: rgb(223, 191, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(223, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 191, 255) none 0px;
  text-decoration-color: rgb(223, 191, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(213, 255, 128);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(213, 255, 128) none 0px;
  text-decoration-color: rgb(213, 255, 128);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(135, 217, 108, 0.2);
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body del {
  background-color: rgba(242, 121, 131, 0.2);
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration: line-through from-font wavy rgba(242, 121, 131, 0.8);
  text-decoration-color: rgba(242, 121, 131, 0.8);
  text-decoration-style: wavy;
  text-decoration-thickness: from-font;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 204, 102);
  border-color: rgb(255, 204, 102);
}

html[saved-theme="dark"] body p {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(184, 207, 230, 0.5) none 0px;
  text-decoration-color: rgba(184, 207, 230, 0.5);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration-color: rgb(128, 191, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration-color: rgb(128, 191, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration: rgba(255, 204, 102, 0.3);
  text-decoration-color: rgba(255, 204, 102, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.938px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
  font-weight: 500;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 208, 115);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 208, 115);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 208, 115);
  border-left-color: rgb(255, 208, 115);
  border-right-color: rgb(255, 208, 115);
  border-top-color: rgb(255, 208, 115);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 173, 102);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 173, 102);
  border-radius: 4px;
  border-right-color: rgb(255, 173, 102);
  border-top-color: rgb(255, 173, 102);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(138, 145, 153, 0.4);
  border-left-color: rgba(138, 145, 153, 0.4);
  border-right-color: rgba(138, 145, 153, 0.4);
  border-top-color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 149 230 203;
  background-color: rgba(149, 230, 203, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 242 135 121;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 242 135 121;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 223 191 255;
  background-color: rgba(223, 191, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 242 135 121;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 115 208 255;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 115 208 255;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 255 173 102;
  background-color: rgba(255, 173, 102, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 204 202 194;
  background-color: rgba(204, 202, 194, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 213 255 128;
  background-color: rgba(213, 255, 128, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 149 230 203;
  background-color: rgba(149, 230, 203, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 115 208 255;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255 173 102;
  background-color: rgba(255, 173, 102, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
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
  background-color: rgba(105, 117, 140, 0.12);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(36, 41, 54);
  border-bottom-color: color(srgb 0.248627 0.276078 0.332549);
  border-left-color: color(srgb 0.248627 0.276078 0.332549);
  border-right-color: color(srgb 0.248627 0.276078 0.332549);
  border-top-color: color(srgb 0.248627 0.276078 0.332549);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(105, 117, 140, 0.12);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.248627 0.276078 0.332549);
  border-left-color: color(srgb 0.248627 0.276078 0.332549);
  border-right-color: color(srgb 0.248627 0.276078 0.332549);
  border-top-color: color(srgb 0.248627 0.276078 0.332549);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 36, 48);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(105, 117, 140, 0.12);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(105, 117, 140, 0.12);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 207, 230, 0.2);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(92, 207, 230);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 173, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 208, 115);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(115, 208, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 223, 179);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(138, 145, 153, 0.18);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 202, 194);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 122, 140);
  border-left-color: rgb(112, 122, 140);
  border-right-color: rgb(112, 122, 140);
  border-top-color: rgb(112, 122, 140);
  color: rgb(112, 122, 140);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(31, 36, 48);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(184, 207, 230, 0.5);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(112, 122, 140);
  border-left-color: rgb(112, 122, 140);
  border-right-color: rgb(112, 122, 140);
  border-top-color: rgb(112, 122, 140);
  color: rgb(112, 122, 140);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(112, 122, 140);
  stroke: rgb(112, 122, 140);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(138, 145, 153, 0.4);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(31, 36, 48);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 202, 194);
  font-size: 12.8px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(92, 207, 230, 0.2);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  color: rgb(92, 207, 230);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 35 !important;
  --accent-l: 60% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: rgb(86 114 143 / 0.12) !important;
  --background-modifier-border: rgb(107 125 143 / 0.12) !important;
  --background-modifier-border-focus: rgb(86 114 143 / 0.12) !important;
  --background-modifier-border-hover: rgb(107 125 143 / 0.12) !important;
  --background-modifier-error: rgb(255 115 131) !important;
  --background-modifier-error-hover: rgb(255 115 131 / 0.8) !important;
  --background-modifier-error-rgb: 255 115 131 !important;
  --background-modifier-form-field: rgb(107 125 143 / 0.12) !important;
  --background-modifier-form-field-hover: rgb(107 125 143 / 0.12) !important;
  --background-modifier-hover: rgb(107 125 143 / 0.12) !important;
  --background-modifier-message: rgb(71 138 204) !important;
  --background-modifier-success: rgb(108 191 67) !important;
  --background-modifier-success-rgb: 108 191 67 !important;
  --background-primary: rgb(252 252 252) !important;
  --background-primary-alt: rgb(243 244 245) !important;
  --background-secondary: rgb(248 249 250) !important;
  --background-secondary-alt: rgb(243 244 245) !important;
  --bases-cards-background: rgb(252 252 252) !important;
  --bases-cards-cover-background: rgb(243 244 245) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(107 125 143 / 0.12) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(107 125 143 / 0.12) !important;
  --bases-embed-border-color: rgb(107 125 143 / 0.12) !important;
  --bases-group-heading-property-color: rgb(120 123 128 / 0.6) !important;
  --bases-table-border-color: rgb(107 125 143 / 0.12) !important;
  --bases-table-cell-background-active: rgb(252 252 252) !important;
  --bases-table-cell-background-disabled: rgb(243 244 245) !important;
  --bases-table-cell-background-selected: hsla(35, 100%, 60%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(86 114 143 / 0.12) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255 170 51) !important;
  --bases-table-group-background: rgb(243 244 245) !important;
  --bases-table-header-background: rgb(252 252 252) !important;
  --bases-table-header-background-hover: rgb(107 125 143 / 0.12) !important;
  --bases-table-header-color: rgb(120 123 128 / 0.6) !important;
  --bases-table-summary-background: rgb(252 252 252) !important;
  --bases-table-summary-background-hover: rgb(107 125 143 / 0.12) !important;
  --blockquote-border-color: rgb(255 170 51) !important;
  --blur-background: color-mix(in srgb, rgb(252 252 252) 65%, transparent) linear-gradient(rgb(252 252 252), color-mix(in srgb, rgb(252 252 252) 65%, transparent)) !important;
  --bodyFont: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(134 179 0) !important;
  --bold-modifier: 100 !important;
  --bold-weight: 500 !important;
  --callout-bug: 240 113 113;
  --callout-default: 57 158 230;
  --callout-error: 240 113 113;
  --callout-example: 163 122 204;
  --callout-fail: 240 113 113;
  --callout-important: 76 191 153;
  --callout-info: 57 158 230;
  --callout-question: 250 141 62;
  --callout-quote: 92 97 102;
  --callout-success: 134 179 0;
  --callout-summary: 76 191 153;
  --callout-tip: 76 191 153;
  --callout-title-weight: 500;
  --callout-todo: 57 158 230;
  --callout-warning: 250 141 62;
  --canvas-background: rgb(252 252 252) !important;
  --canvas-card-label-color: rgb(138 145 153 / 0.4) !important;
  --canvas-color-1: 240 113 113 !important;
  --canvas-color-2: 250 141 62 !important;
  --canvas-color-3: 242 174 73 !important;
  --canvas-color-4: 134 179 0 !important;
  --canvas-color-5: 76 191 153 !important;
  --canvas-color-6: 163 122 204 !important;
  --canvas-dot-pattern: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 30%) !important;
  --caret-color: rgb(71 138 204) !important;
  --checkbox-border-color: rgb(138 145 153 / 0.4) !important;
  --checkbox-border-color-hover: rgb(120 123 128 / 0.6) !important;
  --checkbox-color: rgb(255 170 51) !important;
  --checkbox-color-hover: rgb(255 170 51 / 0.8) !important;
  --checkbox-marker-color: rgb(252 252 252) !important;
  --checklist-done-color: rgb(120 123 128 / 0.6) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(243 244 245) !important;
  --code-border-color: rgb(107 125 143 / 0.12) !important;
  --code-bracket-background: rgb(107 125 143 / 0.12) !important;
  --code-comment: rgb(120 123 128 / 0.6) !important;
  --code-function: rgb(242 174 73) !important;
  --code-important: rgb(230 186 126) !important;
  --code-keyword: rgb(250 141 62) !important;
  --code-normal: rgb(92 97 102) !important;
  --code-operator: rgb(237 147 102) !important;
  --code-property: rgb(57 158 230) !important;
  --code-punctuation: rgb(92 97 102) !important;
  --code-string: rgb(134 179 0) !important;
  --code-tag: rgb(85 180 212) !important;
  --code-value: rgb(163 122 204) !important;
  --codeFont: Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(138 145 153 / 0.4) !important;
  --collapse-icon-color-collapsed: rgb(255 170 51) !important;
  --color-accent: hsl(35, 100%, 60%) !important;
  --color-accent-1: hsl(34, 101%, 64.5%) !important;
  --color-accent-2: hsl(32, 102%, 69%) !important;
  --color-accent-hsl: 35, 100%, 60% !important;
  --color-base-00: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 0%) !important;
  --color-base-05: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 5%) !important;
  --color-base-10: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 10%) !important;
  --color-base-100: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 100%) !important;
  --color-base-20: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 20%) !important;
  --color-base-25: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 25%) !important;
  --color-base-30: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 30%) !important;
  --color-base-35: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 35%) !important;
  --color-base-40: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 40%) !important;
  --color-base-50: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 50%) !important;
  --color-base-60: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 60%) !important;
  --color-base-70: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 70%) !important;
  --color-blue: rgb(57 158 230) !important;
  --color-blue-rgb: 57 158 230 !important;
  --color-cyan: rgb(76 191 153) !important;
  --color-cyan-rgb: 76 191 153 !important;
  --color-green: rgb(134 179 0) !important;
  --color-green-rgb: 134 179 0 !important;
  --color-orange: rgb(250 141 62) !important;
  --color-orange-rgb: 250 141 62 !important;
  --color-pink: rgb(237 147 102) !important;
  --color-pink-rgb: 237 147 102 !important;
  --color-purple: rgb(163 122 204) !important;
  --color-purple-rgb: 163 122 204 !important;
  --color-red: rgb(240 113 113) !important;
  --color-red-rgb: 240 113 113 !important;
  --color-yellow: rgb(242 174 73) !important;
  --color-yellow-rgb: 242 174 73 !important;
  --common-accent: 255 170 51 !important;
  --common-error: 230 80 80 !important;
  --dark: rgb(92 97 102) !important;
  --darkgray: rgb(92 97 102) !important;
  --divider-color: rgb(107 125 143 / 0.12) !important;
  --divider-color-hover: rgb(255 170 51) !important;
  --dropdown-background: rgb(107 125 143 / 0.12) !important;
  --dropdown-background-hover: rgb(86 114 143 / 0.12) !important;
  --editor-bg: 252 252 252 !important;
  --editor-fg: 92 97 102 !important;
  --editor-guide-active: 138 145 153 / 0.35 !important;
  --editor-guide-normal: 138 145 153 / 0.18 !important;
  --editor-gutter-active: 138 145 153 / 0.8 !important;
  --editor-gutter-normal: 138 145 153 / 0.4 !important;
  --editor-line: 138 145 153 / 0.1 !important;
  --editor-match-active: 159 64 255 / 0.17 !important;
  --editor-match-inactive: 159 64 255 / 0.8 !important;
  --editor-selection-active: 3 91 214 / 0.15 !important;
  --editor-selection-inactive: 3 91 214 / 0.07 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(107 125 143 / 0.12), inset 0 0 0 1px rgb(107 125 143 / 0.12) !important;
  --embed-border-start: 2px solid rgb(255 170 51) !important;
  --file-header-background: rgb(252 252 252) !important;
  --file-header-background-focused: rgb(252 252 252) !important;
  --file-header-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --fill: rgb(248 249 250) !important;
  --flair-background: rgb(107 125 143 / 0.12) !important;
  --flair-color: rgb(92 97 102) !important;
  --font-interface: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Inter, Heiti, Dotum !important;
  --font-mermaid: Inter, Heiti, Dotum !important;
  --font-monospace: Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: Monaspace Neon !important;
  --font-print: Lora, Songti, Batang, Arial' !important;
  --font-text: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Lora, Songti, Batang !important;
  --footnote-divider-color: rgb(107 125 143 / 0.12) !important;
  --footnote-id-color: rgb(120 123 128 / 0.6) !important;
  --footnote-id-color-no-occurrences: rgb(138 145 153 / 0.4) !important;
  --footnote-input-background-active: rgb(107 125 143 / 0.12) !important;
  --graph-line: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 35%) !important;
  --graph-node: rgb(120 123 128 / 0.6) !important;
  --graph-node-attachment: rgb(242 174 73) !important;
  --graph-node-focused: rgb(255 170 51) !important;
  --graph-node-tag: rgb(134 179 0) !important;
  --graph-node-unresolved: rgb(138 145 153 / 0.4) !important;
  --graph-text: rgb(92 97 102) !important;
  --gray: rgb(120 123 128 / 0.6) !important;
  --h1-color: rgb(250 141 62) !important;
  --h1-line-height: normal !important;
  --h1-size: 1.8em !important;
  --h1-weight: 500 !important;
  --h2-color: rgb(242 174 73) !important;
  --h2-line-height: normal !important;
  --h2-size: 1.6em !important;
  --h2-style: italic !important;
  --h2-weight: 500 !important;
  --h3-color: rgb(230 186 126) !important;
  --h3-line-height: normal !important;
  --h3-size: 1.4em !important;
  --h3-weight: 500 !important;
  --h4-color: rgb(237 147 102) !important;
  --h4-line-height: normal !important;
  --h4-size: 1.2em !important;
  --h4-weight: 500 !important;
  --h5-color: rgb(237 147 102) !important;
  --h5-line-height: normal !important;
  --h5-size: 1em !important;
  --h5-style: italic !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(237 147 102) !important;
  --h6-line-height: normal !important;
  --h6-size: 0.8em !important;
  --h6-weight: 700 !important;
  --headerFont: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(138 145 153 / 0.4) !important;
  --highlight: rgb(159 64 255 / 0.17) !important;
  --hr-color: rgb(107 125 143 / 0.12) !important;
  --icon-color: rgb(138 145 153) !important;
  --icon-color-active: hsl(35, 100%, 60%) !important;
  --icon-color-focused: hsl(34, 101%, 64.5%) !important;
  --icon-color-hover: rgb(138 145 153 / 0.8) !important;
  --indentation-guide-color: rgb(138 145 153 / 0.18) !important;
  --indentation-guide-color-active: rgb(138 145 153 / 0.35) !important;
  --inline-title-color: rgb(57 158 230) !important;
  --inline-title-line-height: normal !important;
  --inline-title-size: 2em !important;
  --inline-title-style: italic !important;
  --inline-title-weight: bold !important;
  --input-date-separator: rgb(138 145 153 / 0.4) !important;
  --input-placeholder-color: rgb(138 145 153 / 0.4) !important;
  --interactive-accent: rgb(255 170 51) !important;
  --interactive-accent-hover: rgb(255 170 51 / 0.8) !important;
  --interactive-accent-hsl: 35, 100%, 60% !important;
  --interactive-hover: rgb(86 114 143 / 0.12) !important;
  --interactive-normal: rgb(107 125 143 / 0.12) !important;
  --italic-color: rgb(163 122 204) !important;
  --light: rgb(252 252 252) !important;
  --lightgray: rgb(248 249 250) !important;
  --link-color: rgb(71 138 204) !important;
  --link-color-hover: rgb(71 138 204 / 0.8) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(71 138 204) !important;
  --link-external-color-hover: rgb(71 138 204 / 0.8) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: rgb(71 138 204) !important;
  --link-unresolved-decoration-color: hsla(35, 100%, 60%, 0.3) !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(237 147 102) !important;
  --list-marker-color-collapsed: rgb(237 147 102 / 0.4) !important;
  --list-marker-color-hover: rgb(237 147 102 / 0.8) !important;
  --menu-background: rgb(248 249 250) !important;
  --menu-border-color: rgb(107 125 143 / 0.12) !important;
  --metadata-border-color: rgb(107 125 143 / 0.12) !important;
  --metadata-divider-color: rgb(107 125 143 / 0.12) !important;
  --metadata-input-background-active: rgb(107 125 143 / 0.12) !important;
  --metadata-input-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(92 97 102) !important;
  --metadata-label-background-active: rgb(107 125 143 / 0.12) !important;
  --metadata-label-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(120 123 128 / 0.6) !important;
  --metadata-label-text-color-hover: rgb(120 123 128 / 0.6) !important;
  --metadata-property-background-active: rgb(107 125 143 / 0.12) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(86 114 143 / 0.12) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(107 125 143 / 0.12) !important;
  --modal-background: rgb(252 252 252) !important;
  --modal-border-color: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 40%) !important;
  --nav-collapse-icon-color: rgb(138 145 153 / 0.4) !important;
  --nav-collapse-icon-color-collapsed: rgb(138 145 153 / 0.4) !important;
  --nav-heading-color: rgb(92 97 102) !important;
  --nav-heading-color-collapsed: rgb(138 145 153 / 0.4) !important;
  --nav-heading-color-collapsed-hover: rgb(120 123 128 / 0.6) !important;
  --nav-heading-color-hover: rgb(92 97 102) !important;
  --nav-indentation-guide-color: rgb(138 145 153 / 0.18) !important;
  --nav-item-background-active: rgb(107 125 143 / 0.12) !important;
  --nav-item-background-hover: rgb(107 125 143 / 0.12) !important;
  --nav-item-background-selected: hsla(35, 100%, 60%, 0.15) !important;
  --nav-item-color: rgb(120 123 128 / 0.6) !important;
  --nav-item-color-active: rgb(92 97 102) !important;
  --nav-item-color-highlighted: rgb(255 170 51) !important;
  --nav-item-color-hover: rgb(92 97 102) !important;
  --nav-item-color-selected: rgb(92 97 102) !important;
  --nav-tag-color: rgb(138 145 153 / 0.4) !important;
  --nav-tag-color-active: rgb(120 123 128 / 0.6) !important;
  --nav-tag-color-hover: rgb(120 123 128 / 0.6) !important;
  --pdf-background: rgb(252 252 252) !important;
  --pdf-page-background: rgb(252 252 252) !important;
  --pdf-sidebar-background: rgb(252 252 252) !important;
  --pill-border-color: rgb(107 125 143 / 0.12) !important;
  --pill-border-color-hover: rgb(107 125 143 / 0.12) !important;
  --pill-color: rgb(120 123 128 / 0.6) !important;
  --pill-color-hover: rgb(92 97 102) !important;
  --pill-color-remove: rgb(138 145 153 / 0.4) !important;
  --pill-color-remove-hover: rgb(255 170 51) !important;
  --prompt-background: rgb(252 252 252) !important;
  --prompt-border-color: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 40%) !important;
  --raised-background: color-mix(in srgb, rgb(252 252 252) 65%, transparent) linear-gradient(rgb(252 252 252), color-mix(in srgb, rgb(252 252 252) 65%, transparent)) !important;
  --ribbon-background: rgb(248 249 250) !important;
  --ribbon-background-collapsed: rgb(252 252 252) !important;
  --search-clear-button-color: rgb(120 123 128 / 0.6) !important;
  --search-icon-color: rgb(120 123 128 / 0.6) !important;
  --search-result-background: rgb(252 252 252) !important;
  --secondary: rgb(255 170 51) !important;
  --setting-group-heading-color: rgb(92 97 102) !important;
  --setting-items-background: rgb(243 244 245) !important;
  --setting-items-border-color: rgb(107 125 143 / 0.12) !important;
  --slider-thumb-border-color: rgb(107 125 143 / 0.12) !important;
  --slider-track-background: rgb(107 125 143 / 0.12) !important;
  --status-bar-background: rgb(248 249 250) !important;
  --status-bar-border-color: rgb(107 125 143 / 0.12) !important;
  --status-bar-text-color: rgb(120 123 128 / 0.6) !important;
  --suggestion-background: rgb(252 252 252) !important;
  --sync-avatar-color-1: rgb(240 113 113) !important;
  --sync-avatar-color-2: rgb(250 141 62) !important;
  --sync-avatar-color-3: rgb(242 174 73) !important;
  --sync-avatar-color-4: rgb(134 179 0) !important;
  --sync-avatar-color-5: rgb(76 191 153) !important;
  --sync-avatar-color-6: rgb(57 158 230) !important;
  --sync-avatar-color-7: rgb(163 122 204) !important;
  --sync-avatar-color-8: rgb(237 147 102) !important;
  --syntax-comment: 120 123 128 / 0.6 !important;
  --syntax-constant: 163 122 204 !important;
  --syntax-entity: 57 158 230 !important;
  --syntax-func: 242 174 73 !important;
  --syntax-keyword: 250 141 62 !important;
  --syntax-markup: 240 113 113 !important;
  --syntax-operator: 237 147 102 !important;
  --syntax-regexp: 76 191 153 !important;
  --syntax-special: 230 186 126 !important;
  --syntax-string: 134 179 0 !important;
  --syntax-tag: 85 180 212 !important;
  --tab-background-active: rgb(252 252 252) !important;
  --tab-container-background: rgb(248 249 250) !important;
  --tab-divider-color: rgb(107 125 143 / 0.12) !important;
  --tab-outline-color: rgb(107 125 143 / 0.12) !important;
  --tab-switcher-background: rgb(248 249 250) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(248 249 250), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(35, 100%, 60%) !important;
  --tab-text-color: rgb(138 145 153 / 0.4) !important;
  --tab-text-color-active: rgb(120 123 128 / 0.6) !important;
  --tab-text-color-focused: rgb(120 123 128 / 0.6) !important;
  --tab-text-color-focused-active: rgb(120 123 128 / 0.6) !important;
  --tab-text-color-focused-active-current: rgb(92 97 102) !important;
  --tab-text-color-focused-highlighted: rgb(255 170 51) !important;
  --table-add-button-border-color: rgb(107 125 143 / 0.12) !important;
  --table-border-color: rgb(107 125 143 / 0.12) !important;
  --table-drag-handle-background-active: rgb(255 170 51) !important;
  --table-drag-handle-color: rgb(138 145 153 / 0.4) !important;
  --table-drag-handle-color-active: rgb(248 249 250) !important;
  --table-header-border-color: rgb(107 125 143 / 0.12) !important;
  --table-header-color: rgb(92 97 102) !important;
  --table-header-weight: 500 !important;
  --table-selection: hsla(35, 100%, 60%, 0.1) !important;
  --table-selection-border-color: rgb(255 170 51) !important;
  --tag-background: rgb(85 180 212 / 0.2) !important;
  --tag-background-hover: rgb(85 180 212 / 0.4) !important;
  --tag-border-color: hsla(35, 100%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(35, 100%, 60%, 0.15) !important;
  --tag-color: rgb(85 180 212) !important;
  --tag-color-hover: rgb(85 180 212 / 0.8) !important;
  --tertiary: rgb(255 170 51 / 0.8) !important;
  --text: rgb(138 145 153) !important;
  --text-accent: rgb(255 170 51) !important;
  --text-accent-hover: rgb(255 170 51 / 0.8) !important;
  --text-error: rgb(230 80 80) !important;
  --text-faint: rgb(138 145 153 / 0.4) !important;
  --text-highlight-bg: rgb(159 64 255 / 0.17) !important;
  --text-muted: rgb(120 123 128 / 0.6) !important;
  --text-normal: rgb(92 97 102) !important;
  --text-on-accent: rgb(248 249 250) !important;
  --text-on-accent-inverted: rgb(138 145 153) !important;
  --text-selection: rgb(3 91 214 / 0.15) !important;
  --text-success: rgb(108 191 67) !important;
  --text-warning: rgb(255 170 51) !important;
  --textHighlight: rgb(159 64 255 / 0.17) !important;
  --titleFont: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(248 249 250) !important;
  --titlebar-background-focused: rgb(243 244 245) !important;
  --titlebar-border-color: rgb(107 125 143 / 0.12) !important;
  --titlebar-text-color: rgb(120 123 128 / 0.6) !important;
  --titlebar-text-color-focused: rgb(92 97 102) !important;
  --ui-bg: 248 249 250 !important;
  --ui-fg: 138 145 153 !important;
  --ui-line: 107 125 143 / 0.12 !important;
  --ui-panel-bg: 243 244 245 !important;
  --ui-panel-shadow: 0 0 0 / 0.15 !important;
  --ui-selection-active: 86 114 143 / 0.12 !important;
  --ui-selection-normal: 107 125 143 / 0.12 !important;
  --vault-profile-color: rgb(92 97 102) !important;
  --vault-profile-color-hover: rgb(92 97 102) !important;
  --vcs-added: 108 191 67 !important;
  --vcs-modified: 71 138 204 !important;
  --vcs-removed: 255 115 131 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 249, 250);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
  font-weight: 500;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(252, 252, 252);
  border-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(107, 125, 143, 0.12);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(85, 180, 212, 0.2);
  color: rgb(85, 180, 212);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 249, 250);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(107, 125, 143, 0.12);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 249, 250);
  border-left-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(92, 97, 102);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(134, 179, 0);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(134, 179, 0) none 0px;
  text-decoration-color: rgb(134, 179, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(163, 122, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 122, 204) none 0px;
  text-decoration-color: rgb(163, 122, 204);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(163, 122, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 122, 204) none 0px;
  text-decoration-color: rgb(163, 122, 204);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(134, 179, 0);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(134, 179, 0) none 0px;
  text-decoration-color: rgb(134, 179, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(108, 191, 67, 0.2);
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body del {
  background-color: rgba(255, 115, 131, 0.2);
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration: line-through from-font wavy rgba(255, 115, 131, 0.8);
  text-decoration-color: rgba(255, 115, 131, 0.8);
  text-decoration-style: wavy;
  text-decoration-thickness: from-font;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 170, 51);
  border-color: rgb(255, 170, 51);
}

html[saved-theme="light"] body p {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(120, 123, 128, 0.6) none 0px;
  text-decoration-color: rgba(120, 123, 128, 0.6);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration-color: rgb(71, 138, 204);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration-color: rgb(71, 138, 204);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration: rgba(255, 170, 51, 0.3);
  text-decoration-color: rgba(255, 170, 51, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body dt {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ol > li {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ul > li {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body table {
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.938px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
  font-weight: 500;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(242, 174, 73);
  border-left-color: rgb(242, 174, 73);
  border-right-color: rgb(242, 174, 73);
  border-top-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body figcaption {
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(250, 141, 62);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(250, 141, 62);
  border-radius: 4px;
  border-right-color: rgb(250, 141, 62);
  border-top-color: rgb(250, 141, 62);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(255, 170, 51);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(138, 145, 153, 0.4);
  border-left-color: rgba(138, 145, 153, 0.4);
  border-right-color: rgba(138, 145, 153, 0.4);
  border-top-color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 76 191 153;
  background-color: rgba(76, 191, 153, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 240 113 113;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 240 113 113;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 163 122 204;
  background-color: rgba(163, 122, 204, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 240 113 113;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 57 158 230;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 57 158 230;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 250 141 62;
  background-color: rgba(250, 141, 62, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 92 97 102;
  background-color: rgba(92, 97, 102, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 134 179 0;
  background-color: rgba(134, 179, 0, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 76 191 153;
  background-color: rgba(76, 191, 153, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 57 158 230;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 250 141 62;
  background-color: rgba(250, 141, 62, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
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
  background-color: rgba(107, 125, 143, 0.12);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
  border-bottom-color: color(srgb 0.8 0.813333 0.828235);
  border-left-color: color(srgb 0.8 0.813333 0.828235);
  border-right-color: color(srgb 0.8 0.813333 0.828235);
  border-top-color: color(srgb 0.8 0.813333 0.828235);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.8 0.813333 0.828235);
  border-left-color: color(srgb 0.8 0.813333 0.828235);
  border-right-color: color(srgb 0.8 0.813333 0.828235);
  border-top-color: color(srgb 0.8 0.813333 0.828235);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 249, 250);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(107, 125, 143, 0.12);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(85, 180, 212, 0.2);
  border-bottom-color: rgba(255, 170, 51, 0.15);
  border-left-color: rgba(255, 170, 51, 0.15);
  border-right-color: rgba(255, 170, 51, 0.15);
  border-top-color: rgba(255, 170, 51, 0.15);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(85, 180, 212);
}

html[saved-theme="light"] body h1 {
  color: rgb(250, 141, 62);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(242, 174, 73);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(57, 158, 230);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(230, 186, 126);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(138, 145, 153, 0.18);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(92, 97, 102);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 145, 153);
  border-left-color: rgb(138, 145, 153);
  border-right-color: rgb(138, 145, 153);
  border-top-color: rgb(138, 145, 153);
  color: rgb(138, 145, 153);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(120, 123, 128, 0.6);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(138, 145, 153);
  border-left-color: rgb(138, 145, 153);
  border-right-color: rgb(138, 145, 153);
  border-top-color: rgb(138, 145, 153);
  color: rgb(138, 145, 153);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(138, 145, 153);
  stroke: rgb(138, 145, 153);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(138, 145, 153, 0.4);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(248, 249, 250);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body sub {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body summary {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body sup {
  color: rgb(92, 97, 102);
  font-size: 12.8px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(85, 180, 212, 0.2);
  border-bottom-color: rgba(255, 170, 51, 0.15);
  border-left-color: rgba(255, 170, 51, 0.15);
  border-right-color: rgba(255, 170, 51, 0.15);
  border-top-color: rgba(255, 170, 51, 0.15);
  color: rgb(85, 180, 212);
}`,
  },
};
