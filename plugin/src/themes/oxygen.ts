import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "oxygen", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 201 !important;
  --accent-l: 55% !important;
  --accent-s: 59% !important;
  --active-line-bg: rgba(255, 255, 255, 0.04) !important;
  --adaptive-list-edit-offset: 0.5em !important;
  --anim-duration-fast: 160ms !important;
  --anim-duration-moderate: 320ms !important;
  --anim-duration-slow: 640ms !important;
  --anim-duration-superfast: 80ms !important;
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1) !important;
  --anim-motion-playful: cubic-bezier(0.1, 0, 0.1, 1.25) !important;
  --anim-speed-modifier: 1 !important;
  --ax1: hsl(201, 59%, 55%) !important;
  --ax2: hsl(201, 59%, 47%) !important;
  --ax3: hsl(201, 59%, 61%) !important;
  --background-modifier-accent: hsl(201, 59%, 61%) !important;
  --background-modifier-active-hover: hsla(220, 8%, 60%, 0.12) !important;
  --background-modifier-border: #2d3139 !important;
  --background-modifier-border-focus: #4a5058 !important;
  --background-modifier-border-hover: #3a404a !important;
  --background-modifier-cover: hsla(220, 8%, 8%, 0.5) !important;
  --background-modifier-error: rgba(255, 20, 20, 0.12) !important;
  --background-modifier-error-hover: rgba(255, 20, 20, 0.18) !important;
  --background-modifier-error-rgb: 208,66,85 !important;
  --background-modifier-form-field: #1c1d1e !important;
  --background-modifier-form-field-highlighted: #1c1d1e !important;
  --background-modifier-form-field-hover: #1c1d1e !important;
  --background-modifier-hover: hsla(220, 8%, 60%, 0.12) !important;
  --background-modifier-success: #a8c373 !important;
  --background-modifier-success-rgb: 168,195,115 !important;
  --background-primary: #1c1d1e !important;
  --background-primary-alt: #17191b !important;
  --background-secondary: #17191b !important;
  --background-secondary-alt: #1c1d1e !important;
  --background-table-rows: #17191b !important;
  --base-h: 220 !important;
  --base-l: 20% !important;
  --base-s: 8% !important;
  --bases-cards-background: #1c1d1e !important;
  --bases-cards-cover-background: #17191b !important;
  --bases-cards-shadow: 0 0 0 1px #2d3139 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3a404a !important;
  --bases-embed-border-color: #2d3139 !important;
  --bases-group-heading-property-color: hsl(220, -12%, 65%) !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: #2d3139 !important;
  --bases-table-cell-background-active: #1c1d1e !important;
  --bases-table-cell-background-disabled: #17191b !important;
  --bases-table-cell-background-selected: hsla(201, 50%, 40%, 30%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4a5058 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(201, 59%, 61%) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-font-size: 14px !important;
  --bases-table-group-background: #17191b !important;
  --bases-table-header-background: #1c1d1e !important;
  --bases-table-header-background-hover: hsla(220, 8%, 60%, 0.12) !important;
  --bases-table-header-color: hsl(220, -12%, 65%) !important;
  --bases-table-summary-background: #1c1d1e !important;
  --bases-table-summary-background-hover: hsla(220, 8%, 60%, 0.12) !important;
  --bg1: #1c1d1e !important;
  --bg2: #17191b !important;
  --bg3: hsla(220, 8%, 60%, 0.12) !important;
  --blockquote-border-color: #3a404a !important;
  --blockquote-border-thickness: 1px !important;
  --blockquote-color: hsl(220, -12%, 65%) !important;
  --blockquote-style: normal !important;
  --blur-background: color-mix(in srgb, hsla(220, 8%, 60%, 0.12) 65%, transparent) linear-gradient(hsla(220, 8%, 60%, 0.12), color-mix(in srgb, hsla(220, 8%, 60%, 0.12) 65%, transparent)) !important;
  --btn-shadow-color: rgba(0, 0, 0, 0.2) !important;
  --calendar-dot-active: hsl(220, -2%, 40%) !important;
  --calendar-dot-today: hsl(201, 59%, 55%) !important;
  --callout-bug: 208,66,85;
  --callout-default: 108,153,187;
  --callout-error: 208,66,85;
  --callout-example: 158,134,200;
  --callout-fail: 208,66,85;
  --callout-important: 115,187,178;
  --callout-info: 108,153,187;
  --callout-question: 213,118,63;
  --callout-success: 168,195,115;
  --callout-summary: 115,187,178;
  --callout-tip: 115,187,178;
  --callout-todo: 108,153,187;
  --callout-warning: 213,118,63;
  --canvas-background: #1c1d1e !important;
  --canvas-card-label-color: hsl(220, -2%, 40%) !important;
  --canvas-color-1: 208,66,85 !important;
  --canvas-color-2: 213,118,63 !important;
  --canvas-color-3: 229,181,103 !important;
  --canvas-color-4: 168,195,115 !important;
  --canvas-color-5: 115,187,178 !important;
  --canvas-color-6: 158,134,200 !important;
  --canvas-dot-pattern: #3a404a !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-background-hover: transparent !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: hsl(220, -2%, 87%) !important;
  --chart-color-1: #6c99bb !important;
  --chart-color-2: #d04255 !important;
  --chart-color-3: #e5b567 !important;
  --chart-color-4: #a8c373 !important;
  --chart-color-5: #d5763f !important;
  --chart-color-6: #9e86c8 !important;
  --chart-color-7: #73bbb2 !important;
  --chart-color-8: #b05279 !important;
  --chart-max-width: none !important;
  --chart-width: auto !important;
  --checkbox-border-color: hsl(220, -2%, 40%) !important;
  --checkbox-border-color-hover: hsl(220, -12%, 65%) !important;
  --checkbox-color: hsl(201, 59%, 61%) !important;
  --checkbox-color-hover: hsl(201, 59%, 55%) !important;
  --checkbox-left: 0px !important;
  --checkbox-margin: 0px 6px 0px -2em !important;
  --checkbox-marker-color: #1c1d1e !important;
  --checkbox-radius: 50% !important;
  --checkbox-top: 2px !important;
  --checklist-done-color: hsl(220, -2%, 87%) !important;
  --checklist-done-decoration: none !important;
  --code-background: #17191b !important;
  --code-border-color: #2d3139 !important;
  --code-bracket-background: hsla(220, 8%, 60%, 0.12) !important;
  --code-comment: hsl(220, -2%, 40%) !important;
  --code-function: #e5b567 !important;
  --code-important: #d5763f !important;
  --code-keyword: #b05279 !important;
  --code-normal: hsl(220, -2%, 87%) !important;
  --code-operator: #d04255 !important;
  --code-property: #73bbb2 !important;
  --code-punctuation: hsl(220, -12%, 65%) !important;
  --code-string: #a8c373 !important;
  --code-tag: #d04255 !important;
  --code-value: #9e86c8 !important;
  --collapse-icon-color: hsl(220, -2%, 40%) !important;
  --collapse-icon-color-collapsed: hsl(201, 59%, 55%) !important;
  --color-accent: hsl(201, 59%, 55%) !important;
  --color-accent-1: hsl(198, 60.18%, 63.25%) !important;
  --color-accent-2: hsl(196, 61.95%, 70.95%) !important;
  --color-accent-hsl: 201, 59%, 55% !important;
  --color-blue: #6c99bb !important;
  --color-blue-rgb: 108,153,187 !important;
  --color-cyan: #73bbb2 !important;
  --color-cyan-rgb: 115,187,178 !important;
  --color-green: #a8c373 !important;
  --color-green-rgb: 168,195,115 !important;
  --color-orange: #d5763f !important;
  --color-orange-rgb: 213,118,63 !important;
  --color-pink: #b05279 !important;
  --color-pink-rgb: 176,82,121 !important;
  --color-purple: #9e86c8 !important;
  --color-purple-rgb: 158,134,200 !important;
  --color-red: #d04255 !important;
  --color-red-rgb: 208,66,85 !important;
  --color-yellow: #e5b567 !important;
  --color-yellow-rgb: 229,181,103 !important;
  --container-chart-max-width: 88% !important;
  --container-chart-width: 40rem !important;
  --container-dataview-table-width: 40rem !important;
  --container-iframe-max-width: 88% !important;
  --container-iframe-width: 40rem !important;
  --container-img-max-width: 88% !important;
  --container-img-width: 40rem !important;
  --container-map-max-width: 88% !important;
  --container-map-width: 40rem !important;
  --container-table-margin: calc(max( calc(50% - 40rem/2), calc(50% - 88%/2) ) - 16px) !important;
  --container-table-max-width: 88% !important;
  --container-table-width: calc(40rem + 32px) !important;
  --content-line-width: min(40rem, 88%) !important;
  --content-margin: auto !important;
  --content-margin-start: max( calc(50% - 20rem), 6% ) !important;
  --dark: hsl(220, -2%, 87%) !important;
  --darkgray: hsl(220, -2%, 87%) !important;
  --divider-color: #2d3139 !important;
  --divider-color-hover: hsl(201, 59%, 61%) !important;
  --dropdown-background: hsla(220, 8%, 60%, 0.12) !important;
  --dropdown-background-hover: #2d3139 !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsl(201, 59%, 61%) !important;
  --embed-decoration-color: #3a404a !important;
  --embed-decoration-style: solid !important;
  --embed-max-height: none !important;
  --file-header-background: #1c1d1e !important;
  --file-header-background-focused: #1c1d1e !important;
  --file-margins: 8px 48px !important;
  --flair-background: hsla(220, 8%, 60%, 0.12) !important;
  --flair-color: hsl(220, -2%, 87%) !important;
  --focus-animation-duration: 0.1s !important;
  --folding-offset: 32px !important;
  --font-adaptive-normal: 16px !important;
  --font-adaptive-small: 13.91px !important;
  --font-adaptive-smaller: 13px !important;
  --font-adaptive-smallest: 11px !important;
  --font-code: 14.4px !important;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: #2d3139 !important;
  --footnote-id-color: hsl(220, -12%, 65%) !important;
  --footnote-id-color-no-occurrences: hsl(220, -2%, 40%) !important;
  --footnote-input-background-active: hsla(220, 8%, 60%, 0.12) !important;
  --frame-background: hsl( 201, 59%, 30%) !important;
  --frame-background-h: 201 !important;
  --frame-background-l: 30% !important;
  --frame-background-s: 59% !important;
  --frame-divider-color: #2d3139 !important;
  --frame-icon-color: hsl( 201, 49%, 55%) !important;
  --frame-muted-color: hsl( 201, 49%, 55%) !important;
  --frame-outline-color: hsla( 201, 57%, 36.5%, 1 ) !important;
  --graph-node: hsl(220, -12%, 65%) !important;
  --graph-node-attachment: #e5b567 !important;
  --graph-node-focused: hsl(201, 59%, 55%) !important;
  --graph-node-tag: #a8c373 !important;
  --graph-node-unresolved: hsl(220, -2%, 40%) !important;
  --graph-text: hsl(220, -2%, 87%) !important;
  --gray: hsl(220, -12%, 65%) !important;
  --h1-size: 1.2em !important;
  --h1-weight: 600 !important;
  --h1l: #2d3139 !important;
  --h2-size: 1.1em !important;
  --h2-weight: 600 !important;
  --h2l: #2d3139 !important;
  --h3-size: 1.05em !important;
  --h3-weight: 500 !important;
  --h3l: #2d3139 !important;
  --h4-size: 1em !important;
  --h4-weight: 500 !important;
  --h4l: #2d3139 !important;
  --h5-size: 0.95em !important;
  --h5-variant: small-caps !important;
  --h5-weight: 500 !important;
  --h5l: #2d3139 !important;
  --h6-size: 0.95em !important;
  --h6-variant: small-caps !important;
  --h6-weight: 400 !important;
  --h6l: #2d3139 !important;
  --heading-formatting: hsl(220, -2%, 40%) !important;
  --heading-spacing: 2em !important;
  --hider-ribbon-display: none !important;
  --highlight: rgba(255, 177, 80, 0.3) !important;
  --hl1: hsla(201, 50%, 40%, 30%) !important;
  --hl2: rgba(255, 177, 80, 0.3) !important;
  --hr-color: #2d3139 !important;
  --icon-color: hsl(220, -12%, 65%) !important;
  --icon-color-active: hsl(220, -2%, 87%) !important;
  --icon-color-focused: hsl(220, -2%, 87%) !important;
  --icon-color-hover: hsl(220, -12%, 65%) !important;
  --icon-hex: black !important;
  --icon-muted: 0.5 !important;
  --iframe-max-width: none !important;
  --iframe-width: auto !important;
  --image-grid-background: transparent !important;
  --image-grid-fit: cover !important;
  --image-mix: normal !important;
  --image-muted: 0.7 !important;
  --image-radius: 4px !important;
  --img-grid-gap: 0.5rem !important;
  --img-line-width: min(40rem, 88%) !important;
  --img-margin-start: max( calc(50% - 20rem), 6% ) !important;
  --img-max-width: 100% !important;
  --img-width: auto !important;
  --indentation-guide-width: 0px !important;
  --inline-title-margin-bottom: 1rem !important;
  --inline-title-size: 1.2em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(220, -2%, 40%) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl(220, -2%, 40%) !important;
  --interactive-accent: hsl(201, 59%, 61%) !important;
  --interactive-accent-hover: hsl(201, 59%, 55%) !important;
  --interactive-accent-hsl: 201, 59%, 55% !important;
  --interactive-accent-rgb: 66,66,66 !important;
  --interactive-hover: #2d3139 !important;
  --interactive-normal: hsla(220, 8%, 60%, 0.12) !important;
  --interactive-success: #a8c373 !important;
  --kanban-border: 0px !important;
  --leaflet-borders: rgba(255, 255, 255, 0.1) !important;
  --leaflet-buttons: #17191b !important;
  --light: #1c1d1e !important;
  --lightgray: #17191b !important;
  --line-height: 1.5 !important;
  --line-number-color: hsl(220, -2%, 40%) !important;
  --line-number-color-active: hsl(220, -12%, 65%) !important;
  --line-width: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: hsl(201, 59%, 55%) !important;
  --link-color-hover: hsl(201, 59%, 47%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(201, 59%, 55%) !important;
  --link-external-color-hover: hsl(201, 59%, 47%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(201, 59%, 55%) !important;
  --link-unresolved-decoration-color: hsla(201, 59%, 55%, 0.3) !important;
  --list-edit-offset: 0.5em !important;
  --list-indent: 2em !important;
  --list-marker-color: hsl(220, -2%, 40%) !important;
  --list-marker-color-collapsed: hsl(201, 59%, 55%) !important;
  --list-marker-color-hover: hsl(220, -12%, 65%) !important;
  --map-header-padding: 2px !important;
  --map-max-width: none !important;
  --map-width: auto !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: #17191b !important;
  --menu-border-color: #3a404a !important;
  --metadata-border-color: #2d3139 !important;
  --metadata-divider-color: #2d3139 !important;
  --metadata-input-background-active: hsla(220, 8%, 60%, 0.12) !important;
  --metadata-input-font-size: 13.91px !important;
  --metadata-input-text-color: hsl(220, -2%, 87%) !important;
  --metadata-label-background-active: hsla(220, 8%, 60%, 0.12) !important;
  --metadata-label-font-size: 13.91px !important;
  --metadata-label-text-color: hsl(220, -12%, 65%) !important;
  --metadata-label-text-color-hover: hsl(220, -12%, 65%) !important;
  --metadata-label-width: 125.19px !important;
  --metadata-label-width-multiplier: 9 !important;
  --metadata-property-background-active: hsla(220, 8%, 60%, 0.12) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a5058 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3a404a !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --mobile-sidebar-background: #1c1d1e !important;
  --modal-background: #1c1d1e !important;
  --modal-border-color: #3a404a !important;
  --mono0: black !important;
  --mono100: white !important;
  --nav-collapse-icon-color: hsl(220, -12%, 65%) !important;
  --nav-collapse-icon-color-collapsed: hsl(220, -12%, 65%) !important;
  --nav-heading-color: hsl(220, -2%, 87%) !important;
  --nav-heading-color-collapsed: hsl(220, -2%, 40%) !important;
  --nav-heading-color-collapsed-hover: hsl(220, -12%, 65%) !important;
  --nav-heading-color-hover: hsl(220, -2%, 87%) !important;
  --nav-indentation-guide-color: #2d3139 !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-active: hsla(220, 8%, 60%, 0.12) !important;
  --nav-item-background-hover: hsla(220, 8%, 60%, 0.12) !important;
  --nav-item-background-selected: hsla(201, 59%, 55%, 0.15) !important;
  --nav-item-color: hsl(220, -12%, 65%) !important;
  --nav-item-color-active: hsl(220, -2%, 87%) !important;
  --nav-item-color-highlighted: hsl(201, 59%, 55%) !important;
  --nav-item-color-hover: hsl(220, -2%, 87%) !important;
  --nav-item-color-selected: hsl(220, -2%, 87%) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl(220, -2%, 40%) !important;
  --nav-tag-color-active: hsl(220, -12%, 65%) !important;
  --nav-tag-color-hover: hsl(220, -12%, 65%) !important;
  --nested-padding: 1.1em !important;
  --normal-weight: 400 !important;
  --oxygen-tab-text-color: hsl(220, -12%, 65%) !important;
  --oxygen-tab-text-color-active: hsl(220, -2%, 87%) !important;
  --p-spacing: 1.75rem !important;
  --pdf-background: #1c1d1e !important;
  --pdf-dark-opacity: 1 !important;
  --pdf-page-background: #1c1d1e !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: #1c1d1e !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: #2d3139 !important;
  --pill-border-color-hover: #3a404a !important;
  --pill-color: hsl(220, -12%, 65%) !important;
  --pill-color-hover: hsl(220, -2%, 87%) !important;
  --pill-color-remove: hsl(220, -2%, 40%) !important;
  --pill-color-remove-hover: hsl(201, 59%, 55%) !important;
  --progress-complete: hsl(201, 59%, 55%) !important;
  --progress-outline: #2d3139 !important;
  --prompt-background: #1c1d1e !important;
  --prompt-border-color: #4a5058 !important;
  --quote-opening-modifier: #3a404a !important;
  --raised-background: color-mix(in srgb, hsla(220, 8%, 60%, 0.12) 65%, transparent) linear-gradient(hsla(220, 8%, 60%, 0.12), color-mix(in srgb, hsla(220, 8%, 60%, 0.12) 65%, transparent)) !important;
  --ribbon-animation-duration: 0.1s !important;
  --ribbon-background: #1c1d1e !important;
  --ribbon-background-collapsed: #1c1d1e !important;
  --scrollbar-active-thumb-bg: #4a5058 !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: #2d3139 !important;
  --search-clear-button-color: hsl(220, -12%, 65%) !important;
  --search-icon-color: hsl(220, -12%, 65%) !important;
  --search-result-background: #1c1d1e !important;
  --secondary: hsl(201, 59%, 55%) !important;
  --setting-group-heading-color: hsl(220, -2%, 87%) !important;
  --setting-items-background: #17191b !important;
  --setting-items-border-color: #2d3139 !important;
  --shadow-color: rgba(0, 0, 0, 0.3) !important;
  --slider-thumb-border-color: #3a404a !important;
  --slider-track-background: #2d3139 !important;
  --sp1: white !important;
  --status-bar-background: #17191b !important;
  --status-bar-border-color: #2d3139 !important;
  --status-bar-font-size: 11px !important;
  --status-bar-text-color: hsl(220, -12%, 65%) !important;
  --suggestion-background: #1c1d1e !important;
  --sync-avatar-color-1: #d04255 !important;
  --sync-avatar-color-2: #d5763f !important;
  --sync-avatar-color-3: #e5b567 !important;
  --sync-avatar-color-4: #a8c373 !important;
  --sync-avatar-color-5: #73bbb2 !important;
  --sync-avatar-color-6: #6c99bb !important;
  --sync-avatar-color-7: #9e86c8 !important;
  --sync-avatar-color-8: #b05279 !important;
  --tab-background-active: #1c1d1e !important;
  --tab-container-background: #17191b !important;
  --tab-divider-color: #3a404a !important;
  --tab-outline-color: #2d3139 !important;
  --tab-outline-width: 0px !important;
  --tab-switcher-background: #17191b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #17191b, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(201, 59%, 55%) !important;
  --tab-text-color: hsl(220, -2%, 40%) !important;
  --tab-text-color-active: hsl(220, -12%, 65%) !important;
  --tab-text-color-focused: hsl(220, -12%, 65%) !important;
  --tab-text-color-focused-active: hsl(220, -2%, 87%) !important;
  --tab-text-color-focused-active-current: hsl(220, -2%, 87%) !important;
  --tab-text-color-focused-highlighted: hsl(201, 59%, 55%) !important;
  --table-add-button-border-color: #2d3139 !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: #2d3139 !important;
  --table-cell-padding: 4px 10px !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: hsla(201, 50%, 40%, 30%) !important;
  --table-drag-handle-color: hsl(220, -2%, 40%) !important;
  --table-drag-handle-color-active: hsl(201, 59%, 55%) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-edge-cell-padding-first: 0 !important;
  --table-edge-cell-padding-last: 0 !important;
  --table-header-border-color: #2d3139 !important;
  --table-header-border-width: 0 !important;
  --table-header-color: hsl(220, -2%, 87%) !important;
  --table-header-size: 14px !important;
  --table-max-width: none !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: hsla(201, 50%, 40%, 30%) !important;
  --table-selection-border-color: hsl(201, 59%, 55%) !important;
  --table-selection-border-radius: 0px !important;
  --table-selection-border-width: 0px !important;
  --table-text-size: 14px !important;
  --table-white-space: normal !important;
  --table-width: auto !important;
  --table-wrapper-width: fit-content !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: #2d3139 !important;
  --tag-border-color-hover: #3a404a !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl(220, -12%, 65%) !important;
  --tag-color-hover: hsl(220, -2%, 87%) !important;
  --tag-padding-y: 0.2em !important;
  --tag-size: 0.8em !important;
  --tertiary: hsl(201, 59%, 47%) !important;
  --text-accent: hsl(201, 59%, 55%) !important;
  --text-accent-hover: hsl(201, 59%, 47%) !important;
  --text-blockquote: hsl(220, -12%, 65%) !important;
  --text-bold: hsl(220, -2%, 87%) !important;
  --text-code: hsl(220, -2%, 70%) !important;
  --text-error: #d04255 !important;
  --text-error-hover: #d04255 !important;
  --text-faint: hsl(220, -2%, 40%) !important;
  --text-formatting: hsl(220, -2%, 40%) !important;
  --text-highlight-bg: rgba(255, 177, 80, 0.3) !important;
  --text-highlight-bg-active: rgba(255, 255, 255, 0.1) !important;
  --text-italic: hsl(220, -2%, 87%) !important;
  --text-muted: hsl(220, -12%, 65%) !important;
  --text-normal: hsl(220, -2%, 87%) !important;
  --text-selection: hsla(201, 50%, 40%, 30%) !important;
  --text-success: #a8c373 !important;
  --text-warning: #d5763f !important;
  --textHighlight: rgba(255, 177, 80, 0.3) !important;
  --title-color: hsl(220, -2%, 87%) !important;
  --title-color-inactive: hsl(220, -12%, 65%) !important;
  --titlebar-background: #1c1d1e !important;
  --titlebar-background-focused: #17191b !important;
  --titlebar-border-color: #2d3139 !important;
  --titlebar-text-color: hsl(220, -12%, 65%) !important;
  --titlebar-text-color-focused: hsl(220, -2%, 87%) !important;
  --top-left-padding-y: 0px !important;
  --tx1: hsl(220, -2%, 87%) !important;
  --tx2: hsl(220, -12%, 65%) !important;
  --tx3: hsl(220, -2%, 40%) !important;
  --tx4: hsl(220, -2%, 70%) !important;
  --ui1: #2d3139 !important;
  --ui2: #3a404a !important;
  --ui3: #4a5058 !important;
  --vault-profile-color: hsl(220, -2%, 87%) !important;
  --vault-profile-color-hover: hsl(220, -2%, 87%) !important;
  --workspace-background-translucent: hsla(220, 8%, 20%, 0.7) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 25, 27);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(28, 29, 30);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(45, 49, 57);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(23, 25, 27);
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(45, 49, 57);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 27.82px;
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 25, 27);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 25, 27);
  border-left-color: rgb(128, 128, 128);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 29, 30);
  color: rgb(222, 222, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 177, 80, 0.3);
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(97, 173, 214);
  border-color: rgb(97, 173, 214);
}

