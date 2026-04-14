import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes.forest-green",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 120 !important;
  --accent-l: 20% !important;
  --accent-s: 13% !important;
  --background-modifier-active-hover: hsla(120, 13%, 20%, 0.1) !important;
  --background-modifier-border: #719171 !important;
  --background-modifier-border-focus: #5f7c5f !important;
  --background-modifier-border-hover: #87a287 !important;
  --background-modifier-error: #141414 !important;
  --background-modifier-error-hover: #2c392c !important;
  --background-modifier-error-rgb: 138, 46, 46 !important;
  --background-modifier-form-field: #465a46 !important;
  --background-modifier-form-field-hover: #465a46 !important;
  --background-modifier-hover: #2c392c !important;
  --background-modifier-message: #5f7c5f !important;
  --background-modifier-success: #5f7c5f !important;
  --background-modifier-success-rgb: 90, 122, 77 !important;
  --background-primary: #1b231b !important;
  --background-primary-alt: #2c392c !important;
  --background-secondary: #141414 !important;
  --background-secondary-alt: #4e654e !important;
  --bases-cards-background: #1b231b !important;
  --bases-cards-cover-background: #2c392c !important;
  --bases-cards-shadow: 0 0 0 1px #719171 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #87a287 !important;
  --bases-embed-border-color: #719171 !important;
  --bases-group-heading-property-color: rgba(248, 248, 248, 0.85) !important;
  --bases-table-border-color: #719171 !important;
  --bases-table-cell-background-active: #1b231b !important;
  --bases-table-cell-background-disabled: #2c392c !important;
  --bases-table-cell-background-selected: hsla(120, 13%, 20%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #5f7c5f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(120, 13%, 20%) !important;
  --bases-table-group-background: #2c392c !important;
  --bases-table-header-background: #1b231b !important;
  --bases-table-header-background-hover: #3d4f3d !important;
  --bases-table-header-color: rgba(248, 248, 248, 0.85) !important;
  --bases-table-summary-background: #1b231b !important;
  --bases-table-summary-background-hover: #2c392c !important;
  --blockquote-background-color: rgba(113, 145, 113, 0.2) !important;
  --blockquote-border-color: #f49d18 !important;
  --blur-background: color-mix(in srgb, #4e654e 65%, transparent) linear-gradient(#4e654e, color-mix(in srgb, #4e654e 65%, transparent)) !important;
  --bodyFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-accent-ink: #5d9ed8 !important;
  --bold-color: #5d9ed8 !important;
  --button-radius: 50px !important;
  --callout-border-width: 2px;
  --callout-bug: 138, 46, 46;
  --callout-default: 26, 69, 89;
  --callout-error: 138, 46, 46;
  --callout-example: 95, 74, 140;
  --callout-fail: 138, 46, 46;
  --callout-important: 67, 143, 147;
  --callout-info: 26, 69, 89;
  --callout-question: 179, 104, 42;
  --callout-success: 90, 122, 77;
  --callout-summary: 67, 143, 147;
  --callout-tip: 67, 143, 147;
  --callout-todo: 26, 69, 89;
  --callout-warning: 179, 104, 42;
  --canvas-background: #1b231b !important;
  --canvas-card-label-color: rgba(248, 248, 248, 0.65) !important;
  --canvas-color-1: 138, 46, 46 !important;
  --canvas-color-2: 179, 104, 42 !important;
  --canvas-color-3: 194, 153, 56 !important;
  --canvas-color-4: 90, 122, 77 !important;
  --canvas-color-5: 67, 143, 147 !important;
  --canvas-color-6: 95, 74, 140 !important;
  --canvas-dot-pattern: rgba(244, 157, 24, 0.4) !important;
  --caret-color: #9db39d !important;
  --checkbox-border-color: #f8f8f8 !important;
  --checkbox-border-color-hover: rgba(248, 248, 248, 0.65) !important;
  --checkbox-color: #f49d18 !important;
  --checkbox-color-hover: rgba(244, 157, 24, 0.85) !important;
  --checkbox-marker-color: #2c392c !important;
  --checklist-done-color: rgba(244, 157, 24, 0.65) !important;
  --code-background: rgba(113, 145, 113, 0.2) !important;
  --code-border-color: #719171 !important;
  --code-bracket-background: #2c392c !important;
  --code-comment: rgba(248, 248, 248, 0.65) !important;
  --code-function: #c29938 !important;
  --code-important: #b3682a !important;
  --code-keyword: #b16982 !important;
  --code-normal: #f8f8f8 !important;
  --code-operator: #8a2e2e !important;
  --code-property: #438f93 !important;
  --code-punctuation: rgba(248, 248, 248, 0.85) !important;
  --code-string: #5a7a4d !important;
  --code-tag: #8a2e2e !important;
  --code-value: #5f4a8c !important;
  --codeFont: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(248, 248, 248, 0.65) !important;
  --collapse-icon-color-collapsed: hsl(117, 13.26%, 23%) !important;
  --color-accent: hsl(120, 13%, 20%) !important;
  --color-accent-1: hsl(117, 13.26%, 23%) !important;
  --color-accent-2: hsl(115, 13.65%, 25.8%) !important;
  --color-accent-hsl: 120, 13%, 20% !important;
  --color-base-00: #1b231b !important;
  --color-base-00-rgb: 27, 35, 27
  --color-base-05: #242e24 !important;
  --color-base-05: #161616 !important;
  --color-base-10: #2c392c !important;
  --color-base-100: #e0e7e0 !important;
  --color-base-20: #3d4f3d !important;
  --color-base-25: #465a46 !important;
  --color-base-30: #4e654e !important;
  --color-base-35: #577157 !important;
  --color-base-40: #5f7c5f !important;
  --color-base-50: #719171 !important;
  --color-base-50-rgb: 113, 145, 113 !important;
  --color-base-60: #87a287 !important;
  --color-base-70: #9db39d !important;
  --color-blue: #1a4559 !important;
  --color-blue-rgb: 26, 69, 89 !important;
  --color-cyan: #438f93 !important;
  --color-cyan-rgb: 67, 143, 147 !important;
  --color-green: #5a7a4d !important;
  --color-green-rgb: 90, 122, 77 !important;
  --color-orange: #b3682a !important;
  --color-orange-rgb: 179, 104, 42 !important;
  --color-pink: #b16982 !important;
  --color-pink-rgb: 177, 105, 130 !important;
  --color-purple: #5f4a8c !important;
  --color-purple-rgb: 95, 74, 140 !important;
  --color-red: #8a2e2e !important;
  --color-red-rgb: 138, 46, 46 !important;
  --color-yellow: #c29938 !important;
  --color-yellow-rgb: 194, 153, 56 !important;
  --dark: #f8f8f8 !important;
  --darkgray: #f8f8f8 !important;
  --divider-color: #719171 !important;
  --divider-color-hover: hsl(120, 13%, 20%) !important;
  --dropdown-background: #4e654e !important;
  --dropdown-background-hover: #577157 !important;
  --embed-background: rgba(113, 145, 113, 0.15) !important;
  --embed-block-shadow-hover: 0 0 0 1px #719171, inset 0 0 0 1px #719171 !important;
  --embed-border-start: 2px solid rgba(244, 157, 24, 0.85) !important;
  --fainted: 0.65 !important;
  --file-header-background: #1b231b !important;
  --file-header-background-focused: #1b231b !important;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #4e654e !important;
  --flair-color: #f8f8f8 !important;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Mono', monospace !important;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'IBM Plex Mono', monospace !important;
  --font-print: IBM Plex Mono, monospace, Arial' !important;
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Mono', monospace !important;
  --footnote-divider-color: #719171 !important;
  --footnote-id-color: rgba(248, 248, 248, 0.85) !important;
  --footnote-id-color-no-occurrences: rgba(248, 248, 248, 0.65) !important;
  --footnote-input-background-active: #161616 !important;
  --graph-line: #577157 !important;
  --graph-node: rgba(248, 248, 248, 0.85) !important;
  --graph-node-attachment: #c29938 !important;
  --graph-node-focused: #f49d18 !important;
  --graph-node-tag: #5d9ed8 !important;
  --graph-node-unresolved: rgba(248, 248, 248, 0.65) !important;
  --graph-text: #f8f8f8 !important;
  --gray: rgba(248, 248, 248, 0.85) !important;
  --h1-color: #f49d18 !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2.2em !important;
  --h2-color: #f49d18 !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 2em !important;
  --h3-color: #f49d18 !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.8em !important;
  --h4-color: #f49d18 !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.6em !important;
  --h5-color: #f49d18 !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.4em !important;
  --h6-color: #f49d18 !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.2em !important;
  --headerFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(248, 248, 248, 0.65) !important;
  --highlight: rgba(194, 153, 56, 0.4) !important;
  --hr-color: rgba(244, 157, 24, 0.85) !important;
  --icon-color: rgba(248, 248, 248, 0.85) !important;
  --icon-color-active: hsl(117, 13.26%, 23%) !important;
  --icon-color-focused: #f8f8f8 !important;
  --icon-color-hover: rgba(248, 248, 248, 0.85) !important;
  --indentation-guide-color: rgba(244, 157, 24, 0.65) !important;
  --indentation-guide-color-active: rgba(244, 157, 24, 0.85) !important;
  --inline-title-color: #f49d18 !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.2em !important;
  --input-date-separator: rgba(248, 248, 248, 0.65) !important;
  --input-placeholder-color: rgba(248, 248, 248, 0.65) !important;
  --interactive-accent: hsl(120, 13%, 20%) !important;
  --interactive-accent-hover: hsl(117, 13.26%, 23%) !important;
  --interactive-accent-hsl: 120, 13%, 20% !important;
  --interactive-hover: #577157 !important;
  --interactive-normal: #4e654e !important;
  --italic-accent-ink: #f49d18 !important;
  --italic-color: #f49d18 !important;
  --leather-color: #141414 !important;
  --leather-color-alt: #2c392c !important;
  --leather-color-rgb: 249, 246, 238 !important;
  --light: #1b231b !important;
  --light-ink: #f8f8f8 !important;
  --light-ink-alt: #d1d3d1 !important;
  --light-ink-fainted: rgba(248, 248, 248, 0.65) !important;
  --light-ink-muted: rgba(248, 248, 248, 0.85) !important;
  --lightgray: #141414 !important;
  --link-color: #f49d18 !important;
  --link-color-hover: rgba(244, 157, 24, 0.85) !important;
  --link-external-color: #f49d18 !important;
  --link-external-color-hover: rgba(244, 157, 24, 0.85) !important;
  --link-unresolved-color: rgba(244, 157, 24, 0.85) !important;
  --link-unresolved-color-hover: #f49d18 !important;
  --link-unresolved-decoration-color: #f49d18 !important;
  --list-marker-color: rgba(244, 157, 24, 0.65) !important;
  --list-marker-color-collapsed: #f49d18 !important;
  --list-marker-color-hover: rgba(244, 157, 24, 0.65) !important;
  --main-ink: #f8f8f8 !important;
  --main-ink-fainted: rgba(248, 248, 248, 0.65) !important;
  --main-ink-muted: rgba(248, 248, 248, 0.85) !important;
  --main-ink-rgb: 248,248,248 !important;
  --menu-background: #141414 !important;
  --menu-border-color: #87a287 !important;
  --metadata-background: #2c392c !important;
  --metadata-border-color: #719171 !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #719171 !important;
  --metadata-gap: 4px !important;
  --metadata-input-background-active: #161616 !important;
  --metadata-input-background-hover: #2c392c !important;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f8f8f8 !important;
  --metadata-label-background-active: #2c392c !important;
  --metadata-label-background-hover: #2c392c !important;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(248, 248, 248, 0.85) !important;
  --metadata-label-text-color-hover: rgba(248, 248, 248, 0.85) !important;
  --metadata-padding: 16px !important;
  --metadata-property-background-active: #3d4f3d !important;
  --metadata-property-background-hover: #3d4f3d !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #5f7c5f !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #87a287 !important;
  --modal-background: #2c392c !important;
  --modal-border-color: #5f7c5f !important;
  --modal-border-width: 2px !important;
  --muted: 0.85 !important;
  --nav-collapse-icon-color: #719171 !important;
  --nav-collapse-icon-color-collapsed: rgba(248, 248, 248, 0.65) !important;
  --nav-heading-color: #f8f8f8 !important;
  --nav-heading-color-collapsed: rgba(248, 248, 248, 0.65) !important;
  --nav-heading-color-collapsed-hover: rgba(248, 248, 248, 0.85) !important;
  --nav-heading-color-hover: #f8f8f8 !important;
  --nav-indentation-guide-color: rgba(248, 248, 248, 0.65) !important;
  --nav-item-background-active: #2c392c !important;
  --nav-item-background-hover: #2c392c !important;
  --nav-item-background-selected: hsla(120, 13%, 20%, 0.15) !important;
  --nav-item-color: #f8f8f8 !important;
  --nav-item-color-active: #d1d3d1 !important;
  --nav-item-color-highlighted: hsl(117, 13.26%, 23%) !important;
  --nav-item-color-hover: #d1d3d1 !important;
  --nav-item-color-selected: #d1d3d1 !important;
  --nav-tag-color: rgba(248, 248, 248, 0.65) !important;
  --nav-tag-color-active: rgba(248, 248, 248, 0.85) !important;
  --nav-tag-color-hover: rgba(248, 248, 248, 0.85) !important;
  --pdf-background: #1b231b !important;
  --pdf-page-background: #1b231b !important;
  --pdf-shadow: 0 0 0 1px #719171 !important;
  --pdf-sidebar-background: #1b231b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #719171 !important;
  --pill-background: #3d4f3d !important;
  --pill-background-hover: #4e654e !important;
  --pill-border-color: #719171 !important;
  --pill-border-color-hover: #87a287 !important;
  --pill-color: rgba(248, 248, 248, 0.85) !important;
  --pill-color-hover: #f8f8f8 !important;
  --pill-color-remove: rgba(248, 248, 248, 0.65) !important;
  --pill-color-remove-hover: hsl(117, 13.26%, 23%) !important;
  --pill-padding-x: 4px !important;
  --pill-padding-y: 2px !important;
  --plexmono: 'IBM Plex Mono', monospace !important;
  --prompt-background: #1b231b !important;
  --prompt-border-color: rgba(244, 157, 24, 0.85) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #4e654e 65%, transparent) linear-gradient(#4e654e, color-mix(in srgb, #4e654e 65%, transparent)) !important;
  --ribbon-background: #141414 !important;
  --ribbon-background-collapsed: #2c392c !important;
  --search-clear-button-color: rgba(248, 248, 248, 0.85) !important;
  --search-icon-color: rgba(248, 248, 248, 0.85) !important;
  --search-result-background: #1b231b !important;
  --secondary: hsl(117, 13.26%, 23%) !important;
  --secondary-ink: #f49d18 !important;
  --secondary-ink-fainted: rgba(244, 157, 24, 0.65) !important;
  --secondary-ink-muted: rgba(244, 157, 24, 0.85) !important;
  --secondary-ink-rgb: 244, 157, 24 !important;
  --setting-group-heading-color: #f8f8f8 !important;
  --setting-items-background: #2c392c !important;
  --setting-items-border-color: #719171 !important;
  --slider-thumb-border-color: #87a287 !important;
  --slider-track-background: #719171 !important;
  --status-bar-background: #3d4f3d !important;
  --status-bar-border-color: #719171 !important;
  --status-bar-text-color: rgba(248, 248, 248, 0.85) !important;
  --suggestion-background: #1b231b !important;
  --sync-avatar-color-1: #8a2e2e !important;
  --sync-avatar-color-2: #b3682a !important;
  --sync-avatar-color-3: #c29938 !important;
  --sync-avatar-color-4: #5a7a4d !important;
  --sync-avatar-color-5: #438f93 !important;
  --sync-avatar-color-6: #1a4559 !important;
  --sync-avatar-color-7: #5f4a8c !important;
  --sync-avatar-color-8: #b16982 !important;
  --tab-background-active: #2c392c !important;
  --tab-container-background: #141414 !important;
  --tab-divider-color: none !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #4e654e !important;
  --tab-switcher-background: #141414 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(120, 13%, 20%) !important;
  --tab-text-color-focused-active-current: #f8f8f8 !important;
  --table-add-button-border-color: #719171 !important;
  --table-border-color: #719171 !important;
  --table-drag-handle-background-active: hsl(120, 13%, 20%) !important;
  --table-drag-handle-color: rgba(248, 248, 248, 0.65) !important;
  --table-drag-handle-color-active: #d1d3d1 !important;
  --table-header-border-color: #719171 !important;
  --table-header-color: #f49d18 !important;
  --table-selection: hsla(120, 13%, 20%, 0.1) !important;
  --table-selection-border-color: hsl(120, 13%, 20%) !important;
  --tag-background: rgba(244, 157, 24, 0.85) !important;
  --tag-background-hover: rgba(244, 157, 24, 0.85) !important;
  --tag-border-color: hsla(120, 13%, 20%, 0.15) !important;
  --tag-border-color-hover: hsla(120, 13%, 20%, 0.15) !important;
  --tag-color: #1b231b !important;
  --tag-color-hover: #2c392c !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.12em !important;
  --tertiary: hsl(115, 13.65%, 25.8%) !important;
  --text-accent: hsl(117, 13.26%, 23%) !important;
  --text-accent-hover: hsl(115, 13.65%, 25.8%) !important;
  --text-error: #8a2e2e !important;
  --text-faint: rgba(248, 248, 248, 0.65) !important;
  --text-fainted: rgba(248, 248, 248, 0.65) !important;
  --text-highlight-bg: rgba(194, 153, 56, 0.4) !important;
  --text-muted: rgba(248, 248, 248, 0.85) !important;
  --text-normal: #f8f8f8 !important;
  --text-on-accent: #d1d3d1 !important;
  --text-on-accent-inverted: #d1d3d1 !important;
  --text-selection: rgba(113, 145, 113, 0.5) !important;
  --text-success: #5a7a4d !important;
  --text-warning: #b3682a !important;
  --textHighlight: rgba(194, 153, 56, 0.4) !important;
  --titleFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #141414 !important;
  --titlebar-background-focused: #141414 !important;
  --titlebar-border-color: #719171 !important;
  --titlebar-text-color: rgba(248, 248, 248, 0.85) !important;
  --titlebar-text-color-focused: #f8f8f8 !important;
  --vault-profile-color: #f8f8f8 !important;
  --vault-profile-color-hover: #f8f8f8 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(27, 35, 27);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(113, 145, 113);
  color: rgb(244, 157, 24);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 20, 20);
  border-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(44, 57, 44);
  border-color: rgb(113, 145, 113);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(244, 157, 24, 0.85);
  color: rgb(27, 35, 27);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(113, 145, 113);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  border-left-color: rgb(113, 145, 113);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(27, 35, 27);
  color: rgb(248, 248, 248);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(93, 158, 216);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 158, 216) none 0px;
  text-decoration-color: rgb(93, 158, 216);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 157, 24) none 0px;
  text-decoration-color: rgb(244, 157, 24);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 157, 24) none 0px;
  text-decoration-color: rgb(244, 157, 24);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(93, 158, 216);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 158, 216) none 0px;
  text-decoration-color: rgb(93, 158, 216);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(194, 153, 56, 0.4);
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 248) none 0px;
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body del {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 248) none 0px;
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(244, 157, 24);
  border-color: rgb(244, 157, 24);
}

