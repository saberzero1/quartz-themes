import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "kurokula",
    modes: ["dark"],
    variations: [],
    fonts: ["atkinson-hyperlegible", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 260.488 !important;
  --accent-l: 55.8824% !important;
  --accent-s: 18.2222% !important;
  --background-modifier-active-hover: hsla(260.488, 18.2222%, 55.8824%, 0.1) !important;
  --background-primary: #141515 !important;
  --background-secondary: #212121 !important;
  --bases-cards-background: #141515 !important;
  --bases-cards-border-width: 2px !important;
  --bases-group-heading-property-color: rgba(255, 255, 255, 0.8) !important;
  --bases-group-heading-property-size: 14px !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-cell-background-active: #141515 !important;
  --bases-table-cell-background-selected: hsla(260.488, 18.2222%, 55.8824%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(260.488, 18.2222%, 55.8824%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-header-background: #141515 !important;
  --bases-table-header-color: rgba(255, 255, 255, 0.8) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: #141515 !important;
  --blockquote-border-color: #515151 !important;
  --blockquote-border-thickness: 8px !important;
  --blockquote-color: #FFC663 !important;
  --blockquote-font-style: italic !important;
  --bodyFont: "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #FFFFFF !important;
  --bold-weight: 800 !important;
  --border-width: 2px !important;
  --button-radius: 8px !important;
  --callout-border-opacity: 0.45;
  --callout-border-width: 1px;
  --callout-bug: 158, 96, 236;
  --callout-default: 104, 144, 215;
  --callout-error: 210, 62, 8;
  --callout-example: 204, 131, 189;
  --callout-fail: 182, 96, 86;
  --callout-important: 30, 249, 245;
  --callout-info: 42, 185, 255;
  --callout-padding: 16px;
  --callout-question: 171, 123, 78;
  --callout-quote: 157, 89, 24;
  --callout-radius: 8px;
  --callout-success: 84, 202, 116;
  --callout-summary: 169, 148, 255;
  --callout-tip: 96, 190, 190;
  --callout-todo: 161, 217, 255;
  --callout-warning: 229, 150, 5;
  --canvas-background: #141515 !important;
  --canvas-card-label-color: rgba(255, 255, 255, 0.6) !important;
  --caret-color: rgb(255, 255, 255) !important;
  --checkbox-border-color: #94959B !important;
  --checkbox-border-color-hover: #FFFFFF !important;
  --checkbox-color: #515151 !important;
  --checkbox-color-hover: #85B1A9 !important;
  --checkbox-marker-color: #94959B !important;
  --checkbox-size: 24px !important;
  --checklist-done-color: #94959B !important;
  --code-background: #141515 !important;
  --code-comment: #FCFFB8 !important;
  --code-function: #DBBB43 !important;
  --code-important: #1EF9F5 !important;
  --code-inline: #DBBB43 !important;
  --code-keyword: #6890D7 !important;
  --code-normal: #FFFFFF !important;
  --code-operator: #94959B !important;
  --code-property: #CC83BD !important;
  --code-punctuation: #94959B !important;
  --code-radius: 12px !important;
  --code-string: #85B1A9 !important;
  --code-tag: #2AB9FF !important;
  --code-value: #9D5918 !important;
  --codeFont: "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #DDD0C4 !important;
  --collapse-icon-color-collapsed: #94959B !important;
  --color-accent: hsl(260.488, 18.2222%, 55.8824%) !important;
  --color-accent-1: hsl(257.488, 18.58664%, 64.26476%) !important;
  --color-accent-2: hsl(255.488, 19.13331%, 72.0883%) !important;
  --color-accent-hsl: 260.488, 18.2222%, 55.8824% !important;
  --dark: rgb(255, 255, 255) !important;
  --darkgray: rgb(255, 255, 255) !important;
  --divider-color: #515151 !important;
  --divider-color-hover: #FFFFFF !important;
  --divider-width-hover: 2px !important;
  --embed-block-shadow-hover: 0 0 0 1px #363636,
		inset 0 0 0 1px #363636 !important;
  --embed-border-left: 2px solid hsl(260.488, 18.2222%, 55.8824%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(260.488, 18.2222%, 55.8824%) !important;
  --file-header-background: #141515 !important;
  --file-header-background-focused: #141515 !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font-size: 12px !important;
  --file-header-justify: left !important;
  --flair-color: rgb(255, 255, 255) !important;
  --font-mermaid: "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Atkinson Hyperlegible", "serif", Arial' !important;
  --font-text: "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Atkinson Hyperlegible", "serif" !important;
  --font-ui-medium: 18px !important;
  --font-ui-small: 16px !important;
  --font-ui-smaller: 14px !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgba(255, 255, 255, 0.8) !important;
  --footnote-id-color-no-occurrences: rgba(255, 255, 255, 0.6) !important;
  --graph-node: rgba(255, 255, 255, 0.8) !important;
  --graph-node-focused: hsl(257.488, 18.58664%, 64.26476%) !important;
  --graph-node-unresolved: rgba(255, 255, 255, 0.6) !important;
  --graph-text: rgb(255, 255, 255) !important;
  --gray: rgba(255, 255, 255, 0.8) !important;
  --h-font-style: oblique 10deg !important;
  --h-font-variant: proportional-nums !important;
  --h-weight: 900 !important;
  --h1-color: #94959B !important;
  --h1-style: oblique 10deg !important;
  --h1-variant: proportional-nums !important;
  --h1-weight: 900 !important;
  --h2-color: #60BEBE !important;
  --h2-style: oblique 10deg !important;
  --h2-variant: proportional-nums !important;
  --h2-weight: 900 !important;
  --h3-color: #CC83BD !important;
  --h3-style: oblique 10deg !important;
  --h3-variant: proportional-nums !important;
  --h3-weight: 900 !important;
  --h4-color: #DBBB43 !important;
  --h4-style: oblique 10deg !important;
  --h4-variant: proportional-nums !important;
  --h4-weight: 900 !important;
  --h5-color: #B66056 !important;
  --h5-style: oblique 10deg !important;
  --h5-variant: proportional-nums !important;
  --h5-weight: 900 !important;
  --h6-color: #6890D7 !important;
  --h6-style: oblique 10deg !important;
  --h6-variant: proportional-nums !important;
  --h6-weight: 900 !important;
  --headerFont: "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #FFFFFF !important;
  --highlight: hsla(260.488, 18.2222%, 55.8824%, 0.1) !important;
  --hr-color: rgba(148, 149, 155, 0.3) !important;
  --hr-thickness: 4px !important;
  --icon-color: #DDD0C4 !important;
  --icon-color-active: #A994FF !important;
  --icon-color-focused: #9E60EC !important;
  --icon-color-hover: #DBBB43 !important;
  --icon-opacity: 0.75 !important;
  --icon-opacity-hover: 0.9 !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #94959B !important;
  --inline-title-size: 28px !important;
  --inline-title-style: oblique 10deg !important;
  --inline-title-variant: proportional-nums !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgba(255, 255, 255, 0.6) !important;
  --input-placeholder-color: rgba(255, 255, 255, 0.6) !important;
  --input-radius: 4px !important;
  --interactive-accent: hsl(260.488, 18.2222%, 55.8824%) !important;
  --interactive-accent-hover: hsl(257.488, 18.58664%, 64.26476%) !important;
  --interactive-accent-hsl: 260.488, 18.2222%, 55.8824% !important;
  --italic-color: #FFFFFF !important;
  --italic-weight: 300 !important;
  --kuro-black-dark: #141515 !important;
  --kuro-black-dark-rgb: 20, 21, 21 !important;
  --kuro-black-light: #515151 !important;
  --kuro-black-light-rgb: 81, 81, 81 !important;
  --kuro-black-normal: #333333 !important;
  --kuro-black-normal-rgb: 51, 51, 51 !important;
  --kuro-blue-dark: #6890D7 !important;
  --kuro-blue-dark-rgb: 104, 144, 215 !important;
  --kuro-blue-light: #A1D9FF !important;
  --kuro-blue-light-rgb: 161, 217, 255 !important;
  --kuro-blue-normal: #2AB9FF !important;
  --kuro-blue-normal-rgb: 42, 185, 255 !important;
  --kuro-brown-dark: #837369 !important;
  --kuro-brown-dark-rgb: 131, 115, 105 !important;
  --kuro-brown-light: #F9CFB9 !important;
  --kuro-brown-light-rgb: 249, 207, 185 !important;
  --kuro-brown-normal: #9D5918 !important;
  --kuro-brown-normal-rgb: 157, 89, 24 !important;
  --kuro-code-attribute: #FFF700 !important;
  --kuro-code-bg: #141515 !important;
  --kuro-code-comment: #FCFFB8 !important;
  --kuro-code-constant: #2AB9FF !important;
  --kuro-code-constant-builtin: #2AB9FF !important;
  --kuro-code-constant-builtin-bg: #6890D7 !important;
  --kuro-code-constant-character-escape: #F9CFB9 !important;
  --kuro-code-constant-numeric: #60BEBE !important;
  --kuro-code-constructor: #1EF9F5 !important;
  --kuro-code-fg: #FFFFFF !important;
  --kuro-code-function: #DBBB43 !important;
  --kuro-code-function-macro: #A994FF !important;
  --kuro-code-keyword: #6890D7 !important;
  --kuro-code-label: #FCFFB8 !important;
  --kuro-code-namespace: #1EF9F5 !important;
  --kuro-code-operator: #94959B !important;
  --kuro-code-punctuation: #94959B !important;
  --kuro-code-special: #C1FFAE !important;
  --kuro-code-string: #85B1A9 !important;
  --kuro-code-type: #E59605 !important;
  --kuro-code-type-builtin: #A1D9FF !important;
  --kuro-code-type-enum-variant: #FCFFB8 !important;
  --kuro-code-variable: #CC83BD !important;
  --kuro-code-variable-other: #9D5918 !important;
  --kuro-code-variable-other-member: #AB7B4E !important;
  --kuro-cyan-dark: #60BEBE !important;
  --kuro-cyan-dark-rgb: 96, 190, 190 !important;
  --kuro-cyan-light: #8EFFF3 !important;
  --kuro-cyan-light-rgb: 142, 255, 243 !important;
  --kuro-cyan-normal: #1EF9F5 !important;
  --kuro-cyan-normal-rgb: 30, 249, 245 !important;
  --kuro-green-dark: #85B1A9 !important;
  --kuro-green-dark-rgb: 133, 177, 169 !important;
  --kuro-green-light: #C1FFAE !important;
  --kuro-green-light-rgb: 193, 255, 174 !important;
  --kuro-green-normal: #54CA74 !important;
  --kuro-green-normal-rgb: 84, 202, 116 !important;
  --kuro-magenta-dark: #CC83BD !important;
  --kuro-magenta-dark-rgb: 204, 131, 189 !important;
  --kuro-magenta-light: #FFA2ED !important;
  --kuro-magenta-light-rgb: 255, 162, 237 !important;
  --kuro-magenta-normal: #FF50DA !important;
  --kuro-magenta-normal-rgb: 255, 80, 218 !important;
  --kuro-monospace-default: "JetBrainsMono Nerd Font", ui-monospace, SFMono-Regular, "Cascadia Code", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --kuro-orange-dark: #AB7B4E !important;
  --kuro-orange-dark-rgb: 171, 123, 78 !important;
  --kuro-orange-light: #FFC663 !important;
  --kuro-orange-light-rgb: 255, 198, 99 !important;
  --kuro-orange-normal: #E59605 !important;
  --kuro-orange-normal-rgb: 229, 150, 5 !important;
  --kuro-purple-dark: #887AA3 !important;
  --kuro-purple-dark-rgb: 136, 122, 163 !important;
  --kuro-purple-light: #A994FF !important;
  --kuro-purple-light-rgb: 169, 148, 255 !important;
  --kuro-purple-normal: #9E60EC !important;
  --kuro-purple-normal-rgb: 158, 96, 236 !important;
  --kuro-red-dark: #B66056 !important;
  --kuro-red-dark-rgb: 182, 96, 86 !important;
  --kuro-red-light: #FFB7B7 !important;
  --kuro-red-light-rgb: 255, 183, 183 !important;
  --kuro-red-normal: #D23E08 !important;
  --kuro-red-normal-rgb: 210, 62, 8 !important;
  --kuro-white-dark: #94959B !important;
  --kuro-white-dark-rgb: 148, 149, 155 !important;
  --kuro-white-light: #FFFFFF !important;
  --kuro-white-light-rgb: 255, 255, 255 !important;
  --kuro-white-normal: #DDD0C4 !important;
  --kuro-white-normal-rgb: 221, 208, 196 !important;
  --kuro-yellow-dark: #DBBB43 !important;
  --kuro-yellow-dark-rgb: 219, 187, 67 !important;
  --kuro-yellow-light: #FCFFB8 !important;
  --kuro-yellow-light-rgb: 252, 255, 184 !important;
  --kuro-yellow-normal: #FFF700 !important;
  --kuro-yellow-normal-rgb: 255, 247, 0 !important;
  --light: #141515 !important;
  --lightgray: #212121 !important;
  --link-color: #2AB9FF !important;
  --link-color-hover: #A1D9FF !important;
  --link-external-color: #54CA74 !important;
  --link-external-color-hover: #C1FFAE !important;
  --link-unresolved-color: hsl(257.488, 18.58664%, 64.26476%) !important;
  --link-unresolved-decoration-color: hsla(260.488, 18.2222%, 55.8824%, 0.3) !important;
  --list-bullet-size: 0.4em !important;
  --list-marker-color: #94959B !important;
  --list-marker-color-collapsed: hsl(257.488, 18.58664%, 64.26476%) !important;
  --list-marker-color-hover: rgba(255, 255, 255, 0.8) !important;
  --menu-background: #212121 !important;
  --menu-border-width: 2px !important;
  --metadata-input-text-color: rgb(255, 255, 255) !important;
  --metadata-label-text-color: rgba(255, 255, 255, 0.8) !important;
  --metadata-label-text-color-hover: rgba(255, 255, 255, 0.8) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px #3f3f3f !important;
  --metadata-sidebar-input-font-size: 16px !important;
  --metadata-sidebar-label-font-size: 16px !important;
  --modal-background: #141515 !important;
  --modal-border-width: 2px !important;
  --modal-radius: 16px !important;
  --nav-collapse-icon-color: #DDD0C4 !important;
  --nav-collapse-icon-color-collapsed: rgba(255, 255, 255, 0.6) !important;
  --nav-heading-color: rgb(255, 255, 255) !important;
  --nav-heading-color-collapsed: rgba(255, 255, 255, 0.6) !important;
  --nav-heading-color-collapsed-hover: rgba(255, 255, 255, 0.8) !important;
  --nav-heading-color-hover: rgb(255, 255, 255) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-selected: hsla(260.488, 18.2222%, 55.8824%, 0.15) !important;
  --nav-item-color: rgba(255, 255, 255, 0.8) !important;
  --nav-item-color-active: rgb(255, 255, 255) !important;
  --nav-item-color-highlighted: hsl(255.488, 19.13331%, 72.0883%) !important;
  --nav-item-color-hover: rgb(255, 255, 255) !important;
  --nav-item-color-selected: rgb(255, 255, 255) !important;
  --nav-item-size: 16px !important;
  --nav-tag-color: rgba(255, 255, 255, 0.6) !important;
  --nav-tag-color-active: rgba(255, 255, 255, 0.8) !important;
  --nav-tag-color-hover: rgba(255, 255, 255, 0.8) !important;
  --pdf-background: #141515 !important;
  --pdf-page-background: #141515 !important;
  --pdf-sidebar-background: #141515 !important;
  --pill-border-width: 2px !important;
  --pill-color: rgba(255, 255, 255, 0.8) !important;
  --pill-color-hover: rgb(255, 255, 255) !important;
  --pill-color-remove: rgba(255, 255, 255, 0.6) !important;
  --pill-color-remove-hover: hsl(257.488, 18.58664%, 64.26476%) !important;
  --prompt-background: #141515 !important;
  --prompt-border-color: #887AA3 !important;
  --prompt-border-width: 2px !important;
  --prompt-input-height: 48px !important;
  --prompt-width: 720px !important;
  --radius-l: 16px !important;
  --ribbon-background: #212121 !important;
  --ribbon-background-collapsed: #141515 !important;
  --scrollbar-radius: 16px !important;
  --search-clear-button-color: #B66056 !important;
  --search-icon-color: #887AA3 !important;
  --search-result-background: #141515 !important;
  --secondary: hsl(257.488, 18.58664%, 64.26476%) !important;
  --setting-group-heading-color: rgb(255, 255, 255) !important;
  --setting-group-heading-size: 18px !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-border-width: 2px !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #94959B !important;
  --status-bar-background: #141515 !important;
  --status-bar-border-color: #515151 !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-font-size: 14px !important;
  --status-bar-text-color: #887AA3 !important;
  --suggestion-background: #141515 !important;
  --tab-background-active: #141515 !important;
  --tab-container-background: #212121 !important;
  --tab-font-size: 12px !important;
  --tab-outline-color: #515151 !important;
  --tab-radius-active: 0px !important;
  --tab-stacked-font-size: 16px !important;
  --tab-switcher-background: #212121 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #212121, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(260.488, 18.2222%, 55.8824%) !important;
  --tab-text-color: rgba(255, 255, 255, 0.6) !important;
  --tab-text-color-active: rgba(255, 255, 255, 0.8) !important;
  --tab-text-color-focused: rgba(255, 255, 255, 0.8) !important;
  --tab-text-color-focused-active: rgba(255, 255, 255, 0.8) !important;
  --tab-text-color-focused-active-current: rgb(255, 255, 255) !important;
  --tab-text-color-focused-highlighted: hsl(257.488, 18.58664%, 64.26476%) !important;
  --table-drag-handle-background-active: hsl(260.488, 18.2222%, 55.8824%) !important;
  --table-drag-handle-color: rgba(255, 255, 255, 0.6) !important;
  --table-drag-handle-color-active: rgb(255, 255, 255) !important;
  --table-header-color: rgb(255, 255, 255) !important;
  --table-header-weight: 800 !important;
  --table-selection: hsla(260.488, 18.2222%, 55.8824%, 0.1) !important;
  --table-selection-border-color: hsl(260.488, 18.2222%, 55.8824%) !important;
  --tag-background: rgba(136, 122, 163, 0.5) !important;
  --tag-background-hover: rgba(136, 122, 163, 0.8) !important;
  --tag-border-color: hsla(260.488, 18.2222%, 55.8824%, 0.15) !important;
  --tag-border-color-hover: hsla(260.488, 18.2222%, 55.8824%, 0.15) !important;
  --tag-color: #DDD0C4 !important;
  --tag-color-hover: #FFFFFF !important;
  --tag-weight: 100 !important;
  --tertiary: hsl(255.488, 19.13331%, 72.0883%) !important;
  --text-accent: hsl(257.488, 18.58664%, 64.26476%) !important;
  --text-accent-hover: hsl(255.488, 19.13331%, 72.0883%) !important;
  --text-error: #FFB7B7 !important;
  --text-faint: rgba(255, 255, 255, 0.6) !important;
  --text-muted: rgba(255, 255, 255, 0.8) !important;
  --text-normal: rgb(255, 255, 255) !important;
  --text-on-accent: rgb(255, 255, 255) !important;
  --text-on-accent-inverted: #141515 !important;
  --text-selection: hsla(260.488, 18.2222%, 55.8824%, 0.33) !important;
  --text-success: #54CA74 !important;
  --text-warning: #E59605 !important;
  --textHighlight: hsla(260.488, 18.2222%, 55.8824%, 0.1) !important;
  --titleFont: "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #212121 !important;
  --titlebar-text-color: rgba(255, 255, 255, 0.8) !important;
  --titlebar-text-color-focused: rgb(255, 255, 255) !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-name-color: rgb(255, 255, 255) !important;
  --vault-name-font-size: 16px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgb(255, 255, 255) !important;
  --vault-profile-color-hover: rgb(255, 255, 255) !important;
  --vault-profile-font-size: 16px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 33, 33);
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(20, 21, 21);
  color: rgb(255, 255, 255);
}

html body .bases-table thead th {
  color: rgb(255, 255, 255);
  font-weight: 800;
}

html body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html body .canvas-sidebar {
  background-color: rgb(33, 33, 33);
  border-color: rgb(255, 255, 255);
}

html body .note-properties-key {
  color: rgba(255, 255, 255, 0.8);
}

html body .note-properties-row {
  border-color: rgba(255, 255, 255, 0.8);
}

html body .note-properties-tags {
  background-color: rgba(136, 122, 163, 0.5);
  color: rgb(221, 208, 196);
}

html body .note-properties-value {
  color: rgba(255, 255, 255, 0.8);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 33, 33);
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(81, 81, 81);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 33, 33);
  border-left-color: rgb(81, 81, 81);
  color: rgb(255, 255, 255);
}