html[saved-theme="dark"] body p {
  color: rgb(166, 166, 166);
  outline: rgb(166, 166, 166) none 0px;
  text-decoration-color: rgb(166, 166, 166);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(73, 161, 208);
  outline: rgb(73, 161, 208) none 0px;
  text-decoration-color: rgb(73, 161, 208);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(73, 161, 208);
  outline: rgb(73, 161, 208) none 0px;
  text-decoration-color: rgb(73, 161, 208);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(73, 161, 208);
  outline: rgb(73, 161, 208) none 0px;
  text-decoration: rgba(73, 161, 208, 0.3);
  text-decoration-color: rgba(73, 161, 208, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  margin-top: 8px;
  width: 187.438px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-left-width: 0px;
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  color: rgb(222, 222, 222);
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-left-width: 0px;
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  border-top-width: 0px;
  color: rgb(222, 222, 222);
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 181, 103);
  border-left-color: rgb(229, 181, 103);
  border-right-color: rgb(229, 181, 103);
  border-top-color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  margin-left: 0px;
  margin-right: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 222, 222);
  border-radius: 4px;
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 222, 222);
  border-radius: 4px;
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(97, 173, 214);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(213, 118, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(97, 173, 214);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(213, 118, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(213, 118, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(168, 195, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(168, 195, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(158, 134, 200);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 115,187,178;
  background-color: rgba(115, 187, 178, 0.1);
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 158,134,200;
  background-color: rgba(158, 134, 200, 0.1);
  border-bottom-color: rgba(158, 134, 200, 0.25);
  border-left-color: rgba(158, 134, 200, 0.25);
  border-right-color: rgba(158, 134, 200, 0.25);
  border-top-color: rgba(158, 134, 200, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 213,118,63;
  background-color: rgba(213, 118, 63, 0.1);
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 168,195,115;
  background-color: rgba(168, 195, 115, 0.1);
  border-bottom-color: rgba(168, 195, 115, 0.25);
  border-left-color: rgba(168, 195, 115, 0.25);
  border-right-color: rgba(168, 195, 115, 0.25);
  border-top-color: rgba(168, 195, 115, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 115,187,178;
  background-color: rgba(115, 187, 178, 0.1);
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 213,118,63;
  background-color: rgba(213, 118, 63, 0.1);
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
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
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(74, 80, 88);
  border-left-color: rgb(74, 80, 88);
  border-right-color: rgb(74, 80, 88);
  border-top-color: rgb(74, 80, 88);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(145, 150, 161, 0.12);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 80, 88);
  border-left-color: rgb(74, 80, 88);
  border-right-color: rgb(74, 80, 88);
  border-top-color: rgb(74, 80, 88);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(145, 150, 161, 0.12);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(145, 150, 161, 0.12);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(45, 49, 57);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(45, 49, 57);
  border-left-width: 1px;
  border-right-color: rgb(45, 49, 57);
  border-right-width: 1px;
  border-top-color: rgb(45, 49, 57);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body h1 {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h2 {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h3 {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h4 {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h5 {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h6 {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 108,153,187;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(28, 29, 30) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 29, 30);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(45, 49, 57);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(222, 222, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(28, 29, 30);
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-left-width: 0px;
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  border-top-width: 0px;
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(102, 102, 102);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(166, 166, 166);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(166, 166, 166);
  stroke: rgb(166, 166, 166);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(45, 49, 57);
  border-left-color: rgb(45, 49, 57);
  border-right-color: rgb(45, 49, 57);
  border-top-color: rgb(45, 49, 57);
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(28, 29, 30);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body abbr {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(166, 166, 166);
  border-left-color: rgb(166, 166, 166);
  border-right-color: rgb(166, 166, 166);
  border-top-color: rgb(166, 166, 166);
  color: rgb(166, 166, 166);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(23, 25, 27);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(45, 49, 57);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgb(45, 49, 57);
  border-left-width: 1px;
  border-right-color: rgb(45, 49, 57);
  border-right-width: 1px;
  border-top-color: rgb(45, 49, 57);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: rgb(166, 166, 166);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 201 !important;
  --accent-l: 38% !important;
  --accent-s: 59% !important;
  --active-line-bg: rgba(0, 0, 0, 0.035) !important;
  --adaptive-list-edit-offset: 0.5em !important;
  --anim-duration-fast: 160ms !important;
  --anim-duration-moderate: 320ms !important;
  --anim-duration-slow: 640ms !important;
  --anim-duration-superfast: 80ms !important;
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1) !important;
  --anim-motion-playful: cubic-bezier(0.1, 0, 0.1, 1.25) !important;
  --anim-speed-modifier: 1 !important;
  --ax1: hsl(201, 59%, 38%) !important;
  --ax2: hsl(201, 59%, 30%) !important;
  --ax3: hsl(201, 59%, 44%) !important;
  --background-modifier-accent: hsl(201, 59%, 44%) !important;
  --background-modifier-active-hover: rgba(0, 0, 0, 0.12) !important;
  --background-modifier-border: #e3e8ef !important;
  --background-modifier-border-focus: #c4cdd8 !important;
  --background-modifier-border-hover: #d4dce6 !important;
  --background-modifier-box-shadow: #c4cdd8 !important;
  --background-modifier-cover: hsla(210, -55%, 78%, 0.5) !important;
  --background-modifier-error: rgba(255, 0, 0, 0.14) !important;
  --background-modifier-error-hover: rgba(255, 0, 0, 0.08) !important;
  --background-modifier-error-rgb: 208,66,85 !important;
  --background-modifier-form-field-highlighted: #ffffff !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.12) !important;
  --background-modifier-success: #a8c373 !important;
  --background-modifier-success-rgb: 168,195,115 !important;
  --background-primary-alt: #f7f8fa !important;
  --background-secondary: #f7f8fa !important;
  --background-secondary-alt: #ffffff !important;
  --background-table-rows: #f7f8fa !important;
  --base-h: 210 !important;
  --base-l: 98% !important;
  --base-s: 15% !important;
  --bases-cards-cover-background: #f7f8fa !important;
  --bases-cards-shadow: 0 0 0 1px #e3e8ef !important;
  --bases-cards-shadow-hover: 0 0 0 1px #d4dce6 !important;
  --bases-embed-border-color: #e3e8ef !important;
  --bases-group-heading-property-color: #5f6b7a !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: #e3e8ef !important;
  --bases-table-cell-background-disabled: #f7f8fa !important;
  --bases-table-cell-background-selected: hsla(201, 50%, 78%, 30%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #c4cdd8 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(201, 59%, 44%) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-font-size: 14px !important;
  --bases-table-group-background: #f7f8fa !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.12) !important;
  --bases-table-header-color: #5f6b7a !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.12) !important;
  --bg1: #ffffff !important;
  --bg2: #f7f8fa !important;
  --bg3: rgba(0, 0, 0, 0.12) !important;
  --blockquote-border-color: #d4dce6 !important;
  --blockquote-border-thickness: 1px !important;
  --blockquote-color: #5f6b7a !important;
  --blockquote-style: normal !important;
  --btn-shadow-color: rgba(0, 0, 0, 0.05) !important;
  --calendar-dot-active: #a0aab8 !important;
  --calendar-dot-today: hsl(201, 59%, 38%) !important;
  --callout-bug: 208,66,85;
  --callout-default: 108,153,187;
  --callout-error: 208,66,85;
  --callout-example: 158,134,200;
  --callout-fail: 208,66,85;
  --callout-important: 115,187,178;
  --callout-info: 108,153,187;
  --callout-question: 213,118,63;
  --callout-success: 168,195,115;
  --callout-summary: 115,187,178;
  --callout-tip: 115,187,178;
  --callout-todo: 108,153,187;
  --callout-warning: 213,118,63;
  --canvas-card-label-color: #a0aab8 !important;
  --canvas-color-1: 208,66,85 !important;
  --canvas-color-2: 213,118,63 !important;
  --canvas-color-3: 229,181,103 !important;
  --canvas-color-4: 168,195,115 !important;
  --canvas-color-5: 115,187,178 !important;
  --canvas-color-6: 158,134,200 !important;
  --canvas-dot-pattern: #d4dce6 !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-background-hover: transparent !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: #1a1d23 !important;
  --chart-color-1: #6c99bb !important;
  --chart-color-2: #d04255 !important;
  --chart-color-3: #e5b567 !important;
  --chart-color-4: #a8c373 !important;
  --chart-color-5: #d5763f !important;
  --chart-color-6: #9e86c8 !important;
  --chart-color-7: #73bbb2 !important;
  --chart-color-8: #b05279 !important;
  --chart-max-width: none !important;
  --chart-width: auto !important;
  --checkbox-border-color: #a0aab8 !important;
  --checkbox-border-color-hover: #5f6b7a !important;
  --checkbox-color: hsl(201, 59%, 44%) !important;
  --checkbox-color-hover: hsl(201, 59%, 38%) !important;
  --checkbox-left: 0px !important;
  --checkbox-margin: 0px 6px 0px -2em !important;
  --checkbox-radius: 50% !important;
  --checkbox-top: 2px !important;
  --checklist-done-color: #1a1d23 !important;
  --checklist-done-decoration: none !important;
  --code-background: #f7f8fa !important;
  --code-border-color: #e3e8ef !important;
  --code-bracket-background: rgba(0, 0, 0, 0.12) !important;
  --code-comment: #a0aab8 !important;
  --code-function: #e5b567 !important;
  --code-important: #d5763f !important;
  --code-keyword: #b05279 !important;
  --code-normal: #1a1d23 !important;
  --code-operator: #d04255 !important;
  --code-property: #73bbb2 !important;
  --code-punctuation: #5f6b7a !important;
  --code-string: #a8c373 !important;
  --code-tag: #d04255 !important;
  --code-value: #9e86c8 !important;
  --collapse-icon-color: #a0aab8 !important;
  --collapse-icon-color-collapsed: hsl(201, 59%, 38%) !important;
  --color-accent: hsl(201, 59%, 38%) !important;
  --color-accent-1: hsl(200, 59.59%, 40.85%) !important;
  --color-accent-2: hsl(198, 60.18%, 43.7%) !important;
  --color-accent-hsl: 201, 59%, 38% !important;
  --color-blue: #6c99bb !important;
  --color-blue-rgb: 108,153,187 !important;
  --color-cyan: #73bbb2 !important;
  --color-cyan-rgb: 115,187,178 !important;
  --color-green: #a8c373 !important;
  --color-green-rgb: 168,195,115 !important;
  --color-orange: #d5763f !important;
  --color-orange-rgb: 213,118,63 !important;
  --color-pink: #b05279 !important;
  --color-pink-rgb: 176,82,121 !important;
  --color-purple: #9e86c8 !important;
  --color-purple-rgb: 158,134,200 !important;
  --color-red: #d04255 !important;
  --color-red-rgb: 208,66,85 !important;
  --color-yellow: #e5b567 !important;
  --color-yellow-rgb: 229,181,103 !important;
  --container-chart-max-width: 88% !important;
  --container-chart-width: 40rem !important;
  --container-dataview-table-width: 40rem !important;
  --container-iframe-max-width: 88% !important;
  --container-iframe-width: 40rem !important;
  --container-img-max-width: 88% !important;
  --container-img-width: 40rem !important;
  --container-map-max-width: 88% !important;
  --container-map-width: 40rem !important;
  --container-table-margin: calc(max( calc(50% - 40rem/2), calc(50% - 88%/2) ) - 16px) !important;
  --container-table-max-width: 88% !important;
  --container-table-width: calc(40rem + 32px) !important;
  --content-line-width: min(40rem, 88%) !important;
  --content-margin: auto !important;
  --content-margin-start: max( calc(50% - 20rem), 6% ) !important;
  --dark: #1a1d23 !important;
  --darkgray: #1a1d23 !important;
  --divider-color: #e3e8ef !important;
  --divider-color-hover: hsl(201, 59%, 44%) !important;
  --dropdown-background-hover: #e3e8ef !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsl(201, 59%, 44%) !important;
  --embed-decoration-color: #d4dce6 !important;
  --embed-decoration-style: solid !important;
  --embed-max-height: none !important;
  --file-margins: 8px 48px !important;
  --flair-color: #1a1d23 !important;
  --focus-animation-duration: 0.1s !important;
  --folding-offset: 32px !important;
  --font-adaptive-normal: 16px !important;
  --font-adaptive-small: 13.91px !important;
  --font-adaptive-smaller: 13px !important;
  --font-adaptive-smallest: 11px !important;
  --font-code: 14.4px !important;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: #e3e8ef !important;
  --footnote-id-color: #5f6b7a !important;
  --footnote-id-color-no-occurrences: #a0aab8 !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.12) !important;
  --frame-background: hsl( 201, 59%, 68%) !important;
  --frame-background-h: 201 !important;
  --frame-background-l: 68% !important;
  --frame-background-s: 59% !important;
  --frame-divider-color: #e3e8ef !important;
  --frame-icon-color: hsl( 201, 49%, 33%) !important;
  --frame-muted-color: hsl( 201, 49%, 33%) !important;
  --frame-outline-color: hsla( 201, 59%, 61.5%, 1 ) !important;
  --graph-node: #5f6b7a !important;
  --graph-node-attachment: #e5b567 !important;
  --graph-node-focused: hsl(201, 59%, 38%) !important;
  --graph-node-tag: #a8c373 !important;
  --graph-node-unresolved: #a0aab8 !important;
  --graph-text: #1a1d23 !important;
  --gray: #5f6b7a !important;
  --h1-size: 1.2em !important;
  --h1-weight: 600 !important;
  --h1l: #e3e8ef !important;
  --h2-size: 1.1em !important;
  --h2-weight: 600 !important;
  --h2l: #e3e8ef !important;
  --h3-size: 1.05em !important;
  --h3-weight: 500 !important;
  --h3l: #e3e8ef !important;
  --h4-size: 1em !important;
  --h4-weight: 500 !important;
  --h4l: #e3e8ef !important;
  --h5-size: 0.95em !important;
  --h5-variant: small-caps !important;
  --h5-weight: 500 !important;
  --h5l: #e3e8ef !important;
  --h6-size: 0.95em !important;
  --h6-variant: small-caps !important;
  --h6-weight: 400 !important;
  --h6l: #e3e8ef !important;
  --heading-formatting: #a0aab8 !important;
  --heading-spacing: 2em !important;
  --hider-ribbon-display: none !important;
  --highlight: rgba(255, 225, 0, 0.5) !important;
  --hl1: hsla(201, 50%, 78%, 30%) !important;
  --hl2: rgba(255, 225, 0, 0.5) !important;
  --hr-color: #e3e8ef !important;
  --icon-color: #5f6b7a !important;
  --icon-color-active: #1a1d23 !important;
  --icon-color-focused: #1a1d23 !important;
  --icon-color-hover: #5f6b7a !important;
  --icon-hex: white !important;
  --icon-muted: 0.5 !important;
  --iframe-max-width: none !important;
  --iframe-width: auto !important;
  --image-grid-background: transparent !important;
  --image-grid-fit: cover !important;
  --image-mix: normal !important;
  --image-muted: 0.7 !important;
  --image-radius: 4px !important;
  --img-grid-gap: 0.5rem !important;
  --img-line-width: min(40rem, 88%) !important;
  --img-margin-start: max( calc(50% - 20rem), 6% ) !important;
  --img-max-width: 100% !important;
  --img-width: auto !important;
  --indentation-guide-width: 0px !important;
  --inline-title-margin-bottom: 1rem !important;
  --inline-title-size: 1.2em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #a0aab8 !important;
  --input-height: 32px !important;
  --input-placeholder-color: #a0aab8 !important;
  --interactive-accent: hsl(201, 59%, 44%) !important;
  --interactive-accent-hover: hsl(201, 59%, 38%) !important;
  --interactive-accent-hsl: 201, 59%, 38% !important;
  --interactive-accent-rgb: 220,220,220 !important;
  --interactive-hover: #e3e8ef !important;
  --interactive-success: #a8c373 !important;
  --leaflet-borders: rgba(0, 0, 0, 0.1) !important;
  --leaflet-buttons: #ffffff !important;
  --light: #f7f8fa !important;
  --lightgray: #f7f8fa !important;
  --line-height: 1.5 !important;
  --line-number-color: #a0aab8 !important;
  --line-number-color-active: #5f6b7a !important;
  --line-width: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: hsl(201, 59%, 38%) !important;
  --link-color-hover: hsl(201, 59%, 30%) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(201, 59%, 38%) !important;
  --link-external-color-hover: hsl(201, 59%, 30%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(201, 59%, 38%) !important;
  --link-unresolved-decoration-color: hsla(201, 59%, 38%, 0.3) !important;
  --list-edit-offset: 0.5em !important;
  --list-indent: 2em !important;
  --list-marker-color: #a0aab8 !important;
  --list-marker-color-collapsed: hsl(201, 59%, 38%) !important;
  --list-marker-color-hover: #5f6b7a !important;
  --map-header-padding: 2px !important;
  --map-max-width: none !important;
  --map-width: auto !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: #f7f8fa !important;
  --menu-border-color: #d4dce6 !important;
  --metadata-border-color: #e3e8ef !important;
  --metadata-divider-color: #e3e8ef !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.12) !important;
  --metadata-input-font-size: 13.91px !important;
  --metadata-input-text-color: #1a1d23 !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.12) !important;
  --metadata-label-font-size: 13.91px !important;
  --metadata-label-text-color: #5f6b7a !important;
  --metadata-label-text-color-hover: #5f6b7a !important;
  --metadata-label-width: 125.19px !important;
  --metadata-label-width-multiplier: 9 !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.12) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c4cdd8 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #d4dce6 !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --mobile-sidebar-background: #ffffff !important;
  --mono0: white !important;
  --mono100: black !important;
  --nav-collapse-icon-color: #5f6b7a !important;
  --nav-collapse-icon-color-collapsed: #5f6b7a !important;
  --nav-heading-color: #1a1d23 !important;
  --nav-heading-color-collapsed: #a0aab8 !important;
  --nav-heading-color-collapsed-hover: #5f6b7a !important;
  --nav-heading-color-hover: #1a1d23 !important;
  --nav-indentation-guide-color: #e3e8ef !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.12) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.12) !important;
  --nav-item-background-selected: hsla(201, 59%, 38%, 0.15) !important;
  --nav-item-color: #5f6b7a !important;
  --nav-item-color-active: #1a1d23 !important;
  --nav-item-color-highlighted: hsl(201, 59%, 38%) !important;
  --nav-item-color-hover: #1a1d23 !important;
  --nav-item-color-selected: #1a1d23 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #a0aab8 !important;
  --nav-tag-color-active: #5f6b7a !important;
  --nav-tag-color-hover: #5f6b7a !important;
  --nested-padding: 1.1em !important;
  --normal-weight: 400 !important;
  --oxygen-tab-text-color: #5f6b7a !important;
  --oxygen-tab-text-color-active: #1a1d23 !important;
  --p-spacing: 1.75rem !important;
  --pdf-dark-opacity: 1 !important;
  --pdf-shadow: none !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: #e3e8ef !important;
  --pill-border-color-hover: #d4dce6 !important;
  --pill-color: #5f6b7a !important;
  --pill-color-hover: #1a1d23 !important;
  --pill-color-remove: #a0aab8 !important;
  --pill-color-remove-hover: hsl(201, 59%, 38%) !important;
  --progress-complete: hsl(201, 59%, 38%) !important;
  --progress-outline: #e3e8ef !important;
  --prompt-border-color: #c4cdd8 !important;
  --quote-opening-modifier: #d4dce6 !important;
  --ribbon-animation-duration: 0.1s !important;
  --ribbon-background: #ffffff !important;
  --scrollbar-active-thumb-bg: #c4cdd8 !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: #e3e8ef !important;
  --search-clear-button-color: #5f6b7a !important;
  --search-icon-color: #5f6b7a !important;
  --secondary: hsl(201, 59%, 38%) !important;
  --setting-group-heading-color: #1a1d23 !important;
  --setting-items-background: #f7f8fa !important;
  --setting-items-border-color: #e3e8ef !important;
  --shadow-color: rgba(0, 0, 0, 0.1) !important;
  --slider-thumb-border-color: #d4dce6 !important;
  --slider-track-background: #e3e8ef !important;
  --sp1: white !important;
  --status-bar-background: #f7f8fa !important;
  --status-bar-border-color: #e3e8ef !important;
  --status-bar-font-size: 11px !important;
  --status-bar-text-color: #5f6b7a !important;
  --sync-avatar-color-1: #d04255 !important;
  --sync-avatar-color-2: #d5763f !important;
  --sync-avatar-color-3: #e5b567 !important;
  --sync-avatar-color-4: #a8c373 !important;
  --sync-avatar-color-5: #73bbb2 !important;
  --sync-avatar-color-6: #6c99bb !important;
  --sync-avatar-color-7: #9e86c8 !important;
  --sync-avatar-color-8: #b05279 !important;
  --tab-container-background: #f7f8fa !important;
  --tab-divider-color: #d4dce6 !important;
  --tab-outline-color: #e3e8ef !important;
  --tab-outline-width: 0px !important;
  --tab-switcher-background: #f7f8fa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f7f8fa, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(201, 59%, 38%) !important;
  --tab-text-color: #a0aab8 !important;
  --tab-text-color-active: #5f6b7a !important;
  --tab-text-color-focused: #5f6b7a !important;
  --tab-text-color-focused-active: #1a1d23 !important;
  --tab-text-color-focused-active-current: #1a1d23 !important;
  --tab-text-color-focused-highlighted: hsl(201, 59%, 38%) !important;
  --table-add-button-border-color: #e3e8ef !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: #e3e8ef !important;
  --table-cell-padding: 4px 10px !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: hsla(201, 50%, 78%, 30%) !important;
  --table-drag-handle-color: #a0aab8 !important;
  --table-drag-handle-color-active: hsl(201, 59%, 38%) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-edge-cell-padding-first: 0 !important;
  --table-edge-cell-padding-last: 0 !important;
  --table-header-border-color: #e3e8ef !important;
  --table-header-border-width: 0 !important;
  --table-header-color: #1a1d23 !important;
  --table-header-size: 14px !important;
  --table-max-width: none !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: hsla(201, 50%, 78%, 30%) !important;
  --table-selection-border-color: hsl(201, 59%, 38%) !important;
  --table-selection-border-radius: 0px !important;
  --table-selection-border-width: 0px !important;
  --table-text-size: 14px !important;
  --table-white-space: normal !important;
  --table-width: auto !important;
  --table-wrapper-width: fit-content !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: #e3e8ef !important;
  --tag-border-color-hover: #d4dce6 !important;
  --tag-border-width: 1px !important;
  --tag-color: #5f6b7a !important;
  --tag-color-hover: #1a1d23 !important;
  --tag-padding-y: 0.2em !important;
  --tag-size: 0.8em !important;
  --tertiary: hsl(201, 59%, 30%) !important;
  --text-accent: hsl(201, 59%, 38%) !important;
  --text-accent-hover: hsl(201, 59%, 30%) !important;
  --text-blockquote: #5f6b7a !important;
  --text-bold: #1a1d23 !important;
  --text-code: #495663 !important;
  --text-error: #d04255 !important;
  --text-error-hover: #d04255 !important;
  --text-faint: #a0aab8 !important;
  --text-formatting: #a0aab8 !important;
  --text-highlight-bg: rgba(255, 225, 0, 0.5) !important;
  --text-highlight-bg-active: rgba(0, 0, 0, 0.1) !important;
  --text-italic: #1a1d23 !important;
  --text-muted: #5f6b7a !important;
  --text-normal: #1a1d23 !important;
  --text-selection: hsla(201, 50%, 78%, 30%) !important;
  --text-success: #a8c373 !important;
  --text-warning: #d5763f !important;
  --textHighlight: rgba(255, 225, 0, 0.5) !important;
  --title-color: #1a1d23 !important;
  --title-color-inactive: #5f6b7a !important;
  --titlebar-background: #ffffff !important;
  --titlebar-background-focused: #f7f8fa !important;
  --titlebar-border-color: #e3e8ef !important;
  --titlebar-text-color: #5f6b7a !important;
  --titlebar-text-color-focused: #1a1d23 !important;
  --top-left-padding-y: 0px !important;
  --tx1: #1a1d23 !important;
  --tx2: #5f6b7a !important;
  --tx3: #a0aab8 !important;
  --tx4: #495663 !important;
  --ui1: #e3e8ef !important;
  --ui2: #d4dce6 !important;
  --ui3: #c4cdd8 !important;
  --vault-profile-color: #1a1d23 !important;
  --vault-profile-color-hover: #1a1d23 !important;
  --workspace-background-translucent: hsla(210, 15%, 98%, 0.7) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 248, 250);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(227, 232, 239);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(227, 232, 239);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 27.82px;
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 248, 250);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 248, 250);
  border-left-color: rgb(128, 128, 128);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(26, 29, 35);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 225, 0, 0.5);
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body del {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(160, 170, 184);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(46, 132, 178);
  border-color: rgb(46, 132, 178);
}

html[saved-theme="light"] body p {
  color: rgb(95, 107, 122);
  outline: rgb(95, 107, 122) none 0px;
  text-decoration-color: rgb(95, 107, 122);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(40, 114, 154);
  outline: rgb(40, 114, 154) none 0px;
  text-decoration-color: rgb(40, 114, 154);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(40, 114, 154);
  outline: rgb(40, 114, 154) none 0px;
  text-decoration-color: rgb(40, 114, 154);
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(40, 114, 154);
  outline: rgb(40, 114, 154) none 0px;
  text-decoration: rgba(40, 114, 154, 0.3);
  text-decoration-color: rgba(40, 114, 154, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(160, 170, 184);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
  margin-top: 8px;
  width: 187.438px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-left-width: 0px;
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  color: rgb(26, 29, 35);
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-left-width: 0px;
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  border-top-width: 0px;
  color: rgb(26, 29, 35);
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(229, 181, 103);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 181, 103);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 181, 103);
  border-left-color: rgb(229, 181, 103);
  border-right-color: rgb(229, 181, 103);
  border-top-color: rgb(229, 181, 103);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  margin-left: 0px;
  margin-right: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 29, 35);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 29, 35);
  border-radius: 4px;
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 29, 35);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 29, 35);
  border-radius: 4px;
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(46, 132, 178);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(160, 170, 184);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(160, 170, 184);
  border-right-color: rgb(160, 170, 184);
  border-top-color: rgb(160, 170, 184);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 170, 184);
  text-decoration: line-through 1px rgb(160, 170, 184);
  text-decoration-color: rgb(160, 170, 184);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 29, 35);
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(160, 170, 184);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(213, 118, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(229, 181, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(46, 132, 178);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(160, 170, 184);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(160, 170, 184);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(213, 118, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(213, 118, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(208, 66, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(208, 66, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(229, 181, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(229, 181, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(208, 66, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(168, 195, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(168, 195, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(158, 134, 200);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
  color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 115,187,178;
  background-color: rgba(115, 187, 178, 0.1);
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 158,134,200;
  background-color: rgba(158, 134, 200, 0.1);
  border-bottom-color: rgba(158, 134, 200, 0.25);
  border-left-color: rgba(158, 134, 200, 0.25);
  border-right-color: rgba(158, 134, 200, 0.25);
  border-top-color: rgba(158, 134, 200, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 208,66,85;
  background-color: rgba(208, 66, 85, 0.1);
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 213,118,63;
  background-color: rgba(213, 118, 63, 0.1);
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 168,195,115;
  background-color: rgba(168, 195, 115, 0.1);
  border-bottom-color: rgba(168, 195, 115, 0.25);
  border-left-color: rgba(168, 195, 115, 0.25);
  border-right-color: rgba(168, 195, 115, 0.25);
  border-top-color: rgba(168, 195, 115, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 115,187,178;
  background-color: rgba(115, 187, 178, 0.1);
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 108,153,187;
  background-color: rgba(108, 153, 187, 0.1);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 213,118,63;
  background-color: rgba(213, 118, 63, 0.1);
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
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
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(196, 205, 216);
  border-left-color: rgb(196, 205, 216);
  border-right-color: rgb(196, 205, 216);
  border-top-color: rgb(196, 205, 216);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 29, 35);
  outline: rgb(26, 29, 35) none 0px;
  text-decoration-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(196, 205, 216);
  border-left-color: rgb(196, 205, 216);
  border-right-color: rgb(196, 205, 216);
  border-top-color: rgb(196, 205, 216);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.12);
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.12);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(227, 232, 239);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(227, 232, 239);
  border-left-width: 1px;
  border-right-color: rgb(227, 232, 239);
  border-right-width: 1px;
  border-top-color: rgb(227, 232, 239);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body h1 {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body h2 {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body h3 {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body h4 {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body h5 {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body h6 {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 108,153,187;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(227, 232, 239);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 29, 35);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-left-width: 0px;
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  border-top-width: 0px;
  color: rgb(160, 170, 184);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(160, 170, 184);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 107, 122);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(95, 107, 122);
  stroke: rgb(95, 107, 122);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(160, 170, 184);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(227, 232, 239);
  border-left-color: rgb(227, 232, 239);
  border-right-color: rgb(227, 232, 239);
  border-top-color: rgb(227, 232, 239);
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(95, 107, 122);
  border-left-color: rgb(95, 107, 122);
  border-right-color: rgb(95, 107, 122);
  border-top-color: rgb(95, 107, 122);
  color: rgb(95, 107, 122);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(247, 248, 250);
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 29, 35);
  border-left-color: rgb(26, 29, 35);
  border-right-color: rgb(26, 29, 35);
  border-top-color: rgb(26, 29, 35);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 29, 35);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(227, 232, 239);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgb(227, 232, 239);
  border-left-width: 1px;
  border-right-color: rgb(227, 232, 239);
  border-right-width: 1px;
  border-top-color: rgb(227, 232, 239);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: rgb(95, 107, 122);
}`,
  },
};