html[saved-theme="dark"] body p {
  color: rgba(248, 248, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 248, 0.85) none 0px;
  text-decoration-color: rgba(248, 248, 248, 0.85);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 157, 24) none 0px;
  text-decoration-color: rgb(244, 157, 24);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 157, 24) none 0px;
  text-decoration-color: rgb(244, 157, 24);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(244, 157, 24, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(244, 157, 24, 0.85) none 0px;
  text-decoration: underline rgb(244, 157, 24);
  text-decoration-color: rgb(244, 157, 24);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body dt {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(248, 248, 248, 0.65);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(113, 145, 113, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body table {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
  border-top-color: rgb(113, 145, 113);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
  border-top-color: rgb(113, 145, 113);
  color: rgb(244, 157, 24);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(113, 145, 113, 0.2);
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
  border-top-color: rgb(113, 145, 113);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(113, 145, 113, 0.2);
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
  border-top-color: rgb(113, 145, 113);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(194, 153, 56);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(194, 153, 56);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(194, 153, 56);
  border-left-color: rgb(194, 153, 56);
  border-right-color: rgb(194, 153, 56);
  border-top-color: rgb(194, 153, 56);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(113, 145, 113, 0.2);
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
  border-top-color: rgb(113, 145, 113);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(113, 145, 113, 0.2);
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
  border-top-color: rgb(113, 145, 113);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(244, 157, 24);
  border-left-color: rgb(244, 157, 24);
  border-right-color: rgb(244, 157, 24);
  border-top-color: rgb(244, 157, 24);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(44, 57, 44);
  border-bottom-color: rgba(248, 248, 248, 0.85);
  border-left-color: rgba(248, 248, 248, 0.85);
  border-right-color: rgba(248, 248, 248, 0.85);
  border-top-color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(113, 145, 113, 0.15);
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgba(244, 157, 24, 0.85);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(113, 145, 113, 0.15);
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 248);
  text-decoration-color: rgb(248, 248, 248);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(244, 157, 24, 0.85);
  border-left-color: rgba(244, 157, 24, 0.85);
  border-right-color: rgba(244, 157, 24, 0.85);
  border-top-color: rgba(244, 157, 24, 0.85);
  color: rgba(244, 157, 24, 0.85);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(244, 157, 24, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 113, 145, 113;
  background-color: rgba(113, 145, 113, 0.1);
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
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
  background-color: rgb(70, 90, 70);
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
  border-top-color: rgb(113, 145, 113);
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(27, 35, 27);
  border-bottom-color: rgba(244, 157, 24, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(244, 157, 24, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(244, 157, 24, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(244, 157, 24, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(209, 211, 209);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(209, 211, 209) none 0px;
  text-decoration-color: rgb(209, 211, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(44, 57, 44);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(244, 157, 24, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(244, 157, 24, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(244, 157, 24, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(244, 157, 24, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(44, 57, 44);
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(44, 57, 44);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(244, 157, 24, 0.85);
  border-bottom-color: rgba(44, 58, 44, 0.15);
  border-left-color: rgba(44, 58, 44, 0.15);
  border-right-color: rgba(44, 58, 44, 0.15);
  border-top-color: rgba(44, 58, 44, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(27, 35, 27);
}

html[saved-theme="dark"] body h1 {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(244, 157, 24);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 113, 145, 113;
  border-bottom-color: rgba(113, 145, 113, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(113, 145, 113, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(113, 145, 113, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(113, 145, 113, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(27, 35, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 35, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(27, 35, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 35, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(27, 35, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 35, 27);
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 35, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 35, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 35, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 35, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(27, 35, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 35, 27);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(248, 248, 248, 0.65);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(248, 248, 248);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(61, 79, 61);
  border-bottom-color: rgb(113, 145, 113);
  border-left-color: rgb(113, 145, 113);
  border-right-color: rgb(113, 145, 113);
  border-top-color: rgb(113, 145, 113);
  color: rgba(248, 248, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(248, 248, 248, 0.85);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(209, 211, 209);
  border-left-color: rgb(209, 211, 209);
  border-right-color: rgb(209, 211, 209);
  border-top-color: rgb(209, 211, 209);
  color: rgb(209, 211, 209);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(209, 211, 209);
  stroke: rgb(209, 211, 209);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(248, 248, 248, 0.85);
  border-left-color: rgba(248, 248, 248, 0.85);
  border-right-color: rgba(248, 248, 248, 0.85);
  border-top-color: rgba(248, 248, 248, 0.85);
  color: rgba(248, 248, 248, 0.85);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(248, 248, 248, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(44, 57, 44);
  border-bottom-color: rgb(113, 145, 113);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(113, 145, 113);
  border-left-width: 1px;
  border-right-color: rgb(113, 145, 113);
  border-right-width: 1px;
  border-top-color: rgb(113, 145, 113);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(248, 248, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(248, 248, 248, 0.85);
  border-left-color: rgba(248, 248, 248, 0.85);
  border-right-color: rgba(248, 248, 248, 0.85);
  border-top-color: rgba(248, 248, 248, 0.85);
  color: rgba(248, 248, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(61, 79, 61);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(248, 248, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(248, 248, 248, 0.85);
  border-left-color: rgba(248, 248, 248, 0.85);
  border-right-color: rgba(248, 248, 248, 0.85);
  border-top-color: rgba(248, 248, 248, 0.85);
  color: rgba(248, 248, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(44, 57, 44);
  border-bottom-color: rgb(209, 211, 209);
  border-left-color: rgb(209, 211, 209);
  border-right-color: rgb(209, 211, 209);
  border-top-color: rgb(209, 211, 209);
  color: rgb(209, 211, 209);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body sub {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body summary {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body sup {
  color: rgb(248, 248, 248);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(244, 157, 24, 0.85);
  border-bottom-color: rgba(44, 58, 44, 0.15);
  border-left-color: rgba(44, 58, 44, 0.15);
  border-right-color: rgba(44, 58, 44, 0.15);
  border-top-color: rgba(44, 58, 44, 0.15);
  color: rgb(27, 35, 27);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 103 !important;
  --accent-l: 57% !important;
  --accent-s: 33% !important;
  --background-modifier-active-hover: hsla(103, 33%, 57%, 0.1) !important;
  --background-modifier-border: #82b56e !important;
  --background-modifier-border-focus: #91d07a !important;
  --background-modifier-border-hover: #62ba42 !important;
  --background-modifier-error: #162a0e !important;
  --background-modifier-error-hover: #203d14 !important;
  --background-modifier-error-rgb: 180, 60, 60 !important;
  --background-modifier-form-field: #c1e5b4 !important;
  --background-modifier-form-field-hover: #c1e5b4 !important;
  --background-modifier-hover: #203d14 !important;
  --background-modifier-message: #91d07a !important;
  --background-modifier-success: #91d07a !important;
  --background-modifier-success-rgb: 113, 148, 97 !important;
  --background-primary: #f1f9ee !important;
  --background-primary-alt: #d9efd1 !important;
  --background-secondary: #162a0e !important;
  --background-secondary-alt: #e5f4e0 !important;
  --bases-cards-background: #f1f9ee !important;
  --bases-cards-cover-background: #d9efd1 !important;
  --bases-cards-shadow: 0 0 0 1px #82b56e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #62ba42 !important;
  --bases-embed-border-color: #82b56e !important;
  --bases-group-heading-property-color: rgba(8, 10, 2, 0.85) !important;
  --bases-table-border-color: #82b56e !important;
  --bases-table-cell-background-active: #f1f9ee !important;
  --bases-table-cell-background-disabled: #d9efd1 !important;
  --bases-table-cell-background-selected: hsla(103, 33%, 57%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #91d07a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #203d14 !important;
  --bases-table-group-background: #d9efd1 !important;
  --bases-table-header-background: #f1f9ee !important;
  --bases-table-header-background-hover: #c1e5b4 !important;
  --bases-table-header-color: rgba(8, 10, 2, 0.85) !important;
  --bases-table-summary-background: #f1f9ee !important;
  --bases-table-summary-background-hover: #203d14 !important;
  --blockquote-background-color: rgba(130, 181, 110, 0.2) !important;
  --blockquote-border-color: #154608 !important;
  --blur-background: color-mix(in srgb, #f1f9ee 65%, transparent) linear-gradient(#f1f9ee, color-mix(in srgb, #f1f9ee 65%, transparent)) !important;
  --bodyFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-accent-ink: #154608 !important;
  --bold-color: #154608 !important;
  --button-radius: 50px !important;
  --callout-border-width: 2px;
  --callout-bug: 180, 60, 60;
  --callout-default: 34, 89, 115;
  --callout-error: 180, 60, 60;
  --callout-example: 119, 92, 176;
  --callout-fail: 180, 60, 60;
  --callout-important: 83, 179, 184;
  --callout-info: 34, 89, 115;
  --callout-question: 219, 129, 52;
  --callout-success: 113, 148, 97;
  --callout-summary: 83, 179, 184;
  --callout-tip: 83, 179, 184;
  --callout-todo: 34, 89, 115;
  --callout-warning: 219, 129, 52;
  --canvas-background: #f1f9ee !important;
  --canvas-card-label-color: rgba(8, 10, 2, 0.65) !important;
  --canvas-color-1: 180, 60, 60 !important;
  --canvas-color-2: 219, 129, 52 !important;
  --canvas-color-3: 242, 186, 68 !important;
  --canvas-color-4: 113, 148, 97 !important;
  --canvas-color-5: 83, 179, 184 !important;
  --canvas-color-6: 119, 92, 176 !important;
  --canvas-dot-pattern: rgba(21, 70, 8, 0.4) !important;
  --caret-color: #539d37 !important;
  --checkbox-border-color: #080a02 !important;
  --checkbox-border-color-hover: rgba(8, 10, 2, 0.65) !important;
  --checkbox-color: #154608 !important;
  --checkbox-color-hover: rgba(21, 70, 8, 0.85) !important;
  --checkbox-marker-color: #d9efd1 !important;
  --checklist-done-color: rgba(21, 70, 8, 0.65) !important;
  --code-background: rgba(130, 181, 110, 0.2) !important;
  --code-border-color: #82b56e !important;
  --code-bracket-background: #203d14 !important;
  --code-comment: rgba(8, 10, 2, 0.65) !important;
  --code-function: #f2ba44 !important;
  --code-important: #db8134 !important;
  --code-keyword: #dc84a3 !important;
  --code-normal: #080a02 !important;
  --code-operator: #b43c3c !important;
  --code-property: #53b3b8 !important;
  --code-punctuation: rgba(8, 10, 2, 0.85) !important;
  --code-string: #719461 !important;
  --code-tag: #b43c3c !important;
  --code-value: #775cb0 !important;
  --codeFont: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(8, 10, 2, 0.65) !important;
  --collapse-icon-color-collapsed: hsl(103, 33%, 57%) !important;
  --color-accent: hsl(103, 33%, 57%) !important;
  --color-accent-1: hsl(102, 33.33%, 61.275%) !important;
  --color-accent-2: hsl(100, 33.66%, 65.55%) !important;
  --color-accent-hsl: 103, 33%, 57% !important;
  --color-base-00: #f1f9ee !important;
  --color-base-00-rgb: 241,249,238 !important;
  --color-base-05: #e5f4e0 !important;
  --color-base-10: #d9efd1 !important;
  --color-base-100: #254619 !important;
  --color-base-20: #c1e5b4 !important;
  --color-base-25: #b5dfa6 !important;
  --color-base-30: #a9da97 !important;
  --color-base-35: #9dd589 !important;
  --color-base-40: #91d07a !important;
  --color-base-50: #82b56e !important;
  --color-base-50-rgb: 130,181,110 !important;
  --color-base-60: #62ba42 !important;
  --color-base-70: #539d37 !important;
  --color-blue: #225973 !important;
  --color-blue-rgb: 34, 89, 115 !important;
  --color-cyan: #53b3b8 !important;
  --color-cyan-rgb: 83, 179, 184 !important;
  --color-green: #719461 !important;
  --color-green-rgb: 113, 148, 97 !important;
  --color-orange: #db8134 !important;
  --color-orange-rgb: 219, 129, 52 !important;
  --color-pink: #dc84a3 !important;
  --color-pink-rgb: 220, 132, 163 !important;
  --color-purple: #775cb0 !important;
  --color-purple-rgb: 119, 92, 176 !important;
  --color-red: #b43c3c !important;
  --color-red-rgb: 180, 60, 60 !important;
  --color-yellow: #f2ba44 !important;
  --color-yellow-rgb: 242, 186, 68 !important;
  --dark: #080a02 !important;
  --darkgray: #080a02 !important;
  --divider-color: #82b56e !important;
  --divider-color-hover: #203d14 !important;
  --dropdown-background: #a9da97 !important;
  --dropdown-background-hover: #c1e5b4 !important;
  --embed-background: rgba(130, 181, 110, 0.15) !important;
  --embed-block-shadow-hover: 0 0 0 1px #82b56e, inset 0 0 0 1px #82b56e !important;
  --embed-border-start: 2px solid #203d14 !important;
  --fainted: 0.65 !important;
  --file-header-background: #f1f9ee !important;
  --file-header-background-focused: #f1f9ee !important;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #a9da97 !important;
  --flair-color: #080a02 !important;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Mono', monospace !important;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'IBM Plex Mono', monospace !important;
  --font-print: IBM Plex Mono, monospace, Arial' !important;
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Mono', monospace !important;
  --footnote-divider-color: #82b56e !important;
  --footnote-id-color: rgba(8, 10, 2, 0.85) !important;
  --footnote-id-color-no-occurrences: rgba(8, 10, 2, 0.65) !important;
  --footnote-input-background-active: #e5f4e0 !important;
  --graph-line: #9dd589 !important;
  --graph-node: rgba(8, 10, 2, 0.85) !important;
  --graph-node-attachment: #f2ba44 !important;
  --graph-node-focused: #154608 !important;
  --graph-node-tag: #154608 !important;
  --graph-node-unresolved: rgba(8, 10, 2, 0.65) !important;
  --graph-text: #080a02 !important;
  --gray: rgba(8, 10, 2, 0.85) !important;
  --h1-color: #154608 !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2.2em !important;
  --h2-color: #154608 !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 2em !important;
  --h3-color: #154608 !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.8em !important;
  --h4-color: #154608 !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.6em !important;
  --h5-color: #154608 !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.4em !important;
  --h6-color: #154608 !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.2em !important;
  --headerFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(8, 10, 2, 0.65) !important;
  --highlight: rgba(242, 186, 68, 0.4) !important;
  --hr-color: rgba(21, 70, 8, 0.85) !important;
  --icon-color: rgba(8, 10, 2, 0.85) !important;
  --icon-color-active: hsl(103, 33%, 57%) !important;
  --icon-color-focused: #080a02 !important;
  --icon-color-hover: rgba(8, 10, 2, 0.85) !important;
  --indentation-guide-color: rgba(21, 70, 8, 0.65) !important;
  --indentation-guide-color-active: rgba(21, 70, 8, 0.85) !important;
  --inline-title-color: #154608 !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.2em !important;
  --input-date-separator: rgba(8, 10, 2, 0.65) !important;
  --input-placeholder-color: rgba(8, 10, 2, 0.65) !important;
  --interactive-accent: #203d14 !important;
  --interactive-accent-hover: #162a0e !important;
  --interactive-accent-hsl: 103, 33%, 57% !important;
  --interactive-hover: #c1e5b4 !important;
  --interactive-normal: #a9da97 !important;
  --italic-accent-ink: #900d26 !important;
  --italic-color: #900d26 !important;
  --leather-color: #162a0e !important;
  --leather-color-alt: #203d14 !important;
  --leather-color-rgb: 22, 42, 14 !important;
  --light: #f1f9ee !important;
  --light-ink: #f1f9ee !important;
  --light-ink-alt: #d9efd1 !important;
  --light-ink-fainted: rgba(241, 249, 238, 0.65) !important;
  --light-ink-muted: rgba(241, 249, 238, 0.85) !important;
  --lightgray: #162a0e !important;
  --link-color: #154608 !important;
  --link-color-hover: rgba(21, 70, 8, 0.85) !important;
  --link-external-color: #154608 !important;
  --link-external-color-hover: rgba(21, 70, 8, 0.85) !important;
  --link-unresolved-color: rgba(21, 70, 8, 0.85) !important;
  --link-unresolved-color-hover: #154608 !important;
  --link-unresolved-decoration-color: #154608 !important;
  --list-marker-color: rgba(21, 70, 8, 0.65) !important;
  --list-marker-color-collapsed: #154608 !important;
  --list-marker-color-hover: rgba(21, 70, 8, 0.65) !important;
  --main-ink: #080a02 !important;
  --main-ink-fainted: rgba(8, 10, 2, 0.65) !important;
  --main-ink-muted: rgba(8, 10, 2, 0.85) !important;
  --main-ink-rgb: 8, 10, 2 !important;
  --menu-background: #162a0e !important;
  --menu-border-color: #62ba42 !important;
  --metadata-background: #d9efd1 !important;
  --metadata-border-color: #82b56e !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #82b56e !important;
  --metadata-gap: 4px !important;
  --metadata-input-background-active: #e5f4e0 !important;
  --metadata-input-background-hover: #d9efd1 !important;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #080a02 !important;
  --metadata-label-background-active: #d9efd1 !important;
  --metadata-label-background-hover: #d9efd1 !important;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(8, 10, 2, 0.85) !important;
  --metadata-label-text-color-hover: rgba(8, 10, 2, 0.85) !important;
  --metadata-padding: 16px !important;
  --metadata-property-background-active: #c1e5b4 !important;
  --metadata-property-background-hover: #c1e5b4 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #91d07a !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #62ba42 !important;
  --modal-background: #d9efd1 !important;
  --modal-border-color: #91d07a !important;
  --modal-border-width: 2px !important;
  --muted: 0.85 !important;
  --nav-collapse-icon-color: #82b56e !important;
  --nav-collapse-icon-color-collapsed: rgba(8, 10, 2, 0.65) !important;
  --nav-heading-color: #080a02 !important;
  --nav-heading-color-collapsed: rgba(8, 10, 2, 0.65) !important;
  --nav-heading-color-collapsed-hover: rgba(8, 10, 2, 0.85) !important;
  --nav-heading-color-hover: #080a02 !important;
  --nav-indentation-guide-color: rgba(130, 181, 110, 0.65) !important;
  --nav-item-background-active: #203d14 !important;
  --nav-item-background-hover: #203d14 !important;
  --nav-item-background-selected: hsla(103, 33%, 57%, 0.15) !important;
  --nav-item-color: #f1f9ee !important;
  --nav-item-color-active: #d9efd1 !important;
  --nav-item-color-highlighted: hsl(103, 33%, 57%) !important;
  --nav-item-color-hover: #d9efd1 !important;
  --nav-item-color-selected: #d9efd1 !important;
  --nav-tag-color: rgba(8, 10, 2, 0.65) !important;
  --nav-tag-color-active: rgba(8, 10, 2, 0.85) !important;
  --nav-tag-color-hover: rgba(8, 10, 2, 0.85) !important;
  --pdf-background: #f1f9ee !important;
  --pdf-page-background: #f1f9ee !important;
  --pdf-sidebar-background: #f1f9ee !important;
  --pill-background: #c1e5b4 !important;
  --pill-background-hover: #a9da97 !important;
  --pill-border-color: #82b56e !important;
  --pill-border-color-hover: #62ba42 !important;
  --pill-color: rgba(8, 10, 2, 0.85) !important;
  --pill-color-hover: #080a02 !important;
  --pill-color-remove: rgba(8, 10, 2, 0.65) !important;
  --pill-color-remove-hover: hsl(103, 33%, 57%) !important;
  --pill-padding-x: 4px !important;
  --pill-padding-y: 2px !important;
  --plexmono: 'IBM Plex Mono', monospace !important;
  --prompt-background: #f1f9ee !important;
  --prompt-border-color: rgba(21, 70, 8, 0.85) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #f1f9ee 65%, transparent) linear-gradient(#f1f9ee, color-mix(in srgb, #f1f9ee 65%, transparent)) !important;
  --ribbon-background: #162a0e !important;
  --ribbon-background-collapsed: #203d14 !important;
  --search-clear-button-color: rgba(8, 10, 2, 0.85) !important;
  --search-icon-color: rgba(8, 10, 2, 0.85) !important;
  --search-result-background: #f1f9ee !important;
  --secondary: hsl(103, 33%, 57%) !important;
  --secondary-ink: #154608 !important;
  --secondary-ink-fainted: rgba(21, 70, 8, 0.65) !important;
  --secondary-ink-muted: rgba(21, 70, 8, 0.85) !important;
  --secondary-ink-rgb: 21, 70, 8 !important;
  --setting-group-heading-color: #080a02 !important;
  --setting-items-background: #d9efd1 !important;
  --setting-items-border-color: #82b56e !important;
  --slider-thumb-border-color: #62ba42 !important;
  --slider-track-background: #82b56e !important;
  --status-bar-background: #c1e5b4 !important;
  --status-bar-border-color: #82b56e !important;
  --status-bar-text-color: rgba(8, 10, 2, 0.85) !important;
  --suggestion-background: #f1f9ee !important;
  --sync-avatar-color-1: #b43c3c !important;
  --sync-avatar-color-2: #db8134 !important;
  --sync-avatar-color-3: #f2ba44 !important;
  --sync-avatar-color-4: #719461 !important;
  --sync-avatar-color-5: #53b3b8 !important;
  --sync-avatar-color-6: #225973 !important;
  --sync-avatar-color-7: #775cb0 !important;
  --sync-avatar-color-8: #dc84a3 !important;
  --tab-background-active: #d9efd1 !important;
  --tab-container-background: #162a0e !important;
  --tab-divider-color: none !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #a9da97 !important;
  --tab-switcher-background: #162a0e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #162a0e, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(103, 33%, 57%) !important;
  --tab-text-color-focused-active-current: #080a02 !important;
  --table-add-button-border-color: #82b56e !important;
  --table-border-color: #82b56e !important;
  --table-drag-handle-background-active: #203d14 !important;
  --table-drag-handle-color: rgba(8, 10, 2, 0.65) !important;
  --table-drag-handle-color-active: #d9efd1 !important;
  --table-header-border-color: #82b56e !important;
  --table-header-color: #154608 !important;
  --table-selection: hsla(103, 33%, 57%, 0.1) !important;
  --table-selection-border-color: #203d14 !important;
  --tag-background: rgba(21, 70, 8, 0.85) !important;
  --tag-background-hover: rgba(21, 70, 8, 0.85) !important;
  --tag-border-color: hsla(103, 33%, 57%, 0.15) !important;
  --tag-border-color-hover: hsla(103, 33%, 57%, 0.15) !important;
  --tag-color: #d9efd1 !important;
  --tag-color-hover: #d9efd1 !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.12em !important;
  --tertiary: hsl(100, 33.66%, 65.55%) !important;
  --text-accent: hsl(103, 33%, 57%) !important;
  --text-accent-hover: hsl(100, 33.66%, 65.55%) !important;
  --text-error: #b43c3c !important;
  --text-faint: rgba(8, 10, 2, 0.65) !important;
  --text-fainted: rgba(8, 10, 2, 0.65) !important;
  --text-highlight-bg: rgba(242, 186, 68, 0.4) !important;
  --text-muted: rgba(8, 10, 2, 0.85) !important;
  --text-normal: #080a02 !important;
  --text-on-accent: #d9efd1 !important;
  --text-on-accent-inverted: #d9efd1 !important;
  --text-selection: rgba(130, 181, 110, 0.5) !important;
  --text-success: #719461 !important;
  --text-warning: #db8134 !important;
  --textHighlight: rgba(242, 186, 68, 0.4) !important;
  --titleFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #162a0e !important;
  --titlebar-background-focused: #162a0e !important;
  --titlebar-border-color: #82b56e !important;
  --titlebar-text-color: rgba(8, 10, 2, 0.85) !important;
  --titlebar-text-color-focused: #080a02 !important;
  --vault-profile-color: #080a02 !important;
  --vault-profile-color-hover: #080a02 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 42, 14);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(241, 249, 238);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(130, 181, 110);
  color: rgb(21, 70, 8);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(241, 249, 238);
  border-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(217, 239, 209);
  border-color: rgb(130, 181, 110);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(21, 70, 8, 0.85);
  color: rgb(217, 239, 209);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 42, 14);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(130, 181, 110);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 42, 14);
  border-left-color: rgb(130, 181, 110);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(241, 249, 238);
  color: rgb(8, 10, 2);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 70, 8) none 0px;
  text-decoration-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(144, 13, 38);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 13, 38) none 0px;
  text-decoration-color: rgb(144, 13, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(144, 13, 38);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 13, 38) none 0px;
  text-decoration-color: rgb(144, 13, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 70, 8) none 0px;
  text-decoration-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(242, 186, 68, 0.4);
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(8, 10, 2) none 0px;
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body del {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(8, 10, 2) none 0px;
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(21, 70, 8);
  border-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body p {
  color: rgba(241, 249, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(241, 249, 238, 0.85) none 0px;
  text-decoration-color: rgba(241, 249, 238, 0.85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 70, 8) none 0px;
  text-decoration-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(21, 70, 8) none 0px;
  text-decoration-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(21, 70, 8, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(21, 70, 8, 0.85) none 0px;
  text-decoration: underline rgb(21, 70, 8);
  text-decoration-color: rgb(21, 70, 8);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body dt {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ol > li {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ul > li {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(8, 10, 2, 0.65);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(130, 181, 110, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body table {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: rgb(21, 70, 8);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(130, 181, 110, 0.2);
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(130, 181, 110, 0.2);
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(242, 186, 68);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(242, 186, 68);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(242, 186, 68);
  border-left-color: rgb(242, 186, 68);
  border-right-color: rgb(242, 186, 68);
  border-top-color: rgb(242, 186, 68);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(130, 181, 110, 0.2);
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(130, 181, 110, 0.2);
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(21, 70, 8);
  border-left-color: rgb(21, 70, 8);
  border-right-color: rgb(21, 70, 8);
  border-top-color: rgb(21, 70, 8);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(217, 239, 209);
  border-bottom-color: rgba(8, 10, 2, 0.85);
  border-left-color: rgba(8, 10, 2, 0.85);
  border-right-color: rgba(8, 10, 2, 0.85);
  border-top-color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(130, 181, 110, 0.15);
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(32, 61, 20);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(130, 181, 110, 0.15);
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(8, 10, 2);
  text-decoration-color: rgb(8, 10, 2);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-left-color: rgba(21, 70, 8, 0.85);
  border-right-color: rgba(21, 70, 8, 0.85);
  border-top-color: rgba(21, 70, 8, 0.85);
  color: rgba(21, 70, 8, 0.85);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(21, 70, 8, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 130,181,110;
  background-color: rgba(130, 181, 110, 0.1);
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
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
  background-color: rgb(193, 229, 180);
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(241, 249, 238);
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(21, 70, 8, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(21, 70, 8, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(21, 70, 8, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(217, 239, 209);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(217, 239, 209) none 0px;
  text-decoration-color: rgb(217, 239, 209);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(32, 61, 20);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(21, 70, 8, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(21, 70, 8, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(21, 70, 8, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(21, 70, 8, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 42, 14);
  border-left-color: rgb(241, 249, 238);
  border-right-color: rgb(241, 249, 238);
  border-top-color: rgb(241, 249, 238);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(32, 61, 20);
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(32, 61, 20);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(21, 70, 8, 0.85);
  border-bottom-color: rgba(130, 182, 109, 0.15);
  border-left-color: rgba(130, 182, 109, 0.15);
  border-right-color: rgba(130, 182, 109, 0.15);
  border-top-color: rgba(130, 182, 109, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(217, 239, 209);
}

html[saved-theme="light"] body h1 {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(21, 70, 8);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 130,181,110;
  border-bottom-color: rgba(130, 181, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(130, 181, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(130, 181, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(130, 181, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(241, 249, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(241, 249, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(241, 249, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(241, 249, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(241, 249, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(241, 249, 238);
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(241, 249, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(241, 249, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(241, 249, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(241, 249, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(241, 249, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(241, 249, 238);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(241, 249, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(241, 249, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(130, 181, 110, 0.65);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(8, 10, 2);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(193, 229, 180);
  border-bottom-color: rgb(130, 181, 110);
  border-left-color: rgb(130, 181, 110);
  border-right-color: rgb(130, 181, 110);
  border-top-color: rgb(130, 181, 110);
  color: rgba(8, 10, 2, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(8, 10, 2, 0.85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(241, 249, 238);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(241, 249, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(241, 249, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(241, 249, 238);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(217, 239, 209);
  border-left-color: rgb(217, 239, 209);
  border-right-color: rgb(217, 239, 209);
  border-top-color: rgb(217, 239, 209);
  color: rgb(217, 239, 209);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(217, 239, 209);
  stroke: rgb(217, 239, 209);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(8, 10, 2, 0.85);
  border-left-color: rgba(8, 10, 2, 0.85);
  border-right-color: rgba(8, 10, 2, 0.85);
  border-top-color: rgba(8, 10, 2, 0.85);
  color: rgba(8, 10, 2, 0.85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(8, 10, 2, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(217, 239, 209);
  border-bottom-color: rgb(130, 181, 110);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(130, 181, 110);
  border-left-width: 1px;
  border-right-color: rgb(130, 181, 110);
  border-right-width: 1px;
  border-top-color: rgb(130, 181, 110);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(8, 10, 2, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(8, 10, 2, 0.85);
  border-left-color: rgba(8, 10, 2, 0.85);
  border-right-color: rgba(8, 10, 2, 0.85);
  border-top-color: rgba(8, 10, 2, 0.85);
  color: rgba(8, 10, 2, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(193, 229, 180);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(8, 10, 2);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(8, 10, 2, 0.85);
  border-left-color: rgba(8, 10, 2, 0.85);
  border-right-color: rgba(8, 10, 2, 0.85);
  border-top-color: rgba(8, 10, 2, 0.85);
  color: rgba(8, 10, 2, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(32, 61, 20);
  border-bottom-color: rgb(217, 239, 209);
  border-left-color: rgb(217, 239, 209);
  border-right-color: rgb(217, 239, 209);
  border-top-color: rgb(217, 239, 209);
  color: rgb(217, 239, 209);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 10, 2);
  border-left-color: rgb(8, 10, 2);
  border-right-color: rgb(8, 10, 2);
  border-top-color: rgb(8, 10, 2);
}

html[saved-theme="light"] body sub {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body summary {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body sup {
  color: rgb(8, 10, 2);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(21, 70, 8, 0.85);
  border-bottom-color: rgba(130, 182, 109, 0.15);
  border-left-color: rgba(130, 182, 109, 0.15);
  border-right-color: rgba(130, 182, 109, 0.15);
  border-top-color: rgba(130, 182, 109, 0.15);
  color: rgb(217, 239, 209);
}`,
  },
};
