import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retronotes.misty-mirage",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 240 !important;
  --accent-l: 84% !important;
  --accent-s: 67% !important;
  --background-modifier-active-hover: hsla(240, 67%, 84%, 0.1) !important;
  --background-modifier-border: #9181aa !important;
  --background-modifier-border-focus: #7d699b !important;
  --background-modifier-border-hover: #a598ba !important;
  --background-modifier-error: #e6e6fa !important;
  --background-modifier-error-hover: #bcbcf2 !important;
  --background-modifier-error-rgb: 138, 46, 46 !important;
  --background-modifier-form-field: #605178 !important;
  --background-modifier-form-field-hover: #605178 !important;
  --background-modifier-hover: #bcbcf2 !important;
  --background-modifier-message: #7d699b !important;
  --background-modifier-success: #7d699b !important;
  --background-modifier-success-rgb: 90, 122, 77 !important;
  --background-primary: #3b3149 !important;
  --background-primary-alt: #4d4161 !important;
  --background-secondary: #e6e6fa !important;
  --background-secondary-alt: #6a5884 !important;
  --bases-cards-background: #3b3149 !important;
  --bases-cards-cover-background: #4d4161 !important;
  --bases-cards-shadow: 0 0 0 1px #9181aa !important;
  --bases-cards-shadow-hover: 0 0 0 1px #a598ba !important;
  --bases-embed-border-color: #9181aa !important;
  --bases-group-heading-property-color: rgba(249, 248, 249, 0.85) !important;
  --bases-table-border-color: #9181aa !important;
  --bases-table-cell-background-active: #3b3149 !important;
  --bases-table-cell-background-disabled: #4d4161 !important;
  --bases-table-cell-background-selected: hsla(240, 67%, 84%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #7d699b !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(240, 67%, 84%) !important;
  --bases-table-group-background: #4d4161 !important;
  --bases-table-header-background: #3b3149 !important;
  --bases-table-header-background-hover: #57496c !important;
  --bases-table-header-color: rgba(249, 248, 249, 0.85) !important;
  --bases-table-summary-background: #3b3149 !important;
  --bases-table-summary-background-hover: #bcbcf2 !important;
  --blockquote-background-color: rgba(145, 129, 170, 0.2) !important;
  --blockquote-border-color: #e6e6fa !important;
  --blur-background: color-mix(in srgb, #6a5884 65%, transparent) linear-gradient(#6a5884, color-mix(in srgb, #6a5884 65%, transparent)) !important;
  --bodyFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-accent-ink: #a3b28c !important;
  --bold-color: #a3b28c !important;
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
  --canvas-background: #3b3149 !important;
  --canvas-card-label-color: rgba(249, 248, 249, 0.65) !important;
  --canvas-color-1: 138, 46, 46 !important;
  --canvas-color-2: 179, 104, 42 !important;
  --canvas-color-3: 194, 153, 56 !important;
  --canvas-color-4: 90, 122, 77 !important;
  --canvas-color-5: 67, 143, 147 !important;
  --canvas-color-6: 95, 74, 140 !important;
  --canvas-dot-pattern: rgba(230, 230, 250, 0.4) !important;
  --caret-color: #bab0ca !important;
  --checkbox-border-color: #f9f8fe !important;
  --checkbox-border-color-hover: rgba(249, 248, 249, 0.65) !important;
  --checkbox-color: #e6e6fa !important;
  --checkbox-color-hover: rgba(230, 230, 250, 0.85) !important;
  --checkbox-marker-color: #4d4161 !important;
  --checklist-done-color: rgba(230, 230, 250, 0.65) !important;
  --code-background: rgba(145, 129, 170, 0.2) !important;
  --code-border-color: #9181aa !important;
  --code-bracket-background: #bcbcf2 !important;
  --code-comment: rgba(249, 248, 249, 0.65) !important;
  --code-function: #c29938 !important;
  --code-important: #b3682a !important;
  --code-keyword: #b16982 !important;
  --code-normal: #f9f8fe !important;
  --code-operator: #8a2e2e !important;
  --code-property: #438f93 !important;
  --code-punctuation: rgba(249, 248, 249, 0.85) !important;
  --code-string: #5a7a4d !important;
  --code-tag: #8a2e2e !important;
  --code-value: #5f4a8c !important;
  --codeFont: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(249, 248, 249, 0.65) !important;
  --collapse-icon-color-collapsed: hsl(237, 68.34%, 96.6%) !important;
  --color-accent: hsl(240, 67%, 84%) !important;
  --color-accent-1: hsl(237, 68.34%, 96.6%) !important;
  --color-accent-2: hsl(235, 70.35%, 108.36%) !important;
  --color-accent-hsl: 240, 67%, 84% !important;
  --color-base-00: #3b3149 !important;
  --color-base-00-rgb: 59, 49, 73 !important;
  --color-base-05: #443955 !important;
  --color-base-10: #4d4161 !important;
  --color-base-100: #e3dfe9 !important;
  --color-base-20: #57496c !important;
  --color-base-25: #605178 !important;
  --color-base-30: #6a5884 !important;
  --color-base-35: #736090 !important;
  --color-base-40: #7d699b !important;
  --color-base-50: #9181aa !important;
  --color-base-50-rgb: 145, 129, 170 !important;
  --color-base-60: #a598ba !important;
  --color-base-70: #bab0ca !important;
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
  --dark: #f9f8fe !important;
  --darkgray: #f9f8fe !important;
  --divider-color: #9181aa !important;
  --divider-color-hover: hsl(240, 67%, 84%) !important;
  --dropdown-background: #6a5884 !important;
  --dropdown-background-hover: #736090 !important;
  --embed-background: rgba(145, 129, 170, 0.15) !important;
  --embed-block-shadow-hover: 0 0 0 1px #9181aa, inset 0 0 0 1px #9181aa !important;
  --embed-border-start: 2px solid rgba(230, 230, 250, 0.85) !important;
  --fainted: 0.65 !important;
  --file-header-background: #3b3149 !important;
  --file-header-background-focused: #3b3149 !important;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #6a5884 !important;
  --flair-color: #f9f8fe !important;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Mono', monospace !important;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'IBM Plex Mono', monospace !important;
  --font-print: IBM Plex Mono, monospace, Arial' !important;
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Mono', monospace !important;
  --footnote-divider-color: #9181aa !important;
  --footnote-id-color: rgba(249, 248, 249, 0.85) !important;
  --footnote-id-color-no-occurrences: rgba(249, 248, 249, 0.65) !important;
  --footnote-input-background-active: #443955 !important;
  --graph-line: #736090 !important;
  --graph-node: rgba(249, 248, 249, 0.85) !important;
  --graph-node-attachment: #c29938 !important;
  --graph-node-focused: #e6e6fa !important;
  --graph-node-tag: #a3b28c !important;
  --graph-node-unresolved: rgba(249, 248, 249, 0.65) !important;
  --graph-text: #f9f8fe !important;
  --gray: rgba(249, 248, 249, 0.85) !important;
  --h1-color: #e6e6fa !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2.2em !important;
  --h2-color: #e6e6fa !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 2em !important;
  --h3-color: #e6e6fa !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.8em !important;
  --h4-color: #e6e6fa !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.6em !important;
  --h5-color: #e6e6fa !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.4em !important;
  --h6-color: #e6e6fa !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.2em !important;
  --headerFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(249, 248, 249, 0.65) !important;
  --highlight: rgba(194, 153, 56, 0.4) !important;
  --hr-color: rgba(230, 230, 250, 0.85) !important;
  --icon-color: rgba(249, 248, 249, 0.85) !important;
  --icon-color-active: hsl(237, 68.34%, 96.6%) !important;
  --icon-color-focused: #f9f8fe !important;
  --icon-color-hover: rgba(249, 248, 249, 0.85) !important;
  --indentation-guide-color: rgba(230, 230, 250, 0.65) !important;
  --indentation-guide-color-active: rgba(230, 230, 250, 0.85) !important;
  --inline-title-color: #e6e6fa !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.2em !important;
  --input-date-separator: rgba(249, 248, 249, 0.65) !important;
  --input-placeholder-color: rgba(249, 248, 249, 0.65) !important;
  --interactive-accent: hsl(240, 67%, 84%) !important;
  --interactive-accent-hover: hsl(237, 68.34%, 96.6%) !important;
  --interactive-accent-hsl: 240, 67%, 84% !important;
  --interactive-hover: #736090 !important;
  --interactive-normal: #6a5884 !important;
  --italic-accent-ink: #e6e6fa !important;
  --italic-color: #e6e6fa !important;
  --leather-color: #e6e6fa !important;
  --leather-color-alt: #bcbcf2 !important;
  --leather-color-rgb: 44, 52, 41 !important;
  --light: #3b3149 !important;
  --light-ink: #000 !important;
  --light-ink-alt: #313147 !important;
  --light-ink-fainted: rgba(0, 0, 0, 0.65) !important;
  --light-ink-muted: rgba(0, 0, 0, 0.85) !important;
  --lightgray: #e6e6fa !important;
  --link-color: #e6e6fa !important;
  --link-color-hover: rgba(230, 230, 250, 0.85) !important;
  --link-external-color: #e6e6fa !important;
  --link-external-color-hover: rgba(230, 230, 250, 0.85) !important;
  --link-unresolved-color: rgba(230, 230, 250, 0.85) !important;
  --link-unresolved-color-hover: #e6e6fa !important;
  --link-unresolved-decoration-color: #e6e6fa !important;
  --list-marker-color: rgba(230, 230, 250, 0.65) !important;
  --list-marker-color-collapsed: #e6e6fa !important;
  --list-marker-color-hover: rgba(230, 230, 250, 0.65) !important;
  --main-ink: #f9f8fe !important;
  --main-ink-fainted: rgba(249, 248, 249, 0.65) !important;
  --main-ink-muted: rgba(249, 248, 249, 0.85) !important;
  --main-ink-rgb: 249,248,249 !important;
  --menu-background: #e6e6fa !important;
  --menu-border-color: #a598ba !important;
  --metadata-background: #4d4161 !important;
  --metadata-border-color: #9181aa !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #9181aa !important;
  --metadata-gap: 4px !important;
  --metadata-input-background-active: #443955 !important;
  --metadata-input-background-hover: #4d4161 !important;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f9f8fe !important;
  --metadata-label-background-active: #4d4161 !important;
  --metadata-label-background-hover: #4d4161 !important;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(249, 248, 249, 0.85) !important;
  --metadata-label-text-color-hover: rgba(249, 248, 249, 0.85) !important;
  --metadata-padding: 16px !important;
  --metadata-property-background-active: #57496c !important;
  --metadata-property-background-hover: #57496c !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #7d699b !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #a598ba !important;
  --modal-background: #4d4161 !important;
  --modal-border-color: #7d699b !important;
  --modal-border-width: 2px !important;
  --muted: 0.85 !important;
  --nav-collapse-icon-color: #9181aa !important;
  --nav-collapse-icon-color-collapsed: rgba(249, 248, 249, 0.65) !important;
  --nav-heading-color: #f9f8fe !important;
  --nav-heading-color-collapsed: rgba(249, 248, 249, 0.65) !important;
  --nav-heading-color-collapsed-hover: rgba(249, 248, 249, 0.85) !important;
  --nav-heading-color-hover: #f9f8fe !important;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.65) !important;
  --nav-item-background-active: #bcbcf2 !important;
  --nav-item-background-hover: #bcbcf2 !important;
  --nav-item-background-selected: hsla(240, 67%, 84%, 0.15) !important;
  --nav-item-color: #000 !important;
  --nav-item-color-active: #313147 !important;
  --nav-item-color-highlighted: hsl(237, 68.34%, 96.6%) !important;
  --nav-item-color-hover: #313147 !important;
  --nav-item-color-selected: #313147 !important;
  --nav-tag-color: rgba(249, 248, 249, 0.65) !important;
  --nav-tag-color-active: rgba(249, 248, 249, 0.85) !important;
  --nav-tag-color-hover: rgba(249, 248, 249, 0.85) !important;
  --pdf-background: #3b3149 !important;
  --pdf-page-background: #3b3149 !important;
  --pdf-shadow: 0 0 0 1px #9181aa !important;
  --pdf-sidebar-background: #3b3149 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #9181aa !important;
  --pill-background: #57496c !important;
  --pill-background-hover: #6a5884 !important;
  --pill-border-color: #9181aa !important;
  --pill-border-color-hover: #a598ba !important;
  --pill-color: rgba(249, 248, 249, 0.85) !important;
  --pill-color-hover: #f9f8fe !important;
  --pill-color-remove: rgba(249, 248, 249, 0.65) !important;
  --pill-color-remove-hover: hsl(237, 68.34%, 96.6%) !important;
  --pill-padding-x: 4px !important;
  --pill-padding-y: 2px !important;
  --plexmono: 'IBM Plex Mono', monospace !important;
  --prompt-background: #3b3149 !important;
  --prompt-border-color: rgba(230, 230, 250, 0.85) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #6a5884 65%, transparent) linear-gradient(#6a5884, color-mix(in srgb, #6a5884 65%, transparent)) !important;
  --ribbon-background: #e6e6fa !important;
  --ribbon-background-collapsed: #bcbcf2 !important;
  --search-clear-button-color: rgba(249, 248, 249, 0.85) !important;
  --search-icon-color: rgba(249, 248, 249, 0.85) !important;
  --search-result-background: #3b3149 !important;
  --secondary: hsl(237, 68.34%, 96.6%) !important;
  --secondary-ink: #e6e6fa !important;
  --secondary-ink-fainted: rgba(230, 230, 250, 0.65) !important;
  --secondary-ink-muted: rgba(230, 230, 250, 0.85) !important;
  --secondary-ink-rgb: 230, 230, 250 !important;
  --setting-group-heading-color: #f9f8fe !important;
  --setting-items-background: #4d4161 !important;
  --setting-items-border-color: #9181aa !important;
  --slider-thumb-border-color: #a598ba !important;
  --slider-track-background: #9181aa !important;
  --status-bar-background: #57496c !important;
  --status-bar-border-color: #9181aa !important;
  --status-bar-text-color: rgba(249, 248, 249, 0.85) !important;
  --suggestion-background: #3b3149 !important;
  --sync-avatar-color-1: #8a2e2e !important;
  --sync-avatar-color-2: #b3682a !important;
  --sync-avatar-color-3: #c29938 !important;
  --sync-avatar-color-4: #5a7a4d !important;
  --sync-avatar-color-5: #438f93 !important;
  --sync-avatar-color-6: #1a4559 !important;
  --sync-avatar-color-7: #5f4a8c !important;
  --sync-avatar-color-8: #b16982 !important;
  --tab-background-active: #4d4161 !important;
  --tab-container-background: #e6e6fa !important;
  --tab-divider-color: none !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #6a5884 !important;
  --tab-switcher-background: #e6e6fa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e6e6fa, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(240, 67%, 84%) !important;
  --tab-text-color-focused-active-current: #f9f8fe !important;
  --table-add-button-border-color: #9181aa !important;
  --table-border-color: #9181aa !important;
  --table-drag-handle-background-active: hsl(240, 67%, 84%) !important;
  --table-drag-handle-color: rgba(249, 248, 249, 0.65) !important;
  --table-drag-handle-color-active: #313147 !important;
  --table-header-border-color: #9181aa !important;
  --table-header-color: #e6e6fa !important;
  --table-selection: hsla(240, 67%, 84%, 0.1) !important;
  --table-selection-border-color: hsl(240, 67%, 84%) !important;
  --tag-background: rgba(230, 230, 250, 0.85) !important;
  --tag-background-hover: rgba(230, 230, 250, 0.85) !important;
  --tag-border-color: hsla(240, 67%, 84%, 0.15) !important;
  --tag-border-color-hover: hsla(240, 67%, 84%, 0.15) !important;
  --tag-color: #3b3149 !important;
  --tag-color-hover: #4d4161 !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.12em !important;
  --tertiary: hsl(235, 70.35%, 108.36%) !important;
  --text-accent: hsl(237, 68.34%, 96.6%) !important;
  --text-accent-hover: hsl(235, 70.35%, 108.36%) !important;
  --text-error: #8a2e2e !important;
  --text-faint: rgba(249, 248, 249, 0.65) !important;
  --text-fainted: rgba(249, 248, 249, 0.65) !important;
  --text-highlight-bg: rgba(194, 153, 56, 0.4) !important;
  --text-muted: rgba(249, 248, 249, 0.85) !important;
  --text-normal: #f9f8fe !important;
  --text-on-accent: #313147 !important;
  --text-on-accent-inverted: #313147 !important;
  --text-selection: rgba(145, 129, 170, 0.5) !important;
  --text-success: #5a7a4d !important;
  --text-warning: #b3682a !important;
  --textHighlight: rgba(194, 153, 56, 0.4) !important;
  --titleFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #e6e6fa !important;
  --titlebar-background-focused: #e6e6fa !important;
  --titlebar-border-color: #9181aa !important;
  --titlebar-text-color: rgba(249, 248, 249, 0.85) !important;
  --titlebar-text-color-focused: #f9f8fe !important;
  --vault-profile-color: #f9f8fe !important;
  --vault-profile-color-hover: #f9f8fe !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 230, 250);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(59, 49, 73);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(145, 129, 170);
  color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(230, 230, 250);
  border-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(77, 65, 97);
  border-color: rgb(145, 129, 170);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(230, 230, 250, 0.85);
  color: rgb(59, 49, 73);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 230, 250);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(145, 129, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 230, 250);
  border-left-color: rgb(145, 129, 170);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(59, 49, 73);
  color: rgb(249, 248, 254);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(163, 178, 140);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 178, 140) none 0px;
  text-decoration-color: rgb(163, 178, 140);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(163, 178, 140);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 178, 140) none 0px;
  text-decoration-color: rgb(163, 178, 140);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(194, 153, 56, 0.4);
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 248, 254) none 0px;
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body del {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(249, 248, 254) none 0px;
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(230, 230, 250);
  border-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body p {
  color: rgba(0, 0, 0, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(0, 0, 0, 0.85) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0.85);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 250) none 0px;
  text-decoration-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(230, 230, 250, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(230, 230, 250, 0.85) none 0px;
  text-decoration: underline rgb(230, 230, 250);
  text-decoration-color: rgb(230, 230, 250);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body dt {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(249, 248, 249, 0.65);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(145, 129, 170, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body table {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
  border-top-color: rgb(145, 129, 170);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
  border-top-color: rgb(145, 129, 170);
  color: rgb(230, 230, 250);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(145, 129, 170, 0.2);
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
  border-top-color: rgb(145, 129, 170);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(145, 129, 170, 0.2);
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
  border-top-color: rgb(145, 129, 170);
  color: rgb(249, 248, 254);
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
  background-color: rgba(145, 129, 170, 0.2);
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
  border-top-color: rgb(145, 129, 170);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(145, 129, 170, 0.2);
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
  border-top-color: rgb(145, 129, 170);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(230, 230, 250);
  border-left-color: rgb(230, 230, 250);
  border-right-color: rgb(230, 230, 250);
  border-top-color: rgb(230, 230, 250);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(77, 65, 97);
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-left-color: rgba(249, 248, 249, 0.85);
  border-right-color: rgba(249, 248, 249, 0.85);
  border-top-color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(249, 248, 254);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(145, 129, 170, 0.15);
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgba(230, 230, 250, 0.85);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(145, 129, 170, 0.15);
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(249, 248, 254);
  text-decoration-color: rgb(249, 248, 254);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-left-color: rgba(230, 230, 250, 0.85);
  border-right-color: rgba(230, 230, 250, 0.85);
  border-top-color: rgba(230, 230, 250, 0.85);
  color: rgba(230, 230, 250, 0.85);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(230, 230, 250, 0.85);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 145, 129, 170;
  background-color: rgba(145, 129, 170, 0.1);
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
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
  background-color: rgb(96, 81, 120);
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
  border-top-color: rgb(145, 129, 170);
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(59, 49, 73);
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(49, 49, 71);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(49, 49, 71) none 0px;
  text-decoration-color: rgb(49, 49, 71);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(188, 188, 242);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(230, 230, 250, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(230, 230, 250, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(230, 230, 250, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(230, 230, 250, 0.85);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 230, 250);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(188, 188, 242);
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(188, 188, 242);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(230, 230, 250, 0.85);
  border-bottom-color: rgba(187, 187, 242, 0.15);
  border-left-color: rgba(187, 187, 242, 0.15);
  border-right-color: rgba(187, 187, 242, 0.15);
  border-top-color: rgba(187, 187, 242, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(59, 49, 73);
}

html[saved-theme="dark"] body h1 {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(230, 230, 250);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 145, 129, 170;
  border-bottom-color: rgba(145, 129, 170, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(145, 129, 170, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(145, 129, 170, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(145, 129, 170, 0.25);
  border-top-width: 2px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(59, 49, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 49, 73);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(59, 49, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 49, 73);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(59, 49, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 49, 73);
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(59, 49, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 49, 73);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(59, 49, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 49, 73);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(59, 49, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 49, 73);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0.65);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(249, 248, 254);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
  color: rgb(249, 248, 254);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(87, 73, 108);
  border-bottom-color: rgb(145, 129, 170);
  border-left-color: rgb(145, 129, 170);
  border-right-color: rgb(145, 129, 170);
  border-top-color: rgb(145, 129, 170);
  color: rgba(249, 248, 249, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(249, 248, 249, 0.85);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(49, 49, 71);
  border-left-color: rgb(49, 49, 71);
  border-right-color: rgb(49, 49, 71);
  border-top-color: rgb(49, 49, 71);
  color: rgb(49, 49, 71);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(49, 49, 71);
  stroke: rgb(49, 49, 71);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-left-color: rgba(249, 248, 249, 0.85);
  border-right-color: rgba(249, 248, 249, 0.85);
  border-top-color: rgba(249, 248, 249, 0.85);
  color: rgba(249, 248, 249, 0.85);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(249, 248, 249, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(77, 65, 97);
  border-bottom-color: rgb(145, 129, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(145, 129, 170);
  border-left-width: 1px;
  border-right-color: rgb(145, 129, 170);
  border-right-width: 1px;
  border-top-color: rgb(145, 129, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(249, 248, 249, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-left-color: rgba(249, 248, 249, 0.85);
  border-right-color: rgba(249, 248, 249, 0.85);
  border-top-color: rgba(249, 248, 249, 0.85);
  color: rgba(249, 248, 249, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(87, 73, 108);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(249, 248, 254);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(249, 248, 249, 0.85);
  border-left-color: rgba(249, 248, 249, 0.85);
  border-right-color: rgba(249, 248, 249, 0.85);
  border-top-color: rgba(249, 248, 249, 0.85);
  color: rgba(249, 248, 249, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(188, 188, 242);
  border-bottom-color: rgb(49, 49, 71);
  border-left-color: rgb(49, 49, 71);
  border-right-color: rgb(49, 49, 71);
  border-top-color: rgb(49, 49, 71);
  color: rgb(49, 49, 71);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(249, 248, 254);
  border-left-color: rgb(249, 248, 254);
  border-right-color: rgb(249, 248, 254);
  border-top-color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body sub {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body summary {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body sup {
  color: rgb(249, 248, 254);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(230, 230, 250, 0.85);
  border-bottom-color: rgba(187, 187, 242, 0.15);
  border-left-color: rgba(187, 187, 242, 0.15);
  border-right-color: rgba(187, 187, 242, 0.15);
  border-top-color: rgba(187, 187, 242, 0.15);
  color: rgb(59, 49, 73);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 45.5 !important;
  --accent-l: 54.9% !important;
  --accent-s: 28.7% !important;
  --background-modifier-active-hover: hsla(45.5, 28.7%, 54.9%, 0.1) !important;
  --background-modifier-border: #ad9d6b !important;
  --background-modifier-border-focus: #bbad85 !important;
  --background-modifier-border-hover: #9b8a56 !important;
  --background-modifier-error: #3f345e !important;
  --background-modifier-error-hover: #4a3d6e !important;
  --background-modifier-error-rgb: 180, 60, 60 !important;
  --background-modifier-form-field: #d7cfb7 !important;
  --background-modifier-form-field-hover: #d7cfb7 !important;
  --background-modifier-hover: #4a3d6e !important;
  --background-modifier-message: #bbad85 !important;
  --background-modifier-success: #bbad85 !important;
  --background-modifier-success-rgb: 113, 148, 97 !important;
  --background-primary: #faf9f6 !important;
  --background-primary-alt: #e5e0d0 !important;
  --background-secondary: #3f345e !important;
  --background-secondary-alt: #ece8dd !important;
  --bases-cards-background: #faf9f6 !important;
  --bases-cards-cover-background: #e5e0d0 !important;
  --bases-cards-shadow: 0 0 0 1px #ad9d6b !important;
  --bases-cards-shadow-hover: 0 0 0 1px #9b8a56 !important;
  --bases-embed-border-color: #ad9d6b !important;
  --bases-group-heading-property-color: rgba(3, 6, 10, 0.85) !important;
  --bases-table-border-color: #ad9d6b !important;
  --bases-table-cell-background-active: #faf9f6 !important;
  --bases-table-cell-background-disabled: #e5e0d0 !important;
  --bases-table-cell-background-selected: hsla(45.5, 28.7%, 54.9%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #bbad85 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4a3d6e !important;
  --bases-table-group-background: #e5e0d0 !important;
  --bases-table-header-background: #faf9f6 !important;
  --bases-table-header-background-hover: #d7cfb7 !important;
  --bases-table-header-color: rgba(3, 6, 10, 0.85) !important;
  --bases-table-summary-background: #faf9f6 !important;
  --bases-table-summary-background-hover: #4a3d6e !important;
  --blockquote-background-color: rgba(173, 157, 107, 0.2) !important;
  --blockquote-border-color: #1e3d6d !important;
  --blur-background: color-mix(in srgb, #faf9f6 65%, transparent) linear-gradient(#faf9f6, color-mix(in srgb, #faf9f6 65%, transparent)) !important;
  --bodyFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-accent-ink: #1e3d6d !important;
  --bold-color: #1e3d6d !important;
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
  --canvas-background: #faf9f6 !important;
  --canvas-card-label-color: rgba(3, 6, 10, 0.65) !important;
  --canvas-color-1: 180, 60, 60 !important;
  --canvas-color-2: 219, 129, 52 !important;
  --canvas-color-3: 242, 186, 68 !important;
  --canvas-color-4: 113, 148, 97 !important;
  --canvas-color-5: 83, 179, 184 !important;
  --canvas-color-6: 119, 92, 176 !important;
  --canvas-dot-pattern: rgba(30, 61, 109, 0.4) !important;
  --caret-color: #827348 !important;
  --checkbox-border-color: #03060a !important;
  --checkbox-border-color-hover: rgba(3, 6, 10, 0.65) !important;
  --checkbox-color: #1e3d6d !important;
  --checkbox-color-hover: rgba(30, 61, 109, 0.85) !important;
  --checkbox-marker-color: #d7cfb7 !important;
  --checklist-done-color: rgba(30, 61, 109, 0.65) !important;
  --code-background: rgba(173, 157, 107, 0.2) !important;
  --code-border-color: #ad9d6b !important;
  --code-bracket-background: #4a3d6e !important;
  --code-comment: rgba(3, 6, 10, 0.65) !important;
  --code-function: #f2ba44 !important;
  --code-important: #db8134 !important;
  --code-keyword: #dc84a3 !important;
  --code-normal: #03060a !important;
  --code-operator: #b43c3c !important;
  --code-property: #53b3b8 !important;
  --code-punctuation: rgba(3, 6, 10, 0.85) !important;
  --code-string: #719461 !important;
  --code-tag: #b43c3c !important;
  --code-value: #775cb0 !important;
  --codeFont: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(3, 6, 10, 0.65) !important;
  --collapse-icon-color-collapsed: hsl(45.5, 28.7%, 54.9%) !important;
  --color-accent: hsl(45.5, 28.7%, 54.9%) !important;
  --color-accent-1: hsl(44.5, 28.987%, 59.0175%) !important;
  --color-accent-2: hsl(42.5, 29.274%, 63.135%) !important;
  --color-accent-hsl: 45.5, 28.7%, 54.9% !important;
  --color-base-00: #faf9f6 !important;
  --color-base-00-rgb: 250,249,246 !important;
  --color-base-05: #ece8dd !important;
  --color-base-10: #e5e0d0 !important;
  --color-base-100: #36301e !important;
  --color-base-20: #d7cfb7 !important;
  --color-base-25: #d0c7aa !important;
  --color-base-30: #c9be9e !important;
  --color-base-35: #c2b691 !important;
  --color-base-40: #bbad85 !important;
  --color-base-50: #ad9d6b !important;
  --color-base-50-rgb: 173,157,107 !important;
  --color-base-60: #9b8a56 !important;
  --color-base-70: #827348 !important;
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
  --dark: #03060a !important;
  --darkgray: #03060a !important;
  --divider-color: #ad9d6b !important;
  --divider-color-hover: #4a3d6e !important;
  --dropdown-background: #c9be9e !important;
  --dropdown-background-hover: #d7cfb7 !important;
  --embed-background: rgba(173, 157, 107, 0.15) !important;
  --embed-block-shadow-hover: 0 0 0 1px #ad9d6b, inset 0 0 0 1px #ad9d6b !important;
  --embed-border-start: 2px solid #4a3d6e !important;
  --fainted: 0.65 !important;
  --file-header-background: #faf9f6 !important;
  --file-header-background-focused: #faf9f6 !important;
  --file-header-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #c9be9e !important;
  --flair-color: #03060a !important;
  --font-interface: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'IBM Plex Mono', monospace !important;
  --font-mermaid: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: IBM Plex Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'IBM Plex Mono', monospace !important;
  --font-print: IBM Plex Mono, monospace, Arial' !important;
  --font-text: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'IBM Plex Mono', monospace !important;
  --footnote-divider-color: #ad9d6b !important;
  --footnote-id-color: rgba(3, 6, 10, 0.85) !important;
  --footnote-id-color-no-occurrences: rgba(3, 6, 10, 0.65) !important;
  --footnote-input-background-active: #ece8dd !important;
  --graph-line: #c2b691 !important;
  --graph-node: rgba(3, 6, 10, 0.85) !important;
  --graph-node-attachment: #f2ba44 !important;
  --graph-node-focused: #1e3d6d !important;
  --graph-node-tag: #1e3d6d !important;
  --graph-node-unresolved: rgba(3, 6, 10, 0.65) !important;
  --graph-text: #03060a !important;
  --gray: rgba(3, 6, 10, 0.85) !important;
  --h1-color: #1e3d6d !important;
  --h1-line-height: 1.5em !important;
  --h1-size: 2.2em !important;
  --h2-color: #1e3d6d !important;
  --h2-line-height: 1.5em !important;
  --h2-size: 2em !important;
  --h3-color: #1e3d6d !important;
  --h3-line-height: 1.5em !important;
  --h3-size: 1.8em !important;
  --h4-color: #1e3d6d !important;
  --h4-line-height: 1.5em !important;
  --h4-size: 1.6em !important;
  --h5-color: #1e3d6d !important;
  --h5-line-height: 1.5em !important;
  --h5-size: 1.4em !important;
  --h6-color: #1e3d6d !important;
  --h6-line-height: 1.5em !important;
  --h6-size: 1.2em !important;
  --headerFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(3, 6, 10, 0.65) !important;
  --highlight: rgba(242, 186, 68, 0.4) !important;
  --hr-color: rgba(30, 61, 109, 0.85) !important;
  --icon-color: rgba(3, 6, 10, 0.85) !important;
  --icon-color-active: hsl(45.5, 28.7%, 54.9%) !important;
  --icon-color-focused: #03060a !important;
  --icon-color-hover: rgba(3, 6, 10, 0.85) !important;
  --indentation-guide-color: rgba(30, 61, 109, 0.65) !important;
  --indentation-guide-color-active: rgba(30, 61, 109, 0.85) !important;
  --inline-title-color: #1e3d6d !important;
  --inline-title-line-height: 1.5em !important;
  --inline-title-size: 2.2em !important;
  --input-date-separator: rgba(3, 6, 10, 0.65) !important;
  --input-placeholder-color: rgba(3, 6, 10, 0.65) !important;
  --interactive-accent: #4a3d6e !important;
  --interactive-accent-hover: #3f345e !important;
  --interactive-accent-hsl: 45.5, 28.7%, 54.9% !important;
  --interactive-hover: #d7cfb7 !important;
  --interactive-normal: #c9be9e !important;
  --italic-accent-ink: #3a4f3a !important;
  --italic-color: #3a4f3a !important;
  --leather-color: #3f345e !important;
  --leather-color-alt: #4a3d6e !important;
  --leather-color-rgb: 99, 35, 53 !important;
  --light: #faf9f6 !important;
  --light-ink: #faf9f6 !important;
  --light-ink-alt: #d7cfb7 !important;
  --light-ink-fainted: rgba(250, 249, 246, 0.65) !important;
  --light-ink-muted: rgba(250, 249, 246, 0.85) !important;
  --lightgray: #3f345e !important;
  --link-color: #1e3d6d !important;
  --link-color-hover: rgba(30, 61, 109, 0.85) !important;
  --link-external-color: #1e3d6d !important;
  --link-external-color-hover: rgba(30, 61, 109, 0.85) !important;
  --link-unresolved-color: rgba(30, 61, 109, 0.85) !important;
  --link-unresolved-color-hover: #1e3d6d !important;
  --link-unresolved-decoration-color: #1e3d6d !important;
  --list-marker-color: rgba(30, 61, 109, 0.65) !important;
  --list-marker-color-collapsed: #1e3d6d !important;
  --list-marker-color-hover: rgba(30, 61, 109, 0.65) !important;
  --main-ink: #03060a !important;
  --main-ink-fainted: rgba(3, 6, 10, 0.65) !important;
  --main-ink-muted: rgba(3, 6, 10, 0.85) !important;
  --main-ink-rgb: 3, 6, 10 !important;
  --menu-background: #3f345e !important;
  --menu-border-color: #9b8a56 !important;
  --metadata-background: #e5e0d0 !important;
  --metadata-border-color: #ad9d6b !important;
  --metadata-border-radius: 8px !important;
  --metadata-border-width: 1px !important;
  --metadata-divider-color: #ad9d6b !important;
  --metadata-gap: 4px !important;
  --metadata-input-background-active: #ece8dd !important;
  --metadata-input-background-hover: #e5e0d0 !important;
  --metadata-input-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #03060a !important;
  --metadata-label-background-active: #e5e0d0 !important;
  --metadata-label-background-hover: #e5e0d0 !important;
  --metadata-label-font: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(3, 6, 10, 0.85) !important;
  --metadata-label-text-color-hover: rgba(3, 6, 10, 0.85) !important;
  --metadata-padding: 16px !important;
  --metadata-property-background-active: #d7cfb7 !important;
  --metadata-property-background-hover: #d7cfb7 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #bbad85 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #9b8a56 !important;
  --modal-background: #e5e0d0 !important;
  --modal-border-color: #bbad85 !important;
  --modal-border-width: 2px !important;
  --muted: 0.85 !important;
  --nav-collapse-icon-color: #ad9d6b !important;
  --nav-collapse-icon-color-collapsed: rgba(3, 6, 10, 0.65) !important;
  --nav-heading-color: #03060a !important;
  --nav-heading-color-collapsed: rgba(3, 6, 10, 0.65) !important;
  --nav-heading-color-collapsed-hover: rgba(3, 6, 10, 0.85) !important;
  --nav-heading-color-hover: #03060a !important;
  --nav-indentation-guide-color: rgba(173, 157, 107, 0.65) !important;
  --nav-item-background-active: #4a3d6e !important;
  --nav-item-background-hover: #4a3d6e !important;
  --nav-item-background-selected: hsla(45.5, 28.7%, 54.9%, 0.15) !important;
  --nav-item-color: #faf9f6 !important;
  --nav-item-color-active: #d7cfb7 !important;
  --nav-item-color-highlighted: hsl(45.5, 28.7%, 54.9%) !important;
  --nav-item-color-hover: #d7cfb7 !important;
  --nav-item-color-selected: #d7cfb7 !important;
  --nav-tag-color: rgba(3, 6, 10, 0.65) !important;
  --nav-tag-color-active: rgba(3, 6, 10, 0.85) !important;
  --nav-tag-color-hover: rgba(3, 6, 10, 0.85) !important;
  --pdf-background: #faf9f6 !important;
  --pdf-page-background: #faf9f6 !important;
  --pdf-sidebar-background: #faf9f6 !important;
  --pill-background: #d7cfb7 !important;
  --pill-background-hover: #c9be9e !important;
  --pill-border-color: #ad9d6b !important;
  --pill-border-color-hover: #9b8a56 !important;
  --pill-color: rgba(3, 6, 10, 0.85) !important;
  --pill-color-hover: #03060a !important;
  --pill-color-remove: rgba(3, 6, 10, 0.65) !important;
  --pill-color-remove-hover: hsl(45.5, 28.7%, 54.9%) !important;
  --pill-padding-x: 4px !important;
  --pill-padding-y: 2px !important;
  --plexmono: 'IBM Plex Mono', monospace !important;
  --prompt-background: #faf9f6 !important;
  --prompt-border-color: rgba(30, 61, 109, 0.85) !important;
  --prompt-border-width: 2px !important;
  --raised-background: color-mix(in srgb, #faf9f6 65%, transparent) linear-gradient(#faf9f6, color-mix(in srgb, #faf9f6 65%, transparent)) !important;
  --ribbon-background: #3f345e !important;
  --ribbon-background-collapsed: #4a3d6e !important;
  --search-clear-button-color: rgba(3, 6, 10, 0.85) !important;
  --search-icon-color: rgba(3, 6, 10, 0.85) !important;
  --search-result-background: #faf9f6 !important;
  --secondary: hsl(45.5, 28.7%, 54.9%) !important;
  --secondary-ink: #1e3d6d !important;
  --secondary-ink-fainted: rgba(30, 61, 109, 0.65) !important;
  --secondary-ink-muted: rgba(30, 61, 109, 0.85) !important;
  --secondary-ink-rgb: 30, 61, 109 !important;
  --setting-group-heading-color: #03060a !important;
  --setting-items-background: #e5e0d0 !important;
  --setting-items-border-color: #ad9d6b !important;
  --slider-thumb-border-color: #9b8a56 !important;
  --slider-track-background: #ad9d6b !important;
  --status-bar-background: #d7cfb7 !important;
  --status-bar-border-color: #ad9d6b !important;
  --status-bar-text-color: rgba(3, 6, 10, 0.85) !important;
  --suggestion-background: #faf9f6 !important;
  --sync-avatar-color-1: #b43c3c !important;
  --sync-avatar-color-2: #db8134 !important;
  --sync-avatar-color-3: #f2ba44 !important;
  --sync-avatar-color-4: #719461 !important;
  --sync-avatar-color-5: #53b3b8 !important;
  --sync-avatar-color-6: #225973 !important;
  --sync-avatar-color-7: #775cb0 !important;
  --sync-avatar-color-8: #dc84a3 !important;
  --tab-background-active: #e5e0d0 !important;
  --tab-container-background: #3f345e !important;
  --tab-divider-color: none !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #c9be9e !important;
  --tab-switcher-background: #3f345e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #3f345e, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(45.5, 28.7%, 54.9%) !important;
  --tab-text-color-focused-active-current: #03060a !important;
  --table-add-button-border-color: #ad9d6b !important;
  --table-border-color: #ad9d6b !important;
  --table-drag-handle-background-active: #4a3d6e !important;
  --table-drag-handle-color: rgba(3, 6, 10, 0.65) !important;
  --table-drag-handle-color-active: #d7cfb7 !important;
  --table-header-border-color: #ad9d6b !important;
  --table-header-color: #1e3d6d !important;
  --table-selection: hsla(45.5, 28.7%, 54.9%, 0.1) !important;
  --table-selection-border-color: #4a3d6e !important;
  --tag-background: rgba(30, 61, 109, 0.85) !important;
  --tag-background-hover: rgba(30, 61, 109, 0.85) !important;
  --tag-border-color: hsla(45.5, 28.7%, 54.9%, 0.15) !important;
  --tag-border-color-hover: hsla(45.5, 28.7%, 54.9%, 0.15) !important;
  --tag-color: #e5e0d0 !important;
  --tag-color-hover: #e5e0d0 !important;
  --tag-padding-x: 0.75em !important;
  --tag-padding-y: 0.12em !important;
  --tertiary: hsl(42.5, 29.274%, 63.135%) !important;
  --text-accent: hsl(45.5, 28.7%, 54.9%) !important;
  --text-accent-hover: hsl(42.5, 29.274%, 63.135%) !important;
  --text-error: #b43c3c !important;
  --text-faint: rgba(3, 6, 10, 0.65) !important;
  --text-fainted: rgba(3, 6, 10, 0.65) !important;
  --text-highlight-bg: rgba(242, 186, 68, 0.4) !important;
  --text-muted: rgba(3, 6, 10, 0.85) !important;
  --text-normal: #03060a !important;
  --text-on-accent: #d7cfb7 !important;
  --text-on-accent-inverted: #d7cfb7 !important;
  --text-selection: rgba(173, 157, 107, 0.5) !important;
  --text-success: #719461 !important;
  --text-warning: #db8134 !important;
  --textHighlight: rgba(242, 186, 68, 0.4) !important;
  --titleFont: IBM Plex Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #3f345e !important;
  --titlebar-background-focused: #3f345e !important;
  --titlebar-border-color: #ad9d6b !important;
  --titlebar-text-color: rgba(3, 6, 10, 0.85) !important;
  --titlebar-text-color-focused: #03060a !important;
  --vault-profile-color: #03060a !important;
  --vault-profile-color-hover: #03060a !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(63, 52, 94);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 249, 246);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(173, 157, 107);
  color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 249, 246);
  border-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(229, 224, 208);
  border-color: rgb(173, 157, 107);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(30, 61, 109, 0.85);
  color: rgb(229, 224, 208);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(63, 52, 94);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(173, 157, 107);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(63, 52, 94);
  border-left-color: rgb(173, 157, 107);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 249, 246);
  color: rgb(3, 6, 10);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(58, 79, 58);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 79, 58) none 0px;
  text-decoration-color: rgb(58, 79, 58);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(58, 79, 58);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 79, 58) none 0px;
  text-decoration-color: rgb(58, 79, 58);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(242, 186, 68, 0.4);
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(3, 6, 10) none 0px;
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body del {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(3, 6, 10) none 0px;
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(30, 61, 109);
  border-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body p {
  color: rgba(250, 249, 246, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(250, 249, 246, 0.85) none 0px;
  text-decoration-color: rgba(250, 249, 246, 0.85);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 61, 109) none 0px;
  text-decoration-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(30, 61, 109, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(30, 61, 109, 0.85) none 0px;
  text-decoration: underline rgb(30, 61, 109);
  text-decoration-color: rgb(30, 61, 109);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body dt {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body ol > li {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body ul > li {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(3, 6, 10, 0.65);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(173, 157, 107, 0.2);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body table {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.422px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
  border-top-color: rgb(173, 157, 107);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
  border-top-color: rgb(173, 157, 107);
  color: rgb(30, 61, 109);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(173, 157, 107, 0.2);
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
  border-top-color: rgb(173, 157, 107);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(173, 157, 107, 0.2);
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
  border-top-color: rgb(173, 157, 107);
  color: rgb(3, 6, 10);
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
  background-color: rgba(173, 157, 107, 0.2);
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
  border-top-color: rgb(173, 157, 107);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(173, 157, 107, 0.2);
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
  border-top-color: rgb(173, 157, 107);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body figcaption {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(30, 61, 109);
  border-left-color: rgb(30, 61, 109);
  border-right-color: rgb(30, 61, 109);
  border-top-color: rgb(30, 61, 109);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(229, 224, 208);
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-left-color: rgba(3, 6, 10, 0.85);
  border-right-color: rgba(3, 6, 10, 0.85);
  border-top-color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(3, 6, 10);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(173, 157, 107, 0.15);
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(74, 61, 110);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(173, 157, 107, 0.15);
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(3, 6, 10);
  text-decoration-color: rgb(3, 6, 10);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-left-color: rgba(30, 61, 109, 0.85);
  border-right-color: rgba(30, 61, 109, 0.85);
  border-top-color: rgba(30, 61, 109, 0.85);
  color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgba(30, 61, 109, 0.85);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 173,157,107;
  background-color: rgba(173, 157, 107, 0.1);
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
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
  background-color: rgb(215, 207, 183);
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
  border-top-color: rgb(173, 157, 107);
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 249, 246);
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(215, 207, 183);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 207, 183) none 0px;
  text-decoration-color: rgb(215, 207, 183);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(74, 61, 110);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(30, 61, 109, 0.85);
  border-bottom-width: 2px;
  border-left-color: rgba(30, 61, 109, 0.85);
  border-left-width: 2px;
  border-right-color: rgba(30, 61, 109, 0.85);
  border-right-width: 2px;
  border-top-color: rgba(30, 61, 109, 0.85);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(63, 52, 94);
  border-left-color: rgb(250, 249, 246);
  border-right-color: rgb(250, 249, 246);
  border-top-color: rgb(250, 249, 246);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(74, 61, 110);
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(74, 61, 110);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(30, 61, 109, 0.85);
  border-bottom-color: rgba(173, 157, 107, 0.15);
  border-left-color: rgba(173, 157, 107, 0.15);
  border-right-color: rgba(173, 157, 107, 0.15);
  border-top-color: rgba(173, 157, 107, 0.15);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(229, 224, 208);
}

html[saved-theme="light"] body h1 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(30, 61, 109);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 173,157,107;
  border-bottom-color: rgba(173, 157, 107, 0.25);
  border-bottom-width: 2px;
  border-left-color: rgba(173, 157, 107, 0.25);
  border-left-width: 2px;
  border-right-color: rgba(173, 157, 107, 0.25);
  border-right-width: 2px;
  border-top-color: rgba(173, 157, 107, 0.25);
  border-top-width: 2px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 249, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 249, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 249, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 246);
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 249, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 249, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 249, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 246);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(250, 249, 246);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(250, 249, 246);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(173, 157, 107, 0.65);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(3, 6, 10);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
  color: rgb(3, 6, 10);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(215, 207, 183);
  border-bottom-color: rgb(173, 157, 107);
  border-left-color: rgb(173, 157, 107);
  border-right-color: rgb(173, 157, 107);
  border-top-color: rgb(173, 157, 107);
  color: rgba(3, 6, 10, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(3, 6, 10, 0.85);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(250, 249, 246);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(250, 249, 246);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(250, 249, 246);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(250, 249, 246);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(215, 207, 183);
  border-left-color: rgb(215, 207, 183);
  border-right-color: rgb(215, 207, 183);
  border-top-color: rgb(215, 207, 183);
  color: rgb(215, 207, 183);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(215, 207, 183);
  stroke: rgb(215, 207, 183);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-left-color: rgba(3, 6, 10, 0.85);
  border-right-color: rgba(3, 6, 10, 0.85);
  border-top-color: rgba(3, 6, 10, 0.85);
  color: rgba(3, 6, 10, 0.85);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(3, 6, 10, 0.65);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(229, 224, 208);
  border-bottom-color: rgb(173, 157, 107);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(173, 157, 107);
  border-left-width: 1px;
  border-right-color: rgb(173, 157, 107);
  border-right-width: 1px;
  border-top-color: rgb(173, 157, 107);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgba(3, 6, 10, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-left-color: rgba(3, 6, 10, 0.85);
  border-right-color: rgba(3, 6, 10, 0.85);
  border-top-color: rgba(3, 6, 10, 0.85);
  color: rgba(3, 6, 10, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(215, 207, 183);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(3, 6, 10);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(3, 6, 10, 0.85);
  border-left-color: rgba(3, 6, 10, 0.85);
  border-right-color: rgba(3, 6, 10, 0.85);
  border-top-color: rgba(3, 6, 10, 0.85);
  color: rgba(3, 6, 10, 0.85);
  font-family: "??", "IBM Plex Mono", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(74, 61, 110);
  border-bottom-color: rgb(215, 207, 183);
  border-left-color: rgb(215, 207, 183);
  border-right-color: rgb(215, 207, 183);
  border-top-color: rgb(215, 207, 183);
  color: rgb(215, 207, 183);
  font-family: "??", "IBM Plex Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(3, 6, 10);
  border-left-color: rgb(3, 6, 10);
  border-right-color: rgb(3, 6, 10);
  border-top-color: rgb(3, 6, 10);
}

html[saved-theme="light"] body sub {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body summary {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body sup {
  color: rgb(3, 6, 10);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(30, 61, 109, 0.85);
  border-bottom-color: rgba(173, 157, 107, 0.15);
  border-left-color: rgba(173, 157, 107, 0.15);
  border-right-color: rgba(173, 157, 107, 0.15);
  border-top-color: rgba(173, 157, 107, 0.15);
  color: rgb(229, 224, 208);
}`,
  },
};
