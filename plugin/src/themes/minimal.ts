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
  --ax1: rgb(136, 158, 170) !important;
  --ax2: rgb(160, 178, 187) !important;
  --ax3: rgb(121, 146, 160) !important;
  --background-modifier-accent: rgb(121, 146, 160) !important;
  --background-modifier-active-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --background-modifier-border: rgb(54, 54, 54) !important;
  --background-modifier-border-focus: rgb(89, 89, 89) !important;
  --background-modifier-border-hover: rgb(69, 69, 69) !important;
  --background-modifier-cover: rgba(8, 8, 8, 0.5) !important;
  --background-modifier-error: rgba(255, 20, 20, 0.12) !important;
  --background-modifier-error-hover: rgba(255, 20, 20, 0.18) !important;
  --background-modifier-error-rgb: 208,66,85 !important;
  --background-modifier-form-field: rgb(38, 38, 38) !important;
  --background-modifier-form-field-highlighted: rgb(38, 38, 38) !important;
  --background-modifier-form-field-hover: rgb(38, 38, 38) !important;
  --background-modifier-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --background-modifier-success: #a8c373 !important;
  --background-modifier-success-rgb: 168,195,115 !important;
  --background-primary: rgb(38, 38, 38) !important;
  --background-primary-alt: rgb(33, 33, 33) !important;
  --background-secondary: rgb(33, 33, 33) !important;
  --background-secondary-alt: rgb(38, 38, 38) !important;
  --background-table-rows: rgb(33, 33, 33) !important;
  --base-h: 0 !important;
  --base-l: 15% !important;
  --base-s: 0% !important;
  --bases-cards-background: rgb(38, 38, 38) !important;
  --bases-cards-cover-background: rgb(33, 33, 33) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(54, 54, 54) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(69, 69, 69) !important;
  --bases-embed-border-color: rgb(54, 54, 54) !important;
  --bases-group-heading-property-color: hsl( 0, -20%, 60% ) !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: rgb(54, 54, 54) !important;
  --bases-table-cell-background-active: rgb(38, 38, 38) !important;
  --bases-table-cell-background-disabled: rgb(33, 33, 33) !important;
  --bases-table-cell-background-selected: hsla( 201, 50%, 40%, 30% ) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(89, 89, 89) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(121, 146, 160) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-font-size: 14px !important;
  --bases-table-group-background: rgb(33, 33, 33) !important;
  --bases-table-header-background: rgb(38, 38, 38) !important;
  --bases-table-header-background-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --bases-table-header-color: hsl( 0, -20%, 60% ) !important;
  --bases-table-summary-background: rgb(38, 38, 38) !important;
  --bases-table-summary-background-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --bg1: rgb(38, 38, 38) !important;
  --bg2: rgb(33, 33, 33) !important;
  --bg3: hsla( 0, 0%, 55%, 0.12 ) !important;
  --blockquote-border-color: rgb(69, 69, 69) !important;
  --blockquote-border-thickness: 1px !important;
  --blockquote-color: hsl( 0, -20%, 60% ) !important;
  --blockquote-style: normal !important;
  --blur-background: color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent) linear-gradient(hsla( 0, 0%, 55%, 0.12 ), color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent)) !important;
  --bold-weight: 600 !important;
  --btn-shadow-color: rgba(0, 0, 0, 0.2) !important;
  --calendar-dot-active: hsl( 0, -10%, 35% ) !important;
  --calendar-dot-today: rgb(136, 158, 170) !important;
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
  --callout-title-weight: 600;
  --callout-todo: 108,153,187;
  --callout-warning: 213,118,63;
  --canvas-background: rgb(38, 38, 38) !important;
  --canvas-card-label-color: hsl( 0, -10%, 35% ) !important;
  --canvas-color-1: 208,66,85 !important;
  --canvas-color-2: 213,118,63 !important;
  --canvas-color-3: 229,181,103 !important;
  --canvas-color-4: 168,195,115 !important;
  --canvas-color-5: 115,187,178 !important;
  --canvas-color-6: 158,134,200 !important;
  --canvas-dot-pattern: rgb(69, 69, 69) !important;
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
  --checkbox-color: rgb(121, 146, 160) !important;
  --checkbox-color-hover: rgb(136, 158, 170) !important;
  --checkbox-left: 0px !important;
  --checkbox-margin: 0px 6px 0px -2em !important;
  --checkbox-marker-color: rgb(38, 38, 38) !important;
  --checkbox-radius: 50% !important;
  --checkbox-top: 2px !important;
  --checklist-done-color: hsl( 0, -10%, 82% ) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(33, 33, 33) !important;
  --code-border-color: rgb(54, 54, 54) !important;
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
  --collapse-icon-color-collapsed: rgb(136, 158, 170) !important;
  --color-accent: rgb(136, 158, 170) !important;
  --color-accent-1: rgb(163, 181, 189) !important;
  --color-accent-2: rgb(186, 201, 207) !important;
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
  --divider-color: rgb(54, 54, 54) !important;
  --divider-color-hover: rgb(121, 146, 160) !important;
  --dropdown-background: hsla( 0, 0%, 55%, 0.12 ) !important;
  --dropdown-background-hover: rgb(54, 54, 54) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(121, 146, 160) !important;
  --embed-decoration-color: rgb(69, 69, 69) !important;
  --embed-decoration-style: solid !important;
  --embed-max-height: none !important;
  --file-header-background: rgb(38, 38, 38) !important;
  --file-header-background-focused: rgb(38, 38, 38) !important;
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
  --footnote-divider-color: rgb(54, 54, 54) !important;
  --footnote-id-color: hsl( 0, -20%, 60% ) !important;
  --footnote-id-color-no-occurrences: hsl( 0, -10%, 35% ) !important;
  --footnote-input-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --frame-background: rgb(74, 94, 104) !important;
  --frame-background-h: 201 !important;
  --frame-background-l: 35% !important;
  --frame-background-s: 17% !important;
  --frame-divider-color: rgb(54, 54, 54) !important;
  --frame-icon-color: rgb(146, 155, 160) !important;
  --frame-muted-color: rgb(146, 155, 160) !important;
  --frame-outline-color: hsla( 201, 15%, 42%, 1 ) !important;
  --graph-node: hsl( 0, -20%, 60% ) !important;
  --graph-node-attachment: #e5b567 !important;
  --graph-node-focused: rgb(136, 158, 170) !important;
  --graph-node-tag: #a8c373 !important;
  --graph-node-unresolved: hsl( 0, -10%, 35% ) !important;
  --graph-text: hsl( 0, -10%, 82% ) !important;
  --gray: hsl( 0, -20%, 60% ) !important;
  --h1-size: 1.125em !important;
  --h1-weight: 600 !important;
  --h1l: rgb(54, 54, 54) !important;
  --h2-size: 1.05em !important;
  --h2-weight: 600 !important;
  --h2l: rgb(54, 54, 54) !important;
  --h3-size: 1em !important;
  --h3-weight: 500 !important;
  --h3l: rgb(54, 54, 54) !important;
  --h4-size: 0.90em !important;
  --h4-weight: 500 !important;
  --h4l: rgb(54, 54, 54) !important;
  --h5-size: 0.85em !important;
  --h5-variant: small-caps !important;
  --h5-weight: 500 !important;
  --h5l: rgb(54, 54, 54) !important;
  --h6-size: 0.85em !important;
  --h6-variant: small-caps !important;
  --h6-weight: 400 !important;
  --h6l: rgb(54, 54, 54) !important;
  --heading-formatting: hsl( 0, -10%, 35% ) !important;
  --heading-spacing: 2em !important;
  --hider-ribbon-display: none !important;
  --highlight: rgba(255, 177, 80, 0.3) !important;
  --hl1: hsla( 201, 50%, 40%, 30% ) !important;
  --hl2: rgba(255, 177, 80, 0.3) !important;
  --hr-color: rgb(54, 54, 54) !important;
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
  --interactive-accent: rgb(121, 146, 160) !important;
  --interactive-accent-hover: rgb(136, 158, 170) !important;
  --interactive-accent-hsl: 201, 17%, 60% !important;
  --interactive-accent-rgb: 66,66,66 !important;
  --interactive-hover: rgb(54, 54, 54) !important;
  --interactive-normal: hsla( 0, 0%, 55%, 0.12 ) !important;
  --kanban-border: 0px !important;
  --leaflet-borders: rgba(255, 255, 255, 0.1) !important;
  --leaflet-buttons: rgb(33, 33, 33) !important;
  --light: rgb(38, 38, 38) !important;
  --lightgray: rgb(33, 33, 33) !important;
  --line-height: 1.5 !important;
  --line-number-color: hsl( 0, -10%, 35% ) !important;
  --line-number-color-active: hsl( 0, -20%, 60% ) !important;
  --line-width: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: rgb(136, 158, 170) !important;
  --link-color-hover: rgb(160, 178, 187) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(136, 158, 170) !important;
  --link-external-color-hover: rgb(160, 178, 187) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(136, 158, 170) !important;
  --link-unresolved-decoration-color: rgba(136, 158, 170, 0.3) !important;
  --list-edit-offset: 0.5em !important;
  --list-indent: 2em !important;
  --list-marker-color: hsl( 0, -10%, 35% ) !important;
  --list-marker-color-collapsed: rgb(136, 158, 170) !important;
  --list-marker-color-hover: hsl( 0, -20%, 60% ) !important;
  --map-header-padding: 2px !important;
  --map-max-width: none !important;
  --map-width: auto !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: rgb(33, 33, 33) !important;
  --menu-border-color: rgb(69, 69, 69) !important;
  --metadata-border-color: rgb(54, 54, 54) !important;
  --metadata-divider-color: rgb(54, 54, 54) !important;
  --metadata-input-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --metadata-input-font-size: 13.91px !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: hsl( 0, -10%, 82% ) !important;
  --metadata-label-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --metadata-label-font-size: 13.91px !important;
  --metadata-label-text-color: hsl( 0, -20%, 60% ) !important;
  --metadata-label-text-color-hover: hsl( 0, -20%, 60% ) !important;
  --metadata-label-width: 125.19px !important;
  --metadata-label-width-multiplier: 9 !important;
  --metadata-property-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(89, 89, 89) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(69, 69, 69) !important;
  --minimal-tab-text-color: hsl( 0, -20%, 60% ) !important;
  --minimal-tab-text-color-active: hsl( 0, -10%, 82% ) !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --mobile-sidebar-background: rgb(38, 38, 38) !important;
  --modal-background: rgb(38, 38, 38) !important;
  --modal-border-color: rgb(69, 69, 69) !important;
  --mono0: black !important;
  --mono100: white !important;
  --nav-collapse-icon-color: hsl( 0, -20%, 60% ) !important;
  --nav-collapse-icon-color-collapsed: hsl( 0, -20%, 60% ) !important;
  --nav-heading-color: hsl( 0, -10%, 82% ) !important;
  --nav-heading-color-collapsed: hsl( 0, -10%, 35% ) !important;
  --nav-heading-color-collapsed-hover: hsl( 0, -20%, 60% ) !important;
  --nav-heading-color-hover: hsl( 0, -10%, 82% ) !important;
  --nav-indentation-guide-color: rgb(54, 54, 54) !important;
  --nav-item-background-active: hsla( 0, 0%, 55%, 0.12 ) !important;
  --nav-item-background-hover: hsla( 0, 0%, 55%, 0.12 ) !important;
  --nav-item-background-selected: rgba(136, 158, 170, 0.15) !important;
  --nav-item-color: hsl( 0, -20%, 60% ) !important;
  --nav-item-color-active: hsl( 0, -10%, 82% ) !important;
  --nav-item-color-highlighted: rgb(136, 158, 170) !important;
  --nav-item-color-hover: hsl( 0, -10%, 82% ) !important;
  --nav-item-color-selected: hsl( 0, -10%, 82% ) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: hsl( 0, -10%, 35% ) !important;
  --nav-tag-color-active: hsl( 0, -20%, 60% ) !important;
  --nav-tag-color-hover: hsl( 0, -20%, 60% ) !important;
  --nested-padding: 1.1em !important;
  --normal-weight: 400 !important;
  --p-spacing: 1.75rem !important;
  --pdf-background: rgb(38, 38, 38) !important;
  --pdf-dark-opacity: 1 !important;
  --pdf-page-background: rgb(38, 38, 38) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: rgb(38, 38, 38) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: rgb(54, 54, 54) !important;
  --pill-border-color-hover: rgb(69, 69, 69) !important;
  --pill-color: hsl( 0, -20%, 60% ) !important;
  --pill-color-hover: hsl( 0, -10%, 82% ) !important;
  --pill-color-remove: hsl( 0, -10%, 35% ) !important;
  --pill-color-remove-hover: rgb(136, 158, 170) !important;
  --progress-complete: rgb(136, 158, 170) !important;
  --progress-outline: rgb(54, 54, 54) !important;
  --prompt-background: rgb(38, 38, 38) !important;
  --prompt-border-color: rgb(89, 89, 89) !important;
  --quote-opening-modifier: rgb(69, 69, 69) !important;
  --raised-background: color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent) linear-gradient(hsla( 0, 0%, 55%, 0.12 ), color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent)) !important;
  --ribbon-animation-duration: 0.1s !important;
  --ribbon-background: rgb(33, 33, 33) !important;
  --ribbon-background-collapsed: rgb(38, 38, 38) !important;
  --scrollbar-active-thumb-bg: rgb(89, 89, 89) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: rgb(54, 54, 54) !important;
  --search-clear-button-color: hsl( 0, -20%, 60% ) !important;
  --search-icon-color: hsl( 0, -20%, 60% ) !important;
  --search-result-background: rgb(38, 38, 38) !important;
  --secondary: rgb(136, 158, 170) !important;
  --setting-group-heading-color: hsl( 0, -10%, 82% ) !important;
  --setting-items-background: rgb(33, 33, 33) !important;
  --setting-items-border-color: rgb(54, 54, 54) !important;
  --shadow-color: rgba(0, 0, 0, 0.3) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: rgb(69, 69, 69) !important;
  --slider-track-background: rgb(54, 54, 54) !important;
  --sp1: white !important;
  --status-bar-background: rgb(33, 33, 33) !important;
  --status-bar-border-color: rgb(54, 54, 54) !important;
  --status-bar-font-size: 11px !important;
  --status-bar-text-color: hsl( 0, -20%, 60% ) !important;
  --suggestion-background: rgb(38, 38, 38) !important;
  --sync-avatar-color-1: #d04255 !important;
  --sync-avatar-color-2: #d5763f !important;
  --sync-avatar-color-3: #e5b567 !important;
  --sync-avatar-color-4: #a8c373 !important;
  --sync-avatar-color-5: #73bbb2 !important;
  --sync-avatar-color-6: #6c99bb !important;
  --sync-avatar-color-7: #9e86c8 !important;
  --sync-avatar-color-8: #b05279 !important;
  --tab-background-active: rgb(38, 38, 38) !important;
  --tab-container-background: rgb(33, 33, 33) !important;
  --tab-divider-color: rgb(69, 69, 69) !important;
  --tab-outline-color: rgb(54, 54, 54) !important;
  --tab-switcher-background: rgb(33, 33, 33) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 33, 33), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(136, 158, 170) !important;
  --tab-text-color: hsl( 0, -10%, 35% ) !important;
  --tab-text-color-active: hsl( 0, -20%, 60% ) !important;
  --tab-text-color-focused: hsl( 0, -20%, 60% ) !important;
  --tab-text-color-focused-active: hsl( 0, -10%, 82% ) !important;
  --tab-text-color-focused-active-current: hsl( 0, -10%, 82% ) !important;
  --tab-text-color-focused-highlighted: rgb(136, 158, 170) !important;
  --table-add-button-border-color: rgb(54, 54, 54) !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: rgb(54, 54, 54) !important;
  --table-cell-padding: 4px 10px !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: hsla( 201, 50%, 40%, 30% ) !important;
  --table-drag-handle-color: hsl( 0, -10%, 35% ) !important;
  --table-drag-handle-color-active: rgb(136, 158, 170) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-edge-cell-padding-first: 0 !important;
  --table-edge-cell-padding-last: 0 !important;
  --table-header-border-color: rgb(54, 54, 54) !important;
  --table-header-border-width: 0 !important;
  --table-header-color: hsl( 0, -10%, 82% ) !important;
  --table-header-size: 14px !important;
  --table-header-weight: 600 !important;
  --table-max-width: none !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: hsla( 201, 50%, 40%, 30% ) !important;
  --table-selection-border-color: rgb(136, 158, 170) !important;
  --table-selection-border-radius: 0px !important;
  --table-selection-border-width: 0px !important;
  --table-text-size: 14px !important;
  --table-white-space: normal !important;
  --table-width: auto !important;
  --table-wrapper-width: fit-content !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: rgb(54, 54, 54) !important;
  --tag-border-color-hover: rgb(69, 69, 69) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl( 0, -20%, 60% ) !important;
  --tag-color-hover: hsl( 0, -10%, 82% ) !important;
  --tag-padding-y: 0.2em !important;
  --tag-size: 0.8em !important;
  --tertiary: rgb(160, 178, 187) !important;
  --text-accent: rgb(136, 158, 170) !important;
  --text-accent-hover: rgb(160, 178, 187) !important;
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
  --titlebar-background: rgb(38, 38, 38) !important;
  --titlebar-background-focused: rgb(33, 33, 33) !important;
  --titlebar-border-color: rgb(54, 54, 54) !important;
  --titlebar-text-color: hsl( 0, -20%, 60% ) !important;
  --titlebar-text-color-focused: hsl( 0, -10%, 82% ) !important;
  --top-left-padding-y: 0px !important;
  --tx1: hsl( 0, -10%, 82% ) !important;
  --tx2: hsl( 0, -20%, 60% ) !important;
  --tx3: hsl( 0, -10%, 35% ) !important;
  --tx4: hsl( 0, -10%, 65% ) !important;
  --ui1: rgb(54, 54, 54) !important;
  --ui2: rgb(69, 69, 69) !important;
  --ui3: rgb(89, 89, 89) !important;
  --vault-profile-color: hsl( 0, -10%, 82% ) !important;
  --vault-profile-color-hover: hsl( 0, -10%, 82% ) !important;
  --workspace-background-translucent: rgba(38, 38, 38, 0.7) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 177, 80, 0.3);
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body del {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: line-through rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(136, 158, 170);
  outline: rgb(136, 158, 170) none 0px;
  text-decoration: rgb(136, 158, 170);
  text-decoration-color: rgb(136, 158, 170);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 158, 170);
  outline: rgb(136, 158, 170) none 0px;
  text-decoration: rgb(136, 158, 170);
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
  text-decoration: rgb(89, 89, 89);
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
  border-left-color: rgb(121, 146, 160);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body input[type=checkbox] {
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
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 89, 89);
  text-decoration: line-through 1px rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
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
  text-decoration: rgb(209, 209, 209);
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
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(140, 140, 140, 0.12);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
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
  text-decoration: rgb(89, 89, 89);
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
  text-decoration: rgb(153, 153, 153);
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
  text-decoration: rgb(153, 153, 153);
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
  text-decoration: underline dotted rgb(209, 209, 209);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 201 !important;
  --accent-l: 50% !important;
  --accent-s: 17% !important;
  --active-line-bg: rgba(0, 0, 0, 0.035) !important;
  --adaptive-list-edit-offset: 0.5em !important;
  --ax1: rgb(106, 134, 149) !important;
  --ax2: rgb(89, 113, 125) !important;
  --ax3: rgb(124, 149, 162) !important;
  --background-modifier-accent: rgb(124, 149, 162) !important;
  --background-modifier-active-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --background-modifier-border: rgb(230, 230, 230) !important;
  --background-modifier-border-focus: rgb(194, 194, 194) !important;
  --background-modifier-border-hover: rgb(214, 214, 214) !important;
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
  --background-primary-alt: rgb(245, 245, 245) !important;
  --background-secondary: rgb(245, 245, 245) !important;
  --background-secondary-alt: white !important;
  --background-table-rows: rgb(245, 245, 245) !important;
  --base-h: 0 !important;
  --base-l: 96% !important;
  --base-s: 0% !important;
  --bases-cards-background: white !important;
  --bases-cards-cover-background: rgb(245, 245, 245) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(230, 230, 230) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(214, 214, 214) !important;
  --bases-embed-border-color: rgb(230, 230, 230) !important;
  --bases-group-heading-property-color: hsl( 0, -20%, 46% ) !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-header-border-width: 0 !important;
  --bases-table-border-color: rgb(230, 230, 230) !important;
  --bases-table-cell-background-active: white !important;
  --bases-table-cell-background-disabled: rgb(245, 245, 245) !important;
  --bases-table-cell-background-selected: hsla( 201, 50%, 76%, 30% ) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(194, 194, 194) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(124, 149, 162) !important;
  --bases-table-column-border-width: 0px !important;
  --bases-table-font-size: 14px !important;
  --bases-table-group-background: rgb(245, 245, 245) !important;
  --bases-table-header-background: white !important;
  --bases-table-header-background-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --bases-table-header-color: hsl( 0, -20%, 46% ) !important;
  --bases-table-summary-background: white !important;
  --bases-table-summary-background-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --bg1: white !important;
  --bg2: rgb(245, 245, 245) !important;
  --bg3: hsla( 0, 0%, 46%, 0.12 ) !important;
  --blockquote-border-color: rgb(214, 214, 214) !important;
  --blockquote-border-thickness: 1px !important;
  --blockquote-color: hsl( 0, -20%, 46% ) !important;
  --blockquote-style: normal !important;
  --blur-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --bold-weight: 600 !important;
  --btn-shadow-color: rgba(0, 0, 0, 0.05) !important;
  --calendar-dot-active: hsl( 0, -10%, 71% ) !important;
  --calendar-dot-today: rgb(106, 134, 149) !important;
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
  --callout-title-weight: 600;
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
  --canvas-dot-pattern: rgb(214, 214, 214) !important;
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
  --caret-color: rgb(15, 15, 15) !important;
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
  --checkbox-color: rgb(124, 149, 162) !important;
  --checkbox-color-hover: rgb(106, 134, 149) !important;
  --checkbox-left: 0px !important;
  --checkbox-margin: 0px 6px 0px -2em !important;
  --checkbox-marker-color: white !important;
  --checkbox-radius: 50% !important;
  --checkbox-top: 2px !important;
  --checklist-done-color: rgb(15, 15, 15) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(245, 245, 245) !important;
  --code-border-color: rgb(230, 230, 230) !important;
  --code-bracket-background: hsla( 0, 0%, 46%, 0.12 ) !important;
  --code-comment: hsl( 0, -10%, 71% ) !important;
  --code-function: #e5b567 !important;
  --code-important: #d5763f !important;
  --code-keyword: #b05279 !important;
  --code-normal: rgb(15, 15, 15) !important;
  --code-operator: #d04255 !important;
  --code-property: #73bbb2 !important;
  --code-punctuation: hsl( 0, -20%, 46% ) !important;
  --code-string: #a8c373 !important;
  --code-tag: #d04255 !important;
  --code-value: #9e86c8 !important;
  --collapse-icon-color: hsl( 0, -10%, 71% ) !important;
  --collapse-icon-color-collapsed: rgb(106, 134, 149) !important;
  --color-accent: rgb(106, 134, 149) !important;
  --color-accent-1: rgb(118, 144, 158) !important;
  --color-accent-2: rgb(130, 155, 166) !important;
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
  --dark: rgb(15, 15, 15) !important;
  --darkgray: rgb(15, 15, 15) !important;
  --divider-color: rgb(230, 230, 230) !important;
  --divider-color-hover: rgb(124, 149, 162) !important;
  --dropdown-background: white !important;
  --dropdown-background-hover: rgb(230, 230, 230) !important;
  --embed-block-shadow-hover: none !important;
  --embed-border-start: 2px solid rgb(124, 149, 162) !important;
  --embed-decoration-color: rgb(214, 214, 214) !important;
  --embed-decoration-style: solid !important;
  --embed-max-height: none !important;
  --file-header-background: white !important;
  --file-header-background-focused: white !important;
  --file-margins: 8px 32px !important;
  --file-margins-y: 8px !important;
  --flair-background: white !important;
  --flair-color: rgb(15, 15, 15) !important;
  --focus-animation-duration: 0.1s !important;
  --folding-offset: 32px !important;
  --font-adaptive-normal: 16px !important;
  --font-adaptive-small: 13.91px !important;
  --font-adaptive-smaller: 13px !important;
  --font-adaptive-smallest: 11px !important;
  --font-code: 14.4px !important;
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: rgb(230, 230, 230) !important;
  --footnote-id-color: hsl( 0, -20%, 46% ) !important;
  --footnote-id-color-no-occurrences: hsl( 0, -10%, 71% ) !important;
  --footnote-input-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --frame-background: rgb(195, 207, 213) !important;
  --frame-background-h: 201 !important;
  --frame-background-l: 80% !important;
  --frame-background-s: 17% !important;
  --frame-divider-color: rgb(230, 230, 230) !important;
  --frame-icon-color: rgb(107, 117, 123) !important;
  --frame-muted-color: rgb(107, 117, 123) !important;
  --frame-outline-color: hsla( 201, 17%, 74%, 1 ) !important;
  --graph-node: hsl( 0, -20%, 46% ) !important;
  --graph-node-attachment: #e5b567 !important;
  --graph-node-focused: rgb(106, 134, 149) !important;
  --graph-node-tag: #a8c373 !important;
  --graph-node-unresolved: hsl( 0, -10%, 71% ) !important;
  --graph-text: rgb(15, 15, 15) !important;
  --gray: hsl( 0, -20%, 46% ) !important;
  --h1-size: 1.125em !important;
  --h1-weight: 600 !important;
  --h1l: rgb(230, 230, 230) !important;
  --h2-size: 1.05em !important;
  --h2-weight: 600 !important;
  --h2l: rgb(230, 230, 230) !important;
  --h3-size: 1em !important;
  --h3-weight: 500 !important;
  --h3l: rgb(230, 230, 230) !important;
  --h4-size: 0.90em !important;
  --h4-weight: 500 !important;
  --h4l: rgb(230, 230, 230) !important;
  --h5-size: 0.85em !important;
  --h5-variant: small-caps !important;
  --h5-weight: 500 !important;
  --h5l: rgb(230, 230, 230) !important;
  --h6-size: 0.85em !important;
  --h6-variant: small-caps !important;
  --h6-weight: 400 !important;
  --h6l: rgb(230, 230, 230) !important;
  --heading-formatting: hsl( 0, -10%, 71% ) !important;
  --heading-spacing: 2em !important;
  --hider-ribbon-display: none !important;
  --highlight: rgba(255, 225, 0, 0.5) !important;
  --hl1: hsla( 201, 50%, 76%, 30% ) !important;
  --hl2: rgba(255, 225, 0, 0.5) !important;
  --hr-color: rgb(230, 230, 230) !important;
  --icon-color: hsl( 0, -20%, 46% ) !important;
  --icon-color-active: rgb(15, 15, 15) !important;
  --icon-color-focused: rgb(15, 15, 15) !important;
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
  --interactive-accent: rgb(124, 149, 162) !important;
  --interactive-accent-hover: rgb(106, 134, 149) !important;
  --interactive-accent-hsl: 201, 17%, 50% !important;
  --interactive-accent-rgb: 220,220,220 !important;
  --interactive-hover: rgb(230, 230, 230) !important;
  --interactive-normal: white !important;
  --leaflet-borders: rgba(0, 0, 0, 0.1) !important;
  --leaflet-buttons: white !important;
  --light: white !important;
  --lightgray: rgb(245, 245, 245) !important;
  --line-height: 1.5 !important;
  --line-number-color: hsl( 0, -10%, 71% ) !important;
  --line-number-color-active: hsl( 0, -20%, 46% ) !important;
  --line-width: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: rgb(106, 134, 149) !important;
  --link-color-hover: rgb(89, 113, 125) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(106, 134, 149) !important;
  --link-external-color-hover: rgb(89, 113, 125) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(106, 134, 149) !important;
  --link-unresolved-decoration-color: rgba(106, 134, 149, 0.3) !important;
  --list-edit-offset: 0.5em !important;
  --list-indent: 2em !important;
  --list-marker-color: hsl( 0, -10%, 71% ) !important;
  --list-marker-color-collapsed: rgb(106, 134, 149) !important;
  --list-marker-color-hover: hsl( 0, -20%, 46% ) !important;
  --map-header-padding: 2px !important;
  --map-max-width: none !important;
  --map-width: auto !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: rgb(245, 245, 245) !important;
  --menu-border-color: rgb(214, 214, 214) !important;
  --metadata-border-color: rgb(230, 230, 230) !important;
  --metadata-divider-color: rgb(230, 230, 230) !important;
  --metadata-input-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --metadata-input-font-size: 13.91px !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: rgb(15, 15, 15) !important;
  --metadata-label-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --metadata-label-font-size: 13.91px !important;
  --metadata-label-text-color: hsl( 0, -20%, 46% ) !important;
  --metadata-label-text-color-hover: hsl( 0, -20%, 46% ) !important;
  --metadata-label-width: 125.19px !important;
  --metadata-label-width-multiplier: 9 !important;
  --metadata-property-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(194, 194, 194) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(214, 214, 214) !important;
  --minimal-tab-text-color: hsl( 0, -20%, 46% ) !important;
  --minimal-tab-text-color-active: rgb(15, 15, 15) !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --mobile-sidebar-background: white !important;
  --modal-background: white !important;
  --mono0: white !important;
  --mono100: black !important;
  --nav-collapse-icon-color: hsl( 0, -20%, 46% ) !important;
  --nav-collapse-icon-color-collapsed: hsl( 0, -20%, 46% ) !important;
  --nav-heading-color: rgb(15, 15, 15) !important;
  --nav-heading-color-collapsed: hsl( 0, -10%, 71% ) !important;
  --nav-heading-color-collapsed-hover: hsl( 0, -20%, 46% ) !important;
  --nav-heading-color-hover: rgb(15, 15, 15) !important;
  --nav-indentation-guide-color: rgb(230, 230, 230) !important;
  --nav-item-background-active: hsla( 0, 0%, 46%, 0.12 ) !important;
  --nav-item-background-hover: hsla( 0, 0%, 46%, 0.12 ) !important;
  --nav-item-background-selected: rgba(106, 134, 149, 0.15) !important;
  --nav-item-color: hsl( 0, -20%, 46% ) !important;
  --nav-item-color-active: rgb(15, 15, 15) !important;
  --nav-item-color-highlighted: rgb(106, 134, 149) !important;
  --nav-item-color-hover: rgb(15, 15, 15) !important;
  --nav-item-color-selected: rgb(15, 15, 15) !important;
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
  --pill-border-color: rgb(230, 230, 230) !important;
  --pill-border-color-hover: rgb(214, 214, 214) !important;
  --pill-color: hsl( 0, -20%, 46% ) !important;
  --pill-color-hover: rgb(15, 15, 15) !important;
  --pill-color-remove: hsl( 0, -10%, 71% ) !important;
  --pill-color-remove-hover: rgb(106, 134, 149) !important;
  --progress-complete: rgb(106, 134, 149) !important;
  --progress-outline: rgb(230, 230, 230) !important;
  --prompt-background: white !important;
  --prompt-border-color: rgb(194, 194, 194) !important;
  --quote-opening-modifier: rgb(214, 214, 214) !important;
  --raised-background: color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)) !important;
  --ribbon-animation-duration: 0.1s !important;
  --ribbon-background: rgb(245, 245, 245) !important;
  --ribbon-background-collapsed: white !important;
  --scrollbar-active-thumb-bg: rgb(194, 194, 194) !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-thumb-bg: rgb(230, 230, 230) !important;
  --search-clear-button-color: hsl( 0, -20%, 46% ) !important;
  --search-icon-color: hsl( 0, -20%, 46% ) !important;
  --search-result-background: white !important;
  --secondary: rgb(106, 134, 149) !important;
  --setting-group-heading-color: rgb(15, 15, 15) !important;
  --setting-items-background: rgb(245, 245, 245) !important;
  --setting-items-border-color: rgb(230, 230, 230) !important;
  --shadow-color: rgba(0, 0, 0, 0.1) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: rgb(214, 214, 214) !important;
  --slider-track-background: rgb(230, 230, 230) !important;
  --sp1: white !important;
  --status-bar-background: rgb(245, 245, 245) !important;
  --status-bar-border-color: rgb(230, 230, 230) !important;
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
  --tab-container-background: rgb(245, 245, 245) !important;
  --tab-divider-color: rgb(214, 214, 214) !important;
  --tab-outline-color: rgb(230, 230, 230) !important;
  --tab-switcher-background: rgb(245, 245, 245) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 245, 245), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(106, 134, 149) !important;
  --tab-text-color: hsl( 0, -10%, 71% ) !important;
  --tab-text-color-active: hsl( 0, -20%, 46% ) !important;
  --tab-text-color-focused: hsl( 0, -20%, 46% ) !important;
  --tab-text-color-focused-active: rgb(15, 15, 15) !important;
  --tab-text-color-focused-active-current: rgb(15, 15, 15) !important;
  --tab-text-color-focused-highlighted: rgb(106, 134, 149) !important;
  --table-add-button-border-color: rgb(230, 230, 230) !important;
  --table-add-button-border-width: 0px !important;
  --table-border-color: rgb(230, 230, 230) !important;
  --table-cell-padding: 4px 10px !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-drag-handle-background-active: hsla( 201, 50%, 76%, 30% ) !important;
  --table-drag-handle-color: hsl( 0, -10%, 71% ) !important;
  --table-drag-handle-color-active: rgb(106, 134, 149) !important;
  --table-drag-padding: 16px !important;
  --table-drag-space: 16px !important;
  --table-edge-cell-padding-first: 0 !important;
  --table-edge-cell-padding-last: 0 !important;
  --table-header-border-color: rgb(230, 230, 230) !important;
  --table-header-border-width: 0 !important;
  --table-header-color: rgb(15, 15, 15) !important;
  --table-header-size: 14px !important;
  --table-header-weight: 600 !important;
  --table-max-width: none !important;
  --table-row-last-border-width: 0 !important;
  --table-selection: hsla( 201, 50%, 76%, 30% ) !important;
  --table-selection-border-color: rgb(106, 134, 149) !important;
  --table-selection-border-radius: 0px !important;
  --table-selection-border-width: 0px !important;
  --table-text-size: 14px !important;
  --table-white-space: normal !important;
  --table-width: auto !important;
  --table-wrapper-width: fit-content !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-border-color: rgb(230, 230, 230) !important;
  --tag-border-color-hover: rgb(214, 214, 214) !important;
  --tag-border-width: 1px !important;
  --tag-color: hsl( 0, -20%, 46% ) !important;
  --tag-color-hover: rgb(15, 15, 15) !important;
  --tag-padding-y: 0.2em !important;
  --tag-size: 0.8em !important;
  --tertiary: rgb(89, 113, 125) !important;
  --text-accent: rgb(106, 134, 149) !important;
  --text-accent-hover: rgb(89, 113, 125) !important;
  --text-blockquote: hsl( 0, -20%, 46% ) !important;
  --text-bold: rgb(15, 15, 15) !important;
  --text-code: hsl( 0, -10%, 36% ) !important;
  --text-error: #d04255 !important;
  --text-faint: hsl( 0, -10%, 71% ) !important;
  --text-formatting: hsl( 0, -10%, 71% ) !important;
  --text-highlight-bg: rgba(255, 225, 0, 0.5) !important;
  --text-highlight-bg-active: rgba(0, 0, 0, 0.1) !important;
  --text-italic: rgb(15, 15, 15) !important;
  --text-muted: hsl( 0, -20%, 46% ) !important;
  --text-normal: rgb(15, 15, 15) !important;
  --text-selection: hsla( 201, 50%, 76%, 30% ) !important;
  --text-success: #a8c373 !important;
  --text-warning: #d5763f !important;
  --textHighlight: rgba(255, 225, 0, 0.5) !important;
  --title-color: rgb(15, 15, 15) !important;
  --title-color-inactive: hsl( 0, -20%, 46% ) !important;
  --titlebar-background: white !important;
  --titlebar-background-focused: rgb(245, 245, 245) !important;
  --titlebar-border-color: rgb(230, 230, 230) !important;
  --titlebar-text-color: hsl( 0, -20%, 46% ) !important;
  --titlebar-text-color-focused: rgb(15, 15, 15) !important;
  --top-left-padding-y: 0px !important;
  --tx1: rgb(15, 15, 15) !important;
  --tx2: hsl( 0, -20%, 46% ) !important;
  --tx3: hsl( 0, -10%, 71% ) !important;
  --tx4: hsl( 0, -10%, 36% ) !important;
  --ui1: rgb(230, 230, 230) !important;
  --ui2: rgb(214, 214, 214) !important;
  --ui3: rgb(194, 194, 194) !important;
  --vault-profile-color: rgb(15, 15, 15) !important;
  --vault-profile-color-hover: rgb(15, 15, 15) !important;
  --workspace-background-translucent: rgba(245, 245, 245, 0.7) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 225, 0, 0.5);
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body del {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration: line-through rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body p {
  color: rgb(117, 117, 117);
  outline: rgb(117, 117, 117) none 0px;
  text-decoration: rgb(117, 117, 117);
  text-decoration-color: rgb(117, 117, 117);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(106, 134, 149);
  outline: rgb(106, 134, 149) none 0px;
  text-decoration: rgb(106, 134, 149);
  text-decoration-color: rgb(106, 134, 149);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(106, 134, 149);
  outline: rgb(106, 134, 149) none 0px;
  text-decoration: rgb(106, 134, 149);
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
  text-decoration: rgb(181, 181, 181);
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
  border-left-color: rgb(124, 149, 162);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body input[type=checkbox] {
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
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(181, 181, 181);
  text-decoration: line-through 1px rgb(181, 181, 181);
  text-decoration-color: rgb(181, 181, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(15, 15, 15);
  text-decoration: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
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
  text-decoration: rgb(15, 15, 15);
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
  text-decoration: rgb(117, 117, 117);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(117, 117, 117, 0.12);
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
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
  text-decoration: rgb(181, 181, 181);
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
  text-decoration: rgb(117, 117, 117);
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
  text-decoration: rgb(117, 117, 117);
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
  text-decoration: underline dotted rgb(15, 15, 15);
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
}`,
  },
};
