import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 201 !important;
  --accent-l: 60% !important;
  --accent-s: 17% !important;
  --active-line-bg: rgba(255, 255, 255, 0.04) !important;
  --adaptive-list-edit-offset: 0.5em !important;
  --ax1: hsl( 201, 17%, 60% ) !important;
  --ax2: hsl( 201, 17%, 68% ) !important;
  --ax3: hsl( 201, 17%, 55% ) !important;
  --background-modifier-accent: hsl( 201, 17%, 55% ) !important;
  --background-modifier-active-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --background-modifier-border: hsl( 0, 0%, 21% ) !important;
  --background-modifier-border-focus: hsl( 0, 0%, 35% ) !important;
  --background-modifier-border-hover: hsl( 0, 0%, 27% ) !important;
  --background-modifier-cover: hsla(0,0%, 3%, 0.5) !important;
  --background-modifier-error: rgba(255, 20, 20, 0.12) !important;
  --background-modifier-error-hover: rgba(255, 20, 20, 0.18) !important;
  --background-modifier-error-rgb: 208,66,85 !important;
  --background-modifier-form-field: hsl( 0, 0%, 15% ) !important;
  --background-modifier-form-field-highlighted: hsl( 0, 0%, 15% ) !important;
  --background-modifier-form-field-hover: hsl( 0, 0%, 15% ) !important;
  --background-modifier-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --background-modifier-success: #a8c373 !important;
  --background-modifier-success-rgb: 168,195,115 !important;
  --background-primary: hsl( 0, 0%, 15% ) !important;
  --background-primary-alt: hsl( 0, 0%, 13% ) !important;
  --background-secondary: hsl( 0, 0%, 13% ) !important;
  --background-secondary-alt: hsl( 0, 0%, 15% ) !important;
  --background-table-rows: hsl( 0, 0%, 13% ) !important;
  --base-h: 0 !important;
  --base-l: 15% !important;
  --base-s: 0% !important;
  --bases-cards-background: hsl( 0, 0%, 15% ) !important;
  --bases-cards-cover-background: hsl( 0, 0%, 13% ) !important;
  --bases-cards-shadow: 0 0 0 1px hsl( 0, 0%, 21% ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl( 0, 0%, 27% ) !important;
  --bases-embed-border-color: hsl( 0, 0%, 21% ) !important;
  --bases-group-heading-property-color: hsl( 0, -20%, 60% ) !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: hsl( 0, 0%, 21% ) !important;
  --bases-table-cell-background-active: hsl( 0, 0%, 15% ) !important;
  --bases-table-cell-background-disabled: hsl( 0, 0%, 13% ) !important;
  --bases-table-cell-background-selected: hsla( 201, 50%, 40%, 30% ) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl( 0, 0%, 35% ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl( 201, 17%, 55% ) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-font-size: 14px !important;
  --bases-table-group-background: hsl( 0, 0%, 13% ) !important;
  --bases-table-header-background: hsl( 0, 0%, 15% ) !important;
  --bases-table-header-background-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --bases-table-header-color: hsl( 0, -20%, 60% ) !important;
  --bases-table-summary-background: hsl( 0, 0%, 15% ) !important;
  --bases-table-summary-background-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --bg1: hsl( 0, 0%, 15% ) !important;
  --bg2: hsl( 0, 0%, 13% ) !important;
  --bg3: hsla( 0, 0%, 55%, 0.12 ) !important;
  --blockquote-border-color: hsl( 0, 0%, 27% ) !important;
  --blockquote-border-thickness: 1px !important;
  --blockquote-color: hsl( 0, -20%, 60% ) !important;
  --blockquote-style: normal !important;
  --blur-background: color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent) linear-gradient(hsla( 0, 0%, 55%, 0.12 ), color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent)) !important;
  --btn-shadow-color: rgba(0, 0, 0, 0.2) !important;
  --calendar-dot-active: hsl( 0, -10%, 35% ) !important;
  --calendar-dot-today: hsl( 201, 17%, 60% ) !important;
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
  --canvas-background: hsl( 0, 0%, 15% ) !important;
  --canvas-card-label-color: hsl( 0, -10%, 35% ) !important;
  --canvas-color-1: 208,66,85 !important;
  --canvas-color-2: 213,118,63 !important;
  --canvas-color-3: 229,181,103 !important;
  --canvas-color-4: 168,195,115 !important;
  --canvas-color-5: 115,187,178 !important;
  --canvas-color-6: 158,134,200 !important;
  --canvas-dot-pattern: hsl( 0, 0%, 27% ) !important;
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
  --caret-color: hsl( 0, -10%, 82% ) !important;
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
  --checkbox-border-color: hsl( 0, -10%, 35% ) !important;
  --checkbox-border-color-hover: hsl( 0, -20%, 60% ) !important;
  --checkbox-color: hsl( 201, 17%, 55% ) !important;
  --checkbox-color-hover: hsl( 201, 17%, 60% ) !important;
  --checkbox-left: 0px !important;
  --checkbox-margin: 0px 6px 0px -2em !important;
  --checkbox-marker-color: hsl( 0, 0%, 15% ) !important;
  --checkbox-radius: 50% !important;
  --checkbox-top: 2px !important;
  --checklist-done-color: hsl( 0, -10%, 82% ) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl( 0, 0%, 13% ) !important;
  --code-border-color: hsl( 0, 0%, 21% ) !important;
  --code-bracket-background: hsla( 0, 0%, 55%, 0.12 ) !important;
  --code-comment: hsl( 0, -10%, 35% ) !important;
  --code-function: #e5b567 !important;
  --code-important: #d5763f !important;
  --code-keyword: #b05279 !important;
  --code-normal: hsl( 0, -10%, 82% ) !important;
  --code-operator: #d04255 !important;
  --code-property: #73bbb2 !important;
  --code-punctuation: hsl( 0, -20%, 60% ) !important;
  --code-string: #a8c373 !important;
  --code-tag: #d04255 !important;
  --code-value: #9e86c8 !important;
  --collapse-icon-color: hsl( 0, -10%, 35% ) !important;
  --collapse-icon-color-collapsed: hsl( 201, 17%, 60% ) !important;
  --color-accent: hsl(201, 17%, 60%) !important;
  --color-accent-1: hsl(198, 17.34%, 69%) !important;
  --color-accent-2: hsl(196, 17.85%, 77.4%) !important;
  --color-accent-hsl: 201, 17%, 60% !important;
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
  --dark: hsl( 0, -10%, 82% ) !important;
  --darkgray: hsl( 0, -10%, 82% ) !important;
  --divider-color: hsl( 0, 0%, 21% ) !important;
  --divider-color-hover: hsl( 201, 17%, 55% ) !important;
  --dropdown-background: hsla( 0, 0%, 55%, 0.12 ) !important;
  --dropdown-background-hover: hsl( 0, 0%, 21% ) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsl( 201, 17%, 55% ) !important;
  --embed-decoration-color: hsl( 0, 0%, 27% ) !important;
  --embed-decoration-style: solid !important;
  --embed-max-height: none !important;
  --file-header-background: hsl( 0, 0%, 15% ) !important;
  --file-header-background-focused: hsl( 0, 0%, 15% ) !important;
  --file-margins: 8px 32px !important;
  --file-margins-y: 8px !important;
  --flair-background: hsla( 0, 0%, 55%, 0.12 ) !important;
  --flair-color: hsl( 0, -10%, 82% ) !important;
  --focus-animation-duration: 0.1s !important;
  --folding-offset: 32px !important;
  --font-adaptive-normal: 16px !important;
  --font-adaptive-small: 13.91px !important;
  --font-adaptive-smaller: 13px !important;
  --font-adaptive-smallest: 11px !important;
  --font-code: 14.4px !important;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: hsl( 0, 0%, 21% ) !important;
  --footnote-id-color: hsl( 0, -20%, 60% ) !important;
  --footnote-id-color-no-occurrences: hsl( 0, -10%, 35% ) !important;
  --footnote-input-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --frame-background: hsl( 201, 17%, 35%) !important;
  --frame-background-h: 201 !important;
  --frame-background-l: 35% !important;
  --frame-background-s: 17% !important;
  --frame-divider-color: hsl( 0, 0%, 21% ) !important;
  --frame-icon-color: hsl( 201, 7%, 60%) !important;
  --frame-muted-color: hsl( 201, 7%, 60%) !important;
  --frame-outline-color: hsla( 201, 15%, 41.5%, 1 ) !important;
  --graph-node: hsl( 0, -20%, 60% ) !important;
  --graph-node-attachment: #e5b567 !important;
  --graph-node-focused: hsl( 201, 17%, 60% ) !important;
  --graph-node-tag: #a8c373 !important;
  --graph-node-unresolved: hsl( 0, -10%, 35% ) !important;
  --graph-text: hsl( 0, -10%, 82% ) !important;
  --gray: hsl( 0, -20%, 60% ) !important;
  --h1-size: 1.125em !important;
  --h1-weight: 600 !important;
  --h1l: hsl( 0, 0%, 21% ) !important;
  --h2-size: 1.05em !important;
  --h2-weight: 600 !important;
  --h2l: hsl( 0, 0%, 21% ) !important;
  --h3-size: 1em !important;
  --h3-weight: 500 !important;
  --h3l: hsl( 0, 0%, 21% ) !important;
  --h4-size: 0.90em !important;
  --h4-weight: 500 !important;
  --h4l: hsl( 0, 0%, 21% ) !important;
  --h5-size: 0.85em !important;
  --h5-variant: small-caps !important;
  --h5-weight: 500 !important;
  --h5l: hsl( 0, 0%, 21% ) !important;
  --h6-size: 0.85em !important;
  --h6-variant: small-caps !important;
  --h6-weight: 400 !important;
  --h6l: hsl( 0, 0%, 21% ) !important;
  --heading-formatting: hsl( 0, -10%, 35% ) !important;
  --heading-spacing: 2em !important;
  --hider-ribbon-display: none !important;
  --highlight: rgba(255, 177, 80, 0.3) !important;
  --hl1: hsla( 201, 50%, 40%, 30% ) !important;
  --hl2: rgba(255, 177, 80, 0.3) !important;
  --hr-color: hsl( 0, 0%, 21% ) !important;
  --icon-color: hsl( 0, -20%, 60% ) !important;
  --icon-color-active: hsl( 0, -10%, 82% ) !important;
  --icon-color-focused: hsl( 0, -10%, 82% ) !important;
  --icon-color-hover: hsl( 0, -20%, 60% ) !important;
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
  --inline-title-margin-bottom: 1rem !important;
  --inline-title-size: 1.125em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl( 0, -10%, 35% ) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl( 0, -10%, 35% ) !important;
  --interactive-accent: hsl( 201, 17%, 55% ) !important;
  --interactive-accent-hover: hsl( 201, 17%, 60% ) !important;
  --interactive-accent-hsl: 201, 17%, 60% !important;
  --interactive-accent-rgb: 66,66,66 !important;
  --interactive-hover: hsl( 0, 0%, 21% ) !important;
  --interactive-normal: hsla( 0, 0%, 55%, 0.12 ) !important;
  --kanban-border: 0px !important;
  --leaflet-borders: rgba(255, 255, 255, 0.1) !important;
  --leaflet-buttons: hsl( 0, 0%, 13% ) !important;
  --light: hsl( 0, 0%, 15% ) !important;
  --lightgray: hsl( 0, 0%, 13% ) !important;
  --line-height: 1.5 !important;
  --line-number-color: hsl( 0, -10%, 35% ) !important;
  --line-number-color-active: hsl( 0, -20%, 60% ) !important;
  --line-width: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: hsl( 201, 17%, 60% ) !important;
  --link-color-hover: hsl( 201, 17%, 68% ) !important;
  --link-decoration: none !important;
  --link-external-color: hsl( 201, 17%, 60% ) !important;
  --link-external-color-hover: hsl( 201, 17%, 68% ) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl( 201, 17%, 60% ) !important;
  --link-unresolved-decoration-color: hsla(201, 17%, 60%, 0.3) !important;
  --list-edit-offset: 0.5em !important;
  --list-indent: 2em !important;
  --list-marker-color: hsl( 0, -10%, 35% ) !important;
  --list-marker-color-collapsed: hsl( 201, 17%, 60% ) !important;
  --list-marker-color-hover: hsl( 0, -20%, 60% ) !important;
  --map-header-padding: 2px !important;
  --map-max-width: none !important;
  --map-width: auto !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: hsl( 0, 0%, 13% ) !important;
  --menu-border-color: hsl( 0, 0%, 27% ) !important;
  --metadata-border-color: hsl( 0, 0%, 21% ) !important;
  --metadata-divider-color: hsl( 0, 0%, 21% ) !important;
  --metadata-input-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --metadata-input-font-size: 13.91px !important;
  --metadata-input-text-color: hsl( 0, -10%, 82% ) !important;
  --metadata-label-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --metadata-label-font-size: 13.91px !important;
  --metadata-label-text-color: hsl( 0, -20%, 60% ) !important;
  --metadata-label-text-color-hover: hsl( 0, -20%, 60% ) !important;
  --metadata-label-width: 125.19px !important;
  --metadata-label-width-multiplier: 9 !important;
  --metadata-property-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl( 0, 0%, 35% ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl( 0, 0%, 27% ) !important;
  --minimal-tab-text-color: hsl( 0, -20%, 60% ) !important;
  --minimal-tab-text-color-active: hsl( 0, -10%, 82% ) !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --mobile-sidebar-background: hsl( 0, 0%, 15% ) !important;
  --modal-background: hsl( 0, 0%, 15% ) !important;
  --modal-border-color: hsl( 0, 0%, 27% ) !important;
  --mono0: black !important;
  --mono100: white !important;
  --nav-collapse-icon-color: hsl( 0, -20%, 60% ) !important;
  --nav-collapse-icon-color-collapsed: hsl( 0, -20%, 60% ) !important;
  --nav-heading-color: hsl( 0, -10%, 82% ) !important;
  --nav-heading-color-collapsed: hsl( 0, -10%, 35% ) !important;
  --nav-heading-color-collapsed-hover: hsl( 0, -20%, 60% ) !important;
  --nav-heading-color-hover: hsl( 0, -10%, 82% ) !important;
  --nav-indentation-guide-color: hsl( 0, 0%, 21% ) !important;
  --nav-item-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --nav-item-background-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --nav-item-background-selected: hsla(201, 17%, 60%, 0.15) !important;
  --nav-item-color: hsl( 0, -20%, 60% ) !important;
  --nav-item-color-active: hsl( 0, -10%, 82% ) !important;
  --nav-item-color-highlighted: hsl( 201, 17%, 60% ) !important;
  --nav-item-color-hover: hsl( 0, -10%, 82% ) !important;
  --nav-item-color-selected: hsl( 0, -10%, 82% ) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl( 0, -10%, 35% ) !important;
  --nav-tag-color-active: hsl( 0, -20%, 60% ) !important;
  --nav-tag-color-hover: hsl( 0, -20%, 60% ) !important;
  --nested-padding: 1.1em !important;
  --normal-weight: 400 !important;
  --p-spacing: 1.75rem !important;
  --pdf-background: hsl( 0, 0%, 15% ) !important;
  --pdf-dark-opacity: 1 !important;
  --pdf-page-background: hsl( 0, 0%, 15% ) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl( 0, 0%, 15% ) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: hsl( 0, 0%, 21% ) !important;
  --pill-border-color-hover: hsl( 0, 0%, 27% ) !important;
  --pill-color: hsl( 0, -20%, 60% ) !important;
  --pill-color-hover: hsl( 0, -10%, 82% ) !important;
  --pill-color-remove: hsl( 0, -10%, 35% ) !important;
  --pill-color-remove-hover: hsl( 201, 17%, 60% ) !important;
  --progress-complete: hsl( 201, 17%, 60% ) !important;
  --progress-outline: hsl( 0, 0%, 21% ) !important;
  --prompt-background: hsl( 0, 0%, 15% ) !important;
  --prompt-border-color: hsl( 0, 0%, 35% ) !important;
  --quote-opening-modifier: hsl( 0, 0%, 27% ) !important;
  --raised-background: color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent) linear-gradient(hsla( 0, 0%, 55%, 0.12 ), color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent)) !important;
  --ribbon-animation-duration: 0.1s !important;
  --ribbon-background: hsl( 0, 0%, 13% ) !important;
  --ribbon-background-collapsed: hsl( 0, 0%, 15% ) !important;
  --scrollbar-active-thumb-bg: hsl( 0, 0%, 35% ) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: hsl( 0, 0%, 21% ) !important;
  --search-clear-button-color: hsl( 0, -20%, 60% ) !important;
  --search-icon-color: hsl( 0, -20%, 60% ) !important;
  --search-result-background: hsl( 0, 0%, 15% ) !important;
  --secondary: hsl( 201, 17%, 60% ) !important;
  --setting-group-heading-color: hsl( 0, -10%, 82% ) !important;
  --setting-items-background: hsl( 0, 0%, 13% ) !important;
  --setting-items-border-color: hsl( 0, 0%, 21% ) !important;
  --shadow-color: rgba(0, 0, 0, 0.3) !important;
  --slider-thumb-border-color: hsl( 0, 0%, 27% ) !important;
  --slider-track-background: hsl( 0, 0%, 21% ) !important;
  --sp1: white !important;
  --status-bar-background: hsl( 0, 0%, 13% ) !important;
  --status-bar-border-color: hsl( 0, 0%, 21% ) !important;
  --status-bar-font-size: 11px !important;
  --status-bar-text-color: hsl( 0, -20%, 60% ) !important;
  --suggestion-background: hsl( 0, 0%, 15% ) !important;
  --sync-avatar-color-1: #d04255 !important;
  --sync-avatar-color-2: #d5763f !important;
  --sync-avatar-color-3: #e5b567 !important;
  --sync-avatar-color-4: #a8c373 !important;
  --sync-avatar-color-5: #73bbb2 !important;
  --sync-avatar-color-6: #6c99bb !important;
  --sync-avatar-color-7: #9e86c8 !important;
  --sync-avatar-color-8: #b05279 !important;
  --tab-background-active: hsl( 0, 0%, 15% ) !important;
  --tab-container-background: hsl( 0, 0%, 13% ) !important;
  --tab-divider-color: hsl( 0, 0%, 27% ) !important;
  --tab-outline-color: hsl( 0, 0%, 21% ) !important;
  --tab-switcher-background: hsl( 0, 0%, 13% ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl( 0, 0%, 13% ), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(201, 17%, 60%) !important;
  --tab-text-color: hsl( 0, -10%, 35% ) !important;
  --tab-text-color-active: hsl( 0, -20%, 60% ) !important;
  --tab-text-color-focused: hsl( 0, -20%, 60% ) !important;
  --tab-text-color-focused-active: hsl( 0, -10%, 82% ) !important;
  --tab-text-color-focused-active-current: hsl( 0, -10%, 82% ) !important;
  --tab-text-color-focused-highlighted: hsl( 201, 17%, 60% ) !important;
  --table-add-button-border-color: hsl( 0, 0%, 21% ) !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: hsl( 0, 0%, 21% ) !important;
  --table-cell-padding: 4px 10px !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: hsla( 201, 50%, 40%, 30% ) !important;
  --table-drag-handle-color: hsl( 0, -10%, 35% ) !important;
  --table-drag-handle-color-active: hsl( 201, 17%, 60% ) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-edge-cell-padding-first: 0 !important;
  --table-edge-cell-padding-last: 0 !important;
  --table-header-border-color: hsl( 0, 0%, 21% ) !important;
  --table-header-border-width: 0 !important;
  --table-header-color: hsl( 0, -10%, 82% ) !important;
  --table-header-size: 14px !important;
  --table-max-width: none !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: hsla( 201, 50%, 40%, 30% ) !important;
  --table-selection-border-color: hsl( 201, 17%, 60% ) !important;
  --table-selection-border-radius: 0px !important;
  --table-selection-border-width: 0px !important;
  --table-text-size: 14px !important;
  --table-white-space: normal !important;
  --table-width: auto !important;
  --table-wrapper-width: fit-content !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: hsl( 0, 0%, 21% ) !important;
  --tag-border-color-hover: hsl( 0, 0%, 27% ) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl( 0, -20%, 60% ) !important;
  --tag-color-hover: hsl( 0, -10%, 82% ) !important;
  --tag-padding-y: 0.2em !important;
  --tag-size: 0.8em !important;
  --tertiary: hsl( 201, 17%, 68% ) !important;
  --text-accent: hsl( 201, 17%, 60% ) !important;
  --text-accent-hover: hsl( 201, 17%, 68% ) !important;
  --text-blockquote: hsl( 0, -20%, 60% ) !important;
  --text-bold: hsl( 0, -10%, 82% ) !important;
  --text-code: hsl( 0, -10%, 65% ) !important;
  --text-error: #d04255 !important;
  --text-faint: hsl( 0, -10%, 35% ) !important;
  --text-formatting: hsl( 0, -10%, 35% ) !important;
  --text-highlight-bg: rgba(255, 177, 80, 0.3) !important;
  --text-highlight-bg-active: rgba(255, 255, 255, 0.1) !important;
  --text-italic: hsl( 0, -10%, 82% ) !important;
  --text-muted: hsl( 0, -20%, 60% ) !important;
  --text-normal: hsl( 0, -10%, 82% ) !important;
  --text-selection: hsla( 201, 50%, 40%, 30% ) !important;
  --text-success: #a8c373 !important;
  --text-warning: #d5763f !important;
  --textHighlight: rgba(255, 177, 80, 0.3) !important;
  --title-color: hsl( 0, -10%, 82% ) !important;
  --title-color-inactive: hsl( 0, -20%, 60% ) !important;
  --titlebar-background: hsl( 0, 0%, 15% ) !important;
  --titlebar-background-focused: hsl( 0, 0%, 13% ) !important;
  --titlebar-border-color: hsl( 0, 0%, 21% ) !important;
  --titlebar-text-color: hsl( 0, -20%, 60% ) !important;
  --titlebar-text-color-focused: hsl( 0, -10%, 82% ) !important;
  --top-left-padding-y: 0px !important;
  --tx1: hsl( 0, -10%, 82% ) !important;
  --tx2: hsl( 0, -20%, 60% ) !important;
  --tx3: hsl( 0, -10%, 35% ) !important;
  --tx4: hsl( 0, -10%, 65% ) !important;
  --ui1: hsl( 0, 0%, 21% ) !important;
  --ui2: hsl( 0, 0%, 27% ) !important;
  --ui3: hsl( 0, 0%, 35% ) !important;
  --vault-profile-color: hsl( 0, -10%, 82% ) !important;
  --vault-profile-color-hover: hsl( 0, -10%, 82% ) !important;
  --workspace-background-translucent: hsla(0,0%, 15%, 0.7) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 33, 33);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(33, 33, 33);
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 27.82px;
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 33, 33);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 33, 33);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(38, 38, 38);
  color: rgb(209, 209, 209);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 177, 80, 0.3);
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body del {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(89, 89, 89);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(121, 146, 160);
  border-color: rgb(121, 146, 160);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(136, 158, 170);
  outline: rgb(136, 158, 170) none 0px;
  text-decoration-color: rgb(136, 158, 170);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 158, 170);
  outline: rgb(136, 158, 170) none 0px;
  text-decoration-color: rgb(136, 158, 170);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(136, 158, 170);
  outline: rgb(136, 158, 170) none 0px;
  text-decoration: rgba(136, 158, 170, 0.3);
  text-decoration-color: rgba(136, 158, 170, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body dt {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(89, 89, 89);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
  margin-top: 8px;
  width: 187.438px;
}

html[saved-theme="dark"] body td {
  border-left-width: 0px;
  color: rgb(209, 209, 209);
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="dark"] body th {
  border-left-width: 0px;
  border-top-width: 0px;
  color: rgb(209, 209, 209);
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 33, 33);
  color: rgb(209, 209, 209);
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
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(33, 33, 33);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  margin-left: 0px;
  margin-right: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(209, 209, 209);
  border-radius: 4px;
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(209, 209, 209);
  border-radius: 4px;
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(121, 146, 160);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 89, 89);
  text-decoration: line-through 1px rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
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
  color: rgb(89, 89, 89);
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
  background-color: rgb(121, 146, 160);
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
  color: rgb(89, 89, 89);
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
  color: rgb(89, 89, 89);
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
  background-color: rgb(38, 38, 38);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(140, 140, 140, 0.12);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(140, 140, 140, 0.12);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(140, 140, 140, 0.12);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body h1 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h2 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h3 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h4 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h5 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h6 {
  color: rgb(209, 209, 209);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 108,153,187;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(54, 54, 54);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(209, 209, 209);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `html[saved-theme="dark"] body footer {
  border-left-width: 0px;
  border-top-width: 0px;
  color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(89, 89, 89);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(89, 89, 89);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body abbr {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sub {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body summary {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sup {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: rgb(153, 153, 153);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 201 !important;
  --accent-l: 50% !important;
  --accent-s: 17% !important;
  --active-line-bg: rgba(0, 0, 0, 0.035) !important;
  --adaptive-list-edit-offset: 0.5em !important;
  --ax1: hsl( 201, 17%, 50% ) !important;
  --ax2: hsl( 201, 17%, 42% ) !important;
  --ax3: hsl( 201, 17%, 56% ) !important;
  --background-modifier-accent: hsl( 201, 17%, 56% ) !important;
  --background-modifier-active-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --background-modifier-border: hsl( 0, 0%, 90% ) !important;
  --background-modifier-border-focus: hsl( 0, 0%, 76% ) !important;
  --background-modifier-border-hover: hsl( 0, 0%, 84% ) !important;
  --background-modifier-cover: hsla(0,-70%,76%,0.5) !important;
  --background-modifier-error: rgba(255, 0, 0, 0.14) !important;
  --background-modifier-error-hover: rgba(255, 0, 0, 0.08) !important;
  --background-modifier-error-rgb: 208,66,85 !important;
  --background-modifier-form-field: white !important;
  --background-modifier-form-field-highlighted: white !important;
  --background-modifier-form-field-hover: white !important;
  --background-modifier-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --background-modifier-success: #a8c373 !important;
  --background-modifier-success-rgb: 168,195,115 !important;
  --background-primary: white !important;
  --background-primary-alt: hsl( 0, 0%, 96% ) !important;
  --background-secondary: hsl( 0, 0%, 96% ) !important;
  --background-secondary-alt: white !important;
  --background-table-rows: hsl( 0, 0%, 96% ) !important;
  --base-h: 0 !important;
  --base-l: 96% !important;
  --base-s: 0% !important;
  --bases-cards-background: white !important;
  --bases-cards-cover-background: hsl( 0, 0%, 96% ) !important;
  --bases-cards-shadow: 0 0 0 1px hsl( 0, 0%, 90% ) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl( 0, 0%, 84% ) !important;
  --bases-embed-border-color: hsl( 0, 0%, 90% ) !important;
  --bases-group-heading-property-color: hsl( 0, -20%, 46% ) !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: hsl( 0, 0%, 90% ) !important;
  --bases-table-cell-background-active: white !important;
  --bases-table-cell-background-disabled: hsl( 0, 0%, 96% ) !important;
  --bases-table-cell-background-selected: hsla( 201, 50%, 76%, 30% ) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl( 0, 0%, 76% ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl( 201, 17%, 56% ) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-font-size: 14px !important;
  --bases-table-group-background: hsl( 0, 0%, 96% ) !important;
  --bases-table-header-background: white !important;
  --bases-table-header-background-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --bases-table-header-color: hsl( 0, -20%, 46% ) !important;
  --bases-table-summary-background: white !important;
  --bases-table-summary-background-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --bg1: white !important;
  --bg2: hsl( 0, 0%, 96% ) !important;
  --bg3: hsla( 0, 0%, 46%, 0.12 ) !important;
  --blockquote-border-color: hsl( 0, 0%, 84% ) !important;
  --blockquote-border-thickness: 1px !important;
  --blockquote-color: hsl( 0, -20%, 46% ) !important;
  --blockquote-style: normal !important;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --btn-shadow-color: rgba(0, 0, 0, 0.05) !important;
  --calendar-dot-active: hsl( 0, -10%, 71% ) !important;
  --calendar-dot-today: hsl( 201, 17%, 50% ) !important;
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
  --canvas-background: white !important;
  --canvas-card-label-color: hsl( 0, -10%, 71% ) !important;
  --canvas-color-1: 208,66,85 !important;
  --canvas-color-2: 213,118,63 !important;
  --canvas-color-3: 229,181,103 !important;
  --canvas-color-4: 168,195,115 !important;
  --canvas-color-5: 115,187,178 !important;
  --canvas-color-6: 158,134,200 !important;
  --canvas-dot-pattern: hsl( 0, 0%, 84% ) !important;
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
  --caret-color: hsl( 0, 0%, 6% ) !important;
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
  --checkbox-border-color: hsl( 0, -10%, 71% ) !important;
  --checkbox-border-color-hover: hsl( 0, -20%, 46% ) !important;
  --checkbox-color: hsl( 201, 17%, 56% ) !important;
  --checkbox-color-hover: hsl( 201, 17%, 50% ) !important;
  --checkbox-left: 0px !important;
  --checkbox-margin: 0px 6px 0px -2em !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 50% !important;
  --checkbox-top: 2px !important;
  --checklist-done-color: hsl( 0, 0%, 6% ) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl( 0, 0%, 96% ) !important;
  --code-border-color: hsl( 0, 0%, 90% ) !important;
  --code-bracket-background: hsla( 0, 0%, 46%, 0.12 ) !important;
  --code-comment: hsl( 0, -10%, 71% ) !important;
  --code-function: #e5b567 !important;
  --code-important: #d5763f !important;
  --code-keyword: #b05279 !important;
  --code-normal: hsl( 0, 0%, 6% ) !important;
  --code-operator: #d04255 !important;
  --code-property: #73bbb2 !important;
  --code-punctuation: hsl( 0, -20%, 46% ) !important;
  --code-string: #a8c373 !important;
  --code-tag: #d04255 !important;
  --code-value: #9e86c8 !important;
  --collapse-icon-color: hsl( 0, -10%, 71% ) !important;
  --collapse-icon-color-collapsed: hsl( 201, 17%, 50% ) !important;
  --color-accent: hsl(201, 17%, 50%) !important;
  --color-accent-1: hsl(200, 17.17%, 53.75%) !important;
  --color-accent-2: hsl(198, 17.34%, 57.5%) !important;
  --color-accent-hsl: 201, 17%, 50% !important;
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
  --dark: hsl( 0, 0%, 6% ) !important;
  --darkgray: hsl( 0, 0%, 6% ) !important;
  --divider-color: hsl( 0, 0%, 90% ) !important;
  --divider-color-hover: hsl( 201, 17%, 56% ) !important;
  --dropdown-background: white !important;
  --dropdown-background-hover: hsl( 0, 0%, 90% ) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid hsl( 201, 17%, 56% ) !important;
  --embed-decoration-color: hsl( 0, 0%, 84% ) !important;
  --embed-decoration-style: solid !important;
  --embed-max-height: none !important;
  --file-header-background: white !important;
  --file-header-background-focused: white !important;
  --file-margins: 8px 32px !important;
  --file-margins-y: 8px !important;
  --flair-background: white !important;
  --flair-color: hsl( 0, 0%, 6% ) !important;
  --focus-animation-duration: 0.1s !important;
  --folding-offset: 32px !important;
  --font-adaptive-normal: 16px !important;
  --font-adaptive-small: 13.91px !important;
  --font-adaptive-smaller: 13px !important;
  --font-adaptive-smallest: 11px !important;
  --font-code: 14.4px !important;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: hsl( 0, 0%, 90% ) !important;
  --footnote-id-color: hsl( 0, -20%, 46% ) !important;
  --footnote-id-color-no-occurrences: hsl( 0, -10%, 71% ) !important;
  --footnote-input-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --frame-background: hsl( 201, 17%, 80%) !important;
  --frame-background-h: 201 !important;
  --frame-background-l: 80% !important;
  --frame-background-s: 17% !important;
  --frame-divider-color: hsl( 0, 0%, 90% ) !important;
  --frame-icon-color: hsl( 201, 7%, 45%) !important;
  --frame-muted-color: hsl( 201, 7%, 45%) !important;
  --frame-outline-color: hsla( 201, 17%, 73.5%, 1 ) !important;
  --graph-node: hsl( 0, -20%, 46% ) !important;
  --graph-node-attachment: #e5b567 !important;
  --graph-node-focused: hsl( 201, 17%, 50% ) !important;
  --graph-node-tag: #a8c373 !important;
  --graph-node-unresolved: hsl( 0, -10%, 71% ) !important;
  --graph-text: hsl( 0, 0%, 6% ) !important;
  --gray: hsl( 0, -20%, 46% ) !important;
  --h1-size: 1.125em !important;
  --h1-weight: 600 !important;
  --h1l: hsl( 0, 0%, 90% ) !important;
  --h2-size: 1.05em !important;
  --h2-weight: 600 !important;
  --h2l: hsl( 0, 0%, 90% ) !important;
  --h3-size: 1em !important;
  --h3-weight: 500 !important;
  --h3l: hsl( 0, 0%, 90% ) !important;
  --h4-size: 0.90em !important;
  --h4-weight: 500 !important;
  --h4l: hsl( 0, 0%, 90% ) !important;
  --h5-size: 0.85em !important;
  --h5-variant: small-caps !important;
  --h5-weight: 500 !important;
  --h5l: hsl( 0, 0%, 90% ) !important;
  --h6-size: 0.85em !important;
  --h6-variant: small-caps !important;
  --h6-weight: 400 !important;
  --h6l: hsl( 0, 0%, 90% ) !important;
  --heading-formatting: hsl( 0, -10%, 71% ) !important;
  --heading-spacing: 2em !important;
  --hider-ribbon-display: none !important;
  --highlight: rgba(255, 225, 0, 0.5) !important;
  --hl1: hsla( 201, 50%, 76%, 30% ) !important;
  --hl2: rgba(255, 225, 0, 0.5) !important;
  --hr-color: hsl( 0, 0%, 90% ) !important;
  --icon-color: hsl( 0, -20%, 46% ) !important;
  --icon-color-active: hsl( 0, 0%, 6% ) !important;
  --icon-color-focused: hsl( 0, 0%, 6% ) !important;
  --icon-color-hover: hsl( 0, -20%, 46% ) !important;
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
  --inline-title-margin-bottom: 1rem !important;
  --inline-title-size: 1.125em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl( 0, -10%, 71% ) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl( 0, -10%, 71% ) !important;
  --interactive-accent: hsl( 201, 17%, 56% ) !important;
  --interactive-accent-hover: hsl( 201, 17%, 50% ) !important;
  --interactive-accent-hsl: 201, 17%, 50% !important;
  --interactive-accent-rgb: 220,220,220 !important;
  --interactive-hover: hsl( 0, 0%, 90% ) !important;
  --interactive-normal: white !important;
  --leaflet-borders: rgba(0, 0, 0, 0.1) !important;
  --leaflet-buttons: white !important;
  --light: white !important;
  --lightgray: hsl( 0, 0%, 96% ) !important;
  --line-height: 1.5 !important;
  --line-number-color: hsl( 0, -10%, 71% ) !important;
  --line-number-color-active: hsl( 0, -20%, 46% ) !important;
  --line-width: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: hsl( 201, 17%, 50% ) !important;
  --link-color-hover: hsl( 201, 17%, 42% ) !important;
  --link-decoration: none !important;
  --link-external-color: hsl( 201, 17%, 50% ) !important;
  --link-external-color-hover: hsl( 201, 17%, 42% ) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl( 201, 17%, 50% ) !important;
  --link-unresolved-decoration-color: hsla(201, 17%, 50%, 0.3) !important;
  --list-edit-offset: 0.5em !important;
  --list-indent: 2em !important;
  --list-marker-color: hsl( 0, -10%, 71% ) !important;
  --list-marker-color-collapsed: hsl( 201, 17%, 50% ) !important;
  --list-marker-color-hover: hsl( 0, -20%, 46% ) !important;
  --map-header-padding: 2px !important;
  --map-max-width: none !important;
  --map-width: auto !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: hsl( 0, 0%, 96% ) !important;
  --menu-border-color: hsl( 0, 0%, 84% ) !important;
  --metadata-border-color: hsl( 0, 0%, 90% ) !important;
  --metadata-divider-color: hsl( 0, 0%, 90% ) !important;
  --metadata-input-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --metadata-input-font-size: 13.91px !important;
  --metadata-input-text-color: hsl( 0, 0%, 6% ) !important;
  --metadata-label-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --metadata-label-font-size: 13.91px !important;
  --metadata-label-text-color: hsl( 0, -20%, 46% ) !important;
  --metadata-label-text-color-hover: hsl( 0, -20%, 46% ) !important;
  --metadata-label-width: 125.19px !important;
  --metadata-label-width-multiplier: 9 !important;
  --metadata-property-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl( 0, 0%, 76% ) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl( 0, 0%, 84% ) !important;
  --minimal-tab-text-color: hsl( 0, -20%, 46% ) !important;
  --minimal-tab-text-color-active: hsl( 0, 0%, 6% ) !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --mobile-sidebar-background: white !important;
  --modal-background: white !important;
  --mono0: white !important;
  --mono100: black !important;
  --nav-collapse-icon-color: hsl( 0, -20%, 46% ) !important;
  --nav-collapse-icon-color-collapsed: hsl( 0, -20%, 46% ) !important;
  --nav-heading-color: hsl( 0, 0%, 6% ) !important;
  --nav-heading-color-collapsed: hsl( 0, -10%, 71% ) !important;
  --nav-heading-color-collapsed-hover: hsl( 0, -20%, 46% ) !important;
  --nav-heading-color-hover: hsl( 0, 0%, 6% ) !important;
  --nav-indentation-guide-color: hsl( 0, 0%, 90% ) !important;
  --nav-item-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --nav-item-background-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --nav-item-background-selected: hsla(201, 17%, 50%, 0.15) !important;
  --nav-item-color: hsl( 0, -20%, 46% ) !important;
  --nav-item-color-active: hsl( 0, 0%, 6% ) !important;
  --nav-item-color-highlighted: hsl( 201, 17%, 50% ) !important;
  --nav-item-color-hover: hsl( 0, 0%, 6% ) !important;
  --nav-item-color-selected: hsl( 0, 0%, 6% ) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl( 0, -10%, 71% ) !important;
  --nav-tag-color-active: hsl( 0, -20%, 46% ) !important;
  --nav-tag-color-hover: hsl( 0, -20%, 46% ) !important;
  --nested-padding: 1.1em !important;
  --normal-weight: 400 !important;
  --p-spacing: 1.75rem !important;
  --pdf-background: white !important;
  --pdf-dark-opacity: 1 !important;
  --pdf-page-background: white !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: white !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: hsl( 0, 0%, 90% ) !important;
  --pill-border-color-hover: hsl( 0, 0%, 84% ) !important;
  --pill-color: hsl( 0, -20%, 46% ) !important;
  --pill-color-hover: hsl( 0, 0%, 6% ) !important;
  --pill-color-remove: hsl( 0, -10%, 71% ) !important;
  --pill-color-remove-hover: hsl( 201, 17%, 50% ) !important;
  --progress-complete: hsl( 201, 17%, 50% ) !important;
  --progress-outline: hsl( 0, 0%, 90% ) !important;
  --prompt-background: white !important;
  --prompt-border-color: hsl( 0, 0%, 76% ) !important;
  --quote-opening-modifier: hsl( 0, 0%, 84% ) !important;
  --raised-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --ribbon-animation-duration: 0.1s !important;
  --ribbon-background: hsl( 0, 0%, 96% ) !important;
  --ribbon-background-collapsed: white !important;
  --scrollbar-active-thumb-bg: hsl( 0, 0%, 76% ) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: hsl( 0, 0%, 90% ) !important;
  --search-clear-button-color: hsl( 0, -20%, 46% ) !important;
  --search-icon-color: hsl( 0, -20%, 46% ) !important;
  --search-result-background: white !important;
  --secondary: hsl( 201, 17%, 50% ) !important;
  --setting-group-heading-color: hsl( 0, 0%, 6% ) !important;
  --setting-items-background: hsl( 0, 0%, 96% ) !important;
  --setting-items-border-color: hsl( 0, 0%, 90% ) !important;
  --shadow-color: rgba(0, 0, 0, 0.1) !important;
  --slider-thumb-border-color: hsl( 0, 0%, 84% ) !important;
  --slider-track-background: hsl( 0, 0%, 90% ) !important;
  --sp1: white !important;
  --status-bar-background: hsl( 0, 0%, 96% ) !important;
  --status-bar-border-color: hsl( 0, 0%, 90% ) !important;
  --status-bar-font-size: 11px !important;
  --status-bar-text-color: hsl( 0, -20%, 46% ) !important;
  --suggestion-background: white !important;
  --sync-avatar-color-1: #d04255 !important;
  --sync-avatar-color-2: #d5763f !important;
  --sync-avatar-color-3: #e5b567 !important;
  --sync-avatar-color-4: #a8c373 !important;
  --sync-avatar-color-5: #73bbb2 !important;
  --sync-avatar-color-6: #6c99bb !important;
  --sync-avatar-color-7: #9e86c8 !important;
  --sync-avatar-color-8: #b05279 !important;
  --tab-background-active: white !important;
  --tab-container-background: hsl( 0, 0%, 96% ) !important;
  --tab-divider-color: hsl( 0, 0%, 84% ) !important;
  --tab-outline-color: hsl( 0, 0%, 90% ) !important;
  --tab-switcher-background: hsl( 0, 0%, 96% ) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl( 0, 0%, 96% ), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(201, 17%, 50%) !important;
  --tab-text-color: hsl( 0, -10%, 71% ) !important;
  --tab-text-color-active: hsl( 0, -20%, 46% ) !important;
  --tab-text-color-focused: hsl( 0, -20%, 46% ) !important;
  --tab-text-color-focused-active: hsl( 0, 0%, 6% ) !important;
  --tab-text-color-focused-active-current: hsl( 0, 0%, 6% ) !important;
  --tab-text-color-focused-highlighted: hsl( 201, 17%, 50% ) !important;
  --table-add-button-border-color: hsl( 0, 0%, 90% ) !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: hsl( 0, 0%, 90% ) !important;
  --table-cell-padding: 4px 10px !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: hsla( 201, 50%, 76%, 30% ) !important;
  --table-drag-handle-color: hsl( 0, -10%, 71% ) !important;
  --table-drag-handle-color-active: hsl( 201, 17%, 50% ) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-edge-cell-padding-first: 0 !important;
  --table-edge-cell-padding-last: 0 !important;
  --table-header-border-color: hsl( 0, 0%, 90% ) !important;
  --table-header-border-width: 0 !important;
  --table-header-color: hsl( 0, 0%, 6% ) !important;
  --table-header-size: 14px !important;
  --table-max-width: none !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: hsla( 201, 50%, 76%, 30% ) !important;
  --table-selection-border-color: hsl( 201, 17%, 50% ) !important;
  --table-selection-border-radius: 0px !important;
  --table-selection-border-width: 0px !important;
  --table-text-size: 14px !important;
  --table-white-space: normal !important;
  --table-width: auto !important;
  --table-wrapper-width: fit-content !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: hsl( 0, 0%, 90% ) !important;
  --tag-border-color-hover: hsl( 0, 0%, 84% ) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl( 0, -20%, 46% ) !important;
  --tag-color-hover: hsl( 0, 0%, 6% ) !important;
  --tag-padding-y: 0.2em !important;
  --tag-size: 0.8em !important;
  --tertiary: hsl( 201, 17%, 42% ) !important;
  --text-accent: hsl( 201, 17%, 50% ) !important;
  --text-accent-hover: hsl( 201, 17%, 42% ) !important;
  --text-blockquote: hsl( 0, -20%, 46% ) !important;
  --text-bold: hsl( 0, 0%, 6% ) !important;
  --text-code: hsl( 0, -10%, 36% ) !important;
  --text-error: #d04255 !important;
  --text-faint: hsl( 0, -10%, 71% ) !important;
  --text-formatting: hsl( 0, -10%, 71% ) !important;
  --text-highlight-bg: rgba(255, 225, 0, 0.5) !important;
  --text-highlight-bg-active: rgba(0, 0, 0, 0.1) !important;
  --text-italic: hsl( 0, 0%, 6% ) !important;
  --text-muted: hsl( 0, -20%, 46% ) !important;
  --text-normal: hsl( 0, 0%, 6% ) !important;
  --text-selection: hsla( 201, 50%, 76%, 30% ) !important;
  --text-success: #a8c373 !important;
  --text-warning: #d5763f !important;
  --textHighlight: rgba(255, 225, 0, 0.5) !important;
  --title-color: hsl( 0, 0%, 6% ) !important;
  --title-color-inactive: hsl( 0, -20%, 46% ) !important;
  --titlebar-background: white !important;
  --titlebar-background-focused: hsl( 0, 0%, 96% ) !important;
  --titlebar-border-color: hsl( 0, 0%, 90% ) !important;
  --titlebar-text-color: hsl( 0, -20%, 46% ) !important;
  --titlebar-text-color-focused: hsl( 0, 0%, 6% ) !important;
  --top-left-padding-y: 0px !important;
  --tx1: hsl( 0, 0%, 6% ) !important;
  --tx2: hsl( 0, -20%, 46% ) !important;
  --tx3: hsl( 0, -10%, 71% ) !important;
  --tx4: hsl( 0, -10%, 36% ) !important;
  --ui1: hsl( 0, 0%, 90% ) !important;
  --ui2: hsl( 0, 0%, 84% ) !important;
  --ui3: hsl( 0, 0%, 76% ) !important;
  --vault-profile-color: hsl( 0, 0%, 6% ) !important;
  --vault-profile-color-hover: hsl( 0, 0%, 6% ) !important;
  --workspace-background-translucent: hsla(0,0%, 96%, 0.7) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 27.82px;
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(15, 15, 15);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 225, 0, 0.5);
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body del {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(181, 181, 181);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(124, 149, 162);
  border-color: rgb(124, 149, 162);
}

html[saved-theme="light"] body p {
  color: rgb(117, 117, 117);
  outline: rgb(117, 117, 117) none 0px;
  text-decoration-color: rgb(117, 117, 117);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(106, 134, 149);
  outline: rgb(106, 134, 149) none 0px;
  text-decoration-color: rgb(106, 134, 149);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(106, 134, 149);
  outline: rgb(106, 134, 149) none 0px;
  text-decoration-color: rgb(106, 134, 149);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(106, 134, 149);
  outline: rgb(106, 134, 149) none 0px;
  text-decoration: rgba(106, 134, 149, 0.3);
  text-decoration-color: rgba(106, 134, 149, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body dt {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ol > li {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ul > li {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(181, 181, 181);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
  margin-top: 8px;
  width: 187.438px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-width: 0px;
  color: rgb(15, 15, 15);
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
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
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body figcaption {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  margin-left: 0px;
  margin-right: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(15, 15, 15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(15, 15, 15);
  border-radius: 4px;
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(15, 15, 15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(15, 15, 15);
  border-radius: 4px;
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(124, 149, 162);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(181, 181, 181);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(181, 181, 181);
  border-right-color: rgb(181, 181, 181);
  border-top-color: rgb(181, 181, 181);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(181, 181, 181);
  text-decoration: line-through 1px rgb(181, 181, 181);
  text-decoration-color: rgb(181, 181, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
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
  color: rgb(181, 181, 181);
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
  background-color: rgb(124, 149, 162);
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
  color: rgb(181, 181, 181);
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
  color: rgb(181, 181, 181);
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
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(117, 117, 117, 0.12);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(117, 117, 117, 0.12);
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(117, 117, 117, 0.12);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body h1 {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body h2 {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body h3 {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body h4 {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body h5 {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body h6 {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 108,153,187;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(230, 230, 230);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(15, 15, 15);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-width: 0px;
  color: rgb(181, 181, 181);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(181, 181, 181);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 117, 117);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(117, 117, 117);
  stroke: rgb(117, 117, 117);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(181, 181, 181);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body abbr {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body sub {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body summary {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body sup {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: rgb(117, 117, 117);
}`,
  },
};