html body div#quartz-root {
  background-color: rgb(20, 21, 21);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: rgb(219, 187, 67);
  color: rgb(20, 21, 21);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(20, 21, 21) none 0px;
  text-decoration-color: rgb(20, 21, 21);
}

html body del {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body h1.article-title {
  color: rgb(255, 255, 255);
  font-size: 12px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(148, 149, 155);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(81, 81, 81);
  border-color: rgb(81, 81, 81);
}

html body p {
  color: rgba(255, 255, 255, 0.8);
  outline: rgba(255, 255, 255, 0.8) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.8);
}`,
    links: `html body a.external, html footer a {
  color: rgb(84, 202, 116);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 202, 116) none 0px;
  text-decoration-color: rgb(84, 202, 116);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(42, 185, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 185, 255) none 0px;
  text-decoration-color: rgb(42, 185, 255);
}

html body a.internal.broken {
  color: rgb(157, 147, 181);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(157, 147, 181) none 0px;
  text-decoration: underline rgba(136, 122, 163, 0.3);
  text-decoration-color: rgba(136, 122, 163, 0.3);
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(255, 255, 255, 0.6);
}

html body blockquote {
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 224.656px;
}

html body td {
  color: rgb(255, 255, 255);
}

html body th {
  color: rgb(255, 255, 255);
  font-weight: 800;
}`,
    code: `html body code {
  border-bottom-color: rgb(219, 187, 67);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 187, 67);
  border-right-color: rgb(219, 187, 67);
  border-top-color: rgb(219, 187, 67);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(219, 187, 67);
  font-family: "JetBrainsMono Nerd Font", ui-monospace, SFMono-Regular, "Cascadia Code", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(51, 51, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(51, 51, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(255, 255, 255);
}

html body pre > code > [data-line] {
  border-left-color: rgb(219, 187, 67);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(219, 187, 67);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(219, 187, 67);
  border-left-color: rgb(219, 187, 67);
  border-right-color: rgb(219, 187, 67);
  border-top-color: rgb(219, 187, 67);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(51, 51, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body pre:has(> code) {
  background-color: rgb(51, 51, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(148, 149, 155);
  border-left-color: rgb(148, 149, 155);
  border-right-color: rgb(148, 149, 155);
  border-top-color: rgb(148, 149, 155);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(136, 122, 163);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(148, 149, 155);
  border-left-color: rgb(148, 149, 155);
  border-right-color: rgb(148, 149, 155);
  border-top-color: rgb(148, 149, 155);
  margin-left: -36px;
  width: 24px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
  color: rgb(104, 144, 215);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(104, 144, 215);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 169, 148, 255;
  background-color: rgba(169, 148, 255, 0.1);
  border-bottom-color: rgba(169, 148, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(169, 148, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(169, 148, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(169, 148, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 158, 96, 236;
  background-color: rgba(158, 96, 236, 0.1);
  border-bottom-color: rgba(158, 96, 236, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 96, 236, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(158, 96, 236, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(158, 96, 236, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 210, 62, 8;
  background-color: rgba(210, 62, 8, 0.1);
  border-bottom-color: rgba(210, 62, 8, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(210, 62, 8, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(210, 62, 8, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(210, 62, 8, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="example"] {
  --callout-color: 204, 131, 189;
  background-color: rgba(204, 131, 189, 0.1);
  border-bottom-color: rgba(204, 131, 189, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(204, 131, 189, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(204, 131, 189, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(204, 131, 189, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 182, 96, 86;
  background-color: rgba(182, 96, 86, 0.1);
  border-bottom-color: rgba(182, 96, 86, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(182, 96, 86, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(182, 96, 86, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(182, 96, 86, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="info"] {
  --callout-color: 42, 185, 255;
  background-color: rgba(42, 185, 255, 0.1);
  border-bottom-color: rgba(42, 185, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(42, 185, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(42, 185, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(42, 185, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  --callout-color: 104, 144, 215;
  background-color: rgba(104, 144, 215, 0.1);
  border-bottom-color: rgba(104, 144, 215, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(104, 144, 215, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(104, 144, 215, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(104, 144, 215, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="question"] {
  --callout-color: 171, 123, 78;
  background-color: rgba(171, 123, 78, 0.1);
  border-bottom-color: rgba(171, 123, 78, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(171, 123, 78, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(171, 123, 78, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(171, 123, 78, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 157, 89, 24;
  background-color: rgba(157, 89, 24, 0.1);
  border-bottom-color: rgba(157, 89, 24, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(157, 89, 24, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(157, 89, 24, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(157, 89, 24, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="success"] {
  --callout-color: 84, 202, 116;
  background-color: rgba(84, 202, 116, 0.1);
  border-bottom-color: rgba(84, 202, 116, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(84, 202, 116, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(84, 202, 116, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(84, 202, 116, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 96, 190, 190;
  background-color: rgba(96, 190, 190, 0.1);
  border-bottom-color: rgba(96, 190, 190, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(96, 190, 190, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(96, 190, 190, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(96, 190, 190, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 161, 217, 255;
  background-color: rgba(161, 217, 255, 0.1);
  border-bottom-color: rgba(161, 217, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(161, 217, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(161, 217, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(161, 217, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 229, 150, 5;
  background-color: rgba(229, 150, 5, 0.1);
  border-bottom-color: rgba(229, 150, 5, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(229, 150, 5, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(229, 150, 5, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(229, 150, 5, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
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
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(136, 122, 163);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 2px;
  border-left-color: rgb(136, 122, 163);
  border-left-width: 2px;
  border-right-color: rgb(136, 122, 163);
  border-right-width: 2px;
  border-top-color: rgb(136, 122, 163);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(136, 122, 163);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 2px;
  border-left-color: rgb(136, 122, 163);
  border-left-width: 2px;
  border-right-color: rgb(136, 122, 163);
  border-right-width: 2px;
  border-top-color: rgb(136, 122, 163);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(136, 122, 163, 0.5);
  border-bottom-color: rgba(136, 122, 163, 0.15);
  border-left-color: rgba(136, 122, 163, 0.15);
  border-right-color: rgba(136, 122, 163, 0.15);
  border-top-color: rgba(136, 122, 163, 0.15);
  font-weight: 100;
}

html body a.internal.tag-link::before {
  color: rgb(221, 208, 196);
}

html body h1 {
  color: rgb(148, 149, 155);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(96, 190, 190);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(148, 149, 155);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(204, 131, 189);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(219, 187, 67);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(182, 96, 86);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(104, 144, 215);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(81, 81, 81);
  border-left-color: rgb(81, 81, 81);
  border-right-color: rgb(81, 81, 81);
}`,
    scrollbars: `html body .callout {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgba(104, 144, 215, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(104, 144, 215, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(104, 144, 215, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(104, 144, 215, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body ::-webkit-scrollbar {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}

html body ::-webkit-scrollbar-track {
  background: rgb(20, 21, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 21, 21);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(255, 255, 255, 0.8);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(255, 255, 255, 0.8);
}

html body .explorer .folder-outer > ul {
  border-left-width: 2px;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(221, 208, 196);
  border-left-color: rgb(221, 208, 196);
  border-right-color: rgb(221, 208, 196);
  border-top-color: rgb(221, 208, 196);
  color: rgb(221, 208, 196);
}`,
    footer: `html body footer {
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(81, 81, 81);
  border-left-color: rgb(81, 81, 81);
  border-left-width: 2px;
  border-right-color: rgb(81, 81, 81);
  border-top-color: rgb(81, 81, 81);
  border-top-width: 2px;
  color: rgb(136, 122, 163);
}

html body footer ul li a {
  color: rgb(136, 122, 163);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.8);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.8);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.8);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgba(255, 255, 255, 0.8);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(221, 208, 196);
  border-left-color: rgb(221, 208, 196);
  border-right-color: rgb(221, 208, 196);
  border-top-color: rgb(221, 208, 196);
  color: rgb(221, 208, 196);
}

html body .darkmode svg {
  color: rgb(221, 208, 196);
  stroke: rgb(221, 208, 196);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
}

html body .breadcrumb-element p {
  color: rgba(255, 255, 255, 0.6);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .metadata {
  color: rgba(255, 255, 255, 0.8);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(20, 21, 21);
}

html body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
}

html body kbd {
  background-color: rgb(20, 21, 21);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}

html body ul.tags > li {
  background-color: rgba(136, 122, 163, 0.5);
  border-bottom-color: rgba(136, 122, 163, 0.15);
  border-left-color: rgba(136, 122, 163, 0.15);
  border-right-color: rgba(136, 122, 163, 0.15);
  border-top-color: rgba(136, 122, 163, 0.15);
  color: rgb(221, 208, 196);
}`,
  },
  light: {},
};
