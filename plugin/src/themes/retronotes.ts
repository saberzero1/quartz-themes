import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0 !important;
  --accent-l: 13% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(0, 100%, 13%, 0.1) !important;
  --background-modifier-border: #6e6e6e !important;
  --background-modifier-border-focus: #5a5a5a !important;
  --background-modifier-border-hover: #828282 !important;
  --background-modifier-error: #2a0000 !important;
  --background-modifier-error-hover: #440000 !important;
  --background-modifier-error-rgb: 138, 46, 46 !important;
  --background-modifier-form-field: #3d3d3d !important;
  --background-modifier-form-field-hover: #3d3d3d !important;
  --background-modifier-hover: #440000 !important;
  --background-modifier-message: #5a5a5a !important;
  --background-modifier-success: #5a5a5a !important;
  --background-modifier-success-rgb: 90, 122, 77 !important;
  --background-primary: #0c0c0c !important;
  --background-primary-alt: #202020 !important;
  --background-secondary: #2a0000 !important;
  --background-secondary-alt: #474747 !important;
  --bases-cards-background: #0c0c0c !important;
  --bases-cards-cover-background: #202020 !important;
  --bases-cards-shadow: 0 0 0 1px #6e6e6e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #828282 !important;
  --bases-embed-border-color: #6e6e6e !important;
  --bases-group-heading-property-color: rgba(249, 246, 238, 0.85) !important;
  --bases-table-border-color: #6e6e6e !important;
  --bases-table-cell-background-active: #0c0c0c !important;
  --bases-table-cell-background-disabled: #202020 !important;
  --bases-table-cell-background-selected: hsla(0, 100%, 13%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #5a5a5a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(0, 100%, 13%) !important;
  --bases-table-group-background: #202020 !important;
  --bases-table-header-background: #0c0c0c !important;
  --bases-table-header-background-hover: #333333 !important;
  --bases-table-header-color: rgba(249, 246, 238, 0.85) !important;
  --bases-table-summary-background: #0c0c0c !important;
  --bases-table-summary-background-hover: #440000 !important;
  --blockquote-background-color: rgba(110, 110, 110, 0.2) !important;
  --blockquote-border-color: #e2752c !important;
  --blur-background: color-mix(in srgb, #474747 65%, transparent) linear-gradient(#474747, color-mix(in srgb, #474747 65%, transparent)) !important;
  --bodyFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-accent-ink: #64ad4b !important;
  --bold-color: #64ad4b !important;
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
  --canvas-background: #0c0c0c !important;
  --canvas-card-label-color: rgba(249, 246, 238, 0.65) !important;
  --canvas-color-1: 138, 46, 46 !important;
  --canvas-color-2: 179, 104, 42 !important;
  --canvas-color-3: 194, 153, 56 !important;
  --canvas-color-4: 90, 122, 77 !important;
  --canvas-color-5: 67, 143, 147 !important;
  --canvas-color-6: 95, 74, 140 !important;
  --canvas-dot-pattern: rgba(226, 117, 44, 0.4) !important;
  --caret-color: #959595 !important;
  --checkbox-border-color: #f9f6ee !important;
  --checkbox-border-color-hover: rgba(249, 246, 238, 0.65) !important;
  --checkbox-color: #e2752c !important;
  --checkbox-color-hover: rgba(226, 117, 44, 0.85) !important;
  --checkbox-marker-color: #202020 !important;
  --checklist-done-color: rgba(226, 117, 44, 0.65) !important;
  --code-background: rgba(110, 110, 110, 0.2) !important;
  --code-border-color: #6e6e6e !important;
  --code-bracket-background: #440000 !important;
  --code-comment: rgba(249, 246, 238, 0.65) !important;
  --code-function: #c29938 !important;
  --code-important: #b3682a !important;
  --code-keyword: #b16982 !important;
  --code-normal: #f9f6ee !important;
  --code-operator: #8a2e2e !important;
  --code-property: #438f93 !important;
  --code-punctuation: rgba(249, 246, 238, 0.85) !important;
  --code-string: #5a7a4d !important;
  --code-tag: #8a2e2e !important;
  --code-value: #5f4a8c !important;
  --codeFont: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(249, 246, 238, 0.65) !important;
  --collapse-icon-color-collapsed: hsl(-3, 102%, 14.95%) !important;
  --color-accent: hsl(0, 100%, 13%) !important;
  --color-accent-1: hsl(-3, 102%, 14.95%) !important;
  --color-accent-2: hsl(-5, 105%, 16.77%) !important;
  --color-accent-hsl: 0, 100%, 13% !important;
  --color-base-00: #0c0c0c !important;
  --color-base-00-rgb: 12, 12, 12 !important;
  --color-base-05: #161616 !important;
  --color-base-10: #202020 !important;
  --color-base-100: #d0d0d0 !important;
  --color-base-20: #333333 !important;
  --color-base-25: #3d3d3d !important;
  --color-base-30: #474747 !important;
  --color-base-35: #515151 !important;
  --color-base-40: #5a5a5a !important;
  --color-base-50: #6e6e6e !important;
  --color-base-50-rgb: 110, 110, 110 !important;
  --color-base-60: #828282 !important;
  --color-base-70: #959595 !important;
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
  --dark: #f9f6ee !important;
  --darkgray: #f9f6ee !important;
  --divider-color: #6e6e6e !important;
  --divider-color-hover: hsl(0, 100%, 13%) !important;
  --dropdown-background: #474747 !important;
  --dropdown-background-hover: #515151 !important;
  --embed-background: rgba(110, 110, 110, 0.15) !important;
  --embed-block-shadow-hover: 0 0 0 1px #6e6e6e, inset 0 0 0 1px #6e6e6e !important;
  --embed-border-start: 2px solid rgba(226, 117, 44, 0.85) !important;
  --fainted: 0.65 !important;
  --file-header-background: #0c0c0c !important;
  --file-header-background-focused: #0c0c0c !important;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #474747 !important;
  --flair-color: #f9f6ee !important;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Mono', monospace !important;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'IBM Plex Mono', monospace !important;
  --font-print: IBM Plex Mono, monospace, Arial' !important;
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Mono', monospace !important;
  --footnote-divider-color: #6e6e6e !important;
  --footnote-id-color: rgba(249, 246, 238, 0.85) !important;
  --footnote-id-color-no-occurrences: rgba(249, 246, 238, 0.65) !important;
  --footnote-input-background-active: #161616 !important;
  --graph-line: #515151 !important;
  --graph-node: rgba(249, 246, 238, 0.85) !important;
  --graph-node-attachment: #c29938 !important;
  --graph-node-focused: #e2752c !important;
  --graph-node-tag: #64ad4b !important;
  --graph-node-unresolved: rgba(249, 246, 238, 0.65) !important;
  --graph-text: #f9f6ee !important;
  --gray: rgba(249, 246, 238, 0.85) !important;
  --h1-color: #e2752c !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2.2em !important;
  --h2-color: #e2752c !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 2em !important;
  --h3-color: #e2752c !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.8em !important;
  --h4-color: #e2752c !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.6em !important;
  --h5-color: #e2752c !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.4em !important;
  --h6-color: #e2752c !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.2em !important;
  --headerFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(249, 246, 238, 0.65) !important;
  --highlight: rgba(194, 153, 56, 0.4) !important;
  --hr-color: rgba(226, 117, 44, 0.85) !important;
  --icon-color: rgba(249, 246, 238, 0.85) !important;
  --icon-color-active: hsl(-3, 102%, 14.95%) !important;
  --icon-color-focused: #f9f6ee !important;
  --icon-color-hover: rgba(249, 246, 238, 0.85) !important;
  --indentation-guide-color: rgba(226, 117, 44, 0.65) !important;
  --indentation-guide-color-active: rgba(226, 117, 44, 0.85) !important;
  --inline-title-color: #e2752c !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.2em !important;
  --input-date-separator: rgba(249, 246, 238, 0.65) !important;
  --input-placeholder-color: rgba(249, 246, 238, 0.65) !important;
  --interactive-accent: hsl(0, 100%, 13%) !important;
  --interactive-accent-hover: hsl(-3, 102%, 14.95%) !important;
  --interactive-accent-hsl: 0, 100%, 13% !important;
  --interactive-hover: #515151 !important;
  --interactive-normal: #474747 !important;
  --italic-accent-ink: #4caddd !important;
  --italic-color: #4caddd !important;
  --leather-color: #2a0000 !important;
  --leather-color-alt: #440000 !important;
  --leather-color-rgb: 75, 0, 0 !important;
  --light: #0c0c0c !important;
  --light-ink: #f9f6ee !important;
  --light-ink-alt: #e2d6d6 !important;
  --light-ink-fainted: rgba(249, 246, 238, 0.65) !important;
  --light-ink-muted: rgba(249, 246, 238, 0.85) !important;
  --lightgray: #2a0000 !important;
  --link-color: #e2752c !important;
  --link-color-hover: rgba(226, 117, 44, 0.85) !important;
  --link-external-color: #e2752c !important;
  --link-external-color-hover: rgba(226, 117, 44, 0.85) !important;
  --link-unresolved-color: rgba(226, 117, 44, 0.85) !important;
  --link-unresolved-color-hover: #e2752c !important;
  --link-unresolved-decoration-color: #e2752c !important;
  --list-marker-color: rgba(226, 117, 44, 0.65) !important;
  --list-marker-color-collapsed: #e2752c !important;
  --list-marker-color-hover: rgba(226, 117, 44, 0.65) !important;
  --main-ink: #f9f6ee !important;
  --main-ink-fainted: rgba(249, 246, 238, 0.65) !important;
  --main-ink-muted: rgba(249, 246, 238, 0.85) !important;
  --main-ink-rgb: 249,246,238 !important;
  --menu-background: #2a0000 !important;
  --menu-border-color: #828282 !important;
  --metadata-background: #202020 !important;
  --metadata-border-color: #6e6e6e !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #6e6e6e !important;
  --metadata-gap: 4px !important;
  --metadata-input-background-active: #161616 !important;
  --metadata-input-background-hover: #202020 !important;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f9f6ee !important;
  --metadata-label-background-active: #202020 !important;
  --metadata-label-background-hover: #202020 !important;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(249, 246, 238, 0.85) !important;
  --metadata-label-text-color-hover: rgba(249, 246, 238, 0.85) !important;
  --metadata-padding: 16px !important;
  --metadata-property-background-active: #333333 !important;
  --metadata-property-background-hover: #333333 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #5a5a5a !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #828282 !important;
  --modal-background: #202020 !important;
  --modal-border-color: #5a5a5a !important;
  --modal-border-width: 2px !important;
  --muted: 0.85 !important;
  --nav-collapse-icon-color: #6e6e6e !important;
  --nav-collapse-icon-color-collapsed: rgba(249, 246, 238, 0.65) !important;
  --nav-heading-color: #f9f6ee !important;
  --nav-heading-color-collapsed: rgba(249, 246, 238, 0.65) !important;
  --nav-heading-color-collapsed-hover: rgba(249, 246, 238, 0.85) !important;
  --nav-heading-color-hover: #f9f6ee !important;
  --nav-indentation-guide-color: rgba(249, 246, 238, 0.65) !important;
  --nav-item-background-active: #440000 !important;
  --nav-item-background-hover: #440000 !important;
  --nav-item-background-selected: hsla(0, 100%, 13%, 0.15) !important;
  --nav-item-color: #f9f6ee !important;
  --nav-item-color-active: #e2d6d6 !important;
  --nav-item-color-highlighted: hsl(-3, 102%, 14.95%) !important;
  --nav-item-color-hover: #e2d6d6 !important;
  --nav-item-color-selected: #e2d6d6 !important;
  --nav-tag-color: rgba(249, 246, 238, 0.65) !important;
  --nav-tag-color-active: rgba(249, 246, 238, 0.85) !important;
  --nav-tag-color-hover: rgba(249, 246, 238, 0.85) !important;
  --pdf-background: #0c0c0c !important;
  --pdf-page-background: #0c0c0c !important;
  --pdf-shadow: 0 0 0 1px #6e6e6e !important;
  --pdf-sidebar-background: #0c0c0c !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #6e6e6e !important;
  --pill-background: #333333 !important;
  --pill-background-hover: #474747 !important;
  --pill-border-color: #6e6e6e !important;
  --pill-border-color-hover: #828282 !important;
  --pill-color: rgba(249, 246, 238, 0.85) !important;
  --pill-color-hover: #f9f6ee !important;
  --pill-color-remove: rgba(249, 246, 238, 0.65) !important;
  --pill-color-remove-hover: hsl(-3, 102%, 14.95%) !important;
  --pill-padding-x: 4px !important;
  --pill-padding-y: 2px !important;
  --plexmono: 'IBM Plex Mono', monospace !important;
  --prompt-background: #0c0c0c !important;
  --prompt-border-color: rgba(226, 117, 44, 0.85) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #474747 65%, transparent) linear-gradient(#474747, color-mix(in srgb, #474747 65%, transparent)) !important;
  --ribbon-background: #2a0000 !important;
  --ribbon-background-collapsed: #440000 !important;
  --search-clear-button-color: rgba(249, 246, 238, 0.85) !important;
  --search-icon-color: rgba(249, 246, 238, 0.85) !important;
  --search-result-background: #0c0c0c !important;
  --secondary: hsl(-3, 102%, 14.95%) !important;
  --secondary-ink: #e2752c !important;
  --secondary-ink-fainted: rgba(226, 117, 44, 0.65) !important;
  --secondary-ink-muted: rgba(226, 117, 44, 0.85) !important;
  --secondary-ink-rgb: 226, 117, 44 !important;
  --setting-group-heading-color: #f9f6ee !important;
  --setting-items-background: #202020 !important;
  --setting-items-border-color: #6e6e6e !important;
  --slider-thumb-border-color: #828282 !important;
  --slider-track-background: #6e6e6e !important;
  --status-bar-background: #333333 !important;
  --status-bar-border-color: #6e6e6e !important;
  --status-bar-text-color: rgba(249, 246, 238, 0.85) !important;
  --suggestion-background: #0c0c0c !important;
  --sync-avatar-color-1: #8a2e2e !important;
  --sync-avatar-color-2: #b3682a !important;
  --sync-avatar-color-3: #c29938 !important;
  --sync-avatar-color-4: #5a7a4d !important;
  --sync-avatar-color-5: #438f93 !important;
  --sync-avatar-color-6: #1a4559 !important;
  --sync-avatar-color-7: #5f4a8c !important;
  --sync-avatar-color-8: #b16982 !important;
  --tab-background-active: #202020 !important;
  --tab-container-background: #2a0000 !important;
  --tab-divider-color: none !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #474747 !important;
  --tab-switcher-background: #2a0000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2a0000, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 100%, 13%) !important;
  --tab-text-color-focused-active-current: #f9f6ee !important;
  --table-add-button-border-color: #6e6e6e !important;
  --table-border-color: #6e6e6e !important;
  --table-drag-handle-background-active: hsl(0, 100%, 13%) !important;
  --table-drag-handle-color: rgba(249, 246, 238, 0.65) !important;
  --table-drag-handle-color-active: #e2d6d6 !important;
  --table-header-border-color: #6e6e6e !important;
  --table-header-color: #e2752c !important;
  --table-selection: hsla(0, 100%, 13%, 0.1) !important;
  --table-selection-border-color: hsl(0, 100%, 13%) !important;
  --tag-background: rgba(226, 117, 44, 0.85) !important;
  --tag-background-hover: rgba(226, 117, 44, 0.85) !important;
  --tag-border-color: hsla(0, 100%, 13%, 0.15) !important;
  --tag-border-color-hover: hsla(0, 100%, 13%, 0.15) !important;
  --tag-color: #0c0c0c !important;
  --tag-color-hover: #202020 !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.12em !important;
  --tertiary: hsl(-5, 105%, 16.77%) !important;
  --text-accent: hsl(-3, 102%, 14.95%) !important;
  --text-accent-hover: hsl(-5, 105%, 16.77%) !important;
  --text-error: #8a2e2e !important;
  --text-faint: rgba(249, 246, 238, 0.65) !important;
  --text-fainted: rgba(249, 246, 238, 0.65) !important;
  --text-highlight-bg: rgba(194, 153, 56, 0.4) !important;
  --text-muted: rgba(249, 246, 238, 0.85) !important;
  --text-normal: #f9f6ee !important;
  --text-on-accent: #e2d6d6 !important;
  --text-on-accent-inverted: #e2d6d6 !important;
  --text-selection: rgba(110, 110, 110, 0.5) !important;
  --text-success: #5a7a4d !important;
  --text-warning: #b3682a !important;
  --textHighlight: rgba(194, 153, 56, 0.4) !important;
  --titleFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #2a0000 !important;
  --titlebar-background-focused: #2a0000 !important;
  --titlebar-border-color: #6e6e6e !important;
  --titlebar-text-color: rgba(249, 246, 238, 0.85) !important;
  --titlebar-text-color-focused: #f9f6ee !important;
  --vault-profile-color: #f9f6ee !important;
  --vault-profile-color-hover: #f9f6ee !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(42, 0, 0);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(12, 12, 12);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(110, 110, 110);
  color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(42, 0, 0);
  border-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(32, 32, 32);
  border-color: rgb(110, 110, 110);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(226, 117, 44, 0.85);
  color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(42, 0, 0);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(110, 110, 110);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(42, 0, 0);
  border-left-color: rgb(110, 110, 110);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(12, 12, 12);
  color: rgb(249, 246, 238);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(100, 173, 75);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 173, 75) none 0px;
  text-decoration-color: rgb(100, 173, 75);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(76, 173, 221);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 173, 221) none 0px;
  text-decoration-color: rgb(76, 173, 221);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(76, 173, 221);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 173, 221) none 0px;
  text-decoration-color: rgb(76, 173, 221);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(100, 173, 75);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 173, 75) none 0px;
  text-decoration-color: rgb(100, 173, 75);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(194, 153, 56, 0.4);
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 246, 238) none 0px;
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 246, 238) none 0px;
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(226, 117, 44);
  border-color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body p {
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(249, 246, 238, 0.85) none 0px;
  text-decoration-color: rgba(249, 246, 238, 0.85);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 117, 44) none 0px;
  text-decoration-color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 117, 44) none 0px;
  text-decoration-color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(226, 117, 44, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(226, 117, 44, 0.85) none 0px;
  text-decoration: underline rgb(226, 117, 44);
  text-decoration-color: rgb(226, 117, 44);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body dt {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(249, 246, 238, 0.65);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(110, 110, 110, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body table {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgb(226, 117, 44);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(110, 110, 110, 0.2);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(110, 110, 110, 0.2);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgb(249, 246, 238);
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
  background-color: rgba(110, 110, 110, 0.2);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(110, 110, 110, 0.2);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(226, 117, 44);
  border-left-color: rgb(226, 117, 44);
  border-right-color: rgb(226, 117, 44);
  border-top-color: rgb(226, 117, 44);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-left-color: rgba(249, 246, 238, 0.85);
  border-right-color: rgba(249, 246, 238, 0.85);
  border-top-color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(110, 110, 110, 0.15);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgba(226, 117, 44, 0.85);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(110, 110, 110, 0.15);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(249, 246, 238);
  text-decoration-color: rgb(249, 246, 238);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-left-color: rgba(226, 117, 44, 0.85);
  border-right-color: rgba(226, 117, 44, 0.85);
  border-top-color: rgba(226, 117, 44, 0.85);
  color: rgba(226, 117, 44, 0.85);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(226, 117, 44, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 110, 110, 110;
  background-color: rgba(110, 110, 110, 0.1);
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
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
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(226, 214, 214);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 214, 214) none 0px;
  text-decoration-color: rgb(226, 214, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(68, 0, 0);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(226, 117, 44, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(226, 117, 44, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(226, 117, 44, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(226, 117, 44, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(42, 0, 0);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(68, 0, 0);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(68, 0, 0);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(226, 117, 44, 0.85);
  border-bottom-color: rgba(66, 0, 0, 0.15);
  border-left-color: rgba(66, 0, 0, 0.15);
  border-right-color: rgba(66, 0, 0, 0.15);
  border-top-color: rgba(66, 0, 0, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body h1 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(226, 117, 44);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 110, 110, 110;
  border-bottom-color: rgba(110, 110, 110, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 110, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 110, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 110, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(249, 246, 238, 0.65);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(249, 246, 238);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(110, 110, 110);
  border-left-color: rgb(110, 110, 110);
  border-right-color: rgb(110, 110, 110);
  border-top-color: rgb(110, 110, 110);
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(249, 246, 238, 0.85);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(226, 214, 214);
  border-left-color: rgb(226, 214, 214);
  border-right-color: rgb(226, 214, 214);
  border-top-color: rgb(226, 214, 214);
  color: rgb(226, 214, 214);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(226, 214, 214);
  stroke: rgb(226, 214, 214);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-left-color: rgba(249, 246, 238, 0.85);
  border-right-color: rgba(249, 246, 238, 0.85);
  border-top-color: rgba(249, 246, 238, 0.85);
  color: rgba(249, 246, 238, 0.85);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(249, 246, 238, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(110, 110, 110);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(110, 110, 110);
  border-left-width: 1px;
  border-right-color: rgb(110, 110, 110);
  border-right-width: 1px;
  border-top-color: rgb(110, 110, 110);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-left-color: rgba(249, 246, 238, 0.85);
  border-right-color: rgba(249, 246, 238, 0.85);
  border-top-color: rgba(249, 246, 238, 0.85);
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(51, 51, 51);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(249, 246, 238, 0.85);
  border-left-color: rgba(249, 246, 238, 0.85);
  border-right-color: rgba(249, 246, 238, 0.85);
  border-top-color: rgba(249, 246, 238, 0.85);
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(68, 0, 0);
  border-bottom-color: rgb(226, 214, 214);
  border-left-color: rgb(226, 214, 214);
  border-right-color: rgb(226, 214, 214);
  border-top-color: rgb(226, 214, 214);
  color: rgb(226, 214, 214);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(249, 246, 238);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body sub {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body sup {
  color: rgb(249, 246, 238);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(226, 117, 44, 0.85);
  border-bottom-color: rgba(66, 0, 0, 0.15);
  border-left-color: rgba(66, 0, 0, 0.15);
  border-right-color: rgba(66, 0, 0, 0.15);
  border-top-color: rgba(66, 0, 0, 0.15);
  color: rgb(12, 12, 12);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 43.5 !important;
  --accent-l: 49.4% !important;
  --accent-s: 47.6% !important;
  --background-modifier-active-hover: hsla(43.5, 47.6%, 49.4%, 0.1) !important;
  --background-modifier-border: #ba9942 !important;
  --background-modifier-border-focus: #c6a95d !important;
  --background-modifier-border-hover: #9d8137 !important;
  --background-modifier-error: #632335 !important;
  --background-modifier-error-hover: #762a3f !important;
  --background-modifier-error-rgb: 180, 60, 60 !important;
  --background-modifier-form-field: #e5d7b4 !important;
  --background-modifier-form-field-hover: #e5d7b4 !important;
  --background-modifier-hover: #762a3f !important;
  --background-modifier-message: #c6a95d !important;
  --background-modifier-success: #c6a95d !important;
  --background-modifier-success-rgb: 113, 148, 97 !important;
  --background-primary: #f9f6ee !important;
  --background-primary-alt: #efe7d1 !important;
  --background-secondary: #632335 !important;
  --background-secondary-alt: #f4eee0 !important;
  --bases-cards-background: #f9f6ee !important;
  --bases-cards-cover-background: #efe7d1 !important;
  --bases-cards-shadow: 0 0 0 1px #ba9942 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #9d8137 !important;
  --bases-embed-border-color: #ba9942 !important;
  --bases-group-heading-property-color: rgba(30, 61, 109, 0.85) !important;
  --bases-table-border-color: #ba9942 !important;
  --bases-table-cell-background-active: #f9f6ee !important;
  --bases-table-cell-background-disabled: #efe7d1 !important;
  --bases-table-cell-background-selected: hsla(43.5, 47.6%, 49.4%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #c6a95d !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #762a3f !important;
  --bases-table-group-background: #efe7d1 !important;
  --bases-table-header-background: #f9f6ee !important;
  --bases-table-header-background-hover: #e5d7b4 !important;
  --bases-table-header-color: rgba(30, 61, 109, 0.85) !important;
  --bases-table-summary-background: #f9f6ee !important;
  --bases-table-summary-background-hover: #762a3f !important;
  --blockquote-background-color: rgba(186, 153, 66, 0.2) !important;
  --blockquote-border-color: #9c2d32 !important;
  --blur-background: color-mix(in srgb, #f9f6ee 65%, transparent) linear-gradient(#f9f6ee, color-mix(in srgb, #f9f6ee 65%, transparent)) !important;
  --bodyFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-accent-ink: #4f6c4f !important;
  --bold-color: #4f6c4f !important;
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
  --canvas-background: #f9f6ee !important;
  --canvas-card-label-color: rgba(30, 61, 109, 0.65) !important;
  --canvas-color-1: 180, 60, 60 !important;
  --canvas-color-2: 219, 129, 52 !important;
  --canvas-color-3: 242, 186, 68 !important;
  --canvas-color-4: 113, 148, 97 !important;
  --canvas-color-5: 83, 179, 184 !important;
  --canvas-color-6: 119, 92, 176 !important;
  --canvas-dot-pattern: rgba(156, 45, 50, 0.4) !important;
  --caret-color: #80692d !important;
  --checkbox-border-color: #1e3d6d !important;
  --checkbox-border-color-hover: rgba(30, 61, 109, 0.65) !important;
  --checkbox-color: #9c2d32 !important;
  --checkbox-color-hover: rgba(156, 45, 50, 0.85) !important;
  --checkbox-marker-color: #e5d7b4 !important;
  --checklist-done-color: rgba(156, 45, 50, 0.65) !important;
  --code-background: rgba(186, 153, 66, 0.2) !important;
  --code-border-color: #ba9942 !important;
  --code-bracket-background: #762a3f !important;
  --code-comment: rgba(30, 61, 109, 0.65) !important;
  --code-function: #f2ba44 !important;
  --code-important: #db8134 !important;
  --code-keyword: #dc84a3 !important;
  --code-normal: #1e3d6d !important;
  --code-operator: #b43c3c !important;
  --code-property: #53b3b8 !important;
  --code-punctuation: rgba(30, 61, 109, 0.85) !important;
  --code-string: #719461 !important;
  --code-tag: #b43c3c !important;
  --code-value: #775cb0 !important;
  --codeFont: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(30, 61, 109, 0.65) !important;
  --collapse-icon-color-collapsed: hsl(43.5, 47.6%, 49.4%) !important;
  --color-accent: hsl(43.5, 47.6%, 49.4%) !important;
  --color-accent-1: hsl(42.5, 48.076%, 53.105%) !important;
  --color-accent-2: hsl(40.5, 48.552%, 56.81%) !important;
  --color-accent-hsl: 43.5, 47.6%, 49.4% !important;
  --color-base-00: #f9f6ee !important;
  --color-base-00-rgb: 249,246,238 !important;
  --color-base-05: #f4eee0 !important;
  --color-base-10: #efe7d1 !important;
  --color-base-100: #29220e !important;
  --color-base-20: #e5d7b4 !important;
  --color-base-25: #dfd0a6 !important;
  --color-base-30: #dac897 !important;
  --color-base-35: #d5c089 !important;
  --color-base-40: #c6a95d !important;
  --color-base-50: #ba9942 !important;
  --color-base-50-rgb: 186,153,66 !important;
  --color-base-60: #9d8137 !important;
  --color-base-70: #80692d !important;
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
  --dark: #1e3d6d !important;
  --darkgray: #1e3d6d !important;
  --divider-color: #ba9942 !important;
  --divider-color-hover: #762a3f !important;
  --dropdown-background: #dac897 !important;
  --dropdown-background-hover: #e5d7b4 !important;
  --embed-background: rgba(186, 153, 66, 0.15) !important;
  --embed-block-shadow-hover: 0 0 0 1px #ba9942, inset 0 0 0 1px #ba9942 !important;
  --embed-border-start: 2px solid #762a3f !important;
  --fainted: 0.65 !important;
  --file-header-background: #f9f6ee !important;
  --file-header-background-focused: #f9f6ee !important;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #dac897 !important;
  --flair-color: #1e3d6d !important;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Mono', monospace !important;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'IBM Plex Mono', monospace !important;
  --font-print: IBM Plex Mono, monospace, Arial' !important;
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Mono', monospace !important;
  --footnote-divider-color: #ba9942 !important;
  --footnote-id-color: rgba(30, 61, 109, 0.85) !important;
  --footnote-id-color-no-occurrences: rgba(30, 61, 109, 0.65) !important;
  --footnote-input-background-active: #f4eee0 !important;
  --graph-line: #d5c089 !important;
  --graph-node: rgba(30, 61, 109, 0.85) !important;
  --graph-node-attachment: #f2ba44 !important;
  --graph-node-focused: #9c2d32 !important;
  --graph-node-tag: #4f6c4f !important;
  --graph-node-unresolved: rgba(30, 61, 109, 0.65) !important;
  --graph-text: #1e3d6d !important;
  --gray: rgba(30, 61, 109, 0.85) !important;
  --h1-color: #9c2d32 !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2.2em !important;
  --h2-color: #9c2d32 !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 2em !important;
  --h3-color: #9c2d32 !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.8em !important;
  --h4-color: #9c2d32 !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.6em !important;
  --h5-color: #9c2d32 !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.4em !important;
  --h6-color: #9c2d32 !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.2em !important;
  --headerFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(30, 61, 109, 0.65) !important;
  --highlight: rgba(242, 186, 68, 0.4) !important;
  --hr-color: rgba(156, 45, 50, 0.85) !important;
  --icon-color: rgba(30, 61, 109, 0.85) !important;
  --icon-color-active: hsl(43.5, 47.6%, 49.4%) !important;
  --icon-color-focused: #1e3d6d !important;
  --icon-color-hover: rgba(30, 61, 109, 0.85) !important;
  --indentation-guide-color: rgba(156, 45, 50, 0.65) !important;
  --indentation-guide-color-active: rgba(156, 45, 50, 0.85) !important;
  --inline-title-color: #9c2d32 !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.2em !important;
  --input-date-separator: rgba(30, 61, 109, 0.65) !important;
  --input-placeholder-color: rgba(30, 61, 109, 0.65) !important;
  --interactive-accent: #762a3f !important;
  --interactive-accent-hover: #632335 !important;
  --interactive-accent-hsl: 43.5, 47.6%, 49.4% !important;
  --interactive-hover: #e5d7b4 !important;
  --interactive-normal: #dac897 !important;
  --italic-accent-ink: #9c2d32 !important;
  --italic-color: #9c2d32 !important;
  --leather-color: #632335 !important;
  --leather-color-alt: #762a3f !important;
  --leather-color-rgb: 99, 35, 53 !important;
  --light: #f9f6ee !important;
  --light-ink: #f9f6ee !important;
  --light-ink-alt: #e5d7b4 !important;
  --light-ink-fainted: rgba(249, 246, 238, 0.65) !important;
  --light-ink-muted: rgba(249, 246, 238, 0.85) !important;
  --lightgray: #632335 !important;
  --link-color: #9c2d32 !important;
  --link-color-hover: rgba(156, 45, 50, 0.85) !important;
  --link-external-color: #9c2d32 !important;
  --link-external-color-hover: rgba(156, 45, 50, 0.85) !important;
  --link-unresolved-color: rgba(156, 45, 50, 0.85) !important;
  --link-unresolved-color-hover: #9c2d32 !important;
  --link-unresolved-decoration-color: #9c2d32 !important;
  --list-marker-color: rgba(156, 45, 50, 0.65) !important;
  --list-marker-color-collapsed: #9c2d32 !important;
  --list-marker-color-hover: rgba(156, 45, 50, 0.65) !important;
  --main-ink: #1e3d6d !important;
  --main-ink-fainted: rgba(30, 61, 109, 0.65) !important;
  --main-ink-muted: rgba(30, 61, 109, 0.85) !important;
  --main-ink-rgb: 30, 61, 109 !important;
  --menu-background: #632335 !important;
  --menu-border-color: #9d8137 !important;
  --metadata-background: #efe7d1 !important;
  --metadata-border-color: #ba9942 !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #ba9942 !important;
  --metadata-gap: 4px !important;
  --metadata-input-background-active: #f4eee0 !important;
  --metadata-input-background-hover: #efe7d1 !important;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #1e3d6d !important;
  --metadata-label-background-active: #efe7d1 !important;
  --metadata-label-background-hover: #efe7d1 !important;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(30, 61, 109, 0.85) !important;
  --metadata-label-text-color-hover: rgba(30, 61, 109, 0.85) !important;
  --metadata-padding: 16px !important;
  --metadata-property-background-active: #e5d7b4 !important;
  --metadata-property-background-hover: #e5d7b4 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c6a95d !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #9d8137 !important;
  --modal-background: #efe7d1 !important;
  --modal-border-color: #c6a95d !important;
  --modal-border-width: 2px !important;
  --muted: 0.85 !important;
  --nav-collapse-icon-color: #ba9942 !important;
  --nav-collapse-icon-color-collapsed: rgba(30, 61, 109, 0.65) !important;
  --nav-heading-color: #1e3d6d !important;
  --nav-heading-color-collapsed: rgba(30, 61, 109, 0.65) !important;
  --nav-heading-color-collapsed-hover: rgba(30, 61, 109, 0.85) !important;
  --nav-heading-color-hover: #1e3d6d !important;
  --nav-indentation-guide-color: rgba(186, 153, 66, 0.65) !important;
  --nav-item-background-active: #762a3f !important;
  --nav-item-background-hover: #762a3f !important;
  --nav-item-background-selected: hsla(43.5, 47.6%, 49.4%, 0.15) !important;
  --nav-item-color: #f9f6ee !important;
  --nav-item-color-active: #e5d7b4 !important;
  --nav-item-color-highlighted: hsl(43.5, 47.6%, 49.4%) !important;
  --nav-item-color-hover: #e5d7b4 !important;
  --nav-item-color-selected: #e5d7b4 !important;
  --nav-tag-color: rgba(30, 61, 109, 0.65) !important;
  --nav-tag-color-active: rgba(30, 61, 109, 0.85) !important;
  --nav-tag-color-hover: rgba(30, 61, 109, 0.85) !important;
  --pdf-background: #f9f6ee !important;
  --pdf-page-background: #f9f6ee !important;
  --pdf-sidebar-background: #f9f6ee !important;
  --pill-background: #e5d7b4 !important;
  --pill-background-hover: #dac897 !important;
  --pill-border-color: #ba9942 !important;
  --pill-border-color-hover: #9d8137 !important;
  --pill-color: rgba(30, 61, 109, 0.85) !important;
  --pill-color-hover: #1e3d6d !important;
  --pill-color-remove: rgba(30, 61, 109, 0.65) !important;
  --pill-color-remove-hover: hsl(43.5, 47.6%, 49.4%) !important;
  --pill-padding-x: 4px !important;
  --pill-padding-y: 2px !important;
  --plexmono: 'IBM Plex Mono', monospace !important;
  --prompt-background: #f9f6ee !important;
  --prompt-border-color: rgba(156, 45, 50, 0.85) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #f9f6ee 65%, transparent) linear-gradient(#f9f6ee, color-mix(in srgb, #f9f6ee 65%, transparent)) !important;
  --ribbon-background: #632335 !important;
  --ribbon-background-collapsed: #762a3f !important;
  --search-clear-button-color: rgba(30, 61, 109, 0.85) !important;
  --search-icon-color: rgba(30, 61, 109, 0.85) !important;
  --search-result-background: #f9f6ee !important;
  --secondary: hsl(43.5, 47.6%, 49.4%) !important;
  --secondary-ink: #9c2d32 !important;
  --secondary-ink-fainted: rgba(156, 45, 50, 0.65) !important;
  --secondary-ink-muted: rgba(156, 45, 50, 0.85) !important;
  --secondary-ink-rgb: 156, 45, 50 !important;
  --setting-group-heading-color: #1e3d6d !important;
  --setting-items-background: #efe7d1 !important;
  --setting-items-border-color: #ba9942 !important;
  --slider-thumb-border-color: #9d8137 !important;
  --slider-track-background: #ba9942 !important;
  --status-bar-background: #e5d7b4 !important;
  --status-bar-border-color: #ba9942 !important;
  --status-bar-text-color: rgba(30, 61, 109, 0.85) !important;
  --suggestion-background: #f9f6ee !important;
  --sync-avatar-color-1: #b43c3c !important;
  --sync-avatar-color-2: #db8134 !important;
  --sync-avatar-color-3: #f2ba44 !important;
  --sync-avatar-color-4: #719461 !important;
  --sync-avatar-color-5: #53b3b8 !important;
  --sync-avatar-color-6: #225973 !important;
  --sync-avatar-color-7: #775cb0 !important;
  --sync-avatar-color-8: #dc84a3 !important;
  --tab-background-active: #efe7d1 !important;
  --tab-container-background: #632335 !important;
  --tab-divider-color: none !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #dac897 !important;
  --tab-switcher-background: #632335 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #632335, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(43.5, 47.6%, 49.4%) !important;
  --tab-text-color-focused-active-current: #1e3d6d !important;
  --table-add-button-border-color: #ba9942 !important;
  --table-border-color: #ba9942 !important;
  --table-drag-handle-background-active: #762a3f !important;
  --table-drag-handle-color: rgba(30, 61, 109, 0.65) !important;
  --table-drag-handle-color-active: #e5d7b4 !important;
  --table-header-border-color: #ba9942 !important;
  --table-header-color: #9c2d32 !important;
  --table-selection: hsla(43.5, 47.6%, 49.4%, 0.1) !important;
  --table-selection-border-color: #762a3f !important;
  --tag-background: rgba(156, 45, 50, 0.85) !important;
  --tag-background-hover: rgba(156, 45, 50, 0.85) !important;
  --tag-border-color: hsla(43.5, 47.6%, 49.4%, 0.15) !important;
  --tag-border-color-hover: hsla(43.5, 47.6%, 49.4%, 0.15) !important;
  --tag-color: #efe7d1 !important;
  --tag-color-hover: #efe7d1 !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.12em !important;
  --tertiary: hsl(40.5, 48.552%, 56.81%) !important;
  --text-accent: hsl(43.5, 47.6%, 49.4%) !important;
  --text-accent-hover: hsl(40.5, 48.552%, 56.81%) !important;
  --text-error: #b43c3c !important;
  --text-faint: rgba(30, 61, 109, 0.65) !important;
  --text-fainted: rgba(30, 61, 109, 0.65) !important;
  --text-highlight-bg: rgba(242, 186, 68, 0.4) !important;
  --text-muted: rgba(30, 61, 109, 0.85) !important;
  --text-normal: #1e3d6d !important;
  --text-on-accent: #e5d7b4 !important;
  --text-on-accent-inverted: #e5d7b4 !important;
  --text-selection: rgba(186, 153, 66, 0.5) !important;
  --text-success: #719461 !important;
  --text-warning: #db8134 !important;
  --textHighlight: rgba(242, 186, 68, 0.4) !important;
  --titleFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #632335 !important;
  --titlebar-background-focused: #632335 !important;
  --titlebar-border-color: #ba9942 !important;
  --titlebar-text-color: rgba(30, 61, 109, 0.85) !important;
  --titlebar-text-color-focused: #1e3d6d !important;
  --vault-profile-color: #1e3d6d !important;
  --vault-profile-color-hover: #1e3d6d !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(99, 35, 53);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(249, 246, 238);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(186, 153, 66);
  color: rgb(156, 45, 50);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(249, 246, 238);
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(239, 231, 209);
  border-color: rgb(186, 153, 66);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(156, 45, 50, 0.85);
  color: rgb(239, 231, 209);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(99, 35, 53);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(186, 153, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(99, 35, 53);
  border-left-color: rgb(186, 153, 66);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(249, 246, 238);
  color: rgb(30, 61, 109);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(79, 108, 79);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(79, 108, 79) none 0px;
  text-decoration-color: rgb(79, 108, 79);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(79, 108, 79);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(79, 108, 79) none 0px;
  text-decoration-color: rgb(79, 108, 79);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(242, 186, 68, 0.4);
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body del {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(156, 45, 50);
  border-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body p {
  color: rgba(249, 246, 238, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(249, 246, 238, 0.85) none 0px;
  text-decoration-color: rgba(249, 246, 238, 0.85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 45, 50) none 0px;
  text-decoration-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(156, 45, 50, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(156, 45, 50, 0.85) none 0px;
  text-decoration: underline rgb(156, 45, 50);
  text-decoration-color: rgb(156, 45, 50);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body dt {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body ol > li {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body ul > li {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(30, 61, 109, 0.65);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(186, 153, 66, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body table {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgb(156, 45, 50);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(186, 153, 66, 0.2);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(186, 153, 66, 0.2);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgb(30, 61, 109);
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
  background-color: rgba(186, 153, 66, 0.2);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(186, 153, 66, 0.2);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body figcaption {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(156, 45, 50);
  border-left-color: rgb(156, 45, 50);
  border-right-color: rgb(156, 45, 50);
  border-top-color: rgb(156, 45, 50);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(239, 231, 209);
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(186, 153, 66, 0.15);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(118, 42, 63);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(186, 153, 66, 0.15);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-left-color: rgba(156, 45, 50, 0.85);
  border-right-color: rgba(156, 45, 50, 0.85);
  border-top-color: rgba(156, 45, 50, 0.85);
  color: rgba(156, 45, 50, 0.85);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(156, 45, 50, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 186,153,66;
  background-color: rgba(186, 153, 66, 0.1);
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
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
  background-color: rgb(229, 215, 180);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(249, 246, 238);
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(229, 215, 180);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 215, 180) none 0px;
  text-decoration-color: rgb(229, 215, 180);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(118, 42, 63);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(156, 45, 50, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(156, 45, 50, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(156, 45, 50, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(156, 45, 50, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(99, 35, 53);
  border-left-color: rgb(249, 246, 238);
  border-right-color: rgb(249, 246, 238);
  border-top-color: rgb(249, 246, 238);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(118, 42, 63);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(118, 42, 63);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(156, 45, 50, 0.85);
  border-bottom-color: rgba(186, 153, 66, 0.15);
  border-left-color: rgba(186, 153, 66, 0.15);
  border-right-color: rgba(186, 153, 66, 0.15);
  border-top-color: rgba(186, 153, 66, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(239, 231, 209);
}

html[saved-theme="light"] body h1 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(156, 45, 50);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 186,153,66;
  border-bottom-color: rgba(186, 153, 66, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(186, 153, 66, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(186, 153, 66, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(186, 153, 66, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(249, 246, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 246, 238);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(186, 153, 66, 0.65);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(30, 61, 109);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(229, 215, 180);
  border-bottom-color: rgb(186, 153, 66);
  border-left-color: rgb(186, 153, 66);
  border-right-color: rgb(186, 153, 66);
  border-top-color: rgb(186, 153, 66);
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(30, 61, 109, 0.85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(249, 246, 238);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(249, 246, 238);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(249, 246, 238);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(229, 215, 180);
  border-left-color: rgb(229, 215, 180);
  border-right-color: rgb(229, 215, 180);
  border-top-color: rgb(229, 215, 180);
  color: rgb(229, 215, 180);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(229, 215, 180);
  stroke: rgb(229, 215, 180);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
  color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(30, 61, 109, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(239, 231, 209);
  border-bottom-color: rgb(186, 153, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(186, 153, 66);
  border-left-width: 1px;
  border-right-color: rgb(186, 153, 66);
  border-right-width: 1px;
  border-top-color: rgb(186, 153, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(229, 215, 180);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(118, 42, 63);
  border-bottom-color: rgb(229, 215, 180);
  border-left-color: rgb(229, 215, 180);
  border-right-color: rgb(229, 215, 180);
  border-top-color: rgb(229, 215, 180);
  color: rgb(229, 215, 180);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body sub {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body summary {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body sup {
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(156, 45, 50, 0.85);
  border-bottom-color: rgba(186, 153, 66, 0.15);
  border-left-color: rgba(186, 153, 66, 0.15);
  border-right-color: rgba(186, 153, 66, 0.15);
  border-top-color: rgba(186, 153, 66, 0.15);
  color: rgb(239, 231, 209);
}`,
  },
};
