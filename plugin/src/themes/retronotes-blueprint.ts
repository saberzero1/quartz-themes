import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes.blueprint",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 244 !important;
  --accent-l: 38% !important;
  --accent-s: 76% !important;
  --background-modifier-active-hover: hsla(244, 76%, 38%, 0.1) !important;
  --background-modifier-border: #4f91e8 !important;
  --background-modifier-border-focus: #2d7be3 !important;
  --background-modifier-border-hover: #72a7ec !important;
  --background-modifier-error: #140e66 !important;
  --background-modifier-error-hover: #2117a9 !important;
  --background-modifier-error-rgb: 138, 46, 46 !important;
  --background-modifier-form-field: #195fbc !important;
  --background-modifier-form-field-hover: #195fbc !important;
  --background-modifier-hover: #2117a9 !important;
  --background-modifier-message: #2d7be3 !important;
  --background-modifier-success: #2d7be3 !important;
  --background-modifier-success-rgb: 90, 122, 77 !important;
  --background-primary: #0d3365 !important;
  --background-primary-alt: #124588 !important;
  --background-secondary: #140e66 !important;
  --background-secondary-alt: #1b68cd !important;
  --bases-cards-background: #0d3365 !important;
  --bases-cards-cover-background: #124588 !important;
  --bases-cards-shadow: 0 0 0 1px #4f91e8 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #72a7ec !important;
  --bases-embed-border-color: #4f91e8 !important;
  --bases-group-heading-property-color: rgba(245, 246, 248, 0.85) !important;
  --bases-table-border-color: #4f91e8 !important;
  --bases-table-cell-background-active: #0d3365 !important;
  --bases-table-cell-background-disabled: #124588 !important;
  --bases-table-cell-background-selected: hsla(244, 76%, 38%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #2d7be3 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(244, 76%, 38%) !important;
  --bases-table-group-background: #124588 !important;
  --bases-table-header-background: #0d3365 !important;
  --bases-table-header-background-hover: #1757ab !important;
  --bases-table-header-color: rgba(245, 246, 248, 0.85) !important;
  --bases-table-summary-background: #0d3365 !important;
  --bases-table-summary-background-hover: #2117a9 !important;
  --blockquote-background-color: rgba(79, 145, 232, 0.2) !important;
  --blockquote-border-color: #e38421 !important;
  --blur-background: color-mix(in srgb, #1b68cd 65%, transparent) linear-gradient(#1b68cd, color-mix(in srgb, #1b68cd 65%, transparent)) !important;
  --bodyFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-accent-ink: #e38421 !important;
  --bold-color: #e38421 !important;
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
  --canvas-background: #0d3365 !important;
  --canvas-card-label-color: rgba(245, 246, 248, 0.65) !important;
  --canvas-color-1: 138, 46, 46 !important;
  --canvas-color-2: 179, 104, 42 !important;
  --canvas-color-3: 194, 153, 56 !important;
  --canvas-color-4: 90, 122, 77 !important;
  --canvas-color-5: 67, 143, 147 !important;
  --canvas-color-6: 95, 74, 140 !important;
  --canvas-dot-pattern: rgba(227, 132, 33, 0.4) !important;
  --caret-color: #94bcf1 !important;
  --checkbox-border-color: #f5f6f8 !important;
  --checkbox-border-color-hover: rgba(245, 246, 248, 0.65) !important;
  --checkbox-color: #e38421 !important;
  --checkbox-color-hover: rgba(227, 132, 33, 0.85) !important;
  --checkbox-marker-color: #124588 !important;
  --checklist-done-color: rgba(227, 132, 33, 0.65) !important;
  --code-background: rgba(79, 145, 232, 0.2) !important;
  --code-border-color: #4f91e8 !important;
  --code-bracket-background: #2117a9 !important;
  --code-comment: rgba(245, 246, 248, 0.65) !important;
  --code-function: #c29938 !important;
  --code-important: #b3682a !important;
  --code-keyword: #b16982 !important;
  --code-normal: #f5f6f8 !important;
  --code-operator: #8a2e2e !important;
  --code-property: #438f93 !important;
  --code-punctuation: rgba(245, 246, 248, 0.85) !important;
  --code-string: #5a7a4d !important;
  --code-tag: #8a2e2e !important;
  --code-value: #5f4a8c !important;
  --codeFont: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(245, 246, 248, 0.65) !important;
  --collapse-icon-color-collapsed: hsl(241, 77.52%, 43.7%) !important;
  --color-accent: hsl(244, 76%, 38%) !important;
  --color-accent-1: hsl(241, 77.52%, 43.7%) !important;
  --color-accent-2: hsl(239, 79.8%, 49.02%) !important;
  --color-accent-hsl: 244, 76%, 38% !important;
  --color-base-00: #0d3365 !important;
  --color-base-00-rgb: 13,51,101 !important;
  --color-base-05: #103c77 !important;
  --color-base-10: #124588 !important;
  --color-base-100: #ebf3fc !important;
  --color-base-20: #1757ab !important;
  --color-base-25: #195fbc !important;
  --color-base-30: #1b68cd !important;
  --color-base-35: #1d71df !important;
  --color-base-40: #2d7be3 !important;
  --color-base-50: #4f91e8 !important;
  --color-base-50-rgb: 79,145,232 !important;
  --color-base-60: #72a7ec !important;
  --color-base-70: #94bcf1 !important;
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
  --dark: #f5f6f8 !important;
  --darkgray: #f5f6f8 !important;
  --divider-color: #4f91e8 !important;
  --divider-color-hover: hsl(244, 76%, 38%) !important;
  --dropdown-background: #1b68cd !important;
  --dropdown-background-hover: #1d71df !important;
  --embed-background: rgba(79, 145, 232, 0.15) !important;
  --embed-block-shadow-hover: 0 0 0 1px #4f91e8, inset 0 0 0 1px #4f91e8 !important;
  --embed-border-start: 2px solid rgba(227, 132, 33, 0.85) !important;
  --fainted: 0.65 !important;
  --file-header-background: #0d3365 !important;
  --file-header-background-focused: #0d3365 !important;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #1b68cd !important;
  --flair-color: #f5f6f8 !important;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Mono', monospace !important;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'IBM Plex Mono', monospace !important;
  --font-print: IBM Plex Mono, monospace, Arial' !important;
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Mono', monospace !important;
  --footnote-divider-color: #4f91e8 !important;
  --footnote-id-color: rgba(245, 246, 248, 0.85) !important;
  --footnote-id-color-no-occurrences: rgba(245, 246, 248, 0.65) !important;
  --footnote-input-background-active: #103c77 !important;
  --graph-line: #1d71df !important;
  --graph-node: rgba(245, 246, 248, 0.85) !important;
  --graph-node-attachment: #c29938 !important;
  --graph-node-focused: #e38421 !important;
  --graph-node-tag: #e38421 !important;
  --graph-node-unresolved: rgba(245, 246, 248, 0.65) !important;
  --graph-text: #f5f6f8 !important;
  --gray: rgba(245, 246, 248, 0.85) !important;
  --h1-color: #e38421 !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2.2em !important;
  --h2-color: #e38421 !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 2em !important;
  --h3-color: #e38421 !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.8em !important;
  --h4-color: #e38421 !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.6em !important;
  --h5-color: #e38421 !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.4em !important;
  --h6-color: #e38421 !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.2em !important;
  --headerFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(245, 246, 248, 0.65) !important;
  --highlight: rgba(194, 153, 56, 0.4) !important;
  --hr-color: rgba(227, 132, 33, 0.85) !important;
  --icon-color: rgba(245, 246, 248, 0.85) !important;
  --icon-color-active: hsl(241, 77.52%, 43.7%) !important;
  --icon-color-focused: #f5f6f8 !important;
  --icon-color-hover: rgba(245, 246, 248, 0.85) !important;
  --indentation-guide-color: rgba(227, 132, 33, 0.65) !important;
  --indentation-guide-color-active: rgba(227, 132, 33, 0.85) !important;
  --inline-title-color: #e38421 !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.2em !important;
  --input-date-separator: rgba(245, 246, 248, 0.65) !important;
  --input-placeholder-color: rgba(245, 246, 248, 0.65) !important;
  --interactive-accent: hsl(244, 76%, 38%) !important;
  --interactive-accent-hover: hsl(241, 77.52%, 43.7%) !important;
  --interactive-accent-hsl: 244, 76%, 38% !important;
  --interactive-hover: #1d71df !important;
  --interactive-normal: #1b68cd !important;
  --italic-accent-ink: #efbb1a !important;
  --italic-color: #efbb1a !important;
  --leather-color: #140e66 !important;
  --leather-color-alt: #2117a9 !important;
  --leather-color-rgb: 20, 14, 102 !important;
  --light: #0d3365 !important;
  --light-ink: #f5f6f8 !important;
  --light-ink-alt: #fafafd !important;
  --light-ink-fainted: rgba(245, 246, 248, 0.65) !important;
  --light-ink-muted: rgba(245, 246, 248, 0.85) !important;
  --lightgray: #140e66 !important;
  --link-color: #e38421 !important;
  --link-color-hover: rgba(227, 132, 33, 0.85) !important;
  --link-external-color: #e38421 !important;
  --link-external-color-hover: rgba(227, 132, 33, 0.85) !important;
  --link-unresolved-color: rgba(227, 132, 33, 0.85) !important;
  --link-unresolved-color-hover: #e38421 !important;
  --link-unresolved-decoration-color: #e38421 !important;
  --list-marker-color: rgba(227, 132, 33, 0.65) !important;
  --list-marker-color-collapsed: #e38421 !important;
  --list-marker-color-hover: rgba(227, 132, 33, 0.65) !important;
  --main-ink: #f5f6f8 !important;
  --main-ink-fainted: rgba(245, 246, 248, 0.65) !important;
  --main-ink-muted: rgba(245, 246, 248, 0.85) !important;
  --main-ink-rgb: 245,246,248 !important;
  --menu-background: #140e66 !important;
  --menu-border-color: #72a7ec !important;
  --metadata-background: #124588 !important;
  --metadata-border-color: #4f91e8 !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #4f91e8 !important;
  --metadata-gap: 4px !important;
  --metadata-input-background-active: #103c77 !important;
  --metadata-input-background-hover: #124588 !important;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f5f6f8 !important;
  --metadata-label-background-active: #124588 !important;
  --metadata-label-background-hover: #124588 !important;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(245, 246, 248, 0.85) !important;
  --metadata-label-text-color-hover: rgba(245, 246, 248, 0.85) !important;
  --metadata-padding: 16px !important;
  --metadata-property-background-active: #1757ab !important;
  --metadata-property-background-hover: #1757ab !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #2d7be3 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #72a7ec !important;
  --modal-background: #124588 !important;
  --modal-border-color: #2d7be3 !important;
  --modal-border-width: 2px !important;
  --muted: 0.85 !important;
  --nav-collapse-icon-color: #4f91e8 !important;
  --nav-collapse-icon-color-collapsed: rgba(245, 246, 248, 0.65) !important;
  --nav-heading-color: #f5f6f8 !important;
  --nav-heading-color-collapsed: rgba(245, 246, 248, 0.65) !important;
  --nav-heading-color-collapsed-hover: rgba(245, 246, 248, 0.85) !important;
  --nav-heading-color-hover: #f5f6f8 !important;
  --nav-indentation-guide-color: rgba(245, 246, 248, 0.65) !important;
  --nav-item-background-active: #2117a9 !important;
  --nav-item-background-hover: #2117a9 !important;
  --nav-item-background-selected: hsla(244, 76%, 38%, 0.15) !important;
  --nav-item-color: #f5f6f8 !important;
  --nav-item-color-active: #fafafd !important;
  --nav-item-color-highlighted: hsl(241, 77.52%, 43.7%) !important;
  --nav-item-color-hover: #fafafd !important;
  --nav-item-color-selected: #fafafd !important;
  --nav-tag-color: rgba(245, 246, 248, 0.65) !important;
  --nav-tag-color-active: rgba(245, 246, 248, 0.85) !important;
  --nav-tag-color-hover: rgba(245, 246, 248, 0.85) !important;
  --pdf-background: #0d3365 !important;
  --pdf-page-background: #0d3365 !important;
  --pdf-shadow: 0 0 0 1px #4f91e8 !important;
  --pdf-sidebar-background: #0d3365 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #4f91e8 !important;
  --pill-background: #1757ab !important;
  --pill-background-hover: #1b68cd !important;
  --pill-border-color: #4f91e8 !important;
  --pill-border-color-hover: #72a7ec !important;
  --pill-color: rgba(245, 246, 248, 0.85) !important;
  --pill-color-hover: #f5f6f8 !important;
  --pill-color-remove: rgba(245, 246, 248, 0.65) !important;
  --pill-color-remove-hover: hsl(241, 77.52%, 43.7%) !important;
  --pill-padding-x: 4px !important;
  --pill-padding-y: 2px !important;
  --plexmono: 'IBM Plex Mono', monospace !important;
  --prompt-background: #0d3365 !important;
  --prompt-border-color: rgba(227, 132, 33, 0.85) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #1b68cd 65%, transparent) linear-gradient(#1b68cd, color-mix(in srgb, #1b68cd 65%, transparent)) !important;
  --ribbon-background: #140e66 !important;
  --ribbon-background-collapsed: #2117a9 !important;
  --search-clear-button-color: rgba(245, 246, 248, 0.85) !important;
  --search-icon-color: rgba(245, 246, 248, 0.85) !important;
  --search-result-background: #0d3365 !important;
  --secondary: hsl(241, 77.52%, 43.7%) !important;
  --secondary-ink: #e38421 !important;
  --secondary-ink-fainted: rgba(227, 132, 33, 0.65) !important;
  --secondary-ink-muted: rgba(227, 132, 33, 0.85) !important;
  --secondary-ink-rgb: 227, 132, 33 !important;
  --setting-group-heading-color: #f5f6f8 !important;
  --setting-items-background: #124588 !important;
  --setting-items-border-color: #4f91e8 !important;
  --slider-thumb-border-color: #72a7ec !important;
  --slider-track-background: #4f91e8 !important;
  --status-bar-background: #1757ab !important;
  --status-bar-border-color: #4f91e8 !important;
  --status-bar-text-color: rgba(245, 246, 248, 0.85) !important;
  --suggestion-background: #0d3365 !important;
  --sync-avatar-color-1: #8a2e2e !important;
  --sync-avatar-color-2: #b3682a !important;
  --sync-avatar-color-3: #c29938 !important;
  --sync-avatar-color-4: #5a7a4d !important;
  --sync-avatar-color-5: #438f93 !important;
  --sync-avatar-color-6: #1a4559 !important;
  --sync-avatar-color-7: #5f4a8c !important;
  --sync-avatar-color-8: #b16982 !important;
  --tab-background-active: #124588 !important;
  --tab-container-background: #140e66 !important;
  --tab-divider-color: none !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #1b68cd !important;
  --tab-switcher-background: #140e66 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #140e66, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(244, 76%, 38%) !important;
  --tab-text-color-focused-active-current: #f5f6f8 !important;
  --table-add-button-border-color: #4f91e8 !important;
  --table-border-color: #4f91e8 !important;
  --table-drag-handle-background-active: hsl(244, 76%, 38%) !important;
  --table-drag-handle-color: rgba(245, 246, 248, 0.65) !important;
  --table-drag-handle-color-active: #fafafd !important;
  --table-header-border-color: #4f91e8 !important;
  --table-header-color: #e38421 !important;
  --table-selection: hsla(244, 76%, 38%, 0.1) !important;
  --table-selection-border-color: hsl(244, 76%, 38%) !important;
  --tag-background: rgba(227, 132, 33, 0.85) !important;
  --tag-background-hover: rgba(227, 132, 33, 0.85) !important;
  --tag-border-color: hsla(244, 76%, 38%, 0.15) !important;
  --tag-border-color-hover: hsla(244, 76%, 38%, 0.15) !important;
  --tag-color: #0d3365 !important;
  --tag-color-hover: #124588 !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.12em !important;
  --tertiary: hsl(239, 79.8%, 49.02%) !important;
  --text-accent: hsl(241, 77.52%, 43.7%) !important;
  --text-accent-hover: hsl(239, 79.8%, 49.02%) !important;
  --text-error: #8a2e2e !important;
  --text-faint: rgba(245, 246, 248, 0.65) !important;
  --text-fainted: rgba(245, 246, 248, 0.65) !important;
  --text-highlight-bg: rgba(194, 153, 56, 0.4) !important;
  --text-muted: rgba(245, 246, 248, 0.85) !important;
  --text-normal: #f5f6f8 !important;
  --text-on-accent: #fafafd !important;
  --text-on-accent-inverted: #fafafd !important;
  --text-selection: rgba(79, 145, 232, 0.5) !important;
  --text-success: #5a7a4d !important;
  --text-warning: #b3682a !important;
  --textHighlight: rgba(194, 153, 56, 0.4) !important;
  --titleFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #140e66 !important;
  --titlebar-background-focused: #140e66 !important;
  --titlebar-border-color: #4f91e8 !important;
  --titlebar-text-color: rgba(245, 246, 248, 0.85) !important;
  --titlebar-text-color-focused: #f5f6f8 !important;
  --vault-profile-color: #f5f6f8 !important;
  --vault-profile-color-hover: #f5f6f8 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 14, 102);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(13, 51, 101);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(79, 145, 232);
  color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 14, 102);
  border-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(18, 69, 136);
  border-color: rgb(79, 145, 232);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(227, 132, 33, 0.85);
  color: rgb(13, 51, 101);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 14, 102);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(79, 145, 232);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 14, 102);
  border-left-color: rgb(79, 145, 232);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 51, 101);
  color: rgb(245, 246, 248);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(227, 132, 33) none 0px;
  text-decoration-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(239, 187, 26);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 187, 26) none 0px;
  text-decoration-color: rgb(239, 187, 26);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(239, 187, 26);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 187, 26) none 0px;
  text-decoration-color: rgb(239, 187, 26);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(227, 132, 33) none 0px;
  text-decoration-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(194, 153, 56, 0.4);
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 246, 248) none 0px;
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 246, 248) none 0px;
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(227, 132, 33);
  border-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body p {
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(245, 246, 248, 0.85) none 0px;
  text-decoration-color: rgba(245, 246, 248, 0.85);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(227, 132, 33) none 0px;
  text-decoration-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(227, 132, 33) none 0px;
  text-decoration-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(227, 132, 33, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(227, 132, 33, 0.85) none 0px;
  text-decoration: underline rgb(227, 132, 33);
  text-decoration-color: rgb(227, 132, 33);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(245, 246, 248, 0.65);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(79, 145, 232, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgb(227, 132, 33);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(79, 145, 232, 0.2);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(79, 145, 232, 0.2);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgb(245, 246, 248);
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
  background-color: rgba(79, 145, 232, 0.2);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(79, 145, 232, 0.2);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(227, 132, 33);
  border-left-color: rgb(227, 132, 33);
  border-right-color: rgb(227, 132, 33);
  border-top-color: rgb(227, 132, 33);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(18, 69, 136);
  border-bottom-color: rgba(245, 246, 248, 0.85);
  border-left-color: rgba(245, 246, 248, 0.85);
  border-right-color: rgba(245, 246, 248, 0.85);
  border-top-color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(79, 145, 232, 0.15);
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(79, 145, 232, 0.15);
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 246, 248);
  text-decoration-color: rgb(245, 246, 248);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-left-color: rgba(227, 132, 33, 0.85);
  border-right-color: rgba(227, 132, 33, 0.85);
  border-top-color: rgba(227, 132, 33, 0.85);
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(227, 132, 33, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 79,145,232;
  background-color: rgba(79, 145, 232, 0.1);
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
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
  background-color: rgb(25, 95, 188);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(13, 51, 101);
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(227, 132, 33, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(227, 132, 33, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(227, 132, 33, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 250, 253);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(250, 250, 253) none 0px;
  text-decoration-color: rgb(250, 250, 253);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(33, 23, 169);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(227, 132, 33, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(227, 132, 33, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(227, 132, 33, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(227, 132, 33, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 14, 102);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(33, 23, 169);
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(33, 23, 169);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(227, 132, 33, 0.85);
  border-bottom-color: rgba(33, 23, 171, 0.15);
  border-left-color: rgba(33, 23, 171, 0.15);
  border-right-color: rgba(33, 23, 171, 0.15);
  border-top-color: rgba(33, 23, 171, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(13, 51, 101);
}

html[saved-theme="dark"] body h1 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(227, 132, 33);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 79,145,232;
  border-bottom-color: rgba(79, 145, 232, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(79, 145, 232, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(79, 145, 232, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(79, 145, 232, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(13, 51, 101) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 51, 101);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(13, 51, 101) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 51, 101);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(13, 51, 101) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 51, 101);
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 51, 101) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 51, 101);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 51, 101) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 51, 101);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(13, 51, 101) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 51, 101);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(245, 246, 248, 0.65);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(245, 246, 248);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(23, 87, 171);
  border-bottom-color: rgb(79, 145, 232);
  border-left-color: rgb(79, 145, 232);
  border-right-color: rgb(79, 145, 232);
  border-top-color: rgb(79, 145, 232);
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(245, 246, 248, 0.85);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(250, 250, 253);
  border-left-color: rgb(250, 250, 253);
  border-right-color: rgb(250, 250, 253);
  border-top-color: rgb(250, 250, 253);
  color: rgb(250, 250, 253);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(250, 250, 253);
  stroke: rgb(250, 250, 253);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(245, 246, 248, 0.85);
  border-left-color: rgba(245, 246, 248, 0.85);
  border-right-color: rgba(245, 246, 248, 0.85);
  border-top-color: rgba(245, 246, 248, 0.85);
  color: rgba(245, 246, 248, 0.85);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(245, 246, 248, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(18, 69, 136);
  border-bottom-color: rgb(79, 145, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(79, 145, 232);
  border-left-width: 1px;
  border-right-color: rgb(79, 145, 232);
  border-right-width: 1px;
  border-top-color: rgb(79, 145, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(245, 246, 248, 0.85);
  border-left-color: rgba(245, 246, 248, 0.85);
  border-right-color: rgba(245, 246, 248, 0.85);
  border-top-color: rgba(245, 246, 248, 0.85);
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(23, 87, 171);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 246, 248);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(245, 246, 248, 0.85);
  border-left-color: rgba(245, 246, 248, 0.85);
  border-right-color: rgba(245, 246, 248, 0.85);
  border-top-color: rgba(245, 246, 248, 0.85);
  color: rgba(245, 246, 248, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 23, 169);
  border-bottom-color: rgb(250, 250, 253);
  border-left-color: rgb(250, 250, 253);
  border-right-color: rgb(250, 250, 253);
  border-top-color: rgb(250, 250, 253);
  color: rgb(250, 250, 253);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 246, 248);
  border-left-color: rgb(245, 246, 248);
  border-right-color: rgb(245, 246, 248);
  border-top-color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 246, 248);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(227, 132, 33, 0.85);
  border-bottom-color: rgba(33, 23, 171, 0.15);
  border-left-color: rgba(33, 23, 171, 0.15);
  border-right-color: rgba(33, 23, 171, 0.15);
  border-top-color: rgba(33, 23, 171, 0.15);
  color: rgb(13, 51, 101);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 240 !important;
  --accent-l: 68% !important;
  --accent-s: 77% !important;
  --background-modifier-active-hover: hsla(240, 77%, 68%, 0.1) !important;
  --background-modifier-border: #6e6eec !important;
  --background-modifier-border-focus: #8080ee !important;
  --background-modifier-border-hover: #4747ff !important;
  --background-modifier-error: #172847 !important;
  --background-modifier-error-hover: #1d335a !important;
  --background-modifier-error-rgb: 180, 60, 60 !important;
  --background-modifier-form-field: #bdbdff !important;
  --background-modifier-form-field-hover: #bdbdff !important;
  --background-modifier-hover: #1d335a !important;
  --background-modifier-message: #8080ee !important;
  --background-modifier-success: #8080ee !important;
  --background-modifier-success-rgb: 113, 148, 97 !important;
  --background-primary: #f8f8ff !important;
  --background-primary-alt: #d1d1ff !important;
  --background-secondary: #172847 !important;
  --background-secondary-alt: #e4e4ff !important;
  --bases-cards-background: #f8f8ff !important;
  --bases-cards-cover-background: #d1d1ff !important;
  --bases-cards-shadow: 0 0 0 1px #6e6eec !important;
  --bases-cards-shadow-hover: 0 0 0 1px #4747ff !important;
  --bases-embed-border-color: #6e6eec !important;
  --bases-group-heading-property-color: rgba(3, 5, 9, 0.85) !important;
  --bases-table-border-color: #6e6eec !important;
  --bases-table-cell-background-active: #f8f8ff !important;
  --bases-table-cell-background-disabled: #d1d1ff !important;
  --bases-table-cell-background-selected: hsla(240, 77%, 68%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #8080ee !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #1d335a !important;
  --bases-table-group-background: #d1d1ff !important;
  --bases-table-header-background: #f8f8ff !important;
  --bases-table-header-background-hover: #bdbdff !important;
  --bases-table-header-color: rgba(3, 5, 9, 0.85) !important;
  --bases-table-summary-background: #f8f8ff !important;
  --bases-table-summary-background-hover: #1d335a !important;
  --blockquote-background-color: rgba(110, 110, 236, 0.2) !important;
  --blockquote-border-color: #111d34 !important;
  --blur-background: color-mix(in srgb, #f8f8ff 65%, transparent) linear-gradient(#f8f8ff, color-mix(in srgb, #f8f8ff 65%, transparent)) !important;
  --bodyFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-accent-ink: #ae400f !important;
  --bold-color: #ae400f !important;
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
  --canvas-background: #f8f8ff !important;
  --canvas-card-label-color: rgba(3, 5, 9, 0.65) !important;
  --canvas-color-1: 180, 60, 60 !important;
  --canvas-color-2: 219, 129, 52 !important;
  --canvas-color-3: 242, 186, 68 !important;
  --canvas-color-4: 113, 148, 97 !important;
  --canvas-color-5: 83, 179, 184 !important;
  --canvas-color-6: 119, 92, 176 !important;
  --canvas-dot-pattern: rgba(17, 29, 52, 0.4) !important;
  --caret-color: #3434ff !important;
  --checkbox-border-color: #030509 !important;
  --checkbox-border-color-hover: rgba(3, 5, 9, 0.65) !important;
  --checkbox-color: #111d34 !important;
  --checkbox-color-hover: rgba(17, 29, 52, 0.85) !important;
  --checkbox-marker-color: #e4e4ff !important;
  --checklist-done-color: rgba(17, 29, 52, 0.65) !important;
  --code-background: rgba(110, 110, 236, 0.2) !important;
  --code-border-color: #6e6eec !important;
  --code-bracket-background: #1d335a !important;
  --code-comment: rgba(3, 5, 9, 0.65) !important;
  --code-function: #f2ba44 !important;
  --code-important: #db8134 !important;
  --code-keyword: #dc84a3 !important;
  --code-normal: #030509 !important;
  --code-operator: #b43c3c !important;
  --code-property: #53b3b8 !important;
  --code-punctuation: rgba(3, 5, 9, 0.85) !important;
  --code-string: #719461 !important;
  --code-tag: #b43c3c !important;
  --code-value: #775cb0 !important;
  --codeFont: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(3, 5, 9, 0.65) !important;
  --collapse-icon-color-collapsed: hsl(240, 77%, 68%) !important;
  --color-accent: hsl(240, 77%, 68%) !important;
  --color-accent-1: hsl(239, 77.77%, 73.1%) !important;
  --color-accent-2: hsl(237, 78.54%, 78.2%) !important;
  --color-accent-hsl: 240, 77%, 68% !important;
  --color-base-00: #f8f8ff !important;
  --color-base-00-rgb: 248,248,255 !important;
  --color-base-05: #e4e4ff !important;
  --color-base-10: #d1d1ff !important;
  --color-base-100: #0000aa !important;
  --color-base-20: #bdbdff !important;
  --color-base-25: #aaaaff !important;
  --color-base-30: #9696ff !important;
  --color-base-35: #8282ff !important;
  --color-base-40: #8080ee !important;
  --color-base-50: #6e6eec !important;
  --color-base-50-rgb: 110,110,236 !important;
  --color-base-60: #4747ff !important;
  --color-base-70: #3434ff !important;
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
  --dark: #030509 !important;
  --darkgray: #030509 !important;
  --divider-color: #6e6eec !important;
  --divider-color-hover: #1d335a !important;
  --dropdown-background: #9696ff !important;
  --dropdown-background-hover: #bdbdff !important;
  --embed-background: rgba(110, 110, 236, 0.15) !important;
  --embed-block-shadow-hover: 0 0 0 1px #6e6eec, inset 0 0 0 1px #6e6eec !important;
  --embed-border-start: 2px solid #1d335a !important;
  --fainted: 0.65 !important;
  --file-header-background: #f8f8ff !important;
  --file-header-background-focused: #f8f8ff !important;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #9696ff !important;
  --flair-color: #030509 !important;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Mono', monospace !important;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'IBM Plex Mono', monospace !important;
  --font-print: IBM Plex Mono, monospace, Arial' !important;
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Mono', monospace !important;
  --footnote-divider-color: #6e6eec !important;
  --footnote-id-color: rgba(3, 5, 9, 0.85) !important;
  --footnote-id-color-no-occurrences: rgba(3, 5, 9, 0.65) !important;
  --footnote-input-background-active: #e4e4ff !important;
  --graph-line: #8282ff !important;
  --graph-node: rgba(3, 5, 9, 0.85) !important;
  --graph-node-attachment: #f2ba44 !important;
  --graph-node-focused: #111d34 !important;
  --graph-node-tag: #ae400f !important;
  --graph-node-unresolved: rgba(3, 5, 9, 0.65) !important;
  --graph-text: #030509 !important;
  --gray: rgba(3, 5, 9, 0.85) !important;
  --h1-color: #111d34 !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2.2em !important;
  --h2-color: #111d34 !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 2em !important;
  --h3-color: #111d34 !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.8em !important;
  --h4-color: #111d34 !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.6em !important;
  --h5-color: #111d34 !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.4em !important;
  --h6-color: #111d34 !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.2em !important;
  --headerFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(3, 5, 9, 0.65) !important;
  --highlight: rgba(242, 186, 68, 0.4) !important;
  --hr-color: rgba(17, 29, 52, 0.85) !important;
  --icon-color: rgba(3, 5, 9, 0.85) !important;
  --icon-color-active: hsl(240, 77%, 68%) !important;
  --icon-color-focused: #030509 !important;
  --icon-color-hover: rgba(3, 5, 9, 0.85) !important;
  --indentation-guide-color: rgba(17, 29, 52, 0.65) !important;
  --indentation-guide-color-active: rgba(17, 29, 52, 0.85) !important;
  --inline-title-color: #111d34 !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.2em !important;
  --input-date-separator: rgba(3, 5, 9, 0.65) !important;
  --input-placeholder-color: rgba(3, 5, 9, 0.65) !important;
  --interactive-accent: #1d335a !important;
  --interactive-accent-hover: #172847 !important;
  --interactive-accent-hsl: 240, 77%, 68% !important;
  --interactive-hover: #bdbdff !important;
  --interactive-normal: #9696ff !important;
  --italic-accent-ink: #ae0f2d !important;
  --italic-color: #ae0f2d !important;
  --leather-color: #172847 !important;
  --leather-color-alt: #1d335a !important;
  --leather-color-rgb: 23, 40, 71 !important;
  --light: #f8f8ff !important;
  --light-ink: #f8f8ff !important;
  --light-ink-alt: #e4e4ff !important;
  --light-ink-fainted: rgba(248, 248, 255, 0.65) !important;
  --light-ink-muted: rgba(248, 248, 255, 0.85) !important;
  --lightgray: #172847 !important;
  --link-color: #111d34 !important;
  --link-color-hover: rgba(17, 29, 52, 0.85) !important;
  --link-external-color: #111d34 !important;
  --link-external-color-hover: rgba(17, 29, 52, 0.85) !important;
  --link-unresolved-color: rgba(17, 29, 52, 0.85) !important;
  --link-unresolved-color-hover: #111d34 !important;
  --link-unresolved-decoration-color: #111d34 !important;
  --list-marker-color: rgba(17, 29, 52, 0.65) !important;
  --list-marker-color-collapsed: #111d34 !important;
  --list-marker-color-hover: rgba(17, 29, 52, 0.65) !important;
  --main-ink: #030509 !important;
  --main-ink-fainted: rgba(3, 5, 9, 0.65) !important;
  --main-ink-muted: rgba(3, 5, 9, 0.85) !important;
  --main-ink-rgb: 3, 5, 9 !important;
  --menu-background: #172847 !important;
  --menu-border-color: #4747ff !important;
  --metadata-background: #d1d1ff !important;
  --metadata-border-color: #6e6eec !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #6e6eec !important;
  --metadata-gap: 4px !important;
  --metadata-input-background-active: #e4e4ff !important;
  --metadata-input-background-hover: #d1d1ff !important;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #030509 !important;
  --metadata-label-background-active: #d1d1ff !important;
  --metadata-label-background-hover: #d1d1ff !important;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(3, 5, 9, 0.85) !important;
  --metadata-label-text-color-hover: rgba(3, 5, 9, 0.85) !important;
  --metadata-padding: 16px !important;
  --metadata-property-background-active: #bdbdff !important;
  --metadata-property-background-hover: #bdbdff !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8080ee !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4747ff !important;
  --modal-background: #d1d1ff !important;
  --modal-border-color: #8080ee !important;
  --modal-border-width: 2px !important;
  --muted: 0.85 !important;
  --nav-collapse-icon-color: #6e6eec !important;
  --nav-collapse-icon-color-collapsed: rgba(3, 5, 9, 0.65) !important;
  --nav-heading-color: #030509 !important;
  --nav-heading-color-collapsed: rgba(3, 5, 9, 0.65) !important;
  --nav-heading-color-collapsed-hover: rgba(3, 5, 9, 0.85) !important;
  --nav-heading-color-hover: #030509 !important;
  --nav-indentation-guide-color: rgba(110, 110, 236, 0.65) !important;
  --nav-item-background-active: #1d335a !important;
  --nav-item-background-hover: #1d335a !important;
  --nav-item-background-selected: hsla(240, 77%, 68%, 0.15) !important;
  --nav-item-color: #f8f8ff !important;
  --nav-item-color-active: #e4e4ff !important;
  --nav-item-color-highlighted: hsl(240, 77%, 68%) !important;
  --nav-item-color-hover: #e4e4ff !important;
  --nav-item-color-selected: #e4e4ff !important;
  --nav-tag-color: rgba(3, 5, 9, 0.65) !important;
  --nav-tag-color-active: rgba(3, 5, 9, 0.85) !important;
  --nav-tag-color-hover: rgba(3, 5, 9, 0.85) !important;
  --pdf-background: #f8f8ff !important;
  --pdf-page-background: #f8f8ff !important;
  --pdf-sidebar-background: #f8f8ff !important;
  --pill-background: #bdbdff !important;
  --pill-background-hover: #9696ff !important;
  --pill-border-color: #6e6eec !important;
  --pill-border-color-hover: #4747ff !important;
  --pill-color: rgba(3, 5, 9, 0.85) !important;
  --pill-color-hover: #030509 !important;
  --pill-color-remove: rgba(3, 5, 9, 0.65) !important;
  --pill-color-remove-hover: hsl(240, 77%, 68%) !important;
  --pill-padding-x: 4px !important;
  --pill-padding-y: 2px !important;
  --plexmono: 'IBM Plex Mono', monospace !important;
  --prompt-background: #f8f8ff !important;
  --prompt-border-color: rgba(17, 29, 52, 0.85) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #f8f8ff 65%, transparent) linear-gradient(#f8f8ff, color-mix(in srgb, #f8f8ff 65%, transparent)) !important;
  --ribbon-background: #172847 !important;
  --ribbon-background-collapsed: #1d335a !important;
  --search-clear-button-color: rgba(3, 5, 9, 0.85) !important;
  --search-icon-color: rgba(3, 5, 9, 0.85) !important;
  --search-result-background: #f8f8ff !important;
  --secondary: hsl(240, 77%, 68%) !important;
  --secondary-ink: #111d34 !important;
  --secondary-ink-fainted: rgba(17, 29, 52, 0.65) !important;
  --secondary-ink-muted: rgba(17, 29, 52, 0.85) !important;
  --secondary-ink-rgb: 17, 29, 52 !important;
  --setting-group-heading-color: #030509 !important;
  --setting-items-background: #d1d1ff !important;
  --setting-items-border-color: #6e6eec !important;
  --slider-thumb-border-color: #4747ff !important;
  --slider-track-background: #6e6eec !important;
  --status-bar-background: #bdbdff !important;
  --status-bar-border-color: #6e6eec !important;
  --status-bar-text-color: rgba(3, 5, 9, 0.85) !important;
  --suggestion-background: #f8f8ff !important;
  --sync-avatar-color-1: #b43c3c !important;
  --sync-avatar-color-2: #db8134 !important;
  --sync-avatar-color-3: #f2ba44 !important;
  --sync-avatar-color-4: #719461 !important;
  --sync-avatar-color-5: #53b3b8 !important;
  --sync-avatar-color-6: #225973 !important;
  --sync-avatar-color-7: #775cb0 !important;
  --sync-avatar-color-8: #dc84a3 !important;
  --tab-background-active: #d1d1ff !important;
  --tab-container-background: #172847 !important;
  --tab-divider-color: none !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #9696ff !important;
  --tab-switcher-background: #172847 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #172847, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(240, 77%, 68%) !important;
  --tab-text-color-focused-active-current: #030509 !important;
  --table-add-button-border-color: #6e6eec !important;
  --table-border-color: #6e6eec !important;
  --table-drag-handle-background-active: #1d335a !important;
  --table-drag-handle-color: rgba(3, 5, 9, 0.65) !important;
  --table-drag-handle-color-active: #e4e4ff !important;
  --table-header-border-color: #6e6eec !important;
  --table-header-color: #111d34 !important;
  --table-selection: hsla(240, 77%, 68%, 0.1) !important;
  --table-selection-border-color: #1d335a !important;
  --tag-background: rgba(17, 29, 52, 0.85) !important;
  --tag-background-hover: rgba(17, 29, 52, 0.85) !important;
  --tag-border-color: hsla(240, 77%, 68%, 0.15) !important;
  --tag-border-color-hover: hsla(240, 77%, 68%, 0.15) !important;
  --tag-color: #d1d1ff !important;
  --tag-color-hover: #d1d1ff !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.12em !important;
  --tertiary: hsl(237, 78.54%, 78.2%) !important;
  --text-accent: hsl(240, 77%, 68%) !important;
  --text-accent-hover: hsl(237, 78.54%, 78.2%) !important;
  --text-error: #b43c3c !important;
  --text-faint: rgba(3, 5, 9, 0.65) !important;
  --text-fainted: rgba(3, 5, 9, 0.65) !important;
  --text-highlight-bg: rgba(242, 186, 68, 0.4) !important;
  --text-muted: rgba(3, 5, 9, 0.85) !important;
  --text-normal: #030509 !important;
  --text-on-accent: #e4e4ff !important;
  --text-on-accent-inverted: #e4e4ff !important;
  --text-selection: rgba(110, 110, 236, 0.5) !important;
  --text-success: #719461 !important;
  --text-warning: #db8134 !important;
  --textHighlight: rgba(242, 186, 68, 0.4) !important;
  --titleFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #172847 !important;
  --titlebar-background-focused: #172847 !important;
  --titlebar-border-color: #6e6eec !important;
  --titlebar-text-color: rgba(3, 5, 9, 0.85) !important;
  --titlebar-text-color-focused: #030509 !important;
  --vault-profile-color: #030509 !important;
  --vault-profile-color-hover: #030509 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 40, 71);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(248, 248, 255);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(110, 110, 236);
  color: rgb(17, 29, 52);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(248, 248, 255);
  border-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(209, 209, 255);
  border-color: rgb(110, 110, 236);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(17, 29, 52, 0.85);
  color: rgb(209, 209, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 40, 71);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(110, 110, 236);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 40, 71);
  border-left-color: rgb(110, 110, 236);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(248, 248, 255);
  color: rgb(3, 5, 9);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(174, 64, 15);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(174, 64, 15) none 0px;
  text-decoration-color: rgb(174, 64, 15);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(174, 15, 45);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(174, 15, 45) none 0px;
  text-decoration-color: rgb(174, 15, 45);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(174, 15, 45);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(174, 15, 45) none 0px;
  text-decoration-color: rgb(174, 15, 45);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(174, 64, 15);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(174, 64, 15) none 0px;
  text-decoration-color: rgb(174, 64, 15);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(242, 186, 68, 0.4);
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(3, 5, 9) none 0px;
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body del {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(3, 5, 9) none 0px;
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(17, 29, 52);
  border-color: rgb(17, 29, 52);
}

html[saved-theme="light"] body p {
  color: rgba(248, 248, 255, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 255, 0.85) none 0px;
  text-decoration-color: rgba(248, 248, 255, 0.85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 29, 52) none 0px;
  text-decoration-color: rgb(17, 29, 52);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 29, 52) none 0px;
  text-decoration-color: rgb(17, 29, 52);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(17, 29, 52, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(17, 29, 52, 0.85) none 0px;
  text-decoration: underline rgb(17, 29, 52);
  text-decoration-color: rgb(17, 29, 52);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body dt {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ol > li {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ul > li {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(3, 5, 9, 0.65);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(110, 110, 236, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body table {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgb(17, 29, 52);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(110, 110, 236, 0.2);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(110, 110, 236, 0.2);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgb(3, 5, 9);
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
  background-color: rgba(110, 110, 236, 0.2);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(110, 110, 236, 0.2);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body figcaption {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(17, 29, 52);
  border-left-color: rgb(17, 29, 52);
  border-right-color: rgb(17, 29, 52);
  border-top-color: rgb(17, 29, 52);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(209, 209, 255);
  border-bottom-color: rgba(3, 5, 9, 0.85);
  border-left-color: rgba(3, 5, 9, 0.85);
  border-right-color: rgba(3, 5, 9, 0.85);
  border-top-color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(110, 110, 236, 0.15);
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(29, 51, 90);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(110, 110, 236, 0.15);
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(3, 5, 9);
  text-decoration-color: rgb(3, 5, 9);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-left-color: rgba(17, 29, 52, 0.85);
  border-right-color: rgba(17, 29, 52, 0.85);
  border-top-color: rgba(17, 29, 52, 0.85);
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(17, 29, 52, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 110,110,236;
  background-color: rgba(110, 110, 236, 0.1);
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
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
  background-color: rgb(189, 189, 255);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 248, 255);
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(17, 29, 52, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(17, 29, 52, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(17, 29, 52, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(228, 228, 255);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(228, 228, 255) none 0px;
  text-decoration-color: rgb(228, 228, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(29, 51, 90);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(17, 29, 52, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(17, 29, 52, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(17, 29, 52, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(17, 29, 52, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 40, 71);
  border-left-color: rgb(248, 248, 255);
  border-right-color: rgb(248, 248, 255);
  border-top-color: rgb(248, 248, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(29, 51, 90);
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(29, 51, 90);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(17, 29, 52, 0.85);
  border-bottom-color: rgba(111, 111, 236, 0.15);
  border-left-color: rgba(111, 111, 236, 0.15);
  border-right-color: rgba(111, 111, 236, 0.15);
  border-top-color: rgba(111, 111, 236, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(209, 209, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(17, 29, 52);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 110,110,236;
  border-bottom-color: rgba(110, 110, 236, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(110, 110, 236, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(110, 110, 236, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(110, 110, 236, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(248, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(248, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(248, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 255);
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(248, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(248, 248, 255);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(248, 248, 255);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(110, 110, 236, 0.65);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(3, 5, 9);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(189, 189, 255);
  border-bottom-color: rgb(110, 110, 236);
  border-left-color: rgb(110, 110, 236);
  border-right-color: rgb(110, 110, 236);
  border-top-color: rgb(110, 110, 236);
  color: rgba(3, 5, 9, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(3, 5, 9, 0.85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(248, 248, 255);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(248, 248, 255);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(248, 248, 255);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(248, 248, 255);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(228, 228, 255);
  border-left-color: rgb(228, 228, 255);
  border-right-color: rgb(228, 228, 255);
  border-top-color: rgb(228, 228, 255);
  color: rgb(228, 228, 255);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(228, 228, 255);
  stroke: rgb(228, 228, 255);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(3, 5, 9, 0.85);
  border-left-color: rgba(3, 5, 9, 0.85);
  border-right-color: rgba(3, 5, 9, 0.85);
  border-top-color: rgba(3, 5, 9, 0.85);
  color: rgba(3, 5, 9, 0.85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(3, 5, 9, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(209, 209, 255);
  border-bottom-color: rgb(110, 110, 236);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(110, 110, 236);
  border-left-width: 1px;
  border-right-color: rgb(110, 110, 236);
  border-right-width: 1px;
  border-top-color: rgb(110, 110, 236);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(3, 5, 9, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(3, 5, 9, 0.85);
  border-left-color: rgba(3, 5, 9, 0.85);
  border-right-color: rgba(3, 5, 9, 0.85);
  border-top-color: rgba(3, 5, 9, 0.85);
  color: rgba(3, 5, 9, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(189, 189, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(3, 5, 9);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(3, 5, 9, 0.85);
  border-left-color: rgba(3, 5, 9, 0.85);
  border-right-color: rgba(3, 5, 9, 0.85);
  border-top-color: rgba(3, 5, 9, 0.85);
  color: rgba(3, 5, 9, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(29, 51, 90);
  border-bottom-color: rgb(228, 228, 255);
  border-left-color: rgb(228, 228, 255);
  border-right-color: rgb(228, 228, 255);
  border-top-color: rgb(228, 228, 255);
  color: rgb(228, 228, 255);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(3, 5, 9);
  border-left-color: rgb(3, 5, 9);
  border-right-color: rgb(3, 5, 9);
  border-top-color: rgb(3, 5, 9);
}

html[saved-theme="light"] body sub {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body summary {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body sup {
  color: rgb(3, 5, 9);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(17, 29, 52, 0.85);
  border-bottom-color: rgba(111, 111, 236, 0.15);
  border-left-color: rgba(111, 111, 236, 0.15);
  border-right-color: rgba(111, 111, 236, 0.15);
  border-top-color: rgba(111, 111, 236, 0.15);
  color: rgb(209, 209, 255);
}`,
  },
};
