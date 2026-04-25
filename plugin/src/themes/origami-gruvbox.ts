import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "origami.gruvbox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Fraunces",
        style: "normal",
        weight: "100 900",
        file: "fraunces.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Monaspace",
        style: "normal",
        weight: "100 900",
        file: "monaspace.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Aspekta",
        style: "normal",
        weight: "100 1000",
        file: "aspekta.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Instrument",
        style: "normal",
        weight: "100 1000",
        file: "instrument.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Instrument",
        style: "italic",
        weight: "100 1000",
        file: "instrument-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Lexend",
        style: "normal",
        weight: "500",
        file: "lexend.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IAWriter",
        style: "normal",
        weight: "500",
        file: "iawriter.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "IAWriter",
        style: "italic",
        weight: "500",
        file: "iawriter-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Satoshi",
        style: "normal",
        weight: "500",
        file: "satoshi.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Satoshi",
        style: "italic",
        weight: "500",
        file: "satoshi-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Chillax",
        style: "normal",
        weight: "500",
        file: "chillax.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Uncut",
        style: "normal",
        weight: "500",
        file: "uncut.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Overused Grotesk",
        style: "normal",
        weight: "500",
        file: "overused-grotesk.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Nightingale",
        style: "normal",
        weight: "300",
        file: "nightingale.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "DobbinTextSF-Roman",
        style: "normal",
        weight: "100 900",
        file: "dobbintextsf-roman.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0 !important;
  --accent-l: 62% !important;
  --accent-s: 92% !important;
  --ancestor-editor-color: #EBDBB2 !important;
  --aside-background: transparent !important;
  --aside-background-hover: rgba(255, 255, 255, 0.075) !important;
  --aside-border-color: #423c39 !important;
  --aside-text-color: #D5C4A1 !important;
  --background-modifier-active-hover: hsla(0, 92%, 62%, 0.15) !important;
  --background-modifier-border: #423c39 !important;
  --background-modifier-border-focus: #7C6F64 !important;
  --background-modifier-border-hover: #665C54 !important;
  --background-modifier-error: #CC241D !important;
  --background-modifier-error-hover: #CC241D !important;
  --background-modifier-error-rgb: 204, 36, 29 !important;
  --background-modifier-form-field: #3C3836 !important;
  --background-modifier-form-field-hover: #3C3836 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-modifier-success: #98971A !important;
  --background-modifier-success-rgb: 152, 151, 26 !important;
  --background-primary: #282828 !important;
  --background-primary-alt: #1D2021 !important;
  --background-primary-pre-alt: #232627 !important;
  --background-secondary: #32302F !important;
  --background-secondary-alt: #423c39 !important;
  --background-transparent: #55555599 !important;
  --bases-cards-background: #282828 !important;
  --bases-cards-cover-background: #1D2021 !important;
  --bases-cards-shadow: 0 0 0 1px #423c39 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #665C54 !important;
  --bases-embed-border-color: #423c39 !important;
  --bases-group-heading-property-color: #D5C4A1 !important;
  --bases-table-border-color: #423c39 !important;
  --bases-table-cell-background-active: #282828 !important;
  --bases-table-cell-background-disabled: #1D2021 !important;
  --bases-table-cell-background-selected: hsla(0, 92%, 62%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #7C6F64 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(0, 92%, 62%) !important;
  --bases-table-group-background: #1D2021 !important;
  --bases-table-header-background: #282828 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #D5C4A1 !important;
  --bases-table-summary-background: #282828 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bb-border: 1px solid #423c39 !important;
  --bb-border-alt: 1px solid #3C3836 !important;
  --bb-border-dashed: 1px dashed #423c39 !important;
  --bb-border-high-contrast: 1px solid #D5C4A1 !important;
  --bb-border-transparent: 1px solid transparent !important;
  --bb-shadow: -33px 24px 64px -8px hsla(0, 92%, 62%, 0.1), 33px 12px 64px -8px hsla(-175, 96.6%, 79.98%, 0.1) !important;
  --blockquote-border-color: hsl(0, 92%, 62%) !important;
  --blur-background: color-mix(in srgb, #423c39 65%, transparent) linear-gradient(#423c39, color-mix(in srgb, #423c39 65%, transparent)) !important;
  --bodyFont: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-bug: 204, 36, 29;
  --callout-cite: 87, 61, 132;
  --callout-default: 69, 133, 136;
  --callout-error: 204, 36, 29;
  --callout-example: 177, 98, 134;
  --callout-fail: 204, 36, 29;
  --callout-important: 104, 157, 106;
  --callout-info: 69, 133, 136;
  --callout-question: 104, 157, 106;
  --callout-success: 152, 151, 26;
  --callout-summary: 104, 157, 106;
  --callout-tip: 104, 157, 106;
  --callout-todo: 69, 133, 136;
  --callout-warning: 104, 157, 106;
  --canvas-background: #282828 !important;
  --canvas-card-label-color: #BDAE93 !important;
  --canvas-color-1: 204, 36, 29 !important;
  --canvas-color-2: 104, 157, 106 !important;
  --canvas-color-3: 215, 153, 33 !important;
  --canvas-color-4: 152, 151, 26 !important;
  --canvas-color-5: 104, 157, 106 !important;
  --canvas-color-6: 177, 98, 134 !important;
  --canvas-dot-pattern: #BDAE93 !important;
  --caret-color: #EBDBB2 !important;
  --checkbox-border-color: #BDAE93 !important;
  --checkbox-border-color-hover: #D5C4A1 !important;
  --checkbox-color: hsl(0, 92%, 62%) !important;
  --checkbox-color-hover: hsl(-3, 93.84%, 71.3%) !important;
  --checkbox-marker-color: #282828 !important;
  --checklist-done-color: #D5C4A1 !important;
  --code-background: #1D2021 !important;
  --code-border-color: #423c39 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #BDAE93 !important;
  --code-function: #D79921 !important;
  --code-important: #D65D0E !important;
  --code-keyword: #EB6FAF !important;
  --code-normal: #D5C4A1 !important;
  --code-operator: #CC241D !important;
  --code-property: #689D6A !important;
  --code-punctuation: #D5C4A1 !important;
  --code-string: #98971A !important;
  --code-tag: #CC241D !important;
  --code-value: #B16286 !important;
  --codeFont: "Monaspace", monospace !important;
  --collapse-icon-color: #BDAE93 !important;
  --collapse-icon-color-collapsed: hsl(0, 92%, 62%) !important;
  --color-accent: hsl(0, 92%, 62%) !important;
  --color-accent-1: hsl(-3, 93.84%, 71.3%) !important;
  --color-accent-2: hsl(-5, 96.6%, 79.98%) !important;
  --color-accent-3: hsl(-175,
        142.6%,
        79.98%) !important;
  --color-accent-hsl: 0, 92%, 62% !important;
  --color-accent-rgb: 204, 36, 29 !important;
  --color-base-00: #282828 !important;
  --color-base-05: #232627 !important;
  --color-base-10: #1D2021 !important;
  --color-base-100: #FBF1C7 !important;
  --color-base-20: #32302F !important;
  --color-base-25: #3C3836 !important;
  --color-base-30: #423c39 !important;
  --color-base-35: #665C54 !important;
  --color-base-40: #7C6F64 !important;
  --color-base-50: #BDAE93 !important;
  --color-base-60: #D5C4A1 !important;
  --color-base-70: #EBDBB2 !important;
  --color-blue: #458588 !important;
  --color-blue-hsl: 182.7, 32.7%, 40.2% !important;
  --color-blue-rgb: 69, 133, 136 !important;
  --color-cyan: #689D6A !important;
  --color-cyan-hsl: 122.3, 21.3%, 51.2% !important;
  --color-cyan-rgb: 104, 157, 106 !important;
  --color-green: #98971A !important;
  --color-green-hsl: 59.5, 70.8%, 34.9% !important;
  --color-green-rgb: 152, 151, 26 !important;
  --color-orange: #D65D0E !important;
  --color-orange-hsl: 23.7, 87.7%, 44.7% !important;
  --color-orange-rgb: 104, 157, 106 !important;
  --color-pink: #EB6FAF !important;
  --color-pink-hsl: 329, 75.6%, 67.8% !important;
  --color-pink-rgb: 251, 94, 216, 1 !important;
  --color-purple: #B16286 !important;
  --color-purple-hsl: 332.7, 33.6%, 53.9% !important;
  --color-purple-rgb: 177, 98, 134 !important;
  --color-red: #CC241D !important;
  --color-red-hsl: 2.4, 75.1%, 45.7% !important;
  --color-red-rgb: 204, 36, 29 !important;
  --color-yellow: #D79921 !important;
  --color-yellow-hsl: 39.6, 73.4%, 48.6% !important;
  --color-yellow-rgb: 215, 153, 33 !important;
  --dark: #EBDBB2 !important;
  --darkgray: #EBDBB2 !important;
  --divider-color: #423c39 !important;
  --divider-color-hover: hsl(0, 92%, 62%) !important;
  --dropdown-background: #423c39 !important;
  --dropdown-background-hover: #665C54 !important;
  --embed-block-shadow-hover: 0 0 0 1px #423c39,
        inset 0 0 0 1px #423c39 !important;
  --embed-border-start: 2px solid hsl(0, 92%, 62%) !important;
  --file-header-background: #282828 !important;
  --file-header-background-focused: #282828 !important;
  --file-header-font: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 14px !important;
  --file-margins: 32px !important;
  --flair-background: #423c39 !important;
  --flair-color: #EBDBB2 !important;
  --font-interface: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Aspekta", sans-serif !important;
  --font-monospace: "Monaspace", monospace !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --footnote-divider-color: #423c39 !important;
  --footnote-id-color: #D5C4A1 !important;
  --footnote-id-color-no-occurrences: #BDAE93 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-line: #665C54 !important;
  --graph-node: #D5C4A1 !important;
  --graph-node-attachment: hsl(-3, 93.84%, 71.3%) !important;
  --graph-node-focused: #7C6F64 !important;
  --graph-node-tag: hsl(0, 92%, 62%) !important;
  --graph-node-unresolved: #BDAE93 !important;
  --graph-text: #EBDBB2 !important;
  --gray: #D5C4A1 !important;
  --h1-color: #FBF1C7 !important;
  --h1-size: 3.5em !important;
  --h1-weight: 900 !important;
  --h2-size: 1.842em !important;
  --h2-weight: 800 !important;
  --h3-size: 1.3572em !important;
  --h3-weight: 700 !important;
  --h4-size: 1.250em !important;
  --h4-weight: 600 !important;
  --h5-size: 1em !important;
  --h5-weight: 600 !important;
  --h6-size: 0.7368em !important;
  --h6-weight: 500 !important;
  --headerFont: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #BDAE93 !important;
  --highlight: rgba(255, 255, 255, 0.075) !important;
  --hr-color: #423c39 !important;
  --icon-color: #D5C4A1 !important;
  --icon-color-active: hsl(0, 92%, 62%) !important;
  --icon-color-focused: #EBDBB2 !important;
  --icon-color-hover: #D5C4A1 !important;
  --inline-title-color: #FBF1C7 !important;
  --inline-title-size: clamp(2.5rem, 8vw - 4rem, 5rem) !important;
  --inline-title-weight: 900 !important;
  --input-date-separator: #BDAE93 !important;
  --input-placeholder-color: #BDAE93 !important;
  --interactive-accent: hsl(0, 92%, 62%) !important;
  --interactive-accent-hover: hsl(-3, 93.84%, 71.3%) !important;
  --interactive-accent-hsl: 0, 92%, 62% !important;
  --interactive-hover: #665C54 !important;
  --interactive-normal: #423c39 !important;
  --light: #282828 !important;
  --lightgray: #32302F !important;
  --link-color: hsl(0, 92%, 62%) !important;
  --link-color-hover: hsl(-5, 96.6%, 79.98%) !important;
  --link-external-color: hsl(0, 92%, 62%) !important;
  --link-external-color-hover: hsl(-5, 96.6%, 79.98%) !important;
  --link-unresolved-color: hsl(0, 92%, 62%) !important;
  --link-unresolved-decoration-color: hsla(0, 92%, 62%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #BDAE93 !important;
  --list-marker-color-collapsed: hsl(0, 92%, 62%) !important;
  --list-marker-color-hover: #D5C4A1 !important;
  --menu-background: #32302F !important;
  --menu-border-color: #665C54 !important;
  --menu-shadow: 0px 10px 21px 13px rgba(0, 0, 0, 0.1) !important;
  --metadata-border-color: #423c39 !important;
  --metadata-divider-color: #423c39 !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #EBDBB2 !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #D5C4A1 !important;
  --metadata-label-text-color-hover: #D5C4A1 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #7C6F64 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #665C54 !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #282828 !important;
  --modal-border-color: #7C6F64 !important;
  --nav-collapse-icon-color: #BDAE93 !important;
  --nav-collapse-icon-color-collapsed: #BDAE93 !important;
  --nav-heading-color: #EBDBB2 !important;
  --nav-heading-color-collapsed: #BDAE93 !important;
  --nav-heading-color-collapsed-hover: #D5C4A1 !important;
  --nav-heading-color-hover: #EBDBB2 !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(0, 92%, 62%, 0.15) !important;
  --nav-item-color: #D5C4A1 !important;
  --nav-item-color-active: #EBDBB2 !important;
  --nav-item-color-highlighted: hsl(0, 92%, 62%) !important;
  --nav-item-color-hover: #EBDBB2 !important;
  --nav-item-color-selected: #EBDBB2 !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #BDAE93 !important;
  --nav-tag-color-active: #D5C4A1 !important;
  --nav-tag-color-hover: #D5C4A1 !important;
  --o-h1-color: #423c39 !important;
  --o-h2-color: #423c39 !important;
  --o-h3-color: #423c39 !important;
  --o-h4-color: #423c39 !important;
  --o-h5-color: #423c39 !important;
  --o-h6-color: #423c39 !important;
  --pdf-background: #282828 !important;
  --pdf-page-background: #282828 !important;
  --pdf-shadow: 0 0 0 1px #423c39 !important;
  --pdf-sidebar-background: #282828 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #423c39 !important;
  --pill-border-color: #423c39 !important;
  --pill-border-color-hover: #665C54 !important;
  --pill-color: #D5C4A1 !important;
  --pill-color-hover: #EBDBB2 !important;
  --pill-color-remove: #BDAE93 !important;
  --pill-color-remove-hover: hsl(0, 92%, 62%) !important;
  --prompt-background: #282828 !important;
  --prompt-border-color: #7C6F64 !important;
  --raised-background: color-mix(in srgb, #423c39 65%, transparent) linear-gradient(#423c39, color-mix(in srgb, #423c39 65%, transparent)) !important;
  --ribbon-background: #32302F !important;
  --ribbon-background-collapsed: #282828 !important;
  --scrollbar-active-thumb-bg: hsla(0, 92%, 62%, 0.2) !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.05) !important;
  --search-clear-button-color: #D5C4A1 !important;
  --search-icon-color: #D5C4A1 !important;
  --search-result-background: #282828 !important;
  --secondary: hsl(0, 92%, 62%) !important;
  --setting-group-heading-color: #EBDBB2 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #1D2021 !important;
  --setting-items-border-color: #423c39 !important;
  --shadow-l: rgb(0 0 0 / 20%) 0px 8px 24px !important;
  --shadow-lm-only: none !important;
  --shadow-s: 0px 10px 21px 13px rgba(0, 0, 0, 0.1) !important;
  --slider-thumb-border-color: #665C54 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #423c39 !important;
  --status-bar-background: #32302F !important;
  --status-bar-border-color: #423c39 !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #D5C4A1 !important;
  --suggestion-background: #282828 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #CC241D !important;
  --sync-avatar-color-2: #D65D0E !important;
  --sync-avatar-color-3: #D79921 !important;
  --sync-avatar-color-4: #98971A !important;
  --sync-avatar-color-5: #689D6A !important;
  --sync-avatar-color-6: #458588 !important;
  --sync-avatar-color-7: #B16286 !important;
  --sync-avatar-color-8: #EB6FAF !important;
  --tab-background-active: #282828 !important;
  --tab-container-background: #32302F !important;
  --tab-divider-color: #665C54 !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: #423c39 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: #32302F !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #32302F, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 92%, 62%) !important;
  --tab-text-color: #BDAE93 !important;
  --tab-text-color-active: #D5C4A1 !important;
  --tab-text-color-focused: #D5C4A1 !important;
  --tab-text-color-focused-active: #D5C4A1 !important;
  --tab-text-color-focused-active-current: #EBDBB2 !important;
  --tab-text-color-focused-highlighted: hsl(0, 92%, 62%) !important;
  --table-add-button-border-color: #423c39 !important;
  --table-border-color: #423c39 !important;
  --table-drag-handle-background-active: hsl(0, 92%, 62%) !important;
  --table-drag-handle-color: #BDAE93 !important;
  --table-drag-handle-color-active: #FBF1C7 !important;
  --table-header-border-color: #423c39 !important;
  --table-header-color: #EBDBB2 !important;
  --table-selection: hsla(0, 92%, 62%, 0.1) !important;
  --table-selection-border-color: hsl(0, 92%, 62%) !important;
  --tag-background: hsla(0, 92%, 62%, 0.1) !important;
  --tag-background-hover: hsla(0, 92%, 62%, 0.2) !important;
  --tag-border-color: hsla(0, 92%, 62%, 0.15) !important;
  --tag-border-color-hover: hsla(0, 92%, 62%, 0.15) !important;
  --tag-color: hsl(0, 92%, 62%) !important;
  --tag-color-hover: hsl(0, 92%, 62%) !important;
  --tertiary: hsl(-5, 96.6%, 79.98%) !important;
  --text-accent: hsl(0, 92%, 62%) !important;
  --text-accent-hover: hsl(-5, 96.6%, 79.98%) !important;
  --text-cite: 87, 161, 132 !important;
  --text-error: #CC241D !important;
  --text-faint: #BDAE93 !important;
  --text-muted: #D5C4A1 !important;
  --text-normal: #EBDBB2 !important;
  --text-on-accent: #FBF1C7 !important;
  --text-on-button: #282828 !important;
  --text-selection: hsla(0, 92%, 62%, 0.33) !important;
  --text-success: #98971A !important;
  --text-warning: #D65D0E !important;
  --textHighlight: rgba(255, 255, 255, 0.075) !important;
  --titleFont: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #32302F !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: #423c39 !important;
  --titlebar-text-color: #D5C4A1 !important;
  --titlebar-text-color-focused: #EBDBB2 !important;
  --transition-duration: 700ms !important;
  --transition-duration-short: 350ms !important;
  --transition-ease: ease !important;
  --transition-props: background 700ms, 
                        border 700ms, 
                        color 700ms !important;
  --vault-name-color: #EBDBB2 !important;
  --vault-name-font-size: 14px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #EBDBB2 !important;
  --vault-profile-color-hover: #EBDBB2 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(66, 60, 57);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(235, 219, 178);
  box-shadow: rgb(235, 219, 178) 0px 0px 0px 4px;
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(50, 48, 47);
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(66, 60, 57);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(213, 196, 161);
  font-weight: 500;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(247, 69, 69, 0.1);
  color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(66, 60, 57);
  border-right-style: dashed;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(66, 60, 57);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(251, 241, 199);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(251, 241, 199);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(251, 241, 199);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(251, 241, 199);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(204, 36, 29, 0.2);
  color: rgb(247, 69, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(247, 69, 69) none 0px;
  text-decoration-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body del {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(235, 219, 178);
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(66, 60, 57);
  border-color: rgb(60, 56, 54);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: rgb(213, 196, 161);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(247, 69, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 69, 69) none 0px;
  text-decoration-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(247, 69, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(247, 69, 69) none 0px;
  text-decoration-color: rgb(247, 69, 69);
  transition: 0.7s;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(213, 196, 161);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
  transition: 0.7s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body dt {
  color: rgb(235, 219, 178);
  font-weight: 500;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(189, 174, 147);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(50, 48, 47);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body table {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.109px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(66, 60, 57);
  border-left-color: rgb(66, 60, 57);
  border-right-color: rgb(66, 60, 57);
  border-top-color: rgb(66, 60, 57);
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  font-weight: 500;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(66, 60, 57);
  border-left-color: rgb(66, 60, 57);
  border-right-color: rgb(66, 60, 57);
  border-top-color: rgb(66, 60, 57);
  border-top-left-radius: 8px;
  color: rgb(235, 219, 178);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(247, 69, 69);
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(247, 69, 69);
  font-family: Monaspace, monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(215, 153, 33);
  border-left-color: rgb(215, 153, 33);
  border-right-color: rgb(215, 153, 33);
  border-top-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(251, 241, 199);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 241, 199);
  border-radius: 12px;
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  transition: 0.3s;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(189, 174, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(189, 174, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(189, 174, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(214, 93, 14);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 69, 69);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 104, 157, 106;
  background: rgba(104, 157, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(104, 157, 106, 0.1);
  border-bottom-color: rgb(104, 157, 106);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(104, 157, 106);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(104, 157, 106);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(104, 157, 106);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(104, 157, 106);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 204, 36, 29;
  background: rgba(204, 36, 29, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(204, 36, 29, 0.1);
  border-bottom-color: rgb(204, 36, 29);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 36, 29);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(204, 36, 29);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(204, 36, 29);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 204, 36, 29;
  background: rgba(204, 36, 29, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(204, 36, 29, 0.1);
  border-bottom-color: rgb(204, 36, 29);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 36, 29);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(204, 36, 29);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(204, 36, 29);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 177, 98, 134;
  background: rgba(177, 98, 134, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(177, 98, 134, 0.1);
  border-bottom-color: rgb(177, 98, 134);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(177, 98, 134);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(177, 98, 134);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(177, 98, 134);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 204, 36, 29;
  background: rgba(204, 36, 29, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(204, 36, 29, 0.1);
  border-bottom-color: rgb(204, 36, 29);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(204, 36, 29);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(204, 36, 29);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(204, 36, 29);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 69, 133, 136;
  background: rgba(69, 133, 136, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(69, 133, 136, 0.1);
  border-bottom-color: rgb(69, 133, 136);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 133, 136);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(69, 133, 136);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(69, 133, 136);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 69, 133, 136;
  background: rgba(69, 133, 136, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(69, 133, 136, 0.1);
  border-bottom-color: rgb(69, 133, 136);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 133, 136);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(69, 133, 136);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(69, 133, 136);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 104, 157, 106;
  background: rgba(104, 157, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(104, 157, 106, 0.1);
  border-bottom-color: rgb(104, 157, 106);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(104, 157, 106);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(104, 157, 106);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(104, 157, 106);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(104, 157, 106);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(158, 158, 158);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 152, 151, 26;
  background: rgba(152, 151, 26, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(152, 151, 26, 0.1);
  border-bottom-color: rgb(152, 151, 26);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(152, 151, 26);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(152, 151, 26);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(152, 151, 26);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 104, 157, 106;
  background: rgba(104, 157, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(104, 157, 106, 0.1);
  border-bottom-color: rgb(104, 157, 106);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(104, 157, 106);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(104, 157, 106);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(104, 157, 106);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(104, 157, 106);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 69, 133, 136;
  background: rgba(69, 133, 136, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(69, 133, 136, 0.1);
  border-bottom-color: rgb(69, 133, 136);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 133, 136);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(69, 133, 136);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(69, 133, 136);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 104, 157, 106;
  background: rgba(104, 157, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(104, 157, 106, 0.1);
  border-bottom-color: rgb(104, 157, 106);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(104, 157, 106);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(104, 157, 106);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(104, 157, 106);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(104, 157, 106);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(69, 133, 136);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(69, 133, 136);
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
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(66, 60, 57);
  border-left-color: rgb(66, 60, 57);
  border-right-color: rgb(66, 60, 57);
  border-top-color: rgb(66, 60, 57);
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(35, 38, 39);
  border-bottom-color: rgb(66, 60, 57);
  border-left-color: rgb(66, 60, 57);
  border-right-color: rgb(66, 60, 57);
  border-top-color: rgb(66, 60, 57);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(60, 56, 54);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(60, 56, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(60, 56, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(60, 56, 54);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(50, 48, 47);
  color: rgb(235, 219, 178);
  font-weight: 500;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(66, 60, 57);
  border-left-color: rgb(66, 60, 57);
  border-right-color: rgb(66, 60, 57);
  border-top-color: rgb(66, 60, 57);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(66, 60, 57);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(66, 60, 57);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(66, 60, 57);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(66, 60, 57);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(60, 56, 54);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(60, 56, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(60, 56, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(60, 56, 54);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(50, 48, 47);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgba(247, 69, 69, 0.15);
  border-left-color: rgba(247, 69, 69, 0.15);
  border-right-color: rgba(247, 69, 69, 0.15);
  border-top-color: rgba(247, 69, 69, 0.15);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(247, 69, 69);
}

html[saved-theme="dark"] body h1 {
  color: rgb(251, 241, 199);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(251, 241, 199);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h3 {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h4 {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h5 {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body h6 {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(66, 60, 57);
  border-left-color: rgb(66, 60, 57);
  border-right-color: rgb(66, 60, 57);
  border-right-style: dashed;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 69, 133, 136;
  border-bottom-color: rgb(69, 133, 136);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 133, 136);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(69, 133, 136);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(69, 133, 136);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(235, 219, 178);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(235, 219, 178);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(60, 56, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-right-width: 1px;
  border-top-color: rgb(60, 56, 54);
  border-top-right-radius: 8px;
  color: rgb(213, 196, 161);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(213, 196, 161);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(235, 219, 178);
  stroke: rgb(235, 219, 178);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(189, 174, 147);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(66, 60, 57);
  border-left-color: rgb(66, 60, 57);
  border-right-color: rgb(66, 60, 57);
  border-top-color: rgb(66, 60, 57);
  color: rgb(213, 196, 161);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(50, 48, 47);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(247, 69, 69);
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(247, 69, 69);
  border-top-color: rgb(247, 69, 69);
  color: rgb(247, 69, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(247, 69, 69);
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(247, 69, 69);
  font-family: Monaspace, monospace;
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body sub {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body summary {
  color: rgb(235, 219, 178);
  font-weight: 500;
}

html[saved-theme="dark"] body sup {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgba(247, 69, 69, 0.15);
  border-left-color: rgba(247, 69, 69, 0.15);
  border-right-color: rgba(247, 69, 69, 0.15);
  border-top-color: rgba(247, 69, 69, 0.15);
  color: rgb(247, 69, 69);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 5 !important;
  --accent-l: 56% !important;
  --accent-s: 90% !important;
  --ancestor-editor-color: #3C3836 !important;
  --aside-background: transparent !important;
  --aside-background-hover: rgba(0, 0, 0, 0.075) !important;
  --aside-border-color: #BDAE93 !important;
  --aside-text-color: #504945 !important;
  --background-modifier-active-hover: hsla(5, 90%, 56%, 0.15) !important;
  --background-modifier-border: #BDAE93 !important;
  --background-modifier-border-focus: #f7ebc4 !important;
  --background-modifier-border-hover: #eee2bc !important;
  --background-modifier-error: #9D0006 !important;
  --background-modifier-error-hover: #9D0006 !important;
  --background-modifier-error-rgb: 157, 0, 6 !important;
  --background-modifier-form-field: #FBF1C7 !important;
  --background-modifier-form-field-hover: #FBF1C7 !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.075) !important;
  --background-modifier-success: #79740E !important;
  --background-modifier-success-rgb: 121, 116, 14 !important;
  --background-primary: #FBF1C7 !important;
  --background-primary-alt: #e4d7ae !important;
  --background-primary-pre-alt: #eee2bc !important;
  --background-scondary-alt: #504945 !important;
  --background-secondary: #EBDBB2 !important;
  --background-secondary-alt: #eee2bc !important;
  --bases-cards-background: #FBF1C7 !important;
  --bases-cards-cover-background: #e4d7ae !important;
  --bases-cards-shadow: 0 0 0 1px #BDAE93 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #eee2bc !important;
  --bases-embed-border-color: #BDAE93 !important;
  --bases-group-heading-property-color: #504945 !important;
  --bases-table-border-color: #BDAE93 !important;
  --bases-table-cell-background-active: #FBF1C7 !important;
  --bases-table-cell-background-disabled: #e4d7ae !important;
  --bases-table-cell-background-selected: hsla(5, 90%, 56%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #f7ebc4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(4, 90.9%, 60.2%) !important;
  --bases-table-group-background: #e4d7ae !important;
  --bases-table-header-background: #FBF1C7 !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bases-table-header-color: #504945 !important;
  --bases-table-summary-background: #FBF1C7 !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075) !important;
  --bb-border: 1px solid #BDAE93 !important;
  --bb-border-alt: 1px solid #D5C4A1 !important;
  --bb-border-dashed: 1px dashed #BDAE93 !important;
  --bb-border-high-contrast: 1px solid #504945 !important;
  --bb-border-transparent: 1px solid transparent !important;
  --bb-shadow: -33px 24px 64px -8px hsla(5, 90%, 56%, 0.1), 33px 12px 64px -8px hsla(-170, 94.5%, 72.24%, 0.1) !important;
  --blockquote-border-color: hsl(4, 90.9%, 60.2%) !important;
  --blur-background: color-mix(in srgb, #FBF1C7 65%, transparent) linear-gradient(#FBF1C7, color-mix(in srgb, #FBF1C7 65%, transparent)) !important;
  --bodyFont: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-bug: 157, 0, 6;
  --callout-cite: 87, 61, 132;
  --callout-default: 143, 63, 113;
  --callout-error: 157, 0, 6;
  --callout-example: 143, 63, 113;
  --callout-fail: 157, 0, 6;
  --callout-important: 66, 123, 88;
  --callout-info: 143, 63, 113;
  --callout-question: 175, 58, 3;
  --callout-success: 121, 116, 14;
  --callout-summary: 66, 123, 88;
  --callout-tip: 66, 123, 88;
  --callout-todo: 143, 63, 113;
  --callout-warning: 175, 58, 3;
  --canvas-background: #FBF1C7 !important;
  --canvas-card-label-color: #665C54 !important;
  --canvas-color: 20, 20, 20 !important;
  --canvas-color-1: 157, 0, 6 !important;
  --canvas-color-2: 175, 58, 3 !important;
  --canvas-color-3: 181, 118, 20 !important;
  --canvas-color-4: 121, 116, 14 !important;
  --canvas-color-5: 66, 123, 88 !important;
  --canvas-color-6: 143, 63, 113 !important;
  --canvas-dot-pattern: #665C54 !important;
  --caret-color: #3C3836 !important;
  --checkbox-border-color: #665C54 !important;
  --checkbox-border-color-hover: #504945 !important;
  --checkbox-color: hsl(4, 90.9%, 60.2%) !important;
  --checkbox-color-hover: hsl(2, 91.8%, 64.4%) !important;
  --checkbox-marker-color: #FBF1C7 !important;
  --checklist-done-color: #504945 !important;
  --code-background: #e4d7ae !important;
  --code-border-color: #BDAE93 !important;
  --code-bracket-background: rgba(0, 0, 0, 0.075) !important;
  --code-comment: #665C54 !important;
  --code-function: #B57614 !important;
  --code-important: #AF3A03 !important;
  --code-keyword: #F6B7D8 !important;
  --code-normal: #504945 !important;
  --code-operator: #9D0006 !important;
  --code-property: #427B58 !important;
  --code-punctuation: #504945 !important;
  --code-string: #79740E !important;
  --code-tag: #9D0006 !important;
  --code-value: #8F3F71 !important;
  --codeFont: "Monaspace", monospace !important;
  --collapse-icon-color: #665C54 !important;
  --collapse-icon-color-collapsed: hsl(5, 90%, 56%) !important;
  --color-accent: hsl(5, 90%, 56%) !important;
  --color-accent-1: hsl(4, 90.9%, 60.2%) !important;
  --color-accent-2: hsl(2, 91.8%, 64.4%) !important;
  --color-accent-3: hsl(-170,
        139.5%,
        72.24%) !important;
  --color-accent-hsl: 5, 90%, 56% !important;
  --color-accent-rgb: 157, 0, 6 !important;
  --color-base-00: #FBF1C7 !important;
  --color-base-05: #eee2bc !important;
  --color-base-10: #e4d7ae !important;
  --color-base-100: #282828 !important;
  --color-base-20: #EBDBB2 !important;
  --color-base-25: #D5C4A1 !important;
  --color-base-30: #BDAE93 !important;
  --color-base-35: #eee2bc !important;
  --color-base-40: #f7ebc4 !important;
  --color-base-50: #665C54 !important;
  --color-base-60: #504945 !important;
  --color-base-70: #3C3836 !important;
  --color-blue: #076678 !important;
  --color-blue-hsl: 189.6, 89%, 24.9% !important;
  --color-blue-rgb: 143, 63, 113 !important;
  --color-cyan: #427B58 !important;
  --color-cyan-hsl: 143.2, 30.2%, 37.1% !important;
  --color-cyan-rgb: 66, 123, 88 !important;
  --color-green: #79740E !important;
  --color-green-hsl: 57.2, 79.3%, 26.5% !important;
  --color-green-rgb: 121, 116, 14 !important;
  --color-orange: #AF3A03 !important;
  --color-orange-hsl: 19.2, 96.6%, 34.9% !important;
  --color-orange-rgb: 175, 58, 3 !important;
  --color-pink: #F6B7D8 !important;
  --color-pink-hsl: 328.6, 77.8%, 84.1% !important;
  --color-pink-rgb: 251, 94, 216, 1 !important;
  --color-purple: #8F3F71 !important;
  --color-purple-hsl: 322.5, 38.8%, 40.4% !important;
  --color-purple-rgb: 143, 63, 113 !important;
  --color-red: #9D0006 !important;
  --color-red-hsl: 357.7, 100%, 30.8% !important;
  --color-red-rgb: 157, 0, 6 !important;
  --color-yellow: #B57614 !important;
  --color-yellow-hsl: 36.5, 80.1%, 39.4% !important;
  --color-yellow-rgb: 181, 118, 20 !important;
  --dark: #3C3836 !important;
  --darkgray: #3C3836 !important;
  --divider-color: #BDAE93 !important;
  --divider-color-hover: hsl(4, 90.9%, 60.2%) !important;
  --dropdown-background: #FBF1C7 !important;
  --dropdown-background-hover: #e4d7ae !important;
  --embed-block-shadow-hover: 0 0 0 1px #BDAE93,
        inset 0 0 0 1px #BDAE93 !important;
  --embed-border-start: 2px solid hsl(4, 90.9%, 60.2%) !important;
  --file-header-background: #FBF1C7 !important;
  --file-header-background-focused: #FBF1C7 !important;
  --file-header-font: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 14px !important;
  --file-margins: 32px !important;
  --flair-background: #FBF1C7 !important;
  --flair-color: #3C3836 !important;
  --font-interface: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Aspekta", sans-serif !important;
  --font-monospace: "Monaspace", monospace !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --footnote-divider-color: #BDAE93 !important;
  --footnote-id-color: #504945 !important;
  --footnote-id-color-no-occurrences: #665C54 !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --graph-line: #eee2bc !important;
  --graph-node: #504945 !important;
  --graph-node-attachment: hsl(4, 90.9%, 60.2%) !important;
  --graph-node-focused: #f7ebc4 !important;
  --graph-node-tag: hsl(5, 90%, 56%) !important;
  --graph-node-unresolved: #665C54 !important;
  --graph-text: #3C3836 !important;
  --gray: #504945 !important;
  --h1-color: #282828 !important;
  --h1-size: 3.5em !important;
  --h1-weight: 900 !important;
  --h2-size: 1.842em !important;
  --h2-weight: 800 !important;
  --h3-size: 1.3572em !important;
  --h3-weight: 700 !important;
  --h4-size: 1.250em !important;
  --h4-weight: 600 !important;
  --h5-size: 1em !important;
  --h5-weight: 600 !important;
  --h6-size: 0.7368em !important;
  --h6-weight: 500 !important;
  --headerFont: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #665C54 !important;
  --highlight: rgba(0, 0, 0, 0.075) !important;
  --hr-color: #BDAE93 !important;
  --icon-color: #504945 !important;
  --icon-color-active: hsl(5, 90%, 56%) !important;
  --icon-color-focused: #3C3836 !important;
  --icon-color-hover: #504945 !important;
  --inline-title-color: #282828 !important;
  --inline-title-size: clamp(2.5rem, 8vw - 4rem, 5rem) !important;
  --inline-title-weight: 900 !important;
  --input-date-separator: #665C54 !important;
  --input-placeholder-color: #665C54 !important;
  --interactive-accent: hsl(4, 90.9%, 60.2%) !important;
  --interactive-accent-hover: hsl(2, 91.8%, 64.4%) !important;
  --interactive-accent-hsl: 5, 90%, 56% !important;
  --interactive-hover: #e4d7ae !important;
  --interactive-normal: #FBF1C7 !important;
  --light: #FBF1C7 !important;
  --lightgray: #EBDBB2 !important;
  --link-color: hsl(5, 90%, 56%) !important;
  --link-color-hover: hsl(2, 91.8%, 64.4%) !important;
  --link-external-color: hsl(5, 90%, 56%) !important;
  --link-external-color-hover: hsl(2, 91.8%, 64.4%) !important;
  --link-unresolved-color: hsl(5, 90%, 56%) !important;
  --link-unresolved-decoration-color: hsla(5, 90%, 56%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #665C54 !important;
  --list-marker-color-collapsed: hsl(5, 90%, 56%) !important;
  --list-marker-color-hover: #504945 !important;
  --menu-background: #EBDBB2 !important;
  --menu-border-color: #eee2bc !important;
  --menu-shadow: rgb(0 0 0 / 4%) 0px 3px 5px !important;
  --metadata-border-color: #BDAE93 !important;
  --metadata-divider-color: #BDAE93 !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-input-font: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #3C3836 !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-label-font: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #504945 !important;
  --metadata-label-text-color-hover: #504945 !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #f7ebc4 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #eee2bc !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: #FBF1C7 !important;
  --modal-border-color: #f7ebc4 !important;
  --nav-collapse-icon-color: #665C54 !important;
  --nav-collapse-icon-color-collapsed: #665C54 !important;
  --nav-heading-color: #3C3836 !important;
  --nav-heading-color-collapsed: #665C54 !important;
  --nav-heading-color-collapsed-hover: #504945 !important;
  --nav-heading-color-hover: #3C3836 !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.075) !important;
  --nav-item-background-selected: hsla(5, 90%, 56%, 0.15) !important;
  --nav-item-color: #504945 !important;
  --nav-item-color-active: #3C3836 !important;
  --nav-item-color-highlighted: hsl(5, 90%, 56%) !important;
  --nav-item-color-hover: #3C3836 !important;
  --nav-item-color-selected: #3C3836 !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #665C54 !important;
  --nav-tag-color-active: #504945 !important;
  --nav-tag-color-hover: #504945 !important;
  --o-h1-color: #BDAE93 !important;
  --o-h2-color: #BDAE93 !important;
  --o-h3-color: #BDAE93 !important;
  --o-h4-color: #BDAE93 !important;
  --o-h5-color: #BDAE93 !important;
  --o-h6-color: #BDAE93 !important;
  --pdf-background: #FBF1C7 !important;
  --pdf-page-background: #FBF1C7 !important;
  --pdf-sidebar-background: #FBF1C7 !important;
  --pill-border-color: #BDAE93 !important;
  --pill-border-color-hover: #eee2bc !important;
  --pill-color: #504945 !important;
  --pill-color-hover: #3C3836 !important;
  --pill-color-remove: #665C54 !important;
  --pill-color-remove-hover: hsl(5, 90%, 56%) !important;
  --prompt-background: #FBF1C7 !important;
  --prompt-border-color: #f7ebc4 !important;
  --raised-background: color-mix(in srgb, #FBF1C7 65%, transparent) linear-gradient(#FBF1C7, color-mix(in srgb, #FBF1C7 65%, transparent)) !important;
  --ribbon-background: #EBDBB2 !important;
  --ribbon-background-collapsed: #FBF1C7 !important;
  --scrollbar-active-thumb-bg: hsla(5, 90%, 56%, 0.2) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.05) !important;
  --search-clear-button-color: #504945 !important;
  --search-icon-color: #504945 !important;
  --search-result-background: #FBF1C7 !important;
  --secondary: hsl(5, 90%, 56%) !important;
  --setting-group-heading-color: #3C3836 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #e4d7ae !important;
  --setting-items-border-color: #BDAE93 !important;
  --shadow-l: rgb(149 157 165 / 20%) 0px 8px 24px !important;
  --shadow-lm-only: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px !important;
  --shadow-s: rgb(0 0 0 / 4%) 0px 3px 5px !important;
  --slider-thumb-border-color: #eee2bc !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #BDAE93 !important;
  --status-bar-background: #EBDBB2 !important;
  --status-bar-border-color: #BDAE93 !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #504945 !important;
  --suggestion-background: #FBF1C7 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #9D0006 !important;
  --sync-avatar-color-2: #AF3A03 !important;
  --sync-avatar-color-3: #B57614 !important;
  --sync-avatar-color-4: #79740E !important;
  --sync-avatar-color-5: #427B58 !important;
  --sync-avatar-color-6: #076678 !important;
  --sync-avatar-color-7: #8F3F71 !important;
  --sync-avatar-color-8: #F6B7D8 !important;
  --tab-background-active: #FBF1C7 !important;
  --tab-container-background: #EBDBB2 !important;
  --tab-divider-color: #eee2bc !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: #BDAE93 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: #EBDBB2 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #EBDBB2, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(5, 90%, 56%) !important;
  --tab-text-color: #665C54 !important;
  --tab-text-color-active: #504945 !important;
  --tab-text-color-focused: #504945 !important;
  --tab-text-color-focused-active: #504945 !important;
  --tab-text-color-focused-active-current: #3C3836 !important;
  --tab-text-color-focused-highlighted: hsl(5, 90%, 56%) !important;
  --table-add-button-border-color: #BDAE93 !important;
  --table-border-color: #BDAE93 !important;
  --table-drag-handle-background-active: hsl(4, 90.9%, 60.2%) !important;
  --table-drag-handle-color: #665C54 !important;
  --table-drag-handle-color-active: #282828 !important;
  --table-header-border-color: #BDAE93 !important;
  --table-header-color: #3C3836 !important;
  --table-selection: hsla(5, 90%, 56%, 0.1) !important;
  --table-selection-border-color: hsl(4, 90.9%, 60.2%) !important;
  --tag-background: hsla(5, 90%, 56%, 0.1) !important;
  --tag-background-hover: hsla(5, 90%, 56%, 0.2) !important;
  --tag-border-color: hsla(5, 90%, 56%, 0.15) !important;
  --tag-border-color-hover: hsla(5, 90%, 56%, 0.15) !important;
  --tag-color: hsl(5, 90%, 56%) !important;
  --tag-color-hover: hsl(5, 90%, 56%) !important;
  --tertiary: hsl(2, 91.8%, 64.4%) !important;
  --text-accent: hsl(5, 90%, 56%) !important;
  --text-accent-hover: hsl(2, 91.8%, 64.4%) !important;
  --text-cite: 87, 161, 132 !important;
  --text-error: #9D0006 !important;
  --text-faint: #665C54 !important;
  --text-muted: #504945 !important;
  --text-normal: #3C3836 !important;
  --text-on-accent: #282828 !important;
  --text-on-button: #FBF1C7 !important;
  --text-selection: hsla(5, 90%, 56%, 0.2) !important;
  --text-success: #79740E !important;
  --text-warning: #AF3A03 !important;
  --textHighlight: rgba(0, 0, 0, 0.075) !important;
  --titleFont: "Aspekta", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #EBDBB2 !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: #BDAE93 !important;
  --titlebar-text-color: #504945 !important;
  --titlebar-text-color-focused: #3C3836 !important;
  --transition-duration: 700ms !important;
  --transition-duration-short: 350ms !important;
  --transition-ease: ease !important;
  --transition-props: background 700ms, 
                        border 700ms, 
                        color 700ms !important;
  --vault-name-color: #3C3836 !important;
  --vault-name-font-size: 14px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #3C3836 !important;
  --vault-profile-color-hover: #3C3836 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(251, 241, 199);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(189, 174, 147);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(60, 56, 54);
  box-shadow: rgb(60, 56, 54) 0px 0px 0px 4px;
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(251, 241, 199);
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(189, 174, 147);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(80, 73, 69);
  font-weight: 500;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(244, 59, 42, 0.1);
  color: rgb(244, 59, 42);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(189, 174, 147);
  border-right-style: dashed;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(189, 174, 147);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(251, 241, 199);
  color: rgb(60, 56, 54);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(40, 40, 40);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(40, 40, 40);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(40, 40, 40);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(40, 40, 40);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(157, 0, 6, 0.2);
  color: rgb(244, 59, 42);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(244, 59, 42) none 0px;
  text-decoration-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body del {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(60, 56, 54);
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(189, 174, 147);
  border-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(80, 73, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(80, 73, 69) none 0px;
  text-decoration-color: rgb(80, 73, 69);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(244, 59, 42);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 59, 42) none 0px;
  text-decoration-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(244, 59, 42);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(244, 59, 42) none 0px;
  text-decoration-color: rgb(244, 59, 42);
  transition: 0.7s;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(80, 73, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(80, 73, 69) none 0px;
  text-decoration-color: rgb(80, 73, 69);
  transition: 0.7s;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body dt {
  color: rgb(60, 56, 54);
  font-weight: 500;
}

html[saved-theme="light"] body ol > li {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul > li {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(102, 92, 84);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(235, 219, 178);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body table {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.109px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
  border-top-width: 0px;
  color: rgb(60, 56, 54);
  font-weight: 500;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
  border-top-left-radius: 8px;
  color: rgb(60, 56, 54);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(244, 59, 42);
  border-right-color: rgb(244, 59, 42);
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(244, 59, 42);
  font-family: Monaspace, monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(181, 118, 20);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(181, 118, 20);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(181, 118, 20);
  border-left-color: rgb(181, 118, 20);
  border-right-color: rgb(181, 118, 20);
  border-top-color: rgb(181, 118, 20);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body figcaption {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(40, 40, 40);
  border-radius: 12px;
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(228, 215, 174);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(246, 74, 61);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  transition: 0.3s;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(102, 92, 84);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(102, 92, 84);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 0, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 0, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(7, 102, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 92, 84);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 118, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 118, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 63, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 58, 3);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 63, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 0, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 0, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 0, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 0, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(121, 116, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 118, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 118, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 63, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 0, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(121, 116, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(121, 116, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(121, 116, 14);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 0, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 59, 42);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 66, 123, 88;
  background: rgba(66, 123, 88, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(66, 123, 88, 0.1);
  border-bottom-color: rgb(66, 123, 88);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(66, 123, 88);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(66, 123, 88);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(66, 123, 88);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(66, 123, 88);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 157, 0, 6;
  background: rgba(157, 0, 6, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(157, 0, 6, 0.1);
  border-bottom-color: rgb(157, 0, 6);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(157, 0, 6);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(157, 0, 6);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(157, 0, 6);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(157, 0, 6);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 157, 0, 6;
  background: rgba(157, 0, 6, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(157, 0, 6, 0.1);
  border-bottom-color: rgb(157, 0, 6);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(157, 0, 6);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(157, 0, 6);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(157, 0, 6);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(157, 0, 6);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 143, 63, 113;
  background: rgba(143, 63, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(143, 63, 113, 0.1);
  border-bottom-color: rgb(143, 63, 113);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(143, 63, 113);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(143, 63, 113);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(143, 63, 113);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 157, 0, 6;
  background: rgba(157, 0, 6, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(157, 0, 6, 0.1);
  border-bottom-color: rgb(157, 0, 6);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(157, 0, 6);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(157, 0, 6);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(157, 0, 6);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(157, 0, 6);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 143, 63, 113;
  background: rgba(143, 63, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(143, 63, 113, 0.1);
  border-bottom-color: rgb(143, 63, 113);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(143, 63, 113);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(143, 63, 113);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(143, 63, 113);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 143, 63, 113;
  background: rgba(143, 63, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(143, 63, 113, 0.1);
  border-bottom-color: rgb(143, 63, 113);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(143, 63, 113);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(143, 63, 113);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(143, 63, 113);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 175, 58, 3;
  background: rgba(175, 58, 3, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(175, 58, 3, 0.1);
  border-bottom-color: rgb(175, 58, 3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(175, 58, 3);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(175, 58, 3);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(175, 58, 3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(175, 58, 3);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(158, 158, 158);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 121, 116, 14;
  background: rgba(121, 116, 14, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(121, 116, 14, 0.1);
  border-bottom-color: rgb(121, 116, 14);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(121, 116, 14);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(121, 116, 14);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(121, 116, 14);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(121, 116, 14);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 66, 123, 88;
  background: rgba(66, 123, 88, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(66, 123, 88, 0.1);
  border-bottom-color: rgb(66, 123, 88);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(66, 123, 88);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(66, 123, 88);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(66, 123, 88);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(66, 123, 88);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 143, 63, 113;
  background: rgba(143, 63, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(143, 63, 113, 0.1);
  border-bottom-color: rgb(143, 63, 113);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(143, 63, 113);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(143, 63, 113);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(143, 63, 113);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 175, 58, 3;
  background: rgba(175, 58, 3, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(175, 58, 3, 0.1);
  border-bottom-color: rgb(175, 58, 3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(175, 58, 3);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(175, 58, 3);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(175, 58, 3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
  color: rgb(175, 58, 3);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-left-color: rgb(143, 63, 113);
  border-right-color: rgb(143, 63, 113);
  border-top-color: rgb(143, 63, 113);
  color: rgb(143, 63, 113);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(143, 63, 113);
  font-weight: 700;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(143, 63, 113);
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
  background-color: rgb(251, 241, 199);
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(238, 226, 188);
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(213, 196, 161);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(213, 196, 161);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(213, 196, 161);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(213, 196, 161);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(235, 219, 178);
  color: rgb(60, 56, 54);
  font-weight: 500;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(251, 241, 199);
  border-bottom-color: rgb(189, 174, 147);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(189, 174, 147);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(189, 174, 147);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(189, 174, 147);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(213, 196, 161);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(213, 196, 161);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(213, 196, 161);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(235, 219, 178);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgba(244, 59, 42, 0.15);
  border-left-color: rgba(244, 59, 42, 0.15);
  border-right-color: rgba(244, 59, 42, 0.15);
  border-top-color: rgba(244, 59, 42, 0.15);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(244, 59, 42);
}

html[saved-theme="light"] body h1 {
  color: rgb(40, 40, 40);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h2 {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(40, 40, 40);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h3 {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h4 {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h5 {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body h6 {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-right-style: dashed;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 143, 63, 113;
  border-bottom-color: rgb(143, 63, 113);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(143, 63, 113);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(143, 63, 113);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(143, 63, 113);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(80, 73, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(80, 73, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(60, 56, 54);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(60, 56, 54);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-right-width: 1px;
  border-top-color: rgb(213, 196, 161);
  border-top-right-radius: 8px;
  color: rgb(80, 73, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(80, 73, 69);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(60, 56, 54);
  stroke: rgb(60, 56, 54);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(102, 92, 84);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
  color: rgb(80, 73, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(235, 219, 178);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(60, 56, 54);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(244, 59, 42);
  border-left-color: rgb(244, 59, 42);
  border-right-color: rgb(244, 59, 42);
  border-top-color: rgb(244, 59, 42);
  color: rgb(244, 59, 42);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(244, 59, 42);
  border-right-color: rgb(244, 59, 42);
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(244, 59, 42);
  font-family: Monaspace, monospace;
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body sub {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body summary {
  color: rgb(60, 56, 54);
  font-weight: 500;
}

html[saved-theme="light"] body sup {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgba(244, 59, 42, 0.15);
  border-left-color: rgba(244, 59, 42, 0.15);
  border-right-color: rgba(244, 59, 42, 0.15);
  border-top-color: rgba(244, 59, 42, 0.15);
  color: rgb(244, 59, 42);
}`,
  },
};
